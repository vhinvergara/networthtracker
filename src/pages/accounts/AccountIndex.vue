<template>
  <div class="section">
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
        <h3>Latest transactions</h3>
        <div class="grid-box-transaction">
          <ul v-for="(item, index) in itemTransaction" :key="index">
            <li class="info-transaction">
              <span>
                <img
                  :src="require(`@/assets/images/icons/${item.icon}`)"
                  alt=""
              /></span>
              <div class="description">
                <h4>{{ item.description }}</h4>
                <h5>{{ item.category }}</h5>
              </div>
            </li>
            <li @click="routeTransactionDetails(item)" class="amount">
              <h4
                :class="
                  item.type === 'expense'
                    ? 'bg-color-expense'
                    : item.type === 'income'
                    ? 'bg-color-income'
                    : 'bg-color-transfer'
                "
              >
                {{ currencyFormat(item) }}
              </h4>
              <img :src="require(`@/assets/images/icons/menus.png`)" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div class="grid-box-two">
        <h3>Upcoming bills</h3>
        <div class="grid-box-upcoming">
          <ul v-for="(bill, index) in itemBills" :key="index">
            <li class="info-details">
              <span> <img :src="bill.meta" alt="" /></span>
              <div class="description">
                <h4>{{ bill.name }}</h4>
                <h5>{{ bill.due }}</h5>
              </div>
            </li>
            <li class="amount" @click="routeBillDetails(bill)">
              <h4>{{ currencyFormat(bill) }}</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import transferSheet from "@/utils/transactions/transferTransactionSheet";
