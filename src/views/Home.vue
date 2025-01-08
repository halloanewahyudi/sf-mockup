<script lang="ts" setup>
import VideoBackground from 'vue-responsive-video-background-player'
import IconEcosystem from '@/components/icons/IconEcosystem.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import SectionTwo from '@/components/sections/SectionTwo.vue';
import SectionThree from '@/components/sections/SectionThree.vue';
import SectionFour from '@/components/sections/SectionFour.vue';
import SectionFive from '@/components/sections/SectionFive.vue';
import SectionSix from '@/components/sections/SectionSix.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue'

</script>

<template>
    <VideoBackground src="/forest.mp4" poster="/forest.jpg"
        class="w-full min-h-screen  text-white relative" overlay="linear-gradient(90deg,#10101080,#00905588)" >
        <div class="container py-20 flex flex-col justify-end  h-full">
            <div class="max-w-[680px]">
                <h1 class="text-5xl lg:text-7xl font-bold mb-5 text-white"> Happiness Grows from Trees </h1>
                <p class="text-xl"> Utilizing Wood as a Healthy and Environmentally Friendly Natural Resource</p>
            </div>
        </div>
        <button @click="$router.push('/about')" class="bg-secondary bg-opacity-75 hover:bg-opacity-100 duration-300 p-6 text-white absolute bottom-0 ">
            <IconArrowDown class="text-xl" />
        </button>
    </VideoBackground>
<SectionTwo/>
<SectionThree />
<SectionFour />
<SectionFive class="bg-gray-100"/>
<SectionSix />
<Footer/>
</template>
<style scoped>
.section {
    @apply min-h-screen
}
</style>
