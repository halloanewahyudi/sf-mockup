<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute()
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
                    Environment Business
                </h2>
                <h4>Wana Subur Lestari Plantation company</h4>
            </div>
            <div>
                <img src="/showroom.jpg" alt=""
                    class="w-full h-screen object-cover">
            </div>
        </div>
    </section>
</template>
