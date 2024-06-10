<template>
    

    <div class="fixed z-30 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-5 bg-light-black cursor-pointer transition-all duration-150 hover:bg-white group">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff" class="stroke-white transition-all duration-150 group-hover:stroke-light-black"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14 min-[1920px]:container min-[1920px]:mx-auto py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Добавление проекта
            </div>

            <form class="my-10 min-[1920px]:my-16 pb-2 flex flex-col min-[1920px]:gap-4 text-xl min-[1920px]:text-3xl overflow-auto">
                <TextInput 
                    placeholder="Название"
                    v-model:input="title"
                    :errors="errors.title ? errors.title[0] : ''"
                />

                <TextArea 
                    placeholder="Описание"
                    v-model:textArea="description"
                    :errors="errors.description ? errors.description[0] : ''"
                />
                
                <TextInput 
                    placeholder="Количество часов"
                    v-model:input="amount"
                    :errors="errors.amount ? errors.amount[0] : ''"
                />

                <TextInput 
                    placeholder="Тип строения"
                    v-model:input="type"
                    :errors="errors.type ? errors.type[0] : ''"
                />

                <TextInput 
                    placeholder="Дата создания"
                    v-model:input="date"
                    :errors="errors.date ? errors.date[0] : ''"
                />

                <div class="relative mt-9 pr-2">
                    <div class="relative z-10 w-full text-center bg-white border-light-black border-[1px] cursor-pointer transition-all duration-150 hover:bg-light-black hover:text-white group">
                        <div class="">
                            <input @change="getUploadedImage" id="photo" type="file" class="hidden">
                            <label for="photo" class="block py-2 min-[1920px]:py-3 cursor-pointer">
                                Фото проекта
                                <svg viewBox="0 0 20 26" fill="none" class="w-4 min-[1920px]:w-5 inline-block ml-3">
                                    <path d="M2.85716 12.9999L10 20.2221M10 20.2221L17.1429 12.9999M10 20.2221V1.44434M1.42859 24.5554H18.5714" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-black transition-all duration-150 group-hover:stroke-white"/>
                                </svg>
                            </label>
                        </div>
                    </div>

                    <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                    </div>
                </div>
                
                <div v-if="errors.photo" class="text-lg text-center text-red-500">
                    {{ errors.photo[0] }}
                </div>

                <img :src="img" alt="" class="max-w-[700px] max-h-[700px] m-auto mt-16">
            </form>

            <div @click="addProduct" class="relative pr-2">
                <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-xl min-[1920px]:text-3xl text-white text-center bg-light-black border border-light-black cursor-pointer transition-all duration-150 hover:bg-white hover:text-light-black peer">
                    Добавить проект
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px] transition-all duration-150 peer-hover:bg-light-black">
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TextInput from '../reusable/TextInput.vue';
import axios from 'axios'
import Swal from 'sweetalert2'
import TextArea from '../reusable/TextArea.vue';
import eventBus from '@/eventBus';

let errors = ref([])

let title = ref(null)
let description = ref(null)
let amount = ref(null)
let type = ref(null)
let date = ref(null)

let uploadedImage = ref(null)
let img = ref(null)
let getUploadedImage = (e) => {
    const file = e.target.files[0]
    img.value = URL.createObjectURL(file)
    uploadedImage.value = file

    console.log(uploadedImage.value)
}

let addProduct = async() => {
    let data = new FormData();

    data.append('title', title.value || '')
    data.append('description', description.value || '')
    data.append('amount', amount.value || '')
    data.append('type', type.value || '')
    data.append('date', date.value || '')
    data.append(`photo`, uploadedImage.value || '')

    try {
        let res = await axios.post('http://127.0.0.1:8000/api/product', data)

        Swal.fire(
            'Проект добавлен',
            '',
            'success'
        )

        console.log(res)

        eventBus.emit('addProduct', '')

    } catch (err) {
        if (err.response.data.code == 1) {
        console.log(err.response.data)

            errors.value = {photo: [err.response.data.message]}
        } else {
            errors.value = err.response.data.warning.warnings[0]
        }
    }
    
}

// let clear = () => {
//     title.value = ''
//     description.value = ''
//     amount.value = ''
//     type.value = ''
//     date.value = ''
// }

</script>