# 🦷 DentaGest - Software Gestionale per Dentisti Italiani

## Vision
**DentaGest** is a modern, cloud-based dental practice management system built specifically for Italian dental practices ("studi dentistici"). It combines the best of modern SaaS architecture with Italian healthcare requirements.

## Target Market
- ~40,000 dental practices in Italy
- Average software cost: €50-200/month
- **Total addressable market: €24-96M/year**

## Competitors (and why we beat them)
| Competitor | Weakness | Our Advantage |
|------------|----------|---------------|
| DentalOpera | Dated UI, desktop-only | Modern web app, mobile-ready |
| Infodent | Complex, expensive | Simple, affordable |
| Orisline | Clunky workflow | Intuitive UX |
| AlfaDocs | Limited features | Full-featured from day 1 |

## Core Features (MVP)

### 1. Anagrafica Pazienti (Patient Records)
- Full patient profiles with Codice Fiscale validation
- Medical history (anamnesi)
- Allergies and medications
- Document uploads (radiografie, consensi)
- Privacy consent management (GDPR)

### 2. Agenda Appuntamenti (Appointment Scheduling)
- Visual calendar (day/week/month views)
- Multi-doctor scheduling
- Color-coded appointment types
- Drag-and-drop rescheduling
- SMS/Email reminders (automatic)
- Online booking portal for patients

### 3. Cartella Clinica (Clinical Records)
- Dental chart (odontogramma) with graphical interface
- Treatment history per tooth
- Treatment plans (piani di cura)
- Clinical notes
- Photo/X-ray attachments

### 4. Fatturazione (Billing)
- **Fattura elettronica** integration (SDI)
- Preventivi (estimates)
- Invoice generation
- Payment tracking
- Tessera Sanitaria integration
- Ricevute for detrazioni fiscali

### 5. Gestione Magazzino (Inventory - Phase 2)
- Dental materials tracking
- Low stock alerts
- Supplier management
- Order history

### 6. Statistiche e Report (Analytics)
- Revenue reports
- Patient flow analysis
- Treatment statistics
- Appointment analytics

## Italian Healthcare Integrations

### Tessera Sanitaria (TS)
- Automatic transmission of healthcare expenses
- Required for tax deductions (detrazioni fiscali 19%)
- API integration with sistema TS

### Fatturazione Elettronica (SDI)
- XML format compliant
- Automatic submission to SDI
- PEC integration
- Conservazione sostitutiva

### Privacy & GDPR
- Consenso informato management
- Data retention policies
- Right to deletion workflow
- Audit logs

## Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** + **shadcn/ui**
- **React Query** for data fetching
- **Zustand** for state management

### Backend
- **Supabase** (PostgreSQL + Auth + Storage)
- Alternative: **Drizzle ORM** + **Neon DB**
- **Edge Functions** for serverless

### Integrations
- **Resend** for transactional emails
- **Twilio** for SMS reminders
- **Stripe** for SaaS billing
- **SDI API** for fattura elettronica

### Infrastructure
- **Vercel** for hosting
- **Supabase** for database
- **Cloudflare** for CDN/security

## Pricing Model (SaaS)

| Plan | Price/month | Features |
|------|-------------|----------|
| **Starter** | €49 | 1 doctor, 500 patients, basic features |
| **Professional** | €99 | 3 doctors, unlimited patients, all features |
| **Enterprise** | €199 | Unlimited doctors, priority support, custom integrations |

## Development Phases

### Phase 1: MVP (2 weeks)
- [ ] Patient management (CRUD)
- [ ] Appointment scheduling
- [ ] Basic dental chart
- [ ] Italian localization
- [ ] Authentication (email/password)

### Phase 2: Core Features (2 weeks)
- [ ] Treatment plans
- [ ] Invoice generation
- [ ] SMS reminders
- [ ] Document uploads
- [ ] Multi-doctor support

### Phase 3: Italian Integrations (2 weeks)
- [ ] Tessera Sanitaria API
- [ ] Fattura elettronica (SDI)
- [ ] Codice Fiscale validation
- [ ] Privacy consent workflow

### Phase 4: Polish & Launch (1 week)
- [ ] Performance optimization
- [ ] Mobile responsiveness
- [ ] Onboarding flow
- [ ] Help documentation
- [ ] Marketing site

## File Structure
```
dentagest/
├── app/
│   ├── (auth)/           # Login, register pages
│   ├── (dashboard)/      # Main app after login
│   │   ├── pazienti/     # Patient management
│   │   ├── agenda/       # Calendar/appointments
│   │   ├── clinica/      # Clinical records
│   │   ├── fatturazione/ # Billing
│   │   └── impostazioni/ # Settings
│   └── api/              # API routes
├── components/
│   ├── ui/               # shadcn components
│   ├── forms/            # Form components
│   ├── charts/           # Dental charts
│   └── layout/           # Layout components
├── lib/
│   ├── supabase/         # Supabase client
│   ├── validations/      # Zod schemas
│   └── utils/            # Utility functions
├── types/                # TypeScript types
└── locales/
    └── it/               # Italian translations
```

## Differentiators

1. **Modern UX**: No more 1990s Windows UI
2. **Cloud-native**: Access from anywhere
3. **Mobile-friendly**: Works on tablets in the clinic
4. **Italian-first**: Built for Italian requirements from day 1
5. **Fair pricing**: €49-199/month vs €200+ competitors
6. **No lock-in**: Export your data anytime

## Success Metrics

- 100 paying practices in Year 1
- €100K ARR milestone
- <1% churn rate
- NPS > 50

---

*Built with ❤️ by Antigravity*
*"Il gestionale che i dentisti meritano"*
