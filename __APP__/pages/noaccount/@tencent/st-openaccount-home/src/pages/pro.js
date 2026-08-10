require("../../../../../../@babel/runtime/helpers/Objectvalues"),
  require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  t = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  s = function (e, t, r) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, t) {
    for (var r in t || (t = {})) u.call(t, r) && s(e, r, t[r]);
    if (c) {
      var o,
        i = n(c(t));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          r = o.value;
          l.call(t, r) && s(e, r, t[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return i(e, a(t));
  },
  h = function (e, t, r) {
    return new Promise(function (n, o) {
      var i = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, a);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  f = require("../../../../../../common/vendor.js"),
  g = require("../../../stock-hq-data/index.js");
(e = f.Wuji), "mp" === f.StockBridge.ENV || f.dist.detect().env;
var v = {
    get: function (t) {
      return h(
        this,
        null,
        r().mark(function n() {
          var o, i, a, c;
          return r().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (o = t.filter),
                    "",
                    (a = "mina"),
                    (c = []),
                    (i = void 0 === o ? "" : o) &&
                      (c.push(decodeURIComponent(i)), c.push("&")),
                    c.push("platform=".concat(a)),
                    (i = encodeURIComponent(c.join(""))),
                    (r.next = 4),
                    e.get(d(p({}, t), { filter: i }))
                  );
                case 4:
                  return r.abrupt("return", r.sent);
                case 5:
                case "end":
                  return r.stop();
              }
          }, n);
        })
      );
    },
  },
  m = [
    {
      icon: "https://st.gtimg.com/pics/20221125_fk03t71zgnd.png",
      title: "特色决策锦囊",
      text: "智能选股，投资更聪明",
    },
    {
      icon: "https://st.gtimg.com/pics/20221125_5nstykgq8to.png",
      title: "账户智能分析",
      text: "复盘盈亏，交易更高效",
    },
    {
      icon: "https://st.gtimg.com/pics/20221125_8ery6n56o2x.png",
      title: "便捷交易能力",
      text: "极速下单，买卖更高效",
    },
    {
      icon: "https://st.gtimg.com/pics/20221125_8vak2g12rci.png",
      title: "佣金费率万2.5",
      text: "笔笔划算，省钱又省心",
    },
  ],
  S = [
    {
      icon: "https://st.gtimg.com/design/cd9ff3303f7ec0670b5815cb0de62f8a.png",
      title: "特色决策锦囊",
      text: "智能选股，投资更聪明",
    },
    {
      icon: "https://st.gtimg.com/design/fde3b9922656f61a21a45bb5b87a685f.png",
      title: "账户智能分析",
      text: "复盘盈亏，交易更高效",
    },
    {
      icon: "https://st.gtimg.com/design/8fba11bbf3f860e092eff38e79348e98.png",
      title: "便捷交易能力",
      text: "极速下单，买卖更高效",
    },
    {
      icon: "https://st.gtimg.com/design/f5c550510f716fa3e938f7f80959d961.png",
      title: "费率最低至万2.3",
      text: "笔笔划算，省钱又省心",
    },
  ],
  k = "https://st.gtimg.com/design/edcca6eaa8a77afc5261ec11d130d6bf.png",
  b = "https://st.gtimg.com/design/a753c5e82dca88bbe8adbdfc4d53d534.png",
  y = "https://st.gtimg.com/design/0f02fc56e9add50ed1b549bad5ff7acf.png.png",
  _ = "https://st.gtimg.com/design/2f5cc52e585d68dbb0b19f7c2aaa0cb6.png.png",
  w = "https://st.gtimg.com/design/20aa09862b6855e852bf46bdcccf130b.png",
  I = "https://st.gtimg.com/design/a05703440e82215caa20253e2b4dca96.png",
  B = ["10800", "10100"],
  C = {
    helperSheet: {
      appid: "act",
      schemaid: "noaccount_helpersheet",
      schemakey: "ddaa1eee8f454627920e2cb075b72224",
      filter: "isShow=1",
    },
    retainModal: {
      appid: "act",
      schemaid: "retain_modal_config",
      schemakey: "f77e0df947314cfe8d37fc50ad48be80",
      filter: "isShow=1",
    },
    statData: {
      appid: "act",
      schemaid: "noaccount_config_plan",
      schemakey: "88cb6c528ab849a6afd8ef287f537f9e",
      size: "total",
      exclude: "desc",
      filter: encodeURIComponent("config_key!=jump_link"),
    },
  },
  x = {
    APPLY: "apply",
    BIND: "bind",
    SELECT: "select",
    MANAGE: "manage",
    ENTER: "enter",
    SWITCH: "switch",
  },
  E = { CHECK: "check", ARROW: "arrow", BUTTON: "button" },
  T = "stock://statDataI",
  q = "stock://statDataO",
  A = "https://st.gtimg.com/image/apply/qrcode/ojt18p00gf162.png",
  N = "mp" === f.StockBridge.ENV ? {} : new g.DetailApi(null),
  j =
    "mp" === f.StockBridge.ENV
      ? { IS_ZXG: !1, IS_WEIXIN: !1, IS_MINA: !1, IS_ZXG_XCX: !1 }
      : f.dist.detect().env,
  P = j.IS_ZXG;
j.IS_WEIXIN, j.IS_MINA, j.IS_ZXG_XCX;
function R(e, t, n) {
  var o = f.ref(!1),
    i = f.ref(!1),
    a = f.ref(2),
    c = f.ref(!1),
    u = f.ref(!1),
    l = f.StockBridge.getSession("mpweapp-actChannelProvider"),
    s = f.ref(l || ""),
    p = f.ref(!0),
    d = f.inject("store", {}),
    g = f.reactive({
      detailCur: "",
      detailZdf: "",
      detailName: "",
      detailFiveZdf: 0,
      fullcode: "",
    }),
    x = f.computed(function () {
      var e, t;
      return "".concat(
        null ==
          (t =
            null == (e = null == n ? void 0 : n.curBrokerItem)
              ? void 0
              : e.value)
          ? void 0
          : t.name,
        '<span style="color: #3077EC">权益说明</span>'
      );
    });
  function E(e) {
    e.sort(function (e, t) {
      return e.channle < t.channel ? 1 : e.channel > t.channel ? -1 : 0;
    });
  }
  return {
    headShow: o,
    rightsReadyFlag: i,
    rightsCounts: a,
    oemIpShow: c,
    isShowDetail: u,
    actChannelProvider: s,
    hasDetailRights: p,
    detailInfo: g,
    dealerRightsSheetTitle: x,
    setDefaultConfig: function () {
      var t, r;
      (n.applyDealerListNew.value = f.cloneDeep(e.applyBrokerList)),
        P ? ((t = y), (r = _)) : ((t = k), (r = b)),
        n.applyDealerListNew.value.forEach(function (e) {
          var n;
          (n = m),
            (e.defaultRightsnormal = n),
            (e.defaultRightsRed = S),
            (e.topText = "在微信里管理你的股票账户"),
            (e.rights = []),
            (e.rightsSheet = []),
            (e.topLight = t),
            (e.topDark = r),
            (e.ipShow = !1),
            (e.btnText = "马上开户"),
            (e.btnImg = ""),
            (e.popText = ""),
            (e.tradeActTemp = ""),
            (e.rightsAdImg = {}),
            (e.popupRetain = {}),
            (e.disableSwitch = !1),
            (e.hideHelper = !1),
            (e.hideBindEnter = !1),
            (e.qrcode = A);
        });
    },
    getWujiConfig: function () {
      return h(
        this,
        null,
        r().mark(function t() {
          var c, u, l, s, p;
          return r().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (u =
                        f.StockBridge.getSession(
                          "mpweapp-applyMatchedConfig"
                        ) || []).length
                    ) {
                      t.next = 12;
                      break;
                    }
                    return (t.prev = 2), (t.next = 5), v.get(C.statData);
                  case 5:
                    (l = t.sent),
                      (s =
                        (null == (c = null == e ? void 0 : e.routeQuery)
                          ? void 0
                          : c.stat_data) || ""),
                      (s =
                        f.StockBridge.getSession(q) ||
                        f.StockBridge.getSession(T) ||
                        s),
                      (u = l.data.filter(function (e) {
                        return "" === e.channel || e.channel === s;
                      })),
                      f.StockBridge.setSession("mpweapp-applyMatchedConfig", u),
                      (t.next = 12);
                    break;
                  case 10:
                    (t.prev = 10), (t.t0 = t.catch(2));
                  case 12:
                    !(function (e) {
                      E(e),
                        e.length &&
                          e.forEach(function (e) {
                            n.applyDealerListNew.value.forEach(function (t) {
                              var r;
                              e.dealer_code == t.code &&
                                4 !== t.rights.length &&
                                (t.rights =
                                  (null == (r = e.config_value)
                                    ? void 0
                                    : r.rights) || []);
                            });
                          }),
                        n.applyDealerListNew.value.forEach(function (e) {
                          var t;
                          4 !==
                            (null == (t = e.rights)
                              ? void 0
                              : t.filter(function (e) {
                                  return e.icon && e.title && e.text;
                                }).length) &&
                            (e.rights = P
                              ? e.defaultRightsRed
                              : e.defaultRightsnormal);
                        }),
                        (a.value = 4),
                        (i.value = !0);
                    })(
                      u.filter(function (e) {
                        return "rights" === e.config_key;
                      })
                    ),
                      E(
                        (p = u.filter(function (e) {
                          return "rights_sheet" === e.config_key;
                        }))
                      ),
                      p.length &&
                        p.forEach(function (e) {
                          n.applyDealerListNew.value.forEach(function (t) {
                            e.dealer_code != t.code ||
                              t.rightsSheet.length ||
                              (t.rightsSheet =
                                e.config_value.rights_sheet || []);
                          });
                        }),
                      (function (t) {
                        E(t),
                          t.reverse(),
                          (null == t ? void 0 : t.length) &&
                            t.forEach(function (t) {
                              n.applyDealerListNew.value.forEach(function (r) {
                                var n,
                                  o,
                                  i,
                                  a,
                                  c,
                                  u,
                                  l,
                                  s,
                                  p,
                                  d,
                                  h,
                                  f,
                                  g,
                                  v,
                                  m,
                                  S,
                                  k,
                                  b,
                                  y,
                                  _;
                                if (t.dealer_code == r.code)
                                  switch (t.config_key) {
                                    case "top_img":
                                      e.isPc && B.includes(t.dealer_code)
                                        ? ((r.topLight = w), (r.topDark = I))
                                        : ((r.topLight =
                                            (null == (n = t.config_value)
                                              ? void 0
                                              : n.top_light) || r.topLight),
                                          (r.topDark =
                                            (null == (o = t.config_value)
                                              ? void 0
                                              : o.top_dark) || r.topDark)),
                                        (r.topText =
                                          (null == (i = t.config_value)
                                            ? void 0
                                            : i.top_text) || r.topText);
                                      break;
                                    case "btn_text":
                                      r.btnText =
                                        (null == (a = t.config_value)
                                          ? void 0
                                          : a.btn_text) || r.btnText;
                                      break;
                                    case "pop_text":
                                      (r.popText =
                                        (null == (c = t.config_value)
                                          ? void 0
                                          : c.pop_text) || ""),
                                        (r.ipShow = Boolean(
                                          null == (u = t.config_value)
                                            ? void 0
                                            : u.pop_text
                                        ));
                                      break;
                                    case "btn_img":
                                      r.btnImg =
                                        null == (l = t.config_value)
                                          ? void 0
                                          : l.btn_img;
                                      break;
                                    case "act_temp":
                                      r.tradeActTemp =
                                        (null == (s = t.config_value)
                                          ? void 0
                                          : s.act_temp) || r.tradeActTemp;
                                      break;
                                    case "rights_ad_img":
                                      r.rightsAdImg = t.config_value;
                                      break;
                                    case "popup_retain":
                                      r.popupRetain = t.config_value;
                                      break;
                                    case "disable_switch":
                                      r.disableSwitch =
                                        null !=
                                          (f =
                                            null !=
                                            (h =
                                              t.config_value[
                                                null ==
                                                (p =
                                                  null == e
                                                    ? void 0
                                                    : e.routeQuery)
                                                  ? void 0
                                                  : p.scene
                                              ])
                                              ? h
                                              : null == (d = t.config_value)
                                              ? void 0
                                              : d.default) && f;
                                      break;
                                    case "hide_helper":
                                      r.hideHelper =
                                        null !=
                                          (S =
                                            null !=
                                            (m =
                                              t.config_value[
                                                null ==
                                                (g =
                                                  null == e
                                                    ? void 0
                                                    : e.routeQuery)
                                                  ? void 0
                                                  : g.scene
                                              ])
                                              ? m
                                              : null == (v = t.config_value)
                                              ? void 0
                                              : v.default) && S;
                                      break;
                                    case "hide_bindenter":
                                      r.hideBindEnter =
                                        null !=
                                          (_ =
                                            null !=
                                            (y =
                                              t.config_value[
                                                null ==
                                                (k =
                                                  null == e
                                                    ? void 0
                                                    : e.routeQuery)
                                                  ? void 0
                                                  : k.scene
                                              ])
                                              ? y
                                              : null == (b = t.config_value)
                                              ? void 0
                                              : b.default) && _;
                                  }
                              });
                            }),
                          (o.value = !0);
                      })(
                        u.filter(function (e) {
                          return (
                            "rights_sheet" !== e.config_key &&
                            "rights" !== e.config_key
                          );
                        })
                      ),
                      (function (e) {
                        h(
                          this,
                          null,
                          r().mark(function t() {
                            return r().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    try {
                                      (null == e ? void 0 : e.length) &&
                                        e.forEach(function (e) {
                                          n.applyDealerListNew.value.filter(
                                            function (t) {
                                              e.dealer_code != t.code ||
                                                t.shelvesCardConfig ||
                                                (e.config_value &&
                                                  d.dispatch &&
                                                  d.dispatch(
                                                    "qianji/saveApplyShelevsCardWujiConfig",
                                                    e.config_value
                                                  ));
                                            }
                                          );
                                        });
                                    } catch (e) {}
                                  case 1:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                      })(
                        u.filter(function (e) {
                          return "apply_shelves_card" === e.config_key;
                        })
                      ),
                      (function (e) {
                        E(e),
                          e.reverse(),
                          (null == e ? void 0 : e.length) &&
                            e.forEach(function (e) {
                              n.applyDealerListNew.value.forEach(function (t) {
                                var r;
                                e.dealer_code == t.code &&
                                  (t.qrcode =
                                    (null == (r = e.config_value)
                                      ? void 0
                                      : r.qrcode) || A);
                              });
                            });
                      })(
                        u.filter(function (e) {
                          return "qrcode" === e.config_key;
                        })
                      );
                  case 13:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[2, 10]]
          );
        })
      );
    },
    watchRouteQuery: function (t) {
      return h(
        this,
        null,
        r().mark(function t() {
          return r().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  !(function () {
                    var t = null == e ? void 0 : e.routeQuery;
                    !t || ("detail" !== t.from && "stockdetail" !== t.from)
                      ? (u.value = !1)
                      : (function () {
                          h(
                            this,
                            null,
                            r().mark(function t() {
                              var n, o, i, a, c, l;
                              return r().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          ((n = e && e.routeQuery),
                                          (o = n.stockCode),
                                          (i = n.stockMarket),
                                          !o || !i.toString())
                                        ) {
                                          t.next = 16;
                                          break;
                                        }
                                        return (
                                          (t.prev = 2),
                                          (t.next = 5),
                                          N.getKline({
                                            scode: o,
                                            limit: 5,
                                            fq: 1,
                                            kline: 1,
                                            market: i,
                                            end: "",
                                          })
                                        );
                                      case 5:
                                        (a = t.sent),
                                          (c = a.data),
                                          (l = {
                                            0: ".SZ",
                                            1: ".SH",
                                            2: ".HK",
                                            p: "",
                                            bj: ".BJ",
                                            nq: ".NQ",
                                          }),
                                          (g.detailCur =
                                            c.qt && c.qt.fields[3]),
                                          (g.detailZdf =
                                            c.qt && c.qt.fields[32]),
                                          (g.detailName =
                                            c.qt && c.qt.fields[1]),
                                          (g.fullcode =
                                            c.qt &&
                                            c.qt.fields[2] + (l[i] || "")),
                                          c.qt.fields[40]
                                            ? ((u.value = !1), (p.value = !1))
                                            : ((g.detailFiveZdf = (function (
                                                e
                                              ) {
                                                var t = [];
                                                e.nodes.forEach(function (e) {
                                                  return t.push(+e.low);
                                                });
                                                var r = +e.qt.fields[3],
                                                  n = Math.min.apply(Math, t),
                                                  o = [];
                                                e.nodes.forEach(function (e) {
                                                  return o.push(+e.high);
                                                });
                                                var i = Math.max.apply(Math, o);
                                                return (r - n) / n > 0.1
                                                  ? ((r - n) / n) * 100
                                                  : ((i - r) / i) * 100 -
                                                      ((r - n) / n) * 100 -
                                                      2 >=
                                                    0
                                                  ? 0 - ((i - r) / i) * 100
                                                  : (+(r - n) / n) * 100;
                                              })(c)),
                                              (u.value = !0)),
                                          (t.next = 14);
                                        break;
                                      case 11:
                                        (t.prev = 11),
                                          (t.t0 = t.catch(2)),
                                          (u.value = !1),
                                          (p.value = !1);
                                      case 14:
                                        t.next = 17;
                                        break;
                                      case 16:
                                        p.value = !1;
                                      case 17:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[2, 11]]
                              );
                            })
                          );
                        })();
                  })();
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    },
    rightsClick: function () {
      f.StockBridge.report("trade.apply.homepage.right_click"),
        n.curBrokerItem.value.rightsSheet.some(function (e) {
          return e.sheetIcon && e.sheetTitle && e.sheetText;
        }) && (t.showStatus.value.rightsSheet = !0);
    },
  };
}
"mp" === f.StockBridge.ENV || f.dist.detect().env;
var L = "https://proxy.finance.qq.com/",
  D = function (e) {
    var t;
    return (
      (t =
        "etf_overseas" == e
          ? {
              fund_type: "inner",
              board_type: "etf_overseas",
              sort_type: "priceRatioD5",
              direct: "down",
              label: "23,12,24,25,26,11",
              count: 5,
              app: "zxg_xcx",
            }
          : {
              fund_type: "inner",
              board_type: "etf_all",
              selector: "in_fund_type%3Dscale%2Cindustry%2Ctheme",
              sort_type: "priceRatioD5",
              direct: "down",
              label: "23,12,24,25,26,11",
              count: 5,
              app: "zxg_xcx",
            }),
      f.StockBridge.request(
        L + "cgi/cgi-bin/rank/fund/getList",
        "GET",
        p({}, t)
      ).then(function (e) {
        return e;
      })
    );
  },
  Z = function () {
    return f.StockBridge.request(
      L + "ifzqgtimg/appstock/app/ReverseRepo/get",
      "GET",
      p({}, { app: "zxg_xcx" })
    ).then(function (e) {
      return e;
    });
  };
function W(e) {
  var n = f.getCurrentInstance().proxy || f.getCurrentInstance(),
    o = f.ref(!1),
    i = f.inject("store", {}),
    a = f.inject("renderPositionToComponentFromPool", function (e) {}),
    c = f.ref(2),
    u = f.inject("positionToComponentPool", {});
  function l() {
    var e = f.StockBridge.getSession("stock/delivery-trace-id");
    e &&
      f.StockBridge.report("trade.apply.homepage.pageversion.show", {
        trace_id: e || "",
      });
  }
  function s(e) {
    var t,
      o,
      i,
      u = this,
      s = e.config,
      p = e.broker;
    "ApplyCard" ===
    ((null == (t = null == s ? void 0 : s[0]) ? void 0 : t.component_info)
      ? JSON.parse(
          null == (o = null == s ? void 0 : s[0]) ? void 0 : o.component_info
        )
      : {}
    ).name
      ? ((c.value = 1),
        f.nextTick$1(function () {
          return h(
            u,
            null,
            r().mark(function e() {
              return r().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      d(p), a(n.$options.name), l();
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        }))
      : (null == (i = null == s ? void 0 : s[0]) ? void 0 : i.f_trace_id)
      ? ((c.value = 2), l())
      : (c.value = 2),
      0 != c.value &&
        f.StockBridge.setSession("qianji_applycard_dpresult", {
          sessionPage: c.value,
          sessionPageConfig: s,
        });
  }
  function d(e) {
    return h(
      this,
      null,
      r().mark(function n() {
        var o, a, c, u, l, s, d, h, f, g, v, m, S, k, b, y;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (v = { etfag: [], etfqq: [], gzlc: { highLightZxj: "" } }),
                    (r.next = 4),
                    Promise.allSettled([Z(), D("etf_all"), D("etf_overseas")])
                  );
                case 4:
                  (m = r.sent) &&
                    ((S = t(m, 3)),
                    (k = S[0]),
                    (b = S[1]),
                    (y = S[2]),
                    "fulfilled" === k.status &&
                      0 == (null == (o = k.value) ? void 0 : o.code) &&
                      (v.gzlc.highLightZxj =
                        (null ==
                        (u =
                          null == (c = null == (a = k.value) ? void 0 : a.data)
                            ? void 0
                            : c.highLight)
                          ? void 0
                          : u.zxj) || ""),
                    "fulfilled" === b.status &&
                      0 == (null == (l = b.value) ? void 0 : l.code) &&
                      (v.etfag =
                        null == (d = null == (s = b.value) ? void 0 : s.data)
                          ? void 0
                          : d.rank_list),
                    "fulfilled" === y.status &&
                      0 == (null == (h = y.value) ? void 0 : h.code) &&
                      (v.etfqq =
                        null == (g = null == (f = y.value) ? void 0 : f.data)
                          ? void 0
                          : g.rank_list)),
                    i.dispatch &&
                      (null == i ||
                        i.dispatch(
                          "qianji/saveApplyShelevsCardHqConfig",
                          p({ curBrokerCode: (e.value || e).toString() }, v)
                        )),
                    (r.next = 11);
                  break;
                case 9:
                  (r.prev = 9), (r.t0 = r.catch(0));
                case 11:
                case "end":
                  return r.stop();
              }
          },
          n,
          null,
          [[0, 9]]
        );
      })
    );
  }
  var g = function () {};
  return (
    f.onUnmounted(function () {
      g();
    }),
    {
      initShelves: function (e) {
        var t,
          p,
          v,
          m,
          S,
          k = this,
          b = e.broker;
        if (o.value) {
          var y = (f.StockBridge.getSession("qianji_applycard_dpresult") || {})
            .sessionPage;
          y && (null == u ? void 0 : u[n.$options.name])
            ? ((c.value = y),
              1 == c.value &&
                f.nextTick$1(function () {
                  return h(
                    k,
                    null,
                    r().mark(function e() {
                      return r().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              d(b), a(n.$options.name), l();
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                }))
            : (
                null ==
                (p =
                  null == (t = null == i ? void 0 : i.state)
                    ? void 0
                    : t.qianji)
                  ? void 0
                  : p.deliveryConfig
              )
            ? s({
                config:
                  null ==
                  (m =
                    null == (v = null == i ? void 0 : i.state)
                      ? void 0
                      : v.qianji)
                    ? void 0
                    : m.deliveryConfig,
                broker: b,
              })
            : (g = f.watch(
                function () {
                  var e, t;
                  return null ==
                    (t =
                      null == (e = null == i ? void 0 : i.state)
                        ? void 0
                        : e.qianji)
                    ? void 0
                    : t.deliveryConfig;
                },
                function (e, t) {
                  s({ config: e, broker: b });
                },
                { deep: !0 }
              ));
        } else c.value = 2;
        S && clearTimeout(S),
          (S = null),
          (S = setTimeout(function () {
            0 === c.value && (c.value = 2);
          }, 2100));
      },
      storeShelvesCardHqConfig: d,
      pageVersion: c,
    }
  );
}
"mp" === f.StockBridge.ENV || f.dist.detect().env;
var O =
    "mp" === f.StockBridge.ENV
      ? { IS_PCWEIXIN: !1, IS_WEIXIN: !1, IS_MINA: !1, IS_ZXG: !1, IS_PC: !1 }
      : f.dist.detect().env,
  z = (O.IS_PCWEIXIN, O.IS_WEIXIN),
  M = O.IS_MINA,
  H = O.IS_ZXG,
  X = O.IS_PC,
  V = [
    { name: "ApplyBindCard", step: ["5"], progress: "30" },
    { name: "ApplyIdCard", step: ["2", "3"], progress: "30" },
    { name: "ApplyProfile", step: ["1", "9"], progress: "30" },
    { name: "ApplyFacecheck", step: ["10"], progress: "50" },
    { name: "ApplyVideo", step: ["4"], progress: "50" },
    { name: "ApplySetPwd", step: ["6"], progress: "70" },
    { name: "ApplyRiskTest", step: ["7"], progress: "70" },
    { name: "ApplySubmit", step: ["8"], progress: "90" },
  ];
function G(e, t, n) {
  var o = f.ref(e.defaultBrokerCode);
  W();
  var i = f.computed(function () {
      var t;
      return Boolean(
        null == (t = e.applyList)
          ? void 0
          : t.find(function (e) {
              return e.code == o.value;
            })
      );
    }),
    a = f.computed(function () {
      if (i.value) {
        if (e.applyBreakPointStep) {
          var t = V.find(function (t) {
            return t.step.includes(e.applyBreakPointStep);
          });
          if (t) return "继续开户 ｜ 已完成 ".concat(t.progress, "%");
        }
        return "继续开户";
      }
      return u.value.btnText || "马上开户";
    }),
    c = f.ref([]),
    u = f.computed(function () {
      return (
        c.value.find(function (e) {
          return e.code == o.value;
        }) || {}
      );
    }),
    l = f.computed(function () {
      var e =
        "mp" === f.StockBridge.ENV
          ? { IS_WEIXIN: !1, IS_MINA: !1 }
          : f.dist.detect().env;
      e.IS_WEIXIN, e.IS_MINA;
      return "12800" == o.value;
    }),
    s = Boolean(z && !M && !1);
  function d(t) {
    var r, n;
    return (
      (null == (n = null == (r = e.mainBindList) ? void 0 : r.findIndex)
        ? void 0
        : n.call(r, function (e) {
            return e.code === t;
          })) >= 0
    );
  }
  function g() {
    (n.showStatus.value.subscribeSheet = !0),
      f.StockBridge.report("trade.apply.homepage.qrcode_show"),
      (function (e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = p(
            {
              subs_channel_i: e,
              subs_channel_o: t,
              action: "report_subs_channel",
            },
            r
          );
        f.StockBridge.request(
          "https://wzq.tenpay.com/cgi-bin/report.fcgi",
          "GET",
          p({}, n)
        )
          .then(function (e) {
            return e;
          })
          .catch(function (e) {
            return e;
          });
      })(f.StockBridge.getSession(T) || "", f.StockBridge.getSession(q) || "");
  }
  function v() {
    return h(
      this,
      null,
      r().mark(function t() {
        var n;
        return r().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  null == (n = null == e ? void 0 : e.apiSets)
                    ? void 0
                    : n.getPrivacyState(u.value.code)
                );
              case 2:
                return t.abrupt("return", !t.sent);
              case 3:
              case "end":
                return t.stop();
            }
        }, t);
      })
    );
  }
  return (
    f.watch(
      function () {
        return i.value;
      },
      function (e) {
        e && f.StockBridge.report("trade.apply.homepage.continue.show");
      },
      { immediate: !0 }
    ),
    {
      curBrokerCode: o,
      hasEnteredOpenProcess: i,
      openBtnText: a,
      applyDealerListNew: c,
      curBrokerItem: u,
      isShowMultiEntry: s,
      setCurBrokerCode: function () {
        (o.value = e.defaultBrokerCode),
          f.StockBridge.report("trade.apply.homepage.default_show", {
            dealer_code: o.value,
            dealer_code_backend: e.dealerCodeBackend,
            dealer_switch_scene: e.dealerSwitchScene,
          });
      },
      goToApplyRecords: function () {
        f.StockBridge.report("trade.apply.homepage.applyrecords"),
          f.StockRouter.routeTo({ name: "AccountApplyRecords" });
      },
      checkIsOpened: d,
      jumpToDealerGuide: function () {
        X ? g() : t("jumpToDealerGuide");
      },
      showActionSheet: function (t) {
        if (t)
          if (t === x.BIND)
            f.StockBridge.report("trade.apply.homepage.bind_button_click"),
              (n.actSheetCfg.value = {
                type: t,
                title: "选择证券服务方",
                brokerList: e.bindBrokerList,
                rightShow: E.BUTTON,
              }),
              (n.showStatus.value.actionSheet = !0);
          else if (t === x.SELECT) {
            if (u.value.disableSwitch) return;
            f.StockBridge.report("trade.apply.homepage.supplier"),
              (n.actSheetCfg.value = {
                type: x.APPLY,
                title: "选择证券服务方",
                brokerList: e.applyBrokerList,
                rightShow: E.BUTTON,
              }),
              c.value.forEach(function (e) {
                f.StockBridge.report(
                  "trade.apply.homepage.apply_select_sheet.".concat(
                    e.code,
                    ".show"
                  )
                );
              }),
              e.applyBrokerList.length > 1 &&
                (n.showStatus.value.actionSheet = !0);
          }
      },
      isPrivacyNeed: v,
      dealerAction: function (a, c) {
        return h(
          this,
          null,
          r().mark(function l() {
            var s, p, h;
            return r().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (
                      ((n.showStatus.value.actionSheet = !1),
                      (n.showStatus.value.rightsSheet = !1),
                      (h = a.broker || o.value),
                      (null == a ? void 0 : a.type) !== x.APPLY)
                    ) {
                      r.next = 21;
                      break;
                    }
                    o.value = h;
                    try {
                      f.StockBridge.report(
                        "trade.apply.homepage.openaccount",
                        {
                          dealer_code: h,
                          is_gz: n.isSubscribed.value ? "1" : "0",
                          type: (null == a ? void 0 : a.statType) || "",
                        },
                        { syncMonitor: !0 }
                      ),
                        f.StockBridge.setSession(
                          "stock://apply/curdealer",
                          o.value
                        ),
                        i.value &&
                          f.StockBridge.report(
                            "trade.apply.homepage.openaccount_continue",
                            {
                              dealer_code: h,
                              hasAccount: d(h),
                              account_step: (
                                (null == (s = e.applyList)
                                  ? void 0
                                  : s.find(function (e) {
                                      return e.code === h;
                                    })) || {}
                              ).apply_step,
                            },
                            { syncMonitor: !0 }
                          ),
                        1 == c &&
                          (null == (p = n.showHoverButton)
                            ? void 0
                            : p.value) &&
                          f.StockBridge.report(
                            "trade.apply.homepage.openaccount_hover"
                          );
                    } catch (e) {}
                    if (!X) {
                      r.next = 9;
                      break;
                    }
                    (r.t0 = void g()), (r.next = 20);
                    break;
                  case 9:
                    if (((r.t1 = H), !r.t1)) {
                      r.next = 14;
                      break;
                    }
                    return (r.next = 13), v();
                  case 13:
                    r.t1 = r.sent;
                  case 14:
                    if (!r.t1) {
                      r.next = 18;
                      break;
                    }
                    (r.t2 = void t("showPrivacy", a.broker.toString())),
                      (r.next = 19);
                    break;
                  case 18:
                    r.t2 =
                      (Reflect.set(a, "tradeActTemp", u.value.tradeActTemp),
                      void t("toApply", h.toString(), a));
                  case 19:
                    r.t0 = r.t2;
                  case 20:
                    return r.abrupt("return", r.t0);
                  case 21:
                    (null == a ? void 0 : a.type) !== x.BIND ||
                      t("toBind", a.broker.toString());
                  case 22:
                  case "end":
                    return r.stop();
                }
            }, l);
          })
        );
      },
      wzqZj: l,
    }
  );
}
var Q =
    "mp" === f.StockBridge.ENV
      ? {
          IS_PCWEIXIN: !1,
          IS_ZXG: !1,
          IS_QUICK_APP: !1,
          IS_WEIXIN: !1,
          IS_MINA: !1,
          IS_ZXG_PC: !1,
        }
      : f.dist.detect().env,
  U = Q.IS_PCWEIXIN,
  F = Q.IS_ZXG,
  Y = Q.IS_QUICK_APP,
  K = (Q.IS_WEIXIN, Q.IS_MINA, Q.IS_ZXG_PC),
  $ =
    "mp" === f.StockBridge.ENV
      ? { IS_WEIXIN: !1, IS_MINA: !1 }
      : f.dist.detect().env;
