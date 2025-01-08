<script lang="ts" setup>
 const news = [
    {
        image: '/showroom.jpg',
        title: 'News Title One',
        description: 'loremipsum doloretsitamet',
        date: '10/03/2024'
    },
    {
        image: '/showroom.jpg',
        title: 'News Title Two',
        description: 'Consectetur adipisicing elit.',
        date: '21/06/2024'
    },
    {
        image: '/showroom.jpg',
        title: 'News Title Three',
        description: 'Fuga corporis numquam sunt pariatur',
        date: '13/07/2024',
    }
 ]
</script>

<template>
    <section class="py-20">
        <div class="container">
            <h4 class="text-2xl lg:text-4xl mb-10 text-primary">Latest News </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                <div v-for="item in news" :key="item" class=" group">
                    <div class="w-full h-52 relative overflow-hidden mb-5">
                        <img :src="item.image" alt="" class="w-full h-full object-cover group-hover:scale-110 duration-300">
                    </div>
                    <div>
                        <p class="text-xs text-gray-600 mb-2"> {{ item.date }}</p>
                        <h4 class="text-primary cursor-pointer text-xl">{{ item.title }}</h4>
                        <p class="">{{ item.description }}</p>
                    </div>
                </div>
            </div>
            </div>
            </section>
</template>
