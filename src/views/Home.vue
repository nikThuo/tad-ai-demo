<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      title="Smart Resources"
      subtitle="Our contextual AI provides resources when they are needed and assists professionals in navigating through controversial, challenging and emerging issues in mental health care."
    />

    <div class="filters">
      <label for="limit">Limit</label>
      <input class="input" type="number" id="limit" v-model="limit" min="1" />
      <label for="classification">Event Classification</label>
      <select class="input" id="classification" v-model="event_classification">
        <option value="">All</option>
        <option v-for="classification in classifications" :key="classification">
          {{ classification }}
        </option>
      </select>
    </div>
    <div class="articles">
      <div v-for="article in articles" :key="article.title" class="article">
        <router-link
          :to="{ name: 'article', params: { article: article } }"
          tag="div"
        >
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
          <span
            class="badge other"
            v-if="article.event_classification === 'other'"
            >Event Classification : Other</span
          >

          <span class="badge positive" v-if="article.sentiment === 'positive'"
            >Sentiment : Positive</span
          >
          <span
            class="badge neutral"
            v-else-if="article.sentiment === 'neutral'"
            >Sentiment : Neutral</span
          >
          <span
            class="badge negative"
            v-else-if="article.sentiment === 'negative'"
            >Sentiment : Negative</span
          >

          <span class="article__source">Source: {{ article.platform }}</span>

          <h2 class="article__title">{{ article.title }}</h2>

          <p class="article__body">{{ article.body }}</p>
          <!-- You can add more fields here as needed -->
        </router-link>
      </div>
      <p v-if="!articles.length" class="no-articles">No articles found</p>
    </div>
  </div>
</template>

<script>
  import TitleSection from '@/components/TitleSection.vue'
  import axios from 'axios'

  export default {
    name: 'Home',
    data() {
      return {
        limit: 5,
        event_classification: '',
        classifications: [
          'mass casualty',
          'homicide',
          'natural disaster',
          'assault',
          'other',
        ],
        articles: [],
      }
    },
    components: {
      TitleSection,
    },
    methods: {
      async getArticles() {
        const params = { n: this.limit }
        if (this.event_classification) {
          params.event_classification = this.event_classification
        }
        const response = await axios.get(
          'http://ai.tadhealth.com:8000/articles/',
          { params },
        )
        this.articles = response.data
      },
    },
    watch: {
      limit: 'getArticles',
      event_classification: 'getArticles',
    },

    mounted() {
      this.getArticles()
      window.onload = function () {
        $(function () {
          if (window.location.protocol === 'https:')
            window.location.protocol = 'http'
        })
      }
    },
  }
</script>

<style scoped>
  .article__source {
    font-size: 0.75rem;
    color: var(--light-text-color);
    margin-bottom: 0.5rem;
  }
  .badge {
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    display: inline-block;
    margin-bottom: 1rem;
    margin-right: 1rem;
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

  .articles {
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    border-bottom: 1px solid #eaeaea;
    cursor: pointer;
  }
  .input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid gray;
    margin-right: 1rem;
  }
  label {
    margin-right: 1rem;
    color: var(--dark-text-color);
  }
  .home {
    padding: 5rem;
  }

  .filters {
    margin: 2rem 0rem;
  }

  .article__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--dark-text-color);
  }
  .article__body {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 1rem 0rem;
    font-size: 1rem;
    font-weight: 300;
    color: var(--dark-text-color);
  }

  .article {
    /* Add styling for individual articles here */
    padding: 1rem 0rem;
    border-bottom: 1px solid #eaeaea;
  }

  .no-articles {
    font-style: italic;
    color: gray;
  }

  @media screen and (max-width: 600px) {
    .home {
      padding: 2rem;
    }
  }
</style>
