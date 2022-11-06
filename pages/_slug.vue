<template>
  <div class="mx-auto font-sans md:text-lg flex flex-col h-full">
    <StHeader :links="headerLinks" />
    <h1 class="text-3xl px-8 mt-8 mb-6">{{ pageTitle }}</h1>
    <main class="mb-12">
      <div v-if="story">
        <component
          v-for="block in story.content.content"
          :key="block.__uid"
          :is="`${block.component}`"
          :block="block"
        />
      </div>
    </main>
  </div>
</template>

<script>
import BlockDownloadList from "@/components/blocks/BlockDownloadList.vue";
import BlockCalendar from "@/components/blocks/BlockCalendar.vue";
import BlockMembers from "@/components/blocks/BlockMembers.vue";
import StHeader from "@/components/StHeader.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  components: {
    BlockDownloadList,
    BlockCalendar,
    BlockMembers,
    StHeader,
  },
  async fetch() {
    await this.getSettings();
    await this.getStory("pages/" + this.$route.params.slug);
  },
  computed: {
    ...mapState(["story", "settings", "pageTitle"]),
    headerLinks() {
      return this.settings ? this.settings.header_links : [];
    },
  },
  methods: {
    ...mapMutations(["setStory", "setSettings", "setPageTitle"]),
    ...mapActions(["getStory", "getSettings"]),
  },
};
</script>
