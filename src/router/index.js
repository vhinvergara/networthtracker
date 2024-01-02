import { createRouter, createWebHistory } from "vue-router";
//import LandingPage from "../layout/LandingPage.vue";
import DashboardIndex from "../pages/dashboard/DashboardIndex.vue";
import AccountIndex from "../pages/accounts/AccountIndex.vue";
import TransactionIndex from "../pages/transaction/TransactionIndex.vue";
const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardIndex,
    meta: {
      title: "dashboard",
      layout: "panel",
      requiresAuth: false,
    },
  },
  {
    path: "/account",
    name: "account",
    component: AccountIndex,
    meta: {
      title: "account",
      layout: "panel",
      requiresAuth: false,
    },
  },
  {
    path: "/transaction",
    name: "transaction",
    component: TransactionIndex,
    meta: {
      title: "transaction",
      layout: "panel",
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
