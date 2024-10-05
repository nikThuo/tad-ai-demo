<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      title="Conflict Adjustment"
      subtitle="Resolving Therapist conflicts in their personal and tad calendars."
    />
    <main>
      <h3 class="section__title">Conflict Adjustments</h3>

      <div class="news__container">
        <div class="card">
          <p class="plan__location">
            <i class="bx icon bx-equalizer ai__icon"></i> Therapist Availability: Resolving Conflicts
          </p>
          <form @submit.prevent="submitForm">
            <div>
              <label for="therapistId" class="block text-sm font-medium text-gray-700">Therapist ID</label>
              <input
                type="number"
                id="therapistId"
                v-model="therapistId"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label for="patientId" class="block text-sm font-medium text-gray-700">Patient ID</label>
              <input
                type="number"
                id="patientId"
                v-model="patientId"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label for="startTime" class="block text-sm font-medium text-gray-700">Start Time</label>
              <input
                type="datetime-local"
                id="startTime"
                v-model="startTime"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4 p-1 border border-slate-200 border-opacity-50"
              />
            </div>
            <div>
              <label for="endTime" class="block text-sm font-medium text-gray-700">End Time</label>
              <input
                type="datetime-local"
                id="endTime"
                v-model="endTime"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 border border-slate-200 border-opacity-50"
              />
            </div>
            <br />
            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </form>
        </div>

        <!-- Therapist Availability Section -->
        <h3 class="section__title">Therapist Availability</h3>
        <div class="card">
          <!-- Message when a therapist is available or unavailable -->
          <div v-if="availabilityMessage">
            <p>{{ availabilityMessage }}</p>
            <div v-if="therapistInfo">
              <p><strong>{{ therapistInfo.name }}</strong></p>
              <p v-if="therapistInfo.start_time">Start Time: {{ therapistInfo.start_time }}</p>
              <p v-if="therapistInfo.end_time">End Time: {{ therapistInfo.end_time }}</p>

              <!-- Rebook button should be shown even when the therapist is unavailable -->
              <button @click="bookTherapist(therapistInfo)" class="w-full mt-2 py-1 px-2 bg-blue-500 text-white rounded">
                Rebook Therapist
              </button>
            </div>
          </div>
        </div>

        <!-- Alternative Therapists Section -->
        <h3 class="section__title">Alternative Therapist(s)</h3>
        <div class="card">
          <div v-if="alternativeTherapists.length > 0">
            <div class="news" v-for="therapist in alternativeTherapists" :key="therapist.therapist_name">
              <p>{{ therapist.therapist_name }}</p>
              <p>Start Time: {{ therapist.start_time }}</p>
              <p>End Time: {{ therapist.end_time }}</p>
              <button @click="bookTherapist(therapist)" class="w-full mt-2 py-1 px-2 bg-blue-500 text-white rounded">Book Therapist</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import TitleSection from '@/components/TitleSection.vue'

export default {
  name: 'EmergencyAvailability',
  components: { TitleSection },
  data() {
    return {
      therapistId: null,
      patientId: null,
      startTime: '',
      endTime: '',
      availabilityMessage: '',
      therapistInfo: null,
      alternativeTherapists: []
    }
  },
  methods: {
    // Ensure the formatted date is in 'YYYY-MM-DD HH:MM:SS' format
    formatDateTime(dateTime) {
      const date = new Date(dateTime)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0') // Include seconds
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    },
    async submitForm() {
      const formattedStartTime = this.formatDateTime(this.startTime)
      const formattedEndTime = this.formatDateTime(this.endTime)

      try {
        const response = await axios.post('https://nikita-ai-poc.tadhealth.app/conflict_adjustment', {
          patient_id: this.patientId,
          therapist_id: this.therapistId,
          start_time: formattedStartTime,
          end_time: formattedEndTime
        })

        const data = response.data
        if (data.message === 'Therapist is available.') {
          // If the therapist is available, show the message and therapist details
          this.availabilityMessage = data.message
          this.therapistInfo = {
            name: data.therapist_name,
            start_time: data.start_time,
            end_time: data.end_time,
            available: true
          }
          this.alternativeTherapists = []
        } else if (data.message === 'Therapist is unavailable due to a conflict.') {
          // If there is a conflict, show the unavailable message and list alternatives
          this.availabilityMessage = data.message
          this.therapistInfo = {
            name: data.therapist_name,
            start_time: data.start_time || 'N/A',
            end_time: data.end_time || 'N/A',
            available: false
          }
          this.alternativeTherapists = data.available_alternatives
        }
      } catch (error) {
        console.error('Error fetching therapists:', error)
      }
    },
    bookTherapist(therapist) {
      alert(`Therapist ${therapist.therapist_name} booked for ${therapist.start_time} to ${therapist.end_time}.`)
      // You can integrate further booking logic here
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
