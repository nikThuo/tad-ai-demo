<template>
  <div class="sidebar" :class="isOpened ? 'open' : ''" :style="cssVars">
    <div class="logo-details" style="margin: 6px 14px 0 14px">
      <img
        v-if="menuLogo"
        :src="menuLogo"
        alt="menu-logo"
        class="icon menu-logo"
      />

      <i v-else class="bx icon" :class="menuIcon" />

      <div class="logo_name">
        {{ menuTitle }}
      </div>
      <i
        class="bx"
        :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'"
        id="btn"
        @click="isOpened = !isOpened"
      />

      <i
        class="bx"
        :class="isOpened ? 'bx-menu-alt-right ' : 'bx-menu icon-close'"
        id="btn"
        @click="isOpened = !isOpened"
      />
    </div>

    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        max-height: calc(100% - 60px);
      "
    >
      <div id="my-scroll" style="margin: 6px 14px 0 14px">
        <ul class="nav-list" style="overflow: visible">
          <!-- <li id="links_search" v-if="isSearch" @click="isOpened = true">
            <i class="bx bx-search" />
            <input
              type="text"
              :placeholder="searchPlaceholder"
              @input="$emit('search-input-emit', $event.target.value)"
            />
            <span data-target="links_search" class="tooltip">{{
              searchTooltip
            }}</span>
          </li> -->

          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :id="'links_' + index"
          >
            <router-link v-if="isUsedVueRouter" :to="menuItem.link">
              <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
              <span class="links_name">{{ menuItem.name }}</span>
            </router-link>

            <a
              v-else
              @click.stop.prevent="$emit('menuItemClcked', menuItem.link)"
              :href="menuItem.link"
            >
              <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
              <span class="links_name">{{ menuItem.name }}</span>
            </a>
            <span :data-target="'links_' + index" class="tooltip">{{
              menuItem.tooltip || menuItem.name
            }}</span>
          </li>
        </ul>
      </div>

      <transition name="slide-fade">
        <div v-if="isOpened" class="profile bg-teal-900">
          <div class="profile-details">
            <img v-if="profileImg" :src="profileImg" alt="profileImg" />
            <div class="name_job">
              <div class="name">
                {{ profileName }}
              </div>
              <div class="job">
                {{ profileRole }}
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- <i
          v-if="isExitButton"
          class="bx bx-log-out"
          id="log_out"
          @click.stop="$emit('button-exit-clicked')"
        /> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SidebarMenu',
    props: {
      //! Menu settings
      isMenuOpen: {
        type: Boolean,
        default: true,
      },
      isUsedVueRouter: {
        type: Boolean,
        default: true,
      },
      menuTitle: {
        type: String,
        default: 'Akahon',
      },
      menuLogo: {
        type: String,
        default: '/tadhealth_logo.png',
      },
      menuIcon: {
        type: String,
        default: 'bxl-c-plus-plus',
      },
      isPaddingLeft: {
        type: Boolean,
        default: true,
      },
      menuOpenedPaddingLeftBody: {
        type: String,
        default: '250px',
      },
      menuClosedPaddingLeftBody: {
        type: String,
        default: '78px',
      },

      //! Menu items
      menuItems: {
        type: Array,
        default: () => [
          {
            link: '/schedule-me',
            name: 'Schedule Me',
            tooltip: 'Dashboard',
            icon: 'bx-calendar',
          },
          // {
          //   link: '/side-kick',
          //   name: 'SideKick',
          //   tooltip: 'Dashboard',
          //   icon: 'bx-street-view',
          // },

          {
            link: '/crisis-companion',
            name: 'Crisis Companion',
            tooltip: 'Dashboard',
            icon: 'bx-map-pin',
          },
          {
            link: '/crisis-management',
            name: 'Crisis Management',
            tooltip: 'Crisis Management Center',
            icon: 'bx-book-heart',
          },
          {
            link: '/action-plan',
            name: 'Example Action Plan',
            tooltip: 'Example Action Plan',
            icon: 'bx-paper-plane',
          },
          {
            link: '/counselor-plan',
            name: 'Counselor Plan',
            tooltip: 'Counselor Plan',
            icon: 'bx-book-open',
          },
          {
            link: '/therapist-availability',
            name: 'Therapist Availability',
            tooltip: 'Therapist Availability',
            icon: 'bx-book-open',
          },
          {
            link: '/patient-completion',
            name: 'Patient Completion',
            tooltip: 'Patient Completion',
            icon: 'bx-book-open',
          },
          {
            link: '/conflict-adjustment',
            name: 'Conflict Adjustment',
            tooltip: 'Conflict Adjustment',
            icon: 'bx-book-open',
          },
          {
            link: '/emergency-availability',
            name: 'Emergency Availability',
            tooltip: 'Emergency Availability',
            icon: 'bx-book-open',
          },
          {
            link: '/resource-recommender',
            name: 'Resource Recommender',
            tooltip: 'Resource Recommender',
            icon: 'bx-book-open',
          },
          {
            link: '/notes-transcriber',
            name: 'Notes Transcriber',
            tooltip: 'Resource Recommender',
            icon: 'bx-book-open',
          },
          {
            link: '/',
            name: 'Log Out',
            tooltip: 'Dashboard',
            icon: 'bx-map-pin',
          },
        ],
      },

      //! Search
      isSearch: {
        type: Boolean,
        default: true,
      },
      searchPlaceholder: {
        type: String,
        default: 'Search...',
      },
      searchTooltip: {
        type: String,
        default: 'Search',
      },

      //! Profile detailes
      profileImg: {
        type: String,
        default: '',
      },
      profileName: {
        type: String,
        default: '@tadhealth',
      },
      profileRole: {
        type: String,
        default: 'Interactive Demo',
      },
      isExitButton: {
        type: Boolean,
        default: true,
      },
      isLoggedIn: {
        type: Boolean,
        default: true,
      },

      //! Styles
      bgColor: {
        type: String,
        default: '#ffffff',
      },
      secondaryColor: {
        type: String,
        default: '#4ACDC4',
      },
      homeSectionColor: {
        type: String,
        default: '#e4e9f7',
      },
      logoTitleColor: {
        type: String,
        default: '#fff',
      },
      iconsColor: {
        type: String,
        default: '#41496B',
      },
      itemsTooltipColor: {
        type: String,
        default: '#e4e9f7',
      },
      searchInputTextColor: {
        type: String,
        default: '#fff',
      },
      menuItemsHoverColor: {
        type: String,
        default: '#41496B',
      },
      menuItemsTextColor: {
        type: String,
        default: '#41496B',
      },
      menuFooterTextColor: {
        type: String,
        default: '#fff',
      },
      footerBgColor: {
        type: String,
        default: '#1A535C',
      },
    },
    data() {
      return {
        isOpened: false,
      }
    },
    created() {
      window.addEventListener('resize', this.checkWindowSize)
    },
    destroyed() {
      window.removeEventListener('resize', this.checkWindowSize)
    },
    mounted() {
      this.isOpened = this.isMenuOpen
      this.tooltipAttached()
      this.checkWindowSize()
    },
    computed: {
      cssVars() {
        return {
          // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
          '--bg-color': this.bgColor,
          '--menu-footer-bg': this.footerBgColor,
          '--secondary-color': this.secondaryColor,
          '--home-section-color': this.homeSectionColor,
          '--logo-title-color': this.logoTitleColor,
          '--icons-color': this.iconsColor,
          '--items-tooltip-color': this.itemsTooltipColor,
          '--serach-input-text-color': this.searchInputTextColor,
          '--menu-items-hover-color': this.menuItemsHoverColor,
          '--menu-items-text-color': this.menuItemsTextColor,
          '--menu-footer-text-color': this.menuFooterTextColor,
        }
      },
    },
    watch: {
      isOpened(val) {
        window.document.body.style.paddingLeft =
          this.isOpened && this.isPaddingLeft
            ? this.menuOpenedPaddingLeftBody
            : this.menuClosedPaddingLeftBody
      },
    },
    methods: {
      checkWindowSize() {
        if (window.innerWidth <= 768) {
          this.isOpened = false
        } else {
          this.isOpened = this.isMenuOpen
        }
      },
      tooltipAttached() {
        const tooltips = document.querySelectorAll('.tooltip')
        tooltips.forEach(tooltip => {
          document.body.appendChild(tooltip)
        })
        document.querySelectorAll('.tooltip').forEach(tooltip => {
          const targetID = tooltip.dataset.target
          const target = document.querySelector(`#${targetID}`)
          if (!target) return
          target.addEventListener('mouseenter', () => {
            const targetPosition = target.getBoundingClientRect()
            if (this.isOpened) return
            tooltip.style.top = `${targetPosition.top + window.scrollY}px`
            tooltip.style.left = `${
              targetPosition.left + targetPosition.width + 20
            }px`
            tooltip.classList.add('active')
          })
          target.addEventListener('mouseleave', () => {
            tooltip.classList.remove('active')
          })
        })
      },
    },
  }
