var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../utils/market.js"),
  n = require("../../utils/hqDataUtil.js"),
  i = require("../../../../../../common/vendor.js"),
  o = {
    inject: ["hqBridge"],
    props: {
      listConfig: { type: Object, default: function () {} },
      rankList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isHstabShow: { type: Boolean, default: !1 },
      listIndex: { type: Number, default: 0 },
      showListNum: { type: Number, default: 4 },
      tabCeiling: { type: Boolean, default: !1 },
      rankType: { type: String, default: "股票" },
    },
    data: function () {
      return { clickIndex: -1, clickTimer: null };
    },
    beforeDestroy: function () {
      this.clickTimer &&
        (clearTimeout(this.clickTimer), (this.clickTimer = null));
    },
    computed: {
      renderList: function () {
        return this.showListNum
          ? this.rankList.slice(0, this.showListNum)
          : this.rankList;
      },
      reportPrefix: function () {
        return this.showListNum ? "hq.market.ranklist" : "hq.ranklist";
      },
    },
    watch: {
      isHstabShow: function (t) {
        t || (this.clickIndex = -1);
      },
    },
    methods: {
      transMarketIcon: e.transMarketIcon,
      getNameClass: function (t) {
        return t.length >= 8 ? "stock-list-name-long" : "";
      },
      navigateToQuoteDetail: function (t, e) {
        var o = this;
        (this.clickIndex = e),
          this.$forceUpdate(),
          this.clickTimer && clearTimeout(this.clickTimer);
        var r = t || {},
          c = r.market,
          a = r.code;
        if ("基金" === this.rankType) {
          var l = (
            ["sh", "sz", "hk", "us"].includes(c)
              ? n.splitSymbol("".concat(c).concat(a))
              : { market: c }
          ).market;
          return (
            i.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: l, scode: a },
            }),
            this.hqBridge.report(
              "hq.market_etfrank_".concat(this.listConfig.type, "_stock_click"),
              { stockid: n.getSymbol(l, a) }
            ),
            void (this.clickTimer = setTimeout(function () {
              (o.clickIndex = -1), (o.clickTimer = null);
            }, 1e3))
          );
        }
        this.hqBridge.routeTo({
          path: "/quote/detail",
          query: { scode: a, market: c },
        }),
          this.hqBridge.report(
            ""
              .concat(this.reportPrefix, ".")
              .concat(this.listConfig.type, "_tab_stock_click"),
            { stockid: n.getSymbol(c, a) }
          ),
          (this.clickTimer = setTimeout(function () {
            (o.clickIndex = -1), (o.clickTimer = null);
          }, 1e3));
      },
      getZdpClass: function (t) {
        return t > 0 ? "rise" : t < 0 ? "drop" : "equal";
      },
      getStockNameFontType: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = t.replace(/\s/g, "");
        return e.length > 10 && e.length < 13
          ? "mid-font"
          : e.length >= 13
          ? "small-font"
          : "";
      },
      getRankInfo: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = this.listConfig,
          n = e.column,
          i = void 0 === n ? "" : n,
          o = e.unit,
          r = void 0 === o ? "" : o;
        return "".concat(t[i] || "--").concat(r);
      },
      getValueColorClass: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "right",
          n = this.listConfig,
          i = n.midColumn,
          o = n.midColorColumn,
          r = n.color,
          c = n.colorColumn;
        return "middle" === e
          ? o
            ? this.getZdpClass(this.getColorValue(t, o))
            : ""
          : i && !r
          ? ""
          : this.getZdpClass(this.getColorValue(t, c));
      },
      getColorValue: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return e ? t[e] : t.zde || t.zdf;
      },
      getStockInfo: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = arguments.length > 1 ? arguments[1] : void 0,
          n = this.listConfig,
          i = n.midColumn,
          o = void 0 === i ? "" : i,
          r = n.midUnit,
          c = void 0 === r ? "" : r,
          a = n.column,
          l = void 0 === a ? "" : a,
          s = n.unit,
          u = void 0 === s ? "" : s,
          d = t[o] || "--",
          h = t[l] || "--";
        return "middle" === e ? "".concat(d).concat(c) : "".concat(h).concat(u);
      },
      getformatNum: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = this.listConfig,
          i = e.column,
          o = void 0 === i ? "" : i,
          r = e.unit,
          c = void 0 === r ? "" : r,
          a = Math.abs(t[o] || 0),
          l = n.bigNumberToText(a);
        return l
          ? a > 0 && "+" === c
            ? "+".concat(l)
            : a < 0
            ? 0 === "".concat(l).indexOf("-")
              ? "".concat(l)
              : "-".concat(l)
            : a >= 0 || 0 === "".concat(l).indexOf("-")
            ? "".concat(l)
            : "-".concat(l)
          : "--";
      },
      mergeRightInfo: function (t) {
        if ("%" === this.listConfig.unit) {
          var e = Number(t[this.listConfig.column]),
            n = this.getStockInfo(t, "right");
          return !Number.isNaN(e) && e > 0 ? "+".concat(n) : n;
        }
        return this.getformatNum(t);
      },
      getRankListInfo: function () {
        return (
          (e = this),
          null,
          (n = t().mark(function () {
            var e, n, i, o, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (o = this.$refs["rankBody".concat(this.listIndex)]),
                        (r =
                          null == (e = this.$refs.rankItem0) ? void 0 : e[0]),
                        (n = null == o ? void 0 : o.offsetTop),
                        (i = this.getCurrentStyle(r, "height").replace(
                          "px",
                          ""
                        )),
                        this.$emit("getRankListInfo", {
                          rankBodyTop: n,
                          itemHeight: i,
                        });
                    case 3:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })),
          new Promise(function (t, i) {
            var o = function (t) {
                try {
                  c(n.next(t));
                } catch (t) {
                  i(t);
                }
              },
              r = function (t) {
                try {
                  c(n.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              c = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(o, r);
              };
            c((n = n.apply(e, null)).next());
          })
        );
        var e, n;
      },
      getCurrentStyle: function (t, e) {
        return t.currentStyle ? t.currentStyle[e] : getComputedStyle(t, !1)[e];
      },
    },
  },
  r = i._export_sfc(o, [
    [
      "render",
      function (t, e, n, o, r, c) {
        return i.e(
          { a: !n.tabCeiling },
          n.tabCeiling
            ? {}
            : {
                b: i.t(n.rankType),
                c: i.t(n.listConfig.midTitle || "最新价"),
                d: i.t(n.listConfig.title),
                e: i.n(n.tabCeiling ? "ceiling" : ""),
              },
          {
            f: i.f(c.renderList, function (t, e, o) {
              return i.e(
                {
                  a: i.t(t.name),
                  b: i.n(c.getStockNameFontType(t.name)),
                  c: c.transMarketIcon(
                    "基金" === n.rankType ? "cnjj" : t.market,
                    t.type,
                    t.code
                  ),
                  d: i.t(t.code),
                },
                n.listConfig.midColumn
                  ? i.e(
                      { e: c.getStockInfo(t, "middle") },
                      c.getStockInfo(t, "middle")
                        ? {
                            f: i.t(c.getStockInfo(t, "middle")),
                            g: i.n(c.getValueColorClass(t, "middle")),
                          }
                        : {},
                      { h: c.mergeRightInfo(t) },
                      c.mergeRightInfo(t)
                        ? {
                            i: i.t(c.mergeRightInfo(t)),
                            j: i.n(c.getValueColorClass(t, "right")),
                          }
                        : {}
                    )
                  : i.e(
                      { k: i.t(t.zjcj), l: c.getRankInfo(t) },
                      c.getRankInfo(t)
                        ? {
                            m: i.t(c.getRankInfo(t)),
                            n: i.n(c.getZdpClass(t.zdf || t.zde)),
                          }
                        : {}
                    ),
                {
                  o: "rankItem".concat(e),
                  p: "rankItem".concat(e),
                  q: i.n(r.clickIndex === e ? "click-item" : ""),
                  r: i.o(
                    function (n) {
                      return c.navigateToQuoteDetail(t, e);
                    },
                    3146,
                    e
                  ),
                  s: e,
                }
              );
            }),
            g: n.listConfig.midColumn,
            h: "rankBody".concat(n.listIndex),
            i: "rankBody".concat(n.listIndex),
          }
        );
      },
    ],
    ["__scopeId", "data-v-bb981c78"],
  ]);
wx.createComponent(r);
