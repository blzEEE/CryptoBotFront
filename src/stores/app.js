import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const authentificated = ref(true)

    return { authentificated }
})
