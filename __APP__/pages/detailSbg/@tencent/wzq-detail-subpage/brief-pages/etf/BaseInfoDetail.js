require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, r) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  d = function (e, a) {
    for (var r in a || (a = {})) o.call(a, r) && c(e, r, a[r]);
    if (i) {
      var n,
        d = t(i(a));
      try {
        for (d.s(); !(n = d.n()).done; ) {
          r = n.value;
          s.call(a, r) && c(e, r, a[r]);
        }
      } catch (e) {
        d.e(e);
      } finally {
        d.f();
      }
    }
    return e;
  },
  l = require("../api/index.js"),
  p = require("../../../../../../common/vendor.js"),
  u = {
    components: {
      TipsInfoModal: function () {
        return "./TipsInfo.js";
      },
      TipsInfoWzq: function () {
        return "./TipsInfoWzq.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      symbol: { type: String, default: "" },
      redUp: { type: Boolean, default: !0 },
    },
    data: function () {
      return {
        data: {},
        baseFields: {
          type: "基金类型",
          establishment: "成立日期",
          dimensions: "最新规模",
          administrator: "管理人",
          custodian: "托管人",
          index: "跟踪指数估值",
        },
        tradeFields: {
          t_0: "是否支持T+0",
          applying: "申购状态",
          redeem: "赎回状态",
          subscribe_fee: "新发认购费率",
          manage: "管理费率",
          trust: "托管费率",
          service: "销售服务费",
        },
        showTipsModal: !1,
        isExpandStrategy: !1,
      };
    },
    computed: {
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      isApp: function () {
        return "app" === this.hqBridge.ENV;
      },
      isSpecialPlatform: function () {
        return this.isWzq || this.isApp;
      },
    },
    created: function () {
      this.getData();
    },
    mounted: function () {
      this.hqBridge.report("hq.stock_detail.etf_base_brow");
    },
    methods: {
      handleStrategyClick: function () {
        (this.isExpandStrategy = !this.isExpandStrategy),
          this.hqBridge.report("hq.stock_detail.etf_base.strategy_click");
      },
      handleTipClick: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.showTipsModal = e),
          this.hqBridge.report("hq.stock_detail.etf_base.tip_click");
      },
      getData: function () {
        return (
          (t = this),
          null,
          (a = e().mark(function () {
            var t,
              a,
              i,
              o,
              s,
              c,
              u,
              f,
              h,
              m = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        l
                          .getInnerProfile(this.hqBridge, {
                            symbol: this.symbol,
                          })
                          .catch(function (e) {
                            return (
                              p.StockBridge.aegisReportEvent(
                                "MONITOR-DETAIL-ETF-BASEINFO-INTERFACE-ERROR",
                                e
                              ),
                              {}
                            );
                          })
                      );
                    case 2:
                      0 == +(t = e.sent).code &&
                        t.data &&
                        ((a = t.data),
                        (i = a.tracking_index),
                        (o = a.trade_info),
                        (s = a.running_interval),
                        (c = void 0 === s ? {} : s),
                        (u = a.manager),
                        i &&
                          ((t.data.trackingIndex = ""
                            .concat(i.name)
                            .concat(
                              i.peTTM ? "(市盈率".concat(i.peTTM, ")") : ""
                            )),
                          i.peTTM || (this.baseFields.index = "跟踪指数")),
                        o &&
                          ((t.data.tradeInfo = d(
                            ((f = d({}, o)),
                            (h = { t_0: o.t_0 ? "是" : "否" }),
                            r(f, n(h))),
                            c
                          )),
                          Object.keys(t.data.tradeInfo).map(function (e) {
                            if (
                              [
                                "subscribe_fee",
                                "manage",
                                "trust",
                                "service",
                              ].includes(e)
                            ) {
                              var a = t.data.tradeInfo[e];
                              t.data.tradeInfo[e] = "".concat(
                                parseFloat(a).toFixed(2),
                                "%"
                              );
                            }
                          })),
                        Array.isArray(u) &&
                          u.forEach(function (e) {
                            (e.isExpandDesc = !1),
                              e.work_rate > 0
                                ? (e.rateClass = m.redUp ? "up" : "down")
                                : e.work_rate < 0
                                ? (e.rateClass = m.redUp ? "down" : "up")
                                : (e.rateClass = "equal"),
                              (e.work_rate = ""
                                .concat(parseFloat(e.work_rate) > 0 ? "+" : "")
                                .concat((+e.work_rate).toFixed(2), "%"));
                          }),
                        (this.data = t.data));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              h,
              this
            );
          })),
          new Promise(function (e, r) {
            var n = function (e) {
                try {
                  o(a.next(e));
                } catch (e) {
                  r(e);
                }
              },
              i = function (e) {
                try {
                  o(a.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              o = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(n, i);
              };
            o((a = a.apply(t, null)).next());
          })
        );
        var t, a;
      },
      handleManageClick: function (e) {
        (this.data.manager = this.data.manager.filter(function (t) {
          return t.name === e.name && (t.isExpandDesc = !t.isExpandDesc), t;
        })),
          this.hqBridge.report("hq.stock_detail.etf_base.manage_click");
      },
    },
  };
