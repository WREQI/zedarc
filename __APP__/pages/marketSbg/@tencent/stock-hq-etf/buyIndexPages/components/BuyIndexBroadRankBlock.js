var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../common/vendor.js"),
  a = require("../../../stock-hq-core/utils/f2-fit/tool.js"),
  t = "buyindex_index_filter_enabled",
  r = [
    {
      key: "all",
      label: "全部",
      desc: "全市场涨幅排行，一眼锁定当下强势指数",
      secondaryLabel: "买一笔仅需",
      teach: null,
    },
    {
      key: "net_inflow",
      label: "净流入",
      desc: "近5日资金流入排行，看懂资金布局方向",
      secondaryLabel: "近5日净申购金额",
      teach: null,
    },
    {
      key: "national_team",
      label: "国家队持仓",
      desc: "国家队真金白银重仓，跟着主力稳健布局",
      secondaryLabel: "国家队持仓比例",
      teach: "national_team",
    },
    {
      key: "scale",
      label: "规模榜",
      desc: "基金规模从大到小排序，流动性小，交易更放心",
      secondaryLabel: "最新规模",
      teach: null,
    },
    {
      key: "valuation",
      label: "估值榜",
      desc: "按估值便宜度排序，挖掘低位布局好机会",
      secondaryLabel: "PE百分位",
      teach: "pe",
    },
  ],
  o = n.defineComponent({
    name: "BuyIndexBroadRankBlock",
    components: {
      BuyIndexRankListItem: function () {
        return "./BuyIndexRankListItem.js";
      },
      BuyIndexNationalTeamTeachSheet: function () {
        return "./BuyIndexNationalTeamTeachSheet.js";
      },
      BuyIndexPePercentileTeachSheet: function () {
        return "./BuyIndexPePercentileTeachSheet.js";
      },
      BuyIndexIndexFilterTeachSheet: function () {
        return "./BuyIndexIndexFilterTeachSheet.js";
      },
    },
    props: {
      rankPreviewByTab: { type: Object, default: null },
      loading: { type: Boolean, default: !1 },
      error: { type: Boolean, default: !1 },
      showFilter: { type: Boolean, default: !0 },
      defaultTab: { type: String, default: "all" },
    },
    emits: {
      "tab-change": function (e) {
        return Boolean(e && e.tabType);
      },
      "filter-change": function (e) {
        return "boolean" == typeof (null == e ? void 0 : e.enabled);
      },
      "view-all": function (e) {
        return Boolean(e && e.tabType);
      },
      share: null,
    },
    setup: function (o, l) {
      var i = l.emit,
        c = n.inject("buyIndexTracking", null),
        u = n.ref(o.defaultTab),
        d = n.ref(!0),
        f = n.ref(!1),
        h = n.ref(!1),
        s = n.ref(!1),
        b = n.computed(function () {
          var e = r.findIndex(function (e) {
            return e.key === u.value;
          });
          return e >= 0 ? e : 0;
        }),
        v = n.ref(560),
        y = n.getCurrentInstance(),
        p = [],
        _ = Object.create(null),
        k = Object.create(null),
        g = {
          all: "hq.buyindexlanding.more_wide_based_etf_all_brow",
          net_inflow: "hq.buyindexlanding.more_wide_etf_net_inflow_brow",
          national_team: "hq.buyindexlanding.more_wide_etf_national_team_brow",
          scale: "hq.buyindexlanding.more_wide_based_etf_scale_brow",
          valuation: "hq.buyindexlanding.more_wide_etf_valuation_list_brow",
        },
        m = {
          net_inflow: "hq.buyindexlanding.more_wide_etf_net_inflow_click",
          national_team: "hq.buyindexlanding.more_wide_etf_national_team_click",
          scale: "hq.buyindexlanding.more_wide_etf_scale_list_click",
          valuation: "hq.buyindexlanding.more_wide_etf_valuation_list_click",
        },
        T = n.computed(function () {
          return r;
        }),
        w = n.computed(function () {
          return (
            r.find(function (e) {
              return e.key === u.value;
            }) || r[0]
          );
        });
      function x(e) {
        return (o.rankPreviewByTab && o.rankPreviewByTab[e]) || [];
      }
      var I = n.computed(function () {
        return x(u.value);
      });
      function B(e) {
        if (!_[e]) {
          var a = g[e];
          a && (n.StockBridge.report(a), (_[e] = !0));
        }
      }
      function S(e, a) {
        if (a && 0 !== a.length && !k[e]) {
          var t = a
            .map(function (e) {
              return null == e ? void 0 : e.symbol;
            })
            .filter(function (e) {
              return !!e;
            })
            .join(",");
          t &&
            (n.StockBridge.report(
              "hq.buyindexlanding.more_wide_based_etf_brow",
              { stockid: t }
            ),
            (k[e] = !0));
        }
      }
      function C() {
        return (
          (n = this),
          null,
          (t = e().mark(function () {
            var n, t, r, o, l, i, c, u;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = b.value),
                        (o = "tabWrapper".concat(r)),
                        (l =
                          null ==
                          (t =
                            null == (n = null == y ? void 0 : y.proxy)
                              ? void 0
                              : n.$refs)
                            ? void 0
                            : t[o]),
                        !(i = Array.isArray(l) ? l[0] : l) || !i.offsetHeight)
                      ) {
                        e.next = 5;
                        break;
                      }
                      i.offsetHeight !== v.value && (v.value = i.offsetHeight),
                        (e.next = 15);
                      break;
                    case 5:
                      return (
                        (e.prev = 5),
                        (e.next = 8),
                        a.getEleInfo(
                          ".etf-buy-index__rank-swiper-inner--".concat(r),
                          null == y ? void 0 : y.proxy
                        )
                      );
                    case 8:
                      (c = e.sent),
                        (u = (null == c ? void 0 : c.height) || 0) &&
                          u !== v.value &&
                          (v.value = u),
                        (e.next = 15);
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(5));
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[5, 13]]
            );
          })),
          new Promise(function (e, a) {
            var r = function (e) {
                try {
                  l(t.next(e));
                } catch (e) {
                  a(e);
                }
              },
              o = function (e) {
                try {
                  l(t.throw(e));
                } catch (e) {
                  a(e);
                }
              },
              l = function (n) {
                return n.done
                  ? e(n.value)
                  : Promise.resolve(n.value).then(r, o);
              };
            l((t = t.apply(n, null)).next());
          })
        );
        var n, t;
      }
      function P() {
        q(),
          n.nextTick$1(function () {
            return C();
          }),
          [50, 200, 500].forEach(function (e) {
            var n = setTimeout(C, e);
            p.push(n);
          });
      }
      function q() {
        p.forEach(function (e) {
          return clearTimeout(e);
        }),
          (p = []);
      }
      function F() {
        i("view-all", { tabType: u.value, filterEnabled: d.value });
      }
      return (
        n.watch(
          I,
          function (e) {
            e && 0 !== e.length && (B(u.value), S(u.value, e));
          },
          { immediate: !0 }
        ),
        n.watch(
          [
            I,
            function () {
              return o.loading;
            },
            function () {
              return o.error;
            },
          ],
          function () {
            P();
          }
        ),
        n.watch(u, function (e) {
          (f.value = !1), (h.value = !1), (s.value = !1), P();
          var n = (o.rankPreviewByTab && o.rankPreviewByTab[e]) || [];
          n.length > 0 && (B(e), S(e, n));
        }),
        n.onMounted(function () {
          var e, a;
          try {
            "0" ===
              (null ==
              (a =
                null == (e = n.StockBridge.localStorage) ? void 0 : e.getItem)
                ? void 0
                : a.call(e, t)) && (d.value = !1);
          } catch (e) {
            d.value = !0;
          }
          P();
        }),
        n.onBeforeUnmount(function () {
          q();
        }),
        {
          tabs: T,
          activeTab: u,
          activeIndex: b,
          swiperHeight: v,
          activeTabConfig: w,
          rows: I,
          getTabRows: x,
          isTabLoading: function (e) {
            return e === u.value && o.loading;
          },
          isTabError: function (e) {
            return e === u.value && o.error;
          },
          filterEnabled: d,
          colInfoIcon:
            "https://st.gtimg.com/design/118acead4d4d3bd0a356abf70d2b4020.png",
          showIndexFilterTeach: f,
          showNationalTeamTeach: h,
          showPeTeach: s,
          handleTabChange: function (e) {
            if (u.value !== e) {
              var a = m[e];
              a && n.StockBridge.report(a),
                (u.value = e),
                i("tab-change", { tabType: e });
            }
          },
          handleSwiperChange: function (e) {
            var a,
              t =
                (null == e ? void 0 : e.detail) ||
                (null == (a = null == e ? void 0 : e.mp) ? void 0 : a.detail) ||
                {},
              o = t.current;
            if ("touch" === t.source) {
              var l = r["number" == typeof o ? o : 0];
              if (l && l.key !== u.value) {
                var c = m[l.key];
                c && n.StockBridge.report(c),
                  (u.value = l.key),
                  i("tab-change", { tabType: l.key });
              }
            }
          },
          handleToggleFilter: function () {
            var e, a;
            d.value = !d.value;
            try {
              null ==
                (a =
                  null == (e = n.StockBridge.localStorage)
                    ? void 0
                    : e.setItem) || a.call(e, t, d.value ? "1" : "0");
            } catch (e) {}
            i("filter-change", { enabled: d.value, currentTab: u.value });
          },
          handleOpenFilterTeach: function () {
            (h.value = !1), (s.value = !1), (f.value = !0);
          },
          handleOpenSecondaryTeach: function (e) {
            var n = (e && e.teach) || w.value.teach;
            (f.value = !1),
              "national_team" === n
                ? ((h.value = !0), (s.value = !1))
                : "pe" === n && ((s.value = !0), (h.value = !1));
          },
          handleRowClick: function (e) {
            if ((null == e ? void 0 : e.etfCode) && e.symbol) {
              var a = { stockid: e.symbol };
              c && Object.assign(a, c.commonClickOptions()),
                n.StockBridge.report(
                  "hq.buyindexlanding.more_wide_etf_recommend_click",
                  a
                );
            }
          },
          handleShare: function () {
            i("share");
          },
          handleViewAll: F,
          handleHeaderClick: function () {
            n.StockBridge.report(
              "hq.buyindexlanding.more_wide_etf_complete_list_click"
            ),
              F();
          },
        }
      );
    },
  });
