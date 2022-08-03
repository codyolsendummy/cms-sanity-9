# A statically generated blog example using Next.js and Sanity

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [Sanity](https://www.sanity.io/) as the data source.

You'll get:

- Sanity Studio running on localhost and deployed to the cloud
- Sub-second as-you-type previews in Next.js
- [On-demand revalidation of pages](https://nextjs.org/blog/next-12-1#on-demand-incremental-static-regeneration-beta) with [GROQ powered webhooks](https://www.sanity.io/docs/webhooks)

## Demo

### [https://next-blog-sanity.vercel.app/](https://next-blog-sanity.vercel.app/)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Ghost](/examples/cms-ghost)
- [Umbraco Heartcore](/examples/cms-umbraco-heartcore)
- [Blog Starter](/examples/blog-starter)
- [Builder.io](/examples/cms-builder-io)

## Deploy your own

There's two ways to deploy. Option A makes use of the official Sanity Integration with Vercel and have few steps. Option B being manual and easier to adapt to custom needs.

### Option 1: Deploy directly to Vercel

Deply button.

#### Sanity Integration

What it does. What it requires.

How to troubleshoot.

#### Configure Preview Mode

`SANITY_API_READ_TOKEN` in manage.

`SANITY_STUDIO_PREVIEW_SECRET` any URL friendly value to secure Preview Mode.

Deploy.

`SANITY_STUDIO_PRODUCTION_URL` set to Vercel app url.

#### Clone git repository

`npx vercel link`
`npx vercel env pull`

### Option 2: Create locally before deploying

#### Create git repository

#### Create Sanity project & dataset

`NEXT_PUBLIC_SANITY_PROJECT_ID`
`NEXT_PUBLIC_SANITY_DATASET`
`SANITY_STUDIO_API_PROJECT_ID`
`SANITY_STUDIO_API_DATASET`

#### Configure Preview Mode

`SANITY_API_READ_TOKEN` in manage.

`SANITY_STUDIO_PREVIEW_SECRET` any URL friendly value to secure Preview Mode.

#### Deploy your app to Vercel

`git remote add origin`
`git commit -m "Initial commit"`
`npx vercel`
Setup and deploy? Y
Link to existing project? N
What's your project's name? my-new-project
Want to override the settings? N
`vercel env add [name] [environment] < .env`

## Install dependencies

`npm install`
`cd studio`
`npx @sanity/cli install`

## Populate content

`npm run studio:dev`
`http://localhost:3333`

## Run Next.js in development mode

`npm run dev`
`http://localhost:3000`

## Try preview mode

## Deploy Sanity studio

### Option 1: Deploy to Vercel

Creates another Vercel project but linked to the same git repo. A bit of work up front but in return it supports deploying on code push out of the box. Requires CORS config.

### Option 2: Deploy to Sanity

Deploys as is to a sanity.studio URL. Easy to get started, more work to automate. CORS configured automatically.

## Configure on-demand revalidation

`echo "WK3H6sa1CE" | npx vercel env add SANITY_REVALIDATE_SECRET production`
`npx vercel env pull`
`npx vercel --prod`
`cd studio && npx @sanity/cli hook create`

## Next steps

- Mount your preview inside the Sanity Studio for comfortable side-by-side editing
- [Join the Sanity community](https://slack.sanity.io/)

[deploy-blog]: https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/cms-sanity&project-name=cms-sanity&repository-name=cms-sanity&env=SANITY_API_READ_TOKEN,SANITY_STUDIO_PREVIEW_SECRET,SANITY_REVALIDATE_SECRET&envDescription=Required%20to%20connect%20the%20app%20with%20Sanity&envLink=https://vercel.link/cms-sanity-env&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx
