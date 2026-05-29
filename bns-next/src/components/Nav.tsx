"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/voitures", label: "Nos Voitures" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/evenements", label: "Événements" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${solid ? styles.solid : ""}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 22 16" fill="none" width="20" height="14">
              <path d="M1 1v14M1 1h6.5C9.5 1 11 2.8 11 4.5c0 1.5-1 2.7-2.5 3.1C10.2 8 11.2 9.5 11.2 11.2 11.2 13.4 9.5 15 7.2 15H1" stroke="#6DBF41" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
              <line x1="1" y1="8" x2="9.5" y2="8" stroke="#6DBF41" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M14 1v14M14 1l7 14V1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className={styles.logoName}>BNS <b>Prestige</b></div>
            <div className={styles.logoSub}>Location · Bruxelles</div>
          </div>
        </Link>

        <ul className={styles.navLinks}>
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={path === l.href ? styles.on : ""}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <Link href="/reserver" className={styles.navCta}>Réserver →</Link>
          <button className={styles.burger} onClick={() => setOpen(true)} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {open && (
        <div className={styles.mob}>
          <button className={styles.mobClose} onClick={() => setOpen(false)}>✕</button>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/reserver" onClick={() => setOpen(false)} style={{ color: "var(--g)" }}>Réserver →</Link>
        </div>
      )}
    </>
  );
}
