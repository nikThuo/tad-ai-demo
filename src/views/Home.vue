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
      <div v-for="article in filteredArticles" :key="article.title" class="article">
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
        articles: [
          {
            event_classification: 'mass casualty',
            sentiment: 'negative',
            platform: 'The New York Times',
            title: 'Mass Casualty Event Unfolds in Central Park',
            body: 'A sudden, violent explosion in Central Park has resulted in a mass casualty event...',
          },
          {
            event_classification: 'natural disaster',
            sentiment: 'neutral',
            platform: 'CNN',
            title: 'Hurricane Season Starts Early, Coastal Cities Prepare',
            body: 'An early start to the hurricane season has coastal cities bracing for impact...',
          },
          {
            event_classification: 'homicide',
            sentiment: 'negative',
            platform: 'The Washington Post',
            title:
              'Investigation Underway as City Experiences Spike in Homicides',
            body: 'The city is under crisis as the number of homicides spike to unprecedented levels...',
          },
          {
            event_classification: 'other',
            sentiment: 'positive',
            platform: 'BBC News',
            title:
              'Revolutionary Mental Health Treatment Shows Promising Results',
            body: 'A new treatment for mental health disorders could be a game-changer in the field...',
          },
          {
            event_classification: 'assault',
            sentiment: 'negative',
            platform: 'The Guardian',
            title: 'Rise in Assault Cases Leads to Calls for Stricter Laws',
            body: 'Following a recent surge in assault cases, citizens are demanding stricter laws...',
          },
          {
            event_classification: 'mass casualty',
            sentiment: 'negative',
            platform: 'The New York Times',
            title: 'Mass Casualty Event Unfolds in Central Park',
            body: 'A sudden, violent explosion in Central Park has resulted in a mass casualty event. Authorities are on the scene and emergency services are being deployed. The surrounding area has been evacuated and a lockdown is in effect. The cause of the explosion is still under investigation.',
          },
          {
            event_classification: 'natural disaster',
            sentiment: 'neutral',
            platform: 'CNN',
            title: 'Hurricane Season Starts Early, Coastal Cities Prepare',
            body: 'An early start to the hurricane season has coastal cities bracing for impact. Municipalities are implementing disaster preparedness measures and advising residents to do the same. Experts predict this season to be above average in terms of storm activity. Residents are urged to stay informed and prepared.',
          },
          {
            event_classification: 'homicide',
            sentiment: 'negative',
            platform: 'The Washington Post',
            title:
              'Investigation Underway as City Experiences Spike in Homicides',
            body: 'The city is under crisis as the number of homicides spike to unprecedented levels. Law enforcement agencies are struggling to keep up with the surge in violent crime. A special task force has been assembled to investigate the cause behind this sudden increase. The public is asked to remain vigilant and report suspicious activities.',
          },
          {
            event_classification: 'other',
            sentiment: 'positive',
            platform: 'BBC News',
            title:
              'Revolutionary Mental Health Treatment Shows Promising Results',
            body: 'A new treatment for mental health disorders could be a game-changer in the field. Early results show significant improvement in patients suffering from depression and anxiety. The treatment involves a combination of cognitive behavioral therapy and new, non-invasive brain stimulation techniques. Experts are optimistic that this could pave the way for more effective mental health treatments in the future.',
          },
          {
            event_classification: 'assault',
            sentiment: 'negative',
            platform: 'The Guardian',
            title: 'Rise in Assault Cases Leads to Calls for Stricter Laws',
            body: 'Following a recent surge in assault cases, citizens are demanding stricter laws. Critics argue that the current legal framework does not do enough to deter violent offenders. Meanwhile, lawmakers are deliberating over potential amendments to current legislation. Victim support groups are urging for swift and decisive action.',
          },
          {
            event_classification: 'natural disaster',
            sentiment: 'negative',
            platform: 'Reuters',
            title: 'Earthquake Shakes Major City, Destruction and Panic Ensue',
            body: 'A 7.8 magnitude earthquake hit the city early this morning, causing widespread destruction. Buildings have crumbled, and several fires have broken out. Rescue teams are working tirelessly to locate and help survivors. The city is in a state of emergency, and the full extent of the damage is yet unknown.',
          },
          {
            event_classification: 'mass casualty',
            sentiment: 'negative',
            platform: 'Al Jazeera',
            title: 'Bombing in Market Place Claims Dozens of Lives',
            body: 'An explosion in a bustling marketplace has resulted in mass casualties. The detonation occurred during peak hours, causing horrific damage. Emergency services are struggling to attend to the wounded. The authorities suspect this to be an act of terrorism and have initiated an investigation.',
          },
          {
            event_classification: 'assault',
            sentiment: 'negative',
            platform: 'Fox News',
            title: 'Increase in Street Violence Prompts Safety Concerns',
            body: 'A recent uptick in street violence has residents living in fear. The police are increasing patrols, especially during the night. Community leaders are calling for more long-term solutions, like increased funding for social programs. The ongoing situation has sparked a heated debate about public safety in the city.',
          },
          {
            event_classification: 'other',
            sentiment: 'positive',
            platform: 'The Globe and Mail',
            title: 'New Research Brings Hope to Alzheimer’s Patients',
            body: 'A groundbreaking study offers new hope for patients suffering from Alzheimer’s. The study indicates that early detection and a new line of treatment can slow the disease’s progression. The research is still in its early stages but has shown promising results. Patients and caregivers worldwide have welcomed this news with cautious optimism.',
          },
          {
            event_classification: 'homicide',
            sentiment: 'negative',
            platform: 'ABC News',
            title: 'Serial Killer on the Loose, Police Urge Public Caution',
            body: 'A series of homicides have police suspecting a serial killer is at large. The local police department has issued a warning, asking residents to take extra precautions. There is currently a city-wide curfew in place until further notice. The investigation is ongoing, and updates will follow as more information becomes available.',
          },
        ],
        filteredArticles: [],
      }
    },
    components: {
      TitleSection,
    },
    methods: {
      filterArticles() {
        if (this.event_classification) {
          this.filteredArticles = this.articles.filter(
            article =>
              article.event_classification === this.event_classification,
          )
        } else {
          this.filteredArticles = this.articles
        }
      },
    },
    watch: {
      event_classification: 'filterArticles',
    },
    mounted() {
      this.filteredArticles = this.articles
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
