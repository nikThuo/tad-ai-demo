<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      title="Resource Recommendation"
      subtitle="Recommended Resources based on the therapist's summary."
    />
    <main>
      <h3 class="section__title">Resource Recommender</h3>

      <div class="news__container">
        <div class="card">
          <p class="plan__location">
            <i class="bx icon bx-equalizer ai__icon"></i> Therapist Summary Form
          </p>
          <form @submit.prevent="submitForm">
            <div>
              <label for="therapistNotes" class="block text-sm font-medium text-gray-700">Therapist Notes</label>
              <textarea
                id="therapistNotes"
                v-model="therapistNotes"
                rows="4"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter therapist's notes here"
              ></textarea>
            </div>

            <br />
            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </form>
        </div>

        <h3 class="section__title">Recommended Resources</h3>

        <!-- Display category and subcategory for all resources -->
        <div v-if="resources.length > 0">
          <p class="plan__location">Category: {{ category }}</p>
          <p class="plan__location">Sub Category: {{ subcategory }}</p>

          <!-- Loop through the resources -->
          <div class="resource-list">
            <div v-for="(resource, index) in resources" :key="index" class="resource">
              <!-- Maintain static images -->
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
      therapistNotes: '', // Therapist notes bound to the textarea
      category: '',
      subcategory: '',
      resources: [] // To hold the list of resources from the response
    }
  },
  methods: {
    async submitForm() {
      try {
        // Send the therapist notes to the FastAPI endpoint
        const response = await axios.post('https://nikita-ai-poc.tadhealth.app/resource_recommender', {
          note: this.therapistNotes
        })

        // Assuming the response contains the category, subcategory, and resources
        this.category = response.data.category
        this.subcategory = response.data.subcategory
        this.resources = response.data.resources
      } catch (error) {
        console.error('Error fetching resources:', error)
      }
    },
    // Method to get the appropriate image for each resource based on index
    getImageForResource(index) {
      const images = [
        "https://images.pexels.com/photos/6003572/pexels-photo-6003572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image 1
        "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",  // Image 2
        "https://images.pexels.com/photos/127713/pexels-photo-127713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"   // Image 3
      ]
      // Cycle through the images based on the index
      return images[index % images.length]
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here */
.resource__image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.plan__location {
  font-size: 16px;
  color: #333;
}

.news__text {
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
}

.news__time {
  font-size: 14px;
  color: #0066cc;
}
</style>
