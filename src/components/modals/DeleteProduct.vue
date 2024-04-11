<template>
    <div @click="$emit('openModal')" class="p-4 bg-pink rounded-full">
        <svg viewBox="0 0 20 24" fill="none" class="w-4">
            <path d="M3.75 23.25C3.0625 23.25 2.47417 23.0054 1.985 22.5163C1.49583 22.0271 1.25083 21.4383 1.25 20.75V4.5H0V2H6.25V0.75H13.75V2H20V4.5H18.75V20.75C18.75 21.4375 18.5054 22.0263 18.0163 22.5163C17.5271 23.0063 16.9383 23.2508 16.25 23.25H3.75ZM16.25 4.5H3.75V20.75H16.25V4.5ZM6.25 18.25H8.75V7H6.25V18.25ZM11.25 18.25H13.75V7H11.25V18.25Z" fill="black"/>
        </svg>
    </div>

    <div v-if="modalVisible" class="fixed z-30 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-5 bg-light-black">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14  min-[1920px]:px-20 py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Удаление товара
            </div>

            <form class="my-10 min-[1920px]:my-16 pb-2 flex flex-col min-[1920px]:gap-4 text-xl min-[1920px]:text-3xl overflow-auto">
                <TextInput 
                    placeholder="ID"
                    v-model:input="idProduct"
                    :errors="errors.idProduct ? errors.idProduct[0] : ''"
                />                
            </form>

            <div class="relative pr-2">
                <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-xl min-[1920px]:text-3xl text-white text-center bg-light-black">
                    <div @click="deleteProduct" class="">
                        Удалить товар
                    </div>
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import TextInput from '../reusable/TextInput.vue';
import axios from 'axios'
import Swal from 'sweetalert2'


let errors = ref([])

let idProduct = ref(null)

const props = defineProps(['modalVisible'])

let {modalVisible} = toRefs(props)

let deleteProduct = async() => {

    try {
        let res = await axios.delete('api/product/' + idProduct.value)

        Swal.fire(
            'Товар удалён',
            'Товар с id = ' + idProduct.value + ' удалён',
            'success'
        )

        console.log(res)
    } catch (err) {
        errors.value = err.response.data.errors
    }
    
}
</script>