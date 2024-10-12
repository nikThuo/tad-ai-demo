<template>
  <div class="flex justify-center items-start min-h-screen bg-gray-100 pt-20">
    <!-- Form container -->
    <div class="login-form p-6 bg-white rounded shadow-sm w-full max-w-md">
      <!-- Logo Section -->
      <div class="flex justify-center mb-6">
        <img
          src="@/assets/tadhealth_logo.png"
          alt="TadHealth Logo"
          class="max-w-xs object-contain"
        />
      </div>

      <!-- Form Title -->
      <h3 class="text-lg font-semibold text-gray-700 mb-4 text-center">
        TadAI Login
      </h3>

      <!-- Login Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Username Input -->
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="username"
            v-model="email"
            placeholder="Enter your email"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4 p-1 border border-slate-200 border-opacity-50"
          />
        </div>

        <!-- Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1 border border-slate-200 border-opacity-50"
          />
        </div>

        <!-- Keep me signed in and Forgot Password -->
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center">
            <input type="checkbox" id="keepSignedIn" v-model="keepSignedIn" class="h-4 w-4 text-teal-900 border-gray-300 rounded" />
            <label for="keepSignedIn" class="ml-2 block text-sm text-gray-700">Keep me signed in</label>
          </div>
          <div>
            <a href="#" class="text-sm text-teal-900 hover:underline">Forgot Password?</a>
          </div>
        </div>

        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

        <!-- Submit Button -->
        <button type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit
        </button>

        <!-- Sign up link -->
        <div class="text-center mt-4">
          <p class="text-sm text-gray-600">Don’t you have an account? <a href="#" class="text-teal-900 hover:underline">Sign
            up</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '', // Bind to the email input
      password: '', // Bind to the password input
      keepSignedIn: false, // Checkbox state
      errorMessage: '', // To display error messages
    }
  },
  methods: {
    handleSubmit() {
      // Hardcoded credentials
      const correctEmail = 'tadai@tadhealth.com'
      const correctPassword = 't@d@i001'

      // Check if the entered credentials match the hardcoded ones
      if (this.email === correctEmail && this.password === correctPassword) {
        // If credentials match, redirect to the ScheduleMe route
        this.$router.push({ name: 'home' })
      } else {
        // If credentials do not match, set the error message
        this.errorMessage = 'Invalid email or password. Please try again.'
      }
    },
  },
}
</script>

<style scoped>
/* Additional Tailwind custom styles if needed */
</style>
