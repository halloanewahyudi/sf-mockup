<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Cover from '@/components/Cover.vue'
import Counter from '@/components/Counter.vue'
import Card from '@/components/Card.vue';
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue';
import Jawa from '@/components/Jawa.vue';
import Products from '@/components/Products.vue';
import Video from '@/components/Video.vue';
// data json
import products from "@/assets/data/products.json";
import projects from "@/assets/data/projects.json";
import news from "@/assets/data/news.json";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



</script>

<template>
    <div class="main">
        <section class="cover pb-20">
            <Cover />
        </section>
        <section id="sec2" class="section-2 pb-20"> <!-- section two -->
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 items-center ">
                    <div class="bg-primary-50 text-primary flex flex-col justify-center items-center h-full">
                        <Counter counter="240" suffix="Unit" text="Projects we carry out" />
                    </div>

                    <div class="sekilas md:col-span-2">
                        <h4 class="text-2xl lg:text-4xl mb-3 text-primary">Since our founding more than 330 years ago
                        </h4>
                        <p class="text-xl leading-relaxed"> We have accumulated technical expertise and know how
                            related to wood, cultivated relationships with our customers, developed an extensive network
                            of
                            business partners both in Japan and abroad, and built our brand. With these unique strengths
                            and
                            through a diverse range of lifestyle-related services, we are committed to contributing to a
                            sustainable and prosperous society.</p>
                    </div>
                </div>
            </div>
        </section> <!-- end section two -->

       

        <section class="section pb-20"> <!-- section three -->
            <div class="container flex flex-col ">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-primary items-center text-white">
                    <div class="md:col-span-2 lg:col-span-3 p-6 lg:p-10 ">
                        <h4 class="text-3xl text-white mb-3">
                            Interior Design Showroom
                        </h4>
                        <p>
                            We started our business as a distributor of building materials.
                            Not only the products from our group factories, we deal some Japanese products.
                            In 2017, we lanunced Interior Design Showroom in Blok M, Jakarta.
                            Just in front of the MRT station, you can see our products.
                        </p>
                    </div>
                    <div class="h-full w-full lg:col-span-2 relative">
                        <img src="/showroom.jpg" alt="" class="min-h-[380px] h-full w-full object-cover">
                        <button class="p-4 bg-primary text-white absolute right-0 bottom-0 flex items-center gap-4">Read
                            More
                            <IconArrowUpRight class="stroke-white" />
                        </button>
                    </div>
                </div>
                <div class=" bg-primary-50">
                <Products >
                    <template #title>
                        <h4 class="text-2xl lg:text-4xl mb-3 text-primary">Trading</h4>
                        <p>We started our business in Indonesia as a distributor of building materials. </p>
                         <hr class="my-5">
                    </template>
                </Products>
                </div>
                
            </div>
        </section> <!-- end section three -->

        <section class="py-20 bg-gray-100"> <!-- section five -->
            <div class="container">
                <h4 class="text-2xl lg:text-4xl mb-3 text-primary">Housing and Real Estate Business</h4>
                <p class="mb-5 text-lg">We aim to develop the better quality of houses to contribute to the quality of
                    life in Indonesia
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mb-10">
                    <div class="project-item" v-for="(item, index) in projects" :key="item" :class="item.myclass">
                        <Card image_height="h-80" :index="index" :image="item.image" :title="item.title"
                            :description="item.description" />
                    </div>
                </div>
                <div class="relative w-full h-[480px] overflow-hidden">
                    <img src="/ksk.jpg" alt="" class="w-full h-90 object-cover">
                    <div class="absolute p-6 bg-primary bg-opacity-85 text-white right-0 bottom-0 max-w-[580px] group">
                        <h4 class="text-xl text-white mb-3">Coming Soon Project</h4>
                        <p class="text-gray-100 mb-3">High Rise Mixed Use Project in CBD Jakarta Joint Project with
                            Sinarmas Land Invested Year 2020</p>
                        <button>
                            <IconArrowUpRight class="stroke-white group-hover:-translate-y-2 duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </section> <!-- end section five -->

        
        <section class="py-20  section-map relative"> <!-- section four -->
            <div
                class="absolute bg-gradient-to-tr  from-black via-primary-500/60  to-transparent opacity-80 top-0 left-0 w-full h-full">
            </div>
            <div class="container relative">
                <Jawa />
            </div>
        </section> <!-- end section four -->

        <section class="mt-20">
                <Video  />
        </section>

        <section class="py-20"> <!-- section six -->
            <div class="container">
                <h4 class="text-2xl lg:text-4xl mb-10 text-primary">Latest News </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                    <div v-for="item in news" :key="item" class=" group">
                        <div class="w-full h-52 relative overflow-hidden mb-5">
                            <img :src="item.image" alt=""
                                class="w-full h-full object-cover group-hover:scale-110 duration-300">
                        </div>
                        <div>
                            <p class="text-xs text-gray-600 mb-2"> {{ item.date }}</p>
                            <h4 class="text-primary cursor-pointer text-xl">{{ item.title }}</h4>
                            <p class="">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> <!-- end section six -->

    </div>
</template>
<style scoped>
.section-map {
    background: url('/forest.jpg') no-repeat center;
    background-size: cover;
}
</style>