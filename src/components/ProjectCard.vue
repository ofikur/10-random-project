<script setup>
defineProps({ project: Object });
</script>
<template>
  <div class="bg-white border border-slate-200 rounded-lg p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <h3 class="text-lg font-bold text-slate-800 mb-2">{{ project.title }}</h3>
    <p class="text-slate-500 text-sm flex-grow mb-4">{{ project.description }}</p>
    
    <div class="mb-5">
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech" class="bg-slate-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
          {{ tech }}
        </span>
      </div>
    </div>

    <div class="mt-auto flex space-x-3 text-sm font-medium">
      <a :href="project.repoUrl" target="_blank" class="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
        <font-awesome-icon icon="code-branch" />
        <span>Kode</span>
      </a>
      <a :href="project.liveUrl" target="_blank" class="w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
        <font-awesome-icon icon="external-link-alt" />
        <span>Live Demo</span>
      </a>
    </div>
  </div>
</template>