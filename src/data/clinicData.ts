import { ClinicalCase, DentalSpecialty, PatientReview } from '../types';

export const CLINIC_CONTACT = {
  name: "Dr. Rania Azzouzi",
  title: "Chirurgienne Dentiste & Spécialiste en Esthétique Dentaire",
  address: "123 Boulevard Mohammed V, Tanger, Maroc",
  phone: "+212 539 94 82 10",
  emergencyPhone: "+212 661 24 09 88",
  whatsappNumber: "212661240988",
  whatsappUrl: "https://wa.me/212661240988?text=Bonjour%20Dr.%20Azzouzi,%20je%20souhaite%20prendre%20un%20rendez-vous%20au%20cabinet.",
  email: "dr.rania.azzouzi@gmail.com",
  heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1BzMO1x7Y-zeRwK90NRVD2hlERX-fj4rrIKi9s0JSPoDW1rqyOT2vwl0synL26558q4f9K9ABX8CmvMD4wnFARp-MS9JFD2UeADhi-gg9xSBawaZH0sQUxBL5NJr4Y8dNRu7SBaAsTCDptmwVL_GgrVmh40bLHlZxrP9ruj3IHlPQJqs9M7Q1bjBP7b3e0oJ9nPjv9bUOrVshJqv5QEgHq2QTfT_NSFOgiRoT-_a36AAWcFrmjQdbKBeUhrk0AsVCS7jZxiKUtxyQdVQ",
  doctorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1BzMO1x7Y-zeRwK90NRVD2hlERX-fj4rrIKi9s0JSPoDW1rqyOT2vwl0synL26558q4f9K9ABX8CmvMD4wnFARp-MS9JFD2UeADhi-gg9xSBawaZH0sQUxBL5NJr4Y8dNRu7SBaAsTCDptmwVL_GgrVmh40bLHlZxrP9ruj3IHlPQJqs9M7Q1bjBP7b3e0oJ9nPjv9bUOrVshJqv5QEgHq2QTfT_NSFOgiRoT-_a36AAWcFrmjQdbKBeUhrk0AsVCS7jZxiKUtxyQdVQ",
  hours: [
    { day: "Lundi - Vendredi", time: "09:00 - 19:00" },
    { day: "Samedi", time: "09:00 - 14:00" },
    { day: "Dimanche", time: "Fermé (Urgences sur appel)" },
  ]
};

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: "hollywood-smile",
    title: "Hollywood Smile",
    category: "esthetic",
    categoryLabel: "Esthétique Dentaire",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWBSu7joGa7RUIB7R6H1EI8obf_IUS_0V1ybZa9KI96EnEoy2TAVqlC6OfbvU1881Rjbw8h0YO0zSyqW-bftjpWXpPMrshin61zjcQnKDYA0OO9FORBRGtSAb3q9gKlUK87mzkPHwn5xP4H4EgWKgDiZ6O3c3oH4wEkxilZOQik9uYOYb0WGqLSUrDyzz3ffFuEM2_OiTEbvMlp4tWZZ6HNCBI1aqGiNn1HiirgSmMngeR2aqcivhr0cxGAEMmMrf_bwQP_bw7sA1ATkk",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQW9rGXzwEF2YD7lVIBY6mBP-Ac1wRzbfzuApRULo0h8-itVTS-4KAcLcTVnIw1ONEZaYKJsmbZXJ1OyVCc8ozToFDp4Y05qNF07AWcTk7Yb2WE1-Y_6aYBT1VIqzPAqwiFL6RCRWfUrlsCmFoEPUq9ytLxmO5ngkXAa6wi1H2cZmHTNNtJoZHCdKEKoc7f1SdQdUNunOVR4sydT5lNQ_FeAbQDP2Bd8uhhxaes7RuiWptN4nGAHQnSus60BMF95DwL28Cu29a4xN2CRg",
    defaultPosition: 54,
    description: "Réhabilitation esthétique complète par facettes céramiques feldspathiques ultra-fines. Correction de la teinte, des dysharmonies d'axes et de la ligne du sourire.",
    duration: "2 séances (10 jours)",
    technique: "Digital Smile Design 3D & Facettes E-Max sans meulage invasif"
  },
  {
    id: "depigmentation-gingivale",
    title: "Dépigmentation gingival",
    category: "periodontics",
    categoryLabel: "Parodontie & Laser",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzL3CevHw8pGbhG_pdygqkXjUT9JFn5_v2WAp1-RAg3f_Fp3UbMsPAc---IEnoZ9sRPJ-e730hAtpzrWsbkPnEQSY1WLXlwZzVe1m75SC7RN9ffsms7He0QneiSjXCkOJ8sH2DCt5HX_GeYL1vPit-LEXDkVPgEdTEXe5NW0bXi0fgiOh6F_8E8syFaqndamMZWA1tk0VvKgWpzuMIJY8a6qPvUlSzI3XsnkxZsVL2DDzogKKwBcvWbQ1FTS7UbL4N92c70Kw1VApbogM",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaKwqTApvwwQ1a5SOkKkYWQnh2VYMfohaB6MZUf7lje9qCFibtqNiw0ewkJKPP0WCIbNR_uGwRRUFjlTpWbDGAPsNMNghyx0V9y2z8gOpsraeq_4SD8z52Y681PlwQBD5vTWQD_gts3ZJljuBEoizXneOgGjZa7kEz6FYSJwe6nZGVTKo4aJlbgXc_0cFBkjFBUAhIc0CNEHzpNzNkPx8CGh2-9KbPcizMsYm5HDBJXNOgXRyp9L6Rm2F0Cypaoc3sxrrfkv1it6u9w8E",
    defaultPosition: 54,
    description: "Élimination indolore des mélanodermies et hyperpigmentations de la gencive par laser diode haute précision. Rétablissement d'une gencive rose saine et harmonieuse.",
    duration: "1 séance (35 minutes)",
    technique: "Micro-ablation au Laser Diode sous anesthésie locale douce"
  },
  {
    id: "orthodontie",
    title: "Orthodontie",
    category: "ortho",
    categoryLabel: "Orthodontie & Aligneurs",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBud_nyx1ilR9CcA3omK9tlIWfd-zFUwAIWN43fkjMYVUEN3yADI7Ld5C9pw8pWB7BWyh7oRi5ri6DXRwasY_vbzFo_3ruCf0AkNDzfaibqPEw_kKh2a-uM1aPNAvw2uO-UbK9rizC8k7XZ0lV8zbBaAvjCw5i5V-2oJfASbGOkOq2UszoJKuuNgCoMKccN8_wx6ZhMP3JTJ8F-QF5kkrhhB7opW4_2wod0JxEVFEbvPsD3bRRNTuVoLZWHBl1HE8iBPNIwrtc2Jn0-Nhw",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0WJLBv3RN2wRUyu7l0cJ3mxvspyqld6tz3dnRGHZkjraljGKkJuOTRCjFDCFwRJIZ_nf4wE-0vLUdoMOe8uU70H43yFgXf_jGiy3U-zvw_c2Mnvrdi4WnfCMZ4yQ1xVB2lDOwdhc3EPFSDbuXcYM7-kQ4O1U5ZqtWlGJzFNhDn7CWIQV5Ver4ay5VnBSXjRFd_E_DpwHCI5Gb8oAdJMsiXggNoisxaFeytifs4FBZso8z11_LgFqcpLyrbMkup96Bgxw0szT0CBpERto",
    defaultPosition: 58,
    description: "Correction d'encombrement dentaire sévère et de rotation incisive grâce à la biomécanique orthodontique moderne. Rétablissement d'un arc symétrique et fonctionnel.",
    duration: "14 mois de suivi",
    technique: "Thérapie orthodontique de précision avec contention invisible"
  },
  {
    id: "implants-dentaires",
    title: "Implants Dentaires",
    category: "implant",
    categoryLabel: "Implantologie Guidée",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1DE5kWKj_pa32sflj7n8LEu2_F2SfOfsu5Ag3ChJ3y-M7IDRETXoKBAfZSbxOlNcxPY7guA7_VkvDn-zoDjGnO2NUUuibL89PYXtqhHvXM7DRou_XxBIBUyqgUEPa7v5W40HOT_7Yqen4_04ko5_fYim2x9Yr335zj6i6s8oh3WF4-Oi8wmjsmDxvivoYPQ4-BwSxM7UBwWihYdGYFmQ1OFolR7oyMDhDq7gTrSOWFu0T_7neYUnnjYnhsTm6QpsxwIz4r3VZNH-07Bk",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuChK32uJxst9w8w7IXSj9eC98lzP_puf4Idk9-919rW8Q1iJOIzi2gZ2BdcX3KgasvgCuos5Au-xW6eGwm5qyzeFLv7dOhoUzbeYHcm7vJgS-9-ofnBF96no0vSsqF8qGqsQKwk6S1_Dj9EMoW7lvv5XW304AXbGLvSbYTo_KDrHTA8pDlBD1F8EjninOAb76t6mgaYEkNDlLn25Xds0zdpXCAwcrb6jchZGnMiPHGFK7NtR2pjfRPLWYtrscHouTt2BvCLraSe1oH7-zg",
    defaultPosition: 54,
    description: "Pose d'implants en titane biocompatible avec guide chirurgical 3D pour édentement partiel, suivie de couronnes tout-céramique vissées mimant parfaitement l'émail naturel.",
    duration: "Mise en charge immédiate",
    technique: "Chirurgie guidée numérique sans lambeau & piliers anatomiques en zircone"
  },
  {
    id: "blanchiment-dentaire",
    title: "Blanchiment dentaire",
    category: "esthetic",
    categoryLabel: "Éclaircissement & Esthétique",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjzuXyiQ96f52kYNgfzR8U_NgCoYQt2OusFHUBNBm2WjGFcu3mpuDma9emG7gYsUOuAbpKMjC6MkDf-VOlAq3Tb2Xp1r0YiOdzPeoj0Vhb4kQGk5f7ukGAwjVvFO0y6sYn7KMazZRjpIvlT40A7C4d6XeP4hlshDfXCoVvGGh3t-cgCsL2ATZS5Pt_hSTymgYEjN8J2ytiJLcl5oce3yHVGtub2m10JeLQUkB5BZhNS92oUB0-Zs1nQGWkGyypT9rRxoHIE9aSkSz4GK8",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpP1_pvyf5lPkzz_AzlaW-2VSHmb4MCExc9O7KvR0fkigQkUgmz6IGgyZPtriheKwQ2YtSLcA2wE_PQAZGu1i2vM9Hh7SLmL5iqyenA4ZUw_64Xl4-Pr4nr3lLOH_fxOuN6S2X6MVdw9peIg9RFJcovxuExY6yZJ3UYV-WBSb3FSClTkwmtc0xygKjX9ygFYBZpRY21tajG2tn-Z0n3HzDajbafAhEEMRrGT0MW4OxQgnOPAmPDPpO_Jtoy29hH0rTsrluFNo45NkmITg",
    defaultPosition: 50,
    description: "Éclaircissement professionnel médical au fauteuil avec activation photo-luminescente sécurisée. Gain de 6 à 8 teintes sans sensibilité dentaire prolongée.",
    duration: "1 séance de 45 minutes",
    technique: "Gel au peroxyde d'hydrogène activé par lampe LED froide de dernière génération"
  },
  {
    id: "elongation-coronaire",
    title: "Elongation coronaire",
    category: "periodontics",
    categoryLabel: "Chirurgie Plastique Parodontale",
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCdvJlngMNQfHFqNSg2tdhPsYg6im8PKJn2-mldib2D8OIKMWovVaxYvr5c7Pb1e1SXl_c-HJjrWsuUVSgGZMO3EhtAyk9zTEokXCAnlP_hPwflfUt0e60rZ-Gl6l8AWxRM1nnLlL6KVK3OjW34ZZkT5EMnmH2vRVivernO6AJLH-39M2Vkj4gpysPhxKZ-bUW-2vETmAXzgbI-L6suY-3F_3XUAkCfNFBqwIMUzXADzou952QS5HrAl94oNc_5bt4V3ifhmRZvIwKQuw",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuyJ6_eHRdXCmwZiSzX9iPhPKVYiYaA_USVgngz083Daxl9OrdaaQQVctgNHMPdlTCN8tRq6KUZ2-E_xn2tlYTU__UfLSO5d15ZOeexsY6iYCCnnU_Fu78oVPG0ktb0b_4Wk_k3q9l2BpiAsr11ACS0vVlCTHpITqrYTzRkLAaHLzU_A1ZTmgJZsugo2kdECJEbTHsHy7xuPJWd_lWFB4axv3IOFbB1o01QPQIGxFEHimpilG9kjAFdBmgBR2BvjLU3MCeU9fnOWAQyto",
    defaultPosition: 50,
    description: "Remodelage du collet gingival et de l'espace biologique pour corriger un 'gummy smile' (sourire gingival) et révéler la proportion dorée des dents naturelles.",
    duration: "1 séance (40 minutes)",
    technique: "Microchirurgie esthétique assistée au microscope optique et piezo-chirurgie"
  }
];

