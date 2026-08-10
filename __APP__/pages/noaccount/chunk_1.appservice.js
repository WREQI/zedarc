$gwx2_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_1 || [];
    function gz$gwx2_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([3, "5d8d2d52-0"]);
        Z(z[0]);
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_1 = true;
    var x = ["./pages/noaccount/EscapeNotice.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx2_XC_1_1();
      var bED = _v();
      _(r, bED);
      if (_oz(z, 0, e, s, gg)) {
        bED.wxVkey = 1;
        var oFD = _mz(
          z,
          "web-view-comp",
          ["bind:__l", 1, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(bED, oFD);
      }
      bED.wxXCkey = 1;
      bED.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx2_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/noaccount/EscapeNotice.wxml"] = [
    $gwx2_XC_1,
    "./pages/noaccount/EscapeNotice.wxml",
  ];
else
  __wxAppCode__["pages/noaccount/EscapeNotice.wxml"] = $gwx2_XC_1(
    "./pages/noaccount/EscapeNotice.wxml"
  );
__wxRoute = "pages/noaccount/EscapeNotice";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/noaccount/EscapeNotice.js";
define(
  "pages/noaccount/EscapeNotice.js",
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
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      n = require("../../common/vendor.js"),
      t = {
        name: "EscapeNotice",
        components: {
          webViewComp: function () {
            return "../../components/webView.js";
          },
        },
        setup: function () {
          var t = this,
            r = "https://wzq.tenpay.com/mp/v2/escape.html?srcsite=zxgxcx_h5",
            o = n.ref(r);
          return (
            n.onMounted(function () {
              return (
                (n = t),
                null,
                (c = e().mark(function () {
                  var n, t, c, a, s, u;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (a =
                            (null ==
                            (c =
                              null ==
                              (t =
                                null == (n = getApp().globalData)
                                  ? void 0
                                  : n.Login)
                                ? void 0
                                : t.getEscapeIdentity)
                              ? void 0
                              : c.call(t)) || {}),
                            (s = a.espUinEn),
                            (u = a.espDealer),
                            s &&
                              u &&
                              (o.value = ""
                                .concat(r, "&esp_uin_en=")
                                .concat(encodeURIComponent(s), "&esp_dealer=")
                                .concat(encodeURIComponent(u)));
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, c);
                })),
                new Promise(function (e, t) {
                  var r = function (e) {
                      try {
                        a(c.next(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    o = function (e) {
                      try {
                        a(c.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    a = function (n) {
                      return n.done
                        ? e(n.value)
                        : Promise.resolve(n.value).then(r, o);
                    };
                  a((c = c.apply(n, null)).next());
                })
              );
              var n, c;
            }),
            { escapeUrl: o }
          );
        },
      };
    Array || n.resolveComponent("web-view-comp")();
    var r = n._export_sfc(t, [
      [
        "render",
        function (e, t, r, o, c, a) {
          return { a: n.p({ src: o.escapeUrl, "add-params": !1 }) };
        },
      ],
    ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/noaccount/EscapeNotice.js",
  }
);
require("pages/noaccount/EscapeNotice.js");
