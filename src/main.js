import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faHome, faCode, faEnvelope, faBriefcase, faExternalLinkAlt, 
  faCodeBranch, faBars, faTimes 
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(
  faHome, faCode, faEnvelope, faBriefcase, faExternalLinkAlt, 
  faCodeBranch, faBars, faTimes, faGithub, faLinkedin
)

const app = createApp(App)

app.use({
  install() {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }
});

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')