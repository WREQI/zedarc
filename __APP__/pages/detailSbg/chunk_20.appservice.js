$gwx3_XC_13 = (function (
  _,
  _v,
  _n,
  _p,
  _s,
  _wp,
  _wl,
  $gwn,
  $gwl,
  $gwh,
  wh,
  $gstack,
  $gwrt,
  gra,
  grb,
  TestTest,
  wfor,
  _ca,
  _da,
  _r,
  _rz,
  _o,
  _oz,
  _1,
  _1z,
  _2,
  _2z,
  _m,
  _mz,
  nv_getDate,
  nv_getRegExp,
  nv_console,
  nv_parseInt,
  nv_parseFloat,
  nv_isNaN,
  nv_isFinite,
  nv_decodeURI,
  nv_decodeURIComponent,
  nv_encodeURI,
  nv_encodeURIComponent,
  $gdc,
  nv_JSON,
  _af,
  _gv,
  _ai,
  _grp,
  _gd,
  _gapi,
  $ixc,
  _ic,
  _w,
  _ev,
  _tsd
) {
  return function (path, global) {
    if (typeof global === "undefined") {
      if (typeof __GWX_GLOBAL__ === "undefined") global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === "undefined") {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === "undefined") global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === "undefined") global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === "undefined") global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_13 || [];
    function gz$gwx3_XC_13_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_13_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_13_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_13_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div data-v-bb981c78"]);
        Z([[7], [3, "a"]]);
        Z([3, "stock"]);
        Z([[7], [3, "f"]]);
        Z([3, "s"]);
        Z([[6], [[7], [3, "stock"]], [3, "r"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-bb981c78"]],
              [1, "rank-item"],
            ],
            [[6], [[7], [3, "stock"]], [3, "q"]],
          ],
        ]);
        Z([[6], [[7], [3, "stock"]], [3, "o"]]);
        Z([[6], [[7], [3, "stock"]], [3, "p"]]);
        Z([[7], [3, "g"]]);
        Z([[6], [[7], [3, "stock"]], [3, "e"]]);
        Z([[6], [[7], [3, "stock"]], [3, "h"]]);
        Z([[6], [[7], [3, "stock"]], [3, "l"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_13_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_13_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_13 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_13 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_13_1();
      var o6S = _n("view");
      _rz(z, o6S, "class", 0, e, s, gg);
      var c7S = _v();
      _(o6S, c7S);
      if (_oz(z, 1, e, s, gg)) {
        c7S.wxVkey = 1;
      }
      var o8S = _v();
      _(o6S, o8S);
      var l9S = function (tAT, a0S, eBT, gg) {
        var oDT = _mz(
          z,
          "view",
          ["bindtap", 5, "class", 1, "id", 2, "ref", 3],
          [],
          tAT,
          a0S,
          gg
        );
        var xET = _v();
        _(oDT, xET);
        if (_oz(z, 9, tAT, a0S, gg)) {
          xET.wxVkey = 1;
          var oFT = _v();
          _(xET, oFT);
          if (_oz(z, 10, tAT, a0S, gg)) {
            oFT.wxVkey = 1;
          }
          var fGT = _v();
          _(xET, fGT);
          if (_oz(z, 11, tAT, a0S, gg)) {
            fGT.wxVkey = 1;
          }
          oFT.wxXCkey = 1;
          fGT.wxXCkey = 1;
        } else {
          xET.wxVkey = 2;
          var cHT = _v();
          _(xET, cHT);
          if (_oz(z, 12, tAT, a0S, gg)) {
            cHT.wxVkey = 1;
          }
          cHT.wxXCkey = 1;
        }
        xET.wxXCkey = 1;
        _(eBT, oDT);
        return eBT;
      };
      o8S.wxXCkey = 2;
      _2z(z, 3, l9S, e, s, gg, o8S, "stock", "index", "s");
      c7S.wxXCkey = 1;
      _(r, o6S);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_13";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        g = "";
        return root;
      };
    }
  };
})(
  __g.a,
  __g.b,
  __g.c,
  __g.d,
  __g.e,
  __g.f,
  __g.g,
  __g.h,
  __g.i,
  __g.j,
  __g.k,
  __g.l,
  __g.m,
  __g.n,
  __g.o,
  __g.p,
  __g.q,
  __g.r,
  __g.s,
  __g.t,
  __g.u,
  __g.v,
  __g.w,
  __g.x,
  __g.y,
  __g.z,
  __g.A,
  __g.B,
  __g.C,
  __g.D,
  __g.E,
  __g.F,
  __g.G,
  __g.H,
  __g.I,
  __g.J,
  __g.K,
  __g.L,
  __g.M,
  __g.N,
  __g.O,
  __g.P,
  __g.Q,
  __g.R,
  __g.S,
  __g.T,
  __g.U,
  __g.V,
  __g.W,
  __g.X,
  __g.Y,
  __g.Z,
  __g.aa
);
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_13();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList.wxml"
  ] = [
    $gwx3_XC_13,
    "./pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList.wxml"
  ] = $gwx3_XC_13(
    "./pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList.wxml"
  );
__wxRoute =
  "pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList.js";
define(
  "pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
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
                  "hq.market_etfrank_".concat(
                    this.listConfig.type,
                    "_stock_click"
                  ),
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
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              e = t.replace(/\s/g, "");
            return e.length > 10 && e.length < 13
              ? "mid-font"
              : e.length >= 13
              ? "small-font"
              : "";
          },
          getRankInfo: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = this.listConfig,
              n = e.column,
              i = void 0 === n ? "" : n,
              o = e.unit,
              r = void 0 === o ? "" : o;
            return "".concat(t[i] || "--").concat(r);
          },
          getValueColorClass: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
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
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
            return e ? t[e] : t.zde || t.zdf;
          },
          getStockInfo: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
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
            return "middle" === e
              ? "".concat(d).concat(c)
              : "".concat(h).concat(u);
          },
          getformatNum: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
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
                              null == (e = this.$refs.rankItem0)
                                ? void 0
                                : e[0]),
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
            return t.currentStyle
              ? t.currentStyle[e]
              : getComputedStyle(t, !1)[e];
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
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList.js",
  }
);
require("pages/detailSbg/@tencent/stock-markets-base/components/RankList/RankList.js");
