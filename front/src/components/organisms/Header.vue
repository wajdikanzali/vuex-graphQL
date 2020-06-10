<template name="Header">
  <nav-bar>
    <template v-slot:left-side>
      <p>left</p>
    </template>
    <template v-slot:right-side>
      <p>right</p>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/molecules/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>
