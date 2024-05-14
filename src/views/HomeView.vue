<template>
    <header class="md:hidden fixed z-30 top-0 inset-x-0  bg-white">
        <nav class="flex flex-col">
            <div class="p-3 min-[568px]:p-5 sm:px-8 md:px-8">
                <div class="flex justify-between items-center">
                    <div v-if="!modals[0].visible" @click="toggleModal(1)">
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
    </header>
    
    <main>
        <section class="md:flex md:flex-row-reverse relative">
            <div class="max-md:fixed z-[-1] md:z-20 top-0 md:inset-y-0 md:w-1/3 min-[960px]:w-1/2 ">
                <div class="sticky top-0 md:z-20 min-[480px]:w-full min-[480px]:h-56 md:h-screen min-[767px]:bg-[url('../assets/img/LogoImg.png')] min-[480px]:bg-cover min-[480px]:bg-[center_top_50%]">
                    <img src="../assets/img/LogoImg.png" alt="" class="min-[768px]:hidden relative">
                </div>
            </div>

            

            <div class="w-full min-[960px]:w-1/2 relative ">
                <nav class="max-md:hidden sticky inset-x-0 top-0 z-20 flex flex-col px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14 min-[1920px]:px-20 pt-7 pb-9 lg:pt-10 xl:pt-12 min-[1920px]:pt-20 bg-white">
                    <div class="flex justify-between items-center">
                        <div v-if="!modals[0].visible" @click="toggleModal(1)">
                            <div class="w-9 min-[1920px]:w-12 h-[3px]  min-[1920px]:h-[4px] bg-light-black"></div>
                            <div class="w-9 min-[1920px]:w-12 h-[3px]   min-[1920px]:h-[4px] my-2 min-[1920px]:my-[10px] bg-light-black"></div>
                            <div class="w-9 min-[1920px]:w-12 h-[3px]  min-[1920px]:h-[4px] bg-light-black"></div>
                        </div>

                        <div v-if="modals[0].visible" @click="toggleModal(1, true)" class="relative">
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
                            ">
                                <div class="">
                                    Создать заявку
                                </div>
                            </div>

                            <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                            </div>
                        </div>
                    </div>

                    <NavBarModal v-if="modals[0].visible" @openModal="toggleModal(3)"/>
                    <CreatingApplicationModal v-if="modals[2].visible" @closeModal="toggleModal(3, true)"/>
                    <UserModal v-if="modals[3].visible" @openSignInModal="toggleModal(5)" @openSignUpModal="toggleModal(6)" />
                    <SignInModal v-if="modals[4].visible" @closeModal="toggleModal(5, true)" />
                    <SignUpModal v-if="modals[5].visible" @closeModal="toggleModal(6, true)" />
                </nav>

                <div class=" max-[609px]:mt-72 max-[767px]:mt-96 max-md:pt-10 min-[610px]:pt-10  max-md:pb-16 min-[610px]:pb-[80px] px-3 min-[568px]:px-5 min-[640px]:px-8 md:px-0 bg-white">
                    <div class="">
                        

                        <div class="md:max-[959px]::w-2/3 md:p-8 min-[768px]:py-0 lg:py-0 xl:px-10 min-[1366px]:px-12 2xl:px-14 min-[1920px]:px-20 md:max-[767px]:pt-20 lg:pt-24 lg:bottom-0">
                            
                                <h1 class="text-[30px] min-[480px]:text-4xl sm:text-5xl lg:text-[46px] xl:text-6xl min-[1920px]:text-7xl leading-8 font-bold">Илья Муромец</h1>

                                <div class="relative mt-10 lg:mt-12 min-[1920px]:mt-20 flex justify-between">
                                    
                                    <div class="w-8 min-[410px]:w-6 h-32 min-[410px]:h-28 md:h-20 lg:h-24 xl:h-28 border-light-black border-l-[1px] min-[1920px]:border-l-2 border-t-[1px] min-[1920px]:border-t-2"></div>

                                    <div class="
                                        absolute 
                                        w-56 min-[410px]:w-[290px] min-[480px]:w-[345px] sm:max-md:w-[410px] lg:w-[385px] xl:w-[482px] min-[1920px]:w-[580px]
                                        text-lg min-[480px]:text-xl sm:max-md:text-2xl lg:text-2xl xl:text-3xl min-[1920px]:text-4xl 
                                        leading-8 min-[1920px]:leading-[50px]
                                        h-max 
                                        m-auto 
                                        inset-0
                                    ">
                                        Компания по визуализации и созданию 3D-моделей
                                    </div>

                                    <div class="w-8 min-[410px]:w-6 h-32 min-[410px]:h-28 md:h-20 lg:h-24 xl:h-28 border-light-black border-b-[1px] min-[1920px]:border-b-2 border-r-[1px] min-[1920px]:border-r-2"></div>
                                
                                </div>

                                <div class="mt-10 min-[768px]:mt-20 lg:mt-48 relative italic text-lg min-[480px]:text-xl sm:max-md:text-2xl lg:text-2xl xl:text-3xl min-[1920px]:text-4xl">
                                    <div>Вы придумываете идеи -</div> 
                                    <div class="absolute right-0">мы их визуализируем</div>
                                </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 md:px-0 max-md:py-10 min-[610px]:pt-20 min-[768px]:pt-20 bg-white max-[609px]:mt-72 max-[767px]:mt-96 ">

                    <!-- <div class="relative md:z-20 md:inset-y-0 md:w-1/3 min-[960px]:w-1/2 max-md:pr-2 ">
                        <div class="relative  min-[480px]:w-full min-[480px]:h-56 md:hidden min-[480px]:bg-[url('../assets/img/LogoImg.png')] min-[480px]:bg-cover min-[480px]:bg-[center_top_50%] ">
                            <img src="../assets/img/LogoImg.png" alt="" class="min-[480px]:hidden relative">
                        </div>

                        <div class="md:hidden absolute top-2 left-2 right-0 h-full border-light-black border-[1px]">
                        </div>
                    </div> -->

                    <div class=" md:p-8 md:max-[767px]:py-12 min-[768px]:py-0 lg:py-16 xl:py-20 min-[1920px]:py-24 xl:px-10 min-[1366px]:px-12 2xl:px-14 min-[1920px]:px-20">

                        <h2 class="text-[30px] min-[480px]:text-4xl sm:text-5xl lg:text-[45px] xl:text-[57px] min-[1920px]:text-7xl leading-8 font-bold">Наши услуги</h2>

                        <div class="relative mt-10 lg:mt-14 min-[1920px]:mt-16 flex justify-between">
                            <div class="
                            w-8 min-[410px]:w-6 
                            h-[300px] sm:h-[370px] md:h-[340px] lg:h-[360px] xl:h-[400px] min-[1920px]:h-[550px] 
                            border-light-black border-l-[1px] min-[1920px]:border-l-2 border-t-[1px] min-[1920px]:border-t-2
                            "></div>

                            <div class="
                                absolute 
                                w-[250px] min-[410px]:w-[250px] min-[480px]:w-[300px] sm:w-[330px] md:w-[262px] min-[768px]:w-[350px] xl:w-[420px] 2xl:w-max
                                text-lg min-[480px]:text-xl sm:max-md:text-2xl lg:text-2xl xl:text-3xl min-[1920px]:text-4xl
                                leading-[23px]
                                min-[1920px]:leading-[3rem]
                                h-max 
                                m-auto 
                                inset-0
                            ">
                                <div class="flex flex-col gap-5 lg:gap-8">
                                    <div class="flex items-center gap-3 ">
                                        <div class="bg-black rounded-full text-white min-w-[40px] min-h-[40px] lg:min-w-[80px] lg:min-h-[80px] flex items-center justify-center">1</div>
                                        <div>Создание 3D-визуализации</div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <div class="bg-black rounded-full text-white min-w-[40px] min-h-[40px] lg:min-w-[80px] lg:min-h-[80px] flex items-center justify-center">2</div>
                                        <div>Создание 3D-моделей</div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <div class="bg-black rounded-full text-white min-w-[40px] min-h-[40px] lg:min-w-[80px] lg:min-h-[80px] flex items-center justify-center">3</div>
                                        <div>Создание 3D-анимации</div>
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <div class="bg-black rounded-full text-white min-w-[40px] min-h-[40px] lg:min-w-[80px] lg:min-h-[80px] flex items-center justify-center">4</div>
                                        <div>Создание 3D-иконок</div>
                                    </div>
                                </div>
                                    
                                
                            </div>

                            <div class="
                            w-8 min-[410px]:w-6 
                            h-[300px] sm:h-[370px] md:h-[340px] lg:h-[360px] xl:h-[400px] min-[1920px]:h-[550px] 
                            border-light-black border-r-[1px] min-[1920px]:border-r-2 border-b-[1px] min-[1920px]:border-b-2
                            "></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            

        </section>

        <nav class="max-md:hidden mt-10 sticky inset-x-0 top-0 z-50 flex flex-col lg:px-28 xl:px-36 min-[1920px]:px-52 pt-5 pb-7 lg:pt-10 xl:pt-12 min-[1920px]:pt-20 bg-white">
            <div class="md:max-lg:px-8">
                <div class="flex justify-between items-center">
                    <div v-if="!modals[0].visible" @click="toggleModal(1)">
                        <div class="w-9 min-[1920px]:w-12 h-[3px]  min-[1920px]:h-[4px] bg-light-black"></div>
                        <div class="w-9 min-[1920px]:w-12 h-[3px]   min-[1920px]:h-[4px] my-2 min-[1920px]:my-[10px] bg-light-black"></div>
                        <div class="w-9 min-[1920px]:w-12 h-[3px]  min-[1920px]:h-[4px] bg-light-black"></div>
                    </div>

                    <div v-if="modals[0].visible" @click="toggleModal(1, true)" class="relative">
                        <svg width="28" height="28" class="" viewBox="2 2 12 12">
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
                            ">
                                <div class="">
                                    Создать заявку
                                </div>
                            </div>

                            <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
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

        <section class="bg-white">
           
            <div class="px-3 max-md:pb-10 min-[568px]:px-5 min-[640px]:px-8 md:px-0 max-md:py-10 max-[609px]:mt-72 max-[767px]:mt-96  md:flex md:flex-row-reverse bg-white">

                <div class="md:w-full  md:p-8 md:py-16 lg:py-16 xl:py-20 min-[1920px]:py-24 lg:px-28 xl:px-36 min-[1920px]:px-52 bg-white">

                    <h2 class="
                        text-[30px] min-[480px]:text-4xl sm:text-5xl lg:text-[45px] xl:text-[56px] min-[1920px]:text-7xl
                        leading-8 xl:leading-[3.5rem] 
                        font-bold
                    ">
                        Почему именно мы?
                    </h2>

                    <div class="relative mt-10 lg:mt-14 min-[1920px]:mt-24 flex justify-between">
                        <div class="
                            w-8 min-[410px]:w-6 
                            h-[1050px] min-[568px]:h-[550px] md:h-[450px]  xl:h-[400px] min-[1920px]:h-[520px]
                            border-light-black 
                            border-l-[1px] min-[1920px]:border-l-2 border-t-[1px] min-[1920px]:border-t-2
                        "></div>

                        <div class="
                            absolute 
                            w-[190px] min-[410px]:w-[318px] min-[480px]:w-[330px] min-[568px]:w-[420px] md:w-[600px] lg:w-[650px] xl:w-[740px] 2xl:w-[530px] min-[1920px]:w-[1000px]
                            text-lg min-[480px]:text-xl sm:max-md:text-2xl lg:text-2xl xl:text-3xl min-[1920px]:text-4xl
                            h-max 
                            m-auto 
                            inset-0
                            grid grid-cols-1 min-[568px]:grid-cols-2 md:grid-cols-3 gap-12 md:gap-y-20 lg:gap-x-20 min-[1920px]:gap-y-24 min-[1920px]:gap-x-[105px]
                            text-center
                            ">
                            <div class="flex flex-col items-center gap-3">
                                <div class="h-[73px] min-[1920px]:h-[100px] flex items-center">
                                    <svg viewBox="0 0 89 124" fill="none" class="w-[51px] min-[1920px]:w-[70px]">
                                        <path d="M44.5 97.4261C41.3912 97.4269 38.3796 96.3477 35.9847 94.3749C33.5898 92.402 31.9617 89.6591 31.3814 86.6194C22.6478 83.942 14.958 78.6458 9.36281 71.4546C5.13429 66.0351 2.22878 59.7118 0.875482 52.9837C-0.47782 46.2555 -0.241903 39.3063 1.56462 32.6844C3.37115 26.0625 6.69887 19.9489 11.2853 14.8258C15.8717 9.70276 21.5914 5.7104 27.9932 3.16363C34.395 0.616865 41.3038 -0.414645 48.1746 0.150467C55.0455 0.715578 61.6904 2.86185 67.5853 6.42C73.4802 9.97814 78.4638 14.8508 82.1431 20.6537C85.8223 26.4566 88.0966 33.031 88.7864 39.8582C89.0267 42.2941 87.0064 44.2783 84.55 44.2783C82.0936 44.2783 80.1267 42.2853 79.833 39.8582C79.0387 33.5941 76.577 27.6551 72.7028 22.6556C68.8285 17.6561 63.6824 13.7777 57.7968 11.4218C51.9112 9.06596 45.5001 8.31811 39.2267 9.25569C32.9533 10.1933 27.0456 12.7822 22.1148 16.7546C17.184 20.727 13.4093 25.9386 11.1812 31.8502C8.95314 37.7617 8.35265 44.1584 9.44187 50.3784C10.5311 56.5984 13.2705 62.4157 17.3765 67.2285C21.4826 72.0412 26.8062 75.6746 32.7965 77.7526C33.929 75.6963 35.5881 73.9749 37.6054 72.7632C39.6226 71.5516 41.9261 70.8929 44.2819 70.854C46.6376 70.8152 48.9618 71.3975 51.0183 72.5419C53.0747 73.6863 54.7903 75.352 55.9907 77.3698C57.191 79.3876 57.8335 81.6857 57.8527 84.0306C57.872 86.3755 57.2674 88.6837 56.1003 90.7208C54.9332 92.7578 53.2452 94.4512 51.2078 95.6289C49.1704 96.8066 46.8561 97.4267 44.5 97.4261ZM8.90001 84.1392V83.9C6.46765 81.7296 4.23935 79.3428 2.24281 76.7693C0.777258 78.9501 -0.00344414 81.5155 1.14218e-05 84.1392V88.5681C1.14218e-05 106.027 16.554 124 44.5 124C72.446 124 89 106.027 89 88.5681V84.1392C89 80.6152 87.5935 77.2357 85.0899 74.7439C82.5863 72.2521 79.1906 70.8522 75.65 70.8522H62.3C64.2491 73.421 65.6375 76.4327 66.305 79.7102H75.65C76.8302 79.7102 77.9621 80.1768 78.7966 81.0074C79.6312 81.838 80.1 82.9645 80.1 84.1392V88.5681C80.1 101.306 67.3552 115.142 44.5 115.142C21.6448 115.142 8.90001 101.306 8.90001 88.5681V84.1392ZM44.5 61.9943C39.4063 61.9868 34.4655 63.7261 30.5092 66.9193C26.6175 64.5473 23.4043 61.2187 21.1785 57.2536C18.9528 53.2886 17.7893 48.8203 17.8 44.2783C17.8013 39.6454 19.0196 35.0934 21.3339 31.0737C23.6483 27.0539 26.9783 23.7063 30.9937 21.3627C35.0091 19.0191 39.5703 17.7611 44.2249 17.7133C48.8796 17.6656 53.4659 18.8299 57.529 21.0906C61.592 23.3513 64.9906 26.63 67.3877 30.6014C69.7847 34.5728 71.097 39.0989 71.1942 43.7308C71.2914 48.3627 70.1702 52.9394 67.9419 57.007C65.7135 61.0746 62.4555 64.4916 58.4908 66.9193C54.5345 63.7261 49.5937 61.9868 44.5 61.9943ZM26.7 44.2783C26.7 48.9769 28.5754 53.483 31.9135 56.8054C35.2517 60.1278 39.7792 61.9943 44.5 61.9943C49.2209 61.9943 53.7484 60.1278 57.0865 56.8054C60.4247 53.483 62.3 48.9769 62.3 44.2783C62.3 39.5798 60.4247 35.0737 57.0865 31.7513C53.7484 28.4289 49.2209 26.5624 44.5 26.5624C39.7792 26.5624 35.2517 28.4289 31.9135 31.7513C28.5754 35.0737 26.7 39.5798 26.7 44.2783Z" fill="black"/>
                                    </svg>
                                </div>

                                <div class="text-sm min-[1920px]:text-xl">Доступная консультация и круглосуточная онлайн поддержка</div>
                            </div>

                            <div class="flex flex-col items-center gap-3">
                                <div class="h-[73px] min-[1920px]:h-[100px] flex items-center">
                                    <svg viewBox="0 0 100 100" fill="none" class="w-16 min-[1920px]:w-[90px]">
                                        <path d="M16.5483 69.0318C9.44122 61.9201 5.8854 58.3689 4.56519 53.7551C3.24038 49.1412 4.37199 44.2422 6.6352 34.4487L7.93701 28.7999C9.83682 20.5566 10.789 16.435 13.6089 13.6106C16.4333 10.7908 20.5549 9.83857 28.7982 7.93876L34.447 6.63235C44.2451 4.37373 49.1395 3.24212 53.7533 4.56233C58.3672 5.88714 61.9184 9.44297 69.0254 16.55L77.4435 24.9681C89.8222 37.3422 96 43.5246 96 51.2066C96 58.8933 89.8176 65.0757 77.4481 77.4452C65.074 89.8193 58.8916 96.0017 51.2049 96.0017C43.5229 96.0017 37.3358 89.8193 24.9663 77.4498L16.5483 69.0318Z" stroke="black" stroke-width="7"/>
                                        <path d="M65.5967 65.5965C68.2877 62.8963 68.6511 58.8943 66.4063 56.6449C64.1614 54.4001 60.1548 54.7635 57.4592 57.4591C54.7682 60.1547 50.7616 60.5181 48.5167 58.2733C46.2719 56.0285 46.6353 52.0218 49.3309 49.3308M49.3309 49.3308L47.7025 47.7024M49.3309 49.3308C50.8536 47.8036 52.7948 47.0308 54.6026 47.0446M67.2205 67.2203L65.5921 65.5919C63.752 67.4365 61.291 68.191 59.2026 67.7585" stroke="black" stroke-width="7" stroke-linecap="round"/>
                                        <path d="M40.901 42.1509C44.4939 38.5581 44.4939 32.7329 40.901 29.1401C37.3082 25.5472 31.483 25.5472 27.8902 29.1401C24.2973 32.7329 24.2973 38.5581 27.8902 42.1509C31.483 45.7438 37.3082 45.7438 40.901 42.1509Z" stroke="black" stroke-width="7"/>
                                    </svg>
                                </div>
                                
                                <div class="text-sm min-[1920px]:text-xl ">Приемлемые цены (ниже общего рынка)</div>
                            </div>

                            <div class="flex flex-col items-center gap-3">
                                <div class="h-[73px] min-[1920px]:h-[100px] flex items-center">
                                    <svg viewBox="0 0 116 78" fill="none" class="w-16 min-[1920px]:w-[90px]">
                                        <path d="M28.03 77.66C22.53 77.66 17.2867 76.78 12.3 75.02C7.31333 73.1867 3.35333 70.7667 0.42 67.76L4.27 61.49C6.69 64.0567 9.99 66.1833 14.17 67.87C18.4233 69.5567 23.0067 70.4 27.92 70.4C34.4467 70.4 39.3967 68.97 42.77 66.11C46.2167 63.1767 47.94 59.3633 47.94 54.67C47.94 51.37 47.1333 48.5467 45.52 46.2C43.98 43.78 41.34 41.91 37.6 40.59C33.86 39.27 28.7267 38.61 22.2 38.61H5.81L9.77 -5.24521e-06H51.9V7.04H12.96L17.03 3.19L13.62 35.53L9.55 31.57H23.96C31.7333 31.57 37.9667 32.5233 42.66 34.43C47.3533 36.3367 50.7267 39.0133 52.78 42.46C54.9067 45.8333 55.97 49.7933 55.97 54.34C55.97 58.6667 54.9433 62.6267 52.89 66.22C50.8367 69.74 47.7567 72.5267 43.65 74.58C39.5433 76.6333 34.3367 77.66 28.03 77.66ZM88.4647 61.82V15.18H95.3947V61.82H88.4647ZM68.0047 41.8V35.31H115.855V41.8H68.0047Z" fill="black"/>
                                    </svg>
                                </div>
                                
                                <div class="text-sm min-[1920px]:text-xl">Стаж работы более 5-ти лет</div>
                            </div>

                            <div class="flex flex-col items-center gap-3">
                                <div class="h-[73px] min-[1920px]:h-[100px] flex items-center">
                                    <svg viewBox="0 0 97 97" fill="none" class="w-16 min-[1920px]:w-[90px]">
                                        <path d="M57.5938 84.874H9.09375C4.06187 84.874 0 80.8121 0 75.7802V14.4277C0 9.39586 4.06187 5.33398 9.09375 5.33398H75.7812C80.8131 5.33398 84.875 9.39586 84.875 14.4277V58.3809C84.875 60.0784 83.5413 61.4121 81.8438 61.4121C80.1462 61.4121 78.8125 60.0784 78.8125 58.3809V14.4277C78.8125 12.7302 77.4788 11.3965 75.7812 11.3965H9.09375C7.39625 11.3965 6.0625 12.7302 6.0625 14.4277V75.7802C6.0625 77.4777 7.39625 78.8115 9.09375 78.8115H57.5938C59.2912 78.8115 60.625 80.1452 60.625 81.8427C60.625 83.5402 59.2912 84.874 57.5938 84.874Z" fill="black"/>
                                        <path d="M24.25 21.9462C22.5525 21.9462 21.2188 20.6125 21.2188 18.915V3.03125C21.2188 1.33375 22.5525 0 24.25 0C25.9475 0 27.2812 1.33375 27.2812 3.03125V18.915C27.2812 20.6125 25.9475 21.9462 24.25 21.9462ZM61.3525 21.9462C59.655 21.9462 58.3213 20.6125 58.3213 18.915V3.03125C58.3213 1.33375 59.655 0 61.3525 0C63.05 0 64.3838 1.33375 64.3838 3.03125V18.915C64.3838 20.6125 63.05 21.9462 61.3525 21.9462ZM81.8438 36.375H3.03125C1.33375 36.375 0 35.0412 0 33.3438C0 31.6462 1.33375 30.3125 3.03125 30.3125H81.8438C83.5413 30.3125 84.875 31.6462 84.875 33.3438C84.875 35.0412 83.5413 36.375 81.8438 36.375ZM75.7812 97C64.0806 97 54.5625 87.4819 54.5625 75.7812C54.5625 64.0806 64.0806 54.5625 75.7812 54.5625C87.4819 54.5625 97 64.0806 97 75.7812C97 87.4819 87.4819 97 75.7812 97ZM75.7812 60.625C71.7616 60.625 67.9065 62.2218 65.0642 65.0642C62.2218 67.9065 60.625 71.7616 60.625 75.7812C60.625 79.8009 62.2218 83.656 65.0642 86.4983C67.9065 89.3407 71.7616 90.9375 75.7812 90.9375C79.8009 90.9375 83.656 89.3407 86.4983 86.4983C89.3407 83.656 90.9375 79.8009 90.9375 75.7812C90.9375 71.7616 89.3407 67.9065 86.4983 65.0642C83.656 62.2218 79.8009 60.625 75.7812 60.625Z" fill="black"/>
                                        <path d="M81.8438 84.875C81.4462 84.8798 81.052 84.8014 80.6866 84.6448C80.3212 84.4882 79.9925 84.2569 79.7219 83.9656L73.6594 77.9031C73.0937 77.3398 72.7678 76.5794 72.75 75.7812V66.6875C72.75 64.99 74.0838 63.6562 75.7812 63.6562C77.4788 63.6562 78.8125 64.99 78.8125 66.6875V74.5081L83.9656 79.6613C85.1781 80.8738 85.1781 82.7531 83.9656 83.9656C83.3594 84.5719 82.5712 84.875 81.8438 84.875Z" fill="black"/>
                                    </svg>
                                </div>

                                <div class="text-sm min-[1920px]:text-xl">Выполнение работ точно в срок</div>
                            </div>

                            <div class="flex flex-col items-center gap-3">
                                <div class="h-[73px] min-[1920px]:h-[100px] flex items-center">
                                    <svg viewBox="0 0 101 101" fill="none" class="w-16 min-[1920px]:w-[90px]">
                                        <path d="M64.4896 52.52C65.2471 52.8735 66.1055 53.025 66.9135 53.025C68.58 53.025 70.1454 52.3685 71.3574 51.207L82.366 40.4H87.1129C94.7887 40.4 101 34.1885 101 26.5125V13.8875C101 6.2115 94.7887 0 87.1129 0H64.3886C56.7128 0 50.5015 6.2115 50.5015 13.8875V26.5125C50.5015 32.8755 54.7939 38.2285 60.6012 39.895V46.7125C60.6012 49.2375 62.1666 51.51 64.4896 52.52ZM58.0763 13.8875C58.0763 10.403 60.9042 7.575 64.3886 7.575H87.1129C90.5973 7.575 93.4252 10.403 93.4252 13.8875V26.5125C93.4252 29.997 90.5973 32.825 87.1129 32.825H79.2351L68.176 43.6825V32.825H64.3886C60.9042 32.825 58.0763 29.997 58.0763 26.5125V13.8875ZM30.3021 58.075C20.5559 58.075 12.6276 50.1465 12.6276 40.4C12.6276 30.6535 20.5559 22.725 30.3021 22.725C40.0483 22.725 47.9766 30.6535 47.9766 40.4C47.9766 50.1465 40.0483 58.075 30.3021 58.075ZM30.3021 30.3C24.7473 30.3 20.2024 34.845 20.2024 40.4C20.2024 45.955 24.7473 50.5 30.3021 50.5C35.8569 50.5 40.4018 45.955 40.4018 40.4C40.4018 34.845 35.8569 30.3 30.3021 30.3ZM30.3021 101C19.8994 101 11.9206 98.172 6.5678 92.5665C-0.178803 85.4763 -0.0121578 76.5378 0.00299171 75.6136V75.548C0.00299171 70.1445 4.54786 65.65 10.1027 65.65H50.5015C56.0563 65.65 60.6012 70.195 60.6012 75.75L60.6062 75.7803C60.6214 76.4217 60.8335 85.4258 54.0414 92.5665C48.6835 98.172 40.7048 101 30.3021 101ZM10.1027 73.225C8.68873 73.225 7.57777 74.336 7.57777 75.75V75.7752C7.57777 76.255 7.49192 82.5826 12.1226 87.4155C15.9605 91.405 22.0708 93.425 30.3021 93.425C38.5333 93.425 44.6942 91.3545 48.532 87.3145C53.1426 82.5069 53.0365 76.2449 53.0264 75.9116V75.9015C53.0264 74.336 51.8649 73.1745 50.5015 73.1745H10.1027V73.225Z" fill="black"/>
                                    </svg>
                                </div>

                                <div class="text-sm min-[1920px]:text-xl">Большое количество отзывов</div>
                            </div>
                            
                            <div class="flex flex-col items-center gap-3">
                                <div class="h-[73px] min-[1920px]:h-[100px] flex items-center">
                                    <svg viewBox="0 0 115 109" fill="none" class="w-16 min-[1920px]:w-[90px]">
                                        <path d="M0.00287472 15.7759C0.00287472 11.5919 1.66879 7.57921 4.63413 4.62066C7.59948 1.6621 11.6213 0 15.815 0H99.1879C103.382 0 107.403 1.6621 110.369 4.62066C113.334 7.57921 115 11.5919 115 15.7759V70.2745C115 74.4585 113.334 78.4712 110.369 81.4298C107.403 84.3883 103.382 86.0504 99.1879 86.0504H46.0017V80.3137C46.6917 79.3959 47.3242 78.4436 47.9049 77.4454H99.1879C103.155 77.4454 106.375 74.2328 106.375 70.2745V15.7759C106.375 11.8176 103.155 8.60504 99.1879 8.60504H15.815C11.8476 8.60504 8.62766 11.8176 8.62766 15.7759V38.258C5.26827 40.1975 2.33498 42.7924 0.00287472 45.8878V15.7759ZM27.3147 22.9468C26.171 22.9468 25.0741 23.4001 24.2654 24.207C23.4566 25.0138 23.0023 26.1082 23.0023 27.2493C23.0023 28.3904 23.4566 29.4848 24.2654 30.2916C25.0741 31.0985 26.171 31.5518 27.3147 31.5518H87.6882C88.8319 31.5518 89.9288 31.0985 90.7375 30.2916C91.5462 29.4848 92.0006 28.3904 92.0006 27.2493C92.0006 26.1082 91.5462 25.0138 90.7375 24.207C89.9288 23.4001 88.8319 22.9468 87.6882 22.9468H27.3147ZM61.8138 51.6303C60.6701 51.6303 59.5732 52.0836 58.7645 52.8904C57.9558 53.6973 57.5014 54.7917 57.5014 55.9328C57.5014 57.0739 57.9558 58.1682 58.7645 58.9751C59.5732 59.782 60.6701 60.2353 61.8138 60.2353H87.6882C88.8319 60.2353 89.9288 59.782 90.7375 58.9751C91.5462 58.1682 92.0006 57.0739 92.0006 55.9328C92.0006 54.7917 91.5462 53.6973 90.7375 52.8904C89.9288 52.0836 88.8319 51.6303 87.6882 51.6303H61.8138ZM23.0023 40.1569C16.9017 40.1569 11.051 42.5748 6.73722 46.8787C2.42345 51.1826 0 57.0199 0 63.1065C0 69.1931 2.42345 75.0305 6.73722 79.3344C11.051 83.6383 16.9017 86.0562 23.0023 86.0562C29.1029 86.0562 34.9536 83.6383 39.2674 79.3344C43.5812 75.0305 46.0046 69.1931 46.0046 63.1065C46.0046 57.0199 43.5812 51.1826 39.2674 46.8787C34.9536 42.5748 29.1029 40.1569 23.0023 40.1569ZM40.2519 86.0562C35.4507 89.6588 29.4766 91.7929 23.0023 91.7929C16.7816 91.8053 10.7263 89.7955 5.75273 86.0676V104.689C5.75273 107.959 9.23139 109.967 12.0201 108.527L12.5376 108.211L23.0023 100.92L33.467 108.217C34.0714 108.638 34.7738 108.897 35.5073 108.971C36.2407 109.044 36.9807 108.928 37.6566 108.635C38.3325 108.341 38.9217 107.88 39.368 107.294C39.8143 106.709 40.1027 106.019 40.2059 105.291L40.2519 104.689V86.0562Z" fill="black"/>
                                    </svg>
                                </div>

                                <div class="text-sm min-[1920px]:text-xl">Гарантии</div>
                            </div>
                        </div>

                        <div class="
                            w-8 min-[410px]:w-6 
                            h-[1050px] min-[568px]:h-[550px] md:h-[450px] xl:h-[400px] min-[1920px]:h-[520px]
                            border-light-black 
                            border-r-[1px] min-[1920px]:border-r-2 border-b-[1px] min-[1920px]:border-b-2
                        "></div>
                    </div>

                    
                </div>
                
            </div>

        </section>

        <section class="bg-white">

            <div class="px-3 max-md:pb-10 min-[568px]:px-5 min-[640px]:px-8 md:px-0 max-md:py-10 max-[609px]:mt-72 max-[767px]:mt-96 md:flex md:flex-row-reverse">

                <div class="md:w-full  md:p-8 lg:py-16 xl:py-20 min-[1920px]:py-24 lg:px-28 xl:px-36 min-[1920px]:px-52">

                    <div class="flex gap-4">
                        <h2 class="
                            text-[30px] min-[480px]:text-4xl sm:text-5xl lg:text-[45px] xl:text-[56px] min-[1920px]:text-7xl
                            leading-8 xl:leading-[3.5rem] 
                            font-bold
                        ">
                            Наши работы
                        </h2>
                    </div>
                    

                    <div class="max-md:flex max-md:flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-x-8  min-[640px]:gap-16 min-[1920px]:gap-20 mt-10 min-[1920px]:mt-20">
                        <ProblemCard category="Частные дома" />
                        <ProblemCard category="Частные дома" />
                        <ProblemCard category="Частные дома" />
                    </div>

                    <div class="relative pr-2 mt-10 lg:mt-16 lg:w-max">
                                
                        <div class="
                            relative 
                            z-10
                            
                            py-3 md:max-lg:py-2 xl:py-4 min-[1920px]:py-5 px-4
                            min-[480px]:text-xl min-[1920px]:text-3xl
                            text-white 
                            text-center 
                            bg-light-black
                        ">
                            
                            <div class="">
                                Смотреть ещё
                            </div>

                        </div>

                        <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                        </div>

                    </div>
                </div>
                
            </div>

        </section>

        <section class="bg-white">

            <div class="px-3 max-md:pb-10 min-[568px]:px-5 min-[640px]:px-8 md:px-0 max-md:py-10 max-[609px]:mt-72 max-[767px]:mt-96 md:flex md:flex-row-reverse">

                <div class="
                    md:w-full
                     
                    md:p-8 md:py-12 min-[768px]:py-20 lg:py-16 xl:py-20 min-[1920px]:py-24 lg:px-28  xl:px-36 min-[1920px]:px-52
                ">
                    <h2 class="
                        text-[30px] min-[480px]:text-4xl sm:text-5xl lg:text-[45px] xl:text-[56px] min-[1920px]:text-7xl
                        leading-8 xl:leading-[3.5rem] 
                        font-bold
                    ">
                        Наши заказчики
                    </h2>

                    <div class="
                        w-[250px] min-[410px]:w-[318px] min-[480px]:w-[330px] min-[568px]:w-[350px] md:w-[550px] lg:w-[700px] xl:w-[800px] min-[1920px]:w-[1200px]
                        text-lg min-[480px]:text-xl sm:max-md:text-2xl lg:text-2xl xl:text-3xl min-[1920px]:text-4xl
                        h-max 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-20
                        m-auto mt-5 lg:mt-12 xl:mt-20 min-[1920px]:mt-28
                    ">
                        <div class="flex items-center">
                            <img src="../assets/icons/gazprom.png">
                        </div>

                        <div class="flex items-center">
                            <img src="../assets/icons/uralhim.png">
                        </div>
                        
                        <div class="flex items-center">
                            <img src="../assets/icons/sirius.png">
                        </div>
                        
                        <div class="flex items-center">
                            <img src="../assets/icons/volgograd.png">
                        </div>
                        
                        <div class="flex items-center">
                            <img src="../assets/icons/duck.png">
                        </div>
                        
                        <div class="flex items-center">
                            <img src="../assets/icons/orbita.png">
                        </div>
                    </div>
                </div>
                
            </div>

        </section>

        <section class="bg-white">

            <div class="px-3 max-md:pb-10 min-[568px]:px-5 min-[640px]:px-8 md:px-0 max-md:pt-10 min-[610px]:pt-20 min-[768px]:py-0 max-[609px]:mt-72 max-[767px]:mt-96 md:flex ">

                <div class="hidden min-[768px]:block relative md:z-20 md:inset-y-0 md:w-1/3 min-[960px]:w-1/2 max-md:pr-2 ">
                    <div class="relative min-[480px]:w-full min-[480px]:h-56 md:h-full min-[480px]:bg-[url('../assets/img/LogoImg.png')] min-[480px]:bg-cover min-[480px]:bg-[center_top_50%] md:bg-[50%_50%]">
                        <img src="../assets/img/LogoImg.png" alt="" class="min-[480px]:hidden relative">
                    </div>

                    <div class="md:hidden absolute top-2 left-2 right-0 h-full border-light-black border-[1px]">
                    </div>
                </div>

                <div class="md:w-2/3 min-[960px]:w-1/2  md:p-8 lg:py-16 xl:py-20 min-[1920px]:py-24 xl:px-10 min-[1366px]:px-12 2xl:px-14 min-[1920px]:px-20">

                    <h2 class="text-[30px] min-[480px]:text-4xl sm:max-md:text-5xl lg:text-5xl xl:text-6xl min-[1920px]:text-7xl leading-8 font-bold">Мы в соцсетях</h2>

                    <div class="flex gap-7 min-[480px]:gap-5 min-[1920px]:gap-8 my-10 xl:my-14 min-[1920px]:my-20">
                        <svg viewBox="0 0 49 49" fill="none" class="w-12 min-[1920px]:w-16">
                            <path d="M32.0289 0H16.9957C3.26585 0 0 3.26585 0 16.9712V32.0043C0 45.7317 3.24135 49 16.9712 49H32.0043C45.7317 49 49 45.7587 49 32.0289V16.9957C49 3.26585 45.7587 0 32.0289 0ZM39.5577 34.9615H35.9832C34.6308 34.9615 34.2241 33.8664 31.7986 31.4409C29.6818 29.4 28.7875 29.1452 28.251 29.1452C27.5111 29.1452 27.3077 29.3486 27.3077 30.3702V33.5846C27.3077 34.4544 27.026 34.964 24.7548 34.964C22.5506 34.8158 20.4132 34.1462 18.5186 33.0102C16.6239 31.8741 15.0263 30.3042 13.8572 28.4298C11.0818 24.9753 9.15061 20.9209 8.2173 16.589C8.2173 16.0524 8.42065 15.5673 9.4423 15.5673H13.0144C13.9331 15.5673 14.2639 15.9765 14.624 16.9197C16.3586 22.0255 19.3183 26.4649 20.5188 26.4649C20.9794 26.4649 21.1803 26.2616 21.1803 25.1125V19.8548C21.0284 17.4563 19.7543 17.2529 19.7543 16.3856C19.7707 16.1568 19.8755 15.9435 20.0466 15.7907C20.2177 15.6379 20.4415 15.5578 20.6707 15.5673H26.2861C27.0529 15.5673 27.3077 15.9495 27.3077 16.8683V23.9635C27.3077 24.7303 27.6385 24.9851 27.8688 24.9851C28.3294 24.9851 28.6846 24.7303 29.5274 23.8875C31.3376 21.6799 32.8166 19.2204 33.9178 16.5865C34.0304 16.2701 34.2433 15.9992 34.5242 15.8152C34.8051 15.6312 35.1385 15.5441 35.4736 15.5673H39.0481C40.1188 15.5673 40.3466 16.1039 40.1188 16.8683C38.819 19.7799 37.2108 22.5438 35.3217 25.1125C34.937 25.7005 34.7827 26.0068 35.3217 26.6952C35.6769 27.2318 36.9289 28.2779 37.7717 29.2726C38.9964 30.4943 40.0135 31.9077 40.7827 33.4572C41.089 34.4519 40.5769 34.9615 39.5577 34.9615Z" fill="black"/>
                        </svg>

                        <svg viewBox="0 0 49 49" fill="none" class="w-12 min-[1920px]:w-16">
                            <path d="M24.5 0C10.976 0 0 10.976 0 24.5C0 38.024 10.976 49 24.5 49C38.024 49 49 38.024 49 24.5C49 10.976 38.024 0 24.5 0ZM35.868 16.66C35.5005 20.531 33.908 29.939 33.0995 34.2755C32.7565 36.113 32.0705 36.7255 31.4335 36.799C30.0125 36.9215 28.9345 35.868 27.5625 34.9615C25.4065 33.5405 24.1815 32.6585 22.099 31.2865C19.6735 29.694 21.2415 28.812 22.638 27.391C23.0055 27.0235 29.2775 21.315 29.4 20.8005C29.417 20.7226 29.4148 20.6417 29.3934 20.5648C29.3721 20.488 29.3323 20.4175 29.2775 20.3595C29.1305 20.237 28.9345 20.286 28.763 20.3105C28.5425 20.3595 25.1125 22.638 18.424 27.146C17.444 27.8075 16.562 28.1505 15.778 28.126C14.896 28.1015 13.23 27.636 11.9805 27.2195C10.437 26.7295 9.2365 26.46 9.3345 25.6025C9.3835 25.1615 9.996 24.7205 11.1475 24.255C18.3015 21.1435 23.0545 19.0855 25.431 18.1055C32.242 15.2635 33.6385 14.7735 34.5695 14.7735C34.7655 14.7735 35.231 14.8225 35.525 15.0675C35.77 15.2635 35.8435 15.533 35.868 15.729C35.8435 15.876 35.8925 16.317 35.868 16.66Z" fill="black"/>
                        </svg>

                        <svg viewBox="0 0 49 49" fill="none" class="w-12 min-[1920px]:w-16">
                            <path d="M24.5 0C38.0314 0 49 10.9686 49 24.5C49 38.0313 38.0314 49 24.5 49C20.1703 49.007 15.9168 47.8611 12.1765 45.6802L0.00983446 49L3.32223 36.8284C1.13951 33.0869 -0.00719902 28.8316 3.40066e-05 24.5C3.40066e-05 10.9686 10.9687 0 24.5 0ZM16.1504 12.985L15.6604 13.0046C15.3432 13.0239 15.0332 13.1073 14.749 13.2496C14.4833 13.4001 14.2406 13.5882 14.0287 13.8082C13.7347 14.085 13.5681 14.3251 13.3893 14.5579C12.4831 15.7361 11.9952 17.1826 12.0026 18.669C12.0075 19.8695 12.3211 21.0381 12.8111 22.1308C13.8131 24.3407 15.462 26.6805 17.6376 28.8487C18.1619 29.3706 18.6764 29.8949 19.2301 30.3824C21.9334 32.7625 25.1548 34.4789 28.6381 35.3951L30.0297 35.6083C30.4829 35.6328 30.9362 35.5985 31.3919 35.5764C32.1054 35.5396 32.8021 35.3464 33.4327 35.0105C33.7536 34.8452 34.0667 34.6654 34.3711 34.4715C34.3711 34.4715 34.4764 34.4029 34.6773 34.251C35.0081 34.006 35.2114 33.832 35.4858 33.5454C35.6892 33.3347 35.8656 33.0872 36.0003 32.8055C36.1914 32.4061 36.3825 31.6442 36.4609 31.0096C36.5197 30.5245 36.5026 30.2599 36.4952 30.0958C36.4854 29.8336 36.2674 29.5617 36.0297 29.4465L34.6038 28.8071C34.6038 28.8071 32.4723 27.8785 31.1689 27.2856C31.0325 27.2261 30.8864 27.192 30.7377 27.1852C30.5701 27.168 30.4007 27.1868 30.241 27.2405C30.0812 27.2942 29.9348 27.3814 29.8116 27.4963C29.7994 27.4914 29.6352 27.6311 27.8639 29.7773C27.7622 29.9139 27.6222 30.0171 27.4616 30.0739C27.301 30.1306 27.1272 30.1382 26.9623 30.0958C26.8027 30.053 26.6463 29.9989 26.4943 29.9341C26.1905 29.8067 26.0852 29.7577 25.8769 29.6695C24.4708 29.0559 23.1689 28.2268 22.0182 27.2121C21.7095 26.9426 21.4228 26.6486 21.1288 26.3644C20.165 25.4413 19.3249 24.3971 18.6298 23.2578L18.4853 23.0251C18.3814 22.8687 18.2975 22.7 18.2354 22.5228C18.1423 22.1627 18.3848 21.8736 18.3848 21.8736C18.3848 21.8736 18.9802 21.2219 19.257 20.8691C19.5265 20.5261 19.7544 20.1929 19.9014 19.9552C20.1905 19.4897 20.2811 19.012 20.1292 18.642C19.4432 16.9662 18.7327 15.2978 18.0026 13.6416C17.8581 13.3133 17.4293 13.0781 17.0398 13.0315C16.9075 13.0168 16.7752 13.0021 16.6429 12.9923C16.3139 12.976 15.9842 12.9793 15.6555 13.0021L16.148 12.9825L16.1504 12.985Z" fill="black"/>
                        </svg>
                    </div>

                    <h2 class="lg:mt-16 xl:mt-24 text-[30px] min-[480px]:text-4xl sm:max-md:text-5xl lg:text-5xl xl:text-6xl min-[1920px]:text-7xl leading-8 font-bold">Ресурсы</h2>
                    
                    <div class="w-52 min-[480px]:w-60 flex max-[479px]:justify-between min-[480px]:gap-5 min-[1920px]:gap-8 my-10 xl:my-14 min-[1920px]:my-20">
                        <img src="../assets/icons/kwork.png" alt="">
                    </div>
                </div>
                
            </div>

        </section>

    </main>

    <footer class="relative bg-light-black">
        <div class="max-md:hidden absolute w-max h-max inset-0 m-auto text-[#2D2D2D] text-center text-[64px] min-[960px]:text-[82px] xl:text-[110px] 2xl:text-9xl  min-[1920px]:text-[160px]">
            #ИльяМуромец
        </div>

        <div class="relative flex flex-col gap-7 min-[1920px]:gap-9 z-10 px-3 min-[568px]:px-5 min-[640px]:max-md:px-8 md:px-8 py-10  min-[1920px]:py-16 text-2xl text-center text-white">
            <div class="flex gap-7 justify-center min-[480px]:gap-6  min-[1920px]:gap-8">
                <svg viewBox="0 0 51 50" fill="none" class="w-[50px] min-[1920px]:w-16">
                    <path d="M25.5 0C39.5837 0 51 10.9795 51 24.5243C51 38.0691 39.5837 49.0486 25.5 49.0486C20.9936 49.0556 16.5665 47.9086 12.6735 45.7256L0.0102359 49.0486L3.45783 36.8649C1.18602 33.1198 -0.00749286 28.8602 3.53946e-05 24.5243C3.53946e-05 10.9795 11.4164 0 25.5 0ZM16.8096 12.9979L16.2996 13.0175C15.9695 13.0368 15.6468 13.1203 15.351 13.2627C15.0744 13.4134 14.8219 13.6017 14.6013 13.8219C14.2953 14.099 14.1219 14.3394 13.9358 14.5723C12.9926 15.7517 12.4848 17.1997 12.4925 18.6875C12.4976 19.8892 12.824 21.059 13.334 22.1528C14.3769 24.3649 16.0931 26.707 18.3575 28.8774C18.9032 29.3997 19.4387 29.9245 20.015 30.4126C22.8286 32.795 26.1815 34.5131 29.807 35.4303L31.2554 35.6436C31.7271 35.6681 32.1989 35.6338 32.6732 35.6117C33.4158 35.5749 34.141 35.3815 34.7973 35.0452C35.1312 34.8798 35.4571 34.6998 35.774 34.5057C35.774 34.5057 35.8836 34.437 36.0927 34.285C36.437 34.0397 36.6486 33.8656 36.9342 33.5787C37.1459 33.3678 37.3295 33.1201 37.4697 32.838C37.6686 32.4383 37.8675 31.6756 37.9491 31.0404C38.0103 30.5548 37.9925 30.29 37.9848 30.1256C37.9746 29.8632 37.7477 29.591 37.5003 29.4758L36.0162 28.8357C36.0162 28.8357 33.7977 27.9062 32.4411 27.3127C32.2992 27.2531 32.147 27.219 31.9923 27.2122C31.8178 27.1949 31.6416 27.2138 31.4753 27.2675C31.309 27.3213 31.1567 27.4086 31.0284 27.5236C31.0157 27.5187 30.8448 27.6585 29.0012 29.8068C28.8953 29.9436 28.7496 30.0469 28.5825 30.1037C28.4153 30.1605 28.2344 30.1681 28.0628 30.1256C27.8967 30.0828 27.7339 30.0287 27.5757 29.9638C27.2595 29.8363 27.1499 29.7872 26.9331 29.6989C25.4696 29.0847 24.1146 28.2548 22.9169 27.2391C22.5956 26.9694 22.2972 26.6751 21.9912 26.3906C20.988 25.4666 20.1137 24.4213 19.3902 23.2809L19.2398 23.0479C19.1317 22.8914 19.0443 22.7225 18.9797 22.5452C18.8828 22.1847 19.1352 21.8953 19.1352 21.8953C19.1352 21.8953 19.7549 21.2429 20.043 20.8898C20.3235 20.5465 20.5607 20.2129 20.7137 19.975C21.0146 19.5091 21.1089 19.0309 20.9508 18.6605C20.2368 16.9831 19.4973 15.313 18.7374 13.6551C18.587 13.3265 18.1407 13.0911 17.7353 13.0445C17.5976 13.0298 17.4599 13.015 17.3222 13.0052C16.9797 12.9889 16.6366 12.9921 16.2945 13.015L16.8071 12.9954L16.8096 12.9979Z" fill="white"/>
                </svg>

                <svg viewBox="0 0 50 50" fill="none" class="w-[50px] min-[1920px]:w-16">
                    <path d="M32.6825 0H17.3425C3.3325 0 0 3.26909 0 16.988V32.0361C0 45.7771 3.3075 49.0486 17.3175 49.0486H32.6575C46.665 49.0486 50 45.8041 50 32.0606V17.0125C50 3.26909 46.6925 0 32.6825 0ZM40.365 34.9962H36.7175C35.3375 34.9962 34.9225 33.9 32.4475 31.4721C30.2875 29.4292 29.375 29.1741 28.8275 29.1741C28.0725 29.1741 27.865 29.3777 27.865 30.4003V33.6179C27.865 34.4885 27.5775 34.9986 25.26 34.9986C23.0109 34.8504 20.8298 34.1801 18.8965 33.0429C16.9632 31.9058 15.3329 30.3343 14.14 28.458C11.3079 25.0001 9.33735 20.9416 8.385 16.6054C8.385 16.0683 8.5925 15.5828 9.635 15.5828H13.28C14.2175 15.5828 14.555 15.9923 14.9225 16.9365C16.6925 22.0474 19.7125 26.4912 20.9375 26.4912C21.4075 26.4912 21.6125 26.2876 21.6125 25.1374V19.8745C21.4575 17.4736 20.1575 17.27 20.1575 16.4019C20.1742 16.1729 20.2812 15.9593 20.4557 15.8064C20.6303 15.6534 20.8587 15.5732 21.0925 15.5828H26.8225C27.605 15.5828 27.865 15.9653 27.865 16.885V23.9872C27.865 24.7548 28.2025 25.0099 28.4375 25.0099C28.9075 25.0099 29.27 24.7548 30.13 23.9112C31.9772 21.7014 33.4863 19.2395 34.61 16.603C34.7249 16.2863 34.9422 16.0151 35.2288 15.8309C35.5154 15.6467 35.8557 15.5596 36.1975 15.5828H39.845C40.9375 15.5828 41.17 16.1198 40.9375 16.885C39.6112 19.7995 37.9702 22.5662 36.0425 25.1374C35.65 25.726 35.4925 26.0326 36.0425 26.7217C36.405 27.2588 37.6825 28.306 38.5425 29.3017C39.7923 30.5245 40.8301 31.9394 41.615 33.4904C41.9275 34.4861 41.405 34.9962 40.365 34.9962Z" fill="white"/>
                </svg>

                <svg viewBox="0 0 51 49" fill="none" class="w-[50px] min-[1920px]:w-16">
                    <path d="M25.0527 0C11.2236 0 0 10.7983 0 24.1034C0 37.4085 11.2236 48.2069 25.0527 48.2069C38.8819 48.2069 50.1055 37.4085 50.1055 24.1034C50.1055 10.7983 38.8819 0 25.0527 0ZM36.6772 16.3903C36.3014 20.1987 34.673 29.4544 33.8463 33.7207C33.4955 35.5285 32.794 36.1311 32.1427 36.2034C30.6896 36.3239 29.5873 35.2874 28.1843 34.3956C25.9797 32.9976 24.7271 32.1299 22.5976 30.7801C20.1174 29.2134 21.7207 28.3456 23.1487 26.9476C23.5245 26.5861 29.938 20.97 30.0633 20.4638C30.0807 20.3872 30.0784 20.3076 30.0565 20.232C30.0347 20.1563 29.994 20.087 29.938 20.03C29.7877 19.9094 29.5873 19.9576 29.4119 19.9818C29.1864 20.03 25.6791 22.2716 18.8397 26.7066C17.8376 27.3574 16.9357 27.6949 16.134 27.6707C15.2321 27.6466 13.5285 27.1887 12.2508 26.7789C10.6725 26.2969 9.44488 26.0317 9.54509 25.1881C9.5952 24.7542 10.2215 24.3204 11.399 23.8624C18.7144 20.8013 23.5746 18.7766 26.0047 17.8124C32.9694 15.0164 34.3974 14.5344 35.3494 14.5344C35.5498 14.5344 36.0258 14.5826 36.3265 14.8236C36.577 15.0164 36.6522 15.2816 36.6772 15.4744C36.6522 15.619 36.7023 16.0529 36.6772 16.3903Z" fill="white"/>
                </svg>
            </div>

            <div class="md:hidden text-gray">
                #ИльяМуромец
            </div>

            <div>
                Все права защищены
            </div>

            <div>
                <router-link to="" class="underline">Политика конфиденциальности</router-link> 
            </div>

            <div>
                2024
            </div>
            
        </div>
    </footer>

    <div v-if="idOpenModal" @click="toggleModal(idOpenModal, true)" class="fixed inset-0 z-10 bg-slate-400/75"></div>

</template>

<script setup>
import SignUpModal from '@/components/modals/SignUpModal.vue';
import SignInModal from '@/components/modals/SignInModal.vue';
import CreatingApplicationModal from '@/components/modals/CreatingApplicationModal.vue';
import NavBarModal from "@/components/modals/NavBarModal.vue";
import UserModal from '@/components/modals/UserModal.vue';
import ProblemCard from '@/components/reusable/ProblemCard.vue';
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

console.log(modals.value[0].id)
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