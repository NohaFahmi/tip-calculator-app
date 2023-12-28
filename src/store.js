import {reactive} from 'vue'

export const store = reactive({
    form: {
        bill: null,
        numOfPeople: null,
        tipPercentage: null
    },
    results: {
        totalTip: 0,
        totalAmount: 0
    },
    updateResult() {
        if (this.form.bill && this.form.numOfPeople) {
            const tipAmountOfBill = Number(this.form.bill) * (Number(this.form.tipPercentage) / 100);
            const totalBillWithTip = Number(this.form.bill) + tipAmountOfBill;
            const totalTip = tipAmountOfBill / Number(this.form.numOfPeople);
            const totalAmount = totalBillWithTip / Number(this.form.numOfPeople);
            this.results = {
                totalTip,
                totalAmount
            }
        }
    },
    setTipPercentage(tip) {
      this.form = {
          ...this.form,
          tipPercentage: tip
      }
    },
    reset() {
        this.form = {
            bill: null,
            numOfPeople: null,
            tipPercentage: null
        };
        this.results = {
            totalTip: 0,
            totalAmount: 0
        }
    }
})