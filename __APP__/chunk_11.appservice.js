$gwx_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
    function gz$gwx_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
    var x = ["./components/webView.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_3_1();
      var cAB = _v();
      _(r, cAB);
      if (_oz(z, 0, e, s, gg)) {
        cAB.wxVkey = 1;
      }
      cAB.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/webView.wxml"] = [
    $gwx_XC_3,
    "./components/webView.wxml",
  ];
else
  __wxAppCode__["components/webView.wxml"] = $gwx_XC_3(
    "./components/webView.wxml"
  );
__wxRoute = "components/webView";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/webView.js";
define(
  "components/webView.js",
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
    require("../@babel/runtime/helpers/Arrayincludes");
    var e = require("../common/vendor.js"),
      n = (e.config || e.__CJS__import__0__$2).BISTAT,
      o = void 0 === n ? {} : n,
      t = {
        sharedComponents: !0,
        props: {
          src: { type: String, default: "" },
          isMpPlugin: { type: Boolean, default: !1 },
          addParams: { type: Boolean, default: !0 },
        },
        setup: function (n, t) {
          var r = t.emit;
          e.onMounted(function () {
            var n = getCurrentPages();
            (null == n ? void 0 : n.length) > 9 &&
              e.mpReporter.log("webview_load_page_max");
          });
          var l = e.computed(function () {
            var t,
              r,
              l,
              a,
              i,
              d,
              c,
              s = n.src;
            try {
              if (!n.src) return "";
              var u =
                (null ==
                (l =
                  null ==
                  (r = null == (t = e.wx$1) ? void 0 : t.getEnterOptionsSync)
                    ? void 0
                    : r.call(t))
                  ? void 0
                  : l.scene) ||
                (null ==
                (d =
                  null ==
                  (i = null == (a = e.wx$1) ? void 0 : a.getLaunchOptionsSync)
                    ? void 0
                    : i.call(a))
                  ? void 0
                  : d.scene) ||
                "";
              if (
                ([1265, 1266].includes(+u) &&
                  (null == s ? void 0 : s.startsWith("https%3")) &&
                  (s = decodeURIComponent(s)),
                !n.isMpPlugin && n.addParams)
              ) {
                var p = s.split("#/");
                if (
                  ((s = ""
                    .concat(s)
                    .concat(
                      (2 === p.length ? p[1] : p[0]).includes("?") ? "&" : "?",
                      "xcx_scene="
                    )
                    .concat(u)).includes("srcshell=") || (s += "&srcshell=h5"),
                  s.includes("srcsite=") || (s += "&srcsite=zxgxcx_h5"),
                  s.includes("wzq/aics-cloud/xiaomi/page.do"))
                ) {
                  var v = e.getPlatformInfo(),
                    _ = v.mpVersion,
                    g = v.sdkVersion,
                    f = v.phoneModel;
                  s += "&mp_version="
                    .concat(encodeURIComponent(_), "&sdk_version=")
                    .concat(encodeURIComponent(g), "&phone_model=")
                    .concat(encodeURIComponent(f));
                }
                if (!/stat=|stat_data=/.test(s)) {
                  var m =
                      (null == (c = e.StockBridge.store)
                        ? void 0
                        : c.channelId) || {},
                    h = (null == m ? void 0 : m[o.BI_STAT_O]) || "";
                  h && (s += "&stat_data=".concat(h));
                }
              }
            } catch (u) {}
            return s;
          });
          return {
            url: l,
            handleError: function (o) {
              var t, a;
              if ((r("error", o), !n.isMpPlugin))
                try {
                  var i = (e.getCurrentRoute() || {}).path,
                    d =
                      "pages/index/trade" === (void 0 === i ? "" : i)
                        ? "trade_page_webview_load_failed"
                        : "webview_load_failed";
                  e.mpReporter.log(d, {
                    ext3: JSON.stringify((null == o ? void 0 : o.detail) || {}),
                  }),
                    "web-view load failed due to not in domain list" ===
                      (null == (t = null == o ? void 0 : o.detail)
                        ? void 0
                        : t.errMsg) &&
                      (e.mpReporter.log("WEBVIWE_URL_NOT_IN_DOMAIN_LIST", {
                        ext3: JSON.stringify(
                          (null == o ? void 0 : o.detail) || {}
                        ),
                      }),
                      e.wx$1.redirectTo({
                        url: "/pages/forbidden/webview?url="
                          .concat(encodeURIComponent(l.value), "&errUrl=")
                          .concat(
                            encodeURIComponent(
                              (null == (a = null == o ? void 0 : o.detail)
                                ? void 0
                                : a.url) || ""
                            )
                          ),
                      }));
                } catch (e) {}
            },
            handleMessage: function (e) {
              r("message", e);
            },
            handleLoad: function (e) {
              r("load", e);
            },
          };
        },
      },
      r = e._export_sfc(t, [
        [
          "render",
          function (n, o, t, r, l, a) {
            return e.e(
              { a: t.src && r.url },
              t.src && r.url
                ? {
                    b: r.url,
                    c: e.o(function () {
                      return r.handleError && r.handleError.apply(r, arguments);
                    }, 631),
                    d: e.o(function () {
                      return (
                        r.handleMessage && r.handleMessage.apply(r, arguments)
                      );
                    }, 632),
                    e: e.o(function () {
                      return r.handleLoad && r.handleLoad.apply(r, arguments);
                    }, 633),
                  }
                : {}
            );
          },
        ],
      ]);
    wx.createComponent(r);
  },
  { isPage: false, isComponent: true, currentFile: "components/webView.js" }
);
require("components/webView.js");
