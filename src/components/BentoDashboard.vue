<script setup lang="ts">
import { ref, computed } from 'vue'
import { Briefcase, GraduationCap, Users, User, CheckCircle2, Mail, Phone, MapPin, Award, Globe } from '@lucide/vue'
import { ts, ta } from '../i18n'

const activeTab = ref<'work' | 'education' | 'references' | 'personal'>('work')

const jobs = computed(() => [
  {
    id: 'freelance',
    company: ts('job1Company'),
    role: ts('job1Role'),
    period: ts('job1Period'),
    details: ta('job1Details'),
    tags: ta('job1Tags') as unknown as string[]
  },
  {
    id: 'ishida',
    company: ts('job2Company'),
    role: ts('job2Role'),
    period: ts('job2Period'),
    details: ta('job2Details'),
    tags: ta('job2Tags') as unknown as string[]
  },
  {
    id: 'multi',
    company: ts('job3Company'),
    role: ts('job3Role'),
    period: ts('job3Period'),
    details: ta('job3Details'),
    tags: ta('job3Tags') as unknown as string[]
  },
  {
    id: 'distri',
    company: ts('job4Company'),
    role: ts('job4Role'),
    period: ts('job4Period'),
    details: ta('job4Details'),
    tags: ta('job4Tags') as unknown as string[]
  }
])

const studies = computed(() => [
  {
    title: ts('edu1Title'),
    institution: ts('edu1Institution'),
    period: ts('edu1Period'),
    status: ts('edu1Status')
  },
  {
    title: ts('edu2Title'),
    institution: ts('edu2Institution'),
    period: ts('edu2Period'),
    status: ts('edu2Status')
  }
])

const references = [
  {
    name: 'Henry Armijos',
    company: 'Multipropósitos BP',
    email: 'henryarmijos.dja@gmail.com',
    phone: '+593 0981336632'
  },
  {
    name: 'Sandra Romolerux',
    company: 'Ishida Industria del Software',
    email: 'smr_par11@hotmail.com',
    phone: '+593 0958748390'
  },
  {
    name: 'Magui Naula',
    company: 'Distrivasor Cía. Ltda.',
    email: 'magui.1996@icloud.com',
    phone: '+593 0984359709'
  }
]

const skillsWithLevels = [
  { name: 'Java', level: 'Intermedio' },
  { name: 'Kotlin', level: 'Intermedio' },
  { name: 'JavaScript', level: 'Intermedio' },
  { name: 'TypeScript', level: 'Intermedio' },
  { name: 'Python', level: 'Intermedio' },
  { name: 'SQL', level: 'Intermedio' },
  { name: 'Microsoft Office', level: 'Avanzado' }
]
</script>