</script>

<style>
  /* Google Font Link */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');

  .icon-close {
    display: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    transition: all 0.5s ease;
    background: #f5f5fd;
  }
  .name_job {
    margin-bottom: 5px;
  }
  .menu-logo {
    width: auto !important;
    height: 25px !important;
    margin: 12px;
  }
  .sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    min-height: min-content;
    /* overflow-y: auto; */
    width: 78px;
    background: var(--bg-color);
    /* padding: 6px 14px 0 14px; */
    z-index: 99;
    transition: all 0.5s ease;
  }
  .sidebar.open {
    width: 250px;
  }
  .sidebar .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .sidebar .logo-details .icon {
    opacity: 0;
    transition: all 0.5s ease;
  }
  .sidebar .logo-details .logo_name {
    color: var(--logo-title-color);
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
  }
  .sidebar.open .logo-details .icon,
  .sidebar.open .logo-details .logo_name {
    opacity: 1;
  }
  .sidebar .logo-details #btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .sidebar.open .logo-details #btn {
    text-align: right;
  }
  .sidebar i {
    color: var(--icons-color);
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }
  .sidebar .nav-list {
    margin-top: 20px;
    /* margin-bottom: 60px; */
    /* height: 100%; */
    /* min-height: min-content; */
  }
  .sidebar li {
    position: relative;
    margin: 8px 0;
    list-style: none;
  }
  .tooltip {
    position: absolute;
    /* top: -20px; */
    /* left: calc(100% + 15px); */
    z-index: 3;
    background: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
  }
  .tooltip.active {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    /* top: 50%; */
    transform: translateY(25%);
  }
  .sidebar.open li .tooltip {
    display: none;
  }
  .sidebar input {
    font-size: 15px;
    color: var(--serach-input-text-color);
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: var(--secondary-color);
  }
  .sidebar.open input {
    padding: 0 20px 0 50px;
    width: 100%;
  }
  .sidebar .bx-search {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 22px;
    background: var(--secondary-color);
    color: var(--icons-color);
  }
  .sidebar.open .bx-search:hover {
    background: var(--secondary-color);
    color: var(--icons-color);
  }
  .sidebar .bx-search:hover {
    background: var(--menu-items-hover-color);
    color: var(--bg-color);
  }
  .sidebar li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
  }
  .sidebar li a:hover {
    background: var(--menu-items-hover-color);
  }
  .sidebar li a .links_name {
    color: var(--menu-items-text-color);
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
  }
  .sidebar.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
  }
  .sidebar li a:hover .links_name,
  .sidebar li a:hover i {
    transition: all 0.5s ease;
    color: var(--bg-color);
  }
  .sidebar li router-link {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
  }
  .sidebar li router-link:hover {
    background: var(--menu-items-hover-color);
  }
  .sidebar li router-link .links_name {
    color: var(--menu-items-text-color);
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
  }
  .sidebar.open li router-link .links_name {
    opacity: 1;
    pointer-events: auto;
  }
  .sidebar li router-link:hover .links_name,
  .sidebar li router-link:hover i {
    transition: all 0.5s ease;
    color: var(--bg-color);
  }
  .sidebar li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
  }
  .sidebar div.profile {
    position: relative;
    height: 60px;
    width: 78px;
    /* left: 0;
    bottom: 0; */
    padding: 10px 14px;
    transition: all 0.5s ease;
    overflow: hidden;
  }
  .sidebar.open div.profile {
    width: 250px;
  }
  .sidebar div .profile-details {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
  .sidebar div img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
  }
  .sidebar div.profile .name,
  .sidebar div.profile .job {
    font-size: 15px;
    font-weight: 400;
    color: var(--menu-footer-text-color);
    white-space: nowrap;
  }
  .sidebar div.profile .job {
    font-size: 12px;
  }
  .sidebar .profile #log_out {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: var(--menu-footer-bg);
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;
  }
  .sidebar.open .profile #log_out {
    width: 50px;
    background: var(--secondary-color);
    opacity: 0;
  }
  .sidebar.open .profile:hover #log_out {
    opacity: 1;
  }
  .sidebar.open .profile #log_out:hover {
    opacity: 1;
    color: red;
  }
  .sidebar .profile #log_out:hover {
    color: red;
  }
  .home-section {
    position: relative;
    background: var(--home-section-color);
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
  }
  .sidebar.open ~ .home-section {
    left: 250px;
    width: calc(100% - 250px);
  }
  .home-section .text {
    display: inline-block;
    color: var(--bg-color);
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
  }
  .my-scroll-active {
    overflow-y: auto;
  }
  #my-scroll {
    overflow-y: auto;
    height: calc(100% - 60px);
  }
  #my-scroll::-webkit-scrollbar {
    display: none;
    /* background-color: rgba(255, 255, 255, 0.2);
    width: 10px;
    border-radius:5px  */
  }
  /* #my-scroll::-webkit-scrollbar-thumb{
    background-color: red;
    border-radius:5px
  }
  #my-scroll::-webkit-scrollbar-button:vertical:start:decrement{
    display:none;
  }
  #my-scroll::-webkit-scrollbar-button:vertical:end:increment{
    display:none;
  } */
  @media (max-width: 420px) {
    .sidebar li .tooltip {
      display: none;
    }
  }

  .slide-fade-enter-active {
    transition: all 5s ease;
  }
  .slide-fade-leave-active {
    transition: all 5s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  @media (max-width: 620px) {
    body {
      padding-left: 0px !important;
    }
    .sidebar {
      position: absolute;
      width: 100%;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
      height: 100vh;
    }
    .sidebar.open {
      transform: translateX(0);
    }

    .icon-close {
      display: block !important;
      position: relative;
      left: 43%;
      padding-bottom: 50px;
      padding-left: 250px !important;
      line-height: 40px !important;
      transition: display 0.3s ease-in-out;
    }
  }

  @media (max-width: 520px) {
    .icon-close {
      left: 45%;
    }
  }

  @media (max-width: 420px) {
    .icon-close {
      left: 43%;
    }
  }

  @media (max-width: 390px) {
    .icon-close {
      left: 42%;
    }
  }
</style>
