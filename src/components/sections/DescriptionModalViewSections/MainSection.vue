<template>
    <section class="lg:container m-auto pt-[85px] min-[440px]:pt-[105px] px-3 min-[440px]:px-6 min-[550px]:px-9 min-[1920px]:pb-80">
        <div v-if="product" class="">

            <div class="flex max-md:flex-col md:justify-between gap-6 md:gap-10 min-[1920px]:mt-16">
                <div class="md:w-[60%]">
                    <div class="relative pr-2 h-max">
                        <div class="relative z-20  bg-white">
                            <div class="relative text-[12px] w-full min-[500px]:max-md:text-lg">
                                <img :src="'http://127.0.0.1:8000/images/attachments/' + product.photo" alt="" class="w-full max-h-[400px]">
                            </div>
                        </div>

                        <div class="absolute top-2 left-2 right-0 h-full border-light-black border ">
                            
                        </div>
                    </div>

                    <!-- <div class="flex gap-5 mt-5">
                        <img src="../../../assets/img/CardImg1.jpg" alt="" class="w-24">
                        <img src="../../../assets/img/CardImg1.jpg" alt="" class="w-24">
                        <img src="../../../assets/img/CardImg1.jpg" alt="" class="w-24">
                        
                    </div> -->
                    
                </div>

                <div class="md:w-[40%] flex flex-col gap-6 min-[1920px]:text-2xl">
                    <div>
                        <div>
                            Тип:
                        </div>

                        <div class="relative pr-2 pb-2">
                            <div class="relative z-10 text-center py-2 px-4 border border-light-black bg-white">
                                {{product.type}}
                            </div>

                            <div class="absolute left-2 top-2 bottom-0 right-0 border border-light-black">
                                
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            Дата создания:
                        </div>
                        
                        <div class="relative pr-2 pb-2">
                            <div class="relative z-10 text-center py-2 px-4 border border-light-black bg-white">
                                {{product.date}}
                            </div>

                            <div class="absolute left-2 top-2 bottom-0 right-0 border border-light-black">
                                
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            Сделано за:
                        </div>
                        
                        <div class="relative pr-2 pb-2">
                            <div class="relative z-10 text-center py-2 px-4 border border-light-black bg-white">
                                {{ product.amount }} часов(а)
                            </div>

                            <div class="absolute left-2 top-2 bottom-0 right-0 border border-light-black">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="mt-16 text-[30px] min-[480px]:text-4xl sm:text-5xl lg:text-[46px] xl:text-6xl min-[1920px]:text-7xl leading-8 font-bold">{{product.title}}</h1>

            <div class="relative mt-10 lg:mt-12 min-[1920px]:mt-20 flex justify-between">
                                
                <div class="w-8 min-[410px]:w-6 h-32 min-[410px]:h-28  md:h-20 lg:h-24 xl:h-28 min-[1920px]:h-32 border-light-black border-l-[1px] min-[1920px]:border-l-2 border-t-[1px] min-[1920px]:border-t-2"></div>

                <div class="
                    absolute 
                    w-72 min-[410px]:w-[290px] min-[480px]:w-[345px] sm:max-md:w-[410px] md:w-full min-[1920px]:w-[1400px]
                    text-md min-[480px]:text-xl sm:max-md:text-2xl lg:text-2xl xl:text-3xl min-[1920px]:text-3xl 
                    leading-8 min-[1920px]:leading-[50px]
                    md:text-center
                    h-max 
                    m-auto 
                    inset-0
                ">
                    {{product.description}}
                </div>

                <div class="w-8 min-[410px]:w-6 h-32 min-[410px]:h-28 md:h-20 lg:h-24 xl:h-28 min-[1920px]:h-32 border-light-black border-b-[1px] min-[1920px]:border-b-2 border-r-[1px] min-[1920px]:border-r-2"></div>
            
            </div>

            <!-- <div class="flex items-center justify-between mt-8">
                <div>
                    08.11.2023 
                </div>

                <div class=" flex items-center gap-6">
                    <div class="h-full flex items-center gap-2">
                        <svg viewBox="0 0 38 25" fill="none" class="w-10">
                            <path d="M37.9447 12.2336C37.889 12.1086 36.5492 9.12664 33.55 6.11513C30.7721 3.32566 25.9941 0 19 0C12.0059 0 7.22794 3.32566 4.44995 6.11513C1.45084 9.12664 0.110984 12.1086 0.055293 12.2336C0.0188203 12.3179 0 12.4089 0 12.5008C0 12.5928 0.0188203 12.6837 0.055293 12.7681C0.110984 12.8947 1.45084 15.875 4.44995 18.8865C7.23449 21.6826 12.0075 25 19 25C25.9925 25 30.7721 21.676 33.55 18.8865C36.5492 15.875 37.889 12.8947 37.9447 12.7681C37.9812 12.6837 38 12.5928 38 12.5008C38 12.4089 37.9812 12.3179 37.9447 12.2336ZM32.5886 17.9901C28.8098 21.773 24.2349 23.6842 18.9934 23.6842C13.752 23.6842 9.18367 21.7681 5.39834 17.9901C3.78771 16.3772 2.43317 14.5256 1.38204 12.5C2.43513 10.4739 3.7919 8.62229 5.40489 7.00987C9.19023 3.23191 13.7585 1.31579 19 1.31579C24.2415 1.31579 28.8098 3.23191 32.5951 7.00987C34.2079 8.62246 35.5646 10.4741 36.618 12.5C35.5648 14.5261 34.2081 16.3777 32.5951 17.9901H32.5886ZM19 5.26316C17.5746 5.26316 16.1812 5.68759 14.996 6.48279C13.8108 7.27798 12.887 8.40822 12.3416 9.73058C11.7961 11.0529 11.6533 12.508 11.9314 13.9118C12.2095 15.3156 12.8959 16.6051 13.9038 17.6172C14.9118 18.6293 16.1959 19.3186 17.594 19.5978C18.992 19.877 20.4411 19.7337 21.758 19.186C23.0749 18.6382 24.2005 17.7107 24.9924 16.5206C25.7844 15.3305 26.207 13.9313 26.207 12.5C26.2049 10.5813 25.4449 8.74188 24.0938 7.38518C22.7426 6.02848 20.9108 5.26533 19 5.26316ZM19 18.4211C17.8337 18.4211 16.6937 18.0738 15.724 17.4232C14.7543 16.7726 13.9985 15.8478 13.5522 14.7659C13.1059 13.684 12.9891 12.4934 13.2166 11.3449C13.4442 10.1963 14.0058 9.14126 14.8304 8.31318C15.6551 7.48511 16.7058 6.92118 17.8496 6.69272C18.9935 6.46425 20.1791 6.58151 21.2566 7.02966C22.334 7.47781 23.255 8.23673 23.9029 9.21044C24.5508 10.1842 24.8967 11.3289 24.8967 12.5C24.8967 14.0704 24.2754 15.5764 23.1696 16.6868C22.0637 17.7972 20.5639 18.4211 19 18.4211Z" fill="black"/>
                        </svg>

                        <div>123</div>
                    </div>

                    <div class="flex items-center gap-2">
                        <svg  viewBox="0 0 29 28" fill="none" class="w-8">
                            <path d="M18.7493 10.8332L17.9688 10.7033C17.9499 10.8167 17.956 10.9328 17.9865 11.0436C18.0171 11.1544 18.0714 11.2572 18.1456 11.3449C18.2199 11.4326 18.3124 11.503 18.4167 11.5514C18.5209 11.5997 18.6344 11.6248 18.7493 11.6248V10.8332ZM1.33268 10.8332V10.0415C1.12272 10.0415 0.921356 10.1249 0.77289 10.2734C0.624423 10.4218 0.541016 10.6232 0.541016 10.8332H1.33268ZM4.49935 27.4582H22.486V25.8748H4.49935V27.4582ZM24.386 10.0415H18.7493V11.6248H24.386V10.0415ZM19.5299 10.963L20.8061 3.30759L19.2449 3.04634L17.9688 10.7033L19.5299 10.963ZM18.4643 0.541504H18.1271V2.12484H18.4643V0.541504ZM13.5148 3.00992L9.53118 8.98384L10.8485 9.86259L14.8306 3.88709L13.5148 3.00992ZM7.55518 10.0415H1.33268V11.6248H7.55518V10.0415ZM0.541016 10.8332V23.4998H2.12435V10.8332H0.541016ZM26.3684 24.2757L28.2683 14.7757L26.7167 14.4653L24.8167 23.9653L26.3684 24.2757ZM9.53118 8.98384C9.31432 9.30916 9.0205 9.57591 8.67579 9.76042C8.33109 9.94492 7.94616 10.0415 7.55518 10.0415V11.6248C8.20677 11.6248 8.84827 11.464 9.42278 11.1566C9.99729 10.8492 10.487 10.4047 10.8485 9.86259L9.53118 8.98384ZM20.8061 3.30759C20.8629 2.96738 20.8449 2.61889 20.7534 2.28634C20.6619 1.95379 20.499 1.64517 20.2762 1.38193C20.0533 1.11868 19.7758 0.907139 19.4629 0.762004C19.15 0.616868 18.8093 0.541624 18.4643 0.541504V2.12484C18.5794 2.12466 18.6931 2.14956 18.7976 2.19781C18.902 2.24606 18.9947 2.31649 19.0691 2.4042C19.1436 2.49192 19.198 2.59481 19.2287 2.7057C19.2593 2.8166 19.2654 2.93284 19.2465 3.04634L20.8061 3.30759ZM24.386 11.6248C24.7374 11.6248 25.0844 11.7028 25.402 11.853C25.7196 12.0033 25.9999 12.2222 26.2227 12.4939C26.4455 12.7657 26.6052 13.0834 26.6904 13.4243C26.7755 13.7652 26.7856 14.1208 26.7167 14.4653L28.2683 14.7757C28.3831 14.2016 28.3675 13.6093 28.2257 13.0413C28.084 12.4733 27.818 11.9438 27.447 11.491C27.0759 11.0382 26.6091 10.6734 26.0801 10.4227C25.551 10.1721 24.973 10.0419 24.3876 10.0415L24.386 11.6248ZM22.486 27.4582C23.4013 27.4583 24.2884 27.1413 24.9962 26.5611C25.7041 25.9808 26.189 25.1732 26.3684 24.2757L24.8167 23.9653C24.709 24.5041 24.4179 24.9888 23.9929 25.337C23.5679 25.6852 23.0354 25.8752 22.486 25.8748V27.4582ZM18.1255 0.541504C17.2129 0.541367 16.3144 0.766611 15.5098 1.19723C14.7052 1.62785 14.0194 2.25051 13.5133 3.00992L14.8306 3.88709C15.1921 3.34498 15.6818 2.9005 16.2563 2.59308C16.8308 2.28567 17.4723 2.12483 18.1239 2.12484L18.1255 0.541504ZM4.49935 25.8748C3.86946 25.8748 3.26537 25.6246 2.81997 25.1792C2.37457 24.7338 2.12435 24.1297 2.12435 23.4998H0.541016C0.541016 24.0197 0.643401 24.5344 0.842326 25.0146C1.04125 25.4949 1.33282 25.9312 1.70038 26.2988C2.06795 26.6664 2.50431 26.9579 2.98456 27.1569C3.46481 27.3558 3.97953 27.4582 4.49935 27.4582V25.8748Z" fill="black"/>
                            <path d="M7.66602 10.8333V26.6666" stroke="black" stroke-width="1.5"/>
                        </svg>

                        <div>123</div>
                    </div>
                </div>
            </div> -->
            
        </div>

        <div v-else class="text-[25px] min-[1920px]:text-[30px] mt-10">Загрузка проекта...</div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute()

let product = ref(null)

onMounted(async() => {
    await getProduct()
})

let getProduct = async() => {
    let res = await axios('http://127.0.0.1:8000/api/product/' + route.params.id)

    product.value = res.data.data
    console.log(product.value)
}
</script>