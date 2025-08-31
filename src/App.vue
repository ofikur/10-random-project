<script setup>
import Navbar from './components/Navbar.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
</script>

<template>
  <div class="bg-slate-50 text-slate-700 antialiased">
    
    <Navbar />
    
    <header id="home" class="text-center pt-32 pb-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
          Ofikur <span class="text-blue-600">Holiday Coding Sprint</span>
        </h1>
        
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">
          Tantangan 10 Proyek Kreatif, Mengubah Ide Menjadi Kode.
        </p>
      </div>
    </header>

    <main>
      <ProjectsSection />
      <ContactSection />
    </main>

    <footer id="footer" class="text-center py-10 border-t border-slate-200 mt-12">
      <p class="text-slate-500 text-sm">© {{ new Date().getFullYear() }} Random Projects Portfolio. Created by <a href="https://github.com/ofikur" target="_blank" rel="noopener noreferrer">Ofikur R.</a></p>
    </footer>
    
  </div>
</template>