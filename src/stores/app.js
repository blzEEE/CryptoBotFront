import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from '../config/axios.js'

export const useAppStore = defineStore('app', () => {
  const authentificated = ref(false)
  async function getData(){
    return await axios.get('/api').then(res => res.data)
  }
  return { authentificated, getData }
})
