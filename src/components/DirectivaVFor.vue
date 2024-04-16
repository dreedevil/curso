<template>
    <h1>Paises en array</h1>
    <ul>
        <li v-for = "(country,index) in countries" v-bind:key="index"> {{ country }}</li>
    </ul>

    <h1>Ciudades en objeto</h1>

    <ul>
        <li v-for = " ciudad in ciudades" v-bind:key="ciudad.code"> {{ ciudad.name }}</li>
    </ul>

</template>

<script lang="ts" setup>
 import {Ref, ref} from 'vue';
 let countries:Ref<Array<string>> = ref([
    'España','Francia','UK','Italia', 'Portugal'
 ])

 let ciudades = ref([
    {
        code: 'hu',
        name :'Huixqui'
    },
    {
        code: 'cu',
        name :'Cuajis'
    },
    {
        code: 'qe',
        name :'Quere'
    },
 ])
</script>

<style scoped>
li {
    margin-left: auto;
    margin-right: auto;
}
</style>