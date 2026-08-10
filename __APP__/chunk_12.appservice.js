$gwx_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
    function gz$gwx_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [5],
                  [[5], [[5], [1, "_div"]], [1, "st-status"]],
                  [1, "^st-status"],
                ],
                [1, "flex-center"],
              ],
              [1, "data-v-d062569e"],
            ],
            [
              [2, "&&"],
              [[7], [3, "m"]],
              [1, "simple"],
            ],
          ],
        ]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "c"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [5],
                  [[5], [[5], [1, "_div"]], [1, "data-v-d062569e"]],
                  [1, "st-status__error"],
                ],
                [1, "^st-status__error"],
              ],
              [1, "flex-center"],
            ],
            [[7], [3, "l"]],
          ],
        ]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "h"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_4 = true;
    var x = ["./node-modules/@tencent/st-status/mp/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_4_1();
      var lCB = _v();
      _(r, lCB);
      if (_oz(z, 0, e, s, gg)) {
        lCB.wxVkey = 1;
        var aDB = _n("view");
        _rz(z, aDB, "class", 1, e, s, gg);
        var tEB = _v();
        _(aDB, tEB);
        if (_oz(z, 2, e, s, gg)) {
          tEB.wxVkey = 1;
        }
        var eFB = _v();
        _(aDB, eFB);
        if (_oz(z, 3, e, s, gg)) {
          eFB.wxVkey = 1;
          var bGB = _n("view");
          _rz(z, bGB, "class", 4, e, s, gg);
          var oHB = _v();
          _(bGB, oHB);
          if (_oz(z, 5, e, s, gg)) {
            oHB.wxVkey = 1;
          }
          var xIB = _v();
          _(bGB, xIB);
          if (_oz(z, 6, e, s, gg)) {
            xIB.wxVkey = 1;
          }
          var oJB = _v();
          _(bGB, oJB);
          if (_oz(z, 7, e, s, gg)) {
            oJB.wxVkey = 1;
          }
          oHB.wxXCkey = 1;
          xIB.wxXCkey = 1;
          oJB.wxXCkey = 1;
          _(eFB, bGB);
        }
        tEB.wxXCkey = 1;
        eFB.wxXCkey = 1;
        _(lCB, aDB);
      }
      lCB.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["node-modules/@tencent/st-status/mp/index.wxml"] = [
    $gwx_XC_4,
    "./node-modules/@tencent/st-status/mp/index.wxml",
  ];
else
  __wxAppCode__["node-modules/@tencent/st-status/mp/index.wxml"] = $gwx_XC_4(
    "./node-modules/@tencent/st-status/mp/index.wxml"
  );
__wxRoute = "node-modules/@tencent/st-status/mp/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@tencent/st-status/mp/index.js";
define(
  "node-modules/@tencent/st-status/mp/index.js",
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
    var e = require("config.js"),
      t = require("../../../../common/vendor.js"),
      r = {
        props: {
          type: { type: String, required: !0 },
          errorType: { type: String, default: e.COMMON_PAGE_ERROR.NETWORK },
          showErrorTips: { type: Boolean, default: !0 },
          errorTips: { type: String, default: "" },
          showErrorImg: { type: Boolean, default: !0 },
          showBtn: { type: Boolean, default: !0 },
          btnText: { type: String, default: "" },
          isSimpleMode: { type: Boolean, default: !0 },
          position: { type: String, default: e.COMMON_CONTENT_POSITION.CENTER },
        },
        data: function () {
          return {
            COMMON_PAGE_STATUS: e.COMMON_PAGE_STATUS,
            defaultErrorTips: "网络繁忙，请稍后再试",
            fBtnText: this.btnText || "点击刷新",
            COMMON_CONTENT_POSITION: e.COMMON_CONTENT_POSITION,
          };
        },
        computed: {
          imgSrc: function () {
            var t = "https://st.gtimg.com",
              r = "".concat(t, "/design/5243fd9192489c60f7c91c5057542621.png"),
              o = "".concat(t, "/design/7432625ffd16cec84999803161211935.png"),
              n = "".concat(t, "/design/77f4b6848f0e8fecc3320ef981eafeef.png");
            return this.errorType === e.COMMON_PAGE_ERROR.NETWORK
              ? r
              : this.errorType === e.COMMON_PAGE_ERROR.SYSTEM
              ? o
              : this.errorType === e.COMMON_PAGE_ERROR.EMPTY
              ? n
              : r;
          },
        },
        methods: {
          handleBtnClick: function () {
            this.$emit("handleError");
          },
        },
      },
      o = t._export_sfc(r, [
        [
          "render",
          function (e, r, o, n, O, i) {
            return t.e(
              { a: o.type },
              o.type
                ? t.e(
                    { b: o.type === O.COMMON_PAGE_STATUS.LOADING },
                    (o.type, O.COMMON_PAGE_STATUS.LOADING, {}),
                    { c: o.type === O.COMMON_PAGE_STATUS.ERROR },
                    o.type === O.COMMON_PAGE_STATUS.ERROR
                      ? t.e(
                          { d: o.showErrorImg },
                          o.showErrorImg ? { e: i.imgSrc } : {},
                          { f: o.showErrorTips },
                          o.showErrorTips
                            ? { g: t.t(o.errorTips || O.defaultErrorTips) }
                            : {},
                          { h: o.showBtn },
                          o.showBtn
                            ? {
                                i: t.t(O.fBtnText),
                                j: o.isSimpleMode ? 1 : "",
                                k: t.o(function () {
                                  return (
                                    i.handleBtnClick &&
                                    i.handleBtnClick.apply(i, arguments)
                                  );
                                }, 5),
                              }
                            : {},
                          {
                            l: t.n(
                              o.position === O.COMMON_CONTENT_POSITION.TOP
                                ? "st-status__error-top"
                                : ""
                            ),
                          }
                        )
                      : {},
                    { m: o.isSimpleMode ? 1 : "" }
                  )
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-d062569e"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "node-modules/@tencent/st-status/mp/index.js",
  }
);
require("node-modules/@tencent/st-status/mp/index.js");
