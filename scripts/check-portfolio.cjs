const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const data = {};
new Function("exports", ts.transpile(
  fs.readFileSync(path.join(root, "app/portfolio-data.ts"), "utf8"),
  { module: ts.ModuleKind.CommonJS }
))(data);
const { galleryProjects, filmArchive, projectDetails, experimentSlugs, featuredSlugs } = data;
for (const key of ["slug", "href"]) {
  const values = galleryProjects.map(p => p[key]);
  assert.equal(new Set(values).size, values.length, "Duplicate project " + key);
}
for (const ids of [experimentSlugs, featuredSlugs]) {
  assert.equal(new Set(ids).size, ids.length, "Duplicate curated entry");
  ids.forEach(id => assert(galleryProjects.some(p => p.slug === id), "Unknown project " + id));
}
for (const p of galleryProjects) {
  assert(!["/", "/selected-work", "/terra-systems", "/live-gallery"].includes(p.href),
    p.title + " must link to a specific work, not a collection");
  if (p.media) {
    const src = p.media.type === "image" ? p.media.src : p.media.poster;
    if (src.startsWith("/")) assert(fs.existsSync(path.join(root, "public", src)), "Missing image " + src);
  }
  if (p.href.startsWith("/projects/")) {
    const slug = p.href.split("/").pop();
    assert(projectDetails[slug] || fs.existsSync(path.join(root, "app/projects", slug, "page.tsx")), "Missing project page " + p.href);
  }
}
assert.equal(new Set(filmArchive.map(f => f.youtubeId)).size, filmArchive.length, "Duplicate film");
for (const film of filmArchive) {
  const p = galleryProjects.find(p => p.slug === film.slug);
  assert(p, "Missing canonical film " + film.title);
  assert.equal(p.title, film.title);
  assert.equal(p.media.src, "https://i.ytimg.com/vi/" + film.youtubeId + "/hqdefault.jpg");
  if (p.external) assert.equal(p.href, "https://www.youtube.com/watch?v=" + film.youtubeId);
}
const source = fs.readFileSync(path.join(root, "app/portfolio-data.ts"), "utf8");
assert(!source.includes("github.com/Terraspace009/Terra1"), "Unrelated repository returned");
assert(!source.includes("aeshwarya-portfolio.vercel.app"), "Old portfolio mislabeled as project");
for (const filename of ["components/SiteFooter.tsx", "components/Contact.tsx"]) {
  assert(!/mailto:|tel:|linkedin\.com|instagram\.com|Final_CV\.pdf/i.test(fs.readFileSync(path.join(root, filename), "utf8")), "Private contact details must not be published");
}
assert(!fs.existsSync(path.join(root, "public/Aishwarya_Shukla_Final_CV.pdf")), "Private resume must not be publicly served");
console.log(galleryProjects.length + " unique projects; " + filmArchive.length + " films; canonical destinations, media and curated lists passed.");
