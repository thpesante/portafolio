<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import SkillSphere from './components/SkillSphere.vue'
import CodeTerminal from './components/CodeTerminal.vue'
import BentoDashboard from './components/BentoDashboard.vue'
import { Mail, MapPin, Send, Terminal, Layers, Phone, Info } from '@lucide/vue'

const currentYear = new Date().getFullYear()

const projects = ref([
  {
    id: 'taxi-amigo',
    title: 'Taxi Amigo',
    description: 'Aplicación móvil y plataforma web para la gestión eficiente y segura del transporte.',
    longDescription: 'Taxi Amigo es un ecosistema tecnológico completo desarrollado para optimizar la gestión de flotas y viajes de transporte. Ofrece una aplicación móvil nativa para conductores y pasajeros, y un panel de control administrativo web para gestionar operaciones en tiempo real.',
    techs: ['Kotlin', 'Firebase', 'React', 'TypeScript', 'Vercel', 'Firestore', 'Realtime Database'],
    features: ['Inicio de Sesión y Autenticación segura', 'Registro detallado de conductores y pasajeros', 'Gestión de perfiles de usuario', 'Geolocalización en tiempo real con Mapas', 'Panel administrativo con reportes y analíticas'],
    type: 'both' as const,
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
    role: 'Desarrollador Full Stack & Android'
  },
  {
    id: 'ya-lo-pido',
    title: 'Ya Lo Pido',
    description: 'Aplicación de delivery ágil que conecta usuarios, restaurantes y repartidores en tiempo real.',
    longDescription: 'Ya Lo Pido es una plataforma de comercio local y entrega a domicilio. Cuenta con flujos dedicados para la visualización de menús, procesamiento de pedidos en tiempo real, comunicación por chat entre el cliente y el repartidor, y control total desde la consola de administración.',
    techs: ['Kotlin', 'React', 'Firebase', 'TypeScript', 'Realtime Database', 'Firebase Authentication'],
    features: ['Directorio interactivo de Restaurantes', 'Gestión de Pedidos en tiempo real', 'Gestión y asignación automática de repartidores', 'Panel administrativo para comercios', 'Pasarela de pagos y facturación integrada'],
    type: 'mobile' as const,
    gradient: 'linear-gradient(135deg, #d946ef 0%, #6366f1 100%)',
    role: 'Desarrollador Android & Integrador Frontend'
  },
  {
    id: 'terminal-ecuador',
    title: 'Terminal Ecuador',
    description: 'Sistema web centralizado para la administración y control de operaciones de transporte terrestre.',
    longDescription: 'Terminal Ecuador es una solución web a gran escala diseñada para digitalizar la venta de pasajes, control de andenes y reportes administrativos en terminales terrestres. Se integra con base de datos en la nube de alta disponibilidad para asegurar transacciones en milisegundos.',
    techs: ['React', 'TypeScript', 'Firebase', 'Vercel', 'Firestore', 'Firebase Auth', 'PayPhone API'],
    features: ['Dashboard administrativo de ventas y andenes', 'Integración de pasarela de pagos con PayPhone', 'Control de accesos y roles de operadores', 'Módulo de reportería automatizada', 'Sincronización en la nube con Firestore'],
    type: 'web' as const,
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
    role: 'Desarrollador Frontend Principal'
  }
])

// Form status
const formName = ref('')
const formEmail = ref('')
const formMessage = ref('')
const isSending = ref(false)
const isSent = ref(false)

const handleContactSubmit = (e: Event) => {
  e.preventDefault()
  isSending.value = true
  // Mock API call
  setTimeout(() => {
    isSending.value = false
    isSent.value = true
    formName.value = ''
    formEmail.value = ''
    formMessage.value = ''
    setTimeout(() => {
      isSent.value = false
    }, 4000)
  }, 1500)
}

