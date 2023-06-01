<template>
  <div class="action-plan">
    <div class="parent-action-plan">
      <div class="action-plan__header">
        <h2 class="action-plan__title">Parent Action Plan</h2>
        <span class="action-plan__edit"
          ><i class="bx bx-message-edit"></i>Edit Response</span
        >
      </div>

      <p class="action-plan__message">
        We understand the deep concern sparked by the recent incident near our
        school. Please rest assured that the safety and emotional well-being of
        our students remain our highest priority. As we continue to closely
        monitor the situation, we are actively providing support and resources
        to address the mental health needs of our students during this difficult
        time.
      </p>

      <div class="action-plan__resources">
        <h3 class="action-plan__resources-title">Recommended Resources:</h3>

        <ul class="resource-list">
          <li class="resource-list__item">
            Article: "How to Talk to Your Children About Traumatic Events"
          </li>
          <li class="resource-list__item">
            Video: "Supporting Your Child's Mental Health"
          </li>
          <li class="resource-list__item">
            Podcast: "Parenting During a Crisis: Practical Tips for Stability"
          </li>
        </ul>
      </div>

      <div class="action-plan__guide">
        <h3 class="action-plan__resources-title">
          Tips for Managing the Current Situation:
        </h3>

        <ul class="guide-list">
          <li class="guide-list__item">
            Be open and available for conversations with your child, allowing
            them to express their feelings without judgment.
          </li>
          <li class="guide-list__item">
            Maintain a sense of normalcy and routine at home to provide your
            child with a sense of stability.
          </li>
          <li class="guide-list__item">
            Utilize the resources we've shared to support both your and your
            child's mental well-being.
          </li>
          <li class="guide-list__item">
            Don't hesitate to schedule an appointment with our counselors if you
            or your child needs extra support.
          </li>
        </ul>
      </div>

      <p class="action-plan__message">
        We are committed to working closely with you to support our students
        during this challenging time. If you have any concerns, please don't
        hesitate to reach out to us. Our team is available to provide guidance
        and support.
      </p>

      <div class="action-plan__button-container">
        <button class="action-plan__button">
          <i class="bx bx-mail-send"></i> Send Response to Parents
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ParentActionPlan',
    props: {
      planTitle: {
        type: String,
        default: '',
      },
      planObjective: {
        type: String,
        default: '',
      },
      parentActionPlan: {
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
