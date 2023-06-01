<template>
  <div>
    <sidebar-menu />
    <router-view />
  </div>
</template>

<script>
  import SidebarMenu from '@/components/SidebarMenu.vue'

  export default {
    name: 'App',
    components: {
      SidebarMenu,
    },
    methods: {
      search(val) {},
    },
  }
</script>

<style>
  :root {
    --dark-text-color: #41496b;
    --light-text-color: #8390a2;
    --highlight-color: #4acdc4;
    --line-height: 1.5;
  }

  * {
    line-height: 1.5;
  }
</style>
