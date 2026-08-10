$gwx4_XC_9 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_9 || [];
    function gz$gwx4_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_9 = true;
    var x = [
      "./pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_9_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx4_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.wxml"
  ] = [
    $gwx4_XC_9,
    "./pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.wxml",
  ];
else
  __wxAppCode__[
    "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.wxml"
  ] = $gwx4_XC_9(
    "./pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.wxml"
  );
__wxRoute =
  "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.js";
define(
  "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.js",
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
    require("../../../../../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      n = Object.defineProperty,
      r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable,
      i = function (t, e, r) {
        return e in t
          ? n(t, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (t[e] = r);
      },
      c = function (t, n) {
        for (var c in n || (n = {})) o.call(n, c) && i(t, c, n[c]);
        if (r) {
          var u,
            l = e(r(n));
          try {
            for (l.s(); !(u = l.n()).done; ) {
              c = u.value;
              a.call(n, c) && i(t, c, n[c]);
            }
          } catch (t) {
            l.e(t);
          } finally {
            l.f();
          }
        }
        return t;
      },
      u = require("../../../../../../common/vendor.js"),
      l = require("../constants.js"),
      s = u.defineComponent({
        setup: function (e, n) {
          var r = this,
            o =
              (n.emit, u.getCurrentInstance().proxy || u.getCurrentInstance()),
            a = u.ref(l.DEFAULT_SETTING.indicatorCount),
            i = u.computed(function () {
              return ["ma", "ema", "boll", "sar"].map(function (t) {
                return { key: t, value: t.toUpperCase() };
              });
            }),
            s = u.computed(function () {
              var t = l.INDICATOR.slice(0, 13).map(function (t, e) {
                  return { key: t, value: l.INDICATOR_TEXT[e] };
                }),
                e = l.INDICATOR.indexOf("rally");
              return -1 !== e && t.splice(e, 1), t;
            }),
            d = function () {
              u.StockBridge.setStorage(l.CHART_SETTING, o.setting),
                u.StockBridge.busEmit("market-chartSetting-Update", {
                  key: "indicatorCount",
                  setting: o.setting,
                });
            };
          return (
            u.onMounted(function () {
              if (
                (u.StockBridge.setTitle({ title: "K线设置" }),
                (o.localSetting = u.StockBridge.getStorage(l.CHART_SETTING)),
                "string" == typeof o.localSetting)
              )
                try {
                  o.localSetting = JSON.parse(o.localSetting);
                } catch (t) {
                  o.localSetting = {};
                }
              (o.setting = c(c({}, l.DEFAULT_SETTING), o.localSetting)),
                (a.value = o.setting.indicatorCount);
            }),
            {
              indicatorCount: a,
              mainIndicators: i,
              indicators: s,
              updateSetting: d,
              gotoParams: function (e) {
                return (
                  (n = r),
                  null,
                  (o = t().mark(function n() {
                    var r;
                    return t().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            u.StockBridge.report(
                              "hq.stock_detail.chart_setting_".concat(
                                e,
                                "_click"
                              )
                            ),
                              (r = ["ma", "volume", "cje", "ema"].includes(e)
                                ? "chartSettingAvg"
                                : "chartSettingParams"),
                              u.StockRouter.routeTo({
                                name: r,
                                query: { type: e },
                              });
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, n);
                  })),
                  new Promise(function (t, e) {
                    var r = function (t) {
                        try {
                          i(o.next(t));
                        } catch (t) {
                          e(t);
                        }
                      },
                      a = function (t) {
                        try {
                          i(o.throw(t));
                        } catch (t) {
                          e(t);
                        }
                      },
                      i = function (e) {
                        return e.done
                          ? t(e.value)
                          : Promise.resolve(e.value).then(r, a);
                      };
                    i((o = o.apply(n, null)).next());
                  })
                );
                var n, o;
              },
              changeIndicatorCount: function (t) {
                (a.value = t), (o.setting.indicatorCount = t), d();
              },
            }
          );
        },
      }),
      d = u._export_sfc(s, [
        [
          "render",
          function (t, e, n, r, o, a) {
            return {
              a: u.f(t.mainIndicators, function (e, n, r) {
                return {
                  a: u.t(e.value),
                  b: n === t.mainIndicators.length - 1 ? 1 : "",
                  c: "main_".concat(e.key),
                  d: u.o(
                    function (n) {
                      return t.gotoParams(e.key);
                    },
                    486,
                    "main_".concat(e.key)
                  ),
                };
              }),
              b: 1 === t.indicatorCount ? 1 : "",
              c: u.o(function (e) {
                return t.changeIndicatorCount(1);
              }, 487),
              d: 2 === t.indicatorCount ? 1 : "",
              e: u.o(function (e) {
                return t.changeIndicatorCount(2);
              }, 488),
              f: 3 === t.indicatorCount ? 1 : "",
              g: u.o(function (e) {
                return t.changeIndicatorCount(3);
              }, 489),
              h: 4 === t.indicatorCount ? 1 : "",
              i: u.o(function (e) {
                return t.changeIndicatorCount(4);
              }, 490),
              j: u.f(t.indicators, function (e, n, r) {
                return {
                  a: u.t(e.value),
                  b: n === t.indicators.length - 1 ? 1 : "",
                  c: e.key,
                  d: u.o(
                    function (n) {
                      return t.gotoParams(e.key);
                    },
                    491,
                    e.key
                  ),
                };
              }),
            };
          },
        ],
        ["__scopeId", "data-v-48a1dd44"],
      ]);
    wx.createComponent(d);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.js",
  }
);
require("pages/quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.js");
