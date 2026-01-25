// DentaGest Constants - Italian Dental Practice Management

export const GenderOptions = ["Maschio", "Femmina", "Altro"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Maschio" as Gender,
  address: "",
  city: "",
  cap: "",
  province: "",
  codiceFiscale: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryDentist: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Carta d'Identita",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Carta d'Identita",
  "Patente di Guida",
  "Passaporto",
  "Codice Fiscale",
  "Tessera Sanitaria",
  "Permesso di Soggiorno",
];

// Dental treatments (Trattamenti dentali)
export const Treatments = [
  {
    id: "pulizia",
    name: "Pulizia dentale",
    nameEn: "Dental cleaning",
    category: "preventive",
    defaultDuration: 45,
    defaultPrice: 80,
  },
  {
    id: "otturazione",
    name: "Otturazione",
    nameEn: "Filling",
    category: "restorative",
    defaultDuration: 30,
    defaultPrice: 100,
  },
  {
    id: "estrazione",
    name: "Estrazione",
    nameEn: "Extraction",
    category: "surgical",
    defaultDuration: 45,
    defaultPrice: 120,
  },
  {
    id: "impianto",
    name: "Impianto",
    nameEn: "Implant",
    category: "surgical",
    defaultDuration: 90,
    defaultPrice: 1500,
  },
  {
    id: "sbiancamento",
    name: "Sbiancamento",
    nameEn: "Whitening",
    category: "cosmetic",
    defaultDuration: 60,
    defaultPrice: 300,
  },
  {
    id: "corona",
    name: "Corona",
    nameEn: "Crown",
    category: "prosthetic",
    defaultDuration: 60,
    defaultPrice: 600,
  },
  {
    id: "devitalizzazione",
    name: "Devitalizzazione",
    nameEn: "Root canal",
    category: "endodontic",
    defaultDuration: 90,
    defaultPrice: 400,
  },
  {
    id: "detartrasi",
    name: "Detartrasi",
    nameEn: "Scaling",
    category: "preventive",
    defaultDuration: 30,
    defaultPrice: 60,
  },
  {
    id: "radiografia",
    name: "Radiografia",
    nameEn: "X-ray",
    category: "diagnostic",
    defaultDuration: 15,
    defaultPrice: 40,
  },
  {
    id: "visita",
    name: "Visita di controllo",
    nameEn: "Checkup",
    category: "diagnostic",
    defaultDuration: 30,
    defaultPrice: 50,
  },
  {
    id: "ponte",
    name: "Ponte",
    nameEn: "Bridge",
    category: "prosthetic",
    defaultDuration: 90,
    defaultPrice: 1200,
  },
  {
    id: "protesi",
    name: "Protesi mobile",
    nameEn: "Denture",
    category: "prosthetic",
    defaultDuration: 60,
    defaultPrice: 800,
  },
  {
    id: "faccetta",
    name: "Faccetta",
    nameEn: "Veneer",
    category: "cosmetic",
    defaultDuration: 60,
    defaultPrice: 500,
  },
  {
    id: "apparecchio",
    name: "Apparecchio ortodontico",
    nameEn: "Braces",
    category: "orthodontic",
    defaultDuration: 60,
    defaultPrice: 2500,
  },
  {
    id: "sigillatura",
    name: "Sigillatura",
    nameEn: "Sealant",
    category: "preventive",
    defaultDuration: 20,
    defaultPrice: 40,
  },
];

// Treatment categories
export const TreatmentCategories = [
  { id: "preventive", name: "Prevenzione" },
  { id: "diagnostic", name: "Diagnostica" },
  { id: "restorative", name: "Conservativa" },
  { id: "endodontic", name: "Endodonzia" },
  { id: "prosthetic", name: "Protesi" },
  { id: "surgical", name: "Chirurgia" },
  { id: "orthodontic", name: "Ortodonzia" },
  { id: "periodontic", name: "Parodontologia" },
  { id: "cosmetic", name: "Estetica" },
];

