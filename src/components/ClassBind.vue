<template>
    <p  v-bind:class = "{'danger' : hasError }" >El mensaje se ah enviado correctamente</p>
</template>


<script lang = "ts" setup>
    let hasError = true
</script>

<style>
.danger {
    color:red;
}
</style>