<template>
  <article class="relative">
    <div class="content-wrapper mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pb-64 md:pt-32 md:pb-32 lg:container">
      <h2 class="font-bold text-4xl leading-10">Introducing <span class="text-primary-blue">Atlas</span></h2>
      <p class="text-lg text-font-quaternary mt-6 max-w-lg">
        Instadapp Atlas makes it easy to launch and manage decentralized autonomous organizations from anywhere in the
        world.
      </p>
      <div class="flex flex-col sm:flex-row items-center mt-6">
        <a
          small
          class="sm:mr-4 w-full justify-center sm:w-auto px-3 md:px-4 h-8 transition duration-150 cursor-pointer font-semibold items-center bg-primary-blue rounded text-sm flex text-white hover:bg-primary-blue-hover"
          >Explore DAOs
        </a>
        <a
          small
          class="mt-4 sm:mt-0 w-full justify-center sm:w-auto px-3 md:px-4 h-8 transition duration-150 cursor-pointer font-semibold items-center bg-tertiary-blue rounded text-sm flex text-primary-blue hover:text-font-primary"
          >Launch your DAO
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content-wrapper {
  background-image: url('/images/bg-atlas.svg');
  background-repeat: no-repeat;
  background-position: 100px 300px;
  background-size: contain;
}

@media screen and(min-width: 360px) {
  .content-wrapper {
    background-position: 150px 240px;
  }
}

@media screen and(min-width: 420px) {
  .content-wrapper {
    background-position: 150px 150px;
  }
}

@media screen and(min-width: 520px) {
  .content-wrapper {
    background-position: 250px 125px;
  }
}

@media screen and(min-width: 768px) {
  .content-wrapper {
    background-position: 550px 0px;
  }
}

@media screen and(min-width: 976px) {
  .content-wrapper {
    background-position: right;
    background-size: 40%;
  }
}
@media screen and(min-width: 1440px) {
  .content-wrapper {
    background-position: 85%;
    background-size: contain;
  }
}
</style>
