<template>
  <div class="flex flex-1 pt-32 pb-16 px-6 items-center justify-center md:h-screen md:py-0">
    <main>
      <div class="flex flex-col justify-center items-center text-center">
        <div>
          <img src="/images/message-face.svg" alt="face" />
        </div>
        <h2 class="mt-10 text-3xl font-bold leading-10 tracking-tighter text-font-primary sm:leading-none">
          {{ pageTitle }}
        </h2>
        <p class="max-w-2xl mx-auto mt-6 text-lg text-font-quaternary">
          {{ pageBody }}
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'secondary',
  props: {
    pageTitle: {
      type: String,
      default: '',
    },
    pageBody: {
      type: String,
      default: '',
    },
  },
}
</script>
