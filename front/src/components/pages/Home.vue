<template name="home">
  <div>
    <home-header class="mb-4" />
    <div class="bloc container p-3">
      <h2 v-text="'Bienvenue sur notre Platforme de E-magasine'" />
      <p
        class="lead"
        v-text="'Tu restes au courant de ce qui se passe au monde en restant chez toi'" />
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/organisms/Header.vue';

export default {
  components: {
    HomeHeader,
  },
};
</script>

<style lang="scss" scoped>
.bloc {
  margin-top: 168px;
  background: #FAF9F9;
  border-bottom: 2px solid #DFA62A;
}
</style>
