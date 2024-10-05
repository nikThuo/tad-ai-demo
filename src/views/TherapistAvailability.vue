<template>
  <div class="home">
    <TitleSection highlight="Schedule Me" title="Therapist Availability Recommender" subtitle="Recommend optimal therapist time to create an appointment." />
    <main class="mt-8">
      <div class="w-full shadow-sm mb-8">
        <TherapistScheduleForm @recommendationReceived="handleRecommendation" />
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <TherapistAvailabilityRecommender :recommendation="recommendation" />
      </div>
    </main>
  </div>
</template>

<script>
import TitleSection from '../components/TitleSection.vue'
import TherapistScheduleForm from '../components/TherapistScheduleForm.vue'
import TherapistAvailabilityRecommender from '../components/TherapistAvailabilityRecommender.vue'

export default {
  name: 'Home',
  components: {
    TitleSection,
    TherapistScheduleForm,
    TherapistAvailabilityRecommender,
  },
  data() {
    return {
      recommendation: null,
    }
  },
  methods: {
    handleRecommendation(recommendation) {
      this.recommendation = recommendation
    },
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

/* Additional styles for components */
</style>
