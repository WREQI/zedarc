var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  l = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  s = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && l(e, n, t[n]);
    if (u) {
      var o,
        i = r(u(t));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          n = o.value;
          a.call(t, n) && l(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return o(e, i(t));
  },
  d = function (e, t, r) {
    return new Promise(function (n, o) {
      var i = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, u);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  f = require("../../../../../common/vendor.js"),
  h = require("../store/useStocksStore.js"),
  m = require("../../stock-mini-mins/api/StockMiniChartApiV2.js"),
  g = require("../utils/util.js"),
  v = require("../service/index.js"),
  S = require("../../stock-hq-core/utils/f2-fit/tool.js"),
  w = require("../node-modules/throttle-debounce/esm/index.js"),
  y = require("../Index.js"),
  b = {
    components: {
      DynamicHeightPlaceholder: function () {
        return "./DynamicHeightPlaceholder.js";
      },
      Empty: function () {
        return "./Empty.js";
      },
      StockBasket: function () {
        return "../../../../stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.js";
      },
      SelectPlate: function () {
        return "./SelectPlate.js";
      },
    },
    props: {
      skin: { type: String, default: "white" },
      tabShow: { type: Boolean, default: !1 },
      pageShow: { type: Boolean, default: !1 },
      groupIndex: { type: Number, default: -1 },
      showPrivacyPolicyBar: { type: Boolean, default: !1 },
    },
    setup: function (r, n) {
      var o,
        i = this,
        u = n.emit,
        c =
          (null == (o = f.getCurrentInstance()) ? void 0 : o.proxy) ||
          f.getCurrentInstance(),
        a = f.computed(function () {
          return f.StockBridge.ENV === f.EnvTypeEnum.MP;
        }),
        l = m.useViewStore(),
        b = h.useStocksStore(),
        P = y.usePortfolioViewHook(),
        k = f.computed(function () {
          return l.swiperHeight;
        }),
        T = f.computed(function () {
          return k.value - l.sortBarHeight;
        }),
        x = -1,
        C = b.stockList,
        H = b.updateBasketListData,
        B = f.computed(function () {
          return "agree" === l.protocolStatus;
        }),
        I = null,
        j = null,
        _ = !0,
        q = g.STOCKBASKET_GROUPID,
        O = f.ref(!1),
        E = f.ref([
          { id: 0, name: "添加时间", type: "addTime" },
          { id: 1, name: "更新时间", type: "updateTime" },
          { id: 2, name: "当日涨跌幅", type: "avgChangePct" },
        ]),
        M = f.ref({}),
        D = f.reactive({
          len: 0,
          curSortIndex: 0,
          curSortType: "addTime",
          renderList: null,
          startTimer: 0,
          reportedBrow: !1,
          triggered: !1,
          scrollable: !1,
        }),
        R = f.computed(function () {
          return l.swiperItemHeight;
        }),
        L = f.computed(function () {
          return b.curGroupId === q;
        }),
        N = f.computed(function () {
          return (
            r.groupIndex === b.curGroupIndex - 1 ||
            r.groupIndex === b.curGroupIndex + 1
          );
        }),
        A = f.computed(function () {
          return l.swiperHeight - l.sortBarHeight;
        }),
        G = f.computed(function () {
          return r.tabShow ? "transparent" : "#ffffff";
        }),
        V = f.computed(function () {
          return R.value && N.value
            ? 0 === D.len
              ? "".concat(R.value + l.sortBarHeight, "px")
              : "".concat(R.value, "px")
            : "auto";
        });
      f.watch(
        function () {
          return L.value;
        },
        function (e) {
          e &&
            f.nextTick$1(function () {
              P.setContentHeight(c, 0 === D.len, u, !0);
            });
        }
      );
      var z = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = s(
              {
                fchannel_id_fm_i: "IdR00p000l146",
                watchlist_id: "",
                foperation_purpose: "watchlist_zixuan",
              },
              t
            );
          f.StockBridge.report(e, r);
        },
        K = function (e) {
          var t = e.map(function (e, t) {
            return p(s({}, e), { id: e.info.id, addTime: -t });
          });
          (D.renderList = Q(t)), (D.len = B.value ? D.renderList.length : 0);
        },
        U = function e() {
          return d(
            i,
            null,
            t().mark(function n() {
              var o, i, u, c;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        clearTimeout(I),
                        (_ = !0),
                        (t.next = 3),
                        v.queryUserBasket()
                      );
                    case 3:
                      0 == +(o = t.sent).code &&
                        ((i = o.data || {}),
                        (u = i.list),
                        K((c = void 0 === u ? [] : u)),
                        H(c)),
                        (_ = !1),
                        r.tabShow &&
                          r.pageShow &&
                          !_ &&
                          (I = setTimeout(function () {
                            e();
                          }, 6e3));
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, n);
            })
          );
        },
        $ = function (e, t) {
          if (((O.value = e), t))
            if ("mp" === f.StockBridge.ENV)
              f.wx$1
                .createSelectorQuery()
                .in(c)
                .select(".portfolio-basket-select-btn")
                .fields({ node: !0, size: !0, rect: !0 })
                .exec(function (e) {
                  var t = (e && e[0]) || {};
                  t &&
                    t.right &&
                    (M.value = {
                      right: t.right,
                      bottom: t.bottom,
                      arrowMid: t.left + t.width / 2,
                    });
                });
            else {
              var r = document.querySelector(".portfolio-basket-select-btn");
              if (r) {
                var n = r.getBoundingClientRect();
                M.value = {
                  right: n.right,
                  bottom: n.bottom,
                  arrowMid: n.left + n.width / 2,
                };
              }
            }
        },
        F = function (e) {
          var t, r;
          switch (D.curSortType) {
            case "addTime":
              return null == e ? void 0 : e.addTime;
            case "updateTime":
              return new Date(
                null == (t = null == e ? void 0 : e.ranking)
                  ? void 0
                  : t.updateTime.replace(/-/g, "/")
              ).getTime();
            case "avgChangePct":
              return Number(
                null == (r = null == e ? void 0 : e.ranking)
                  ? void 0
                  : r.avgChangePct
              );
          }
        },
        Q = function (e) {
          return D.curSortType
            ? e.sort(function (e, t) {
                return F(t) - F(e);
              })
            : e;
        },
        J = function () {
          (D.triggered = !1), j && clearTimeout(j);
        },
        W = w.debounce(100, function () {
          P.setCalculateCardHeight(c);
        });
      !(function () {
        var e,
          r =
            (null == (e = null == C ? void 0 : C[g.STOCKBASKET_GROUPID])
              ? void 0
              : e.list) || [];
        K(r),
          f.nextTick$1(function () {
            return d(
              i,
              null,
              t().mark(function e() {
                var r, n;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          S.getEleInfo("#portfolio-basket-wrapper", c)
                        );
                      case 2:
                        (r = e.sent),
                          (n = r.height),
                          (D.scrollable = n > T.value);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          });
      })();
      var X = function () {
        clearTimeout(I),
          (I = null),
          clearTimeout(j),
          (j = null),
          D.startTimer && z("wzqxcx_stay_time", "", (Date.now(), D.startTimer));
      };
      return (
        f.onUnmounted(function () {
          X();
        }),
        f.watch(
          function () {
            return [r.tabShow, r.pageShow];
          },
          function (t) {
            var r = e(t, 2),
              n = r[0],
              o = r[1];
            n && o
              ? ((D.startTimer = Date.now()),
                z("choose.stock_basket_brow"),
                U())
              : X();
          },
          { immediate: !0 }
        ),
        p(s({ showSortPopup: O, sortPopupPosition: M }, f.toRefs(D)), {
          isMp: a,
          scrollViewHeight: T,
          sortConfig: E,
          isProtocolAgreed: B,
          isNearCurrent: N,
          computedBGColor: G,
          computedHeight: V,
          handleShowSortPopup: $,
          handleSortSelect: function (e) {
            (D.curSortIndex = e),
              (D.curSortType = E.value[e].type),
              Q(D.renderList),
              $(!1);
          },
          pullStart: function () {
            D.triggered ||
              ((D.triggered = !0), l.mpHideTitle && l.setMpHideTitle(!1));
          },
          pullEnd: J,
          pullRefresh: function () {
            (j = setTimeout(function () {
              return d(
                i,
                null,
                t().mark(function e() {
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), U();
                        case 2:
                          J();
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
            }, 600)),
              z("choose.stock_basket_refresh");
          },
          handleOriginScroll: function (e) {
            var t = e.detail,
              r = t.scrollTop,
              n = t.scrollHeight;
            l.setListScrollPosition(q, r),
              (function (e) {
                var t = e.detail,
                  r = t.scrollTop;
                if (!(r > t.scrollHeight - k.value || r < 0))
                  if (-1 !== x) {
                    var n = r - x;
                    Math.abs(n) >= 38 &&
                      ((x = -1),
                      n >= 38 && !l.mpHideTitle
                        ? l.setMpHideTitle(!0)
                        : n <= -38 && l.mpHideTitle && l.setMpHideTitle(!1));
                  } else x = r;
              })(e),
              n - r < A.value + P.placeHolderHeight.value && W();
          },
        })
      );
    },
  };
Array ||
  (
    f.resolveComponent("stock-basket") +
    f.resolveComponent("DynamicHeightPlaceholder") +
    f.resolveComponent("Empty") +
    f.resolveComponent("SelectPlate")
  )();
var P = f._export_sfc(b, [
  [
    "render",
    function (e, t, r, n, o, i) {
      return f.e(
        {
          a: f.t(e.len),
          b: f.t(n.sortConfig[e.curSortIndex].name),
          c: f.o(function (e) {
            return n.handleShowSortPopup(!0, !0);
          }, 2637),
          d: e.len,
        },
        e.len
          ? f.e(
              {
                e: f.f(e.renderList, function (e, t, r) {
                  return {
                    a: e.id,
                    b: "dced071e-0-" + r,
                    c: f.p({
                      "is-page-show": !0,
                      "basket-data": e,
                      positionid: t,
                      from: "portfolio",
                    }),
                  };
                }),
                f: e.len,
              },
              e.len
                ? {
                    g: f.n(
                      r.showPrivacyPolicyBar ? "showPrivacyPolicyBar" : ""
                    ),
                  }
                : {},
              { h: e.scrollable },
              (e.scrollable, {}),
              {
                i: f.s("height: ".concat(n.scrollViewHeight, "px")),
                j: e.triggered,
                k: f.o(function () {
                  return (
                    n.handleOriginScroll &&
                    n.handleOriginScroll.apply(n, arguments)
                  );
                }, 2638),
                l: f.o(function () {
                  return n.pullStart && n.pullStart.apply(n, arguments);
                }, 2639),
                m: f.o(function () {
                  return n.pullEnd && n.pullEnd.apply(n, arguments);
                }, 2640),
                n: f.o(function () {
                  return n.pullRefresh && n.pullRefresh.apply(n, arguments);
                }, 2641),
              }
            )
          : { o: f.p({ text: "去发现页挑选股单，不错过行情和机会" }) },
        { p: n.isMp },
        n.isMp
          ? {
              q: f.o(n.handleSortSelect, 2642),
              r: f.o(function (e) {
                return n.handleShowSortPopup(!1);
              }, 2643),
              s: f.p({
                "curr-idx": e.curSortIndex,
                show: n.showSortPopup,
                configs: n.sortConfig,
                "pos-info": n.sortPopupPosition,
                "is-dock-right": !0,
              }),
            }
          : {
              t: f.o(n.handleSortSelect, 2644),
              v: f.o(function (e) {
                return n.handleShowSortPopup(!1);
              }, 2645),
              w: f.p({
                "curr-idx": e.curSortIndex,
                show: n.showSortPopup,
                configs: n.sortConfig,
                "pos-info": n.sortPopupPosition,
                "is-dock-right": !0,
              }),
            },
        {
          x: n.isNearCurrent,
          y: f.n(n.isNearCurrent ? "with-radius" : ""),
          z: n.computedBGColor || "transparent",
          A: n.computedHeight || "auto",
          B: n.isNearCurrent ? "hidden" : "auto",
          C: f.n(r.skin),
        }
      );
    },
  ],
  ["__scopeId", "data-v-dced071e"],
]);
wx.createComponent(P);
