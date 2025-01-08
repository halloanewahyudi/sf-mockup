<script lang="ts" setup>
import IconCheck from '../components/icons/IconCheck.vue'
import { useRoute } from "vue-router";
import { onMounted } from 'vue'
const route = useRoute()

const list = [
    'We provide high-quality products and services that bring joy to our customers.',
    'We create new businesses that lead to happiness for generations to come with a fresh perspective.',
    'We promote a free and open-minded corporate culture that respects diversity.',
    'We set and strive to achieve ambitious goals through ongoing effort.',
    'We do work that wins us the trust of society with fair and honest conduct.'
]
</script>

<template>
    <section class="">
        <div class="grid grid-cols-1 lg:grid-cols-2  items-center min-h-screen">
            <div class="p-10 lg:p-20">
                <div class="flex items-center gap-2 text-secondary">
                    <div class="w-3 h-3 bg-secondary rounded-full"></div>
                    <div>{{ route.name }}</div>
                </div>
                <h2 class="text-3xl lg:text-6xl font-bold mb-5 text-primary">
                    Our History
                </h2>
                <p class="leading-relaxed">Since our founding more than 330 years ago, we have accumulated technical
                    expertise and know how
                    related to wood, cultivated relationships with our customers, developed an extensive network of
                    business partners both in Japan and abroad, and built our brand. With these unique strengths and
                    through a diverse range of lifestyle-related services, we are committed to contributing to a
                    sustainable and prosperous society.
                </p>
            </div>
            <div>
                <img src="/history.jpg" alt="" class="w-full h-screen object-cover">
            </div>
        </div>
    </section>
    <section class="bg-primary text-white">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div class="w-full h-full min-h-screen">
                <img src="/wood-house.jpg" alt="" srcset="" class="w-full h-screen object-cover">
            </div>
            <div class="p-10 lg:p-20">
                <h2 class="anim-fade-up text-3xl lg:text-6xl font-bold mb-5">
                    Corporate Philosophy
                </h2>
                <p class="anim-fade-up leading-relaxed">
                    The Sumitomo Forestry Group utilizes wood as a healthy and environmentally friendly natural resource
                    to provide a diverse range of lifestyle-related services that contribute to the realization of a
                    sustainable and prosperous society. All our efforts are based on Sumitomo’s Business Spirit, which
                    places prime importance on fairness and integrity for the good of society.
                </p>
            </div>
        </div>
    </section>
    <section class="bg-primary text-white">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center ">
            <div class="p-10 lg:p-20">
                <h2 class="anim-fade-up text-3xl lg:text-6xl font-bold mb-5">
                    Our Values
                </h2>
                <div class="anim-fade-up leading-relaxed">
                    <ul>
                        <li v-for="item in list" :key="item" class="flex  mb-5">
                            <IconCheck class="text-2xl mr-3 shrink-0" />
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-full h-full min-h-screen">
                <img src="/values.jpg" alt="" srcset="" class="w-full h-screen object-cover">
            </div>
        </div>
    </section>
</template>
