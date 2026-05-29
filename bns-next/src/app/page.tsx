import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const cars = [
  { id: "rs3",   brand: "Audi Sport",       name: "RS3 2026",  img: "/img/rs3-1.png",   power: "400 ch", time: "3.8 s", vmax: "290 km/h", trans: "Quattro", price: "350", available: true },
  { id: "golfr", brand: "Volkswagen",        name: "Golf 8R",   img: "/img/golf-1.png",  power: "333 ch", time: "4.7 s", vmax: "270 km/h", trans: "4Motion", price: "280", available: true },
  { id: "a45s",  brand: "Mercedes-AMG",      name: "A45s AMG",  img: "/img/a45s-1.png",  power: "421 ch", time: "3.9 s", vmax: "270 km/h", trans: "4MATIC+", price: null,  available: false },
  { id: "m135i", brand: "BMW M Performance", name: "M135i",     img: "/img/m135i-1.png", power: "306 ch", time: "4.9 s", vmax: "250 km/h", trans: "xDrive",  price: null,  available: false },
];

const steps = [
  { n: "01", title: "Choisissez votre voiture", desc: "Parcourez notre flotte et sélectionnez le véhicule qui vous fait vibrer." },
  { n: "02", title: "Réservez en ligne",        desc: "Renseignez vos dates et coordonnées — validation en quelques clics." },
  { n: "03", title: "Confirmation rapide",      desc: "Recevez la confirmation et tous les détails de prise en charge sous 2h." },
  { n: "04", title: "Prenez le volant",         desc: "Voiture livrée, plein fait, nettoyée. Il ne reste plus qu'à appuyer." },
];

const testimonials = [
  { stars: 5, text: "Service impeccable, la RS3 était propre, plein fait, livrée à l'heure. Totalement recommandé pour un weekend spécial.", initials: "AK", name: "Adam K.", car: "Audi RS3 · Weekend" },
  { stars: 5, text: "La Golf R est une bête ! Communication rapide, tout était clair. Prix honnête pour la qualité du service.", initials: "NL", name: "Nicolas L.", car: "Golf 8R · 3 jours" },
  { stars: 5, text: "Livraison à domicile nickel, voiture en parfait état. Exactement ce que je cherchais pour mon anniversaire.", initials: "SM", name: "Sofia M.", car: "Golf 8R · 1 jour" },
];

