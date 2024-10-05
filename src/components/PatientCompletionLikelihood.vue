<template>
  <div class="schedule-adjustments p-6 w-full mx-auto bg-white rounded shadow-sm">
    <h3 class="text-lg font-semibold text-gray-700 mb-4">
      Completion Likelihood
    </h3>

    <div v-if="recommendation">
      <!-- Show the message based on recommendation -->
      <p class="text-sm text-gray-600 mb-4">
        {{ recommendation.likelihood
          ? 'There is likelihood of the patient completing the appointment.'
          : 'There is no likelihood of the patient completing the appointment.' }}
      </p>

      <!-- Conditional buttons based on the likelihood -->
      <div v-if="recommendation.likelihood" class="mt-4">
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

      <div v-else class="mt-4">
        <p class="text-sm text-gray-700 font-semibold mb-2">
          Action: Retain or Rebook
        </p>
        <div class="flex space-x-4">
          <button
            @click="handleRetain"
            class="py-2 px-4 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          >
            Retain
          </button>
          <button
            @click="handleRebook"
            class="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Rebook
          </button>
        </div>
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
  name: 'PatientCompletionLikelihood',
  props: {
    recommendation: {
      type: Object,
      default: null,
    },
  },
  methods: {
    handleRetain() {
      console.log('Retaining current time.')
      // Add logic for retaining the current appointment time
    },
    handleRebook() {
      console.log('Rebooking the appointment.')
      // Add logic for rebooking the appointment
    },
  },
}
</script>

<style scoped>
/* Styling for the PatientCompletionLikelihood component */
</style>
