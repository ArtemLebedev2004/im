<template>
    <div class="absolute z-20 inset-0 h-screen flex flex-col bg-white">
        <div @click="$emit('closeModal')" class="flex justify-center py-3 min-[1920px]:py-4 bg-light-black">
            <svg class="w-[22px] min-[1920px]:w-7" viewBox="2 2 12 12">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" fill="#fff"/>
            </svg>
        </div>

        <div class="px-3 min-[568px]:px-5 min-[640px]:px-8 xl:px-10 min-[1366px]:px-12 2xl:px-14 py-6 min-[1920px]:py-10 flex flex-col overflow-auto">
            <div class="text-2xl min-[1920px]:text-5xl text-center">
                Загрузка аватара
            </div>

            <form class="my-10 min-[1920px]:my-16 overflow-auto">
                <input id="avatar" type="file" ref="fileInput" @change="getUploadedImage" class="hidden">

                <label for="avatar" class="block relative mt-9 pr-2">
                    <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-center bg-white border-light-black border-[1px]">
                        <div class="">

                            Загрузить аватар

                            <svg viewBox="0 0 20 26" fill="none" class="w-4 min-[1920px]:w-5 inline-block ml-2">
                                <path d="M2.85716 12.9999L10 20.2221M10 20.2221L17.1429 12.9999M10 20.2221V1.44434M1.42859 24.5554H18.5714" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>

                    <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                    </div>
                </label>

                <div class="mt-4 grow overflow-hidden flex justify-center items-center">
                    <Cropper
                        ref="cropper"
                        :src="uploadedImage"
                        :stencil-component="CircleStencil"
                        :stencil-props="{
                            minAspectRatioProp: minAspectRatioProp.width/minAspectRatioProp.height,
                            maxAspectRatioProp: maxAspectRatioProp.width/maxAspectRatioProp.height
                        }"
                    ></Cropper>
                </div>
            </form>

            <div v-if="uploadedImage" @click="crop" class="relative pr-2">
                <div class="relative z-10 w-full py-2 min-[1920px]:py-3 text-xl min-[1920px]:text-3xl text-white text-center bg-light-black">
                    <div class="">
                        Сохранить
                    </div>
                </div>

                <div class="absolute left-2 right-0 z-0 top-2 h-full border-light-black border-[1px]">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref, defineEmits, defineProps } from 'vue';
    import { CircleStencil, Cropper } from 'vue-advanced-cropper'
    import 'vue-advanced-cropper/dist/style.css';

    let emit = defineEmits(['croppedImageData', 'closeModal'])

    defineProps(reactive({
        minAspectRatioProp: Object,
        maxAspectRatioProp: Object
    }))
    // let loadFile = (e) => {
    //     console.log(e.target)
    //     e.target.previousElementSibling.innerHTML = 'Выбран файл: ' + e.target.files[0].name
    // }
    
    let fileInput = ref(null)
    let cropper = ref(null)
    let uploadedImage = ref(null)

    let croppedImageData = {
        file: null,
        imageUrl: null,
        height: null,
        width: null,
        left: null,
        top: null,
    }

    let getUploadedImage = (e) => {
        const file = e.target.files[0]
        uploadedImage.value = URL.createObjectURL(file)

        console.log(uploadedImage.value)
    }

    const crop = () => {
        const { coordinates, canvas } = cropper.value.getResult()

        croppedImageData.file = fileInput.value.files[0]
        croppedImageData.imageUrl = canvas.toDataURL()
        croppedImageData.width = coordinates.width
        croppedImageData.height = coordinates.height
        croppedImageData.left = coordinates.left
        croppedImageData.top = coordinates.top

        emit('croppedImageData', croppedImageData)
        emit('closeModal')
    }
</script>