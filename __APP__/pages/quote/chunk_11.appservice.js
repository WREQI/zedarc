$gwx4_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_3 || [];
    function gz$gwx4_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_1;
    }
    function gz$gwx4_XC_3_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div report-inverate data-v-c3995fc3"]);
        Z([[7], [3, "c"]]);
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([3, "data-v-c3995fc3"]);
        Z([3, "c3995fc3-0"]);
        Z(z[1]);
        Z([[7], [3, "e"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_3_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_3 = true;
    var x = [
      "./pages/quote/@tencent/wzq-lite-mergenews/common/NoData.wxml",
      "./pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_3_1();
      var eLQ = _n("slot");
      _(r, eLQ);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_3_2();
      var oNQ = _n("view");
      _rz(z, oNQ, "class", 0, e, s, gg);
      var xOQ = _v();
      _(oNQ, xOQ);
      if (_oz(z, 1, e, s, gg)) {
        xOQ.wxVkey = 1;
        var fQQ = _mz(
          z,
          "f2",
          ["bind:__l", 2, "bindonInit", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(xOQ, fQQ);
      }
      var oPQ = _v();
      _(oNQ, oPQ);
      if (_oz(z, 7, e, s, gg)) {
        oPQ.wxVkey = 1;
      }
      xOQ.wxXCkey = 1;
      xOQ.wxXCkey = 3;
      oPQ.wxXCkey = 1;
      _(r, oNQ);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx4_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/quote/@tencent/wzq-lite-mergenews/common/NoData.wxml"] =
    [
      $gwx4_XC_3,
      "./pages/quote/@tencent/wzq-lite-mergenews/common/NoData.wxml",
    ];
else
  __wxAppCode__["pages/quote/@tencent/wzq-lite-mergenews/common/NoData.wxml"] =
    $gwx4_XC_3("./pages/quote/@tencent/wzq-lite-mergenews/common/NoData.wxml");
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate.wxml"
  ] = [
    $gwx4_XC_3,
    "./pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate.wxml",
  ];
else
  __wxAppCode__[
    "pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate.wxml"
  ] = $gwx4_XC_3(
    "./pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate.wxml"
  );
__wxRoute = "pages/quote/@tencent/wzq-lite-mergenews/common/NoData";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/quote/@tencent/wzq-lite-mergenews/common/NoData.js";
define(
  "pages/quote/@tencent/wzq-lite-mergenews/common/NoData.js",
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
    var e = require("../../../../../common/vendor.js")._export_sfc(
      { name: "noData" },
      [
        [
          "render",
          function (e, r, n, o, t, a) {
            return {};
          },
        ],
        ["__scopeId", "data-v-107d7a23"],
      ]
    );
    wx.createComponent(e);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/quote/@tencent/wzq-lite-mergenews/common/NoData.js",
  }
);
require("pages/quote/@tencent/wzq-lite-mergenews/common/NoData.js");
__wxRoute = "pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate.js";
define(
  "pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate.js",
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
    var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
      e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      r = Object.defineProperty,
      i = Object.defineProperties,
      n = Object.getOwnPropertyDescriptors,
      o = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      s = Object.prototype.propertyIsEnumerable,
      c = function (t, e, i) {
        return e in t
          ? r(t, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (t[e] = i);
      },
      u = function (t, r) {
        for (var i in r || (r = {})) a.call(r, i) && c(t, i, r[i]);
        if (o) {
          var n,
            u = e(o(r));
          try {
            for (u.s(); !(n = u.n()).done; ) {
              i = n.value;
              s.call(r, i) && c(t, i, r[i]);
            }
          } catch (t) {
            u.e(t);
          } finally {
            u.f();
          }
        }
        return t;
      },
      l = function (t, e) {
        return i(t, n(e));
      },
      h = require("../../../../../common/vendor.js"),
      p = {
        inject: ["hqBridge", "fontSkin"],
        props: ["symbol", "chartData", "jgList", "isRep"],
        components: {
          f2: function () {
            return "../../../../detailSbg/@tencent/stock-union-f2/f2MP.js";
          },
        },
        data: function () {
          return {
            showList: [],
            Dayjs: h.dayjs,
            chartConfig: { title: "机构评级" },
          };
        },
        computed: {
          themeColor: function () {
            return "mp" === this.hqBridge.ENV
              ? { bigRed: "#E63535" }
              : {
                  bigRed:
                    getComputedStyle(document.documentElement)
                      .getPropertyValue("--color-red")
                      .trim() || "#E63535",
                };
          },
        },
        mounted: function () {
          var t = this.isRep ? this.jgList.slice(0, 3) : this.jgList,
            e = new h.dayjs().format("YYYY");
          this.showList = t.map(function (t) {
            var r = h.dayjs(t.fbrq).format("YYYY");
            return l(u({}, t), {
              time:
                e === r
                  ? h.dayjs(t.fbrq).format("MM-DD")
                  : h.dayjs(t.fbrq).format("YYYY-MM-DD"),
            });
          });
        },
        methods: {
          goNewsdetail: function (t) {
            var e = (this.showList[t] || {}).ybInfo || {},
              r = e.id,
              i = e.type;
            if (r) {
              var n;
              n =
                "mp" === this.hqBridge.ENV
                  ? "/pages/newsCon/newsDetail/main"
                  : "/information/detail";
              var o = { id: r, zxtype: i };
              this.hqBridge.routeTo({ path: n, query: o });
            }
          },
          goDeatil: function () {
            this.hqBridge.report("hq.stock_detai_report_jgpj_more_click");
            var t;
            (t =
              "mp" === this.hqBridge.ENV
                ? "/pages/detailSbg/jgrate"
                : h.isBroker && "DAFENG" !== h.isBroker
                ? "/wj_hq/detail/jgrate"
                : "/detail/jgrate"),
              this.hqBridge.routeTo({
                path: t,
                query: { symbol: this.symbol },
              });
          },
          onInitChart: function (e) {
            var r = this,
              i = e.chart,
              n = this.chartData.map(function (t) {
                return t.num;
              }),
              o = Math.max.apply(Math, t(n)),
              a = this.chartData.map(function (t) {
                return l(u({}, t), { num: t.num || 0.01 * o });
              });
            i.tooltip(!1),
              i.axis("num", { grid: null, label: null }),
              i.legend(!1),
              i.source(a),
              i
                .interval()
                .position("name*num")
                .color("name", [
                  "#1CAA3D",
                  "#C1CF25",
                  "#E6962F",
                  "#EA5F28",
                  this.themeColor.bigRed,
                ])
                .size(26),
              i.render();
            var s = i.get("canvas").addGroup(),
              c = {};
            if (
              (this.chartData.forEach(function (t) {
                var e = i.getPosition(t),
                  n = s.addShape("text", {
                    attrs: {
                      x: e.x,
                      y: e.y + -5,
                      text: t.num,
                      textAlign: "center",
                      textBaseline: "bottom",
                      fill: "#5F6F7C",
                      fontFamily: "west" === r.fontSkin ? "stockFont" : "",
                    },
                  });
                c[t.name] = n;
              }),
              "mp" !== this.hqBridge.ENV)
            )
              return i;
          },
        },
      };
    Array || h.resolveComponent("f2")();
    var f = h._export_sfc(p, [
      [
        "render",
        function (t, e, r, i, n, o) {
          return h.e(
            { a: r.isRep },
            (r.isRep, {}),
            {
              b: h.o(o.onInitChart, 2232),
              c: h.p({
                chartId: "inverserate",
                cClass: "rate-column",
                cStyle: "width: 100%; height: 293rpx",
                config: n.chartConfig,
              }),
              d: h.f(n.showList, function (t, e, r) {
                return {
                  a: h.t(t.jgjc),
                  b: h.t(t.tzpj),
                  c: h.t(t.time),
                  d: t.jgjc + e,
                  e: h.o(
                    function (t) {
                      return o.goNewsdetail(e);
                    },
                    2233,
                    t.jgjc + e
                  ),
                };
              }),
              e: r.isRep && r.jgList.length > 3,
            },
            r.isRep && r.jgList.length > 3
              ? {
                  f: h.o(function () {
                    return o.goDeatil && o.goDeatil.apply(o, arguments);
                  }, 2234),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-c3995fc3"],
    ]);
    wx.createComponent(f);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate.js",
  }
);
require("pages/quote/@tencent/wzq-lite-mergenews/components/InverseRate.js");
