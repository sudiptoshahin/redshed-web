<template>
    <BaseLayout>
        <template>
            <h1>Hello {{ events }}</h1>
        </template>
    </BaseLayout>
</template>

<script>

import BaseLayout from '../components/layouts/BaseLayout.vue';
export default {
    name: "Index",
    components: {
        BaseLayout
    },
    props: {
        events: {
            type: String,
            required: false
        }
    }
}

</script>

<style scoped>
h1 {
    color: black;
}
</style>