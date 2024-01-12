# Prashant Ecommerce App

Welcome to the Prashant Ecommerce App! This is a full-stack web application built using Next.js, TRPC, Prisma, React, and Tailwind CSS. The app enables seamless online shopping experiences for customers and efficient management of products for the company.

## Prerequisites

Before you start, make sure you have the following environment variables set in a `.env` file:

- `DATABASE_URL`: The URL of your PostgreSQL database.
- `STRIPE_SECRET_KEY`: The secret key for the Stripe API.
- `STRIPE_WEB_HOOK_SECRET`: The webhook secret for Stripe.
- `NEXT_PUBLIC_STRIPE_KEY`: The public key for Stripe to be used on the client-side.
- `NEXT_PUBLIC_SITE_URL`: The public URL of your site.
- `GOOGLE_CLIENT_ID`: Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret.
- `NEXTAUTH_SECRET`: Next auth secret.

## Development Steps

Follow these steps to set up and run the development environment:

1. Install dependencies:

   ```bash
   pnpm i
   ```

2. Generate Prisma client:

   ```bash
   pnpm prisma generate
   ```

3. Apply database migrations:

   ```bash
   pnpm prisma db push
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Start the production server:

   ```bash
   pnpm build && pnpm start
   ```

Now you should be able to access the Prashant Ecommerce App locally at `http://localhost:3000`.

## Additional Information

- **Technology Stack:**

  - Next.js: React framework for building web applications.
  - TRPC: TypeScript-powered RPC library.
  - Prisma: Modern database access toolkit for Node.js.
  - React: JavaScript library for building user interfaces.
  - Tailwind CSS: Utility-first CSS framework.

- **Folder Structure:**
  - `pages/`: Next.js pages for routing.
  - `components/`: Reusable React components.
  - `prisma/`: Prisma database schema and migration files.
  - `server/`: TRPC API endpoints and types.
  - `styles/`: Tailwind CSS styles.
  - `atoms/`: Recoil atoms for state management.

Feel free to explore the codebase, make improvements, and contribute to the Prashant Ecommerce App! If you have any questions or issues, please don't hesitate to reach out. Happy coding!
