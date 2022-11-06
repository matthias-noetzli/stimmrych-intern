<template>
  <transition
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
    enter-class="opacity-0 transform translate-y-full"
    enter-to-class="opacity-100 transform translate-y-0"
    leave-class="opacity-100 transform translate-y-0"
    leave-to-class="opacity-0 transform translate-y-0"
  >
    <button @click="scrollToTop" v-show="isScrolled">
      <span class="sr-only">Zum Seitenanfang</span>
      <div
        class="
          rounded-full
          w-10
          h-10
          flex
          items-center
          justify-center
          text-white
          bg-black
          hover:bg-gray-900
        "
      >
        <font-awesome-icon :icon="['fas', 'chevron-up']" class="pb-px" />
      </div>
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onScroll);
  },

  methods: {
    onScroll() {
      this.isScrolled = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
