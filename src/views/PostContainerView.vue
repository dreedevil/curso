<template>
  <div class="post-container">
    <img alt="Vue logo" src="../assets/logo.png">
    <PostContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostContainer from '@/components/PostContainer.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'PostView',
  components: {
    PostContainer,
  },
});
</script>

<style>
.post-container img{

  display: block;
  margin-left: auto;
  margin-right: auto;

}
</style>