<template>
    <div class="user">
        User - {{ $route.params.userId }}
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'UserPage',
    meta(route) {
        const userId = route.params.userId;

        return {
            title: `User - ${userId}`
        }
    },
});

</script>
