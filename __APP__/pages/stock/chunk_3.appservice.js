$gwx28_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx28_XC_3 || [];
    function gz$gwx28_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx28_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx28_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx28_XC_3_1 = [];
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
                [[5], [[5], [1, "data-v-03a58303"]], [1, "container"]],
                [[7], [3, "i"]],
              ],
              [[7], [3, "j"]],
            ],
            [1, "gudong"],
          ],
        ]);
        Z([3, "__l"]);
        Z([3, "data-v-03a58303"]);
        Z([3, "03a58303-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "03a58303-1"]);
        Z(z[4]);
        Z([3, "bd-cont-row data-v-03a58303"]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "g"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx28_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx28_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx28_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx28_XC_3 = true;
    var x = ["./pages/stock/holder_us.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx28_XC_3_1();
      var xQ = _n("view");
      _rz(z, xQ, "class", 0, e, s, gg);
      var fS = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(xQ, fS);
      var oR = _v();
      _(xQ, oR);
      if (_oz(z, 4, e, s, gg)) {
        oR.wxVkey = 1;
        var cT = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oR, cT);
      }
      var hU = _n("view");
      _rz(z, hU, "class", 9, e, s, gg);
      var oV = _v();
      _(hU, oV);
      if (_oz(z, 10, e, s, gg)) {
        oV.wxVkey = 1;
      }
      var cW = _v();
      _(hU, cW);
      if (_oz(z, 11, e, s, gg)) {
        cW.wxVkey = 1;
      }
      oV.wxXCkey = 1;
      cW.wxXCkey = 1;
      _(xQ, hU);
      oR.wxXCkey = 1;
      oR.wxXCkey = 3;
      _(r, xQ);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx28_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx28_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/stock/holder_us.wxml"] = [
    $gwx28_XC_3,
    "./pages/stock/holder_us.wxml",
  ];
else
  __wxAppCode__["pages/stock/holder_us.wxml"] = $gwx28_XC_3(
    "./pages/stock/holder_us.wxml"
  );
__wxRoute = "pages/stock/holder_us";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/stock/holder_us.js";
define(
  "pages/stock/holder_us.js",
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
    var e = require("../../common/vendor.js"),
      n = getApp().globalData,
      t = {
        data: function () {
          return {
            skin: e.wx$1.getStorageSync("user/skin") || "white",
            ver: "",
            zygd: "",
            date: "",
            cgjj: "",
          };
        },
        onLoad: function (e) {
          var t = this,
            c = this,
            g = e,
            a = {
              url: n.CGI_PREFIX + "information.fcgi",
              data: { scode: g.scode, markets: g.market, type: 15 },
              success: function (e) {
                if (e && "0" === e.retcode) {
                  if (e.zygd)
                    for (var n = 0; n < e.zygd.length; n++)
                      "未变" !== e.zygd[n].change &&
                        (e.zygd[n].changeClass =
                          e.zygd[n].change.indexOf("-") >= 0 ? "green" : "red");
                  if (e.cgjj && e.cgjj.length > 0)
                    for (var t = 0; t < e.cgjj.length; t++)
                      "未变" !== e.cgjj[t].change &&
                        (e.cgjj[t].changeClass =
                          e.cgjj[t].change.indexOf("-") >= 0 ? "green" : "red");
                  (c.zygd = e.zygd), (c.date = e.zygd_date), (c.cgjj = e.cgjj);
                }
              },
            };
          n.wx.request(a),
            n.setSkin(function (e) {
              (t.skin = "black" === e ? "black" : "white"),
                (t.ver = n.getPhoneModel(n.device.model));
            });
        },
        onReady: function () {},
        onShow: function () {},
        onHide: function () {},
        onUnload: function () {},
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog")
      )();
    var c = e._export_sfc(t, [
      [
        "render",
        function (n, t, c, g, a, o) {
          return e.e(
            {
              a: n.rootFontSize,
              b: e.p({ "no-auto": !0 }),
              c: e.t(n.date),
              d: e.f(n.zygd, function (n, t, c) {
                return {
                  a: e.t(n.stockholder),
                  b: e.t(n.bcccgs),
                  c: e.t(n.ratio),
                  d: e.t(n.change),
                  e: e.n(n.changeClass),
                  f: t,
                };
              }),
              e: n.cgjj && n.cgjj.length > 0,
            },
            n.cgjj && n.cgjj.length > 0 ? { f: e.t(n.date) } : {},
            { g: n.cgjj && n.cgjj.length > 0 },
            n.cgjj && n.cgjj.length > 0
              ? {
                  h: e.f(n.cgjj, function (n, t, c) {
                    return {
                      a: e.t(n.stockholder),
                      b: e.t(n.bcccgs),
                      c: e.t(n.ratio),
                      d: e.t(n.change),
                      e: e.n(n.changeClass),
                      f: t,
                    };
                  }),
                }
              : {},
            { i: e.n("skin-" + n.skin), j: e.n(n.ver) }
          );
        },
      ],
      ["__scopeId", "data-v-03a58303"],
    ]);
    wx.createPage(c);
  },
  { isPage: true, isComponent: true, currentFile: "pages/stock/holder_us.js" }
);
require("pages/stock/holder_us.js");
