import { sortRoutes } from '@nuxt/utils'
export default {
  extendRoutes(routes, resolve) {
    routes.push(
      {
        path: '/newsletter/thanks',
        component: resolve(__dirname, 'pages/-message.vue'),
        props: {
          pageTitle: 'Almost finished...',
          pageBody:
            'To help protect our email list — we just sent you a quick email asking you to please confirm that you’re actually a real-life person. The confirmation email should arrive in your inbox shortly. Please click on the button to confirm. Thanks for subscribing!',
        },
      },
      {
        path: '/newsletter/sad',
        component: resolve(__dirname, 'pages/-message.vue'),
        props: {
          pageTitle: 'Unsubscribed :(',
          pageBody: 'Super sad to see you',
        },
      },
      {
        path: '/newsletter/confirm',
        component: resolve(__dirname, 'pages/-message.vue'),
        props: {
          pageTitle: 'Thanks for Subscribing :)',
          pageBody: 'Super excited to see you on board.',
        },
      }
    )
    sortRoutes(routes)
  },
}
