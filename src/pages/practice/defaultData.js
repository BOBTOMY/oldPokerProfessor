function getDefaultData(App) {
  const data = {
      isIos: !0,
      defaultHeadImageUrl: App.globalData.imgUrl + "/image/headimg/moshengren.png",
      defaultUserInfo: "",
      trainHhId: "",
      shareTrainHhId: "",
      actionIndex: -1,
      currentHhNum: 1,
      totalHhNum: 1,
      seats: [],
      broad_cards: [ "", "", "", "", "" ],
      myCard: [],
      showPuke: [],
      showPukeTime: 0,
      cnName: "翻牌前打法",
      degree_str: "",
      robotList: [],
      small_blind_amount: 0,
      ante: 0,
      straddle: !1,
      dealer_btn: "",
      pre_pot: 0,
      pot: 0,
      last_action_is_fold: !1,
      haveRaise: !1,
      validActions: [],
      raiseBtn: [ {
          multiple: "1/3",
          title: "底池",
          raiseNumber: 0,
          hellNumber: 0,
          molecule: 2,
          bgColor: !0,
          denominator: 6
      }, {
          multiple: "1/2",
          title: "底池",
          raiseNumber: 0,
          hellNumber: 0,
          molecule: 3,
          bgColor: !0,
          denominator: 6
      }, {
          multiple: "2/3",
          title: "底池",
          raiseNumber: 0,
          hellNumber: 0,
          molecule: 4,
          bgColor: !0,
          denominator: 6
      }, {
          multiple: "1X",
          title: "底池",
          raiseNumber: 0,
          hellNumber: 0,
          molecule: 6,
          bgColor: !0,
          denominator: 6
      }, {
          multiple: "allin",
          title: "",
          raiseNumber: 0,
          hellNumber: 0,
          molecule: 9,
          bgColor: !0,
          denominator: 6
      } ],
      annotation: !0,
      maxAmount: 0,
      amount: 0,
      addHidden: !0,
      hideSilder: !0,
      iconLeft: 0,
      sliderProgress: 0,
      silderAmount: 0,
      maxRaise: 0,
      minRaise: 0,
      defaultStreet: [ "preflop", "flop", "turn", "river", "showdown" ],
      streetIndex: 0,
      street: "preflop",
      preStreet: "preflop",
      heroFold: !1,
      order_sn: "",
      victory: "",
      lastActionSeat: 0,
      perfectShow: !0,
      perfectAction: "",
      perfect: !1,
      menuHidden: {
          hidden: !0,
          animate: ""
      },
      options: {},
      remarkDetail: "暂无点评信息，请先完成一局练习!",
      opAreaValue: "",
      remarkConfirm: {
          text: "下一手",
          value: "",
          title: "牌局点评",
          discuss: "",
          adviceTheme: {}
      },
      cancelText: "重玩本手",
      hideRemark: !1,
      Introduction: {
          title: "",
          contentHidden: !0,
          bgColor: "#fff",
          result: "",
          richText: !1,
          content: "",
          cancelText: "",
          confirmText: "开始训练"
      },
      disabledRemark: !1,
      Timer: {
          time1: "",
          time2: "",
          time3: "",
          time4: ""
      },
      stop: !1,
      foldImg: !0,
      trainType: !1,
      KnowledgeId: 0,
      serverImg: {
          userImg: "",
          ewm1: "",
          ewm2: "",
          seal: ""
      },
      bet: 0,
      allinState: !1,
      cardsListA: [],
      cardsListB: [],
      cardsListC: [],
      heroBubble: !0,
      shiFanButton: !0,
      shiFanData: !1,
      playBackButton: !0,
      playBackData: !1,
      tips: {
          hidden: !0,
          info: "播放牌局提示信息",
          type: ""
      },
      shareTitle: "",
      zongHe: !0,
      stepTime: {
          fold: 250,
          action: 750,
          allinTime: 1e3,
          showTime: 500,
          dealTime: 2e3
      },
      heroActionInfo: !1,
      heroActionLists: [],
      heroActionIndex: 0,
      playAction: {
          hidden: !1,
          info: "",
          color: ""
      },
      follow: {
          info: "桃子不足到公众号免费领取",
          hidden: !1,
          img: App.globalData.imgUrl + "/image/feifei/gain4.png"
      },
      summary: !1,
      allAction: [],
      actionItem: "",
      loadingButton: !0,
      guide: {
          show: !0,
          state: "",
          info: "",
          className: ""
      },
      imgScroll: {
          imgScroll: !0,
          imgSrc: ""
      },
      timestamp: "",
      couponImgUrl: "",
      tipsInfo: {
          show: !1,
          tipsText: "",
          tipsImg: "",
          tipsEwm: ""
      },
      mallInfo: {},
      submitPay: !0,
      mallShow: !1,
      dealSeats: [],
      shouldBuyVip: !1,
      firstTrainButton: !1
  };
  return JSON.parse(JSON.stringify(data));
}
function getSeatDefault(App) {
  const data = {
    pre_pot: 0,
    amount: 0,
    actionIndex: -1,
    pot: 0,
    annotation: !0,
    maxAmount: 0,
    iconLeft: 0,
    sliderProgress: 0,
    step: 1e3,
    haveRaise: !1,
    preStreet: "preflop",
    victory: "",
    heroFold: !1,
    addHidden: !0,
    order_sn: "",
    streetIndex: 0,
    raiseBtn: [ {
        multiple: "1/3",
        title: "底池",
        raiseNumber: 0,
        molecule: 2,
        bgColor: !0,
        denominator: 6
    }, {
        multiple: "1/2",
        title: "底池",
        raiseNumber: 0,
        molecule: 3,
        bgColor: !0,
        denominator: 6
    }, {
        multiple: "2/3",
        title: "底池",
        raiseNumber: 0,
        molecule: 4,
        bgColor: !0,
        denominator: 6
    }, {
        multiple: "1X",
        title: "底池",
        raiseNumber: 0,
        molecule: 6,
        bgColor: !0,
        denominator: 6
    }, {
        multiple: "allin",
        title: "",
        raiseNumber: 0,
        molecule: 9,
        bgColor: !0,
        denominator: 6
    } ],
    showPuke: [],
    myCard: [],
    opAreaValue: "",
    hideRemark: !1,
    perfectShow: !0,
    perfectAction: "",
    Introduction: {
        title: "",
        contentHidden: !0,
        bgColor: "#fff",
        result: "",
        richText: !1,
        content: "",
        cancelText: "",
        confirmText: "开始训练"
    },
    disabledRemark: !1,
    bet: 0,
    allinState: !1,
    heroBubble: !0,
    heroActionInfo: !1,
    heroActionLists: [],
    heroActionIndex: 0,
    playAction: {
        hidden: !1,
        info: "",
        color: ""
    },
    summary: !1,
    actionItem: "",
    tips: {
        hidden: !0,
        info: "播放牌局提示信息",
        type: ""
    },
    guide: {
        show: !0,
        state: "",
        info: "",
        className: ""
    },
    imgScroll: {
        imgScroll: !0,
        imgSrc: ""
    },
    couponImgUrl: "",
    tipsInfo: {
        show: !1,
        tipsText: "",
        tipsImg: "",
        result: "",
        tipsEwm: ""
    },
    shouldBuyVip: !1,
    firstTrainButton: !1,
  };
  return JSON.parse(JSON.stringify(data));
}
export {
  getDefaultData,
  getSeatDefault
};
