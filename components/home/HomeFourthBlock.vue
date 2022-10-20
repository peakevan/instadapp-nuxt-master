<template>
  <article class="content-wrapper relative">
    <div class="mx-auto px-8 md:px-16 lg:px-24 xl:px-32 lg:container">
      <h2 class="font-bold text-4xl leading-10">Instadapp Statistics</h2>
      <div class="grid gap-y-6 grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 mt-10">
        <div
          v-for="item in statistics"
          :key="item.title"
          class="flex flex-col rounded shadow-md border border-lines-primary p-4 bg-white"
        >
          <div class="stat-value text-lg font-semibold relative">{{ item.title }}</div>
          <div class="text-font-secondary mt-2">{{ item.subtitle }}</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  setup() {
    const statistics = [
      { title: '$1.78b', subtitle: 'Liqudity' },
      { title: '$380,705,797', subtitle: 'Volume (24h)' },
      { title: '367.8K ETH', subtitle: 'ETH Locked' },
      { title: '153,894', subtitle: 'Transactions (24h)' },
    ]
    return { statistics }
  },
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  background-image: url('/images/bg-curve.svg');
  background-repeat: no-repeat;
  background-position: 0px 100px;
  background-size: contain;
}

.stat-value::before {
  content: '';
  position: absolute;
  left: -16px;
  width: 3px;
  height: 26px;
  background-color: #3f75ff;
}

@media screen and(min-width: 768px) {
  .content-wrapper {
    background-position: center;
  }
}

@media screen and(min-width: 976px) {
  .content-wrapper {
    background-position: right;
    background-size: 40%;
  }
}
</style>
