import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Image from './pages/Image.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/image/:id', component: Image },
]

export default routes;