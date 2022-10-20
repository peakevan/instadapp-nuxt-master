<template>
  <header :class="{ 'bg-white': menuOpened }">
    <nav class="px-8 md:px-16 lg:px-24 xl:px-32 mx-auto lg:container">
      <div class="mx-auto">
        <div class="flex items-center justify-between h-20">
          <nuxt-link
            to="/"
            class="flex items-center text-xl font-semibold"
            :class="menuOpened ? 'text-primary-blue' : 'text-white'"
          >
            <div class="flex-shrink-0">
              <div class="flex flex-col justify-center items-center w-8 h-8 mr-3">
                <svg viewBox="0 0 45 38" fill="none" class="fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.6533 37.5469C36.7859 37.5469 45 29.3328 45 19.2002C45 9.0676 36.7859 0.853516 26.6533 0.853516C16.5208 0.853516 8.30667 9.0676 8.30667 19.2002C8.30667 29.3328 16.5208 37.5469 26.6533 37.5469ZM26.6533 28.3735C31.7196 28.3735 35.8267 24.2665 35.8267 19.2002C35.8267 14.1339 31.7196 10.0268 26.6533 10.0268C21.587 10.0268 17.48 14.1339 17.48 19.2002C17.48 24.2665 21.587 28.3735 26.6533 28.3735Z"
                  />
                  <path
                    d="M0 5.44018C0 2.90704 2.05352 0.853516 4.58667 0.853516H26.6533V10.0268H4.58667C2.05352 10.0268 0 7.97333 0 5.44018Z"
                  />
                  <path
                    d="M0 32.9602C0 30.427 2.05352 28.3735 4.58667 28.3735H26.6533V37.5469H4.58667C2.05352 37.5469 0 35.4933 0 32.9602Z"
                  />
                </svg>
              </div>
            </div>
            INSTADAPP
          </nuxt-link>
          <ul class="items-center justify-around hidden lg:flex flex-grow px-8 xl:px-16 max-w-screen-md">
            <li class="text-sm text-white">Use Cases</li>
            <li class="text-sm text-white">Documentation</li>
            <li class="text-sm text-white">Articles</li>
            <li class="text-sm text-white">Old Portal</li>
          </ul>
          <a
            small
            class="ml-8 px-4 h-8 transition duration-150 cursor-pointer font-semibold items-center bg-white rounded text-sm bg-opacity-25 hidden lg:flex text-white hover:bg-opacity-75 hover:text-primary-blue"
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

          <AppBtnSecondary
            small
            class="bg-opacity-25 lg:hidden"
            :class="{ 'bg-primary-blue': menuOpened }"
            @click="toggleMenu"
          >
            <div
              class="flex justify-center items-center h-6 w-6 px-1"
              :class="menuOpened ? 'text-primary-blue' : 'text-white'"
            >
              <svg
                v-if="menuOpened"
                class="fill-current flex-grow"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.6777 2.36392L2.36398 13.6776L0.949768 12.2634L12.2635 0.949707L13.6777 2.36392Z" />
                <path d="M2.36398 0.949707L13.6777 12.2634L12.2635 13.6776L0.949768 2.36392L2.36398 0.949707Z" />
              </svg>

              <svg
                v-else
                class="fill-current flex-grow"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H16V2H0V0Z" />
                <path d="M0 4H16V6H0V4Z" />
                <path d="M0 8H16V10H0V8Z" />
              </svg>
            </div>
          </AppBtnSecondary>
        </div>
      </div>
    </nav>

    <div v-if="menuOpened" ref="menu" class="dropdown-menu flex flex-col pt-8 items-center">
      <ul class="items-center justify-center flex flex-col max-w-screen-md">
        <li class="font-semibold py-6">Use Cases</li>
        <li class="font-semibold py-6">Documentation</li>
        <li class="font-semibold py-6">Articles</li>
        <li class="font-semibold py-6">Old Portal</li>
      </ul>
      <a
        small
        class="mt-10 px-4 h-10 flex-shrink transition duration-150 cursor-pointer flex font-semibold items-center bg-primary-blue rounded text-sm text-white hover:bg-primary-blue-hover"
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
    </div>
  </header>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const menuOpened = ref(false)

    function toggleMenu() {
      menuOpened.value = !menuOpened.value
    }
    return { toggleMenu, menuOpened }
  },
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  height: calc(100vh - 80px);
}
</style>
