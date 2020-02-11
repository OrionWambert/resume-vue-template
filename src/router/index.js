import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutPage from '@/pages/AboutPage.vue';
import ExperiencePage from '@/pages/ExperiencePage.vue';
import EducationPage from '@/pages/EducationPage.vue';
import SkillsPage from '@/pages/SkillsPage.vue';
import InterestsPage from '@/pages/InterestsPage.vue';
import AwardPage from '@/pages/AwardPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: ExperiencePage,
  },
  {
    path: '/education',
    name: 'Experience',
    component: EducationPage,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsPage,
  },
  {
    path: '/interests',
    name: 'Interests',
    component: InterestsPage,
  },
  {
    path: '/awards',
    name: 'awards',
    component: AwardPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
