<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
import IconArrowUpRight from "./icons/IconArrowUpRight.vue";
const router = useRouter()
</script>

<template>
        <div class="bg-primary py-10 text-primary-100 hover:bg-primary-500 duration-300">
            <div class="container ">
               <div class="flex justify-center items-center gap-6 lg:gap-20">
                <p class="text-xl">If you would like to know more, contact a member of the team.</p>
                <button><IconArrowUpRight class="stroke-white" /></button>
               </div>
            </div>
        </div>
    <section class="pt-20  pb-10 border-t border-neutral-100  bg-neutral-50">
    
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div class="address">
                    <h2 class="text-xl font-bold mb-5">PT Sumitomo Forestry Indonesia</h2>
                    <address>
                        Summitmas II Lt.8,
                        Jl.Jend.Sudirman Kav61-62, Jakarta 12910 <br>
                        Phone: +62 21 520 0268
                    </address>
                </div>
                <div class="link">
                    <h2 class="text-xl font-bold mb-5">Recruit Information</h2>
                    <p>Please contact through <a href="http://www.jobstreet.co.id" class="text-primary hover:text-primary-500 duration-300">Jobstreet Sumitomo Forestry Indonesia </a> </p>
                </div>
                <div class="link">
                    <h2 class="text-xl font-bold mb-5">Link</h2>
                    <p>Sumitomo Forestry Co.,Ltd.</p>
                </div>
                <div class="link">
                    <h2 class="text-xl font-bold mb-5">Menu</h2>
                    <ul class="menu">
                        <li  v-for="item in router.options.routes" :key="item">
                           <!--  <router-link :to="item.path">{{ item.name }}</router-link> -->
                            <a :href="item.path"> {{ item.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5 border-t bg-neutral-100">
        <div class="container text-center text-sm ">
            © 2025 Sumitomo Forestry Indonesia. All rights reserved | powered by proweb
        </div>
    </section>
</template>
