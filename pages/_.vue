<template>
  <div class="flex flex-1 px-6 items-center justify-center h-screen">
    <main>
      <div class="text-center">
        <h2 class="text-4xl font-extrabold leading-10 tracking-tighter text-font-primary sm:leading-none">
          There’s no page here
        </h2>
        <p class="max-w-md mx-auto mt-6 text-lg text-font-quaternary">Looks like you ended up here by accident?</p>
        <div class="max-w-md mx-auto mt-6 sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <nuxt-link
              to="/"
              class="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-primary-blue border border-transparent rounded-md hover:bg-primary-blue-hover"
            >
              Back to home page
            </nuxt-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'secondary',
}
</script>
