var e = require("../../../../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  c = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, t) {
    for (var n in t || (t = {})) i.call(t, n) && a(e, n, t[n]);
    if (c) {
      var o,
        s = r(c(t));
      try {
        for (s.s(); !(o = s.n()).done; ) {
          n = o.value;
          u.call(t, n) && a(e, n, t[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  l = function (e, t, n) {
    return new Promise(function (r, o) {
      var c = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(c, i);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../../../../../../../common/vendor.js"),
  p = require("../../../../../../stock-hq-data/index.js"),
  m = require("../../../../../../../js-cookie/src/js.cookie.js");
require("../../../../../../stock-news-core/utils/apiMapping.js"),
  require("../../../../../../stock-news-core/utils/knife.js"),
  require("../../../../../../stock-crypto-modules-config/dist/index.js");
var f = require("../../../../../../stock-base/service/common/sign.js"),
  k = "https://wzq.tenpay.com/",
  h = "https://proxy.finance.qq.com/",
  v = m.cookie.get("wzq_qluin"),
  b = m.cookie.get("wzq_qlskey"),
  g = "mini_h5",
  y = "wx9cf8c670ebd68ce4",
  S = "user_stock_recommendation",
  _ = function (e, t) {
    d.StockBridge.request(
      "".concat(k, "svr/user/user_service/set_user_label_sets"),
      "POST",
      { label_set_name: S, type: t, labels: e }
    );
  },
  q = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = [];
    return (
      e.forEach(function (e) {
        n.push({
          code: e,
          timestamp: new Date().getTime(),
          act: t ? "sa" : "sd",
        });
      }),
      d.StockBridge.request(
        "".concat(h, "newstock/stockapp/Updstock/operseq"),
        "GET",
        {
          seq: JSON.stringify(n),
          app: g,
          appid: y,
          openid: v,
          fskey: b,
          check: 11,
        }
      )
    );
  },
  x = (function (e) {
    return (e.ALL = "1"), (e.FUND = "3"), (e.HS = "6"), e;
  })(x || {}),
  w = (function (e) {
    return (e.gdlowprice = "gd000414"), (e.gdhightlow = "gd000766"), e;
  })(w || {}),
  T = (function (e) {
    return (
      (e.HOTSTOCK = "hotstock"),
      (e.EASYETF = "easyetf"),
      (e.LOWPRICE = "lowprice"),
      (e.FUNDSMAININ = "fundsmainin"),
      (e.HOTBUY = "hotbuy"),
      (e.HOTASSET = "hotasset"),
      (e.HQRATIO = "hqratio"),
      (e.HIGHTLOW = "hightlow"),
      (e.HOTCONSUME = "hotconsume"),
      e
    );
  })(T || {}),
  B = [
    {
      content: "stockColumn",
      list: [{ type: "hotstock", subattr: ["zdf", "zxj"] }],
    },
    { content: "aiColumn" },
  ],
  C = "market-show-privacy-policy-modal",
  E = "agree",
  j = "choose_recommend_brow_unclick";
function L() {
  return {
    recordBrow: function () {
      var e = d.dayjs().format("YYYYMMDD"),
        t = { count: 0, date: "" },
        r = d.StockBridge.getStorage(j) || t;
      if (((r && "object" == n(r)) || (r = t), r.date !== e)) {
        var o = { count: (Number(r.count) || 0) + 1, date: e };
        d.StockBridge.setStorage(j, o);
      }
    },
    proxyHandlers: function (e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r;
          "function" == typeof e[n] &&
            (t[n] =
              ((r = e[n]),
              function () {
                return (
                  (function () {
                    var e = { count: 0, date: d.dayjs().format("YYYYMMDD") };
                    d.StockBridge.setStorage(j, e);
                  })(),
                  null == r ? void 0 : r.apply(void 0, arguments)
                );
              }));
        }),
        t
      );
    },
    shouldHideRecommend: function () {
      return (d.StockBridge.getStorage(j) || { count: 0, date: "" }).count > 14;
    },
  };
}
var N = !1,
  O = !1,
  z = d.ref(!1),
  I = d.ref(!1),
  W = d.ref([]),
  A = d.ref(0),
  D = "market-choose-recommend-empty",
  G = {};
var H = {
  props: {
    realId: { type: String, default: "" },
    isCurrent: { type: Boolean, default: !1 },
    scodeList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    protocolStatus: { type: String, default: "agree" },
  },
  components: {
    aiColumn: function () {
      return "../aiColumn/index.js";
    },
    stockColumn: function () {
      return "../stockColumn/index.js";
    },
    mockColumn: function () {
      return "../mockColumn/index.js";
    },
  },
  setup: function (n) {
    return (function (n) {
      var r = this,
        o = L(),
        c = o.proxyHandlers,
        i = o.recordBrow,
        u = o.shouldHideRecommend,
        a = d.computed(function () {
          var e, t;
          return "v2" ===
            ((null ==
            (t =
              null == (e = W.value)
                ? void 0
                : e.find(function (e) {
                    return "aiColumn" === e.content;
                  }))
              ? void 0
              : t.theme) || "")
            ? "微信热门榜单选股"
            : "微信用户都在选";
        }),
        m = d.computed(function () {
          var e,
            t =
              null == (e = W.value)
                ? void 0
                : e.find(function (e) {
                    return "aiColumn" === e.content;
                  });
          return (null == t ? void 0 : t.anwen) || "";
        }),
        f = d.computed(function () {
          var e,
            t =
              null == (e = W.value)
                ? void 0
                : e.find(function (e) {
                    return "aiColumn" === e.content;
                  });
          return "v2" === (null == t ? void 0 : t.theme) || !1;
        });
      function h() {
        var e = this;
        return new Promise(function (n) {
          return l(
            e,
            null,
            t().mark(function e() {
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      d.StockBridge.abtCreate({
                        moduleID: z.value
                          ? "ui_layer_1749025330282"
                          : "ui_layer_1749026642177",
                        params: { channel: 6, type: "query" },
                        success: function (e) {
                          var t = e.data,
                            r = void 0 === t ? [] : t,
                            o = ((r && r[0]) || {}).list_type,
                            c = void 0 === o ? 0 : o;
                          (A.value = +c),
                            d.StockBridge.report(
                              "yy.choose.recommend_style_brow"
                            ),
                            n(!0);
                        },
                        fail: function () {
                          n(!1);
                        },
                      });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        });
      }
      function v() {
        d.StockBridge.busEmit(D, { empty: !0, anwen: m.value || "" });
      }
      function b() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        d.nextTick$1(function () {
          setTimeout(function () {
            var t = n.realId;
            d.StockBridge.busEmit("market-recommend-height-update".concat(t), {
              index: t,
              scrollTop: e,
            });
          }, 0);
        });
      }
      !(function () {
        l(
          this,
          null,
          t().mark(function r() {
            var o, c, a, s, l, p, m, f, b, g, y, q, w, T, C, E, j, L, O, z;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (n.realId !== x.ALL) {
                        t.next = 39;
                        break;
                      }
                      if (!N) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      if ((i(), !u())) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return", void v());
                    case 5:
                      return (
                        (t.next = 7),
                        d.StockBridge.request(
                          "".concat(
                            k,
                            "svr/user/user_service/query_user_label_sets"
                          ),
                          "GET",
                          { label_set_name: S }
                        )
                          .then(function (e) {
                            return e;
                          })
                          .catch(function (e) {
                            return e;
                          })
                      );
                    case 7:
                      if (
                        ((p = t.sent),
                        (m = p.retcode),
                        (f = p.labels),
                        (b = void 0 === f ? [] : f),
                        (N = !0),
                        0 == +m && b.length)
                      ) {
                        t.next = 13;
                        break;
                      }
                      return t.abrupt("return", void v());
                    case 13:
                      if (
                        ((g = !1),
                        (y =
                          (null ==
                          (c =
                            null ==
                            (o = b.filter(function (e) {
                              return "seted" === e.name;
                            }))
                              ? void 0
                              : o[0])
                            ? void 0
                            : c.is_seted) || !1),
                        !((q = n.scodeList || []).length >= 7))
                      ) {
                        t.next = 17;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (v(), void (y && _("seted", 0)))
                      );
                    case 17:
                      if (y) {
                        t.next = 22;
                        break;
                      }
                      if (
                        ((w =
                          2 === q.length &&
                          2 ===
                            (null ==
                            (a =
                              null == q
                                ? void 0
                                : q.filter(function (e) {
                                    return "sz399001" == e || "sh000001" == e;
                                  }))
                              ? void 0
                              : a.length)),
                        (T = !q.length),
                        w || T)
                      ) {
                        t.next = 21;
                        break;
                      }
                      return t.abrupt("return", void v());
                    case 21:
                      g = !0;
                    case 22:
                      return (
                        (t.prev = 22),
                        (t.next = 25),
                        Promise.all([
                          d.Wuji.get({
                            appid: "act",
                            schemaid: "yy_choose_recommend",
                            size: "total",
                          }),
                          h(),
                        ])
                      );
                    case 25:
                      if (
                        ((C = t.sent),
                        (E = e(C, 1)),
                        (j = E[0]),
                        (L = j.code),
                        (O = j.data),
                        200 == +L)
                      ) {
                        t.next = 32;
                        break;
                      }
                      return t.abrupt("return", void v());
                    case 32:
                      (z = JSON.parse(
                        (null == (s = null == O ? void 0 : O[0])
                          ? void 0
                          : s.abt_list_new) ||
                          (null == (l = null == O ? void 0 : O[0])
                            ? void 0
                            : l.abt_list) ||
                          "{}"
                      )),
                        (W.value = z[A.value] || B),
                        g && _("seted", 1),
                        (I.value = !0),
                        n.scodeList.length ||
                          d.StockBridge.busEmit(
                            "market-choose-new-user-add-stock",
                            1 === W.value.length
                          ),
                        (t.next = 39);
                      break;
                    case 36:
                      (t.prev = 36), (t.t0 = t.catch(22)), v();
                    case 39:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[22, 36]]
            );
          })
        );
      })(),
        d.watch(
          [
            function () {
              return I.value;
            },
            function () {
              return m.value;
            },
          ],
          function (t, r) {
            var o = e(t, 2),
              c = o[0],
              i = o[1],
              u = e(r, 2);
            u[0], u[1];
            c &&
              n.isCurrent &&
              d.StockBridge.busEmit(D, {
                empty: !1,
                isRow: !0,
                anwen: i || "",
              });
          }
        ),
        d.watch(
          function () {
            return f.value;
          },
          function (e) {
            e &&
              (d.StockBridge.busEmit("search-bar-show-ai"),
              d.StockBridge.setSession("SearchBarAIStatus", !0));
          }
        ),
        d.watch(
          function () {
            return n.isCurrent;
          },
          function (e) {
            return l(
              r,
              null,
              t().mark(function n() {
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e && I.value && b();
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, n);
              })
            );
          }
        );
      var g = {
          isMpWzq: z,
          show: I,
          columnList: W,
          abtType: A,
          updateHeight: b,
          columnStatus: function (e) {
            var t = e.type,
              r = e.flag;
            n.isCurrent &&
              ((G[t] = r), Object.keys(G).length === W.value.length) &&
              (W.value.filter(function (e) {
                return G[e.content];
              }).length
                ? b()
                : v());
          },
          stockTitle: a,
        },
        y = c({
          handleAdd: function (e, r) {
            var o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "",
              c =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "",
              i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 0;
            return l(
              this,
              null,
              t().mark(function u() {
                var a, s, l;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!O) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          if (
                            ((O = !0),
                            (a = e.add),
                            d.StockBridge.report(
                              "yy.choose.recommend_stock_" +
                                (a ? "cancel" : "add"),
                              {
                                stocklist: e.symbol,
                                foperation_purpose: "zixuan",
                                fchannel_id_fm_i: "IT101p000m212",
                                recommend_id: r,
                                ai_question: o,
                                ai_scene: c,
                                positionlist: i,
                              }
                            ),
                            n.protocolStatus === E)
                          ) {
                            t.next = 6;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            (d.StockBridge.busEmit(C), void (O = !1))
                          );
                        case 6:
                          if (!(s = (e || {}).symbol)) {
                            t.next = 21;
                            break;
                          }
                          return (t.prev = 8), (t.next = 11), q([s], a ? 0 : 1);
                        case 11:
                          if (((l = t.sent), !+l.code)) {
                            t.next = 15;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            void d.StockBridge.toast(
                              "操作失败，请稍后重试~",
                              "none"
                            )
                          );
                        case 15:
                          (O = !1),
                            (e.add = !e.add),
                            d.StockBridge.toast(
                              "已".concat(a ? "删除" : "添加", "自选")
                            ),
                            d.StockBridge.busEmit("market-choose-list-refresh"),
                            (t.next = 21);
                          break;
                        case 18:
                          (t.prev = 18), (t.t0 = t.catch(8)), (O = !1);
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  u,
                  null,
                  [[8, 18]]
                );
              })
            );
          },
          handleDetail: function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "",
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "",
              o = p.utils.splitSymbol(e),
              c = o.market,
              i = o.scode;
            d.StockBridge.report("yy.choose.recommend_stock_click", {
              recommend_id: t,
              stockid: e,
              ai_question: n,
              ai_scene: r,
            }),
              d.StockRouter.routeTo({
                name: "stockdetail",
                query: { scode: i, market: c },
              });
          },
        });
      return s(s({}, g), y);
    })(n);
  },
};
Array ||
  (
    d.resolveComponent("ai-column") +
    d.resolveComponent("stock-column") +
    d.resolveComponent("mock-column")
  )();
var M = d._export_sfc(H, [
  [
    "render",
    function (e, t, n, r, o, c) {
      return d.e(
        { a: e.show && e.columnList && e.columnList.length },
        e.show && e.columnList && e.columnList.length
          ? {
              b: d.f(e.columnList, function (t, r, o) {
                return d.e(
                  { a: "aiColumn" === t.content },
                  "aiColumn" === t.content
                    ? {
                        b: d.o(e.updateHeight, 2680, r),
                        c: d.o(e.columnStatus, 2681, r),
                        d: d.o(e.handleAdd, 2682, r),
                        e: d.o(e.handleDetail, 2683, r),
                        f: "cd183096-0-" + o,
                        g: d.p({
                          isCurrent: n.isCurrent,
                          type: t.content,
                          scene: t.question,
                          topBanner: t.topBanner,
                          scodeList: n.scodeList,
                          abtType: e.abtType,
                          theme: t.theme,
                        }),
                      }
                    : "stockColumn" === t.content && t.list
                    ? {
                        i: d.o(e.columnStatus, 2684, r),
                        j: d.o(e.handleAdd, 2685, r),
                        k: d.o(e.handleDetail, 2686, r),
                        l: "cd183096-1-" + o,
                        m: d.p({
                          isCurrent: n.isCurrent,
                          realId: n.realId,
                          list: t.list,
                          scodeList: n.scodeList,
                          abtType: e.abtType,
                          title: e.stockTitle,
                          protocolStatus: n.protocolStatus,
                        }),
                      }
                    : "mockColumn" === t.content
                    ? {
                        o: d.o(e.columnStatus, 2687, r),
                        p: "cd183096-2-" + o,
                        q: d.p({ isCurrent: n.isCurrent }),
                      }
                    : {},
                  {
                    h: "stockColumn" === t.content && t.list,
                    n: "mockColumn" === t.content,
                    r: r,
                  }
                );
              }),
              c: e.isMpWzq ? 1 : "",
              d: n.scodeList.length ? 1 : "",
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-cd183096"],
]);
wx.createComponent(M);
var R = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.GdIdValEnum = w),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS11bmlvbi1wb3J0Zm9saW8vbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWNob29zZS1yZWNvbW1lbmQvY29tcG9uZW50cy9yZWNvbW1lbmQvaW5kZXgudnVl =
    R),
  (exports.StockTypeEnum = T),
  (exports.addStockToGroup = q),
  (exports.attrText = {
    zdf: "今日涨跌",
    fprice: "买一手仅需",
    zljlr: "资金净流入",
    bnum: "买入人数",
    anum: "持仓人数",
    zxj: "最新价",
  }),
  (exports.hqWsBusKey = "market-choose-hqws-update-stock"),
  (exports.hqWsResultBusKey = "market-choose-hqws-update-result"),
  (exports.isAgreePrivacy = E),
  (exports.queryAiAnswer = function (e) {
    return d.StockBridge.request(
      "".concat(k, "svr/stock/wzq_stock_adapter/query_ai_answer"),
      "GET",
      s({ app: g }, e)
    );
  }),
  (exports.queryAiAsk = function () {
    var e =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : "newuser_a";
    return d.StockBridge.request(
      "https://snp.tenpay.com/cgi-bin/openai/aiask/query",
      "GET",
      f.getSignV3({
        data: { app: g, channel: e, t: new Date().getTime() },
        methods: "get",
        origin: g,
      }),
      { forceCallback: !0 }
    );
  }),
  (exports.queryBkStocks = function (e) {
    return d.StockBridge.request(
      "".concat(k, "svr/stock/wzq_stock_adapter/query_bkstocks"),
      "GET",
      s({ app: g }, e)
    );
  }),
  (exports.queryBoardRankList = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
    return d.StockBridge.request(
      "".concat(h, "cgi/cgi-bin/rank/hs/getBoardRankList"),
      "GET",
      {
        openid: v,
        fskey: b,
        app: g,
        appid: y,
        check: 11,
        board_code: "aStock",
        sort_type: "priceRatio",
        direct: "down",
        count: e,
      }
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.queryHotStock = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
    return d.StockBridge.request(
      "".concat(h, "ifzqgtimg/appstock/app/HotStock/getHotStockDetail"),
      "GET",
      {
        openid: v,
        fskey: b,
        app: g,
        appid: y,
        check: 11,
        num: e,
        scenes: "5",
        come_from: "3",
      }
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.queryMarketIndexETF = function () {
    return d.StockBridge.request(
      "".concat(h, "ifzqgtimg/appstock/fund/etf/marketIndexETF"),
      "GET",
      {}
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.queryNetmaininList = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
    return d.StockBridge.request(
      "".concat(h, "cgi/cgi-bin/rank/hs/getBoardRankList"),
      "GET",
      {
        openid: v,
        fskey: b,
        app: g,
        appid: y,
        check: 11,
        board_code: "aStock",
        sort_type: "netMainIn",
        direct: "down",
        count: e,
      }
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.queryStocksRank = function (e) {
    return d.StockBridge.request(
      "".concat(k, "svr/stock/wzq_stock_adapter/query_stocks_rank"),
      "GET",
      s({ app: g }, e)
    );
  }),
  (exports.queryWatchlist = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return d.StockBridge.request(
      "".concat(h, "cgi/cgi-bin/watchlist/summary"),
      "GET",
      s({ ranking_count: 10 }, e)
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.renderDelayMs = 300),
  (exports.showPrivacyPolicyModalBusKey = C),
  (exports.stockTextInfo = {
    easyetf: {
      tabName: "小白友好etf",
      title: "适合小白入门ETF",
      subtitle: "风险相对低，易理解",
    },
    lowprice: {
      tabName: "500强低价",
      title: "500强低价股",
      subtitle: "营收500强，千元也可买",
    },
    fundsmainin: {
      tabName: "资金流入",
      title: "资金流入股",
      subtitle: "当日主力资金热买股",
    },
    hotbuy: {
      tabName: "今日热门买入",
      title: "今日热门买入",
      subtitle: "牛人今日模拟买入最多股",
    },
    hotasset: {
      tabName: "牛人热门持仓",
      title: "牛人热门持仓",
      subtitle: "模拟战绩优异用户当日最多持有股",
    },
    hqratio: {
      tabName: "今日涨幅领先",
      title: "今日涨幅领先",
      subtitle: "实时更新",
    },
    hotstock: {
      tabName: "用户都在搜",
      title: "微信用户都在搜",
      subtitle: "今日微信热搜",
    },
    hightlow: {
      tabName: "稳稳的持有感",
      title: "追求稳稳的持有感",
      subtitle: "低波动高股息",
    },
    hotconsume: {
      tabName: "热门消费股",
      title: "热门消费品牌榜",
      subtitle: "大家熟悉的品牌",
    },
  }),
  (exports.useClickProxy = L);
