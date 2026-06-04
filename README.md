# KidzAtPlay

Modern Next.js website for KidzAtPlay, built with React, Tailwind CSS, shadcn/ui components, Prisma, and a SQLite development database.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- shadcn/ui and Radix UI
- Prisma with SQLite
- Bun-oriented scripts, with npm usable for local install/build verification

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local `.env` file and set the database URL for SQLite development:

```env
DATABASE_URL="file:./db/custom.db"
```

Generate and push the Prisma schema:

```bash
npm run db:generate
npm run db:push
```

Start the development server:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Scripts

```bash
npm run dev          # Start the Next.js dev server
npm run build        # Build the production app
npm run start        # Start the standalone production server with Bun
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push Prisma schema to the local database
npm run db:migrate   # Create and apply a Prisma migration
npm run db:reset     # Reset the local database
```

## Project Structure

```text
src/app/          App Router pages, layout, global CSS, and API route
src/components/   Reusable UI components
src/hooks/        Shared React hooks
src/lib/          Utilities and database client
public/           Static assets
prisma/           Prisma schema
```

## Git Hygiene

Local-only files are intentionally ignored, including `.env*`, `.next/`, `node_modules/`, local SQLite databases, generated downloads, helper scripts, examples, and local agent skill folders.

## Verification

Before pushing changes, run:

```bash
npm run build
```
