<template>
    <div class="counter-option"> <h3>{{ counter }}</h3> <br>
     <button @click="addCounter">Incrementar</button>
     <button @click="removeCounter"> Decrementar</button>
   </div>
 </template>
 
 <script lang="ts">
     import { defineComponent, Ref, ref } from "vue";
     export default defineComponent({
        name:'CounterComposition',
        setup(){
            let counter:Ref = ref(0)
            const addCounter = ():void => {
                counter.value++
             
            }
            const removeCounter = ():void => {
                counter.value--
            }
            return {counter, addCounter, removeCounter}
        }
     })
 
 </script>
 
 <style scoped>
 
 </style>