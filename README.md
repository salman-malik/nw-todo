# NerdWallet Todo App

A simple, modern to-do list application built with Next.js, Material-UI, TypeScript, and PostgreSQL.

## Features

- ✅ Create, view, edit, and delete tasks
- ✅ Mark tasks as complete
- ✅ Set priorities (Low, Medium, High)
- ✅ Responsive design for all devices
- ✅ Dynamic dark/light mode with Material-UI
- ✅ Server Actions for all CRUD operations
- ✅ PostgreSQL database with Prisma ORM

## Tech Stack

- **Frontend:** Next.js 15+, Material-UI (MUI), TypeScript
- **Backend:** Next.js Server Actions, Prisma ORM
- **Database:** PostgreSQL
- **Deployment:** Vercel

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm
- PostgreSQL database (local or cloud, e.g., Vercel Postgres or Neon)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/salman-malik/nw-todo.git
   cd nw-todo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your environment variables:**
   Create a `.env` file in the root directory with:
   ```
   DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMWNlZmIxNzUtNTZhMC00ZDM1LTk4MmYtNzc1NDdiYzgwOTVhIiwidGVuYW50X2lkIjoiYmNiNDlhNjg3YzgzM2VjNzI0N2FkYjBjZmY3N2JmNDgzZjAyMWY1ZjNkMzk0OTgyZmZkZDg3NGE1NGM2ZjQ1MiIsImludGVybmFsX3NlY3JldCI6IjIwMDNmMDczLTliY2ItNDIwNC1iZmNhLTBiNTU4MTg5MzFlNiJ9.odcDQIFTAJg0uT50CVdtX5mG2SAl8xXPv5fRZ1vqPpc"
   ```

4. **Set up the database:**
   - If using migrations:
     ```bash
     npx prisma migrate deploy
     ```
   - Or, to just push the schema:
     ```bash
     npx prisma db push
     ```
   - (Optional) Seed the database:
     ```bash
     npm run db:seed
     ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Deployment

This application is ready for deployment on Vercel with a managed PostgreSQL database:

1. **Create a Vercel project and link it to your GitHub repository.**
2. **Set the `DATABASE_URL` environment variable in Vercel** (Project Settings > Environment Variables).
3. **Deploy the application.**
4. **Run your Prisma migrations on the production database** (see Setup step 4).

## Architecture Decisions

- **Material-UI (MUI):** Used for all UI components and theming, including dynamic dark/light mode.
- **Next.js Server Actions:** Used for all database operations for simplicity and security.
- **Prisma ORM:** Provides type-safe database access and schema management.
- **TypeScript:** Used throughout for type safety and better developer experience.
- **Component Structure:** Separated into reusable components for maintainability.
- **Theme Provider:** Theme context and provider manage color mode and theme switching across the app.

## Notes
- All UI is now handled by Material-UI, ensuring consistent theming and accessibility.
- Dark/light mode is fully dynamic and persists across sessions.
- For local development, you can use a local Postgres instance or a cloud provider like Neon or Vercel Postgres.

---

**Enjoy your modern, theme-aware todo app!**
