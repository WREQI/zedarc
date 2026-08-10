var e = require("../../../../../../common/vendor.js"),
  t = require("../../store/useStocksStore.js"),
  o = require("../../../stock-mini-mins/api/StockMiniChartApiV2.js"),
  r = require("../../utils/util.js"),
  i = require("../../node-modules/throttle-debounce/esm/index.js"),
  n = require("../../Index.js");
function u(r, u) {
  var l,
    a,
    c,
    s =
      (null == (l = e.getCurrentInstance()) ? void 0 : l.proxy) ||
      e.getCurrentInstance(),
    p =
      (null == (c = null == (a = getApp().globalData.detect) ? void 0 : a.env)
        ? void 0
        : c.IS_PCWEIXIN) || !1,
    d = t.useStocksStore(),
    f = o.useViewStore();
  n.useCaptionStore();
  var h = n.useSubscribeHook(r),
    g = n.usePortfolioViewHook(),
    v = e.ref(!0),
    m = e.ref(!1),
    S = e.ref(!1),
    I = e.ref(null),
    k = e.computed(function () {
      return d.curGroupId;
    }),
    y = -1,
    C = null,
    w = !1;
  e.computed(function () {
    return d.getCurStockList(r.groupId);
  });
  var P = e.computed(function () {
      return d.getFilterList(r.groupId);
    }),
    L = e.computed(function () {
      return f.stockItemHeight;
    }),
    M = e.computed(function () {
      return f.visibleIndexRange[r.groupId];
    }),
    x = e.computed(function () {
      return f.swiperItemHeight;
    }),
    H = e.computed(function () {
      return d.getCurStockCount(r.groupId);
    }),
    b = e.computed(function () {
      return d.getCurFilterCount(r.groupId);
    }),
    T = e.computed(function () {
      return d.renderListCount[r.groupId];
    }),
    F = e.computed(function () {
      return !d.stockList[r.groupId] || d.stockList[r.groupId].len <= 0;
    }),
    B = e.computed(function () {
      return !F.value && "agree" === r.protocolStatus;
    }),
    R = e.computed(function () {
      return (
        r.groupIndex === d.curGroupIndex - 1 ||
        r.groupIndex === d.curGroupIndex + 1
      );
    }),
    N = e.computed(function () {
      return d.curGroupId === r.groupId;
    }),
    G = e.computed(function () {
      return f.swiperHeight - f.sortBarHeight;
    }),
    E = e.computed(function () {
      return Math.floor((G.value || 600) / L.value) + 4;
    }),
    j = e.computed(function () {
      return "width: 100%; height: ".concat(G.value, "px;");
    }),
    A = e.computed(function () {
      return N.value
        ? "transparent"
        : "black" === r.skin
        ? "#12161f"
        : "#ffffff";
    }),
    q = e.computed(function () {
      return x.value && R.value
        ? b.value > 0
          ? "".concat(x.value, "px")
          : "".concat(x.value + f.sortBarHeight, "px")
        : "auto";
    }),
    V = e.computed(function () {
      return {};
    }),
    O = e.computed(function () {
      return (d.allLabelList[r.groupId] || []).length || 0;
    }),
    _ = e.computed(function () {
      return [
        { id: 0, name: "全部 (".concat(H.value, ")"), type: "allStock" },
        { id: 1, name: "有异动 (".concat(O.value, ")"), type: "labelStock" },
      ];
    }),
    U = e.computed(function () {
      return d.filterMap[r.groupId] || 0;
    }),
    D = e.computed(function () {
      return 0 === U.value
        ? "股票 (".concat(H.value, ")")
        : _.value[U.value].name;
    }),
    $ = e.computed(function () {
      return d.groups;
    }),
    z = e.computed(function () {
      var e;
      return (
        (null == (e = $.value)
          ? void 0
          : e.find(function (e) {
              return e.id === r.groupId;
            })) || {}
      );
    }),
    Q = e.computed(function () {
      return d.isMiniChartHide;
    });
  e.watch(
    function () {
      return E.value;
    },
    function (e, t) {
      p && N.value && e !== t && (te(), J());
    }
  ),
    e.onMounted(function () {
      if (N.value) {
        if (Q.value) return;
        setTimeout(function () {
          var e = P.value.slice(0, 20);
          o.StockMiniChartApi.drawStocksMins(e, r.groupId);
        }, 300);
      }
    });
  var W = function (e, t) {
      (S.value = e), t && (I.value = t);
    },
    X = function () {
      M.value || f.setVisibleIndexRange(r.groupId);
      var t = Math.max(0, M.value.start - 1),
        i = Math.min(b.value, M.value.end + 2),
        n = P.value.slice(t, i);
      try {
        r.isGrayUser && h.queryQTData(n);
      } catch (e) {}
      h.subscribe(n),
        (w = !0),
        Q.value ||
          e.nextTick$1(function () {
            C = setTimeout(function () {
              o.StockMiniChartApi.drawStocksMins(n, r.groupId), clearTimeout(C);
            }, 100);
          });
    },
    J = i.debounce(300, X),
    K = i.debounce(100, function (e) {
      var t = e.detail.scrollTop,
        o = Math.floor(Math.max(0, t / L.value - 1)),
        i = Math.ceil(Math.min(b.value, o + E.value + 1));
      isNaN(o) ||
        isNaN(i) ||
        f.setVisibleIndexRange(r.groupId, o, i < 14 ? 14 : i);
    }),
    Y = function () {
      g.setCalculateCardHeight(s);
    },
    Z = i.debounce(100, Y),
    ee = function () {
      f.setLongPressIndexConf(r.groupId, -1);
    },
    te = i.debounce(100, function () {
      var e;
      if (M.value) {
        var t = null == (e = M.value) ? void 0 : e.start;
        if (!isNaN(t)) {
          var o = Math.ceil(Math.min(b.value, t + E.value + 1));
          isNaN(o) || f.setVisibleIndexRange(r.groupId, t, o < 14 ? 14 : o);
        }
      } else f.setVisibleIndexRange(r.groupId);
    });
  return (
    e.onBeforeUnmount(function () {
      C && clearTimeout(C);
    }),
    ee(),
    {
      isMPPro: !0,
      isH5Pro: !1,
      isMPLite: !1,
      isH5Lite: !1,
      noStock: F,
      isCurrent: N,
      curGroupId: k,
      curStockListLen: H,
      isStockList: B,
      isNearCurrent: R,
      scrollStyle: j,
      refresherEnabled: v,
      triggered: m,
      computedBGColor: A,
      computedHeight: q,
      curFilterIndex: U,
      filterConfig: _,
      isShowFilter: S,
      filterPopupPosition: I,
      captionTitle: D,
      curFilterListLen: b,
      curRenderListCount: T,
      curFilterList: P,
      curGroup: z,
      wrapperStyle: V,
      isMiniChartHide: Q,
      handleSort: function (t) {
        d.filterMap[r.groupId] &&
          0 !== d.filterMap[r.groupId] &&
          d.filteList(r.groupId, 0),
          d.sortStockList(r.groupId, t, !0),
          e.nextTick$1(function () {
            X();
          });
      },
      handleOriginScroll: function (e) {
        w && r.recommendEmpty && (h.stop(), (w = !1));
        var t = e.detail,
          o = t.scrollTop,
          i = t.scrollHeight;
        K(e),
          J(e),
          (function (e) {
            var t = e.detail,
              o = t.scrollTop;
            if (!(o > t.scrollHeight - G.value || o < 0))
              if (-1 !== y) {
                var r = o - y;
                Math.abs(r) >= 38 &&
                  ((y = -1),
                  r >= 38 && !f.mpHideTitle
                    ? f.setMpHideTitle(!0)
                    : r <= -38 && f.mpHideTitle && f.setMpHideTitle(!1));
              } else y = o;
          })(e),
          ee(),
          b.value === T.value &&
            i - o < G.value + g.placeHolderHeight.value &&
            Z();
      },
      showPrivacyPolicyModal: function () {
        u("show-policy-modal");
      },
      calculateCardHeight: Y,
      handleShowFilterPopup: W,
      handleFilterSelect: function (t) {
        W(!1),
          d.filteList(r.groupId, t),
          e.nextTick$1(function () {
            X();
          });
      },
      refreshList: function () {
        u("refresh");
      },
    }
  );
}
var l = {
  components: {
    CaptionBar: function () {
      return "../CaptionBar/CaptionBar.js";
    },
    RenderList: function () {
      return "../RenderList.js";
    },
    SelectPlate: function () {
      return "../SelectPlate.js";
    },
  },
  props: {
    groupId: { type: String, default: "" },
    groupIndex: { type: Number, default: -1 },
    protocolStatus: { type: String, default: "" },
    showPrivacyPolicyBar: { type: Boolean, default: !1 },
    groupType: { type: String, default: "" },
    redpockets: {
      type: Array,
      default: function () {
        return [];
      },
    },
    showPosition: { type: Boolean, default: !1 },
    skin: { type: String, default: "white" },
    recommendEmpty: { type: Boolean, default: !1 },
    isLoadingShow: { type: Boolean, default: !0, required: !0 },
    isAllStock: { type: Boolean, default: !0 },
    isGrayUser: { type: Boolean, default: !1 },
  },
  emits: ["refresh", "show-policy-modal", "monitoring-remind-click"],
  setup: function (i, n) {
    var l = n.emit,
      a = e.ref(!1),
      c = null,
      s = t.useStocksStore(),
      p = o.useViewStore(),
      d = u(i, l),
      f = (d.isMPLite, d.isMPPro),
      h = d.isH5Pro,
      g = d.noStock,
      v = d.isCurrent,
      m = d.curGroupId,
      S = d.curStockListLen,
      I = d.isStockList,
      k = d.isNearCurrent,
      y = d.scrollStyle,
      C = d.refresherEnabled,
      w = d.triggered,
      P = d.computedBGColor,
      L = d.computedHeight,
      M = d.curFilterIndex,
      x = d.filterConfig,
      H = d.isShowFilter,
      b = d.filterPopupPosition,
      T = d.captionTitle,
      F = d.curFilterListLen,
      B = d.curRenderListCount,
      R = d.curFilterList,
      N = d.curGroup,
      G = d.wrapperStyle,
      E = d.isMiniChartHide,
      j = d.handleSort,
      A = d.handleOriginScroll,
      q = d.showPrivacyPolicyModal,
      V = d.calculateCardHeight,
      O = d.handleShowFilterPopup,
      _ = d.handleFilterSelect,
      U = d.refreshList,
      D = e.ref(!1);
    return (
      e.watch(
        function () {
          return m.value;
        },
        function (e) {
          D.value || (D.value = v.value || k.value || i.groupIndex <= 10);
        },
        { immediate: !0 }
      ),
      e.onBeforeUnmount(function () {
        c && clearTimeout(c);
      }),
      {
        showItem: D,
        noStock: g,
        curStockListLen: S,
        isStockList: I,
        isNearCurrent: k,
        scrollStyle: y,
        refresherEnabled: C,
        triggered: w,
        computedBGColor: P,
        computedHeight: L,
        curFilterIndex: M,
        filterConfig: x,
        isShowFilter: H,
        filterPopupPosition: b,
        captionTitle: T,
        handleSort: j,
        handleOriginScroll: A,
        handleScrollToLower: function () {
          var e = Math.min(F.value, B.value + r.RENDER_COUNT);
          s.addRenderSection(i.groupId, R.value.slice(B.value, e) || []),
            s.setRenderCount(i.groupId, e),
            (function () {
              if (!E.value) {
                var e = Math.max(0, B.value || 0),
                  t = Math.min(F.value, e + r.RENDER_COUNT),
                  n = R.value.slice(e, t);
                o.StockMiniChartApi.batchGetMiniMins(n, i.groupId);
              }
            })();
        },
        pullStart: function () {
          (w.value = !0), p.mpHideTitle && p.setMpHideTitle(!1);
        },
        pullEnd: function () {
          (w.value || a.value) && ((w.value = !1), (a.value = !1));
        },
        pullRefresh: function () {
          a.value ||
            (U(),
            (a.value = !0),
            (c = setTimeout(function () {
              (w.value = !1), (a.value = !1), clearTimeout(c);
            }, 600)));
        },
        showPrivacyPolicyModal: q,
        calculateCardHeight: V,
        isMPPro: f,
        isH5Pro: h,
        handleShowFilterPopup: O,
        handleFilterSelect: _,
        curGroup: N,
        isCurrent: v,
        wrapperStyle: G,
        handleMonitoringRemindClick: function () {
          l("monitoring-remind-click");
        },
      }
    );
  },
};
Array ||
  (
    e.resolveComponent("caption-bar") +
    e.resolveComponent("render-list") +
    e.resolveComponent("SelectPlate")
  )();
