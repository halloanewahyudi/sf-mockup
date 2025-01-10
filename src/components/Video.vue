<script setup lang="ts">
import { useMediaControls } from '@vueuse/core';
import { ref, computed, nextTick, onMounted } from 'vue';
import IconPlay from '@/components/icons/IconPlay.vue';
import IconPause from '@/components/icons/IconPause.vue';
import IconStop from '@/components/icons/IconStop.vue';
import IconClose from '@/components/icons/IconClose.vue';
import IconVolume from '@/components/icons/IconVolume.vue';
import IconMute from '@/components/icons/IconMute.vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const video = ref<HTMLVideoElement | null>(null);
const openVideo = ref(false);

const { playing, currentTime, duration, volume } = useMediaControls(video, {
  src: '/video.mp4',
});

// Menghitung persentase waktu video untuk slider progress
const timePlayPercentage = computed(() => {
  return duration.value
    ? Math.floor((currentTime.value / duration.value) * 100)
    : 0;
});

// Mengonversi waktu ke format MM:SS
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Fungsi untuk memulai video
const playVideo = async () => {
  openVideo.value = true;
  await nextTick(); // Pastikan DOM telah dirender sebelum manipulasi
  gsap.fromTo(
    '.video-content',
    { opacity: 0, scale: 0.5 },
    { duration: 0.5, ease: 'power1.out', opacity: 1, scale: 1 }
  );
  video.value?.play();
};

// Animasi pada thumbnail video
onMounted(() => {
  gsap.fromTo(
    '.video-thumbnail',
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.video-thumbnail',
        start: 'top 80%',
        end: 'top 40%',
        scrub: 1,
        markers: false,
      },
    }
  );
});
</script>

<template>
  <div class="video-thumbnail container">
    <div class="relative lg:h-[480px]">
      <button
        class="absolute z-50 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-5xl text-primary bg-white rounded-full w-20 h-20 flex justify-center items-center hover:shadow-md hover:scale-110 duration-300"
        @click="playVideo"
      >
        <IconPlay />
      </button>
      <img
        src="/video-thumbnail.jpg"
        alt="Thumbnail"
        class="w-full h-full object-cover object-center"
      />
    </div>
  </div>

  <!-- Popup Video -->
  <div
    v-if="openVideo"
    class="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-primary-50 z-50"
  >
    <div
      class="video-content relative w-full max-w-[600px] h-auto p-6"
      :class="{ 'show-video': openVideo }"
    >
      <button
        @click="openVideo = false"
        class="absolute z-50 -top-1 right-1 translate-x-1/2 text-2xl bg-white rounded-full w-8 h-8 text-secondary flex justify-center items-center hover:shadow-md duration-300"
      >
        <IconClose />
      </button>
      <video ref="video" class="w-full max-w-[600px] mt-2" />

      <!-- Kontrol Video -->
      <div class="control flex flex-col bg-white p-4">
        <!-- Progress Bar -->
        <div class="flex items-center space-x-3">
          <span>{{ formatTime(currentTime) }}</span>
          <input
            type="range"
            min="0"
            :max="100"
            v-model="timePlayPercentage"
            @input="currentTime = (duration * timePlayPercentage) / 100"
            class="flex-grow h-1"
          />
          <span>{{ formatTime(duration) }}</span>
        </div>

        <!-- Tombol Kontrol -->
        <div class="flex justify-between items-center mt-4">
          <div class="flex items-center space-x-2">
            <!-- Tombol Play/Pause -->
            <button @click="playing = !playing" class="text-primary text-2xl">
              <IconPlay v-if="!playing" />
              <IconPause v-else />
            </button>

            <!-- Tombol Stop -->
            <button @click="currentTime = 0" class="text-primary">
              <IconStop class="text-2xl" />
            </button>
          </div>

          <!-- Kontrol Volume -->
          <div class="flex items-center space-x-2">
            <button @click="volume = !volume" class="text-primary">
              <IconVolume v-if="!volume" class="text-2xl" />
              <IconMute v-else class="text-2xl" />
            </button>

            <input type="range" min="0" max="1" step="0.1" v-model="volume" class="w-20 h-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<style scoped>
input[type='range'] {
  @apply accent-primary cursor-pointer;
}

.video-content {
  @apply hidden;
}
.video-content.show-video {
  @apply block;
}
</style>
