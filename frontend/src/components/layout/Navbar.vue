<template>
  <nav class="fixed top-0 w-full z-50 bg-persona-dark/95 backdrop-blur-sm border-b border-persona-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="flex-shrink-0">
          <span class="text-xl font-black text-gradient tracking-wider">PERSONA SOUNDESCAPE</span>
        </router-link>
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="text-sm font-medium text-neutral-300 hover:text-cyan-400 transition-colors uppercase tracking-wider"
            active-class="text-cyan-400"
          >
            {{ link.name }}
          </router-link>
        </div>
        <div class="hidden md:block">
          <input
            type="search"
            placeholder="Buscar..."
            class="w-48 bg-persona-card border border-persona-border rounded px-3 py-1.5 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
            @input="handleSearch"
          />
        </div>
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-neutral-300 hover:text-white">
          <span class="sr-only">Menu</span>
          <div class="w-6 space-y-1.5">
            <span class="block h-0.5 bg-current" :class="{ 'rotate-45 translate-y-2': mobileMenuOpen }"></span>
            <span class="block h-0.5 bg-current" :class="{ 'opacity-0': mobileMenuOpen }"></span>
            <span class="block h-0.5 bg-current" :class="{ '-rotate-45 -translate-y-2': mobileMenuOpen }"></span>
          </div>
        </button>
      </div>
    </div>
    <transition
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-persona-card border-t border-persona-border">
        <div class="px-4 py-4 space-y-3">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block text-base font-medium text-neutral-300 hover:text-cyan-400 uppercase tracking-wider"
          >
            {{ link.name }}
          </router-link>
          <input
            type="search"
            placeholder="Buscar..."
            class="w-full bg-persona-dark border border-persona-border rounded px-3 py-2 text-sm"
            @input="handleSearch"
          />
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Library', path: '/library' },
  { name: 'About', path: '/about' }
]

const handleSearch = (event) => {
  const query = event.target.value.trim()
  if (query.length >= 3) {
    router.push({ path: '/library', query: { q: query } })
    mobileMenuOpen.value = false
  }
}
</script>
