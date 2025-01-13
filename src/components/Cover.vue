<script lang="ts" setup>
import VideoBackground from 'vue-responsive-video-background-player'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
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
    </VideoBackground>
</template>
