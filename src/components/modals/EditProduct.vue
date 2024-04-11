<template>
    <div @click="$emit('openModal')" class="p-4 bg-yellow rounded-full">
        <svg viewBox="0 0 23 24" fill="none" class="w-5">
            <path d="M2.5 20.75H4.28125L16.5 8.53125L14.7187 6.75L2.5 18.9688V20.75ZM0 23.25V17.9375L16.5 1.46875C16.75 1.23958 17.0263 1.0625 17.3288 0.9375C17.6313 0.8125 17.9487 0.75 18.2812 0.75C18.6146 0.75 18.9375 0.8125 19.25 0.9375C19.5625 1.0625 19.8333 1.25 20.0625 1.5L21.7812 3.25C22.0312 3.47917 22.2138 3.75 22.3288 4.0625C22.4438 4.375 22.5008 4.6875 22.5 5C22.5 5.33333 22.4429 5.65125 22.3288 5.95375C22.2146 6.25625 22.0321 6.53208 21.7812 6.78125L5.3125 23.25H0ZM15.5938 7.65625L14.7187 6.75L16.5 8.53125L15.5938 7.65625Z" fill="black"/>
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
                Обновление товара
            </div>

            <form class="my-10 min-[1920px]:my-16 pb-2 flex flex-col min-[1920px]:gap-4 text-xl min-[1920px]:text-3xl overflow-auto">
                <TextInput 
                    placeholder="ID"
                    v-model:input="idProductInput"
                    :errors="errors.idProductInput ? errors.idProductInput[0] : ''"
                />
                
                <TextInput 
                    placeholder="Наименование"
                    v-model:input="title"
                    :errors="errors.title ? errors.title[0] : ''"
                />
                
                <TextInput 
                    placeholder="Цена"
                    v-model:input="price"
                    :errors="errors.price ? errors.price[0] : ''"
                />

                <TextInput 
                    placeholder="Страна-производитель"
                    v-model:input="countryOfOrigin"
                    :errors="errors.countryOfOrigin ? errors.countryOfOrigin[0] : ''"
                />

                <TextInput 
                    placeholder="Год выпуска"
                    v-model:input="yearOfRelease"
                    :errors="errors.yearOfRelease ? errors.yearOfRelease[0] : ''"
                />

                <TextInput 
                    placeholder="Модель"
                    v-model:input="model"
                    :errors="errors.model ? errors.model[0] : ''"
                />

                <div class="relative mt-9 pr-2">
                    <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-center bg-white border-light-black border-[1px]">
                        <div class="">
                            Фото товара

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
                    <div @click="editProduct" class="">
                        Обновить товар
                    </div>
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue';
import TextInput from '../reusable/TextInput.vue';
import axios from 'axios'
import Swal from 'sweetalert2'

let errors = ref([])

let idProductInput = ref(null)
let title = ref(null)
let price = ref(null)
let countryOfOrigin = ref(null)
let yearOfRelease = ref(null)
let model = ref(null)

watch(idProductInput, async(newValue) => {
    if (newValue.length > 1 && newValue[newValue.length - 1] == ' ') {
        await getProductById()
    }
})

let getProductById = async() => {
    try {
        let res = await axios('api/products/' + idProductInput.value)

        title.value = res.data.title
        price.value = res.data.price
        countryOfOrigin.value = res.data.countryOfOrigin
        yearOfRelease.value = res.data.yearOfRelease
        model.value = res.data.model
    } catch (err) {
        if (err.response.data.error_code == 1) {
            Swal.fire(
                'Неверный ID',
                '',
                'error'
            )

            idProductInput.value = idProductInput.value.replace(' ', '')

        }
        console.log(err)
    }
}

let editProduct = async() => {

    try {
        let res = await axios.patch('api/product/' + idProductInput.value, {
            title: title.value,
            price: price.value,
            countryOfOrigin: countryOfOrigin.value,
            yearOfRelease: yearOfRelease.value,
            model: model.value
        })

        Swal.fire(
            'Товар обновлён',
            `Товар с id = ${idProductInput.value} обновлён`,
            'success'
        )

        console.log(res)
    } catch (err) {
        errors.value = err.response.data.errors
    }
    
}

const props = defineProps(['modalVisible'])

let {modalVisible} = toRefs(props)
</script>