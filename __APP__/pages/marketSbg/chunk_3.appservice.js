$gwx47_XC_21 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_21 || [];
    function gz$gwx47_XC_21_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_21_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_21_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_21_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div card data-v-4f4e3d67"]);
        Z([3, "_div card-header data-v-4f4e3d67"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "c"]]);
        Z([3, "stock"]);
        Z([[7], [3, "f"]]);
        Z([3, "j"]);
        Z([[6], [[7], [3, "stock"]], [3, "k"]]);
        Z([3, "_div rank-item padding-bw data-v-4f4e3d67"]);
        Z([[6], [[7], [3, "stock"]], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_21_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_21_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_21 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_21 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_21_1();
      var oLY = _n("view");
      _rz(z, oLY, "class", 0, e, s, gg);
      var cMY = _n("view");
      _rz(z, cMY, "class", 1, e, s, gg);
      var oNY = _v();
      _(cMY, oNY);
      if (_oz(z, 2, e, s, gg)) {
        oNY.wxVkey = 1;
      }
      var lOY = _v();
      _(cMY, lOY);
      if (_oz(z, 3, e, s, gg)) {
        lOY.wxVkey = 1;
      }
      oNY.wxXCkey = 1;
      lOY.wxXCkey = 1;
      _(oLY, cMY);
      var aPY = _v();
      _(oLY, aPY);
      var tQY = function (bSY, eRY, oTY, gg) {
        var oVY = _mz(z, "view", ["bindtap", 7, "class", 1], [], bSY, eRY, gg);
        var fWY = _v();
        _(oVY, fWY);
        if (_oz(z, 9, bSY, eRY, gg)) {
          fWY.wxVkey = 1;
        }
        fWY.wxXCkey = 1;
        _(oTY, oVY);
        return oTY;
      };
      aPY.wxXCkey = 2;
      _2z(z, 5, tQY, e, s, gg, aPY, "stock", "index", "j");
      _(r, oLY);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_21";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_21();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard.wxml"
  ] = [
    $gwx47_XC_21,
    "./pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard.wxml"
  ] = $gwx47_XC_21(
    "./pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard.wxml"
  );
__wxRoute = "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard.js";
define(
  "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard.js",
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
    require("../../../../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../utils/common.js"),
      e = require("../utils/route.js"),
      i = require("../../stock-hq-data/index.js"),
      n = require("../../../../../common/vendor.js"),
      o = {
        inject: ["hqBridge"],
        props: {
          isZxg: { type: Boolean, default: !1 },
          type: { type: String, default: "hot" },
          icon: { type: String, default: "" },
          newsText: { type: String, default: "" },
          newsLink: { type: String, default: "" },
          stockList: {
            type: Array,
            default: function () {
              return [];
            },
          },
          inDetailPage: { type: Boolean, default: !1 },
        },
        data: function () {
          return { isLite: ["mpwzq", "wzqlight"].includes("mpweapp") };
        },
        computed: {
          isMp: function () {
            return "mp" === n.StockBridge.ENV;
          },
        },
        methods: {
          transMarketIcon: t.transMarketIcon,
          handleNewsTextClick: function () {
            var t = this.inDetailPage
              ? "hq.etf.etf_".concat(
                  this.type,
                  "_discover_detail_page_news_click"
                )
              : "hq.etf.etf_".concat(this.type, "_discover_news_click");
            if (
              (n.StockBridge.report(t),
              this.newsLink.includes(
                "wzq.tenpay.com/mp/v2/index.html#/information/detail"
              ))
            ) {
              var e = (this.newsLink.match(/id=(\w+|[\u4e00-\u9fa5]+)/) ||
                [])[1];
              if (e)
                return void n.StockRouter.routeTo({
                  name: "informationDetail",
                  query: { id: e, title: "新闻" },
                });
            }
            this.isZxg
              ? this.$sdk.redirect(
                  "WebBrowser?info=".concat(
                    encodeURIComponent(JSON.stringify({ p_url: this.newsLink }))
                  )
                )
              : n.StockBridge.locationTo(this.newsLink);
          },
          handleListItemClick: function (t) {
            var o = this,
              r = this.inDetailPage
                ? "hq.etf.etf_".concat(
                    this.type,
                    "_discover_detail_page_stock_click"
                  )
                : "hq.etf.etf_".concat(this.type, "_discover_stock_click");
            n.StockBridge.report(r, { stockid: t });
            var c = i.utils.splitSymbol(t) || {},
              a = c.market,
              s = c.scode;
            this.timer = setTimeout(function () {
              e.navigateToQuote(o.hqBridge, a, s), clearTimeout(o.timer);
            }, 300);
          },
        },
      },
      r = n._export_sfc(o, [
        [
          "render",
          function (t, e, i, o, r, c) {
            return n.e(
              { a: i.icon },
              i.icon ? { b: i.icon } : {},
              { c: i.newsText },
              i.newsText
                ? {
                    d: n.t(i.newsText),
                    e: n.o(function () {
                      return (
                        c.handleNewsTextClick &&
                        c.handleNewsTextClick.apply(c, arguments)
                      );
                    }, 2698),
                  }
                : {},
              {
                f: n.f(i.stockList, function (t, e, i) {
                  return n.e(
                    {
                      a: n.t(t.name),
                      b: c.transMarketIcon("cnjj", "", t.id),
                      c: n.t(t.codeformat),
                      d: t.tag && t.tag.length > 0,
                    },
                    t.tag && t.tag.length > 0
                      ? {
                          e: n.f(t.tag, function (t, e, i) {
                            return { a: n.t(t), b: t };
                          }),
                        }
                      : {},
                    {
                      f: n.t(t.zdfformat),
                      g: n.n(t.zdfclass),
                      h: n.t(t.monthzdfformat),
                      i: n.n(t.monthzdfclass),
                      j: e,
                      k: n.o(
                        function (e) {
                          return c.handleListItemClick(t.id);
                        },
                        2699,
                        e
                      ),
                    }
                  );
                }),
                g: n.n(r.isLite ? "lite" : "pro"),
              }
            );
          },
        ],
        ["__scopeId", "data-v-4f4e3d67"],
      ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard.js",
  }
);
require("pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverCard.js");