export const SPECIALTIES: DentalSpecialty[] = [
  {
    id: "caries-canaux",
    title: "Caries et traitements canalaires",
    shortDesc: "Soins conservateurs et endodontie pour préserver l'intégrité de vos dents naturelles.",
    fullDesc: "Prise en charge douce et microscopique des lésions carieuses profondes et dévitalisations modernes sous digue étanche. Nous utilisons des instruments rotatifs en nickel-titane et une obturation thermoplastique tridimensionnelle pour sauver vos dents naturelles de manière pérenne et indolore.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlK77UtcOiiGHBuYPgf67QMPx51uoKmnLe_Z8zCOgXYe4EI-JHs2Vd9lD8fPCr22meptVEVfHBbK8EEbicwGV2lGubtBdNc2B6sp0ZBoYT4T_S79YzsLOFh4FvcExqZMv7GdPdHME1AiTkru_egx3XyWAFGdbyaSJb7sQN7Kc7PD5VRWqjJCyColVnEb0VJJvJJXZk-8yxzvquf27MryVtTlfc5EtP6te4S_huxoBRHQ2Ikh7IzgftJl3OkN_IbdqntUpYurQMgsmKH6M",
    rotationClass: "-rotate-6 sm:-mr-12 lg:-mr-16 mt-8",
    tiltDegree: -6,
    badge: "01",
    benefits: ["Soulagement immédiat de la douleur", "Préservation de la racine naturelle", "Traitements sous champ opératoire stérile"],
    durationEstimate: "45 à 60 min",
    anesthesiaType: "Anesthésie ostéocentrale sans engourdissement de la lèvre"
  },
  {
    id: "detartrage-soins",
    title: "Détartrage & Soins",
    shortDesc: "Prévention et hygiène bucco-dentaire approfondie pour des gencives saines.",
    fullDesc: "Protocole Guided Biofilm Therapy (GBT) utilisant des micro-poudres d'érythritol douces pour éliminer tartre, taches superficielles et biofilm bactérien sans agresser l'émail ni irriter les gencives. Indispensable pour prévenir la parodontite et garantir une haleine fraîche.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhABLVAt4dQmQUK76jrHTLnBD50wvaMslJ2VVoCbAdx5miUDxWanzdbxp-Avb6lRWFRQQWjQjJdahPAas07GXLIpO10mWh4d64ghFFyfw_UnV0uw-wzknYWsdxOsOBFbmt4IImp_stzkxTybE0LzRp73GCr7lKHrJf6LPWifPQ0xkUme1Dn7sWMXtWtvVcOH-UqeOrA7Anty2LUNO5DuZ4uY39aKnb9bA-x475sn018UTuUECoeO2t5iP33LntoSMdkb9gym12XTxNjHo",
    rotationClass: "rotate-3 sm:-ml-4 z-10 -translate-y-8",
    tiltDegree: 3,
    badge: "02",
    benefits: ["Nettoyage ultrasonique ultra-doux", "Élimination des taches de thé / café / tabac", "Surfaçage radiculaire préventif"],
    durationEstimate: "30 à 45 min",
    anesthesiaType: "Sans anesthésie ou gel anesthésique de contact"
  },
  {
    id: "remplacement-dents",
    title: "Remplacement dents manquantes",
    shortDesc: "Restauration de la fonction masticatoire et de l'esthétique de votre sourire.",
    fullDesc: "Conception numérique et pose de couronnes en céramique biocompatible, bridges céramo-céramiques ou prothèses fixes transvissées. Chaque prothèse est conçue sur mesure selon l'anatomie occlusale de votre visage pour un confort masticatoire irréprochable.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB3MC1iCLMwDdN5d14IlOwfiI36hi-fkyJGcwD0dlstOQ6zaR3-y_r4owkOwK5FbbhF5FGCWTEwnHbggNutkHWuKzZnRUQAS_3M_X24SQeieOPyqM3MUTBiTVknnTgUNsrMtW8z9HJtMWgEoDxqpXjsHN3N77ZJ6jvuIiX1O6br_YryEOaCA1CXn0CcSsdrm6ZpBkLjgSaFNHUBUDX1oB4tOUdFu580XwhRiSQmBlKuD5dT7vqsDeO7Isg_OKrN0_HKf7KGcRLtv-DvO8",
    rotationClass: "-rotate-2 sm:-ml-12 lg:-ml-16 mt-12 z-0",
    tiltDegree: -2,
    badge: "03",
    benefits: ["Empreinte 3D optique sans pâte", "Céramique zircone translucide haute résistance", "Restauration complète du calage mandibulaire"],
    durationEstimate: "2 à 3 rendez-vous",
    anesthesiaType: "Anesthésie locale de confort"
  },
  {
    id: "implants",
    title: "Implants",
    shortDesc: "Solutions pérennes et biocompatibles pour une dentition fixe et naturelle.",
    fullDesc: "Implantologie guidée assistée par ordinateur (Cône Beam CT 3D). Les implants en titane pur ou céramique zircone remplacent la racine manquante avec un taux de succès clinique supérieur à 98%. Possibilité de mise en charge immédiate avec dent provisoire le jour même.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASyppSriMHgFBwxVeoLfgY8BaWYtVtD1Pw6tmkYP5HMDmE9o2iFyuC0mz4yVhlXul5wYokUPzw_5albAS7uPG4x3lWckR00WlyPp6lWZzRiy2hcKGi2PLq2ux3oVJyotwf6JHbMy-1h_69ybxaUxp9mromTkpAKl5Np-0TfbyMIKnVl_iEpOcpxKzUrRNkPlV_kT9_se8vqEJFnrIr5d5ZVmQYRdi9kL2bCI7zfvCD_tXS-ULjkg0XHzddwX__d0sBAHG0Rk0Aw31S6nI",
    rotationClass: "rotate-6 sm:-mr-12 lg:-mr-16 mt-4 z-10",
    tiltDegree: 6,
    badge: "04",
    benefits: ["Sensation identique à une vraie dent", "Aucune atteinte aux dents voisines", "Garantie de traçabilité biomédicale"],
    durationEstimate: "Intervention en 30 à 60 min",
    anesthesiaType: "Anesthésie locale indolore informatisée"
  },
  {
    id: "orthodontie-spec",
    title: "Orthodontie",
    shortDesc: "Alignement dentaire pour enfants et adultes, incluant les techniques invisibles.",
    fullDesc: "Gouttières d'alignement invisibles transparentes et bagues céramiques esthétiques. Simulation 3D du résultat avant même de débuter le traitement. Correction des chevauchements, diastèmes (écarts) et déséquilibres d'engrènement sans gêne au quotidien.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv1yI7PP9iQ2egnoveLHNB939Ve2xMOZsC3A6oa0-1bH2GS4cZf_V4-N4ecblIrT8YBqxdlwsM2_gx_FMgdOFsmgNWYyPDLZ9kn7zjTBnD6fMRBXYJERXU_ziSbk5Qv7QYMnYdodhry7Cyxkd-NE7rGWQFGQ9gnv8VkMLIe5Sb-SOdGPWldb5IOrjddJvY7w0HeAGpmW7bsh1IrzqoPslO-nAxD-CmVDO5nRhlrV3QrkUnqIdTksi9ImOpCEd8NYmINYjOFq_ldrgODgg",
    rotationClass: "-rotate-4 sm:-ml-4 z-20 -translate-y-4",
    tiltDegree: -4,
    badge: "05",
    benefits: ["Aligneurs amovibles et 100% transparents", "Hygiène buccale facilitée", "Suivi digital avec scan régulier"],
    durationEstimate: "Traitements de 6 à 18 mois",
    anesthesiaType: "Sans anesthésie requise"
  },
  {
    id: "esthetique-facettes",
    title: "Esthétique & Facettes",
    shortDesc: "Facettes en céramique ultra-fines pour un sourire éclatant et naturel.",
    fullDesc: "Conception architecturale du sourire selon le concept Digital Smile Design (DSD). Les facettes en céramique stratifiée ou pressée (épaisseur de 0.2 à 0.4 mm) corrigent la forme, la taille, la luminosité et les anomalies structurelles de l'émail de manière définitive.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClAsbtnvA1CyBCHsynVTEzamWrofAXAoddOnglCId6INVv3YDyhSghCjYbE513cxAGPJfB4z12GERLeXmAfYNvLalKbo-zZbGNwgyaBVB2RQSh2QwXCMIXEoOPlaX0I5HJBNUwnxq1S9TzKWpg2CTxxGdWpTDjE7Wh8KH_XL-cSeC2Yunnu4FwEhmP2OBkI0zd7GFUrWqXGBBCY26ZMWsA9bshXOhLVXHWnSWIAa_HSVC4HMd1pAJ18o48hDHiFkpZYXgF16h91wLicOI",
    rotationClass: "rotate-2 sm:-ml-12 lg:-ml-16 mt-8 z-0",
    tiltDegree: 2,
    badge: "06",
    benefits: ["Résultat naturel adapté à votre morphologie faciale", "Matériaux haut de gamme résistants aux taches", "Essayage d'un masque esthétique (Mock-up) avant pose"],
    durationEstimate: "2 à 3 séances",
    anesthesiaType: "Micro-anesthésie locale indolore"
  }
];

