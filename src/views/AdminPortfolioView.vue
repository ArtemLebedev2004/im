<template>
    <header class="fixed z-30 top-0 inset-x-0  bg-white">
        <HeaderAdminPSection />
    </header>

    <main>
        <MainSection />
    </main>

    <footer class="relative mt-20 bg-light-black">
        <FooterSection />
    </footer>
</template>

<script setup>
import HeaderAdminPSection from '@/components/reusable/HeaderAdminPSection.vue';
import MainSection from '@/components/sections/AdminPortfolioViewSections/MainSection.vue'
import FooterSection from '@/components/reusable/FooterSection.vue';
</script>