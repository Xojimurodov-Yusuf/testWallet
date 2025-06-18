<script setup>
const models = defineModel();
const emits = defineEmits(['moneyFilter']);

const { value } = defineProps({
    value: {
        type: [Number, String]
    }
})

const userMoneyValue = () => {
    emits('moneyFilter', value);
}
</script>

<template>
    <button @click="userMoneyValue" class="plus-btn">{{ value }}</button>
</template>

<style>
.plus-btn {
    width: 14.5rem;
    padding: 1.5rem;
    border: 1px solid gray;
    border-radius: 0.8rem;
    background: none;
    cursor: pointer;
}

.plus-btn:active {
    background-color: gray;
}
</style>