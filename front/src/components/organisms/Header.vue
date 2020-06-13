<template name="Header">
  <nav-bar>
    <template v-slot:left-side>
      <p>left</p>
    </template>
    <template v-slot:right-side>
      <form
        class="d-flex justify-content-between"
        novalidate
        @submit.prevent="navigateTo('articles')">
        <input
          v-model="params.keyword"
          class="form-control search"
          type="search"
          placeholder="Chercher"
          aria-label="Chercher">
        <button
          class="btn btn-success ml-2"
          :disabled="isSearchDisabled"
          type="submit"
          v-text="'Chercher'" />
      </form>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/molecules/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      params: {
        keyword: null,
        language: null,
        source: null,
      },
    };
  },
  computed: {
    isSearchDisabled() {
      return !Object.values(this.params).find((param) => param !== null);
    },
  },
  methods: {
    navigateTo(path) {
      this.$router
        .push({ name: path })
        .catch(() => {
          if (path === this.$route.path) {
            this.$router.go();
          }
        });
    },
  },
};
</script>
