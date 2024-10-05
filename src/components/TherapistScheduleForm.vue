<template>
  <div class="schedule-form p-6 mx-auto bg-white rounded shadow-sm w-full">
    <h3 class="text-lg font-semibold text-gray-700 mb-4">
      Create Appointment
    </h3>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Ideal Hours -->
      <div>
        <label for="idealHours" class="block text-sm font-medium text-gray-700">Start Time</label>
        <input type="time" id="idealHours" v-model="idealHours.start" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4 p-1 border border-slate-200 border-opacity-50" />
        <label for="idealHours" class="block text-sm font-medium text-gray-700">End Time</label>
        <input type="time" id="idealHours" v-model="idealHours.end" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 border border-slate-200 border-opacity-50" />
      </div>

      <!-- Day Available (Single Selection) -->
      <div>
        <label for="dayOfWeek" class="block text-sm font-medium text-gray-700">Day Available</label>
        <select v-model="selectedDay" id="dayOfWeek" class="mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md p-1 border border-slate-200 border-opacity-50">
          <option disabled value="">Select a Day</option>
          <option v-for="(day, index) in days" :key="index" :value="index + 1">{{ day }}</option>
        </select>
      </div>

      <!-- Meeting Type (Map to Number) -->
      <div>
        <label for="meetingType" class="block text-sm font-medium text-gray-700">Meeting Type</label>
        <select id="meetingType" v-model="selectedMeetingType" class="mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md p-1 border border-slate-200 border-opacity-50">
          <option disabled value="">Mode of Meeting</option>
          <option v-for="(gap, index) in gapOptions" :key="index" :value="index + 1">{{ gap }}</option>
        </select>
      </div>

      <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TherapistScheduleForm',
  data() {
    return {
      idealHours: {
        start: '',
        end: '',
      },
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      selectedDay: '', // Will store the selected day of the week as a number (1 for Monday, 7 for Sunday)
      selectedMeetingType: '', // Will store the selected meeting type as a number (1 for Remote, 2 for In-Person, 3 for Hybrid)
      gapOptions: ['Remote', 'In-Person', 'Hybrid'], // Options for the select field
    }
  },
  methods: {
    getHourFromTime(time) {
      if (!time) return null
      const [hour] = time.split(':') // Split the time string and get the first part (hour)
      return parseInt(hour, 10) // Convert to integer
    },
    async handleSubmit() {
      const startHour = this.getHourFromTime(this.idealHours.start)
      const endHour = this.getHourFromTime(this.idealHours.end)

      if (startHour === null || endHour === null || !this.selectedDay || !this.selectedMeetingType) {
        alert('Please fill in all the fields.')
        return
      }

      const payload = {
        time_start_hour: startHour, // Only send the hour
        time_end_hour: endHour,
        duration:endHour - startHour,// Only send the hour
        day_of_week: this.selectedDay, // Send the day as a number (1 for Monday, 7 for Sunday)
        meeting_type: this.selectedMeetingType, // Send the meeting type as a number (1 for Remote, 2 for In-Person, 3 for Hybrid)
      }

      try {
        const response = await axios.post('https://nikita-ai-poc.tadhealth.app/therapist_availability_recommend', payload)
        this.$emit('recommendationReceived', response.data) // Emit the response data to parent
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    },
  },
}
</script>

<style scoped>
/* Additional Tailwind custom styles if needed */
</style>
