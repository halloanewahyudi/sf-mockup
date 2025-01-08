<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import {useRoute} from 'vue-router'
const route = useRoute()
</script>

<template>
   <div>
      <Navbar />
      <router-view v-slot="{ Component }">
  <transition name="slide">
    <component :is="Component" />
  </transition>
</router-view>

  <Footer />


   </div>
</template>
<style scoped>
 .slide-enter-active,
.slide-leave-active {
    @apply translate-x-0 opacity-100 duration-700 ease-[cubic-bezier(0.95,0.05,0.395,0.035)];
}

.slide-enter-from,
.slide-leave-to {
    @apply translate-x-full opacity-0 ;
}
</style>