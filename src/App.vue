<template>
    <RouterView v-slot="{ Component }">
        <component :is="Component" class="page" :msg="'hello world'"></component>
    </RouterView>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({});

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
