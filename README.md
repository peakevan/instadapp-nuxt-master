# atlas-landing

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Kubernetes configuration.

1. This project contains the deployment configuration for deployment in kubernetes.
2. The env variables are saved as k8s secrets and should be applied before the deployment.
3. k8s secrets template is included, Please fill it with appropriate values before deploying.

To deploy the secrets or the deployment, Make sure you have the right kubectl config at ~/.kube/config and then run,

    kubectl apply -f <deployment-or-secrets.yml>

