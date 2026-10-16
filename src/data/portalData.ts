import { PatientAppointment, PostOpGuide } from '../types';

export const DEMO_APPOINTMENTS: PatientAppointment[] = [
  {
    id: "RDV-829104",
    patientName: "Sarah Mansouri",
    phone: "+212 661 45 88 12",
    treatment: "Hollywood Smile — Pose Définitive des Facettes E-Max",
    date: "15 Octobre 2026",
    time: "10:30",
    doctor: "Dr. Rania Azzouzi",
    room: "Salle 1 — Studio Esthétique DSD",
    status: "confirmed",
    prepInstructions: [
      "Effectuer un brossage soigné et passer le fil dentaire avant la séance",
      "Éviter les boissons très colorées (café, thé noir) le matin du rendez-vous",
      "Prévoir une durée d'intervention d'environ 90 minutes en salle dédiée",
      "Le consentement éclairé esthétique sera validé avant le scellement définitif"
    ],
    postOpGuideId: "post-op-facettes"
  },
  {
    id: "RDV-492018",
    patientName: "Karim Benjelloun",
    phone: "+212 662 90 14 33",
    treatment: "Contrôle Post-Opératoire & Pose Vis de Cicatrisation Implant",
    date: "18 Octobre 2026",
    time: "14:00",
    doctor: "Dr. Rania Azzouzi",
    room: "Salle 2 — Bloc Chirurgie Guidée 3D",
    status: "confirmed",
    prepInstructions: [
      "Apporter vos dernières radiographies de contrôle ou bilan CBCT",
      "Poursuivre le bain de bouche antiseptique prescrit jusqu'à la consultation",
      "Signaler au praticien toute sensibilité résiduelle à la pression"
    ],
    postOpGuideId: "post-op-implant"
  },
  {
    id: "RDV-710342",
    patientName: "Yasmine Tazi",
    phone: "+212 663 12 77 09",
    treatment: "Orthodontie Invisible — Livraison Nouveaux Aligneurs 3D",
    date: "22 Octobre 2026",
    time: "16:30",
    doctor: "Dr. Rania Azzouzi",
    room: "Salle 3 — Scanner Optique & Ortho",
    status: "confirmed",
    prepInstructions: [
      "Venir avec votre jeu d'aligneurs actuels en bouche et leur boîte",
      "Un scan intra-oral 3D de contrôle sera réalisé pour évaluer l'alignement",
      "Prévoir 30 minutes de consultation"
    ],
    postOpGuideId: "post-op-ortho"
  }
];

