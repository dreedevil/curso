<template>
   <div class="counter-option"> <h3>{{ counter }}</h3> <br>
    <button @click="addCounter">Incrementar</button>
    <button @click="removeCounter"> Decrementar</button>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'CounterOption',
        data() {
            let counter = 0;
            return {counter}
        },
        methods: {
            addCounter() {
                this.counter++
            },
            removeCounter(){
                this.counter--
            }
        }
    })

</script>

<style scoped>

</style>