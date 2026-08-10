var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var a = require("../../common/vendor.js"),
  n = require("../../stores/position/usePositionDrawer.js"),
  i = require("../../stores/app/useMode.js"),
  o = require("../../model/index/useHideFund.js"),
  s = require("../../service/navToQuote.js"),
  u = require("../../adapter/router.js"),
  c = require("../../bizs/asset/usePositionsListDebt.js"),
  d = require("../../bizs/asset/usePositionsListBalance.js"),
  l = require("../../service/stat/mp-weixin.js"),
  p = require("../../model/trade/useSplitMode.js"),
  m = require("../../stores/user/useUserinfo.js"),
  k = require("../../utils/getPlatform.js"),
  _ = require("../../utils/index.js");
require("../../service/broker.js");
var b = require("../../utils/market.js"),
  f = require("../../config/enum.js"),
  y = require("../../config/key.js"),
  v = require("../../config/broker/11100/index.js"),
  g = {
    name: "",
    emits: ["share"],
    props: {
      positionTarget: { required: !0, type: Object },
      border: { type: Boolean, default: !0 },
      borderBottom: { type: Boolean, default: !0 },
      hideMarginTop: { type: Boolean, default: !1 },
    },
    setup: function (g, h) {
      var x,
        q = h.emit,
        w = a.getCurrentInstance().proxy,
        T = k.getPlatform(),
        j = T.isZxg,
        D = T.isZxgHarmony,
        M = T.bizPlatformVer,
        P = a.storeToRefs(i.useModeStore()).simpleMode,
        A = p.useSplitMode().splitModeQueryForDrawer,
        C = n.usePositionDrawerStore(),
        E = o.useHideFund().hidefund,
        S = a.storeToRefs(C),
        K = S.tab,
        B = S.curType,
        H = C.closeDrawer,
        R = m.useUserinfoStore(),
        Q = a.storeToRefs(R).userinfo,
        I = a.inject("clickCreateCond", a.noop),
        O = D ? "11.25.0" : "11.28.0",
        L =
          (null == (x = v.brokerConfig.trade)
            ? void 0
            : x.newMarketFullRelease) || {},
        N = L.bj,
        F = void 0 !== N && N,
        U = L.ggt,
        z = void 0 !== U && U,
        J = L.nq,
        X = void 0 !== J && J,
        Z = a.computed(function () {
          var e, r;
          return (
            z ||
            "1" === (null == (e = R.userinfo) ? void 0 : e.ggt_market_entry) ||
            "1" === (null == (r = R.userinfo) ? void 0 : r.ggt_permission_gray)
          );
        }),
        G = a.computed(function () {
          var e;
          return (
            F || "1" === (null == (e = R.userinfo) ? void 0 : e.bj_market_entry)
          );
        }),
        V = a.computed(function () {
          var e;
          return (
            X || "1" === (null == (e = R.userinfo) ? void 0 : e.nq_market_entry)
          );
        }),
        Y = a.computed(function () {
          return K.value.length >= 5
            ? ["drawer-wrapper-5"]
            : ["drawer-wrapper-".concat(K.value.length)];
        });
      return (
        a.onMounted(function () {
          K.value.some(function (e) {
            return "currency-setting" === e.id;
          }) &&
            l.stat.click("trade.assetindex.hk_stock_currency_setting_btn_brow");
        }),
        {
          tab: K,
          classNames: Y,
          simpleMode: P,
          hidefund: E,
          noop: a.noop,
          clickHanlder: function (i, o) {
            return [n.EPositionType.STOCK, n.EPositionType.HKSTOCK].includes(
              B.value
            )
              ? ((p = t(
                  r().mark(function n(i, o) {
                    var c, d, p;
                    return r().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              ("currency-setting" === i.id
                                ? l.stat.click(
                                    "trade.assetindex.hkg_currency_setting_btn_click"
                                  )
                                : l.stat.click(
                                    "trade.asset.stock_drawer_".concat(
                                      i.id.replace(/-/g, "_"),
                                      "_click"
                                    )
                                  ),
                              "quote" !== i.id)
                            ) {
                              n.next = 3;
                              break;
                            }
                            return n.abrupt(
                              "return",
                              (q("jumpQuote"), void a.index.navToQuote(o))
                            );
                          case 3:
                            if ("buy" !== i.id && "sell" !== i.id) {
                              n.next = 21;
                              break;
                            }
                            if (
                              !(
                                ((c = {
                                  market: o.market || "",
                                  code: o.code || "",
                                  name: o.name || "",
                                  holder: o.stockholder_code || "",
                                }).market === f.MARKET.HK &&
                                  !Z.value) ||
                                (c.market === f.MARKET.BJ && !G.value) ||
                                (c.market === f.MARKET.NQ && !V.value)
                              )
                            ) {
                              n.next = 7;
                              break;
                            }
                            return n.abrupt(
                              "return",
                              void a.index.showToast({
                                title: "暂不支持交易",
                                icon: "none",
                              })
                            );
                          case 7:
                            return (
                              (n.next = 9),
                              s.formatData(c).catch(function (e) {})
                            );
                          case 9:
                            return (
                              (n.next = 11),
                              t(
                                r().mark(function e() {
                                  var t, a, n, i, o, s, u, c;
                                  return r().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              v.brokerConfig.trade
                                                .isDrawerToHalfscreen
                                            ) {
                                              e.next = 2;
                                              break;
                                            }
                                            return e.abrupt("return", !1);
                                          case 2:
                                            if (
                                              ((t = k.getPlatform()).isMpPlugin,
                                              (a = t.isZxg),
                                              (n = t.isOEM),
                                              !t.isEscapeMode)
                                            ) {
                                              e.next = 5;
                                              break;
                                            }
                                            return e.abrupt("return", !1);
                                          case 5:
                                            if (!a) {
                                              e.next = 19;
                                              break;
                                            }
                                            if (
                                              _.isAppSupportAssetAutoEntryEmbeddedTrade()
                                            ) {
                                              e.next = 8;
                                              break;
                                            }
                                            return e.abrupt("return", !1);
                                          case 8:
                                            return (
                                              (e.prev = 8),
                                              (e.next = 11),
                                              w.$sdk.getAppMemoryStorage(
                                                ""
                                                  .concat(
                                                    y.APP_TRADE_MODE_SYNC,
                                                    "_"
                                                  )
                                                  .concat(
                                                    v.brokerConfig.base.code
                                                  )
                                              )
                                            );
                                          case 11:
                                            if (!(i = e.sent) || !i.data) {
                                              e.next = 14;
                                              break;
                                            }
                                            return e.abrupt(
                                              "return",
                                              "1" === i.data
                                            );
                                          case 14:
                                            e.next = 19;
                                            break;
                                          case 16:
                                            return (
                                              (e.prev = 16),
                                              (e.t0 = e.catch(8)),
                                              e.abrupt("return", !1)
                                            );
                                          case 19:
                                            if (!n) {
                                              e.next = 21;
                                              break;
                                            }
                                            return e.abrupt("return", !1);
                                          case 21:
                                            if (
                                              ((o = Q.value),
                                              (s = o.is_trademode_gray),
                                              (u = o.trademode),
                                              !s || !u)
                                            ) {
                                              e.next = 24;
                                              break;
                                            }
                                            return e.abrupt(
                                              "return",
                                              "1" === s && "1" === u
                                            );
                                          case 24:
                                            return (
                                              (c = _.getCache(R.getCacheKey())),
                                              e.abrupt(
                                                "return",
                                                "1" ===
                                                  (null == c
                                                    ? void 0
                                                    : c.is_trademode_gray) &&
                                                  "1" ===
                                                    (null == c
                                                      ? void 0
                                                      : c.trademode)
                                              )
                                            );
                                          case 26:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[8, 16]]
                                  );
                                })
                              )()
                            );
                          case 11:
                            if (((n.t1 = !n.sent), n.t1)) {
                              n.next = 14;
                              break;
                            }
                            n.t1 = j && b.isHKMarket(c.market) && a.lt(M, O);
                          case 14:
                            if (((n.t0 = n.t1), n.t0)) {
                              n.next = 17;
                              break;
                            }
                            n.t0 =
                              b.isHKMarket(c.market) &&
                              "0" === (null == c ? void 0 : c.is_ggt_code);
                          case 17:
                            if (!n.t0) {
                              n.next = 19;
                              break;
                            }
                            return n.abrupt(
                              "return",
                              void u
                                .router()
                                .push({
                                  name: "TradeStock",
                                  query: e(
                                    {
                                      market: c.market || "",
                                      code: c.code || "",
                                      name: c.name || "",
                                      holder: c.holder || "",
                                      entrust_type: i.id,
                                    },
                                    A.value
                                  ),
                                })
                            );
                          case 19:
                            return (
                              (d = {
                                market: c.market || "",
                                code: c.code || "",
                                name: c.name || "",
                                stockholder_code: c.holder || "",
                                entrust_type: i.id,
                                halfscreen: "1",
                                trademode: Q.value.order_mode || "0",
                                jtime: new Date().getTime(),
                              }),
                              n.abrupt(
                                "return",
                                (q("jumpQuote"), void a.index.navToQuote(d))
                              )
                            );
                          case 21:
                            if ("analysis" !== i.id) {
                              n.next = 23;
                              break;
                            }
                            return n.abrupt(
                              "return",
                              void u
                                .router()
                                .push({
                                  name: "AnalysisDetail",
                                  query: {
                                    qry_type: "1",
                                    stock_name: o.name || "",
                                    trade_market: o.market || "",
                                    stock_code: o.code || "",
                                    stock_type: "0",
                                  },
                                })
                            );
                          case 23:
                            if ("condition-order" !== i.id) {
                              n.next = 28;
                              break;
                            }
                            return (
                              (p = {
                                market: o.market || "",
                                code: o.code || "",
                                name: o.name || "",
                              }),
                              (n.next = 27),
                              s.formatData(p).catch(function (e) {})
                            );
                          case 27:
                            return n.abrupt(
                              "return",
                              void I({
                                name: p.name,
                                code: p.code,
                                market: p.market,
                              })
                            );
                          case 28:
                            if ("share" !== i.id) {
                              n.next = 30;
                              break;
                            }
                            return n.abrupt("return", q("share"));
                          case 30:
                            if ("currency-setting" !== i.id) {
                              n.next = 32;
                              break;
                            }
                            return n.abrupt(
                              "return",
                              void u
                                .router()
                                .push({
                                  name: "CurrencySetting",
                                  query: {
                                    stock_name: o.name || "",
                                    stock_code: o.code || "",
                                    stock_market: o.market || "",
                                    new_price: o.new_price || "",
                                    hold_cost: o.hold_cost || "",
                                    hold_cost_hk: o.hold_cost_hk || "",
                                    earn_val_day: o.earn_val_day || "",
                                    earn_per_day: o.earn_per_day || "",
                                    earn_val: o.earn_val || "",
                                    earn_per: o.earn_per || "",
                                  },
                                })
                            );
                          case 32:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )),
                function (e, r) {
                  return p.apply(this, arguments);
                })(i, o)
              : B.value === n.EPositionType.DEBT
              ? (function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    (l.stat.click(
                      "trade.asset.debt_drawer_".concat(
                        e.id.replace(/-/g, "_"),
                        "_click"
                      )
                    ),
                    "quote" === e.id &&
                      c.usePositionsListDebt().onStockClick(r),
                    "trade" === e.id)
                  )
                    return u
                      .router()
                      .push({
                        name: "TradeDebt",
                        query: { market: r.market || "", code: r.code || "" },
                      });
                  "analysis" === e.id &&
                    u
                      .router()
                      .push({
                        name: "AnalysisDetailInterest",
                        query: {
                          qry_type: "1",
                          stock_name: r.name || "",
                          trade_market: r.market || "",
                          stock_code: r.code || "",
                          stock_type: "1",
                        },
                      }),
                    "condition-order" === e.id &&
                      u.router().push({ name: "DebtAutoOrder" });
                })(i, o)
              : B.value === n.EPositionType.XINKE
              ? (function (e) {
                  var r,
                    t,
                    a,
                    n,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  if (
                    (l.stat.click(
                      "trade.asset.xinke_drawer_".concat(
                        e.id.replace(/-/g, "_"),
                        "_click"
                      )
                    ),
                    "quote" === e.id)
                  ) {
                    var o =
                        (null ==
                        (t = null == (r = Q.value) ? void 0 : r.activityinfo)
                          ? void 0
                          : t.activity_id) || "",
                      s =
                        (null ==
                        (n = null == (a = Q.value) ? void 0 : a.activityinfo)
                          ? void 0
                          : n.activity_acct) || "";
                    return u
                      .router()
                      .push({
                        name: "ProductDuoTianQi",
                        query: { activity_id: o, activity_acct: s },
                      });
                  }
                  "trade" !== e.id
                    ? "analysis" === e.id &&
                      u
                        .router()
                        .push({
                          name: "AnalysisDetailInterest",
                          query: {
                            qry_type: "1",
                            stock_name: i.name || "",
                            trade_market: i.market || "",
                            stock_code: i.code || "",
                            stock_type: "4",
                            balance_time_limit: i.balance_time_limit || "",
                          },
                        })
                    : d.usePositionsListBalance().onStockClick(i);
                })(i, o)
              : B.value === n.EPositionType.JIAXINBAO
              ? (function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  l.stat.click(
                    "trade.asset.jiaxinbao_drawer_".concat(
                      e.id.replace(/-/g, "_"),
                      "_click"
                    )
                  ),
                    "detail" === e.id &&
                      u.router().push({ name: "ProductJiaXinBaoDetails" }),
                    "setting" === e.id &&
                      d.usePositionsListBalance().onStockClick(r),
                    "analysis" === e.id &&
                      u
                        .router()
                        .push({
                          name: "AnalysisDetailInterest",
                          query: {
                            qry_type: "1",
                            stock_name: r.name || "",
                            trade_market: r.market || "",
                            stock_code: r.code || "",
                            stock_type: "4",
                            balance_time_limit: r.balance_time_limit || "",
                          },
                        });
                })(i, o)
              : void 0;
            var p;
          },
          getUniKey: n.getUniKey,
          closeDrawer: H,
        }
      );
    },
  },
  h = a._export_sfc(g, [
    [
      "render",
      function (e, r, t, n, i, o) {
        return {
          a: a.f(n.tab, function (e, r, i) {
            return {
              a: a.n(e.icon),
              b: a.t(e.text),
              c: r,
              d: a.n(n.tab.length > 5 && r === n.tab.length - 1 ? "pr-60" : ""),
              e: a.n(
                "currency-setting" === e.id && r === n.tab.length - 1
                  ? "drawer-item--currency-last"
                  : ""
              ),
              f: a.o(function (r) {
                return n.clickHanlder(e, t.positionTarget);
              }, r),
              g: a.o(function () {
                return n.noop && n.noop.apply(n, arguments);
              }, r),
            };
          }),
          b: a.n(
            n.tab.length >= 5
              ? "drawer-wrapper-5"
              : "drawer-wrapper-".concat(n.tab.length)
          ),
          c: t.border ? 1 : "",
          d: t.borderBottom && n.simpleMode ? 1 : "",
          e: n.hidefund ? 1 : "",
          f: t.hideMarginTop ? 1 : "",
          g: a.o(function () {
            return n.closeDrawer && n.closeDrawer.apply(n, arguments);
          }),
        };
      },
    ],
  ]);
wx.createComponent(h);
