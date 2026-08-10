require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../throttle-debounce/esm/index.js"),
  e = require("../../../../stock-hq-data/index.js"),
  a = require("../../../utils/common.js"),
  i = require("../../../utils/route.js"),
  s = require("../../../../../../../common/vendor.js"),
  o = {
    name: "StockItemCell",
    inject: { hqBridge: {}, isZxgMiniApp: { default: !1 } },
    components: {
      MarketIcon: function () {
        return "../MarketIcon.js";
      },
    },
    props: {
      data: { type: Object, default: function () {} },
      initialData: { type: Object, default: function () {} },
      cellId: { type: String, default: null },
      type: { type: String, default: "stock" },
      market: { type: String, default: "" },
      reportName: { type: String, default: "" },
    },
    data: function () {
      return { env: this.hqBridge.ENV };
    },
    methods: {
      setColor: a.setColor,
      computedColor: function (t) {
        var e =
          "ssrq" === this.cellId || "jrss" === this.cellId ? parseFloat(t) : "";
        return e > 0 ? "quote-rise" : e < 0 ? "quote-drop" : "quote-equal";
      },
      navigateToZgDetail: function () {
        var t = this.data.bidder,
          i = t.code,
          s = t.title,
          o = e.utils.splitSymbol(i),
          r = o.market,
          n = o.scode;
        if (this.isZxgMiniApp) a.goToMiniAppQuote(r, n);
        else {
          if ("wzq" === this.env) {
            if (!r || !n) return;
            this.hqBridge.routeTo({
              path: "/hq/stock/".concat(r, "/").concat(n),
            });
          } else if ("mp" === this.env) {
            if (!r || !n) return;
            this.hqBridge.routeTo({
              path: "/pages/quote/quote",
              query: { market: r, scode: n },
            });
          } else if ("app" === this.env) {
            if (!i || "--" === (null == s ? void 0 : s[0])) return;
            this.hqBridge.routeTo({
              url: "qqstock://detailstock/".concat(i, "/").concat(s[0]),
            });
          }
          this.hqBridge.report(
            "hq.daxin_calendar_hstab.pending_subscription_tab_new_bond_underlying_stock_click"
          );
        }
      },
      goToStockDetail: t.debounce(300, function (t) {
        t.stopPropagation(),
          this.data.toToDetail
            ? i.gotoQuoteDetail(this.hqBridge, this.data, this.isZxgMiniApp)
            : i.gotoHangqingxinzhaiDetail(this.hqBridge, this.data),
          ["wzq", "app", "mp"].includes(this.env) &&
            "hs" === this.market &&
            this.hqBridge.report(
              "hq.daxin_calendar_hstab.".concat(this.reportName, "_click")
            );
      }),
    },
    computed: {
      isBondJjfx: function () {
        return (
          ["wzq", "app", "mp"].includes(this.env) &&
          "bond" === this.type &&
          "jjfx" === this.cellId
        );
      },
    },
  };
Array || s.resolveComponent("market-icon")();
var r = s._export_sfc(o, [
  [
    "render",
    function (t, e, a, i, o, r) {
      return s.e(
        {
          a: s.t(a.data.listName),
          b: s.p({ iconType: a.data.listTag, scode: a.data.listCode }),
          c: s.t(a.data.listCode),
          d: s.n("cell-head-bottom-stock-value-".concat(o.env)),
          e: !Array.isArray(a.data.list0),
        },
        Array.isArray(a.data.list0)
          ? a.data.list0[2]
            ? {
                i: s.t(a.data.list0[0]),
                j: s.t(a.data.list0[1]),
                k: s.n(a.data.list0[2]),
                l: s.n("us" === a.market ? "us-list-col1" : ""),
              }
            : {
                m: s.t("  " + a.data.list0[0]),
                n: s.t(a.data.list0[1]),
                o: s.n("us" === a.market ? "us-list-col1" : ""),
              }
          : {
              f: s.t(a.data.list0 ? a.data.list0 : "--"),
              g: s.n("us" === a.market ? "us-list-col1" : ""),
            },
        { h: a.data.list0[2], p: "ssrq" === a.cellId || "jrss" === a.cellId },
        "ssrq" === a.cellId || "jrss" === a.cellId
          ? {
              q: s.t(a.data.list1 ? a.data.list1 : "--"),
              r: s.n(r.computedColor(a.data.list1)),
            }
          : s.e(
              {
                s: s.t(a.data.list1 ? a.data.list1 : "--"),
                t:
                  ("wzq" === o.env || "mp" === o.env) &&
                  "hs" === a.market &&
                  "stock" === a.type &&
                  "jjfx" === a.cellId,
              },
              ("wzq" !== o.env && "mp" !== o.env) ||
                "hs" !== a.market ||
                "stock" !== a.type ||
                "jjfx" !== a.cellId
                ? {}
                : {
                    v: s.t(
                      a.data.pt_info && a.data.pt_info.syl
                        ? a.data.pt_info.syl
                        : "--"
                    ),
                  }
            ),
        {
          w: s.n("us" === a.market ? "us-list-col2" : ""),
          x: "ssrq" === a.cellId || "jrss" === a.cellId,
        },
        "ssrq" === a.cellId || "jrss" === a.cellId
          ? {
              y: s.t(a.data.list2 ? a.data.list2 : "--"),
              z: s.n(r.computedColor(a.data.list2)),
            }
          : { A: s.t(a.data.list2 ? a.data.list2 : "--") },
        {
          B: s.n("us" === a.market ? "us-list-col3" : ""),
          C: s.n("stock-item-cell-container-".concat(o.env)),
          D: s.o(function () {
            return r.goToStockDetail && r.goToStockDetail.apply(r, arguments);
          }, 4098),
          E: r.isBondJjfx,
        },
        r.isBondJjfx
          ? {
              F: s.f(a.data.bidder.title, function (t, e, i) {
                return {
                  a: s.t(t),
                  b: s.n(0 === e ? "bidder-item-name" : ""),
                  c: s.t(a.data.bidder.data[e]),
                  d: s.n(
                    2 === e
                      ? [
                          r.setColor(a.data.bidder.data[e]),
                          "bidder-item-num-right-column",
                        ]
                      : ""
                  ),
                  e: t,
                };
              }),
              G: s.o(function () {
                return (
                  r.navigateToZgDetail &&
                  r.navigateToZgDetail.apply(r, arguments)
                );
              }, 4099),
            }
          : {},
        {
          H: s.n("stock-item-cell-wrapper-".concat(o.env)),
          I: s.n(r.isBondJjfx ? "stock-item-cell-wrapper-jjfx" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-44bbfb2a"],
]);
wx.createComponent(r);
