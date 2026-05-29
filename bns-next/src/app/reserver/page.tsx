import styles from "./page.module.css";
import Link from "next/link";

export default function ReserverPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.tag}>Réservation</div>
        <h1 className={styles.h1}>Réservez votre voiture</h1>
        <p className={styles.sub}>Remplissez le formulaire ci-dessous. Confirmation sous 2h par WhatsApp ou email.</p>
      </div>
      <div className={styles.grid}>
        <form className={styles.form}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>Votre voiture</div>
            <div className={styles.carCards}>
              {[
                {id:"rs3",name:"Audi RS3 2026",price:"350€/j",available:true},
                {id:"golfr",name:"Golf 8R",price:"280€/j",available:true},
              ].map(c => (
                <label key={c.id} className={styles.carOption}>
                  <input type="radio" name="car" value={c.id} defaultChecked={c.id==="rs3"}/>
                  <div className={styles.carOptionInner}>
                    <div className={styles.carOptionName}>{c.name}</div>
                    <div className={styles.carOptionPrice}>{c.price}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>Vos dates</div>
            <div className={styles.row}>
              <div className={styles.field}><label>Date de début</label><input type="date"/></div>
              <div className={styles.field}><label>Date de fin</label><input type="date"/></div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>Livraison</div>
            <div className={styles.field}><label>Adresse de livraison</label><input type="text" placeholder="Rue, numéro, ville"/></div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>Vos coordonnées</div>
            <div className={styles.row}>
              <div className={styles.field}><label>Prénom</label><input type="text" placeholder="Jean"/></div>
              <div className={styles.field}><label>Nom</label><input type="text" placeholder="Dupont"/></div>
            </div>
            <div className={styles.field}><label>Email</label><input type="email" placeholder="jean@exemple.be"/></div>
            <div className={styles.field}><label>Téléphone / WhatsApp</label><input type="tel" placeholder="+32 4XX XX XX XX"/></div>
            <div className={styles.field}><label>Message (optionnel)</label><textarea rows={3} placeholder="Occasion spéciale, demande particulière..."/></div>
          </div>

          <button type="submit" className={styles.submit}>Envoyer ma demande →</button>
          <p className={styles.note}>En soumettant ce formulaire vous acceptez nos <Link href="/cgv">CGV</Link>. Nous vous contactons sous 2h.</p>
        </form>

        <div className={styles.sidebar}>
          <div className={styles.sideCard}>
            <div className={styles.sideTitle}>Tout est inclus</div>
            {["✓ Assurance tous risques","✓ Plein d'essence","✓ Nettoyage intégral","✓ Livraison domicile (30 km)","✓ Assistance 24h/24"].map(i => (
              <div key={i} className={styles.included}>{i}</div>
            ))}
          </div>
          <div className={styles.sideCard}>
            <div className={styles.sideTitle}>Conditions</div>
            <div className={styles.condition}>Permis B depuis 3 ans minimum</div>
            <div className={styles.condition}>Caution de 1 500€ (carte bancaire)</div>
            <div className={styles.condition}>Conducteur de 21 ans minimum</div>
          </div>
          <a href="https://wa.me/32400000000?text=Bonjour%20je%20voudrais%20réserver%20une%20voiture" target="_blank" rel="noopener" className={styles.waBtn}>
            💬 Réserver via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