// Scroll observer setup
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px',
    }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="app-layout">
    <!-- Liquid Background Blobs with SVG noise distortion -->
    <div class="liquid-bg-container">
      <div class="liquid-blob blob-1"></div>
      <div class="liquid-blob blob-2"></div>
      <div class="liquid-blob blob-3"></div>
    </div>
    
    <svg class="liquid-overlay" style="display: none;">
      <defs>
        <filter id="liquid-glass-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>

    <!-- Floating Navigation Bar (Spatial glass dock) -->
    <nav class="nav-dock-container">
      <div class="nav-dock glass-panel">
        <a href="#hero" class="nav-logo">
          <Terminal class="logo-icon" />
          <span>Johnny P.</span>
        </a>
        <div class="nav-links">
          <a href="#dashboard" class="nav-link">Perfil</a>
          <a href="#projects" class="nav-link">Proyectos</a>
          <a href="#skills" class="nav-link">Habilidades</a>
          <a href="#contact" class="nav-link">Contacto</a>
        </div>
      </div>
    </nav>

    <!-- MAIN SECTIONS -->
    <main>
      <!-- HERO SECTION -->
      <section id="hero" class="hero-section">
        <div class="container hero-container">
          <div class="hero-content">
            <div class="hero-intro reveal active">
              <span class="intro-badge">DESARROLLADOR WEB & MÓVIL</span>
              <h1 class="hero-name">JOHNNY PESÁNTEZ RÍOS</h1>
              <div class="subtitle-wrap">
                <span class="role-text text-gradient">Full Stack Developer</span>
                <span class="divider">|</span>
                <span class="role-text text-gradient">Android Developer</span>
                <span class="divider">|</span>
                <span class="role-text text-gradient">React Developer</span>
              </div>
              <p class="hero-bio">
                Especializado en la creación y mantenimiento de software comercial. Desarrollo de aplicaciones Android nativas robustas con Kotlin y Java, así como plataformas web dinámicas en React e integraciones backend en la nube con Firebase y Supabase.
              </p>
              
              <div class="hero-actions">
                <a href="#dashboard" class="glow-btn glow-btn-primary">
                  Explorar Perfil
                  <Terminal class="btn-icon" />
                </a>
                <a href="#projects" class="glow-btn">
                  Ver Proyectos
                  <Layers class="btn-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- BENTO PROFILE DASHBOARD -->
      <section id="dashboard" class="dashboard-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title reveal">Dashboard Profesional</h2>
          </div>
          
          <div class="bento-grid">
            <!-- Kotlin Code Editor mockup (Bento Card) -->
            <div class="bento-card col-span-5 row-span-2 reveal">
              <CodeTerminal />
            </div>
            
            <!-- Objective Info Bento Card -->
            <div class="bento-card col-span-7 reveal glass-panel bento-pad">
              <div class="bento-card-header">
                <Info class="bento-header-icon" />
                <h3>Objetivo Laboral</h3>
              </div>
              <p class="objective-text">
                Desarrollar mi formación y experiencia en una empresa que ofrezca nuevas perspectivas y cualidades en las cuales pueda explorar y mejorar profesionalmente, así como también fomentar el compañerismo y el trabajo en equipo de alto rendimiento.
              </p>
            </div>
            
            <!-- Contact Quick Details Bento Card -->
            <div class="bento-card col-span-7 reveal glass-panel bento-pad">
              <div class="quick-contact-grid">
                <a href="mailto:alexandropesantez@gmail.com" class="quick-contact-item">
                  <Mail class="quick-icon" />
                  <div>
                    <span>Escríbeme</span>
                    <strong>alexandropesantez@gmail.com</strong>
                  </div>
                </a>
                <a href="tel:0987734415" class="quick-contact-item">
                  <Phone class="quick-icon" />
                  <div>
                    <span>Llamadas / WhatsApp</span>
                    <strong>098 773 4415</strong>
                  </div>
                </a>
                <div class="quick-contact-item col-span-2-mobile">
                  <MapPin class="quick-icon" />
                  <div>
                    <span>Ubicación</span>
                    <strong>Santa Isabel, Azuay, Ecuador</strong>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Complete Tabbed CV dashboard (Bento Card) -->
            <div class="bento-card col-span-12 reveal">
              <BentoDashboard />
            </div>
          </div>
        </div>
      </section>

      <!-- PROJECTS SECTION -->
      <section id="projects" class="projects-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title reveal">Proyectos Destacados</h2>
          </div>
          
          <div class="projects-grid reveal">
            <ProjectCard 
              v-for="proj in projects" 
              :key="proj.id"
              :project="proj"
            />
          </div>
        </div>
      </section>

      <!-- SKILLS SECTION -->
      <section id="skills" class="skills-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title reveal">Habilidades Técnicas</h2>
          </div>
          
          <div class="reveal">
            <SkillSphere />
          </div>
        </div>
      </section>

      <!-- CONTACT SECTION -->
      <section id="contact" class="contact-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title reveal">Enviar Mensaje</h2>
          </div>
          
          <div class="contact-grid reveal">
            <!-- Info Card -->
            <div class="contact-info-panel glass-panel">
              <h3>¿Colaboramos en un nuevo proyecto?</h3>
              <p>Estoy disponible para consultorías, desarrollo de software a medida, aplicaciones móviles Android nativas o integraciones de backend en la nube.</p>
              
              <div class="contact-details">
                <div class="detail-item">
                  <Mail class="detail-icon" />
                  <div>
                    <h4>Correo Electrónico</h4>
                    <a href="mailto:alexandropesantez@gmail.com">alexandropesantez@gmail.com</a>
                  </div>
                </div>
                <div class="detail-item">
                  <Phone class="detail-icon" />
                  <div>
                    <h4>Teléfono</h4>
                    <a href="tel:0987734415">098 773 4415</a>
                  </div>
                </div>
                <div class="detail-item">
                  <MapPin class="detail-icon" />
                  <div>
                    <h4>Dirección</h4>
                    <span>Panamericana sur km 12, Santa Isabel, Ecuador</span>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="social-links">
                <a href="https://github.com" target="_blank" class="social-icon-btn" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="social-icon"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" class="social-icon-btn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="social-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
            
            <!-- Form Card -->
            <div class="contact-form-panel glass-panel">
              <form @submit="handleContactSubmit">
                <div class="form-group">
                  <label for="name">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="formName" 
                    required 
                    placeholder="Tu nombre completo"
                    class="form-input"
                  />
                </div>
                
                <div class="form-group">
                  <label for="email">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formEmail" 
                    required 
                    placeholder="tucorreo@ejemplo.com"
                    class="form-input"
                  />
                </div>
                
                <div class="form-group">
                  <label for="message">Mensaje</label>
                  <textarea 
                    id="message" 
                    v-model="formMessage" 
                    required 
                    rows="5"
                    placeholder="Cuéntame sobre tu proyecto..."
                    class="form-input"
                  ></textarea>
                </div>
                
                <button type="submit" class="glow-btn glow-btn-primary btn-submit" :disabled="isSending">
                  <span v-if="isSending">Enviando...</span>
                  <span v-else-if="isSent" class="sent-success">¡Enviado con éxito!</span>
                  <span v-else>
                    Enviar Mensaje
                    <Send class="btn-icon" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="footer-panel">
      <div class="container footer-content">
        <p>&copy; {{ currentYear }} Johnny Pesántez Ríos. Diseñado con Vue 3, Bento Grids y Micro-Líquido.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Bento Specific Grid Layout Span Adjustments */
