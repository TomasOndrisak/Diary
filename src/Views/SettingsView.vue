<template>
  <main class="settings-page">
    <h1>Calendar</h1>
    <p>Settings page</p>
    <button @click="myFunction_set">CLICk</button>
  </main>
</template>



<script>
export default {
  setup() {},
  methods: {
    // Create a function for setting a variable value
    myFunction_set() {
      let r = document.querySelector(":root");

      // Set the value of variable --blue to another value (in this case "lightblue")
      r.style.setProperty("--dark", "#5e779b");
      r.style.setProperty("--darkAlt", "grey");
    },
  },
};
</script>
<style lang="scss">
:root {
  //variables
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --darkAlt: #334155;

  --light: #f1f5f9;
  --sidebar-width: 200px;
}
</style>