<template>
    <nav class="nav">
        <router-link v-for="(item) of navList" :key="item.title" :to="item.path">
            <nav-item :item="item"></nav-item>
        </router-link>
    </nav>
</template>

<script>
import { mapState } from 'vuex';
import NavItem from './NavItem.vue'
export default {
    name: 'Nav',
    components: {
        NavItem
    },
    computed: {
        ...mapState(['navList'])
    }
};
</script>
<style lang="scss" scoped>
.nav {
    width: 100%;
    background-color: #fff;
    padding: 2rem 1rem;
    border-top: 0.2rem solid #ccc;
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 1.4rem;
}
</style>