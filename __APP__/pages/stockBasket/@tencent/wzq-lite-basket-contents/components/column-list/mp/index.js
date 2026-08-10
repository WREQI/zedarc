var e = require("../../../../../../../common/vendor.js"),
  t = require("../../../../../throttle-debounce/esm/index.js"),
  o = [
    { name: "更新时间", pageType: "updateTime" },
    { name: "当日涨跌幅", pageType: "priceRatio" },
  ],
  r = "loading",
  n = {
    components: {
      columnList: function () {
        return "../column-sort-list.js";
      },
      ListSortTitle: function () {
        return "../list-sort-title.js";
      },
      Selector: function () {
        return "../selector.js";
      },
    },
    props: { listType: { type: String, default: null } },
    setup: function (n, s) {
      s.emit;
      var l = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        u = e.inject("stockBridge"),
        a = e.ref(0),
        i = e.ref(null),
        c = e.ref(r),
        f = e.reactive({ value: !1 }),
        p = 0,
        d = e.ref(null),
        v = e.ref(!1),
        g = "hq.basketlist",
        m = null,
        h = e.ref(0),
        T = t.throttle(16, function (e) {
          var t, o;
          (p = (null == (t = e.target) ? void 0 : t.scrollTop) || 0),
            (h.value = (null == (o = e.target) ? void 0 : o.scrollTop) || 0),
            L(),
            m && clearTimeout(m),
            (C.value = !0),
            (m = setTimeout(function () {
              (C.value = !1), clearTimeout(m);
            }, 1e3));
        }),
        L = function () {
          clearTimeout(i.value),
            (i.value = setTimeout(function () {
              S(), clearTimeout(i.value);
            }, 300));
        },
        S = function () {
          var e;
          null == (e = l.$refs.basketListRef) || e.updateVisibleArea();
        },
        w = e.computed(function () {
          return o[a.value].pageType;
        }),
        b = e.ref(0),
        y = e.ref(0),
        C = e.ref(!1),
        k = e.computed(function () {
          return p;
        });
      return {
        stockBridge: u,
        pullRefresh: function () {
          (v.value = !0),
            l.$refs.basketListRef.onPullingDown(),
            setTimeout(function () {
              v.value = !1;
            }, 300);
        },
        refreshTriggered: v,
        loadMore: function () {
          l.$refs.basketListRef.onPullingUp();
        },
        basketListRef: d,
        safeBottom: 34,
        safeTabBar: 0,
        reportPrefix: g,
        categoryId: "hotwatchlist",
        isHstabShow: !1,
        onLoadList: function (e) {
          (f.value = !0), (y.value = e.length);
        },
        onLoadError: function () {
          (c.value = "error"), (f.value = !1);
        },
        onListScroll: T,
        update: function (e) {
          l.$refs.basketListRef.update(e);
        },
        sortConfig: o,
        currentSelectorIndex: a,
        showPlate: function (e) {
          var t;
          null == (t = l.$refs.selector) || t.showSelector({}),
            u.report("".concat(g, ".show_plate_click"));
        },
        onSelectChange: function (e) {
          a.value !== e && ((f.value = !1), (a.value = e)),
            u.report("".concat(g, ".on_plate_change_click"), {
              select_index: e,
            });
        },
        scrollOffset: h,
        sortType: w,
        counterNum: b,
        counterTotal: y,
        isShowCounter: C,
        conterUpdate: function (e) {
          b.value = e;
        },
        computedScrollTop: k,
        onErrorRetry: function () {
          (c.value = r), l.$refs.basketListRef.onPullingDown();
        },
        pageStatus: c,
        showList: f,
      };
    },
  };
Array ||
  (
    e.resolveComponent("ListSortTitle") +
    e.resolveComponent("columnList") +
    e.resolveComponent("st-status") +
    e.resolveComponent("Selector")
  )();
var s = e._export_sfc(n, [
  [
    "render",
    function (t, o, r, n, s, l) {
      return e.e(
        {
          a: e.o(n.showPlate, 1318),
          b: e.p({
            "selector-config": n.sortConfig,
            "current-index": n.currentSelectorIndex,
            "on-scroll": n.scrollOffset > 0,
          }),
          c: e.sr("basketListRef", "a8c949ff-1"),
          d: n.showList.value,
          e: e.o(n.onLoadList, 1319),
          f: e.o(n.onLoadError, 1320),
          g: e.o(n.conterUpdate, 1321),
          h: e.p({
            "list-type": r.listType,
            "safe-bottom": n.safeBottom,
            "safe-tab-bar": n.safeTabBar,
            "report-prefix": n.reportPrefix,
            "category-id": n.categoryId,
            "is-hstab-show": n.isHstabShow,
            "scroll-offset": n.scrollOffset,
            "sort-type": n.sortType,
            "scroll-top": n.computedScrollTop,
          }),
          i: n.refreshTriggered,
          j: e.o(function (e) {
            return n.pullRefresh();
          }, 1322),
          k: e.o(function (e) {
            return n.loadMore();
          }, 1323),
          l: e.o(function () {
            return n.onListScroll && n.onListScroll.apply(n, arguments);
          }, 1324),
          m: n.showList.value && n.isShowCounter,
        },
        n.showList.value && n.isShowCounter
          ? { n: e.t(n.counterNum + 1), o: e.t(n.counterTotal) }
          : {},
        { p: !n.showList.value },
        n.showList.value
          ? {}
          : { q: e.o(n.onErrorRetry, 1325), r: e.p({ type: n.pageStatus }) },
        {
          s: e.sr("selector", "a8c949ff-3"),
          t: e.o(n.onSelectChange, 1326),
          v: e.p({
            "selector-config": n.sortConfig,
            "current-index": n.currentSelectorIndex,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-a8c949ff"],
]);
wx.createComponent(s);
