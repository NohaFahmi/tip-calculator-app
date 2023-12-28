<script>
export default {
  name: "select-tip"
}
</script>

<template>
  <div class="options-group">
    <span class="option">5%</span>
    <span class="option">5%</span>
    <span class="option">5%</span>
    <span class="option">5%</span>
    <span class="option">5%</span>
    <span class="option custom">Custom</span>
  </div>
</template>

<style scoped>
  .options-group {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    .option {
      background-color: var(--very-dark-cyan);
      border-radius: 4px;
      width: 90px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--very-light-grayish-cyan);
      font-weight: 700;
      @media (max-width: 950px) {
        font-size: 14px !important;
        width: 80px;
        height: 30px;
      }
      &.custom {
        background-color: var(--very-light-grayish-cyan);
        color: var(--very-dark-cyan);
      }
    }
  }
</style>