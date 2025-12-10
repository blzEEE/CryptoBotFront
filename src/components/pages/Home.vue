<template>
   {{data}}
  <button @click="send">Send</button>
</template>

<script setup>
import { useAppStore } from '@/stores/app.js'
import { ref } from 'vue'
const store = useAppStore();

const data = ref(0);

const send = async () => {
  store.getData().then((e) => {
    data.value = new Date(e.time)
  })
}
</script>