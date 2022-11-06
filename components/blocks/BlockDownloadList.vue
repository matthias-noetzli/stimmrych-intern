<template>
  <div class="block-download-list px-8 my-4 text-st-blue">
    <h2 class="text-2xl">{{ block.title }}</h2>
    <ul v-if="block.files" class="mt-2 grid gap-y-1">
      <li v-for="file in block.files" :key="file.id">
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="file.filename"
          class="text-st-link hover:underline"
          >{{ file.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped></style>