<template>
  <div class="dashboard-panel">
    <!-- Navigation Tabs -->
    <div class="dashboard-tabs">
      <button @click="activeTab = 'work'" :class="{ 'active': activeTab === 'work' }" class="tab-btn">
        <Briefcase class="tab-icon" />
        <span>{{ ts('tabWork') }}</span>
      </button>
      <button @click="activeTab = 'education'" :class="{ 'active': activeTab === 'education' }" class="tab-btn">
        <GraduationCap class="tab-icon" />
        <span>{{ ts('tabEducation') }}</span>
      </button>
      <button @click="activeTab = 'references'" :class="{ 'active': activeTab === 'references' }" class="tab-btn">
        <Users class="tab-icon" />
        <span>{{ ts('tabReferences') }}</span>
      </button>
      <button @click="activeTab = 'personal'" :class="{ 'active': activeTab === 'personal' }" class="tab-btn">
        <User class="tab-icon" />
        <span>{{ ts('tabProfile') }}</span>
      </button>
    </div>

    <!-- Tab Views -->
    <div class="dashboard-content-screen">
      <Transition name="fade" mode="out-in">
        <!-- WORK -->
        <div v-if="activeTab === 'work'" key="work" class="tab-view">
          <div class="work-history">
            <div v-for="job in jobs" :key="job.id" class="work-item">
              <div class="work-header">
                <div class="work-title">
                  <h3>{{ job.role }}</h3>
                  <h4>{{ job.company }}</h4>
                </div>
                <span class="work-period">{{ job.period }}</span>
              </div>
              <ul class="work-details">
                <li v-for="(detail, i) in job.details" :key="i">
                  <CheckCircle2 class="detail-bullet" />
                  <span>{{ detail }}</span>
                </li>
              </ul>
              <div class="work-tags">
                <span v-for="tag in job.tags" :key="tag" class="work-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- EDUCATION -->
        <div v-else-if="activeTab === 'education'" key="education" class="tab-view">
          <div class="education-history">
            <div v-for="edu in studies" :key="edu.title" class="edu-item">
              <div class="edu-icon-wrap"><GraduationCap /></div>
              <div class="edu-details">
                <span class="edu-period">{{ edu.period }}</span>
                <h3>{{ edu.title }}</h3>
                <h4>{{ edu.institution }}</h4>
                <p><span class="badge-status">{{ edu.status }}</span></p>
              </div>
            </div>
          </div>
        </div>

        <!-- REFERENCES -->
        <div v-else-if="activeTab === 'references'" key="references" class="tab-view">
          <div class="references-grid">
            <div v-for="refItem in references" :key="refItem.name" class="reference-card glass-panel">
              <h3>{{ refItem.name }}</h3>
              <p class="ref-relation"><strong>{{ refItem.company }}</strong></p>
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

        <!-- PERSONAL -->
        <div v-else-if="activeTab === 'personal'" key="personal" class="tab-view">
          <div class="personal-details-layout">
            <div class="personal-info-col">
              <h3 class="subsection-title">{{ ts('personalTitle') }}</h3>
              <div class="info-list">
                <div class="info-row">
                  <MapPin class="info-icon" />
                  <div>
                    <span>{{ ts('birthday') }}</span>
                    <strong>{{ ts('birthdayValue') }}</strong>
                  </div>
                </div>
                <div class="info-row">
                  <Globe class="info-icon" />
                  <div>
                    <span>{{ ts('civilStatus') }}</span>
                    <a href="https://github.com/thpesante" target="_blank"><strong>{{ ts('civilStatusValue') }}</strong></a>
                  </div>
                </div>
                <div class="info-row">
                  <Globe class="info-icon" />
                  <div>
                    <span>{{ ts('address') }}</span>
                    <a href="https://portafoliogit.vercel.app" target="_blank"><strong>{{ ts('addressValue') }}</strong></a>
                  </div>
                </div>
                <div class="info-row">
                  <Award class="info-icon" />
                  <div>
                    <span>{{ ts('languages') }}</span>
                    <strong>{{ ts('languagesValue') }}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="skills-levels-col">
              <h3 class="subsection-title">{{ ts('skillLevelsTitle') }}</h3>
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
.dashboard-panel { display: grid; grid-template-columns: 220px 1fr; gap: 1rem; min-height: 480px; }
@media (max-width: 768px) { .dashboard-panel { grid-template-columns: 1fr; } }

.dashboard-tabs { display: flex; flex-direction: column; gap: 0.4rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 0.75rem; border-radius: 12px; }
@media (max-width: 768px) { .dashboard-tabs { flex-direction: row; overflow-x: auto; } }

.tab-btn { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; border: 1px solid transparent; background: transparent; color: var(--text-secondary); border-radius: 8px; cursor: pointer; font-family: var(--font-title); font-weight: 500; text-align: left; transition: all 0.3s cubic-bezier(0.2,0.8,0.2,1); font-size: 0.9rem; }
@media (max-width: 768px) { .tab-btn { white-space: nowrap; font-size: 0.85rem; } }

.tab-btn:hover { background: rgba(255,255,255,0.03); color: var(--text-primary); }
.tab-btn.active { background: rgba(99,102,241,0.12); border-color: rgba(99,102,241,0.25); color: var(--text-primary); box-shadow: 0 0 15px rgba(99,102,241,0.1); }
.tab-icon { width: 17px; height: 17px; flex-shrink: 0; }

.dashboard-content-screen { background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 2rem; min-height: 400px; overflow-y: auto; }
@media (max-width: 480px) { .dashboard-content-screen { padding: 1.25rem; } }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fade-enter-from { opacity: 0; transform: translateY(8px); }
.fade-leave-to { opacity: 0; transform: translateY(-8px); }

