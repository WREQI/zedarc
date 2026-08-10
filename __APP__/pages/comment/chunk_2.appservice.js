$gwx24_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx24_XC_2 || [];
    function gz$gwx24_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx24_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx24_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx24_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[4], [[5], [[5], [1, "container"]], [[7], [3, "e"]]]]);
        Z([3, "__l"]);
        Z([3, "7ac445d7-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "7ac445d7-1"]);
        Z(z[3]);
        Z([[7], [3, "d"]]);
        Z(z[1]);
        Z([[7], [3, "c"]]);
        Z([3, "7ac445d7-2"]);
        Z(z[7]);
      })(__WXML_GLOBAL__.ops_cached.$gwx24_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx24_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx24_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx24_XC_2 = true;
    var x = ["./pages/comment/detailView/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx24_XC_2_1();
      var fID = _n("view");
      _rz(z, fID, "class", 0, e, s, gg);
      var oLD = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(fID, oLD);
      var cJD = _v();
      _(fID, cJD);
      if (_oz(z, 3, e, s, gg)) {
        cJD.wxVkey = 1;
        var cMD = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(cJD, cMD);
      }
      var hKD = _v();
      _(fID, hKD);
      if (_oz(z, 7, e, s, gg)) {
        hKD.wxVkey = 1;
        var oND = _mz(
          z,
          "zxg-webview",
          ["bind:__l", 8, "bindmessage", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(hKD, oND);
      }
      cJD.wxXCkey = 1;
      cJD.wxXCkey = 3;
      hKD.wxXCkey = 1;
      hKD.wxXCkey = 3;
      _(r, fID);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx24_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx24_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/comment/detailView/main.wxml"] = [
    $gwx24_XC_2,
    "./pages/comment/detailView/main.wxml",
  ];
else
  __wxAppCode__["pages/comment/detailView/main.wxml"] = $gwx24_XC_2(
    "./pages/comment/detailView/main.wxml"
  );
__wxRoute = "pages/comment/detailView/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/comment/detailView/main.js";
define(
  "pages/comment/detailView/main.js",
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
      n = Object.defineProperties,
      r = Object.getOwnPropertyDescriptors,
      i = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable,
      c = function (e, n, r) {
        return n in e
          ? t(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[n] = r);
      },
      s = require("../../../common/vendor.js"),
      l = s.Fns || s.__CJS__import__0__$1,
      p = getApp().globalData,
      u = {
        components: {
          zxgWebview: function () {
            return "../../../components/webView.js";
          },
        },
        data: function () {
          return {
            key: "",
            url: "",
            time: 0,
            resUrl: "",
            skin: s.wx$1.getStorageSync("user/skin") || "white",
            query: {},
          };
        },
        onLoad: function (e) {
          this.query = e;
          var t = this;
          p.setSkin(function (e) {
            t.skin = "black" === e ? "black" : "white";
          });
          var n =
              "https://wzq.tenpay.com/mp/v2/index.html#/comment/detail/detail",
            r = Object.keys(e);
          if (r.length >= 1) {
            var i = "?";
            r.forEach(function (t) {
              "path" !== t && (i += "".concat(t, "=").concat(e[t], "&"));
            }),
              (n += i);
          }
          (this.url = n + "from=miniapp&"),
            (this.key = this.url),
            (this.resUrl = n);
        },
        onShow: function () {
          var e = this;
          p.setSkin(function (t) {
            e.skin = "black" === t ? "black" : "white";
          }),
            (this.time += 1),
            (this.resUrl = "".concat(this.url, "time=").concat(this.time));
        },
        onShareAppMessage: function () {
          var t,
            s =
              ((t = (function (t, n) {
                for (var r in n || (n = {})) a.call(n, r) && c(t, r, n[r]);
                if (i) {
                  var s,
                    l = e(i(n));
                  try {
                    for (l.s(); !(s = l.n()).done; ) {
                      r = s.value;
                      o.call(n, r) && c(t, r, n[r]);
                    }
                  } catch (e) {
                    l.e(e);
                  } finally {
                    l.f();
                  }
                }
                return t;
              })({}, this.query || {})),
              n(t, r({ stat_data: "OCi00p000h017" })));
          return {
            title: "你的好友邀你查看",
            path: "pages/comment/detailView/main?".concat(l.queryStringify(s)),
          };
        },
        methods: {
          updateTimeline: function (e) {
            var t = getApp().globalData.Event,
              n = e || {};
            s.StockBridge.busEmit("updateTimelineInNewsTab", n),
              t.emit("updateTimeline", n);
          },
          handleMessage: function (e) {
            var t = this,
              n = e.detail.data;
            (void 0 === n ? [] : n).forEach(function (e) {
              t.updateTimeline(e);
            });
          },
        },
      };
    Array ||
      (
        s.resolveComponent("mp-privacy-dialog") +
        s.resolveComponent("stock-privacy-dialog") +
        s.resolveComponent("zxg-webview")
      )();
    var m = s._export_sfc(u, [
      [
        "render",
        function (e, t, n, r, i, a) {
          return {
            a: e.rootFontSize,
            b: s.p({ "no-auto": !0 }),
            c: s.o(a.handleMessage, 345),
            d: s.p({ src: i.resUrl }),
            e: s.n("black" == i.skin ? "skin-black" : "skin-white"),
          };
        },
      ],
    ]);
    (u.__runtimeHooks = 2), wx.createPage(m);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/comment/detailView/main.js",
  }
);
require("pages/comment/detailView/main.js");
