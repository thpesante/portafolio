<script setup lang="ts">
import { ref } from 'vue'
import Card3D from './Card3D.vue'
import { ArrowRight, X, CheckCircle, ExternalLink, Smartphone, Globe } from '@lucide/vue'
import { ts, ta } from '../i18n'

interface Project {
  id: string
  titleKey: string
  descKey: string
  longDescKey: string
  featuresKey: string
  techs: string[]
  type: 'mobile' | 'web' | 'both'
  gradient: string
  roleKey: string
  image: string
  playStoreUrl?: string
  webUrl?: string
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
        <!-- Project Screenshot -->
        <div class="project-header-visual">
          <img :src="project.image" :alt="ts(project.titleKey)" class="project-screenshot" />
          <div class="screenshot-overlay"></div>
          <div class="type-badge-wrap">
            <span class="tech-type-badge">{{ project.type.toUpperCase() }}</span>
          </div>
        </div>
        
        <!-- Text details -->
        <div class="project-info">
          <h3 class="project-title">{{ ts(project.titleKey) }}</h3>
          <p class="project-desc">{{ ts(project.descKey) }}</p>
          
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
            {{ ts('viewDetails') }}
            <ArrowRight class="btn-icon" />
          </button>
        </div>
      </div>
    </Card3D>

    <!-- Details Modal Overlay -->
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
                  <h2>{{ ts(project.titleKey) }}</h2>
                  <p class="modal-role">{{ ts(project.roleKey) }}</p>
                </div>
                <div class="modal-screenshot-wrap">
                  <img :src="project.image" :alt="ts(project.titleKey)" class="modal-screenshot" />
                </div>
              </div>
              
              <!-- Right Col: Features & Tech -->
              <div class="modal-right">
                <h3 class="modal-section-title">{{ ts('aboutProject') }}</h3>
                <p class="modal-description">{{ ts(project.longDescKey) }}</p>
                
                <h3 class="modal-section-title">{{ ts('keyFeatures') }}</h3>
                <ul class="modal-features-list">
                  <li v-for="feature in ta(project.featuresKey)" :key="feature">
                    <CheckCircle class="feature-icon" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
                
                <h3 class="modal-section-title">{{ ts('techUsed') }}</h3>
                <div class="modal-tech-badges">
                  <span v-for="tech in project.techs" :key="tech" class="modal-tech-badge">
                    {{ tech }}
                  </span>
                </div>

                <!-- Live links -->
                <div v-if="project.playStoreUrl || project.webUrl" class="modal-links">
                  <h3 class="modal-section-title">{{ ts('liveLinks') }}</h3>
                  <div class="links-row">
                    <a v-if="project.playStoreUrl" :href="project.playStoreUrl" target="_blank" class="live-link">
                      <Smartphone class="link-icon" />
                      {{ ts('playStore') }}
                      <ExternalLink class="ext-icon" />
                    </a>
                    <a v-if="project.webUrl" :href="project.webUrl" target="_blank" class="live-link">
                      <Globe class="link-icon" />
                      {{ ts('webApp') }}
                      <ExternalLink class="ext-icon" />
                    </a>
                  </div>
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
}

.project-header-visual {
  height: 200px;
  position: relative;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
}

.project-screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.project-card-container:hover .project-screenshot {
  transform: scale(1.05);
}

.screenshot-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(8, 5, 20, 0.95) 0%, transparent 100%);
  z-index: 1;
}

.type-badge-wrap {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 2;
}

.tech-type-badge {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
  font-family: var(--font-title);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text-primary);
}

.project-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 1.35rem;
  margin-bottom: 0.6rem;
  color: var(--text-primary);
  font-weight: 700;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

.project-tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.2rem 0.55rem;
  border-radius: 5px;
  font-size: 0.72rem;
  color: var(--color-cyan);
}

.tech-badge-more {
  padding: 0.2rem 0.55rem;
  border-radius: 5px;
  font-size: 0.72rem;
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
  font-size: 0.9rem;
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
  background: linear-gradient(90deg, var(--color-cyan), var(--color-indigo));
  transition: width 0.3s ease;
}

.btn-details:hover { color: var(--color-cyan); }
.btn-details:hover::after { width: 100%; }
.btn-icon { width: 15px; height: 15px; transition: transform 0.3s ease; }
.btn-details:hover .btn-icon { transform: translateX(4px); }

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 100;
  background: rgba(3, 1, 7, 0.7);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-content {
  width: 100%;
  max-width: 950px;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: rgba(10, 7, 24, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.7);
}

.btn-close {
  position: absolute;
  top: 1rem; right: 1rem;
  z-index: 10;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  width: 36px; height: 36px;
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
  .modal-layout { grid-template-columns: 1fr; }
  .modal-left { height: 220px; padding: 2rem !important; }
  .modal-overlay { padding: 1rem; }
}

.modal-left {
  padding: 3rem 2.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal-header-info { z-index: 2; position: relative; }

.modal-type-tag {
  display: inline-block;
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-primary);
  background: rgba(0, 0, 0, 0.3);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  margin-bottom: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-left h2 { font-size: 2rem; margin-bottom: 0.35rem; text-shadow: 0 4px 10px rgba(0,0,0,0.4); }
.modal-role { color: var(--text-primary); opacity: 0.9; font-weight: 500; }

.modal-screenshot-wrap {
  position: absolute;
  bottom: 0; right: 0;
  width: 85%; height: 55%;
  z-index: 1;
  overflow: hidden;
  border-radius: 8px 0 0 0;
  opacity: 0.25;
}

.modal-screenshot { width: 100%; height: 100%; object-fit: cover; object-position: top; }

.modal-right {
  padding: 3rem 2.5rem;
  overflow-y: auto;
  max-height: 80vh;
}

@media (max-width: 768px) {
  .modal-right { padding: 2rem; max-height: 60vh; }
}

.modal-section-title {
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  margin-top: 1.25rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.modal-section-title:first-of-type { margin-top: 0; }
.modal-description { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }

.modal-features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.modal-features-list li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.feature-icon { width: 16px; height: 16px; color: #10b981; flex-shrink: 0; }

.modal-tech-badges { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.modal-tech-badge {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  color: var(--text-primary);
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.78rem;
}

.modal-links { margin-top: 0.5rem; }

.links-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }

.live-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.live-link:hover {
  background: rgba(99, 102, 241, 0.12);
  border-color: rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}

.link-icon { width: 16px; height: 16px; color: var(--color-cyan); }
.ext-icon { width: 12px; height: 12px; color: var(--text-secondary); }

/* Transitions */
.modal-enter-active, .modal-leave-active { transition: opacity 0.35s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active .modal-content, .modal-leave-active .modal-content { transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.modal-enter-from .modal-content { transform: scale(0.92) translateY(25px); }
.modal-leave-to .modal-content { transform: scale(0.95) translateY(15px); }
</style>
