import Vue from 'vue';
import Router from 'vue-router';
import UnderConstruction from '../views/UnderConstruction.vue';
import ProjectsView from '../views/ProjectsView.vue';
import HomePage from '../views/HomePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/construction',
      name: 'Construction',
      component: UnderConstruction,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
    },
  ],
});
