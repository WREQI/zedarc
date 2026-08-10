var e = require("../../../../../../@babel/runtime/helpers/defineProperty");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  l = function (e, t, o) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  p = function (e, t) {
    for (var o in t || (t = {})) s.call(t, o) && l(e, o, t[o]);
    if (c) {
      var r,
        n = a(c(t));
      try {
        for (n.s(); !(r = n.n()).done; ) {
          o = r.value;
          d.call(t, o) && l(e, o, t[o]);
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
    }
    return e;
  },
  m = function (e, t) {
    return i(e, u(t));
  },
  k = function (e, t, o) {
    return new Promise(function (r, a) {
      var n = function (e) {
          try {
            u(o.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            u(o.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(n, i);
        };
      u((o = o.apply(e, t)).next());
    });
  },
  f = require("../../../../../../common/vendor.js"),
  v = require("../../../stock-hq-data/index.js"),
  h = require("../../../stock-hq-core/utils/market.js"),
  g = require("../../../../throttle-debounce/esm/index.js"),
  b = f.ref(!0),
  T = f.ref(!1),
  S = f.ref(null),
  y = f.ref(!1),
  _ = f.ref(!1),
  B = 6e4;
function x() {
  var e = f.inject("TradeFunc");
  return {
    tradeEnable: b,
    isAccountBind: T,
    highestPriorityDealer: S,
    isOem: y,
    isCurrBrokerTradeMaintain: _,
    initData: function () {
      return k(this, arguments, function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r().mark(function o() {
          var a, n, i;
          return r().wrap(function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (a = t.cacheTime),
                    (n = void 0 === a ? B : a),
                    (o.next = 3),
                    e.fetchBrokerInfo({ cacheTime: n, forceUpdate: !1 })
                  );
                case 3:
                  if (
                    ((S.value = e.getCurrentBroker()),
                    f.StockBridge.ENV === f.EnvTypeEnum.MP &&
                      (b.value = e.getIsXcxTradeEnable()),
                    (T.value = e.isBind()),
                    !["stock", "wzqlight"].includes("mpweapp"))
                  ) {
                    o.next = 9;
                    break;
                  }
                  (i = e.getOemBindedList()),
                    (S.value = e.getRawHighestPriorityDealer()),
                    (y.value = e.isOEMBroker(S.value.code)),
                    y.value &&
                      (T.value =
                        -1 !==
                        i.findIndex(function (e) {
                          return e.code === S.value.code;
                        }));
                case 9:
                  _.value = e.isMaintain({ biz: "trade" });
                case 10:
                case "end":
                  return o.stop();
              }
          }, o);
        })();
      });
    },
    navigateToTrade: function (t) {
      return k(
        this,
        null,
        r().mark(function o() {
          return r().wrap(function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  e.navToBrokerPage(t);
                case 1:
                case "end":
                  return o.stop();
              }
          }, o);
        })
      );
    },
  };
}
var I = { forceCallback: !0 },
  C = (function () {
    function e() {
      t(this, e);
    }
    return (
      o(e, null, [
        {
          key: "queryBarCount",
          value: function (e) {
            return f.StockBridge.request(
              "https://proxy.finance.qq.com/cgi/cgi-bin/commentcgi/comment/stockBarCounts",
              f.RequestTypeEnum.GET,
              { stock_id: e },
              { forceCallback: !0 }
            );
          },
        },
        {
          key: "setBarShareCount",
          value: function (e) {
            var t = v.utils.trimScode(e);
            return f.StockBridge.request(
              "https://proxy.finance.qq.com/cgi/cgi-bin/numserver/getStaticNums",
              f.RequestTypeEnum.GET,
              { ids: t, type: "forward", visible: 1 }
            );
          },
        },
        {
          key: "setChooseTop",
          value: function (e) {
            var t = this.getLoginParams(f.StockBridge.ENV),
              o = [];
            for (var r in t) {
              var a = t[r];
              o.push(
                ""
                  .concat(encodeURIComponent(r), "=")
                  .concat(encodeURIComponent(a))
              );
            }
            var n =
                "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?".concat(
                  o.join("&")
                ),
              i = [
                {
                  grpid: "1",
                  act: "sp",
                  code: e,
                  timestamp: new Date().getTime(),
                },
              ];
            return f.StockBridge.request(n, f.RequestTypeEnum.POST, {
              seq: encodeURIComponent(JSON.stringify(i)),
            });
          },
        },
        {
          key: "getLoginParams",
          value: function (e) {
            return e === f.EnvTypeEnum.MP
              ? {
                  app: "wzqxcx",
                  appid: "wx4ffb369b6881ee5e",
                  openid: f.StockBridge.getStorage("_qluin"),
                  fskey: f.StockBridge.getStorage("_qlskey"),
                  check: 11,
                }
              : {
                  app: "mini_h5",
                  appid: "wx9cf8c670ebd68ce4",
                  openid: f.StockBridge.getCookie("wzq_qluin"),
                  fskey: f.StockBridge.getCookie("wzq_qlskey"),
                  access_token: "",
                  check: 11,
                  _devId: f.StockBridge.getCookie("wzq_qlskey"),
                  buildType: "rdm",
                };
          },
        },
        {
          key: "getETFSubPeriod",
          value: function (e) {
            return f.StockBridge.request(
              "https://proxy.finance.qq.com/ifzqfinance/stock/notice/EtfIpo/getPublishingTime",
              f.RequestTypeEnum.GET,
              { code: e },
              I
            );
          },
        },
        {
          key: "queryOTCInfo",
          value: function (e) {
            return f.StockBridge.request(
              "https://proxy.finance.qq.com/cgi/cgi-bin/api/lct_proxy/fairy",
              f.RequestTypeEnum.POST,
              {
                cmd: "FuaplSearchChannelVo.QueryIndexRelatedFund",
                data: {
                  index_code_zq: null == e ? void 0 : e.code,
                  exchange_abbr_zq: null == e ? void 0 : e.market,
                },
              },
              { headers: { "Content-Type": "application/json" } }
            );
          },
        },
      ]),
      e
    );
  })(),
  w = (function (e) {
    return (e.IPO = "IPO"), (e.DEBT = "DEBT"), (e.BUYSELL = "BUYSELL"), e;
  })(w || {});
