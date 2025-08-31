import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

/* --- KONFIGURASI FONT AWESOME --- */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Impor ikon yang akan kita gunakan
import { 
  faHome, faCode, faEnvelope, faBriefcase, faExternalLinkAlt, 
  faCodeBranch, faBars, faTimes 
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Tambahkan ikon ke library
library.add(
  faHome, faCode, faEnvelope, faBriefcase, faExternalLinkAlt, 
  faCodeBranch, faBars, faTimes, faGithub, faLinkedin
)
/* --- AKHIR KONFIGURASI --- */


const app = createApp(App)

app.use({
  install() {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }
});

// Daftarkan komponen FontAwesomeIcon secara global
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')