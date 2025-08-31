<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value; };
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <a href="#home" class="text-xl font-bold text-slate-800">Random Projects Portfolio</a>

        <div class="hidden md:flex space-x-8 items-center text-sm font-medium">
          <a href="#projects" class="text-slate-600 hover:text-blue-600 transition-colors">Proyek</a>
          <a href="#contact" class="text-slate-600 hover:text-blue-600 transition-colors">Kontak</a>
        </div>

        <div class="md:hidden">
          <button @click="toggleMenu">
            <font-awesome-icon :icon="isMenuOpen ? 'times' : 'bars'" class="h-5 w-5 text-slate-600" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-slate-200">
      <div class="flex flex-col items-center space-y-4 py-4">
        <a href="#projects" @click="toggleMenu" class="text-slate-600 hover:text-blue-600">Proyek</a>
        <a href="#contact" @click="toggleMenu" class="text-slate-600 hover:text-blue-600">Kontak</a>
      </div>
    </div>
  </nav>
</template>