// Dentists (Dentisti) - placeholder data
// Alias for legacy code compatibility
export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr. Marco Rossi",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr.ssa Giulia Bianchi",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr. Alessandro Verdi",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr.ssa Francesca Marino",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr. Luca Ferrari",
  },
];

export const Dentisti = [
  {
    image: "/assets/images/dentist-1.png",
    name: "Dr. Marco Rossi",
    specialization: "Odontoiatra Generale",
  },
  {
    image: "/assets/images/dentist-2.png",
    name: "Dr.ssa Giulia Bianchi",
    specialization: "Ortodontista",
  },
  {
    image: "/assets/images/dentist-3.png",
    name: "Dr. Alessandro Verdi",
    specialization: "Endodontista",
  },
  {
    image: "/assets/images/dentist-4.png",
    name: "Dr.ssa Francesca Marino",
    specialization: "Parodontologo",
  },
  {
    image: "/assets/images/dentist-5.png",
    name: "Dr. Luca Ferrari",
    specialization: "Chirurgo Orale",
  },
];

// Appointment status icons
export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
  completed: "/assets/icons/completed.svg",
  inProgress: "/assets/icons/in-progress.svg",
};

// Appointment status labels (Italian)
export const AppointmentStatus = {
  scheduled: "Programmato",
  confirmed: "Confermato",
  inProgress: "In corso",
  completed: "Completato",
  cancelled: "Annullato",
  noShow: "Non presentato",
};

// Invoice status (Italian)
export const InvoiceStatus = {
  draft: "Bozza",
  sent: "Inviata",
  paid: "Pagata",
  overdue: "Scaduta",
  cancelled: "Annullata",
};

// Payment methods (Italian)
export const PaymentMethods = [
  { id: "cash", name: "Contanti" },
  { id: "card", name: "Carta di credito/debito" },
  { id: "bankTransfer", name: "Bonifico bancario" },
  { id: "check", name: "Assegno" },
];

// Italian provinces for address forms
export const ItalianProvinces = [
  "AG", "AL", "AN", "AO", "AP", "AQ", "AR", "AT", "AV", "BA",
  "BG", "BI", "BL", "BN", "BO", "BR", "BS", "BT", "BZ", "CA",
  "CB", "CE", "CH", "CL", "CN", "CO", "CR", "CS", "CT", "CZ",
  "EN", "FC", "FE", "FG", "FI", "FM", "FR", "GE", "GO", "GR",
  "IM", "IS", "KR", "LC", "LE", "LI", "LO", "LT", "LU", "MB",
  "MC", "ME", "MI", "MN", "MO", "MS", "MT", "NA", "NO", "NU",
  "OG", "OR", "OT", "PA", "PC", "PD", "PE", "PG", "PI", "PN",
  "PO", "PR", "PT", "PU", "PV", "PZ", "RA", "RC", "RE", "RG",
  "RI", "RM", "RN", "RO", "SA", "SI", "SO", "SP", "SR", "SS",
  "SU", "SV", "TA", "TE", "TN", "TO", "TP", "TR", "TS", "TV",
  "UD", "VA", "VB", "VC", "VE", "VI", "VR", "VS", "VT", "VV",
];

// Tooth numbering (FDI World Dental Federation notation)
export const TeethNumbers = {
  upperRight: [18, 17, 16, 15, 14, 13, 12, 11],
  upperLeft: [21, 22, 23, 24, 25, 26, 27, 28],
  lowerLeft: [31, 32, 33, 34, 35, 36, 37, 38],
  lowerRight: [48, 47, 46, 45, 44, 43, 42, 41],
};

// App configuration
export const APP_CONFIG = {
  name: "DentaGest",
  tagline: "Il gestionale che i dentisti meritano",
  version: "0.1.0",
  defaultLocale: "it",
  currency: "EUR",
  currencySymbol: "€",
  vatRate: 22, // Italian standard VAT
  dateFormat: "dd/MM/yyyy",
  timeFormat: "HH:mm",
};
