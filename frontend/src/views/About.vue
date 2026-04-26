<template>
  <div class="max-w-3xl mx-auto px-4 py-16">
    <h1
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="text-3xl sm:text-4xl font-bold mb-8"
    >
      Sobre o Projeto
    </h1>
    <div class="space-y-6 text-neutral-300">
      <p><strong class="text-white">Persona Soundscape</strong> é uma biblioteca musical interativa desenvolvida para explorar as trilhas sonoras da série Persona (1-5).</p>
      <p>Este projeto é uma homenagem ao 30º aniversário da franquia e não possui vínculo oficial com a Atlus ou Sega. Todas as trilhas sonoras são propriedade de seus respectivos detentores de direitos.</p>
      <h2 class="text-xl font-bold text-white mt-8 mb-4">Funcionalidades</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>Navegação por jogo e categoria</li>
        <li>Busca global por título ou compositor</li>
        <li>Player contínuo de reprodução</li>
        <li>Integração com Spotify e YouTube via embeds</li>
        <li>Design responsivo e acessível</li>
      </ul>
      <h2 class="text-xl font-bold text-white mt-8 mb-4">Tecnologias</h2>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in technologies" :key="tech" class="px-3 py-1 text-xs rounded bg-persona-card border border-persona-border">{{ tech }}</span>
      </div>
 
    </div>
  </div>
</template>

<script setup>
const technologies = ['Vue 3', 'Vite', 'Tailwind CSS', 'Pinia', 'Vue Router', '@vueuse/motion', 'Lenis']
</script>
