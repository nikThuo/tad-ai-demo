<template>
  <main>
    <div class="main__header">
      <span class="pulse-container">
        <span class="pulse"></span>
      </span>

      <span class="school-pulse-container">
        <span class="school-pulse"></span>
      </span>
      <img :src="headerImage" alt="Header Image" class="plan__header-image" />
    </div>

    <div class="plan__header">
      <div class="plan__location-container">
        <span class="plan__location-tag">Event Location</span>
        <span class="plan__location">Los Angeles, CA</span>
      </div>

      <button class="plan__danger-button">
        <i class="bx icon bx-paper-plane"></i> Send Emergency Response
      </button>
    </div>

    <div class="news__container">
      <div class="card">
        <p class="plan__location">
          <i class="bx icon bx-news"></i> Related News
        </p>
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
      <div class="card">
        <p class="plan__location">
          <i class="bx icon bx-equalizer ai__icon"></i> AI Event Summary
        </p>
        <p class="ai__event-summary">
          Three recent news reports indicate an active shooter incident
          approximately five miles from Harrison High School. Law enforcement
          agencies are currently at the scene responding to the situation.
          Immediate safety measures, including local lockdown procedures, have
          been implemented in nearby establishments. At this time, residents in
          the vicinity are being urged to stay indoors. It is advised for
          Harrison High School to enact its crisis response plan in light of
          these reports. Please stay vigilant and await further updates from law
          enforcement and emergency services.
        </p>
      </div>
    </div>

    <StudentActionPlan
      :plan-title="planTitle"
      :plan-objective="planObjective"
      :student-action-plan="studentActionPlan"
    />

    <CounselorActionPlan
      :plan-title="planTitle"
      :plan-objective="planObjective"
      :counselor-action-plan="counselorActionPlan"
    />
    <ParentsActionPlan />

    <!-- <div class="action-plan staff-action-plan">
      <h2>
        {{ staffPlanTitle }}
      </h2>
      <div v-for="(plan, index) in staffActionPlan" :key="index">
        <h3>{{ plan.title }}</h3>
        <ol>
          <li v-for="(item, itemIndex) in plan.items" :key="itemIndex">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>

    <div class="action-plan counselor-action-plan">
      <h2>
        {{ counselorPlanTitle }}
      </h2>
      <div v-for="(plan, index) in counselorActionPlan" :key="index">
        <h3>{{ plan.title }}</h3>
        <ol>
          <li v-for="(item, itemIndex) in plan.items" :key="itemIndex">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>

    <div class="action-plan student-action-plan">
      <h2>
        {{ studentPlanTitle }}
      </h2>
      <div v-for="(plan, index) in studentActionPlan" :key="index">
        <h3>{{ plan.title }}</h3>
        <ol>
          <li v-for="(item, itemIndex) in plan.items" :key="itemIndex">
            {{ item }}
          </li>
        </ol>
      </div>
    </div> -->
    <!-- <div>resources</div> -->
  </main>
</template>

<script>
  import StudentActionPlan from '@/components/StudentActionPlan.vue'
  import CounselorActionPlan from '@/components/CounselorActionPlan.vue'
  import ParentsActionPlan from '@/components/ParentsActionPlan.vue'
  export default {
    name: 'ActionPlan',
    components: {
      StudentActionPlan,
      CounselorActionPlan,
      ParentsActionPlan,
    },
    props: {
      headerImage: {
        type: String,
        default: '/map.png',
      },
      planTitle: {
        type: String,
        default: '',
      },
      planObjective: {
        type: String,
        default: '',
      },
      staffPlanTitle: {
        type: String,
        default: '',
      },
      staffActionPlan: {
        type: Array,
        default: () => [],
      },
      counselorPlanTitle: {
        type: String,
        default: '',
      },
      counselorActionPlan: {
        type: Array,
        default: () => [],
      },
      studentPlanTitle: {
        type: String,
        default: '',
      },
      studentActionPlan: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style scoped>
  
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
    min-height: 400px;
  }
  .news__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
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
    .plan__location-container {
      display: none;
    }

    .plan__danger-button {
      margin-left: 0;
      margin-top: 1rem;
      width: 100%;
    }

    .news__container {
      grid-template-columns: repeat(1, 1fr);
    }

    
  }

</style>
