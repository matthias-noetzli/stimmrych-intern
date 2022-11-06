export const state = () => ({
    authenticated: false,
    story: null,
    settings: null,
    pageTitle: "",
  })
  
  export const mutations = {
    setAuthenticated(state, value) {
      state.authenticated = value;
    },
    setStory(state, value) {
      state.story = value;
    },
    setSettings(state, value) {
      state.settings = value;
    },
    setPageTitle(state, value) {
      state.pageTitle = value;
    }
  }

  export const actions = {
    async logout({commit}) {
     try {
      this.$router.push('/login');
      commit("setAuthenticated", false);
      await this.$axios.$get(`/api/logout`);
     } catch(error) {
      console.log(error);
     }
    },
    async getStory({commit}, slug) {
      try {
        const response =  await this.$axios.$get(`/api/stories?path=${slug}`);
        const story = response.data.story;
        commit("setStory", story);
        commit("setPageTitle", story.name);
      } catch(error) {
        if (error.response && error.response.status === 401) {
         this.dispatch("logout");
        }
      }
    },
    async getSettings({dispatch,commit}) {
      try {
      const response =  await this.$axios.$get(`/api/settings`);
      const settings = response.data.story.content;
      commit("setSettings", settings);
    } catch(error) {
      if (error.response && error.response.status === 401) {
       this.dispatch("logout");
      }
    }
    },
  }