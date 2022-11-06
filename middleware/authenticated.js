export default async function ({ store, redirect, $axios, route }) {
  if(route.fullPath === '/login') {
    return;
  }
  if(store.state.authenticated) {
    return;
  }
  try {
    await $axios.$get(`/api/session`);
    store.commit('setAuthenticated', true);
  } catch (error) {
    console.log(error);
  }
  if (!store.state.authenticated) {
    return redirect("/login");
  }
}
