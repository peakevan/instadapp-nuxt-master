<template>
  <article class="relative mx-auto lg:container">
    <div
      class="grid grid-cols-12 px-8 md:px-16 lg:border lg:border-gray-50 lg:p-12 lg:rounded lg:shadow-lg lg:relative bg-white"
      style="top: 160px"
    >
      <div class="col-span-full lg:col-span-7">
        <h2 class="font-bold text-3xl leading-8 text-center lg:text-left">Get your stories delivered</h2>
        <p class="text-font-quaternary text-lg mt-6 text-center lg:text-left">
          Best way to stay connected with our progress.
        </p>
      </div>

      <form
        id="mc-embedded-subscribe-form"
        action="https://instadapp.us10.list-manage.com/subscribe/post?u=b6177a0338159bed90b46c796&amp;id=d39fc1930e"
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        novalidate
        class="flex items-center mt-8 lg:mt-0 col-span-full lg:col-span-5"
      >
        <AppInput
          id="mce-EMAIL"
          name="EMAIL"
          type="email"
          hide-details
          placeholder="Your Email"
          class="rounded-none w-3/5"
        />
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px" aria-hidden="true">
          <input type="text" name="b_b6177a0338159bed90b46c796_d39fc1930e" tabindex="-1" value="" />
        </div>
        <AppBtnPrimary type="submit" class="rounded-r w-2/5">Step Inside</AppBtnPrimary>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  setup() {},
}
</script>

<style lang="scss" scoped></style>
