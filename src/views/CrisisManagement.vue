<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      title="Crisis Management Plans"
      subtitle="Our platform provides a comprehensive toolkit for professionals to manage crisis situations effectively. With real-time response coordination, the ability to anticipate potential crises, and tailored strategies to address each unique situation, we empower you to navigate through turbulent times with confidence and precision."
    />
    <main>
      <Toolkits />
    </main>
  </div>
</template>

<script>
  import TitleSection from '@/components/TitleSection.vue'
  import Toolkits from '@/components/Toolkits.vue'

  export default {
    name: 'Crisis Management', // changed from 'ActionPlan' to 'Home' because it appears this component is used as a Home view
    components: {
      TitleSection,
      Toolkits,
    },
  }
</script>

<style scoped>
  .home {
    padding: 5rem;
  }

  @media screen and (max-width: 600px) {
    .home {
      padding: 2rem;
    }
  }
</style>
