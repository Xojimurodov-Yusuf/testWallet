<script setup>
import { ref } from 'vue';
import moneyButton from './moneyButton.vue';
import { walletPinia } from "./stores/userWalletPinia.js"
const wallet = walletPinia()
const moneyValue = ref(null)

function edit(massage) {
  let editPrompt = prompt(`${massage}, Yangi qiymat kiriting`)
}
</script>

<template>
  <div class="container">
    <div class="wallet">
      <div class="display-Wallet">
        <p class="userMoney">{{ wallet.walletValue }} so'm</p>
      </div>
      <input v-model="moneyValue" class="moneyInput" type="number" placeholder="Pulingizni kirgizing">
      <div class="plusAndMinus">
        <moneyButton @money-filter="() => wallet.plusMoneyPush(moneyValue)" value="+" />
        <moneyButton @money-filter="() => wallet.minusMoneyPush(moneyValue)" value="-" />
      </div>

      <div class="historyMoney">
        <div class="historyMoneyValue">
          <div class="money-history-item">
            <div v-for="(plusHistory, index) in wallet.plusMoney" :key="index" class="btn-price">
              <p class="walletHistoryMoney">+ {{ plusHistory }} so'm</p>
              <div class="edit-del">
                <button class="edit-del-btn">🖋️</button>
                <button @click="wallet.removePlusMoney(index)" class="edit-del-btn">🗑️</button>
              </div>
            </div>
          </div>
        </div>

        <div class="historyMoneyValue">
          <div class="money-history-item">
            <div v-for="(minusHistory, index) in wallet.minusMoney" :key="index" class="btn-price">
              <p class="walletHistoryMoney">- {{ minusHistory }} so'm</p>
              <div class="edit-del">
                <button @click="edit(minusHistory)" class="edit-del-btn">🖋️</button>
                <button @click="wallet.removeMinusMoney(index)" class="edit-del-btn">🗑️</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wallet {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 15%;
}

.display-Wallet {
  width: 30rem;
  border: 1px solid gray;
  height: 6rem;
  border-radius: 0.8rem;
}

.plusAndMinus {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
}

.userMoney {
  font-size: 2.4rem;
  font-weight: 500;
  text-align: end;
  position: relative;
  top: 1rem;
  right: 1rem;
}

.moneyInput {
  width: 30rem;
  padding: 2.5rem;
  border-radius: 0.8rem;
  border: 1px solid gray;
  background-color: white;
  outline: none;
}

.historyMoney {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
}

.btn-price {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

.edit-del-btn {
  background: none;
  font-size: 2rem;
  border: none;
  cursor: pointer;
}

.walletHistoryMoney {
  font-size: 2rem;
  font-weight: 500;
}

.money-history-item {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}

.money-history-text {
  display: flex;
  justify-content: center;
  align-items: center;
}

.historyMoneyValue {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;
}

.history-items {
  display: flex;
}

.edit-del {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>