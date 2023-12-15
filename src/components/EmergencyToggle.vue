<template>
  <div class="emergency-toggle p-6 w-full bg-white rounded shadow-sm mb-4">
    <h3 class="text-lg font-semibold text-gray-700 mb-4">
      Emergency Availability
    </h3>
    <p class="text-sm text-gray-600 mb-4">
      Toggle this switch to indicate your availability for mental health
      emergencies outside of scheduled hours. When active, a "heart plus" badge
      will display, signaling your readiness to assist in urgent situations.
    </p>
    <div class="flex items-center">
      <label for="toggle" class="flex items-center cursor-pointer">
        <!-- Toggle -->
        <div class="relative">
          <!-- Input -->
          <input
            type="checkbox"
            id="toggle"
            v-model="isAvailable"
            class="sr-only"
            @change="toggleBadge"
          />
          <!-- Line -->
          <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <!-- Dot -->
          <div
            class="
              dot
              absolute
              left-1
              top-1
              bg-white
              w-6
              h-6
              rounded-full
              transition
            "
          ></div>
        </div>
        <!-- Label -->
        <div class="ml-3 text-gray-700 font-medium">
          {{
            isAvailable
              ? 'Available for Emergencies'
              : 'Not Available for Emergencies'
          }}
        </div>
      </label>
      <!-- Heart Plus Badge -->
      <div v-if="isAvailable" class="ml-4">
        <span class="inline-block bg-red-500 text-white p-2 rounded-full">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EmergencyToggle',
    data() {
      return {
        isAvailable: false,
      }
    },
    methods: {
      toggleBadge() {
        // Additional logic can be added here if needed when the toggle changes
      },
    },
  }
</script>

<style scoped>
  .emergency-toggle .dot {
    transition: all 0.3s ease-in-out;
  }
  .emergency-toggle input:checked ~ .dot {
    transform: translateX(6px);
  }
</style>
