<template>
    <div class="absolute z-20 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-5 bg-light-black">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14  min-[1920px]:px-20 py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Создание заявки
            </div>

            <form class="my-10 min-[1920px]:my-16 pb-2 flex flex-col min-[1920px]:gap-4 text-xl min-[1920px]:text-3xl overflow-auto">
                <TextInput 
                    placeholder="Название проблемы"
                    v-model:input="title"
                    stylesInput="px-2 min-[1920px]:px-4"
                />
                
                <TextArea
                    placeholder="Описание проблемы"
                    v-model:input="description"
                />

                <div class="relative mt-6 pr-2">
                    <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-center bg-white border-light-black border-[1px]">
                        <div class="">
                            Категория проблемы

                            <svg viewBox="0 0 26 15" fill="none" class="w-4 min-[1920px]:w-5 inline-block ml-2">
                                <path d="M2 2L13 13L24 2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                    </div>
                </div>

                <div class="relative mt-9 pr-2">
                    <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-center bg-white border-light-black border-[1px]">
                        <div class="">
                            Загрузить фото проблемы

                            <svg viewBox="0 0 20 26" fill="none" class="w-4 min-[1920px]:w-5 inline-block ml-2">
                                <path d="M2.85716 12.9999L10 20.2221M10 20.2221L17.1429 12.9999M10 20.2221V1.44434M1.42859 24.5554H18.5714" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>

                    <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                    </div>
                </div>
                
            </form>

            <div class="relative pr-2">
                <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-xl min-[1920px]:text-3xl text-white text-center bg-light-black">
                    <div class="">
                        Создать заявку
                    </div>
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import TextInput from "@/components/reusable/TextInput.vue"
import TextArea from "@/components/reusable/TextArea.vue"
import { ref } from 'vue';

let title = ref(null)
let description = ref(null)
</script>