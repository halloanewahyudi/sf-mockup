<script lang="ts" setup>
 import IconArrowUpRight from './icons/IconArrowUpRight.vue';
 type Props = {
   title: string,
   description: string,
   image: string,
   image_height: {
     type: string,
     default: 'h-56'
   },
   link:string,

 }
  const props = defineProps<Props>()
</script>
<template>
<div class="group">
  <div class="w-full overflow-hidden" :class="props.image_height">
    <img :src="props.image" alt="" :class="props.image_height" class="w-full  object-cover group-hover:scale-110 duration-300 ease-in-out">
  </div>
    
    <div class="p-5 ml-6 -mt-10 bg-white relative shadow group">
      <a :href="props.link" target="_blank" class="cursor-pointer flex justify-between"> 
        <h3 class="text-primary text-lg mb-1">{{ props.title }} </h3><IconArrowUpRight class="stroke-secondary shrink-0" />
      </a>  
        <div class="flex justify-between gap-2">
            <p>{{ props.description }}</p>
           
        </div>
    </div>
</div>
</template>
