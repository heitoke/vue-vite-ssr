<template>
    <div class="main">
        MainPage
        <div>{{ msg }}</div>
        {{ fullName }}
        <button @click="$emit('pageInit', 'Hello')">Button</button>
        <button @click="fullName = 'Nikita Test'">Test</button>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    computed: {
        fullName: {
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            set(newValue: string) {
                [this.firstName, this.lastName] = newValue.split(' ');
            }
        }
    },
    props: {
        msg: { type: String, default: () => 'Message' }
    },
    data: () => ({
        firstName: 'Nikita',
        lastName: 'Kapustin'
    }),
    emits: {
        pageInit(message: string) {
            console.log('page', message);
        }
    }
});

</script>
