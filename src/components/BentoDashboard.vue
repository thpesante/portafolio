<script setup lang="ts">
import { ref } from 'vue'
import { Briefcase, GraduationCap, Users, User, CheckCircle2, Mail, Phone, Calendar, MapPin, Award } from '@lucide/vue'

const activeTab = ref<'work' | 'education' | 'references' | 'personal'>('work')

interface Job {
  company: string
  role: string
  period: string
  details: string[]
  tags: string[]
}

const jobs = ref<Job[]>([
  {
    company: 'MULTIPROPOSITOS BP - DESPACHOS',
    role: 'Recepción, Custodia y Servicio al Cliente',
    period: '01-08-2023 - Presente',
    details: [
      'Recepción y custodia de flujo de efectivo operativo.',
      'Cierre y cuadre diario de cajas de venta de combustible.',
      'Servicio al cliente y soporte en operaciones comerciales diarias.'
    ],
    tags: ['Custodio de Dinero', 'Cuadre de Cajas', 'Servicio al Cliente']
  },
  {
    company: 'Ishida Industria Del Software',
    role: 'Desarrollador de Software & Técnico',
    period: '20-11-2022 - 21-08-2023',
    details: [
      'Desarrollo de aplicaciones móviles basadas en Android utilizando Java y Kotlin según requerimientos específicos.',
      'Mantenimiento y soporte de sistemas existentes basados en Visual Basic y Python.',
      'Manejo de reportes y liderazgo de proyectos con un equipo de 4 personas bajo mi responsabilidad.'
    ],
    tags: ['Kotlin', 'Java', 'Android SDK', 'Python', 'Liderazgo de Equipos']
  },
  {
    company: 'Distrivasor Cia Ltda (Macova)',
    role: 'Técnico en Sistemas',
    period: '01-10-2017 - 01-08-2021',
    details: [
      'Soporte técnico integral de sistemas de facturación en las 6 sucursales de la cadena ferretera Macova.',
      'Mantenimiento de hardware, redes y enlaces inalámbricos de antena punto a punto.',
      'Instalación y mantenimiento de equipos de oficina (impresoras y lectoras de códigos de barras).',
      'Manejo de inventarios tecnológicos e implementación de mejoras en sucursales.'
    ],
    tags: ['Redes Punto a Punto', 'Mantenimiento Hardware', 'Sistemas de Facturación', 'Inventarios']
  }
])

interface Study {
  institution: string
  title: string
  period: string
  status: string
  location: string
}

const studies = ref<Study[]>([
  {
    institution: 'LinkedIn & Microsoft',
    title: 'Desarrollador Terciario/Técnico',
    period: '01-11-2022 - 01-05-2023',
    status: 'Graduado',
    location: 'Ecuador'
  },
  {
    institution: 'Unidad Educativa Santa Isabel',
    title: 'Bachiller en Ciencias Generales (Secundario)',
    period: '01-04-2010 - 01-04-2015',
    status: 'Graduado',
    location: 'Ecuador'
  }
])

interface Reference {
  name: string
  company: string
  role: string
  relationship: string
  email: string
  phone: string
}

const references = ref<Reference[]>([
  {
    name: 'HENRY ARMIJOS',
    company: 'MULTIPROPOSITOS BP - DESPACHOS',
    role: 'Custodio / Despachos',
    relationship: 'Par laboral',
    email: 'henryarmijos.dja@gmail.com',
    phone: '(593) 0981336632'
  },
  {
    name: 'Sandra Romolerux',
    company: 'Ishida Industria del Software',
    role: 'Desarrollador / Técnico',
    relationship: 'Par laboral',
    email: 'smr_par11@hotmail.com',
    phone: '(593) 0958748390'
  },
  {
    name: 'Magui Naula',
    company: 'Distrivasor Cia Ltda',
    role: 'Técnico de Soporte',
    relationship: 'Par laboral',
    email: 'magui.1996@icloud.com',
    phone: '(593) 0984359709'
  }
])

const skillsWithLevels = ref([
  { name: 'Java', level: 'Intermedio' },
  { name: 'Kotlin', level: 'Intermedio' },
  { name: 'JavaScript', level: 'Intermedio' },
  { name: 'Python', level: 'Intermedio' },
  { name: 'SQL', level: 'Intermedio' },
  { name: 'Excelerator', level: 'Intermedio' },
  { name: 'Microsoft Office', level: 'Avanzado' }
])
</script>

