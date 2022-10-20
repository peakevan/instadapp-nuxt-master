<template>
  <div class="relative w-full">
    <hr class="border-lines-primary w-full" />
    <div class="divider-text flex items-center justify-center absolute w-full top">
      <span class="text-sm font-medium bg-modal-primary px-3">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.divider-text {
  top: -10px;
}
</style>
