<template>
  <footer style="background: #fafbfd" class="py-16 lg:pt-48 lg:pb-32">
    <div
      class="px-8 md:px-16 lg:px-24 xl:px-32 mx-auto lg:h-64 lg:container grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 lg:gap-12"
    >
      <div class="flex flex-col md:justify-between md:border-r border-lines-primary">
        <nuxt-link to="/" class="flex items-center font-bold">
          <div class="flex-shrink-0">
            <img class="w-6 h-6 mr-2" src="/images/logo.svg" alt="INSTADAPP" />
          </div>
          INSTADAPP
        </nuxt-link>

        <div class="text-font-secondary text-sm mt-6">©Instadapp</div>
      </div>
      <div class="text-right md:text-left">
        <div class="text-sm font-semibold">Protocol</div>
        <div class="flex flex-col space-y-1 text-font-secondary text-sm mt-4">
          <nuxt-link v-for="item in protocol" :key="item.name" :to="item.path" class="hover:text-font-primary">{{
            item.name
          }}</nuxt-link>
        </div>
      </div>
      <div>
        <div class="text-sm font-semibold">Social</div>
        <div class="flex flex-col space-y-1 text-font-secondary text-sm mt-4">
          <nuxt-link v-for="item in social" :key="item.name" :to="item.path" class="hover:text-font-primary">{{
            item.name
          }}</nuxt-link>
        </div>
      </div>
      <div class="text-right md:text-left">
        <div class="text-sm font-semibold">Company</div>
        <div class="flex flex-col space-y-1 text-font-secondary text-sm mt-4">
          <nuxt-link v-for="item in company" :key="item.name" :to="item.path" class="hover:text-font-primary">{{
            item.name
          }}</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const protocol = [
      { name: 'Dashboard', path: '#' },
      { name: 'Documentation', path: '#' },
      { name: 'Articles', path: '#' },
      { name: 'Forum', path: '#' },
    ]
    const social = [
      { name: 'Twitter', path: '#' },
      { name: 'Discord', path: '#' },
      { name: 'Github', path: '#' },
    ]
    const company = [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '/terms' },
      { name: 'Cookie', path: '/cookies' },
      { name: 'CCPA', path: '/ccpa' },
      { name: 'Brand', path: '#' },
      { name: 'Contact', path: '#' },
      { name: 'Email', path: '#' },
    ]

    return { protocol, social, company }
  },
}
</script>

<style></style>
