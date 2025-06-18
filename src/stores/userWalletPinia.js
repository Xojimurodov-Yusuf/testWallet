import { defineStore } from "pinia";

export const walletPinia = defineStore('wallet', {
    state: () => ({
        walletValue: 1000000,
        plusMoney: [],
        minusMoney: []
    }),

    actions: {
        plusMoneyPush(moneyValue) {
            try {
                this.plusMoney.push(moneyValue)
                this.walletValue += moneyValue
                if (!moneyValue || isNaN(moneyValue)) throw 'Siz summa kirgizmadingiz';
            } catch (errorNumber) {
                alert(errorNumber);
            }
        },

        minusMoneyPush(moneyValue) {
            try {
                this.minusMoney.push(moneyValue)
                this.walletValue -= moneyValue
                if (!moneyValue || isNaN(moneyValue)) throw 'Siz summa kirgizmadingiz';
            } catch (errorNumber) {
                alert(errorNumber);
            }
        },

        removePlusMoney(index) {
            this.walletValue -= this.plusMoney[index]
            this.plusMoney.splice(index, 1)
        },

        removeMinusMoney(index) {
            this.walletValue += this.minusMoney[index]
            this.minusMoney.splice(index, 1)
        },

        edit(editPrompt) {
            this.plusMoney.pop()
            this.plusMoney = editPrompt
        }
    }
})