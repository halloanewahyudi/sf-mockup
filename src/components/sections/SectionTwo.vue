<script lang="ts" setup>
import Counter from '../Counter.vue';
</script>

<template>
    <section class="py-20">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 items-center ">
              <Counter counter="240" suffix="Unit" text="Projects we carry out" />

                <div class="sekilas md:col-span-2">
                    <h4 class="text-2xl lg:text-4xl mb-3 text-primary">Since our founding more than 330 years ago </h4>
                    <p class="text-xl leading-relaxed"> We have accumulated technical expertise and know how
                        related to wood, cultivated relationships with our customers, developed an extensive network of
                        business partners both in Japan and abroad, and built our brand. With these unique strengths and
                        through a diverse range of lifestyle-related services, we are committed to contributing to a
                        sustainable and prosperous society.</p>
                </div>
            </div>
        </div>
    </section>
</template>
