<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>

    <RouterView v-slot="{ Component }">
        <component :is="Component" class="page"></component>
    </RouterView>
</template>

<script>

export default {
    name: 'App'
}

</script>

<style lang="scss">
</style>
