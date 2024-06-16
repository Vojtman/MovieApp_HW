import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MoviesList from '../views/MovieList.vue';
import AddMovie from '../views/AddMovie.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/movies', component: MoviesList },
  { path: '/add', component: AddMovie }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;