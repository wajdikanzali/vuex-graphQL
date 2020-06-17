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
import { mapGetters } from 'vuex';

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
    ...mapGetters({
      savedSources: 'sources/sources',
    }),
    isSearchDisabled() {
      console.log('this.params', this.params);
      return Object.values(this.params).every((value) => (value === null || value === ''));
    },
  },
  mounted() {
    // this.loadingSources = true;
    this.$store.dispatch('sources/getSources')
      .then(() => {
        this.sources = this.savedSources;
      })
      .catch((err) => {
        console.log(err, 'error');
      })
      .finally(() => {
        console.log('terminer');
        // this.loadingSources = false;
      });
  },
  methods: {
    navigateTo(path) {
      this.$root.$emit('search');
      this.$router
        .push({ name: path, params: this.params })
        .catch(() => {
          if (path === this.$route.path) {
            this.$router.go();
          }
        });
    },
  },
};
</script>
