<template>
  <article class="relative bg-font-primary">
    <div class="mx-auto px-8 md:px-16 lg:px-24 xl:px-32 lg:container relative">
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        <div>
          <div class="text-sm font-bold text-primary-green">DESIGNED FOR DEVELOEPERS</div>
          <h2 class="font-bold text-4xl leading-10 text-white mt-4">Developer First</h2>
          <p class="text-lg text-font-tertiary mt-4">
            Build compelling use-cases and monetize their models to earn money by serving your users with high
            reliability.
          </p>

          <ul class="text-primary-blue text-sm mt-6 space-y-2 leading-6">
            <li class="flex items-center">Start with your own use case</li>
            <li class="flex items-center">Execute rapidly whith Javascript</li>
            <li class="flex items-center">Open to all developer team sizes</li>
          </ul>
          <a
            small
            class="mt-6 hidden md:inline-flex px-4 h-8 transition duration-150 cursor-pointer font-semibold items-center bg-primary-blue rounded text-sm text-white hover:bg-primary-blue-hover"
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
        <div class="block-code flex flex-col px-8 py-10 rounded border-lines-secondary border relative w-full z-30">
          <ol class="space-y-1 text-white">
            <li><span style="color: #7a92f6">let</span> spells = <span style="color: #7a92f6">dsa.Spell()</span></li>
            <li></li>
            <li>spells.add({</li>
            <li>connector: <span class="text-orange-500">"maker"</span>,</li>
            <li>method: <span style="color: #fcc659">"open"</span>,</li>
            <li>args: <span class="text-orange-500">["ETH-A"]</span>,</li>
            <li>})</li>
            <li></li>
            <li><span style="color: #7a92f6">dsa.cast(spells)</span></li>
          </ol>
          <hr class="border-lines-secondary my-8" />
          <h6 class="text-sm text-white">Make DeFi better for everyone</h6>
          <p class="text-sm text-font-tertiary mt-4">
            Create powerful use cases for your users with just javascript code, without worrying about smart contracts &
            expensive audits.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer" style="color: #fcc659" class="mt-4 flex items-center">
            Learn more
            <svg class="ml-2" width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 1L10.5 5M10.5 5L6.5 9M10.5 5H0" stroke="#fcc659" stroke-width="1.7" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="block-divider--white absolute bottom-0 right-0 left-0"></div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
ul > li::before {
  content: '';
  margin-right: 8px;
  display: inline-block;
  height: 16px;
  width: 16px;
  background-image: url('/images/icons/checked.svg');
  background-repeat: no-repeat;
}

ol {
  list-style: none;
  counter-reset: item;
}
li {
  counter-increment: item;
}
li:before {
  margin-right: 12px;
  content: counter(item);
  font-size: 12px;
  color: #53718c;

  text-align: center;
  display: inline-block;
}

.block-code {
  background-color: #202c43;
  top: 40px;
}

@media screen and(min-width: 768px) {
  .block-code {
    top: 0px;
  }
}
</style>
