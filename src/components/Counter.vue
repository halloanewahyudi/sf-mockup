<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

// Props
type Props = {
  counter: number;
  suffix: string;
  text: string;
};
const props = defineProps<Props>();

// Refs
const counterSection = ref<HTMLElement | null>(null);
const counter = ref<HTMLElement | null>(null);

// Animasi counter saat di scroll
onMounted(() => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  if (counter.value) {
    gsap.fromTo(
      counter.value,
      { innerText: 0 },
      {
        innerText: props.counter, // Target angka akhir
        duration: 3, // Durasi animasi
        ease: 'power1.out',
        scrollTrigger: {
          trigger: counterSection.value,
          start: 'top 80%', // Memulai animasi saat elemen muncul 80% di viewport
          end: 'top 60%', // Menghentikan animasi saat elemen mencapai 60% viewport
          //scrub: 1, // Animasi mengikuti scroll
        },
        snap: { innerText: 3 }, // Loncat angka per 1
        onUpdate: function () {
          if (counter.value) {
            counter.value.innerText = Math.floor(Number(counter.value.innerText)).toString();
          }
        },
      }
    );
  }
});
</script>

<template>
  <div ref="counterSection" class="counter">
    <div class="flex items-end">
      <!-- Reassign ref counter ke elemen yang diubah -->
      <h2
        ref="counter"
        class="text-6xl lg:text-9xl lg:leading-none mb-0 font-bold text-gray-200 number"
      >
        0
      </h2>
      <span class="text-3xl lg:text-4xl font-semibold text-primary">{{ props.suffix }}</span>
    </div>
    <p class="text-2xl">{{ props.text }}</p>
  </div>
</template>
