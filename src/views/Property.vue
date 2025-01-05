<script lang="ts" setup>
import { useRoute } from "vue-router";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue'

const route = useRoute()

const items = () => {
    gsap.registerPlugin(ScrollTrigger);
    // property item array
    const items = document.querySelectorAll('.item')
    // craete gsap timeline on items utils to array in viewport
    gsap.utils.toArray(items).forEach((item) => {
       // create gsap timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom center",
                scrub: false,
            }
        })
        // animation
        tl.from(item, {
            opacity: 0,
            scale: 0.5
        })
    })
   
}
onMounted(() => {
    items()
})

</script>

<template>
    <section class="bg-[#fdfdfb]">
        <div class="grid grid-cols-1 lg:grid-cols-2  items-center min-h-screen">
            <div class="p-10 lg:p-20">
                <div class="flex items-center gap-2 text-secondary">
                    <div class="w-3 h-3 bg-secondary rounded-full"></div>
                    <div>{{ route.name }}</div>
                </div>
                <h2 class="text-3xl lg:text-6xl font-bold mb-5 text-primary">
                    Housing and Real Estate Business
                </h2>
                <p class="">We aim to develop the better quality of houses to contribute to the quality of life in
                    Indonesia
                </p>

            </div>
            <div>
                <img src="/property.jpg" alt="" class="w-full h-screen object-cover">
            </div>
        </div>
    </section>
    <section class="py-20">
        <div class="container">
            <div class="property grid grid-cols-1 md:grid-cols-2  gap-5 lg:gap-10 mb-5 lg:mb-10">
                <div class="item flex flex-col gap-2">
                    <img src="https://www.sf-indonesia.co.id/assets/img/Morizen.jpg" alt=""
                        class="w-full h-[300px] object-cover">
                    <h4 class="text-2xl text-primary"> Morizen</h4>
                    <p>Landed House Project in Bekasi <br>
                        Joint Project with PT Summarecon Agung <br>
                        Invested Year 2017</p>
                </div>
                <div class="item flex flex-col gap-2">
                    <img src="https://www.sf-indonesia.co.id/assets/img/The%20Morizen%201.jpg" alt=""
                        class="w-full h-[300px] object-cover">
                    <h4 class="text-2xl text-primary"> The MORIZEN</h4>
                    <p>LLanded House Project in Makassar <br>
                        Joint Project with PT Summarecon Agung <br>
                        Invested Year 2021</p>
                </div>
                <div class="item flex flex-col gap-2">
                    <img src="https://www.sf-indonesia.co.id/assets/img/morizono.png" alt=""
                        class="w-full h-[300px] object-cover">
                    <h4 class="text-2xl text-primary"> MORIZONO</h4>
                    <p>Landed House Project in Depok
                        <br>
                        Joint Project with PT Graha Perdana Indah <br>
                        Invested Year 2023
                    </p>
                </div>
                <div class="item flex flex-col gap-2">
                    <img src="https://www.sf-indonesia.co.id/assets/img/Morizora%20Bogor.jpeg" alt=""
                        class="w-full h-[300px] object-cover">
                    <h4 class="text-2xl text-primary"> MORIZORA</h4>
                    <p>Landed House Project in Bogor <br>
                        Joint Project with PT Olympic Bangun Persada <br>
                        Invested Year 2024</p>
                </div>
                <div class="item flex flex-col gap-2 lg:col-span-2">
                <img src="https://www.sf-indonesia.co.id/assets/img/KSK.jpg" alt=""
                    class="w-full h-[300px] object-cover">
                <h4 class="text-2xl text-primary"> Coming Soon Project</h4>
                <p>High Rise Mixed Use Project in CBD Jakarta <br>
                    Joint Project with Sinarmas Land <br>
                    Invested Year 2020</p>
            </div>
            </div> <!-- end grid -->  
        </div>
    </section>
</template>
