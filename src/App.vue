<script setup>
import CalculatorForm from "@/components/calculator-form.vue";
import Results from "@/components/results.vue";
</script>

<script>

export default {
  data() {
    return {
      result: {
        totalTip: 0,
        totalAmount: 0
      }
    }
  },
  methods: {
    calculateSplitAmount(data) {
      if (data.bill && data.numOfPeople) {
        const tipAmountOfBill = Number(data.bill) * (Number(data.tipPercentage) / 100);
        const totalBillWithTip = Number(data.bill) + tipAmountOfBill;
        this.result.totalTip = tipAmountOfBill / Number(data.numOfPeople);
        this.result.totalAmount = totalBillWithTip / Number(data.numOfPeople);
      }
    },
    onResultsReset() {
      this.result = {
        totalTip: 0,
        totalAmount: 0
      }
    }
  },
}
</script>

<template>
  <div class="page-container">
    <h1 class="page-title">spli<br />tter</h1>
    <div class="calculator-wrapper">
      <div class="form-wrapper">
        <calculator-form
            @change-form-data="calculateSplitAmount"/>
      </div>
      <div class="results-wrapper">
        <results :results="result"
                 @reset-results="onResultsReset"
                  />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  .page-title {
    color: var(--very-dark-cyan);
    font-weight: 100;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 40px;
    letter-spacing: 10px;
    transform: scale(0.6);
    opacity: 0.80;
    @media (max-width: 950px) {
      margin: 25px auto;
      transform: scale(0.8);
    }
  }
  .calculator-wrapper {
    display: flex;
    background-color: var(--white);
    border-radius: 20px;
    padding: 25px;
    gap: 35px;
    height: 75vh;
    max-width: 950px;
    margin: 0 auto;
    box-shadow: 10px 10px 10px var(--grayish-cyan);
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 25px;
      padding: 15px;
      height: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .form-wrapper {
      width: 100%;
    }
    .results-wrapper {
      background-color: var(--very-dark-cyan);
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>

