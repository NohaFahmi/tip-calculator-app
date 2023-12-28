<script setup>

</script>

<template>
  <div class="results">
    <div class="tip-per-person">
      <p class="tip-per-person_text">
        <span class="label">Tip Amount</span>
        <span>/ person</span>
      </p>
      <p class="tip-per-person_value">$0.00</p>
    </div>
    <div class="total-per-person">
      <p class="total-per-person_text">
        <span class="label">Total</span>
        <span>/ person</span>
      </p>
      <p class="total-per-person_value">$0.00</p>
    </div>
    <b-button class="reset-btn">RESET</b-button>
  </div>
</template>

<style scoped>
.results {
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  padding: 50px 40px;
  @media (max-width: 950px) {
    padding: 20px;
    gap: 25px;
  }
  .tip-per-person, .total-per-person {
    display: flex;
    justify-content: space-between;
    @media (max-width: 950px) {
      font-size: 14px;
    }
  }
  .total-per-person_text, .tip-per-person_text {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    .label {
      color: var(--light-grayish-cyan);
    }
  }
  .total-per-person_value, .tip-per-person_value {
    font-size: 36px;
    margin-bottom: 0;
    color: var(--strong-cyan);
    font-weight: 900;
    @media (max-width: 950px) {
      font-size: 24px;
    }
  }
  .reset-btn {
    width: 100%;
    height: 50px;
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
    font-weight: 900;
    font-size: 18px;
    border: none;
    margin-top: auto;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
    &:disabled {
      opacity: 0.5;
    }
    @media (max-width: 950px) {
      font-size: 14px;
      height: 35px;
    }
  }
}
</style>