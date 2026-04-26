<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 pt-16">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <Player v-if="playerStore.currentTrack" />
    <Footer />
  </div>
</template>

<script setup>
import { usePlayerStore } from './stores/player'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import Player from './components/layout/Player.vue'

const playerStore = usePlayerStore()
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-enter-from { opacity: 0; transform: translateY(10px); }
.page-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
