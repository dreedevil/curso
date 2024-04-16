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
 interface Iciudad {
    code: string,
    name: string
 }
 let countries:Ref<Array<string>> = ref([
    'España','Francia','UK','Italia', 'Portugal'
 ])

 let ciudades: Ref<Array<Iciudad>> = ref([
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
  align-items: center;
  list-style: none;
}
</style>