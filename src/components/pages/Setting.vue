<template>
    Setting
</template>

<script setup>
import { useAppStore } from '@/stores/app.js'
const store = useAppStore();

const data = store.getData();
</script>