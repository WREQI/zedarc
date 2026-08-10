require("../../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../@babel/runtime/helpers/Objectentries");
var n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var i in t || (t = {})) s.call(t, i) && c(e, i, t[i]);
    if (a) {
      var r,
        o = n(a(t));
      try {
        for (o.s(); !(r = o.n()).done; ) {
          i = r.value;
          u.call(t, i) && c(e, i, t[i]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  d = function (e, t, n) {
    return new Promise(function (i, r) {
      var o = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  m = require("../../../../../common/vendor.js"),
  h = require("../api/index.js"),
  p = require("../mixins/config.js"),
  f = require("../../stock-hq-data/index.js"),
  v = {
    components: {
      MarketIcon: function () {
        return "./MarketIcon.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    computed: {
      isDebt: function () {
        var e;
        return f.utils.isDebt(
          null == (e = this.itemData) ? void 0 : e.stock_type
        );
      },
      hasDebtData: function () {
        var e, t, n, i;
        return (
          this.isDebt &&
          (null == (t = null == (e = this.infoData) ? void 0 : e[0])
            ? void 0
            : t.value) &&
          (null == (i = null == (n = this.infoData) ? void 0 : n[0])
            ? void 0
            : i.chooseOn)
        );
      },
      isIndex: function () {
        var e;
        return f.utils.isIndex(
          null == (e = this.itemData) ? void 0 : e.stock_type
        );
      },
      isHS: function () {
        var e;
        return f.utils.isHSMarket(
          null == (e = this.itemData) ? void 0 : e.market
        );
      },
      isETF: function () {
        var e;
        return "ETF" === (null == (e = this.itemData) ? void 0 : e.stock_type);
      },
      stockType: function () {
        var e;
        return null == (e = this.itemData) ? void 0 : e.stock_type;
      },
      showEventRemind: function () {
        return (
          ["GP", "GP-A", "GP-A-KCB", "GP-A-CYB"].includes(this.stockType) ||
          this.isETF
        );
      },
      showFundNav: function () {
        var e;
        return (
          (null == (e = this.itemData) ? void 0 : e.show_fund_nav_update) &&
          [0, 1].includes(this.fundNavStatus)
        );
      },
      fundNavStatus: function () {
        var e, t;
        return null == (t = null == (e = this.itemData) ? void 0 : e.smart_tip)
          ? void 0
          : t.fund_nav_update;
      },
      remindStatusText: function () {
        var e = this;
        if (0 === Object.values(this.itemData.smart_tip || {}).length)
          return "已关闭";
        var n = Object.entries(this.itemData.smart_tip || {})
          .filter(function (n) {
            var i = t(n, 2),
              r = i[0],
              o = i[1];
            if (![0, 1, 2].includes(+o)) return !1;
            if ("fund_nav_update" === r) return !1;
            switch (r) {
              case "new_high_low":
              default:
                return !0;
              case "limit_up_down":
                return e.isHS && !e.isIndex;
              case "big_event":
                return !e.isIndex && !e.isETF;
            }
          })
          .map(function (e) {
            var n = t(e, 2);
            n[0];
            return n[1];
          });
        if (0 === n.length) return "";
        var i = n.filter(function (e) {
          return 1 == +e;
        }).length;
        return i === n.length
          ? "全部提醒已开启"
          : i
          ? "".concat(i, "项提醒已开启")
          : "已关闭";
      },
      infoData: function () {
        var e, t;
        return null ==
          (t = p.sortRemindItemsByType(
            (null == (e = Object.values(this.itemData.subscribe_infos || []))
              ? void 0
              : e.flat()) || [],
            "subs_type"
          ))
          ? void 0
          : t
              .map(function (e, t) {
                var n,
                  i,
                  a = e || {},
                  s = a.notice_type,
                  u = a.alert_time,
                  c = p.REMIND_TEMPLATE.find(function (t) {
                    return +t.type == +e.subs_type;
                  });
                return c
                  ? ((n = l(l({}, c), e)),
                    (i = {
                      index: t,
                      chooseOn:
                        1 == +s ? !u : 2 == +s && "user_manual_close" !== u,
                      value: e.val || "",
                    }),
                    r(n, o(i)))
                  : null;
              })
              .filter(Boolean);
      },
      hasInfo: function () {
        var e;
        return (
          (null ==
          (e = this.infoData.filter(function (e) {
            return null == e ? void 0 : e.chooseOn;
          }))
            ? void 0
            : e.length) > 0
        );
      },
      hideItem: function () {
        var e = this.remindStatusText && this.showEventRemind;
        return 0 === this.infoData.length && !e && !this.showFundNav;
      },
    },
    methods: {
      gotoStock: function () {
        var e = this.itemData,
          t = e.market,
          n = e.scode;
        "mp" === this.hqBridge.ENV
          ? this.hqBridge.routeTo({
              path: "/pages/quote/quote",
              query: { market: t, scode: n },
            })
          : "wzq_light" === this.hqBridge.ENV
          ? (this.getScrollTop(),
            this.hqBridge.routeTo({
              path: "/quote/detail",
              query: { market: t, scode: n },
            }))
          : this.hqBridge.routeTo({
              name: "HqStock",
              params: { market: t, code: n },
            }),
          this.hqBridge.report("hq.remindlist.goto_stockdetail_click");
      },
      gotoRemindSetting: function () {
        var e,
          t,
          n = this.itemData,
          i = n.market,
          r = n.stock_name,
          o = n.scode;
        "mp" === this.hqBridge.ENV
          ? m.StockRouter.routeTo({
              name: "RemindSetting",
              query: { market: i, scode: o, stockName: encodeURIComponent(r) },
            })
          : "wzq_light" === this.hqBridge.ENV
          ? (this.getScrollTop(),
            this.hqBridge.routeTo({
              path: "/remind/setting",
              query: { market: i, scode: o, stockName: encodeURIComponent(r) },
            }))
          : this.$router.push({
              name: "RemindSetting",
              query: {
                market: i,
                scode: o,
                name: encodeURIComponent(r),
                jumpFrom:
                  null == (t = null == (e = this.$route) ? void 0 : e.query)
                    ? void 0
                    : t.jumpFrom,
              },
            }),
          this.hqBridge.report("hq.remindlist.edit_remind_click");
      },
      delRemind: function () {
        var t = this,
          n = this,
          i = this.itemData,
          r = i.market,
          o = i.scode,
          a = i.subscribe_infos,
          s = void 0 === a ? {} : a,
          u = i.smart_tip,
          c = void 0 === u ? {} : u,
          p = i.symbol,
          f = Object.keys(c).reduce(function (e, t) {
            return (e[t] = 2), e;
          }, {});
        "mp" === this.hqBridge.ENV
          ? m.wx$1.showModal({
              content: "确定删除该提醒",
              success: function (t) {
                return d(
                  this,
                  null,
                  e().mark(function i() {
                    var a, u;
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!t.confirm) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (e.next = 3),
                              h.StockAPiService.DeleteStockAlert(
                                l(
                                  {
                                    market: +r,
                                    code: o,
                                    subscribe_infos:
                                      (null == (a = Object.values(s || {}))
                                        ? void 0
                                        : a.flat().map(function (e) {
                                            return l(
                                              {
                                                subs_type: e.subs_type,
                                                val: e.val,
                                                seq: e.seq,
                                              },
                                              !1
                                            );
                                          })) || [],
                                    smart: f,
                                  },
                                  p ? { symbol: p } : {}
                                )
                              )
                            );
                          case 3:
                            (u = e.sent) && 0 == +u.retcode
                              ? (n.$emit("refresh"), n.showToast("已删除提醒"))
                              : n.showToast(u.retmsg),
                              n.hqBridge.report(
                                "hq.remindlist.del_remind_confirm_click"
                              ),
                              (e.next = 8);
                            break;
                          case 7:
                            t.cancel &&
                              n.hqBridge.report(
                                "hq.remindlist.del_remind_cancel_click"
                              );
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, i);
                  })
                );
              },
            })
          : ["wzq", "wzq_light"].includes(this.hqBridge.ENV) &&
            this.$modal.confirm({
              content: "确定删除该提醒",
              confirmBtn: "确定",
              cancelBtn: "取消",
              onConfirm: function () {
                return d(
                  t,
                  null,
                  e().mark(function t() {
                    var i, a;
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              h.StockAPiService.DeleteStockAlert(
                                l(
                                  {
                                    market: +r,
                                    code: o,
                                    subscribe_infos:
                                      (null == (i = Object.values(s))
                                        ? void 0
                                        : i.flat().map(function (e) {
                                            return l(
                                              {
                                                subs_type: e.subs_type,
                                                val: e.val,
                                                seq: e.seq,
                                              },
                                              !1
                                            );
                                          })) || [],
                                    smart: f,
                                  },
                                  p ? { symbol: p } : {}
                                )
                              )
                            );
                          case 2:
                            (a = e.sent) && 0 == +a.retcode
                              ? (n.getScrollTop(),
                                n.$emit("refresh"),
                                n.showToast("已删除提醒"))
                              : n.showToast("删除提醒失败"),
                              n.hqBridge.report(
                                "hq.remindlist.del_remind_confirm_click"
                              );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                  })
                );
              },
              onCancel: function () {
                n.hqBridge.report("hq.remindlist.del_remind_cancel_click");
              },
            }),
          this.hqBridge.report("hq.remindlist.del_remind_click");
      },
      showToast: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3;
        m.StockBridge.ENV === m.EnvTypeEnum.MP
          ? m.wx$1.showToast({ title: e, icon: "none", duration: t })
          : this.$toast({ message: e, duration: t });
      },
      getScrollTop: function () {
        if ("mp" !== this.hqBridge.ENV) {
          var e = document.documentElement.scrollTop || document.body.scrollTop;
          e > 0 && sessionStorage.setItem("remindList_scrollTop", e);
        }
      },
    },
  };
Array || m.resolveComponent("MarketIcon")();
var _ = m._export_sfc(v, [
  [
    "render",
    function (e, t, n, i, r, o) {
      return m.e(
        { a: !o.hideItem },
        o.hideItem
          ? {}
          : m.e(
              {
                b: m.t(n.itemData.stock_name),
                c: m.p({
                  market: "" + n.itemData.market,
                  type: n.itemData.stock_type,
                  scode: n.itemData.code,
                }),
                d: m.t(n.itemData.code),
                e: m.o(function () {
                  return o.gotoStock && o.gotoStock.apply(o, arguments);
                }, 2357),
                f: o.isDebt,
              },
              o.isDebt
                ? {
                    g: m.t(n.itemData.qoute_change),
                    h: m.n(
                      n.itemData.qoute_change > 0
                        ? "up"
                        : n.itemData.qoute_change < 0
                        ? "down"
                        : "equal"
                    ),
                  }
                : {
                    i: m.t(n.itemData.lastest_traded_price),
                    j: m.t(n.itemData.qoute_change),
                    k: m.n(
                      n.itemData.qoute_change > 0
                        ? "up"
                        : n.itemData.qoute_change < 0
                        ? "down"
                        : "equal"
                    ),
                  },
              {
                l: m.o(function () {
                  return (
                    o.gotoRemindSetting &&
                    o.gotoRemindSetting.apply(o, arguments)
                  );
                }, 2358),
                m: m.o(function () {
                  return o.delRemind && o.delRemind.apply(o, arguments);
                }, 2359),
                n: o.hasDebtData,
              },
              o.hasDebtData
                ? { o: m.t(o.infoData[0].value || "0.00") }
                : o.isDebt
                ? {}
                : m.e(
                    {
                      q: m.f(o.infoData, function (e, t, n) {
                        return m.e(
                          { a: e.chooseOn },
                          e.chooseOn
                            ? {
                                b: m.t(e.label),
                                c: m.t(e.value || "0.00"),
                                d: m.t(
                                  [1, 2].includes(e.type)
                                    ? ""
                                    : (e.unit || "").replace("元", "")
                                ),
                              }
                            : {},
                          { e: t }
                        );
                      }),
                      r: o.showFundNav,
                    },
                    o.showFundNav
                      ? { s: m.t(1 === o.fundNavStatus ? "已打开" : "已关闭") }
                      : {},
                    { t: o.remindStatusText && o.showEventRemind },
                    o.remindStatusText && o.showEventRemind
                      ? { v: m.t(o.remindStatusText) }
                      : {}
                  ),
              {
                p: !o.isDebt,
                w:
                  (!o.hasInfo &&
                    !(o.remindStatusText && o.showEventRemind) &&
                    !o.showFundNav) ||
                  (o.isDebt && !o.hasDebtData),
              },
              ((o.hasInfo ||
                (o.remindStatusText && o.showEventRemind) ||
                o.showFundNav) &&
                (!o.isDebt || o.hasDebtData),
              {})
            )
      );
    },
  ],
  ["__scopeId", "data-v-5245c595"],
]);
wx.createComponent(_);
