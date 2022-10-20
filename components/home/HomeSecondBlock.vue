<template>
  <article class="relative">
    <div class="mx-auto px-8 md:px-16 lg:px-24 xl:px-32 lg:container">
      <h2 class="font-bold text-4xl leading-10">Supported Protocols</h2>
      <div class="grid gap-y-12 gap-x-6 md:gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-4/5 mt-16">
        <div v-for="protocol in protocols" :key="protocol.name">
          <a
            :href="protocol.link"
            target="_blank"
            rel="noreferrer noopener nofollow"
            class="tertiary-button bg-white text-sm font-semibold flex items-center md:border md:border-lines-primary md:px-4 md:py-2 transitiona-all duration-150 hover:shadow-md"
          >
            <AppIcon class="mr-2" :src="protocol.logo" /> {{ protocol.name }}
          </a>
        </div>
      </div>
    </div>
    <div
      class="w-64 h-64 hidden lg:block rounded-full bg-gradient-to-tr from-white to-primary-orange opacity-75 absolute"
      style="bottom: 0%; right: 10%"
    ></div>
    <div class="block-divider--dark absolute bottom-0 right-0 left-0"></div>
  </article>
</template>

<script>
export default {
  setup() {
    const protocols = [
      { name: 'MakerDAO', logo: '/images/org/maker.svg', link: '' },
      { name: 'Compound', logo: '/images/org/compound.svg', link: '' },
      { name: 'Kyber', logo: '/images/org/kyber.svg', link: '' },
      { name: 'Curve', logo: '/images/org/curve.svg', link: '' },
      { name: 'Dydx', logo: '/images/org/dydx.svg', link: '' },
      { name: 'Aave', logo: '/images/org/aave.svg', link: '' },
      { name: 'Uniswap', logo: '/images/org/uniswap.svg', link: '' },
    ]

    return { protocols }
  },
}
</script>

<style lang="scss" scoped>
.tertiary-button {
  &:hover {
    transform: scale(1.01);
  }
}
</style>
