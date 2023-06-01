<template>
  <div class="action-plan">
    <div class="counselor-action-plan">
        <div class="action-plan__header">
            <h2 class="action-plan__title">Student Action Plan</h2>
            <span class="action-plan__edit"><i class='bx bx-message-edit'></i>Edit Response</span>
        </div>
      

      <p class="action-plan__message">
        The safety and well-being of our school community is our top priority.
        We are aware of the incident that has occurred near our school, and we
        understand that this may be a difficult time for many of you. It's
        completely normal to have a range of emotions during such times.
        Remember, you're not alone in this, and there are numerous resources and
        support systems in place to help you navigate through this.
      </p>

      <div class="action-plan__resources">
        <h3 class="action-plan__resources-title">Recommended Resources:</h3>

        <ul class="resource-list">
          <li class="resource-list__item">
            Article: "Navigating Fear: A Guide to Coping with Traumatic
            Incidents"
          </li>
          <li class="resource-list__item">
            Video: "Breathing Exercises for Anxiety and Stress"
          </li>
          <li class="resource-list__item">
            Podcast: "Beyond the Crisis: Mental Health Strategies for
            Resilience"
          </li>
        </ul>
      </div>

      <div class="action-plan__guide">
        <h3 class="action-plan__resources-title">
          Tips for Managing the Current Situation:
        </h3>

        <ul class="guide-list">
          <li class="guide-list__item">
            Stay indoors and comply with directives from school authorities and
            local law enforcement.
          </li>
          <li class="guide-list__item">
            Communicate with your loved ones to assure them of your safety.
          </li>
          <li class="guide-list__item">
            Utilize the resources we've shared to support your mental
            well-being.
          </li>
          <li class="guide-list__item">
            Remember, seeking help is a strength, not a weakness. We are here
            for you.
          </li>
        </ul>
      </div>

      <p class="action-plan__message">
        In addition, remember that our counseling department is always here for
        you. We encourage you to book an appointment if you're feeling
        overwhelmed or simply need someone to talk to. Our team is available to
        provide guidance, support, and confidential conversation.
      </p>

      <div class="action-plan__button-container">
        <button class="action-plan__button"><i class='bx bx-mail-send' ></i> Send Response to Students</button>
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
    font-size: .8rem;
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
    margin-left: -.9em;
  }

  .guide-list__item::before {
    content: '•';
    color: #f89e5d;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -.9em;
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
