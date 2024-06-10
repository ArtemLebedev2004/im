<template>
    <section class="lg:container m-auto pt-[85px] min-[440px]:pt-[105px] px-3 min-[440px]:px-6 min-[550px]:px-9 min-[1920px]:pb-60">
        <div class="">
            <!-- <div class="xl:flex xl:justify-between">
                <div class="flex justify-between xl:w-[88%]">
                    <svg  viewBox="0 0 15 28" fill="none" class="w-4">
                        <path d="M13 2L2 14L13 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <div class="flex justify-between min-[480px]:gap-6 items-center w-4/5 min-[1920px]:w-[85%] text-2xl text-center">
                        <div class="max-[479px]:w-full">
                            <div class="w-6 h-px m-auto bg-black"></div>
                            Сегодня
                        </div>

                        <div class="max-[479px]:w-full text-[#a5a5a5]">
                            Завтра
                        </div>

                        <div class="max-[479px]:hidden max-[619px]:w-min text-[#a5a5a5]">
                            Ср, 29 ноября 
                        </div>

                        <div class="max-[850px]:hidden text-[#a5a5a5]">
                            Чт, 30 ноября 
                        </div>

                        <div class="max-xl:hidden text-[#a5a5a5]">
                            Пт, 1 декабря 
                        </div>

                        <div class="max-[1920px]:hidden text-[#a5a5a5]">
                            Сб, 2 декабря 
                        </div>
                    </div>
                    
                    <svg  viewBox="0 0 15 28" fill="none" class="w-4 rotate-180">
                        <path d="M13 2L2 14L13 26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div> -->
                
                <!-- <div class="max-xl:hidden">
                    <svg viewBox="0 0 45 43" fill="none" class="w-[45px]">
                        <path d="M42.5394 5.73334H37.9691V8.6H42.1879V40.1333H2.81286V8.6H7.03161V5.73334H2.4613C2.13257 5.73894 1.80814 5.81049 1.50655 5.94391C1.20495 6.07732 0.932101 6.26999 0.703573 6.51091C0.475045 6.75182 0.295319 7.03627 0.17466 7.34799C0.0540016 7.65971 -0.00522557 7.99261 0.000361478 8.32767V40.4057C-0.00522557 40.7407 0.0540016 41.0736 0.17466 41.3854C0.295319 41.6971 0.475045 41.9815 0.703573 42.2224C0.932101 42.4633 1.20495 42.656 1.50655 42.7894C1.80814 42.9229 2.13257 42.9944 2.4613 43H42.5394C42.8681 42.9944 43.1926 42.9229 43.4942 42.7894C43.7958 42.656 44.0686 42.4633 44.2971 42.2224C44.5257 41.9815 44.7054 41.6971 44.8261 41.3854C44.9467 41.0736 45.0059 40.7407 45.0004 40.4057V8.32767C45.0059 7.99261 44.9467 7.65971 44.8261 7.34799C44.7054 7.03627 44.5257 6.75182 44.2971 6.51091C44.0686 6.26999 43.7958 6.07732 43.4942 5.94391C43.1926 5.81049 42.8681 5.73894 42.5394 5.73334Z" fill="black"/>
                        <path d="M8.4375 17.2H11.25V20.0667H8.4375V17.2Z" fill="black"/>
                        <path d="M16.875 17.2H19.6875V20.0667H16.875V17.2Z" fill="black"/>
                        <path d="M25.3125 17.2H28.125V20.0667H25.3125V17.2Z" fill="black"/>
                        <path d="M33.75 17.2H36.5625V20.0667H33.75V17.2Z" fill="black"/>
                        <path d="M8.4375 24.3667H11.25V27.2333H8.4375V24.3667Z" fill="black"/>
                        <path d="M16.875 24.3667H19.6875V27.2333H16.875V24.3667Z" fill="black"/>
                        <path d="M25.3125 24.3667H28.125V27.2333H25.3125V24.3667Z" fill="black"/>
                        <path d="M33.75 24.3667H36.5625V27.2333H33.75V24.3667Z" fill="black"/>
                        <path d="M8.4375 31.5333H11.25V34.4H8.4375V31.5333Z" fill="black"/>
                        <path d="M16.875 31.5333H19.6875V34.4H16.875V31.5333Z" fill="black"/>
                        <path d="M25.3125 31.5333H28.125V34.4H25.3125V31.5333Z" fill="black"/>
                        <path d="M33.75 31.5333H36.5625V34.4H33.75V31.5333Z" fill="black"/>
                        <path d="M11.25 11.4667C11.623 11.4667 11.9806 11.3157 12.2444 11.0469C12.5081 10.7781 12.6562 10.4135 12.6562 10.0333V1.43333C12.6562 1.05319 12.5081 0.688616 12.2444 0.419814C11.9806 0.151011 11.623 0 11.25 0C10.877 0 10.5194 0.151011 10.2556 0.419814C9.99191 0.688616 9.84375 1.05319 9.84375 1.43333V10.0333C9.84375 10.4135 9.99191 10.7781 10.2556 11.0469C10.5194 11.3157 10.877 11.4667 11.25 11.4667Z" fill="black"/>
                        <path d="M33.75 11.4667C34.123 11.4667 34.4806 11.3157 34.7444 11.0469C35.0081 10.7781 35.1562 10.4135 35.1562 10.0333V1.43333C35.1562 1.05319 35.0081 0.688616 34.7444 0.419814C34.4806 0.151011 34.123 0 33.75 0C33.377 0 33.0194 0.151011 32.7556 0.419814C32.4919 0.688616 32.3438 1.05319 32.3438 1.43333V10.0333C32.3438 10.4135 32.4919 10.7781 32.7556 11.0469C33.0194 11.3157 33.377 11.4667 33.75 11.4667Z" fill="black"/>
                        <path d="M15.4688 5.73334H29.5312V8.6H15.4688V5.73334Z" fill="black"/>
                    </svg>
                </div> -->
            <!-- </div> -->


            <!-- <div class="flex justify-between gap-4 py-2 mt-10 bg-white" :class="!idOpenModal ?  'sticky top-[59px]' : ''">

                <svg viewBox="0 0 45 43" fill="none" class=" w-[45px]">
                    <path d="M42.5394 5.73334H37.9691V8.6H42.1879V40.1333H2.81286V8.6H7.03161V5.73334H2.4613C2.13257 5.73894 1.80814 5.81049 1.50655 5.94391C1.20495 6.07732 0.932101 6.26999 0.703573 6.51091C0.475045 6.75182 0.295319 7.03627 0.17466 7.34799C0.0540016 7.65971 -0.00522557 7.99261 0.000361478 8.32767V40.4057C-0.00522557 40.7407 0.0540016 41.0736 0.17466 41.3854C0.295319 41.6971 0.475045 41.9815 0.703573 42.2224C0.932101 42.4633 1.20495 42.656 1.50655 42.7894C1.80814 42.9229 2.13257 42.9944 2.4613 43H42.5394C42.8681 42.9944 43.1926 42.9229 43.4942 42.7894C43.7958 42.656 44.0686 42.4633 44.2971 42.2224C44.5257 41.9815 44.7054 41.6971 44.8261 41.3854C44.9467 41.0736 45.0059 40.7407 45.0004 40.4057V8.32767C45.0059 7.99261 44.9467 7.65971 44.8261 7.34799C44.7054 7.03627 44.5257 6.75182 44.2971 6.51091C44.0686 6.26999 43.7958 6.07732 43.4942 5.94391C43.1926 5.81049 42.8681 5.73894 42.5394 5.73334Z" fill="black"/>
                    <path d="M8.4375 17.2H11.25V20.0667H8.4375V17.2Z" fill="black"/>
                    <path d="M16.875 17.2H19.6875V20.0667H16.875V17.2Z" fill="black"/>
                    <path d="M25.3125 17.2H28.125V20.0667H25.3125V17.2Z" fill="black"/>
                    <path d="M33.75 17.2H36.5625V20.0667H33.75V17.2Z" fill="black"/>
                    <path d="M8.4375 24.3667H11.25V27.2333H8.4375V24.3667Z" fill="black"/>
                    <path d="M16.875 24.3667H19.6875V27.2333H16.875V24.3667Z" fill="black"/>
                    <path d="M25.3125 24.3667H28.125V27.2333H25.3125V24.3667Z" fill="black"/>
                    <path d="M33.75 24.3667H36.5625V27.2333H33.75V24.3667Z" fill="black"/>
                    <path d="M8.4375 31.5333H11.25V34.4H8.4375V31.5333Z" fill="black"/>
                    <path d="M16.875 31.5333H19.6875V34.4H16.875V31.5333Z" fill="black"/>
                    <path d="M25.3125 31.5333H28.125V34.4H25.3125V31.5333Z" fill="black"/>
                    <path d="M33.75 31.5333H36.5625V34.4H33.75V31.5333Z" fill="black"/>
                    <path d="M11.25 11.4667C11.623 11.4667 11.9806 11.3157 12.2444 11.0469C12.5081 10.7781 12.6562 10.4135 12.6562 10.0333V1.43333C12.6562 1.05319 12.5081 0.688616 12.2444 0.419814C11.9806 0.151011 11.623 0 11.25 0C10.877 0 10.5194 0.151011 10.2556 0.419814C9.99191 0.688616 9.84375 1.05319 9.84375 1.43333V10.0333C9.84375 10.4135 9.99191 10.7781 10.2556 11.0469C10.5194 11.3157 10.877 11.4667 11.25 11.4667Z" fill="black"/>
                    <path d="M33.75 11.4667C34.123 11.4667 34.4806 11.3157 34.7444 11.0469C35.0081 10.7781 35.1562 10.4135 35.1562 10.0333V1.43333C35.1562 1.05319 35.0081 0.688616 34.7444 0.419814C34.4806 0.151011 34.123 0 33.75 0C33.377 0 33.0194 0.151011 32.7556 0.419814C32.4919 0.688616 32.3438 1.05319 32.3438 1.43333V10.0333C32.3438 10.4135 32.4919 10.7781 32.7556 11.0469C33.0194 11.3157 33.377 11.4667 33.75 11.4667Z" fill="black"/>
                    <path d="M15.4688 5.73334H29.5312V8.6H15.4688V5.73334Z" fill="black"/>
                </svg>

                <div class="flex justify-between gap-4">
                    
                    <AddProduct @openModal="toggleModal(1)" @closeModal="toggleModal(1, true)" :modalVisible="modals[0].visible" />

                    <EditProduct @openModal="toggleModal(2)" @closeModal="toggleModal(2, true)" :modalVisible="modals[1].visible"/>

                    <DeleteProduct @openModal="toggleModal(3)" @closeModal="toggleModal(3, true)" :modalVisible="modals[2].visible"/>
                    
                </div>

                <svg viewBox="0 0 41 43" fill="none" class="w-10">
                    <path d="M19.1651 42.8903H14.9897V21.3064L-0.0546875 3.48116V0.109695H40.78V3.46191L26.452 21.2872V35.6378L19.1651 42.8903ZM17.8553 40.0383H17.9782L23.5864 34.4566V20.2868L37.5123 2.96174H3.2497L17.8553 20.2676V40.0383Z" fill="black"/>
                </svg>

            </div> -->

            <!-- <div class="max-xl:hidden flex gap-6 text-2xl">
                <div class="relative pr-2 pb-2">
                    <div class="relative z-10 py-2 px-4 border-2 border-light-black bg-white">
                        По году производства
                    </div>

                    <div class="absolute left-2 top-2 bottom-0 right-0 border-2 border-light-black">
                        
                    </div>
                </div>

                <div class="relative pr-2 pb-2">
                    <div class="relative z-10 py-2 px-4 border-2 border-light-black bg-white">
                        По году производства
                    </div>

                    <div class="absolute left-2 top-2 bottom-0 right-0 border-2 border-light-black">
                        
                    </div>
                </div>

                <div class="relative pr-2 pb-2">
                    <div class="relative z-10 py-2 px-4 border-2 border-light-black bg-white">
                        По году производства
                    </div>

                    <div class="absolute left-2 top-2 bottom-0 right-0 border-2 border-light-black">
                        
                    </div>
                </div>
            </div> -->
            <div class="max-xl:hidden flex justify-between gap-10 text-2xl mt-16">
                <!-- <div class="relative pr-2 pb-2">
                    <div class="relative z-10 flex items-center gap-5 py-2 px-4 border-2 border-light-black bg-white">
                        С планировкой

                        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L8.5 9L16 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div class="absolute left-2 top-2 bottom-0 right-0 border-2 border-light-black">
                        
                    </div>
                </div> -->
                <!-- <div class="flex gap-12">
                    <div class="relative pr-2 pb-2">
                        <div class="relative z-10 flex items-center gap-5 py-2 px-4 border-2 border-light-black bg-white">
                            Частные дома

                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L8.5 9L16 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        <div class="absolute left-2 top-2 bottom-0 right-0 border-2 border-light-black">
                            
                        </div>
                    </div>

                    <div class="relative pr-2 pb-2">
                        <div class="relative z-10 flex items-center gap-5 py-2 px-4 border-2 border-light-black bg-white">
                            Сначала новые

                            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L8.5 9L16 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        <div class="absolute left-2 top-2 bottom-0 right-0 border-2 border-light-black">
                            
                        </div>
                    </div>
                </div> -->
                
                <div class="w-full flex justify-between items-center">
                    <svg @click="toggleModal(1, false)" width="49" viewBox="0 0 49 49" fill="none" class="cursor-pointer">
                        <path d="M24.5 47C36.9264 47 47 36.9264 47 24.5C47 12.0736 36.9264 2 24.5 2C12.0736 2 2 12.0736 2 24.5C2 36.9264 12.0736 47 24.5 47Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.8564 24.5H34.1422" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.5 14.8564V34.1422" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <AddProduct v-if="modals[0].visible" @closeModal="toggleModal(1, false, true)" :modalVisible="modals[0].visible" />

                    <div class="w-max">
                        <input @keydown.enter="search" v-model="input" type="text" placeholder="ID" class="w-full outline-none border-light-black border-b-2">

                        <div v-if="errors.input" class="flex flex-wrap text-lg text-center text-red-500">
                            {{ errors.input[0] }}
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            <div class="mt-10 overflow-auto">
                <table class="w-full text-xl text-center">
                    <thead class=" bg-black text-white">
                        <tr class="">
                            <td>#</td>
                            <td>Название</td>
                            <td>Описание</td>
                            <td>Количество часов</td>
                            <td>Тип строения</td>
                            <td>Дата создания</td>
                            <td>Фото</td>
                            <td>Действия</td>
                        </tr>
                    </thead>

                    <tbody class="text-center">
                        <tr v-for="product in products" :key="product.id" class="relative w-max">
                            <td>{{ product.id }}</td>
                            <td>{{ product.title }}</td>
                            <td>{{ product.description }}</td>
                            <td>{{ product.amount }}</td>
                            <td>{{ product.type }}</td>
                            <td>{{ product.date }}</td>
                            <td><img :src="'http://127.0.0.1:8001/images/attachments/' + product.photo" alt="" class="w-52"></td>
                            <td>
                                <div class="flex justify-center gap-8">
                                    <svg @click="toggleModal(2, product.id)" width="45" viewBox="0 0 33 33" fill="none" class="cursor-pointer">
                                        <path d="M31.5475 6.50259L25.6775 0.602587C25.2897 0.216652 24.7647 0 24.2175 0C23.6704 0 23.1454 0.216652 22.7575 0.602587L1.94755 21.3826L0.047547 29.5826C-0.0179966 29.8823 -0.0157497 30.193 0.0541233 30.4917C0.123996 30.7905 0.259731 31.0699 0.45141 31.3095C0.64309 31.5491 0.885873 31.7428 1.16202 31.8766C1.43817 32.0104 1.74072 32.0807 2.04755 32.0826C2.19052 32.097 2.33458 32.097 2.47755 32.0826L10.7675 30.1826L31.5475 9.42259C31.9335 9.03469 32.1501 8.50977 32.1501 7.96259C32.1501 7.4154 31.9335 6.89048 31.5475 6.50259ZM9.76755 28.3826L1.99755 30.0126L3.76755 22.3926L19.3375 6.88259L25.3375 12.8826L9.76755 28.3826ZM26.6775 11.4326L20.6775 5.43259L24.1575 1.97259L30.0575 7.97259L26.6775 11.4326Z" fill="black"/>
                                    </svg>
                                    <EditProduct v-if="modals[1].visible && productId == product.id" @closeModal="toggleModal(2, product.id, true)"  :product="product"/>
                                    
                                    <svg @click="deleteProduct(product)" width="40" viewBox="0 0 28 32" fill="none">
                                        <path d="M5.232 32C4.336 32 3.57333 31.6807 2.944 31.0422C2.31467 30.4037 2 29.6306 2 28.7229V3.59163H0V1.56246H8V0H20V1.56246H28V3.59163H26V28.7229C26 29.6563 25.692 30.4362 25.076 31.0625C24.46 31.6889 23.6907 32.0014 22.768 32H5.232ZM24 3.59163H4V28.7229C4 29.0868 4.11533 29.3857 4.346 29.6198C4.57667 29.8538 4.872 29.9708 5.232 29.9708H22.77C23.0767 29.9708 23.3587 29.841 23.616 29.5812C23.8733 29.3215 24.0013 29.0347 24 28.7209V3.59163ZM9.616 25.9125H11.616V7.64997H9.616V25.9125ZM16.384 25.9125H18.384V7.64997H16.384V25.9125Z" fill="black"/>
                                    </svg>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script setup>