.col-span-5 { grid-column: span 5; }
.col-span-7 { grid-column: span 7; }
.col-span-12 { grid-column: span 12; }
.row-span-2 { grid-row: span 2; }

@media (max-width: 1024px) {
  .col-span-5, .col-span-7, .col-span-12 {
    grid-column: span 6;
  }
}

@media (max-width: 768px) {
  .col-span-5, .col-span-7, .col-span-12, .row-span-2 {
    grid-column: span 12;
    grid-row: auto;
  }
}

.bento-pad {
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.bento-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.bento-header-icon {
  width: 22px;
  height: 22px;
  color: var(--color-cyan);
}

.bento-card-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
}

.objective-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Quick Contact Bento Card Grid */
.quick-contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .quick-contact-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .col-span-2-mobile {
    grid-column: span 1;
  }
}

.quick-contact-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
}

a.quick-contact-item:hover {
  transform: translateY(-2px);
}

.quick-icon {
  width: 24px;
  height: 24px;
  color: var(--color-indigo);
  flex-shrink: 0;
}

a.quick-contact-item:hover .quick-icon {
  color: var(--color-cyan);
  filter: drop-shadow(0 0 5px var(--color-cyan));
}

.quick-contact-item span {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 0.15rem;
}

.quick-contact-item strong {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
  word-break: break-all;
}

