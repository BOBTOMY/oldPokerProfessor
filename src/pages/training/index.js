function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}
import res from './data';
Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        statusBarHeight: 20,
        content: "您的分数未达到该等级的要求，请先进行低级别的练习！",
        cancelText: "",
        confirmText: "",
        isIos: !1,
        id: 0,
        dHidden: !0,
        contentHidden: !0,
        bgColor: "#fff",
        evaluation: !1,
        defaultEvId: 4,
        scrollHeight: 0,
        authorization: !0,
        options: {},
        continueTest: 0,
        shareData: {
            title: "",
            imageUrl: ""
        },
        giftBag: !0,
        bagImg: {
            info: "",
            hidden: !0,
            img: getApp().globalData.imgUrl + "/image/feifei/gain1.png"
        },
        postFormTimes: 0,
        userInfo: "",
        coupon: {
            hidden: !1,
            imgUrl: ""
        },
        giveCoin: {
            hidden: !0,
            info: ""
        },
        startTest: 0,
        startTrain: 0,
        userEwmType: -1,
        contactImg: getApp().globalData.imgUrl + "/image/feifei/contact.png",
        receiveImg: getApp().globalData.imgUrl + "/image/feifei/receive.png",
        tipsInfo: {
            show: !1,
            tipsText: "",
            tipsImg: "",
            tipsEwm: getApp().globalData.imgUrl + "/image/themeTips/tipsCode.png"
        },
        mainButtonList: [],
        countCodeImage: !1
    },
    onLoad: function(t) {
        console.log(t);
        var a = this;
        "undefined" != decodeURIComponent(t.scene) ? (getApp().globalData.sceneType = decodeURIComponent(t.scene),
        a.setData({
            userEwmType: decodeURIComponent(t.scene)
        })) : "undefined" != t.userId && null != t.userId && "null" != t.userId && a.setData({
            userEwmType: "userId_" + t.userId
        }), a.setData({
            options: t
        }), wx.getSystemInfo({
            success: function(t) {
                t.system.indexOf("Android") < 0 ? a.setData({
                    statusBarHeight: t.statusBarHeight,
                    scrollHeight: t.screenHeight - 50,
                    isIos: !0
                }) : a.setData({
                    statusBarHeight: t.statusBarHeight,
                    scrollHeight: t.screenHeight - 55,
                    isIos: !1
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        this.setData({
            statusBarHeight: wx.getStorageSync("statusBarHeight")
        }), getApp().globalData.loginState || wx.login({
            success: function(a) {
                var e = a.code;

                e ? t.getUserInfo(e) : console.log("获取用户登录态失败！");
            },
            fail: function() {}
        });
    },
    getUserInfo: function(t) {
        var a = this;
        t = {};
        t.data = res;
        if (t.data.success) {
            getApp().globalData.token = t.data.data.token, getApp().globalData.loginState = !0,
            getApp().globalData.totalSpend = t.data.data.userInfo.totalSpend, getApp().globalData.warnMap = t.data.data.warnMap,
            wx.setStorageSync("userInfo", t.data.data.userInfo), a.setData({
                userInfo: t.data.data.userInfo,
                result: t,
                mainButtonList: t.data.data.mainButtonList
            });
            console.log(res,'mainButtonList');

            for (var e in t.data.data.trainTheme) {
              console.log(e,'maoxiana');
              // 开始训练和测试
              "startTrain" == e ? a.setData({
                  startTrain: t.data.data.trainTheme[e],
              }) : "startTest" == e && a.setData({
                  startTest: t.data.data.trainTheme[e],
              });
            }
        }

    },
    formSubmit: function(t) {
        var a = this;
        getApp().globalData.formId.length < 15 && (getApp().globalData.formId.push(t.detail.formId),
        15 == getApp().globalData.formId.length && a.postFormId());
    },
    postFormId: function() {
        var t = this;
        t.setData({
            postFormTimes: t.data.postFormTimes + 1
        }), wx.request({
            url: getApp().globalData.Url + "/userInfo/formId",
            method: "post",
            header: {
                "content-type": "application/x-www-form-urlencoded",
                token: getApp().globalData.token
            },
            data: {
                formId: getApp().globalData.formId
            },
            success: function(a) {
                a.data.success || t.data.postFormTimes < 5 && t.postFormId();
            },
            fail: function(a) {
                t.data.postFormTimes < 5 && t.postFormId();
            }
        });
    },

    train: function(a) {
        var e = this;
        if ("important" == a.currentTarget.dataset.action) {
            var o = "mainButtonList[" + a.currentTarget.dataset.index + "].arrayValue[3]";
            e.setData(t({}, o, "unimportant"));
        }
        if ("vip" == a.currentTarget.dataset.keyinfo && (1 != wx.getStorageSync("userInfo").isMember || 1 == wx.getStorageSync("userInfo").isMember && wx.getStorageSync("userInfo").memberEndTime < new Date().getTime())) getApp().globalData.util.isVIP(e.data.isIos, "只有VIP会员才能进入此训练", !0); else if ("video" == a.currentTarget.dataset.keyinfo) setTimeout(function() {
            wx.switchTab({
                url: "../video/video"
            });
        }, 300); else setTimeout(function() {
            wx.navigateTo({
                url: "../practice/practice?id=" + a.currentTarget.dataset.id + "&gameCard=" + !1
            });
        }, 300);
    },




});
