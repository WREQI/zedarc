$gwx24_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx24_XC_5 || [];
    function gz$gwx24_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx24_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx24_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx24_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[4], [[5], [[5], [1, "container"]], [[7], [3, "d"]]]]);
        Z([3, "__l"]);
        Z([3, "7faa1cad-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "7faa1cad-1"]);
        Z(z[3]);
        Z([[7], [3, "c"]]);
        Z(z[1]);
        Z([3, "7faa1cad-2"]);
        Z(z[7]);
      })(__WXML_GLOBAL__.ops_cached.$gwx24_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx24_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx24_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx24_XC_5 = true;
    var x = ["./pages/comment/personal/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx24_XC_5_1();
      var o0D = _n("view");
      _rz(z, o0D, "class", 0, e, s, gg);
      var hCE = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(o0D, hCE);
      var fAE = _v();
      _(o0D, fAE);
      if (_oz(z, 3, e, s, gg)) {
        fAE.wxVkey = 1;
        var oDE = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(fAE, oDE);
      }
      var cBE = _v();
      _(o0D, cBE);
      if (_oz(z, 7, e, s, gg)) {
        cBE.wxVkey = 1;
        var cEE = _mz(
          z,
          "zxg-webview",
          ["bind:__l", 8, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(cBE, cEE);
      }
      fAE.wxXCkey = 1;
      fAE.wxXCkey = 3;
      cBE.wxXCkey = 1;
      cBE.wxXCkey = 3;
      _(r, o0D);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx24_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx24_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/comment/personal/main.wxml"] = [
    $gwx24_XC_5,
    "./pages/comment/personal/main.wxml",
  ];
else
  __wxAppCode__["pages/comment/personal/main.wxml"] = $gwx24_XC_5(
    "./pages/comment/personal/main.wxml"
  );
__wxRoute = "pages/comment/personal/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/comment/personal/main.js";
define(
  "pages/comment/personal/main.js",
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
    var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      t = Object.defineProperty,
      r = Object.defineProperties,
      n = Object.getOwnPropertyDescriptors,
      o = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable,
      c = function (e, r, n) {
        return r in e
          ? t(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[r] = n);
      },
      s = require("../../../common/vendor.js"),
      l = getApp().globalData,
      p = {
        components: {
          zxgWebview: function () {
            return "../../../components/webView.js";
          },
        },
        data: function () {
          return {
            url: "",
            time: 0,
            resUrl: "",
            skin: s.wx$1.getStorageSync("user/skin") || "white",
            query: {},
          };
        },
        onShareAppMessage: function () {
          var t,
            l =
              ((t = (function (t, r) {
                for (var n in r || (r = {})) i.call(r, n) && c(t, n, r[n]);
                if (o) {
                  var s,
                    l = e(o(r));
                  try {
                    for (l.s(); !(s = l.n()).done; ) {
                      n = s.value;
                      a.call(r, n) && c(t, n, r[n]);
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                }
                return t;
              })({}, this.query || {})),
              r(t, n({ stat_data: "OGD00p000h018" })));
          return {
            title: "你的好友邀你查看",
            path: "/pages/comment/personal/main?".concat(
              s.Fns.queryStringify(l)
            ),
          };
        },
        onLoad: function (e) {
          this.query = e;
          var t = this;
          l.setSkin(function (e) {
            t.skin = "black" === e ? "black" : "white";
          });
          var r =
              "https://wzq.tenpay.com/mp/v2/index.html#/personal/index?from=miniapp&",
            n = Object.keys(e);
          if (n.length > 0) {
            var o = "";
            n.forEach(function (t) {
              "path" !== t && (o += "".concat(t, "=").concat(e[t], "&"));
            }),
              (r += o);
          }
          this.url = r;
        },
        onShow: function () {
          var e = this;
          l.setSkin(function (t) {
            e.skin = "black" === t ? "black" : "white";
          }),
            (this.time += 1),
            (this.resUrl = "".concat(this.url, "time=").concat(this.time));
        },
        methods: {},
      };
    Array ||
      (
        s.resolveComponent("mp-privacy-dialog") +
        s.resolveComponent("stock-privacy-dialog") +
        s.resolveComponent("zxg-webview")
      )();
    var u = s._export_sfc(p, [
      [
        "render",
        function (e, t, r, n, o, i) {
          return {
            a: e.rootFontSize,
            b: s.p({ "no-auto": !0 }),
            c: s.p({ src: o.resUrl }),
            d: s.n("black" == o.skin ? "skin-black" : "skin-white"),
          };
        },
      ],
    ]);
    (p.__runtimeHooks = 2), wx.createPage(u);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/comment/personal/main.js",
  }
);
require("pages/comment/personal/main.js");
