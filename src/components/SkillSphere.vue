<script setup lang="ts">
import { ref, computed } from 'vue'
import { Monitor, Server, Smartphone, Wrench, Users, Sparkles } from '@lucide/vue'
import { ts } from '../i18n'

interface Skill {
  name: string
  color: string
  tag?: string
  level?: number // 1 to 5 for meter
}

interface SkillCategory {
  titleKey: string
  icon: any
  gradient: string
  accentColor: string
  skills: Skill[]
}

const rawCategories: SkillCategory[] = [
  {
    titleKey: 'catFrontend',
    icon: Monitor,
    gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.05))',
    accentColor: '#06b6d4',
    skills: [
      { name: 'React', color: '#06b6d4', tag: 'Core', level: 5 },
      { name: 'TypeScript', color: '#3178c6', tag: 'Typed', level: 5 },
      { name: 'JavaScript', color: '#f7df1e', tag: 'ES6+', level: 5 },
      { name: 'Vite', color: '#bd34fe', tag: 'Build', level: 4 },
      { name: 'HTML5', color: '#e34f26', tag: 'Web', level: 5 },
      { name: 'CSS3 / UI', color: '#1572b6', tag: 'Style', level: 5 }
    ]
  },
  {
    titleKey: 'catMobile',
    icon: Smartphone,
    gradient: 'linear-gradient(135deg, rgba(127, 82, 255, 0.15), rgba(168, 85, 247, 0.05))',
    accentColor: '#a855f7',
    skills: [
      { name: 'Kotlin', color: '#7f52ff', tag: 'Android', level: 5 },
      { name: 'Java', color: '#f89820', tag: 'OOP', level: 4 },
      { name: 'Android Studio', color: '#3ddc84', tag: 'IDE', level: 5 }
    ]
  },
  {
    titleKey: 'catBackend',
    icon: Server,
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(52, 211, 153, 0.05))',
    accentColor: '#10b981',
    skills: [
      { name: 'Supabase', color: '#3ecf8e', tag: 'BaaS', level: 5 },
      { name: 'Firebase', color: '#ffca28', tag: 'Cloud', level: 5 },
      { name: 'PostgreSQL', color: '#336791', tag: 'SQL', level: 4 },
      { name: 'REST API', color: '#06b6d4', tag: 'HTTP', level: 5 }
    ]
  },
  {
    titleKey: 'catTools',
    icon: Wrench,
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(234, 88, 12, 0.05))',
    accentColor: '#f59e0b',
    skills: [
      { name: 'Git & GitHub', color: '#f05032', tag: 'VCS', level: 5 },
      { name: 'Vercel', color: '#ffffff', tag: 'Deploy', level: 5 },
      { name: 'FCM Notifications', color: '#ff9800', tag: 'Push', level: 4 },
      { name: 'PayPhone SDK', color: '#ea580c', tag: 'Payments', level: 4 }
    ]
  },
  {
    titleKey: 'catOther',
    icon: Users,
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.05))',
    accentColor: '#ec4899',
    skills: [
      { name: 'Soporte Técnico', color: '#8b5cf6', tag: 'IT Support', level: 5 },
      { name: 'Redes y Hardware', color: '#06b6d4', tag: 'Infra', level: 4 },
      { name: 'Facturación POS', color: '#10b981', tag: 'Sistemas', level: 5 },
      { name: 'Trabajo en Equipo', color: '#ec4899', tag: 'Soft Skill', level: 5 }
    ]
  }
]

const categories = computed(() =>
  rawCategories.map(c => ({
    title: ts(c.titleKey),
    icon: c.icon,
    gradient: c.gradient,
    accentColor: c.accentColor,
    skills: c.skills
  }))
)

const activeCategoryIndex = ref<number | null>(null)
</script>

<template>
  <div class="skills-wrapper">
    <div class="skills-grid">
      <div 
        v-for="(cat, idx) in categories" 
        :key="cat.title"
        class="skills-card glass-panel"
        :class="{ 'is-active': activeCategoryIndex === idx }"
        :style="{ '--card-accent': cat.accentColor, '--card-bg': cat.gradient }"
        @mouseenter="activeCategoryIndex = idx"
        @mouseleave="activeCategoryIndex = null"
      >
        <!-- Ambient Card Glow -->
        <div class="card-glow-bg"></div>

        <!-- Header -->
        <div class="card-header">
          <div class="header-icon-box">
            <component :is="cat.icon" class="header-icon" />
          </div>
          <div class="header-text">
            <h3>{{ cat.title }}</h3>
            <span class="skill-count">
              <Sparkles class="count-sparkle" />
              {{ cat.skills.length }} Skills
            </span>
          </div>
        </div>

        <!-- Skills List / Grid -->
        <div class="skills-flex">
          <div 
            v-for="skill in cat.skills" 
            :key="skill.name"
            class="skill-chip"
            :style="{ '--skill-color': skill.color }"
          >
            <div class="chip-content">
              <span class="chip-dot"></span>
              <span class="chip-label">{{ skill.name }}</span>
            </div>

            <div class="chip-meta">
              <span v-if="skill.tag" class="chip-tag">{{ skill.tag }}</span>
              <!-- Mini progress bar -->
              <div v-if="skill.level" class="chip-meter">
                <div class="meter-bar" :style="{ width: (skill.level * 20) + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-wrapper {
  width: 100%;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

.skills-card {
  position: relative;
  border-radius: 20px;
  padding: 1.8rem;
  background: rgba(12, 9, 28, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card-glow-bg {
  position: absolute;
  top: -40%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: var(--card-bg);
  pointer-events: none;
  opacity: 0.4;
  transition: opacity 0.4s ease;
  z-index: 0;
  filter: blur(40px);
}

.skills-card:hover {
  transform: translateY(-5px);
  border-color: var(--card-accent) !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(var(--card-accent), 0.2);
}

.skills-card:hover .card-glow-bg {
  opacity: 0.85;
}

.card-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.header-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--card-accent);
  transition: all 0.3s ease;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.02);
}

.skills-card:hover .header-icon-box {
  background: var(--card-accent);
  color: #000;
  box-shadow: 0 0 15px var(--card-accent);
  transform: scale(1.08) rotate(-3deg);
}

.header-icon {
  width: 24px;
  height: 24px;
}

.header-text h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.skill-count {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  font-family: var(--font-title);
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.2rem;
}

.count-sparkle {
  width: 12px;
  height: 12px;
  color: var(--card-accent);
}

/* Skills Chips Flex */
.skills-flex {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.skill-chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.9rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.chip-content {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.chip-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--skill-color);
  box-shadow: 0 0 8px var(--skill-color);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.chip-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.chip-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.chip-tag {
  font-family: var(--font-title);
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--skill-color);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  white-space: nowrap;
}

.chip-meter {
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
}

.meter-bar {
  height: 100%;
  background: var(--skill-color);
  border-radius: 2px;
  box-shadow: 0 0 6px var(--skill-color);
  transition: width 0.4s ease;
}

/* Hover effect on skill chip */
.skill-chip:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--skill-color);
  transform: translateX(4px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.skill-chip:hover .chip-dot {
  transform: scale(1.4);
}
</style>
