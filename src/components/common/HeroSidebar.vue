<template>
  <div class="wrapper">
    <div class="icon-logo">
      <img :src="require('@/assets/images/icons/logo.svg')" alt="" />
    </div>
    <nav>
      <ul v-for="(item, index) in items" :key="index">
        <li
          @click="selectedItems(item.path, item.name, index)"
          :class="[activeIndex === index ? 'active' : null]"
        >
          <component :is="item.icons"> </component>
          <span v-if="screenWidth >= 768 ? true : false"> {{ item.name }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { reactive, ref, inject } from "vue";
import iconDashboard from "@/assets/images/svgs/iconDashboard.vue";
import iconAccount from "@/assets/images/svgs/iconAccount.vue";
import iconTransaction from "@/assets/images/svgs/iconTransaction.vue";
import iconReport from "@/assets/images/svgs/iconReport.vue";
import iconSetting from "@/assets/images/svgs/iconSetting.vue";
export default {
  components: {
    iconDashboard,
    iconAccount,
    iconTransaction,
    iconReport,
    iconSetting,
  },
  setup(props, { emit }) {
    const router = inject("$router");
    const screenWidth = screen.width;
    const activeIndex = ref(0);
    const items = reactive([
      {
        name: "Dashboard",
        component: "dashboard",
        icons: "iconDashboard",
        path: "/dashboard",
      },
      {
        name: "Accounts",
        component: "accounts",
        icons: "iconAccount",
        path: "/account",
      },
      {
        name: "Transactions",
        component: "transactions",
        icons: "iconTransaction",
        path: "/transaction",
      },
      {
        name: "Reports",
        component: "transactions",
        icons: "iconReport",
        path: "/account",
      },
      {
        name: "Settings",
        component: "settings",
        icons: "iconSetting",
        path: "/account",
      },
    ]);
    const selectedItems = (routes, name, index) => {
      emit("passRoutes", name);
      activeIndex.value = index;
      router.push(routes);
    };
    return {
      items,
      activeIndex,
      screenWidth,
      selectedItems,
    };
  },
};
</script>
<style scoped>
.wrapper {
  background-color: var(--sidebar-bg-color);
  color: var(--font-primary);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  height: 100%;
  transition: width 0.3s;
  overflow-y: auto;
}
.icon-logo {
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-logo img {
  width: 180px;
  height: 90px;
}
nav {
  margin: 20px;
  height: 100vh;
}
nav > ul {
  list-style: none;
}
nav > ul > li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  font-family: "Poppins";
  font-size: 16px;
  border-radius: 5px;
  margin: 8px 0px;
}
nav > ul > li:hover {
  background-color: var(--hover-color);
  color: var(--light-color);
  cursor: pointer;
}
.active {
  background-color: var(--primary-color);
  color: var(--light-color);
}
@media only screen and (max-width: 844px) and (min-width: 390px) {
  .wrapper {
    max-height: 60px;
    transition: width 0.3s;
    overflow-y: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
  .icon-logo {
    display: none;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 0px;
    height: unset;
  }
}
</style>
