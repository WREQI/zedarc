$gwx3_XC_25 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_25 || [];
    function gz$gwx3_XC_25_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_25_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_25_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_25_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "o"]]);
        Z([[7], [3, "n"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [[5], [[5], [1, "_div"]], [1, "data-v-41c33499"]],
                [1, "etf-tip-modal"],
              ],
              [[7], [3, "l"]],
            ],
            [[7], [3, "m"]],
          ],
        ]);
        Z([[7], [3, "k"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-41c33499"]],
              [1, "etf-modal-container"],
            ],
            [[7], [3, "j"]],
          ],
        ]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "i"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_25_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_25_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_25 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_25 = true;
    var x = ["./pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_25_1();
      var bI2 = _mz(
        z,
        "view",
        ["catchtap", 0, "catchtouchmove", 1, "class", 1],
        [],
        e,
        s,
        gg
      );
      var oJ2 = _mz(z, "view", ["catchtap", 3, "class", 1], [], e, s, gg);
      var xK2 = _v();
      _(oJ2, xK2);
      if (_oz(z, 5, e, s, gg)) {
        xK2.wxVkey = 1;
      }
      var oL2 = _v();
      _(oJ2, oL2);
      if (_oz(z, 6, e, s, gg)) {
        oL2.wxVkey = 1;
      }
      var fM2 = _v();
      _(oJ2, fM2);
      if (_oz(z, 7, e, s, gg)) {
        fM2.wxVkey = 1;
      }
      var cN2 = _v();
      _(oJ2, cN2);
      if (_oz(z, 8, e, s, gg)) {
        cN2.wxVkey = 1;
      }
      var hO2 = _v();
      _(oJ2, hO2);
      if (_oz(z, 9, e, s, gg)) {
        hO2.wxVkey = 1;
      }
      var oP2 = _v();
      _(oJ2, oP2);
      if (_oz(z, 10, e, s, gg)) {
        oP2.wxVkey = 1;
      }
      var cQ2 = _v();
      _(oJ2, cQ2);
      if (_oz(z, 11, e, s, gg)) {
        cQ2.wxVkey = 1;
      }
      xK2.wxXCkey = 1;
      oL2.wxXCkey = 1;
      fM2.wxXCkey = 1;
      cN2.wxXCkey = 1;
      hO2.wxXCkey = 1;
      oP2.wxXCkey = 1;
      cQ2.wxXCkey = 1;
      _(bI2, oJ2);
      _(r, bI2);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_25";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_25();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo.wxml"] =
    [
      $gwx3_XC_25,
      "./pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo.wxml",
    ];
else
  __wxAppCode__["pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo.wxml"] =
    $gwx3_XC_25(
      "./pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo.wxml"
    );
__wxRoute = "pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo.js";
define(
  "pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo.js",
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
    var e = require("../../../../../common/vendor.js"),
      t = {
        inject: ["hqBridge"],
        props: {
          type: { type: String, default: "baseInfo" },
          skin: { type: String, default: "white" },
        },
        data: function () {
          return { isShowTips: !0, canClose: !1 };
        },
        computed: {
          title: function () {
            return {
              baseInfo: "基本信息",
              yjbx: "业绩表现",
              cyr: "持有人结构",
              deal: "交易信息",
              realtime: "持仓占比",
              ylyc: "盈利预测功能说明",
              iopv: "参考净值 (IOPV)",
            }[this.type];
          },
        },
        mounted: function () {
          var e = this;
          "iopv" !== this.type &&
            this.hqBridge.report(
              "hq.stock_detail.".concat(
                "realtime" === this.type ? "asset_realtime" : "etf_tip",
                ".modal_brow"
              ),
              { type: this.type }
            ),
            setTimeout(function () {
              e.canClose = !0;
            }, 300);
        },
        methods: {
          handleClose: function () {
            var e = this;
            this.canClose &&
              ((this.isShowTips = !1),
              setTimeout(function () {
                e.$emit("close");
              }, 300),
              "iopv" !== this.type &&
                this.hqBridge.report("hq.stock_detail.etf_tip.modal_close", {
                  type: this.type,
                }));
          },
        },
      },
      i = e._export_sfc(t, [
        [
          "render",
          function (t, i, o, n, p, s) {
            return e.e(
              {
                a: e.t(s.title),
                b: e.o(function () {
                  return s.handleClose && s.handleClose.apply(s, arguments);
                }, 2464),
                c: "baseInfo" === o.type,
              },
              (o.type, {}),
              { d: "realtime" === o.type },
              (o.type, {}),
              { e: "yjbx" === o.type },
              (o.type, {}),
              { f: "cyr" === o.type },
              (o.type, {}),
              { g: "deal" === o.type },
              (o.type, {}),
              { h: "ylyc" === o.type },
              (o.type, {}),
              { i: "iopv" === o.type },
              (o.type, {}),
              {
                j: e.n(p.isShowTips ? "fade-up" : "fade-down"),
                k: e.o(function () {}, 2465),
                l: e.n(p.isShowTips ? "fade-in" : "fade-out"),
                m: e.n(o.skin + "-theme"),
                n: e.o(function () {}, 2466),
                o: e.o(function () {
                  return s.handleClose && s.handleClose.apply(s, arguments);
                }, 2467),
              }
            );
          },
        ],
        ["__scopeId", "data-v-41c33499"],
      ]);
    wx.createComponent(i);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo.js",
  }
);
require("pages/detailSbg/@tencent/wzq-detail-brief/etf/TipsInfo.js");