<template>
  <div class="dashboard-panel">
    <!-- Navigation Tabs -->
    <div class="dashboard-tabs">
      <button 
        @click="activeTab = 'work'"
        :class="{ 'active': activeTab === 'work' }"
        class="tab-btn"
      >
        <Briefcase class="tab-icon" />
        <span>Experiencia</span>
      </button>
      
      <button 
        @click="activeTab = 'education'"
        :class="{ 'active': activeTab === 'education' }"
        class="tab-btn"
      >
        <GraduationCap class="tab-icon" />
        <span>Estudios</span>
      </button>
      
      <button 
        @click="activeTab = 'references'"
        :class="{ 'active': activeTab === 'references' }"
        class="tab-btn"
      >
        <Users class="tab-icon" />
        <span>Referencias</span>
      </button>
      
      <button 
        @click="activeTab = 'personal'"
        :class="{ 'active': activeTab === 'personal' }"
        class="tab-btn"
      >
        <User class="tab-icon" />
        <span>Perfil</span>
      </button>
    </div>
    
    <!-- Tab View Screen -->
    <div class="dashboard-content-screen">
      <!-- WORK EXPERIENCE -->
      <Transition name="fade" mode="out-in">
        <div v-if="activeTab === 'work'" key="work" class="tab-view">
          <div class="work-history">
            <div v-for="job in jobs" :key="job.company" class="work-item">
              <div class="work-header">
                <div class="work-title">
                  <h3>{{ job.role }}</h3>
                  <h4>{{ job.company }}</h4>
                </div>
                <span class="work-period">{{ job.period }}</span>
              </div>
              <ul class="work-details">
                <li v-for="(detail, index) in job.details" :key="index">
                  <CheckCircle2 class="detail-bullet" />
                  <span>{{ detail }}</span>
                </li>
              </ul>
              <div class="work-tags">
                <span v-for="tag in job.tags" :key="tag" class="work-tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- EDUCATION -->
        <div v-else-if="activeTab === 'education'" key="education" class="tab-view">
          <div class="education-history">
            <div v-for="edu in studies" :key="edu.title" class="edu-item">
              <div class="edu-icon-wrap">
                <GraduationCap />
              </div>
              <div class="edu-details">
                <span class="edu-period">{{ edu.period }}</span>
                <h3>{{ edu.title }}</h3>
                <h4>{{ edu.institution }}</h4>
                <p>{{ edu.location }} • <span class="badge-status">{{ edu.status }}</span></p>
              </div>
            </div>
          </div>
        </div>

        <!-- REFERENCES -->
        <div v-else-if="activeTab === 'references'" key="references" class="tab-view">
          <div class="references-grid">
            <div v-for="refItem in references" :key="refItem.name" class="reference-card glass-panel">
              <h3>{{ refItem.name }}</h3>
              <p class="ref-relation">{{ refItem.relationship }} en <strong>{{ refItem.company }}</strong></p>
              <div class="ref-contacts">
                <div class="ref-contact-row">
                  <Mail class="ref-icon" />
                  <a :href="`mailto:${refItem.email}`">{{ refItem.email }}</a>
                </div>
                <div class="ref-contact-row">
                  <Phone class="ref-icon" />
                  <a :href="`tel:${refItem.phone.replace(/[^0-9+]/g, '')}`">{{ refItem.phone }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PERSONAL PROFILE & OTHER SKILLS -->
        <div v-else-if="activeTab === 'personal'" key="personal" class="tab-view">
          <div class="personal-details-layout">
            <div class="personal-info-col">
              <h3 class="subsection-title">Datos Personales</h3>
              <div class="info-list">
                <div class="info-row">
                  <Calendar class="info-icon" />
                  <div>
                    <span>Fecha de Nacimiento</span>
                    <strong>12-10-1997</strong>
                  </div>
                </div>
                <div class="info-row">
                  <User class="info-icon" />
                  <div>
                    <span>Estado Civil / DNI</span>
                    <strong>Unión Libre (DNI: 0106796659)</strong>
                  </div>
                </div>
                <div class="info-row">
                  <MapPin class="info-icon" />
                  <div>
                    <span>Dirección</span>
                    <strong>Panamericana sur km 12, Santa Isabel, Azuay, Ecuador</strong>
                  </div>
                </div>
                <div class="info-row">
                  <Award class="info-icon" />
                  <div>
                    <span>Idiomas</span>
                    <strong>Español (Nativo) / Inglés (Básico)</strong>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="skills-levels-col">
              <h3 class="subsection-title">Nivel de Conocimiento</h3>
              <div class="levels-grid">
                <div v-for="skill in skillsWithLevels" :key="skill.name" class="level-bar-item">
                  <div class="level-item-header">
                    <span>{{ skill.name }}</span>
                    <span class="level-badge" :class="skill.level.toLowerCase()">{{ skill.level }}</span>
                  </div>
                  <div class="level-track">
                    <div class="level-fill" :class="skill.level.toLowerCase()"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.dashboard-panel {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1rem;
  min-height: 480px;
}

@media (max-width: 768px) {
  .dashboard-panel {
    grid-template-columns: 1fr;
  }
}

.dashboard-tabs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0.75rem;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .dashboard-tabs {
    flex-direction: row;
    overflow-x: auto;
  }
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.8rem 1rem;
  border: 1px solid transparent;
  background: transparent;
  color: var(--text-secondary);
  border-radius: 8px;
  cursor: pointer;
  font-family: var(--font-title);
  font-weight: 500;
  text-align: left;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (max-width: 768px) {
  .tab-btn {
    white-space: nowrap;
  }
}

.tab-btn:hover {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-primary);
}

