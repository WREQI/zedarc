$gwx28_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx28_XC_2 || [];
    function gz$gwx28_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1 = [];
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
              [[5], [[5], [1, "data-v-5d4df48b"]], [1, "container"]],
              [[7], [3, "d"]],
            ],
            [[7], [3, "e"]],
          ],
        ]);
        Z([3, "__l"]);
        Z([3, "data-v-5d4df48b"]);
        Z([3, "5d4df48b-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "5d4df48b-1"]);
        Z(z[4]);
      })(__WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx28_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx28_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx28_XC_2 = true;
    var x = ["./pages/stock/detail_hr.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx28_XC_2_1();
      var aL = _n("view");
      _rz(z, aL, "class", 0, e, s, gg);
      var eN = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(aL, eN);
      var tM = _v();
      _(aL, tM);
      if (_oz(z, 4, e, s, gg)) {
        tM.wxVkey = 1;
        var bO = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(tM, bO);
      }
      tM.wxXCkey = 1;
      tM.wxXCkey = 3;
      _(r, aL);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx28_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx28_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/stock/detail_hr.wxml"] = [
    $gwx28_XC_2,
    "./pages/stock/detail_hr.wxml",
  ];
else
  __wxAppCode__["pages/stock/detail_hr.wxml"] = $gwx28_XC_2(
    "./pages/stock/detail_hr.wxml"
  );
__wxRoute = "pages/stock/detail_hr";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/stock/detail_hr.js";
define(
  "pages/stock/detail_hr.js",
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
      t = getApp().globalData,
      r = {
        data: function () {
          return {
            list: [],
            skin: e.wx$1.getStorageSync("user/skin") || "white",
            ver: "",
          };
        },
        onLoad: function (r) {
          var o = this;
          (this.urlParams = r),
            e.wx$1.setNavigationBarTitle({ title: "公司高管" }),
            this.queryData(),
            t.setSkin(function (e) {
              (o.skin = "black" === e ? "black" : "white"),
                (o.ver = t.getPhoneModel(t.device.model));
            });
        },
        methods: {
          queryData: function () {
            var e = this,
              r = this.urlParams,
              o = {
                url: t.CGI_PREFIX + "information.fcgi",
                data: { scode: r.scode, markets: r.market, type: 11 },
                success: function (r) {
                  r && "0" === r.retcode
                    ? (e.list = r.director)
                    : t.showError(r.retmsg, r.retcode);
                },
              };
            t.wx.request(o);
          },
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog")
      )();
    var o = e._export_sfc(r, [
      [
        "render",
        function (t, r, o, a, n, i) {
          return {
            a: t.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.f(t.list, function (t, r, o) {
              return { a: e.t(t.dname), b: e.t(t.dposition), c: r };
            }),
            d: e.n("skin-" + t.skin),
            e: e.n(t.ver),
          };
        },
      ],
      ["__scopeId", "data-v-5d4df48b"],
    ]);
    wx.createPage(o);
  },
  { isPage: true, isComponent: true, currentFile: "pages/stock/detail_hr.js" }
);
require("pages/stock/detail_hr.js");
