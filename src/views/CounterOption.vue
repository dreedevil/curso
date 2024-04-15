<template>
    <div class="counter">
      <CounterOption />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import CounterOption from '@/components/CounterOption.vue'; // @ is an alias to /src
  
  export default defineComponent({
    name: 'CounterView',
    components: {
      CounterOption,
    },
  });
  </script>
  
  <style>
  .counter{
  
    margin-left: auto;
    margin-right: auto;
  
  }
  </style>