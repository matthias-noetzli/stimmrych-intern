<template>
  <div class="block-download-list px-8 my-4 text-st-blue">
    <details>
      <summary class="cursor-pointer group">
        <h2 class="inline group-hover:underline">{{ block.title }}</h2>
      </summary>
      <ul v-if="block.files" class="mt-2 grid gap-y-1 pl-4">
        <li v-for="file in block.files" :key="file.id">
          <a target="_blank" rel="noopener noreferrer" :href="file.filename" class="text-st-link hover:underline">{{
            file.title }}</a>
        </li>
      </ul>
    </details>
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
