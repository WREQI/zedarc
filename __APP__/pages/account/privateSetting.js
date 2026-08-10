var e = require("../../@babel/runtime/helpers/defineProperty"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = function (e, t, o) {
    return new Promise(function (n, r) {
      var s = function (e) {
          try {
            a(o.next(e));
          } catch (e) {
            r(e);
          }
        },
        i = function (e) {
          try {
            a(o.throw(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(s, i);
        };
      a((o = o.apply(e, t)).next());
    });
  },
  n = require("../../common/vendor.js"),
  r = require("../../api/zxgApi.js"),
  s = require("@tencent/stock-information-page/hooks/useYaowenFeedback.js"),
  i = require("@tencent/stock-search-ai/hooks/usePrivacyGrantHooks.js"),
  a = require("@tencent/wzq-privacy-policy-modal/service/policyService.js"),
  c = getApp().globalData,
  u = "personal_close_avatar",
  h = "personalized_news_setting",
  l = "informationpersonaldatagrant",
  g = "portfolio_chart_hide",
  d = "personalized_ad_switch",
  p = "personalized_ad_switch",
  f = "userstock_customize_notice",
  S = "userheadimage",
  w = "authorizeUserDataToYuanBao",
  m = "lct_auth_status",
  v = {
    components: {
      ChoosePrivacyModal: function () {
        return "../../components/ChoosePrivacyModal.js";
      },
      LayerModal: function () {
        return "../../components/LayerModal/index.js";
      },
    },
    setup: function () {
      var e = s.useYaowenFeedback();
      return {
        enableFeedRecom: e.yaowenFeedbackEnable,
        switchFeedRecom: e.switchYaoWenFeedBack,
      };
    },
    data: function () {
      return {
        on: "1" !== n.wx$1.getStorageSync(u),
        chooseOn: "1" !== n.wx$1.getStorageSync("personal_close_chooseSync"),
        personalizedNewsOn: "1" === n.wx$1.getStorageSync(h),
        adSwitch: "1" !== n.wx$1.getStorageSync(d),
        showChooseModal: !1,
        showAvatarModal: !1,
        isPortfolioChartHide: n.wx$1.getStorageSync(g),
        isAuthorizeUserDataToYuanBao: n.StockBridge.getStorage(w),
        enableStockCustomizeNotice: !1,
        enableUserAgreement: !0,
        userAgreementList: [],
        enableLctChooseSync: !1,
      };
    },
    watch: {
      chooseOn: function (e) {
        n.wx$1.setStorageSync("personal_close_chooseSync", e ? "0" : "1");
      },
    },
    mounted: function () {
      this.querySwitch(),
        this.getPortfolioChartSetting(),
        this.getUserAgreementStatus(),
        this.requestYuanBaoSettings(),
        this.getLctChooseSyncSetting(),
        n.StockBridge.mtaReport({
          busi: "base",
          eventName: "off_market_fund_quote_list_brow",
        });
    },
    methods: {
      onAvatarCancel: function () {
        (this.showAvatarModal = !1), this.doSwitch(!1);
      },
      onAvatarConfirm: function () {
        (this.showAvatarModal = !1), this.doSwitch(!0);
      },
      onChooseConfirm: function () {
        (this.chooseOn = !0), this.report("choose_open");
      },
      report: function (e) {
        n.Request.reportMTAData({ eventName: "base.account.".concat(e) });
      },
      querySwitch: function () {
        return o(
          this,
          null,
          t().mark(function e() {
            var o,
              s,
              i = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        c.wx.request({
                          url: "/cgi-bin/usersetting.fcgi",
                          data: {
                            querysub: ""
                              .concat(S, ",")
                              .concat(l, ",")
                              .concat(p, ",")
                              .concat(f),
                          },
                          success: function (e) {
                            var t = e[S],
                              o = e[l],
                              r = e[p],
                              s = e[f];
                            (i.on = 1 == (null == t ? void 0 : t.switch)),
                              (i.personalizedNewsOn = Boolean(
                                o && 1 == +o.switch
                              )),
                              (i.adSwitch =
                                1 == (null == r ? void 0 : r.switch)),
                              (i.enableStockCustomizeNotice =
                                1 == (null == s ? void 0 : s.switch)),
                              n.wx$1.setStorageSync(u, i.on ? "0" : "1"),
                              n.wx$1.setStorageSync(
                                h,
                                i.personalizedNewsOn ? "1" : "0"
                              ),
                              n.wx$1.setStorageSync(d, i.adSwitch ? "0" : "1");
                          },
                        }),
                        (e.prev = 1),
                        (e.next = 4),
                        r.zxgApi.getSyncStatus()
                      );
                    case 4:
                      (o = e.sent),
                        (s = o.status),
                        (this.chooseOn = "1" === s),
                        (e.next = 11);
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(1));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 9]]
            );
          })
        );
      },
      toggleSwitch: function () {
        this.on ? this.doSwitch(!1) : (this.showAvatarModal = !0);
      },
      toggleChooseSync: function () {
        this.chooseOn
          ? (this.switchChooseSync("0"),
            (this.showChooseModal = !1),
            (this.chooseOn = !1),
            this.report("choose_close"))
          : (this.showChooseModal = !0);
      },
      switchChooseSync: function (e) {
        r.zxgApi.setSyncStatus({ status: e });
      },
      getUserAgreementStatus: function () {
        return o(
          this,
          null,
          t().mark(function e() {
            var o,
              r,
              s,
              i,
              a = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        null ==
                        (r =
                          null == (o = n.StockBridge.store)
                            ? void 0
                            : o.getProtocolStatus)
                          ? void 0
                          : r.call(o, { silent: !0 })
                      );
                    case 3:
                      (i =
                        (null == (s = n.StockBridge.store)
                          ? void 0
                          : s.allProtocolList) || []),
                        (this.userAgreementList = i.filter(function (e) {
                          return a.isPersonalInfoAgreement(e);
                        })),
                        (this.enableUserAgreement =
                          !!this.userAgreementList.length &&
                          this.userAgreementList.every(function (e) {
                            return "1" === String(e.status);
                          })),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 7]]
            );
          })
        );
      },
      isPersonalInfoAgreement: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          e.title ||
          e.name ||
          e.agreement_name ||
          e.agreement_title ||
          ""
        ).includes("个人信息授权书");
      },
      gotoUserAgreementProtocol: function () {
        var e = this.userAgreementList.find(function (e) {
          return e && e.url;
        });
        e &&
          e.url &&
          n.wx$1.navigateTo({
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(e.url)
            ),
          });
      },
      switchUserAgreement: function () {
        this.updateUserAgreement(this.enableUserAgreement ? "revoke" : "agree");
      },
      updateUserAgreement: function (e) {
        return o(
          this,
          null,
          t().mark(function o() {
            var r, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.userAgreementList.length) {
                        t.next = 11;
                        break;
                      }
                      return (
                        (t.prev = 1),
                        (t.next = 4),
                        a.updateUserAgreementStatusByProtocols({
                          channel: n.channelMap.mpweapp,
                          action: e,
                          protocols: this.userAgreementList,
                        })
                      );
                    case 4:
                      (this.enableUserAgreement = "revoke" !== e),
                        null ==
                          (s =
                            null == (r = n.StockBridge.store)
                              ? void 0
                              : r.clearSceneProtocolStatus) || s.call(r),
                        this.report("user_agreement_".concat(e, "_tap")),
                        (t.next = 11);
                      break;
                    case 9:
                      (t.prev = 9), (t.t0 = t.catch(1));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this,
              [[1, 9]]
            );
          })
        );
      },
      handleSwitchFeedRecom: function () {
        n.Request.reportMTAData({
          eventName: this.enableFeedRecom
            ? "news.index.feed_recom_off"
            : "news.index.feed_recom_on",
        }),
          this.switchFeedRecom();
      },
      doSwitch: function (e) {
        this.updateSettingSwitch(S, u, e), (this.on = e);
      },
      togglePersonalizedNews: function () {
        var e = this.personalizedNewsOn ? "close" : "open";
        this.switchPersonalizedNews(!this.personalizedNewsOn),
          this.report("account_privatesetting_personalizednews_".concat(e));
      },
      switchPersonalizedNews: function (e) {
        return o(
          this,
          null,
          t().mark(function o() {
            var r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = { unsubscribe: l }),
                        e && (r = { subscribe: l }),
                        (t.next = 4),
                        n.AccountAPI.userSetting(r)
                      );
                    case 4:
                      (this.personalizedNewsOn = e),
                        n.wx$1.setStorageSync(h, e ? "1" : "0");
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      goProtocol: function () {
        n.wx$1.navigateTo({
          url: "/pages/additional/webview/index?url=https%3A%2F%2Fwzq.tenpay.com%2Fmp%2Fv2%2Findex.html%23%2Fprotocol%2Fzxg_private_avatar",
        });
      },
      getPortfolioChartSetting: function () {
        var e = this,
          t = { subIndex: "GLOBAL", settingKeys: g };
        r.zxgApi.userSettingsBatchGet(t).then(function (t) {
          t &&
            0 === t.code &&
            t.settings &&
            ((e.isPortfolioChartHide = t.settings[g]),
            n.wx$1.setStorageSync(g, e.isPortfolioChartHide));
        });
      },
      togglePortfolioChart: function () {
        var t = this,
          o = "1" === this.isPortfolioChartHide ? "0" : "1",
          s = { subIndex: "GLOBAL", settings: e({}, g, o) };
        r.zxgApi.userSettingsBatchSet(s).then(function (e) {
          e &&
            0 === e.code &&
            ((t.isPortfolioChartHide = o), n.wx$1.setStorageSync(g, o));
        });
      },
      toggleAuthorizeUserDataToYuanBao: function () {
        var t = this,
          o = this.isAuthorizeUserDataToYuanBao ? "NO" : "YES",
          s = {
            subIndex: "GLOBAL",
            settings: e({}, w, JSON.stringify({ switch: o })),
            interflow: !0,
          };
        r.zxgApi
          .userSettingsBatchSet(s)
          .then(function (e) {
            e &&
              0 === e.code &&
              ((t.isAuthorizeUserDataToYuanBao = "YES" === o),
              n.StockBridge.setStorage(w, t.isAuthorizeUserDataToYuanBao));
          })
          .catch(function (e) {});
      },
      gotoYuanbaoProtocol: function () {
        return o(
          this,
          null,
          t().mark(function e() {
            var o, r, s;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = i.usePrivacyGrantHooks()),
                      (r = o.getTargetProtocal),
                      (e.next = 4),
                      r("wenyuanbao")
                    );
                  case 4:
                    (s = e.sent), n.StockBridge.openExtraWebview(s.url);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      },
      requestYuanBaoSettings: function () {
        return o(
          this,
          null,
          t().mark(function e() {
            var o, s, i;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        r.zxgApi.userSettingsBatchGet({
                          subIndex: "GLOBAL",
                          settingKeys: "".concat(w),
                          interflow: !0,
                        })
                      );
                    case 2:
                      (o = e.sent),
                        (s = o.settings) &&
                          void 0 !== s[w] &&
                          ((i = JSON.parse(s[w])),
                          (this.isAuthorizeUserDataToYuanBao =
                            "YES" === i.switch || "1" === i.switch),
                          n.StockBridge.setStorage(
                            w,
                            this.isAuthorizeUserDataToYuanBao
                          ));
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      toggleLctChooseSync: function () {
        var t = this;
        n.StockBridge.mtaReport({
          busi: "base",
          eventName: "otc_fund_market_custom_list_click",
        });
        var o = !this.enableLctChooseSync,
          s = {
            subIndex: "GLOBAL",
            settings: e({}, m, o ? "1" : "0"),
            interflow: !0,
          };
        r.zxgApi
          .userSettingsBatchSet(s)
          .then(function (e) {
            e && 0 === e.code && (t.enableLctChooseSync = o);
          })
          .catch(function (e) {});
      },
      getLctChooseSyncSetting: function () {
        return o(
          this,
          null,
          t().mark(function e() {
            var o, n;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        r.zxgApi.userSettingsBatchGet({
                          subIndex: "GLOBAL",
                          settingKeys: m,
                          interflow: !0,
                        })
                      );
                    case 3:
                      (o = e.sent),
                        (n = o.settings) &&
                          void 0 !== n[m] &&
                          (this.enableLctChooseSync = "1" === n[m]),
                        (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(0));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 8]]
            );
          })
        );
      },
      toggleAdSwitch: function () {
        var e = !this.adSwitch;
        this.updateSettingSwitch(p, d, e), (this.adSwitch = e);
      },
      toggleStockCustomizeNotice: function () {
        var e = !this.enableStockCustomizeNotice;
        this.updateSettingSwitch(f, f, e),
          (this.enableStockCustomizeNotice = e),
          n.Request.reportMTAData({
            eventName: "base.setting.stock_customize_notice_".concat(
              e ? "open" : "close",
              "_tap"
            ),
          });
      },
      updateSettingSwitch: function (e, t, o) {
        var r = { unsubscribe: e };
        o && (r = { subscribe: e }),
          c.wx.request({
            url: "/cgi-bin/usersetting.fcgi",
            data: r,
            success: function () {
              n.wx$1.setStorageSync(t, o ? "0" : "1");
            },
          });
      },
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("ChoosePrivacyModal") +
    n.resolveComponent("layer-modal")
  )();
var y = n._export_sfc(v, [
  [
    "render",
    function (e, t, o, r, s, i) {
      return {
        a: e.rootFontSize,
        b: n.p({ "no-auto": !0 }),
        c: n.o(function () {
          return i.goProtocol && i.goProtocol.apply(i, arguments);
        }, 219),
        d: n.n(s.on ? "on" : ""),
        e: n.o(function () {
          return i.toggleSwitch && i.toggleSwitch.apply(i, arguments);
        }, 220),
        f: n.o(function () {
          return (
            i.gotoUserAgreementProtocol &&
            i.gotoUserAgreementProtocol.apply(i, arguments)
          );
        }, 221),
        g: n.n(s.enableUserAgreement ? "on" : ""),
        h: n.o(function () {
          return (
            i.switchUserAgreement && i.switchUserAgreement.apply(i, arguments)
          );
        }, 222),
        i: n.n(s.chooseOn ? "on" : ""),
        j: n.o(function () {
          return i.toggleChooseSync && i.toggleChooseSync.apply(i, arguments);
        }, 223),
        k: n.n(s.enableLctChooseSync ? "on" : ""),
        l: n.o(function () {
          return (
            i.toggleLctChooseSync && i.toggleLctChooseSync.apply(i, arguments)
          );
        }, 224),
        m: n.n(r.enableFeedRecom ? "on" : ""),
        n: n.o(function () {
          return (
            i.handleSwitchFeedRecom &&
            i.handleSwitchFeedRecom.apply(i, arguments)
          );
        }, 225),
        o: n.n({ on: "1" !== s.isPortfolioChartHide }),
        p: n.o(function () {
          return (
            i.togglePortfolioChart && i.togglePortfolioChart.apply(i, arguments)
          );
        }, 226),
        q: n.o(function () {
          return (
            i.gotoYuanbaoProtocol && i.gotoYuanbaoProtocol.apply(i, arguments)
          );
        }, 227),
        r: n.n(s.isAuthorizeUserDataToYuanBao ? "on" : ""),
        s: n.o(function () {
          return (
            i.toggleAuthorizeUserDataToYuanBao &&
            i.toggleAuthorizeUserDataToYuanBao.apply(i, arguments)
          );
        }, 228),
        t: n.n(s.adSwitch ? "on" : ""),
        v: n.o(function () {
          return i.toggleAdSwitch && i.toggleAdSwitch.apply(i, arguments);
        }, 229),
        w: n.n(s.enableStockCustomizeNotice ? "on" : ""),
        x: n.o(function () {
          return (
            i.toggleStockCustomizeNotice &&
            i.toggleStockCustomizeNotice.apply(i, arguments)
          );
        }, 230),
        y: n.o(function (e) {
          return (s.showChooseModal = e);
        }, 231),
        z: n.o(i.onChooseConfirm, 232),
        A: n.p({ value: s.showChooseModal }),
        B: n.o(i.onAvatarCancel, 233),
        C: n.o(i.onAvatarConfirm, 234),
        D: n.p({
          title: "腾讯自选股",
          "cancel-button-text": "不授权",
          "confirm-button-text": "授权",
          content:
            "腾讯自选股（腾讯科技（北京）有限公司）申请使用您的头像昵称，用于个人中心等场景的展示。如您不同意，则无法在个人中心等场景中展示您的头像昵称。",
          visible: s.showAvatarModal,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-f50de900"],
]);
wx.createPage(y);
