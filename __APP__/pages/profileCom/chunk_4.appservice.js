$gwx7_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx7_XC_4 || [];
    function gz$gwx7_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx7_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx7_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx7_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx7_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx7_XC_4_1;
    }
    function gz$gwx7_XC_4_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx7_XC_4_2)
        return __WXML_GLOBAL__.ops_cached.$gwx7_XC_4_2;
      __WXML_GLOBAL__.ops_cached.$gwx7_XC_4_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div"]);
        Z([3, "__l"]);
        Z([3, "41a37e78-0"]);
        Z(z[1]);
        Z([3, "41a37e78-1"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "41a37e78-2"]);
        Z(z[5]);
      })(__WXML_GLOBAL__.ops_cached.$gwx7_XC_4_2);
      return __WXML_GLOBAL__.ops_cached.$gwx7_XC_4_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx7_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx7_XC_4 = true;
    var x = [
      "./pages/profileCom/@tencent/wzq-profile-page/components/cardSetting.wxml",
      "./pages/profileCom/cardSetting.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx7_XC_4_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx7_XC_4_2();
      var ePF = _n("view");
      _rz(z, ePF, "class", 0, e, s, gg);
      var oRF = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(ePF, oRF);
      var xSF = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 3, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(ePF, xSF);
      var bQF = _v();
      _(ePF, bQF);
      if (_oz(z, 5, e, s, gg)) {
        bQF.wxVkey = 1;
        var oTF = _mz(
          z,
          "card-setting",
          ["bind:__l", 6, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(bQF, oTF);
      }
      bQF.wxXCkey = 1;
      bQF.wxXCkey = 3;
      _(r, ePF);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx7_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx7_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/profileCom/@tencent/wzq-profile-page/components/cardSetting.wxml"
  ] = [
    $gwx7_XC_4,
    "./pages/profileCom/@tencent/wzq-profile-page/components/cardSetting.wxml",
  ];
else
  __wxAppCode__[
    "pages/profileCom/@tencent/wzq-profile-page/components/cardSetting.wxml"
  ] = $gwx7_XC_4(
    "./pages/profileCom/@tencent/wzq-profile-page/components/cardSetting.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/profileCom/cardSetting.wxml"] = [
    $gwx7_XC_4,
    "./pages/profileCom/cardSetting.wxml",
  ];
else
  __wxAppCode__["pages/profileCom/cardSetting.wxml"] = $gwx7_XC_4(
    "./pages/profileCom/cardSetting.wxml"
  );
__wxRoute = "pages/profileCom/@tencent/wzq-profile-page/components/cardSetting";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/profileCom/@tencent/wzq-profile-page/components/cardSetting.js";
define(
  "pages/profileCom/@tencent/wzq-profile-page/components/cardSetting.js",
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
    var t = require("../../../../../common/vendor.js"),
      n = require("../hooks/useCardSetting.js"),
      e = {
        props: {
          hasBind: { type: Boolean, default: !1 },
          highestPriorityDealer: {
            type: Object,
            default: function () {
              return {};
            },
          },
          cardSupportVersion: { type: Boolean, default: !1 },
        },
        setup: function (e) {
          var o = (function (e) {
              var o = n.useCardSetting(),
                c = o.checkAccountCardAddState,
                r = o.openAccountCard,
                a = o.accountCardState,
                d = o.opening;
              return {
                checkAccountCardAddState: c,
                openAccountCard: r,
                buttonConfig: t.computed(function () {
                  return e.cardSupportVersion
                    ? a.value === n.AccoundCardState.open
                      ? { text: "已开启", canAdd: !1 }
                      : d.value
                      ? { text: "开启中", canAdd: !1 }
                      : { text: "立即开启", canAdd: !0 }
                    : { text: "当前微信版本不支持", canAdd: !1 };
                }),
                opening: d,
              };
            })(e),
            c = o.openAccountCard,
            r = o.checkAccountCardAddState,
            a = o.buttonConfig,
            d = o.opening,
            u = t.ref(!0),
            i = t.computed(function () {
              var t;
              return e.hasBind
                ? "bg-".concat(
                    (null == (t = e.highestPriorityDealer) ? void 0 : t.code) ||
                      "default"
                  )
                : "bg-default";
            });
          return (
            t.onBeforeMount(function () {
              r(), (u.value = !1);
            }),
            {
              firstUpdate: u,
              checkAccountCardAddState: r,
              openAccountCard: c,
              buttonConfig: a,
              brokerBg: i,
              opening: d,
            }
          );
        },
        onPageShow: function () {
          this.firstUpdate || this.checkAccountCardAddState();
        },
      },
      o = t._export_sfc(e, [
        [
          "render",
          function (n, e, o, c, r, a) {
            return {
              a: t.n(c.brokerBg),
              b: t.t(c.buttonConfig.text),
              c: t.n(c.buttonConfig.canAdd ? "" : "disabled"),
              d: t.n(c.opening ? "opening" : ""),
              e: !c.buttonConfig.canAdd,
              f: t.o(function () {
                return (
                  c.openAccountCard && c.openAccountCard.apply(c, arguments)
                );
              }, 684),
            };
          },
        ],
        ["__scopeId", "data-v-a41bb250"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/profileCom/@tencent/wzq-profile-page/components/cardSetting.js",
  }
);
require("pages/profileCom/@tencent/wzq-profile-page/components/cardSetting.js");
__wxRoute = "pages/profileCom/cardSetting";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/profileCom/cardSetting.js";
define(
  "pages/profileCom/cardSetting.js",
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
    var r = require("../../common/vendor.js"),
      e = require("./utils.js"),
      o = {
        components: {
          CardSetting: function () {
            return "./@tencent/wzq-profile-page/components/cardSetting.js";
          },
        },
        setup: function () {
          var o = r.useBrokerInfo(),
            t = o.highestPriorityDealer,
            n = void 0 === t ? {} : t,
            i = o.hasBind,
            a = r.ref(!1);
          return (
            r.onBeforeMount(function () {
              a.value = e.initCardSupportVersion();
            }),
            { highestPriorityDealer: n, hasBind: i, cardSupportVersion: a }
          );
        },
      };
    Array ||
      (
        r.resolveComponent("mp-privacy-dialog") +
        r.resolveComponent("stock-privacy-dialog") +
        r.resolveComponent("CardSetting")
      )();
    var t = r._export_sfc(o, [
      [
        "render",
        function (e, o, t, n, i, a) {
          return {
            a: e.rootFontSize,
            b: r.p({
              highestPriorityDealer: n.highestPriorityDealer,
              hasBind: n.hasBind,
              cardSupportVersion: n.cardSupportVersion,
            }),
          };
        },
      ],
    ]);
    wx.createPage(t);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/profileCom/cardSetting.js",
  }
);
require("pages/profileCom/cardSetting.js");
