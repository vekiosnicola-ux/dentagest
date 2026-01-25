/**
 * DentaGest Database Schema
 * Using Drizzle ORM patterns for PostgreSQL (Neon/Supabase)
 * 
 * Tables:
 * - pazienti (patients)
 * - appuntamenti (appointments)
 * - trattamenti (treatments)
 * - fatture (invoices)
 * - dentisti (dentists)
 * - voci_fattura (invoice items)
 * - documenti (documents)
 */

import { pgTable, uuid, text, timestamp, boolean, integer, numeric, date, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ============================================
// ENUMS
// ============================================

export const genderEnum = pgEnum('gender', ['maschio', 'femmina', 'altro']);

export const appointmentStatusEnum = pgEnum('appointment_status', [
  'programmato',
  'confermato',
  'in_corso',
  'completato',
  'annullato',
  'non_presentato',
]);

export const invoiceStatusEnum = pgEnum('invoice_status', [
  'bozza',
  'inviata',
  'pagata',
  'scaduta',
  'annullata',
]);

export const paymentMethodEnum = pgEnum('payment_method', [
  'contanti',
  'carta',
  'bonifico',
  'assegno',
]);

export const treatmentCategoryEnum = pgEnum('treatment_category', [
  'prevenzione',
  'diagnostica',
  'conservativa',
  'endodonzia',
  'protesi',
  'chirurgia',
  'ortodonzia',
  'parodontologia',
  'estetica',
]);

// ============================================
// TABLES
// ============================================

/**
 * Pazienti (Patients)
 * Core patient information with Italian-specific fields
 */
export const pazienti = pgTable('pazienti', {
  id: uuid('id').defaultRandom().primaryKey(),
  
  // Personal info
  nome: text('nome').notNull(),
  cognome: text('cognome').notNull(),
  codiceFiscale: text('codice_fiscale').unique(),
  dataNascita: date('data_nascita'),
  luogoNascita: text('luogo_nascita'),
  sesso: genderEnum('sesso'),
  
  // Contact
  email: text('email'),
  telefono: text('telefono'),
  cellulare: text('cellulare'),
  
  // Address
  indirizzo: text('indirizzo'),
  citta: text('citta'),
  cap: text('cap'),
  provincia: text('provincia'),
  
  // Emergency contact
  contattoEmergenzaNome: text('contatto_emergenza_nome'),
  contattoEmergenzaTelefono: text('contatto_emergenza_telefono'),
  
  // Medical history (Anamnesi)
  allergie: text('allergie'),
  farmaciInUso: text('farmaci_in_uso'),
  patologie: text('patologie'),
  storiaFamiliare: text('storia_familiare'),
  noteAnamnestiche: text('note_anamnestiche'),
  
  // Insurance
  assicurazione: text('assicurazione'),
  numeroPolizza: text('numero_polizza'),
  
  // Consent & Privacy
  consensoTrattamento: boolean('consenso_trattamento').default(false),
  consensoPrivacy: boolean('consenso_privacy').default(false),
  consensoMarketing: boolean('consenso_marketing').default(false),
  dataConsenso: timestamp('data_consenso'),
  
  // Metadata
  note: text('note'),
  attivo: boolean('attivo').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/**
 * Dentisti (Dentists/Staff)
 */
export const dentisti = pgTable('dentisti', {
  id: uuid('id').defaultRandom().primaryKey(),
  nome: text('nome').notNull(),
  cognome: text('cognome').notNull(),
  email: text('email').unique(),
  telefono: text('telefono'),
  specializzazione: text('specializzazione'),
  colore: text('colore'), // Calendar color for appointments
  attivo: boolean('attivo').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/**
 * Trattamenti (Treatments catalog)
 */
export const trattamenti = pgTable('trattamenti', {
  id: uuid('id').defaultRandom().primaryKey(),
  codice: text('codice').unique(),
  nome: text('nome').notNull(),
  descrizione: text('descrizione'),
  categoria: treatmentCategoryEnum('categoria'),
  prezzo: numeric('prezzo', { precision: 10, scale: 2 }).notNull(),
  durataMinuti: integer('durata_minuti').default(30),
  attivo: boolean('attivo').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/**
 * Appuntamenti (Appointments)
 */
export const appuntamenti = pgTable('appuntamenti', {
  id: uuid('id').defaultRandom().primaryKey(),
  
  // Relations
  pazienteId: uuid('paziente_id').references(() => pazienti.id).notNull(),
  dentistaId: uuid('dentista_id').references(() => dentisti.id).notNull(),
  trattamentoId: uuid('trattamento_id').references(() => trattamenti.id),
  
  // Scheduling
  dataOra: timestamp('data_ora').notNull(),
  durataMinuti: integer('durata_minuti').default(30),
  stato: appointmentStatusEnum('stato').default('programmato'),
  
  // Clinical
  dente: integer('dente'), // Tooth number (FDI notation)
  note: text('note'),
  noteInterne: text('note_interne'), // Staff-only notes
  
  // Reminders
  promemoriaSmsInviato: boolean('promemoria_sms_inviato').default(false),
  promemoriaEmailInviato: boolean('promemoria_email_inviato').default(false),
  
  // Metadata
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/**
 * Fatture (Invoices)
 */
export const fatture = pgTable('fatture', {
  id: uuid('id').defaultRandom().primaryKey(),
  
  // Invoice number (Italian format)
  numero: text('numero').unique().notNull(),
  anno: integer('anno').notNull(),
  
  // Relations
  pazienteId: uuid('paziente_id').references(() => pazienti.id).notNull(),
  
  // Dates
  dataEmissione: date('data_emissione').notNull(),
  dataScadenza: date('data_scadenza'),
  
  // Amounts
  subtotale: numeric('subtotale', { precision: 10, scale: 2 }).notNull(),
  iva: numeric('iva', { precision: 10, scale: 2 }).default('0'),
  totale: numeric('totale', { precision: 10, scale: 2 }).notNull(),
  pagato: numeric('pagato', { precision: 10, scale: 2 }).default('0'),
  
  // Status
  stato: invoiceStatusEnum('stato').default('bozza'),
  metodoPagamento: paymentMethodEnum('metodo_pagamento'),
  dataPagamento: date('data_pagamento'),
  
  // Electronic invoicing (Fatturazione elettronica)
  codiceSdi: text('codice_sdi'),
  pec: text('pec'),
  inviatoSdi: boolean('inviato_sdi').default(false),
  dataInvioSdi: timestamp('data_invio_sdi'),
  inviatoTesseraSanitaria: boolean('inviato_tessera_sanitaria').default(false),
  
  // Notes
  note: text('note'),
  
  // Metadata
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/**
 * Voci Fattura (Invoice line items)
 */
export const vociFattura = pgTable('voci_fattura', {
  id: uuid('id').defaultRandom().primaryKey(),
  
  fatturaId: uuid('fattura_id').references(() => fatture.id).notNull(),
  trattamentoId: uuid('trattamento_id').references(() => trattamenti.id),
  appuntamentoId: uuid('appuntamento_id').references(() => appuntamenti.id),
  
  descrizione: text('descrizione').notNull(),
  quantita: integer('quantita').default(1),
  prezzoUnitario: numeric('prezzo_unitario', { precision: 10, scale: 2 }).notNull(),
  sconto: numeric('sconto', { precision: 5, scale: 2 }).default('0'),
  totale: numeric('totale', { precision: 10, scale: 2 }).notNull(),
  
  // Tooth info if applicable
  dente: integer('dente'),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/**
 * Documenti (Documents/Files)
 */
export const documenti = pgTable('documenti', {
  id: uuid('id').defaultRandom().primaryKey(),
  
  pazienteId: uuid('paziente_id').references(() => pazienti.id).notNull(),
  
  nome: text('nome').notNull(),
  tipo: text('tipo'), // e.g., 'radiografia', 'consenso', 'altro'
  mimeType: text('mime_type'),
  dimensione: integer('dimensione'), // bytes
  url: text('url').notNull(),
  
  note: text('note'),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ============================================
// RELATIONS
// ============================================

export const pazientiRelations = relations(pazienti, ({ many }) => ({
  appuntamenti: many(appuntamenti),
  fatture: many(fatture),
  documenti: many(documenti),
}));

export const dentistiRelations = relations(dentisti, ({ many }) => ({
  appuntamenti: many(appuntamenti),
}));

export const trattamentiRelations = relations(trattamenti, ({ many }) => ({
  appuntamenti: many(appuntamenti),
  vociFattura: many(vociFattura),
}));

export const appuntamentiRelations = relations(appuntamenti, ({ one }) => ({
  paziente: one(pazienti, {
    fields: [appuntamenti.pazienteId],
    references: [pazienti.id],
  }),
  dentista: one(dentisti, {
    fields: [appuntamenti.dentistaId],
    references: [dentisti.id],
  }),
  trattamento: one(trattamenti, {
    fields: [appuntamenti.trattamentoId],
    references: [trattamenti.id],
  }),
}));

export const fattureRelations = relations(fatture, ({ one, many }) => ({
  paziente: one(pazienti, {
    fields: [fatture.pazienteId],
    references: [pazienti.id],
  }),
  voci: many(vociFattura),
}));

export const vociFatturaRelations = relations(vociFattura, ({ one }) => ({
  fattura: one(fatture, {
    fields: [vociFattura.fatturaId],
    references: [fatture.id],
  }),
  trattamento: one(trattamenti, {
    fields: [vociFattura.trattamentoId],
    references: [trattamenti.id],
  }),
  appuntamento: one(appuntamenti, {
    fields: [vociFattura.appuntamentoId],
    references: [appuntamenti.id],
  }),
}));

export const documentiRelations = relations(documenti, ({ one }) => ({
  paziente: one(pazienti, {
    fields: [documenti.pazienteId],
    references: [pazienti.id],
  }),
}));

// ============================================
// TYPES (inferred from schema)
// ============================================

export type Paziente = typeof pazienti.$inferSelect;
export type NewPaziente = typeof pazienti.$inferInsert;

export type Dentista = typeof dentisti.$inferSelect;
export type NewDentista = typeof dentisti.$inferInsert;

export type Trattamento = typeof trattamenti.$inferSelect;
export type NewTrattamento = typeof trattamenti.$inferInsert;

export type Appuntamento = typeof appuntamenti.$inferSelect;
export type NewAppuntamento = typeof appuntamenti.$inferInsert;

export type Fattura = typeof fatture.$inferSelect;
export type NewFattura = typeof fatture.$inferInsert;

export type VoceFattura = typeof vociFattura.$inferSelect;
export type NewVoceFattura = typeof vociFattura.$inferInsert;

export type Documento = typeof documenti.$inferSelect;
export type NewDocumento = typeof documenti.$inferInsert;
