export const examForceMap={
  nda:["army"],
  ndanavy:["navy"],
  tes:["navy"],
  cdsina:["navy"],
};


const forceConfig = {
  army: {
    key: "army",
    name: "Army",
    officialSites: [
      { label: "Join Indian Army", url: "https://joinindianarmy.nic.in" },
      { label: "UPSC – NDA / CDS", url: "https://upsc.gov.in" },
      { label: "Agniveer Portal", url: "https://agnipathvayu.cdac.in" },
    ],
    notifications: [
      "NDA I 2025 Notification Released",
      "CDS II Exam – Sept 2025",
      "Agniveer Rally – July Batch",
    ],
    planner: {
  todo: [
    "Revise Maths – NDA",
    "Watch Polity Video",
    "Attempt Mock Test",
  ],
  schedule: [
    "6:00 – 7:00 AM → Physical Training",
    "10:00 – 11:00 AM → Maths Practice",
    "8:00 – 9:00 PM → GS Revision",
  ],
},
exams: {
  officer: ["NDA", "CDS (IMA)", "CDS (OTA)", "10+12 TES","TGC", "SSC (TECH)","SSC (NON-TECH)", "NCC Special Entry"],
  soldier: ["Soldier GD", "Soldier Technical","Soldier Clerk/ SKT", "Soldier Tradesman"],
  jco: ["Havildar Education", "Religious Teacher (JCO)", "Catering (JCO- Cook Assistant)"],
  specialist: ["Surveyor Auto Carto (SAC)"],
},

  },

  navy: {
    key: "navy",
    name: "Navy",
    officialSites: [
      { label: "Join Indian Navy", url: "https://www.joinindiannavy.gov.in" },
      { label: "INET Portal", url: "https://joinindiannavy.gov.in" },
    ],
    notifications: [
      "INET 2025 Registration Open",
      "Navy SSR Medical Update",
    ],
    planner: {
  todo: [
    "Revise Maths – NDA",
    "Watch Polity Video",
    "Attempt Mock Test",
  ],
  schedule: [
    "6:00 – 7:00 AM → Physical Training",
    "10:00 – 11:00 AM → Maths Practice",
    "8:00 – 9:00 PM → GS Revision",
  ],
},
exams: {
  officer: ["NDA (Navy Wing)","CDS (INA)","10+12 TES (Navy)","TGC (Navy)","SSC Executive", "SSC IT","SSC Education", "SSC Logistics","SSC Law"],
  technical: ["Artificer Apprentice"],
  sailor: ["Agniveer SSR", "Agniveer MR"],
  special: ["SSC Pilot", "SSC Observer", "SSC Naval Armament"],
},

  },

  airforce: {
    key: "airforce",
    name: "Air Force",
    officialSites: [
      { label: "Join Indian Air Force", url: "https://indianairforce.nic.in" },
      { label: "AFCAT Portal", url: "https://afcat.cdac.in" },
    ],
    notifications: [
      "AFCAT 02/2025 Notification Released",
      "IAF Agniveer Vayu Intake Open",
    ],
    planner: {
  todo: [
    "Revise Maths – NDA",
    "Watch Polity Video",
    "Attempt Mock Test",
  ],
  schedule: [
    "6:00 – 7:00 AM → Physical Training",
    "10:00 – 11:00 AM → Maths Practice",
    "8:00 – 9:00 PM → GS Revision",
  ],
},
exams: {
  officer: ["NDA (Air Force Wing)", "CDS (AFA)", "AFCAT (Flying)","AFCAT (Technical GD)","AFCAT (Non-Tech GD)","SSC Flying","SSC Technical GD","SSC Non-Tech GD","NCC Special Entry (IAF)"],
   agniveer: ["Agniveer Vayu (Group X)", "Agniveer Vayu (Group Y)","Airmen Group X","Airmen Group Y"],
   medical: ["Air Force Medical/ Dental"],
    music: ["Musician Entry"],
},

  },

  paramilitary: {
    key: "paramilitary",
    name: "Paramilitary",
    officialSites: [
      { label: "CAPF – UPSC", url: "https://upsc.gov.in" },
      { label: "SSC GD Portal", url: "https://ssc.nic.in" },
    ],
    notifications: [
      "CAPF 2025 Notification Released",
      "SSC GD Constable Recruitment",
    ],
    planner: {
  todo: [
    "Revise Maths – NDA",
    "Watch Polity Video",
    "Attempt Mock Test",
  ],
  schedule: [
    "6:00 – 7:00 AM → Physical Training",
    "10:00 – 11:00 AM → Maths Practice",
    "8:00 – 9:00 PM → GS Revision",
  ],
},
exams: {
  officer: ["CAPF AC (Assistant Commandant)","Coast Guard Assistant Commandant","Assam Rifles Officer Entry"],
  constable: ["BSF Constable GD","CRPF Constable GD","CISF Constable GD","ITBP Constable GD","Assam Rifles Rifleman","Delhi Police Constable"],
  commando: ["Para Special Forces Commando","MARCOS (Marine Commandos)", "Garud Commando Force",	"NSG (Black Cats)", "COBRA Commando (CRPF)", "Special Task Force (STF) Commando", "Force One (Maharashtra) Commando","Greyhounds (AP/Telangana) Commando"],
  women: ["BSF Mahila Constable","CRPF Mahila Battalion","ITBP Mahila Constable" ],
},

  },
};

export default forceConfig;
