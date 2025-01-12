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

import IconAward from '@/components/icons/IconAward.vue';
import { Vue3Marquee } from 'vue3-marquee'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.fromTo(
        '.matterport',
        { opacity: 0, x: 100 },
        {
            opacity: 1, x: 0, duration: 1, ease: 'power1.out',
            scrollTrigger: {
                trigger: '.matterport',
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1,
                markers: false,
            }
        }
    )

    // create award masrque with gsap
    const awards = gsap.utils.toArray('.award-item') as HTMLElement[];
    //create awards masrque with gsap
    gsap.from(awards, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power1.out',
        stagger: {
            each: 0.2, // Delay berurutan antara setiap item (0.2s)
            from: 'start' // Urutan animasi dimulai dari elemen pertama
        },
        scrollTrigger: {
            trigger: '.award-item',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
            markers: false,
        }
    })

})


</script>

<template>
    <div class="main">
        <section class="cover pb-20">
            <Cover />
        </section>
        <section id="sec2" class="section-2 pb-20"> <!-- section two -->
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 items-center">
                    <div class=" text-primary flex flex-col justify-center items-center h-full">
                        <div class="h-full w-full bg-primary-50 p-6 flex flex-col justify-center items-center">
                            <Counter counter="240" suffix="Unit" text="Projects we carry out" />
                        </div>
                        <div class="h-full w-full bg-primary-100 p-6 flex flex-col justify-center items-center">
                            <Counter counter="140" suffix="Unit" text="Projects we carry out" />
                        </div>
                    </div>

                    <div class="sekilas md:col-span-2">
                        <h4 class="text-2xl lg:text-4xl mb-3 text-primary">Since our founding more than 330 years ago
                        </h4>
                        <div class="text">
                            <p class="text-xl leading-relaxed"> We have accumulated technical expertise and know how
                                related to wood, cultivated relationships with our customers, developed an extensive
                                network
                                of
                                business partners both in Japan and abroad, and built our brand. With these unique
                                strengths
                                and
                                through a diverse range of lifestyle-related services, we are committed to contributing
                                to a
                                sustainable and prosperous society.</p>
                            <p class="text-xl leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dicta perferendis
                                eaque aperiam quia at? Voluptatum deleniti facilis eaque reprehenderit architecto alias
                                quia voluptatibus unde, debitis tenetur corporis ipsa natus?
                            </p>
                        </div>

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
                    <Products>
                        <template #title>
                            <h4 class="text-2xl lg:text-4xl mb-3 text-primary">Trading</h4>
                            <p class="text-sm">We started our business in Indonesia as a distributor of building
                                materials. </p>
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

            </div>
        </section> <!-- end section five -->

        <section class="matterport">
            <iframe src="https://my.matterport.com/show?m=gq4cSybaiCi" frameborder="0" class="w-full h-screen"></iframe>
        </section>

        <section class="py-20">
            <div class="container overflow-hidden">
                <h4 class="text-2xl lg:text-4xl mb-3 text-primary">Awards</h4>
                <Vue3Marquee :clone="true" :duration="30" :direction="'reverse'">
                    <div class="p-6 w-full flex justify-center items-center" v-for="item in 10" :key="item">
                        <img src="/award2.png" alt="" class="opacity-30 w-48">
                    </div>
                </Vue3Marquee>
            </div>
        </section>

        <section>
            <Marquee />
        </section>

        <section class="py-20  section-map relative"> <!-- section four -->
            <div
                class="absolute bg-gradient-to-tr  from-black via-primary-500/60  to-transparent opacity-80 top-0 left-0 w-full h-full">
            </div>
            <div class="container relative">
                <Jawa />
            </div>
        </section> <!-- end section four -->

        <section class="mt-20">
            <Video />
        </section>

        <section class="py-20"> <!-- section six -->
            <div class="container">

                <div class="grid grid-cols-1 md:grid-cols-2  items-center ">
                    <div class=" bg-primary-100 text-primary h-full p-6 flex flex-col justify-center items-center">
                        <div class="max-w-[460px] flex flex-col space-y-3">
                            <p class="text-sm">Meet The Team</p>
                            <h4 class="text-3xl font-semibold text-primary">
                                Lorem ipsum dolor sit amet consectetur.
                            </h4>
                            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, inventore.
                            </p>
                            <button> <IconArrowUpRight class="stroke-primary" /> </button>
                           
                        </div>

                    </div>
                    <div class="">
                        <img src="/wood-house.jpg" alt="" class="h-[380px]  w-full object-cover">
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