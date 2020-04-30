<script>
export default {
    data() {
        return {};
    },
};
</script>

<template>
    <div>
        <h1>this is nuxt poc</h1>
        <nav>
            <nuxt-link to="/">index</nuxt-link>
            <nuxt-link to="/about">about</nuxt-link>
        </nav>
    </div>
</template>

<style>
.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
