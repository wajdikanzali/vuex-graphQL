<template name="Header">
  <nav-bar>
    <template v-slot:left-side>
      <div class="ml-0 ml-md-3 d-flex align-items-start align-items-md-center flex-column flex-md-row flex-fill">
        <drop-down
          v-model="params.language"
          :default-state="params.language === null"
          label="Langue"
          class="px-0 col-sm-12 col-lg-3 mt-2 mt-md-0 ml-0 ml-md-2">
          <option
            v-for="(language, key) in LANGUAGES"
            :key="key"
            :value="language.value"
            v-text="language.label" />
        </drop-down>
        <drop-down
          v-model="params.language"
          :default-state="params.language === null"
          label="Source"
          class="px-0 col-sm-12 col-lg-3 mt-2 mt-md-0 ml-0 ml-md-2">
          <option
            v-for="(language, key) in LANGUAGES"
            :key="key"
            :value="language.value"
            v-text="language.label" />
        </drop-down>
      </div>
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
import LANGUAGES from '@/const/languages';
import DropDown from '@/components/atoms/DropDown';
import { mapGetters } from 'vuex';

export default {
  components: {
    NavBar,
    DropDown,
  },
  data() {
    return {
      LANGUAGES,
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
