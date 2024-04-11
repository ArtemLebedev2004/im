<template>
    <div @click="$emit('openModal')" class="p-4 bg-green rounded-full">
        <svg viewBox="0 0 25 26" fill="none" class="w-5">
            <path d="M23.2143 14.7857H14.2857V23.7143C14.2857 24.1879 14.0976 24.6421 13.7627 24.977C13.4278 25.3119 12.9736 25.5 12.5 25.5C12.0264 25.5 11.5722 25.3119 11.2373 24.977C10.9024 24.6421 10.7143 24.1879 10.7143 23.7143V14.7857H1.78571C1.31211 14.7857 0.85791 14.5976 0.523024 14.2627C0.188138 13.9278 0 13.4736 0 13C0 12.5264 0.188138 12.0722 0.523024 11.7373C0.85791 11.4024 1.31211 11.2143 1.78571 11.2143H10.7143V2.28571C10.7143 1.81211 10.9024 1.35791 11.2373 1.02302C11.5722 0.688137 12.0264 0.5 12.5 0.5C12.9736 0.5 13.4278 0.688137 13.7627 1.02302C14.0976 1.35791 14.2857 1.81211 14.2857 2.28571V11.2143H23.2143C23.6879 11.2143 24.1421 11.4024 24.477 11.7373C24.8119 12.0722 25 12.5264 25 13C25 13.4736 24.8119 13.9278 24.477 14.2627C24.1421 14.5976 23.6879 14.7857 23.2143 14.7857Z" fill="black"/>
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
                Добавление товара
            </div>

            <form class="my-10 min-[1920px]:my-16 pb-2 flex flex-col min-[1920px]:gap-4 text-xl min-[1920px]:text-3xl overflow-auto">
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
let price = ref(null)
let countryOfOrigin = ref(null)
let yearOfRelease = ref(null)
let model = ref(null)

const props = defineProps(['modalVisible'])

let {modalVisible} = toRefs(props)

let addProduct = async() => {

    try {
        let res = await axios.post('api/product', {
            title: title.value,
            price: price.value,
            countryOfOrigin: countryOfOrigin.value,
            yearOfRelease: yearOfRelease.value,
            model: model.value
        })

        Swal.fire(
            'Товар добавлен',
            '',
            'success'
        )

        console.log(res)
    } catch (err) {
        errors.value = err.response.data.errors
    }
    
}
</script>