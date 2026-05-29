import styles from "./page.module.css";
import Link from "next/link";

const steps = [
  { n:"01", title:"Choisissez votre voiture", desc:"Parcourez notre flotte sur la page Nos Voitures. RS3 2026 ou Golf 8R disponibles maintenant, A45s AMG et M135i bientôt.", icon:"🚗" },
  { n:"02", title:"Réservez en ligne ou via WhatsApp", desc:"Remplissez le formulaire de réservation ou envoyez-nous un message WhatsApp avec vos dates et votre voiture choisie.", icon:"📱" },
  { n:"03", title:"Confirmation sous 2h", desc:"Nous vérifions la disponibilité et vous confirmons par WhatsApp ou email avec tous les détails de prise en charge.", icon:"✅" },
  { n:"04", title:"Livraison à votre adresse", desc:"Le jour J, nous livrons la voiture propre, le plein fait, à l'adresse de votre choix dans un rayon de 30 km autour de Bruxelles.", icon:"📍" },
  { n:"05", title:"Profitez de l'expérience", desc:"La voiture est à vous pour la durée convenue. En cas de besoin, notre assistance est disponible 24h/24.", icon:"🏎️" },
  { n:"06", title:"Retour du véhicule", desc:"À la fin de la location, nous récupérons le véhicule à l'adresse de votre choix. Simple et sans stress.", icon:"🔑" },
];

const faqs = [
  { q:"Quel permis est requis ?", a:"Un permis B valide depuis au minimum 3 ans. Le conducteur doit avoir au minimum 21 ans." },
  { q:"Y a-t-il une caution ?", a:"Oui, une caution de 1 500€ est demandée par autorisation sur carte bancaire. Elle est libérée au retour du véhicule." },
  { q:"L'assurance est-elle incluse ?", a:"Oui, chaque location inclut une assurance tous risques. Roulez l'esprit tranquille." },
  { q:"Quelle est la zone de livraison ?", a:"Nous livrons dans un rayon de 30 km autour de Bruxelles : domicile, hôtel, bureau, etc." },
  { q:"Peut-on louer pour un événement ?", a:"Absolument ! Mariage, anniversaire, shooting photo, weekend romantique — contactez-nous pour un devis personnalisé." },
];

export default function CommentCaMarchePage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.tag}>Comment ça marche</div>
        <h1 className={styles.h1}>Simple comme<br/>un coup d&apos;accélérateur.</h1>
        <p className={styles.sub}>De la réservation à la remise des clés, on s'occupe de tout.</p>
      </div>

      <div className={styles.steps}>
        {steps.map((s,i) => (
          <div key={i} className={styles.step}>
            <div className={styles.stepLeft}>
              <div className={styles.stepIcon}>{s.icon}</div>
              <div className={styles.stepNum}>{s.n}</div>
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.faqSection}>
        <div className={styles.faqTag}>FAQ</div>
        <h2 className={styles.faqH}>Questions fréquentes</h2>
        <div className={styles.faqs}>
          {faqs.map((f,i) => (
            <div key={i} className={styles.faq}>
              <div className={styles.faqQ}>{f.q}</div>
              <div className={styles.faqA}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cta}>
        <h2 className={styles.ctaH}>Prêt à prendre le volant ?</h2>
        <div className={styles.ctaBtns}>
          <Link href="/reserver" className={styles.btnF}>Réserver maintenant →</Link>
          <Link href="/contact" className={styles.btnO}>Nous contacter</Link>
        </div>
      </div>
    </div>
  );
}
