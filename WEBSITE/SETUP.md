# 🚀 BNS Prestige — Guide de mise en ligne

## Ce dont tu as besoin (tout est GRATUIT)
1. **Netlify** — hébergement du site (netlify.com)
2. **Supabase** — base de données temps réel (supabase.com)

---

## ÉTAPE 1 — Créer la base de données Supabase

1. Va sur **supabase.com** → clic "Start your project" → crée un compte (GitHub ou email)
2. Clique **"New Project"**
   - Nom : `bns-prestige`
   - Mot de passe : choisis un mot de passe fort (note-le)
   - Région : **West Europe**
   - Clic "Create new project" (attendre ~2 minutes)

3. Une fois créé, va dans **SQL Editor** (menu gauche) et colle ce code puis clic **RUN** :

```sql
-- Table des disponibilités (calendrier)
CREATE TABLE availability (
  id BIGSERIAL PRIMARY KEY,
  car TEXT NOT NULL,
  date DATE NOT NULL,
  status TEXT NOT NULL DEFAULT 'available',
  UNIQUE(car, date)
);

-- Table des réservations (formulaires reçus)
CREATE TABLE reservations (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  car TEXT,
  prenom TEXT,
  nom TEXT,
  email TEXT,
  telephone TEXT,
  permis TEXT,
  date_debut DATE,
  date_fin DATE,
  mode_livraison TEXT,
  adresse TEXT,
  options TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending'
);

-- Autoriser la lecture publique des disponibilités
CREATE POLICY "Public read availability" ON availability FOR SELECT USING (true);
CREATE POLICY "Public insert reservations" ON reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin all availability" ON availability FOR ALL USING (true);
CREATE POLICY "Admin all reservations" ON reservations FOR ALL USING (true);

ALTER TABLE availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
```

4. Va dans **Settings** → **API** et note :
   - **Project URL** : `https://xxxxxxxxxx.supabase.co`
   - **anon public** key : `eyJhbGciOi...` (clé longue)

---

## ÉTAPE 2 — Configurer le site

Ouvre le fichier **`supabase-config.js`** et remplace les 2 lignes (clé **anon public** depuis Settings → API) :

```js
window.SUPABASE_URL = 'https://TON-ID.supabase.co';
window.SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR...';  // ou la clé « publishable » affichée par Supabase
```

Toutes les pages (`nosvoitures`, `reserver`, `contact`, `admin`) lisent cette config.

---

## ÉTAPE 3 — Mettre le site en ligne sur Netlify

1. Va sur **netlify.com** → crée un compte gratuit
2. Clique **"Add new site"** → **"Deploy manually"**
3. **Glisse-dépose le dossier entier** du site (avec tous les fichiers + images)
4. Netlify génère une URL type : `https://bns-prestige-xyz.netlify.app`
5. Tu peux changer le nom dans Site Settings → Domain Management

---

## ÉTAPE 4 — Domaine personnalisé (optionnel)

Si tu veux `bnsprestige.be` :
1. Achète le domaine sur **Namecheap.com** (~10€/an) ou **OVH.com**
2. Dans Netlify → Domain settings → Add custom domain
3. Suis les instructions pour pointer le DNS vers Netlify

---

## UTILISATION QUOTIDIENNE

### Gérer le calendrier
→ Va sur `ton-site.netlify.app/admin.html`
→ Mot de passe : **1357**
→ Sélectionne la voiture → clique sur les jours pour basculer Disponible/Complet
→ Les changements apparaissent **en temps réel** sur le site public

### Voir les réservations
→ Page Admin → onglet "Réservations"
→ Confirmer ou archiver les demandes

---

## STRUCTURE DES FICHIERS (tout doit être dans le même dossier)

```
📁 BNS-Prestige/
├── index.html
├── nosvoitures.html
├── reserver.html
├── contact.html
├── admin.html
├── supabase-config.js   ← À REMPLIR
├── rs3_1.png
├── rs3_2.png
├── rs3_3.png
├── rs3_int1.png
├── rs3_int2.png
├── golfr_1.png
... (toutes les images)
```

---

## Questions fréquentes

**"Les disponibilités n'apparaissent pas ?"**
→ Vérifie que `supabase-config.js` est bien rempli avec ton URL et ta clé

**"Comment ajouter mes vrais numéros ?"**
→ Cherche `+32 4XX XX XX XX` dans chaque HTML et remplace par ton vrai numéro

**"Comment recevoir les formulaires par email aussi ?"**
→ Dans Supabase → Database → Webhooks, ou utilise Zapier gratuit pour transférer vers Gmail

---

✅ **C'est tout !** Supabase gère la base de données, Netlify gère l'hébergement.
Les deux sont gratuits jusqu'à des dizaines de milliers de visites par mois.