.tab-btn.active {
  background: rgba(99, 102, 241, 0.12);
  border-color: rgba(99, 102, 241, 0.25);
  color: var(--text-primary);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.1);
}

.tab-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.dashboard-content-screen {
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  min-height: 400px;
  overflow-y: auto;
}

@media (max-width: 480px) {
  .dashboard-content-screen {
    padding: 1.25rem;
  }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Work Details styling */
.work-history {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
}

.work-item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.work-item:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: -1.25rem;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.05), transparent);
}

.work-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

@media (max-width: 640px) {
  .work-header {
    flex-direction: column;
    gap: 0.35rem;
  }
}

.work-title h3 {
  font-size: 1.2rem;
  color: var(--text-primary);
  font-weight: 600;
}

.work-title h4 {
  font-size: 0.95rem;
  color: var(--color-cyan);
  font-weight: 500;
}

.work-period {
  font-family: var(--font-title);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.25rem 0.65rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.work-details {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.work-details li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.detail-bullet {
  width: 16px;
  height: 16px;
  color: var(--color-indigo);
  margin-top: 0.15rem;
  flex-shrink: 0;
}

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.work-tag {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255,255,255,0.6);
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

/* Education styling */
.education-history {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.edu-item {
  display: flex;
  gap: 1.25rem;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.04);
  padding: 1.5rem;
  border-radius: 12px;
  transition: border-color 0.3s ease;
}

.edu-item:hover {
  border-color: rgba(99, 102, 241, 0.2);
}

.edu-icon-wrap {
  width: 48px;
  height: 48px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-indigo);
  flex-shrink: 0;
}

.edu-details {
  display: flex;
  flex-direction: column;
}

.edu-period {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.edu-details h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.15rem;
}

.edu-details h4 {
  font-size: 0.95rem;
  color: var(--color-cyan);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.edu-details p {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.badge-status {
  color: var(--color-indigo);
  font-weight: 600;
}

/* References styling */
.references-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.reference-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02) !important;
}

.reference-card h3 {
  font-size: 1.15rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.ref-relation {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  line-height: 1.4;
}

.ref-contacts {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 1rem;
}

.ref-contact-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.ref-icon {
  width: 14px;
  height: 14px;
  color: var(--color-indigo);
}

.ref-contact-row a {
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.ref-contact-row a:hover {
  color: var(--text-primary);
}

/* Personal Details layout */
.personal-details-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .personal-details-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.subsection-title {
  font-size: 1.15rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
}

.subsection-title::after {
  content: '';
  flex-grow: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent);
  margin-left: 1rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-row {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-icon {
  width: 20px;
  height: 20px;
  color: var(--color-cyan);
  margin-top: 0.2rem;
}

.info-row span {
  display: block;
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin-bottom: 0.15rem;
}

.info-row strong {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
}

/* Level indicator styling */
.levels-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.level-bar-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.level-item-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 500;
}

.level-badge {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.level-badge.intermedio {
  background: rgba(6, 182, 212, 0.1);
  color: var(--color-cyan);
}

.level-badge.avanzado {
  background: rgba(99, 102, 241, 0.1);
  color: var(--color-indigo);
}

.level-track {
  height: 5px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  border-radius: 3px;
}

.level-fill.intermedio {
  width: 65%;
  background: var(--color-cyan);
}

.level-fill.avanzado {
  width: 90%;
  background: var(--color-indigo);
}
</style>
