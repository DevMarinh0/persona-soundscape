<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400 } }"
    :hover="{ y: -4, transition: { duration: 200 } }"
    class="bg-persona-card rounded-lg p-4 border border-persona-border hover:border-cyan-400/50 transition-all cursor-pointer group"
    @click="$emit('play', track)"
  >
    <div class="aspect-square rounded-lg mb-4 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center relative overflow-hidden">
      <span class="text-4xl"></span>
      <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span class="text-2xl"></span>
      </div>
    </div>
    <h3 class="font-bold text-lg truncate">{{ track.title }}</h3>
    <p class="text-sm text-neutral-400">{{ track.composer }}</p>
    <div class="flex items-center gap-2 mt-3">
      <span class="text-xs px-2 py-1 rounded bg-neutral-800">{{ track.category }}</span>
      <span class="text-xs text-neutral-500">{{ track.duration }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({ track: { type: Object, required: true } })
defineEmits(['play'])
</script>
