<template>
    <div class="main">
        <h1>Home Page</h1>
    </div>
</template>

<script>

export default {
    name: 'MainPage',
    async meta() {
        let title = 'Home page',
            description = 'Have a good time',
            image = 'https://i.pinimg.com/originals/a1/eb/dd/a1ebdd07e405d8a82879aa7531c9bccd.gif';

        return {
            title,
            description,
            og: {
                type: 'website',
                title,
                description,
                image,
                site_name: 'Home'
            },
            twitter: {
                title,
                description,
                image
            }
        }
    },
    computed: {},
    components: {},
    data: () => ({}),
    watch: {},
    methods: {},
    mounted() {},
    created() {}
}

</script>

<style lang="scss" scoped>

</style>