<template>
    <div class="post-card">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore doloremque, accusamus mollitia consequatur perferendis. Sunt voluptate doloremque tempore deserunt id facilis saepe voluptas veniam reprehenderit. Omnis autem libero reiciendis.</p>
        <PostButton/>
    </div>
</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue'
</script>

<style scoped>

.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}

</style>