/* Global App elements */
.app-layout {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Nav Dock styling */
.nav-dock-container {
  position: fixed;
  top: 1.5rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 50;
  padding: 0 1rem;
}

.nav-dock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  padding: 0.75rem 2rem;
  border-radius: 40px !important;
  background: rgba(8, 5, 20, 0.5) !important;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-primary);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 1.1rem;
}

.logo-icon {
  width: 20px;
  height: 20px;
  color: var(--color-cyan);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

@media (max-width: 600px) {
  .nav-links {
    gap: 0.8rem;
  }
  .nav-links a {
    font-size: 0.8rem;
  }
  .nav-dock {
    padding: 0.75rem 1rem;
  }
  .nav-logo span {
    display: none;
  }
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-family: var(--font-title);
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary);
  transform: translateY(-1px);
}

/* Hero Section */
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  position: relative;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-intro {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.intro-badge {
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-cyan);
  border: 1px solid rgba(6, 182, 212, 0.3);
  background: rgba(6, 182, 212, 0.08);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  letter-spacing: 0.05em;
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.1);
  display: inline-block;
}

.hero-name {
  font-size: 3.5rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, var(--text-primary) 30%, rgba(255, 255, 255, 0.6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (max-width: 768px) {
  .hero-name {
    font-size: 2.5rem;
  }
}

.subtitle-wrap {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
}

.role-text {
  font-family: var(--font-title);
  font-size: 1.15rem;
  font-weight: 600;
}

.divider {
  color: rgba(255, 255, 255, 0.15);
  font-weight: 300;
}

.hero-bio {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 720px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

/* Projects grid styling */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.contact-info-panel {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-info-panel h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.contact-info-panel p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.detail-icon {
  width: 24px;
  height: 24px;
  color: var(--color-indigo);
  flex-shrink: 0;
}

.detail-item h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  font-weight: 700;
  margin-bottom: 0.15rem;
}

.detail-item a, .detail-item span {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.detail-item a:hover {
  color: var(--color-cyan);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.social-icon-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-icon-btn:hover {
  background: rgba(99, 102, 241, 0.15);
  color: var(--text-primary);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.2);
}

/* Contact Form */
.contact-form-panel {
  padding: 3rem;
}

@media (max-width: 480px) {
  .contact-info-panel, .contact-form-panel {
    padding: 2rem;
  }
}

.contact-form-panel form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.form-input {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.85rem 1.1rem;
  border-radius: 10px;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  outline: none;
}

.form-input:focus {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--color-indigo);
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.15);
}

.btn-submit {
  justify-content: center;
  padding: 1rem;
}

.sent-success {
  color: var(--color-indigo);
  font-weight: 600;
}

/* Footer */
.footer-panel {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem 0;
  text-align: center;
  background: rgba(4, 2, 10, 0.8);
  z-index: 10;
  position: relative;
}

.footer-content p {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Liquid distortions on background blobs */
.liquid-blob {
  filter: url(#liquid-glass-filter) blur(70px);
}
</style>
