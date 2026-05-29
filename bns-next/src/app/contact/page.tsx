import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.tag}>Contact</div>
        <h1 className={styles.h1}>Parlons-nous.</h1>
        <p className={styles.sub}>Une question, une demande spéciale ? On vous répond en moins de 30 minutes via WhatsApp, 7j/7.</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.cards}>
          <a href="https://wa.me/32400000000?text=Bonjour%20BNS%20Prestige%20!" target="_blank" rel="noopener" className={styles.card}>
            <div className={styles.cardIcon} style={{background:"#25D366"}}>
              <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.108.553 4.092 1.52 5.819L0 24l6.335-1.49C8.03 23.447 9.983 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.88 0-3.628-.507-5.135-1.39l-.369-.218-3.762.984.998-3.667-.24-.378A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/></svg>
            </div>
            <div>
              <div className={styles.cardTitle}>WhatsApp</div>
              <div className={styles.cardSub}>Réponse en &lt;30 min · 7j/7 · 8h–22h</div>
            </div>
            <span className={styles.cardArrow}>→</span>
          </a>
          <a href="tel:+32400000000" className={styles.card}>
            <div className={styles.cardIcon}>📞</div>
            <div>
              <div className={styles.cardTitle}>Téléphone</div>
              <div className={styles.cardSub}>+32 4XX XX XX XX</div>
            </div>
            <span className={styles.cardArrow}>→</span>
          </a>
          <a href="mailto:contact@bnsprestige.be" className={styles.card}>
            <div className={styles.cardIcon}>✉️</div>
            <div>
              <div className={styles.cardTitle}>Email</div>
              <div className={styles.cardSub}>contact@bnsprestige.be</div>
            </div>
            <span className={styles.cardArrow}>→</span>
          </a>
          <div className={styles.card} style={{cursor:"default"}}>
            <div className={styles.cardIcon}>📍</div>
            <div>
              <div className={styles.cardTitle}>Zone de livraison</div>
              <div className={styles.cardSub}>Bruxelles et alentours (30 km)</div>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <h2 className={styles.formTitle}>Envoyer un message</h2>
          <div className={styles.row}>
            <div className={styles.field}><label>Prénom</label><input type="text" placeholder="Jean"/></div>
            <div className={styles.field}><label>Nom</label><input type="text" placeholder="Dupont"/></div>
          </div>
          <div className={styles.field}><label>Email</label><input type="email" placeholder="jean@exemple.be"/></div>
          <div className={styles.field}><label>Téléphone</label><input type="tel" placeholder="+32 4XX XX XX XX"/></div>
          <div className={styles.field}><label>Message</label><textarea rows={5} placeholder="Bonjour, je souhaite réserver..."/></div>
          <button type="submit" className={styles.submit}>Envoyer →</button>
        </form>
      </div>
    </div>
  );
}
