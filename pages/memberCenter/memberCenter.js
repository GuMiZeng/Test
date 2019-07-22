// pages/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isMember: 0,
    privilegeActive: -1,
    specialList: [{
        name: '专项会员价',
        icon: '/assets/imgs/member-price.png',
        summary: '会员服务期内累计省钱金额未达99元，到期日可退还差额服务费（针对2019年1月1日起开通或续费的会员生效）'
      }, {
        name: '全场可退',
        icon: '/assets/imgs/member-return.png',
        summary: '全场标注“特权退”产品，会员如整笔订单未使用均可退。'
      },
      {
        name: '省钱保障',
        icon: '/assets/imgs/member-save.png',
        summary: '全场标注“特权退”产品，会员如整笔订单未使用均可退。'
      },
      {
        name: '会员日',
        icon: '/assets/imgs/member-day.png',
        summary: '全场标注“特权退”产品，会员如整笔订单未使用均可退。'
      },
      {
        name: '全场免拼',
        icon: '/assets/imgs/member-free.png',
        summary: '全场标注“特权退”产品，会员如整笔订单未使用均可退。'
      }, {
        name: '专属客服',
        icon: '/assets/imgs/member-service.png',
        summary: '全场标注“特权退”产品，会员如整笔订单未使用均可退。'
      }
    ],
    vipList3: [{
      text1: '邀请好友',
      text2: '赢现金',
      bgIcon: '/assets/imgs/yao.png'
    }, {
      text1: 'PLUS会员',
      text2: '免费试玩',
      bgIcon: '/assets/imgs/mian.png'
    }, {
      text1: '加入会员',
      text2: '福利群',
      bgIcon: '/assets/imgs/fu.png'
    }],
    vipList2: [{
      text1: '邀请好友',
      text2: '赢现金',
      bgIcon: '/assets/imgs/yao.png'
    }, {
      text1: 'PLUS会员',
      text2: '免费试玩',
      bgIcon: '/assets/imgs/mian.png'
    }],
    vipList1: [{
      text1: '邀请好友',
      text2: '赢现金',
      bgIcon: '/assets/imgs/yao.png'
    }],
    superList: [{
      img: '/assets/imgs/member-invite-share.jpg',
      title: '成都柏林儿童乐园童乐园童',
      summary: '成都柏林儿童乐园乐园乐园乐园乐园，小火车，全国畅玩！小火车，全国畅玩！小火车，全国畅玩！',
      price: '0.0',
      oldPrice: '177',
      distance: '2.3'
    }, {
      img: '/assets/imgs/member-invite-share.jpg',
      title: '成都柏林儿童乐园童乐园童',
      summary: '成都柏林儿童乐园乐园乐园乐园乐园，小火车，全国畅玩！小火车，全国畅玩！小火车，全国畅玩！',
      price: '0.0',
      oldPrice: '177',
      distance: '2.3'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  toPricvilege(e) {
    console.log(e)
    this.setData({
      privilegeActive: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})