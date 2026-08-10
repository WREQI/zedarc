$gwx1_XC_28 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_28 || [];
    function gz$gwx1_XC_28_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "f"]]);
        Z([3, "_div information-detail-apply data-v-063f67e2"]);
        Z([[7], [3, "b"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_28 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_28 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_28_1();
      var oNJ = _v();
      _(r, oNJ);
      if (_oz(z, 0, e, s, gg)) {
        oNJ.wxVkey = 1;
        var xOJ = _mz(z, "view", ["bindtap", 1, "class", 1], [], e, s, gg);
        var oPJ = _v();
        _(xOJ, oPJ);
        if (_oz(z, 3, e, s, gg)) {
          oPJ.wxVkey = 1;
        }
        oPJ.wxXCkey = 1;
        _(oNJ, xOJ);
      }
      oNJ.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_28";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_28();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml"
  ] = [
    $gwx1_XC_28,
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml"
  ] = $gwx1_XC_28(
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.wxml"
  );
__wxRoute =
  "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.js";
define(
  "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.js",
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
    var t = require("../../../../../../../../common/vendor.js"),
      e = {
        name: "InformationDetailApply",
        props: { premote: { type: Object, default: null } },
        data: function () {
          return {
            advConfig: null,
            advPicInfo: {},
            advTextInfo: {},
            showAdv: !1,
          };
        },
        computed: {
          iconPic: function () {
            return (
              this.advPicInfo.icon_pic ||
              this.advPicInfo.material_pic ||
              "https://st.gtimg.com/wuji/pics/wzq_operation_test/tLgiDIhG.png"
            );
          },
        },
        watch: {
          premote: {
            immediate: !0,
            deep: !0,
            handler: function (e) {
              var i = this;
              e &&
                this.$nextTick(function () {
                  var o, n, d, r;
                  e.ad_list &&
                    e.ad_list.length > 0 &&
                    ((i.advConfig = e.ad_list[0]),
                    (i.advPicInfo =
                      (null ==
                      (n = null == (o = t.StockBridge) ? void 0 : o.deliverySdk)
                        ? void 0
                        : n.deliveryFormatPic(e)) || {}),
                    (i.advTextInfo =
                      (null ==
                      (r = null == (d = t.StockBridge) ? void 0 : d.deliverySdk)
                        ? void 0
                        : r.deliveryFormatText(e)) || {}),
                    i.advConfig &&
                      ((i.showAdv = !0),
                      i.$nextTick(function () {
                        i.reportShow();
                      })));
                });
            },
          },
        },
        methods: {
          reportShow: function () {
            var e, i;
            null ==
              (i = null == (e = t.StockBridge) ? void 0 : e.deliverySdk) ||
              i.deliveryMtaAndRport(this.premote, "brow");
          },
          clickAdv: function () {
            var e, i, o, n;
            null ==
              (i = null == (e = t.StockBridge) ? void 0 : e.deliverySdk) ||
              i.deliveryMtaAndRport(this.premote, "click"),
              null ==
                (n = null == (o = t.StockBridge) ? void 0 : o.deliverySdk) ||
                n.deliveryDoJump(this.premote);
          },
        },
      },
      i = t._export_sfc(e, [
        [
          "render",
          function (e, i, o, n, d, r) {
            return t.e(
              { a: d.showAdv },
              d.showAdv
                ? t.e({ b: r.iconPic }, r.iconPic ? { c: r.iconPic } : {}, {
                    d: t.t(d.advTextInfo.main_text),
                    e: t.t(d.advTextInfo.button_text || d.advTextInfo.sub_text),
                    f: t.o(function () {
                      return r.clickAdv && r.clickAdv.apply(r, arguments);
                    }, 4382),
                  })
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-063f67e2"],
      ]);
    wx.createComponent(i);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.js",
  }
);
require("pages/asyncCom/@tencent/st-act-premotes/src/components/delivery/InformationDetailApply/index.js");
