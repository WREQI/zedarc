$gwx6_XC_16 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_16 || [];
    function gz$gwx6_XC_16_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_16_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_16_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_16_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_16_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_16_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_16 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_16 = true;
    var x = ["./pages/account/components/ProtocolList.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_16_1();
      var cNG = _v();
      _(r, cNG);
      if (_oz(z, 0, e, s, gg)) {
        cNG.wxVkey = 1;
      }
      cNG.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_16";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_16();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/components/ProtocolList.wxml"] = [
    $gwx6_XC_16,
    "./pages/account/components/ProtocolList.wxml",
  ];
else
  __wxAppCode__["pages/account/components/ProtocolList.wxml"] = $gwx6_XC_16(
    "./pages/account/components/ProtocolList.wxml"
  );
__wxRoute = "pages/account/components/ProtocolList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/components/ProtocolList.js";
define(
  "pages/account/components/ProtocolList.js",
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
    var o = require("../../../common/vendor.js"),
      t = [
        {
          title: "腾讯自选股小程序隐私政策",
          url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=7",
        },
        {
          title: "腾讯自选股小程序第三方信息共享清单",
          url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=9",
        },
        {
          title: "腾讯自选股小程序儿童隐私保护声明",
          url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=8",
        },
        {
          title: "腾讯自选股小程序第三方SDK目录",
          url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=39",
        },
      ],
      l = {
        data: function () {
          return { allProtocolList: t };
        },
        onLoad: function () {
          o.StockBridge.store.subscribeProtocolStatus(
            this.updateAllProtocolList
          );
        },
        methods: {
          updateAllProtocolList: function () {
            this.allProtocolList = t;
          },
          goProtocol: function (t) {
            var l,
              r,
              e = t.target.dataset.from,
              a = getCurrentPages(),
              c = a[a.length - 1].route;
            if (((this.frompage = c), "about" !== e))
              return (
                (l = t.detail.val),
                (r = "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(l)
                )),
                o.wx$1.navigateTo({ url: r }),
                !1
              );
            (l = t.target.dataset.url),
              (r = "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(l)
              )),
              o.wx$1.navigateTo({ url: r }),
              o.Request.reportMTAData({ eventName: "ZXG.ABOUT.READ_PROTOCOL" });
          },
        },
      },
      r = o._export_sfc(l, [
        [
          "render",
          function (t, l, r, e, a, c) {
            return o.e(
              { a: a.allProtocolList.length > 0 },
              a.allProtocolList.length > 0
                ? {
                    b: o.t(a.allProtocolList[0].title),
                    c: a.allProtocolList[0].url,
                    d: o.o(function () {
                      return c.goProtocol && c.goProtocol.apply(c, arguments);
                    }, 649),
                    e: o.t(a.allProtocolList[1].title),
                    f: a.allProtocolList[1].url,
                    g: o.o(function () {
                      return c.goProtocol && c.goProtocol.apply(c, arguments);
                    }, 650),
                    h: o.t(a.allProtocolList[2].title),
                    i: a.allProtocolList[2].url,
                    j: o.o(function () {
                      return c.goProtocol && c.goProtocol.apply(c, arguments);
                    }, 651),
                    k: t.index,
                    l: o.t(a.allProtocolList[3].title),
                    m: a.allProtocolList[3].url,
                    n: o.o(function () {
                      return c.goProtocol && c.goProtocol.apply(c, arguments);
                    }, 652),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-3c59fde5"],
      ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/account/components/ProtocolList.js",
  }
);
require("pages/account/components/ProtocolList.js");
