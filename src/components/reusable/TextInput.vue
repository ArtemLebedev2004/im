<template>
    <input :type="inputType" :placeholder="placeholder" v-model="inputComputed" class="w-full py-1 px-2 min-[1920px]:px-4 min-[1920px]:py-2 first:mt-0 mt-8 min-[1920px]:mt-10 text-xl min-[1920px]:text-3xl outline-none border-light-black border-b-[1px]" :class="stylesInput">
    <div class="text-lg text-red-500">{{ errors }}</div>
</template>

<script setup>
import {computed, defineEmits, defineProps, toRefs, watch} from 'vue'

const emit = defineEmits(['update:input'])

const props = defineProps([
    'inputType', 'placeholder', 'input', 'stylesInput', 'errors'
])

const { inputType, placeholder, input, stylesInput, errors } = toRefs(props)

const inputComputed = computed({
    get: () => input.value,
    set(value) {
        emit('update:input', value)
    }
})

watch(inputComputed, (newValue) => {
    // let regexp = /[&$?!\\^/#@"',`~=+\-_()[\]%:;№<>]/
    if (newValue == ' ') {
        inputComputed.value = ''
    } 
})
</script>