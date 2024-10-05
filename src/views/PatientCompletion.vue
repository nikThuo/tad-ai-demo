<template>
  <div class="home">
    <TitleSection highlight="Schedule Me" title="Patient Completion Recommender"
      subtitle="Recommend the likelihood of a patient completing an appointment." />
    <main class="mt-8">
      <div class="w-full shadow-sm mb-8">
        <!-- Child component to get recommendation -->
        <PatientCompletionForm @recommendationReceived="handleRecommendation" />

        <!-- Pass the recommendation as a prop to PatientCompletionLikelihood -->
        <PatientCompletionLikelihood :recommendation="recommendation" />
      </div>
    </main>
  </div>
</template>

<script>
import TitleSection from '../components/TitleSection.vue'
import PatientCompletionForm from '@/components/PatientCompletionForm.vue'
import PatientCompletionLikelihood from '@/components/PatientCompletionLikelihood.vue'

export default {
  name: 'Home',
  components: {
    TitleSection,
    PatientCompletionForm,
    PatientCompletionLikelihood,
  },
  data() {
    return {
      recommendation: null, // Store the recommendation here
    }
  },
  methods: {
    handleRecommendation(recommendation) {
      // Set the recommendation data when received
      this.recommendation = recommendation
      console.log('Recommendation received from child:', recommendation)
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
</style>
