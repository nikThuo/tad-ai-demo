<template>
  <div>
    <div class="toolkits__container">
      <div class="toolkit" v-for="(toolkit, index) in toolkits" :key="index">
        <router-link to="/action-plan">
          <img class="toolkit__image" :src="toolkit.image" alt="" />
          <h4 class="toolkit__title">{{ toolkit.title }}</h4>
          <p class="toolkit__desc">{{ toolkit.description }}</p>
        </router-link>
      </div>
      <div class="toolkit add-new">
        <div class="add-icon">
          <i class="bx bx-book-add"></i>
          <h4 class="toolkit__title">Add New Kit</h4>
          <span class="toolkit__add-desc"
            >Click to add a new event response</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toolkits',
    data() {
      return {
        toolkits: [
          {
            image: '/shooting.jpg',
            title: 'Active Shooter Response',
            description:
              'This plan is aimed at providing guidelines on how to effectively respond to an active shooter situation. It includes detailed steps to ensure the safety of students and staff, along with communication strategies to liaise with law enforcement and parents.',

            link: '/action-plan',
          },
          {
            image: '/fire.jpeg',
            title: 'Natural Disaster Response',
            description:
              'This plan equips you with necessary skills and knowledge to respond to different natural disasters. It includes preparedness strategies, safety protocols during the disaster, and steps for recovery and rebuilding post disaster.',
            link: '/crisis-management',
          },
          {
            image: '/school.jpeg',
            title: 'School Death Response',
            description:
              'This plan outlines the protocols and steps involved in managing the aftermath of a tragic death within the school community. It addresses communication strategies, grief counseling resources, and memorialization guidelines to support the community during such difficult times.',
            link: '/crisis-management',
          },
        ],
      }
    },
  }
</script>

<style>
* {
  text-decoration: none;
}
  .toolkit__add-desc {
    font-size: 0.8rem;
    color: var(--light-text-color);
    margin-bottom: 1rem;
  }
  .bx-book-add {
    color: var(--dark-text-color);
  }
  .toolkit__desc {
    font-size: 0.8rem;
    color: var(--light-text-color);
    margin-bottom: 1rem;
  }
  .toolkit__title {
    font-size: 1rem;
    color: var(--dark-text-color);
    width: 100%;
    height: auto;
    border-radius: 15px;
    margin-bottom: 0.5rem;
  }
  .toolkit__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  .toolkits__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 2rem 0rem;
  }
  .toolkit {
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 1rem;
    min-height: 400px;
  }
  .add-new {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
  .add-icon {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    .toolkits__container {
      grid-template-columns: 1fr;
    }
  }
</style>
