<script lang="ts" setup>
 import Card from '../Card.vue';
 import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue';


 const projects = [
    {
        image: '/morizen.jpg',
        title: 'MORIZEN',
        description: 'Landed House Project in Bekasi Joint Project with PT Summarecon Agung Invested Year 2017'
    },
    {
        image: '/morizono.png',
        title: 'MORIZONO',
        description: 'Landed House Project in Depok Joint Project with PT Graha Perdana Indah Invested Year 2023'
    },
    {
        image: '/morizora-bogor.jpg',
        title: 'MORIZORA',
        description: 'Landed House Project in Bogor Joint Project with PT Olympic Bangun Persada Invested Year 2024'
    },
    {
        image: '/the-morizen-1.jpg',
        title: 'The MORIZEN',
        description: 'Landed House Project in Makassar Joint Project with PT Summarecon Agung Invested Year 2021'
    },

 ]

</script>

<template>
    <section class="py-20">
        <div class="container">
            <h4 class="text-2xl lg:text-4xl mb-3 text-primary">Housing and Real Estate Business</h4>
            <p class="mb-5 text-lg">We aim to develop the better quality of houses to contribute to the quality of life in Indonesia
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mb-10">
                <div class="project-item" v-for="(item,index) in projects" :key="item" :class="item.myclass">
                    <Card image_height="h-80" :index="index" :image="item.image" :title="item.title" :description="item.description" />
                </div>
            </div>
            <div class="relative w-full h-[480px] overflow-hidden">
                <img src="/ksk.jpg" alt="" class="w-full h-90 object-cover">
                <div class="absolute p-6 bg-primary bg-opacity-85 text-white right-0 bottom-0 max-w-[580px] group">
                    <h4 class="text-xl text-white mb-3">Coming Soon Project</h4>
                    <p class="text-gray-100 mb-3">High Rise Mixed Use Project in CBD Jakarta Joint Project with Sinarmas Land Invested Year 2020</p>
                 <button><IconArrowUpRight class="stroke-white group-hover:-translate-y-2 duration-300" /></button>
                </div>
            </div>
        </div>
    </section>

</template>
