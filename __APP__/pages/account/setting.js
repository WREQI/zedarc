var e = require("../../@babel/runtime/helpers/regeneratorRuntime");
require("../../@babel/runtime/helpers/Arrayincludes");
var t = function (e, t, n) {
    return new Promise(function (o, a) {
      var r = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(r, i);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  n = require("../../common/vendor.js"),
  o = n.useBrokerInfo(),
  a = o.hasBind,
  r = o.navigateToTrade,
  i = o.isTradeEnable,
  c = getApp().globalData,
  s = {
    components: {
      ProtocolList: function () {
        return "./components/ProtocolList.js";
      },
    },
    data: function () {
      return {
        hasAgree: "agree" === n.StockBridge.store.protocolStatus,
        aboutTxt: "zxg" === c.APPNAME ? "关于腾讯自选股" : "关于腾讯微证券",
        headUrl: "",
        nickName: "",
        isShowAiSetting: !1,
        logoImg: ["black", "dark"].includes(
          n.StockBridge.getStorage("user/skin")
        )
          ? n.tencentLogoBlack
          : n.tencentLogoWhite,
        skin: ["black", "dark"].includes(n.StockBridge.getStorage("user/skin"))
          ? "dark"
          : "light",
      };
    },
    computed: {
      isAccountOpen: function () {
        return a.value;
      },
      isTradeEnable: function () {
        return i.value;
      },
    },
    onLoad: function (e) {
      "msg" === (null == e ? void 0 : e.from) &&
        "aisetting" === (null == e ? void 0 : e.pageto) &&
        this.goAI(null == e ? void 0 : e.from);
    },
    onPageShow: function () {
      var e = ["black", "dark"].includes(n.StockBridge.getStorage("user/skin"));
      (this.skin = e ? "dark" : "light"),
        (this.logoImg = e ? n.tencentLogoBlack : n.tencentLogoWhite);
    },
    mounted: function () {
      this.getUserInfo(),
        this.checkUserTagrule(),
        n.StockBridge.store.subscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
    },
    methods: {
      handleProtocolStatusChange: function (e) {
        this.hasAgree = "agree" === e;
      },
      getUserInfo: function () {
        var e = this;
        n.userinfo.get(!0, function (t) {
          (e.headUrl = t.headimgurl), (e.nickName = t.nickname);
        });
      },
      checkUserTagrule: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        n.AccountAPI.checkUserTagrule({
                          appid: "zxg_xcx|ai_helper",
                          app: "zxg_xcx",
                        })
                      );
                    case 3:
                      0 == +(null == (o = e.sent) ? void 0 : o.retcode)
                        ? (this.isShowAiSetting =
                            1 == +(null == o ? void 0 : o.status) || !1)
                        : (this.isShowAiSetting = !1),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        (this.isShowAiSetting = !1);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 7]]
            );
          })
        );
      },
      goPersonalInfoList: function () {
        var e =
          "https://gu.qq.com/resource/products/portfolio/personal_info/index.html#/?openid="
            .concat(n.wx$1.getStorageSync("_qluin"), "&fskey=")
            .concat(n.wx$1.getStorageSync("_qlskey"), "&app=zxg_xcx&nickName=")
            .concat(this.nickName, "&apptype=zxg_xcx&headUrl=")
            .concat(this.headUrl);
        n.wx$1.navigateTo({
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(e)
          ),
        });
      },
      goWxPrivateSetting: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        n.StockBridge.privacyAgreement.check()
                      );
                    case 3:
                      e.next = 8;
                      break;
                    case 5:
                      return (
                        (e.prev = 5), (e.t0 = e.catch(0)), e.abrupt("return")
                      );
                    case 8:
                      n.wx$1.openSetting();
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 5]]
            );
          })
        );
      },
      changeSkin: function () {
        n.wx$1.navigateTo({ url: "/pages/account/skin/main" });
      },
      goAI: function (e) {
        n.Request.reportMTAData({
          eventName: e
            ? "base.aisetting.ai_setting_frommsg_auto_jump"
            : "base.aisetting.ai_setting_enyrt_click",
        }),
          n.wx$1.navigateTo({ url: "/pages/account/aiSetting" });
      },
      goPrivateSetting: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        n.StockBridge.privacyAgreement.check()
                      );
                    case 3:
                      e.next = 8;
                      break;
                    case 5:
                      return (
                        (e.prev = 5), (e.t0 = e.catch(0)), e.abrupt("return")
                      );
                    case 8:
                      n.Request.reportMTAData({
                        eventName: "base.setting.private_setting",
                      }),
                        n.wx$1.navigateTo({
                          url: "/pages/account/privateSetting",
                        });
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 5]]
            );
          })
        );
      },
      goCancellation: function () {
        n.wx$1.setStorageSync("account_cancellation/apply_protocol_agree", ""),
          n.Request.reportMTAData({
            eventName: "base.setting.accountcancellation_apply",
          }),
          n.wx$1.navigateTo({ url: "/pages/account/cancellation/apply" });
      },
      goTradeSetting: function () {
        n.Request.reportMTAData({ eventName: "base.setting.trade_setting" }),
          r({ name: "AccountSafeSetting" }).catch(function (e) {
            var t =
              "ERR_MAINTAIN" === e.retcode ? e.retmsg : "系统繁忙请稍后再试";
            n.wx$1.showModal({
              confirmText: "确定",
              content: t,
              showCancel: !1,
            });
          });
      },
      tapAbout: function () {
        n.Request.reportMTAData({ eventName: "xcx_mine_about" }),
          n.wx$1.navigateTo({ url: "/pages/account/about" });
      },
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("protocol-list")
  )();
var u = n._export_sfc(s, [
  [
    "render",
    function (e, t, o, a, r, i) {
      return n.e(
        { a: e.rootFontSize, b: n.p({ "no-auto": !0 }), c: r.hasAgree },
        r.hasAgree
          ? {
              d: n.o(function () {
                return i.goCancellation && i.goCancellation.apply(i, arguments);
              }, 211),
            }
          : {},
        { e: i.isAccountOpen && i.isTradeEnable },
        i.isAccountOpen && i.isTradeEnable
          ? {
              f: n.o(function () {
                return i.goTradeSetting && i.goTradeSetting.apply(i, arguments);
              }, 212),
            }
          : {},
        {
          g: n.o(function () {
            return i.changeSkin && i.changeSkin.apply(i, arguments);
          }, 213),
          h: r.isShowAiSetting,
        },
        r.isShowAiSetting
          ? {
              i: n.o(function () {
                return i.goAI && i.goAI.apply(i, arguments);
              }, 214),
            }
          : {},
        {
          j: n.o(function () {
            return i.goPrivateSetting && i.goPrivateSetting.apply(i, arguments);
          }, 215),
          k: n.o(function () {
            return (
              i.goPersonalInfoList && i.goPersonalInfoList.apply(i, arguments)
            );
          }, 216),
          l: n.o(function () {
            return (
              i.goWxPrivateSetting && i.goWxPrivateSetting.apply(i, arguments)
            );
          }, 217),
          m: n.t(r.aboutTxt),
          n: n.o(function () {
            return i.tapAbout && i.tapAbout.apply(i, arguments);
          }, 218),
          o: r.logoImg,
          p: r.skin,
        }
      );
    },
  ],
  ["__scopeId", "data-v-492c5ed3"],
]);
wx.createPage(u);
