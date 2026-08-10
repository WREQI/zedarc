var o = require("../../../../../../common/vendor.js"),
  r = require("../../utils/util.js"),
  e = require("../../Index.js"),
  t = require("../../store/useSwitchModeStore.js"),
  i = require("../../../stock-mini-mins/api/StockMiniChartApiV2.js"),
  n = o.defineComponent({
    components: {
      CaptionItem: function () {
        return "./CaptionItem.js";
      },
    },
    props: {
      groupId: { type: String, default: "" },
      name: { type: String, default: "股票" },
      isShowPopup: { type: Boolean, default: !1 },
    },
    emits: ["sort", "show-filter-popup", "monitoring-remind-click"],
    setup: function (n, u) {
      var c = u.emit,
        p = r.POSITION_GROUPINFO.id,
        d = o.getCurrentInstance().proxy,
        s = e.useCaptionStore(),
        l = t.useSwitchModeStore(),
        a = i.useViewStore(),
        g = o.computed(function () {
          return a.isMonitoringRemindOpen;
        }),
        f = o.computed(function () {
          return a.isMonitorRemindGrayUser;
        }),
        m = o.computed(function () {
          return s.getCurPriceConfig(n.groupId);
        }),
        I = o.computed(function () {
          return s.getCurZDFConfig(n.groupId);
        }),
        h = o.computed(function () {
          return !0;
        });
      o.watch(h, function (r) {
        r || o.StockBridge.report("hq.portfolio.reset_order_brow");
      });
      var S = function (o) {
        c("sort", o);
      };
      return (
        o.onMounted(function () {
          h.value &&
            n.groupId !== p &&
            f.value &&
            o.StockBridge.report("hq.portfolio.remind_brow");
        }),
        {
          isH5Pro: !1,
          isMPPro: !0,
          positionId: p,
          resetOrder: function () {
            s.resetAll(n.groupId),
              l.resetAll(n.groupId),
              S(r.SORT_CAPTIONS[0]),
              o.StockBridge.report("hq.portfolio.reset_order_click");
          },
          normalStatus: h,
          currentPriceConfig: m,
          currentZDFConfig: I,
          handlePriceSort: function () {
            s.sortPrice(n.groupId),
              S(m.value),
              o.StockBridge.report("choose.sortby_price");
          },
          handleZDFSort: function () {
            s.sortZDF(n.groupId), S(I.value);
            var r = (I.value || {}).orderBy;
            r
              ? o.StockBridge.report("choose.sortby_".concat(r))
              : o.StockBridge.report("choose.sortby_rise_per");
          },
          handleFilter: function () {
            if (n.groupId !== p) {
              if ("mp" === o.StockBridge.ENV)
                o.wx$1
                  .createSelectorQuery()
                  .in(d)
                  .select("#filter-title-".concat(n.groupId))
                  .fields({ node: !0, size: !0, rect: !0 })
                  .exec(function (o) {
                    var r = (o && o[0]) || {};
                    c("show-filter-popup", !0, {
                      left: r.left || 0,
                      arrowMid: void 0 !== r.right ? r.right + 2 : 0,
                      bottom: r.bottom || 0,
                    });
                  });
              else {
                var r = document.getElementById(
                  "filter-title-".concat(n.groupId)
                );
                if (r) {
                  var e = r.getBoundingClientRect();
                  c("show-filter-popup", !0, {
                    left: e.left || 0,
                    arrowMid: void 0 !== e.right ? e.right + 2 : 0,
                    bottom: e.bottom || 0,
                  });
                }
              }
              o.StockBridge.report("hq.portfolio.filter_click");
            }
          },
          handleMonitoringRemindClick: function () {
            o.StockBridge.report("hq.portfolio.remind_click"),
              c("monitoring-remind-click");
          },
          isMonitoringRemindOpen: g,
          isMonitorRemindGrayUser: f,
        }
      );
    },
  });
Array || o.resolveComponent("CaptionItem")();
var u = o._export_sfc(n, [
  [
    "render",
    function (r, e, t, i, n, u) {
      return o.e(
        { a: r.normalStatus },
        r.normalStatus
          ? o.e(
              {
                b: o.t(r.name),
                c: "filter-title-".concat(r.groupId),
                d: o.o(function () {
                  return r.handleFilter && r.handleFilter.apply(r, arguments);
                }, 3484),
                e: r.groupId !== r.positionId,
              },
              r.groupId !== r.positionId
                ? {
                    f: o.n("filter-icon-".concat(r.groupId)),
                    g: o.n(r.isShowPopup ? "dark-icon" : ""),
                    h: o.o(function () {
                      return (
                        r.handleFilter && r.handleFilter.apply(r, arguments)
                      );
                    }, 3485),
                  }
                : {},
              {
                i:
                  r.normalStatus &&
                  r.groupId !== r.positionId &&
                  r.isMonitorRemindGrayUser,
              },
              r.normalStatus &&
                r.groupId !== r.positionId &&
                r.isMonitorRemindGrayUser
                ? {
                    j: o.n({ active: r.isMonitoringRemindOpen }),
                    k: o.o(function () {
                      return (
                        r.handleMonitoringRemindClick &&
                        r.handleMonitoringRemindClick.apply(r, arguments)
                      );
                    }, 3486),
                  }
                : {},
              { l: "portfolio-caption-stock-title-".concat(r.groupId) }
            )
          : {
              m: o.o(function () {
                return r.resetOrder && r.resetOrder.apply(r, arguments);
              }, 3487),
            },
        {
          n: o.o(r.handlePriceSort, 3488),
          o: o.p({
            index: "0",
            "group-id": r.groupId,
            "sort-captions": r.currentPriceConfig,
          }),
          p: o.o(r.handleZDFSort, 3489),
          q: o.p({
            index: "1",
            "group-id": r.groupId,
            "sort-captions": r.currentZDFConfig,
          }),
          r: o.n({ "h5-pro": r.isH5Pro, "mp-pro": r.isMPPro }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-8aee3046"],
]);
wx.createComponent(u);
