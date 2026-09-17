"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  ["/selected-work", "Work"],
  ["/terra-systems", "Experiments"],
  ["/live-gallery", "Films & visuals"],
  ["/about", "About"],
];
export default function SiteHeader() {
  const path = usePathname();
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        Aishwarya Shukla<span>TerraSpace</span>
      </Link>
      <nav aria-label="Main navigation">
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <a className="header-contact" href="mailto:aeshu009@gmail.com">
        Get in touch <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
