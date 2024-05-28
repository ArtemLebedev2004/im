<template>
    <header class="fixed z-30 top-0 inset-x-0  bg-white">
        <HeaderAdminOSection />
    </header>

    <main>
        <MainSection />
    </main>

    <footer class="relative mt-20 bg-light-black">
        <FooterSection />
    </footer>
</template>

<script setup>
import HeaderAdminOSection from '@/components/reusable/HeaderAdminOSection.vue';
import MainSection from '@/components/sections/AdminOrdersViewSections/MainSection.vue'
import FooterSection from '@/components/reusable/FooterSection.vue';
</script>