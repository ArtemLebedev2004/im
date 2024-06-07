<template>
    <div></div>
</template>

<script setup>
import { onMounted, toRefs, } from 'vue';
import axios from 'axios'
import Swal from 'sweetalert2'
import eventBus from '@/eventBus';

const props = defineProps(['product'])

let {product} = toRefs(props)

// let errors = ref([])

// let idProduct = ref(null)

onMounted(async() => {
    await deleteProduct()
})

let deleteProduct = async() => {

    try {
        

        Swal.fire({
            title: "Вы хотите удалить проект с id = " + product.value.id,
            showDenyButton: true,
            confirmButtonText: "Удалить",
            denyButtonText: `Не удалять`
        }).then(async(result) => {
            if (result.isConfirmed) {
                let res = await axios.delete('api/product/' + product.value.id)
                Swal.fire("Проект с id = " + product.value.id + " удалён", "", "success");
                console.log(res)
            } 
        })


        eventBus.emit('deleteProduct', '')

    } catch (err) {
        console.log(err)
    }
    
}


</script>