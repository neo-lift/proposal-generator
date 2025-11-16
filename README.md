# **AI-Assisted Hotel Proposal Generator**

Integrating Vercel AI SDK + Proposales API

This project is a minimal, production-quality web app that helps **hotel sales teams** generate high-quality proposal drafts automatically using **AI** and the **Proposales API**.

The sales rep enters a short event brief (or fills a small form), and the system uses an LLM to generate:

* A proposal title (`title_md`)
* A structured description (`description_md`)
* Metadata (`data`)
* Proposal blocks (`blocks`) mapped to the hotel’s Proposales content items

The backend then creates a real draft proposal in **Proposales** via their official `POST /v3/proposals` endpoint and returns a link so the sales rep can open and edit the draft immediately.

The application is built with a focus on **functional programming**, **test-driven development**, **clean modular code**, and **minimal abstractions**.

---

## **Features**

* ✨ **AI-generated hotel proposals** from structured input or free text
* ✨ **End-to-end integration** with the Proposales API
* ✨ **Next.js (App Router)** full-stack application
* ✨ **Vercel AI SDK** for prompt engineering and model calls
* ✨ **TypeScript + Tailwind + shadcn/ui**
* ✨ **PostgreSQL logging**
* ✨ **Functional programming style**, small pure functions, explicit data flow
* ✨ **Jest testing** for all domain logic and integrations
* ✨ Hosted on **Vercel** (Hobby plan)

---

## **Project Architecture**

1. **User submits a hotel event brief**
   (guests, rooms, dates, meeting needs, catering, tone, etc.)

2. **Backend calls the LLM** via Vercel AI SDK
   → AI returns structured proposal data:

   * `title_md`
   * `description_md`
   * `data`
   * `blocks` with `content_id`s

3. **Backend constructs Proposales payload**
   and calls `POST /v3/proposals` with the hotel's `company_id`.

4. **Proposales returns `{ uuid, url }`**
   → Sales rep can immediately open the proposal.

5. **Log entry stored in PostgreSQL**
   (timestamp, customer email, proposal UUID, summary)

6. **Frontend displays**

   * Generated preview
   * “Open in Proposales” button

---

## **Tech Stack**

### Frontend

* Next.js (App Router)
* React Server Components
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* Next.js Route Handlers
* Vercel AI SDK
* Functional-style modules
* PostgreSQL via node-postgres (no ORM)
* Jest + ts-jest for testing

### Infrastructure

* Vercel (deployment + serverless functions)
* PostgreSQL (Supabase / Neon / RDS or local)

---

## **Environment Variables**

Copy `.env.example` → `.env.local` and fill in:

```
PROPOSALES_API_KEY=
PROPOSALES_COMPANY_ID=
PROPOSALES_CONTACT_EMAIL=
DATABASE_URL=
```

---

## **Development**

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

---

## **Project Structure**

```
src/
  app/
    page.tsx
    api/
      generate-proposal/
        route.ts
  lib/
    ai/
      generateProposalDraft.ts
      prompt.ts
    proposales/
      client.ts
      types.ts
    domain/
      buildPrompt.ts
      buildProposalesPayload.ts
      types.ts
    db/
      index.ts
  components/
    ui/
      (shadcn/ui components)
    forms/
      ProposalForm.tsx
```