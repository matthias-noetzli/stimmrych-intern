<template>
  <div class="mx-auto font-sans md:text-lg flex flex-col h-full">
    <StHeader />
    <div class="flex justify-center">
      <div class="w-60">
        <h1 class="text-3xl mt-8 mb-6">Login</h1>
        <form @submit.prevent="onSubmit">
          <label class="grid gap-y-1">
            <span>Passwort</span>
            <input
              type="password"
              v-model="password"
              class="border-2 border-gray-600 w-full rounded px-2 py-2"
              autocomplete="current-password"
            />
          </label>

          <button
            type="submit"
            class="
              w-full
              mt-2
              bg-st-blue
              hover:bg-st-blue-dark
              text-st-green
              hover:text-white
              rounded
              py-2
              px-4
            "
          >
            Login
          </button>
          <div v-if="error" class="mt-2" aria-live="assertive">{{ error }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      password: "",
      error: "",
    };
  },
  methods: {
    ...mapMutations(["setAuthenticated", "setSettings", "setPageTitle"]),
    ...mapActions(["getSettings"]),
    async onSubmit() {
      try {
        this.error = null;
        this.submitting = true;
        await this.$axios.$post(`/api/login`, {
          password: this.password,
        });
        this.password = "";
        this.setAuthenticated(true);
        this.$router.push("/");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.error = "Ungültiges Passwort";
        } else {
          this.error = "Ein unerwarteter Fehler ist aufgetreten.";
        }
      } finally {
        this.submitting = false;
      }
    },
  },

  async fetch() {
    this.setPageTitle("Login");
    await this.getSettings();
  },
};
</script>

<style lang="scss" scoped></style>
