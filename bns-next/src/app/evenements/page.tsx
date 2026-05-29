import styles from "./page.module.css";
import Link from "next/link";

const occasions = [
  { icon:"💍", title:"Mariage", desc:"Arrivez en RS3 ou Golf R le jour J. Inoubliable." },
  { icon:"🎂", title:"Anniversaire", desc:"Offrez une expérience unique en guise de cadeau." },
  { icon:"❤️", title:"Weekend romantique", desc:"Escapade en amoureux avec une sportive d'exception." },
  { icon:"📸", title:"Shooting photo/vidéo", desc:"Location pour vos projets créatifs et tournages." },
  { icon:"💼", title:"Business / VIP", desc:"Impressionnez vos clients ou partenaires." },
  { icon:"🎁", title:"Bon cadeau", desc:"Offrez un bon cadeau BNS Prestige à un proche." },
];

export default function EvenementsPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.tag}>Événements</div>
        <h1 className={styles.h1}>Pour chaque<br/>occasion spéciale.</h1>
        <p className={styles.sub}>Mariages, anniversaires, shootings, weekends — BNS Prestige sublime tous vos moments.</p>
      </div>
      <div className={styles.grid}>
        {occasions.map((o,i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{o.icon}</div>
            <div className={styles.cardTitle}>{o.title}</div>
            <div className={styles.cardDesc}>{o.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.cta}>
        <h2 className={styles.ctaH}>Une occasion particulière ?</h2>
        <p className={styles.ctaP}>Contactez-nous pour un devis personnalisé. Nous adaptons chaque location à votre événement.</p>
        <div className={styles.ctaBtns}>
          <Link href="/contact" className={styles.btnF}>Nous contacter →</Link>
          <a href="https://wa.me/32400000000?text=Bonjour, je souhaite louer pour un événement" target="_blank" rel="noopener" className={styles.btnW}>💬 WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
