<script setup>
import { projects } from '@/projects.js';
import ProjectCard from './ProjectCard.vue';
</script>
<template>
  <section id="projects" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-900" data-aos="fade-down">Etalase Proyek</h2>
        <p class="text-slate-500 mt-2" data-aos="fade-down" data-aos-delay="100">Setiap baris kode adalah langkah maju.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="project.id" 
          :project="project"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>