Array ||
  (
    p.resolveComponent("tips-info-modal") + p.resolveComponent("tips-info-wzq")
  )();
var f = p._export_sfc(u, [
  [
    "render",
    function (e, t, a, r, n, i) {
      return p.e(
        { a: n.data.info },
        n.data.info
          ? {
              b: p.f(n.baseFields, function (e, t, a) {
                return p.e(
                  { a: p.t(e), b: "index" === t },
                  "index" === t
                    ? { c: p.t(n.data.trackingIndex || "--") }
                    : { d: p.t(n.data.info[t] || "--") },
                  { e: t }
                );
              }),
            }
          : {},
        { c: n.data.tradeInfo },
        n.data.tradeInfo
          ? {
              d: p.o(function () {
                return i.handleTipClick && i.handleTipClick.apply(i, arguments);
              }, 505),
              e: p.f(n.tradeFields, function (e, t, a) {
                return { a: p.t(e), b: p.t(n.data.tradeInfo[t]), c: t };
              }),
            }
          : {},
        { f: n.data.philosophy },
        n.data.philosophy ? { g: p.t(n.data.philosophy) } : {},
        { h: n.data.strategy },
        n.data.strategy
          ? {
              i: p.t(n.data.strategy),
              j: p.t(n.isExpandStrategy ? "收起" : "...展开"),
              k: !i.isSpecialPlatform,
              l: i.isSpecialPlatform && !n.isExpandStrategy,
              m: i.isSpecialPlatform && n.isExpandStrategy,
              n: i.isSpecialPlatform && n.isExpandStrategy,
              o: p.n(n.isExpandStrategy ? "" : "text-row-3"),
              p: p.o(function () {
                return (
                  i.handleStrategyClick &&
                  i.handleStrategyClick.apply(i, arguments)
                );
              }, 506),
            }
          : {},
        { q: n.data.manager && n.data.manager.length },
        n.data.manager && n.data.manager.length
          ? {
              r: p.f(n.data.manager, function (e, t, a) {
                return {
                  a: e.avatar,
                  b: p.t(e.name),
                  c: p.t(e.acc_work_time),
                  d: p.t(e.work_rate),
                  e: p.n(e.rateClass),
                  f: p.t(e.desc),
                  g: p.t(e.isExpandDesc ? "收起" : "...展开"),
                  h: p.o(
                    function (t) {
                      return i.handleManageClick(e);
                    },
                    507,
                    e.name
                  ),
                  i: e.isExpandDesc ? "" : 1,
                  j: e.name,
                };
              }),
            }
          : {},
        { s: !i.isApp },
        (i.isApp, {}),
        { t: n.showTipsModal && !i.isSpecialPlatform },
        n.showTipsModal && !i.isSpecialPlatform
          ? {
              v: p.o(function (e) {
                return i.handleTipClick(!1);
              }, 508),
              w: p.p({ type: "deal" }),
            }
          : {},
        { x: i.isSpecialPlatform },
        i.isSpecialPlatform
          ? {
              y: p.o(function (e) {
                return i.handleTipClick(!1);
              }, 509),
              z: p.p({ showTips: n.showTipsModal, type: "deal" }),
            }
          : {},
        { A: i.isSpecialPlatform ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-6d5c45f3"],
]);
wx.createComponent(f);
