<template>
    <div class="main-header">
        <div class="mask">
            <div class="logo">Vue Vite SSR Test</div>
            <ul class="pages">
                <RouterLink v-for="route of listRoutes" :key="route" :to="route.path"
                    :class="{ active: $route.name === route.name }"
                >
                    <li>{{ route?.meta?.title || route.name }}</li>
                </RouterLink>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainHeader',
    computed: {
        listRoutes() {
            return this.$router.options.routes.filter(route => !route.meta?.hide);
        }
    },
    props: {},
    data: () => ({}),
    watch: {},
    methods: {},
    mounted() {}
}

</script>

<style lang="scss" scoped>

.main-header {
    width: 100vw;
    height: 48px;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    z-index: 1000;

    .mask {
        display: flex;
        margin: 0 auto;
        max-width: 90vw;
        height: 100%;
        position: relative;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        font-size: 20px;
    }

    ul.pages {
        display: flex;
        align-self: center;

        a {
            margin: 0 8px 0 0;
            color: var(--color-primary-alt);
            transition: .2s;

            &.active {
                font-weight: 700;
                color: var(--color-primary);
            }

            &:last-child {
                margin: 0;
            }
        }
    }
}

</style>
