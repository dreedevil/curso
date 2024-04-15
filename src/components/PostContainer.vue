<template>
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
</template>


<script lang="ts" setup>
    import PostCard from './PostCard.vue'
</script>

<style>
.post-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>