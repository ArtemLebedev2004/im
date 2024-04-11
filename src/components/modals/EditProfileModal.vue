<template>
    <div class="absolute z-20 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-4 bg-light-black">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14 py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Редактирование профиля
            </div>

            <form class="my-10 min-[1920px]:my-16 overflow-auto">
                <TextInput 
                    placeholder="ФИО"
                    v-model:input="fullName"
                    :errors="errors.fullName ? errors.fullName[0] : ''"
                />
                
                <TextInput 
                    placeholder="E-mail"
                    v-model:input="email"
                    :errors="errors.email ? errors.email[0] : ''"
                />

                <TextInput 
                    placeholder="Телефон"
                    v-model:input="phone"
                    :errors="errors.phone ? errors.phone[0] : ''"
                />

                <TextInput 
                    placeholder="Пароль"
                    v-model:input="password"
                    inputType="password"
                    :errors="errors.password ? errors.password[0] : ''"
                />
                
                <TextInput 
                    placeholder="Подтверждение пароля"
                    inputType="password"
                    v-model:input="password_confirmation"
                />

                <div class="relative mt-9 pr-2">
                    <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-center bg-white border-light-black border-[1px]">
                        <div class="">
                            Загрузить аватар

                            <svg viewBox="0 0 20 26" fill="none" class="w-4 min-[1920px]:w-5 inline-block ml-2">
                                <path d="M2.85716 12.9999L10 20.2221M10 20.2221L17.1429 12.9999M10 20.2221V1.44434M1.42859 24.5554H18.5714" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>

                    <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                    </div>
                </div>
            </form>

            <div @click="register" class="relative pr-2">
                <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-xl min-[1920px]:text-3xl text-white text-center bg-light-black">
                    <div class="">
                        Зарегистрироваться
                    </div>
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useUserStore} from '@/store/userStore.js'
import TextInput from "@/components/reusable/TextInput.vue"
import axios from "axios";
import Swal from "sweetalert2";
import { ref } from 'vue';

let userStore = useUserStore()

let errors = ref([])

let fullName = ref(null)
let email = ref(null)
let phone = ref(null)
let password = ref(null)
let password_confirmation = ref(null)

let register = async() => {
    try {
        let res = await axios.post('api/register', {
            fullName: fullName.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
            password_confirmation: password_confirmation.value
        })

        Swal.fire(
            'Вы успешно зарегистрировались',
            '',
            'success'
        )

        userStore.setUserDetails(res)

        console.log(res)
    } catch (err) {
        console.log(err)
        errors.value = err.response.data.warning.warnings[0]
    }
    
}
</script>