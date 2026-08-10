var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  s = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = function (e, t, s) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s);
  },
  a = function (e, i) {
    for (var a in i || (i = {})) n.call(i, a) && o(e, a, i[a]);
    if (s) {
      var c,
        l = t(s(i));
      try {
        for (l.s(); !(c = l.n()).done; ) {
          a = c.value;
          r.call(i, a) && o(e, a, i[a]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  c = function (e, t, i) {
    return new Promise(function (s, n) {
      var r = function (e) {
          try {
            a(i.next(e));
          } catch (e) {
            n(e);
          }
        },
        o = function (e) {
          try {
            a(i.throw(e));
          } catch (e) {
            n(e);
          }
        },
        a = function (e) {
          return e.done ? s(e.value) : Promise.resolve(e.value).then(r, o);
        };
      a((i = i.apply(e, t)).next());
    });
  },
  l = require("./settingPage.js"),
  u = require("../stock-hq-data/index.js"),
  d = require("../../../../common/vendor.js"),
  h = "https://zqact05.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=",
  p = {
    components: {
      preSettingRemind: function () {
        return "./components/preSettingRemind.js";
      },
    },
    mixins: [l.remindSetting],
    inject: { hqBridge: { default: {} } },
    props: {
      market: { type: String, default: "0" },
      scode: { type: String, default: "" },
      stockName: { type: String, default: "" },
      pushPlate: { type: String, default: "1" },
      title: { type: String, default: "快捷设置" },
      styleType: { type: String, default: "" },
      parentQueryRes: { type: Object, default: null },
      parentHasClosedSettings: { type: Boolean, default: !1 },
      parentHasSetRemind: { type: Boolean, default: !1 },
      isSubscribed: { type: Boolean, default: !0 },
      followStat: { type: String, default: "" },
    },
    data: function () {
      return {
        page: "openRemindPop",
        showPop: !1,
        initialData: null,
        saveClicked: !1,
        lastQueryRes: null,
        hasClosedSettings: !1,
        remindApi: new u.RemindApi(function (e, t) {
          return d.StockBridge.request(e, "POST", t, {
            headers: { "Content-Type": "application/json" },
          });
        }),
      };
    },
    computed: {
      isAddChooseGuide: function () {
        return "addChooseGuide" === this.styleType;
      },
      btnText: function () {
        return this.isAddChooseGuide
          ? this.isMpWzq
            ? "授权并开启异动提醒"
            : "关注并开启异动提醒"
          : this.isSubscribed
          ? "立即开启"
          : "关注公众号，立即开启";
      },
      lite: function () {
        return (
          "mpwzq" === d.StockBridge.SHELL || "wzqlight" === d.StockBridge.SHELL
        );
      },
      isMpWzq: function () {
        return "mpwzq" === d.StockBridge.SHELL;
      },
    },
    watch: {
      showPop: function (e) {
        e &&
          (this.hqBridge.report("hq.stock_detail.remind_setting_brow", {
            stockid: this.symbol,
          }),
          this.isAddChooseGuide &&
            d.StockBridge.busEmit("growth-remind-save-click", "brow"));
      },
    },
    created: function () {
      this.init();
    },
    methods: {
      init: function () {
        return c(
          this,
          null,
          e().mark(function t() {
            var i = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        this.detailApi ||
                          (this.detailApi = new u.DetailApi(function (e) {
                            return i.hqBridge.request(e);
                          })),
                        (e.prev = 1),
                        (e.next = 4),
                        this.getQT()
                      );
                    case 4:
                      e.next = 8;
                      break;
                    case 6:
                      (e.prev = 6), (e.t0 = e.catch(1));
                    case 8:
                      this.isDebt || 0 === parseFloat(this.zxj)
                        ? this.closePop()
                        : ((this.lastQueryRes = this.parentQueryRes),
                          (this.hasClosedSettings =
                            this.parentHasClosedSettings),
                          (this.hasSetRemind = this.parentHasSetRemind),
                          (this.showPop = !0));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[1, 6]]
            );
          })
        );
      },
      handleSave: function () {
        return c(
          this,
          null,
          e().mark(function t() {
            var i,
              s,
              n,
              r,
              o,
              a = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.saveClicked) {
                        e.next = 38;
                        break;
                      }
                      if (
                        ((this.saveClicked = !0),
                        (i = this),
                        (s = null),
                        (e.prev = 4),
                        (r = Promise.resolve(this.isSubscribed)),
                        this.isMp &&
                          ((r = new Promise(function (e) {
                            (s = e), a.$emit("subscribeStockRemind", e);
                          })),
                          (this.showPop = !1)),
                        !this.hasClosedSettings)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return (e.next = 10), this.reopenClosedSettings();
                    case 10:
                      (e.t0 = e.sent), (e.next = 16);
                      break;
                    case 13:
                      return (e.next = 15), this.initData();
                    case 15:
                      e.t0 = e.sent;
                    case 16:
                      if (!(n = e.t0) || 0 != +n.retcode) {
                        e.next = 26;
                        break;
                      }
                      return (e.next = 20), r;
                    case 20:
                      if (!e.sent) {
                        e.next = 24;
                        break;
                      }
                      i.showToast("股票提醒已开启"), (e.next = 25);
                      break;
                    case 24:
                      this.isMp
                        ? d.StockBridge.openExtraWebview(
                            "".concat(h).concat(i.followStat)
                          )
                        : d.StockBridge.openExtraWebview(
                            "".concat(h).concat(this.followStat)
                          );
                    case 25:
                      setTimeout(function () {
                        d.StockBridge.busEmit("growth-user.behavior.union", {
                          type: "click",
                          event: "custom_add_remind",
                        });
                      }, 1500);
                    case 26:
                      this.closePop(!0), (e.next = 34);
                      break;
                    case 29:
                      (e.prev = 29),
                        (e.t1 = e.catch(4)),
                        null == s || s(null),
                        (o = e.t1 && e.t1.retmsg ? e.t1.retmsg : "设置失败"),
                        this.closePop(!0),
                        this.showModal(o);
                    case 34:
                      return (
                        (e.prev = 34),
                        setTimeout(function () {
                          a.saveClicked = !1;
                        }, 1500),
                        e.finish(34)
                      );
                    case 37:
                      this.hqBridge.report(
                        "hq.stock_detail.remind_save_click",
                        { stockid: this.symbol }
                      ),
                        this.isAddChooseGuide &&
                          d.StockBridge.busEmit(
                            "growth-remind-save-click",
                            "click"
                          );
                    case 38:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[4, 29, 34, 37]]
            );
          })
        );
      },
      closePop: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.showPop = !1),
          this.$emit("close", e),
          e ||
            this.hqBridge.report("hq.stock_detail.remind_close", {
              stockid: this.symbol,
            });
      },
      handleClose: function () {
        this.closePop(),
          this.isAddChooseGuide &&
            d.StockBridge.busEmit("growth-remind-save-click", "close");
      },
      handleSetClick: function () {
        this.hqBridge.report("hq.stock_detail.remind_setting_entrance_click", {
          stockid: this.symbol,
        }),
          this.closePop();
      },
      checkHasClosedSettings: function (e, t) {
        var i = this.lite
            ? { filterNetInflow: !0, filterSpecificTurnover: !0 }
            : {},
          s = this.remindApi.checkHasClosedSubscribeInfos(t, i),
          n = this.remindApi.checkHasClosedSmartTip(e, {
            isIndex: this.isIndex,
            isETF: this.isETF,
            isFund: this.isFund,
            market: this.market,
            stockType: this.stockType,
            showFundNav: this.showFundNav,
            isHSMarket: u.utils.isHSMarket,
            isHKMarket: u.utils.isHKMarket,
            isHKFund: u.utils.isHKFund,
          });
        return s || n;
      },
      reopenClosedSettings: function () {
        return c(
          this,
          null,
          e().mark(function t() {
            var i,
              s,
              n,
              r,
              o,
              c,
              l,
              h,
              p,
              f,
              m,
              k,
              b = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((o = this.lastQueryRes)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 3:
                      return (
                        (c =
                          null ==
                          (s =
                            null == (i = null == o ? void 0 : o.stocks)
                              ? void 0
                              : i[0])
                            ? void 0
                            : s.subscribe_infos),
                        (l = this.lite
                          ? { filterNetInflow: !0, filterSpecificTurnover: !0 }
                          : {}),
                        (h = this.remindApi.getClosedSubscribeItems(c, l)),
                        (p = this.remindApi.getClosedSmartTipKeys(o, {
                          isIndex: this.isIndex,
                          isETF: this.isETF,
                          isFund: this.isFund,
                          market: this.market,
                          stockType: this.stockType,
                          showFundNav: this.showFundNav,
                          isHSMarket: u.utils.isHSMarket,
                          isHKMarket: u.utils.isHKMarket,
                          isHKFund: u.utils.isHKFund,
                        })),
                        (f = {
                          market: this.market,
                          code: this.scode,
                          symbol: this.symbol,
                        }),
                        h.length &&
                          (f.subscribe_infos = h.map(function (e) {
                            var t = b.validatePrefillItem(e);
                            return b.buildSubscribeInfoPayload(
                              a(
                                a(
                                  {
                                    subs_type: e.subs_type,
                                    val: e.val,
                                    seq: e.seq,
                                  },
                                  !t && { alert_time: "user_manual_close" }
                                ),
                                "mpwzq" === d.StockBridge.SHELL && {
                                  extra_info: "scene=wzqxcx",
                                }
                              )
                            );
                          })),
                        (m = p.filter(function (e) {
                          return "large_order" !== e;
                        })).length &&
                          ((k = {}),
                          m.forEach(function (e) {
                            k[e] = 1;
                          }),
                          (f.smart = a(
                            a(
                              {},
                              (null ==
                              (r =
                                null == (n = null == o ? void 0 : o.smart)
                                  ? void 0
                                  : n[0])
                                ? void 0
                                : r.smart_tip) || {}
                            ),
                            k
                          ))),
                        e.abrupt(
                          "return",
                          h.length || m.length ? this.SetStockAlert(f) : null
                        )
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
    },
  };
Array || d.resolveComponent("preSettingRemind")();
var f = d._export_sfc(p, [
  [
    "render",
    function (e, t, i, s, n, r) {
      return d.e(
        { a: n.showPop },
        n.showPop
          ? {
              b: d.o(function () {
                return r.handleClose && r.handleClose.apply(r, arguments);
              }, 2271),
              c: d.t(i.title),
              d: d.o(function () {
                return r.handleClose && r.handleClose.apply(r, arguments);
              }, 2272),
              e: d.o(r.handleSetClick, 2273),
              f: d.p({
                ratios: e.preplaceData,
                scode: i.scode,
                "stock-name": e.name,
                "style-type": i.styleType,
              }),
              g: d.t(r.btnText),
              h: d.n(r.lite ? "lite-style" : ""),
              i: d.o(function () {
                return r.handleSave && r.handleSave.apply(r, arguments);
              }, 2274),
              j: d.o(function () {}, 2275),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1c17efd7"],
]);
wx.createComponent(f);
