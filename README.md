## Demo : https://silva-note.vercel.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Screenshot 2024-12-17 090608](https://github.com/user-attachments/assets/198b1544-4302-4162-8275-96541bcf49dd)

## Key Feature
1. Image Analysis using Gemini 1.5 Flash <br><br>
![image](https://github.com/user-attachments/assets/ae4a7647-4ce2-4623-b698-a2756cb1e5b5)
![image](https://github.com/user-attachments/assets/bb456968-376d-4925-865d-c27f4437abf1)

3. Prompt to Notes using Gemini Pro <br><br>
![image](https://github.com/user-attachments/assets/e9d6466f-1c2b-42d7-8df3-f9f9b83d50ad)
![image](https://github.com/user-attachments/assets/3f01020f-25fe-404a-89e4-2cb3685d56d1)

## Getting Started

First, clone this respitory : 
```bash
https://github.com/SilvaLian0410/Silva-Note.git
```

Second, create an .env file fill in : 
```bash
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=

KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=
SITE_URL = 

DATABASE_URL=
DIRECT_URL=

STRIPE_SECRET_KEY = 
STRIPE_PRICE_ID =

STRIPE_WEBHOOK_SECRET =

API_KEY_GEMINI_GOOGLE =
```

Third, run the development server:
```bash
npm install
```

After putting your database DATABASE_URL= and DIRECT_URL=, run : 
```bash
npx prisma db push
```
To pushes the state of your Prisma schema to the database without using migrations.


Then, run the development server:

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