import incomeSheet from "@/utils/transactions/incomeTransactionSheet";
import expenseSheet from "@/utils/transactions/expenseTransactionSheet";
import billSheet from "@/utils/bills/upcomingBillSheet.js";
import { onMounted, ref, reactive } from "vue";
export default {
  setup() {
    const itemList = ref([
      595393, 591031, 593810, 597762, 600311, 603795, 605112, 601331, 599321,
      600531, 604743, 605932,
    ]);
    const itemAssets = ref([4500, 12393, 50000, 120000, 100000, 34500]);
    const itemLiablities = ref([95323, 21031, 593810]);
    const itemBills = reactive([
      {
        name: "Youtube",
        amount: 159,
        meta: "https://storage.googleapis.com/temp-inv-files/youtube.png",
        due: "Jan 05, 2024",
        paymentMode: "Credit Card",
      },
      {
        name: "Spotify",
        amount: 159,
        meta: "https://storage.googleapis.com/temp-inv-files/spotify.png",
        due: "Jan 12, 2024",
        paymentMode: "Gcash",
      },
      {
        name: "Netflix",
        amount: 2490,
        meta: "https://storage.googleapis.com/temp-inv-files/netflix.png",
        due: "Jan 19, 2024",
        paymentMode: "Credit Card",
      },

      /*
      {
        name: "Spotify",
        amount: 300,
        icon: "spotify.png",
      },,*/
    ]);
    const itemTransaction = reactive([
      {
        description: "Transfer Transaction",
        amount: 110,
        date: "January 04, 2024",
        icon: "transfer.png",
        category: "Transfer",
        type: "transfer",
        from: "BPI Saving",
        to: "Gcash",
        fees: 0,
      },
      {
        description: "Jollibee",
        amount: 110,
        date: "January 04, 2024",
        icon: "expense.png",
        category: "Food",
        type: "expense",
        paymentMode: "Cash",
      },
      {
        description: "LRT",
        amount: 22,
        date: "January 04, 2024",
        icon: "expense.png",
        category: "Transportation",
        type: "expense",
        paymentMode: "Beep Card",
      },
      {
        description: "Grab",
        amount: 345,
        date: "January 04, 2024",
        icon: "expense.png",
        category: "Transportation",
        type: "expense",
        paymentMode: "Gcash",
      },
      {
        description: "Paycheck",
        amount: 13830,
        date: "January 04, 2024",
        icon: "income.png",
        category: "Salary",
        type: "income",
        disbursement: "BPI Payroll",
      },
      {
        description: "Cash-in",
        amount: 1200,
        date: "January 14, 2024",
        icon: "transfer.png",
        category: "Transfer",
        type: "transfer",
        from: "BPI Saving",
        to: "Gcash",
        fees: 5,
      },
    ]);

    onMounted(() => {
      netWorthChart();
      assetChart();
      liabilitiesChart();
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
    const assetChart = () => {
      const ctx = document.getElementById("myChartTwo");

      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [
            "Cash",
            "Account Receivable",
            "Bank Accounts",
            "Investment",
            "Real Estate",
            "Property",
          ],
          datasets: [
            {
              data: itemAssets.value,
            },
          ],
        },
        options: {
          rotation: -90,
          circumference: 180,
        },
      });
    };
    const liabilitiesChart = () => {
      const ctx = document.getElementById("myChartThree");

      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Loans", "Credit Card", "Mortgage"],
          datasets: [
            {
              data: itemLiablities.value,
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
    const currencyFormat = (val) => {
      let amount = val.amount;
      let symbol;
      let formatted = amount.toLocaleString("en-PH", {
        style: "currency",
        currency: "PHP",
      });
      symbol = val.type === "income" ? "+" : val.type === "expense" ? "-" : "";
      return `${symbol} ${formatted}`;
    };
    const routeTransactionDetails = (item) => {
      if (item.type === "transfer") {
        transferSheet(item);
      } else if (item.type === "income") {
        incomeSheet(item);
      } else {
        expenseSheet(item);
      }
    };
    const routeBillDetails = (item) => {
      billSheet(item);
    };
    return {
      itemList,
      itemAssets,
      itemLiablities,
      itemBills,
      itemTransaction,
      netWorthChart,
      assetChart,
      liabilitiesChart,
      currencyFormat,
      routeTransactionDetails,
      routeBillDetails,
    };
  },
};
</script>

<style scoped>
.grid-container-one {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 12px;
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
  margin: 10px 0px;
  color: var(--font-primary);
}
.grid-box-one {
  background-color: var(--light-color);
  border-radius: 5px;
  padding: 18px 8px;
  border-radius: 5px;
}
.grid-box-two {
  padding: 18px 8px;
  border-radius: 5px;
  background-color: var(--light-color);
  gap: 10px;
}
.grid-box-upcoming,
.grid-box-transaction {
  margin-top: 14px;
}
.grid-box-upcoming ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 8px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 8px;
}
.grid-box-transaction ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 8px 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 8px;
}
.info-details,
.info-transaction {
  margin: 8px 5px;
  display: flex;
  gap: 8px;
}
.amount {
  margin: auto 14px;
  display: flex;
  gap: 5px;
  align-items: center;
}
.info-details .description h4 {
  color: rgb(77, 78, 78);
  font-weight: 600;
  font-size: 14px;
}
.info-details .description h5 {
  color: rgb(185, 185, 185);
  font-size: 12px;
  font-weight: 600;
}
.info-transaction .description h4 {
  color: rgb(77, 78, 78);
  font-weight: 600;
  font-size: 14px;
}
.info-transaction .description h5 {
  color: rgb(185, 185, 185);
  font-size: 12px;
  font-weight: 600;
}
.info-transaction span img {
  height: 36px;
  width: 36px;
}
.bg-color-income {
  color: #32ad35;
}
.bg-color-expense {
  color: #ff5959;
}
.bg-color-transfer {
  color: rgb(101, 104, 101);
}
@media only screen and (max-width: 844px) and (min-width: 390px) {
  .grid-container-one {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    color: var(--accent-color);
  }
  .box-two {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-container-two {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    padding-top: 20px;
    color: var(--accent-color);
    margin: 10px 0px;
  }
  .networth1 {
    max-width: 230px;
    max-height: 230px;
    display: flex;
    margin: auto;
  }
}
</style>
