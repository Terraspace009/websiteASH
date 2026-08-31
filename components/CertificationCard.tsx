"use client";

type CertificationCardProps = {
  title: string;
  org: string;
  href: string;
};

export default function CertificationCard({ title, org, href }: CertificationCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="card block p-4 text-center transition hover:border-purple-400/50"
    >
      <p className="font-medium text-lg">{title}</p>
      <p className="mt-2 text-sm text-white/70">{org}</p>
    </a>
  );
}
