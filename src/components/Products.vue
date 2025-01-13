<script lang="ts" setup>
import products from "@/assets/data/products.json";
import { ref, nextTick } from "vue";
import gsap from "gsap";

// State untuk produk aktif
const product = ref(null);
const activeIndex = ref(-1);

const getProduct = async (item, index) => {
    if (activeIndex.value === index) return; // Jika tab yang sama diklik, tidak ada perubahan
    product.value = null; // Reset produk sebelumnya untuk animasi ulang
    activeIndex.value = index;

    // Tunggu DOM diperbarui sebelum melakukan animasi
    await nextTick();

    // Jalankan animasi pada elemen produk
    const content = document.querySelector(".product-content");
    if (content) {
        gsap.fromTo(
            content,
            { opacity: 0, y: 50 }, // State awal
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" } // State akhir
        );
    }

    product.value = item; // Setel produk baru
};

const defaultProduct = products[0];
</script>

<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 ">
            
            <!-- Konten Produk -->
            <div class="md:col-span-2 lg:col-span-4 overflow-hidden">
                <div class="relative w-full">
                    <transition name="fade">
                        <!-- Hanya render jika produk aktif -->
                        <div v-if="product" key="product-content"
                            class="product-content h-full relative w-full">
                            <div class="w-full  overflow-hidden">
                                <img :src="product.image" alt="" srcset=""
                                    class="w-full h-full object-cover hover:scale-105 duration-300">
                            </div>
                            <div class="p-5 bg-white absolute bottom-0 left-0 ">
                                <h3 class="text-xl font-bold mb-2">{{ product.title }}</h3>
                                <p>{{ product.description }}</p>
                            </div>
                        </div>

                        <div v-else>
                            <div class=" relative ">
                                <div class="w-full h-full  overflow-hidden">
                                    <img :src="defaultProduct.image" alt="" srcset=""
                                        class="w-full h-full  object-cover hover:scale-105 duration-300">
                                </div>
                                <div class="p-5 bg-white absolute bottom-0 left-0 ">
                                    <h3 class="text-xl font-bold mb-2">{{ defaultProduct.title }}</h3>
                                    <p>{{ defaultProduct.description }}</p>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

            <!-- Daftar Tab -->
            <div class="md:col-span-1 lg:col-span-2 h-full flex flex-col justify-center items-center">
                <div class="w-full p-6 lg:p-10">
                    <slot name="title" ></slot>
                <ul class="list-product space-y ">
                    <li v-for="(item, index) in products" :key="item.id" :class="{
                        'font-bold text-primary': index === activeIndex,
                        'hover:text-primary-500': index !== activeIndex,
                    }" class="">
                       
                        <button @click="getProduct(item, index)" class="flex items-center gap-2 p-2 w-full text-left font-medium hover:bg-primary-100 duration-300" :class="{ 'bg-primary-100': index === activeIndex }">
                            <div v-if="index === activeIndex" class="w-2 h-2 rounded-full bg-primary inline-block"></div> 
                            <div v-else class="w-2 h-2 rounded-full bg-primary-400 inline-block"></div>
                             {{ item.title }}
                        </button>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Fade-Up Transisi */
.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 0.6s ease-out;
}

.fade-up-enter-from {
    opacity: 0;
    transform: translateX(50px);
}

.fade-up-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.fade-up-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.fade-up-leave-to {
    opacity: 0;
    transform: translateX(50px);
}

/* Fade Transisi */

.fade-enter-active,
.fade-leave-active {
    transition: all 0.6s ease-out;
}

.fade-enter-from {
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}

.fade-leave-from {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}
</style>