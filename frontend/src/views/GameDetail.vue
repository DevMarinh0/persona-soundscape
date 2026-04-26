<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="mb-8 pb-8 border-b border-persona-border">
      <router-link to="/library" class="inline-flex items-center text-sm text-neutral-400 hover:text-cyan-400 mb-4 transition-colors">
        ← Voltar para biblioteca
      </router-link>
      <h1
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-3xl sm:text-4xl font-bold mb-2"
        :style="{ color: game?.color || '#fff' }"
      >
        {{ game?.name || 'Jogo não encontrado' }}
      </h1>
      <p class="text-neutral-400">{{ musicByGame.length }} trilha(s) sonora(s) disponível(is)</p>
    </div>
    <div class="flex flex-wrap gap-2 mb-8">
      <button
        v-for="category in ['Todos', ...categories]"
        :key="category"
        @click="filterCategory = category"
        class="px-4 py-2 text-sm rounded border border-persona-border hover:border-cyan-400 transition-colors"
        :class="{ 'bg-cyan-400/20 border-cyan-400 text-cyan-400': filterCategory === category }"
      >
        {{ category }}
      </button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <MusicCard
        v-for="track in filteredMusic"
        :key="track.id"
        :track="track"
        @play="handlePlay"
      />
    </div>
    <div v-if="filteredMusic.length === 0" class="text-center py-16">
      <p class="text-neutral-400">Nenhuma música encontrada nesta categoria.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePlayerStore } from '../stores/player'
import { music, games, categories } from '../data/music'
import MusicCard from '../components/music/MusicCard.vue'

const route = useRoute()
const playerStore = usePlayerStore()
const game = computed(() => games.find(g => g.id === route.params.gameId))
const filterCategory = ref('Todos')
const musicByGame = computed(() => music.filter(m => m.game === route.params.gameId))
const filteredMusic = computed(() => {
  if (filterCategory.value === 'Todos') return musicByGame.value
  return musicByGame.value.filter(m => m.category === filterCategory.value)
})
const handlePlay = (track) => { playerStore.playTrack(track) }
</script>
