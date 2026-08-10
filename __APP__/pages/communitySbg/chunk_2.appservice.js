$gwx23_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx23_XC_2 || [];
    function gz$gwx23_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx23_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx23_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx23_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div mod-profile-pop data-v-511fa13f"]);
        Z([3, "mod-security-profile-pop"]);
        Z([[7], [3, "c"]]);
        Z([3, "__l"]);
        Z([3, "data-v-511fa13f"]);
        Z([3, "511fa13f-0"]);
        Z(z[2]);
        Z([[4], [[5], [1, "d"]]]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "r"]]);
        Z(z[3]);
        Z(z[4]);
        Z([3, "511fa13f-1"]);
        Z(z[9]);
        Z(z[7]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "i"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx23_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx23_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx23_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx23_XC_2 = true;
    var x = [
      "./pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx23_XC_2_1();
      var xWI = _mz(z, "view", ["class", 0, "id", 1], [], e, s, gg);
      var oXI = _v();
      _(xWI, oXI);
      if (_oz(z, 2, e, s, gg)) {
        oXI.wxVkey = 1;
        var cZI = _mz(
          z,
          "transition",
          ["bind:__l", 3, "class", 1, "uI", 2, "uP", 3, "uS", 4],
          [],
          e,
          s,
          gg
        );
        var h1I = _v();
        _(cZI, h1I);
        if (_oz(z, 8, e, s, gg)) {
          h1I.wxVkey = 1;
        }
        h1I.wxXCkey = 1;
        _(oXI, cZI);
      }
      var fYI = _v();
      _(xWI, fYI);
      if (_oz(z, 9, e, s, gg)) {
        fYI.wxVkey = 1;
        var o2I = _mz(
          z,
          "transition",
          ["bind:__l", 10, "class", 1, "uI", 2, "uP", 3, "uS", 4],
          [],
          e,
          s,
          gg
        );
        var c3I = _v();
        _(o2I, c3I);
        if (_oz(z, 15, e, s, gg)) {
          c3I.wxVkey = 1;
          var o4I = _v();
          _(c3I, o4I);
          if (_oz(z, 16, e, s, gg)) {
            o4I.wxVkey = 1;
          }
          o4I.wxXCkey = 1;
        }
        c3I.wxXCkey = 1;
        _(fYI, o2I);
      }
      oXI.wxXCkey = 1;
      fYI.wxXCkey = 1;
      _(r, xWI);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx23_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx23_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index.wxml"
  ] = [
    $gwx23_XC_2,
    "./pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index.wxml"
  ] = $gwx23_XC_2(
    "./pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index.wxml"
  );
__wxRoute =
  "pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index.js";
define(
  "pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index.js",
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
    var e = require("../../../stock-community-base/utils/constant.js"),
      t = require("../../utils/service/index.js"),
      n = require("../../../stock-community-base/utils/knife.js"),
      i = require("../../../../../../common/vendor.js"),
      a = n.sdk,
      o = a.navigateTo,
      u = a.showToast,
      r = {
        name: "ProfilePop",
        data: function () {
          return { platform: n.platform, isShow: !1, noteDoc: "" };
        },
        props: {
          pageType: { type: String, default: "" },
          userStateData: {
            type: Object,
            default: function () {
              return {};
            },
          },
          instance: {
            type: Object,
            default: function () {
              return {};
            },
          },
          content: { type: String, default: "" },
          defaultHeadImage: { type: String, default: e.defaultAvatarColorful },
          defaultNickname: { type: String, default: "社区股友" },
          positionConfig: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        computed: {
          banFlag: function () {
            return 1 == +this.userStateData.ban_flag;
          },
          isLite: function () {
            return n.IS_LITE_MODE;
          },
        },
        mounted: function () {
          var e = this;
          setTimeout(function () {
            e.show();
          }, 350);
        },
        methods: {
          show: function () {
            this.isShow = !0;
          },
          hide: function () {
            this.$emit("hideProfilePop");
          },
          handleModify: function () {
            var e = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://wzq.tenpay.com/mp/v2/index.html#/personal/profile?noProfilePop=1"
              )
            );
            o({ url: e, path: e, instance: this.instance }), this.hide();
          },
          handleDefault: function () {
            var e = this;
            if ("profile" === this.pageType)
              return (
                i.StockBridge.busEmit("community-refreshPersonalProfile"),
                void this.hide()
              );
            var n = {
              change_head_image: this.defaultHeadImage,
              change_nickname: this.defaultNickname,
              use_default: 1,
            };
            t.changeProfile(n).then(
              function (t) {
                0 == +t.code
                  ? (u("恭喜您已完善个人资料~", e.instance),
                    e.hide(),
                    i.StockBridge.busEmit("community-updateProfileDefault"))
                  : u("修改失败", e.instance);
              },
              function () {
                u("修改失败", e.instance);
              }
            );
          },
        },
      };
    Array || i.resolveComponent("transition")();
    var f = i._export_sfc(r, [
      [
        "render",
        function (e, t, n, a, o, u) {
          return i.e(
            { a: o.isShow },
            o.isShow
              ? {
                  b: i.o(function () {
                    return u.hide && u.hide.apply(u, arguments);
                  }, 3039),
                }
              : {},
            { c: i.p({ name: "fade" }), d: o.isShow },
            o.isShow
              ? i.e(
                  {
                    e: i.o(function () {
                      return u.hide && u.hide.apply(u, arguments);
                    }, 3040),
                    f: i.t(n.content),
                    g: n.defaultHeadImage,
                    h: i.t(n.defaultNickname),
                    i: o.noteDoc,
                  },
                  o.noteDoc ? { j: i.t(o.noteDoc) } : {},
                  { k: u.banFlag },
                  u.banFlag
                    ? {
                        l: i.n({ "default-lite": u.isLite }),
                        m: i.o(function () {
                          return (
                            u.handleDefault &&
                            u.handleDefault.apply(u, arguments)
                          );
                        }, 3041),
                      }
                    : {
                        n: i.n({ "modify-lite": u.isLite }),
                        o: i.o(function () {
                          return (
                            u.handleModify && u.handleModify.apply(u, arguments)
                          );
                        }, 3042),
                        p: i.n({ "default-lite": u.isLite }),
                        q: i.o(function () {
                          return (
                            u.handleDefault &&
                            u.handleDefault.apply(u, arguments)
                          );
                        }, 3043),
                      }
                )
              : {},
            { r: i.p({ name: "animation" }) }
          );
        },
      ],
      ["__scopeId", "data-v-511fa13f"],
    ]);
    wx.createComponent(f);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index.js",
  }
);
require("pages/communitySbg/@tencent/stock-community-ui/components/profilePop/index.js");
