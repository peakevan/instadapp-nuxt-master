<template>
  <button
    :type="type"
    class="button-primary whitespace-no-wrap text-sm text-white bg-primary-blue font-semibold border-primary-blue border"
    :class="[
      small ? 'p-1' : 'p-2',
      { 'cursor-not-allowed text-opacity-50': disabled, 'hover:text-white hover:bg-primary-blue-hover': !disabled },
    ]"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.button-primary {
  &:active {
    // TODO prepare importing variabled from tailwind congiguration
    // background-color: $primary-blue-pressed;
    background-color: #335ecc;
  }
}
</style>
