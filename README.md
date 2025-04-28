# NerdWallet Todo App

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

