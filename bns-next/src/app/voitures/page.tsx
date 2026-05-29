"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const cars = [
  {
    id: "rs3", brand: "Audi Sport · 2026", name: "RS3 Sportback",
    tagline: "Le compact sportif ultime. 400 ch, Quattro, boîte DSG 7 — une fusée homologuée pour la route.",
    img: "/img/rs3-1.png", thumbs: ["/img/rs3-1.png","/img/rs3-2.png"],
    specs: [{v:"400 ch",k:"Puissance"},{v:"3.8 s",k:"0–100 km/h"},{v:"290 km/h",k:"Vitesse max"},{v:"5 cyl.",k:"Moteur"},{v:"Quattro",k:"Transmission"},{v:"DSG 7",k:"Boîte"}],
    features: [{icon:"🛡️",label:"Assurance tous risques",val:"Incluse"},{icon:"⛽",label:"Plein inclus",val:"Inclus"},{icon:"🚿",label:"Nettoyage intégral",val:"Inclus"},{icon:"📍",label:"Livraison domicile",val:"30 km · Bruxelles"},{icon:"📋",label:"Permis B requis",val:"3 ans minimum"}],
    price: "350", weekend: "650", available: true,
  },
  {
    id: "golfr", brand: "Volkswagen · 2024", name: "Golf 8R",
    tagline: "La Golf R, le mythe. 333 ch, 4Motion, boîte DSG 7 — la quintessence du hot-hatch quotidien.",
    img: "/img/golf-1.png", thumbs: ["/img/golf-1.png","/img/golf-2.png"],
    specs: [{v:"333 ch",k:"Puissance"},{v:"4.7 s",k:"0–100 km/h"},{v:"270 km/h",k:"Vitesse max"},{v:"2.0 TSI",k:"Moteur"},{v:"4Motion",k:"Transmission"},{v:"DSG 7",k:"Boîte"}],
    features: [{icon:"🛡️",label:"Assurance tous risques",val:"Incluse"},{icon:"⛽",label:"Plein inclus",val:"Inclus"},{icon:"🚿",label:"Nettoyage intégral",val:"Inclus"},{icon:"📍",label:"Livraison domicile",val:"30 km · Bruxelles"},{icon:"📋",label:"Permis B requis",val:"3 ans minimum"}],
    price: "280", weekend: "520", available: true,
  },
  {
    id: "a45s", brand: "Mercedes-AMG · 4MATIC+", name: "A45s AMG",
    tagline: "421 ch, le 4 cylindres le plus puissant de série. Une bête dans un costume compact. Disponible prochainement.",
    img: "/img/a45s-1.png", thumbs: ["/img/a45s-1.png","/img/a45s-2.png"],
    specs: [{v:"421 ch",k:"Puissance"},{v:"3.9 s",k:"0–100 km/h"},{v:"270 km/h",k:"Vitesse max"},{v:"2.0 T",k:"Moteur"},{v:"4MATIC+",k:"Transmission"},{v:"AMG DCT 8",k:"Boîte"}],
    features: [{icon:"🛡️",label:"Assurance tous risques",val:"Incluse"},{icon:"⛽",label:"Plein inclus",val:"Inclus"},{icon:"🚿",label:"Nettoyage intégral",val:"Inclus"},{icon:"📍",label:"Livraison domicile",val:"30 km · Bruxelles"}],
    price: null, weekend: null, available: false,
  },
  {
    id: "m135i", brand: "BMW M Performance · xDrive", name: "M135i",
    tagline: "306 ch, xDrive, transmission intégrale — le plaisir BMW avec la polyvalence d'une compacte premium.",
    img: "/img/m135i-1.png", thumbs: ["/img/m135i-1.png","/img/m135i-2.png"],
    specs: [{v:"306 ch",k:"Puissance"},{v:"4.9 s",k:"0–100 km/h"},{v:"250 km/h",k:"Vitesse max"},{v:"2.0 T",k:"Moteur"},{v:"xDrive",k:"Transmission"},{v:"Auto 8",k:"Boîte"}],
    features: [{icon:"🛡️",label:"Assurance tous risques",val:"Incluse"},{icon:"⛽",label:"Plein inclus",val:"Inclus"},{icon:"🚿",label:"Nettoyage intégral",val:"Inclus"},{icon:"📍",label:"Livraison domicile",val:"30 km · Bruxelles"}],
    price: null, weekend: null, available: false,
  },
];