function E(e) {
  var t = { nq: "12", bj: "13", hk: "14" };
  return t[e] ? t[e] : e;
}
function q(t, o) {
  var a = this,
    n = new v.RemindApi(function (e, t) {
      return f.StockBridge.request(e, "POST", t, {
        headers: { "Content-Type": "application/json" },
      });
    }),
    i = f.ref(0),
    u = f.ref(!1),
    c = f.ref(!1),
    s = f.ref(!1),
    d = f.ref(0),
    l = f.ref(!1),
    b = f.ref(!1),
    T = null,
    S = f.computed(function () {
      return i.value ? w.IPO : L.value ? w.DEBT : w.BUYSELL;
    }),
    y = f.computed(function () {
      var e;
      try {
        return !!L.value || !P.value || u.value;
      } catch (t) {
        return (
          f.StockBridge.aegisReportEvent("mon_trade_quote_btnrendererror", {
            ext3: t,
            ext6: null == (e = G.value) ? void 0 : e.code,
          }),
          !1
        );
      }
    }),
    _ = (function (e) {
      var t = x(),
        o = t.tradeEnable,
        r = t.highestPriorityDealer,
        a = f.ref(""),
        n = f.computed(function () {
          return v.utils.getSymbol(e.market, e.scode);
        }),
        i = f.computed(function () {
          return (
            ["fuCN", "usHXC"].includes(n.value) ||
            ["HSImain", "HTImain"].includes(e.scode)
          );
        }),
        u = f.computed(function () {
          return v.utils.isIndex(e.stockType);
        }),
        c = f.computed(function () {
          return v.utils.isHSPlate(e.market);
        }),
        s = f.computed(function () {
          return "ETF" === e.stockType;
        }),
        d = f.computed(function () {
          return v.utils.isFTIndex(e.market);
        }),
        l = f.computed(function () {
          return v.utils.isUKMarket(e.market);
        }),
        p = f.computed(function () {
          return v.utils.isFund(e.stockType);
        }),
        m = f.computed(function () {
          return (
            v.utils.isHSMarket(e.market) &&
            e.stockStatus === h.STOCK_STATE_DELIST
          );
        }),
        k = f.computed(function () {
          return v.utils.isSPMarket(e.market);
        }),
        g = f.computed(function () {
          return (
            "mp" !== f.StockBridge.ENV &&
            !v.utils.isIndex(e.stockType) &&
            !v.utils.isFTIndex(e.market) &&
            !(
              !v.utils.isHSMarket(e.market) ||
              v.utils.isDebt(e.stockType) ||
              v.utils.isNationalDebt(e.stockType) ||
              !["0", h.STOCK_STATE_SUSPEND].includes(e.stockStatus)
            )
          );
        }),
        b = f.computed(function () {
          var t;
          try {
            return v.utils.isHKMarket(e.market)
              ? e.isGGT && e.isMarketGrayUser
              : (v.utils.isHSMarket(e.market) &&
                  !v.utils.isBMarket(e.stockType) &&
                  !v.utils.isIndex(e.stockType)) ||
                  e.isMarketGrayUser;
          } catch (e) {
            return (
              f.StockBridge.aegisReportEvent("mon_trade_quote_btnrendererror", {
                ext3: e,
                ext6: null == (t = r.value) ? void 0 : t.code,
              }),
              !1
            );
          }
        }),
        T = f.computed(function () {
          return (
            (v.utils.isHKMarket(e.market) || v.utils.isUSMarket(e.market)) &&
            o.value
          );
        }),
        S = f.computed(function () {
          return (
            v.utils.isHSMarket(e.market) ||
            v.utils.isHKMarket(e.market) ||
            (v.utils.isUSMarket(e.market) &&
              "HXC" !== e.scode &&
              "NBI" !== e.scode)
          );
        }),
        y = f.computed(function () {
          return v.utils.isUKMarket(e.market);
        }),
        _ = f.computed(function () {
          return v.utils.isDebt(e.stockType);
        }),
        B = f.computed(function () {
          return !(b.value || (e.etfData && (u.value || c.value)));
        });
      return {
        symbol: n,
        isIndex: u,
        isSPMarket: k,
        isPlate: c,
        isETF: s,
        isHSDeListed: m,
        showTradeIcon: b,
        isShowEtf: T,
        showRemind: S,
        showHQshowChoose: y,
        showTradeType: _,
        showChoose: B,
        getChannelId: function (t) {
          var o,
            r,
            a = t.market,
            n = t.stockName,
            i = t.stockType,
            u = t.state;
          if (t.isEtfIpo) return (r = "ID400p000t018");
          if (v.utils.isHSMarket(a) && n.indexOf("REIT") > 0)
            return (r = "ICP00p000b125");
          switch (i) {
            case "z":
            case "ZQ-KZZ":
              r = "U" === u ? "ICP00p000b127" : "ICP00p000b124";
              break;
            case "ETF":
              r = "ICP00p000b122";
              break;
            case "FJ":
            case "FJ-CX":
            case "LOF":
            case "QDII-LOF/ETF":
              r = "ICP00p000b128";
              break;
            default:
              r =
                "U" === (null == (o = e.stockOverView) ? void 0 : o.status) ||
                "未上市" === u ||
                "U" === u
                  ? "ICP00p000b126"
                  : "ICP00p000b123";
          }
          return r;
        },
        etfIpoCode: a,
        isCanCalculate: g,
        isIndexWhite: i,
        isFTIndex: d,
        isUKMarket: l,
        isFund: p,
      };
    })(t),
    B = _.symbol,
    I = _.isIndex,
    q = _.isSPMarket,
    M = _.isPlate,
    P = _.isETF,
    A = _.isHSDeListed,
    R = _.showTradeIcon,
    D = _.isShowEtf,
    O = _.showRemind,
    U = _.showHQshowChoose,
    L = _.showTradeType,
    F = _.showChoose,
    H = _.getChannelId,
    N = _.etfIpoCode,
    j = _.isCanCalculate,
    K = _.isIndexWhite,
    Y = _.isFTIndex,
    Q = _.isUKMarket,
    V = _.isFund,
    z = x(),
    W = z.isAccountBind,
    G = z.highestPriorityDealer,
    X = z.isOem,
    J = z.isCurrBrokerTradeMaintain,
    Z = z.initData,
    $ = z.navigateToTrade,
    ee = f.inject("didAgreeUserAgreement"),
    te = f.inject("onCheckUserAgreementStatus"),
    oe = f.inject("hqBridge"),
    re = f.computed(function () {
      var e = [j.value, O.value, t.isCanMocktrade && !W.value].filter(
        Boolean
      ).length;
      return 3 === e ? 5 : 2 === e ? 4 : 1 === e ? 3 : 2;
    }),
    ae = f.ref(null),
    ne = Z().catch(function (e) {
      f.StockBridge.aegisReportEvent("bottomBar-fetchData-error", {
        ext3: JSON.stringify(e || {}),
      });
    }),
    ie = k(
      a,
      null,
      r().mark(function e() {
        var t, o, a;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!P.value) {
                    e.next = 11;
                    break;
                  }
                  return (e.prev = 1), (e.next = 4), C.getETFSubPeriod(B.value);
                case 4:
                  (a = e.sent),
                    (ae.value = {
                      isPublishing:
                        0 === a.code &&
                        1 === (null == (t = a.data) ? void 0 : t.isPublishing),
                      subscribeCode:
                        0 === a.code
                          ? null == (o = a.data)
                            ? void 0
                            : o.subscribe_code
                          : null,
                    }),
                    (e.next = 11);
                  break;
                case 8:
                  (e.prev = 8),
                    (e.t0 = e.catch(1)),
                    (ae.value = { isPublishing: !1, subscribeCode: null });
                case 11:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[1, 8]]
        );
      })
    ),
    ue = null;
  k(
    a,
    null,
    r().mark(function e() {
      var t, o;
      return r().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (ue = setTimeout(function () {
                    u.value = !0;
                  }, 2e3)),
                  (e.prev = 1),
                  (e.next = 4),
                  Promise.all([ne, ie])
                );
              case 4:
                P.value &&
                (null == (t = ae.value) ? void 0 : t.isPublishing) &&
                W.value &&
                G.value &&
                ["10800", "10100"].includes(
                  String((null == (o = G.value) ? void 0 : o.code) || "")
                )
                  ? ((i.value = 1),
                    (N.value = ae.value.subscribeCode),
                    f.StockBridge.report("quote_bottom_bar.etf_ipo.brow", {
                      stockid: B.value,
                      fchannel_id_fm_i: "ID400p000t018",
                    }))
                  : (i.value = 0),
                  (e.next = 10);
                break;
              case 7:
                (e.prev = 7), (e.t0 = e.catch(1)), (i.value = 0);
              case 10:
                return (e.prev = 10), (e.next = 13), f.nextTick$1();
              case 13:
                return (
                  (u.value = !0),
                  Oe(),
                  D.value &&
                    W.value &&
                    F.value &&
                    f.StockBridge.report(
                      "hq.stockdetail.buy_related_etf_btn_brow"
                    ),
                  e.finish(10)
                );
              case 17:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[1, 7, 10, 17]]
      );
    })
  );
  var ce = f.ref(!1);
  function se() {
    if (ee && !ee.value && "function" == typeof te) return te(), !0;
  }
  f.onActivated(function () {
    t.stockAdded && (ce.value = !0);
  }),
    f.onDeactivated(function () {
      (c.value = !1), (s.value = !1), (ce.value = !1), Oe();
    }),
    f.onBeforeUnmount(function () {
      Oe();
    }),
    f.watch(
      function () {
        return t.stockAdded;
      },
      function (o) {
        d.value ? ((c.value = o), (s.value = !o)) : (ce.value = o),
          o &&
            !W.value &&
            t.isCanMocktrade &&
            f.StockBridge.report("hq.detail.bottom_bar.mocktrade_brow"),
          setTimeout(function () {
            d.value = d.value + 1;
          }, 1500),
          o &&
            (function () {
              var t;
              if (W.value) return !1;
              if (!i) return !1;
              if (i && !i.isCanMocktrade) return !1;
              var o =
                  parseFloat(
                    null == (t = i.zdf) ? void 0 : t.replace(/[+-]/g, "")
                  ) || 0,
                r = f.StockBridge.getStorage("ZIXUAN_VIEW_TIMES"),
                a = f.dayjs().format("YYYYMMDD"),
                n = !1;
              if (r && r.date === a)
                r[B.value]
                  ? ((r[B.value] = r[B.value] + 1),
                    f.StockBridge.setStorage("ZIXUAN_VIEW_TIMES", r),
                    r[B.value] >= 3 && (n = !0))
                  : Object.keys(r).length < 100 &&
                    ((r[B.value] = 1),
                    f.StockBridge.setStorage("ZIXUAN_VIEW_TIMES", r));
              else {
                var i = e({ date: a }, B.value, 1);
                f.StockBridge.setStorage("ZIXUAN_VIEW_TIMES", i);
              }
              return !!(i.mnNewuser || Math.abs(o) > 5 || n) || void 0;
            })() &&
            setTimeout(function () {
              t.stockAdded && oe.busEmit("global-bubble-show-mocktrade"),
                t.stockAdded && oe.busEmit("mp-bubble-show-mocktrade");
            }, 3e3);
      },
      { immediate: !0 }
    );
  var de = g.debounce(800, function () {
      se() ||
        (f.StockBridge.report("hq.detail.bottom_bar_to_choose_add", {
          fchannel_id_fm_i: "Ini00p000l125",
        }),
        o("toggleAdded"));
    }),
    le = f.inject("shouldShowTradeEmbedded"),
    pe = f.inject("handleDelistedStockTrade"),
    me = f.inject("getTradeStateSnapshot"),
    ke = f.inject("getInitTradeIframeSnapshot"),
    fe = f.inject("getInitTradeIframeExecutionTrace"),
    ve = f.inject("forceInitTradeIframe");
  function he(e, t) {
    f.StockBridge.aegisReportEvent("bottomBar-gotoTrade-navigate-fail", {
      ext3: JSON.stringify({ retcode: e, retmsg: t }),
      ext6: G.value.code,
    }),
      "ERR_MAINTAIN" === e
        ? f.StockBridge.modal({
            content: t || "系统繁忙 请稍后再试",
            showCancel: !1,
          })
        : f.StockRouter.routeTo({ name: "ApplyIndex" });
  }
  var ge = f.ref({ comment: 0, share: 0, remind: 0, added: 0 }),
    be = f.ref(0),
    Te = f.ref(!1),
    Se = f.ref(!1),
    ye = f.computed(function () {
      return !t.stockAdded || Se.value;
    }),
    _e = f.computed(function () {
      return !ye.value && W.value;
    });
  function Be(e, o) {
    var r = parseInt(o, 10) || 0,
      a = e;
    return r < 100
      ? "加自选" === e && t.stockAdded
        ? "已加自选"
        : a
      : (r < 1e4
          ? (a = r)
          : r < 1e5
          ? (a = "".concat((o / 1e4).toFixed(1), "万"))
          : r >= 1e5 && (a = "10万+"),
        a);
  }
  var xe = f.computed(function () {
    var e = {};
    return (
      (e.commentFormat = Be("评论", ge.value.comment)),
      (e.shareFormat = Be("分享", ge.value.share)),
      (e.remindFormat = Be("提醒", ge.value.remind)),
      (e.addedFormat = Be("加自选", ge.value.added)),
      e
    );
  });
  function Ie(e, a) {
    return k(
      this,
      null,
      r().mark(function i() {
        var u, c, s, d, l, p, m, k, h, g, b;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  if (
                    !(
                      v.utils.isHSMarket(e) ||
                      v.utils.isHKMarket(e) ||
                      (v.utils.isUSMarket(e) && "HXC" !== a && "NBI" !== a)
                    )
                  ) {
                    r.next = 16;
                    break;
                  }
                  return (
                    (r.prev = 1),
                    (r.next = 4),
                    n.queryStockAlert({
                      market: e,
                      code: a,
                      is_fund: V.value ? 1 : 0,
                      symbol:
                        null == (u = B.value)
                          ? void 0
                          : u.replace(/us\./, "us"),
                      source: 2,
                    })
                  );
                case 4:
                  (m = r.sent),
                    (k =
                      null ==
                      (s =
                        null == (c = null == m ? void 0 : m.stocks)
                          ? void 0
                          : c[0])
                        ? void 0
                        : s.subscribe_infos),
                    (h = n.checkHasReminded(m, {
                      filterNetInflow: !0,
                      filterSpecificTurnover: !0,
                      isIndex: I.value,
                      isETF: P.value,
                      isFund: V.value,
                      market: e,
                      stockType: t.stockType,
                      isHSMarket: v.utils.isHSMarket,
                      isHKMarket: v.utils.isHKMarket,
                      isHKFund: v.utils.isHKFund,
                    })),
                    (g =
                      null ==
                      (p =
                        null ==
                        (l =
                          null == (d = null == m ? void 0 : m.smart)
                            ? void 0
                            : d[0])
                          ? void 0
                          : l.smart_tip)
                        ? void 0
                        : p.fund_nav_update),
                    (b = V.value && !k && 2 === g),
                    (be.value = h && !b ? 1 : 0),
                    o("updateRemindInfo", k),
                    (r.next = 15);
                  break;
                case 12:
                  (r.prev = 12),
                    (r.t0 = r.catch(1)),
                    f.StockBridge.aegisReportEvent(
                      "bottomBar-fetchRemindStatus-error"
                    );
                case 15:
                  f.StockBridge.report(
                    "hq.stock_detail.bottom_bar_remind_brow",
                    { stockid: B.value, status: be.value }
                  );
                case 16:
                case "end":
                  return r.stop();
              }
          },
          i,
          null,
          [[1, 12]]
        );
      })
    );
  }
  function Ce(e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "add";
    ge.value[e] &&
      ("add" === t
        ? ((ge.value[e] = +ge.value[e] + 1), "added" === e && (Se.value = !0))
        : (ge.value[e] = +ge.value[e] - 1));
  }
  var we = f.ref(!1);
  k(
    a,
    null,
    r().mark(function e() {
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (e.next = 2),
                (function (e) {
                  return k(
                    this,
                    null,
                    r().mark(function t() {
                      var a;
                      return r().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0), (t.next = 3), C.queryBarCount(e)
                                );
                              case 3:
                                0 === (a = t.sent).code
                                  ? ((ge.value.comment = a.data.stockcomment),
                                    (ge.value.share = a.data.stockshare),
                                    (ge.value.remind = a.data.stocknotice),
                                    (ge.value.added = a.data.stockzixuan),
                                    o("updateBottomBarCount", {
                                      comment: a.data.stockcomment,
                                      share: a.data.stockshare,
                                      remind: a.data.stocknotice,
                                      added: a.data.stockzixuan,
                                    }),
                                    setTimeout(function () {
                                      Te.value = !0;
                                    }, 10))
                                  : (o("updateBottomBarCount", null),
                                    f.StockBridge.toast(
                                      "系统繁忙，请稍后重试",
                                      "none",
                                      { duration: 3e3 }
                                    ),
                                    (Te.value = !0)),
                                  (t.next = 10);
                                break;
                              case 7:
                                (t.prev = 7),
                                  (t.t0 = t.catch(0)),
                                  o("updateBottomBarCount", null),
                                  (Te.value = !0),
                                  f.StockBridge.aegisReportEvent(
                                    "bottomBar-fetchBottomBarCount-error"
                                  );
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 7]]
                      );
                    })
                  );
                })(B.value)
              );
            case 2:
              O.value &&
                (Ie(t.market, t.scode),
                f.StockBridge.report(
                  ye.value
                    ? "hq.detail.bottom_bar_to_choose_add_show"
                    : "hq.detail.bottom_bar_more_show"
                ));
            case 3:
            case "end":
              return e.stop();
          }
      }, e);
    })
  );
  try {
    "undefined" != typeof __BUILD_TIMESTAMP__ &&
      f.StockBridge.aegisReportEvent("hel_running_version", {
        ext1: "st-quote-bottom-bar",
        ext2: __BUILD_TIMESTAMP__,
      });
  } catch (e) {}
  var Ee = f.ref(!1),
    qe = f.ref(!1);
  function Me() {
    return k(
      this,
      null,
      r().mark(function e() {
        var t;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((e.prev = 0),
                    !(
                      qe.value ||
                      (M.value &&
                        (null == (t = B.value) ? void 0 : t.startsWith("pt03")))
                    ))
                  ) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return");
                case 3:
                  I.value || M.value, (Ee.value = !1), (e.next = 9);
                  break;
                case 6:
                  (e.prev = 6), (e.t0 = e.catch(0)), (Ee.value = !1);
                case 9:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 6]]
        );
      })
    );
  }
  var Pe = f.computed(function () {
      return !1;
    }),
    Ae = f.computed(function () {
      return (null == t ? void 0 : t.etfData) && (I.value || M.value);
    }),
    Re = f.computed(function () {
      return (
        ((null == t ? void 0 : t.etfData) && (I.value || M.value)) ||
        K.value ||
        q.value
      );
    }),
    De = f.computed(function () {
      return Ae.value || Pe.value || q.value;
    });
  function Oe() {
    ue && (clearTimeout(ue), (ue = null));
  }
  function Ue() {
    T && (clearTimeout(T), (T = null));
  }
  return (
    f.watch(
      function () {
        return null == t ? void 0 : t.etfData;
      },
      function (e) {
        return k(
          a,
          null,
          r().mark(function t() {
            return r().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (((t.t0 = e || qe.value), t.t0)) {
                      t.next = 5;
                      break;
                    }
                    return (t.next = 4), Me();
                  case 4:
                    qe.value = !0;
                  case 5:
                    (Re.value || De.value) &&
                      (I.value || q.value
                        ? f.StockBridge.mtaReport({
                            busi: "hq",
                            eventName: "buy_index_btn_brow",
                          })
                        : f.StockBridge.mtaReport({
                            busi: "hq",
                            eventName: "buy_section_btn_brow",
                          }));
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
      },
      { immediate: !0 }
    ),
    {
      clearTimersOnHide: function () {
        Ue();
      },
      symbol: B,
      isIndex: I,
      isSPMarket: q,
      isPlate: M,
      isHSDeListed: A,
      showTradeIcon: R,
      isShowEtf: D,
      showRemind: O,
      showHQshowChoose: U,
      showTradeType: L,
      showChoose: F,
      isAccountBind: W,
      didAgreeUserAgreement: ee,
      bottomBarCount: ge,
      hasReminded: be,
      dataFetched: Te,
      isCurrentVisitAdd: Se,
      moreDialogVisible: we,
      bottomBarFormat: xe,
      isShowLfChooseIcon: ye,
      tradeButtonType: S,
      tradeButtonReady: y,
      fetchRemindStatus: Ie,
      noMatchETFIndexPlate: Pe,
      matchETFIndexPlate: Ae,
      fetchTradeData: Z,
      tapComment: function () {
        if (!se()) {
          f.StockBridge.report("xcx_post_click", { stockid: B.value });
          var e =
            v.utils.isUSMarket(t.market) && v.utils.isIndex(t.stockType)
              ? "us.".concat(t.scode)
              : B.value;
          f.StockRouter.routeTo({
            name: "comment",
            query: { symbol: e, name: t.stockName, market: t.market },
          });
        }
      },
      tapShare: function () {
        se() ||
          (f.StockBridge.report("yy.share_tasks.share_icon_click", {
            stockid: B.value,
          }),
          C.setBarShareCount(B.value),
          Ce("share", "add"));
      },
      tapRemind: function () {
        t.isFromPyq
          ? f.StockBridge.toast("前往小程序使用完整功能", "none")
          : se() ||
            (f.StockBridge.report("quote.stockdetail.remind_click", {
              stockid: B.value,
              status: be.value,
            }),
            o("openRemindPop"));
      },
      goIndxbk: function () {
        f.StockBridge.report("hq.detail.buyindexorplate.click", {
          stockid: B.value,
        });
        var e = B.value;
        v.utils.isUSMarket(t.market) &&
          (e = v.utils.isIndex(t.stockType)
            ? "us.".concat(B.value.slice(2))
            : B.value);
        var o = !!(null == t ? void 0 : t.etfData),
          r =
            "https://wzq.tenpay.com/mp/v2/index.html#/kch/etf-teaching?symbol="
              .concat(e, "&stockType=")
              .concat(t.stockType, "&stockName=")
              .concat(t.stockName, "&type=&stat_data=Ix000p000b078&hasEtfData=")
              .concat(o);
        f.StockBridge.openExtraWebview(r);
      },
      tapChoose: function () {
        f.StockBridge.report("hq.hq.detail.bottom_bar_to_choose"),
          f.StockRouter.routeTo({ name: "ChooseIndex" });
      },
      tapHQ: function () {
        f.StockBridge.report("hq.hq.detail.bottom_bar_to_hq"),
          f.StockRouter.routeTo({ name: "HqIndex" });
      },
      showMiniApply: function () {
        if (W.value)
          f.StockBridge.report("quote.stockdetail.buyetf_click", {
            stockid: B.value,
          });
        else {
          var e = v.utils.isUSMarket(t.market) ? "IA500p000b122" : "";
          f.StockBridge.report(
            "quote.stockdetail.openaccount_click",
            p({ stockid: B.value }, e ? { fchannel_id_fm_i: e } : {})
          );
        }
        o("showMiniApply");
      },
      tapTrade: function (e) {
        return k(
          this,
          null,
          r().mark(function a() {
            var n, i;
            return r().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      if (((a.prev = 0), !t.isFromPyq)) {
                        a.next = 3;
                        break;
                      }
                      return a.abrupt(
                        "return",
                        void f.StockBridge.toast(
                          "前往小程序使用完整功能",
                          "none"
                        )
                      );
                    case 3:
                      if (G.value && !f.isEmpty(G.value)) {
                        a.next = 18;
                        break;
                      }
                      return (
                        f.StockBridge.aegisReportTime(
                          "bottomBar-gotoTrade-dealer-empty",
                          Date.now() - this.visitPageStartTime
                        ),
                        (a.prev = 5),
                        f.StockBridge.toast("", "loading"),
                        (a.next = 9),
                        Z()
                      );
                    case 9:
                      (G.value && !f.isEmpty(G.value)) ||
                        f.StockBridge.aegisReportEvent(
                          "mon_trade_dealer_empty"
                        ),
                        (a.next = 15);
                      break;
                    case 12:
                      return (
                        (a.prev = 12),
                        (a.t0 = a.catch(5)),
                        a.abrupt(
                          "return",
                          (f.StockBridge.aegisReportEvent(
                            "bottomBar-gotoTrade-fetchData-error",
                            { ext3: JSON.stringify(a.t0 || {}) }
                          ),
                          void f.StockBridge.modal({
                            content: a.t0.retmsg || "系统繁忙 请稍后再试",
                            showCancel: !1,
                          }))
                        )
                      );
                    case 15:
                      return (
                        (a.prev = 15), f.StockBridge.hideToast(), a.finish(15)
                      );
                    case 18:
                      if (W.value) {
                        a.next = 20;
                        break;
                      }
                      return a.abrupt(
                        "return",
                        void (function () {
                          var e = H({
                            market: t.market,
                            stockName: t.stockName,
                            stockType: t.stockType,
                            state: t.stockStatus,
                            isEtfIpo: !1,
                          });
                          f.StockBridge.setChannel(e);
                          var o = v.utils.isHKMarket(t.market)
                            ? "IA500p000b122"
                            : e;
                          f.StockBridge.report("xcx_quote_openclick", {
                            stockid: B.value,
                            fchannel_id_fm_i: o,
                          }),
                            f.StockBridge.report("stocklist.quotation_open", {
                              stockid: B.value,
                              fchannel_id_fm_i: o,
                            }),
                            f.StockRouter.routeTo({
                              name: "ApplyIndex",
                              query: {
                                from: "stockdetail",
                                stat_data: o,
                                stockName: t.stockName,
                                stockMarket: t.market,
                                stockCode: t.scode,
                                scene: P ? "stock_detail_etf" : "",
                              },
                            });
                        })()
                      );
                    case 20:
                      (i = v.utils.isDebt(t.stockType)
                        ? "TradeDebt"
                        : "TradeStock"),
                        f.StockBridge.report(
                          "stocklist.quotation.trade".concat(e, "click"),
                          {
                            stockid: B.value,
                            dealer_code: G.value.code,
                            action: e,
                          }
                        ),
                        setTimeout(function () {
                          !(function (e) {
                            var a =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "";
                            k(
                              this,
                              null,
                              r().mark(function n() {
                                var i, u, c, s, d, k, h, g, y, _;
                                return r().wrap(function (r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        if (
                                          !A.value ||
                                          !W.value ||
                                          "function" != typeof pe
                                        ) {
                                          r.next = 2;
                                          break;
                                        }
                                        return r.abrupt("return", void pe());
                                      case 2:
                                        if (!J.value) {
                                          r.next = 4;
                                          break;
                                        }
                                        return r.abrupt(
                                          "return",
                                          void f.StockRouter.routeTo({
                                            name: "SystemError",
                                            query: {
                                              reason: "maintain",
                                              broker: G.value.code,
                                            },
                                          })
                                        );
                                      case 4:
                                        if (!X.value) {
                                          r.next = 10;
                                          break;
                                        }
                                        return (
                                          (i = f.StockBridge.getCurRouteInfo()),
                                          f.StockBridge.report(
                                            "stocklist.quotation_trade_oem",
                                            {
                                              stockid: B.value,
                                              dealer_code: G.value.code,
                                            }
                                          ),
                                          (u = v.utils.isDebt(t.stockType)
                                            ? "/trade/debt"
                                            : "/trade/stock"),
                                          (c = m(
                                            p(
                                              {
                                                code: t.scode,
                                                market: t.market,
                                              },
                                              i.query.holder
                                                ? { holder: i.query.holder }
                                                : {}
                                            ),
                                            { hidenav: "1" }
                                          )),
                                          (s = Object.keys(c)
                                            .map(function (e) {
                                              return [
                                                e,
                                                encodeURIComponent(c[e]),
                                              ].join("=");
                                            })
                                            .join("&")),
                                          r.abrupt(
                                            "return",
                                            ((u = "".concat(u, "?").concat(s)),
                                            void setTimeout(function () {
                                              $({
                                                broker: G.value.code,
                                                path: u,
                                              });
                                            }, 300))
                                          )
                                        );
                                      case 10:
                                        if (
                                          ((d = H({
                                            market: t.market,
                                            stockName: t.stockName,
                                            stockType: t.stockType,
                                            state: t.stockStatus,
                                            isEtfIpo: S.value === w.IPO,
                                          })),
                                          f.StockBridge.setChannel(d),
                                          "buy" === a && (l.value = !0),
                                          "sell" === a && (b.value = !0),
                                          S.value !== w.IPO)
                                        ) {
                                          r.next = 15;
                                          break;
                                        }
                                        f.StockBridge.report(
                                          "quote_bottom_bar.etf_ipo.click",
                                          {
                                            stockid: B.value,
                                            fchannel_id_fm_i: "ID400p000t018",
                                          }
                                        ),
                                          $({
                                            path: "/etf-subscribe/index",
                                            data: {
                                              scode: N.value || t.scode,
                                              market: t.market,
                                              stat: d,
                                            },
                                          }).catch(function (e) {
                                            he(e.retcode, e.retmsg);
                                          }),
                                          (r.next = 27);
                                        break;
                                      case 15:
                                        if (
                                          ((r.t0 = "function" == typeof le),
                                          !r.t0)
                                        ) {
                                          r.next = 20;
                                          break;
                                        }
                                        return (
                                          (r.next = 19),
                                          le({ requirePlugin: !0 })
                                        );
                                      case 19:
                                        r.t0 = r.sent;
                                      case 20:
                                        if (!r.t0) {
                                          r.next = 26;
                                          break;
                                        }
                                        (l.value = !1), (b.value = !1);
                                        try {
                                          t.initTradeIframeExecuted ||
                                            "function" != typeof ve ||
                                            ve("bottombar_trade_click");
                                        } catch (e) {}
                                        if (
                                          (o("showTradeEmbeddedComp", a),
                                          !t.initTradeIframeExecuted)
                                        )
                                          try {
                                            (k =
                                              "function" == typeof me
                                                ? me()
                                                : null),
                                              (h = {}),
                                              (g =
                                                "function" == typeof ke
                                                  ? ke()
                                                  : null),
                                              k &&
                                                g &&
                                                Object.keys(k).forEach(
                                                  function (e) {
                                                    k[e] !== g[e] &&
                                                      (h[e] = {
                                                        from: g[e],
                                                        to: k[e],
                                                      });
                                                  }
                                                ),
                                              (y =
                                                Object.keys(h).length > 0
                                                  ? JSON.stringify(h)
                                                  : "no_changes"),
                                              g ||
                                                ((_ =
                                                  "function" == typeof fe
                                                    ? fe()
                                                    : null),
                                                (y = JSON.stringify({
                                                  reason: "snapshot_not_exist",
                                                  executionTrace: _,
                                                }))),
                                              f.StockBridge.aegisReportEvent(
                                                "mon_trade_quote_iframenotinit",
                                                { ext6: G.value.code, ext3: y }
                                              );
                                          } catch (e) {}
                                        r.next = 27;
                                        break;
                                      case 26:
                                        (l.value = !1),
                                          (b.value = !1),
                                          $({
                                            name: e,
                                            data: {
                                              market: E(t.market),
                                              code: t.scode,
                                              stat: d,
                                              entrust_type: a,
                                              df_name: t.stockName,
                                              df_dqj: t.dqj,
                                              trade_params: t.tradeParams || "",
                                            },
                                          }).catch(function (e) {
                                            var t = e.retcode,
                                              o = e.retmsg,
                                              r = e.errmsg;
                                            he(t, o || r);
                                          }),
                                          Ue(),
                                          (T = setTimeout(function () {
                                            var e;
                                            Ue(),
                                              f.StockBridge.aegisReportEvent(
                                                "mon_trade_quote_routefail",
                                                {
                                                  ext6:
                                                    null == (e = G.value)
                                                      ? void 0
                                                      : e.code,
                                                }
                                              );
                                          }, 5e3));
                                      case 27:
                                      case "end":
                                        return r.stop();
                                    }
                                }, n);
                              })
                            );
                          })(i, e);
                        }, 200),
                        (a.next = 27);
                      break;
                    case 24:
                      (a.prev = 24),
                        (a.t1 = a.catch(0)),
                        f.StockBridge.aegisReportEvent(
                          "mon_trade_quote_jumperror",
                          {
                            ext3: a.t1,
                            ext6: null == (n = G.value) ? void 0 : n.code,
                          }
                        );
                    case 27:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              this,
              [
                [0, 24],
                [5, 12, 15, 18],
              ]
            );
          })
        );
      },
      toggleAdded: de,
      tapChooseManage: function () {
        f.StockRouter.routeTo({ name: "new_index_batch" }),
          f.StockBridge.report("hq.detail.bottom_bar_tap_choose_manage");
      },
      tapSetTop: function () {
        return k(
          this,
          null,
          r().mark(function e() {
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      f.StockBridge.report(
                        "hq.detail.bottom_bar_tap_choose_top"
                      ),
                      (e.next = 3),
                      C.setChooseTop(B.value)
                    );
                  case 3:
                    if (((e.t0 = e.sent.code), 0 !== e.t0)) {
                      e.next = 8;
                      break;
                    }
                    f.StockBridge.toast("已置顶成功"),
                      f.StockBridge.busEmit("common-toggleAdded"),
                      (e.next = 9);
                    break;
                  case 8:
                    f.StockBridge.toast("系统繁忙", "fail");
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      },
      tapDelChoose: function () {
        o("toggleAdded"),
          f.StockBridge.report("hq.detail.bottom_bar_tap_choose_del");
      },
      tapMore: function () {
        se() ||
          (f.StockBridge.report("hq.detail.bottom_bar_more_click"),
          (we.value = !0));
      },
      tapMoreClose: function () {
        f.StockBridge.report("hq.detail.bottom_bar_more_close_click"),
          (we.value = !1);
      },
      setLocalBottomBarCount: Ce,
      turnLeft: c,
      turnRight: s,
      setTransform: ce,
      tapMocktrade: function () {
        se() ||
          (f.StockBridge.report("hq.detail.bottom_bar.mocktrade_click", {
            stockid: B.value,
          }),
          f.StockRouter.routeTo({
            name: "mockdeal",
            query: { code: B.value },
          }));
      },
      isShowMore: _e,
      isCanCalculate: j,
      proLeftCount: re,
      isIndexWhite: K,
      isFTIndex: Y,
      isUKMarket: Q,
      showPlateOrIndexInPro: Re,
      showPlateOrIndexInLite: De,
      isFund: V,
      bLoading: l,
      sLoading: b,
    }
  );
}
var M = {
  components: {
    MoreDialog: function () {
      return "../moreDialog.js";
    },
  },
  props: {
    market: { type: String, default: "" },
    scode: { type: String, default: "" },
    stockType: { type: String, default: "" },
    stockName: { type: String, default: "" },
    etfData: { type: Object, default: null },
    stockAdded: { type: Boolean, default: !1 },
    stockStatus: { type: String, default: "" },
    isFromPyq: { type: Boolean, default: !1 },
    dqj: { type: String, default: "" },
    zdf: { type: String, default: "" },
    isMarketGrayUser: { type: Boolean, default: !1 },
    isCanMocktrade: { type: Boolean, default: !1 },
    mnNewuser: { type: Boolean, default: !1 },
    isGGT: { type: Boolean, default: !1 },
    stockOverView: { type: Object, default: null },
    initTradeIframeExecuted: { type: Boolean, default: !0 },
    hideTradeArea: { type: Boolean, default: !1 },
  },
  setup: function (e, t) {
    var o = t.emit;
    f.getCurrentInstance().proxy || f.getCurrentInstance();
    var r = q(e, o),
      a = r.symbol,
      n = r.isIndex,
      i = r.isSPMarket,
      u = r.isPlate,
      c = r.isHSDeListed,
      s = r.showTradeIcon,
      d = r.isShowEtf,
      l = r.showRemind,
      p = r.showHQ,
      m = r.showTradeType,
      k = r.showChoose,
      v = r.isAccountBind,
      h = r.bottomBarCount,
      g = r.hasReminded,
      b = r.dataFetched,
      T = r.isCurrentVisitAdd,
      S = r.moreDialogVisible,
      y = r.bottomBarFormat,
      _ = r.isShowLfChooseIcon,
      B = r.tradeButtonType,
      x = r.tradeButtonReady,
      I = r.tapComment,
      C = r.tapShare,
      E = r.tapRemind,
      M = r.goIndxbk,
      P = r.tapChoose,
      A = r.toggleAdded,
      R = r.tapHQ,
      D = r.tapTrade,
      O = r.showMiniApply,
      U = r.didAgreeUserAgreement,
      L = r.tapChooseManage,
      F = r.tapSetTop,
      H = r.tapDelChoose,
      N = r.setLocalBottomBarCount,
      j = r.fetchRemindStatus,
      K = r.tapMore,
      Y = r.tapMoreClose,
      Q = r.turnRight,
      V = r.turnLeft,
      z = r.setTransform,
      W = r.tapMocktrade,
      G = r.isShowMore,
      X = r.isCanCalculate,
      J = r.proLeftCount,
      Z = r.isIndexWhite,
      $ = r.isFTIndex,
      ee = r.isUKMarket,
      te = r.bLoading,
      oe = r.sLoading,
      re = r.clearTimersOnHide,
      ae = r.showPlateOrIndexInPro;
    return (
      f.onDeactivated(function () {
        (T.value = !1), re();
      }),
      {
        handleHide: function () {
          re();
        },
        symbol: a,
        isIndex: n,
        isSPMarket: i,
        isPlate: u,
        isHSDeListed: c,
        showTradeIcon: s,
        isShowEtf: d,
        showRemind: l,
        showHQ: p,
        showChoose: k,
        showTradeType: m,
        isAccountBind: v,
        didAgreeUserAgreement: U,
        bottomBarCount: h,
        hasReminded: g,
        dataFetched: b,
        isCurrentVisitAdd: T,
        moreDialogVisible: S,
        bottomBarFormat: y,
        isShowLfChooseIcon: _,
        tradeButtonType: B,
        TRADE_BUTTON_TYPE: w,
        tradeButtonReady: x,
        tapComment: I,
        tapShare: C,
        tapRemind: E,
        goIndxbk: M,
        tapChoose: P,
        toggleAdded: A,
        tapHQ: R,
        tapTrade: D,
        showMiniApply: O,
        tapChooseManage: L,
        tapSetTop: F,
        tapDelChoose: H,
        setLocalBottomBarCount: N,
        fetchRemindStatus: j,
        tapMore: K,
        tapMoreClose: Y,
        turnRight: Q,
        turnLeft: V,
        setTransform: z,
        tapMocktrade: W,
        isShowMore: G,
        isCanCalculate: X,
        proLeftCount: J,
        isIndexWhite: Z,
        isFTIndex: $,
        isUKMarket: ee,
        bLoading: te,
        sLoading: oe,
        showPlateOrIndexInPro: ae,
      }
    );
  },
};
Array || f.resolveComponent("more-dialog")();
var P = f._export_sfc(M, [
  [
    "render",
    function (e, t, o, r, a, n) {
      return f.e(
        {
          a: f.n(r.showTradeIcon ? "a-stock" : ""),
          b: f.n({ plate: "p" === o.market }),
          c: f.t(r.dataFetched ? r.bottomBarFormat.commentFormat : ""),
          d: f.o(function () {
            return r.tapComment && r.tapComment.apply(r, arguments);
          }, 1815),
          e: r.didAgreeUserAgreement.value,
        },
        (r.didAgreeUserAgreement.value, {}),
        {
          f: f.o(function () {
            return r.tapShare && r.tapShare.apply(r, arguments);
          }, 1816),
          g: !r.isAccountBind && o.isCanMocktrade,
        },
        !r.isAccountBind && o.isCanMocktrade
          ? {
              h: f.o(function () {
                return r.tapMocktrade && r.tapMocktrade.apply(r, arguments);
              }, 1817),
            }
          : {},
        { i: r.showRemind },
        r.showRemind
          ? {
              j: f.n(r.hasReminded ? "reminded" : ""),
              k: f.t(r.hasReminded ? "查看提醒" : "设置提醒"),
              l: f.o(function () {
                return r.tapRemind && r.tapRemind.apply(r, arguments);
              }, 1818),
            }
          : {},
        { m: r.isCanCalculate },
        (r.isCanCalculate, {}),
        { n: r.showPlateOrIndexInPro },
        r.showPlateOrIndexInPro
          ? {
              o: f.t(r.isPlate ? "买板块" : "买指数"),
              p: f.n("btn-col-set-right-".concat(r.proLeftCount)),
              q: f.o(function () {
                return r.goIndxbk && r.goIndxbk.apply(r, arguments);
              }, 1819),
            }
          : r.isFTIndex || r.isUKMarket
          ? {
              s: f.n("btn-col-set-right-".concat(r.proLeftCount)),
              t: f.o(function () {
                return r.tapHQ && r.tapHQ.apply(r, arguments);
              }, 1820),
            }
          : r.showChoose
          ? f.e(
              { w: r.isShowEtf },
              r.isShowEtf
                ? {
                    x: f.t(r.isAccountBind ? "买相关ETF" : "开户交易"),
                    y: f.o(function () {
                      return (
                        r.showMiniApply && r.showMiniApply.apply(r, arguments)
                      );
                    }, 1821),
                  }
                : void 0 !== o.stockAdded
                ? f.e(
                    { A: o.stockAdded },
                    o.stockAdded
                      ? {
                          B: f.o(function () {
                            return (
                              r.tapChoose && r.tapChoose.apply(r, arguments)
                            );
                          }, 1822),
                        }
                      : {
                          C: f.o(function () {
                            return (
                              r.toggleAdded && r.toggleAdded.apply(r, arguments)
                            );
                          }, 1823),
                        }
                  )
                : {},
              {
                z: void 0 !== o.stockAdded,
                D: f.n("btn-col-set-right-".concat(r.proLeftCount)),
              }
            )
          : r.showHQ
          ? {
              F: f.n("btn-col-set-right-".concat(r.proLeftCount)),
              G: f.o(function () {
                return r.tapHQ && r.tapHQ.apply(r, arguments);
              }, 1824),
            }
          : r.showTradeIcon && r.tradeButtonReady && !o.hideTradeArea
          ? f.e(
              {
                I:
                  r.tradeButtonType === r.TRADE_BUTTON_TYPE.BUYSELL &&
                  r.isAccountBind,
              },
              r.tradeButtonType === r.TRADE_BUTTON_TYPE.BUYSELL &&
                r.isAccountBind
                ? f.e(
                    { J: !r.bLoading },
                    (r.bLoading, {}),
                    {
                      K: f.o(function (e) {
                        return r.tapTrade("buy");
                      }, 1825),
                      L: !r.sLoading,
                    },
                    (r.sLoading, {}),
                    {
                      M: f.o(function (e) {
                        return r.tapTrade("sell");
                      }, 1826),
                    }
                  )
                : r.tradeButtonType !== r.TRADE_BUTTON_TYPE.BUYSELL ||
                  r.isAccountBind
                ? r.tradeButtonType === r.TRADE_BUTTON_TYPE.IPO
                  ? {
                      Q: f.o(function (e) {
                        return r.tapTrade();
                      }, 1828),
                    }
                  : r.tradeButtonType === r.TRADE_BUTTON_TYPE.DEBT
                  ? {
                      S: f.o(function (e) {
                        return r.tapTrade();
                      }, 1829),
                    }
                  : {}
                : {
                    O: f.o(function (e) {
                      return r.tapTrade();
                    }, 1827),
                  },
              {
                N:
                  r.tradeButtonType === r.TRADE_BUTTON_TYPE.BUYSELL &&
                  !r.isAccountBind,
                P: r.tradeButtonType === r.TRADE_BUTTON_TYPE.IPO,
                R: r.tradeButtonType === r.TRADE_BUTTON_TYPE.DEBT,
                T: f.n(r.showTradeType ? "only-one" : ""),
                U: f.n("btn-col-set-right-".concat(r.proLeftCount)),
              }
            )
          : {},
        {
          r: r.isFTIndex || r.isUKMarket,
          v: r.showChoose,
          E: r.showHQ,
          H: r.showTradeIcon && r.tradeButtonReady && !o.hideTradeArea,
          V: f.o(r.tapDelChoose, 1830),
          W: f.o(r.tapChooseManage, 1831),
          X: f.o(r.tapSetTop, 1832),
          Y: f.o(r.tapMoreClose, 1833),
          Z: f.p({ visible: r.moreDialogVisible }),
          aa: o.isFromPyq ? 1 : "",
          ab: o.hideTradeArea ? 1 : "",
        }
      );
    },
  ],
  ["__scopeId", "data-v-2dd5c1c1"],
]);
wx.createComponent(P);
