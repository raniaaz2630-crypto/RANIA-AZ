# Optimisation SEO — mode d'emploi

## Avant la mise en ligne (obligatoire)
1. Dans `src/data/clinicData.ts` (bloc `CLINIC_CONTACT`) : remplacer l'adresse, les téléphones et l'e-mail par les vrais.
   Ces valeurs alimentent le site ET les données structurées Google.
2. Définir l'adresse du site (variable `SITE_URL`, ex. `https://www.votre-domaine.ma`) dans les réglages de l'hébergeur.
   Sans elle, le plan du site (sitemap.xml) et la balise canonical ne sont pas créés.
3. Commande de construction : `npm run build` — dossier à publier : `dist`.

## Ce que fait `npm run build`
- Construit le site (Vite) puis lance `scripts/seo.ts` : texte lisible sans JavaScript, JSON-LD (Dentist, FAQPage),
  6 pages de soins `/soins/<nom>/`, `sitemap.xml`, `robots.txt`.

## Reste à faire par le cabinet (non automatisable)
- Remplacer les avis fictifs (`INITIAL_REVIEWS`) et les chiffres (`STATS_ITEMS`) par des données réelles et justifiables.
- Créer/compléter la fiche Google Business Profile avec exactement les mêmes nom, adresse, téléphone.
- Ajouter la page « Mentions légales ».
