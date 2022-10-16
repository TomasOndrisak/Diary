<template lang="">
  <div class="background">
    <h3 style="font-size: 63px; color: white;">Month</h3>
    <div class="day" v-for="i in 31" :key="i">
      <h1 style="color: white;">{{i}}</h1>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      i: 0,
    };
  },
};
</script>
<style lang="">
.background {
  border-style: groove;
  border-color: var(--primary);
  background-color: var(--dark);
  width: 100% !important;
  max-height: 100% !important;
  overflow: auto;
  box-sizing: content-box;
}
.day {
  display: inline-flex;
  border-style: groove;
  border-color: var(--primary);
  background-color: var(--dark);
  width: 15% !important;
  height: 15% !important;
  margin: 5px;
}
</style>