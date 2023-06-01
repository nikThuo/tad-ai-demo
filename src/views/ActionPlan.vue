<template>
  <div class="home">
    <TitleSection
      highlight="Powered by TadHealth AI"
      title="Active Shooter Response Action Plan"
      subtitle="Objective: To establish a proactive and effective response strategy for staff, counselors, and students in the event of an active shooter situation. This plan aims to ensure safety, mitigate risk, facilitate rapid response, and promote efficient communication. Additionally, it seeks to provide the necessary emotional support and mental health resources to manage the immediate and long-term psychological impacts of such a critical incident."
    />
    <main>
      <ActionPlan
        :plan-title="'School Shooting Response Action Plan'"
        :plan-objective="'Objective: To provide a comprehensive and structured approach for staff, counselors, and students to address the emotional impact of a school shooting incident, offer support, and promote mental well-being.'"
        :staff-plan-title="'I. Staff Action Plan'"
        :staff-action-plan="staffActionPlanData"
        :counselor-plan-title="'II. Counselor Action Plan'"
        :counselor-action-plan="counselorActionPlanData"
        :student-plan-title="'III. Student Action Plan'"
        :student-action-plan="studentActionPlanData"
      />
    </main>
  </div>
</template>

<script>
  import TitleSection from '@/components/TitleSection.vue'
  import ActionPlan from '@/components/ActionPlan.vue'

  export default {
    name: 'Home', // changed from 'ActionPlan' to 'Home' because it appears this component is used as a Home view
    data() {
      return {
        staffActionPlanData: [], // add your actual data here
        counselorActionPlanData: [], // add your actual data here
        studentActionPlanData: [], // add your actual data here
      }
    },
    components: {
      TitleSection,
      ActionPlan,
    },
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
</style>
