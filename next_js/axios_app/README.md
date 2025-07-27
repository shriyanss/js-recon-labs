# Next.js Fetch App

This is a simple app that uses Next.js. The goal of this lab is to find a vulnerability in the app.

## Setup

It is recommeded to run this app locally in a docker container. To run the app, you can run the following commands:

```bash
cd next_js/fetch_app
docker build -t nextjs-fetch-app .
docker run -p 3000:3000 nextjs-fetch-app
```

Once the container is up and running, you can access the app at `http://localhost:3000`.

## Vulnerability

The video guide for solving this lab (and others) can be found on the [JS Recon website](https://js-recon.io/labs).
