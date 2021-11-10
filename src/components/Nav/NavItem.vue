<template>
    <div :class="['nav-item',{active:item.title === navName}]" @click="changeNavActive(item.title)">
        <i :class="['iconfont', item.icon]"></i>
        <span class="icon-title">{{ item.title }}</span>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: "NavItem",
    props: {
        item:Object
    },
    computed:{
        ...mapState(['navName'])
    },
    methods:{
        ...mapMutations(['changeNavActive'])
    }
};
</script>
<style lang="scss" scoped>
.nav-item {
    width: 5.2rem;
    height: 5.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .iconfont {
        display: block;
        width: 3.4rem;
        height: 3.4rem;
        border: 0.2rem solid #333;
        border-radius: 50%;

        line-height: 3.4rem;
        text-align: center;
    }

    .icon-title {
        margin-top: 0.7rem;
    }

    &.active {
        color: #feba07;
    }
    &.active .iconfont {
        border-color: #feba07;
    }
}
</style>