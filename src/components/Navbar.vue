<script lang="ts" setup>
import IconHamburger from '@/components/icons/IconHamburger.vue'
import IconClose from '@/components/icons/IconClose.vue'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from "vue-router";

const openMenu = ref(false)

const router = useRouter()
const route = useRoute()
const navbar = ref(null)
const menu = ref([])

const getItem = ref({})

const getMenu = (item) => {
    getItem.value = {
        title: item.meta.title,
        description: item.meta.description,
        image: item.meta.image
    }
}
const scrolledNavbar = () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.value.classList.add('navbar-scrolled')
        } else {
            navbar.value.classList.remove('navbar-scrolled')
        }
    })
}

onMounted(() => {
 scrolledNavbar()
})
</script>

<template>
    <nav ref="navbar" class="navbar fixed top-0 left-0 w-full z-50 py-3"
        :class="{ 'navbar-home': route.name === 'Home', 'open-menu': openMenu === true }">
        <div class="container">
            <div class="flex justify-between items-center gap-4  ">
                <router-link to="/" @click="openMenu = false" class="flex items-center gap-2 logo">
                    <img src="/logo.png" alt="" srcset="" class="w-12  ">
                    <h4 class="text-2xl font-medium  uppercase hidden lg:block">Sumitomo Forestry Indonesia</h4>
                </router-link>
                <ul class="menu hidden lg:flex">
                        <li  v-for="item in router.options.routes" :key="item">
                            <router-link :to="item.path" @click="openMenu = false">{{ item.name }}</router-link> 
                        </li>
                    </ul>
                <button @click="openMenu = !openMenu"
                    class="relative hover:bg-opacity-100 duration-300  w-10 h-10 p-4 lg:hidden flex justify-center items-center">
                    <span class="pr-20"> Menu </span>
                    <IconClose v-if="openMenu" class="text-3xl absolute " />
                    <IconHamburger v-else class="text-2xl absolute " />
                </button>
            </div>
        </div>
    </nav>
    <transition name="slide">
        <div class="lg:hidden fixed top-0 right-0 w-full  h-full bg-primary text-white z-40" v-if="openMenu">
            <div class="grid grid-cols-1 lg:grid-cols-2  min-h-screen items-center">
                <div class="hidden lg:flex flex-col justify-center items-center kiri p-6 h-full relative ">
                    <div v-if="getItem">
                         <img :src="getItem.image"
                            class="w-full h-full object-cover absolute top-0 left-0 opacity-20" alt="">

                        <div class="relative max-w-[380] mx-auto">
                            <h2 class="text-3xl lg:text-6xl font-bold">{{ getItem.title }}</h2>
                            <p>{{ getItem.description }}</p>
                        </div> 
                    </div>
                    <div v-else>
                        <img src="/forest.jpg" alt="" class="w-full h-full object-cover ">
                    </div>
                </div>
                <div class="kanan p-6 lg:p-10 ">
                    <ul class="menu">
                        <li @mouseenter="getMenu(item)" v-for="item in router.options.routes" :key="item">
                            <router-link :to="item.path" @click="openMenu = false">{{ item.name }}</router-link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>

</template>
<style scoped>
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
    @apply translate-y-0 duration-300 ease-[cubic-bezier(0.95,0.05,0.395,0.035)];
}

.slide-enter-from,
.slide-leave-to {
    @apply translate-y-full;
}
.menu {
    @apply lg:flex items-center gap-4;
}
.menu li a {
    @apply hover:text-primary duration-300;
}

.navbar{
    @apply bg-transparent text-white transition-all duration-200 ease-in-out;
}
.navbar.navbar-scrolled {
    @apply bg-white text-neutral-700 border-b border-gray-200;
}
.navbar .logo {
    @apply brightness-0 invert;
}
.navbar.navbar-scrolled .logo {
    @apply filter-none;
}
</style>
