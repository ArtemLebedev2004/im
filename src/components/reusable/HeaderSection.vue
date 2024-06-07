<template>
    <!-- <nav class="lg:container m-auto flex flex-col p-3 min-[440px]:p-6 min-[550px]:px-9 sm:px-8 md:px-8">
        <div class="flex justify-between items-center">
            <div v-if="!modals[0].visible" @click="toggleModal(1)" class="flex flex-col gap-2">
                <svg viewBox="0 0 39 29" fill="none" class="w-10">
                    <line y1="1.5" x2="39" y2="1.5" stroke="black" stroke-width="3"/>
                    <line y1="14.5" x2="39" y2="14.5" stroke="black" stroke-width="3"/>
                    <line y1="27.5" x2="39" y2="27.5" stroke="black" stroke-width="3"/>
                </svg>
            </div>

            <div v-if="modals[0].visible" @click="toggleModal(1, true)" class="relative">
                <svg width="28" height="28" class="" viewBox="2 2 12 12">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>

            <div class="flex gap-6 min-[500px]:gap-8">
                <svg width="36" height="36" viewBox="0 0 38 38" fill="none" @click="toggleModal(2)">
                    <path d="M36 36L27.7966 27.7966M27.7966 27.7966C29.1999 26.3934 30.313 24.7276 31.0724 22.8942C31.8318 21.0608 32.2227 19.0958 32.2227 17.1113C32.2227 15.1269 31.8318 13.1619 31.0724 11.3285C30.313 9.49508 29.1999 7.82922 27.7966 6.42601C26.3934 5.02279 24.7276 3.9097 22.8942 3.15028C21.0608 2.39087 19.0958 2 17.1113 2C15.1269 2 13.1619 2.39087 11.3285 3.15028C9.49508 3.9097 7.82922 5.02279 6.426 6.42601C3.59208 9.25993 2 13.1036 2 17.1113C2 21.1191 3.59208 24.9627 6.426 27.7966C9.25993 30.6306 13.1036 32.2227 17.1113 32.2227C21.1191 32.2227 24.9627 30.6306 27.7966 27.7966Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div v-if="modals[1].visible" class="absolute z-30 inset-0">
                    <div @click="toggleModal(2, true)" class="flex justify-center py-2 bg-light-black">
                        <svg viewBox="2 2 12 12" class="w-7">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff"/>
                        </svg>
                    </div>

                    <div class="flex h-full bg-white">
                        <input type="text" placeholder="Поиск" class="w-full h-full px-2 text-xl outline-none">

                        <div class="flex items-center pr-3">
                            <svg width="36" height="36" viewBox="0 0 38 38" fill="none" @click="toggleModal(2)">
                                <path d="M36 36L27.7966 27.7966M27.7966 27.7966C29.1999 26.3934 30.313 24.7276 31.0724 22.8942C31.8318 21.0608 32.2227 19.0958 32.2227 17.1113C32.2227 15.1269 31.8318 13.1619 31.0724 11.3285C30.313 9.49508 29.1999 7.82922 27.7966 6.42601C26.3934 5.02279 24.7276 3.9097 22.8942 3.15028C21.0608 2.39087 19.0958 2 17.1113 2C15.1269 2 13.1619 2.39087 11.3285 3.15028C9.49508 3.9097 7.82922 5.02279 6.426 6.42601C3.59208 9.25993 2 13.1036 2 17.1113C2 21.1191 3.59208 24.9627 6.426 27.7966C9.25993 30.6306 13.1036 32.2227 17.1113 32.2227C21.1191 32.2227 24.9627 30.6306 27.7966 27.7966Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <svg @click="modals[3].visible ? toggleModal(4, true) : toggleModal(4)" width="36" height="36" viewBox="0 0 46 46" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 22.7285C0 16.7005 2.40081 10.9194 6.67428 6.65701C10.9478 2.3946 16.7438 0 22.7874 0C28.831 0 34.6271 2.3946 38.9006 6.65701C43.174 10.9194 45.5749 16.7005 45.5749 22.7285C45.5749 28.7564 43.174 34.5375 38.9006 38.7999C34.6271 43.0623 28.831 45.4569 22.7874 45.4569C16.7438 45.4569 10.9478 43.0623 6.67428 38.7999C2.40081 34.5375 0 28.7564 0 22.7285ZM22.7874 3.26016C19.0041 3.26029 15.3024 4.35706 12.1326 6.41704C8.96282 8.47702 6.46155 11.4114 4.9331 14.8632C3.40465 18.3151 2.91491 22.1356 3.52345 25.8599C4.13199 29.5843 5.81258 33.052 8.36078 35.8412C9.90779 33.4243 12.0406 31.4354 14.5622 30.0583C17.0837 28.6811 19.9126 27.9601 22.7874 27.9619C25.6623 27.9598 28.4913 28.6806 31.0129 30.0578C33.5345 31.435 35.6673 33.4241 37.2141 35.8412C39.7623 33.052 41.4429 29.5843 42.0514 25.8599C42.66 22.1356 42.1702 18.3151 40.6418 14.8632C39.1133 11.4114 36.612 8.47702 33.4422 6.41704C30.2724 4.35706 26.5707 3.26029 22.7874 3.26016ZM34.7678 38.0992C33.5502 36.0063 31.8026 34.2693 29.6999 33.0623C27.5972 31.8552 25.2135 31.2206 22.7874 31.222C20.3614 31.2206 17.9776 31.8552 15.8749 33.0623C13.7723 34.2693 12.0246 36.0063 10.8071 38.0992C14.2297 40.7612 18.4473 42.2036 22.7874 42.1968C27.3016 42.1968 31.4579 40.6662 34.7678 38.0992ZM14.7019 19.3139C14.7019 17.175 15.5538 15.1237 17.0701 13.6113C18.5864 12.0989 20.643 11.2493 22.7874 11.2493C24.9318 11.2493 26.9884 12.0989 28.5048 13.6113C30.0211 15.1237 30.873 17.175 30.873 19.3139C30.873 21.4527 30.0211 23.504 28.5048 25.0164C26.9884 26.5288 24.9318 27.3785 22.7874 27.3785C20.643 27.3785 18.5864 26.5288 17.0701 25.0164C15.5538 23.504 14.7019 21.4527 14.7019 19.3139ZM22.7874 14.5094C22.1549 14.5094 21.5285 14.6337 20.9441 14.8751C20.3597 15.1166 19.8286 15.4705 19.3814 15.9166C18.9341 16.3627 18.5793 16.8924 18.3372 17.4753C18.0951 18.0582 17.9705 18.6829 17.9705 19.3139C17.9705 19.9448 18.0951 20.5695 18.3372 21.1524C18.5793 21.7354 18.9341 22.265 19.3814 22.7111C19.8286 23.1573 20.3597 23.5112 20.9441 23.7526C21.5285 23.994 22.1549 24.1183 22.7874 24.1183C24.065 24.1183 25.2902 23.6121 26.1935 22.7111C27.0968 21.8101 27.6043 20.5881 27.6043 19.3139C27.6043 18.0397 27.0968 16.8176 26.1935 15.9166C25.2902 15.0156 24.065 14.5094 22.7874 14.5094Z" fill="black"/>
                </svg>

            </div>
        </div>

        <NavBarModal v-if="modals[0].visible" @openModal="toggleModal(3)"/>
        <CreatingApplicationModal v-if="modals[2].visible" @closeModal="toggleModal(3, true)"/>
        <UserModal v-if="modals[3].visible" @openSignInModal="toggleModal(5)" @openSignUpModal="toggleModal(6)" />
        <SignInModal v-if="modals[4].visible" @closeModal="toggleModal(5, true)" />
        <SignUpModal v-if="modals[5].visible" @closeModal="toggleModal(6, true)" />
    </nav> -->

    <nav class="md:hidden flex flex-col">
        <div class="p-3 min-[568px]:p-5 sm:px-8 md:px-8">
            <div class="flex justify-between items-center">
                <div v-if="!modals[0].visible" @click="toggleModal(1)" class="cursor-pointer">
                    <div class="w-9 h-[3px] bg-light-black"></div>
                    <div class="w-9 h-[3px] my-2 bg-light-black"></div>
                    <div class="w-9 h-[3px] bg-light-black"></div>
                </div>

                <div v-if="modals[0].visible" @click="toggleModal(1, true)" class="relative">
                    <svg width="28" height="28" class="" viewBox="2 2 12 12">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>

                <div @click="toggleModal(3)" class="relative">
                    <div class="
                        relative 
                        z-10 
                        w-full 
                        px-2 py-2 md:py-2 lg:py-3 xl:py-4 min-[1920px]:py-5
                        text-lg min-[480px]:text-xl sm:max-md:text-2xl lg:text-2xl xl:text-3xl min-[1920px]:text-4xl
                        text-white 
                        text-center 
                        bg-light-black
                        
                    ">
                        <div class="">
                            Создать заявку
                        </div>
                    </div>

                    
                </div>
            </div>

            <NavBarModal v-if="modals[0].visible" @openModal="toggleModal(3)"/>
            <CreatingApplicationModal v-if="modals[2].visible" @closeModal="toggleModal(3, true)"/>
            <UserModal v-if="modals[3].visible" @openSignInModal="toggleModal(5)" @openSignUpModal="toggleModal(6)" />
            <SignInModal v-if="modals[4].visible" @closeModal="toggleModal(5, true)" />
            <SignUpModal v-if="modals[5].visible" @closeModal="toggleModal(6, true)" />
        </div>
    </nav>

    <nav class="max-md:hidden lg:container m-auto sticky inset-x-0 top-0 z-20 flex flex-col px-9 pt-10 pb-10 bg-white">
        <div class="flex justify-between items-center">
            <div v-if="!modals[0].visible" @click="toggleModal(1)" class="cursor-pointer">
                <div class="w-9 min-[1920px]:w-12 h-[3px]  min-[1920px]:h-[4px] bg-light-black"></div>
                <div class="w-9 min-[1920px]:w-12 h-[3px]   min-[1920px]:h-[4px] my-2 min-[1920px]:my-[10px] bg-light-black"></div>
                <div class="w-9 min-[1920px]:w-12 h-[3px]  min-[1920px]:h-[4px] bg-light-black"></div>
            </div>

            <div v-if="modals[0].visible" @click="toggleModal(1, true)" class="relative cursor-pointer">
                <svg viewBox="2 2 12 12" class="w-7 md:max-xl:w-5 min-[1920px]:w-9">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>

            <div @click="toggleModal(3)" class="relative pr-2">
                <div class="
                    relative 
                    z-10 
                    w-full 
                    px-2 py-2 md:py-2 lg:py-3 xl:py-4 min-[1920px]:py-5 min-[1920px]:px-4
                    min-[480px]:text-xl min-[1920px]:text-3xl
                    text-white 
                    text-center 
                    bg-light-black
                    border
                    border-light-black
                    cursor-pointer
                    transition-all duration-150 ease-in-out hover:bg-white hover:text-light-black
                    peer
                ">
                    <div class="">
                        Создать заявку
                    </div>
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px] transition-all duration-150 ease-in-out peer-hover:bg-light-black">
                </div>
            </div>
        </div>

        <NavBarModal v-if="modals[0].visible" @openModal="toggleModal(3)"/>
        <UserModal v-if="modals[3].visible" @openSignInModal="toggleModal(5)" @openSignUpModal="toggleModal(6)" />
        <SignInModal v-if="modals[4].visible" @closeModal="toggleModal(5, true)" />
        <SignUpModal v-if="modals[5].visible" @closeModal="toggleModal(6, true)" />
    </nav>
    <CreatingApplicationModal v-if="modals[2].visible" @closeModal="toggleModal(3, true)"/>

    <div v-if="idOpenModal" @click="toggleModal(idOpenModal, true)" class="fixed inset-x-0 h-screen z-10 bg-slate-400/75"></div>

</template>

<script setup>
import SignUpModal from '@/components/modals/SignUpModal.vue';
import SignInModal from '@/components/modals/SignInModal.vue';
import CreatingApplicationModal from '@/components/modals/CreatingApplicationModal.vue';
import NavBarModal from "@/components/modals/NavBarModal.vue";
import UserModal from '@/components/modals/UserModal.vue';
import { ref } from "vue";

let idOpenModal = ref(false)

let modals = ref([
    {
        id: 1,
        name: "Меню",
        visible: false
    },
    {
        id: 2,
        name: "Поиск",
        visible: false
    },
    {
        id: 3,
        name: "Создание заявки",
        visible: false
    },
    {
        id: 4,
        name: "UserModal",
        visible: false
    },
    {
        id: 5,
        name: "Вход",
        visible: false
    },
    {
        id: 6,
        name: "Регистрация",
        visible: false
    },
])

function toggleModal(id, isClose) {
    if (!isClose) {
        if (idOpenModal.value) {
            modals.value[idOpenModal.value - 1].visible = false
        }

        modals.value[id - 1].visible = true
        idOpenModal.value = id
    } else {
        modals.value[id - 1].visible = false
        idOpenModal.value = 0
    }
}
</script>