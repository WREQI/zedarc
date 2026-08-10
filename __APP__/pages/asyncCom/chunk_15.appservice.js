$gwx1_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_7 || [];
    function gz$gwx1_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "yy-redpocket-choose"]], [1, "r"]],
            [[7], [3, "c"]],
          ],
        ]);
        Z([3, "95586d36-0"]);
        Z([[7], [3, "d"]]);
        Z([3, "redbagBox"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1;
    }
    function gz$gwx1_XC_7_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_7 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml",
      "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_7_1();
      var tEB = _v();
      _(r, tEB);
      if (_oz(z, 0, e, s, gg)) {
        tEB.wxVkey = 1;
        var eFB = _mz(
          z,
          "redbag",
          ["bind:__l", 1, "class", 1, "uI", 2, "uP", 3, "uR", 4],
          [],
          e,
          s,
          gg
        );
        _(tEB, eFB);
      }
      tEB.wxXCkey = 1;
      tEB.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_7_2();
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml"
  ] = [
    $gwx1_XC_7,
    "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml"
  ] = $gwx1_XC_7(
    "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml"
  ] = [
    $gwx1_XC_7,
    "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml"
  ] = $gwx1_XC_7(
    "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml"
  );
__wxRoute =
  "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.js";
define(
  "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.js",
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
    var e = require("../../../../../../common/vendor.js"),
      t = require("../../../stock-base/visibilityObserver/index.js"),
      o = require("../../utils/util.js"),
      c = { sz: 0, sh: 1 },
      r = null,
      s = null,
      i = {
        props: {
          stock: { type: Object, default: function () {} },
          scode: { type: String, default: "" },
          type: { type: String, default: "" },
          name: { type: String, default: "" },
          chooseSymbol: { type: String, default: "" },
          redpockets: {
            type: Array,
            default: function () {
              return [];
            },
          },
        },
        components: {
          redbag: function () {
            return "./redbag.js";
          },
        },
        data: function () {
          return { show: !1, curStock: {} };
        },
        computed: {
          stockNameClass: function () {
            return "yy-redpocket-choose yy-redpocket-choose-"
              .concat(this.curStock.scode || this.curStock.code)
              .concat(this.curStock.type || this.curStock.market);
          },
        },
        methods: {
          initStock: function () {
            this.scode && this.type && this.name && this.chooseSymbol
              ? (this.curStock = {
                  scode: this.scode,
                  type: this.type,
                  name: this.name,
                  chooseSymbol: this.chooseSymbol,
                })
              : (this.curStock = this.stock);
          },
          isAwardStock: function () {
            if (this.checkedTodayRedpacketClosed()) return !1;
            var e = this.curStock,
              t = this.formatRedpacketData();
            return o.isIndex(
              e.scode || e.c || e.code,
              e.type || e.m || e.market
            ) &&
              t &&
              t.index
              ? !this.getRedbagClickedStatus("hq") && o.sameStock(t.index, e)
              : !(!t || !t.stock) &&
                  !this.getRedbagClickedStatus("choose-stock") &&
                  o.sameStock(t.stock, e);
          },
          formatRedpacketData: function () {
            var t = this,
              r = {};
            if (this.redpockets && this.redpockets.length) {
              var s = [];
              this.redpockets.forEach(function (e) {
                var i = e.stock_code.substring(0, 2),
                  n = e.stock_code.substring(2),
                  a = c[i];
                0 == +e.has_awarded &&
                  Number.isInteger(a) &&
                  (o.isIndex(n, a)
                    ? ((t.stockType = "hq"),
                      t.getRedbagClickedStatus("hq") ||
                        (r = t.setAwardData(r, "index", n, a, e.timepoint)))
                    : ((t.stockType = "choose-stock"),
                      t.getRedbagClickedStatus("choose-stock") ||
                        (r = t.setAwardData(r, "stock", n, a, e.timepoint))),
                  s.push({
                    market: a,
                    code: n,
                    timepoint: e.timepoint,
                    notice_type: e.notice_type,
                  }));
              }),
                s &&
                  s.length &&
                  e.StockBridge.setSession("bodong/awardStock", s);
            }
            return r;
          },
          checkedTodayRedpacketClosed: function () {
            if (void 0 !== e.StockBridge.store.yyRedpacketCloseToday)
              return e.StockBridge.store.yyRedpacketCloseToday;
            var t = e.dayjs(new Date()).format("YYYYMMDD"),
              o = e.StockBridge.getStorage("yy.redpacket.close_today"),
              c = o && o[t];
            return (e.StockBridge.store.yyRedpacketCloseToday = c), c;
          },
          getRedbagClickedStatus: function (t) {
            var o = e.dayjs().format("YYYYMMDD"),
              c = "";
            return (
              void 0 !== e.StockBridge.store.yyRedpacketClicked
                ? (c = e.StockBridge.store.yyRedpacketClicked)
                : ((c = e.StockBridge.getStorage("bodong_redbag_clicked")),
                  (e.StockBridge.store.yyRedpacketClicked = c)),
              c && c[o] ? c[o][t] : null
            );
          },
          setAwardData: function (e, t, o, c, r) {
            return (
              e || (e = {}), (e[t] = { code: o, market: c, timepoint: r }), e
            );
          },
          reportStockClickEvent: function (t) {
            var o = "yy.bodong2.selected_".concat(
              this.otherScreenBrow ? "other" : "first",
              "screenredpacket_click"
            );
            e.StockBridge.report(o, { yy_public_str1: t.name });
          },
          waveActivityEventON: function () {
            var c = this;
            e.StockBridge.busOn("market-choose.stock.clicked", function (e) {
              c.curStock.chooseSymbol === e.chooseSymbol &&
                (c.reportStockClickEvent(e),
                o.setClickedStatus(c.stockType),
                setTimeout(function () {
                  c.show = !1;
                }, 300));
            }),
              this.$nextTick(function () {
                (r = new t.VisibilityObserver(
                  ".yy-redpocket-choose",
                  {
                    once: !0,
                    callback: function (t, o) {
                      t &&
                        !c.browReport &&
                        (!c.otherScreenBrow && s && clearTimeout(s),
                        e.StockBridge.report(
                          "yy.bodong2.selected_".concat(
                            c.otherScreenBrow ? "other" : "first",
                            "screenredpacket_brow"
                          ),
                          { yy_public_str1: c.curStock.name }
                        ),
                        (c.browReport = !0));
                    },
                    intersection: { threshold: 0 },
                  },
                  c
                )),
                  (s = setTimeout(function () {
                    c.otherScreenBrow = !0;
                  }, 1e3));
              });
          },
        },
        created: function () {
          this.initStock(),
            (this.show = this.isAwardStock()),
            this.show && this.waveActivityEventON();
        },
        beforeDestroy: function () {
          var t, o;
          e.StockBridge.busOff("market-choose.stock.clicked"),
            null ==
              (o =
                null == (t = null == r ? void 0 : r.observer)
                  ? void 0
                  : t.disconnect) || o.call(t),
            (r = null),
            s && clearTimeout(s);
        },
      };
    Array || e.resolveComponent("redbag")();
    var n = e._export_sfc(i, [
      [
        "render",
        function (t, o, c, r, s, i) {
          return e.e(
            { a: s.show },
            s.show
              ? {
                  b: e.sr("redbagBox", "95586d36-0"),
                  c: e.n(i.stockNameClass),
                  d: e.p({ animation: !0 }),
                }
              : {}
          );
        },
      ],
    ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.js",
  }
);
require("pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.js");
__wxRoute =
  "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.js";
define(
  "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.js",
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
    var n = require("../../../../../../common/vendor.js")._export_sfc(
      {
        props: ["animation"],
        data: function () {
          return { isLite: !1, isMina: !1 };
        },
      },
      [
        [
          "render",
          function (n, i, e, t, a, r) {
            return {
              a: e.animation ? 1 : "",
              b: a.isLite ? 1 : "",
              c: a.isMina ? 1 : "",
            };
          },
        ],
        ["__scopeId", "data-v-4a95cd23"],
      ]
    );
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.js",
  }
);
require("pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.js");
