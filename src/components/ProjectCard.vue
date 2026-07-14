<script setup lang="ts">
import { ref } from 'vue'
import Card3D from './Card3D.vue'
import { ArrowRight, X, CheckCircle } from '@lucide/vue'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techs: string[]
  features: string[]
  type: 'mobile' | 'web' | 'both'
  gradient: string
  role: string
}

defineProps<{
  project: Project
}>()

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <div class="project-card-container">
    <Card3D>
      <div class="project-content">
        <!-- Visual Accent Header -->
        <div class="project-header-visual" :style="{ background: project.gradient }">
          <div class="spatial-layer icon-wrapper">
            <span class="tech-type-badge">{{ project.type.toUpperCase() }}</span>
          </div>
        </div>
        
        <!-- Text details -->
        <div class="project-info">
          <h3 class="spatial-layer project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          
          <!-- Tech List -->
          <div class="project-tech-badges">
            <span v-for="tech in project.techs.slice(0, 3)" :key="tech" class="tech-badge">
              {{ tech }}
            </span>
            <span v-if="project.techs.length > 3" class="tech-badge-more">
              +{{ project.techs.length - 3 }}
            </span>
          </div>
          
          <button @click="openModal" class="btn-details">
            Ver Detalles
            <ArrowRight class="btn-icon" />
          </button>
        </div>
      </div>
    </Card3D>

    <!-- Details Modal Overlay (Spatial UI) -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content glass-panel">
            <button class="btn-close" @click="closeModal">
              <X />
            </button>
            
            <div class="modal-layout">
              <!-- Left Col: Visual & Info -->
              <div class="modal-left" :style="{ background: project.gradient }">
                <div class="modal-header-info">
                  <span class="modal-type-tag">{{ project.type }} app</span>
                  <h2>{{ project.title }}</h2>
                  <p class="modal-role">{{ project.role }}</p>
                </div>
                <div class="visual-decor">
                  <!-- Abstract liquid glass blob shapes reflecting 3D depth -->
                  <div class="decor-circle circle-1"></div>
                  <div class="decor-circle circle-2"></div>
                </div>
              </div>
              
              <!-- Right Col: Features & Tech -->
              <div class="modal-right">
                <h3 class="modal-section-title">Sobre el Proyecto</h3>
                <p class="modal-description">{{ project.longDescription }}</p>
                
                <h3 class="modal-section-title">Funcionalidades Clave</h3>
                <ul class="modal-features-list">
                  <li v-for="feature in project.features" :key="feature">
                    <CheckCircle class="feature-icon" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
                
                <h3 class="modal-section-title">Tecnologías Utilizadas</h3>
                <div class="modal-tech-badges">
                  <span v-for="tech in project.techs" :key="tech" class="modal-tech-badge">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.project-card-container {
  height: 100%;
}

.project-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 1.5rem;
}

.project-header-visual {
  height: 160px;
  position: relative;
  border-radius: 19px 19px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-header-visual::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
  z-index: 1;
}

.icon-wrapper {
  transform: translateZ(40px);
  z-index: 2;
}

.tech-type-badge {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.project-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  transform-style: preserve-3d;
}

.project-title {
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  transform: translateZ(30px);
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  color: var(--color-secondary);
}

.tech-badge-more {
  background: rgba(255, 255, 255, 0.04);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.btn-details {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.btn-details::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
  transition: width 0.3s ease;
}

.btn-details:hover {
  color: var(--color-secondary);
}

.btn-details:hover::after {
  width: 100%;
}

.btn-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.btn-details:hover .btn-icon {
  transform: translateX(4px);
}

/* Modal Overlay & Transitions */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(4, 2, 10, 0.65);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-content {
  width: 100%;
  max-width: 900px;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: rgba(10, 7, 24, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.6);
}

.btn-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 10;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-close:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1) rotate(90deg);
}

.modal-layout {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  min-height: 500px;
}

@media (max-width: 768px) {
  .modal-layout {
    grid-template-columns: 1fr;
  }
  .modal-left {
    padding: 3rem 2rem 2rem 2rem !important;
    height: 200px;
  }
  .modal-overlay {
    padding: 1rem;
  }
}

.modal-left {
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-header-info {
  z-index: 2;
  position: relative;
}

.modal-type-tag {
  display: inline-block;
  font-family: var(--font-title);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-primary);
  background: rgba(0, 0, 0, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-left h2 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.modal-role {
  color: var(--text-primary);
  opacity: 0.9;
  font-weight: 500;
  font-size: 1rem;
}

.visual-decor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.decor-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.decor-circle.circle-1 {
  width: 200px;
  height: 200px;
  top: -50px;
  right: -50px;
}

.decor-circle.circle-2 {
  width: 120px;
  height: 120px;
  bottom: 20px;
  left: -20px;
}

.modal-right {
  padding: 4rem 3rem;
  overflow-y: auto;
  max-height: 80vh;
}

@media (max-width: 768px) {
  .modal-right {
    padding: 2rem;
    max-height: 60vh;
  }
}

.modal-section-title {
  font-size: 1.15rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
}

.modal-section-title:first-of-type {
  margin-top: 0;
}

.modal-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.modal-features-list {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

.modal-features-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.feature-icon {
  width: 18px;
  height: 18px;
  color: var(--color-success);
  flex-shrink: 0;
}

.modal-tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.modal-tech-badge {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  color: var(--text-primary);
  padding: 0.35rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
}

/* Vue Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-enter-from .modal-content {
  transform: scale(0.9) translateY(30px);
}

.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(15px);
}
</style>
