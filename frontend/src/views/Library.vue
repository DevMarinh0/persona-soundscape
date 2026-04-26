<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex flex-wrap gap-3 mb-8">
      <select
        v-model="filterGame"
        class="bg-persona-card border border-persona-border rounded px-4 py-2 text-sm focus:outline-none focus:border-cyan-400"
      >
        <option value="">Todos os jogos</option>
        <option v-for="game in games" :key="game.id" :value="game.id">{{ game.name }}</option>
      </select>
      <select
        v-model="filterCategory"
        class="bg-persona-card border border-persona-border rounded px-4 py-2 text-sm focus:outline-none focus:border-cyan-400"
      >
        <option value="">Todas categorias</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>
    <p class="text-neutral-400 mb-6">{{ filteredMusic.length }} resultado(s) encontrado(s)</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <MusicCard
        v-for="track in filteredMusic"
        :key="track.id"
        :track="track"
        @play="handlePlay"
      />
    </div>
    <div v-if="filteredMusic.length === 0" class="text-center py-16">
      <p class="text-neutral-400">Nenhuma música encontrada com os filtros selecionados.</p>
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
const filterGame = ref(route.query.game || '')
const filterCategory = ref('')

const filteredMusic = computed(() => {
  return music.filter(track => {
    const matchGame = !filterGame.value || track.game === filterGame.value
    const matchCategory = !filterCategory.value || track.category === filterCategory.value
    const matchSearch = !route.query.q || 
      track.title.toLowerCase().includes(route.query.q.toLowerCase()) ||
      track.composer.toLowerCase().includes(route.query.q.toLowerCase())
    return matchGame && matchCategory && matchSearch
  })
})

const handlePlay = (track) => {
  playerStore.playTrack(track)
}
</script>
