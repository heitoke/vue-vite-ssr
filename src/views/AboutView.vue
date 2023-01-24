<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>

export default {
    name: 'AboutPage',
    data: () => ({}),
    async meta($data) {
        return {
            title: 'Test',
            description: 'das',
            og: {
                type: 'website',
                title: 'Title OG',
                description: 'Text OG',
                url: 'genkan.xyz',
                image: 'https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=',
                site_name: 'Heito',
                image: 'https://avatars.mds.yandex.net/i?id=b09ea4a47639c16aabb734e4f738cc72faeed245-7543894-images-thumbs&n=13'
            },
            twitter: {
                title: 'Title Twitter',
                description: 'Text Twitter'
            }
        }
    }
}

</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
