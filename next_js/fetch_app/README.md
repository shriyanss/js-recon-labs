# Next.js Fetch App

This is a simple app that uses Next.js. The goal of this lab is to find a vulnerability in the app.

## Setup

### Pull from Docker Hub/GitHub Container Registry

```bash
docker pull shriyanss/js-recon-labs:fetch_app
docker run --rm -p 3000:3000 shriyanss/js-recon-labs:fetch_app
```

### Build and run locally

It is recommended to run this app locally in a Docker container. To run the app, you can run the following commands:

```bash
cd next_js/fetch_app
docker build -t nextjs-fetch-app .
docker run --rm -p 3000:3000 nextjs-fetch-app
```

Once the container is up and running, you can access the app at `http://localhost:3000`.

## Vulnerability

The video guide for solving this lab (and others) can be found on the [JS Recon website](https://js-recon.io/labs).
