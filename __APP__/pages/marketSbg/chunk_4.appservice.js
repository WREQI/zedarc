$gwx47_XC_22 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_22 || [];
    function gz$gwx47_XC_22_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_22_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_22_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_22_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [[5], [[5], [1, "_div"]], [1, "discover-detail-page-wrapper"]],
                [1, "data-v-498820be"],
              ],
              [
                [2, "&&"],
                [[7], [3, "g"]],
                [1, "lite"],
              ],
            ],
            [
              [2, "&&"],
              [[7], [3, "h"]],
              [1, "mp"],
            ],
          ],
        ]);
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([3, "data-v-498820be"]);
        Z([3, "498820be-0"]);
        Z([[7], [3, "b"]]);
        Z([3, "dateTitle"]);
        Z([[7], [3, "e"]]);
        Z([3, "c"]);
        Z([3, "config"]);
        Z([[6], [[7], [3, "dateTitle"]], [3, "b"]]);
        Z([3, "a"]);
        Z(z[2]);
        Z([3, "card-wrapper data-v-498820be"]);
        Z([[6], [[7], [3, "config"]], [3, "b"]]);
        Z([[6], [[7], [3, "config"]], [3, "c"]]);
        Z([[7], [3, "f"]]);
        Z(z[2]);
        Z([3, "trust-footer data-v-498820be"]);
        Z([3, "498820be-2"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_22_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_22_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_22 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_22 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_22_1();
      var hYY = _n("view");
      _rz(z, hYY, "class", 0, e, s, gg);
      var oZY = _v();
      _(hYY, oZY);
      if (_oz(z, 1, e, s, gg)) {
        oZY.wxVkey = 1;
        var o2Y = _mz(
          z,
          "navigation",
          ["bind:__l", 2, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oZY, o2Y);
      }
      var l3Y = _v();
      _(hYY, l3Y);
      var a4Y = function (e6Y, t5Y, b7Y, gg) {
        var x9Y = _v();
        _(b7Y, x9Y);
        var o0Y = function (cBZ, fAZ, hCZ, gg) {
          var cEZ = _mz(
            z,
            "discover-card",
            ["bind:__l", 12, "class", 1, "uI", 2, "uP", 3],
            [],
            cBZ,
            fAZ,
            gg
          );
          _(hCZ, cEZ);
          return hCZ;
        };
        x9Y.wxXCkey = 4;
        _2z(z, 10, o0Y, e6Y, t5Y, gg, x9Y, "config", "index", "a");
        return b7Y;
      };
      l3Y.wxXCkey = 4;
      _2z(z, 7, a4Y, e, s, gg, l3Y, "dateTitle", "index", "c");
      var c1Y = _v();
      _(hYY, c1Y);
      if (_oz(z, 16, e, s, gg)) {
        c1Y.wxVkey = 1;
        var oFZ = _mz(
          z,
          "trust-footer",
          ["bind:__l", 17, "class", 1, "uI", 2],
          [],
          e,
          s,
          gg
        );
        _(c1Y, oFZ);
      }
      oZY.wxXCkey = 1;
      oZY.wxXCkey = 3;
      c1Y.wxXCkey = 1;
      c1Y.wxXCkey = 3;
      _(r, hYY);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_22";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_22();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.wxml"
  ] = [
    $gwx47_XC_22,
    "./pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.wxml"
  ] = $gwx47_XC_22(
    "./pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.wxml"
  );
__wxRoute = "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.js";
define(
  "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.js",
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
    var e = require("../../../../../common/vendor.js"),
      t = require("../hooks/useDiscoverConfig.js"),
      i = require("../node-modules/@tencent/st-tools/dist/index.js"),
      n = { hot: "选行业", index: "买指数" },
      r = {
        components: {
          DiscoverCard: function () {
            return "./DiscoverCard.js";
          },
          Navigation: function () {
            return "./Navigation.js";
          },
          TrustFooter: function () {
            return "../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
          },
        },
        props: { type: { type: String, default: "hot" } },
        setup: function (r) {
          var s = e.inject("hqBridge"),
            o = ["mpwzq", "wzqlight"].includes("mpweapp"),
            a = !1;
          navigator && (a = i.dist.detect(navigator.userAgent).env.IS_ZXG);
          var c = t.useDiscoverConfig(s),
            u = c.getDiscoverDetailData,
            p = c.discoverDetailData;
          u(r.type);
          var d = e.computed(function () {
            return Object.keys(p.value);
          });
          return (
            s.report(
              "hq.etf.etf_".concat(r.type, "_discover_detail_page_show")
            ),
            {
              isMp: !1,
              isZxg: a,
              isMpZxg: !0,
              isLite: o,
              title: n[r.type] || "",
              discoverDetailData: p,
              dateList: d,
            }
          );
        },
      };
    Array ||
      (
        e.resolveComponent("navigation") +
        e.resolveComponent("discover-card") +
        e.resolveComponent("TrustFooter")
      )();
    var s = e._export_sfc(r, [
      [
        "render",
        function (t, i, n, r, s, o) {
          return e.e(
            { a: r.isZxg },
            r.isZxg ? { b: e.p({ title: r.title }) } : {},
            {
              c: e.n(n.type),
              d: e.n(r.isZxg || r.isMpZxg ? "zxg" : ""),
              e: e.f(r.dateList, function (t, i, s) {
                return {
                  a: e.t(t),
                  b: e.f(r.discoverDetailData[t], function (t, i, o) {
                    return {
                      a: i,
                      b: "498820be-1-" + s + "-" + o,
                      c: e.p({
                        "is-zxg": r.isZxg,
                        type: n.type,
                        icon: t.news_icon,
                        "news-text": t.news_text,
                        "news-link": t.news_link,
                        "stock-list": t.stockList,
                        "in-detail-page": !0,
                      }),
                    };
                  }),
                  c: i,
                };
              }),
              f: r.isLite,
            },
            (r.isLite, {}),
            { g: r.isLite ? 1 : "", h: r.isMp ? 1 : "" }
          );
        },
      ],
      ["__scopeId", "data-v-498820be"],
    ]);
    wx.createComponent(s);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.js",
  }
);
require("pages/marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.js");
