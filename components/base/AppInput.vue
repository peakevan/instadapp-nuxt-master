<template>
  <div class="flex flex-col relative">
    <div class="flex flex-col relative">
      <input
        class="border rounded-l px-4 py-2 text-sm font-medium"
        :class="[error ? ' border-primary-red' : 'border-lines-primary ', { 'pr-10': loading }]"
        v-bind="$attrs"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        @keydown.enter.prevent="$emit('change', $event.target.value)"
      />
      <AppSpinner v-if="loading" class="absolute" style="right: 10px; top: 12px" />
    </div>
    <div v-if="!hideDetails" class="static left-0 bottom-0 min-h-6 leading-6">
      <transition name="bounceIn" mode="out-in">
        <div v-if="error" :key="1" class="flex">
          <AppIcon src="/images/icons/deny.svg" />
          <span class="text-xs font-medium text-primary-red">{{ error }}</span>
        </div>
        <div v-else-if="hint && !error" :key="2" class="flex items-center">
          <span class="text-xs font-medium" :class="[hintColor]">{{ hint }}</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hideDetails: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    hintColor: {
      type: String,
      default: 'text-font-secondary',
    },
  },
}
</script>

<style></style>
