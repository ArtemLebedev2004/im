<template>
    <div class="bg-white my-10 min-[1920px]:my-16 text-xl min-[1920px]:text-3xl text-black text-center">
        <div @click="$emit('openSignInModal')" class="relative pr-2">
            <div class="relative z-10 w-full py-2 min-[1920px]:py-3 bg-white border-light-black border-[1px]">
                <div class="">
                    Войти
                </div>
            </div>

            <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
            </div>
        </div>

        <div class="relative mt-10 pr-2">
            <div @click="$emit('openSignUpModal')" class="relative z-10 w-full py-2 min-[1920px]:py-3 bg-white border-light-black border-[1px]">
                <div class="">
                    Зарегистрироваться
                </div>
            </div>

            <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>