export const POST_OP_GUIDES: PostOpGuide[] = [
  {
    id: "post-op-implant",
    title: "Chirurgie Implantaire & Greffe Osseuse",
    procedure: "Pose d'implant dentaire, régénération osseuse ou comblement sinusien",
    category: "Implantologie",
    recoveryTimeline: "Confort initial en 48-72h | Cicatrisation muqueuse : 7 à 10 jours | Ostéo-intégration complète : 8 à 12 semaines",
    immediateCare: [
      "Gardez la compresse stérile fermement serrée entre vos mâchoires pendant 30 minutes. Ne crachez pas.",
      "Appliquez une poche de glace (enveloppée dans un linge propre) sur la joue pendant 15 minutes par heure les premières 6 heures.",
      "Ne rincez pas la bouche et ne crachez pas durant les premières 24 heures pour préserver le caillot sanguin.",
      "Reposez-vous en position semi-assise, la tête surélevée par deux oreillers."
    ],
    days2to7: [
      "Dès le lendemain (J+1), effectuez 3 bains de bouche antiseptiques par jour après chaque repas (bain passif de 1 minute sans gargarisme brutal).",
      "Brossez délicatement les autres dents avec une brosse à dents très souple, en évitant le site chirurgical direct.",
      "Évitez tout effort physique lourd, sport intense, sauna ou exposition solaire prolongée pendant 3 à 5 jours."
    ],
    dietaryAdvice: [
      "Alimentation molle, tiède ou froide impérative pendant 48 heures (purées tièdes, veloutés, smoothies, compotes, yaourts).",
      "Interdiction formelle de boire à la paille (la dépression intra-buccale déloge le caillot et provoque des saignements).",
      "Évitez impérativement l'alcool, les épices, les graines et le tabac qui compromet le taux de réussite de l'implant."
    ],
    medicationTips: [
      "Prenez la première dose d'antalgique prescrit avant la dissipation totale de l'anesthésie locale.",
      "Si des antibiotiques ont été prescrits, suivez le traitement jusqu'à la fin de la boîte sans interruption prématurée.",
      "Ne prenez pas d'aspirine sans avis médical car elle fluidifie le sang."
    ],
    warningSigns: [
      "Saignement continu et abondant qui persiste après 45 minutes de compression continue sur une compresse stérile",
      "Fièvre supérieure à 38.5°C au-delà de 48 heures post-opératoires",
      "Douleur aiguë croissante non calmée par les antalgiques prescrits",
      "Engourdissement persistant de la lèvre inférieure ou du menton plus de 12 heures après l'intervention"
    ],
    printableSummary: "Fiche officielle de suivi chirurgical - Dr. Rania Azzouzi Tanger. En cas d'urgence 24/7, contactez immédiatement le +212 661 24 09 88."
  },
  {
    id: "post-op-extraction",
    title: "Extraction Dentaire & Dents de Sagesse",
    procedure: "Avulsion dentaire simple ou chirurgicale de dents de sagesse incluses",
    category: "Chirurgie Orale",
    recoveryTimeline: "Fermeture alvéolaire en 7 à 10 jours | Rétablissement masticatoire sous 48h",
    immediateCare: [
      "Mordez fermement sur la compresse pendant 30 minutes sans parler ni cracher.",
      "Appliquez du froid sur la joue par intermittence pour limiter l'œdème (gonflement).",
      "Ne touchez pas l'alvéole avec vos doigts ou votre langue."
    ],
    days2to7: [
      "Bains de bouche tièdes à l'eau salée ou antiseptiques légers à partir du lendemain.",
      "Brossage attentif de toute la denture avec une brosse post-opératoire douce.",
      "Les fils résorbables tomberont d'eux-mêmes entre 10 et 21 jours."
    ],
    dietaryAdvice: [
      "Repas mous et tièdes les 2 premiers jours.",
      "Ne pas mastiquer du côté opéré.",
      "Évitez les aliments croustillants (chips, cacahuètes, croûtes)."
    ],
    medicationTips: [
      "Paracétamol ou ibuprofène selon l'ordonnance médicale remise au cabinet.",
      "Prendre les comprimés au milieu des repas pour protéger l'estomac."
    ],
    warningSigns: [
      "Saignement rouge vif incontrôlable",
      "Douleur pulsatile irradiant vers l'oreille vers J+3 ou J+4 (signe d'alvéolite)"
    ],
    printableSummary: "Fiche officielle d'avulsion dentaire - Dr. Rania Azzouzi Tanger."
  },
  {
    id: "post-op-facettes",
    title: "Facettes Céramiques & Réhabilitation Esthétique",
    procedure: "Pose de facettes feldspathiques ou E-Max, Hollywood Smile",
    category: "Esthétique Dentaire",
    recoveryTimeline: "Adaptation immédiate | Intégration occlusale en 48-72h",
    immediateCare: [
      "Une légère sensibilité gingivale ou thermique (froid/chaud) peut persister 24 à 48 heures.",
      "Évitez de consommer des boissons glacées ou brûlantes immédiatement après le collage.",
      "Vérifiez que votre occlusion (engrènement) est parfaitement confortable lors de la fermeture."
    ],
    days2to7: [
      "Hygiène bucco-dentaire normale : brossage 2 à 3 fois par jour avec brosse souple.",
      "Passage quotidien du fil dentaire entre les facettes dès le lendemain du scellement.",
      "Si une gouttière de protection nocturne (bruxisme) vous a été prescrite, portez-la chaque nuit."
    ],
    dietaryAdvice: [
      "Évitez de croquer directement dans des aliments très durs avec les incisives (pommes entières, carottes crues, os, glaçons). Coupez-les en morceaux.",
      "Ne jamais utiliser vos dents comme outils (ouvrir des emballages, casser des fils)."
    ],
    medicationTips: [
      "Un gel désensibilisant ou un antalgique léger est suffisant si une sensibilité apparaît.",
      "Dentifrice spécial émail sensible recommandé pendant 10 jours."
    ],
    warningSigns: [
      "Sensation de surépaisseur ou de gêne lors de la mastication (nécessite un léger polissage de confort au cabinet)",
      "Décollement accidentel ou fêlure suite à un choc traumatique"
    ],
    printableSummary: "Fiche de garantie et d'entretien des facettes - Dr. Rania Azzouzi Tanger."
  },
  {
    id: "post-op-endodontie",
    title: "Endodontie & Traitement Canalaire",
    procedure: "Dévitalisation, retraitement de canaux, nettoyage sous digue",
    category: "Soins Conservateurs",
    recoveryTimeline: "Sensibilité ligamentaire résiduelle durant 2 à 4 jours",
    immediateCare: [
      "Attendez la disparition complète de l'anesthésie avant de manger pour éviter de vous mordre la langue ou la joue.",
      "La dent dévitalisée est temporairement fragile : ne mastiquez pas dessus tant qu'elle n'est pas couronnée ou reconstituée."
    ],
    days2to7: [
      "Brossage normal de la dent.",
      "Prenez impérativement votre rendez-vous de pose de couronne ou d'onlay pour protéger la dent des fractures."
    ],
    dietaryAdvice: [
      "Évitez les aliments collants (chewing-gums, caramels) qui pourraient arracher le pansement provisoire."
    ],
    medicationTips: [
      "Antalgique/anti-inflammatoire prescrit pour calmer l'inflammation du ligament dentaire."
    ],
    warningSigns: [
      "Perte complète du pansement provisoire",
      "Gonflement de la gencive en regard de la dent"
    ],
    printableSummary: "Fiche de suivi endodontique - Dr. Rania Azzouzi Tanger."
  },
  {
    id: "post-op-blanchiment",
    title: "Éclaircissement Dentaire au Fauteuil",
    procedure: "Blanchiment professionnel activé par lampe LED froide",
    category: "Esthétique Dentaire",
    recoveryTimeline: "Fixation définitive de la blancheur : 48 heures",
    immediateCare: [
      "Appliquez une noisette de gel désensibilisant sur vos dents en cas de petites pointes de sensibilité thermique.",
      "Rincez à l'eau tempérée."
    ],
    days2to7: [
      "Régime Blanc strict pendant 48 heures : pas de thé noir, café, vin rouge, sodas colorés, curry, sauce tomate, fruits rouges, ni tabac.",
      "Privilégiez les aliments clairs : eau, lait, riz, pâtes nature, viandes blanches, poissons, pommes de terre."
    ],
    dietaryAdvice: [
      "Évitez les aliments et boissons très acides (citron, vinaigre, sodas) pendant 3 jours."
    ],
    medicationTips: [
      "Dentifrice doux au fluor et nitrate de potassium."
    ],
    warningSigns: [
      "Sensibilité intense et continue durant plus de 72 heures (très rare)"
    ],
    printableSummary: "Protocole Régime Blanc & Pérennité de l'éclaircissement - Dr. Rania Azzouzi Tanger."
  },
  {
    id: "post-op-ortho",
    title: "Orthodontie & Aligneurs Invisibles",
    procedure: "Gouttières transparentes d'alignement dentaire",
    category: "Orthodontie",
    recoveryTimeline: "Légère pression les 24-48 premières heures de chaque nouveau jeu",
    immediateCare: [
      "Portez vos aligneurs 20 à 22 heures par jour, en ne les retirant que pour manger et vous brosser les dents.",
      "Utilisez les mâchouilleurs (chewies) pour bien enclencher les gouttières sur vos taquets."
    ],
    days2to7: [
      "Nettoyez vos aligneurs quotidiennement à l'eau tiède et avec une brosse souple sans dentifrice abrasif.",
      "Conservez toujours vos anciens aligneurs dans leur pochette de sécurité."
    ],
    dietaryAdvice: [
      "Ne buvez jamais de boissons chaudes (café, thé brûlant) avec les aligneurs en bouche (risque de déformation du matériau).",
      "L'eau plate reste la seule boisson autorisée avec les aligneurs."
    ],
    medicationTips: [
      "La pression ressentie au changement de gouttière est le signe normal du déplacement dentaire."
    ],
    warningSigns: [
      "Aligneur fissuré ou perdu : contactez immédiatement le cabinet pour savoir si vous devez passer au jeu suivant."
    ],
    printableSummary: "Guide patient aligneurs transparents - Dr. Rania Azzouzi Tanger."
  }
];
