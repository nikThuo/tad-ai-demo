<template>
  <div class="action-plan">
    <div class="counselor-action-plan">
      <div class="action-plan__header">
        <h2 class="action-plan__title">Counselor Action Plan</h2>
        <span class="action-plan__edit"><i class="bx bx-message-edit"></i>Edit Response</span>
      </div>

      <p class="action-plan__message">
        As you may already be aware, there has been an active shooter incident 5
        miles from our school. The safety and mental well-being of our students
        is our primary concern in these challenging circumstances. We anticipate
        that this incident may lead to an increase in demand for our counseling
        services. Please be prepared for a potential influx of appointments and
        remember to provide sensitive, patient, and compassionate care to all
        students who reach out.
      </p>

      <div class="action-plan__resources">
        <h3 class="action-plan__resources-title">Guidance for Counselors:</h3>

        <ul class="resource-list">
          <li class="resource-list__item">
            Article: "Best Practices in Crisis Counseling"
          </li>
          <li class="resource-list__item">
            Video: "Trauma-Informed Care: A Professional Guide"
          </li>
          <li class="resource-list__item">
            Podcast: "Understanding the Adolescent Brain in Crisis"
          </li>
        </ul>
      </div>

      <div class="action-plan__guide">
        <h3 class="action-plan__resources-title">
          Tips for Managing the Current Situation:
        </h3>

        <ul class="guide-list">
          <li class="guide-list__item">
            Ensure you are taking care of your own mental health. Self-care is
            essential during high-stress situations.
          </li>
          <li class="guide-list__item">
            Be patient and understanding with students who may have difficulty
            expressing their feelings.
          </li>
          <li class="guide-list__item">
            Normalize the feelings students are experiencing and remind them
            that it's okay to ask for help.
          </li>
          <li class="guide-list__item">
            Consider implementing group sessions or workshops to provide support
            to more students at once.
          </li>
        </ul>
      </div>

      <p class="action-plan__message">
        This is a challenging time for all of us, but by working together and
        supporting one another, we will make it through. Remember, we are a team
        and we're here to support not only our students but also each other.
      </p>

      <div class="action-plan__button-container">
        <button class="action-plan__button">
          <router-link to="/counselor-plan" style="color: white; text-align: none;">
            <i class="bx bx-mail-send"></i> Send Response to counselors
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CounselorActionPlan',
    props: {
      planTitle: {
        type: String,
        default: '',
      },
      planObjective: {
        type: String,
        default: '',
      },
      counselorActionPlan: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style scoped>
  .bx {
    position: relative;
    top: 1px;
  }
  .action-plan__edit {
    font-size: 0.8rem;
    color: var(--light-text-color);
    text-decoration: underline;
    cursor: pointer;
  }
  .action-plan__header {
    display: flex;
    justify-content: space-between;
  }
  .action-plan {
    padding: 2rem 0;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1rem 2rem;
    margin-top: 1rem;
  }
  .action-plan__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--dark-text-color);
  }
  .resource-list,
  .guide-list {
    margin-left: 1.5rem;
  }
  .resource-list__item,
  .guide-list__item {
    margin-bottom: 0.5rem;
    color: var(--light-text-color);
  }

  .resource-list__item {
    text-decoration: underline;
    cursor: pointer;
  }

  .resource-list__item::before {
    content: '•';
    color: var(--highlight-color);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -0.9em;
  }

  .guide-list__item::before {
    content: '•';
    color: #f89e5d;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -0.9em;
  }
  .action-plan__message {
    font-size: 1rem;
    margin: 2rem 0rem;
    margin-top: 2rem;
    font-weight: 400;
    color: var(--dark-text-color);
  }

  .action-plan__resources-title {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--dark-text-color);
    margin: 1rem 0rem;
  }

  .action-plan__button {
    margin-left: auto;
    background-color: #d9534f;
    color: #fff;
    border: none;
    padding: 1rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .action-plan__button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
</style>
