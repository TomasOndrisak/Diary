<template>
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
* {
  //resets vymaze margin padding boxing
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}
body {
  background: var(--light); //znizi svetlost pozadia
}
button {
  //buttony nemaju styling
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 1024px) {
      //pre ipady
      padding-left: 6rem;
    }
  }
}
</style>