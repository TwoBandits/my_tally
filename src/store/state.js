export default {
    // 底部导航的数据
    navList: [{
            path: '/billdetail',
            icon: 'icon-mingxi',
            title: '明细'
        },
        {
            path: '/tally',
            icon: 'icon-jizhang',
            title: '记账'
        },
        {
            path: '/statistical',
            icon: 'icon-tongji',
            title: '统计'
        }
    ],
    // 底部导航选中判定
    navName: '明细',

    // 明细页面
    yaers:[],
    year:new Date().getFullYear().toString()
}