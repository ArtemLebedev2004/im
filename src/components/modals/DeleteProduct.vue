<template>
    <svg @click="$emit('openModal')" width="40" viewBox="0 0 28 32" fill="none">
        <path d="M5.232 32C4.336 32 3.57333 31.6807 2.944 31.0422C2.31467 30.4037 2 29.6306 2 28.7229V3.59163H0V1.56246H8V0H20V1.56246H28V3.59163H26V28.7229C26 29.6563 25.692 30.4362 25.076 31.0625C24.46 31.6889 23.6907 32.0014 22.768 32H5.232ZM24 3.59163H4V28.7229C4 29.0868 4.11533 29.3857 4.346 29.6198C4.57667 29.8538 4.872 29.9708 5.232 29.9708H22.77C23.0767 29.9708 23.3587 29.841 23.616 29.5812C23.8733 29.3215 24.0013 29.0347 24 28.7209V3.59163ZM9.616 25.9125H11.616V7.64997H9.616V25.9125ZM16.384 25.9125H18.384V7.64997H16.384V25.9125Z" fill="black"/>
    </svg>

    <div v-if="modalVisible" class="fixed z-30 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-5 bg-light-black">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14  min-[1920px]:px-20 py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Удаление проекта
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