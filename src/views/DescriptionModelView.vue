<template>
    <header class="fixed z-30 top-0 inset-x-0  bg-white">
        <HeaderSection />
    </header>

    <main>
        <MainSection />
    </main>

    <footer class="relative mt-20 bg-light-black">
        <FooterSection />
    </footer>
</template>

<script setup>
import HeaderSection from '@/components/reusable/HeaderSection.vue';
import MainSection from '@/components/sections/DescriptionModalViewSections/MainSection.vue'
import FooterSection from '@/components/reusable/FooterSection.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.body.style.overflow = '';
})
</script>