export const INITIAL_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    author: "Sarah M.",
    text: "Excellente expérience avec le Dr. Azzouzi. Le cabinet est d'une propreté irréprochable et l'équipe est très professionnelle. Je recommande vivement pour la qualité des soins et la douceur des interventions.",
    rating: 5,
    date: "Il y a 2 semaines",
    treatment: "Facettes céramiques & Détartrage",
    verified: true
  },
  {
    id: "rev-2",
    author: "Karim B.",
    text: "Un service de haute qualité. J'ai fait poser des facettes et le résultat dépasse mes espérances. Le Dr. Azzouzi prend le temps d'expliquer chaque étape. On se sent vraiment en confiance.",
    rating: 5,
    date: "Il y a 1 mois",
    treatment: "Hollywood Smile",
    verified: true
  },
  {
    id: "rev-3",
    author: "Yasmine T.",
    text: "Le meilleur cabinet dentaire de Tanger, sans aucun doute. Accueil chaleureux, technologies de pointe et un suivi impeccable. Je n'ai plus peur d'aller chez le dentiste grâce à eux.",
    rating: 5,
    date: "Il y a 1 mois",
    treatment: "Implants & Soins conservateurs",
    verified: true
  },
  {
    id: "rev-4",
    author: "Amine K.",
    text: "J'ai consulté en urgence un samedi pour une pulpite aiguë. Prise en charge rapide sans attente, anesthésie complètement indolore. Une équipe d'une grande bienveillance à Tanger.",
    rating: 5,
    date: "Il y a 2 mois",
    treatment: "Traitement canalaire d'urgence",
    verified: true
  }
];

