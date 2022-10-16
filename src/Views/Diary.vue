<template>
  <div class="input">
    <h1>Title</h1>
    <textarea
      class="title"
      v-model="title"
      placeholder=" Insert your title."
    ></textarea>
    <h2>text</h2>
    <textarea
      class="text"
      v-model="message"
      placeholder="Star writting your diary."
    ></textarea>

    <div class="diary">
      <Diary v-show="title || message" :message="message" :title="title" />
    </div>
  </div>
</template>
<script>
import Diary from "../components/Diary/Diary.vue";
export default {
  components: { Diary },
  data() {
    return {
      title: "",
      message: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.input {
  box-sizing: content-box;
  padding-top: 1rem;
  padding-left: 10%;
  width: 90%;
  textarea.title {
    width: 50% !important;
    height: 2rem !important;
    padding-top: 5px;
    text-align: center;
    resize: none;
  }
  textarea.text {
    width: 80% !important;
    height: 40% !important;
    max-height: 40% !important;
    padding-top: 5px;
    resize: none;
  }
  .diary {
    padding-top: 1rem;
    width: 90%;
    height: 50%;
    padding-left: 10%;
  }
}
</style>