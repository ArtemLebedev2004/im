<template>
    <section class="lg:container m-auto pt-[85px] min-[440px]:pt-[105px] px-3 min-[440px]:px-6 min-[550px]:px-9 min-[1920px]:pb-72">
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
                
                <div class="flex gap-12">
                    <!-- <AddProduct @openModal="toggleModal(1)" @closeModal="toggleModal(1, true)" :modalVisible="modals[0].visible" />

                    <EditProduct @openModal="toggleModal(2)" @closeModal="toggleModal(2, true)" :modalVisible="modals[1].visible"/>

                    <DeleteProduct @openModal="toggleModal(3)" @closeModal="toggleModal(3, true)" :modalVisible="modals[2].visible"/> -->
                </div>
                
            </div>
            
            <div class="mt-10 overflow-auto">
                <table class="w-full text-xl text-center">
                    <thead class=" bg-black text-white">
                        <tr class="">
                            <td>#</td>
                            <td>Описание</td>
                            <td>E-mail</td>
                            <!-- <td>Статус</td>
                            <td>Дата создания</td> -->
                        </tr>
                    </thead>

                    <tbody class="text-center">
                        <tr v-for="order in orders" :key="order.id">
                            <td>{{order.id}}</td>
                            <td>{{ order.description }}</td>
                            <td>{{ order.email }}</td>
                            <!-- <td>{{ order.type }}</td>
                            <td class="">{{ product.date }}</td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script setup>
// import AddProduct from '@/components/modals/AddProduct.vue';
// import DeleteProduct from '@/components/modals/DeleteProduct.vue';
// import EditProduct from '@/components/modals/EditProduct.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

// let idOpenModal = ref(false)

let orders = ref(null)

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
// function toggleModal(id, isClose) {
//     if (!isClose) {
//         if (idOpenModal.value) {
//             modals.value[idOpenModal.value - 1].visible = false
//         }

//         modals.value[id - 1].visible = true
//         idOpenModal.value = id
//     } else {
//         modals.value[id - 1].visible = false
//         idOpenModal.value = 0
//     }
// }

onMounted(async() => {
    await getOrders()
})

let getOrders = async() => {
    let res = await axios('http://127.0.0.1:8000/api/orders')

    orders.value = res.data.content
    console.log(orders.value)
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