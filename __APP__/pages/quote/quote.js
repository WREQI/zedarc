require("../../@babel/runtime/helpers/Arrayincludes");
var t,
  e = require("../../@babel/runtime/helpers/slicedToArray"),
  i = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  s = require("../../@babel/runtime/helpers/defineProperty"),
  n = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  a = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  d = function (t, e, i) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  h = function (t, e) {
    for (var i in e || (e = {})) l.call(e, i) && d(t, i, e[i]);
    if (c) {
      var s,
        r = n(c(e));
      try {
        for (r.s(); !(s = r.n()).done; ) {
          i = s.value;
          u.call(e, i) && d(t, i, e[i]);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
    return t;
  },
  f = function (t, e) {
    return a(t, o(e));
  },
  p = function (t, e, i) {
    return new Promise(function (s, n) {
      var r = function (t) {
          try {
            o(i.next(t));
          } catch (t) {
            n(t);
          }
        },
        a = function (t) {
          try {
            o(i.throw(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          return t.done ? s(t.value) : Promise.resolve(t.value).then(r, a);
        };
      o((i = i.apply(t, e)).next());
    });
  },
  m = require("../../common/vendor.js"),
  b = require("@tencent/stock-hq-data/index.js"),
  k = require("../../utils/hqWSHelper.js"),
  g = require("../../utils/mixins/privacy.js"),
  v = require("./config/quoteEnum.js"),
  T = require("../../utils/task.js"),
  w = require("../../module/delivery/deliveryMixin.js"),
  y = require("@tencent/stock-markets-base/utils/share.js"),
  S = require("@tencent/stock-hq-core/utils/market.js"),
  x = require("./utils/remindInfoFormat.js"),
  B = (function (t) {
    return (t.buy = "buy"), (t.sell = "sell"), t;
  })(B || {}),
  C = (function (t) {
    return (
      (t.STOCK = "stock"),
      (t.WZQLIGHT = "wzqlight"),
      (t.MPZXG = "mpzxg"),
      (t.MPWZQ = "mpwzq"),
      t
    );
  })(C || {}),
  M = (function (t) {
    return (t.LIGHT = "light"), (t.DARK = "dark"), t;
  })(M || {}),
  _ =
    (s((t = {}), m.BROKER_CODE.ZHONGJINCAIFU, {
      tool: "bandAssist",
      controlField: "band_assist_control",
      statusField: "band_assist_status",
    }),
    s(t, m.BROKER_CODE.ZHONGXINJIANTOU, {
      tool: "stockSignal",
      statusField: "stock_signal_status",
    }),
    t),
  E = {
    canShow: !1,
    isSubscribed: !1,
    brokerCode: "",
    introPath: "",
    tool: void 0,
  },
  D = m.ref(h({}, E)),
  P = {};
function N(t, e) {
  var i,
    s = _[t],
    n = (null == (i = m.brokerFuncConfig[t]) ? void 0 : i.brokerToolPath) || "";
  return s && n
    ? {
        canShow:
          !s.controlField || "1" === (null == e ? void 0 : e[s.controlField]),
        isSubscribed: "1" === (null == e ? void 0 : e[s.statusField]),
        brokerCode: t,
        introPath: n,
        tool: s.tool,
      }
    : h({}, E);
}
function A() {
  return p(
    this,
    null,
    i().mark(function t() {
      var e, n, r, a, o, c, l, u, d, p, b, k;
      return i().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (
                (r = m.getInstance()),
                (t.next = 3),
                (null == (e = r.isDataCache) ? void 0 : e.value) ||
                  r.fetchData()
              );
            case 3:
              if (r.hasBind.value) {
                t.next = 5;
                break;
              }
              return t.abrupt("return", ((D.value = h({}, E)), D.value));
            case 5:
              if (
                ((a = r.highestPriorityDealer.value || {}),
                (o = a.code),
                (c = _[o]),
                (l =
                  null == (n = m.brokerFuncConfig[o])
                    ? void 0
                    : n.brokerToolPath),
                m.isBrokerPluginEnable(o) && c && l)
              ) {
                t.next = 8;
                break;
              }
              return t.abrupt("return", ((D.value = h({}, E)), D.value));
            case 8:
              if (
                ((u = r.getBrokerMaintain({
                  bulletinType: m.BULLETIN_TYPE.TRADE,
                })),
                !u.isMaintain)
              ) {
                t.next = 11;
                break;
              }
              return t.abrupt("return", ((D.value = h({}, E)), D.value));
            case 11:
              if (
                ((d = c.controlField || c.statusField),
                (p = m.getBrokerUserSetting(o) || {}),
                m.isEmpty(p) || void 0 === p[d])
              ) {
                t.next = 14;
                break;
              }
              return t.abrupt("return", ((D.value = N(o, p)), D.value));
            case 14:
              if (!P[o]) {
                t.next = 19;
                break;
              }
              return (t.next = 17), P[o];
            case 17:
              return (
                (b = m.getBrokerUserSetting(o) || {}),
                t.abrupt("return", ((D.value = N(o, b)), D.value))
              );
            case 19:
              return (
                (k = Date.now()),
                t.abrupt(
                  "return",
                  ((P[o] = m
                    .brokerRequest(o, "/cgi-bin/usersetting.cgi", {
                      query: "1",
                    })
                    .then(function (t) {
                      var e =
                          "1" === (null == t ? void 0 : t.trademode) &&
                          "1" === (null == t ? void 0 : t.is_trademode_gray),
                        i =
                          "1" === (null == t ? void 0 : t.order_mode)
                            ? "QUICKTRADE"
                            : "STANDARD";
                      return (
                        m.setBrokerUserSetting(
                          o,
                          f(
                            h(
                              {
                                isTradeEmbedded: e,
                                embeddedTradeMode: i,
                                ios_biometric_entry:
                                  t.ios_biometric_entry || "0",
                                android_biometric_entry:
                                  t.android_biometric_entry || "0",
                                biometric_face: t.biometric_face || "0",
                                biometric_finger: t.biometric_finger || "0",
                              },
                              c.controlField
                                ? s(
                                    {},
                                    c.controlField,
                                    (null == t ? void 0 : t[c.controlField]) ||
                                      "0"
                                  )
                                : {}
                            ),
                            s(
                              {},
                              c.statusField,
                              (null == t ? void 0 : t[c.statusField]) || "0"
                            )
                          )
                        ),
                        (D.value = N(o, t || {})),
                        D.value
                      );
                    })
                    .catch(function (t) {
                      var e,
                        i,
                        s = getApp().globalData;
                      return (
                        null ==
                          (i =
                            null == (e = null == s ? void 0 : s.mpReporter)
                              ? void 0
                              : e.reportEvent) ||
                          i.call(e, "broker_usersetting_halfchart_error", {
                            ext3: JSON.stringify(t),
                            ext6: o,
                          }),
                        (D.value = h({}, E)),
                        D.value
                      );
                    })
                    .finally(function () {
                      var t, e, i;
                      P[o] = null;
                      var s = Date.now() - k;
                      s > 5e3 &&
                        (null ==
                          (i =
                            null ==
                            (e =
                              null == (t = getApp().globalData)
                                ? void 0
                                : t.mpReporter)
                              ? void 0
                              : e.reportEvent) ||
                          i.call(e, "mon_chart_getsetting_timeout", {
                            ext3: s,
                            ext6: o,
                          }));
                    })),
                  P[o])
                )
              );
            case 21:
            case "end":
              return t.stop();
          }
      }, t);
    })
  );
}
var R = "t0ListUpdateTime",
  F = null,
  q = {
    data: function () {
      return { showT0Tag: !1 };
    },
    methods: {
      getT0Tagshow: function () {
        return p(
          this,
          null,
          i().mark(function t() {
            var e,
              s,
              n = this;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        this.showT0Tag ||
                        !this.hqBridge ||
                        (!b.utils.isFund(this.stockType) &&
                          !b.utils.isTransferableDebt(this.stockType))
                      ) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 3), this.queryT0Taglist();
                    case 3:
                      (e = t.sent) &&
                        ((s = (e.allow_list || []).findIndex(function (t) {
                          return t === n.symbol;
                        })),
                        (this.showT0Tag = -1 !== s));
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      queryT0Taglist: function () {
        var t = Date.now(),
          e = m.wx$1.getStorageSync(R) || 0;
        if ((t - e) / 36e5 >= 1)
          F = this.hqBridge
            .request(
              "https://file.finance.qq.com/controller/innerFund_kzz_t0.json"
            )
            .then(function (e) {
              var i = e;
              return (
                m.wx$1.setStorageSync(R, t),
                m.wx$1
                  .getFileSystemManager()
                  .writeFileSync(
                    "".concat(m.wx$1.env.USER_DATA_PATH, "/t0taglist.txt"),
                    JSON.stringify(i),
                    "utf8"
                  ),
                i
              );
            })
            .catch(function () {
              return [];
            });
        else if (!F)
          try {
            var i = m.wx$1
              .getFileSystemManager()
              .readFileSync(
                "".concat(m.wx$1.env.USER_DATA_PATH, "/t0taglist.txt"),
                "utf8"
              );
            F = Promise.resolve(JSON.parse(i));
          } catch (t) {
            F = Promise.resolve([]);
          }
        return F;
      },
    },
  },
  H = getApp().globalData,
  L = function (t, e) {
    return t.length > e ? "".concat(t.slice(0, e), "...") : t;
  },
  O = "innerfundWhiteListUpdateTime",
  I = {
    data: function () {
      return {};
    },
    methods: {
      getInnerFundShow: function () {
        return p(
          this,
          null,
          i().mark(function t() {
            var e,
              s,
              n,
              r = this;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.hqBridge && this.tabs) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (t.next = 4), this.queryInnerFundWhiteList();
                    case 4:
                      ((e = t.sent) ||
                        (this.isIndex && !this.isUS) ||
                        this.isPlate) &&
                        ((s = this.isIndex
                          ? e.allow_list || []
                          : this.isPlate
                          ? e.allow_list_v3 || []
                          : this.isHK || this.isUS
                          ? e.allow_list_v4 || []
                          : e.allow_list_v7 || []),
                        (n = this.isUS
                          ? b.utils.getSymbol(this.market, this.formattedCode)
                          : this.symbol),
                        -1 !==
                          s.findIndex(function (t) {
                            return t === r.symbol || t === n;
                          }) &&
                          ((this.tabs.innerfund.name = this.isPlate
                            ? "ETF"
                            : "基金"),
                          this.isPlate ||
                          (this.isIndex && !b.utils.isUSMarket(this.market)) ||
                          b.utils.isHKMarket(this.market) ||
                          b.utils.isUSMarket(this.market)
                            ? ((this.tabs.innerfund.show = !0),
                              (this.tabs.innerfund.visited = !0))
                            : ((this.tabs.innerfund.show = !1),
                              (this.tabs.innerfund.visited = !1))),
                        this.isIndex &&
                          ((this.tabs.innerfund.name = "基金"),
                          (this.tabs.innerfund.stat = "stockinfo.fund_list")));
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      queryInnerFundWhiteList: function () {
        var t = Date.now(),
          e = m.wx$1.getStorageSync(O) || 0,
          i = null;
        if ((t - e) / 36e5 >= 1)
          i = this.hqBridge
            .request("https://file.finance.qq.com/rank/fund/allow_index.json")
            .then(function (e) {
              var i = e;
              return (
                m.wx$1.setStorageSync(O, t),
                m.wx$1
                  .getFileSystemManager()
                  .writeFileSync(
                    "".concat(m.wx$1.env.USER_DATA_PATH, "/innerfundlist.txt"),
                    JSON.stringify(i),
                    "utf8"
                  ),
                i
              );
            })
            .catch(function () {
              return [];
            });
        else if (!i)
          try {
            var s = m.wx$1
              .getFileSystemManager()
              .readFileSync(
                "".concat(m.wx$1.env.USER_DATA_PATH, "/innerfundlist.txt"),
                "utf8"
              );
            i = Promise.resolve(JSON.parse(s));
          } catch (t) {
            i = Promise.resolve([]);
          }
        return i;
      },
    },
  },
  j = "updateCfgStockTime",
  z = {
    data: function () {
      return {};
    },
    methods: {
      getLocalCfgWhiteList: function () {
        return new Promise(function (t, e) {
          try {
            var i = m.wx$1
              .getFileSystemManager()
              .readFileSync(
                "".concat(m.wx$1.env.USER_DATA_PATH, "/cfgTabStocklist.txt"),
                "utf8"
              );
            t(JSON.parse(i));
          } catch (e) {
            t({});
          }
        });
      },
      queryCfgWhiteList: function () {
        var t = this;
        return new Promise(function (e, i) {
          t.hqBridge
            .request(
              "https://file.finance.qq.com/tab/constituent_stock.json",
              "GET",
              {},
              { timeout: 6e3 }
            )
            .then(function (t) {
              var i = t;
              m.wx$1.setStorageSync(j, Date.now()),
                m.wx$1
                  .getFileSystemManager()
                  .writeFileSync(
                    "".concat(
                      m.wx$1.env.USER_DATA_PATH,
                      "/cfgTabStocklist.txt"
                    ),
                    JSON.stringify(i),
                    "utf8"
                  ),
                e(i);
            })
            .catch(function (t) {
              e({});
            });
        });
      },
      getCfgWhiteList: function () {
        return p(
          this,
          null,
          i().mark(function t() {
            var e, s, n, r;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((e = Date.now()),
                        (s = m.wx$1.getStorageSync(j) || 0),
                        !(n = !s || parseInt(e - s) / 1e3 / 3600 > 1))
                      ) {
                        t.next = 8;
                        break;
                      }
                      return (t.next = 5), this.queryCfgWhiteList();
                    case 5:
                      (t.t0 = t.sent), (t.next = 11);
                      break;
                    case 8:
                      return (t.next = 10), this.getLocalCfgWhiteList();
                    case 10:
                      t.t0 = t.sent;
                    case 11:
                      if (((r = t.t0), !n)) {
                        t.next = 20;
                        break;
                      }
                      if (((t.t1 = null == r ? void 0 : r.data), t.t1)) {
                        t.next = 18;
                        break;
                      }
                      return (t.next = 17), this.getLocalCfgWhiteList();
                    case 17:
                      r = t.sent;
                    case 18:
                      t.next = 26;
                      break;
                    case 20:
                      if (((t.t2 = r), t.t2)) {
                        t.next = 26;
                        break;
                      }
                      return (t.next = 24), this.queryCfgWhiteList();
                    case 24:
                      (r = t.sent), (n = !0);
                    case 26:
                      return t.abrupt("return", r);
                    case 27:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
    },
  },
  U = {
    12800: {
      grayID_NQ: 9182881047,
      grayID_BJ: 1492722658,
      grayID_HK: 2866911604,
      grayID_2: 2866911604,
      support_BJ: !0,
      support_NQ: !0,
      support_HK: !0,
    },
    10800: {
      grayID_HK: 3413091983,
      grayID_2: 3413091983,
      support_HK: !0,
      grayID_NQ: 6757477039,
      grayID_BJ: 4130928146,
      support_BJ: !0,
      support_NQ: !0,
    },
    10100: {
      grayID_NQ: 2603219428,
      grayID_BJ: 4283628002,
      support_BJ: !0,
      support_NQ: !0,
      grayID_HK: 2418143493,
      grayID_2: 2418143493,
      support_HK: !0,
    },
  },
  G = null;
function W(t) {
  return (null == G ? void 0 : G[t]) || U[t] || {};
}
function Q(t) {
  var e = t.dealercode,
    i = t.market;
  return !(!b.utils.isBJMarket(i) || !W(e).support_BJ);
}
function $(t) {
  var e = t.dealercode,
    i = t.market;
  return !(!b.utils.isNQMarket(i) || !W(e).support_NQ);
}
function Z(t) {
  var e = t.dealercode,
    i = t.market;
  return !(!b.utils.isHKMarket(i) || !W(e).support_HK);
}
function Y(t) {
  return !!["GP-TS-A"].includes(t.stockType);
}
function V(t) {
  return !!["GP"].includes(t.stockType);
}
function K(t) {
  return !/^QZ/.test(t.stockType) && !/^ZS/.test(t.stockType);
}
function J(t) {
  try {
    return (
      !!(t && t.market && t.dealercode && t.stockType) &&
      !!(
        (function (t) {
          return !!$(t) && !!Y(t);
        })(t) ||
        (function (t) {
          return !!Q(t) && !!V(t);
        })(t) ||
        (function (t) {
          return !!Z(t) && !!K(t);
        })(t)
      )
    );
  } catch (t) {
    return !1;
  }
}
function X(t) {
  var e = m.ref(!1),
    s = m.ref(!1),
    n = null;
  function r(e) {
    var i, s;
    null == (s = t.reportEvent) ||
      s.call(t, "MONITOR-NEWMARKET_GRAY", {
        ext3: JSON.stringify(e || {}),
        ext6:
          null == (i = null == e ? void 0 : e.options) ? void 0 : i.dealercode,
      });
  }
  function a(t) {
    try {
      if (
        !(function (t) {
          return Q(t) || $(t) || Z(t);
        })(t)
      )
        return void (e.value = !1);
      "stock" !== t.type || J(t) || (e.value = !1);
    } catch (i) {
      (e.value = !1), r({ error: i, options: t });
    }
  }
  function o() {
    n && (clearTimeout(n), (n = null));
  }
  function c() {
    (e.value = !0), (s.value = !1), o();
  }
  return (
    m.onBeforeUnmount(function () {
      o();
    }),
    {
      isMarketGrayUser: s,
      waitingFetchMarketGray: e,
      initIsGrayMarket: function (l) {
        return p(
          this,
          null,
          i().mark(function u() {
            return i().wrap(
              function (u) {
                for (;;)
                  switch ((u.prev = u.next)) {
                    case 0:
                      if (((u.prev = 0), l.isAccountOpen)) {
                        u.next = 3;
                        break;
                      }
                      return u.abrupt("return", void (e.value = !1));
                    case 3:
                      if (
                        (c(),
                        a(f(h({}, l), { type: "market" })),
                        (u.t0 = e.value),
                        !u.t0)
                      ) {
                        u.next = 9;
                        break;
                      }
                      return (
                        (u.next = 9),
                        (function (a) {
                          return p(
                            this,
                            null,
                            i().mark(function c() {
                              var l, u, d, h;
                              return i().wrap(
                                function (i) {
                                  for (;;)
                                    switch ((i.prev = i.next)) {
                                      case 0:
                                        if (
                                          ((i.prev = 0),
                                          (n = setTimeout(function () {
                                            (e.value = !1),
                                              o(),
                                              r({
                                                retcode: "FETCH_GRAY_TIMEOUT",
                                                options: a,
                                              });
                                          }, 3e3)),
                                          (l = a.market.toUpperCase()),
                                          (u = W(a.dealercode)[
                                            "grayID_".concat(l)
                                          ]),
                                          (d = W(a.dealercode)[
                                            "support_".concat(l)
                                          ]),
                                          u)
                                        ) {
                                          i.next = 5;
                                          break;
                                        }
                                        return i.abrupt(
                                          "return",
                                          ((s.value = !!d), void (e.value = !1))
                                        );
                                      case 5:
                                        return (i.next = 7), t.judgeGrayUser(u);
                                      case 7:
                                        (h = i.sent),
                                          e.value && (s.value = h),
                                          (i.next = 14);
                                        break;
                                      case 11:
                                        (i.prev = 11),
                                          (i.t0 = i.catch(0)),
                                          e.value && (s.value = !1),
                                          r({ error: i.t0, options: a });
                                      case 14:
                                        return (
                                          (i.prev = 14),
                                          (e.value = !1),
                                          o(),
                                          i.finish(14)
                                        );
                                      case 17:
                                      case "end":
                                        return i.stop();
                                    }
                                },
                                c,
                                null,
                                [[0, 11, 14, 17]]
                              );
                            })
                          );
                        })(l)
                      );
                    case 9:
                      u.next = 14;
                      break;
                    case 11:
                      (u.prev = 11),
                        (u.t1 = u.catch(0)),
                        (e.value = !1),
                        r({ error: u.t1, options: l });
                    case 14:
                    case "end":
                      return u.stop();
                  }
              },
              u,
              null,
              [[0, 11]]
            );
          })
        );
      },
      releaseGrayMarketWaitingFlag: a,
      resetNewMarketGrayState: c,
    }
  );
}
var tt = m.useBrokerInfo(),
  et = tt.hasBind,
  it = tt.shouldShowTradeEmbeddedComp,
  st = tt.highestPriorityDealer,
  nt = tt.isDataFetched,
  rt = tt.embeddedTradeMode,
  at = tt.canSwitchTradeMode,
  ot = getApp().globalData;
G = {
  12800: { support_BJ: !0, support_NQ: !0, support_HK: !0, support_2: !0 },
  10100: { support_BJ: !0, support_NQ: !0, support_HK: !0, support_2: !0 },
  10800: { support_BJ: !0, support_NQ: !0, support_HK: !0, support_2: !0 },
  15900: {
    support_BJ: !0,
    support_NQ: !0,
    grayID_NQ: "9888039125",
    grayID_BJ: "5275987313",
    support_HK: !1,
    support_2: !1,
  },
};
var ct = {
  options: { styleIsolation: "shared" },
  components: {
    TopBar: function () {
      return "./@tencent/wzq-detail-topbar/topBar.js";
    },
    QuotationBar: function () {
      return "./@tencent/stock-hq-quotation/QuotationBar.js";
    },
    MiniQuotation: function () {
      return "./@tencent/stock-detail-quotation/Quotation.js".then(function (
        t
      ) {
        return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1xdW90YXRpb24vUXVvdGF0aW9uLnZ1ZQ;
      });
    },
    ChartWrapper: function () {
      return "./components/ChartWrapper.js".then(function (t) {
        return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL3F1b3RlL2NvbXBvbmVudHMvQ2hhcnRXcmFwcGVyLnZ1ZQ;
      });
    },
    BottomBar: function () {
      return "./@tencent/st-quote-bottom-bar/components/bottomBar/pro.js";
    },
    MergeNews: function () {
      return "./@tencent/wzq-lite-mergenews/MergeNewsZxg.js";
    },
    NewsPlate: function () {
      return "./@tencent/wzq-lite-mergenews/NewsPlate.js";
    },
    Info: function () {
      return "./@tencent/wzq-lite-mergenews/Info.js";
    },
    Notice: function () {
      return "./@tencent/wzq-lite-mergenews/Notice.js";
    },
    Report: function () {
      return "./@tencent/wzq-lite-mergenews/Report.js";
    },
    Asssets: function () {
      return "../detailSbg/@tencent/wzq-detail-assets/index.js";
    },
    PlateRank: function () {
      return "../detailSbg/@tencent/wzq-detail-indexrank/pages/PlateRankListClassic/mp.js";
    },
    IndexRank: function () {
      return "../detailSbg/@tencent/wzq-detail-indexrank/RankList.js";
    },
    Finance: function () {
      return "../detailSbg/@tencent/wzq-detail-finance/Finance.js".then(
        function (t) {
          return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1kZXRhaWwtZmluYW5jZS9GaW5hbmNlLnZ1ZQ;
        }
      );
    },
    BriefDebt: function () {
      return "../detailSbg/@tencent/wzq-detail-brief/BriefDebt.js";
    },
    BriefFund: function () {
      return "../detailSbg/@tencent/stock-detail-brief/BriefFund.js";
    },
    BriefETF: function () {
      return "../detailSbg/@tencent/wzq-detail-brief/BriefETF.js".then(
        function (t) {
          return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1kZXRhaWwtYnJpZWYvQnJpZWZFVEYudnVl;
        }
      );
    },
    BriefHS: function () {
      return "../detailSbg/@tencent/stock-detail-brief/BriefHS.js";
    },
    BriefHK: function () {
      return "../detailSbg/@tencent/stock-detail-brief/BriefHK.js";
    },
    BriefUS: function () {
      return "../detailSbg/@tencent/stock-detail-brief/BriefUS.js";
    },
    BriefWarran: function () {
      return "../detailSbg/@tencent/stock-detail-brief/BriefWarran.js";
    },
    BriefContract: function () {
      return "../detailSbg/@tencent/wzq-detail-brief/BriefContract.js";
    },
    BriefBJ: function () {
      return "../detailSbg/@tencent/wzq-detail-brief/BriefBJ.js";
    },
    Diagnose: function () {
      return "../detailSbg/@tencent/stock-detail-analyse/Diagnose.js".then(
        function (t) {
          return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1hbmFseXNlL0RpYWdub3NlLnZ1ZQ;
        }
      );
    },
    Mine: function () {
      return "../detailSbg/@tencent/stock-detail-minesweeper/Index.js";
    },
    AttentionPoint: function () {
      return "../detailSbg/@tencent/stock-detail-attention/AttentionPoint.js".then(
        function (t) {
          return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1hdHRlbnRpb24vQXR0ZW50aW9uUG9pbnQudnVl;
        }
      );
    },
    BondBar: function () {
      return "./@tencent/wzq-light-quotation/BondBar.js";
    },
    NewsBar: function () {
      return "./@tencent/wzq-hq-chart/components/NewsBar.js";
    },
    TipsInfo: function () {
      return "./@tencent/wzq-hq-chart/components/TipsInfo.js";
    },
    SmallFund: function () {
      return "./@tencent/stock-deatai-zijin-bar/Fund.js";
    },
    InnerFund: function () {
      return "../detailSbg/@tencent/stock-detail-innerfund/Index.js";
    },
    PlateFund: function () {
      return "../detailSbg/@tencent/stock-detail-innerfund/PlateFunds.js";
    },
    HalfScreenTradeShell: function () {
      return "./components/HalfTradeScreenShell.js".then(function (t) {
        return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL3F1b3RlL2NvbXBvbmVudHMvSGFsZlRyYWRlU2NyZWVuU2hlbGwudnVl;
      });
    },
    HalfChartScreenShell: function () {
      return "./components/HalfChartScreenShell.js".then(function (t) {
        return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL3F1b3RlL2NvbXBvbmVudHMvSGFsZkNoYXJ0U2NyZWVuU2hlbGwudnVl;
      });
    },
    ToggleBroker: function () {
      return "./components/ToggleBroker.js";
    },
    Task: function () {
      return "../asyncCom/@tencent/st-act-task/components/task/index.js".then(
        function (t) {
          return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC10YXNrL2NvbXBvbmVudHMvdGFzay9pbmRleC52dWU;
        }
      );
    },
    MarqueeWzqxcx: function () {
      return "../asyncCom/@tencent/stock-base-marquee/Index.js".then(function (
        t
      ) {
        return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWJhc2UtbWFycXVlZS9JbmRleC52dWU;
      });
    },
    MarqueeDialogAdv: function () {
      return "../asyncCom/@tencent/stock-base-marquee/components/dialogAdv.js";
    },
    FollowGuide: function () {
      return "../asyncCom/components/followGuide.js";
    },
    SubscribeGuide: function () {
      return "../asyncCom/components/subscribeGuide.js";
    },
    MainSwitchGuide: function () {
      return "./components/mainSwitchGuide.js";
    },
    ShareButton: function () {
      return "./components/ShareButton.js";
    },
    BottomBanner: function () {
      return "../asyncCom/@tencent/st-act-premotes/src/components/delivery/GlobalBottomBanner/index.js";
    },
    DeliveryGuideSubscribe: function () {
      return "../asyncCom/@tencent/st-delivery-guide-subscribe/src/index.js";
    },
    ThirteenAnniversaryTask: function () {
      return "../searchAi/@tencent/st-act-ai-activity-plugins/task/index.js".then(
        function (t) {
          return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC1haS1hY3Rpdml0eS1wbHVnaW5zL3Rhc2svaW5kZXgudnVl;
        }
      );
    },
    PrivacyPolicyModal: function () {
      return "../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
    },
    mpBubble: function () {
      return "../asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.js";
    },
    miniApply: function () {
      return "./@tencent/st-mini-apply/src/index.js";
    },
    etfRecommend: function () {
      return "./@tencent/st-eft-recommend/src/mp.js";
    },
    comEdit: function () {
      return "../commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.js";
    },
    FundETF: function () {
      return "../detailSbg/@tencent/wzq-lite-etf-fund/FundETF.js".then(
        function (t) {
          return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1saXRlLWV0Zi1mdW5kL0Z1bmRFVEYudnVl;
        }
      );
    },
    HalfScreenAiEntry: function () {
      return "../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
    },
    CenterBubble: function () {
      return "./components/CenterBubble.js";
    },
    preloadComment: function () {
      return "../comment/empty.js";
    },
  },
  mixins: [w.deliveryMixin, g.privacy, q, I, z],
  provide: function () {
    return {
      hqBridge: this.hqBridge,
      stockBridge: m.StockBridge,
      TradeFunc: m.sdkBridge,
      hqWSHelper: k.hqWSHelper,
      prefetch: m.Prefetch,
      shouldShowTradeEmbedded: this.shouldShowTradeEmbedded,
      fontSkin: "west",
      handleDelistedStockTrade: this.handleDelistedStockTrade,
    };
  },
  setup: function () {
    var t = this,
      e = (function () {
        var t = this,
          e = m.getCurrentInstance().proxy || m.getCurrentInstance(),
          s = m.ref(""),
          n = m.ref(0),
          r = m.ref(null),
          a = m.ref([]),
          o = "",
          c = 0,
          l = function () {
            return p(
              t,
              null,
              i().mark(function t() {
                var s,
                  n,
                  r,
                  a,
                  o,
                  c,
                  l,
                  u,
                  d,
                  h,
                  f,
                  p,
                  k,
                  g,
                  v,
                  T,
                  w,
                  S,
                  x,
                  B,
                  C,
                  M,
                  _;
                return i().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        for (g in ((n =
                          (null == (s = e.$refs) ? void 0 : s.smallfunRef) ||
                          {}),
                        (r = n.listData),
                        (a = n.inflowText),
                        (o = n.persentVal),
                        (c = n.stockType),
                        (l = n.scode),
                        (u = n.type),
                        (d = n.stockName),
                        (h = n.unit),
                        (f = n.isindex),
                        (p = {
                          scode: l,
                          market: u,
                          stockName: d,
                          unit: h,
                          priceFixed: 2,
                          isIndex: f ? "1" : "",
                          isFund: b.utils.isFund(c) ? "1" : "",
                          type: u,
                        }),
                        (k = []),
                        p))
                          (v = "".concat(g, "=").concat(p[g])), k.push(v);
                        return (
                          (T = k.join("&")),
                          (w =
                            "https://wzq.tenpay.com/mp/v2/index.html#/funds_analysis/"
                              .concat(
                                b.utils.isHSMarket(u) ? "hs_" : "",
                                "index.shtml?"
                              )
                              .concat(T)),
                          (S = "/pages/additional/webview/index?url=".concat(
                            encodeURIComponent(w),
                            "&stat_data=OYq00p000h150"
                          )),
                          (x = "「"
                            .concat(d, "」主力资金净流入")
                            .concat(a, ",主力占比")
                            .concat(o.main ? "".concat(o.main, "%") : "-")),
                          (B = [
                            {
                              type: "image",
                              url: "https://st.gtimg.com/design/a84ea806c0d22172d0c7916df1fa90b7.png",
                              width: 480,
                              height: 384,
                              x: 0,
                              y: 0,
                            },
                            {
                              type: "text",
                              text: "资金流向",
                              color: "#262E40",
                              fontSize: 32,
                              x: 24,
                              y: 30,
                            },
                            {
                              type: "text",
                              text: m
                                .dayjs(Date.now())
                                .format("YYYY-MM-DD HH:mm"),
                              color: "rgba(38, 46, 64, .8)",
                              fontWeight: "normal",
                              fontSize: 20,
                              x: 164,
                              y: 36,
                            },
                            {
                              type: "text",
                              text: "主力资金净流入:",
                              color: "#262E40",
                              fontSize: 24,
                              fontWeight: "normal",
                              x: 69,
                              y: 112,
                            },
                            {
                              type: "text",
                              text: "".concat(a),
                              color:
                                -1 === a.indexOf("-") ? "#e63535" : "#1CAA3C",
                              fontSize: 32,
                              x: 261,
                              y: 112,
                            },
                            {
                              type: "image",
                              url: "https://st.gtimg.com/design/2a39a61e3c2097175c373ea1da8ee543.png",
                              width: 18,
                              height: 6,
                              x: 259,
                              y: 224,
                            },
                            {
                              type: "image",
                              url: "https://st.gtimg.com/design/38e5e253fb46435b292b5b1c19df0165.png",
                              width: 18,
                              height: 6,
                              x: 259,
                              y: 272,
                            },
                            {
                              type: "text",
                              text: "主力占比",
                              color: "#7A8499",
                              fontSize: 20,
                              fontWeight: "normal",
                              x: 285,
                              y: 220,
                            },
                            {
                              type: "text",
                              text: o.main ? "".concat(o.main, "%") : "-",
                              color: "#262E40",
                              fontSize: 20,
                              x: 378,
                              y: 220,
                            },
                            {
                              type: "text",
                              text: "散户占比",
                              color: "#7A8499",
                              fontSize: 20,
                              fontWeight: "normal",
                              x: 285,
                              y: 268,
                            },
                            {
                              type: "text",
                              text: o.retail ? "".concat(o.retail, "%") : "-",
                              color: "#262E40",
                              fontSize: 20,
                              x: 378,
                              y: 268,
                            },
                          ]),
                          (C = 1.51 * Math.PI),
                          (M = 0),
                          (_ = 1.98 * Math.PI),
                          r.forEach(function (t, e) {
                            (M =
                              (C = 0 === e ? C : M) +
                              _ * t.percent * 0.01 * 0.99),
                              B.push({
                                type: "circle",
                                start: C,
                                end: M,
                                roundRadius: 65,
                                x: 149,
                                y: 250,
                                lineWidth: 30,
                                color: t.color,
                              }),
                              (1 !== e && 3 !== e) ||
                                ((M = (C = M) + 2 * Math.PI * 0.01),
                                B.push({
                                  type: "circle",
                                  start: C,
                                  end: M,
                                  roundRadius: 65,
                                  x: 149,
                                  y: 250,
                                  lineWidth: 30,
                                  color: "white",
                                }));
                          }),
                          (t.t0 = x),
                          (t.t1 = S),
                          (t.next = 10),
                          y.ShareUtil.renderToImage(B)
                        );
                      case 10:
                        return (
                          (t.t2 = t.sent),
                          t.abrupt("return", {
                            title: t.t0,
                            path: t.t1,
                            imageUrl: t.t2,
                          })
                        );
                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          },
          u = function () {
            return p(
              t,
              null,
              i().mark(function t() {
                var s, n, r, a, l, u, d, h, f, p, b, k, g, v, T, w, S, x;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (d =
                              (null == (s = e.$refs) ? void 0 : s.fund) || {}),
                            (h = d.stockName),
                            (f = d.todayFundFlow),
                            (p = d.activeFundTab),
                            (b = d.unit),
                            (k = "今日" === p),
                            (g =
                              (null ==
                              (r =
                                null == (n = d.$refs) ? void 0 : n.historyTrend)
                                ? void 0
                                : r.dateList) || []),
                            (v =
                              null ==
                              (l =
                                null == (a = d.$refs) ? void 0 : a.historyTrend)
                                ? void 0
                                : l.showAvgInHistoryLine),
                            (T = "「"
                              .concat(h, "」主力资金净流入")
                              .concat(f.mainNetIn)
                              .concat(
                                1e8 === b ? "亿" : "万元",
                                "，净流入额市场排名"
                              )
                              .concat(
                                (null == (u = f.summary) ? void 0 : u.rank) ||
                                  "--"
                              )),
                            (w = getCurrentPages()),
                            (S = "/"
                              .concat(w[w.length - 1].route, "?market=")
                              .concat(e.market, "&scode=")
                              .concat(
                                e.scode,
                                "&stat_data=O0M00p000h151&tab=fund"
                              )),
                            (t.prev = 1),
                            (t.t0 = {
                              type: "image",
                              url: "https://st.gtimg.com/design/a84ea806c0d22172d0c7916df1fa90b7.png",
                              width: 480,
                              height: 384,
                              x: 0,
                              y: 0,
                            }),
                            (t.t1 = {
                              type: "text",
                              text: v ? "主力资金-行业平均对比" : "主力资金",
                              color: "#262E40",
                              fontSize: 32,
                              x: 24,
                              y: 30,
                            }),
                            (t.t2 = {
                              type: "text",
                              text: k ? "" : "(".concat(p, ")"),
                              color: "rgba(38, 46, 64, .8)",
                              fontSize: 20,
                              x: v ? 368 : 164,
                              y: 36,
                            }),
                            (t.next = 7),
                            y.ShareUtil.canvasToTempFilePath(o, {
                              canvasWidth: 400,
                              canvasHeight: c,
                            })
                          );
                        case 7:
                          return (
                            (t.t3 = t.sent.tempFilePath),
                            (t.t4 = !1),
                            (t.t5 = c),
                            (t.t6 = 279 - c + (k ? 6 : 0)),
                            (t.t7 = {
                              type: "image",
                              url: t.t3,
                              time: t.t4,
                              width: 400,
                              height: t.t5,
                              x: 40,
                              y: t.t6,
                            }),
                            (t.t8 = {
                              type: "image",
                              url: k
                                ? "https://st.gtimg.com/design/e7a5b5c208a6c37dc4fde2712d826f38.png"
                                : "https://st.gtimg.com/design/d7d6cd1f537dbb3f57208cd7ea1e65fe.png",
                              width: k ? 168 : 282,
                              height: 22,
                              x: k ? 156 : 99,
                              y: 314,
                            }),
                            (x = [t.t0, t.t1, t.t2, t.t7, t.t8]),
                            k
                              ? x.push(
                                  {
                                    type: "image",
                                    url: "https://st.gtimg.com/design/7ff486173911a42a1fa6d04a4c0116b6.png",
                                    width: 400,
                                    height: 1,
                                    x: 40,
                                    y: 113,
                                  },
                                  {
                                    type: "text",
                                    text: m
                                      .dayjs(Date.now())
                                      .format("YYYY-MM-DD"),
                                    color: "rgba(38, 46, 64, .8)",
                                    fontWeight: "normal",
                                    fontSize: 20,
                                    x: 164,
                                    y: 36,
                                  },
                                  {
                                    type: "text",
                                    text: "净流入(万元)",
                                    color: "#7A8499",
                                    fontWeight: "normal",
                                    fontSize: 12,
                                    x: 40,
                                    y: 120,
                                  }
                                )
                              : (v ||
                                  x.push({
                                    type: "image",
                                    url: "https://st.gtimg.com/design/7ff486173911a42a1fa6d04a4c0116b6.png",
                                    width: 400,
                                    height: 1,
                                    x: 40,
                                    y: 285,
                                  }),
                                g.forEach(function (t, e) {
                                  x.push({
                                    type: "text",
                                    text: t,
                                    color: "#7A8499",
                                    fontWeight: "normal",
                                    fontSize: 14,
                                    x: 40 + 90 * e,
                                    y: 292,
                                  });
                                })),
                            (t.t9 = T),
                            (t.t10 = S),
                            (t.next = 19),
                            y.ShareUtil.renderToImage(x)
                          );
                        case 19:
                          return (
                            (t.t11 = t.sent),
                            t.abrupt("return", {
                              title: t.t9,
                              path: t.t10,
                              imageUrl: t.t11,
                            })
                          );
                        case 23:
                          (t.prev = 23),
                            (t.t12 = t.catch(1)),
                            H.mpReporter.reportEvent(
                              "MONITOR-STOCKDETAIL-CARD-SHARE-ERROR",
                              { ext3: t.t12.message }
                            );
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 23]]
                );
              })
            );
          },
          d = function () {
            s.value = "";
          };
        return {
          shareBtnY: n,
          shareTimer: r,
          cardShareData: a,
          longPressModule: s,
          longPress: function (r, a) {
            return p(
              t,
              null,
              i().mark(function t() {
                var o, c, l, u;
                return i().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.getTabBarTop(),
                          (s.value =
                            r ||
                            (null ==
                            (c =
                              null == (o = null == a ? void 0 : a.target)
                                ? void 0
                                : o.dataset)
                              ? void 0
                              : c.ref)),
                          (n.value =
                            ((null == (l = null == a ? void 0 : a.currentTarget)
                              ? void 0
                              : l.offsetTop) ||
                              (null == (u = null == a ? void 0 : a.target)
                                ? void 0
                                : u.offsetTop)) +
                            ("smallfunRef" !== s.value ? e.tabBarTop + 45 : 0) -
                            20),
                          m.StockBridge.report(
                            "hq.stock_detail.card_longpress",
                            { card: s.value }
                          );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          },
          clearPress: d,
          canvasInfo: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = t.cNode,
              i = t.height;
            (o = e), (c = i);
          },
          onClickShare: function () {
            var t,
              e,
              i =
                null ==
                (t = ["smallfunRef", "fundsmain"].filter(function (t) {
                  var e;
                  return -1 !== (null == (e = s.value) ? void 0 : e.indexOf(t));
                }))
                  ? void 0
                  : t[0],
              n = { smallfunRef: l, fundsmain: u };
            try {
              a.value = null == (e = n[i]) ? void 0 : e.call(n);
            } catch (t) {}
            m.StockBridge.report("hq.stock_detail.card.sharebtn_click", {
              card: s.value,
            }),
              d();
          },
          getSmallfundShareData: l,
        };
      })(),
      s = e.shareBtnY,
      n = e.shareTimer,
      r = e.cardShareData,
      a = e.longPressModule,
      o = e.longPress,
      c = e.clearPress,
      l = e.canvasInfo,
      u = e.onClickShare;
    m.onUnmounted(function () {
      return clearTimeout(n.value);
    });
    var d = (function (t) {
        var e = m.useBrokerInfo().highestPriorityDealer,
          s = m.ref(!1),
          n = m.ref(!1);
        function r(t) {
          var e = !!(null == t ? void 0 : t.canShow);
          (s.value = e && "bandAssist" === (null == t ? void 0 : t.tool)),
            (n.value = e && "stockSignal" === (null == t ? void 0 : t.tool));
        }
        function a(e) {
          return p(
            this,
            null,
            i().mark(function s() {
              var n, r, a, o;
              return i().wrap(
                function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          m.StockBridge.mtaReport({ busi: "hq", eventName: e }),
                          (i.prev = 1),
                          (i.next = 4),
                          A()
                        );
                      case 4:
                        if ((o = i.sent).canShow) {
                          i.next = 7;
                          break;
                        }
                        return i.abrupt("return");
                      case 7:
                        if (
                          (t.showEmbeddedTrade && t.onCloseEmbeddedTrade(),
                          !o.isSubscribed)
                        ) {
                          i.next = 12;
                          break;
                        }
                        t.onOpenHalfChart(), (i.next = 14);
                        break;
                      case 12:
                        return (
                          (i.next = 14),
                          m.sdkBridge.navToBrokerPage({
                            broker: o.brokerCode,
                            path: o.introPath,
                          })
                        );
                      case 14:
                        i.next = 19;
                        break;
                      case 16:
                        (i.prev = 16),
                          (i.t0 = i.catch(1)),
                          null ==
                            (a =
                              null ==
                              (r =
                                null == (n = getApp().globalData)
                                  ? void 0
                                  : n.mpReporter)
                                ? void 0
                                : r.reportEvent) ||
                            a.call(r, "mon_chart_click_aivolatile_error", {
                              ext3: JSON.stringify(i.t0),
                            });
                      case 19:
                      case "end":
                        return i.stop();
                    }
                },
                s,
                null,
                [[1, 16]]
              );
            })
          );
        }
        return {
          canShowAiVolatile: s,
          canShowSupportPressureSignal: n,
          fetchHalfChartEntry: function () {
            return p(
              this,
              null,
              i().mark(function t() {
                var s, n, a, o;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.t0 = r), (t.next = 4), A();
                        case 4:
                          (t.t1 = t.sent), (0, t.t0)(t.t1), (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t2 = t.catch(0)),
                            null ==
                              (o =
                                null ==
                                (n =
                                  null == (s = getApp().globalData)
                                    ? void 0
                                    : s.mpReporter)
                                  ? void 0
                                  : n.reportEvent) ||
                              o.call(n, "mon_chart_quote_getsettingfail", {
                                ext3: JSON.stringify(t.t2),
                                ext6: null == (a = e.value) ? void 0 : a.code,
                              }),
                            r(null);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 8]]
                );
              })
            );
          },
          refreshHalfChartEntryIfNeeded: function () {
            return p(
              this,
              null,
              i().mark(function s() {
                var n, a, o, c;
                return i().wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          if (
                            ((i.prev = 0),
                            (a = null == (n = e.value) ? void 0 : n.code))
                          ) {
                            i.next = 4;
                            break;
                          }
                          return i.abrupt("return");
                        case 4:
                          if (
                            ((o = "broker_usersetting_force_refresh_".concat(
                              a
                            )),
                            "1" === m.index.getStorageSync(o))
                          ) {
                            i.next = 7;
                            break;
                          }
                          return i.abrupt("return");
                        case 7:
                          return (
                            m.index.removeStorageSync(o), (i.next = 10), A()
                          );
                        case 10:
                          r((c = i.sent)),
                            !t.showHalfChart ||
                              ((null == c ? void 0 : c.canShow) &&
                                (null == c ? void 0 : c.isSubscribed)) ||
                              t.onCloseHalfChart(),
                            (i.next = 16);
                          break;
                        case 14:
                          (i.prev = 14), (i.t0 = i.catch(0));
                        case 16:
                        case "end":
                          return i.stop();
                      }
                  },
                  s,
                  null,
                  [[0, 14]]
                );
              })
            );
          },
          onClickAiVolatile: function () {
            return a("stock_page_citic_ai_analysis_click");
          },
          onClickSupportPressureSignal: function () {
            return a("citic_build_invest_signal_tool_click");
          },
        };
      })(m.getCurrentInstance().proxy),
      f = m.ref({ price: "-", status: !0 }),
      k = X({
        judgeGrayUser: function (e) {
          return p(
            t,
            null,
            i().mark(function t() {
              var s;
              return i().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (s = m.wx$1.getStorageSync("_qluin")),
                        (t.next = 3),
                        m.judgeGrayUser(s, e)
                      );
                    case 3:
                      return t.abrupt("return", t.sent);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
        },
        reportEvent: function (t, e) {
          ot.mpReporter.reportEvent(t, e);
        },
      }),
      g = k.isMarketGrayUser,
      v = k.waitingFetchMarketGray,
      T = k.initIsGrayMarket,
      w = k.resetNewMarketGrayState;
    return h(
      {
        isMarketGrayUser: g,
        waitingFetchMarketGray: v,
        initIsGrayMarket: T,
        resetNewMarketGrayState: w,
        shareBtnY: s,
        shareTimer: n,
        cardShareData: r,
        longPressModule: a,
        longPress: o,
        clearPress: c,
        canvasInfo: l,
        onClickShare: u,
        embeddedPrice: f,
        PlatformEnum: C,
        embeddedTradeMode: rt,
        canSwitchTradeModeConfig: at,
      },
      d
    );
  },
  data: function () {
    var t = new m.HQBridge(),
      e = ot.skin || m.StockBridge.getStorage("user/skin");
    return {
      hqBridge: t,
      query: null,
      dataReady: !1,
      dataLazyReady: !1,
      isPageHidden: !1,
      showTabBar: !0,
      skin: ["black", "dark"].includes(e) ? "black" : "white",
      stockName: "",
      topBarHeight: 0,
      scrollTop: 0,
      topBarShowPrice: !1,
      stockOverView: {},
      tradeState: {},
      stockStatus: "",
      tabs: {
        info: {
          name: "资讯",
          show: !1,
          visited: !1,
          stat: "hq.stock_detail.info_tab",
        },
        news: { name: "新闻", show: !1, visited: !1, stat: "stockinfo.news" },
        cfg: {
          name: "成份股",
          show: !1,
          visited: !1,
          stat: "hq.detail.cfg.tab.click",
        },
        north: {
          name: "北向",
          show: !1,
          visited: !1,
          stat: "hq.index_detail.north_tab_click",
        },
        south: {
          name: "南向",
          show: !1,
          visited: !1,
          stat: "hq.index_detail.south_tab_click",
        },
        attention: {
          name: "看点",
          show: !1,
          visited: !1,
          stat: "hq.plate.attention_tab",
        },
        etfFund: {
          name: "资金",
          show: !1,
          visited: !1,
          stat: "hq.stock_detail.fundtab_click",
        },
        brief: { name: "简况", show: !1, visited: !1, stat: "stockinfo.brief" },
        contract: {
          name: "合约资料",
          show: !1,
          visited: !1,
          stat: "hq.stock_detail.contract_tab",
        },
        assets: {
          name: "持仓",
          show: !1,
          visited: !1,
          stat: "stockinfo.assets",
        },
        diagnose: {
          name: "分析",
          show: !1,
          visited: !1,
          stat: "stock_detail.zg",
        },
        mine: {
          name: "扫雷",
          show: !1,
          visited: !1,
          stat: "hq.stock_detail.minesweeper",
        },
        finance: {
          name: "财务",
          show: !1,
          visited: !1,
          stat: "stockinfo.finace",
        },
        notice: {
          name: "公告",
          show: !1,
          visited: !1,
          stat: "stockinfo.notice",
        },
        report: {
          name: "研报",
          show: !1,
          visited: !1,
          stat: "stockinfo.report",
        },
        innerfund: {
          name: "ETF",
          show: !1,
          visited: !1,
          stat: "stockinfo.fund_list",
        },
        funds: {
          name: "资金",
          show: !1,
          visited: !1,
          stat: "hq.plate.funds_tab",
        },
      },
      selectTab: "info",
      tabLoading: !0,
      tabBarFixed: !1,
      tabStatus: m.COMMON_PAGE_STATUS.LOADING,
      swiperHeight: 0,
      currentSwiper: 0,
      intro: "",
      stockType: "",
      compositeStatus: "",
      indexRankType: "",
      mpscrollTop: 0,
      isSupportChart: !0,
      isTrading: !1,
      tradeMounted: !1,
      showToggleBrokerPopup: !1,
      queryTabKey: "",
      tabBarHeight: 0,
      isLoadTrade: !1,
      showEmbeddedTrade: !1,
      embeddedEntrustType: "",
      isLoadHalfChart: !1,
      showHalfChart: !1,
      halfChartAnimate: !1,
      halfChartMounted: !1,
      embeddedHalfChartStartTime: 0,
      counterNum: 0,
      counterLimit: 10,
      showCounter: !1,
      fixTopbar: !1,
      isInitiativeTask: !1,
      showFollowGuide: !1,
      showSubscribeGuide: !1,
      showMainSwitch: !1,
      showDeliveryGuideSubscibe: !1,
      etfData: void 0,
      stockAdded: void 0,
      isFromPyq: m.Util.isFromPyq(),
      showMiniApplyFlag: !1,
      miniApplyOpenSession: 0,
      miniApplyWujiConfig: {},
      currentEtfMsg: null,
      showComEdit: !1,
      headimageurl: null,
      comEditData: {},
      isTradeFirst: !0,
      showQuotationBar: !1,
      isPageFixed: !1,
      firstCalledBrief: !0,
      screenHeight: ot.systemInfo.screenHeight,
      tradeAnimate: !1,
      showMiniQuotation: !0,
      showGoTop: !1,
      hotTalkRank: "",
      stockTag: null,
      watchPluginTimer: null,
      showBondSplit: !1,
      showNewsBar: !1,
      aiParams: {},
      aiNeedAnswer: !0,
      isAiDialogShow: !1,
      remindSubscribeInfo: null,
      showBubble: !1,
      bubbleStyle: {},
      bubbleTimer: null,
      isRaisingETF: !1,
      canPreloadComment: !1,
      canPreloadCommentTimer: null,
      showTipModal: !1,
      tipMode: "",
      tipsInfoEvent: null,
      tipLoaded: !1,
    };
  },
  computed: {
    showTradeInfo: function () {
      return this.isHS && !this.isFund && !this.isTransDebt && !this.isDebt;
    },
    fundType: function () {
      return this.isIndex ? "zs" : this.isPlate ? "plate" : "stockdetail";
    },
    isNewMarketGrayUser: function () {
      var t, e, i;
      if (!et.value)
        return (
          (i = {
            dealercode: null == (t = st.value) ? void 0 : t.code,
            market: this.market,
            stockType: this.stockType,
          }),
          !(!b.utils.isBJMarket(i.market) || !V(i)) ||
            !(!b.utils.isNQMarket(i.market) || !Y(i)) ||
            !(!b.utils.isHKMarket(i.market) || !K(i))
        );
      var s = J({
        market: this.market,
        dealercode: null == (e = st.value) ? void 0 : e.code,
        stockType: this.stockType,
      });
      return this.isMarketGrayUser && s;
    },
    market: function () {
      var t, e, i;
      return (
        (null == (t = this.query) ? void 0 : t.market) ||
        ((
          null == (i = null == (e = this.query) ? void 0 : e.scode)
            ? void 0
            : i.startsWith("5")
        )
          ? 1
          : 0)
      );
    },
    scode: function () {
      var t;
      return null == (t = this.query) ? void 0 : t.scode;
    },
    symbol: function () {
      return b.utils.getSymbol(this.market, this.scode);
    },
    isIndex: function () {
      return b.utils.isIndex(this.stockType);
    },
    isPlate: function () {
      return b.utils.isHSPlate(this.market);
    },
    isFund: function () {
      return b.utils.isFund(this.stockType);
    },
    isHS: function () {
      return b.utils.isHSMarket(this.market);
    },
    isTransDebt: function () {
      return b.utils.isTransferableDebt(this.stockType);
    },
    isHK: function () {
      return b.utils.isHKMarket(this.market);
    },
    isUS: function () {
      return b.utils.isUSMarket(this.market);
    },
    isETF: function () {
      return "ETF" === this.stockType;
    },
    isFJ: function () {
      return "FJ" === this.stockType;
    },
    isWarrants: function () {
      return b.utils.isWarrants(this.stockType);
    },
    isFutures: function () {
      return b.utils.isFutures(this.market);
    },
    isDebt: function () {
      return (
        b.utils.isDebt(this.stockType) || b.utils.isNationalDebt(this.stockType)
      );
    },
    isBJ: function () {
      return b.utils.isBJMarket(this.market);
    },
    isBjEtfRaising: function () {
      return this.isBJ && this.isETF && this.isRaisingETF;
    },
    isNq: function () {
      return b.utils.isNQMarket(this.market);
    },
    isGGT: function () {
      if (!this.isGGTEnable) return !1;
      var t = this.stockTag || {},
        e = t.hgt,
        i = t.sgt;
      return "1" === e || "1" === i;
    },
    isGGTEnable: function () {
      var t, e;
      return null ==
        (e = m.brokerFuncConfig[null == (t = st.value) ? void 0 : t.code])
        ? void 0
        : e.supportGGTTrade;
    },
    isCanMocktrade: function () {
      return (
        b.utils.isAMarket(this.stockType) ||
        b.utils.isChuangYeStock(this.stockType) ||
        b.utils.isKeChuangStock(this.stockType) ||
        "ETF" === this.stockType
      );
    },
    isAiVolatileSupportedStockType: function () {
      return (
        b.utils.isAMarket(this.stockType) ||
        b.utils.isChuangYeStock(this.stockType) ||
        b.utils.isKeChuangStock(this.stockType) ||
        "ETF" === this.stockType
      );
    },
    formattedCode: function () {
      return b.utils.trimScode(this.scode);
    },
    topBarsHeight: function () {
      return this.topBarHeight + this.tabBarHeight;
    },
    showTabs: function () {
      var t = this;
      return (
        !(this.isNq && this.isIndex) &&
        this.tabs &&
        Object.keys(this.tabs).filter(function (e) {
          return t.tabs[e].show;
        }).length
      );
    },
    formattedSymbol: function () {
      if (b.utils.isUSMarket(this.market)) {
        var t = b.utils.trimScode(this.symbol);
        return b.utils.isIndex(this.stockType) ? "us.".concat(t.slice(2)) : t;
      }
      return this.symbol;
    },
    miniApplyWuji: function () {
      return this.isHK || this.isUS;
    },
    watchBrokerMarket: function () {
      var t;
      return ""
        .concat(null == (t = st.value) ? void 0 : t.code, ".")
        .concat(this.market, ".")
        .concat(et.value);
    },
    logoImg: function () {
      return "black" === this.skin ? m.tencentLogoBlack : m.tencentLogoWhite;
    },
    showBondBar: function () {
      return (
        b.utils.isHSMarket(this.market) && !b.utils.isIndex(this.stockType)
      );
    },
    isPCWeixin: function () {
      var t, e;
      return (
        (null == (e = null == (t = getApp().globalData.detect) ? void 0 : t.env)
          ? void 0
          : e.IS_PCWEIXIN) || !1
      );
    },
    tradeAmount: function () {
      return b.utils.isKeChuangStock(this.stockType)
        ? 1
        : b.utils.isTransferableDebt(this.stockType)
        ? 10
        : b.utils.isBJMarket(this.market) ||
          b.utils.isNQMarket(this.market) ||
          b.utils.isHSMarket(this.market) ||
          b.utils.isCSIndex(this.market)
        ? 100
        : 1;
    },
    brokerCode: function () {
      return st.value.code || "";
    },
    brokerName: function () {
      var t;
      return (null == (t = m.broker[this.brokerCode]) ? void 0 : t.name) || "";
    },
    isDataFetched: function () {
      return nt;
    },
    canSwitchTradeMode: function () {
      return (
        !!this.canSwitchTradeModeConfig &&
        this.isHS &&
        (b.utils.isAMarket(this.stockType) || this.isFund)
      );
    },
  },
  watch: {
    showEmbeddedTrade: function (t) {
      this.setEmbeddedInQuoteStatus(t);
    },
    dataLazyReady: function (t) {
      var e = this;
      t &&
        (this.tradeTimeout = setTimeout(
          function () {
            return p(
              e,
              null,
              i().mark(function t() {
                var e = this;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.t0 = !this.isLoadTrade), !t.t0)) {
                            t.next = 5;
                            break;
                          }
                          return (t.next = 4), this.shouldShowTradeEmbedded();
                        case 4:
                          t.t0 = t.sent;
                        case 5:
                          if (((t.t1 = t.t0), !t.t1)) {
                            t.next = 8;
                            break;
                          }
                          (this.isLoadTrade = !0),
                            this.isTradeFirst &&
                              this.$nextTick(function () {
                                e.onOpenEmbeddedTrade(
                                  e.query.entrust_type || "buy"
                                );
                              });
                        case 8:
                          this.fetchHalfChartEntry(),
                            this.onYYTaskEvent(this.query),
                            clearTimeout(this.tradeTimeout);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
          this.isTradeFirst ? 0 : 1500
        ));
    },
    miniApplyWuji: function (t) {
      return p(
        this,
        null,
        i().mark(function e() {
          var s, n;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!t) {
                      e.next = 6;
                      break;
                    }
                    return (
                      (e.next = 3),
                      m.Wuji.get({
                        appid: "act",
                        schemaid: "mini_apply_config",
                        filter: encodeURIComponent('id="mpwzq_quote_hkus"'),
                      })
                    );
                  case 3:
                    (s = e.sent),
                      (n = s.data),
                      (this.miniApplyWujiConfig = (n && n[0]) || {
                        slot_config: {},
                        account_stat: {},
                      });
                  case 6:
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
    stockAdded: function (t, e) {
      var i;
      void 0 !== e &&
        (this.setBottomBarCount("added", e ? "sub" : "add"),
        t &&
          (null == (i = m.StockBridge) || i.busEmit("growth-quote-addChoose")));
    },
    premoteMixin: function (t) {
      var e,
        i,
        s,
        n,
        r = this;
      if (
        (t &&
          t.BubbleMpwzqAll &&
          this.query.stat_data &&
          this.remindBubble(this.query.stat_data),
        t &&
          t.BubbleMpwzqAll &&
          setTimeout(function () {
            var t;
            null == (t = r.hqBridge) || t.busEmit("mp-bubble-show-stockshare");
          }, 300),
        this.isPCWeixin)
      ) {
        var a =
            null ==
            (n =
              null ==
              (s =
                null ==
                (i =
                  null == (e = null == t ? void 0 : t.Marquee)
                    ? void 0
                    : e.ad_list)
                  ? void 0
                  : i[0])
                ? void 0
                : s.ext_properties)
              ? void 0
              : n.horse_lamps,
          o = {
            match: "港交所规定，港股基础行情需手动下拉刷新",
            replace: "港交所规定，行情需手动点击刷新（见时间栏）",
          };
        a &&
          a.forEach(function (t) {
            (t.name = t.name.includes(o.match) ? o.replace : t.name),
              (t.text = t.text.includes(o.match) ? o.replace : t.text);
          });
      }
    },
    watchBrokerMarket: function (t) {
      var e, i;
      this.market &&
        (null == (e = st.value) ? void 0 : e.code) &&
        this.initIsGrayMarket({
          market: this.market,
          dealercode: null == (i = st.value) ? void 0 : i.code,
          isAccountOpen: et.value,
        });
    },
    isAiDialogShow: {
      handler: function (t) {
        if (this.isMp && m.wx$1.setPageStyle)
          try {
            m.wx$1.setPageStyle({ style: { overflow: t ? "hidden" : "auto" } });
          } catch (t) {}
      },
    },
  },
  onLoad: function (t) {
    var i, s, n;
    if (((this.enterTime = Date.now()), (this.isPageHidden = !1), t.scene)) {
      var r = {};
      decodeURIComponent(t.scene)
        .split("&")
        .forEach(function (t) {
          var i = t.split("="),
            s = e(i, 2),
            n = s[0],
            a = s[1];
          r[n] = a;
        }),
        (t.s = r.s);
    }
    if (t.q) {
      var a = this.getUrlParams(decodeURIComponent(t.q)),
        o = Object.keys(a);
      o.includes("s") && (t.s = a.s),
        o.includes("market") &&
          o.includes("scode") &&
          ((t.market = a.market), (t.scode = a.scode));
    }
    if (t.s || t.symbol) {
      var c = t.s || t.symbol,
        l = b.utils.splitSymbol(c),
        u = l.market,
        d = l.scode;
      (t.market = u), (t.scode = d);
    }
    if (
      (t.wxParamData && Object.assign(t, this.handleWXParamData(t.wxParamData)),
      t.stockType && (this.stockType = t.stockType),
      t.currIndex &&
        (null == (i = v.TABS[t.currIndex]) ? void 0 : i.key) &&
        (this.queryTabKey = null == (s = v.TABS[t.currIndex]) ? void 0 : s.key),
      ot.init(function () {
        m.prefetchSetting();
      }),
      (this.query = t),
      (this.isTradeFirst =
        1 == +(null == (n = this.query) ? void 0 : n.halfscreen)),
      (this.tradeAnimate = !this.isTradeFirst),
      this.isTradeFirst && (this.showMiniQuotation = !1),
      (this.systemInfo = getApp().globalData.systemInfo || {}),
      ["mac"].indexOf(this.systemInfo.platform) > -1 &&
        this.hqBridge.compareVersion(this.systemInfo.SDKVersion, "2.26.1") <
          0 &&
        (this.isSupportChart = !1),
      this.statReort(
        "hq.stock.detail.".concat(
          this.isSupportChart ? "new" : "old",
          "_chart"
        ),
        {
          sdkVersion: this.systemInfo.SDKVersion,
          platform: this.systemInfo.platform,
        }
      ),
      this.query.wxParamData && this.statReort("quote_from_wx_search"),
      t.event_id)
    ) {
      var h = {};
      (h.event_id = t.event_id),
        (h.event_date = t.event_date),
        (this.tipsInfoEvent = h),
        this.handleShowTipModal({ type: "remind" });
    }
    (this.isMoreList = !1),
      (this.canPullUp = !1),
      (this.listItemHeight = 0),
      (this.listTitleHeight = 0),
      (this.circleTimeOut = null),
      (this.showDeliveryGuideSubscibe = !1),
      m.wx$1.setBackgroundColor({ backgroundColor: "#ffffff" }),
      m.StockBridge.busOn("common-toggleAdded", this.setAddedStatus),
      m.StockBridge.busOn("common-judgeAdded", this.setAddedStatus),
      this.hqBridge.busOn("lockSwiper", this.handleLockSwiper),
      m.StockBridge.busOn("market-onClickPrice", this.onClickTransPrice),
      this.getHotTalk();
  },
  onShow: function () {
    var t, e, i, s, n, r, a, o, c, l, u, d, h, f, p, b;
    this.isPageHidden &&
      (null ==
        (e = null == (t = this.$refs.smallFund) ? void 0 : t.setPolling) ||
        e.call(t),
      null == (s = null == (i = this.$refs.cfg) ? void 0 : i.setPolling) ||
        s.call(i)),
      (null ==
      (a =
        null ==
        (r =
          null == (n = this.$refs.chartWrapper) ? void 0 : n.$refs.composition)
          ? void 0
          : r.$refs.kline)
        ? void 0
        : a.drawlineData) &&
        (null ==
          (u =
            null ==
            (l =
              null ==
              (c =
                null == (o = this.$refs.chartWrapper)
                  ? void 0
                  : o.$refs.composition)
                ? void 0
                : c.$refs.kline)
              ? void 0
              : l.queryDrawData) ||
          u.call(l, function () {}, !0)),
      (this.isPageHidden = !1),
      this.hqBridge.busOn("watchHeightChange", this.getSwiperHeight),
      this.hqBridge.busOn(
        "stockmpdetail-showLiteComEdit",
        this.showLiteComEdit
      ),
      m.StockBridge.busOn(
        "market-detail-autoHideTradePanel",
        this.autoHideTradePanel
      ),
      m.StockBridge.busOn("showAiDialog", this.showAiDialog),
      m.StockBridge.busOn("market-setting-aiVolatile", this.onClickAiVolatile),
      m.StockBridge.busOn(
        "market-setting-supportPressureSignal",
        this.onClickSupportPressureSignal
      ),
      this.refreshHalfChartEntryIfNeeded(),
      this.refresh(!1),
      m.querySubscribedByuserinfo();
    try {
      null == (h = null == (d = this.$refs) ? void 0 : d.newsCommentList) ||
        h.onMpShow();
    } catch (t) {}
    m.Util.isFromPyq() &&
      m.wx$1.showModal({
        title: "",
        content: "当前模式部分功能不可用，可点击下方“前往小程序”享受完整内容",
        showCancel: !1,
        confirmText: "我知道了",
        success: function () {},
      }),
      this.hqBridge.busOn("group-list-popup-show", this.setPageFixed),
      (null == (f = this.$refs.bottomBar) ? void 0 : f.showRemind) &&
        (null ==
          (b =
            null == (p = this.$refs.bottomBar)
              ? void 0
              : p.fetchRemindStatus) ||
          b.call(p, this.market, this.scode));
  },
  onHide: function () {
    var t, e, i, s, n, r, a, o, c, l, u, d, h, f, p, b, k;
    (this.isPageHidden = !0),
      null == (e = null == (t = this.hqBridge) ? void 0 : t.busOff) ||
        e.call(t, "watchHeightChange", this.getSwiperHeight),
      null == (s = null == (i = this.hqBridge) ? void 0 : i.busOff) ||
        s.call(i, "stockmpdetail-showLiteComEdit", this.showLiteComEdit),
      null == (r = null == (n = this.hqBridge) ? void 0 : n.busOff) ||
        r.call(n, "group-list-popup-show", this.setPageFixed),
      m.StockBridge.busOff(
        "market-detail-autoHideTradePanel",
        this.autoHideTradePanel
      ),
      m.StockBridge.busOff("showAiDialog", this.showAiDialog),
      m.StockBridge.busOff("market-setting-aiVolatile", this.onClickAiVolatile),
      m.StockBridge.busOff(
        "market-setting-supportPressureSignal",
        this.onClickSupportPressureSignal
      ),
      this.clear();
    var g = null == (a = st.value) ? void 0 : a.code;
    !0 !==
      (null ==
      (u =
        null ==
        (l =
          null == (c = null == (o = getApp()) ? void 0 : o.globalData)
            ? void 0
            : c.biometricsLifeTimeFlagMethods)
          ? void 0
          : l.isInterceptHideForBiometrics)
        ? void 0
        : u.call(l, g)) &&
      (this.embeddedTradeFn("handleHide"), this.halfChartFn("handleHide")),
      null ==
        (h = null == (d = this.$refs.smallFund) ? void 0 : d.clearRefresh) ||
        h.call(d),
      null == (p = null == (f = this.$refs.cfg) ? void 0 : f.clearRefresh) ||
        p.call(f),
      this.clearAiBubble(),
      null ==
        (k = null == (b = this.$refs.bottomBar) ? void 0 : b.handleHide) ||
        k.call(b),
      this.clearTask();
  },
  onUnload: function () {
    var t, e, i, s, n, r, a, o, c, l, u, d, h, f, p, b, k, g, v, T;
    (this.isPageHidden = !0),
      this.clear(),
      null == (e = (t = m.StockBridge).busOff) ||
        e.call(t, "common-toggleAdded", this.setAddedStatus),
      null == (s = (i = m.StockBridge).busOff) ||
        s.call(i, "common-judgeAdded", this.setAddedStatus),
      null == (r = null == (n = this.hqBridge) ? void 0 : n.busOff) ||
        r.call(n, "lockSwiper", this.handleLockSwiper),
      null == (o = null == (a = m.StockBridge) ? void 0 : a.busOff) ||
        o.call(a, "market-onClickPrice", this.onClickTransPrice),
      null == (l = null == (c = this.hqBridge) ? void 0 : c.busOff) ||
        l.call(c, "watchHeightChange", this.getSwiperHeight),
      null == (d = null == (u = this.hqBridge) ? void 0 : u.busOff) ||
        d.call(u, "stockmpdetail-showLiteComEdit", this.showLiteComEdit),
      null == (f = null == (h = this.hqBridge) ? void 0 : h.busOff) ||
        f.call(h, "group-list-popup-show", this.setPageFixed),
      null == (b = null == (p = m.StockBridge) ? void 0 : p.busOff) ||
        b.call(p, "market-detail-autoHideTradePanel", this.autoHideTradePanel),
      m.StockBridge.busOff("showAiDialog", this.showAiDialog),
      null == (g = null == (k = m.StockBridge) ? void 0 : k.busOff) ||
        g.call(k, "market-setting-aiVolatile", this.onClickAiVolatile),
      null == (T = null == (v = m.StockBridge) ? void 0 : v.busOff) ||
        T.call(
          v,
          "market-setting-supportPressureSignal",
          this.onClickSupportPressureSignal
        ),
      this.embeddedTradeFn("handleUnload"),
      this.halfChartFn("handleUnload"),
      (this.tabs = null),
      (this.stockOverView = null),
      (this.tradeState = {}),
      (this.noticePositionRecord = null),
      (this.hqBridge = null),
      (this.circleTimeOut = null),
      (this.scrollEndTimer = null),
      (this.lazyTimeOut = null),
      (this.tradeTimeout = null),
      (this.tabBerTimeout = null),
      (this.swiperTimeOut = null),
      (this.offscreenCanvas = null),
      m.StockBridge.busOff("growth-yy.task.update_share_link"),
      this.resetNewMarketGrayState(),
      this.setEmbeddedInQuoteStatus(!1),
      this.clearAiBubble();
  },
  onPullDownRefresh: function () {
    this.onPullDown();
  },
  onReachBottom: function () {
    this.onLoadMore();
  },
  onShareAppMessage: function (t) {
    return p(
      this,
      null,
      i().mark(function e() {
        var s, n;
        return i().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    "button" === (null == t ? void 0 : t.from) &&
                      "shareCard" ===
                        (null == (s = null == t ? void 0 : t.target)
                          ? void 0
                          : s.id)
                      ? this.cardShareData
                      : (null == (n = m.StockBridge) ||
                          n.busEmit("growth-user.behavior.union", {
                            type: "share",
                          }),
                        this.shareMessageNext())
                  );
                case 1:
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
  onShareTimeline: function () {
    return this.onShareTimeLine();
  },
  onPageScroll: function (t) {
    var e = this;
    this.$nextTick(function () {
      e.handleScroll(t);
    }),
      this.clearPress(),
      m.scrollDepthStat.onScroll(t.scrollTop, this.__route__);
  },
  onPageHide: function () {
    var t,
      e,
      i,
      s,
      n,
      r = null == (t = st.value) ? void 0 : t.code;
    !0 !==
      (null ==
      (n =
        null ==
        (s =
          null == (i = null == (e = getApp()) ? void 0 : e.globalData)
            ? void 0
            : i.biometricsLifeTimeFlagMethods)
          ? void 0
          : s.isInterceptHideForBiometrics)
        ? void 0
        : n.call(s, r)) &&
      (this.onCloseEmbeddedTrade(), this.onCloseHalfChart());
  },
  methods: {
    handleSwitchChart: function (t) {
      this.queryTabKey = t;
    },
    updateRemindInfo: function (t) {
      var e,
        i =
          this.queryTabKey &&
          "mins" !== this.queryTabKey &&
          "fiveMins" !== this.queryTabKey;
      if (!t)
        return (
          (this.remindSubscribeInfo = null),
          void (i && m.StockBridge.busEmit("market-chartSetting-Update"))
        );
      var s = x.getChartRemindData(
        t,
        null == (e = this.stockOverView) ? void 0 : e.dqj
      );
      x.deepEqual(this.remindSubscribeInfo, s) ||
        ((this.remindSubscribeInfo = s),
        i && m.StockBridge.busEmit("market-chartSetting-Update"));
    },
    changePlateTab: function (t) {
      var e = this;
      switch (t) {
        case "constituent":
          (this.selectTab = "cfg"), this.changeTabs(this.selectTab);
          break;
        case "innerfund":
          (this.selectTab = "innerfund"), this.changeTabs(this.selectTab);
      }
      Object.keys(this.tabs)
        .filter(function (t) {
          return e.tabs[t].show;
        })
        .includes(this.selectTab) && this.changeTabs(this.selectTab);
    },
    goTabTop: function () {
      m.wx$1.pageScrollTo({
        selector: ".tab-content >>> .overview-wrapper",
        offsetTop: -(this.topBarHeight + 50),
        duration: 200,
      }),
        (this.showGoTop = !1),
        m.StockBridge.report("hq.stock_detail.ms_gotop");
    },
    getIntroduce: function (t) {
      this.intro = t;
    },
    setEmbeddedInQuoteStatus: function (t) {
      var e;
      ot &&
        (ot.embeddedInQuoteStatus = t
          ? 1 == +(null == (e = this.query) ? void 0 : e.halfscreen)
            ? v.EMBEDDED_INQUOTE_STATUS.AUTO
            : v.EMBEDDED_INQUOTE_STATUS.MANUAL
          : "");
    },
    getUrlParams: function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        e = (t.indexOf("?") > 0 ? t.split("?")[1] : t).split("&"),
        i = {};
      return (
        Array.isArray(e) &&
          e.map(function (t) {
            var e = t.replace(/#.*$/g, "").split("=");
            2 == e.length && (i[e[0]] = decodeURIComponent(e[1]));
          }),
        i
      );
    },
    handleWXParamData: function (t) {
      var e = "",
        i = "";
      try {
        var s,
          r = JSON.parse(decodeURIComponent(t)),
          a = n(r.slot_list);
        try {
          for (a.s(); !(s = a.n()).done; ) {
            var o = s.value;
            "stock_market" === o.key
              ? (e = o.value)
              : "stock_code" === o.key && (i = o.value);
          }
        } catch (t) {
          a.e(t);
        } finally {
          a.f();
        }
        return (
          e.match(/us/) &&
            ((i = (i += e.substring(2)).toUpperCase()), (e = "us")),
          b.utils.splitSymbol("".concat(e).concat(i).replace("us.", "us"))
        );
      } catch (t) {
        return {};
      }
    },
    shareMessageNext: function () {
      return p(
        this,
        null,
        i().mark(function t() {
          var e,
            s,
            n,
            r,
            a,
            o,
            c,
            l,
            u,
            d,
            h,
            f,
            p,
            m,
            k,
            g,
            v,
            T,
            w,
            x,
            B,
            C,
            M;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (n = this.stockOverView),
                      (r = n.stk_name),
                      (a = n.dqj),
                      (o = n.zde),
                      (c = n.zdf),
                      (l = n.symbol),
                      (u = n.type),
                      (d = b.utils.splitSymbol(l)),
                      (h = d.market),
                      (f = d.scode),
                      (p =
                        null ==
                        (s = null == (e = this.$refs) ? void 0 : e.bottomBar)
                          ? void 0
                          : s.bottomBarCount),
                      (m = p.comment),
                      (k = p.added),
                      "",
                      (g = o > 0 ? "#e63535" : o < 0 ? "#1CAA3C" : "#7a8499"),
                      (v = [
                        {
                          type: "image",
                          url: "https://st.gtimg.com/design/51dc7442ef4d401f0bc296c20f6272fc.png",
                          x: 0,
                          y: 0,
                        },
                        {
                          type: "image",
                          url: "".concat(
                            S.transMarketIcon(h, u, f).replace(".svg", ".png")
                          ),
                          x: 24,
                          y: 38,
                          width: 28,
                          height: 20,
                        },
                        {
                          type: "text",
                          textBaseline: "bottom",
                          text: "".concat(y.ShareUtil.shortString(r, 16)),
                          fontSize: "34",
                          color: "#262E40",
                          fontWeight: 500,
                          x: 64,
                          y: 68,
                        },
                        {
                          type: "text",
                          textBaseline: "bottom",
                          text: "".concat(a),
                          fontSize: "72",
                          color: g,
                          x: 24,
                          y: 188,
                        },
                        {
                          type: "text",
                          textBaseline: "bottom",
                          text: "".concat(o, "   ").concat(c, "%"),
                          fontSize: "32",
                          color: g,
                          x: 24,
                          y: 244,
                        },
                        {
                          type: "text",
                          textBaseline: "bottom",
                          text: "评论",
                          fontSize: "24",
                          color: "rgba(38, 46, 64, .6)",
                          fontWeight: 400,
                          x: 24,
                          y: 313,
                        },
                        {
                          type: "text",
                          textBaseline: "bottom",
                          text: "加自选",
                          fontSize: "24",
                          color: "rgba(38, 46, 64, .6)",
                          fontWeight: 400,
                          x: 212,
                          y: 313,
                        },
                        {
                          type: "text",
                          textBaseline: "bottom",
                          text: "".concat(this.formatNumber(m)),
                          fontSize: "28",
                          color: "#262E40",
                          x: 24,
                          y: 354,
                        },
                        {
                          type: "text",
                          textBaseline: "bottom",
                          text: "".concat(this.formatNumber(k)),
                          fontSize: "28",
                          color: "#262E40",
                          x: 212,
                          y: 354,
                        },
                      ]),
                      (t.next = 7),
                      y.ShareUtil.renderToImage(v)
                    );
                  case 7:
                    return (T = t.sent), (t.next = 10), this.onShare();
                  case 10:
                    return (
                      (w = t.sent),
                      (B = (x = w || {}).path),
                      (C = x.title),
                      (M = x.mtaParams),
                      t.abrupt("return", {
                        title: C,
                        imageUrl: T,
                        path: B,
                        mtaParams: M,
                      })
                    );
                  case 18:
                    (t.prev = 18),
                      (t.t0 = t.catch(0)),
                      ot.mpReporter.reportEvent(
                        "MONITOR-STOCKDETAIL-SHARE-NEXT-ERROR",
                        { ext3: (null == t.t0 ? void 0 : t.t0.message) || "" }
                      );
                  case 21:
                    return t.abrupt("return", this.onShare());
                  case 22:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [[0, 18]]
          );
        })
      );
    },
    formatNumber: function (t) {
      return t >= 1e5 ? "10万+" : "".concat(b.utils.bigNumberToText(t, "", 1));
    },
    autoHideTradePanel: function (t) {
      this.tradeState &&
        (this.statReort("hq.stock_detail.trade.auto_hide", {
          stockid: this.symbol,
          source: t,
        }),
        this.onCloseEmbeddedTrade());
    },
    setEmbeddedPrice: function (t) {
      var e;
      !t ||
        "-" === t ||
        isNaN(t) ||
        +t < 0 ||
        (this.embeddedPrice = {
          price: t,
          status: !(null == (e = this.embeddedPrice) ? void 0 : e.status),
        });
    },
    onClickTransPrice: function (t) {
      var e = t || {},
        i = e.scode,
        s = e.market,
        n = e.price;
      i === this.scode && s === this.market && this.setEmbeddedPrice(n);
    },
    moveChartTop: function (t) {
      var e = this;
      if (t) {
        var i = this;
        setTimeout(
          function () {
            m.wx$1
              .createSelectorQuery()
              .in(e)
              .select(".js-quotation")
              .boundingClientRect(function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  e = t || {},
                  s = e.height;
                m.wx$1.pageScrollTo({
                  scrollTop: s + (i.showNewsBar ? 50 : 0),
                  duration: 300,
                });
              })
              .exec();
          },
          i.showMiniQuotation ? 0 : 600
        );
      }
    },
    getChartUrl: function () {
      var t = this;
      return new Promise(function (e, i) {
        var s;
        null == (s = t.hqBridge) ||
          s.busEmit("getChartPath-".concat(t.scode), function (t) {
            t ? e(t) : i(new Error("chartPath is null"));
          });
      });
    },
    checkExceptionReport: function () {
      var t = this;
      this.isFromPyq ||
        (this.checkTimer && clearTimeout(this.checkTimer),
        (this.checkTimer = setTimeout(function () {
          (t.dataReady && !t.showEmbeddedTrade && !t.showToggleBrokerPopup) ||
            ot.mpReporter.reportEvent("MONITOR-STOCKDETAIL-DATA-NO-READY");
        }, 2e3)));
    },
    getUSPanData: function (t) {
      var e;
      try {
        null == (e = this.$refs.quotation) || e.getUSPanData(t);
      } catch (t) {}
    },
    handleLockSwiper: function (t) {
      var e = this;
      (this.isLockSwiper = t),
        t &&
          (this.lockTimer && clearTimeout(this.lockTimer),
          (this.lockTimer = setTimeout(function () {
            e.isLockSwiper = !1;
          }, 1e3)));
    },
    stopTouchMove: function () {
      return !this.isLockSwiper;
    },
    computed: function (t) {
      var e = this;
      this.timeOutHeight = setTimeout(function () {
        e.getSwiperHeight();
        var i = t + 500;
        i > 4e3 ? clearTimeout(e.timeOutHeight) : e.computed(i);
      }, t);
    },
    goComent: function () {
      this.statReort("hq.stock_detail.comment_show_more");
      var t = "../comment/comment?symbol="
        .concat(
          b.utils.isUSMarket(this.market) && b.utils.isIndex(this.stockType)
            ? "us.".concat(this.scode)
            : this.symbol,
          "&name="
        )
        .concat(this.stockName, "&market=")
        .concat(this.market);
      m.wx$1.navigateTo({ url: t });
    },
    recordScroollTop: function (t, e) {
      if ((this.noticePositionRecord || (this.noticePositionRecord = {}), t)) {
        var i = this.noticePositionRecord[e];
        m.wx$1.pageScrollTo({ scrollTop: i, duration: 100 });
      } else this.noticePositionRecord[e] = this.mpscrollTop;
      this.getSwiperHeight(500);
    },
    checkReportWithScroll: function () {
      var t = (this.tab && this.tabs[this.selectTab]) || {};
      this.isETF &&
        t.show &&
        !this.isReportedScroll &&
        ((this.isReportedScroll = !0),
        this.statReort("stockinfo.assets.scroll", { id: this.symbol }));
    },
    scroll: function (t) {
      var e = this;
      this.$nextTick(function () {
        e.handleScroll(t);
      });
    },
    scrollEnd: function () {
      var t = this;
      this.showCounterTimer && clearTimeout(this.showCounterTimer),
        (this.showCounterTimer = setTimeout(function () {
          (t.showCounter = !1),
            t.showCounterTimer && clearTimeout(t.showCounterTimer);
        }, 1e3));
    },
    getTopBarHeight: function (t) {
      this.topBarHeight = t;
    },
    getQuotationBarLocation: function (t) {
      var e = this;
      this.isTradeFirst ||
        this.hasAutoScrolled ||
        ((this.hasAutoScrolled = !0),
        (this.isAutoScrolling = !0),
        setTimeout(
          function () {
            m.wx$1.pageScrollTo({
              selector: ".linear-gradient >>> .chart-wrapper >>> .canvas-area",
              offsetTop: -t.top - t.height - (e.mpscrollTop ? 0 : t.height),
              duration: e.isTradeFirst ? 0 : 300,
              success: function () {
                setTimeout(
                  function () {
                    e.isAutoScrolling = !1;
                  },
                  "android" === ot.systemInfo.platform ? 500 : 200
                );
              },
            });
          },
          this.isTradeFirst ? 100 : 0
        ));
    },
    openLandscape: function (t) {
      if (
        !(
          this.isPCWeixin ||
          this.showEmbeddedTrade ||
          ["mac", "windows"].indexOf(this.systemInfo.platform) > -1
        )
      )
        var e = (t || {}).tabKey,
          i = void 0 === e ? "" : e,
          s = [
            "market=".concat(this.market),
            "scode=".concat(this.scode),
            "tabkey=".concat(i),
          ],
          n = setTimeout(function () {
            ot.navigateTo({
              url: "/pages/quote/rotateDetail?".concat(s.join("&")),
              fail: function (t) {},
            }),
              clearTimeout(n);
          }, 60);
    },
    getTabBarTop: function () {
      var t = this;
      this.clearPress(),
        (this.tabBerTimeout = setTimeout(function () {
          m.wx$1
            .createSelectorQuery()
            .in(t)
            .select("#tabBar")
            .boundingClientRect()
            .exec(function (e) {
              if (e && e.length) {
                var i = e[0] || {},
                  s = i.top,
                  n = void 0 === s ? 0 : s,
                  r = i.height,
                  a = void 0 === r ? 0 : r;
                (t.tabBarTop = n + t.mpscrollTop), (t.tabBarHeight = a);
              }
            }),
            t.tabBerTimeout && clearTimeout(t.tabBerTimeout);
        }, 200));
    },
    handleScroll: function (t) {
      var e,
        i = this;
      this.checkReportWithScroll();
      var s = (t || {}).scrollTop;
      s > 3 && !1 === this.fixTopbar && (this.fixTopbar = !0),
        s < 3 && !0 === this.fixTopbar && (this.fixTopbar = !1),
        (this.mpscrollTop = s),
        (this.showQuotationBar =
          !this.showMiniQuotation || !!this.isAutoScrolling || +s > 35);
      try {
        this.topBarShowPrice =
          this.mpscrollTop + this.topBarHeight >=
          (null == (e = this.$refs.quotation) ? void 0 : e.zdInfoBottom);
      } catch (t) {}
      (this.tabBarFixed =
        this.mpscrollTop + this.topBarHeight >= this.tabBarTop + 50),
        this.tradeState &&
          !this.isAutoScrolling &&
          (this.tabBarFixed ||
            ot.systemInfo.screenHeight / 2.5 >
              this.tabBarTop - this.mpscrollTop) &&
          (this.onCloseEmbeddedTrade(), this.onCloseHalfChart()),
        "cfg" === this.selectTab &&
          this.isMoreList &&
          ((this.showCounter = !0), this.getCounterNum()),
        this.scrollEndTimer && clearTimeout(this.scrollEndTimer),
        (this.scrollEndTimer = setTimeout(function () {
          i.scrollEnd(), i.scrollEndTimer && clearTimeout(i.scrollEndTimer);
        }, 200)),
        m.StockBridge.busEmit("common-pageScroll", this.mpscrollTop);
    },
    getCounterNum: function () {
      var t = this.listItemHeight || 64,
        e = this.listTitleHeight || 24,
        i =
          this.systemInfo.windowHeight -
          (this.tabBarTop + this.topBarHeight + e - this.mpscrollTop);
      this.counterNum = Math.floor(i / t);
    },
    getRankListHeight: function (t, e) {
      (this.listItemHeight = t), (this.listTitleHeight = e);
    },
    listCheckMore: function (t, e) {
      (this.isMoreList = !t), (this.counterLimit = e || 200);
    },
    clear: function () {
      this.checkTimer && clearTimeout(this.checkTimer),
        this.deliveryTimer && clearTimeout(this.deliveryTimer),
        this.watchPluginTimer && clearTimeout(this.watchPluginTimer),
        this.canPreloadCommentTimer &&
          clearTimeout(this.canPreloadCommentTimer),
        this.swiperTimeOut && clearTimeout(this.swiperTimeOut),
        (this.showDeliveryGuideSubscibe = !1);
    },
    refresh: function () {
      var t =
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return p(
        this,
        null,
        i().mark(function e() {
          var s, n, r, a, o, c, l, u;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!this.dataReady) {
                      e.next = 8;
                      break;
                    }
                    if (
                      ((a = getCurrentPages()),
                      (o = a[a.length - 1]),
                      (c = (null == o ? void 0 : o.data) || {}),
                      (l = c.needRepaintChart),
                      (u = c.tabkey),
                      l &&
                        (o.setData({ needRepaintChart: !1 }),
                        null == (s = this.$refs.chartWrapper) ||
                          s.repaintForSettingChange({ tabkey: u })),
                      (e.t0 = t),
                      !e.t0)
                    ) {
                      e.next = 7;
                      break;
                    }
                    return (
                      (e.next = 7),
                      null == (n = this.$refs.quotation) ? void 0 : n.refresh()
                    );
                  case 7:
                    null == (r = this.$refs.topBar) || r.stopLoading();
                  case 8:
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
    showTradeTimeLinePop: function () {
      var t;
      null == (t = this.$refs.quotation) || t.onShowTradeTimeLine();
    },
    onInitData: function (t) {
      return p(
        this,
        null,
        i().mark(function e() {
          var s,
            n,
            r = this;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((this.stockName =
                        (null == (s = t.secu_info) ? void 0 : s.stk_name) ||
                        ""),
                      this.handleCallback(t),
                      this.isHK && this.getStockTag(this.symbol),
                      (e.t0 =
                        1 ==
                        +(null == (n = this.query) ? void 0 : n.halfscreen)),
                      !e.t0)
                    ) {
                      e.next = 8;
                      break;
                    }
                    return (e.next = 7), this.shouldShowTradeEmbedded();
                  case 7:
                    e.t0 = e.sent;
                  case 8:
                    if (((this.isTradeFirst = e.t0), !this.isTradeFirst)) {
                      e.next = 11;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      ((this.fixTopbar = !0),
                      (this.dataLazyReady = !0),
                      this.lazyLoadTimer && clearTimeout(this.lazyLoadTimer),
                      void (this.lazyLoadTimer = setTimeout(function () {
                        r.onInitDataByTradeFirst();
                      }, 2500)))
                    );
                  case 11:
                    this.onInitDataByTradeFirst(),
                      m.StockBridge.setTitle(
                        ""
                          .concat(this.stockName, "(")
                          .concat(this.formattedCode, ")")
                      );
                  case 12:
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
    onInitDataByTradeFirst: function () {
      return p(
        this,
        null,
        i().mark(function t() {
          var e = this;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (this.getT0Tagshow(),
                      this.getInnerFundShow(),
                      (t.t0 = this.dataReady),
                      t.t0)
                    ) {
                      t.next = 7;
                      break;
                    }
                    return (t.next = 6), this.handleMarket();
                  case 6:
                    this.getTabBarTop();
                  case 7:
                    if (
                      ((t.t1 =
                        b.utils.isIndex(this.stockType) ||
                        b.utils.isHSPlate(this.market) ||
                        b.utils.isCSIndex(this.market)),
                      !t.t1)
                    ) {
                      t.next = 15;
                      break;
                    }
                    return (
                      (t.next = 11),
                      m.getEtfRecommendedData(
                        this.hqBridge,
                        this.formattedSymbol
                      )
                    );
                  case 11:
                    return (
                      (this.etfData = t.sent),
                      (t.next = 14),
                      m.getAdded(this.scode, this.market)
                    );
                  case 14:
                    this.stockAdded = t.sent;
                  case 15:
                    this.canPreloadCommentTimer = setTimeout(function () {
                      e.canPreloadComment = !0;
                    }, 1e3);
                  case 16:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    onUpdateData: function (t) {
      this.handleCallback && this.handleCallback(t);
    },
    handleCallback: function (t) {
      var e, i, s;
      (this.stockOverView = f(
        h(h(h({}, this.stockOverView), t.secu_quote), t.secu_info),
        { statusName: t.status, secuInfo: t.secu_info, fiveTrans: t.five_trans }
      )),
        (this.stockType =
          null == (e = this.stockOverView.secuInfo) ? void 0 : e.stocktype),
        (this.compositeStatus =
          (null == (i = this.stockOverView) ? void 0 : i.statusName) ||
          this.marketStatus ||
          ""),
        (this.stockStatus = t.status),
        null == (s = m.StockBridge) ||
          s.busEmit(
            "market-stockOverView_update_".concat(
              b.utils.getSymbol(this.market, this.formattedCode)
            ),
            h({}, this.stockOverView)
          ),
        this.checkIsRaisingETF();
    },
    checkIsRaisingETF: function () {
      return p(
        this,
        null,
        i().mark(function t() {
          var e, s;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((t.prev = 0),
                      this.isETF &&
                        ["U", "N", "I"].includes(
                          null == (e = this.stockOverView) ? void 0 : e.status
                        ))
                    ) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", void (this.isRaisingETF = !1));
                  case 3:
                    return (t.next = 5), m.getETFSubPeriod(this.symbol);
                  case 5:
                    if ((s = t.sent) && 0 === s.code && s.data) {
                      t.next = 8;
                      break;
                    }
                    return t.abrupt("return");
                  case 8:
                    (this.isRaisingETF = 1 === s.data.isPublishing),
                      (t.next = 14);
                    break;
                  case 11:
                    (t.prev = 11),
                      (t.t0 = t.catch(0)),
                      (this.isRaisingETF = !1);
                  case 14:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [[0, 11]]
          );
        })
      );
    },
    handleMarket: function () {
      return p(
        this,
        null,
        i().mark(function t() {
          var e,
            s,
            n,
            r,
            a,
            o,
            c,
            l,
            u,
            d,
            h,
            f,
            p,
            k,
            g,
            v,
            T,
            w,
            y,
            S,
            x = this;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (this.tabs && Object.keys(this.tabs).length) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (
                      ((r =
                        this.stockName.indexOf("REIT") > 0 &&
                        this.stockType.startsWith("FJ")),
                      !this.isIndex)
                    ) {
                      t.next = 18;
                      break;
                    }
                    return (t.next = 6), this.getCfgWhiteList();
                  case 6:
                    (a = t.sent),
                      (c = (o = a || {}).allow_list),
                      (l = void 0 === c ? [] : c),
                      (u = o.allow_list_v2),
                      (d = void 0 === u ? [] : u),
                      (h = o.allow_list_v3),
                      (f = void 0 === h ? [] : h),
                      (this.tabs.news.show = !0),
                      (this.tabs.cfg.show = !0),
                      (this.tabs.cfg.visited = !0),
                      (this.tabs.cfg.stat = "hq.index_detail.cfg_tab_click"),
                      (this.selectTab = "cfg"),
                      (this.currentSwiper = 1),
                      (b.utils.isHSMarket(this.market) ||
                        b.utils.isBJMarket(this.market)) &&
                        ((this.storageKey = "hs-zs"),
                        l.includes(this.symbol) &&
                          (this.indexRankType = "cfgHS")),
                      b.utils.isHKMarket(this.market) &&
                        ((this.storageKey = "hk-zs"),
                        (this.indexRankType = "cfgHK"),
                        (this.tabs.cfg.show = l.includes(this.symbol)),
                        d.includes(this.symbol) &&
                          ((this.tabs.cfg.show = !1),
                          (this.tabs.north.show = !0),
                          (this.tabs.north.visited = !0),
                          (this.tabs.south.show = !0),
                          (this.selectTab = "north")),
                        f.includes(this.symbol) &&
                          ((this.tabs.cfg.show = !0),
                          (this.indexRankType = "cfgHS"))),
                      b.utils.isUSMarket(this.market) &&
                        ((this.storageKey = "us-zs"),
                        (p = this.symbol.replace(/^us/, "us.")),
                        l.includes(p)
                          ? (this.indexRankType = "cfgUS")
                          : (this.tabs.cfg.show = !1),
                        (this.tabs.innerfund.show = !0),
                        (this.tabs.innerfund.visited = !0)),
                      b.utils.isUKMarket(this.market) &&
                        ((this.tabs.cfg.show = !1),
                        (this.tabs.news.show = !0),
                        (this.tabs.news.visited = !0),
                        (this.selectTab = "news")),
                      b.utils.isCSIndex(this.market) &&
                        ((this.storageKey = "hs-zs"),
                        (this.indexRankType = "cfgCS")),
                      b.utils.isFTIndex(this.market) &&
                        ((this.storageKey = "ft-zs"),
                        (this.tabs.cfg.show = !1),
                        (this.tabs.cfg.visited = !1),
                        (this.tabs.news.show = !0),
                        (this.tabs.news.visited = !0),
                        (this.selectTab = "news"),
                        (this.currentSwiper = 0)),
                      (t.next = 19);
                    break;
                  case 18:
                    this.isPlate
                      ? ((this.storageKey = "plate"),
                        (this.tabs.news.show = !0),
                        (this.tabs.funds.show = !0),
                        (this.tabs.cfg.show = !0),
                        (this.tabs.cfg.visited = !0),
                        /^BK-HY/.test(this.stockType) &&
                          ((this.tabs.attention.show = !0),
                          (this.isPrimaryIndustry =
                            "BK-HY-1" === this.stockType),
                          (this.tabs.funds.show = !this.isPrimaryIndustry)),
                        (this.selectTab = "cfg"),
                        (this.currentSwiper = 1))
                      : b.utils.isHSMarket(this.market)
                      ? ((this.tabs.info.show = !0),
                        (this.tabs.info.visited = !0),
                        (this.tabs.brief.show = !0),
                        (this.tabs.finance.show = !0),
                        b.utils.isKeChuangStock(this.stockType) ||
                          ((this.tabs.diagnose.show = !0),
                          (this.tabs.mine.show = !b.utils.isBMarket(
                            this.stockType
                          ))),
                        this.isFund
                          ? ((this.storageKey = "fund"),
                            (this.tabs.info.show = !1),
                            (this.tabs.news.show = !1),
                            (this.tabs.brief.show = !0),
                            (this.tabs.notice.show = !0),
                            (this.tabs.report.show = !1),
                            (this.tabs.diagnose.show = !1),
                            (this.tabs.mine.show = !1),
                            (this.tabs.assets.show = !r),
                            (this.tabs.finance.show = !1),
                            (this.tabs.info.visited = !1),
                            (this.tabs.news.visited = !1),
                            (this.tabs.assets.visited = !1),
                            this.isETF
                              ? ((this.tabs.news.show = !0),
                                (this.tabs.assets.show = !0),
                                (this.tabs.assets.visited = !0),
                                (this.tabs.etfFund.show = !0),
                                (this.selectTab = "etfFund"))
                              : this.isFJ
                              ? ((this.tabs.news.show = !0),
                                (this.tabs.brief.show = !0),
                                (this.tabs.brief.visited = !0),
                                (this.tabs.notice.show = !0))
                              : ((this.tabs.assets.visited = !0),
                                (this.selectTab = "assets")))
                          : b.utils.isTransferableDebt(this.stockType)
                          ? ((this.storageKey = "kzz"),
                            (this.tabs.info.show = !1),
                            (this.tabs.news.show = !0),
                            (this.tabs.notice.show = !0),
                            (this.tabs.diagnose.show = !1),
                            (this.tabs.mine.show = !1),
                            (this.tabs.brief.show = !1),
                            (this.tabs.finance.show = !1),
                            (this.tabs.report.show = !1),
                            (this.tabs.info.visited = !1),
                            (this.tabs.news.visited = !0),
                            (this.selectTab = "news"))
                          : (b.utils.isDebt(this.stockType) ||
                              b.utils.isNationalDebt(this.stockType)) &&
                            ((this.storageKey = "nhg"),
                            (this.tabs.info.show = !1),
                            (this.tabs.news.show = !0),
                            (this.tabs.notice.show = !0),
                            (this.tabs.diagnose.show = !1),
                            (this.tabs.mine.show = !1),
                            (this.tabs.brief.show = !0),
                            (this.tabs.finance.show = !1),
                            (this.tabs.report.show = !1),
                            (this.tabs.info.visited = !1),
                            (this.tabs.news.visited = !0),
                            (this.selectTab = "news")))
                      : b.utils.isBJMarket(this.market) ||
                        b.utils.isNQMarket(this.market)
                      ? ((this.storageKey = "hs"),
                        (this.tabs.brief.show = !0),
                        (this.tabs.finance.show = !0),
                        (this.tabs.news.show = !0),
                        (this.tabs.news.visited = !0),
                        (this.tabs.notice.show = !0),
                        (this.tabs.report.show = !1),
                        (this.selectTab = "news"),
                        b.utils.isBJMarket(this.market) &&
                          this.isETF &&
                          ((this.storageKey = "fund"),
                          (this.tabs.news.show = !0),
                          (this.tabs.brief.show = !0),
                          (this.tabs.etfFund.show = !0),
                          (this.tabs.assets.show = !0),
                          (this.tabs.assets.visited = !0),
                          (this.tabs.notice.show = !0),
                          (this.tabs.finance.show = !1)))
                      : b.utils.isHKMarket(this.market) ||
                        b.utils.isUSMarket(this.market)
                      ? ((this.storageKey = b.utils.isHKMarket(this.market)
                          ? "hk"
                          : "us"),
                        (this.tabs.news.show = !0),
                        (this.tabs.news.visited = !0),
                        (this.tabs.notice.show = !0),
                        (this.tabs.report.show = !["GP-ETF"].includes(
                          this.stockType
                        )),
                        (this.tabs.brief.show = !0),
                        (this.tabs.finance.show = !0),
                        (this.selectTab = "news"))
                      : this.isFutures
                      ? ((k = [
                          "fuGC",
                          "fuMGC",
                          "fuHG",
                          "fuCL",
                          "fuNG",
                          "fuRB",
                          "fuHO",
                          "fuZC",
                          "fuZS",
                          "fuHE",
                          "fuYM",
                          "fuES",
                          "fuNQ",
                          "fuZN",
                          "fuZB",
                          "fuCN",
                          "fu6B",
                          "fu6C",
                          "fu6A",
                          "fu6E",
                          "fu6N",
                          "fu6S",
                          "fu6M",
                        ]),
                        (this.storageKey = "futures"),
                        (this.tabs.news.show =
                          b.utils.isHDFutures(this.market) ||
                          k.includes(this.symbol)),
                        (this.tabs.notice.show = !1),
                        (this.tabs.brief.show = !1),
                        (this.tabs.finance.show = !1),
                        (this.tabs.report.show = !1),
                        (this.tabs.contract.show = !0),
                        (this.tabs.contract.name = "合约资料"),
                        "fuGC" === this.symbol &&
                          ((this.tabs.innerfund.name = "基金"),
                          (this.tabs.innerfund.show = !0)),
                        this.tabs.news.show
                          ? ((this.tabs.news.visited = !0),
                            (this.selectTab = "news"))
                          : ((this.tabs.contract.visited = !0),
                            (this.selectTab = "contract")))
                      : b.utils.isForex(this.market)
                      ? ((this.tabs.news.show = !0),
                        (this.tabs.news.visited = !0),
                        (this.selectTab = "news"))
                      : b.utils.isSPMarket(this.market) &&
                        ((this.tabs.news.show = !0),
                        (this.tabs.news.visited = !0),
                        (this.tabs.contract.show = !0),
                        (this.tabs.contract.name = "合约资料"),
                        (this.tabs.innerfund.name = "基金"),
                        (this.tabs.innerfund.show = !["spPT9995"].includes(
                          this.symbol
                        )),
                        (this.selectTab = "news"));
                  case 19:
                    if (
                      ((this.tabs.assets.show = this.isFund && !r),
                      this.tabs.assets.show &&
                        ((this.tabs.assets.visited = !0),
                        (this.selectTab = "assets")),
                      !this.tabs.news.show)
                    ) {
                      t.next = 29;
                      break;
                    }
                    return (
                      (t.prev = 20),
                      (t.next = 23),
                      Promise.race([
                        m.prefetchOrGetNewsBlacklist(),
                        new Promise(function (t) {
                          return setTimeout(function () {
                            return t([]);
                          }, 1500);
                        }),
                      ])
                    );
                  case 23:
                    (g = t.sent) &&
                      g.includes &&
                      (!g.includes(this.symbol) ||
                        ((this.tabs.news.show = !1),
                        (this.tabs.news.visited = !1),
                        "news" === this.selectTab &&
                          (this.isIndex || this.isPlate
                            ? ((this.tabs.cfg.visited = !0),
                              (this.selectTab = "cfg"))
                            : ((this.tabs.brief.visited = !0),
                              (this.selectTab = "brief"))),
                        this.currentSwiper > 0 && this.currentSwiper--)),
                      (t.next = 29);
                    break;
                  case 27:
                    (t.prev = 27), (t.t0 = t.catch(20));
                  case 29:
                    if (
                      ((v = m.StockBridge.getStorage("quoteSelectTab") || {}),
                      (T =
                        this.query.tab || v[this.storageKey] || this.selectTab),
                      (w = Object.keys(this.tabs).filter(function (t) {
                        return x.tabs[t].show;
                      })),
                      !T ||
                        !(null == (s = null == (e = this.tabs) ? void 0 : e[T])
                          ? void 0
                          : s.show))
                    ) {
                      t.next = 43;
                      break;
                    }
                    this.tabs[this.selectTab] &&
                      (this.tabs[this.selectTab].visited = !1),
                      (this.tabs[T].visited = !0),
                      (this.selectTab = T),
                      (y = -1),
                      (t.t1 = i().keys(this.tabs));
                  case 34:
                    if ((t.t2 = t.t1()).done) {
                      t.next = 40;
                      break;
                    }
                    if (
                      ((S = t.t2.value),
                      !(null == (n = this.tabs[S]) ? void 0 : n.show) ||
                        ((y += 1), S !== this.selectTab))
                    ) {
                      t.next = 38;
                      break;
                    }
                    return t.abrupt("break", 40);
                  case 38:
                    t.next = 34;
                    break;
                  case 40:
                    (this.currentSwiper = y), (t.next = 44);
                    break;
                  case 43:
                    w.length >= 1 &&
                      ((this.currentSwiper = 0),
                      (this.selectTab = w[0]),
                      (this.tabs[this.selectTab].visited = !0));
                  case 44:
                    (this.showTabBar = w.length > 1),
                      (this.dataReady = !0),
                      this.checkExceptionReport(),
                      (this.lazyTimeOut = setTimeout(function () {
                        x.$nextTick(function () {
                          x.dataLazyReady = !0;
                        }),
                          x.lazyTimeOut && clearTimeout(x.lazyTimeOut);
                      }, 0));
                  case 45:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [[20, 27]]
          );
        })
      );
    },
    circleGet: function (t, e, i) {
      var s = this;
      if (!(i > 1e3))
        var n = setTimeout(function () {
          var r,
            a,
            o = (i || 0) + 200;
          try {
            (null == (r = s.$refs.quotation) ? void 0 : r[t])
              ? null == (a = s.$refs.quotation) || a[t](e)
              : s.circleGet(t, e, o);
          } catch (i) {
            s.circleGet(t, e, o);
          }
          clearTimeout(n);
        }, 200);
    },
    getMarketState: function (t, i) {
      var s =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (
        (t &&
          t[0] &&
          ((this.isTrading = "open" === t[0][1]),
          (this.marketStatus = t[0][2]),
          (this.compositeStatus &&
            this.compositeStatus === this.marketStatus) ||
            (this.compositeStatus = this.marketStatus)),
        this.circleGet("getMarketState", t, 0),
        b.utils.isHSMarket(this.market))
      )
        try {
          this.getTradeState(t, i);
        } catch (t) {}
      Array.isArray(s) &&
        s.length &&
        m.StockBridge.busEmit(
          "market-update-marketStatus",
          s.reduce(function (t, i) {
            var s = i.split("_"),
              n = e(s, 3),
              r = n[0],
              a = n[1],
              o = n[2];
            return (t[r] = { state: a, name: o }), t;
          }, {})
        );
    },
    getExtraInfo: function (t) {
      this.circleGet("getExtraInfo", t, 0);
    },
    getZDP: function (t) {
      this.circleGet("getZDP", t, 0);
    },
    getTradeState: function (t, s) {
      return p(
        this,
        null,
        i().mark(function n() {
          var r,
            a,
            o,
            c,
            l,
            u,
            d,
            h,
            f,
            p,
            k,
            g,
            v,
            T,
            w,
            y,
            S,
            x,
            B,
            C,
            M,
            _,
            E,
            D,
            P,
            N,
            A,
            R,
            F,
            q,
            H,
            L,
            O;
          return i().wrap(
            function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    return (
                      (o = m.prefetchOrGetHoliday()),
                      (c = m.prefetchOrGetBrokerText()),
                      (i.next = 4),
                      Promise.all([o, c])
                    );
                  case 4:
                    if (
                      ((l = i.sent),
                      (u = e(l, 2)),
                      (d = u[0]),
                      (h = u[1]),
                      (f = !h || 1 == +h.offline),
                      (p =
                        null == (r = null == h ? void 0 : h.content)
                          ? void 0
                          : r[st.value.code]),
                      (k = new Date(s.replace(/-/g, "/"))),
                      (g = new Date(new Date().setDate(k.getDate() + 1))),
                      (v = 6 === k.getDay() || 0 === k.getDay()),
                      (T = 6 === g.getDay() || 0 === g.getDay()),
                      (w = "Y" === d[0]),
                      (y = d[1].includes(
                        g.toISOString().slice(0, 10).replaceAll("-", "")
                      )),
                      (S = !v && !w && (T || y)),
                      (x = (v || w) && !T && !y),
                      (B = {}),
                      "待上市" !== this.stockStatus &&
                        "退市" !== this.stockStatus)
                    ) {
                      i.next = 23;
                      break;
                    }
                    (B.show = !1), (i.next = 67);
                    break;
                  case 23:
                    if (
                      "停牌" !== this.stockStatus ||
                      0 != +this.stockOverView.cje
                    ) {
                      i.next = 27;
                      break;
                    }
                    (B.show = !1), (i.next = 67);
                    break;
                  case 27:
                    if (!v && !w) {
                      i.next = 34;
                      break;
                    }
                    if (!f) {
                      i.next = 30;
                      break;
                    }
                    return i.abrupt("return");
                  case 30:
                    (C = v ? "weekend" : "holiday"),
                      (B.customText = x
                        ? p.day_before_wkorhd.before
                        : p[C].before),
                      (B.show = !!B.customText),
                      (i.next = 67);
                    break;
                  case 34:
                    (i.t0 =
                      ((B.show = !0),
                      (B.isTrading = this.isTrading),
                      (B.marketText =
                        (null == (a = t[0]) ? void 0 : a[2]) || ""),
                      B.marketText)),
                      (i.next =
                        "未开盘" === i.t0 ||
                        "等待开盘" === i.t0 ||
                        "交易中" === i.t0 ||
                        "午间休市" === i.t0 ||
                        "盘后准备中" === i.t0
                          ? 37
                          : "盘前竞价" === i.t0
                          ? 39
                          : "收盘竞价" === i.t0
                          ? 41
                          : "盘后交易中" === i.t0
                          ? 43
                          : "已收盘" === i.t0
                          ? 46
                          : 67);
                    break;
                  case 37:
                    return (
                      (B.canOrder = !0),
                      (B.canRevoke = !0),
                      i.abrupt("break", 67)
                    );
                  case 39:
                    return (
                      (B.canOrder = !0),
                      (B.canRevoke = k.getMinutes() < 20),
                      i.abrupt("break", 67)
                    );
                  case 41:
                    return (
                      (B.canOrder = !0),
                      (B.canRevoke = !1),
                      i.abrupt("break", 67)
                    );
                  case 43:
                    return (
                      (M =
                        b.utils.isHSMarket(this.market) &&
                        (b.utils.isAMarket(this.stockType) ||
                          b.utils.isKeChuangStock(this.stockType) ||
                          b.utils.isChuangYeStock(this.stockType) ||
                          ["ETF", "QDII-ETF"].includes(this.stockType))),
                      (B.canOrder = !0),
                      (B.canRevoke = M),
                      i.abrupt("break", 67)
                    );
                  case 46:
                    if (!f) {
                      i.next = 48;
                      break;
                    }
                    return i.abrupt(
                      "return",
                      ((B.show = !1), void (this.tradeState = B))
                    );
                  case 48:
                    if (
                      ((_ =
                        b.utils.isChuangYeStock(this.stockType) ||
                        b.utils.isKeChuangStock(this.stockType)),
                      (E = S
                        ? _
                          ? "last_tradeday_kccy_close"
                          : "last_tradeday_close"
                        : _
                        ? "normal_tradeday_kccy_close"
                        : "normal_tradeday_close"),
                      (D =
                        ""
                          .concat(k.getHours().toString().padStart(2, 0), ":")
                          .concat(k.getMinutes().toString().padStart(2, 0)) <
                        p.clearing_time
                          ? "before"
                          : "after"),
                      (P = p[E][D]),
                      !/{{placeholder_nexttradedaybefore}}/.test(P))
                    ) {
                      i.next = 66;
                      break;
                    }
                    (N = k), (A = g), (R = 0);
                  case 54:
                    if (!(R < 100)) {
                      i.next = 62;
                      break;
                    }
                    if (
                      ((N = new Date(new Date(A))),
                      (A = new Date(new Date().setDate(A.getDate() + 1))),
                      (F = 6 === N.getDay() || 0 === N.getDay()),
                      (q = 6 === A.getDay() || 0 === A.getDay()),
                      (H = d[1].includes(
                        N.toISOString().slice(0, 10).replaceAll("-", "")
                      )),
                      (L = d[1].includes(
                        A.toISOString().slice(0, 10).replaceAll("-", "")
                      )),
                      (!F && !H) || q || L)
                    ) {
                      i.next = 59;
                      break;
                    }
                    return i.abrupt("break", 62);
                  case 59:
                    R++, (i.next = 54);
                    break;
                  case 62:
                    (O = ""
                      .concat((N.getMonth() + 1).toString().padStart(2, 0), "-")
                      .concat(N.getDate().toString().padStart(2, 0))),
                      (B.customText = P.replace(
                        "{{placeholder_nexttradedaybefore}}",
                        O
                      )),
                      (i.next = 67);
                    break;
                  case 66:
                    B.customText = P;
                  case 67:
                    this.tradeState = B;
                  case 68:
                  case "end":
                    return i.stop();
                }
            },
            n,
            this
          );
        })
      );
    },
    onPullDown: function () {
      return p(
        this,
        null,
        i().mark(function t() {
          var e, s, n, r, a, o, c, l;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      null == (e = this.$refs.quotation) || e.stopUpdate(),
                      (c =
                        null == (s = this.$refs.quotation)
                          ? void 0
                          : s.refresh()),
                      (l = [
                        c,
                        null ==
                        (r =
                          null == (n = this.$refs.chartWrapper)
                            ? void 0
                            : n.$refs.composition)
                          ? void 0
                          : r.updateData(!0),
                      ]),
                      this.$refs.smallFund &&
                        l.push(
                          null == (o = (a = this.$refs.smallFund).fetchData)
                            ? void 0
                            : o.call(a)
                        ),
                      (t.next = 6),
                      Promise.all(l)
                    );
                  case 6:
                    m.wx$1.stopPullDownRefresh(), (t.next = 11);
                    break;
                  case 9:
                    (t.prev = 9), (t.t0 = t.catch(0));
                  case 11:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [[0, 9]]
          );
        })
      );
    },
    onLoadMore: function () {
      var t;
      if (this.canPullUp)
        try {
          this.$refs[this.selectTab] &&
            (null == (t = this.$refs[this.selectTab]) || t.getData());
        } catch (t) {}
    },
    changeSwiper: function (t) {
      var e = t.detail,
        i = e.currentItemId;
      "touch" === e.source && this.changeTabs(i);
    },
    changeTabs: function (t) {
      var e, i;
      this.clearPress(),
        this.selectTab != t && (this.isReportedScroll = !1),
        (this.selectTab = t);
      var s = -1;
      for (var n in this.tabs)
        if (this.tabs[n].show && ((s += 1), n === t)) break;
      (this.currentSwiper = s),
        this.tabs[t].visited
          ? (this.checkPullUp(), this.getSwiperHeight())
          : ((this.tabLoading = !0), (this.tabs[t].visited = !0)),
        this.tabBarFixed &&
          m.wx$1.pageScrollTo({
            scrollTop: this.tabBarTop - this.topBarHeight,
            duration: 0,
          }),
        (this.isIndex || this.isPlate) &&
          (null == (e = this.$refs.cfg) || e.clearRefresh(),
          "cfg" === t && (null == (i = this.$refs.cfg) || i.judgeTime())),
        this.statReort(this.tabs[t].stat, { stockid: this.symbol });
      var r = m.StockBridge.getStorage("quoteSelectTab") || {};
      (r[this.storageKey] = this.selectTab),
        m.StockBridge.setStorage("quoteSelectTab", r),
        "fund" === t &&
          this.isETF &&
          this.statReort("hq.detail.etffund.tab.click"),
        (this.showGoTop = !1);
    },
    tabLoaded: function () {
      (this.tabLoading = !1), this.checkPullUp();
      var t = this.query.tabCurrentModule && this.query.tab === this.selectTab;
      this.getSwiperHeight(500, t);
    },
    refreshTab: function () {
      (this.tabLoading = !0), (this.tabStatus = m.COMMON_PAGE_STATUS.LOADING);
    },
    tabError: function () {
      this.tabStatus = m.COMMON_PAGE_STATUS.ERROR;
    },
    retryTab: function () {},
    getSwiperHeight: function () {
      var t = this,
        e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      clearTimeout(this.swiperTimeOut),
        (this.swiperTimeOut = setTimeout(function () {
          var e = t;
          m.wx$1
            .createSelectorQuery()
            .in(t)
            .select("#".concat(t.selectTab, "Swiper"))
            .boundingClientRect()
            .exec(function (s) {
              var n;
              if (
                ((t.swiperHeight =
                  null == (n = null == s ? void 0 : s[0]) ? void 0 : n.height),
                i && !e.isScrolledFlag)
              ) {
                var r = {
                    finance_performanceTrends: {
                      selector:
                        ".tab-content >>> .mod-finance >>> .performance-trends",
                      offsetTop: -200,
                    },
                    finance_profitForcast: {
                      selector:
                        ".tab-content >>> .mod-finance >>> .profit-forcast",
                      offsetTop: -200,
                    },
                    fund_mainFund: {
                      selector: ".tab-content >>> .funds-container.funds-main",
                      offsetTop: -200,
                    },
                    fund_hkSaleEmpty: {
                      selector:
                        ".tab-content >>> .fund-hk-container >>> .saleEmpty-container",
                    },
                    mine_overview: {
                      selector:
                        ".tab-content >>> .mod-ms >>> .overview-wrapper",
                      offsetTop: -200,
                    },
                  },
                  a = ""
                    .concat(t.query.tab, "_")
                    .concat(t.query.tabCurrentModule);
                if (!r[a]) return;
                e.scrollTimer && clearTimeout(e.scrollTimer),
                  (e.scrollTimer = setTimeout(function () {
                    m.wx$1.pageScrollTo(
                      f(h({ duration: 300 }, r[a]), {
                        success: function () {
                          e.isScrolledFlag = !0;
                        },
                      })
                    );
                  }, 50));
              }
            }),
            "brief" === t.selectTab &&
              t.firstCalledBrief &&
              ((t.firstCalledBrief = !1), t.getSwiperHeight(1e3));
        }, e));
    },
    checkPullUp: function () {
      try {
        this.$refs;
      } catch (t) {
        return void (this.canPullUp = !1);
      }
      "info" === this.selectTab
        ? (this.canPullUp = this.$refs.info.checkPullUp())
        : "news" === this.selectTab ||
          "notice" === this.selectTab ||
          "report" === this.selectTab
        ? (this.canPullUp = this.$refs[this.selectTab].list.length > 0)
        : (this.canPullUp = !1);
    },
    onShare: function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return p(
        this,
        null,
        i().mark(function e() {
          var s, n;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = t), !e.t0)) {
                      e.next = 4;
                      break;
                    }
                    return (
                      (e.next = 4),
                      new Promise(function (t) {
                        setTimeout(function () {
                          t();
                        }, 80);
                      })
                    );
                  case 4:
                    return (
                      (s = getCurrentPages()),
                      (n = s[s.length - 1]),
                      e.abrupt("return", {
                        title: this.getShareTitle(),
                        path: "/"
                          .concat(n.route, "?market=")
                          .concat(this.market, "&scode=")
                          .concat(this.scode, "&stat_data=")
                          .concat(
                            this.$refs.bottomBar.isClickBottomShare
                              ? "OsQ00p000h029"
                              : "Ocj00p000h029",
                            "&_share_source_=appmessage"
                          )
                          .concat(this.actTackQuery || ""),
                        mtaParams: { stockid: this.symbol },
                      })
                    );
                  case 6:
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
    onShareTimeLine: function () {
      return {
        title: this.getShareTitle(),
        query: "market="
          .concat(this.market, "&scode=")
          .concat(
            this.scode,
            "&stat_data=FMzxgxcxW006030001&_share_source_=timeline"
          )
          .concat(this.actTackQuery || ""),
      };
    },
    getShareTitle: function () {
      try {
        var t = "",
          e = Math.abs(this.stockOverView.zdf),
          i = this.stockOverView.zdf,
          s = this.stockOverView.dqj,
          n = this.stockOverView.price_ceiling,
          r = this.stockOverView.price_floor,
          a = L(this.stockName, 20);
        return (
          e <= 2
            ? (t = "「".concat(a, "」涨跌幅：").concat(i, "%"))
            : e <= 5
            ? (t = "「"
                .concat(a, "」")
                .concat(parseFloat(i) > 0 ? "大涨" : "大跌", "：")
                .concat(i, "%"))
            : ((t = "「"
                .concat(a, "」")
                .concat(parseFloat(i) > 0 ? "暴涨" : "暴跌", "：")
                .concat(i, "%")),
              ((n && n > 0) || (r && r > 0)) &&
                (s === n && (t = "「".concat(a, "」涨停：").concat(i, "%")),
                s === r && (t = "「".concat(a, "」跌停：").concat(i, "%")))),
          t
        );
      } catch (t) {}
    },
    onOpenEmbeddedTrade: function (t) {
      var e,
        i,
        s,
        n,
        r = this;
      (this.isLoadTrade = !0),
        (this.embeddedEntrustType = t),
        this.isTradeFirst ||
          (this.statReort("hq.stock_detail.touch_trade_button", {
            stockid: this.symbol,
            durationTime: Date.now() - this.enterTime,
          }),
          (this.embeddedClickStartTime = Date.now())),
        setTimeout(function () {
          (r.showEmbeddedTrade = !0), (r.showQuotationBar = !0);
        }, 10),
        null ==
          (s =
            null == (e = null == ot ? void 0 : ot.mpReporter)
              ? void 0
              : e.reportEvent) ||
          s.call(e, "HQ_BOTTOMBAR_TRADEBTN_CLICK", {
            ext4: this.isTradeFirst
              ? v.EMBEDDED_INQUOTE_STATUS.AUTO
              : v.EMBEDDED_INQUOTE_STATUS.MANUAL,
            ext5: this.hasClickedTrade ? "0" : "1",
            ext6: null == (i = st.value) ? void 0 : i.code,
          }),
        (this.hasClickedTrade = !0),
        m
          .usePluginSafebox()
          .processZl(null == (n = st.value) ? void 0 : n.code);
    },
    embeddedTradeFn: function (t) {
      var e,
        i,
        s,
        n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (t)
        try {
          var o = this.selectComponent("#embeddedTrade");
          (null == (e = null == o ? void 0 : o.$vm) ? void 0 : e[t])
            ? o.$vm[t](r)
            : null ==
                (n =
                  null ==
                  (s =
                    null == (i = null == this ? void 0 : this.$refs)
                      ? void 0
                      : i.embeddedTradeRef)
                    ? void 0
                    : s[t]) || n.call(s, r);
        } catch (t) {
          if (a) throw t;
        }
    },
    handlePageCloseEmbeddedTrade: function () {
      try {
        this.embeddedTradeFn("handleClose", null, !0);
      } catch (t) {
        this.onCloseEmbeddedTrade();
      }
    },
    onCloseEmbeddedTrade: function () {
      var t = this;
      this.showMiniQuotation ||
        ((this.showMiniQuotation = !0),
        this.$nextTick(function () {
          t.getTabBarTop();
        })),
        this.isTradeFirst &&
          (this.dataReady ||
            (this.lazyLoadTimer && clearTimeout(this.lazyLoadTimer),
            this.dataReady || this.onInitDataByTradeFirst()),
          delete this.query.halfscreen,
          (this.isTradeFirst = !1)),
        (this.hasAutoScrolled = !1),
        this.showEmbeddedTrade &&
          ((this.showQuotationBar = !1),
          (this.showEmbeddedTrade = !1),
          this.embeddedTradeFn("handleResetDailog"),
          this.embeddedTradeFn("handleUnload"),
          (this.tradeAnimate = !0));
    },
    onToggleBrokerSuc: function () {
      var t;
      null == (t = this.$refs.chartWrapper) || t.clearAndRereshTradePoint();
    },
    onShowToggleBrokerPopup: function () {
      this.onCloseEmbeddedTrade(), (this.showToggleBrokerPopup = !0);
    },
    calcEmbeddedDuration: function (t, e, i) {
      var s;
      (s = (null == i ? void 0 : i.passwordingTimeStamp)
        ? i.passwordingTimeStamp - t
        : Date.now() - t),
        !isNaN(s) && s >= 0 && ot.mpReporter.reportTime(e, s);
    },
    onTradeDataReady: function (t) {
      var e,
        i = !this.tradeMounted;
      (this.tradeMounted = !0),
        this.isTradeFirst
          ? (this.lazyLoadTimer && clearTimeout(this.lazyLoadTimer),
            this.onInitDataByTradeFirst(),
            this.calcEmbeddedDuration(
              null == (e = this.query) ? void 0 : e.jtime,
              "HALFSCREEN-IMMEDIATE-TIMECOST",
              t
            ))
          : i &&
            this.calcEmbeddedDuration(
              this.embeddedClickStartTime,
              "HALFSCREEN-MANUAL-TIMECOST",
              t
            );
    },
    onOpenHalfChart: function () {
      var t,
        e,
        i = this;
      (this.isLoadHalfChart = !0),
        (this.embeddedHalfChartStartTime = Date.now()),
        (this.halfChartMounted = !1),
        setTimeout(function () {
          i.showHalfChart = !0;
        }, 10),
        null ==
          (e =
            null == (t = null == ot ? void 0 : ot.mpReporter)
              ? void 0
              : t.reportEvent) ||
          e.call(t, "HQ_HALFCHART_OPEN", { ext6: this.brokerCode });
    },
    onCloseHalfChart: function () {
      this.showHalfChart &&
        ((this.showHalfChart = !1),
        this.halfChartFn("handleUnload"),
        (this.halfChartAnimate = !0));
    },
    halfChartFn: function (t) {
      var e,
        i,
        s,
        n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (t)
        try {
          var o = this.selectComponent("#embeddedHalfChart");
          (null == (e = null == o ? void 0 : o.$vm) ? void 0 : e[t])
            ? o.$vm[t](r)
            : null ==
                (n =
                  null ==
                  (s =
                    null == (i = null == this ? void 0 : this.$refs)
                      ? void 0
                      : i.embeddedHalfChartRef)
                    ? void 0
                    : s[t]) || n.call(s, r);
        } catch (t) {
          if (a) throw t;
        }
    },
    onChartDataReady: function (t) {
      var e = !this.halfChartMounted;
      (this.halfChartMounted = !0),
        e &&
          this.calcEmbeddedDuration(
            this.embeddedHalfChartStartTime,
            "HALFCHART-MANUAL-TIMECOST",
            t
          );
    },
    onToggleBroker: function (t) {
      t && this.embeddedTradeFn("setCurrentBrokerCode", t),
        this.onReturnToggleBroker();
    },
    statReort: function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      m.StockBridge.report(t, e);
    },
    onCloseToggleBroker: function () {
      this.showToggleBrokerPopup = !1;
    },
    onReturnToggleBroker: function () {
      (this.showToggleBrokerPopup = !1), this.onOpenEmbeddedTrade();
    },
    shouldShowTradeEmbedded: function () {
      return p(this, arguments, function () {
        var t = this;
        return i().mark(function e() {
          var s, n, r, a;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((e.prev = 0),
                      t.isHS ||
                        J({
                          market: t.market,
                          dealercode: null == (s = st.value) ? void 0 : s.code,
                          stockType: t.stockType,
                        }))
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 3:
                    if (
                      !(b.utils.isDebt(t.stockType) || t.isIndex || t.isPlate)
                    ) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 5:
                    if (et.value) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 7:
                    return (e.next = 9), m.getPcIsDisabledTrade(!1);
                  case 9:
                    if (((e.t0 = !e.sent), !e.t0)) {
                      e.next = 14;
                      break;
                    }
                    return (e.next = 13), it();
                  case 13:
                    e.t0 = !!e.sent;
                  case 14:
                    return e.abrupt("return", e.t0);
                  case 17:
                    return (
                      (e.prev = 17),
                      (e.t1 = e.catch(0)),
                      e.abrupt(
                        "return",
                        (null ==
                          (a =
                            null == (n = null == ot ? void 0 : ot.mpReporter)
                              ? void 0
                              : n.reportEvent) ||
                          a.call(n, "mon_trade_quote_getsettingfail", {
                            ext3: e.t1,
                            ext6: null == (r = st.value) ? void 0 : r.code,
                          }),
                        !1)
                      )
                    );
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 17]]
          );
        })();
      });
    },
    onYYTaskEvent: function (t) {
      var e = this;
      (this.isInitiativeTask = T.isInitiativeTask(t)),
        this.isInitiativeTask &&
          m.StockBridge.busOn("growth-yy.task.update_share_link", function (t) {
            var i = t.scode,
              s = t.taskid,
              n = t.actid;
            e.actTackQuery = "&share_code="
              .concat(i, "&share_type=task_")
              .concat(s, "_")
              .concat(n, "&stat_data=OAf00p000k002");
          });
    },
    openRemind: function () {
      this.statReort("hq.stock_detail.remind_setting_show"),
        m.StockRouter.routeTo({
          name: "RemindSetting",
          query: {
            market: this.market,
            scode: this.scode,
            stockName: encodeURIComponent(this.stockName),
          },
        });
    },
    silentSubscribe: function () {
      m.silentSubscribe(), this.clearPress();
    },
    toggleAdded: function () {
      return p(
        this,
        null,
        i().mark(function t() {
          var e;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      null == (e = this.$refs.quotation)
                        ? void 0
                        : e.toggleAdded()
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    setAddedStatus: function (t) {
      return p(
        this,
        null,
        i().mark(function e() {
          var s;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (s = void 0 !== this.stockAdded),
                      (this.stockAdded = t),
                      s && this.judgeShowDeliveryGuide();
                  case 2:
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
    judgeShowDeliveryGuide: function () {
      var t = this;
      this.deliveryTimer && clearTimeout(this.deliveryTimer),
        (this.deliveryTimer = null),
        (this.deliveryTimer = setTimeout(function () {
          t.stockAdded && (t.showDeliveryGuideSubscibe = !0);
        }, 1500));
    },
    setTradeStock: function (t) {
      this.currentEtfMsg = t;
    },
    miniapplyTotrade: function (t) {
      return p(
        this,
        null,
        i().mark(function e() {
          var s, n;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((s = this.currentEtfMsg),
                      (n = (null == s ? void 0 : s.fullCode) || ""),
                      this.statReort("hq.mini_apply.totrade_click", {
                        fchannel_id_fm_i: t,
                        stockid: n,
                      }),
                      m.sdkBridge.navToBrokerPage({
                        name: "TradeStock",
                        data: s,
                        stat: t,
                      }),
                      !n)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return (
                      (e.prev = 2),
                      (e.next = 5),
                      m.Request.mtaReport({
                        busi: "hq",
                        eventName: "hk_us_stock_dtl_buy_click",
                        params: { related_stockid: n },
                      })
                    );
                  case 5:
                    e.next = 9;
                    break;
                  case 7:
                    (e.prev = 7), (e.t0 = e.catch(2));
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[2, 7]]
          );
        })
      );
    },
    showMiniApply: function () {
      (this.currentEtfMsg = null),
        (this.miniApplyOpenSession += 1),
        (this.showMiniApplyFlag = !0);
    },
    closeMiniApply: function () {
      (this.showMiniApplyFlag = !1), (this.currentEtfMsg = null);
    },
    showLiteComEdit: function (t) {
      var e = t.comEditData,
        i = t.headimageurl;
      (this.comEditData = e), (this.headimageurl = i), (this.showComEdit = !0);
    },
    onNewComment: function (t, e) {
      var i,
        s = this;
      null == (i = this.hqBridge) || i.busEmit("onNewComment", t, e),
        this.$nextTick(function () {
          var t;
          null == (t = s.hqBridge) || t.busEmit("watchHeightChange");
        });
    },
    onHideComEdit: function () {
      var t = this;
      (this.showComEdit = !1),
        this.$nextTick(function () {
          var e;
          null == (e = t.hqBridge) || e.busEmit("watchHeightChange");
        });
    },
    handleDelistedStockTrade: function () {
      var t = this;
      this.statReort("quote.stockdetail.delistedmodal_show");
      var e = st.value.code,
        s = m.broker[e].tel,
        n = m.broker[e].name;
      m.StockBridge.modal({
        content:
          "根据交易所规则，该证券已从当前市场退市，不支持继续交易。如您仍持有该证券，请联系券商客服咨询处理。\n"
            .concat(n, "客服电话：")
            .concat(s),
        confirmText: "联系客服",
        confirmColor: "#E63535",
        success: function (e) {
          return p(
            t,
            null,
            i().mark(function t() {
              return i().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.confirm) {
                          t.next = 10;
                          break;
                        }
                        return (
                          (t.prev = 1),
                          this.statReort(
                            "quote.stockdetail.delistedmodal_confirm"
                          ),
                          (t.next = 5),
                          m.wxComm.makePhoneCall(s)
                        );
                      case 5:
                        t.next = 10;
                        break;
                      case 7:
                        (t.prev = 7),
                          (t.t0 = t.catch(1)),
                          "makePhoneCall:fail cancel" !== t.t0.errMsg &&
                            m.StockBridge.toast(
                              "调起系统拨号功能失败，请重试",
                              "none"
                            );
                      case 10:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[1, 7]]
              );
            })
          );
        },
      });
    },
    setBottomBarCount: function (t, e) {
      var i, s;
      try {
        "function" ==
          typeof (null == (i = this.$refs.bottomBar)
            ? void 0
            : i.setLocalBottomBarCount) &&
          void 0 !== this.stockAdded &&
          (null == (s = this.$refs.bottomBar) ||
            s.setLocalBottomBarCount(t, e));
      } catch (t) {
        this.statReort("hq.stock_detail.error_setbottombar_count");
      }
    },
    remindBubble: function (t) {
      var e = this;
      "OyT00p000f061" === t &&
        setTimeout(function () {
          var t;
          null == (t = e.hqBridge) || t.busEmit("mp-bubble-show-newprice"),
            e.statReort("hq.stock_detail.remind_set_tip_brow");
        }, 300);
    },
    setPageFixed: function (t) {
      this.isPageFixed = t;
    },
    getStockTag: function (t) {
      return p(
        this,
        null,
        i().mark(function e() {
          var s;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), m.getStockTag(t);
                  case 3:
                    (e.t0 = t),
                      (s = e.sent.data[e.t0]) && (this.stockTag = s),
                      (e.next = 10);
                    break;
                  case 8:
                    (e.prev = 8), (e.t1 = e.catch(0));
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
    getHotTalk: function () {
      return p(
        this,
        null,
        i().mark(function t() {
          var e, s, n, r, a, o;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((s = m.wx$1.getStorageSync("newHotTalkObject")),
                      (n = s ? s.timestamp : 0),
                      !(new Date() - n > 3e5))
                    ) {
                      t.next = 8;
                      break;
                    }
                    return (t.next = 5), this.getHotTalkList();
                  case 5:
                    (r = t.sent),
                      (a = {}),
                      null == (e = null == r ? void 0 : r.data) ||
                        e.comment_list.forEach(function (t, e) {
                          var i = t.substring(2, 8);
                          a[i] = "".concat(e + 1);
                        }),
                      (s = { data: a, timestamp: new Date() }),
                      m.wx$1.setStorageSync("newHotTalkObject", s);
                  case 8:
                    (o = s.data || {})[this.scode]
                      ? (this.hotTalkRank = o[this.scode])
                      : (this.hotTalkRank = "");
                  case 10:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    getHotTalkList: function () {
      return p(
        this,
        null,
        i().mark(function t() {
          return i().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (t.next = 2),
                    m.StockBridge.request(
                      "https://wzq.tenpay.com/group/newstockgroup/RssService2/hotDiscussStockIndex?hot_comment=1",
                      "GET",
                      {}
                    )
                  );
                case 2:
                  return t.abrupt("return", t.sent);
                case 3:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    },
    addBondPush: function (t) {
      var e;
      try {
        null == (e = this.$refs.quotation) || e.addBondPush(t);
      } catch (t) {}
    },
    changeShowNewsBar: function (t) {
      this.showNewsBar = t;
    },
    onUpdateBond: function (t) {
      var e;
      null == (e = this.$refs.bondbar) || e.updateData(t.data);
    },
    onCloseAiDialog: function () {
      this.isAiDialogShow = !1;
    },
    showAiDialog: function (t) {
      if (
        (m.StockBridge.report("hq.stock_detail.ai_dialog_brow"),
        Object.keys(t).includes("needAnswer"))
      ) {
        var e = t,
          i = e.needAnswer,
          s = (function (t, e) {
            var i = {};
            for (var s in t) l.call(t, s) && e.indexOf(s) < 0 && (i[s] = t[s]);
            if (null != t && c) {
              var r,
                a = n(c(t));
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  s = r.value;
                  e.indexOf(s) < 0 && u.call(t, s) && (i[s] = t[s]);
                }
              } catch (t) {
                a.e(t);
              } finally {
                a.f();
              }
            }
            return i;
          })(e, ["needAnswer"]);
        (this.aiNeedAnswer = i), (this.aiParams = s);
      } else this.aiParams = t;
      this.isAiDialogShow = !0;
    },
    showAiEntry: function () {
      var t,
        e = this;
      "ams" === (null == (t = this.query) ? void 0 : t.label)
        ? m.wx$1.pageScrollTo({
            scrollTop: 300,
            duration: 300,
            success: function () {
              m.wx$1
                .createSelectorQuery()
                .select("#merge-news-anchor")
                .boundingClientRect(function (t) {
                  t &&
                    ((e.bubbleStyle = {
                      position: "absolute",
                      top: "".concat(t.top + e.mpscrollTop, "px"),
                      transform: "translate(-50%, -125%)",
                      zIndex: 2e3,
                    }),
                    (e.showBubble = !0),
                    e.bubbleTimer && clearTimeout(e.bubbleTimer),
                    (e.bubbleTimer = setTimeout(function () {
                      e.showBubble = !1;
                    }, 3e3)));
                })
                .exec();
            },
          })
        : this.clearAiBubble(),
        this.$nextTick(function () {
          e.tabLoaded();
        });
    },
    clearAiBubble: function () {
      (this.showBubble = !1),
        this.bubbleTimer && clearTimeout(this.bubbleTimer),
        (this.bubbleTimer = null);
    },
    clearTask: function () {
      var t;
      (null == (t = getApp().globalData) ? void 0 : t.taskConfig) &&
        (getApp().globalData.taskConfig = {});
    },
    handleShowTipModal: function (t) {
      var e = t.type;
      (this.tipMode = e), (this.showTipModal = !0);
    },
    hideTipModal: function () {
      this.showTipModal = !1;
    },
    onTipLoaded: function () {
      this.tipLoaded = !0;
    },
  },
};
Array ||
  (
    m.resolveComponent("mp-privacy-dialog") +
    m.resolveComponent("stock-privacy-dialog") +
    m.resolveComponent("TopBar") +
    m.resolveComponent("QuotationBar") +
    m.resolveComponent("MarqueeDialogAdv") +
    m.resolveComponent("MarqueeWzqxcx") +
    m.resolveComponent("MiniQuotation") +
    m.resolveComponent("BondBar") +
    m.resolveComponent("NewsBar") +
    m.resolveComponent("ChartWrapper") +
    m.resolveComponent("SmallFund") +
    m.resolveComponent("st-status") +
    m.resolveComponent("Info") +
    m.resolveComponent("MergeNews") +
    m.resolveComponent("NewsPlate") +
    m.resolveComponent("IndexRank") +
    m.resolveComponent("PlateRank") +
    m.resolveComponent("attention-point") +
    m.resolveComponent("FundETF") +
    m.resolveComponent("BriefHS") +
    m.resolveComponent("BriefHK") +
    m.resolveComponent("BriefUS") +
    m.resolveComponent("BriefFund") +
    m.resolveComponent("BriefETF") +
    m.resolveComponent("BriefDebt") +
    m.resolveComponent("BriefWarran") +
    m.resolveComponent("BriefBJ") +
    m.resolveComponent("BriefContract") +
    m.resolveComponent("Asssets") +
    m.resolveComponent("Diagnose") +
    m.resolveComponent("Mine") +
    m.resolveComponent("Finance") +
    m.resolveComponent("Notice") +
    m.resolveComponent("Report") +
    m.resolveComponent("InnerFund") +
    m.resolveComponent("plate-fund") +
    m.resolveComponent("HalfScreenTradeShell") +
    m.resolveComponent("HalfChartScreenShell") +
    m.resolveComponent("toggle-broker") +
    m.resolveComponent("mp-bubble") +
    m.resolveComponent("BottomBar") +
    m.resolveComponent("Task") +
    m.resolveComponent("PrivacyPolicyModal") +
    m.resolveComponent("FollowGuide") +
    m.resolveComponent("SubscribeGuide") +
    m.resolveComponent("MainSwitchGuide") +
    m.resolveComponent("etf-recommend") +
    m.resolveComponent("mini-apply") +
    m.resolveComponent("comEdit") +
    m.resolveComponent("BottomBanner") +
    m.resolveComponent("DeliveryGuideSubscribe") +
    m.resolveComponent("share-button") +
    m.resolveComponent("CenterBubble") +
    m.resolveComponent("preload-comment") +
    m.resolveComponent("TipsInfo") +
    m.resolveComponent("half-screen-ai-entry") +
    m.resolveComponent("ThirteenAnniversaryTask")
  )();
var lt = m._export_sfc(ct, [
  [
    "render",
    function (t, e, i, s, n, r) {
      return m.e(
        { a: t.rootFontSize, b: n.query },
        n.query
          ? m.e(
              { c: !r.isPCWeixin },
              r.isPCWeixin
                ? {}
                : {
                    d: m.sr("topBar", "703e9755-2"),
                    e: m.o(r.refresh, 79),
                    f: m.o(r.showTradeTimeLinePop, 80),
                    g: m.o(r.getTopBarHeight, 81),
                    h: m.p({
                      skin: n.skin,
                      "is-fixed": n.fixTopbar,
                      market: r.market,
                      scode: r.formattedCode,
                      "stock-type": n.stockType,
                      "show-price": n.topBarShowPrice,
                      "stock-name": n.stockName,
                      status: n.compositeStatus,
                      showTradeInfo: r.showTradeInfo,
                      "hide-sub-title":
                        n.isTradeFirst ||
                        ((n.showEmbeddedTrade || n.showHalfChart) &&
                          n.mpscrollTop > 35),
                    }),
                  },
              { i: n.showEmbeddedTrade && n.showQuotationBar },
              n.showEmbeddedTrade && n.showQuotationBar
                ? {
                    j: m.o(r.setEmbeddedPrice, 82),
                    k: m.o(r.getQuotationBarLocation, 83),
                    l: m.p({
                      "stock-over-view": n.stockOverView,
                      "trade-state": n.tradeState,
                      "is-g-g-t": r.isGGT,
                    }),
                    m: n.mpscrollTop > 0 ? 1 : "",
                    n: "".concat(n.topBarHeight, "px"),
                  }
                : {},
              { o: r.showTabs && n.tabBarFixed },
              r.showTabs && n.tabBarFixed
                ? {
                    p: m.f(n.tabs, function (t, e, i) {
                      return m.e(
                        { a: t.show },
                        t.show
                          ? {
                              b: m.t(t.name),
                              c: e === n.selectTab ? 1 : "",
                              d: m.o(
                                function (t) {
                                  return r.changeTabs(e);
                                },
                                84,
                                e
                              ),
                            }
                          : {},
                        { e: e }
                      );
                    }),
                    q: n.showTabBar ? "" : 1,
                    r: "".concat(n.topBarHeight, "px"),
                  }
                : {},
              {
                s: m.w(
                  function (e, i, s) {
                    return m.e(
                      t.premoteMixin && t.premoteMixin.MarqueeDialogAdv
                        ? {
                            a: "703e9755-5-" + s + ",703e9755-4",
                            b: m.p({
                              premote:
                                t.premoteMixin &&
                                t.premoteMixin.MarqueeDialogAdv,
                              "is-show": e.isDialogShow,
                            }),
                          }
                        : {},
                      { c: s, d: i }
                    );
                  },
                  { name: "d", path: "s", vueId: "703e9755-4" }
                ),
                t: t.premoteMixin && t.premoteMixin.MarqueeDialogAdv,
                v: t.premoteMixin && t.premoteMixin.Marquee,
                w: m.p({ premote: t.premoteMixin && t.premoteMixin.Marquee }),
                x: m.sr("quotation", "703e9755-6"),
                y: n.showMiniQuotation,
                z: m.o(r.onInitData, 85),
                A: m.o(r.onUpdateData, 86),
                B: m.o(r.getTabBarTop, 87),
                C: m.o(t.onCheckUserAgreementStatus, 88),
                D: m.o(r.onUpdateBond, 89),
                E: m.p({
                  skin: n.skin,
                  market: r.market,
                  scode: r.scode,
                  "did-agree-user-agreement": t.didAgreeUserAgreement.value,
                  "show-t0-tag": t.showT0Tag,
                  "is-hidden": n.isPageHidden,
                }),
                F: n.showBondSplit,
              },
              (n.showBondSplit, {}),
              { G: n.dataLazyReady && r.showBondBar },
              n.dataLazyReady && r.showBondBar
                ? {
                    H: m.sr("bondbar", "703e9755-7"),
                    I: m.o(r.addBondPush, 90),
                    J: m.o(function (t) {
                      return (n.showBondSplit = !0);
                    }, 91),
                    K: m.p({
                      symbol: r.symbol,
                      market: r.market,
                      scode: r.scode,
                      stockType: n.stockType,
                      price: n.stockOverView.dqj,
                    }),
                    L: n.showBondSplit,
                  }
                : {},
              { M: n.showMiniQuotation && n.showNewsBar },
              (n.showMiniQuotation && n.showNewsBar, {}),
              {
                N: n.showMiniQuotation,
                O: m.o(r.changeShowNewsBar, 92),
                P: m.p({ symbol: r.symbol }),
                Q: n.showMiniQuotation,
                R: n.isSupportChart && (n.stockType || n.dataReady),
              },
              n.isSupportChart && (n.stockType || n.dataReady)
                ? {
                    S: m.sr("chartWrapper", "703e9755-9"),
                    T: m.o(r.moveChartTop, 93),
                    U: m.o(r.getIntroduce, 94),
                    V: m.o(r.getMarketState, 95),
                    W: m.o(r.getUSPanData, 96),
                    X: m.o(r.getExtraInfo, 97),
                    Y: m.o(r.getZDP, 98),
                    Z: m.o(r.handleSwitchChart, 99),
                    aa: m.o(r.openLandscape, 100),
                    ab: m.p({
                      "page-ready": n.dataReady,
                      skin: n.skin,
                      market: r.market,
                      scode: r.scode,
                      "stock-type": n.stockType,
                      quote: n.stockOverView,
                      "query-tab-key": n.queryTabKey,
                      "enable-news-bar": n.showMiniQuotation,
                      added: n.stockAdded,
                      "remind-subscribe-info": n.remindSubscribeInfo,
                      "can-show-ai-volatile":
                        t.canShowAiVolatile && r.isAiVolatileSupportedStockType,
                      "can-show-support-pressure-signal":
                        t.canShowSupportPressureSignal &&
                        r.isAiVolatileSupportedStockType,
                    }),
                  }
                : {},
              { ac: n.dataReady && !n.isSupportChart },
              (n.dataReady && n.isSupportChart, {}),
              { ad: n.dataReady && !r.isETF },
              n.dataReady && !r.isETF
                ? {
                    ae: m.sr("smallFund", "703e9755-10"),
                    af: m.o(r.getTabBarTop, 101),
                    ag: m.p({
                      "is-trading": n.isTrading,
                      symbol: r.symbol,
                      scode: r.scode,
                      type: r.market,
                      "is-index": r.isIndex,
                      "stock-over-view": n.stockOverView,
                      "stock-type": n.stockType,
                      ishs: r.isHS,
                      "stock-name": n.stockName,
                    }),
                  }
                : {},
              { ah: r.showTabs && n.dataReady },
              r.showTabs && n.dataReady
                ? m.e(
                    {
                      ai: m.f(n.tabs, function (t, e, i) {
                        return {
                          a: m.t(t.name),
                          b: e,
                          c: e === n.selectTab ? 1 : "",
                          d: t.show ? "" : 1,
                          e: m.o(
                            function (t) {
                              return r.changeTabs(e);
                            },
                            102,
                            e
                          ),
                        };
                      }),
                      aj: n.showTabBar ? "" : 1,
                      ak: n.tabBarFixed ? 0 : 1,
                      al: n.tabs,
                    },
                    n.tabs
                      ? m.e(
                          { am: n.tabLoading },
                          n.tabLoading
                            ? {
                                an: m.o(function (t) {
                                  return r.retryTab();
                                }, 103),
                                ao: m.p({ type: n.tabStatus }),
                                ap: "error" === n.tabStatus ? 1 : "",
                              }
                            : {},
                          { aq: n.tabs.info.show },
                          n.tabs.info.show
                            ? m.e(
                                { ar: n.tabs.info.visited },
                                n.tabs.info.visited
                                  ? {
                                      as: m.sr("info", "703e9755-12"),
                                      at: m.o(r.tabLoaded, 104),
                                      av: m.p({
                                        app: "zxg_xcx",
                                        skin: n.skin,
                                        scode: r.scode,
                                        market: r.market,
                                        "stock-name": n.stockName,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { aw: n.tabs.news.show },
                          n.tabs.news.show
                            ? m.e(
                                { ax: n.tabs.news.visited && !r.isPlate },
                                n.tabs.news.visited && !r.isPlate
                                  ? {
                                      ay: m.sr("news", "703e9755-13"),
                                      az: m.o(r.refreshTab, 105),
                                      aA: m.o(r.tabLoaded, 106),
                                      aB: m.o(r.recordScroollTop, 107),
                                      aC: m.o(r.showAiEntry, 108),
                                      aD: m.p({
                                        id: "merge-news-anchor",
                                        app: "zxg_xcx",
                                        skin: n.skin,
                                        scode: r.scode,
                                        market: r.market,
                                        "is-index": r.isIndex,
                                      }),
                                    }
                                  : n.tabs.news.visited && r.isPlate
                                  ? {
                                      aF: m.sr("news", "703e9755-14"),
                                      aG: m.o(r.tabLoaded, 109),
                                      aH: m.p({
                                        skin: n.skin,
                                        scode: r.scode,
                                        market: r.market,
                                        app: "zxg_xcx",
                                        "is-primary-industry":
                                          t.isPrimaryIndustry,
                                        "is-show-xiaobao-a-i": !0,
                                      }),
                                    }
                                  : {},
                                { aE: n.tabs.news.visited && r.isPlate }
                              )
                            : {},
                          { aI: n.tabs.cfg.show },
                          n.tabs.cfg.show
                            ? m.e(
                                { aJ: r.isIndex && n.tabs.cfg.visited },
                                r.isIndex && n.tabs.cfg.visited
                                  ? {
                                      aK: m.sr("cfg", "703e9755-15"),
                                      aL: m.o(r.getRankListHeight, 110),
                                      aM: m.o(r.listCheckMore, 111),
                                      aN: m.o(r.tabLoaded, 112),
                                      aO: m.o(r.refreshTab, 113),
                                      aP: m.p({
                                        scode: r.scode,
                                        market: r.market,
                                        skin: n.skin,
                                        type: n.indexRankType,
                                      }),
                                    }
                                  : {},
                                { aQ: n.tabs.cfg.visited && r.isPlate },
                                n.tabs.cfg.visited && r.isPlate
                                  ? {
                                      aR: m.sr("cfg", "703e9755-16"),
                                      aS: m.o(r.getRankListHeight, 114),
                                      aT: m.o(r.listCheckMore, 115),
                                      aU: m.o(r.tabLoaded, 116),
                                      aV: m.o(r.refreshTab, 117),
                                      aW: m.p({
                                        skin: n.skin,
                                        "plate-id": r.scode,
                                        market: r.market,
                                        "mpscroll-top":
                                          n.mpscrollTop - n.topBarHeight - 50,
                                        "is-show-xiaobao-a-i": !0,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { aX: n.tabs.north.show },
                          n.tabs.north.show
                            ? m.e(
                                { aY: r.isIndex && n.tabs.north.visited },
                                r.isIndex && n.tabs.north.visited
                                  ? {
                                      aZ: m.sr("north", "703e9755-17"),
                                      ba: m.o(r.getRankListHeight, 118),
                                      bb: m.o(r.listCheckMore, 119),
                                      bc: m.o(r.tabLoaded, 120),
                                      bd: m.o(r.refreshTab, 121),
                                      be: m.p({
                                        scode: r.scode,
                                        market: r.market,
                                        skin: n.skin,
                                        type: "north",
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { bf: n.tabs.south.show },
                          n.tabs.south.show
                            ? m.e(
                                { bg: r.isIndex && n.tabs.south.visited },
                                r.isIndex && n.tabs.south.visited
                                  ? {
                                      bh: m.sr("south", "703e9755-18"),
                                      bi: m.o(r.getRankListHeight, 122),
                                      bj: m.o(r.listCheckMore, 123),
                                      bk: m.o(r.tabLoaded, 124),
                                      bl: m.o(r.refreshTab, 125),
                                      bm: m.p({
                                        scode: r.scode,
                                        market: r.market,
                                        skin: n.skin,
                                        type: "south",
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { bn: n.tabs.attention.show },
                          n.tabs.attention.show
                            ? m.e(
                                { bo: n.tabs.attention.visited },
                                n.tabs.attention.visited
                                  ? {
                                      bp: m.o(r.tabLoaded, 126),
                                      bq: m.o(r.changePlateTab, 127),
                                      br: m.p({
                                        skin: n.skin,
                                        "plate-id": r.scode,
                                        "plate-stock-type": n.stockType,
                                        intro: n.intro,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { bs: n.tabs.etfFund.show },
                          n.tabs.etfFund.show
                            ? m.e(
                                { bt: n.tabs.etfFund.visited },
                                n.tabs.etfFund.visited
                                  ? {
                                      bv: m.sr("fund", "703e9755-20"),
                                      bw: m.o(r.tabLoaded, 128),
                                      bx: m.p({
                                        skin: n.skin,
                                        symbol: r.symbol,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { by: n.tabs.brief.show },
                          n.tabs.brief.show
                            ? m.e(
                                {
                                  bz:
                                    n.tabs.brief.visited &&
                                    !r.isFund &&
                                    "ZQ-NHG" !== n.stockType &&
                                    r.isHS,
                                },
                                n.tabs.brief.visited &&
                                  !r.isFund &&
                                  "ZQ-NHG" !== n.stockType &&
                                  r.isHS
                                  ? {
                                      bA: m.sr("brief", "703e9755-21"),
                                      bB: m.o(r.tabLoaded, 129),
                                      bC: m.o(r.refreshTab, 130),
                                      bD: m.p({
                                        scode: r.scode,
                                        market: r.market,
                                        "stock-name": n.stockName,
                                        "stock-type": n.stockType,
                                        "mpscroll-top": n.mpscrollTop,
                                        skin: n.skin,
                                        "is-trading": n.isTrading,
                                        hidden: "brief" !== n.selectTab,
                                        rank: n.hotTalkRank,
                                      }),
                                    }
                                  : {},
                                {
                                  bE:
                                    n.tabs.brief.visited &&
                                    !r.isFund &&
                                    !r.isWarrants &&
                                    "ZQ-NHG" !== n.stockType &&
                                    r.isHK,
                                },
                                n.tabs.brief.visited &&
                                  !r.isFund &&
                                  !r.isWarrants &&
                                  "ZQ-NHG" !== n.stockType &&
                                  r.isHK
                                  ? {
                                      bF: m.sr("briefhk", "703e9755-22"),
                                      bG:
                                        "brief" === n.selectTab
                                          ? "block"
                                          : "none",
                                      bH: m.o(r.tabLoaded, 131),
                                      bI: m.o(r.refreshTab, 132),
                                      bJ: m.p({
                                        id: "briefhk",
                                        scode: r.scode,
                                        market: r.market,
                                        "stock-name": n.stockName,
                                        "stock-type": n.stockType,
                                        skin: n.skin,
                                        rank: n.hotTalkRank,
                                      }),
                                    }
                                  : {},
                                {
                                  bK:
                                    n.tabs.brief.visited &&
                                    !r.isFund &&
                                    "ZQ-NHG" !== n.stockType &&
                                    r.isUS,
                                },
                                n.tabs.brief.visited &&
                                  !r.isFund &&
                                  "ZQ-NHG" !== n.stockType &&
                                  r.isUS
                                  ? {
                                      bL: m.sr("briefus", "703e9755-23"),
                                      bM:
                                        "brief" === n.selectTab
                                          ? "block"
                                          : "none",
                                      bN: m.o(r.tabLoaded, 133),
                                      bO: m.o(r.refreshTab, 134),
                                      bP: m.p({
                                        id: "briefus",
                                        scode: r.scode,
                                        market: r.market,
                                        "stock-name": n.stockName,
                                        "stock-type": n.stockType,
                                        skin: n.skin,
                                        rank: n.hotTalkRank,
                                      }),
                                    }
                                  : {},
                                {
                                  bQ:
                                    n.tabs.brief.visited &&
                                    r.isFund &&
                                    !r.isETF,
                                },
                                n.tabs.brief.visited && r.isFund && !r.isETF
                                  ? {
                                      bR: m.o(r.tabLoaded, 135),
                                      bS: m.o(r.refreshTab, 136),
                                      bT: m.p({
                                        skin: n.skin,
                                        symbol: r.symbol,
                                      }),
                                    }
                                  : {},
                                {
                                  bU:
                                    n.tabs.brief.visited && r.isFund && r.isETF,
                                },
                                n.tabs.brief.visited && r.isFund && r.isETF
                                  ? {
                                      bV: m.o(r.tabLoaded, 137),
                                      bW: m.o(r.refreshTab, 138),
                                      bX: m.p({
                                        skin: n.skin,
                                        symbol: r.symbol,
                                      }),
                                    }
                                  : {},
                                {
                                  bY:
                                    n.tabs.brief.visited &&
                                    "ZQ-NHG" === n.stockType,
                                },
                                n.tabs.brief.visited && "ZQ-NHG" === n.stockType
                                  ? {
                                      bZ: m.o(r.tabLoaded, 139),
                                      ca: m.o(r.refreshTab, 140),
                                      cb: m.p({
                                        skin: n.skin,
                                        symbol: r.symbol,
                                      }),
                                    }
                                  : {},
                                { cc: n.tabs.brief.visited && r.isWarrants },
                                n.tabs.brief.visited && r.isWarrants
                                  ? {
                                      cd: m.o(r.tabLoaded, 141),
                                      ce: m.o(r.refreshTab, 142),
                                      cf: m.p({
                                        skin: n.skin,
                                        scode: r.scode,
                                        "stock-type": n.stockType,
                                      }),
                                    }
                                  : {},
                                {
                                  cg:
                                    n.tabs.brief.visited &&
                                    (r.isBJ || r.isNq) &&
                                    !r.isETF,
                                },
                                n.tabs.brief.visited &&
                                  (r.isBJ || r.isNq) &&
                                  !r.isETF
                                  ? {
                                      ch: m.o(r.tabLoaded, 143),
                                      ci: m.o(r.refreshTab, 144),
                                      cj: m.p({
                                        symbol: r.symbol,
                                        market: r.market,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { ck: n.tabs.contract.show },
                          n.tabs.contract.show
                            ? m.e(
                                { cl: n.tabs.contract.visited },
                                n.tabs.contract.visited
                                  ? {
                                      cm: m.o(r.tabLoaded, 145),
                                      cn: m.o(r.refreshTab, 146),
                                      co: m.p({
                                        skin: n.skin,
                                        symbol: r.symbol,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { cp: n.tabs.assets.show },
                          n.tabs.assets.show
                            ? m.e(
                                { cq: n.tabs.assets.visited },
                                n.tabs.assets.visited
                                  ? {
                                      cr: m.o(r.refreshTab, 147),
                                      cs: m.o(r.tabLoaded, 148),
                                      ct: m.p({
                                        skin: n.skin,
                                        scode: r.scode,
                                        market: r.market,
                                        "is-trading": n.isTrading,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { cv: n.tabs.diagnose.show },
                          n.tabs.diagnose.show
                            ? m.e(
                                { cw: n.tabs.diagnose.visited },
                                n.tabs.diagnose.visited
                                  ? {
                                      cx: m.o(r.tabLoaded, 149),
                                      cy: m.p({
                                        skin: n.skin,
                                        symbol: r.symbol,
                                        scode: r.scode,
                                        market: r.market,
                                        "mpscroll-top": n.mpscrollTop,
                                        "stock-name": n.stockName,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { cz: n.tabs.mine.show },
                          n.tabs.mine.show
                            ? m.e(
                                { cA: n.tabs.mine.visited },
                                n.tabs.mine.visited
                                  ? {
                                      cB: m.o(function (t) {
                                        return (n.showGoTop = !0);
                                      }, 150),
                                      cC: m.o(r.tabLoaded, 151),
                                      cD: m.p({
                                        skin: n.skin,
                                        scode: r.scode,
                                        type: r.market,
                                        symbol: r.symbol,
                                        "mpscroll-top":
                                          n.mpscrollTop - n.topBarHeight - 50,
                                        "did-agree-user-agreement":
                                          t.didAgreeUserAgreement.value,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { cE: n.tabs.finance.show },
                          n.tabs.finance.show
                            ? m.e(
                                { cF: n.tabs.finance.visited },
                                n.tabs.finance.visited
                                  ? {
                                      cG: m.o(r.tabLoaded, 152),
                                      cH: m.o(r.refreshTab, 153),
                                      cI: m.p({
                                        scode: r.scode,
                                        market: r.market,
                                        skin: n.skin,
                                        "stock-name": n.stockName,
                                        "stock-type": n.stockType,
                                        hidden: "finance" !== n.selectTab,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { cJ: n.tabs.notice.show },
                          n.tabs.notice.show
                            ? m.e(
                                { cK: n.tabs.notice.visited },
                                n.tabs.notice.visited
                                  ? {
                                      cL: m.sr("notice", "703e9755-34"),
                                      cM: m.o(r.tabLoaded, 154),
                                      cN: m.p({
                                        scode: r.scode,
                                        market: r.market,
                                        app: "zxg_xcx",
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { cO: n.tabs.report.show },
                          n.tabs.report.show
                            ? m.e(
                                { cP: n.tabs.report.visited },
                                n.tabs.report.visited
                                  ? {
                                      cQ: m.sr("report", "703e9755-35"),
                                      cR: m.o(r.tabLoaded, 155),
                                      cS: m.p({
                                        scode: r.scode,
                                        market: r.market,
                                        app: "zxg_xcx",
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { cT: n.tabs.innerfund.show },
                          n.tabs.innerfund.show
                            ? m.e(
                                { cU: n.tabs.innerfund.visited },
                                n.tabs.innerfund.visited
                                  ? {
                                      cV: m.sr("innerfund", "703e9755-36"),
                                      cW: m.o(r.tabLoaded, 156),
                                      cX: m.p({
                                        market: r.market,
                                        scode: r.scode,
                                        "stock-type": n.stockType,
                                        "page-type": r.fundType,
                                        "is-trading": n.isTrading,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          { cY: n.tabs.funds.show },
                          n.tabs.funds.show
                            ? m.e(
                                { cZ: n.tabs.funds.visited },
                                n.tabs.funds.visited
                                  ? {
                                      da: m.o(r.tabLoaded, 157),
                                      db: m.p({
                                        skin: n.skin,
                                        market: r.market,
                                        scode: r.scode,
                                      }),
                                    }
                                  : {}
                              )
                            : {},
                          {
                            dc: n.currentSwiper,
                            dd: "".concat(n.swiperHeight, "px"),
                            de: m.o(function () {
                              return (
                                r.changeSwiper &&
                                r.changeSwiper.apply(r, arguments)
                              );
                            }, 158),
                          }
                        )
                      : {}
                  )
                : {},
              { df: r.showTabs && n.dataReady },
              r.showTabs && n.dataReady ? { dg: r.logoImg } : {},
              {
                dh:
                  "cfg" === n.selectTab &&
                  n.showCounter &&
                  n.counterNum > 0 &&
                  n.counterNum <= n.counterLimit,
              },
              "cfg" === n.selectTab &&
                n.showCounter &&
                n.counterNum > 0 &&
                n.counterNum <= n.counterLimit
                ? { di: m.t(n.counterNum), dj: m.t(n.counterLimit) }
                : {},
              { dk: n.dataLazyReady && n.isLoadTrade },
              n.dataLazyReady && n.isLoadTrade
                ? m.e(
                    {
                      dl: m.sr("embeddedTradeRef", "703e9755-38"),
                      dm: m.o(r.onTradeDataReady, 159),
                      dn: m.o(r.onCloseEmbeddedTrade, 160),
                      dp: m.p({
                        id: "embeddedTrade",
                        visible: n.showEmbeddedTrade,
                        scode: r.scode,
                        market: r.market,
                        "stock-name": n.stockName,
                        "entrust-type": n.embeddedEntrustType,
                        "embedded-price": s.embeddedPrice,
                        dqj: n.stockOverView.dqj,
                        "stock-type": n.stockType,
                        "trade-mode": s.embeddedTradeMode,
                        "extra-params": {
                          brokerCode: r.brokerCode,
                          brokerName: r.brokerName,
                          tradeAmount: r.tradeAmount,
                          isDataFetched: r.isDataFetched,
                          canSwitchTradeMode: r.canSwitchTradeMode,
                        },
                        platform: s.PlatformEnum.MPZXG,
                      }),
                      dq: n.tradeMounted ? "initial" : "",
                      dr: n.showEmbeddedTrade,
                      ds: m.n(n.tradeAnimate ? "need-animate" : ""),
                      dt: n.dataLazyReady && n.isLoadHalfChart,
                    },
                    n.dataLazyReady && n.isLoadHalfChart
                      ? {
                          dv: m.sr("embeddedHalfChartRef", "703e9755-39"),
                          dw: m.o(r.onChartDataReady, 161),
                          dx: m.o(r.onCloseHalfChart, 162),
                          dy: m.p({
                            id: "embeddedHalfChart",
                            visible: n.showHalfChart,
                            scode: r.scode,
                            market: r.market,
                            "stock-name": n.stockName,
                            "stock-type": n.stockType,
                            "is-trade-animate": n.halfChartAnimate,
                            "extra-params": {
                              brokerCode: r.brokerCode,
                              brokerName: r.brokerName,
                              isDataFetched: r.isDataFetched,
                            },
                            platform: s.PlatformEnum.MPZXG,
                          }),
                        }
                      : {},
                    {
                      dz: n.showToggleBrokerPopup,
                      dA: m.o(r.onToggleBroker, 163),
                      dB: m.o(r.onCloseToggleBroker, 164),
                      dC: m.o(r.onReturnToggleBroker, 165),
                      dD: m.o(r.statReort, 166),
                    }
                  )
                : {},
              {
                dE: t.premoteMixin && t.premoteMixin.BubbleMpwzqAll,
                dF: m.p({
                  premote: t.premoteMixin && t.premoteMixin.BubbleMpwzqAll,
                }),
                dG: "mine" === n.selectTab && n.showGoTop,
              },
              "mine" === n.selectTab && n.showGoTop
                ? {
                    dH: m.o(function () {
                      return r.goTabTop && r.goTabTop.apply(r, arguments);
                    }, 167),
                  }
                : {},
              { dI: n.dataReady },
              n.dataReady
                ? {
                    dJ: m.sr("bottomBar", "703e9755-42"),
                    dK:
                      !n.showEmbeddedTrade &&
                      !n.showToggleBrokerPopup &&
                      !n.showHalfChart,
                    dL: m.o(r.toggleAdded, 168),
                    dM: m.o(r.onOpenEmbeddedTrade, 169),
                    dN: m.o(t.onCheckUserAgreementStatus, 170),
                    dO: m.o(r.openRemind, 171),
                    dP: m.o(r.showMiniApply, 172),
                    dQ: m.o(r.updateRemindInfo, 173),
                    dR: m.p({
                      skin: n.skin,
                      market: r.market,
                      scode: r.scode,
                      "stock-type": n.stockType,
                      "stock-name": n.stockName,
                      "etf-data": n.etfData,
                      stockOverView: n.stockOverView,
                      "stock-added": n.stockAdded,
                      "stock-status": n.stockStatus,
                      "did-agree-user-agreement": t.didAgreeUserAgreement.value,
                      "is-from-pyq": n.isFromPyq,
                      "is-market-gray-user": r.isNewMarketGrayUser,
                      "is-can-mocktrade": r.isCanMocktrade,
                      isGGT: r.isGGT,
                      "hide-trade-area": r.isBjEtfRaising,
                    }),
                  }
                : {},
              { dS: n.dataLazyReady && n.isInitiativeTask },
              (n.dataLazyReady && n.isInitiativeTask, {}),
              {
                dT: m.o(function (e) {
                  return (t.showPrivacyPolicy = e);
                }, 174),
                dU: m.p({ value: t.showPrivacyPolicy }),
                dV: m.o(function (t) {
                  return (n.showFollowGuide = !1);
                }, 175),
                dW: m.p({ show: n.showFollowGuide, stat: "IKP00p000q012" }),
                dX: m.o(function (t) {
                  return (n.showSubscribeGuide = !1);
                }, 176),
                dY: m.p({ show: n.showSubscribeGuide }),
                dZ: m.o(function (t) {
                  return (n.showMainSwitch = !1);
                }, 177),
                ea: m.p({ show: n.showMainSwitch }),
                eb: r.miniApplyWuji,
              },
              r.miniApplyWuji
                ? {
                    ec: m.w(
                      function (t, e, i) {
                        var s = t.accountStatus;
                        return {
                          a: "703e9755-49-" + i + ",703e9755-48",
                          b: m.p({
                            "open-session": n.miniApplyOpenSession,
                            "account-status": s,
                            "wuji-config": n.miniApplyWujiConfig.slot_config,
                            symbol: r.formattedSymbol,
                            "is-h-k": r.isHK,
                            "is-u-s": r.isUS,
                          }),
                          c: i,
                          d: e,
                        };
                      },
                      {
                        name: "mini-apply-slot",
                        path: "ec",
                        vueId: "703e9755-48",
                      }
                    ),
                    ed: m.o(r.closeMiniApply, 178),
                    ee: m.o(r.setTradeStock, 179),
                    ef: m.o(r.miniapplyTotrade, 180),
                    eg: m.o(r.closeMiniApply, 181),
                    eh: m.p({
                      "show-mini-apply": n.showMiniApplyFlag,
                      "wuji-config": n.miniApplyWujiConfig,
                      "account-stat": n.miniApplyWujiConfig.account_stat,
                      symbol: r.formattedSymbol,
                      "related-stockid": n.currentEtfMsg,
                    }),
                  }
                : {},
              { ei: n.showComEdit },
              n.showComEdit
                ? {
                    ej: m.o(r.onNewComment, 182),
                    ek: m.o(r.onHideComEdit, 183),
                    el: m.p({
                      "com-edit-data": n.comEditData,
                      headimageurl: n.headimageurl,
                    }),
                  }
                : {},
              { em: t.premoteMixin && t.premoteMixin.GlobalBottomBanner },
              t.premoteMixin && t.premoteMixin.GlobalBottomBanner
                ? {
                    en: m.p({
                      "has-bottom-bar": !0,
                      premote: t.premoteMixin.GlobalBottomBanner,
                    }),
                  }
                : {},
              {
                eo:
                  n.showDeliveryGuideSubscibe &&
                  t.premoteMixin &&
                  t.premoteMixin.DeliveryGuideSubscribe,
              },
              n.showDeliveryGuideSubscibe &&
                t.premoteMixin &&
                t.premoteMixin.DeliveryGuideSubscribe
                ? {
                    ep: m.p({ premote: t.premoteMixin.DeliveryGuideSubscribe }),
                  }
                : {},
              { eq: s.longPressModule },
              s.longPressModule
                ? {
                    er: m.o(s.onClickShare, 184),
                    es: m.p({ top: s.shareBtnY }),
                  }
                : {},
              { et: n.showBubble },
              n.showBubble
                ? {
                    ev: m.o(r.clearAiBubble, 185),
                    ew: m.p({ styles: n.bubbleStyle }),
                  }
                : {},
              { ex: n.canPreloadComment },
              (n.canPreloadComment, {}),
              { ey: n.showTipModal },
              n.showTipModal
                ? {
                    ez: n.tipLoaded,
                    eA: m.o(r.onTipLoaded, 186),
                    eB: m.o(r.hideTipModal, 187),
                    eC: m.p({
                      skin: n.skin,
                      type: n.tipMode,
                      event: n.tipsInfoEvent,
                      symbol: r.symbol,
                    }),
                  }
                : {},
              { eD: n.isAiDialogShow },
              n.isAiDialogShow
                ? {
                    eE: m.o(r.onCloseAiDialog, 188),
                    eF: m.p({
                      theme: n.skin,
                      "show-ai-dialog": n.isAiDialogShow,
                      "ai-dialog-question": n.aiParams.title,
                      "ai-question-query": n.aiParams.prompt,
                      "server-obj": n.aiParams,
                      "source-from": n.aiParams.scene || "xiaobao",
                      "stock-code": r.symbol,
                      "stock-name": n.stockName,
                      "need-answer": n.aiNeedAnswer,
                    }),
                  }
                : {},
              {
                eG: m.p({ mode: "guide" }),
                eH: 1.3 * n.screenHeight + "px",
                eI: n.skin,
                eJ: m.n("black" === n.skin ? "skin-black" : ""),
                eK: m.n(n.isFromPyq ? "pyq-mode" : ""),
                eL: m.n(s.longPressModule),
                eM: m.n(n.isPageFixed ? "fixed" : ""),
                eN: m.o(function () {
                  return (
                    r.silentSubscribe && r.silentSubscribe.apply(r, arguments)
                  );
                }, 189),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-703e9755"],
]);
(ct.__runtimeHooks = 7), wx.createPage(lt);
var ut = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.PlatformEnum = C),
  (exports.ThemeEnum = M),
  (exports.TradeType = B),
  (exports.cGFnZXMvcXVvdGUvcXVvdGUudnVl = ut);
