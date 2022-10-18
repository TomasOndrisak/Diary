<template lang="">
  <div class="background">
    <h3 style="font-size: 63px; color: white;">Month</h3>
    <router-link  :to="{
         name: 'diary',
         params: { id: i},
        }"
         class="day" v-for="i in 31" :key="i">
      <h1 style="color: white;">{{i}}</h1>

</router-link>
</div>
</template>
<script>
export default {
  data() {
    return {
      date: Date.now(),
      i: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
.background {
  border-style: groove;
  border-color: var(--primary);
  background-color: var(--dark);
  width: 100% !important;
  max-height: 100% !important;
  overflow: auto;
  box-sizing: content-box;
  @media (max-width: 1024px) {
    //pre ipady
    padding-left: 6rem;
  }
}
.day {
  display: inline-flex;
  border-style: groove;
  border-color: var(--primary);
  background-color: var(--dark);
  width: 15% !important;
  height: 15% !important;
  margin: 4px;
  &:hover {
    background-color: var(--primary);
    transition: 0.4s ease-out;
  }
}
</style>