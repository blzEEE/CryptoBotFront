import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const authentificated = ref(false)

    return { authentificated }
})