import AddProduct from '@/components/modals/AddProduct.vue';
import EditProduct from '@/components/modals/EditProduct.vue';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import eventBus from '@/eventBus';
import Swal from 'sweetalert2';

let idOpenModal = ref(false)
let productId = ref(false)

let products = ref(null)

let modals = ref([
    {
        id: 1,
        name: "Добавление товара",
        visible: false
    },
    {
        id: 2,
        name: "Редактирование товара",
        visible: false
    },
    {
        id: 3,
        name: "Удаление товара",
        visible: false
    }
])

console.log(modals.value[0].id)
function toggleModal(id, product_id, isClose) {
    if (!isClose) {
        if (idOpenModal.value) {
            modals.value[idOpenModal.value - 1].visible = false
        }

        modals.value[id - 1].visible = true
        idOpenModal.value = id
        productId.value = product_id
    } else {
        modals.value[id - 1].visible = false
        idOpenModal.value = 0
        productId.value = 0
    }
}

onMounted(async() => {
    eventBus.on('addProduct', async()=>{
        await getProducts()
    })

    eventBus.on('updateProduct', async()=>{
        await getProducts()
    })

    await getProducts()
})

let getProducts = async() => {
    let res = await axios('api/products')

    products.value = res.data.content
    console.log(products.value)
}

