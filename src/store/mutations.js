export default {
    // 更改底部导航的选中改变
    changeNavActive(state,title) {
        state.navName = title
    },
    //更改年份
    changeYear(state,year) {
        state.year = year
    }
}