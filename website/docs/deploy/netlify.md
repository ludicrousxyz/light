---
id: netlify
title: Netlify
---

## Introduction

Netlify is an extremely popular static website host, following the JAM stack principle. While their main focus is to build and host static content, they have released a lambda service called functions which allows you to run endpoints that have the same signature as AWS Lambda functions. The benefit of using Netlify is having quick and automatic deployments which propagate through Netlify's CDN all triggered with a simple `git push`.

**NOTE: Netlify does not support functions in subdirectories! This means if you have a route `routes/hello/world.js`, it will not work.** See this [GitHub issue](https://github.com/netlify/netlify-lambda/issues/90) for more details.

## Setup

This guide assumes that you have already set up a Netlify account, and a GitHub repository.

Before you can deploy, you must first populate your git repository. Follow the [getting started](introduction/getting-started.mdx) guide to build your initial app, and verify everything is working with `npm run dev`. Once you have that set up, add a `netlify.toml` file that contains the path to the routes directory.

```text
[build]
  command = "npm install"
  functions = "routes"
```

That's all you need in terms of code! Now head over to Netlify's website and click the "New Site From Git" button. Follow the steps to connect your GitHub account to Netlify and add your GitHub repo. Once you get to the final step, just leave the pre-filled data as is and press deploy. **This will deploy successfully, BUT your endpoints will not work.** Why is that? Well, light does not know which environment it needs to transform to. To set this up, open the settings page (on the top), go to the "Build and Deploy" section in the sidebar, and click "Environments" in the sidebar. Click "Edit Variables", and add a new environment variable which sets `LIGHT_ENVIRONMENT` to `netlify`. The end result should look like this.

![environment settings in netlify](/img/netlify/env.png)

Press save to save your changes. Finally, to update your function to use this environment variable, you must go to the "Deploys" page at the top, and press "Trigger Deploy", and "Deploy Site".

![trigger deploy](/img/netlify/trigger-deploy.png)

That's it! Your functions will now be deployed and ready to use!

**NOTE**: Netlify uses the file system as the router, so you will not be able to use dynamic routes such as `/users/:USERNAME`, and routes such as `index` **will not** be mapped to `/`.
