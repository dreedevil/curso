<template>
    <p  v-bind:style="{backgroundColor : '#ccc', color : c }" >El mensaje se ah enviado correctamente</p>
    <button @click="handlerClick()">Cambiar Color</button>
</template>


<script lang = "ts" setup>
import {ref} from 'vue'; 
    let c = ref('#fff')
    const handlerClick = () => {c.value = '#000'}
</script>

<style>
.danger {
    color:red;
}
</style>