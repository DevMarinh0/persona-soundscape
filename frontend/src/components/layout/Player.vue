<template>
  <div class="fixed bottom-0 left-0 right-0 bg-persona-card border-t border-persona-border z-50">
    <div class="max-w-7xl mx-auto px-4 py-3">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <div class="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center flex-shrink-0">
            <span class="text-xl"></span>
          </div>
          <div class="min-w-0">
            <p class="font-bold truncate">{{ playerStore.currentTrack?.title }}</p>
            <p class="text-xs text-neutral-400 truncate">{{ playerStore.currentTrack?.composer }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="playerStore.togglePlay()"
            class="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center transition-colors flex-shrink-0"
          >
            {{ playerStore.isPlaying ? '' : '' }}
          </button>
        </div>
        <div class="hidden sm:flex items-center gap-2 w-32">
          <span class="text-xs text-neutral-500"></span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            :value="playerStore.volume"
            @input="handleVolume"
            class="w-full accent-cyan-400"
          />
        </div>
        <div class="hidden md:flex items-center gap-2">
          <a
            v-if="playerStore.currentTrack?.spotify"
            :href="playerStore.currentTrack.spotify"
            target="_blank"
            class="text-xs text-neutral-400 hover:text-green-400 transition-colors"
          >
            Spotify
          </a>
          <span v-if="playerStore.currentTrack?.spotify && playerStore.currentTrack?.youtube" class="text-neutral-700">|</span>
          <a
            v-if="playerStore.currentTrack?.youtube"
            :href="playerStore.currentTrack.youtube"
            target="_blank"
            class="text-xs text-neutral-400 hover:text-red-400 transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from '../../stores/player'

const playerStore = usePlayerStore()

const handleVolume = (event) => {
  playerStore.setVolume(parseFloat(event.target.value))
}
</script>