export const STATS_ITEMS = [
  { value: "15", suffix: "+", label: "Formations d'excellence et certifications", isDecimal: false },
  { value: "2500", suffix: "+", label: "Sourires transformés avec succès", isDecimal: false },
  { value: "98", suffix: "%", label: "Traitements réussis & satisfaction", isDecimal: false },
  { value: "5.0", suffix: " ★", label: "Note d'excellence sur avis vérifiés", isDecimal: true }
];

export const FAQ_ITEMS: import('../types').FAQItem[] = [
  {
    id: "faq-1",
    category: "procedures",
    question: "Est-ce que la pose d'un implant dentaire est douloureuse ?",
    answer: "Non, la procédure se déroule sous anesthésie locale de haute précision et s'avère totalement indolore. Grâce à notre planification 3D guidée par ordinateur, l'intervention est mini-invasive, rapide et préserve au maximum les tissus osseux et gingivaux. Les suites opératoires sont généralement comparables à un simple soin dentaire et parfaitement calmées par des antalgiques courants.",
    keyPoints: ["Chirurgie guidée 3D sans lambeau", "Anesthésie locale électronique", "Reprise des activités le lendemain"]
  },
  {
    id: "faq-2",
    category: "procedures",
    question: "Combien de temps faut-il pour réaliser un Hollywood Smile avec facettes ?",
    answer: "La métamorphose complète d'un sourire avec facettes céramiques s'effectue généralement en 2 à 3 séances sur une période de 7 à 10 jours. Nous débutons par un bilan esthétique Digital Smile Design (DSD) et un essai préalable (mock-up en bouche) afin que vous visualisiez et validiez votre futur sourire avant la pose définitive des facettes ultra-fines.",
    keyPoints: ["Simulation numérique 3D préalable", "Facettes ultra-fines feldspathiques ou E-Max", "Résultat naturel sans surépaisseur"]
  },
  {
    id: "faq-3",
    category: "procedures",
    question: "Le blanchiment dentaire au fauteuil fragilise-t-il l'émail ?",
    answer: "Absolument pas lorsqu'il est supervisé par un chirurgien-dentiste qualifié. Au cabinet, nous utilisons des gels professionnels formulés avec un pH neutre et enrichis en agents reminéralisants (fluorure et nitrate de potassium). L'émail reste intact et sa translucidité naturelle est préservée sans risque de déminéralisation.",
    keyPoints: ["Gel au pH neutre certifié médical", "Activation par lampe LED froide", "Gain moyen de 6 à 8 teintes"]
  },
  {
    id: "faq-4",
    category: "procedures",
    question: "En quoi consiste l'alignement dentaire par gouttières transparentes ?",
    answer: "L'orthodontie invisible utilise une série de gouttières thermoformées transparentes et amovibles, changées toutes les 1 à 2 semaines. Elles déplacent les dents en douceur et de manière imperceptible au quotidien. Vous pouvez les retirer pour manger et vous brosser les dents en toute liberté sans contrainte alimentaire.",
    keyPoints: ["Gouttières 100% transparentes et discrètes", "Pas d'interdictions alimentaires", "Visualisation 3D du résultat dès la première séance"]
  },
  {
    id: "faq-5",
    category: "insurance",
    question: "Quelles mutuelles et assurances sont acceptées au cabinet à Tanger ?",
    answer: "Nous prenons en charge et fournissons l'ensemble des pièces réglementaires et feuilles de soins pour tous les organismes de prévoyance : CNOPS, CNSS ainsi que l'ensemble des compagnies d'assurances privées (Saham, AXA, RMA Watanya, AtlantaSanad, Allianz, MCMA, etc.) et assurances expatriés internationales.",
    keyPoints: ["Feuilles de soins CNOPS et CNSS complétées", "Dossiers de prise en charge préalable", "Factures détaillées aux normes fiscales"]
  },
  {
    id: "faq-6",
    category: "insurance",
    question: "Un devis écrit m'est-il remis avant de débuter les soins ?",
    answer: "Oui, la transparence fait partie intégrante de notre éthique médicale. À l'issue de votre bilan clinique initial et de vos radiographies 3D, le Dr. Azzouzi établit un plan de traitement personnalisé accompagné d'un devis clair et détaillé décrivant chaque acte, les matériaux choisis et les délais prévus.",
    keyPoints: ["Devis écrit sans engagement", "Explication détaillée de chaque option", "Aucun frais imprévu"]
  },
  {
    id: "faq-7",
    category: "insurance",
    question: "Proposez-vous des facilités de paiement échelonné ?",
    answer: "Oui, pour les traitements d'envergure nécessitant plusieurs étapes (implantologie, réhabilitation prothétique globale, orthodontie par aligneurs), le cabinet propose un règlement échelonné aligné sur l'avancement de vos séances de soins, sans frais supplémentaires.",
    keyPoints: ["Paiement fractionné par étapes", "Modalités adaptées au plan de traitement", "Règlement par carte, virement ou chèque"]
  },
  {
    id: "faq-8",
    category: "post-op",
    question: "Que puis-je manger après la pose d'implants ou une extraction ?",
    answer: "Durant les premières 48 heures, privilégiez une alimentation tiède ou froide et à texture molle (veloutés tièdes, purées, compotes, yaourts, œufs brouillés). Évitez les aliments durs, croquants, très chauds ou épicés, ainsi que l'usage de pailles qui risqueraient de mobiliser le caillot protecteur.",
    keyPoints: ["Aliments tièdes ou froids et mous", "Éviter graines, petits grains et croûtes de pain", "Ne pas aspirer à la paille"]
  },
  {
    id: "faq-9",
    category: "post-op",
    question: "Que faire en cas de léger saignement après une chirurgie dentaire ?",
    answer: "Un léger suintement rosé est normal dans les 24 premières heures. En cas de saignement plus actif, mordez fermement sur une compresse stérile pliée en quatre pendant 30 minutes sans cracher ni rincer la bouche. Le fait de cracher stimule l'afflux sanguin. Si le saignement persiste, appelez notre ligne d'urgence 24/7.",
    keyPoints: ["Compression ferme pendant 30 min", "Ne pas cracher ni rincer la bouche", "Garder la tête surélevée"]
  },
  {
    id: "faq-10",
    category: "post-op",
    question: "Quelles précautions observer dans les 48h suivant un blanchiment ?",
    answer: "Dans les 48 heures qui suivent le traitement d'éclaircissement, l'émail est temporairement plus perméable. Adoptez un 'régime blanc' : évitez le café, le thé noir, le vin rouge, la sauce tomate, le curry, les baies et le tabac. Privilégiez l'eau, le riz, les viandes blanches et les produits laitiers.",
    keyPoints: ["Régime blanc strict pendant 48 heures", "Éviter boissons colorées et tabac", "Dentifrice doux pour dents sensibles recommandé"]
  },
  {
    id: "faq-11",
    category: "post-op",
    question: "Comment nettoyer ma bouche après une intervention parodontale ou chirurgicale ?",
    answer: "Le jour même de l'intervention, ne brossez pas la zone opérée et ne faites pas de bain de bouche. Dès le lendemain, brossez délicatement les dents non traitées et commencez des bains de bouche antiseptiques prescrits, en effectuant un simple bain passif (laisser agir 1 minute sans gargarisme vigoureux).",
    keyPoints: ["Bain de bouche passif dès le lendemain", "Brosse à dents chirurgicale ultra-souple", "Respecter la prescription médicale jusqu'au bout"]
  }
];

