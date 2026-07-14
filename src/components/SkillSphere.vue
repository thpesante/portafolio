<script setup lang="ts">
import { ref } from 'vue'
import { Monitor, Server, Smartphone, Award } from '@lucide/vue'

interface Skill {
  name: string
  color: string // CSS color value for customized glow
}

interface SkillCategory {
  title: string
  icon: any
  skills: Skill[]
}

const categories = ref<SkillCategory[]>([
  {
    title: 'Frontend',
    icon: Monitor,
    skills: [
      { name: 'React', color: '#06b6d4' },
      { name: 'Vue 3', color: '#10b981' },
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'HTML5', color: '#e34f26' },
      { name: 'CSS3', color: '#1572b6' },
      { name: 'Vite', color: '#bd34fe' }
    ]
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: [
      { name: 'Kotlin', color: '#7f52ff' },
      { name: 'Java', color: '#f89820' },
      { name: 'Android Studio', color: '#3ddc84' },
      { name: 'Material Design', color: '#00f2fe' }
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Firebase', color: '#ffca28' },
      { name: 'Supabase', color: '#3ecf8e' },
      { name: 'Firestore', color: '#ffa000' },
      { name: 'Realtime DB', color: '#ff8f00' },
      { name: 'REST API', color: '#0284c7' },
      { name: 'Firebase Auth', color: '#f59e0b' }
    ]
  },
  {
    title: 'Herramientas y Otros',
    icon: Award,
    skills: [
      { name: 'Git', color: '#f05032' },
      { name: 'GitHub', color: '#f5f5f7' },
      { name: 'Vercel', color: '#ffffff' },
      { name: 'PayPhone API', color: '#ea580c' }
    ]
  }
])

const activeCategoryIndex = ref<number | null>(null)
</script>

<template>
  <div class="skills-section-wrapper">
    <div class="skills-grid">
      <div 
        v-for="(cat, idx) in categories" 
        :key="cat.title"
        class="skills-category-card glass-panel"
        :class="{ 'focused': activeCategoryIndex === idx }"
        @mouseenter="activeCategoryIndex = idx"
        @mouseleave="activeCategoryIndex = null"
      >
        <div class="category-header">
          <div class="category-icon-bg">
            <component :is="cat.icon" class="category-icon" />
          </div>
          <h3>{{ cat.title }}</h3>
        </div>
        
        <div class="category-skills-list">
          <div 
            v-for="skill in cat.skills" 
            :key="skill.name"
            class="skill-item"
            :style="{ '--skill-color': skill.color }"
          >
            <span class="skill-dot"></span>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.skills-category-card {
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.skills-category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.skills-category-card:hover::before {
  transform: translateX(100%);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.category-icon-bg {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-secondary);
  transition: all 0.3s ease;
}

.skills-category-card:hover .category-icon-bg {
  background: rgba(99, 102, 241, 0.15);
  color: var(--color-primary);
  border-color: rgba(99, 102, 241, 0.3);
  transform: scale(1.1);
}

.category-icon {
  width: 22px;
  height: 22px;
}

.category-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.category-skills-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
}

@media (max-width: 480px) {
  .category-skills-list {
    grid-template-columns: 1fr;
  }
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  cursor: default;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.skill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-secondary);
  transition: all 0.3s ease;
}

.skill-name {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.3s ease;
}

/* Hover effect on skill badge with dynamic brand color variables */
.skill-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--skill-color);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.02), 0 0 5px var(--skill-color);
  transform: translateY(-2px) scale(1.03);
}

.skill-item:hover .skill-dot {
  background: var(--skill-color);
  box-shadow: 0 0 8px var(--skill-color);
}

.skill-item:hover .skill-name {
  color: var(--text-primary);
}
</style>
