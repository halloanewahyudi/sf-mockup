<template>
   <Vue3Marquee>
    <div v-for="item in items" :key="item">
      {{ item }}
    </div>
  </Vue3Marquee>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { Vue3Marquee } from 'vue3-marquee'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

</script>

<style scoped>

</style>
