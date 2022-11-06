<template>
  <div class="px-8 my-4">
    <h2 class="text-2xl mb-4" v-if="block.title">{{ block.title }}</h2>
    <ul v-if="members && members.length > 0" class="grid gap-y-4 gap-x-4">
      <li v-for="(member, index) in members" :key="index">
        <figure>
          <img
            class="w-full"
            :src="`${member.image.filename}/m/400x0`"
            :alt="member.image.alt"
          />
          <figcaption class="text-center mt-2">
            {{ member.name }}
          </figcaption>
        </figure>
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
  computed: {
    members() {
      return [...this.block.members].sort();
    },
  },
};
</script>

<style scoped>
ul {
  @apply grid-cols-2;
  @apply md:grid-cols-members;
}
img {
  aspect-ratio: 3 / 4;
  @apply bg-st-green;
}
</style>
