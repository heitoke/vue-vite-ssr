<template>
    <div class="about">
        About
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutPage',
    meta(route) {
        return {
            title: 'About'
        }
    },
});

</script>
