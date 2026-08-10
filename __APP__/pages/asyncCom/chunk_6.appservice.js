$gwx1_XC_30 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_30 || [];
    function gz$gwx1_XC_30_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_30_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_30_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_30_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_30_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_30_1;
    }
    function gz$gwx1_XC_30_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_30_2)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_30_2;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_30_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "c"]]);
        Z([3, "_div redpoint-place-holder data-v-b7c13b77"]);
        Z([[7], [3, "b"]]);
        Z([3, "__l"]);
        Z([3, "r data-v-b7c13b77"]);
        Z([3, "b7c13b77-0"]);
        Z(z[2]);
        Z([3, "redpointref"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_30_2);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_30_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_30 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_30 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp.wxml",
      "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_30_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_30_2();
      var a4K = _mz(z, "view", ["bindtap", 0, "class", 1], [], e, s, gg);
      var t5K = _v();
      _(a4K, t5K);
      if (_oz(z, 2, e, s, gg)) {
        t5K.wxVkey = 1;
        var e6K = _mz(
          z,
          "redpoint",
          ["bind:__l", 3, "class", 1, "uI", 2, "uP", 3, "uR", 4],
          [],
          e,
          s,
          gg
        );
        _(t5K, e6K);
      }
      t5K.wxXCkey = 1;
      t5K.wxXCkey = 3;
      _(r, a4K);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_30";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_30();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp.wxml"
  ] = [
    $gwx1_XC_30,
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp.wxml"
  ] = $gwx1_XC_30(
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.wxml"
  ] = [
    $gwx1_XC_30,
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.wxml"
  ] = $gwx1_XC_30(
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.wxml"
  );
__wxRoute =
  "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp.js";
define(
  "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp.js",
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
    var e = require("../../../../../../../../common/vendor.js"),
      o = {
        props: {
          premote: { type: Object, default: null },
          positionName: { type: String, required: !0 },
        },
        setup: function (o) {
          var t = e.ref(!1),
            n = e.ref(!1),
            r = e.ref(!1),
            u = e.ref(0),
            a = (function () {
              var o;
              if (e.StockBridge.ENV !== e.EnvTypeEnum.MP)
                return null == (o = e._default().os) ? void 0 : o.ios;
              try {
                var t = (
                  (e.wx$1.getDeviceInfo && e.wx$1.getDeviceInfo()) ||
                  e.wx$1.getSystemInfoSync()
                ).platform;
                return "ios" === (void 0 === t ? "" : t);
              } catch (e) {
                return !1;
              }
            })();
          return (
            e.watch(
              function () {
                return o.premote;
              },
              function (a) {
                var i, d;
                try {
                  if (a)
                    return JSON.parse(a.component_info).position_name ===
                      o.positionName
                      ? ((t.value = !0),
                        (r.value =
                          +JSON.parse(
                            JSON.parse(a.ad_list[0].dp_ctx).strategy_info
                          ).message_num || 0),
                        (u.value = r.value),
                        (n.value = !r.value),
                        r.value > 99 && (r.value = "99+"),
                        void (
                          null ==
                            (d =
                              null == (i = e.StockBridge)
                                ? void 0
                                : i.deliverySdk) ||
                          d.deliveryMtaAndRport(a, "brow", {
                            msg_num: u.value ? u.value : "",
                            red_type: u.value ? 1 : 2,
                          })
                        ))
                      : void (t.value = !1);
                  t.value = !1;
                } catch (e) {
                  t.value = !1;
                }
              },
              { immediate: !0, deep: !0 }
            ),
            e.onBeforeUnmount(function () {
              t.value = !1;
            }),
            e.onDeactivated(function () {
              t.value = !1;
            }),
            {
              redpointShow: t,
              redpointClick: function () {
                var n, r;
                t.value &&
                  (null ==
                    (r =
                      null == (n = e.StockBridge) ? void 0 : n.deliverySdk) ||
                    r.deliveryMtaAndRport(o.premote, "click", {
                      msg_num: u.value ? u.value : "",
                      red_type: u.value ? 1 : 2,
                    })),
                  (t.value = !1);
              },
              shownum: r,
              showdot: n,
              detectIos: a,
            }
          );
        },
      },
      t = e._export_sfc(o, [
        [
          "render",
          function (o, t, n, r, u, a) {
            return e.e(
              { a: r.redpointShow && r.showdot },
              r.redpointShow && r.showdot
                ? {}
                : r.redpointShow && r.shownum
                ? {
                    c: e.t(r.shownum),
                    d: e.n(r.shownum < 10 ? "single-num" : ""),
                    e: e.n(r.detectIos ? "detect-ios" : ""),
                    f: e.n("99+" === r.shownum ? "long-num" : ""),
                  }
                : {},
              { b: r.redpointShow && r.shownum }
            );
          },
        ],
        ["__scopeId", "data-v-a41d9a5e"],
      ]);
    wx.createComponent(t);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp.js",
  }
);
require("pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/mp.js");
__wxRoute =
  "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.js";
define(
  "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.js",
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
    var e = require("../../../../../../../../common/vendor.js"),
      n = {
        name: "qianjiRedPointPlaceHolder",
        components: {
          redpoint: function () {
            return "./mp.js";
          },
        },
        props: {
          name: { type: String, required: !0 },
          minaredpoint: { type: Object, default: null },
        },
        setup: function () {
          var n = e.getCurrentInstance().proxy || e.getCurrentInstance();
          return {
            redpointClick: function () {
              n.$refs.redpointref.redpointClick();
            },
          };
        },
      };
    Array || e.resolveComponent("redpoint")();
    var r = e._export_sfc(n, [
      [
        "render",
        function (n, r, t, o, i, p) {
          return {
            a: e.sr("redpointref", "b7c13b77-0"),
            b: e.p({ "position-name": t.name, premote: t.minaredpoint }),
            c: e.o(function () {
              return o.redpointClick && o.redpointClick.apply(o, arguments);
            }, 2186),
          };
        },
      ],
      ["__scopeId", "data-v-b7c13b77"],
    ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.js",
  }
);
require("pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/RedPoint/qianjiRedPointPlaceHolderMp.js");
