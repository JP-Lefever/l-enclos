## Version Française

## Compagnie L’Enclos – Site Web

> Un espace numérique pour explorer l’intimité humaine à travers la création contemporaine, la représentation et la médiation culturelle.

---

## Présentation

Ce site web présente la **Compagnie L’Enclos**, une compagnie de théâtre contemporain basée à Toulouse, qui explore les espaces clos de l’être humain — leur vulnérabilité, leurs carapaces mentales, leurs limites émotionnelles.

- Présente les **créations théâtrales**, les **immersions artistiques** et les **actions culturelles** menées dans les écoles (primaires, collèges) et en EHPAD.
- Construit essentiellement en **front-end**, avec une interface utilisateur enrichie de galeries et de carrousels visuels.
- Une **interface d’administration simple** permet :
    - la gestion des dates de représentations ou d’interventions (ajout, modification, suppression) ;
    - la consultation des messages reçus via le formulaire de contact.

---

## Structure du projet

lenclos/
├── public/ # Assets statiques (images, icônes, favicon…)
├── src/
│ ├── app/ # Pages et configuration globale
│ ├── components/ # Composants réutilisables (Header, Footer, Carrousel…)
│ ├── assets/ # Données JSON
│ └── features/ # Interface d’administration (dates, messages)
├── README.md # Ce fichier
├── package.json # Configuration (scripts, dépendances…)
└── .env # Variables d’environnement (API, routes admin…)

---

## Utilisation

- **Accès public** : pages de présentation, créations, immersions, contact.
- **Accès administrateur** (authentifié) : gestion des dates et consultation des messages.

Les données sont chargées depuis **PostgreSQL** via **Supabase**.

---

## Déploiement

- Déploiement continu via **Vercel** sur la branche `main`.
- Variables d’environnement à configurer dans Vercel :
    - `DATABASE_URL` (Supabase)

---

## Contribution

1. Fork ce dépôt
2. Crée une branche
   ```bash
   git checkout -b feature/ma-feature
3. Commit
   ```bash
   git commit -m 'Ajout de ma feature'
4. Push
   ```bash
   git push origin feature/ma-feature
5. Ouvre une Pull Request

---

##  Remerciements

La Compagnie L’Enclos pour sa vision artistique et sa confiance.

Outils et services utilisés : Vercel, PostgreSQL, Supabase, pnpm, SlickCarousel, Framer Motion.

Toute personne ayant contribué au projet.


---
---


## English Version

## Compagnie L’Enclos – Website

> A digital space to explore human intimacy through contemporary creation, performance, and cultural mediation.

---

## Overview

This website showcases **Compagnie L’Enclos**, a contemporary theatre company based in Toulouse, exploring the enclosed spaces of the human being — their vulnerability, mental shells, and emotional boundaries.

- Highlights **theatrical creations**, **artistic immersions**, and **cultural activities** carried out in primary schools, middle schools, and retirement homes (EHPADs).
- Primarily built in **front-end**, with a user interface enhanced by galleries and visual carousels.
- A **simple administration interface** allows:
    - Managing performance or intervention dates (add, edit, delete);
    - Viewing messages received via the contact form.

---

## Project Structure

lenclos/  
├── public/ # Static assets (images, icons, favicon…)  
├── src/  
│ ├── app/ # Pages and global configuration  
│ ├── components/ # Reusable components (Header, Footer, Carousel…)  
│ ├── assets/ # JSON data  
│ └── features/ # Administration interface (dates, messages)  
├── README.md # This file  
├── package.json # Configuration (scripts, dependencies…)  
└── .env # Environment variables (API, admin routes…)

---

## Usage

- **Public access**: presentation pages, creations, immersions, contact.
- **Administrator access** (authenticated): manage dates and view messages.

Data is loaded from **PostgreSQL** via **Supabase**.

---

## Deployment

- Continuous deployment via **Vercel** on the `main` branch.
- Environment variables to set in Vercel:
    - `DATABASE_URL` (Supabase)

---

## Contribution

1. Fork this repository
2. Create a branch
   ```bash
   git checkout -b feature/my-feature
3. Commit your changes
   ```bash
   git commit -m 'Add my feature'
4. Push to your branch
   ```bash
   git push origin feature/my-feature
5. Open a Pull Request

---

## Acknowledgements

Compagnie L’Enclos for their artistic vision and trust.

Tools and services used: Vercel, PostgreSQL, Supabase, pnpm, SlickCarousel, Framer Motion.

Everyone who contributed to the project.