<template>
  <button
    :type="type"
    class="text-sm font-semibold rounded bg-white text-primary-blue"
    :class="[
      small ? 'p-1' : 'p-3',
      { 'text-opacity-50 bg-disabled-gray text-font-secondary': disabled || loading },
      { 'hover:text-font-primary': !disabled && !loading },
      { 'rounded-full': rounded },
      { 'cursor-not-allowed ': disabled },
    ]"
    :disabled="disabled || loading"
    v-on="$listeners"
  >
    <div class="flex items-center justify-center">
      <div v-if="loading" class="mr-4"><AppSpinner /></div>
      <AppIcon v-if="hasIconLeft && iconPath && !loading" :src="iconPath" class="mr-1" />
      <slot>Button</slot>
      <AppIcon v-if="hasIconRight && iconPath && !loading" :src="iconPath" class="ml-1" />
    </div>
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
    loading: {
      type: Boolean,
      default: false,
    },
    hasIconLeft: {
      type: Boolean,
      default: false,
    },
    hasIconRight: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    iconPath: {
      type: String,
      default: '',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
