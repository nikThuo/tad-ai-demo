<template>
  <div class="home">
    <TitleSection
      highlight="Schedule Me"
      title="Intelligent Scheduling Assistant"
      subtitle="Set your preferences and let us handle the rest."
    />
    <main class="mt-8">
      <!-- two col grid -->
      <CalendarView />
      <div class="grid grid-cols-2 gap-4 mb-4">
        <ScheduleAdjustments />
        <ConflictNotification />
      </div>

      <div>
        <EmergencyToggle />
        <ScheduleForm />
      </div>
    </main>
  </div>
</template>

<script>
  import TitleSection from '../components/TitleSection.vue'
  import ScheduleForm from '../components/ScheduleForm.vue'
  import CalendarView from '../components/CalendarView.vue'
  import EmergencyToggle from '../components/EmergencyToggle.vue'
  import ScheduleAdjustments from '../components/ScheduleAdjustments.vue'
  import ConflictNotification from '../components/ConflictNotification.vue'

  export default {
    name: 'Home',
    components: {
      TitleSection,
      ScheduleForm,
      CalendarView,
      EmergencyToggle,
      ScheduleAdjustments,
      ConflictNotification,
    },
    // Add data, methods, computed properties, etc. as needed
  }
</script>

<style scoped>
  .home {
    padding: 5rem;
  }

  @media screen and (max-width: 600px) {
    .home {
      padding: 2rem;
    }
  }

  /* Additional styles for components */
</style>
