$gwx3_XC_21 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_21 || [];
    function gz$gwx3_XC_21_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_21_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_21_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_21_1 = [];
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
              [[5], [[5], [1, "_div"]], [1, "mod-brief-debt"]],
              [1, "data-v-e6a97050"],
            ],
            [
              [2, "&&"],
              [[7], [3, "l"]],
              [1, "skin-black"],
            ],
          ],
        ]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "h"]]);
        Z([3, "__l"]);
        Z([3, "data-v-e6a97050"]);
        Z([3, "e6a97050-0"]);
        Z([[4], [[5], [1, "d"]]]);
        Z([[6], [[7], [3, "$slots"]], [3, "d"]]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "k"]]);
        Z(z[3]);
        Z([[7], [3, "j"]]);
        Z(z[4]);
        Z([3, "e6a97050-1"]);
        Z(z[9]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_21_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_21_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_21 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_21 = true;
    var x = ["./pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_21_1();
      var o4W = _n("view");
      _rz(z, o4W, "class", 0, e, s, gg);
      var l5W = _v();
      _(o4W, l5W);
      if (_oz(z, 1, e, s, gg)) {
        l5W.wxVkey = 1;
      }
      var a6W = _v();
      _(o4W, a6W);
      if (_oz(z, 2, e, s, gg)) {
        a6W.wxVkey = 1;
        var e8W = _mz(
          z,
          "no-data",
          ["bind:__l", 3, "class", 1, "uI", 2, "uS", 3],
          [],
          e,
          s,
          gg
        );
        var b9W = _v();
        _(e8W, b9W);
        if (_oz(z, 7, e, s, gg)) {
          b9W.wxVkey = 1;
          var o0W = _n("slot");
          _(b9W, o0W);
        } else {
          b9W.wxVkey = 2;
        }
        b9W.wxXCkey = 1;
        _(a6W, e8W);
      }
      var t7W = _v();
      _(o4W, t7W);
      if (_oz(z, 8, e, s, gg)) {
        t7W.wxVkey = 1;
        var xAX = _v();
        _(t7W, xAX);
        if (_oz(z, 9, e, s, gg)) {
          xAX.wxVkey = 1;
          var oBX = _mz(
            z,
            "st-status",
            [
              "bind:__l",
              10,
              "bindhandleError",
              1,
              "class",
              2,
              "uI",
              3,
              "uP",
              4,
            ],
            [],
            e,
            s,
            gg
          );
          _(xAX, oBX);
        }
        xAX.wxXCkey = 1;
        xAX.wxXCkey = 3;
      }
      l5W.wxXCkey = 1;
      a6W.wxXCkey = 1;
      a6W.wxXCkey = 3;
      t7W.wxXCkey = 1;
      t7W.wxXCkey = 3;
      _(r, o4W);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_21";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_21();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt.wxml"] = [
    $gwx3_XC_21,
    "./pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt.wxml"] =
    $gwx3_XC_21("./pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt.wxml");
__wxRoute = "pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt.js";
define(
  "pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt.js",
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
    var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = require("api/index.js"),
      r = require("utils/const.js"),
      a = require("../../../../common/vendor.js"),
      n = {
        inject: ["hqBridge"],
        props: ["symbol", "skin"],
        components: {
          NoData: function () {
            return "./components/NoData.js";
          },
        },
        data: function () {
          return { error: "", data: {} };
        },
        created: function () {
          this.getData();
        },
        methods: {
          retryTab: function () {
            this.$emit("refreshTab"), (this.error = ""), this.getData();
          },
          getData: function () {
            return (
              (a = this),
              null,
              (n = t().mark(function a() {
                var n,
                  o = this;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            e
                              .getDebtData(this.hqBridge, this.symbol)
                              .catch(function (t) {
                                o.$nextTick(function () {
                                  o.$emit("loaded");
                                }),
                                  (o.error = r.COMMON_PAGE_STATUS.ERROR);
                              })
                          );
                        case 3:
                          (n = t.sent),
                            (this.data = n.data[this.symbol]),
                            this.$emit("loaded"),
                            (t.next = 10);
                          break;
                        case 7:
                          (t.prev = 7),
                            (t.t0 = t.catch(0)),
                            this.$emit("loaded");
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  },
                  a,
                  this,
                  [[0, 7]]
                );
              })),
              new Promise(function (t, e) {
                var r = function (t) {
                    try {
                      i(n.next(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  o = function (t) {
                    try {
                      i(n.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  i = function (e) {
                    return e.done
                      ? t(e.value)
                      : Promise.resolve(e.value).then(r, o);
                  };
                i((n = n.apply(a, null)).next());
              })
            );
            var a, n;
          },
        },
      };
    Array || (a.resolveComponent("NoData") + a.resolveComponent("st-status"))();
    var o = a._export_sfc(n, [
      [
        "render",
        function (t, e, r, n, o, i) {
          return a.e(
            { a: o.data && o.data.gpdm },
            o.data && o.data.gpdm
              ? {
                  b: a.t(o.data.gpdm),
                  c: a.t(o.data.zqjc),
                  d: a.t(o.data.zqqc),
                  e: a.t(o.data.jysc),
                  f: a.t(o.data.zqlb),
                  g: a.t(o.data.time_limit),
                }
              : {},
            { h: !o.data && !o.error },
            (o.data || o.error, {}),
            { i: o.error },
            o.error
              ? {
                  j: a.o(function (t) {
                    return i.retryTab();
                  }, 1925),
                  k: a.p({ type: o.error }),
                }
              : {},
            { l: "black" === r.skin ? 1 : "" }
          );
        },
      ],
      ["__scopeId", "data-v-e6a97050"],
    ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt.js",
  }
);
require("pages/detailSbg/@tencent/wzq-detail-brief/BriefDebt.js");
