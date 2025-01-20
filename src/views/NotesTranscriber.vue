<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      title="Therapists Note Transcription"
      subtitle="Transcribe therapists' summary voice notes and recommend resources based on the summary."
    />
    <main>
      <h3 class="section__title">Notes Transcriber & Resource Recommender</h3>

      <div class="news__container">
        <!-- Recording Section -->
        <div class="card">
          <p class="plan__location">
            <i class="bx icon bx-microphone ai__icon"></i> Therapist Voice Summary Form
          </p>
          <div>
            <button
              @click="startRecording"
              :disabled="isRecording"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ isRecording ? "Recording..." : "Start Recording" }}
            </button>
            <button
              @click="stopRecording"
              :disabled="!isRecording"
              class="w-full flex justify-center mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Stop Recording
            </button>
          </div>
        </div>

        <!-- Upload an Audio File Section -->
        <div class="card mt-4">
          <label for="uploadAudio" class="block text-sm font-medium text-gray-700">
            Upload an Audio File
          </label>
          <input
            id="uploadAudio"
            type="file"
            accept="audio/*"
            @change="handleFileUpload"
            class="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          />
          <button
            @click="transcribeFile"
            :disabled="!selectedFile"
            class="w-full flex justify-center mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Transcribe
          </button>
        </div>

        <!-- Transcribing Indicator -->
        <div v-if="isTranscribing" class="mt-4 text-center text-blue-600">
          <p>{{ transcribingMessage }}</p>
        </div>

        <!-- Transcription Textarea -->
        <div v-if="transcribedText || isTranscribing" class="mt-4">
          <label for="transcribedNotes" class="block text-sm font-medium text-gray-700">
            Transcribed Text
          </label>
          <textarea
            id="transcribedNotes"
            v-model="therapistNotes"
            rows="4"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Transcription will appear here"
            :readonly="isTranscribing"
          ></textarea>
        </div>

        <!-- Recommend Resources Button -->
        <button
          v-if="therapistNotes && !isTranscribing"
          @click="recommendResources"
          class="w-full flex justify-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Recommend Resources
        </button>

        <!-- Error Message -->
        <div v-if="errorMessage" class="error-message mt-4 text-red-600">
          {{ errorMessage }}
        </div>

        <!-- Recommended Resources Section -->
        <h3 class="section__title mt-6">Recommended Resources</h3>
        <div v-if="resources.length > 0">
          <p class="plan__location">Category: {{ category }}</p>
          <p class="plan__location">Sub Category: {{ subcategory }}</p>

          <div class="resource-list">
            <div v-for="(resource, index) in resources" :key="index" class="resource">
              <img
                :src="getImageForResource(index)"
                alt="Resource Image"
                class="resource__image"
              />
              <p class="plan__location">{{ resource.title }}</p>
              <p class="news__text">{{ resource.snippet }}</p>
              <p class="plan__location-tag">
                Link:
                <a :href="resource.link" target="_blank" class="news__time">
                  <strong>{{ resource.link }}</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div v-else>
          <p>No resources available yet. Submit therapist notes to get recommendations.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import TitleSection from '@/components/TitleSection.vue'

export default {
  name: 'ResourceRecommender',
  components: { TitleSection },
  data() {
    return {
      therapistNotes: '',
      category: '',
      subcategory: '',
      resources: [],
      isRecording: false,
      isTranscribing: false,
      audioBlob: null,
      transcribedText: '',
      recorder: null,
      selectedFile: null,
      transcribingMessage: '',
      errorMessage: '', // To handle errors
    }
  },
  methods: {
    async startRecording() {
      try {
        this.isRecording = true
        this.audioBlob = null

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        this.recorder = new MediaRecorder(stream)

        const chunks = []
        this.recorder.ondataavailable = event => {
          if (event.data.size > 0) chunks.push(event.data)
        }

        this.recorder.onstop = () => {
          this.audioBlob = new Blob(chunks, { type: 'audio/wav' })
          this.transcribeAudio(this.audioBlob)
        }

        this.recorder.start()
      } catch (error) {
        console.error('Error starting recording:', error)
        this.errorMessage = 'Error starting recording. Please try again.'
      }
    },
    stopRecording() {
      if (this.recorder) {
        this.recorder.stop()
        this.isRecording = false
      }
    },
    handleFileUpload(event) {
      if (event.target && event.target.files && event.target.files.length > 0) {
        this.selectedFile = event.target.files[0]
      } else {
        console.error('No file selected for upload.')
        this.errorMessage = 'Please select a file to upload.'
      }
    },
    async transcribeAudio(audioBlob) {
      this.isTranscribing = true
      this.transcribingMessage = 'Transcribing audio...'

      try {
        const formData = new FormData()
        formData.append('file', audioBlob, 'audio.wav')

        const response = await axios.post('https://nikita-ai-poc.tadhealth.app/transcribe', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        this.transcribedText = response.data.transcription
        this.therapistNotes = this.transcribedText
      } catch (error) {
        console.error('Error transcribing audio:', error)
        this.errorMessage = 'Error transcribing audio. Please try again.'
      } finally {
        this.isTranscribing = false
      }
    },
    async transcribeFile() {
      if (!this.selectedFile) return

      this.isTranscribing = true
      this.transcribingMessage = 'Transcribing audio...'

      try {
        const formData = new FormData()
        formData.append('file', this.selectedFile)

        const response = await axios.post('https://nikita-ai-poc.tadhealth.app/transcribe', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        this.transcribedText = response.data.transcription
        this.therapistNotes = this.transcribedText
      } catch (error) {
        console.error('Error transcribing file:', error)
        this.errorMessage = 'Error transcribing file. Please try again.'
      } finally {
        this.isTranscribing = false
      }
    },
    async recommendResources() {
      if (!this.therapistNotes.trim()) {
        console.error('Therapist notes are empty. Cannot recommend resources.')
        this.errorMessage = 'Therapist notes cannot be empty.'
        return
      }

      try {
        const response = await axios.post(
          'https://nikita-ai-poc.tadhealth.app/resource_recommender',
          { note: this.therapistNotes },
          { headers: { 'Content-Type': 'application/json' }
          }
        )

        if (response.data) {
          this.category = response.data.category || 'Unknown'
          this.subcategory = response.data.subcategory || 'Unknown'
          this.resources = Array.isArray(response.data.resources)
            ? response.data.resources
            : []
        } else {
          console.error('Invalid response structure from resource recommender API.')
          this.errorMessage = 'Error fetching resources. Please try again later.'
        }
      } catch (error) {
        console.error('Error recommending resources:', error)
        this.errorMessage = 'Failed to fetch recommended resources. Please try again later.'
      }
    },
    getImageForResource(index) {
      const images = [
        'https://images.pexels.com/photos/6003572/pexels-photo-6003572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/127713/pexels-photo-127713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ]
      return images[index % images.length]
    },
  },
}
</script>
