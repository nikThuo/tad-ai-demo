<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      title="Emergency Availability"
      subtitle="Therapist Available on an emergency basis."
    />
    <main>
      <h3 class="section__title">Emergency Appointment</h3>

      <div class="news__container">
        <div class="card">
          <p class="plan__location">
            <i class="bx icon bx-equalizer ai__icon"></i> Emergency Booking Form
          </p>
          <form @submit.prevent="submitForm">
            <div>
              <label for="numericId" class="block text-sm font-medium text-gray-700">Patient ID</label>
              <input
                type="number"
                id="numericId"
                v-model="numericId"
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

        <h3 class="section__title">Available Therapists</h3>
        <div class="card">
          <!-- If there are available therapists, show the list of available therapists -->
          <div v-if="therapists.length > 0">
            <div class="news" v-for="therapist in therapists" :key="therapist.therapist_name">
              <p class="plan__location">
                {{ therapist.therapist_name }}
              </p>
              <p class="plan__location-tag news__source">
                Start Time: <span class="news__time"><strong>{{ therapist.availability_start }}</strong></span>
              </p>
              <p class="plan__location-tag news__source">
                End Time: <span class="news__time"><strong>{{ therapist.availability_end }}</strong></span>
              </p>
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
      numericId: null,
      startTime: '',
      endTime: '',
      therapists: []
    }
  },
  methods: {
    formatDateTime(dateTime) {
      const date = new Date(dateTime)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    },
    async submitForm() {
      const formattedStartTime = this.formatDateTime(this.startTime)
      const formattedEndTime = this.formatDateTime(this.endTime)

      try {
        const response = await axios.post('https://nikita-ai-poc.tadhealth.app/emergency_availability', {
          patient_id: this.numericId,
          start_time: formattedStartTime,
          end_time: formattedEndTime
        })

        // Assuming response.data contains available therapists
        if (response.data.available_therapists) {
          this.therapists = response.data.available_therapists
        }
      } catch (error) {
        console.error('Error fetching therapists:', error)
      }
    },
    bookTherapist(therapist) {
      alert(`Therapist ${therapist.therapist_name} booked for ${therapist.availability_start} to ${therapist.availability_end}.`)
      // You can integrate further booking logic here
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
