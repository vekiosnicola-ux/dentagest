# 🦷 DentaGest - Manuale Utente

## Benvenuto in DentaGest!

DentaGest è il gestionale moderno per il tuo studio dentistico. Questo manuale ti guiderà nell'utilizzo di tutte le funzionalità.

---

## 📱 Accesso al Sistema

### URL di Accesso
**https://dentagest-4244jsg1z-vekiosnicola-uxs-projects.vercel.app**

Puoi accedere da:
- 💻 Computer (Windows, Mac)
- 📱 Tablet (consigliato per lo studio)
- 📲 Smartphone (per emergenze)

---

## 🏠 Pannello Amministratore

Accedi a `/admin` per gestire lo studio.

### Funzionalità Principali

#### 1. Gestione Pazienti
- **Nuovo Paziente**: Clicca "Aggiungi Paziente"
- **Cerca Paziente**: Usa la barra di ricerca (nome, cognome, codice fiscale)
- **Modifica Dati**: Clicca sul paziente → "Modifica"

**Dati Richiesti:**
- Nome e Cognome
- Codice Fiscale (validazione automatica)
- Data di Nascita
- Telefono
- Email
- Indirizzo

#### 2. Agenda Appuntamenti
- **Vista Giornaliera**: Vedi tutti gli appuntamenti del giorno
- **Vista Settimanale**: Pianifica la settimana
- **Vista Mensile**: Panoramica generale

**Creare un Appuntamento:**
1. Clicca sulla casella oraria desiderata
2. Seleziona il paziente
3. Scegli il tipo di trattamento
4. Aggiungi eventuali note
5. Salva

**Tipi di Appuntamento:**
- 🔵 Prima Visita
- 🟢 Controllo
- 🟡 Igiene
- 🔴 Urgenza
- 🟣 Trattamento

#### 3. Cartella Clinica
Per ogni paziente puoi registrare:
- **Anamnesi**: Storia medica, allergie, farmaci
- **Odontogramma**: Schema dentale interattivo
- **Trattamenti**: Storico interventi per dente
- **Documenti**: Radiografie, consensi, referti

---

## 👤 Portale Pazienti

I tuoi pazienti possono accedere autonomamente per:

### Registrazione Paziente
URL: `/patients/[tuoId]/register`

Il paziente compila:
- Dati anagrafici
- Anamnesi medica
- Consenso privacy (GDPR)

### Prenotazione Appuntamenti
URL: `/patients/[tuoId]/new-appointment`

1. Il paziente seleziona il tipo di visita
2. Sceglie data e ora disponibili
3. Conferma la prenotazione
4. Riceve conferma via email/SMS

---

## 📋 Operazioni Comuni

### Registrare un Nuovo Paziente

1. Vai su **Admin** → **Pazienti** → **Nuovo**
2. Inserisci i dati anagrafici
3. Il sistema valida automaticamente il Codice Fiscale
4. Compila l'anamnesi iniziale
5. Fai firmare il consenso privacy
6. Salva

### Prenotare un Appuntamento

1. Vai su **Agenda**
2. Seleziona giorno e ora
3. Cerca il paziente
4. Seleziona tipo trattamento
5. Aggiungi note (es. "porta radiografie")
6. Salva

### Registrare un Trattamento

1. Apri la **Cartella Clinica** del paziente
2. Clicca su **Nuovo Trattamento**
3. Seleziona il dente (o "generale")
4. Descrivi l'intervento
5. Allega eventuali immagini
6. Salva

---

## ⚙️ Impostazioni

### Dati dello Studio
- Nome studio
- Indirizzo
- P.IVA
- Telefono/Email
- Logo (per fatture)

### Orari di Apertura
Configura gli orari per ogni giorno della settimana.
L'agenda mostrerà solo gli slot disponibili.

### Notifiche
- **Email**: Conferme e promemoria
- **SMS**: Promemoria appuntamenti (24h prima)

---

## 🔐 Privacy e Sicurezza

### GDPR
- Tutti i dati sono criptati
- Consenso privacy obbligatorio
- Diritto all'oblio: puoi cancellare i dati su richiesta

### Backup
I dati sono salvati automaticamente nel cloud.
Puoi esportare i dati in qualsiasi momento.

---

## ❓ Domande Frequenti

### Come recupero la password?
Clicca "Password dimenticata" nella pagina di login.

### Posso usare DentaGest su più dispositivi?
Sì! Accedi da qualsiasi dispositivo con lo stesso account.

### I dati sono al sicuro?
Sì, utilizziamo crittografia di livello bancario e server in Europa.

### Come contatto l'assistenza?
Email: supporto@dentagest.it
Tel: [da configurare]

---

## 📞 Supporto

Per assistenza tecnica:
- **Email**: supporto@dentagest.it
- **Orari**: Lun-Ven 9:00-18:00

---

## 🚀 Aggiornamenti

DentaGest si aggiorna automaticamente.
Non devi installare nulla!

**Prossime Funzionalità:**
- Fatturazione elettronica (SDI)
- Integrazione Tessera Sanitaria
- Gestione magazzino
- Statistiche avanzate

---

*DentaGest - Il gestionale che i dentisti meritano* 🦷

© 2026 Antigravity
