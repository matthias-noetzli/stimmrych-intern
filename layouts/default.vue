<template>
  <div class="h-full">
    <Nuxt />
    <ScrollButton class="fixed z-20 bottom-4 right-4" />
  </div>
</template>

<script>
import ScrollButton from "@/components/ScrollButton.vue";
import { mapState } from "vuex";

export default {
  head() {
    let title = "";
    if (this.pageTitle) {
      title = this.pageTitle;
    }
    if (this.settings) {
      title = [title, this.settings.title].join(" - ");
    }
    return {
      title: title,
    };
  },
  computed: {
    ...mapState(["story", "settings", "pageTitle"]),
  },
};
</script>

<style lang="scss" scoped></style>
