<template>
  <section id="contact" class="py-20 px-4 bg-white">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-slate-900 mb-4" data-aos="fade-down">Hubungi Saya</h2>
      <p class="text-slate-500 mb-8 max-w-xl mx-auto" data-aos="fade-down" data-aos-delay="100">
        Tertarik untuk berkolaborasi? Saya selalu terbuka untuk diskusi dan peluang baru.
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6" data-aos="fade-up" data-aos-delay="200">
        <a href="mailto:emailkamu@example.com" class="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center space-x-2">
          <font-awesome-icon icon="envelope" class="h-5 w-5" />
          <span>ofikurxyz@gmail.com</span>
        </a>
        <div class="hidden sm:block h-6 w-px bg-slate-200"></div>
        <div class="flex items-center space-x-5">
          <a href="https://github.com/ofikur" target="_blank" class="text-slate-500 hover:text-blue-600 transition-colors">
            <font-awesome-icon :icon="['fab', 'github']" class="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/ofikur" target="_blank" class="text-slate-500 hover:text-blue-600 transition-colors">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>