let deleteProduct = async(product) => {

try {
    

    Swal.fire({
        title: "Вы хотите удалить проект с id = " + product.id,
        showDenyButton: true,
        confirmButtonText: "Удалить",
        denyButtonText: `Не удалять`
    }).then(async(result) => {
        if (result.isConfirmed) {
            let res = await axios.delete('api/product/' + product.id)
            Swal.fire("Проект с id = " + product.id + " удалён", "", "success");
            console.log(res)

            await getProducts()
        } 
    })



} catch (err) {
    console.log(err)
}

}

let errors = ref([])

let input = ref(null)

watch(input, (newValue) => {
    // let regexp = /[&$?!\\^/#@"',`~=+\-_()[\]%:;№<>]/
    if (newValue == ' ') {
        input.value = ''
    } 
})

let search = async (e) => {
    try {
        if (e.target.value != '') {
            let res = await axios.post('api/search', {input: e.target.value})
            products.value = [res.data]
            console.log(res.data)
            errors = ref([])

        } else {
            await getProducts()
        }
    } catch (err) {
        if (err.response.data.code == 2) {
            console.log(err.response.data)
            errors.value = {input: [err.response.data.message]}
        } else {
            errors.value = err.response.data.warning.warnings[0]
        }
    }
}
</script>

<style>
/* thead td {
    border: 0;
} */

/* tr {
    border-bottom: 2px solid grey
} */

td {
    padding: 10px;
    border: 2px solid black
}
</style>