<template>
  <div id="app">
    <div id="nav">
      <HeaderComponent />
    </div>
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import '@/assets/vendor/bootstrap.min.css';
import '@/assets/theme/resume.min.css';
import '@/assets/fontawesome/all.min.css';

export default {
  components: {
    HeaderComponent,
  },
};
</script>
