<script setup>

import SelectTip from "@/components/select-tip.vue";
</script>

<template>
  <b-form class="calc-form">
    <b-form-group
        class="form-group"
        id="input-group-1"
        label="Bill"
        label-for="bill-val">
<!--      <small class="error">Can't be zero</small>-->
      <b-input-group size="lg">
        <b-input-group-text>
          <img src="../assets/images/icon-dollar.svg" /></b-input-group-text>
        <b-form-input id="bill-val"
                      type="text"
                      placeholder="0"></b-form-input>

      </b-input-group>
    </b-form-group>
    <div class="select-input-group">
      <label>Select Tip %</label>
      <select-tip />
    </div>
    <b-form-group
        class="form-group"
        id="input-group-2"
        label="Number of People"
        label-for="num-people">
<!--      <small class="error">Can't be zero</small>-->
      <b-input-group size="lg">
        <b-input-group-text>
          <img src="../assets/images/icon-person.svg" /></b-input-group-text>
        <b-form-input id="num-people"
                      type="text"
                      placeholder="0"></b-form-input>

      </b-input-group>
    </b-form-group>
  </b-form>
</template>

<style scoped>

.calc-form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 950px) {
    gap: 20px;
  }
  .form-group {
    margin-bottom: 0 !important;
    @media (max-width: 950px) {
      font-size: 14px;
    }
  }
  .input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    text-align: right;
  }
  .input-group-text, .form-control {
    background-color: var(--very-light-grayish-cyan);
    border: none;
    border-radius: 5px;
    color: var(--very-dark-cyan);
    cursor: pointer;
    &:focus, &:focus-visible {
      box-shadow: none;
    }
  }
  .input-group {
    cursor: pointer;
    &:hover {
      outline: 2px solid var(--strong-cyan);
      border-radius: 5px;
    }
    &.invalid {
      outline: 2px solid orangered;
      border-radius: 5px;
    }
  }
  .select-input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 400px;
  }
  .form-group {
    position: relative;
    .error {
      color: orangered;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>