<script lang="ts" setup>
import Card from '../Card.vue';
import IconArrowUpRight from '../icons/IconArrowUpRight.vue';
const products = [
    {
        image: '/showroom.jpg',
        title: 'Plywood',
        description: 'loremipsum doloretsitamet'
    },
    {
        image: '/showroom.jpg',
        title: 'Particle board',
        description: 'Consectetur adipisicing elit.'
    },
    {
        image: '/showroom.jpg',
        title: 'Low Pressure Melamine Board(MFC)',
        description: 'Fuga corporis numquam sunt pariatur'
    },
    {
        image: '/showroom.jpg',
        title: 'Gypsum Board(YOSHINO GYPSUM)',
        description: 'Delectus voluptatum quis fugit quod mollitia'
    },
    {
        image: '/showroom.jpg',
        title: 'Wooden Door',
        description: 'Tempore a tempora expedita facilis incidunt'
    },
    {
        image: '/showroom.jpg',
        title: 'Wooden Wall Panels',
        description: 'Consequuntur quaerat repudiandae cum nam'
    }
]

</script>

<template>
    <section class="section pb-20">
        <div class="container flex flex-col gap-10">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-primary items-center text-white">
                <div class="md:col-span-2 lg:col-span-3 p-6 lg:p-10 ">
                    <h4 class="text-3xl text-white mb-3">
                        Interior Design Showroom
                    </h4>
                    <p>
                        We started our business as a distributor of building materials.
                        Not only the products from our group factories, we deal some Japanese products.
                        In 2017, we lanunced Interior Design Showroom in Blok M, Jakarta.
                        Just in front of the MRT station, you can see our products.
                    </p>
                </div>
                <div class="h-full w-full lg:col-span-2 relative">
                    <img src="/showroom.jpg" alt="" class="min-h-[380px] h-full w-full object-cover">
                    <button class="p-4 bg-primary text-white absolute right-0 bottom-0 flex items-center gap-4">Read More <IconArrowUpRight class="stroke-white"/> </button>
                </div>
            </div>
            <div class=""> <h4 class="text-3xl text-primary">Product List</h4></div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10">
                <Card v-for="item in products" :key="item" :image="item.image" :title="item.title"
                    :description="item.description" />
            </div>
        </div>
    </section>
</template>
