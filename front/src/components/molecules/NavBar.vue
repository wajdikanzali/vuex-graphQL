<template name="nav-bar">
  <nav class="header navbar navbar-light bg-light fixed-top">
    <div class="container-fluid d-flex flex-column flex-lg-row justify-content-lg-between">
      <div class="row d-flex flex-column col-sm-12 col-lg-8 mb-3 mb-lg-0 flex-lg-row text-center">
        <router-link
          to="/"
          class="navbar-brand font-weight-bold">
          Accueil
        </router-link>
        <slot name="left-side" />
      </div>
      <slot name="right-side" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 2px solid #DFA62A;
  @media (max-width: 576px) {
      border-bottom: none;
  }
}
</style>
