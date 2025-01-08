<script lang="ts" setup>
import { useRoute } from "vue-router";
import { onMounted } from 'vue'
import gsap from 'gsap';
import IconCheck from '../components/icons/IconCheck.vue'
const route = useRoute()
const visit = () => {
    gsap.from('.visite', { duration: 1, scale: 1.5, opacity: 0, ease: 'power4.out', delay: 1 })
}

const list = [
    'Plywood',
    'Particle board',
    'Low Pressure Melamine Board(MFC)',
    'Gypsum Board(YOSHINO GYPSUM)',
    'Wooden Door',
    'Wooden Wall Panels'
]
onMounted(() => {
    visit()
})

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
                    Timber and Building Materials
                </h2>
                <h4 class="text-xl mb-3">Interior Design Showroom</h4>
                <p class="leading-relaxed mb-5">
                    We started our business as a distributor of building materials.
                    Not only the products from our group factories, we deal some Japanese products.
                    In 2017, we lanunced Interior Design Showroom in Blok M, Jakarta.
                    Just in front of the MRT station, you can see our products.
                </p>
                <p class="visite text-white bg-secondary p-4 inline-flex leading-relaxed mb-5">Please visit our showroom
                    to find Japanese Quality Materials!!</p>
            </div>
            <div>
                <img src="/showroom.jpg" alt=""
                    class="w-full h-screen object-cover">
            </div>
        </div>
    </section>
    <section class="bg-gradient-to-br  from-primary to-primary-800 text-white">
        <div class="container py-20">
            <div class="grid grid-cols-1 lg:grid-cols-3 ">
                <div>
                    <h4 class="text-3xl font-bold mb-5">Product list</h4>
                    <ul>
                        <li v-for="item in list" :key="item" class="flex mb-2">
                            <IconCheck class="text-2xl mr-3 shrink-0" />
                            {{ item }}
                        </li>
                    </ul>
                </div>
               <div class="lg:col-span-2">
                <h4 class="text-3xl font-bold mb-5">Group Factory List</h4>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

                   <div class="p-4 lg:p-6 border border-primary-500 bg-primary-700">
                     <h4 class="text-xl font-medium mb-2  text-primary-50"> Group Factory List
                        Kutai Timber Indonesia</h4>
                        <p class="text-primary-200 font-light"> Manufacturing company for Plywood, Particle Board and Furniture </p>
                   </div>
                   <div class="p-4 lg:p-6 border border-primary-500 bg-primary-700">
                     <h4 class="text-xl font-medium mb-2  text-primary-50"> Rimba Partikel Indonesia</h4>
                        <p class="text-primary-200 font-light"> Manufacturing company for Plywood, Particle Board and Furniture</p>
                   </div>
                   <div class="p-4 lg:p-6 border border-primary-500 bg-primary-700">
                     <h4 class="text-xl font-medium mb-2  text-primary-50"> AST Indonesia</h4>
                        <p class="text-primary-200 font-light"> Manufacturing company for Plywood, Particle Board and Furniture</p>
                   </div>
                   <div class="p-4 lg:p-6 border border-primary-500 bg-primary-700">
                     <h4 class="text-xl font-medium mb-2  text-primary-50"> Sinar Rimba Pasifik</h4>
                        <p class="text-primary-200 font-light"> Manufacturing company for Plywood, Particle Board and Furniture</p>
                   </div>
                  </div>
               </div>
            </div>
        </div>
    </section>
</template>
