<template>
  <div class="schedule-form p-6 mx-auto bg-white rounded shadow-sm w-full">
    <h3 class="text-lg font-semibold text-gray-700 mb-4">Book Appointment</h3>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Non-editable Start and End Time -->
      <div>
        <label for="startTime" class="block text-sm font-medium text-gray-700">Start Time</label>
        <input
          type="text"
          id="startTime"
          v-model="startTime"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600"
          readonly
        />

        <label for="endTime" class="block text-sm font-medium text-gray-700 mt-4">End Time</label>
        <input
          type="text"
          id="endTime"
          v-model="endTime"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-600"
          readonly
        />
      </div>

      <!-- Numeric ID -->
      <div>
        <label for="numericId" class="block text-sm font-medium text-gray-700">Patient ID</label>
        <input
          type="number"
          id="numericId"
          v-model="numericId"
          class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>

      <!-- Gender Dropdown -->
      <div>
        <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
        <select v-model="gender" id="gender" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option disabled value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <!-- Race Dropdown -->
      <div>
        <label for="race" class="block text-sm font-medium text-gray-700">Race</label>
        <select v-model="race" id="race" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option disabled value="">Select Race</option>
          <option>White</option>
          <option>Black or African American</option>
          <option>Hispanic or Latino</option>
          <option>Asian</option>
          <option>Native American or Alaska Native</option>
        </select>
      </div>

      <!-- Language Spoken Dropdown -->
      <div>
        <label for="languageSpoken" class="block text-sm font-medium text-gray-700">Language Spoken</label>
        <select v-model="languageSpoken" id="languageSpoken" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option disabled value="">Select Language</option>
          <option>English</option>
          <option>Spanish</option>
          <option>Chinese</option>
          <option>French</option>
          <option>German</option>
        </select>
      </div>

      <!-- Support System Dropdown -->
      <div>
        <label for="supportSystem" class="block text-sm font-medium text-gray-700">Support System</label>
        <select v-model="supportSystem" id="supportSystem" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option disabled value="">Select Support System</option>
          <option>Family</option>
          <option>Friends</option>
          <option>Teachers</option>
          <option>Counselors</option>
          <option>Community Groups</option>
        </select>
      </div>

      <!-- Personal Interests Dropdown -->
      <div>
        <label for="personalInterests" class="block text-sm font-medium text-gray-700">Personal Interests</label>
        <select v-model="personalInterests" id="personalInterests" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option disabled value="">Select Personal Interests</option>
          <option>Sports</option>
          <option>Music</option>
          <option>Reading</option>
          <option>Gaming</option>
          <option>Travel</option>
        </select>
      </div>

      <!-- Coping Mechanisms Dropdown -->
      <div>
        <label for="copingMechanisms" class="block text-sm font-medium text-gray-700">Coping Mechanisms</label>
        <select v-model="copingMechanisms" id="copingMechanisms" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option disabled value="">Select Coping Mechanisms</option>
          <option>Exercise</option>
          <option>Meditation</option>
          <option>Talking with friends</option>
          <option>Hobbies</option>
          <option>Therapy</option>
        </select>
      </div>

      <!-- Book Button -->
      <button
        type="button"
        @click="handleBooking"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Book
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PatientCompletionForm',
  data() {
    return {
      startTime: '2021-06-01 3:00:00', // Non-editable start time
      endTime: '2021-06-01 5:00:00', // Non-editable end time
      numericId: '',
      gender: '',
      race: '',
      languageSpoken: '',
      supportSystem: '',
      personalInterests: '',
      copingMechanisms: '',
    }
  },
  methods: {
    async handleBooking() {
      try {
        const payload = {
          id: this.numericId,
          gender: this.gender,
          race: this.race,
          language: this.languageSpoken,
          support_system: this.supportSystem,
          personal_interests: this.personalInterests,
          coping_mechanisms: this.copingMechanisms,
        }

        const response = await axios.post('https://nikita-ai-poc.tadhealth.app/patient_completion_recommend', payload)

        // Emit recommendation based on API response
        const recommendation = {
          likelihood: response.data.likelihood === 'true',
          message: response.data.message,
        }

        this.$emit('recommendationReceived', recommendation)
      } catch (error) {
        console.error('Error submitting booking:', error)
      }
    },
  },
}
</script>

<style scoped>
/* Additional Tailwind custom styles if needed */
</style>
