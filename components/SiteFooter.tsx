import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <p className="eyebrow">Explore</p>
        <h2>Let’s make something thoughtful.</h2>
        <Link className="contact-email" href="/selected-work">
          Selected work <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="footer-links">
        <a
          href="https://github.com/Terraspace009"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>
      <div className="footer-bottom">
        <span>Aishwarya Shukla / TerraSpace</span>
        <Link href="/selected-work">AI, code & moving image</Link>
      </div>
    </footer>
  );
}
