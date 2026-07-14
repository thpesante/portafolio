<script setup lang="ts">
import { ref } from 'vue'

const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const shineX = ref(50)
const shineY = ref(50)
const isHovered = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  
  const card = cardRef.value
  const rect = card.getBoundingClientRect()
  
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  
  const rY = (x - 0.5) * 16 // Max tilt degree
  const rX = -(y - 0.5) * 16
  
  rotateX.value = rX
  rotateY.value = rY
  
  shineX.value = x * 100
  shineY.value = y * 100
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
  rotateX.value = 0
  rotateY.value = 0
}
</script>

<template>
  <div 
    ref="cardRef"
    class="card-3d-wrapper"
    :class="{ 'is-hovered': isHovered }"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :style="{
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
      '--shine-x': `${shineX}%`,
      '--shine-y': `${shineY}%`
    }"
  >
    <!-- Frosted glass card inner -->
    <div class="card-3d-inner">
      <!-- Light reflection overlay inside the card -->
      <div class="card-reflection"></div>
      
      <!-- Slot for card contents -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card-3d-wrapper {
  position: relative;
  transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.3s ease;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  padding: 1px; /* Emulates a 1px border */
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Trace border highlight on hover */
.card-3d-wrapper.is-hovered {
  background: radial-gradient(
    250px circle at var(--shine-x, 50%) var(--shine-y, 50%),
    rgba(99, 102, 241, 0.45) 0%,
    rgba(6, 182, 212, 0.25) 45%,
    rgba(255, 255, 255, 0.05) 80%
  );
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 15px rgba(99, 102, 241, 0.15);
  transition: transform 0.05s ease-out;
}

.card-3d-inner {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 15px; /* 16px wrapper - 1px border */
  background: rgba(8, 5, 20, 0.75);
  backdrop-filter: blur(24px) saturate(170%);
  -webkit-backdrop-filter: blur(24px) saturate(170%);
  display: flex;
  flex-direction: column;
}

/* Glass shine reflection */
.card-reflection {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  background: radial-gradient(
    circle 220px at var(--shine-x, 50%) var(--shine-y, 50%),
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 40%,
    transparent 80%
  );
  mix-blend-mode: overlay;
  transition: opacity 0.3s ease;
}

.card-3d-wrapper:not(.is-hovered) .card-reflection {
  opacity: 0;
}
</style>
