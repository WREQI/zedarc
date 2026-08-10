$gwx1_XC_15 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_15 || [];
    function gz$gwx1_XC_15_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_15_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_15_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_15_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_15_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_15_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_15 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_15 = true;
    var x = [
      "./pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_15_1();
      var cEE = _v();
      _(r, cEE);
      if (_oz(z, 0, e, s, gg)) {
        cEE.wxVkey = 1;
      }
      cEE.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_15";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_15();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.wxml"
  ] = [
    $gwx1_XC_15,
    "./pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.wxml"
  ] = $gwx1_XC_15(
    "./pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.wxml"
  );
__wxRoute =
  "pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.js";
define(
  "pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.js",
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
    var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      n = require("../../../../../common/vendor.js"),
      t = require("../utils/util.js"),
      o = n.defineComponent({
        name: "MonitoringRemindPop",
        props: {
          hasBottom: { type: Boolean, default: !1 },
          enableTheme: { type: Boolean, default: !1 },
        },
        setup: function (o, r) {
          var a = this,
            i = r.emit,
            u = n.ref(!0),
            c = n.inject("isSubscribed", !1),
            l = n.computed(function () {
              var e;
              return "boolean" == typeof c
                ? c
                : null != (e = null == c ? void 0 : c.value) && e;
            }),
            s = t.getTheme(),
            d = n.computed(function () {
              return o.enableTheme ? s : "white";
            }),
            f = n.reactive([
              { id: 1, text: "股价新高/新低", delay: 1883, show: !1 },
              { id: 2, text: "公司大事提醒", delay: 425, show: !1 },
              { id: 3, text: "涨跌停提醒", delay: 1258, show: !1 },
            ]),
            h = n.ref(null),
            p = [],
            m = function () {
              for (; p.length; ) {
                var e = p.pop();
                clearTimeout(e);
              }
            },
            v = function () {
              u.value = !1;
            };
          return (
            n.onMounted(function () {
              m(),
                f.forEach(function (e) {
                  e.show = !1;
                }),
                f.forEach(function (e) {
                  var n = setTimeout(function () {
                    e.show = !0;
                  }, e.delay);
                  p.push(n);
                });
            }),
            n.onBeforeUnmount(function () {
              m();
            }),
            {
              showPop: u,
              lite: !1,
              currentTheme: d,
              radarSweepIcon:
                "https://st.gtimg.com/design/36c5f1f683fee0cdd6e9d3891b4a8fc3.png",
              radarDots: f,
              radarContainerRef: h,
              open: function () {
                u.value = !0;
              },
              close: v,
              handleClose: function () {
                v(), m(), i("close");
              },
              handleConfirm: function () {
                return (
                  (n = a),
                  null,
                  (t = e().mark(function n() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            i("confirm"), v();
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, n);
                  })),
                  new Promise(function (e, o) {
                    var r = function (e) {
                        try {
                          i(t.next(e));
                        } catch (e) {
                          o(e);
                        }
                      },
                      a = function (e) {
                        try {
                          i(t.throw(e));
                        } catch (e) {
                          o(e);
                        }
                      },
                      i = function (n) {
                        return n.done
                          ? e(n.value)
                          : Promise.resolve(n.value).then(r, a);
                      };
                    i((t = t.apply(n, null)).next());
                  })
                );
                var n, t;
              },
              isSubscribed: l,
            }
          );
        },
      }),
      r = n._export_sfc(o, [
        [
          "render",
          function (e, t, o, r, a, i) {
            return n.e(
              { a: e.showPop },
              e.showPop
                ? {
                    b: n.o(function () {
                      return e.handleClose && e.handleClose.apply(e, arguments);
                    }, 2360),
                    c: n.o(function () {
                      return e.handleClose && e.handleClose.apply(e, arguments);
                    }, 2361),
                    d: e.radarSweepIcon,
                    e: n.f(e.radarDots, function (e, t, o) {
                      return {
                        a: n.t(e.text),
                        b: e.id,
                        c: n.n("radar-dot--".concat(e.id)),
                        d: n.n({ "radar-dot--show": e.show }),
                      };
                    }),
                    f: n.t(
                      e.isSubscribed ? "立即开启" : "关注公众号，立即开启"
                    ),
                    g: n.n(e.lite ? "lite-style" : ""),
                    h: n.o(function () {
                      return (
                        e.handleConfirm && e.handleConfirm.apply(e, arguments)
                      );
                    }, 2362),
                    i: n.n({ "bottom-style": e.hasBottom }),
                    j: n.n("theme-".concat(e.currentTheme)),
                    k: n.n({ lite: e.lite }),
                    l: n.o(function () {}, 2363),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-71da7849"],
      ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.js",
  }
);
require("pages/asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.js");
