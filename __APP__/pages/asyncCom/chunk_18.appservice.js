$gwx1_XC_10 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_10 || [];
    function gz$gwx1_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_10 = true;
    var x = [
      "./pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_10_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_10();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml"
  ] = [
    $gwx1_XC_10,
    "./pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml"
  ] = $gwx1_XC_10(
    "./pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.wxml"
  );
__wxRoute = "pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.js";
define(
  "pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.js",
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
    require("../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../common/vendor.js"),
      t = {
        name: "detailDialog",
        props: {
          premote: {
            type: Object,
            default: function () {
              return {};
            },
          },
          isShow: { type: Boolean, default: !1 },
        },
        inject: ["stockBridge"],
        data: function () {
          return {
            premoteNew: {},
            advConfig: {},
            advPicInfo: {},
            advTextInfo: {},
            advContainer: "",
          };
        },
        computed: {
          showAdv: function () {
            var e, t;
            return (
              (null == (e = this.advPicInfo) ? void 0 : e.ad_pic) &&
              (null == (t = this.advTextInfo) ? void 0 : t.main_text)
            );
          },
        },
        watch: {
          premote: {
            immediate: !0,
            handler: function (t) {
              var i;
              if (
                t &&
                ((this.premoteNew = t), t.ad_list && t.ad_list.length > 0)
              )
                try {
                  this.advConfig = t.ad_list[0];
                  var n = this.getCurParent();
                  (this.advPicInfo = n.deliveryFormatPic(this.premoteNew)),
                    (this.advTextInfo = n.deliveryFormatText(this.premoteNew));
                  var o = this.premoteNew.component_info;
                  (o = JSON.parse(o || "{}")),
                    (this.advContainer = o.position_name),
                    null == (i = this.stockBridge) ||
                      i.busOn(
                        e.eventList.COMMON_MARQUEE_EVENT,
                        this.advShowHandle
                      );
                } catch (n) {}
            },
          },
          isShow: function (e) {
            e && this.reportShow();
          },
        },
        methods: {
          getCurParent: function () {
            var t, i;
            return [e.EnvTypeEnum.WZQ, e.EnvTypeEnum.WZQ_LITE].includes(
              null == (t = this.stockBridge) ? void 0 : t.ENV
            )
              ? this
              : null == (i = this.$parent)
              ? void 0
              : i.$parent;
          },
          reportShow: function () {
            var e = this.getCurParent(),
              t =
                (null == e
                  ? void 0
                  : e.deliveryFormatStatName(this.premoteNew, "brow")) ||
                "yy.marquee.adv_show";
            null == e || e.deliveryReportMta(e, this.premoteNew, t),
              null == e || e.reportQianjiGo(e, this.advConfig.dp_ctx, "show");
          },
          clickAdv: function () {
            var e = this.getCurParent(),
              t =
                (null == e
                  ? void 0
                  : e.deliveryFormatStatName(this.premoteNew, "click")) ||
                "yy.global.marquee_click";
            null == e || e.deliveryReportMta(e, this.premoteNew, t),
              null == e || e.reportQianjiGo(e, this.advConfig.dp_ctx, "click"),
              null == e || e.deliveryDoJump(this.$parent, this.premoteNew);
          },
          advShowHandle: function (e) {
            var t,
              i = this;
            "restNoticeDialogShow" ===
              (null == (t = null == e ? void 0 : e.data) ? void 0 : t.type) &&
              this.$nextTick(function () {
                var e,
                  t = document.querySelector(i.advContainer);
                0 ===
                  (null == (e = null == t ? void 0 : t.children)
                    ? void 0
                    : e.length) &&
                  t &&
                  t.insertAdjacentElement("beforeend", i.$el);
              });
          },
        },
      },
      i = e._export_sfc(t, [
        [
          "render",
          function (t, i, n, o, r, a) {
            return {
              a: r.advPicInfo.icon_pic,
              b: e.t(r.advTextInfo.main_text),
              c: e.o(function () {
                return a.clickAdv && a.clickAdv.apply(a, arguments);
              }, 1370),
            };
          },
        ],
        ["__scopeId", "data-v-41363d9b"],
      ]);
    wx.createComponent(i);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.js",
  }
);
require("pages/asyncCom/@tencent/stock-base-marquee/components/dialogAdv.js");
