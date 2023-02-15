<template>
    <div class="error">
        <main>
            <h1>404</h1>

            <RouterLink to="/">Go to home page</RouterLink>
        </main>
    </div>
</template>

<script>

export default {
    name: 'ErrorPage',
    data: () => ({}),
    async meta() {
        let title = 'There are no such pages',
            description = 'This page does not exist, are you sure about your request?',
            image = 'https://i.gifer.com/76cI.gif';

        return {
            title,
            description,
            og: {
                type: 'website',
                title,
                description,
                image,
                site_name: 'Error page'
            },
            twitter: {
                title,
                description,
                image
            }
        }
    },
    mounted() {
        document.querySelector('html').setAttribute('theme', 'dark');
    },
    unmounted() {
        document.querySelector('html').setAttribute('theme', 'light');
    }
}

</script>

<style lang="scss" scoped>

.page.error {
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-position: center;
        background-image: url('https://i.gifer.com/76cI.gif');
    }

    main {
        text-align: center;
        z-index: 1;
        
        h1 {
            margin: 0;
            padding: 0;
            font-size: 128px;
            color: var(--T);
            -webkit-text-stroke: 4px #fff;
        }

        a {
            transition: .2s;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

</style>
