<template>
  <div class="grid-container-one">
    <div class="box-one">
      <h3>Networth</h3>
      <div class="networth">
        <canvas id="myChartOne"></canvas>
      </div>
    </div>
    <div class="box-two">
      <div class="inner-one">
        <h3>Assets</h3>
        <div class="networth1">
          <canvas id="myChartTwo"></canvas>
        </div>
      </div>
      <div class="inner-two">
        <h3>Liabilities</h3>
        <div class="networth1">
          <canvas id="myChartThree"></canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-container-two">
    <div class="grid-box-one">
      <h3>Recent transactions</h3>
    </div>
    <div class="grid-box-two">
      <h3>Incoming bills</h3>
      <div class="grid-box-upcoming">
        <ul
          class="incoming-bill"
          v-for="(bill, index) in itemBills"
          :key="index"
        >
          <li class="particular">
            <img :src="require(`@/assets/images/icons/${bill.icon}`)" alt="" />
            {{ bill.name }}
          </li>
          <li>{{ bill.amount }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { onMounted, ref, reactive } from "vue";
export default {
  setup() {
    const itemList = ref([
      595393, 591031, 593810, 597762, 600311, 603795, 605112, 601331, 599321,
      600531, 604743, 605932,
    ]);
    const itemListdoughnut = ref([
      595393, 591031, 593810, 597762, 591031, 593810, 597762,
    ]);
    const itemExpenses = ref([595393, 591031, 593810, 597762]);
    const itemBills = reactive([
      {
        name: "Youtube",
        amount: 159,
        icon: "youtube.png",
      },
      {
        name: "Tick-Tick",
        amount: 159,
        icon: "ticktick.png",
      },
    ]);
    onMounted(() => {
      netWorthChart();
      incomeChart();
      expenseChart();
    });
    const netWorthChart = () => {
      const ctx = document.getElementById("myChartOne");
      new Chart(ctx, {
        type: "line",
        data: {
          //labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Networth ",
              data: itemList.value,
              fill: true,
              backgroundColor: "#e5fbe5",
              borderWidth: 2,
              borderColor: "#19a119",
              pointBorderColor: "#5c5c5c",
              pointBackgroundColor: "#5c5c5c",
              tension: 0.4,
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              },
            },

            y: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          },
        },
      });
    };

    const incomeChart = () => {
      const ctx = document.getElementById("myChartTwo");

      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Hospital", "Clinic", "Doctors", "Reimbursement"],
          datasets: [
            {
              data: itemListdoughnut.value,
              backgroundColor: [
                "rgba(71, 179, 156)",
                "rgba(255, 193, 84)",
                "rgba(236, 107, 86)",
                "rgba(31, 117, 254)",
              ],
            },
          ],
        },
        options: {
          rotation: -90,
          circumference: 180,
        },
      });
    };
    const expenseChart = () => {
      const ctx = document.getElementById("myChartThree");

      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [
            "Hospital",
            "Clinic",
            "Doctors",
            "Reimbursement",
            "Clinic1",
            "Doctors1",
            "Reimbursement1",
          ],
          datasets: [
            {
              data: itemExpenses.value,
              backgroundColor: [
                "rgba(71, 179, 156)",
                "rgba(255, 193, 84)",
                "rgba(236, 107, 86)",
                "rgba(31, 117, 254)",
              ],
            },
          ],
        },
        options: {
          rotation: -90,
          circumference: 180,
        },
      });
    };

    return {
      itemList,
      itemListdoughnut,
      itemExpenses,
      itemBills,
      netWorthChart,
      incomeChart,
      expenseChart,
    };
  },
};
</script>

<style scoped>
.grid-container-one {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 12px;
  padding-top: 20px;
  margin: 10px 0px;
  min-height: 320px;
  color: var(--font-primary);
}
.box-one {
  background-color: var(--light-color);
  border-radius: 5px;
  padding: 18px 8px;
}
.box-two {
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.inner-one,
.inner-two {
  padding: 18px 8px;
  background-color: var(--light-color);
  border-radius: 5px;
}
.inner-one h4,
.inner-two h4 {
  text-align: center;
}
.grid-container-two {
  display: grid;
  grid-template-columns: 3.6fr 1.4fr;
  gap: 12px;
  margin: 12px 0px;
  color: var(--font-primary);
}
.grid-box-one {
  background-color: var(--light-color);
  border-radius: 5px;
  height: 320px;
}
.grid-box-two {
  border-radius: 5px;
  background-color: var(--light-color);
  gap: 10px;
}
.grid-box-upcoming {
  margin: 18px 15px;
}
.grid-box-upcoming ul {
  list-style: none;
}
.incoming-bill {
  display: flex;
  justify-content: space-between;
  margin: 14px 0px;
}
.particular {
  display: flex;
  align-items: center;
  gap: 6px;
}
@media only screen and (max-width: 844px) and (min-width: 390px) {
  .grid-container-one {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    padding-top: 20px;
    color: var(--accent-color);
    margin: 10px 0px;
  }
  .box-two {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
