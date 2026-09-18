import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s make something thoughtful.</h2>
        <a className="contact-email" href="mailto:aeshu009@gmail.com">
          aeshu009@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="footer-links">
        <a
          href="https://github.com/Terraspace009"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/aeshwarya-shukla-90835b57/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://www.instagram.com/aeshy.terraspace/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>
        <a
          href="/Aishwarya_Shukla_Final_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Résumé ↗
        </a>
      </div>
      <div className="footer-bottom">
        <span>Aishwarya Shukla / TerraSpace</span>
        <Link href="/selected-work">AI, code & moving image</Link>
      </div>
    </footer>
  );
}
