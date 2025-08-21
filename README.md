## Demo : https://silva-note.vercel.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Screenshot 2024-12-17 090608](https://github.com/user-attachments/assets/198b1544-4302-4162-8275-96541bcf49dd)

## Key Feature

1. Image Analysis using Gemini 1.5 Flash <br><br>
   ![image](https://github.com/user-attachments/assets/ae4a7647-4ce2-4623-b698-a2756cb1e5b5)
   ![image](https://github.com/user-attachments/assets/bb456968-376d-4925-865d-c27f4437abf1)

2. Prompt to Notes using Gemini Pro <br><br>
   ![image](https://github.com/user-attachments/assets/e9d6466f-1c2b-42d7-8df3-f9f9b83d50ad)
   ![image](https://github.com/user-attachments/assets/3f01020f-25fe-404a-89e4-2cb3685d56d1)

## Getting Started

1. First, clone this respitory :

```bash
https://github.com/SilvaLian0410/Silva-Note.git
```

2. Second, create an .env or run

```bash
cp .env.sample .env
```

and fill in :

```bash
KINDE_CLIENT_ID= # Refer to : https://kinde.com/
KINDE_CLIENT_SECRET= # Refer to : https://kinde.com/
KINDE_ISSUER_URL= # Refer to : https://kinde.com/

KINDE_SITE_URL= http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL= http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL= http://localhost:3000/dashboard
SITE_URL = http://localhost:3000
NEXT_PUBLIC_CLARITY_TRACKING_ID= # ( Optional)

DATABASE_URL= postgresql://silvauser:silvapass@localhost:5432/silvanotes?schema=public
DIRECT_URL= postgresql://silvauser:silvapass@localhost:5432/silvanotes?schema=public

STRIPE_SECRET_KEY = Get at https://stripe.com/en-my
STRIPE_PRICE_ID = # Refer to : https://docs.stripe.com/api/prices/create

STRIPE_WEBHOOK_SECRET = # Refer to : https://docs.stripe.com/stripe-cli

API_KEY_GEMINI_GOOGLE =
```

If you running on Windows, you can run the following terminal in WSL:

```bash
sed -i 's/\r$//' your_script.sh
```

Ensure Docker is installed and running on your machine : https://www.docker.com/products/docker-desktop/ <br> 3. Third, go to Docker folder and run

```bash
docker-compose up
```

4. Retrieve the Stripe Webhook Secret Key
   Once the container "silva_notes_stripe" is running, you will receive the Stripe webhook secret key. Make sure you have your stripe secret key in .env file. Refer to : https://docs.stripe.com/stripe-cli
   ![image](https://github.com/user-attachments/assets/fd433d85-126d-456e-b5ff-2fa9b4d171dd)

5. Run:

```bash
npm install
```

6. After putting your database DATABASE_URL= and DIRECT_URL=, run :

```bash
npx prisma db push
```

To pushes the state of your Prisma schema to the database without using migrations.

7. Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Landing Page Components

Modular components live in `components/landing/` and are integrated in `app/page.tsx`:

- `Hero.tsx`: Hero section with trust indicators and preview.
- `FeatureSplit.tsx`: Split layout with badge, copy, CTA, and media.
- `FeatureCards.tsx`: Feature highlights and upcoming features.
- `CTA.tsx`: Global call-to-action panel.
- `Section.tsx`: Accessible wrapper for consistent section structure.

Accessibility and performance improvements:

- Semantic sections with labels, descriptive alt text, dark/light contrast tuning.
- Reduced layout shift on media, improved hierarchy, and consistent spacing.
- Cross-browser support via `browserslist` in `package.json`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Future Updates

1. Web Scraping with the latest world Updates
2. Decription TipTap Editor
3. Mobile App
4. Image Generation
5. Upload Document to Create Notes
