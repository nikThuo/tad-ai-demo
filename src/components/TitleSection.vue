<template>
  <div class="title__section">
    <span class="page__highlight">
      {{ highlight }}
    </span>
    <h1 class="page__title">
      {{ title }}
    </h1>
    <p class="page__subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'TitleSection',
    props: {
      highlight: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      subtitle: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style scoped>
  .page__title {
    font-size: 1.9rem;
    margin-bottom: 0.75rem;
    font-weight: 900;
    color: var(--dark-text-color);
  }

  .page__subtitle {
    font-size: 1rem;
    font-weight: 300;
    color: var(--dark-text-color);
  }

  .page__highlight {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--highlight-color);
    margin-bottom: .75rem;
    display: inline-block;
  }
</style>
