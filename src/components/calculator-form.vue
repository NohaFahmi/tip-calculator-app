<script setup>
import SelectTip from "@/components/select-tip.vue";
</script>
<script>
import {store} from "@/store.js";
import {watchEffect} from "vue";
export default {

  data() {
    return {
      store
    }
  },
  created() {
    watchEffect(() => {
      this.store.updateResult();
    })
  },
  beforeUnmount() {
    const stop = watchEffect(() => {})
    stop()
  },
  methods: {
    onSelectTip(tip) {
      this.store.setTipPercentage(tip);
      this.store.updateResult()
    },
    blockDecimal(event) {
      if (event.keyCode === 190 || event.keyCode === 110) {
        event.preventDefault();
      }
    }
  }
}
</script>
<template>
  <b-form class="calc-form"
          ref="calcForm">
    <b-form-group
        class="form-group"
        id="input-group-1"
        label="Bill"
        label-for="bill-val">
      <small class="error" v-if="store.form.bill <= 0 && store.form.bill !== null">Can't be zero</small>
      <b-input-group size="lg">
        <b-input-group-text>
          <img src="../assets/images/icon-dollar.svg" alt="icon-dollar"/></b-input-group-text>
        <b-form-input id="bill-val"
                      type="number"
                      placeholder="0"
                      v-model="store.form.bill"></b-form-input>

      </b-input-group>
    </b-form-group>
    <div class="select-input-group">
      <label>Select Tip %</label>
      <select-tip @tip-selected="onSelectTip"/>
    </div>
    <b-form-group
        class="form-group"
        id="input-group-2"
        label="Number of People"
        label-for="num-people">
      <small class="error" v-if="store.form.numOfPeople <= 0 && store.form.numOfPeople !== null">Can't be zero</small>
      <b-input-group size="lg">
        <b-input-group-text>
          <img src="../assets/images/icon-person.svg" alt="icon-person"/></b-input-group-text>
        <b-form-input id="num-people"
                      type="number"
                      placeholder="0"
                      step="1"
                      @keydown="blockDecimal"
                      v-model="store.form.numOfPeople"></b-form-input>

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