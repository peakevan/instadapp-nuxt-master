<template>
  <div
    class="flex items-center justify-center"
    :class="{
      'h-6': !sizeFit,
      'w-6': !sizeFit,
    }"
    v-bind="$attrs"
    @click="onClick"
  >
    <img :src="$attrs.src" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    sizeFit: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    function onClick() {
      context.emit('click')
    }
    return { onClick }
  },
}
</script>

<style></style>
