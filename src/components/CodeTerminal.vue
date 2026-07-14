<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Terminal, Check, RefreshCw } from '@lucide/vue'

const isCompiling = ref(false)
const compileSuccess = ref(true)

const compileCode = () => {
  if (isCompiling.value) return
  isCompiling.value = true
  compileSuccess.value = false
  
  setTimeout(() => {
    isCompiling.value = false
    compileSuccess.value = true
  }, 2000)
}

onMounted(() => {
  // Trigger compiler once at start
  compileCode()
})
</script>

<template>
  <div class="terminal-container glass-panel" @click="compileCode">
    <!-- Window Header -->
    <div class="terminal-header">
      <div class="header-dots">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
      </div>
      <div class="header-title">
        <Terminal class="title-icon" />
        <span>DeveloperProfile.kt</span>
      </div>
      <div class="header-actions">
        <button class="compiler-btn" :class="{ 'spinning': isCompiling }" aria-label="Compile code">
          <RefreshCw class="compile-icon" />
        </button>
      </div>
    </div>
    
    <!-- Code Editor Body -->
    <div class="terminal-body">
      <div class="editor-lines">
        <div class="line-number" v-for="n in 20" :key="n">{{ n }}</div>
      </div>
      
      <pre class="editor-code"><code><span class="keyword">package</span> com.thpesantez.profile

<span class="keyword">import</span> com.thpesantez.skills.*
<span class="keyword">import</span> com.thpesantez.experience.*

<span class="annotation">@DeveloperProfile</span>(
    name = <span class="string">"Johnny Alexandro Pesántez Ríos"</span>,
    title = <span class="string">"Full Stack & Android Developer"</span>,
    location = <span class="string">"Santa Isabel, Azuay, Ecuador"</span>,
    seniority = Seniority.MID_LEVEL
)
<span class="keyword">class</span> <span class="class-name">Developer</span> {
    <span class="keyword">fun</span> <span class="func-name">getStack</span>(): TechStack = TechStack(
        languages = <span class="type-name">listOf</span>(<span class="string">"Kotlin"</span>, <span class="string">"Java"</span>, <span class="string">"TypeScript"</span>, <span class="string">"SQL"</span>),
        mobile = <span class="type-name">listOf</span>(<span class="string">"Android Studio"</span>, <span class="string">"Jetpack Compose"</span>),
        frontend = <span class="type-name">listOf</span>(<span class="string">"React"</span>, <span class="string">"Vue 3"</span>, <span class="string">"Vite"</span>),
        backend = <span class="type-name">listOf</span>(<span class="string">"Firebase"</span>, <span class="string">"Supabase"</span>)
    )

    <span class="keyword">fun</span> <span class="func-name">objective</span>(): String {
        <span class="keyword">return</span> <span class="string">"Explorar nuevas tecnologías y aportar liderazgo técnico."</span>
    }
}</code></pre>
    </div>
    
    <!-- Terminal Output / Compile status -->
    <div class="terminal-footer">
      <div class="footer-status">
        <div v-if="isCompiling" class="status-indicator loading">
          <RefreshCw class="status-icon spinner" />
          <span>Gradle: building...</span>
        </div>
        <div v-else class="status-indicator success">
          <Check class="status-icon" />
          <span>Gradle: build successful</span>
        </div>
      </div>
      <div class="build-progress-bar">
        <div class="progress-fill" :class="{ 'loading-fill': isCompiling }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.terminal-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: var(--font-code);
  font-size: 0.85rem;
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.terminal-header {
  height: 40px;
  background: rgba(4, 2, 10, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.header-dots {
  display: flex;
  gap: 0.4rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-red { background-color: #ef4444; }
.dot-yellow { background-color: #f59e0b; }
.dot-green { background-color: #10b981; }

.header-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.title-icon {
  width: 14px;
  height: 14px;
  color: var(--color-indigo);
}

.compiler-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.compiler-btn:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.compile-icon {
  width: 14px;
  height: 14px;
}

.spinning .compile-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

.terminal-body {
  flex-grow: 1;
  padding: 1.25rem 1rem;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  background: rgba(3, 1, 7, 0.4);
}

.editor-lines {
  text-align: right;
  color: rgba(255, 255, 255, 0.15);
  user-select: none;
  font-size: 0.8rem;
  line-height: 1.5;
}

.editor-code {
  font-family: var(--font-code);
  line-height: 1.5;
  color: #e2e8f0;
  text-align: left;
  white-space: pre;
}

/* Code Highlighting Colors */
.keyword { color: #f43f5e; font-weight: 500; }
.string { color: #34d399; }
.annotation { color: #38bdf8; }
.class-name { color: #a78bfa; }
.func-name { color: #fbbf24; }
.type-name { color: #60a5fa; }

.terminal-footer {
  background: rgba(4, 2, 10, 0.6);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.footer-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-icon {
  width: 12px;
  height: 12px;
}

.status-icon.spinner {
  animation: spin 1.5s linear infinite;
}

.loading {
  color: var(--color-cyan);
}

.success {
  color: var(--color-indigo);
}

.build-progress-bar {
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--color-indigo), var(--color-cyan));
  transform: scaleX(1);
  transform-origin: left;
  transition: transform 0.5s ease-out;
}

.progress-fill.loading-fill {
  animation: fill-animation 2s infinite cubic-bezier(0.1, 0.8, 0.2, 1);
}

@keyframes fill-animation {
  0% { transform: scaleX(0); }
  50% { transform: scaleX(0.7); }
  100% { transform: scaleX(1); }
}
</style>
