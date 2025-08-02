# JS Recon Labs

![JS Recon labs banner](./static/labs-banner.png)

This repository contains labs for [JS Recon](https://github.com/shriyanss/js-recon). The apps in this repository have vulnerabilities to demonstrate the tool's capabilities.

> [!CAUTION]
> Do NOT expose these apps to the internet. These are intended to run locally, not in a production environment.
> If you like to live dangerously, go ahead!

## Labs

This repository contains multiple labs with multiple vulnerabilities. All the labs are available as Docker containers, and can be run directly by running the provided commands. Docker will pull the images from [Docker Hub](https://hub.docker.com/r/shriyanss/js-recon-labs) and run the containers.

### Next.js

- [Next.js Fetch App](./next_js/fetch_app)

```
docker run --rm -p 3000:3000 shriyanss/js-recon-labs:fetch_app
```

- [Next.js Axios App](./next_js/axios_app)

```
docker run --rm -p 3000:3000 shriyanss/js-recon-labs:axios_app
```

- [Next.js DOM XSS PostMessage App](./next_js/dom-xss-postMessage)

```
docker run --rm -p 3000:3000 shriyanss/js-recon-labs:dom-xss-postmessage
```

- [Next.js DOM XSS PostMessage JS URL App](./next_js/dom-xss-postMessage-jsUrl)

```
docker run --rm -p 3000:3000 shriyanss/js-recon-labs:dom-xss-postmessage-jsurl
```

Once all the containers are built, you can run those using:

```bash
docker run --rm -p 3000:3000 <lab_name>
```

For users who prefer GitHub Container Registry, they can append `ghcr.io/` to the image name.

## Walkthroughs

Video guides on setting up and solving these labs can be found on [JS Recon Site](https://js-recon.io/labs).
