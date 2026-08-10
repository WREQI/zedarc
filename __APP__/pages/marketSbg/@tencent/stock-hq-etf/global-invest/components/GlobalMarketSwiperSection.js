require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  l = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  d = function (e, n, t) {
    return n in e
      ? a(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  v = function (e, n) {
    for (var t in n || (n = {})) i.call(n, t) && d(e, t, n[t]);
    if (o) {
      var a,
        l = r(o(n));
      try {
        for (l.s(); !(a = l.n()).done; ) {
          t = a.value;
          c.call(n, t) && d(e, t, n[t]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  f = function (e, n) {
    return l(e, u(n));
  },
  s = function (e, n, t) {
    return new Promise(function (r, a) {
      var l = function (e) {
          try {
            o(t.next(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          try {
            o(t.throw(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(l, u);
        };
      o((t = t.apply(e, n)).next());
    });
  },
  p = require("../../../../../../common/vendor.js"),
  m = require("../service/index.js"),
  h = require("../utils/report.js"),
  b = require("../../../stock-markets-base/utils/market.js"),
  k = require("../../utils/common.js"),
  g = ["eu", "other"],
  _ = 20,
  y = function e(n) {
    if (!n) return "";
    if ("string" == typeof n || "number" == typeof n) return String(n);
    if (Array.isArray(n))
      return e(
        n.find(function (e) {
          return e && "object" == t(e) && e.name;
        }) || n.find(Boolean)
      );
    if ("object" == t(n)) {
      var r = n;
      return String(r.name || r.label || "");
    }
    return "";
  },
  I = p.defineComponent({
    name: "GlobalMarketSwiperSection",
    components: {
      Tabbar: function () {
        return "../../components/Tabbar.js";
      },
      GlobalFundCard: function () {
        return "./GlobalFundCard.js";
      },
      GlobalMarketRankItem: function () {
        return "./GlobalMarketRankItem.js";
      },
      WzqInfoModal: function () {
        return "../../node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
    },
    props: {
      showIndexFilter: { type: Boolean, default: !1 },
      defaultMarket: { type: String, default: "us" },
      source: { type: String, default: "global_market" },
      cardVariant: { type: String, default: "market" },
      marketData: {
        type: Object,
        default: function () {
          return { us: [], hk: [], jp: [], eu: [], other: [] };
        },
      },
      channelId: { type: String, default: "" },
      isChannelIdReady: { type: Boolean, default: !1 },
    },
    setup: function (t) {
      var r = this,
        a = p.getCurrentInstance(),
        l = p.ref(!1),
        u = p.ref(0),
        o = p.ref(t.defaultMarket),
        i = p.ref(null),
        c = function () {
          var e,
            n,
            t =
              null == (n = (e = p.StockBridge).getStorage)
                ? void 0
                : n.call(e, m.GLOBAL_INVEST_INDEX_FILTER_STORAGE_KEY);
          return null == t || "" === t || !0 === t || "true" === t || "1" === t;
        },
        d = p.ref(c()),
        I = p.ref(!1),
        T = p.ref(!1),
        S = k.skin(),
        w = "black" === S || "dark" === S,
        L = p.computed(function () {
          return d.value
            ? w
              ? "https://st.gtimg.com/design/2fcbb04102e5ba1d37ad94f1e880e0aa.svg"
              : "https://st.gtimg.com/pcm/mq4q1eq8_4bb5a29e2f0f1c25867c37673206d4be.svg"
            : "https://st.gtimg.com/design/0fa6cabc0e83182bb29ffcc0575ae94c.png";
        }),
        E = p.ref(!1),
        M = p.ref(!1),
        O = p.ref(0),
        R = p.ref(null),
        x = ["mpwzq", "mpweapp"].includes("mpweapp"),
        A = p.ref(!1),
        C = p.ref({}),
        F = null,
        G = null,
        B = m.MARKET_CONFIG,
        N = p.computed(function () {
          var e = t.marketData;
          return B.filter(function (n) {
            var t = e[n.key];
            return Array.isArray(t) && t.length > 0;
          });
        }),
        q = p.computed(function () {
          return N.value.map(function (e) {
            return { name: e.name };
          });
        }),
        P = p.computed(function () {
          return R.value ? { height: "".concat(R.value, "px") } : {};
        }),
        V = function (e) {
          var n = String(null != e ? e : "").match(/-?\d+(?:\.\d+)?/);
          return n ? Number(n[0]) : null;
        },
        j = function (e) {
          var n,
            t = V(e);
          return null === t || Number.isNaN(t)
            ? "--"
            : "".concat(t > 0 ? "+" : "").concat(
                (null ==
                (n = String(e || "")
                  .trim()
                  .match(/-?\d+(?:\.\d+)?/))
                  ? void 0
                  : n[0]) || String(t),
                "%"
              );
        },
        D = function (e) {
          var n = V(e);
          return null === n || Number.isNaN(n) || 0 === n
            ? "equal"
            : n > 0
            ? "rise"
            : "drop";
        },
        K = function (e) {
          var n = V(e);
          return null === n || Number.isNaN(n)
            ? "--"
            : "".concat((100 * n).toFixed(2), "元");
        },
        H = p.computed(function () {
          var e = {};
          return (
            N.value.forEach(function (n) {
              var r = t.marketData[n.key] || [];
              e[n.key] = r
                .map(function (e) {
                  return (function () {
                    var e,
                      n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = String(n.symbol || "");
                    b.splitSymbol(r);
                    var a = y(n.label);
                    return f(v({}, n), {
                      fund_code: r,
                      fund_id: String(n.fund_id || n.id || r),
                      code: r,
                      id: String(n.id || n.fund_id || r),
                      name: String(n.name || "--"),
                      returnValue: j(n.returnValue),
                      returnLabel: String(n.returnLabel || "涨跌幅"),
                      returnClass: D(n.returnValue),
                      returnSortValue:
                        null != (e = V(n.returnValue))
                          ? e
                          : Number.NEGATIVE_INFINITY,
                      priceText: K(n.priceText),
                      priceLabel: String(n.priceLabel || "买一笔仅需"),
                      tag: String(a || ""),
                      highlight: String(n.highlight || ""),
                      source: String(n.source || t.source),
                    });
                  })(e);
                })
                .sort(function (e, n) {
                  return n.returnSortValue - e.returnSortValue;
                });
            }),
            e
          );
        }),
        W = p.computed(function () {
          var e = {};
          return (
            N.value.forEach(function (n) {
              var t = H.value[n.key] || [],
                r = C.value[n.key] || _;
              e[n.key] = t.slice(0, r);
            }),
            e
          );
        }),
        z = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = {};
          N.value.forEach(function (t) {
            var r,
              a = C.value[t.key] || _,
              l = (null == (r = H.value[t.key]) ? void 0 : r.length) || _;
            n[t.key] = e ? Math.min(Math.max(a, _), l) : _;
          }),
            (C.value = n);
        },
        $ = function (e) {
          var n = N.value.findIndex(function (n) {
            return n.key === e;
          });
          return n >= 0 ? n : 0;
        },
        X = function () {
          var e = (function () {
            var e = i.value;
            return (null == e ? void 0 : e.$el) || null;
          })();
          return (
            (e && Array.from(e.querySelectorAll("swiper-slide"))[u.value]) ||
            null
          );
        },
        Y = function () {
          p.nextTick$1(function () {
            var e = (function () {
              var e = N.value[u.value];
              return e
                ? (function (e) {
                    var n = W.value[e] || [];
                    return 0 === n.length
                      ? 0
                      : g.includes(e)
                      ? n.reduce(function (e, n) {
                          return e + (n.highlight ? 184 : 126);
                        }, 0)
                      : 274 * n.length + 1 * Math.max(n.length - 1, 0);
                  })(e.key)
                : 0;
            })();
            if (void 0 !== p.wx$1 && p.wx$1.createSelectorQuery) {
              var n = (function () {
                var e = N.value[u.value];
                return e
                  ? ".global-market-swiper-section__slide--".concat(e.key)
                  : "";
              })();
              n &&
                p.wx$1
                  .createSelectorQuery()
                  .in((null == a ? void 0 : a.proxy) || a)
                  .select(n)
                  .boundingClientRect(function (n) {
                    var t = Number(null == n ? void 0 : n.height) || 0,
                      r = t > 1 ? t : e;
                    r > 0 && R.value !== r && (R.value = r);
                  })
                  .exec();
            } else e > 0 && R.value !== e && (R.value = e);
          });
        },
        U = function () {
          var e, n, t, r;
          if (x) Y();
          else {
            var a = X(),
              l =
                null == a
                  ? void 0
                  : a.querySelector(".global-market-swiper-section__slide"),
              u =
                (null == l ? void 0 : l.scrollHeight) ||
                (null == a ? void 0 : a.scrollHeight) ||
                0;
            u > 0 && R.value !== u && (R.value = u);
            var o =
              null == (n = null == (e = i.value) ? void 0 : e.getSwiperInstance)
                ? void 0
                : n.call(e);
            null == (t = null == o ? void 0 : o.updateAutoHeight) ||
              t.call(o, 0),
              null == (r = null == o ? void 0 : o.updateSize) || r.call(o);
          }
        },
        Q = function () {
          x
            ? Y()
            : "undefined" != typeof window &&
              (null !== F && window.cancelAnimationFrame(F),
              (F = window.requestAnimationFrame(function () {
                (F = null),
                  U(),
                  (function () {
                    if (
                      (null == G || G.disconnect(),
                      (G = null),
                      !x && "undefined" != typeof ResizeObserver)
                    ) {
                      var e = X(),
                        n =
                          null == e
                            ? void 0
                            : e.querySelector(
                                ".global-market-swiper-section__slide"
                              );
                      n &&
                        (G = new ResizeObserver(function () {
                          U();
                        })).observe(n);
                    }
                  })();
              })));
        },
        J = function () {
          var e,
            n,
            t,
            r =
              null == (n = null == (e = i.value) ? void 0 : e.getSwiperInstance)
                ? void 0
                : n.call(e);
          null == (t = null == r ? void 0 : r.slideTo) ||
            t.call(r, u.value, 200, !1),
            Q();
        },
        Z = function () {
          var e,
            t = N.value[u.value];
          if (t) {
            var r = t.key,
              a = (null == (e = H.value[r]) ? void 0 : e.length) || 0,
              l = C.value[r] || _;
            l >= a ||
              ((C.value = f(v({}, C.value), n({}, r, Math.min(l + _, a)))),
              setTimeout(function () {
                Q();
              }, 50));
          }
        },
        ee = function () {
          "undefined" != typeof window &&
            "undefined" != typeof document &&
            (window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0) +
              (window.innerHeight ||
                document.documentElement.clientHeight ||
                0) >=
              Math.max(
                document.documentElement.scrollHeight || 0,
                document.body.scrollHeight || 0
              ) -
                120 &&
            Z();
        },
        ne = function () {
          var e;
          null == (e = null == a ? void 0 : a.emit) ||
            e.call(a, "tabbar-header-click");
        },
        te = p.ref(!1),
        re = function () {
          te.value ||
            (N.value.length > 0 &&
              ((function () {
                var e,
                  n = $(o.value || t.defaultMarket);
                (u.value = n),
                  (o.value =
                    (null == (e = N.value[n]) ? void 0 : e.key) ||
                    t.defaultMarket),
                  Q();
              })(),
              (te.value = !0)));
        };
      p.watch(
        function () {
          return t.marketData;
        },
        function () {
          return s(
            r,
            null,
            e().mark(function n() {
              var a, l, i;
              return e().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if ((z(te.value && !E.value), !E.value)) {
                        n.next = 4;
                        break;
                      }
                      s(
                        r,
                        null,
                        e().mark(function n() {
                          var t, r;
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r = N.value.length),
                                    (e.t0 = 0 !== r),
                                    !e.t0)
                                  ) {
                                    e.next = 10;
                                    break;
                                  }
                                  return (
                                    (u.value = Math.min(O.value, r - 1)),
                                    (o.value =
                                      (null == (t = N.value[u.value])
                                        ? void 0
                                        : t.key) || o.value),
                                    (e.next = 7),
                                    p.nextTick$1()
                                  );
                                case 7:
                                  J(),
                                    Q(),
                                    setTimeout(function () {
                                      E.value = !1;
                                    }, 0);
                                case 10:
                                case "end":
                                  return e.stop();
                              }
                          }, n);
                        })
                      ),
                        (n.next = 19);
                      break;
                    case 4:
                      if (!te.value) {
                        n.next = 18;
                        break;
                      }
                      if (
                        ((l = $(o.value || t.defaultMarket)),
                        (i = N.value.length),
                        (n.t0 = i > 0),
                        !n.t0)
                      ) {
                        n.next = 16;
                        break;
                      }
                      return (
                        (M.value = !0),
                        (u.value = Math.min(l, i - 1)),
                        (o.value =
                          (null == (a = N.value[u.value]) ? void 0 : a.key) ||
                          o.value),
                        (n.next = 13),
                        p.nextTick$1()
                      );
                    case 13:
                      J(),
                        Q(),
                        setTimeout(function () {
                          M.value = !1;
                        }, 0);
                    case 16:
                      n.next = 19;
                      break;
                    case 18:
                      re(), Q();
                    case 19:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
        }
      ),
        p.watch(u, function () {
          Q();
        }),
        p.watch(N, function () {
          z(te.value && !E.value), p.nextTick$1(Q);
        });
      var ae = function () {
        if (t.isChannelIdReady && !T.value) {
          T.value = !0;
          var e = { fchannel_id_fm_i: t.channelId || "" };
          "global_market" === t.source
            ? (h.reportGlobalInvest(
                h.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_LIST_BUY_BTN_BROW,
                e
              ),
              h.reportGlobalInvest(
                h.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_HOLDING_STOCKS_LIST_BROW
              ))
            : (h.reportGlobalInvest(
                h.GLOBAL_INVEST_REPORT.LIST_BUY_BTN_BROW,
                e
              ),
              h.reportGlobalInvest(
                h.GLOBAL_INVEST_REPORT.HOLDING_STOCKS_LIST_BROW
              ));
        }
      };
      return (
        p.onMounted(function () {
          (d.value = c()),
            z(),
            Q(),
            t.showIndexFilter &&
              !I.value &&
              ((I.value = !0),
              h.reportGlobalInvest(
                h.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_INDEX_FILTER_BTN_BROW
              ),
              h.reportGlobalInvest(
                h.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_INDEX_FILTER_SMALL_I_BROW
              )),
            "undefined" != typeof window &&
              window.addEventListener("scroll", ee, { passive: !0 }),
            ae();
        }),
        p.watch(function () {
          return t.isChannelIdReady;
        }, ae),
        p.onUnmounted(function () {
          null !== F &&
            "undefined" != typeof window &&
            window.cancelAnimationFrame(F),
            null == G || G.disconnect(),
            "undefined" != typeof window &&
              window.removeEventListener("scroll", ee);
        }),
        {
          markets: B,
          visibleMarkets: N,
          isMp: x,
          isSelfStockMp: !0,
          currentSkin: S,
          showTipModal: A,
          tipModalConfig: {
            title: "指数过滤",
            content: [
              {
                type: "text",
                text: "市场上存在多只ETF跟踪同一指数，这些ETF的走势相近。勾选“指数过滤”后，榜单内跟踪相同指数的ETF仅展示一只。",
              },
            ],
            cancelBtn: "我知道了",
          },
          tabConfig: q,
          activeMarketIndex: u,
          swiperRoot: i,
          swiperOptions: { autoHeight: !0, observeParents: !0, observer: !0 },
          swiperStyle: P,
          indexFilterEnabled: d,
          indexFilterCheckboxIcon: L,
          isCompactMarket: function (e) {
            return g.includes(e);
          },
          getFormattedMarketFunds: function (e) {
            return W.value[e] || [];
          },
          tryInitIndex: re,
          handleTabClick: function (e) {
            var n;
            ne(),
              e !== u.value &&
                ((u.value = e),
                (o.value =
                  (null == (n = N.value[e]) ? void 0 : n.key) || o.value),
                J());
          },
          handleSwiperChange: function (e) {
            var n, r;
            if (!E.value && !M.value) {
              var a =
                (null == (n = null == e ? void 0 : e.detail)
                  ? void 0
                  : n.current) || 0;
              "home_market_summary" === t.source &&
                a !== u.value &&
                h.reportGlobalInvest(
                  h.GLOBAL_INVEST_REPORT.HOME_GLOBAL_MARKET_MODULE_SCROLL
                ),
                (u.value = a),
                (o.value =
                  (null == (r = N.value[a]) ? void 0 : r.key) || o.value),
                J(),
                Q();
            }
          },
          handleFilterChange: function () {
            var e, n, t;
            h.reportGlobalInvest(
              h.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_INDEX_FILTER_BTN_CLICK
            ),
              ne();
            var r = !d.value;
            (d.value = r),
              null == (n = (e = p.StockBridge).setStorage) ||
                n.call(
                  e,
                  m.GLOBAL_INVEST_INDEX_FILTER_STORAGE_KEY,
                  r ? "1" : "0"
                ),
              (O.value = u.value),
              (E.value = !0),
              null == (t = null == a ? void 0 : a.emit) ||
                t.call(a, "filter-change", r);
          },
          handleBuy: function (e) {
            l.value ||
              ((l.value = !0),
              m.GlobalInvestService.navigateToEtfBuy(
                f(v({}, e), { source: t.source }),
                a,
                t.channelId
              ).finally(function () {
                l.value = !1;
              }));
          },
          handleTeachPop: function () {
            h.reportGlobalInvest(
              h.GLOBAL_INVEST_REPORT.GLOBAL_MARKET_INDEX_FILTER_SMALL_I_CLICK
            ),
              ne(),
              (A.value = !0);
          },
          loadMoreActiveMarketFunds: Z,
        }
      );
    },
  });
Array ||
  (
    p.resolveComponent("Tabbar") +
    p.resolveComponent("GlobalMarketRankItem") +
    p.resolveComponent("GlobalFundCard") +
    p.resolveComponent("WzqInfoModal")
  )();
var T = p._export_sfc(I, [
  [
    "render",
    function (e, n, t, r, a, l) {
      return p.e(
        {
          a: p.n(e.isMp ? "tabbar-mp" : ""),
          b: p.o(e.handleTabClick, 3153),
          c: p.p({
            "rank-config": e.tabConfig,
            "rank-index": e.activeMarketIndex,
            "align-left": !e.isMp,
          }),
          d: e.showIndexFilter,
        },
        e.showIndexFilter
          ? {
              e: "url(".concat(e.indexFilterCheckboxIcon, ")"),
              f: p.o(function () {
                return (
                  e.handleFilterChange &&
                  e.handleFilterChange.apply(e, arguments)
                );
              }, 3154),
              g: p.o(function () {
                return (
                  e.handleFilterChange &&
                  e.handleFilterChange.apply(e, arguments)
                );
              }, 3155),
              h: p.o(function () {
                return e.handleTeachPop && e.handleTeachPop.apply(e, arguments);
              }, 3156),
            }
          : {},
        {
          i: p.f(e.visibleMarkets, function (n, t, r) {
            return p.e(
              { a: e.isCompactMarket(n.key) },
              e.isCompactMarket(n.key)
                ? {
                    b: p.f(
                      e.getFormattedMarketFunds(n.key),
                      function (t, a, l) {
                        return {
                          a: ""
                            .concat(n.key, "-")
                            .concat(t.fund_code || t.code || a),
                          b: "global-market-rank-item-"
                            .concat(n.key, "-")
                            .concat(a),
                          c: p.o(
                            function (n) {
                              return e.handleBuy(t);
                            },
                            3157,
                            ""
                              .concat(n.key, "-")
                              .concat(t.fund_code || t.code || a)
                          ),
                          d: "5e704c44-1-" + r + "-" + l,
                          e: p.p({
                            fund: t,
                            "show-buy-button": !0,
                            "channel-id": e.channelId,
                          }),
                        };
                      }
                    ),
                  }
                : {
                    c: p.f(
                      e.getFormattedMarketFunds(n.key),
                      function (t, a, l) {
                        return p.e(
                          {
                            a: p.o(
                              function (n) {
                                return e.handleBuy(t);
                              },
                              3158,
                              "".concat(n.key, "-").concat(a)
                            ),
                            b: "5e704c44-2-" + r + "-" + l,
                            c: p.p({
                              fund: t,
                              variant: e.cardVariant,
                              source: e.source,
                              "channel-id": e.channelId,
                            }),
                            d: a < e.getFormattedMarketFunds(n.key).length - 1,
                          },
                          (e.getFormattedMarketFunds(n.key).length, {}),
                          { e: "".concat(n.key, "-").concat(a) }
                        );
                      }
                    ),
                  },
              {
                d: p.n("global-market-swiper-section__slide--".concat(n.key)),
                e: n.key,
              }
            );
          }),
          j: e.activeMarketIndex,
          k: e.swiperOptions,
          l: p.s(e.swiperStyle),
          m: p.o(function () {
            return (
              e.handleSwiperChange && e.handleSwiperChange.apply(e, arguments)
            );
          }, 3159),
          n: e.showTipModal && e.isSelfStockMp,
        },
        e.showTipModal && e.isSelfStockMp
          ? {
              o: p.o(function (n) {
                return (e.showTipModal = !1);
              }, 3160),
              p: p.p({ skin: e.currentSkin, config: e.tipModalConfig }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5e704c44"],
]);
wx.createComponent(T);
