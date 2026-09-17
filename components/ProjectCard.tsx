import Image from "next/image";
export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
};
export default function ProjectCard({
  title,
  description,
  image,
  demoLink,
}: ProjectCardProps) {
  return (
    <article className="work-card">
      <div className="work-media">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {demoLink && (
        <a
          className="text-link"
          href={demoLink}
          target="_blank"
          rel="noreferrer"
        >
          Open project ↗
        </a>
      )}
    </article>
  );
}
