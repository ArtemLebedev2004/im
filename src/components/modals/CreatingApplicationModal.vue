<template>
    <div class="fixed z-20 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-5 bg-light-black cursor-pointer transition-all duration-150 hover:bg-white group">
            <svg class="w-[22px] min-[1920px]:w-7 group" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" class="stroke-white transition-all duration-150 group-hover:stroke-light-black"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14  min-[1920px]:container min-[1920px]:mx-auto py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Создание заявки
            </div>

            <form class="my-10 min-[1920px]:my-16 pb-2 flex flex-col min-[1920px]:gap-4 text-xl min-[1920px]:text-3xl overflow-auto">
                
                <TextArea
                    placeholder="Описание заявки"
                    v-model:textArea="description"
                    :errors="errors.description ? errors.description[0] : ''"
                />

                <TextInput 
                    placeholder="E-mail"
                    v-model:input="email"
                    stylesInput="px-2 min-[1920px]:px-4"
                    :errors="errors.email ? errors.email[0] : ''"
                />

            </form>

            <div @click="create" class="relative pr-2">
                <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-xl min-[1920px]:text-3xl text-white text-center bg-light-black border border-light-black cursor-pointer transition-all duration-150 hover:bg-white hover:text-light-black peer">
                    Создать заявку
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px] transition-all duration-150 peer-hover:bg-light-black">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import TextInput from "@/components/reusable/TextInput.vue"
import TextArea from "@/components/reusable/TextArea.vue"
import { ref } from 'vue';
// import { useUserStore } from '../../store/userStore.js';
import axios from "axios";
import Swal from "sweetalert2";
// const userStore = useUserStore()

let email = ref(null)
let description = ref(null)

let errors = ref([])

let create = async() => {
    try {
        let res = await axios.post('http://127.0.0.1:8001/api/order/create', {
            'description': description.value,
            'email': email.value
        })

        Swal.fire(
            'Заявка создана',
            '',
            'success'
        )
        
        console.log(res)
    } catch (err) {
        console.log(err)
        errors.value = err.response.data.warning.warnings[0]
        console.log(errors.value)
    }
}
</script>