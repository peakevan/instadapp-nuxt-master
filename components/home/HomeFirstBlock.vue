<template>
  <article class="bg-gradient-to-r from-primary-blue to-secondary-blue relative overflow-hidden">
    <div class="mx-auto px-8 md:px-16 lg:px-24 xl:px-32 lg:container relative">
      <h1 class="font-bold text-white text-4xl leading-10 max-w-xl md:text-6xl md:leading-16">
        Powerful DeFi Management
      </h1>
      <p class="text-white text-lg leading-7 mt-8 max-w-lg">
        We allow developers of all stripes to start leveraging the full potential of Decentralised Finance.
      </p>
      <div class="flex justify-center sm:justify-start items-center flex-wrap mt-8">
        <a
          small
          class="sm:mr-8 px-4 h-8 transition duration-150 cursor-pointer font-semibold items-center bg-white rounded text-sm flex text-primary-blue hover:text-font-primary"
          >Dashboard<svg
            class="ml-2"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path class="stroke-current" d="M6.5 1L10.5 5M10.5 5L6.5 9M10.5 5H0" stroke-width="1.7" />
          </svg>
        </a>
        <nuxt-link class="text-white text-sm underline w-full mt-4 sm:mt-0 sm:w-auto text-center" to="/documentation"
          >Documentation</nuxt-link
        >
      </div>
      <div class="dashboard-screenshot absolute hidden md:block shadow-xl z-20 xl:right-0">
        <img
          srcset="/images/dashboard-w850.png, /images/dashboard-w1275.png 1.5x, /images/dashboard-w1700.png 2x"
          src="/images/dashboard-w1700.png"
          alt="dashboard image"
          class="w-full rounded-xl"
        />
      </div>
    </div>
    <div class="block-divider--white absolute bottom-0 right-0 left-0 z-10"></div>
    <div
      class="w-64 h-64 hidden lg:block rounded-full bg-gradient-to-tr from-primary-blue to-white opacity-25 absolute z-00"
      style="bottom: -120px; left: -60px"
    ></div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dashboard-screenshot {
  width: 650px;
  top: -60px;
  right: -470px;
}

@media screen and (min-width: 880px) {
  .dashboard-screenshot {
    right: -350px;
  }
}
@media screen and (min-width: 1024px) {
  .dashboard-screenshot {
    right: -220px;
  }
}
@media screen and (min-width: 1140px) {
  .dashboard-screenshot {
    width: 850px;
    right: -500px;
  }
}
@media screen and (min-width: 1440px) {
  .dashboard-screenshot {
    right: -200px;
  }
}
</style>
