$gwx3_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_6 || [];
    function gz$gwx3_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "h"]]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "f"]]);
        Z([3, "_div cont data-v-0e22c852"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "tab"]],
              [1, "data-v-0e22c852"],
            ],
            [
              [2, "&&"],
              [[7], [3, "c"]],
              [1, "selected"],
            ],
          ],
        ]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "e"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "tab"]],
              [1, "data-v-0e22c852"],
            ],
            [
              [2, "&&"],
              [[7], [3, "d"]],
              [1, "selected"],
            ],
          ],
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_6 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_6_1();
      var o8Q = _mz(
        z,
        "view",
        [
          "bindtouchend",
          0,
          "bindtouchmove",
          1,
          "bindtouchstart",
          1,
          "class",
          2,
        ],
        [],
        e,
        s,
        gg
      );
      var c9Q = _v();
      _(o8Q, c9Q);
      if (_oz(z, 4, e, s, gg)) {
        c9Q.wxVkey = 1;
        var o0Q = _n("view");
        _rz(z, o0Q, "class", 5, e, s, gg);
        var lAR = _v();
        _(o0Q, lAR);
        if (_oz(z, 6, e, s, gg)) {
          lAR.wxVkey = 1;
        }
        var aBR = _n("slot");
        _(o0Q, aBR);
        lAR.wxXCkey = 1;
        _(c9Q, o0Q);
      } else {
        c9Q.wxVkey = 2;
        var tCR = _mz(z, "view", ["bindtap", 7, "class", 1], [], e, s, gg);
        var eDR = _n("slot");
        _(tCR, eDR);
        _(c9Q, tCR);
      }
      c9Q.wxXCkey = 1;
      _(r, o8Q);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab.wxml"
  ] = [
    $gwx3_XC_6,
    "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab.wxml"
  ] = $gwx3_XC_6(
    "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab.wxml"
  );
__wxRoute = "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab.js";
define(
  "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab.js",
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
    var t = require("../../../../../../common/vendor.js"),
      e = !1;
    try {
      e = !0;
    } catch (t) {}
    var n = {
        inject: { parent: { default: {} } },
        props: {
          name: [String, Number],
          isNotify: [Boolean],
          isPc: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            selected: !1,
            touch: null,
            isClick: !1,
            isMobile: !!e || "ontouchstart" in window,
          };
        },
        mounted: function () {
          var t,
            e,
            n = this;
          (this.selected =
            this.name === (null == (t = this.parent) ? void 0 : t.index)),
            null == (e = this.parent) ||
              e.$on("change", function (t) {
                n.selected = n.name === t;
              });
        },
        methods: {
          onClick: function () {
            var t;
            null == (t = this.parent) || t.$emit("select", this.name);
          },
          onTouchStart: function (t) {
            1 === t.touches.length &&
              ((this.touch = t.touches[0]), (this.isClick = !0));
          },
          onTouchMove: function (t) {
            if (1 === t.touches.length && this.isClick) {
              var e = t.touches[0],
                n = Math.abs(e.screenX - this.touch.screenX),
                o = Math.abs(e.screenY - this.touch.screenY);
              (n >= 9 || o >= 9) && (this.isClick = !1);
            }
          },
          onTouchEnd: function (t) {
            this.isClick && (this.onClick(), t.preventDefault()),
              (this.isClick = !1);
          },
        },
      },
      o = t._export_sfc(n, [
        [
          "render",
          function (e, n, o, i, c, s) {
            return t.e(
              { a: c.isMobile && !o.isPc },
              c.isMobile && !o.isPc
                ? t.e({ b: o.isNotify }, (o.isNotify, {}), {
                    c: c.selected ? 1 : "",
                  })
                : {
                    d: c.selected ? 1 : "",
                    e: t.o(function () {
                      return s.onClick && s.onClick.apply(s, arguments);
                    }, 4711),
                  },
              {
                f: t.o(function () {
                  return s.onTouchStart && s.onTouchStart.apply(s, arguments);
                }, 4712),
                g: t.o(function () {
                  return s.onTouchMove && s.onTouchMove.apply(s, arguments);
                }, 4713),
                h: t.o(function () {
                  return s.onTouchEnd && s.onTouchEnd.apply(s, arguments);
                }, 4714),
              }
            );
          },
        ],
        ["__scopeId", "data-v-0e22c852"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab.js",
  }
);
require("pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tab.js");