$.IS_WEIXIN, $.IS_MINA;
var J = {
  name: "StActApplyNoaccount",
  options: { styleIsolation: "shared" },
  components: {
    selectBrokerSheet: function () {
      return "../components/selectBrokerSheet.js";
    },
    dealerRigths: function () {
      return "../components/dealerRights/pro.js";
    },
    HelperSheet: function () {
      return "../components/HelperSheet.js";
    },
    dealerRightsSheet: function () {
      return "../components/dealerRightsSheet.js";
    },
    SubscribePopup: function () {
      return "../components/SubscribePopup.js";
    },
    OpenButton: function () {
      return "../components/OpenBtn.js";
    },
    helperAssistant: function () {
      return "../components/HelperAssistant.js";
    },
    brokerChoose: function () {
      return "../components/BrokerChoose.js";
    },
  },
  props: {
    defaultBrokerCode: { type: [String, Number], default: "" },
    applyBrokerList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    bindBrokerList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    mainBindList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    applyList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    qrCode: { type: String, default: "" },
    apiSets: {
      type: Object,
      default: function () {
        return {};
      },
    },
    routeQuery: {
      type: Object,
      default: function () {
        return {};
      },
    },
    flag: { type: Boolean, default: !0 },
    dealerCodeBackend: { type: String, default: "" },
    dealerSwitchScene: { type: String, default: "" },
    pageShow: { type: Boolean, default: !0 },
    isCiccTencentAct: { type: Boolean, default: !1 },
    applyBreakPointStep: { type: String, default: "" },
    isPc: { type: Boolean, default: !1 },
  },
  setup: function (e, t) {
    return (function (e, t) {
      var n = (function (e) {
          var t = f.inject("skin"),
            n = f.ref(!1),
            o = f.ref({
              type: x.APPLY,
              title: "",
              brokerList: [],
              rightShow: E.CHECK,
            }),
            i = f.ref({
              helperSheet: !1,
              rightsSheet: !1,
              actionSheet: !1,
              subscribeSheet: !1,
            }),
            a = f.ref(!1),
            c = f.ref(F || Y),
            u = f.computed(function () {
              var e = "//st.gtimg.com/image/apply/qrcode";
              return U
                ? n.value
                  ? "".concat(e, "/pc_subscribed.png")
                  : "".concat(e, "/pc_no_subscribed.png")
                : K
                ? "https://st.gtimg.com/design/3bf3a041e90b40a7274edbccacf17b9c.png"
                : l()
                ? "".concat(e, "/Od100p000e046.png")
                : "";
            });
          function l() {
            return e.isCiccTencentAct;
          }
          function s() {
            return h(
              this,
              null,
              r().mark(function e() {
                return r().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          }
          var p = f.debounce(
            function (e) {
              var t, r;
              (null == (t = null == e ? void 0 : e.target)
                ? void 0
                : t.scrollTop) > 353 && (a.value = !0),
                (null == (r = null == e ? void 0 : e.target)
                  ? void 0
                  : r.scrollTop) < 307 && (a.value = !1);
            },
            10,
            { leading: !0 }
          );
          return (
            "mp" === f.StockBridge.ENV &&
              f.StockBridge.report("trade.apply.homepage.first"),
            {
              skin: t,
              isSubscribed: n,
              actSheetCfg: o,
              showStatus: i,
              isHideHelperEntry: c,
              qrcodeUrl: u,
              getSubscribedStatus: s,
              showHoverButton: a,
              helperClick: function (e) {
                (i.value.helperSheet = !0),
                  f.StockBridge.report("yy.trade_newpage.helperSheet"),
                  1 == e &&
                    f.StockBridge.report(
                      "trade.apply.right_top_arrow_helper_click"
                    );
              },
              onWzqVisibilitychange: function () {
                return h(
                  this,
                  null,
                  r().mark(function e() {
                    return r().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.t0 =
                                document &&
                                "visible" === document.visibilityState),
                              !e.t0)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (e.next = 4), s();
                          case 4:
                            n.value && !U && (i.value.subscribeSheet = !1);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
              },
              windowScrollHandler: p,
              resetShowStatus: function () {
                (i.value.actionSheet = !1),
                  (i.value.helperSheet = !1),
                  (i.value.rightsSheet = !1);
              },
              isCICCMarketingActivities: l,
            }
          );
        })(e),
        o = n.skin,
        i = n.actSheetCfg,
        a = n.showStatus,
        c = n.isHideHelperEntry,
        u = n.qrcodeUrl,
        l = n.getSubscribedStatus,
        s = n.showHoverButton,
        p = n.helperClick,
        d = n.windowScrollHandler,
        g = (n.onWzqVisibilitychange, n.resetShowStatus),
        v = G(e, t, n),
        m = v.curBrokerCode,
        S = v.hasEnteredOpenProcess,
        k = v.openBtnText,
        b = v.applyDealerListNew,
        y = v.curBrokerItem,
        _ = v.isShowMultiEntry,
        w = v.setCurBrokerCode,
        I = v.goToApplyRecords,
        C = v.jumpToDealerGuide,
        T = v.showActionSheet,
        q = v.dealerAction,
        A = v.wzqZj,
        N = f.computed(function () {
          return e.isPc && B.includes(String(m.value));
        }),
        j = R(e, n, v),
        P = j.headShow,
        L = j.rightsReadyFlag,
        D = j.rightsCounts,
        Z = j.oemIpShow,
        O = j.isShowDetail,
        z = j.actChannelProvider,
        M = j.hasDetailRights,
        H = j.detailInfo,
        X = j.dealerRightsSheetTitle,
        V = j.setDefaultConfig,
        Q = j.getWujiConfig,
        $ = j.watchRouteQuery,
        J = j.rightsClick,
        ee = W(),
        te = ee.pageVersion;
      ee.initShelves, l();
      var re = !0;
      return (
        f.watch(
          function () {
            return m.value;
          },
          function (e) {
            e && re && (f.nextTick$1(function () {}), (re = !1));
          },
          { immediate: !0 }
        ),
        f.watch(
          function () {
            return e.flag;
          },
          function (e) {
            e && (w(), V(), Q());
          },
          { immediate: !0 }
        ),
        f.watch(
          function () {
            return e.routeQuery;
          },
          function (e) {
            $(e);
          },
          { immediate: !0, deep: !0 }
        ),
        f.watch(
          function () {
            return a.value;
          },
          function (e) {
            if ("mp" !== f.StockBridge.ENV)
              if (
                Object.values(e).some(function (e) {
                  return e;
                })
              ) {
                document.body.style.overflow = "hidden";
              } else {
                document.body.style.overflow = "scroll";
              }
          },
          { immediate: !0, deep: !0 }
        ),
        f.watch(
          function () {
            return e.pageShow;
          },
          function (e) {
            e || g();
          },
          { immediate: !0 }
        ),
        f.onMounted(function () {
          e.apiSets.reportH5MediaCompatibility &&
            e.apiSets.reportH5MediaCompatibility(),
            window && window.addEventListener("scroll", d, !0);
        }),
        f.onBeforeUnmount(function () {
          window && window.removeEventListener("scroll", d, !0), g();
        }),
        {
          isLargeScreenWithPc: N,
          skin: o,
          actSheetCfg: i,
          showStatus: a,
          isHideHelperEntry: c,
          qrcodeUrl: u,
          getSubscribedStatus: l,
          showHoverButton: s,
          helperClick: p,
          dealerAction: q,
          curBrokerItem: y,
          curBrokerCode: m,
          showActionSheet: T,
          hasEnteredOpenProcess: S,
          openBtnText: k,
          applyDealerListNew: b,
          isShowMultiEntry: _,
          goToApplyRecords: I,
          jumpToDealerGuide: C,
          headShow: P,
          rightsReadyFlag: L,
          rightsCounts: D,
          isShowDetail: O,
          detailInfo: H,
          oemIpShow: Z,
          actChannelProvider: z,
          hasDetailRights: M,
          dealerRightsSheetTitle: X,
          rightsClick: J,
          pageVersion: te,
          BIZ_TYPE: x,
          wzqZj: A,
          StockBridge: f.StockBridge,
        }
      );
    })(e, t.emit);
  },
};
Array ||
  (
    f.resolveComponent("dealerRigths") +
    f.resolveComponent("broker-choose") +
    f.resolveComponent("open-button") +
    f.resolveComponent("helper-assistant") +
    f.resolveComponent("select-broker-sheet") +
    f.resolveComponent("helper-sheet") +
    f.resolveComponent("dealer-rights-sheet") +
    f.resolveComponent("subscribe-popup")
  )();
var ee = f._export_sfc(J, [
  [
    "render",
    function (e, t, r, n, o, i) {
      return f.e(
        { a: e.headShow && e.rightsReadyFlag },
        e.headShow && e.rightsReadyFlag
          ? {
              b: e.isLargeScreenWithPc ? 1 : "",
              c: "url(".concat(
                "white" == e.skin
                  ? e.curBrokerItem.topLight
                  : e.curBrokerItem.topDark,
                ")"
              ),
            }
          : {},
        { d: e.rightsReadyFlag },
        e.rightsReadyFlag
          ? f.e(
              { e: !e.wzqZj },
              e.wzqZj
                ? {}
                : {
                    f: f.o(e.rightsClick, 1612),
                    g: f.p({ "cur-broker-item": e.curBrokerItem }),
                  },
              { h: !e.curBrokerItem.hideHelper && e.wzqZj },
              !e.curBrokerItem.hideHelper && e.wzqZj
                ? {
                    i: f.o(function (t) {
                      return e.helperClick(e.pageVersion);
                    }, 1613),
                  }
                : {},
              {
                j: f.o(function (t) {
                  return e.showActionSheet(e.BIZ_TYPE.SELECT);
                }, 1614),
                k: f.p({
                  "cur-broker-code": e.curBrokerCode,
                  "cur-broker-item": e.curBrokerItem,
                  "show-status": e.showStatus,
                  "apply-broker-list": e.applyBrokerList,
                }),
                l: f.o(function (t) {
                  return e.showActionSheet(e.BIZ_TYPE.BIND);
                }, 1615),
                m: f.o(e.goToApplyRecords, 1616),
                n: f.o(function (t) {
                  return e.dealerAction(
                    {
                      type: e.BIZ_TYPE.APPLY,
                      broker: e.curBrokerCode,
                      statType: "page",
                    },
                    e.pageVersion
                  );
                }, 1617),
                o: f.p({
                  "route-query": e.routeQuery,
                  "cur-broker-item": e.curBrokerItem,
                  "open-btn-text": e.openBtnText,
                  "has-entered-open-process": e.hasEnteredOpenProcess,
                  "is-show-detail": e.isShowDetail,
                  "has-detail-rights": e.hasDetailRights,
                  "detail-info": e.detailInfo,
                  "is-show-multi-entry": e.isShowMultiEntry,
                  "btn-img": e.curBrokerItem.btnImg,
                  "ip-show": e.curBrokerItem.ipShow,
                  "oem-ip-show": e.oemIpShow,
                  "pop-text": e.curBrokerItem.popText,
                  "act-channel-provider": e.actChannelProvider,
                  "provider-benefits-image": e.curBrokerItem.rightsAdImg,
                  "hide-bind-enter": e.curBrokerItem.hideBindEnter,
                  "is-large-screen-with-pc": e.isLargeScreenWithPc,
                }),
                p: !e.curBrokerItem.hideHelper && !e.wzqZj,
              },
              e.curBrokerItem.hideHelper || e.wzqZj
                ? {}
                : {
                    q: f.o(function (t) {
                      return e.helperClick(e.pageVersion);
                    }, 1618),
                    r: f.p({ "cur-broker-code": e.curBrokerCode }),
                  }
            )
          : {},
        { s: e.rightsReadyFlag },
        e.rightsReadyFlag
          ? f.e(
              { t: e.wzqZj && e.rightsReadyFlag },
              e.wzqZj && e.rightsReadyFlag
                ? {
                    v: f.o(e.rightsClick, 1619),
                    w: f.p({ "cur-broker-item": e.curBrokerItem }),
                  }
                : {}
            )
          : {},
        {},
        {
          M: f.o(function (t) {
            e.dealerAction(t, e.pageVersion);
          }, 1626),
          N: f.o(e.jumpToDealerGuide, 1627),
          O: f.o(function (t) {
            return (e.showStatus.actionSheet = t);
          }, 1628),
          P: f.p({
            value: e.showStatus.actionSheet,
            title: e.actSheetCfg.title,
            "broker-list": e.actSheetCfg.brokerList,
            "cur-broker-code": e.curBrokerCode,
            "business-type": e.actSheetCfg.type,
            "right-show": e.actSheetCfg.rightShow,
          }),
          Q: f.o(function (t) {
            return (e.showStatus.helperSheet = t);
          }, 1629),
          R: f.p({
            value: e.showStatus.helperSheet,
            "cur-broker-item": e.curBrokerItem,
            "cur-broker-code": e.curBrokerCode,
            "hide-helper-entry": e.isHideHelperEntry,
          }),
          S: e.rightsReadyFlag,
        },
        e.rightsReadyFlag
          ? {
              T: f.o(function (t) {
                e.dealerAction(t, e.pageVersion);
              }, 1630),
              U: f.o(function (t) {
                return (e.showStatus.rightsSheet = t);
              }, 1631),
              V: f.p({
                value: e.showStatus.rightsSheet,
                title: e.dealerRightsSheetTitle,
                "cur-broker-item": e.curBrokerItem,
                "rights-counts": e.rightsCounts,
                "btn-text": e.openBtnText,
              }),
            }
          : {},
        {
          W: f.o(function (t) {
            return (e.showStatus.subscribeSheet = !1);
          }, 1632),
          X: f.p({
            "qrcode-url": e.qrcodeUrl || e.curBrokerItem.qrcode,
            "subscribe-popup-show": e.showStatus.subscribeSheet,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d1b0b602"],
]);
wx.createComponent(ee);
var te = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.BIZ_TYPE = x),
  (exports.BROKER_SHEET_ICON = E),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LW9wZW5hY2NvdW50LWhvbWUvc3JjL3BhZ2VzL3Byby52dWU =
    te),
  (exports.SlidesText = [
    "开户请准备好借记卡、身份证",
    "开户有疑问？点我",
    "开户请准备好借记卡、身份证",
  ]),
  (exports.SlidesTextWZQ = [
    "开户请准备好借记卡、身份证",
    "佣金最低至万2.354",
    "开户有疑问？点我",
    "开户请准备好借记卡、身份证",
  ]),
  (exports.Wuji = v),
  (exports.channelProviderImg = {
    mobile_recharge:
      "https://st.gtimg.com/design/565c6b213d02b53651f2199310c7df48.png",
    credit_card:
      "https://st.gtimg.com/design/d99c2a382999dd61a38eb36361cc5354.png",
  }),
  (exports.getDxrl = function (e) {
    return f.StockBridge.request(
      "https://proxy.finance.qq.com/ifzqfinance/stock/notice/ipo/search",
      "GET",
      d(p({}, e), { market: "hs", detail: 1, sgrq: 1, app: "zxg_xcx" })
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.getGznhg = function (e) {
    return f.StockBridge.request(
      "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/ReverseRepo/get",
      "GET",
      d(p({}, e), { app: "zxg_xcx" })
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.wujiCfg = C);
