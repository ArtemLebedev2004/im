<template>
    <div class="min-h-[200px]  mt-10">
        <textarea :placeholder="placeholder" v-model="textAreaComputed" class="w-full h-full p-2 min-[1920px]:p-4 outline-none  border"></textarea>
        <div class="text-lg text-red-500">{{ errors }}</div>
    </div>
    
</template>

<script setup>
import {toRefs, defineProps, defineEmits, computed, watch} from 'vue'

const emit = defineEmits(['update:textArea'])

const props = defineProps([
    'placeholder', 'textArea', 'errors'
])

const {placeholder, textArea, errors} = toRefs(props)

const textAreaComputed = computed({
    get: () => textArea.value,
    set(value) {
        emit('update:textArea', value)
    }
})

watch(textAreaComputed, (newValue) => {
    // let regexp = /[&$?!\\^/#@"',`~=+\-_()[\]%:;№<>]/
    if (newValue == ' ') {
        textAreaComputed.value = ''
    } 
})

</script>