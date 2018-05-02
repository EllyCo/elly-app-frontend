
<template>
  <div id="app">

    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
      <a href= "/" class="navbar-brand">Elly
      </a>
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'settings', params: {} }">
              <i class="fas fa-cog fa-2x"></i>
            </router-link>
          </li>
      </ul>
    </nav>
    <!-- End navigation -->

    <div class="container">
      <!-- Router components are rendered here -->
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  padding-top: 70px;
}
</style>

<!-- Bootstrap CSS -->
<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
