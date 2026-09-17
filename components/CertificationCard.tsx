type Props = { title: string; org: string; href: string };
export default function CertificationCard({ title, org, href }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <h3>{title}</h3>
      <p>{org}</p>
    </a>
  );
}