/* Work */
.work-history { display: flex; flex-direction: column; gap: 2rem; }
.work-item { display: flex; flex-direction: column; gap: 0.85rem; position: relative; }
.work-item:not(:last-child)::after { content: ''; position: absolute; bottom: -1.1rem; left: 0; width: 100%; height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0.05), transparent); }
.work-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
@media (max-width: 640px) { .work-header { flex-direction: column; gap: 0.3rem; } }
.work-title h3 { font-size: 1.15rem; color: var(--text-primary); font-weight: 600; }
.work-title h4 { font-size: 0.9rem; color: var(--color-cyan); font-weight: 500; }
.work-period { font-family: var(--font-title); font-size: 0.75rem; font-weight: 600; color: var(--text-secondary); background: rgba(255,255,255,0.04); padding: 0.2rem 0.6rem; border-radius: 20px; border: 1px solid rgba(255,255,255,0.06); white-space: nowrap; }
.work-details { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
.work-details li { display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; }
.detail-bullet { width: 15px; height: 15px; color: var(--color-indigo); margin-top: 0.15rem; flex-shrink: 0; }
.work-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.work-tag { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.55); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.72rem; }

/* Education */
.education-history { display: flex; flex-direction: column; gap: 1.25rem; }
.edu-item { display: flex; gap: 1.25rem; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.04); padding: 1.5rem; border-radius: 12px; transition: border-color 0.3s ease; }
.edu-item:hover { border-color: rgba(99,102,241,0.2); }
.edu-icon-wrap { width: 44px; height: 44px; background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: var(--color-indigo); flex-shrink: 0; }
.edu-details { display: flex; flex-direction: column; }
.edu-period { font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.2rem; }
.edu-details h3 { font-size: 1.1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.1rem; }
.edu-details h4 { font-size: 0.9rem; color: var(--color-cyan); font-weight: 500; margin-bottom: 0.2rem; }
.edu-details p { font-size: 0.8rem; color: var(--text-secondary); }
.badge-status { color: var(--color-indigo); font-weight: 600; }

/* References */
.references-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.25rem; }
.reference-card { padding: 1.5rem; background: rgba(255,255,255,0.02) !important; }
.reference-card h3 { font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.2rem; }
.ref-relation { font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1rem; }
.ref-contacts { display: flex; flex-direction: column; gap: 0.55rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 0.85rem; }
.ref-contact-row { display: flex; align-items: center; gap: 0.55rem; }
.ref-icon { width: 14px; height: 14px; color: var(--color-indigo); }
.ref-contact-row a { font-size: 0.78rem; color: var(--text-secondary); text-decoration: none; transition: color 0.3s ease; }
.ref-contact-row a:hover { color: var(--text-primary); }

/* Personal */
.personal-details-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
@media (max-width: 768px) { .personal-details-layout { grid-template-columns: 1fr; gap: 2rem; } }
.subsection-title { font-size: 1.05rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1.25rem; color: var(--text-primary); display: flex; align-items: center; }
.subsection-title::after { content: ''; flex-grow: 1; height: 1px; background: linear-gradient(90deg, rgba(255,255,255,0.1), transparent); margin-left: 1rem; }
.info-list { display: flex; flex-direction: column; gap: 1.1rem; }
.info-row { display: flex; gap: 0.85rem; align-items: flex-start; }
.info-icon { width: 18px; height: 18px; color: var(--color-cyan); margin-top: 0.2rem; }
.info-row span { display: block; font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 0.1rem; }
.info-row strong { font-size: 0.9rem; color: var(--text-primary); font-weight: 500; }
.info-row a { color: inherit; text-decoration: none; transition: color 0.3s; }
.info-row a:hover { color: var(--color-cyan); }

/* Level bars */
.levels-grid { display: flex; flex-direction: column; gap: 0.85rem; }
.level-bar-item { display: flex; flex-direction: column; gap: 0.35rem; }
.level-item-header { display: flex; justify-content: space-between; font-size: 0.83rem; font-weight: 500; }
.level-badge { font-size: 0.68rem; font-weight: 600; text-transform: uppercase; padding: 0.05rem 0.35rem; border-radius: 3px; }
.level-badge.intermedio { background: rgba(6,182,212,0.1); color: var(--color-cyan); }
.level-badge.avanzado { background: rgba(99,102,241,0.1); color: var(--color-indigo); }
.level-track { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; }
.level-fill { height: 100%; border-radius: 2px; }
.level-fill.intermedio { width: 65%; background: var(--color-cyan); }
.level-fill.avanzado { width: 90%; background: var(--color-indigo); }
</style>
