<template>
  <div class="border">
    <h1>{{ title }}</h1>
    <p style="white-space: pre-line">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["message", "title"],
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  padding-bottom: 1rem;
}
p {
  padding-left: 5px;
  text-align: left;
  word-wrap: break-word;
  color: white;
}

.border {
  border-style: groove;
  border-color: var(--primary);
  background-color: var(--dark);
  width: 100% !important;
  max-height: 100% !important;
  overflow: auto;
  box-sizing: content-box;
}
</style>