Array ||
  (
    n.resolveComponent("BuyIndexRankListItem") +
    n.resolveComponent("BuyIndexIndexFilterTeachSheet") +
    n.resolveComponent("BuyIndexNationalTeamTeachSheet") +
    n.resolveComponent("BuyIndexPePercentileTeachSheet")
  )();
var l = n._export_sfc(o, [
  [
    "render",
    function (e, a, t, r, o, l) {
      return {
        a: n.o(function () {
          return e.handleHeaderClick && e.handleHeaderClick.apply(e, arguments);
        }, 2709),
        b: n.f(e.tabs, function (a, t, r) {
          return n.e(
            {
              a: n.t(a.label),
              b: n.n(
                a.key === e.activeTab && "etf-buy-index__rank-tab-label--active"
              ),
              c: a.key === e.activeTab,
            },
            (a.key, e.activeTab, {}),
            {
              d: a.key,
              e: n.n(
                a.key === e.activeTab && "etf-buy-index__rank-tab--active"
              ),
              f: n.o(
                function (n) {
                  return e.handleTabChange(a.key);
                },
                2710,
                a.key
              ),
            }
          );
        }),
        c: n.f(e.tabs, function (a, t, r) {
          return n.e(
            { a: n.t(a.desc) },
            e.showFilter
              ? {
                  b: n.n(
                    e.filterEnabled
                      ? "etf-buy-index__rank-filter-checkbox--on"
                      : "etf-buy-index__rank-filter-checkbox--off"
                  ),
                  c: n.o(
                    function () {
                      return (
                        e.handleOpenFilterTeach &&
                        e.handleOpenFilterTeach.apply(e, arguments)
                      );
                    },
                    2711,
                    a.key
                  ),
                  d: n.o(
                    function () {
                      return (
                        e.handleToggleFilter &&
                        e.handleToggleFilter.apply(e, arguments)
                      );
                    },
                    2712,
                    a.key
                  ),
                }
              : {},
            { e: a.secondaryLabel },
            a.secondaryLabel
              ? n.e(
                  { f: a.teach },
                  a.teach
                    ? {
                        g: e.colInfoIcon,
                        h: n.o(
                          function (n) {
                            return e.handleOpenSecondaryTeach(a);
                          },
                          2713,
                          a.key
                        ),
                      }
                    : {},
                  { i: n.t(a.secondaryLabel) }
                )
              : {},
            { j: e.isTabLoading(a.key) },
            e.isTabLoading(a.key) || e.isTabError(a.key)
              ? {}
              : n.e(
                  { l: 0 === e.getTabRows(a.key).length },
                  (e.getTabRows(a.key).length, {}),
                  {
                    m: n.f(e.getTabRows(a.key), function (t, o, l) {
                      return {
                        a: "".concat(t.etfCode, "-").concat(o),
                        b: n.o(
                          e.handleRowClick,
                          2714,
                          "".concat(t.etfCode, "-").concat(o)
                        ),
                        c: "6150d329-0-" + r + "-" + l,
                        d: n.p({
                          "row-data": t,
                          "tab-type": a.key,
                          "rank-position": o + 1,
                          "hide-divider": o === e.getTabRows(a.key).length - 1,
                        }),
                      };
                    }),
                  }
                ),
            {
              k: e.isTabError(a.key),
              n: "tabWrapper".concat(t),
              o: n.n("etf-buy-index__rank-swiper-inner--".concat(t)),
              p: a.key,
            }
          );
        }),
        d: e.showFilter,
        e: e.activeIndex,
        f: "".concat(e.swiperHeight, "px"),
        g: n.o(function () {
          return (
            e.handleSwiperChange && e.handleSwiperChange.apply(e, arguments)
          );
        }, 2715),
        h: n.o(function (n) {
          return (e.showIndexFilterTeach = !1);
        }, 2716),
        i: n.p({ visible: e.showIndexFilterTeach, title: "指数过滤" }),
        j: n.o(function (n) {
          return (e.showNationalTeamTeach = !1);
        }, 2717),
        k: n.p({ visible: e.showNationalTeamTeach }),
        l: n.o(function (n) {
          return (e.showPeTeach = !1);
        }, 2718),
        m: n.p({ visible: e.showPeTeach }),
      };
    },
  ],
  ["__scopeId", "data-v-6150d329"],
]);
wx.createComponent(l);
