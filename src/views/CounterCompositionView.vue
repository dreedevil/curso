<template>
    <div class="counter">
      <CounterComposition />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import CounterComposition from '@/components/CounterComposition.vue'; // @ is an alias to /src
  
  export default defineComponent({
    name: 'CounteCompositionView',
    components: {
        CounterComposition,
    },
  });
  </script>
  
  <style>
  .counter{
  
    margin-left: auto;
    margin-right: auto;
  
  }
  </style>