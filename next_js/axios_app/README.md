# Next.js Axios App

This is a simple app that uses Next.js. The goal of this lab is to find a vulnerability in the app.

## Setup

It is recommeded to run this app locally in a docker container. To run the app, you can run the following commands:

```bash
cd next_js/axios_app
docker build -t nextjs-axios-app .
docker run --rm -p 3000:3000 nextjs-axios-app
```

Once the container is up and running, you can access the app at `http://localhost:3000`.

## Vulnerability

The video guide for solving this lab (and others) can be found on the [JS Recon website](https://js-recon.io/labs).
