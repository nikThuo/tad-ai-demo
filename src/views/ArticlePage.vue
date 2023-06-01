<!-- ArticlePage.vue -->
<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      :title="article.title"
      :subtitle="`Source: ${article.platform}`"
    />
    <!-- Display the other fields of the article -->
    <div class="article">
      <span
        class="badge mass-casualty"
        v-if="article.event_classification === 'mass casualty'"
        >Event Classification : Mass Casualty</span
      >
      <span
        class="badge homicide"
        v-if="article.event_classification === 'homicide'"
        >Event Classification : Homicide</span
      >
      <span
        class="badge natural-disaster"
        v-if="article.event_classification === 'natural disaster'"
        >Event Classification : Natural Disaster</span
      >
      <span
        class="badge assault"
        v-if="article.event_classification === 'assault'"
        >Event Classification : Assault</span
      >
      <span class="badge other" v-if="article.event_classification === 'other'"
        >Event Classification : Other</span
      >

      <span class="badge positive" v-if="article.sentiment === 'positive'"
        >Sentiment : Positive</span
      >
      <span class="badge neutral" v-else-if="article.sentiment === 'neutral'"
        >Sentiment : Neutral</span
      >
      <span class="badge negative" v-else-if="article.sentiment === 'negative'"
        >Sentiment : Negative</span
      >
      <p class="article__body">{{ article.body }}</p>

      <span class="resource__title">Helpful Resources</span>

      <div v-for="(value, key) in article.resources" :key="key">
        <h3 class="resource__titles">{{ formatKey(key) }}</h3>
        <ul>
          <li v-for="(link, index) in value" :key="index">
            <a :href="link" target="_blank">{{ link }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import TitleSection from '@/components/TitleSection.vue'
  export default {
    props: {
      article: {
        type: Object,
        required: true,
      },
    },
    components: {
      TitleSection,
    },
    mounted() {
      window.scrollTo(0, 0)
    },
    methods: {
      formatKey(key) {
        // Replace underscores with spaces and make the first letter uppercase
        return key
          .replace(/_/g, ' ')
          .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
      },
    },
  }
</script>

<style scoped>
  a {
    text-decoration: underline;
    color: var(--dark-text-color);
  }
  .resource__titles {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--dark-text-color);
  }
  ul {
    margin-bottom: 2rem;
  }

  li {
    color: var(--dark-text-color) !important;

    font-size: 1rem;
  }
  .resource__title {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--dark-text-color);
    display: inline-block;
  }
  .badge {
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    display: inline-block;
    margin-bottom: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
  }

  .positive {
    background-color: #ff9494; /* Green */
  }

  .neutral {
    background-color: #fab584; /* Gray */
  }

  .negative {
    background-color: #2c8c9c; /* Red */
  }

  .mass-casualty {
    background-color: #ff6b6b; /* Red */
  }

  .homicide {
    background-color: #f89e5d; /* Dark Orange */
  }

  .natural-disaster {
    background-color: #4acdc4; /* Green */
  }

  .assault {
    background-color: #1a535c; /* Blue */
  }

  .other {
    background-color: #9fa6c5; /* Purple */
  }
  .article {
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    border-bottom: 1px solid #eaeaea;
    cursor: pointer;
    margin-top: 2rem;
  }

  .article__body {
    margin: 1rem 0rem;
    font-size: 1rem;
    font-weight: 300;
    color: var(--dark-text-color);
  }
  .home {
    padding: 5rem;
  }
</style>
