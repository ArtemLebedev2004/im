<template>
    <div class="my-10 min-[1920px]:my-16 text-xl min-[1920px]:text-3xl text-black text-center">
        <!-- <div @click="$emit('openModal')" class="relative pr-2">
            <div class="relative z-10 w-full py-2 min-[1920px]:py-3 bg-white border-light-black border-[1px]">
                <div class="">
                    Создать заявку
                </div>
            </div>

            <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
            </div>
        </div> -->

        <router-link to="/" class="block relative pr-2">
            <div class="relative z-10 w-full py-2 min-[1920px]:py-3 bg-white border-light-black border-[1px] transition-all ease-in-out duration-150 hover:bg-black hover:text-white">
                <div class="">
                    Главная
                </div>
            </div>

            <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
            </div>
        </router-link>

        <router-link to="/portfolio" class="block relative mt-10 pr-2">
            <div class="relative z-10 w-full py-2 min-[1920px]:py-3 bg-white border-light-black border-[1px] transition-all ease-in-out duration-150 hover:bg-black hover:text-white">
                <div class="">
                    Портфолио
                </div>
            </div>

            <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
            </div>
        </router-link>
    </div>
</template>

<script setup>

</script>