<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue'

const pins = [
    {
        title: 'Kutai Timber Indonesia',
        description: 'Manufacturing company for Plywood, Particle Board and Furniture',
        address: `Jl. Tanjung Tembaga Baru/ Pelabuhan Probolinggo Jawa Timur 67218, Indonesia`,
        top: '55%',
        left: '73%',
    },
    {
        title: 'Rimba Partikel Indonesia',
        description: 'Manufacturing company for Plywood, Particle Board and Furniture',
        address: 'Desa Mororejo, Kaliwungu, Kendal, Central Java Kendal Indonesia',
        top: '20%',
        left: '27%',
    },
    {
        title: 'AST Indonesia',
        description: 'Manufacturing company for Plywood, Particle Board and Furniture',
        address: 'Jl. Kenari No. 5, Semaki, Umbulharjo, Kota Yogyakarta',
        top: '59%',
        left: '32%',
    },
    {
        title: 'Sinar Rimba Pasifik',
        description: 'Manufacturing company for Plywood, Particle Board and Furniture ',
        address: 'Desa Jatikalang, Krian-Sidoarjo, Kab. Sidoarjo Jawa Timur , Indonesia',
        top: '36%',
        left: '66%',
    },
]

const info = ref(null)
const getInfo = (item) => {
    info.value = item
}

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3  gap-6 text-primary-50">
        <div>
            <h4 class="text-3xl text-white ">Group Factory List </h4>
            <p class="text-xl mt-3">
                We have 4 factories that produce high quality Plywood, Particle Board and Furniture in Java
                island.
            </p>
            <transition name="slide">
                <div v-if="info" class="mt-10">
                    <div class="pl-6  border-l-4 border-primary-100 flex flex-col gap-2">
                        <h4 class="text-lg text-white">{{ info.title }}</h4>
                        <p>{{ info.description }}</p>
                        <address>{{ info.address }}</address>
                        <a v-if="info.link" :href="`${info.link}`" target="_blank"
                            class="text-primary hover:text-primary-500 duration-300">
                            <IconArrowUpRight class="stroke-primary" />
                        </a>
                    </div>
                </div>
                <div v-else>

                    <p class="mt-3"> Theya are: Kutai Timber Indonesia, Rimba Partikel Indonesia, AST Indonesia, Sinar
                        Rimba
                        Pasifik</p>
                </div>
            </transition>

        </div>
        <div class="md:col-span-2">
            <div class="map relative max-w-max mx-auto">
                <div @click="getInfo(item)" v-for="item in pins" class="pin group "
                    :style="`top:${item.top}; left:${item.left};`">
                    <span
                        class="w-5 h-5 rounded-full bg-white flex flex-col justify-center items-center group-hover:scale-125 duration-300">
                        <span class="w-3 h-3 rounded-full bg-primary block shrink-0"></span>
                    </span>
                </div>
                <img src="/jawa.png" alt="" class="w-full opacity-50">
            </div>
        </div>
    </div>
</template>
<style scoped>
.pin {
    @apply absolute z-40 opacity-100 w-5 h-5 lg:h-10 lg:w-10 rounded-full border-2 border-primary border-dashed flex justify-center items-center animate-spin-slow hover:animate-none cursor-pointer;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    @apply translate-y-0 opacity-100 duration-300 ease-[cubic-bezier(0.95,0.05,0.395,0.035)];
}

.slide-enter-from,
.slide-leave-to {
    @apply translate-y-full opacity-0;
}
</style>