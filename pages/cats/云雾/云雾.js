Page({ 
 data: {
catname:"云雾",
 catitems:[ 
{category:"昵称",
 content:" 黑黑/毛竹",},
{category:"毛色",
 content:" 狸花",},
{category:"性别",
 content:" 未知",},
{category:"状况",
 content:" 健康",},
{category:"绝育情况",
 content:" 未绝育",},
{category:"外貌",
 content:" 长毛狸花加白 白口罩 白围脖 踏雪",},
{category:"性格",
 content:" 怕人 安全距离1m以外",},
{category:"第一次被目击时间",
 content:" 2018-03-26",},
{category:"关系",
 content:" 和杰希一家、小黄鸭关系不好，喜欢去找小黄鸭打架",},
{category:"编写日期",
 content:" 2020-02-07",},
], 
relationship:[{ rela:"杰希"},
{ rela:"小黄鸭"},
], 
nums:[
]},
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      path: '/pages/index/index?pageId='+this.data.catname,//这里在首页的地址后面添加我们需要传值的标识位pageId以及值123(pageId 这个名字你们可以自己随便乱取 如同一个变量名)
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },

})

