<template>
    <Header/>
    <RouterView v-slot="{ Component }">
        <component :is="Component" class="page"></component>
    </RouterView>
</template>

<script setup>

import Header from './components/Header.vue';

</script>

<script>

export default {
    name: 'App'
}

</script>

<style lang="scss">

.page {
    padding: 0 5vw;
    padding-top: 48px;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow-x: hidden;
}

</style>
