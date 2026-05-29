import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 22 16" fill="none" width="20" height="14">
                  <path d="M1 1v14M1 1h6.5C9.5 1 11 2.8 11 4.5c0 1.5-1 2.7-2.5 3.1C10.2 8 11.2 9.5 11.2 11.2 11.2 13.4 9.5 15 7.2 15H1" stroke="#6DBF41" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                  <line x1="1" y1="8" x2="9.5" y2="8" stroke="#6DBF41" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M14 1v14M14 1l7 14V1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.logoName}>BNS <b>Prestige</b></div>
            </Link>
            <p>Location de voitures sportives à Bruxelles et alentours.</p>
            <div className={styles.soc}>
              <a href="https://instagram.com/bnsprestige" target="_blank" rel="noopener">IG</a>
              <a href="https://wa.me/32400000000" target="_blank" rel="noopener">WA</a>
              <a href="https://snapchat.com/add/bnsprestige" target="_blank" rel="noopener">SC</a>
            </div>
          </div>

          <div className={styles.col}>
            <h5>Pages</h5>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/voitures">Nos Voitures</Link></li>
              <li><Link href="/comment-ca-marche">Comment ça marche</Link></li>
              <li><Link href="/reserver">Réserver</Link></li>
              <li><Link href="/evenements">Événements</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h5>Flotte</h5>
            <ul>
              <li><Link href="/voitures#rs3">Audi RS3 — 350€/j</Link></li>
              <li><Link href="/voitures#golfr">Golf 8R — 280€/j</Link></li>
              <li><Link href="/voitures#a45s">A45s AMG — Bientôt</Link></li>
              <li><Link href="/voitures#m135i">BMW M135i — Bientôt</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h5>Contact</h5>
            <ul>
              <li><a href="https://wa.me/32400000000">WhatsApp</a></li>
              <li><a href="tel:+32400000000">+32 4XX XX XX XX</a></li>
              <li><a href="mailto:contact@bnsprestige.be">contact@bnsprestige.be</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 BNS Prestige. Tous droits réservés.</span>
          <div className={styles.links}>
            <Link href="/cgv">CGV</Link>
            <Link href="/cgv">RGPD</Link>
          </div>
          <span>Bruxelles &amp; alentours</span>
        </div>
      </div>

      <a className={styles.waFab} href="https://wa.me/32400000000?text=Bonjour%20BNS%20Prestige%20!" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.108.553 4.092 1.52 5.819L0 24l6.335-1.49C8.03 23.447 9.983 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.88 0-3.628-.507-5.135-1.39l-.369-.218-3.762.984.998-3.667-.24-.378A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
        </svg>
      </a>
    </footer>
  );
}