var a = e._export_sfc(l, [
  [
    "render",
    function (t, o, r, i, n, u) {
      return e.e(
        { a: i.isStockList },
        i.isStockList
          ? {
              b: e.sr("captionBar", "fa44983f-0"),
              c: e.o(i.handleSort, 2646),
              d: e.o(i.handleShowFilterPopup, 2647),
              e: e.o(i.handleMonitoringRemindClick, 2648),
              f: e.p({
                "group-id": r.groupId,
                name: i.captionTitle,
                "is-show-popup": i.isShowFilter,
              }),
            }
          : {},
        { g: i.showItem },
        i.showItem
          ? {
              h: e.r("after-stock-list", {
                tab: i.curGroup,
                isCurrent: i.isCurrent,
                len: i.curStockListLen,
                slideIndex: r.groupIndex,
              }),
              i: e.o(i.showPrivacyPolicyModal, 2649),
              j: e.o(i.calculateCardHeight, 2650),
              k: e.o(i.handleSort, 2651),
              l: e.p({
                "group-id": r.groupId,
                "no-stock": i.noStock,
                "is-stock-list": i.isStockList,
                "protocol-status": r.protocolStatus,
                "show-privacy-policy-bar": r.showPrivacyPolicyBar,
                "group-type": r.groupType,
                redpockets: r.redpockets,
                "show-position": r.showPosition,
                "is-loading-show": r.isLoadingShow,
                "is-all-stock": r.isAllStock,
                skin: r.skin,
              }),
            }
          : {},
        {
          m: e.n("stock-scroll-list-".concat(r.groupId)),
          n: e.s(i.scrollStyle),
          o: i.refresherEnabled,
          p: "black" === r.skin ? "white" : "black",
          q: i.triggered,
          r: e.o(function () {
            return (
              i.handleOriginScroll && i.handleOriginScroll.apply(i, arguments)
            );
          }, 2652),
          s: e.o(function () {
            return (
              i.handleScrollToLower && i.handleScrollToLower.apply(i, arguments)
            );
          }, 2653),
          t: e.o(function () {
            return i.pullStart && i.pullStart.apply(i, arguments);
          }, 2654),
          v: e.o(function () {
            return i.pullEnd && i.pullEnd.apply(i, arguments);
          }, 2655),
          w: e.o(function () {
            return i.pullRefresh && i.pullRefresh.apply(i, arguments);
          }, 2656),
          x: !i.isMPPro && i.isNearCurrent,
          y: e.n(i.isNearCurrent ? "with-radius" : ""),
          z: e.s(i.wrapperStyle),
          A: e.o(i.handleFilterSelect, 2657),
          B: e.o(function (e) {
            return i.handleShowFilterPopup(!1);
          }, 2658),
          C: e.p({
            show: i.isShowFilter,
            configs: i.filterConfig,
            "curr-idx": i.curFilterIndex,
            "pos-info": i.filterPopupPosition,
            skin: r.skin,
          }),
          D: e.n({ "h5-pro": i.isH5Pro, "mp-pro": i.isMPPro }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-fa44983f"],
]);
wx.createComponent(a);
