import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  const currentTrack = ref(null)
  const isPlaying = ref(false)
  const volume = ref(0.7)
  const queue = ref([])

  function playTrack(track) {
    currentTrack.value = track
    isPlaying.value = true
  }

  function togglePlay() {
    isPlaying.value = !isPlaying.value
  }

  function addToQueue(track) {
    queue.value.push(track)
  }

  function setVolume(value) {
    volume.value = Math.max(0, Math.min(1, value))
  }

  return {
    currentTrack, isPlaying, volume, queue,
    playTrack, togglePlay, addToQueue, setVolume
  }
})
