<script >
import { store } from './store.js'
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter

  },
  // store data
  data() {
    return {
      store
    };
  }
}

</script>

<template>
  <PageHeader :header="store.header" />

  <PageMain />


  <PageFooter :footer="store.footer" />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
</style>
