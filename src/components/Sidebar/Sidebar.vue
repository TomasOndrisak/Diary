<template>
  <aside :class="`${is_expanded && 'is-expanded'}`">
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">double_arrow</span>
      </button>
    </div>
    <div class="menu">
      <router-link v-if="!$store.state.user" class="button" to="/">
        <span class="material-icons">login</span>
        <span class="text">Login</span></router-link
      >
    </div>
    <div class="menu">
      <button
        class="button"
        v-if="$store.state.user"
        @click="$store.dispatch('logout')"
      >
        <span class="material-icons">logout</span>
        <span class="text">logout</span>
      </button>
    </div>

    <div class="menu" v-if="$store.state.user">
      <h3>Menu</h3>
      <router-link class="button" to="/home">
        <span class="material-icons">home</span>
        <span class="text">Home</span></router-link
      >
      <router-link class="button" to="/about">
        <span class="material-icons">person</span>
        <span class="text">About me</span></router-link
      >
      <router-link class="button" to="/diary">
        <span class="material-icons">book</span>
        <span class="text">Diary</span></router-link
      >
      <router-link class="button" to="/calendar">
        <span class="material-icons">calendar_month</span>
        <span class="text">Calendar</span></router-link
      >
    </div>
    <!--  -->
    <!--Bottom panel-->
    <div class="flex"></div>
    <div class="menu" v-if="$store.state.user">
      <router-link class="button" to="/settings">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>
<script setup>
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<script>
import { ref } from "vue";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  name: "Sidebar",
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: 4rem;
  overflow: hidden;
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .flex {
    flex: 1 1 0;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 5px;
    padding-bottom: 10px;
    transition: 0.2s ease-out;
    .menu-toggle {
      transition: 0.2s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }
  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .menu {
    margin: 0 -1rem; // padding na element a nie na outside
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover,
      &.router-link-exact-active {
        background-color: var(--darkAlt);
        .material-icons,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
    }
    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
