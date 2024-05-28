<template>
    <textarea :placeholder="placeholder" v-model="textAreaComputed" class="w-full h-32 mt-6 p-2 min-[1920px]:p-4 outline-none  border"></textarea>
    <div class="text-lg text-red-500">{{ errors }}</div>
</template>

<script setup>
import {toRefs, defineProps, defineEmits, computed} from 'vue'

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

</script>