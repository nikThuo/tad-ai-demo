<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      title="Smart Resources"
      subtitle="Our contextual AI provides resources when they are needed and assists professionals in navigating through controversial, challenging and emerging issues in mental health care."
    />

    <div>
      <div class="main__header">
        <span class="pulse-container">
          <span class="pulse"></span>
        </span>

        <span class="pulse-container pulse-one">
          <span class="pulse"></span>
        </span>

        <span class="pulse-container pulse-two">
          <span class="pulse"></span>
        </span>

        <span class="pulse-container pulse-three">
          <span class="pulse"></span>
        </span>

        <span class="school-pulse-container">
          <span class="school-pulse"></span>
        </span>

        <img :src="headerImage" alt="Header Image" class="plan__header-image" />
      </div>
    </div>

    <PatientCompletion />

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
      <div
        v-for="article in filteredArticles"
        :key="article.title"
        class="article"
      >
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
  import PatientCompletion from '@/components/PatientCompletionForm.vue'

  export default {
    name: 'Home',
    props: {
      headerImage: {
        type: String,
        default: '/map.png',
      },
    },
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
      PatientCompletion,
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

<style>
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

    input {
      width: 50px;
    }

    .page__subtitle {
      font-size: 0.8rem !important;
    }

    .article__title {
      font-size: 1rem !important;
    }

    .badge {
      font-size: 10px !important;
    }

    .article__body {
      font-size: 0.8rem !important;
    }

    .page__highlight {
      padding-top: 2rem;
    }

    label {
      font-size: 0.8rem !important;
    }

    .page__title {
      font-size: 1.3rem !important;
    }

    .action-plan__message {
      font-size: 0.8rem !important;
    }

    .action-plan__resources-title {
      font-size: 1rem !important;
    }

    .resource-list__item {
      font-size: 0.8rem !important;
    }

    .guide-list__item {
      font-size: 0.8rem !important;
    }
  }

  .filter {
    padding: 1rem 2rem;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: flex-end;
  }
  .modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 20%;
    border-radius: 5px;
  }

  .btn {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  .btn:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
  }

  .appointment-section {
    margin-top: 2rem;
  }
  .appointment-table {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1rem 0rem;
  }
  .appointment-name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--dark-text-color);
    display: flex;
    flex-direction: column;
  }
  .appointment {
    background-color: #fff;
    padding: 0rem 2rem;
    padding-bottom: 1rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
  }
  .priority-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
    position: relative;
    bottom: 8px;
  }
  .priority-dot.high {
    background-color: #ff6b6b;
  }
  .priority-dot.intermediate {
    background-color: #f89e5d;
  }
  .priority-dot.low {
    background-color: #4acdc4;
  }
  .appointment-name {
    flex-grow: 1;
  }

  .priority-filter {
    color: var(--dark-text-color) !important;
    font-weight: 400 !important;
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  .view-submission {
    font-size: 0.6rem !important;
    color: var(--light-text-color);
  }
  .appointment-status {
    margin-right: 20px;
  }
  .approve-button {
    background-color: #1a535c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
  }

  .resource__image {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  .resource-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .resource {
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 1rem;
  }
  .section__title {
    color: var(--dark-text-color);
    margin: 2rem 0rem;
  }
  .action-plan__message {
    font-size: 1rem;
    margin: 2rem 0rem;
    margin-top: 2rem;
    font-weight: 400;
    color: var(--dark-text-color);
  }
  .pulse-container::before {
    content: 'Event Location';
    position: absolute;
    top: -20px;
    left: 0;
    color: #000;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .pulse-container {
    position: absolute;
    top: 200px;
    left: 450px;
  }
  .pulse {
    position: absolute;
    top: 20px;
    left: 50px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #dc3545 !important;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
    animation: pulse 2s infinite;
  }

  .2 .pulse:hover {
    animation: none;
  }

  .main__header {
    position: relative;
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 #dc354662 !important;
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 #dc354662;
      box-shadow: 0 0 0 0 #dc354662;
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }

  .school-pulse-container::before {
    content: 'Your Location';
    position: absolute;
    top: -20px;
    left: 0;
    color: #000;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .school-pulse-container {
    position: absolute;
    top: 70px;
    left: 600px;
  }
  .school-pulse {
    position: absolute;
    top: 20px;
    left: 50px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4acdc4 !important;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
    animation: pulsee 2s infinite;
  }

  .school-pulse:hover {
    animation: none;
  }

  @-webkit-keyframes pulsee {
    0% {
      -webkit-box-shadow: 0 0 0 0 #4acdc452 !important;
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px #4acdc452;
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 #4acdc452;
    }
  }
  @keyframes pulsee {
    0% {
      -moz-box-shadow: 0 0 0 0 #4acdc452;
      box-shadow: 0 0 0 0 #4acdc452;
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
  .home {
    padding: 5rem;
  }
  @media screen and (max-width: 600px) {
    .home {
      padding: 2rem;
    }
  }
  .bx-star {
    color: #ffc107 !important;
  }
  .news__time {
    color: var(--dark-text-color);
    font-size: 0.8rem;
    font-weight: 300;
    font-size: 0.7rem;
  }
  .news__source {
    color: #ff6b6b !important;
  }
  .news {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
  .news__text {
    font-size: 0.8rem;
    color: var(--light-text-color);
    margin-bottom: 1rem;
  }
  .ai__icon {
    margin-right: 0.5rem;
    color: var(--highlight-color);
  }
  .ai__event-summary {
    font-size: 1rem;
    font-weight: 300;
    color: var(--light-text-color);
  }
  .card {
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 1rem;
  }
  .news__container {
  }
  .plan__location-container {
    display: flex;
    flex-direction: column;
  }
  .plan__location-tag {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--light-text-color);
  }
  .plan__location {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: var(--dark-text-color);
  }
  .plan__header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .plan__danger-button {
    margin-left: auto;
    background-color: #d9534f;
    color: #fff;
    border: none;
    padding: 1rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  .plan__header {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .plan__header-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-top: 3rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .plan__title {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: var(--dark-text-color);
  }

  .plan__objective {
    font-size: 1rem;
    font-weight: 300;
    color: var(--light-text-color);
  }

  @media screen and (max-width: 600px) {
    .resource-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .pulse-one {
    position: absolute;
    top: 180px;
    left: 150px;
  }

  .pulse-two {
    position: absolute;
    top: 150px;
    left: 650px;
  }

  .pulse-three {
    position: absolute;
    top: 50px;
    left: 950px;
  }
</style>
