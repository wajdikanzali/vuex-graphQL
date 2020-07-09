<template>
<div>
  <home-header />
  <router-view id="app" />
</div>
</template>

<script>
import HomeHeader from '@/components/organisms/Header.vue';

export default {
  name: 'App',
  components: {
    HomeHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
