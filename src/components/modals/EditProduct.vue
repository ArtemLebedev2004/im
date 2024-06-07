
<!-- <template>
    <svg @click="$emit('openModal')" width="45" viewBox="0 0 33 33" fill="none" class="cursor-pointer">
        <path d="M31.5475 6.50259L25.6775 0.602587C25.2897 0.216652 24.7647 0 24.2175 0C23.6704 0 23.1454 0.216652 22.7575 0.602587L1.94755 21.3826L0.047547 29.5826C-0.0179966 29.8823 -0.0157497 30.193 0.0541233 30.4917C0.123996 30.7905 0.259731 31.0699 0.45141 31.3095C0.64309 31.5491 0.885873 31.7428 1.16202 31.8766C1.43817 32.0104 1.74072 32.0807 2.04755 32.0826C2.19052 32.097 2.33458 32.097 2.47755 32.0826L10.7675 30.1826L31.5475 9.42259C31.9335 9.03469 32.1501 8.50977 32.1501 7.96259C32.1501 7.4154 31.9335 6.89048 31.5475 6.50259ZM9.76755 28.3826L1.99755 30.0126L3.76755 22.3926L19.3375 6.88259L25.3375 12.8826L9.76755 28.3826ZM26.6775 11.4326L20.6775 5.43259L24.1575 1.97259L30.0575 7.97259L26.6775 11.4326Z" fill="black"/>
    </svg>

    <div v-if="modalVisible" class="fixed z-30 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-5 bg-light-black">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14  min-[1920px]:px-20 py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Обновление проекта
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
                    <div @click="editProduct" class="">
                        Обновить товар
                    </div>
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                </div>
            </div>
        </div>
    </div>
</template> -->

<template>
    <div class="fixed z-30 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-5 bg-light-black cursor-pointer transition-all duration-150 hover:bg-white group">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff" class="stroke-white transition-all duration-150 group-hover:stroke-light-black"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14 min-[1920px]:container min-[1920px]:mx-auto py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Обновление проекта
            </div>

            <form class="my-10 min-[1920px]:my-16 pb-2 flex flex-col min-[1920px]:gap-4 text-xl min-[1920px]:text-3xl overflow-auto">
                <TextInput 
                    placeholder="Название"
                    v-model:input="title"
                    :errors="errors.title ? errors.title[0] : ''"
                />
                
                <TextInput 
                    placeholder="Описание"
                    v-model:input="description"
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

                <img v-if="oldImg" :src="'http://127.0.0.1:8001/images/attachments/' + oldImg" alt="" class="max-w-[700px] max-h-[700px] mt-12 m-auto">
                <img v-if="newImg" :src="newImg" alt="" class="max-w-[700px] max-h-[700px] mt-12 m-auto">

            </form>

            <div @click="editProduct" class="relative pr-2">
                <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-xl min-[1920px]:text-3xl text-white text-center bg-light-black border border-light-black cursor-pointer transition-all duration-150 hover:bg-white hover:text-light-black peer">
                    Обновить проект
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px] transition-all duration-150 peer-hover:bg-light-black">
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, toRefs } from 'vue';
import TextInput from '../reusable/TextInput.vue';
import axios from 'axios'
import Swal from 'sweetalert2'

const props = defineProps(['modalVisible', 'product'])

let {product} = toRefs(props)

import eventBus from '@/eventBus';
onMounted(() => {
    getProduct()
})

let errors = ref([])

// let idProductInput = ref(null)
let title = ref(product.value.title)
let description = ref(product.value.description)
let amount = ref(product.value.amount)
let type = ref(product.value.type)
let date = ref(product.value.date)
let oldImg = ref(product.value.photo);

// let price = ref(null)
// let countryOfOrigin = ref(null)
// let yearOfRelease = ref(null)
// let model = ref(null)

// watch(idProductInput, async(newValue) => {
//     if (newValue.length > 1 && newValue[newValue.length - 1] == ' ') {
//         await getProductById()
//     }
// })

let uploadedImage = ref(null)
let newImg = ref(null)
let getUploadedImage = (e) => {
    const file = e.target.files[0]
    newImg.value = URL.createObjectURL(file)
    uploadedImage.value = file
    oldImg.value = null
    console.log(uploadedImage.value)
}

let getProduct = async() => {
    try {
        title.value = product.value.title
        description.value = product.value.description
        amount.value = product.value.amount
        type.value = product.value.type
        date.value = product.value.date
        oldImg.value = product.value.photo
    } catch (err) {
        if (err.response.data.error_code == 1) {
            Swal.fire(
                'Неверный ID',
                '',
                'error'
            )
        }
    }
}

//             idProductInput.value = idProductInput.value.replace(' ', '')

//         }
//         console.log(err)
//     }
// }

let editProduct = async() => {
    let data = new FormData();

    data.append('title', title.value || '')
    data.append('description', description.value || '')
    data.append('amount', amount.value || '')
    data.append('type', type.value || '')
    data.append('date', date.value || '')
    if (!oldImg.value) {
        data.append(`photo`, uploadedImage.value || '')
    } else {
        data.append(`photo`, oldImg.value || '')
    }

    try {
        console.log(title.value)

        let res = await axios.post('api/product/' + product.value.id + '?_method=PUT', data)

        Swal.fire(
            'Товар обновлён',
            `Товар с id = ${product.value.id} обновлён`,
            'success'
        )

        eventBus.emit('updateProduct', '')

        console.log(res)
    } catch (err) {
        errors.value = err.response.data.warning.warnings[0]
    }
    
}


</script>