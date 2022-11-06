<template>
  <button
    class="
      p-4
      text-white
      bg-st-blue
      hover:bg-st-blue-dark
      rounded-md
      uppercase
      font-semibold
      tracking-wider
      transform
      transition-transform
      active:scale-90
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-st-blue
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
