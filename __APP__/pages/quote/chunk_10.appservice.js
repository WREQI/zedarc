$gwx4_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_2 || [];
    function gz$gwx4_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div inverse-page-container data-v-e660b986"]);
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([3, "data-v-e660b986"]);
        Z([3, "e660b986-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "e660b986-1"]);
        Z([[4], [[5], [1, "d"]]]);
        Z([[6], [[7], [3, "$slots"]], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_2 = true;
    var x = ["./pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_2_1();
      var hEQ = _n("view");
      _rz(z, hEQ, "class", 0, e, s, gg);
      var oFQ = _v();
      _(hEQ, oFQ);
      if (_oz(z, 1, e, s, gg)) {
        oFQ.wxVkey = 1;
        var cGQ = _mz(
          z,
          "inverse-rate",
          ["bind:__l", 2, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oFQ, cGQ);
      } else {
        oFQ.wxVkey = 2;
        var oHQ = _mz(
          z,
          "no-data",
          ["bind:__l", 6, "class", 1, "uI", 2, "uS", 3],
          [],
          e,
          s,
          gg
        );
        var lIQ = _v();
        _(oHQ, lIQ);
        if (_oz(z, 10, e, s, gg)) {
          lIQ.wxVkey = 1;
          var aJQ = _n("slot");
          _(lIQ, aJQ);
        } else {
          lIQ.wxVkey = 2;
        }
        lIQ.wxXCkey = 1;
        _(oFQ, oHQ);
      }
      oFQ.wxXCkey = 1;
      oFQ.wxXCkey = 3;
      oFQ.wxXCkey = 3;
      _(r, hEQ);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx4_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml"] = [
    $gwx4_XC_2,
    "./pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml",
  ];
else
  __wxAppCode__["pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml"] =
    $gwx4_XC_2("./pages/quote/@tencent/wzq-lite-mergenews/Ratepage.wxml");
__wxRoute = "pages/quote/@tencent/wzq-lite-mergenews/Ratepage";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/quote/@tencent/wzq-lite-mergenews/Ratepage.js";
define(
  "pages/quote/@tencent/wzq-lite-mergenews/Ratepage.js",
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
    var t = require("api.js"),
      e = require("../../../../common/vendor.js"),
      n = {
        props: ["symbol"],
        inject: ["hqBridge"],
        components: {
          NoData: function () {
            return "./common/NoData.js";
          },
          InverseRate: function () {
            return "./components/InverseRate.js";
          },
        },
        data: function () {
          return { chartData: [], jgList: [] };
        },
        computed: {},
        mounted: function () {
          var t = this;
          this.symbol
            ? this.getInvestRateData(this.symbol)
            : this.$watch(
                function () {
                  return t.$route.query;
                },
                function () {
                  var e = t.$route.query.symbol;
                  t.getInvestRateData(e);
                },
                { immediate: !0 }
              );
        },
        methods: {
          getInvestRateData: function (e) {
            var n = this;
            t.getInvestRate(this.hqBridge, e)
              .then(function (t) {
                var e = t || {},
                  a = e.pjtj,
                  r = void 0 === a ? {} : a,
                  o = e.jgpj,
                  s = (void 0 === o ? {} : o).info,
                  i = void 0 === s ? [] : s;
                n.jgList = i;
                var c = [];
                (c[0] = r.mc || { name: "卖出", num: 0 }),
                  (c[1] = r.jc || { name: "减持", num: 0 }),
                  (c[2] = r.zx || { name: "中性", num: 0 }),
                  (c[3] = r.zc || { name: "增持", num: 0 }),
                  (c[4] = r.mr || { name: "买入", num: 0 }),
                  (n.chartData = [].concat(c));
              })
              .catch(function (t) {});
          },
        },
      };
    Array ||
      (e.resolveComponent("InverseRate") + e.resolveComponent("NoData"))();
    var a = e._export_sfc(n, [
      [
        "render",
        function (t, n, a, r, o, s) {
          return e.e(
            { a: o.chartData.length > 0 },
            o.chartData.length > 0
              ? {
                  b: e.p({
                    isRep: !1,
                    chartData: o.chartData,
                    jgList: o.jgList,
                  }),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-e660b986"],
    ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/quote/@tencent/wzq-lite-mergenews/Ratepage.js",
  }
);
require("pages/quote/@tencent/wzq-lite-mergenews/Ratepage.js");
