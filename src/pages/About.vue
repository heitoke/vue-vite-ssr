<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>

export default {
    name: 'AboutPage',
    data: () => ({}),
    async meta() {
        let title = 'About page',
            description = 'Page about us',
            image = 'https://i.pinimg.com/originals/f1/23/98/f123988880c5ddf544dfbc3721ba2ecc.gif';

        return {
            title,
            description,
            og: {
                type: 'website',
                title,
                description,
                image,
                site_name: 'About'
            },
            twitter: {
                title,
                description,
                image
            }
        }
    }
}

</script>

<style lang="scss" scoped>
</style>
