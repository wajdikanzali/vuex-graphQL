import store from './index';

export default {
  store,
  install(Vue) {
    const vueInstance = Vue;
    vueInstance.prototype.$store = store();
  },
};
