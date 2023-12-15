<template>
  <div class="schedule-form p-6 mx-auto bg-white rounded shadow-sm w-full">
    <h3 class="text-lg font-semibold text-gray-700 mb-4">
      Set Your Availability
    </h3>
    <p class="text-sm text-gray-600 mb-6">
      Let "Schedule Me" learn your availability preferences in just five quick
      questions. Set your ideal hours, capacity, and necessary gaps between
      appointments. "Schedule Me" will then generate an optimized schedule,
      considering your existing commitments and preferences.
    </p>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Ideal Hours -->
      <div>
        <label for="idealHours" class="block text-sm font-medium text-gray-700"
          >Ideal Hours</label
        >
        <input
          type="time"
          id="idealHours"
          v-model="idealHours.start"
          class="
            mt-1
            block
            w-full
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            mb-4
            p-1
            border border-slate-200 border-opacity-50
          "
          placeholder="Start Time"
        />
        <input
          type="time"
          id="idealHours"
          v-model="idealHours.end"
          class="
            mt-1
            block
            w-full
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-1
            border border-slate-200 border-opacity-50
          "
          placeholder="End Time"
        />
      </div>

      <!-- Days Available -->
      <div>
        <span class="block text-sm font-medium text-gray-700"
          >Days Available</span
        >
        <div class="mt-2">
          <div v-for="day in days" :key="day" class="flex items-center mb-2">
            <input
              type="checkbox"
              :id="day"
              v-model="daysAvailable"
              :value="day"
              class="
                h-4
                w-4
                text-indigo-600
                focus:ring-indigo-500
                border-gray-300
                rounded
              "
            />
            <label for="day" class="ml-2 block text-sm text-gray-900">{{
              day
            }}</label>
          </div>
        </div>
      </div>

      <!-- Gaps Between Appointments -->
      <div>
        <label for="gaps" class="block text-sm font-medium text-gray-700"
          >Gaps Between Appointments (minutes)</label
        >
        <select
          id="gaps"
          v-model="gaps"
          class="
            mt-1
            block
            w-full
            pl-3
            pr-10
            py-2
            text-base
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
            sm:text-sm
            rounded-md
            p-1
            border border-slate-200 border-opacity-50
          "
        >
          <option disabled value="">Select gap time</option>
          <option v-for="gap in gapOptions" :key="gap" :value="gap">
            {{ gap }}
          </option>
        </select>
      </div>

      <!-- Maximum Appointments -->
      <div>
        <label
          for="maxAppointments"
          class="block text-sm font-medium text-gray-700"
          >Maximum Appointments Per Day</label
        >
        <input
          type="number"
          id="maxAppointments"
          v-model="maxAppointments"
          class="
            mt-1
            border
            block
            w-full
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-1
            border border-slate-200 border-opacity-50
          "
        />
      </div>

      <button
        type="submit"
        class="
          w-full
          flex
          justify-center
          py-2
          px-4
          border border-transparent
          rounded-md
          shadow-sm
          text-sm
          font-medium
          text-white
          bg-teal-900
          hover:bg-teal-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        Save Preferences
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ScheduleForm',
    data() {
      return {
        idealHours: {
          start: '',
          end: '',
        },
        days: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        daysAvailable: [],
        gaps: '',
        gapOptions: [15, 30, 45, 60],
        maxAppointments: '',
      }
    },
    methods: {
      handleSubmit() {
        // Here you can handle the form submission
        alert('Preferences saved: ' + JSON.stringify(this.$data))
      },
    },
  }
</script>

<style scoped>
  /* Additional Tailwind custom styles if needed */
</style>
