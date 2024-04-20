<template>
    <form>
        <input type="text" v-model="inputText" />
        <h3>{{ inputText }}</h3>
        <input type="checkbox" v-model="agree" /> Acepto terminos y condiciones
        <br>
        <select v-model="country" class="select">
            <option value="Spain">Spain</option>
            <option value="UK">UK</option>
            <option value="France">France</option>
            <option value="Mexico">Mexico</option>
        
        </select>
    </form>
</template>

<script lang='ts' setup>
import {Ref, ref} from 'vue'
let inputText: Ref<string> = ref('')
let agree = ref(true)
let country = ref('UK')
</script>

<style scoped>
.select{
    margin-top: 25px;
}
</style>
