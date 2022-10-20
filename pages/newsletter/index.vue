<template>
  <div class="flex flex-1 px-6 items-center justify-center h-screen">
    <main>
      <div class="flex flex-col justify-center items-center text-center">
        <h2 class="text-3xl font-bold leading-10 tracking-tighter text-font-primary sm:leading-none">
          Instadapp Newsletter
        </h2>
        <p class="max-w-2xl mx-auto mt-6 text-lg text-font-quaternary">
          The best way to stay updated with our progress.
        </p>
        <form
          id="mc-embedded-subscribe-form"
          action="https://instadapp.us10.list-manage.com/subscribe/post?u=b6177a0338159bed90b46c796&amp;id=d39fc1930e"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          novalidate
          class="flex items-center mt-8 w-full"
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
    </main>
  </div>
</template>

<script>
export default {
  layout: 'secondary',
}
</script>
