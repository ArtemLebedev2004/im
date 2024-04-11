<template>
    <div class="first:m-0 mt-5">
        <img :src="image" alt="" class="rounded-full w-full">
    </div>
</template>

<script setup>
    import { reactive, defineProps } from 'vue'

    defineProps(reactive({
        image: String
    }))
</script>