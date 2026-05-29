import styles from "./page.module.css";

export default function CgvPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.tag}>Légal</div>
        <h1 className={styles.h1}>Conditions Générales de Vente</h1>
        <p className={styles.sub}>Dernière mise à jour : janvier 2026</p>
      </div>
      <div className={styles.content}>
        {[
          { title:"1. Objet", text:"Les présentes conditions générales régissent la location de véhicules proposée par BNS Prestige à Bruxelles." },
          { title:"2. Conditions d'accès", text:"Le conducteur doit être titulaire d'un permis B valide depuis au moins 3 ans et être âgé d'au moins 21 ans." },
          { title:"3. Caution", text:"Une caution de 1 500€ est bloquée par autorisation sur carte bancaire. Elle est libérée dans les 48h suivant le retour du véhicule, sous réserve de l'état du véhicule." },
          { title:"4. Assurance", text:"Chaque location inclut une assurance tous risques. Le conducteur reste responsable en cas de dommages non couverts par l'assurance." },
          { title:"5. Livraison", text:"La livraison et la récupération du véhicule sont incluses dans un rayon de 30 km autour de Bruxelles. Au-delà, des frais supplémentaires s'appliquent." },
          { title:"6. Annulation", text:"Toute annulation moins de 48h avant la date de prise en charge entraîne la facturation de 50% du montant de la location." },
          { title:"7. Carburant", text:"Le véhicule est remis avec le plein. Le client doit le restituer avec le même niveau de carburant, faute de quoi des frais de remplissage seront facturés." },
          { title:"8. Litiges", text:"En cas de litige, les parties s'engagent à trouver une solution amiable. À défaut, les tribunaux de Bruxelles sont compétents." },
        ].map((s,i) => (
          <div key={i} className={styles.section}>
            <h2 className={styles.sectionTitle}>{s.title}</h2>
            <p className={styles.sectionText}>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
