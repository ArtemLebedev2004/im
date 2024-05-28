<template>
    <svg @click="$emit('openModal')" width="49" viewBox="0 0 49 49" fill="none">
        <path d="M24.5 47C36.9264 47 47 36.9264 47 24.5C47 12.0736 36.9264 2 24.5 2C12.0736 2 2 12.0736 2 24.5C2 36.9264 12.0736 47 24.5 47Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.8564 24.5H34.1422" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.5 14.8564V34.1422" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <div v-if="modalVisible" class="fixed z-30 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-5 bg-light-black">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14  min-[1920px]:px-20 py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Добавление проекта
            </div>

            <form class="my-10 min-[1920px]:my-16 pb-2 flex flex-col min-[1920px]:gap-4 text-xl min-[1920px]:text-3xl overflow-auto">
                <TextInput 
                    placeholder="Название"
                    v-model:input="title"
                    :errors="errors.title ? errors.title[0] : ''"
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
                    <div class="relative z-10 w-full  text-center bg-white border-light-black border-[1px]">
                        <div class="">
                            <input @change="getUploadedImage" id="photo" type="file" class="hidden">
                            <label for="photo" class="block py-2 min-[1920px]:py-3">
                                Фото товара
                                <svg viewBox="0 0 20 26" fill="none" class="w-4 min-[1920px]:w-5 inline-block ml-2">
                                    <path d="M2.85716 12.9999L10 20.2221M10 20.2221L17.1429 12.9999M10 20.2221V1.44434M1.42859 24.5554H18.5714" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </label>
                        </div>
                    </div>

                    <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                    </div>
                </div>
                
                <div v-if="errors.photo" class="text-lg text-red-500">
                    {{ errors.photo[0] }}
                </div>
            </form>

            <div class="relative pr-2">
                <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-xl min-[1920px]:text-3xl text-white text-center bg-light-black">
                    <div @click="addProduct" class="">
                        Добавить товар
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

let title = ref(null)
let amount = ref(null)
let type = ref(null)
let date = ref(null)

const props = defineProps(['modalVisible'])

let {modalVisible} = toRefs(props)

let uploadedImage = ref(null)

let getUploadedImage = (e) => {
    const file = e.target.files[0]
    uploadedImage.value = file

    console.log(uploadedImage.value)
}

let addProduct = async() => {
    let data = new FormData();

    data.append('title', title.value || '')
    data.append('amount', amount.value || '')
    data.append('type', type.value || '')
    data.append('date', date.value || '')
    data.append(`photo`, uploadedImage.value || '')

    try {
        let res = await axios.post('api/product', data)

        Swal.fire(
            'Товар добавлен',
            '',
            'success'
        )

        console.log(res)
    } catch (err) {
        errors.value = err.response.data.warning.warnings[0]
    }
    
}



</script>