const marqueeItems = ["Audi RS3 2026", "Volkswagen Golf 8R", "Mercedes A45s AMG", "BMW M135i", "Location Bruxelles", "Livraison domicile"];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>2 voitures disponibles · Bruxelles</span>
          </div>
          <h1 className={styles.h1}>
            La <span className={styles.grn}>performance</span><br/>
            <span className={styles.dim}>à votre portée.</span>
          </h1>
          <p className={styles.heroP}>Location de sportives hautes performances à Bruxelles. Livrées à domicile, assurées tous risques, prêtes à l&apos;action.</p>
          <div className={styles.heroBtns}>
            <Link href="/voitures" className={styles.btnF}>Voir les voitures →</Link>
            <Link href="/reserver" className={styles.btnO}>Réserver maintenant</Link>
          </div>
          <div className={styles.heroStats}>
            <div><div className={styles.statVal}>4<span>+</span></div><div className={styles.statLbl}>Véhicules</div></div>
            <div><div className={styles.statVal}>24<span>h</span></div><div className={styles.statLbl}>Assistance</div></div>
            <div><div className={styles.statVal}>100<span>%</span></div><div className={styles.statLbl}>Tous risques</div></div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImgWrap}>
            <Image src="/img/rs3-1.png" alt="Audi RS3 2026" width={700} height={420} priority style={{width:"100%",height:"auto",objectFit:"contain"}}/>
            <div className={styles.heroTag}>
              <div className={styles.heroTagName}>Audi RS3 2026</div>
              <div className={styles.heroTagAvail}>
                <span className={styles.availDot}/>
                <span className={styles.availTxt}>Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={styles.mItem}><span className={styles.dot}>●</span> {item}</span>
          ))}
        </div>
      </div>

      <div className={styles.sec}>
        <div className={styles.carsHead}>
          <div>
            <div className={styles.secTag}>Notre flotte</div>
            <h2 className={styles.secH}>Choisissez votre machine</h2>
          </div>
          <Link href="/voitures" className={styles.carsLink}>Voir toutes les voitures <span>→</span></Link>
        </div>
        <div className={styles.carsGrid}>
          {cars.map(car => (
            <div key={car.id} className={`${styles.carCard} ${!car.available ? styles.soon : ""}`}>
              <div className={styles.carImg}>
                <Image src={car.img} alt={car.name} width={600} height={338} style={{width:"100%",height:"auto"}}/>
                <div className={`${styles.carStatus} ${car.available ? styles.sAvail : styles.sSoon}`}>
                  {car.available ? "● Disponible" : "Bientôt disponible"}
                </div>
              </div>
              <div className={styles.carBody}>
                <div className={styles.carBrand}>{car.brand}</div>
                <div className={styles.carName}>{car.name}</div>
                <div className={styles.carSpecs}>
                  <div><div className={styles.specVal}>{car.power}</div><div className={styles.specKey}>Puissance</div></div>
                  <div><div className={styles.specVal}>{car.time}</div><div className={styles.specKey}>0–100</div></div>
                  <div><div className={styles.specVal}>{car.vmax}</div><div className={styles.specKey}>Vmax</div></div>
                  <div><div className={styles.specVal}>{car.trans}</div><div className={styles.specKey}>Transmission</div></div>
                </div>
                <div className={styles.carFooter}>
                  <div>
                    <div className={styles.priceFrom}>{car.available ? "À partir de" : "Tarif"}</div>
                    <div className={styles.priceVal}>
                      {car.price ? <>{car.price}€ <span>/ jour</span></> : <span style={{fontSize:"1rem",color:"var(--muted2)"}}>Prochainement</span>}
                    </div>
                  </div>
                  {car.available
                    ? <Link href="/reserver" className={styles.carBtn}>Réserver</Link>
                    : <Link href="/contact" className={styles.carBtnSoon}>Me notifier →</Link>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sec} style={{paddingTop:0}}>
        <div className={styles.secTag}>Nos engagements</div>
        <h2 className={styles.secH}>Pourquoi BNS Prestige.</h2>
        <div className={styles.bento}>
          <div className={styles.bc1}>
            <span className={styles.bc1Badge}>Best-seller</span>
            <div className={styles.bc1Img}>
              <Image src="/img/rs3_3.png" alt="RS3" width={500} height={300} style={{maxHeight:"90%",maxWidth:"90%",objectFit:"contain"}}/>
            </div>
            <div className={styles.bc1Overlay}>
              <div className={styles.bc1Name}>Audi RS3 2026</div>
              <div className={styles.bc1Sub}>400 ch · Quattro · 350€/j · tout inclus</div>
            </div>
          </div>
          <div className={styles.bc2}>
            <div className={styles.svcIcon}>🛡️</div>
            <div className={styles.svcTitle}>Assurance tous risques</div>
            <p className={styles.svcDesc}>Incluse dans chaque location. Roulez l&apos;esprit tranquille, sans franchise excessive.</p>
          </div>
          <div className={styles.bc3}>
            <div className={styles.bn}>&lt;30<span>&apos;</span></div>
            <div className={styles.bl}>Réponse WhatsApp</div>
            <p className={styles.bd}>7j/7, de 8h à 22h. Confirmation de réservation sous 2h garantie.</p>
          </div>
          <div className={styles.bc4}>
            <div className={styles.bn}>🚗</div>
            <div className={styles.bl}>Livraison domicile</div>
            <p className={styles.bd}>Bruxelles et alentours (30 km). Domicile, hôtel ou bureau.</p>
          </div>
          <div className={styles.bc5}>
            <div className={styles.svcIcon}>✅</div>
            <div className={styles.svcTitle}>Plein &amp; nettoyage inclus</div>
            <p className={styles.svcDesc}>Chaque remise se fait avec le plein et le véhicule nettoyé intérieur/extérieur.</p>
          </div>
        </div>
      </div>

      <div className={styles.howSec}>
        <div className={styles.howInner}>
          <div className={styles.secTag}>Comment ça marche</div>
          <h2 className={styles.secH}>Simple comme un coup<br/>d&apos;accélérateur.</h2>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNum}>{s.n}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepDesc}>{s.desc}</div>
                {i < steps.length - 1 && <div className={styles.stepArrow}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sec}>
        <div className={styles.secTag}>Témoignages</div>
        <h2 className={styles.secH}>Ils ont roulé avec nous.</h2>
        <div className={styles.testiGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.tc}>
              <div className={styles.tcStars}>{"★".repeat(t.stars)}</div>
              <p className={styles.tcText}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.tcFt}>
                <div className={styles.tcAv}>{t.initials}</div>
                <div><div className={styles.tcName}>{t.name}</div><div className={styles.tcCar}>{t.car}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaSec}>
        <div className={styles.ctaInner}>
          <div>
            <h2 className={styles.ctaH}>Votre voiture<br/>vous attend.</h2>
            <p className={styles.ctaP}>Disponible dès aujourd&apos;hui. Réservez en ligne ou contactez-nous via WhatsApp.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/reserver" className={styles.btnDk}>Réserver maintenant →</Link>
            <Link href="/contact" className={styles.btnDkO}>Nous contacter</Link>
          </div>
        </div>
      </div>
    </>
  );
}
