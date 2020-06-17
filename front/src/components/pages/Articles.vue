<template name="home">
  <div class="bloc container p-3">
    <h2 v-text="'Articles'" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
  },
  computed: {
    ...mapGetters({
      queryParams: 'articles/params',
    }),
  },
  mounted() {
    this.$root.$on('search', () => {
      console.log('fffff', this.$route.params);
    });
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
