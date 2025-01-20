<template>
    <!-- <Header /> -->
    <main class="layout">
        <SideMenu />
        <h1 class="bg-red-500">Common</h1>
        <slot>

        </slot>
    </main>
</template>

<script>
import SideMenu from './SideMenu.vue';

export default {
    name: "BaseLayout",
    components: {
        SideMenu,
    }
}

</script>

<style scoped>
.layout {
    display: flex;
    background-color: lightblue;
}
</style>
