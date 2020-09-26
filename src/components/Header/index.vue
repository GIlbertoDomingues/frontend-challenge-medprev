<template>
<header class="navbar">
  <section class="navbar">
    <img alt="Vue logo" src="@/assets/images/logo-medprev.svg">
  </section>
  <section class="navbar-section">
    <nav class="nav-header">
      <ul>
        <li>
          <router-link to="/" class="btn btn-link">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="btn btn-link">Usuários</router-link>
        </li>
        <li>
          <a target="_blank" href="#" class="btn btn-link">GitHub</a>
        </li>
      </ul>
    </nav>
  </section>
</header>
</template>

<script>
export default {
  name: 'MHeader',
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

header.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: $light-gray;

  .nav-header ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    a {
      color: $link-color;

      &:hover {
        text-decoration: none;
        opacity: .7;
      }
    }
  }
}
</style>
