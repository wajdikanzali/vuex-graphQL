<template name="home">
  <div>
    <div class="bloc container p-3">
      <h2 v-text="'Bienvenue sur notre Platforme de E-magasine'" />
      <p
        class="lead"
        v-text="'Tu restes au courant de ce qui se passe au monde en restant chez toi'" />
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style lang="scss" scoped>
.bloc {
  margin-top: 250px;
  background: #FAF9F9;
  border-bottom: 2px solid #DFA62A;
}
</style>
