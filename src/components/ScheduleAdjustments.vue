<template>
  <div
    class="schedule-adjustments p-6 w-full mx-auto bg-white rounded shadow-sm"
  >
    <h3 class="text-lg font-semibold text-gray-700 mb-4">
      Schedule Adjustments
    </h3>
    <p class="text-sm text-gray-600 mb-4">
      "Schedule Me" aims to optimize your time and increase patient connections.
      It will suggest adjustments to your schedule based on demand, such as
      extending hours or adding availability. Accepting these suggestions can
      lead to more client engagements and potentially higher earnings.
    </p>
    <div v-for="(adjustment, index) in adjustments" :key="index" class="mb-4">
      <p class="text-sm text-gray-700">{{ adjustment.message }}</p>
      <div class="mt-2">
        <button
          class="
            mr-2
            py-2
            px-4
            bg-green-500
            text-white
            rounded
            hover:bg-green-600
          "
          @click="acceptAdjustment(index)"
        >
          Accept
        </button>
        <button
          class="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
          @click="declineAdjustment(index)"
        >
          Decline
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ScheduleAdjustments',
    data() {
      return {
        adjustments: [
          {
            message:
              "Suggest extending Monday's hours to 6 PM due to high demand.",
          },
          { message: 'Recommend adding availability on Saturday morning.' },
        ],
      }
    },
    methods: {
      acceptAdjustment(index) {
        console.log('Adjustment accepted:', this.adjustments[index].message)
        // Optionally remove the adjustment from the list
      },
      declineAdjustment(index) {
        console.log('Adjustment declined:', this.adjustments[index].message)
        // Optionally remove the adjustment from the list
      },
    },
  }
</script>

<style scoped>
  /* Styling for the ScheduleAdjustments component */
</style>
