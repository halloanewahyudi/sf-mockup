<script lang="ts" setup>
import IconArrowUpRight from './icons/IconArrowUpRight.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue'
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  // Ambil semua elemen dengan class .card
  const items = gsap.utils.toArray('.card') as HTMLElement[]
  gsap.fromTo(
    items,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power1.out',
      stagger: {
        each: 0.2, // Delay berurutan antara setiap item (0.2s)
        from: 'start' // Urutan animasi dimulai dari elemen pertama
      },
      scrollTrigger: {
        trigger: '.card',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
        markers: false,
      }
    }
  )

})


type Props = {
  title: string,
  description: string,
  image: string,
  image_height: {
    type: string,
    default: 'h-56'
  },
  link: string,

}
const props = defineProps<Props>()

</script>
<template>
  <div class="group card">
    <div class="w-full overflow-hidden" :class="props.image_height">
      <img :src="props.image" alt="" :class="props.image_height"
        class="w-full  object-cover group-hover:scale-110 duration-300 ease-in-out">
    </div>

    <div class="p-5 ml-6 -mt-10 bg-white relative flex justify-between  group">
      <div class="">
        <a :href="props.link" target="_blank" class="cursor-pointer ">
          <h3 class="text-primary text-lg mb-1">{{ props.title }} </h3>
        </a>
        <div class="flex justify-between gap-2 text-sm">
          <p>{{ props.description }}</p>
        </div>
      </div>
      <IconArrowUpRight class="stroke-primary shrink-0" />
    </div>
  </div>
</template>
