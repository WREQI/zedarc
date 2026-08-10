var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  s = function (e, t, r) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  u = require("../api/StockBasketAPI.js"),
  l = require("../../../../../common/vendor.js"),
  d = {
    components: {
      basketOverview: function () {
        return "./basketOverview.js";
      },
    },
    props: {
      basketId: { type: String, required: !0 },
      contexObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
      limit: { type: Number, default: 3 },
      isToMockTrade: { type: Boolean, default: !0 },
      routeMockTradeParam: {
        type: Object,
        default: function () {
          return {};
        },
      },
      skin: { type: String, default: "white" },
    },
    emits: ["goToMockTrade", "goToChoosePage"],
    setup: function (a, d) {
      var f = this,
        k = d.emit,
        p = l.inject("hqBridge"),
        v = new u.StockBasketAPI(p),
        g = l.ref({}),
        b = l.computed(function () {
          var e, t;
          return (
            a.basketId &&
            a.basketId ===
              (null == (t = null == (e = g.value) ? void 0 : e.info)
                ? void 0
                : t.id)
          );
        }),
        h = l.computed(function () {
          return {
            session: a.contexObj.sessionId,
            requestid: a.contexObj.requestId,
          };
        }),
        m = function () {
          "visible" === document.visibilityState && T();
        };
      l.onBeforeMount(function () {
        T(), "mp" !== p.ENV && document.addEventListener("visibilitychange", m);
      }),
        l.onUnmounted(function () {
          "mp" !== p.ENV && document.removeEventListener("visibilitychange", m);
        });
      var T = function () {
          return (
            (e = f),
            null,
            (r = t().mark(function e() {
              var r, o, n, i, c, s;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          v.getBasketDetail({ id: a.basketId })
                        );
                      case 3:
                        if (
                          0 === (null == (o = e.sent) ? void 0 : o.code) &&
                          (null == (r = null == o ? void 0 : o.data)
                            ? void 0
                            : r.detail)
                        ) {
                          e.next = 6;
                          break;
                        }
                        throw new Error(o.msg);
                      case 6:
                        (n = o.data.detail),
                          (i = n.info),
                          (c = n.ranking),
                          (s = n.userData),
                          (g.value = {
                            info: w(i),
                            ranking: y(c),
                            userData: s,
                          }),
                          k("dataReady"),
                          (e.next = 12);
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 10]]
              );
            })),
            new Promise(function (t, a) {
              var o = function (e) {
                  try {
                    i(r.next(e));
                  } catch (e) {
                    a(e);
                  }
                },
                n = function (e) {
                  try {
                    i(r.throw(e));
                  } catch (e) {
                    a(e);
                  }
                },
                i = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(o, n);
                };
              i((r = r.apply(e, null)).next());
            })
          );
          var e, r;
        },
        w = function (e) {
          return { name: e.name, showType: e.showType, id: e.id, desc: e.desc };
        },
        y = function (e) {
          var t = e.accChangePct1M,
            r = e.avgChangePct,
            o = e.data,
            n = e.total,
            i = e.title;
          return (
            null == o ||
              o.sort(function (e, t) {
                var a,
                  r,
                  o = parseFloat(null == (a = e.data) ? void 0 : a.changePct),
                  n = parseFloat(null == (r = t.data) ? void 0 : r.changePct);
                return isNaN(o) ? 1 : isNaN(n) ? -1 : n - o;
              }),
            {
              accChangePct1M: t,
              avgChangePct: r,
              data: null == o ? void 0 : o.slice(0, a.limit),
              total: n,
              title: i,
            }
          );
        };
      return {
        basketData: g,
        isShowBasket: b,
        reportExtra: h,
        getBasketData: T,
        onTableToggleClick: function (e, t) {
          l.nextTick$1(function () {
            g.value.ranking.data[e].watched = t;
          });
        },
        onBasketToggleClick: function (e) {
          g.value.userData.watched = e;
        },
        goToMockTrade: function () {
          var t, u;
          p.report(
            "jichu.ai_search.goto_mock_trade_click",
            ((t = (function (t, a) {
              for (var r in a || (a = {})) i.call(a, r) && s(t, r, a[r]);
              if (n) {
                var o,
                  u = e(n(a));
                try {
                  for (u.s(); !(o = u.n()).done; ) {
                    r = o.value;
                    c.call(a, r) && s(t, r, a[r]);
                  }
                } catch (e) {
                  u.e(e);
                } finally {
                  u.f();
                }
              }
              return t;
            })({}, a.routeMockTradeParam)),
            (u = { gdid: a.basketId }),
            r(t, o(u)))
          ),
            k("goToMockTrade", a.basketId);
        },
        goToChoosePage: function () {
          k("goToChoosePage");
        },
      };
    },
    onPageShow: function () {
      this.getBasketData();
    },
  };
Array || l.resolveComponent("basket-overview")();
var f = l._export_sfc(d, [
  [
    "render",
    function (e, t, a, r, o, n) {
      return l.e(
        { a: r.isShowBasket },
        r.isShowBasket
          ? {
              b: l.o(r.onTableToggleClick, 5922),
              c: l.o(r.goToMockTrade, 5923),
              d: l.o(r.goToChoosePage, 5924),
              e: l.o(r.onBasketToggleClick, 5925),
              f: l.p({
                "basket-data": r.basketData,
                "is-show-footer": !0,
                "is-big-radius": !0,
                "is-bg-white": !1,
                "is-search-ai": !0,
                "root-class": "ai-basket-stocklist",
                "column-num": a.limit,
                "row-num": 3,
                skin: a.skin,
                "report-prefix": "jichu.ai_search",
                "report-extra": r.reportExtra,
                "is-to-mock-trade": a.isToMockTrade,
                "route-mock-trade-param": a.routeMockTradeParam,
              }),
            }
          : {}
      );
    },
  ],
]);
wx.createComponent(f);
