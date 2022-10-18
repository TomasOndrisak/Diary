<template>
  <div class="login">
    <div v-if="registerBtn || loginBtn" class="dismiss">
      <button @click="revertSelection" class="material-icons">
        arrow_left_alt
      </button>
    </div>

    <button
      v-if="!registerBtn && !loginBtn"
      @click="registerButtonClicked"
      class="register-button"
    >
      Register
    </button>
    <button
      v-if="!registerBtn && !loginBtn"
      @click="loginButtonClicked"
      class="login-button"
    >
      Log In
    </button>

    <form v-if="loginBtn" @submit.prevent="login">
      <h3 class="title">LOG IN</h3>
      <p>email</p>
      <input
        type="email"
        placeholder="Email adress"
        v-model="login_form.email"
      />
      <div>
        <p>password</p>
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
      </div>
      <button type="submit" class="material-icons">arrow_right_alt</button>
    </form>

    <form v-if="registerBtn" @submit.prevent="register">
      <h3 class="title">REGISTRATION</h3>
      <p>email</p>
      <input
        type="email"
        placeholder="Email adress"
        v-model="register_form.email"
      />
      <div>
        <p>password</p>
        <input
          type="password"
          placeholder="Password"
          v-model="register_form.password"
        />
      </div>
      <button type="submit" class="material-icons">arrow_right_alt</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  data() {
    return {
      registerBtn: false,
      loginBtn: false,
    };
  },

  methods: {
    registerButtonClicked() {
      this.registerBtn = !this.registerBtn;
    },

    loginButtonClicked() {
      this.loginBtn = !this.loginBtn;
    },

    revertSelection() {
      if (this.loginBtn) {
        this.loginBtn = !this.loginBtn;
      }
      if (this.registerBtn) {
        this.registerBtn = !this.registerBtn;
      }
    },
  },

  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };
    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>


<style lang="scss">
.login {
  box-sizing: content-box;
  padding-top: 15%;
  background-color: var(--dark);
  width: 100%;

  .title {
    font-size: 2rem;
    margin: 1rem;
    color: white;
  }
  p {
    margin-top: 0.3%;
    color: white;
  }

  button.register-button {
    border-style: groove;
    border-color: #c83028;
    border-radius: 8px;
    font-weight: bold;
    background-color: #c83028;
    padding-top: 5px;
    box-sizing: content-box;
    margin: 6%;
    padding: 20px;
    font-size: 20px;
  }
  button.login-button {
    border-style: groove;
    border-color: var(--primary);
    border-radius: 8px;
    font-weight: bold;
    background-color: var(--primary);
    font-size: 20px;
    padding: 20px;
    box-sizing: content-box;
  }
  .dismiss {
    padding-right: 6rem;
  }
  button.material-icons {
    font-size: 6rem;
    color: var(--light);

    &:hover {
      color: var(--primary);
    }
  }
}
</style>