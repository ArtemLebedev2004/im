<template>
    <div class="absolute z-20 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-4 bg-light-black">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff"/>
            </svg>
        </div>

        <div class="px-3  md:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14 min-[1920px]:px-20 py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Вход
            </div>

            <form class="my-10 min-[1920px]:my-16 overflow-auto">
                <TextInput 
                    placeholder="E-mail"
                    v-model:input="email"
                    stylesInput="px-2"
                    :errors="errors.email ? errors.email[0] : ''"
                />
                
                <TextInput 
                    placeholder="Пароль"
                    v-model:input="password"
                    stylesInput="px-2"
                    :errors="errors.password ? errors.password[0] : ''"
                />
            </form>

            <div @click="login" class="relative pr-2">
                <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-xl min-[1920px]:text-3xl text-white text-center bg-light-black">
                    <div class="">
                        Войти
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
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from 'vue';

let errors = ref([])

let email = ref(null)
let password = ref(null)

let login = async() => {
    try {
        let res = await axios.post('api/login', {
            email: email.value,
            password: password.value
        })

        Swal.fire(
            'Вы успешно залогинились',
            '',
            'success'
        )

        console.log(res)
    } catch (err) {
        errors.value = err.response.data.errors
    }
    
}
</script>