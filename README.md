# Login Form

## Made and generated by Badri Tibourtine

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).<br>
It is a login/registration app, it makes api calls to the servers with the credentials by hashing the password when it has to use it to add more security. I used the password-hash package from npm to hash the password, and a simple JSON file to mimic a database.

## Prerequisite

You need to install Node.js first, with npm in order to run the code.

## Getting Started

First, you need to install all the dependecies :

```bash
npm i
# or
npm install
```

then, you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Overview
The website starts with a landing page containing a button that gets to the login page where you can sign in or sign up by switching with the dedicated button. There is for sure two forms, one for each, all fields required, a submit button and a reset button.
<br>
A message informing you of the status of the operation will show up after login/registration, like "You are connected" if you successfully logged in or "User already exists", if you try to create an existing user.
<br>
You can start by creating your own user, or by using this test user:

```bash
username: test
# And
password: 123
```