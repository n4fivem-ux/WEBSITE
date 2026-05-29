/**
 * BNS Prestige — Système multilingue FR / NL / EN
 * Auto-détecte et traduit toute la page.
 * Usage: <script src="i18n.js"></script> en bas du <body>
 */
(function () {
  'use strict';

  // ══════════════════════════════════════════════════════
  //  TRANSLATIONS
  // ══════════════════════════════════════════════════════
  var T = {
    fr: {
      // NAV
      nav_accueil:    'Accueil',
      nav_voitures:   'Nos Voitures',
      nav_occasions:  'Occasions',
      nav_comment:    'Comment ça marche',
      nav_contact:    'Contact',
      nav_reserver:   'Réserver →',
      // HERO (index)
      hero_pill:      '3 voitures disponibles · Bruxelles & alentours',
      hero_sub:       'Audi RS3, Golf 8 R et Clio 5 Alpine à Bruxelles. Livrées à domicile, assurées tous risques.',
      btn_voir:       'Voir les voitures →',
      btn_reserver:   'Réserver maintenant',
      // NOSVOITURES
      inc_title:      'Ce qui est inclus',
      inc_assurance:  'Assurance tous risques',
      inc_assurance2: 'Sans franchise excessive',
      inc_livraison:  'Livraison · Bruxelles & alentours 30km',
      inc_livraison2: 'Retour sur le même secteur',
      inc_plein:      'Plein de carburant',
      inc_plein2:     'Remise et retour avec le plein',
      inc_nettoyage:  'Nettoyage complet',
      inc_nettoyage2: 'Int. & ext. à chaque remise',
      inc_km:         'Kilométrage illimité',
      inc_assist:     'Assistance 24h / 7j',
      dispo_title:    'Disponibilités',
      dispo_sub:      '1 clic = 24h · 2 clics = plusieurs jours',
      dispo_legend1:  'Lun–Ven',
      dispo_legend2:  'Sam–Dim',
      dispo_legend3:  'Complet',
      cal_avail:      'Disponible',
      cal_full:       'Complet ce mois',
      tp_title:       'Heure de remise',
      tp_depart:      'Départ',
      tp_retour:      'Retour (lendemain)',
      pb_estime:      'Total estimé',
      pb_hint:        'Prix indicatif · confirmé par WhatsApp',
      btn_sel_date:   'Sélectionnez une date →',
      coming_title:   'Bientôt disponibles',
      coming_sub:     'Contactez-nous pour être notifié en priorité.',
      coming_notify:  'Me notifier →',
      // RESERVER
      res_tag:        'Réservation en ligne',
      res_h1:         'Finaliser votre réservation.',
      res_note:       'Remplissez le formulaire. Confirmation sous 2 heures, 7j/7.',
      res_vehicle:    'Votre véhicule',
      res_info:       'Informations personnelles',
      lbl_prenom:     'Prénom *',
      lbl_nom:        'Nom *',
      lbl_email:      'Email *',
      lbl_tel:        'WhatsApp / Tél. *',
      lbl_age:        'Âge * (min. 20 ans ou 2 ans de permis)',
      lbl_nat:        'Nationalité *',
      contrat_title:  'Contrat de location',
      contrat_text:   'Établi et signé à la remise des clés. Présentez votre permis valide.',
      mode_title:     'Mode de prise en charge',
      mode_retrait:   '📍 Retrait — Bruxelles',
      mode_livr:      '🚗 Livraison à domicile',
      pickup_lbl:     'Adresse de retrait BNS Prestige',
      pickup_val:     'Sur rendez-vous · Bruxelles, Belgique',
      pickup_note:    "L'adresse exacte vous sera communiquée lors de la confirmation.",
      zone_lbl:       'Zone de livraison',
      zone_val:       'Bruxelles et alentours — rayon 30 km',
      lbl_rue:        'Rue et numéro *',
      lbl_cp:         'Code postal *',
      lbl_ville:      'Commune *',
      sec_options:    'Options',
      opt1:           'Conducteur supplémentaire — 2ème conducteur déclaré (inclus)',
      opt2:           'Siège enfant / rehausseur — Sur demande',
      sec_msg:        'Message (optionnel)',
      msg_ph:         'Occasion particulière, question, précision utile...',
      cgv_txt:        "J'accepte les conditions générales de BNS Prestige. Minimum 20 ans, permis valide.",
      btn_envoyer:    'Envoyer ma demande →',
      form_note:      'Sans engagement avant confirmation · Réponse sous 2h',
      prog1: 'Voiture', prog2: 'Dates', prog3: 'Formulaire', prog4: 'Confirmation',
      // COMMENT CA MARCHE
      how_tag:        'Simple & rapide',
      how_h1:         'Comment ça marche',
      how_sub:        'Louer une voiture BNS Prestige en 4 étapes simples.',
      step1_title:    'Choisissez votre voiture',
      step2_title:    'Envoyez votre demande',
      step3_title:    'Confirmation WhatsApp',
      step4_title:    'Remise des clés',
      faq_title:      'Questions fréquentes',
      faq_q1: 'Quel âge minimum pour louer ?',
      faq_q2: 'La livraison à domicile est-elle incluse ?',
      faq_q3: "L'assurance est-elle incluse ?",
      faq_q4: 'Puis-je louer pour 24h seulement ?',
      faq_q5: 'Comment fonctionne le tarif weekend ?',
      faq_q6: 'Comment annuler une réservation ?',
      faq_q7: 'Quels documents faut-il apporter ?',
      // CONTACT
      contact_h1:     'Parlons-nous directement.',
      contact_sub:    "Pas de bot, pas d'attente. L'équipe BNS Prestige, 7j/7.",
      // OCCASIONS
      occ_tag:        'Pour chaque moment',
      occ_h1a:        'Une voiture pour',
      occ_h1b:        'chaque occasion.',
      occ_sub:        'Anniversaire, mariage, shooting, voyage — nous avons la voiture.',
      // FOOTER
      ft_location:    'Location de voitures sportives · Bruxelles et alentours.',
      ft_pages:       'Pages',
      ft_fleet:       'Flotte',
      ft_contact:     'Contact',
    },

    nl: {
      nav_accueil:    'Home',
      nav_voitures:   'Onze Wagens',
      nav_occasions:  'Gelegenheden',
      nav_comment:    'Hoe werkt het',
      nav_contact:    'Contact',
      nav_reserver:   'Reserveren →',
      hero_pill:      '2 wagens beschikbaar · Brussel & omgeving',
      hero_sub:       'Audi RS3 en Golf 8 R in Brussel. Thuislevering, volledig verzekerd.',
      btn_voir:       'Bekijk de wagens →',
      btn_reserver:   'Nu reserveren',
      inc_title:      'Inbegrepen',
      inc_assurance:  'Omniumverzekering',
      inc_assurance2: 'Zonder buitensporig eigen risico',
      inc_livraison:  'Levering · Brussel & omgeving 30km',
      inc_livraison2: 'Teruggave in hetzelfde gebied',
      inc_plein:      'Volle tank',
      inc_plein2:     'Aflevering en retour met volle tank',
      inc_nettoyage:  'Volledig gereinigd',
      inc_nettoyage2: 'Binnen & buiten bij elke aflevering',
      inc_km:         'Onbeperkt rijden',
      inc_assist:     'Bijstand 24u / 7d',
      dispo_title:    'Beschikbaarheid',
      dispo_sub:      '1 klik = 24u · 2 klikken = meerdere dagen',
      dispo_legend1:  'Ma–Vr',
      dispo_legend2:  'Za–Zo',
      dispo_legend3:  'Volgeboekt',
      cal_avail:      'Beschikbaar',
      cal_full:       'Volzet deze maand',
      tp_title:       'Uur van afhaling',
      tp_depart:      'Vertrek',
      tp_retour:      'Terug (volgende dag)',
      pb_estime:      'Geschat totaal',
      pb_hint:        'Indicatieve prijs · bevestigd via WhatsApp',
      btn_sel_date:   'Selecteer een datum →',
      coming_title:   'Binnenkort beschikbaar',
      coming_sub:     'Contacteer ons voor prioriteitsmelding.',
      coming_notify:  'Mij verwittigen →',
      res_tag:        'Online reservering',
      res_h1:         'Uw reservering afronden.',
      res_note:       'Vul het formulier in. Bevestiging binnen 2 uur, 7 dagen op 7.',
      res_vehicle:    'Uw voertuig',
      res_info:       'Persoonlijke gegevens',
      lbl_prenom:     'Voornaam *',
      lbl_nom:        'Naam *',
      lbl_email:      'E-mail *',
      lbl_tel:        'WhatsApp / Tel. *',
      lbl_age:        'Leeftijd * (min. 20 jaar of 2 jaar rijbewijs)',
      lbl_nat:        'Nationaliteit *',
      contrat_title:  'Huurovereenkomst',
      contrat_text:   'Opgesteld en ondertekend bij sleuteloverdracht. Breng uw geldig rijbewijs mee.',
      mode_title:     'Wijze van afhaling',
      mode_retrait:   '📍 Afhalen — Brussel',
      mode_livr:      '🚗 Thuislevering',
      pickup_lbl:     'Afhaladres BNS Prestige',
      pickup_val:     'Op afspraak · Brussel, België',
      pickup_note:    'Het exacte adres wordt meegedeeld bij bevestiging.',
      zone_lbl:       'Leveringszone',
      zone_val:       'Brussel en omgeving — straal 30 km',
      lbl_rue:        'Straat en nummer *',
      lbl_cp:         'Postcode *',
      lbl_ville:      'Gemeente *',
      sec_options:    'Opties',
      opt1:           'Extra bestuurder — 2e bestuurder (inbegrepen)',
      opt2:           'Kinderzitje / verhoger — Op aanvraag',
      sec_msg:        'Bericht (optioneel)',
      msg_ph:         'Bijzondere gelegenheid, vraag, nuttige info...',
      cgv_txt:        'Ik accepteer de algemene voorwaarden van BNS Prestige. Min. 20 jaar, geldig rijbewijs.',
      btn_envoyer:    'Mijn aanvraag versturen →',
      form_note:      'Vrijblijvend voor bevestiging · Antwoord binnen 2u',
      prog1: 'Wagen', prog2: 'Datums', prog3: 'Formulier', prog4: 'Bevestiging',
      how_tag:        'Eenvoudig & snel',
      how_h1:         'Hoe werkt het',
      how_sub:        'Een BNS Prestige wagen huren in 4 eenvoudige stappen.',
      step1_title:    'Kies uw wagen',
      step2_title:    'Stuur uw aanvraag',
      step3_title:    'WhatsApp bevestiging',
      step4_title:    'Sleuteloverdracht',
      faq_title:      'Veelgestelde vragen',
      faq_q1: 'Wat is de minimumleeftijd om te huren?',
      faq_q2: 'Is thuislevering inbegrepen?',
      faq_q3: 'Is de verzekering inbegrepen?',
      faq_q4: 'Kan ik voor slechts 24u huren?',
      faq_q5: 'Hoe werkt het weekendtarief?',
      faq_q6: 'Hoe annuleer ik een reservering?',
      faq_q7: 'Welke documenten moet ik meebrengen?',
      contact_h1:     'Neem direct contact op.',
      contact_sub:    'Geen bot, geen wachtrij. Het BNS Prestige team, 7 dagen op 7.',
      occ_tag:        'Voor elk moment',
      occ_h1a:        'Een wagen voor',
      occ_h1b:        'elke gelegenheid.',
      occ_sub:        'Verjaardag, bruiloft, shooting, zakenreis — wij hebben de juiste wagen.',
      ft_location:    'Verhuur van sportwagens · Brussel en omgeving.',
      ft_pages:       "Pagina's",
      ft_fleet:       'Vloot',
      ft_contact:     'Contact',
    },

    en: {
      nav_accueil:    'Home',
      nav_voitures:   'Our Cars',
      nav_occasions:  'Occasions',
      nav_comment:    'How it works',
      nav_contact:    'Contact',
      nav_reserver:   'Book Now →',
      hero_pill:      '2 cars available · Brussels & surroundings',
      hero_sub:       'Audi RS3 and Golf 8 R in Brussels. Home delivery, fully insured.',
      btn_voir:       'See our cars →',
      btn_reserver:   'Book now',
      inc_title:      "What's included",
      inc_assurance:  'Comprehensive insurance',
      inc_assurance2: 'No excessive excess',
      inc_livraison:  'Delivery · Brussels & area 30km',
      inc_livraison2: 'Return in the same area',
      inc_plein:      'Full tank',
      inc_plein2:     'Handed over and returned full',
      inc_nettoyage:  'Full clean',
      inc_nettoyage2: 'Inside & outside at every handover',
      inc_km:         'Unlimited mileage',
      inc_assist:     '24h / 7d assistance',
      dispo_title:    'Availability',
      dispo_sub:      '1 click = 24h · 2 clicks = multiple days',
      dispo_legend1:  'Mon–Fri',
      dispo_legend2:  'Sat–Sun',
      dispo_legend3:  'Fully booked',
      cal_avail:      'Available',
      cal_full:       'Fully booked this month',
      tp_title:       'Pick-up time',
      tp_depart:      'Departure',
      tp_retour:      'Return (next day)',
      pb_estime:      'Estimated total',
      pb_hint:        'Indicative price · confirmed by WhatsApp',
      btn_sel_date:   'Select a date →',
      coming_title:   'Coming soon',
      coming_sub:     'Contact us to be notified first.',
      coming_notify:  'Notify me →',
      res_tag:        'Online booking',
      res_h1:         'Finalise your booking.',
      res_note:       'Fill in the form. Confirmation within 2 hours, 7 days a week.',
      res_vehicle:    'Your vehicle',
      res_info:       'Personal information',
      lbl_prenom:     'First name *',
      lbl_nom:        'Last name *',
      lbl_email:      'Email *',
      lbl_tel:        'WhatsApp / Phone *',
      lbl_age:        'Age * (min. 20 years or 2 years licence)',
      lbl_nat:        'Nationality *',
      contrat_title:  'Rental agreement',
      contrat_text:   'Signed at key handover. Just bring your valid driving licence.',
      mode_title:     'Collection method',
      mode_retrait:   '📍 Pick up — Brussels',
      mode_livr:      '🚗 Home delivery',
      pickup_lbl:     'BNS Prestige pick-up address',
      pickup_val:     'By appointment · Brussels, Belgium',
      pickup_note:    'Exact address shared upon confirmation.',
      zone_lbl:       'Delivery zone',
      zone_val:       'Brussels and surroundings — 30 km radius',
      lbl_rue:        'Street and number *',
      lbl_cp:         'Postal code *',
      lbl_ville:      'Municipality *',
      sec_options:    'Options',
      opt1:           'Additional driver — 2nd declared driver (included)',
      opt2:           'Child seat / booster — On request',
      sec_msg:        'Message (optional)',
      msg_ph:         'Special occasion, question, useful note...',
      cgv_txt:        "I accept BNS Prestige's general terms. Min. 20 years old, valid licence.",
      btn_envoyer:    'Send my request →',
      form_note:      'Non-binding until confirmed · Response within 2h',
      prog1: 'Car', prog2: 'Dates', prog3: 'Form', prog4: 'Confirmation',
      how_tag:        'Simple & fast',
      how_h1:         'How it works',
      how_sub:        'Rent a BNS Prestige car in 4 simple steps.',
      step1_title:    'Choose your car',
      step2_title:    'Send your request',
      step3_title:    'WhatsApp confirmation',
      step4_title:    'Key handover',
      faq_title:      'Frequently asked questions',
      faq_q1: 'What is the minimum age to rent?',
      faq_q2: 'Is home delivery included?',
      faq_q3: 'Is insurance included?',
      faq_q4: 'Can I rent for just 24 hours?',
      faq_q5: 'How does the weekend rate work?',
      faq_q6: 'How do I cancel a booking?',
      faq_q7: 'What documents do I need to bring?',
      contact_h1:     'Talk to us directly.',
      contact_sub:    'No bot, no waiting. The BNS Prestige team, 7 days a week.',
      occ_tag:        'For every moment',
      occ_h1a:        'A car for',
      occ_h1b:        'every occasion.',
      occ_sub:        'Birthday, wedding, shooting, business — we have the right car.',
      ft_location:    'Sports car rental · Brussels and surroundings.',
      ft_pages:       'Pages',
      ft_fleet:       'Fleet',
      ft_contact:     'Contact',
    }
  };

  // ══════════════════════════════════════════════════════
  //  ENGINE
  // ══════════════════════════════════════════════════════
  var LANG = localStorage.getItem('bns_lang') || 'fr';

  function t(key) {
    return (T[LANG] && T[LANG][key]) ? T[LANG][key] : (T['fr'][key] || key);
  }

  function setLang(lang) {
    if (!T[lang]) return;
    LANG = lang;
    localStorage.setItem('bns_lang', lang);
    translatePage();
    updateButtons();
  }
  window.setLang = setLang;

  function updateButtons() {
    var btns = document.querySelectorAll('.i18n-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === LANG);
    }
    document.documentElement.lang = LANG;
  }

  // ── Translate every [data-i18n] element ──
  function translatePage() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    }
    // Update html lang
    document.documentElement.lang = LANG;
  }

  // ── Inject language switcher into nav ──
  function injectSwitcher() {
    // Don't inject twice
    if (document.getElementById('bns-lang-switcher')) return;

    var style = document.createElement('style');
    style.textContent =
      '.i18n-sw{display:flex;gap:2px;background:rgba(0,0,0,.06);border-radius:8px;padding:3px;flex-shrink:0}' +
      '.i18n-btn{padding:.28rem .55rem;border-radius:6px;font-size:.62rem;font-weight:700;letter-spacing:.06em;color:var(--muted,#6a6d68);background:transparent;border:none;cursor:pointer;transition:all .18s;font-family:var(--sans,sans-serif)}' +
      '.i18n-btn:hover{color:var(--ink,#111)}' +
      '.i18n-btn.active{background:var(--white,#fff);color:var(--ink,#111);box-shadow:0 1px 4px rgba(0,0,0,.1)}';
    document.head.appendChild(style);

    var sw = document.createElement('div');
    sw.className = 'i18n-sw';
    sw.id = 'bns-lang-switcher';
    sw.innerHTML =
      '<button class="i18n-btn" data-lang="fr" onclick="setLang(\'fr\')">FR</button>' +
      '<button class="i18n-btn" data-lang="nl" onclick="setLang(\'nl\')">NL</button>' +
      '<button class="i18n-btn" data-lang="en" onclick="setLang(\'en\')">EN</button>';

    // Insert before dark-toggle or nav-cta
    var navRight = document.querySelector('.nav-right');
    var darkToggle = document.querySelector('.dark-toggle');
    var navCta = document.querySelector('.nav-cta');

    if (navRight && darkToggle) {
      navRight.insertBefore(sw, darkToggle);
    } else if (navRight && navCta) {
      navRight.insertBefore(sw, navCta);
    } else if (navCta) {
      navCta.parentNode.insertBefore(sw, navCta);
    } else {
      var nav = document.querySelector('.nav');
      if (nav) nav.appendChild(sw);
    }

    updateButtons();
  }

  // ── Run on DOM ready ──
  function init() {
    injectSwitcher();
    translatePage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
