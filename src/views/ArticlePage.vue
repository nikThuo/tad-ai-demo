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

      <div v-for="(value, key) in article.resources" :key="key">
        <h3 class="resource__titles">{{ formatKey(key) }}</h3>
        <ul>
          <li v-for="(link, index) in value" :key="index">
            <a :href="link" target="_blank">{{ link }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="resource" style="margin-top: 2rem">
      <span class="resource__title">Helpful Resources</span>

      <div class="main__header">
        <span class="pulse-container">
          <span class="pulse"></span>
        </span>

        <span class="school-pulse-container">
          <span class="school-pulse"></span>
        </span>
        <img :src="headerImage" alt="Header Image" class="plan__header-image" />
      </div>
      <p class="action-plan__message">
        This is a challenging time for all of us, but by working together and
        supporting one another, we will make it through. Remember, we are a team
        and we're here to support not only our students but also each other.
        <br /><br />
        Below you will find useful resources that will help you take actions and
        assist the students during this difficult time. Here, you'll be able to
        view news articles about the event, accept pending student appointments,
        access recommended resources, and receive updates related to the
        incident.
      </p>
    </div>

    <h3 class="section__title">Event Summary</h3>

    <div class="news__container">
      <div class="card">
        <p class="plan__location">
          <i class="bx icon bx-equalizer ai__icon"></i> AI Event Summary
        </p>
        <p class="ai__event-summary">
          News reports indicate an active shooter incident approximately five
          miles from Harrison High School. Law enforcement agencies are
          currently at the scene responding to the situation. Immediate safety
          measures, including local lockdown procedures, have been implemented
          in nearby establishments. At this time, residents in the vicinity are
          being urged to stay indoors. It is advised for Harrison High School to
          enact its crisis response plan in light of these reports. Please stay
          vigilant and await further updates from law enforcement and emergency
          services.
        </p>
      </div>

      <h3 class="section__title">News Articles</h3>
      <div class="card">
        <div class="news">
          <p class="plan__location">
            <span><i class="bx icon bx-star"></i></span> Active Shooter Incident
            Unfolds Near Local High School
          </p>
          <p class="news__text">
            An active shooter situation has reportedly unfolded about five miles
            from Harrison High School. Local law enforcement agencies are
            currently at the scene.
          </p>
          <p class="plan__location-tag news__source">
            ABC News
            <span class="news__time"><strong>43 minutes ago</strong></span>
          </p>
        </div>
        <div class="news">
          <p class="plan__location">
            Emergency Services Respond to Shooting Near Harrison High School
          </p>
          <p class="news__text">
            A shooting incident is currently in progress just five miles from
            Harrison High School. Emergency services have rushed to the scene
            and have begun implementing lockdown procedures for nearby
            establishments.
          </p>
          <p class="plan__location-tag news__source">
            CNN News
            <span class="news__time"><strong>2 hours ago</strong></span>
          </p>
        </div>
        <div class="news">
          <p class="plan__location">
            Shooting in Progress: Harrison High School Area on High Alert
          </p>
          <p class="news__text">
            An active shooter situation is underway in the vicinity of Harrison
            High School. Police have cordoned off the area and are urging
            residents to stay inside and remain vigilant.
          </p>
          <p class="plan__location-tag news__source">
            CNBC News
            <span class="news__time"><strong>5 hours ago</strong></span>
          </p>
        </div>
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
      headerImage: {
        type: String,
        default: '/map.png',
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
  .resource__title {
    font-size: 1rem;
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

  .pulse:hover {
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
</style>
