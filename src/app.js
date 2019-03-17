import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import e from './utils/util.js';

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/training/index',
      // 'pages/purchased/index',
      'pages/user/index',
      'pages/practice/practice',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "color": "#545b66",
      "selectedColor": "#f00534",
      "backgroundColor": "#fff",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "发现",
          "iconPath": "assets/icons/poster.png",
          "selectedIconPath": "assets/icons/poster_selected.png"
        },
        {
          "pagePath": "pages/training/index",
          "text": "训练",
          "iconPath": "assets/icons/traffic.png",
          "selectedIconPath": "assets/icons/traffic_selected.png"
        },
        // {
        //   "pagePath": "pages/purchased/index",
        //   "text": "定制",
        //   "iconPath": "assets/icons/dingzhi.png",
        //   "selectedIconPath": "assets/icons/dingzhi_selected.png"
        // },
        {
          "pagePath": "pages/user/index",
          "text": "我的",
          "iconPath": "assets/icons/user.png",
          "selectedIconPath": "assets/icons/user_selected.png"
        }
      ]
    },
  }

  constructor(props) {
    super(props);
    wx.getSystemInfo({
        success: function(e) {
            if (e) try {
                wx.setStorageSync("statusBarHeight", e.statusBarHeight);
            } catch (e) {}
        }
    });
    wx.setKeepScreenOn({
        keepScreenOn: !0
    });

    this.globalData = {
      userInfo: null,
      imgUrl: "https://www.heitaodashi.cn",
      Url: "https://www.heitaodashi.com:8101",
      token: "",
      util: e,
      voiceDealCard: "",
      voiceButton: "",
      voiceHeroAction: "",
      voiceRaise: "",
      voiceCall: "",
      voiceCheck: "",
      voiceFold: "",
      voiceGatherChip: "",
      voiceBroadCard: "",
      voiceWin: "",
      voiceLose: "",
      voiceGoodScore: "",
      voiceGod: "",
      scene: 1001,
      user: !0,
      defaultEvId: 4,
      cancelScene: !0,
      shareTitle: "德扑老教授-用科学来决策！",
      shareImg: "",
      sharePath: "",
      loginState: !1,
      guide: !0,
      GuideStatus: "",
      RequestCount: 0,
      sceneType: "",
      formId: [],
      warnMap: {},
      totalSpend: 0
    };
    this.setVoice();
  }
  setVoice() {
    var a = wx.createInnerAudioContext();
    a.autoplay = !1, a.src = this.globalData.imgUrl + "/voice/button.mp3";
    var t = wx.createInnerAudioContext();
    t.autoplay = !1, t.src = this.globalData.imgUrl + "/voice/deal_card.mp3";
    var o = wx.createInnerAudioContext();
    o.autoplay = !1, o.src = this.globalData.imgUrl + "/voice/hero_action.mp3";
    var i = wx.createInnerAudioContext();
    i.autoplay = !1, i.src = this.globalData.imgUrl + "/voice/raise.mp3";
    var c = wx.createInnerAudioContext();
    c.autoplay = !1, c.src = this.globalData.imgUrl + "/voice/call.mp3";
    var r = wx.createInnerAudioContext();
    r.autoplay = !1, r.src = this.globalData.imgUrl + "/voice/check.mp3";
    var l = wx.createInnerAudioContext();
    l.autoplay = !1, l.src = this.globalData.imgUrl + "/voice/fold.mp3";
    var n = wx.createInnerAudioContext();
    n.autoplay = !1, n.src = this.globalData.imgUrl + "/voice/gather_chip.mp3";
    var s = wx.createInnerAudioContext();
    s.autoplay = !1, s.src = this.globalData.imgUrl + "/voice/broad_card.mp3";
    var g = wx.createInnerAudioContext();
    g.autoplay = !1, g.src = this.globalData.imgUrl + "/voice/win.mp3";
    var u = wx.createInnerAudioContext();
    u.autoplay = !1, u.src = this.globalData.imgUrl + "/voice/lose.mp3";
    var v = wx.createInnerAudioContext();
    v.autoplay = !1, v.src = this.globalData.imgUrl + "/voice/good_score.mp3";
    var h = wx.createInnerAudioContext();
    h.autoplay = !1, h.src = this.globalData.imgUrl + "/voice/god.mp3", this.globalData.voiceButton = a,
    this.globalData.voiceDealCard = t, this.globalData.voiceHeroAction = o, this.globalData.voiceRaise = i,
    this.globalData.voiceCall = c, this.globalData.voiceCheck = r, this.globalData.voiceFold = l,
    this.globalData.voiceGatherChip = n, this.globalData.voiceBroadCard = s, this.globalData.voiceWin = g,
    this.globalData.voiceLose = u, this.globalData.voiceGoodScore = v, this.globalData.voiceGod = h;
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
