<template>
    <h1>Hello {{ events }}</h1>
</template>

<script>
export default {
    name: "Index",
    props: {
        events: {
            type: String,
            required: false
        }
    }
}

</script>

<style scoped>

</style>