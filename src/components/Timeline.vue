<script setup lang="ts">
import { ref } from 'vue'
import { Briefcase, Calendar, CheckSquare } from '@lucide/vue'

interface Experience {
  id: string
  company: string
  role: string
  period: string
  techs: string[]
  achievements: string[]
}

const experiences = ref<Experience[]>([
  {
    id: 'multi',
    company: 'Multipropósitos',
    role: 'Líder de Proyectos & Desarrollador de Software',
    period: '2024 - Presente',
    techs: ['Kotlin', 'Java', 'Android SDK', 'REST APIs', 'Soporte Técnico'],
    achievements: [
      'Liderazgo y planificación técnica de proyectos de software para optimización de procesos internos.',
      'Desarrollo e integración de APIs robustas en Kotlin y Java para la comunicación de sistemas móviles.',
      'Soporte y diagnóstico especializado de infraestructura de software y bases de datos.'
    ]
  },
  {
    id: 'distri',
    company: 'Distrivasor',
    role: 'Desarrollador Backend & Mantenimiento de Sistemas',
    period: '2022 - 2024',
    techs: ['Java', 'Python', 'PostgreSQL', 'Automatización', 'Sistemas de Escritorio'],
    achievements: [
      'Mantenimiento correctivo y evolutivo de sistemas de gestión empresarial escritos en Java.',
      'Implementación de scripts en Python para automatización de tareas de base de datos y reportes.',
      'Soporte técnico de segundo nivel reduciendo tiempos de inactividad de sistemas.'
    ]
  },
  {
    id: 'ishida',
    company: 'Ishida',
    role: 'Desarrollador Junior & Soporte de Sistemas',
    period: '2020 - 2022',
    techs: ['Java', 'Kotlin', 'Bases de Datos', 'Diagnóstico de Sistemas'],
    achievements: [
      'Colaboración en el mantenimiento de módulos de software heredados optimizando su velocidad.',
      'Resolución técnica de incidencias en bases de datos y redes de comunicación locales.',
      'Soporte técnico integral a usuarios, asegurando la continuidad del servicio de software.'
    ]
  }
])

const hoveredItem = ref<string | null>(null)
</script>

<template>
  <div class="timeline-wrapper">
    <div class="timeline-line"></div>
    
    <div class="timeline-items">
      <div 
        v-for="exp in experiences" 
        :key="exp.id"
        class="timeline-item"
        :class="{ 'is-hovered': hoveredItem === exp.id }"
        @mouseenter="hoveredItem = exp.id"
        @mouseleave="hoveredItem = null"
      >
        <!-- Connector node with glow -->
        <div class="timeline-node">
          <div class="node-glow"></div>
          <Briefcase class="node-icon" />
        </div>
        
        <!-- Experience content card -->
        <div class="timeline-content glass-panel">
          <div class="card-header">
            <div class="header-main">
              <span class="period-badge">
                <Calendar class="period-icon" />
                {{ exp.period }}
              </span>
              <h3>{{ exp.role }}</h3>
              <h4>{{ exp.company }}</h4>
            </div>
          </div>
          
          <div class="card-body">
            <ul class="achievements-list">
              <li v-for="(achievement, idx) in exp.achievements" :key="idx">
                <CheckSquare class="bullet-icon" />
                <span>{{ achievement }}</span>
              </li>
            </ul>
            
            <div class="tech-tags">
              <span v-for="tech in exp.techs" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-wrapper {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 0;
}

.timeline-line {
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, 
    var(--color-primary) 0%, 
    var(--color-secondary) 50%, 
    rgba(99, 102, 241, 0.05) 100%
  );
  z-index: 1;
}

@media (max-width: 768px) {
  .timeline-line {
    left: 20px;
  }
}

.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.timeline-item {
  position: relative;
  display: flex;
  gap: 2.5rem;
  z-index: 2;
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .timeline-item {
    gap: 1.5rem;
  }
}

.timeline-node {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  flex-shrink: 0;
  z-index: 3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

@media (max-width: 768px) {
  .timeline-node {
    width: 40px;
    height: 40px;
  }
}

.node-icon {
  width: 22px;
  height: 22px;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .node-icon {
    width: 16px;
    height: 16px;
  }
}

.node-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--color-primary);
  opacity: 0;
  filter: blur(8px);
  z-index: 1;
  transition: opacity 0.3s ease;
}

.timeline-item.is-hovered .timeline-node {
  border-color: var(--color-secondary);
  color: var(--text-primary);
  transform: scale(1.1);
  box-shadow: 0 0 15px var(--glass-border-glow);
}

.timeline-item.is-hovered .node-glow {
  opacity: 0.45;
}

.timeline-content {
  flex-grow: 1;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: var(--glass-bg);
}

.timeline-item.is-hovered .timeline-content {
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
}

.card-header {
  margin-bottom: 1.5rem;
}

.header-main h3 {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}

.header-main h4 {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-secondary);
}

.period-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  font-family: var(--font-title);
}

.period-icon {
  width: 14px;
  height: 14px;
}

.achievements-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.achievements-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.bullet-icon {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.timeline-item.is-hovered .tech-tag {
  border-color: rgba(255, 255, 255, 0.12);
  color: var(--text-primary);
}
</style>
