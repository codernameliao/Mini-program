// pages/login/login.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        //第一个组件
        loginGo: function (param) {
            wx.switchTab({
                url: '/pages/index/index',
            })
        },
        goMyhome: function (param) {
            wx.switchTab({
                url: '/pages/user/user',
            })
        }
    }
})