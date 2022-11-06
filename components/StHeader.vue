<template>
  <header class="relative">
    <div class="bg-st-blue">
      <nav class="px-8 py-4 bg-st-blue text-st-green shadow">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center h-16">
            <nuxt-link to="/"><Logo class="h-12" /></nuxt-link>
            <ul class="hidden sm:ml-6 sm:flex sm:space-x-8" v-if="showMenu">
              <li v-for="(link, index) in nuxtLinks" :key="index">
                <router-link
                  :to="link.to"
                  v-slot="{ href, navigate }"
                  custom
                  v-on:click.native="scrollToHash(link.to.hash)"
                >
                  <a class="group text-st-green" :href="href" @click="navigate">
                    <div>{{ link.label }}</div>
                    <div
                      class="
                        h-0.5
                        bg-st-green
                        transform
                        scale-x-0
                        group-hover:scale-x-100
                        transition-transform
                        duration-150
                      "
                    ></div>
                  </a>
                </router-link>
              </li>
              <li v-if="authenticated">
                <button @click="logout" class="group text-st-green">
                  <div>Logout</div>
                  <div
                    class="
                      h-0.5
                      bg-st-green
                      transform
                      scale-x-0
                      group-hover:scale-x-100
                      transition-transform
                      duration-150
                    "
                  ></div>
                </button>
              </li>
            </ul>

            <div class="-mr-2 flex items-center sm:hidden">
              <!-- Mobile menu button -->
              <button
                v-if="showMenu"
                @click="menuOpen = !menuOpen"
                type="button"
                class="
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-md
                  hover:text-white
                  focus:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-white
                "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="h-6 w-6"
                  :class="{ hidden: menuOpen, block: !menuOpen }"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  :class="{ hidden: !menuOpen, block: menuOpen }"
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="sm:hidden" id="mobile-menu" v-if="menuOpen">
          <div class="pt-2 pb-3 space-y-1">
            <nuxt-link
              v-for="(link, index) in nuxtLinks"
              :key="index"
              :to="link.to"
              class="text-st-green block pl-3 pr-4 py-2"
              v-on:click.native="scrollToHash(link.to.hash)"
              >{{ link.label }}</nuxt-link
            >
          </div>
        </div>
      </nav>
    </div>
    <Hero v-if="heroImage" class="hidden sm:block" :image="heroImage" />
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
    heroImage: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    ...mapState(["authenticated"]),
    nuxtLinks() {
      return this.links.map((link) => {
        const urlParts = link.url.url.split("#");
        const path = urlParts[0];
        const hash = urlParts.length > 1 ? `#${urlParts[1]}` : "";
        return {
          label: link.label,
          to: {
            path,
            hash,
          },
        };
      });
    },
    showMenu() {
      return this.authenticated || this.nuxtLinks.length > 0;
    },
  },
  methods: {
    scrollToHash(hash) {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
          });
        }
      }
    },
    ...mapActions(["logout"]),
  },
};
</script>

<style lang="scss" scoped></style>