export default function VoituresPage() {
  const [active, setActive] = useState(0);
  const [thumb, setThumb] = useState(0);
  const car = cars[active];

  function switchCar(i: number) { setActive(i); setThumb(0); }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.tag}>Notre flotte</div>
        <h1 className={styles.h1}>Nos voitures</h1>
        <p className={styles.sub}>4 sportives hautes performances disponibles à la location à Bruxelles.</p>
      </div>

      <div className={styles.tabsWrap}>
        <div className={styles.tabs}>
          {cars.map((c, i) => (
            <button key={c.id} className={`${styles.tab} ${active===i?styles.tabActive:""}`} onClick={() => switchCar(i)}>
              <div className={styles.tabThumb}>
                <Image src={c.thumbs[0]} alt={c.name} width={52} height={38} style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}}/>
              </div>
              <div className={styles.tabInfo}>
                <div className={styles.tabName}>{c.name}</div>
                <div className={styles.tabPrice}>{c.available ? `${c.price}€/j · Disponible` : "Bientôt disponible"}</div>
              </div>
              {c.available && <div className={styles.tabDot}/>}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.productArea}>
        <div className={styles.product}>
          <div className={styles.gallery}>
            <div className={styles.galleryMain}>
              <Image src={car.thumbs[thumb] || car.img} alt={car.name} width={800} height={450} style={{width:"100%",height:"auto",aspectRatio:"16/9",objectFit:"cover"}}/>
              <div className={`${styles.galleryStatus} ${car.available ? styles.sAvail : styles.sSoon}`}>
                {car.available ? "● Disponible" : "Bientôt disponible"}
              </div>
            </div>
            {car.thumbs.length > 1 && (
              <div className={styles.thumbs}>
                {car.thumbs.map((t, i) => (
                  <div key={i} className={`${styles.thumb} ${thumb===i?styles.thumbActive:""}`} onClick={() => setThumb(i)}>
                    <Image src={t} alt="" width={120} height={90} style={{width:"100%",aspectRatio:"4/3",objectFit:"cover"}}/>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.info}>
            <div className={styles.carBrand}>{car.brand}</div>
            <h2 className={styles.carTitle}>{car.name}</h2>
            <p className={styles.carTagline}>{car.tagline}</p>
            <div className={styles.specsGrid}>
              {car.specs.map((s,i) => (
                <div key={i} className={styles.specBox}>
                  <div className={styles.specVal}>{s.v}</div>
                  <div className={styles.specKey}>{s.k}</div>
                </div>
              ))}
            </div>
            <div className={styles.features}>
              {car.features.map((f,i) => (
                <div key={i} className={styles.feature}>
                  <span className={styles.featIcon}>{f.icon}</span>
                  <span className={styles.featLabel}>{f.label}</span>
                  <span className={styles.featVal}>{f.val}</span>
                </div>
              ))}
            </div>
            <div className={styles.priceBox} style={{opacity: car.available ? 1 : .7}}>
              {car.available ? (
                <div className={styles.priceRow}>
                  <div><div className={styles.priceLabel}>Tarif journalier</div><div className={styles.priceAmount}>{car.price}€ <span>/ jour</span></div></div>
                  <div style={{textAlign:"right"}}><div className={styles.priceLabel}>Weekend (2j)</div><div className={styles.priceAmount} style={{fontSize:"1.4rem"}}>{car.weekend}€</div></div>
                </div>
              ) : (
                <div className={styles.priceRow}><div><div className={styles.priceLabel}>Tarif</div><div className={styles.priceAmount} style={{fontSize:"1.4rem",color:"var(--muted2)"}}>Prochainement</div></div></div>
              )}
              {car.available
                ? <Link href={`/reserver?car=${car.id}`} className={styles.btnReserve}>Réserver cette voiture →</Link>
                : <><button className={styles.btnDisabled} disabled>Prochainement disponible</button><Link href="/contact" className={styles.btnNotify}>Me notifier à l&apos;ouverture →</Link></>
              }
            </div>
            {car.available && (
              <div className={styles.chips}>
                {["✓ Assurance","✓ Plein","✓ Nettoyage","✓ Livraison","✓ Assistance 24h"].map(c => <span key={c} className={styles.chip}>{c}</span>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
