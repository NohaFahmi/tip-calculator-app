<script>
export default {
  data() {
    return {
      tipOptions: [
        {id: 1, value: 5},
        {id: 2, value: 10},
        {id: 3, value: 15},
        {id: 4, value: 25},
        {id: 5, value: 50},
      ],
      selectedTipValue: 0,
      customTipValue: null
    }
  },
  methods: {
    onTipSelected(tipValue) {
      this.selectedTipValue = tipValue;
      this.$emit('tip-selected', tipValue);
    },
  }
}
</script>

<template>
  <div class="options-group">
    <span class='option'
          v-for="(tip) in tipOptions"
          :key="tip.id"
          @click="onTipSelected(tip.value)"
          :class="{selected: (this.selectedTipValue === tip.value)}">
      {{tip.value}}%
    </span>
    <span class="option custom">
       <b-form-input id="custom-option"
                     type="number"
                     placeholder="Custom"
                     v-model="customTipValue"
                     @input="onTipSelected(this.customTipValue)"></b-form-input>
    </span>
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
    cursor: pointer;

    &:hover, &.selected {
      background-color: hsl(172deg 67% 45% / 30%);
      color: var(--very-dark-cyan);
    }

    @media (max-width: 950px) {
      font-size: 14px !important;
      width: 80px;
      height: 30px;
    }

    &.custom {
      background-color: transparent;

      .form-control {
        background-color: var(--very-light-grayish-cyan);
        color: var(--very-dark-cyan);
        border: none;

        &:focus-visible, &:focus {
          box-shadow: none;
          outline: 2px solid var(--strong-cyan);
          text-align: right;
        }
      }
    }
  }
}
</style>