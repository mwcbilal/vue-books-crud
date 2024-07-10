import { createMemoryHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BookManager from "../views/BookManager.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/books", component: BookManager },
];

const router = new createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
