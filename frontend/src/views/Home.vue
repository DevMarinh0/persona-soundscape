<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    
    <div class="absolute inset-0 z-0">
      <img 
        src="/public/event_thumb3.webp" 
        alt="Persona 30th Anniversary"
        class="w-full h-full object-cover object-center"
      />
      
      <div class="absolute inset-0 bg-persona-dark/60" />
      
      <div class="absolute inset-0 bg-gradient-to-b from-persona-p3/30 via-persona-dark/40 to-persona-dark" />
    </div>


    <div class="relative z-10 text-center px-4">
      <h1
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-4xl sm:text-6xl lg:text-7xl font-black mb-6"
      >
        <span class="text-gradient">PERSONA</span>
        <br />
        <span class="text-white">SOUNDESCAPE</span>
      </h1>
      
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        class="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
      >
        Explore as trilhas sonoras dos jogos Persona 1-5. Ouça, descubra e reviva cada momento.
      </p>
      
      <router-link
        to="/library"
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 400 } }"
        class="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded transition-colors"
      >
        Explorar Biblioteca
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { usePlayerStore } from '../stores/player'
import MusicCard from '../components/music/MusicCard.vue'
import { games, music } from '../data/music'

const playerStore = usePlayerStore()
const featuredTracks = music.slice(0, 6)

const handlePlay = (track) => {
  playerStore.playTrack(track)
}
</script>
