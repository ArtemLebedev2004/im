<template>
    <div class="relative pr-2">
        <div class="relative z-20 border-light-black border  bg-white">
            <div class="relative w-full text-[12px] min-[500px]:max-md:text-lg">

                <img :src="'http://127.0.0.1:8001/images/attachments/' + photo" alt="" class=" h-72 m-auto">
                
                <div class="absolute inset-2 xl:inset-3 h-max z-30 flex justify-between">
                    <div class="h-max px-2 xl:px-3 py-px xl:py-1 xl:text-[16px] text-white bg-black">{{type}}</div>
                    <div class="h-max px-2 xl:px-3 py-px xl:py-1 xl:text-[16px] text-white bg-black">#{{id}}</div>
                </div>
                
                <!-- <div class="absolute -inset-x-[1px] inset-y-0 h-max m-auto flex justify-between">
                    <div class="bg-white py-1 pr-1 min-[460px]:max-md:py-[6px] min-[460px]:max-md:pr-[6px] border-light-black border lg:border-[3px] border-l-0">
                        <div class="bg-light-black p-2 min-[460px]:px-3 sm:max-md:px-4 min-[460px]:py-4 sm:max-md:py-[22px]">
                            
                            <svg viewBox="0 0 15 28" fill="none" class="w-4 md:w-3">
                                <path d="M13 2L2 14L13 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                        </div>
                    </div>

                    <div class="bg-white py-1 pr-1  min-[460px]:max-md:py-[6px] min-[460px]:max-md:pr-[6px] border-light-black border lg:border-[3px] border-l-0 rotate-180">
                        <div class="bg-light-black p-2 min-[460px]:px-3 sm:max-md:px-4 min-[460px]:py-4 sm:max-md:py-[22px]">
                            
                            <svg  viewBox="0 0 15 28" fill="none" class="w-4 md:w-3">
                                <path d="M13 2L2 14L13 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                        </div>
                    </div>
                </div> -->


                <!-- <div class="absolute w-max h-max inset-x-0 pb-2 bottom-0 m-auto">
                    <svg width="54" height="10" viewBox="0 0 54 10" fill="none">
                        <circle cx="5" cy="5" r="5" fill="#989898"/>
                        <circle cx="27" cy="5" r="5" fill="white"/>
                        <circle cx="49" cy="5" r="5" fill="white"/>
                    </svg>
                </div> -->

            </div>


            <div class="p-3 xl:p-5 flex flex-col gap-5">
                

                <div class="text-xl min-[1920px]:text-3xl font-semibold leading-6">
                    {{title}}
                </div>

                <div class="min-[480px]:text-md min-[1920px]:text-xl">
                    <ul class="list-disc ml-5">
                        <li>Тип: {{type}}</li>
                        <li>Дата создания: {{date}}</li>
                        <li>Сделано за: {{amount}} часов</li>
                    </ul>
                </div>
            </div>

            <router-link :to="'/description/' + id" class="block p-1 xl:p-2 pt-2 xl:pt-4">
                <div class="p-2 xl:p-4 bg-light-black text-center min-[480px]:text-xl min-[1920px]:text-3xl text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black">
                    Подробнее
                </div>
            </router-link>

        </div>

        <div class="absolute top-2 left-2 right-0 h-full border-light-black border">
            
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps([
    'id',
    'title',
    'type',
    'amount',
    'date',
    'photo'
])

const {id, title, type, amount, date, photo} = toRefs(props)
</script>