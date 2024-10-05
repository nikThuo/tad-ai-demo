<template>
  <div class="schedule-adjustments p-6 w-full mx-auto bg-white rounded shadow-sm">
    <h3 class="text-lg font-semibold text-gray-700 mb-4">
      Recommended Time
    </h3>

    <div v-if="recommendation">
      <p class="text-sm text-gray-600 mb-4">
        Recommendation Start Time: {{ recommendation.recommended_start_time }}
      </p>
      <p class="text-sm text-gray-600 mb-4">
        Recommendation End Time: {{ recommendation.recommended_end_time }}
      </p>
      <p class="text-sm text-gray-600 mb-4">
        Recommended Duration: {{ recommendation.recommended_duration }} minutes
      </p>

      <div
        v-if="recommendation.status === 'move'"
        class="mt-4"
      >
        <p class="text-sm text-gray-700 font-semibold mb-2">
          Action: Move to new time
        </p>

        <div class="flex space-x-4">
          <button
            @click="handleMove"
            class="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Move
          </button>
          <button
            @click="handleBook"
            class="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Book (Optional)
          </button>
        </div>
      </div>

      <div
        v-else-if="recommendation.status === 'retain'"
        class="mt-4"
      >
        <p class="text-sm text-gray-700 font-semibold mb-2">
          Action: Retain current time
        </p>
        <button
          @click="handleRetain"
          class="py-2 px-4 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Retain
        </button>
      </div>
    </div>

    <div v-else>
      <p class="text-sm text-gray-600 mb-4">
        No recommendation available yet.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TherapistAvailabilityRecommender',
  props: {
    recommendation: {
      type: Object,
      default: null,
    },
  },
  methods: {
    handleMove() {
      console.log('Moving to new start time:', this.recommendation.recommended_start_time)
      console.log('New end time:', this.recommendation.recommended_end_time)
      // Add further logic for moving the appointment
    },
    handleBook() {
      console.log('Booking the time optionally.')
      // Add optional booking logic here
    },
    handleRetain() {
      console.log('Retaining current time.')
      // Add logic for retaining the current appointment time here
    },
  },
}
</script>

<style scoped>
/* Styling for the TherapistAvailabilityRecommender component */
</style>
