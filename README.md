# Magic Auth with Next.js, MUI, React

This is a ready to go application that uses Magic.link as a way to provide a passwordless login experience for users to any website via email or SMS. Access to the website is provided if they are on a whitelist and they are added to a waitlist if not.

## Get Started

1. Install dependencies.

```shell
npm install
# or
yarn install
```

2. Rename `.env.local.example` to `.env.local` and add your Magic API keys.

```shell
mv .env.local.example .env.local
```

```javascript
// .env.local

NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY = "YOUR MAGIC PUBLISHABLE KEY";
MAGIC_SECRET_KEY = "YOUR MAGIC SECRET KEY";
```

1. Run the backend development server.

```shell
npm run develop
# or
yarn develop
```

2. Run the frontend development server from where you installed Strapi with the db already created. http://github.com/gravyplaya/beta_magic_db
   ```shell
   npm run dev
   ```

# or

yarn dev

```

3. Open http://localhost:3000 with your browser to see the result.
4. Open http://localhost:1337/admin for the Strapi DB backend UI.
        a. create  your admin account
        b. Create the sample data model


This is the code derived from the Vercel guide "Add Auth to a Next.js Site with Magic.link"
```