export const DICTIONARY = {
  FR: {
    nav: {
      about: "À propos",
      services: "Services",
      results: "Résultats",
      faq: "FAQ",
      news: "Actualités",
      contact: "Contact",
      emergency: "24/7 Urgence"
    },
    hero: {
      titleLine1: "Chirurgie Dentaire",
      titleLine2: "De Nouvelle",
      titleLine3: "Génération",
      titleSub: "Proche de vous sur Tanger",
      kicker: "Diagnostic numérique 3D, implantologie et esthétique du sourire à Tanger",
      body: "Technologies de pointe et confort absolu pour votre sourire à Tanger.",
      bookBtn: "Prendre rendez-vous",
      discoverBtn: "Découvrir nos services"
    },
    trust: {
      title: "Pourquoi Nous Faire Confiance",
      sub: "Notre engagement envers l'excellence clinique et la satisfaction de nos patients, traduit en chiffres."
    },
    about: {
      title: "À propos du Cabinet",
      doctorName: "Dr. Rania Azzouzi, Chirurgienne Dentiste",
      p1: "Dédiée à l'art et à la science de la dentisterie moderne, le Dr. Rania Azzouzi allie une expertise clinique rigoureuse à une approche profondément humaine. Notre cabinet à Tanger est conçu pour offrir une expérience patient exceptionnelle, où le confort rencontre l'innovation technologique.",
      p2: "Spécialisée en esthétique dentaire avancée et en soins restaurateurs complexes, notre équipe s'engage à vous fournir des résultats naturels et durables. Nous croyons qu'un sourire sain et radieux est le reflet de votre bien-être global.",
      p3: "Chaque plan de traitement est personnalisé, s'appuyant sur des diagnostics numériques précis pour garantir des soins de la plus haute qualité, dans un environnement serein et accueillant.",
      cta: "Prendre rendez-vous avec le Dr. Azzouzi",
      badgeTitle: "Cabinet Certifié",
      badgeSub: "Excellence Médicale"
    },
    gallery: {
      title: "Résultats Cliniques",
      sub: "Découvrez les transformations de nos patients. Glissez le curseur pour comparer les résultats avant et après nos interventions.",
      before: "Avant",
      after: "Après"
    },
    specialties: {
      badge: "Services",
      title: "NOS SPÉCIALITÉS",
      sub: "Des solutions sur-mesure pour chaque sourire, réalisées avec une exigence clinique rigoureuse.",
      seeAllBtn: "Voir toutes nos prestations"
    },
    testimonials: {
      title: "Témoignages Clients",
      sub: "Découvrez les retours de nos patients sur leur expérience au sein de notre cabinet.",
      leaveReview: "Partager votre expérience"
    },
    faq: {
      badge: "Questions Fréquentes",
      title: "TOUT CE QUE VOUS DEVEZ SAVOIR",
      sub: "Retrouvez les réponses claires de notre équipe médicale sur vos soins, les remboursements d'assurance et les consignes post-opératoires.",
      allTab: "Toutes les questions",
      proceduresTab: "Procédures & Soins",
      insuranceTab: "Assurances & Tarifs",
      postOpTab: "Soins Post-Opératoires",
      searchPlaceholder: "Rechercher une question (ex: implant, douleur, CNSS, nourriture)...",
      contactPrompt: "Vous avez une autre question ou une interrogation médicale ?",
      contactBtn: "Poser votre question au Dr. Azzouzi"
    },
    contact: {
      title: "Contactez-nous",
      sub: "Prenez rendez-vous ou posez vos questions. Notre équipe vous répondra dans les plus brefs délais.",
      nameLabel: "Nom Complet",
      namePlaceholder: "Votre nom",
      phoneLabel: "Téléphone",
      phonePlaceholder: "+212 ...",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      sendBtn: "Envoyer le message",
      successMsg: "Votre demande a bien été transmise. Notre secrétariat vous contactera dans les 2 heures ouvrées.",
      coordinatesTitle: "Coordonnées",
      hoursTitle: "Horaires d'ouverture",
      insuranceTitle: "Assurances & Tarification",
      insuranceLead: "Nous acceptons tous types d'assurances.",
      insuranceDesc: "Vous n'avez pas d'assurance ? Ne vous inquiétez pas — nous avons ce qu'il vous faut. Nos tarifs abordables garantissent que des soins dentaires de qualité sont accessibles à tous, avec ou sans assurance."
    }
  },
  AR: {
    nav: {
      about: "عن العيادة",
      services: "الخدمات",
      results: "النتائج السريرية",
      faq: "الأسئلة الشائعة",
      news: "المستجدات",
      contact: "اتصل بنا",
      emergency: "طوارئ 24/7"
    },
    hero: {
      titleLine1: "جراحة الأسنان",
      titleLine2: "من الجيل",
      titleLine3: "الجديد",
      titleSub: "بالقرب منكم في طنجة",
      kicker: "تشخيص رقمي ثلاثي الأبعاد، زراعة الأسنان وتجميل الابتسامة في طنجة",
      body: "أحدث التقنيات وراحة فائقة لابتسامتكم في قلب طنجة.",
      bookBtn: "حجز موعد",
      discoverBtn: "اكتشف خدماتنا"
    },
    trust: {
      title: "لماذا يثق بنا مرضانا",
      sub: "التزامنا بالتميز الطبي وراحة مرضانا، متجسد في أرقام حقيقية."
    },
    about: {
      title: "عن العيادة",
      doctorName: "د. رانيا العزوزي، جراحة أسنان",
      p1: "تكرس الدكتورة رانيا العزوزي خبرتها لأحدث ما توصل إليه طب الأسنان الحديث، حيث تجمع بين الدقة الطبية الصارمة والتعامل الإنساني الراقي في طنجة.",
      p2: "متخصصة في تجميل الأسنان المتقدم والترميمات المعقدة لتقديم نتائج طبيعية ودائمة تعكس ثقتكم بأنفسكم.",
      p3: "خطة علاج مخصصة لكل مريض تعتمد على التشخيص الرقمي الدقيق في بيئة هادئة ومريحة.",
      cta: "حجز موعد مع الدكتورة العزوزي",
      badgeTitle: "عيادة معتمدة",
      badgeSub: "تميز طبي"
    },
    gallery: {
      title: "النتائج السريرية",
      sub: "اكتشف تحولات ابتسامات مرضانا. مرر المؤشر لمقارنة النتيجة قبل وبعد العلاج.",
      before: "قبل",
      after: "بعد"
    },
    specialties: {
      badge: "الخدمات",
      title: "تخصصاتنا الطبية",
      sub: "حلول علاجية مخصصة لكل ابتسامة، تُنفّذ بأعلى المعايير السريرية.",
      seeAllBtn: "عرض جميع الخدمات"
    },
    testimonials: {
      title: "آراء المرضى",
      sub: "تعرف على تجارب مرضانا الموثوقة داخل عيادتنا بطنجة.",
      leaveReview: "شارك تجربتك معنا"
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "كل ما تحتاجون معرفته",
      sub: "إجابات واضحة من فريقنا الطبي حول العلاجات، التأمين الصحي والتعليمات بعد العمليات.",
      allTab: "جميع الأسئلة",
      proceduresTab: "العلاجات والتقنيات",
      insuranceTab: "التأمين والأسعار",
      postOpTab: "العناية بعد العلاج",
      searchPlaceholder: "ابحث في الأسئلة (مثل: زراعة، ألم، تأمين، طعام)...",
      contactPrompt: "هل لديكم سؤال خاص أو استفسار طبي إضافي؟",
      contactBtn: "اطرحوا سؤالكم على الدكتورة العزوزي"
    },
    contact: {
      title: "تواصلوا معنا",
      sub: "احجزوا موعدكم أو اطرحوا استفساركم وسيتواصل معكم فريقنا في أقرب وقت.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "اسمكم الكريم",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "+212 ...",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "votre@email.com",
      messageLabel: "الرسالة",
      messagePlaceholder: "كيف يمكننا مساعدتكم؟",
      sendBtn: "إرسال الرسالة",
      successMsg: "تم استلام رسالتكم بنجاح. سيتصل بكم فريق الاستقبال خلال ساعتي عمل.",
      coordinatesTitle: "معلومات الاتصال",
      hoursTitle: "أوقات العمل",
      insuranceTitle: "التأمين والأسعار",
      insuranceLead: "نقبل جميع أنواع التأمين الصحي.",
      insuranceDesc: "ليس لديكم تأمين صحي؟ لا تقلقوا، أسعارنا المدروسة تضمن وصول الرعاية الطبية عالية الجودة للجميع."
    }
  },
  ES: {
    nav: {
      about: "Sobre Nosotros",
      services: "Servicios",
      results: "Resultados",
      faq: "Preguntas Frecuentes",
      news: "Actualidad",
      contact: "Contacto",
      emergency: "24/7 Urgencias"
    },
    hero: {
      titleLine1: "Cirugía Dental",
      titleLine2: "De Nueva",
      titleLine3: "Generación",
      titleSub: "Cerca de usted en Tánger",
      kicker: "Diagnóstico digital 3D, implantología y estética de la sonrisa en Tánger",
      body: "Tecnología punta y máximo confort para su sonrisa en Tánger.",
      bookBtn: "Pedir cita",
      discoverBtn: "Descubrir servicios"
    },
    trust: {
      title: "¿Por Qué Confiar en Nosotros?",
      sub: "Nuestro compromiso con la excelencia clínica y la satisfacción del paciente, en cifras."
    },
    about: {
      title: "Sobre la Clínica",
      doctorName: "Dra. Rania Azzouzi, Cirujana Dentista",
      p1: "Dedicada al arte y la ciencia de la odontología moderna, la Dra. Rania Azzouzi combina un rigor clínico de vanguardia con un trato profundamente humano en Tánger.",
      p2: "Especializada en estética dental avanzada y tratamientos restauradores complejos para resultados naturales y duraderos.",
      p3: "Planes de tratamiento personalizados con diagnóstico digital 3D en un entorno sereno y acogedor.",
      cta: "Pedir cita con la Dra. Azzouzi",
      badgeTitle: "Clínica Certificada",
      badgeSub: "Excelencia Médica"
    },
    gallery: {
      title: "Resultados Clínicos",
      sub: "Descubra las transformaciones de nuestros pacientes. Deslice el cursor para comparar el antes y después.",
      before: "Antes",
      after: "Después"
    },
    specialties: {
      badge: "Servicios",
      title: "NUESTRAS ESPECIALIDADES",
      sub: "Soluciones a medida para cada sonrisa, con la más estricta exigencia clínica.",
      seeAllBtn: "Ver todos los tratamientos"
    },
    testimonials: {
      title: "Testimonios de Pacientes",
      sub: "Vea lo que dicen nuestros pacientes sobre su experiencia en la clínica.",
      leaveReview: "Compartir experiencia"
    },
    faq: {
      badge: "Preguntas Frecuentes",
      title: "TODO LO QUE NECESITA SABER",
      sub: "Respuestas claras sobre procedimientos, cobertura de seguros médicos y cuidados postoperatorios.",
      allTab: "Todas las preguntas",
      proceduresTab: "Procedimientos",
      insuranceTab: "Seguros y Tarifas",
      postOpTab: "Cuidados Postoperatorios",
      searchPlaceholder: "Buscar pregunta (ej: implante, dolor, seguros, comida)...",
      contactPrompt: "¿Tiene alguna duda médica específica?",
      contactBtn: "Hacer una pregunta a la Dra. Azzouzi"
    },
    contact: {
      title: "Contáctenos",
      sub: "Reserve su consulta o envíenos sus dudas. Le responderemos con la mayor brevedad.",
      nameLabel: "Nombre Completo",
      namePlaceholder: "Su nombre",
      phoneLabel: "Teléfono",
      phonePlaceholder: "+212 ...",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "su@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "¿En qué podemos ayudarle?",
      sendBtn: "Enviar mensaje",
      successMsg: "Su solicitud ha sido enviada. Nuestro equipo le contactará en breve.",
      coordinatesTitle: "Coordonnées",
      hoursTitle: "Horario de Atención",
      insuranceTitle: "Seguros y Tarifas",
      insuranceLead: "Aceptamos todo tipo de seguros médicos.",
      insuranceDesc: "¿No dispone de seguro? No se preocupe: disponemos de tarifas transparentes y accesibles para garantizar la mejor salud bucodental."
    }
  }
};

