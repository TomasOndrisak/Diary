<template>
  <div class="login">
    <p>username</p>
    <input type="text" />
    <div>
      <p>password</p>
      <input type="password" />
    </div>
    <button class="material-icons">arrow_right_alt</button>
    <div>
      <button class="register-button">Register</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.login {
  box-sizing: content-box;
  padding-top: 15%;
  background-color: var(--dark);
  width: 100%;

  p {
    margin-top: 0.3%;
    color: white;
  }

  button.register-button {
    border-style: groove;
    border-color: var(--primary);
    border-radius: 5px;
    font-weight: bold;
    background-color: #40e91a;
    width: 5% !important;
    padding-top: 5px;
    margin-top: 0.3%;
    box-sizing: content-box;
  }
  button.material-icons {
    font-size: 4rem;
    color: var(--light);

    &:hover {
      color: var(--primary);
    }
  }
}
</style>