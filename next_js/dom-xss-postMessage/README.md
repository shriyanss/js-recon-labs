# Next.js app with postMessage DOM XSS

This is a simple app to demonstrate the capabilities of the tool [JS Recon](https://js-recon.io) to find DOM based issues. 

You can manually make your way through this lab, however, using JS Recon would be a lot easier.

## Setup

It is recommended to run this app locally in a docker container. To run the app, you can run the following commands:

```bash
cd next_js/dom-xss-postMessage
docker build -t nextjs-dom-xss-postmessage .
docker run --rm -p 3000:3000 nextjs-dom-xss-postmessage
```

Once the container is up and running, you can access the app at `http://localhost:3000`.

## Vulnerability

The video guide for solving this lab (and others) can be found on the [JS Recon website](https://js-recon.io/labs).
