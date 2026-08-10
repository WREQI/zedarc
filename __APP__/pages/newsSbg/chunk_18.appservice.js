$gwx21_XC_10 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_10 || [];
    function gz$gwx21_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_10_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_10_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_10_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div mod-profile-pop data-v-884f45de"]);
        Z([3, "mod-security-profile-pop"]);
        Z([[7], [3, "c"]]);
        Z([3, "__l"]);
        Z([3, "data-v-884f45de"]);
        Z([3, "884f45de-0"]);
        Z(z[2]);
        Z([[4], [[5], [1, "d"]]]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "t"]]);
        Z(z[3]);
        Z(z[4]);
        Z([3, "884f45de-1"]);
        Z(z[9]);
        Z(z[7]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "i"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_10_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_10 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_10_1();
      var cJK = _mz(z, "view", ["class", 0, "id", 1], [], e, s, gg);
      var hKK = _v();
      _(cJK, hKK);
      if (_oz(z, 2, e, s, gg)) {
        hKK.wxVkey = 1;
        var cMK = _mz(
          z,
          "transition",
          ["bind:__l", 3, "class", 1, "uI", 2, "uP", 3, "uS", 4],
          [],
          e,
          s,
          gg
        );
        var oNK = _v();
        _(cMK, oNK);
        if (_oz(z, 8, e, s, gg)) {
          oNK.wxVkey = 1;
        }
        oNK.wxXCkey = 1;
        _(hKK, cMK);
      }
      var oLK = _v();
      _(cJK, oLK);
      if (_oz(z, 9, e, s, gg)) {
        oLK.wxVkey = 1;
        var lOK = _mz(
          z,
          "transition",
          ["bind:__l", 10, "class", 1, "uI", 2, "uP", 3, "uS", 4],
          [],
          e,
          s,
          gg
        );
        var aPK = _v();
        _(lOK, aPK);
        if (_oz(z, 15, e, s, gg)) {
          aPK.wxVkey = 1;
          var tQK = _v();
          _(aPK, tQK);
          if (_oz(z, 16, e, s, gg)) {
            tQK.wxVkey = 1;
          }
          tQK.wxXCkey = 1;
        }
        aPK.wxXCkey = 1;
        _(oLK, lOK);
      }
      hKK.wxXCkey = 1;
      oLK.wxXCkey = 1;
      _(r, cJK);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_10();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index.wxml"
  ] = [
    $gwx21_XC_10,
    "./pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index.wxml"
  ] = $gwx21_XC_10(
    "./pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index.wxml"
  );
__wxRoute = "pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index.js";
define(
  "pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index.js",
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
    var e = require("../../../../../../../common/vendor.js"),
      t = require("../../../../stock-community-base/utils/constant.js"),
      n = require("../../utils/service/index.js"),
      a = require("../../../../stock-community-base/utils/knife.js"),
      i = a.sdk,
      o = (i.navigateTo, i.showToast),
      u = {
        name: "profilePop",
        data: function () {
          return {
            platform: a.platform,
            isShow: !1,
            noteDoc: "",
            wxNavBarIsShow: !1,
          };
        },
        props: {
          pageType: { type: String, default: "" },
          BUS: { type: Object, default: {} },
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
          defaultHeadImage: { type: String, default: t.defaultAvatarColorful },
          defaultNickname: { type: String, default: "社区股友" },
          positionConfig: {
            type: Object,
            default: function () {
              return {};
            },
          },
          needBottomInset: { type: Boolean, default: !1 },
        },
        computed: {
          banFlag: function () {
            return 1 == +this.userStateData.ban_flag;
          },
          isLite: function () {
            return a.IS_LITE_MODE;
          },
        },
        created: function () {
          var e = this.userStateData.default || {},
            t = e.default_nickname,
            n = e.default_head_image;
          (this.defaultName = t), (this.defaultAvatar = n);
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
            var t = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://wzq.tenpay.com/mp/v2/index.html#/personal/profile?noProfilePop=1"
              )
            );
            e.wx$1.navigateTo({ url: t }), this.hide();
          },
          handleDefault: function () {
            var e = this;
            if ("profile" === this.pageType)
              return (
                this.BUS &&
                  this.BUS.$emit &&
                  this.BUS.$emit("sq_profile_use_default"),
                void this.hide()
              );
            var t = {
              change_head_image: this.defaultHeadImage,
              change_nickname: this.defaultNickname,
              use_default: 1,
            };
            n.changeProfile(t).then(
              function (t) {
                0 == +t.code
                  ? (o("恭喜您已完善个人资料~", e.instance),
                    e.hide(),
                    e.BUS &&
                      e.BUS.$emit &&
                      e.BUS.$emit("sq_update_profile_default"))
                  : o("修改失败", e.instance);
              },
              function () {
                o("修改失败", e.instance);
              }
            );
          },
        },
      };
    Array || e.resolveComponent("transition")();
    var r = e._export_sfc(u, [
      [
        "render",
        function (t, n, a, i, o, u) {
          return e.e(
            { a: o.isShow },
            o.isShow
              ? {
                  b: e.o(function () {
                    return u.hide && u.hide.apply(u, arguments);
                  }, 698),
                }
              : {},
            { c: e.p({ name: "fade" }), d: o.isShow },
            o.isShow
              ? e.e(
                  {
                    e: e.o(function () {
                      return u.hide && u.hide.apply(u, arguments);
                    }, 699),
                    f: e.t(a.content),
                    g: a.defaultHeadImage,
                    h: e.t(a.defaultNickname),
                    i: o.noteDoc,
                  },
                  o.noteDoc ? { j: e.t(o.noteDoc) } : {},
                  { k: u.banFlag },
                  u.banFlag
                    ? {
                        l: e.n({ "default-lite": u.isLite }),
                        m: e.o(function () {
                          return (
                            u.handleDefault &&
                            u.handleDefault.apply(u, arguments)
                          );
                        }, 700),
                      }
                    : {
                        n: e.n({ "modify-lite": u.isLite }),
                        o: e.o(function () {
                          return (
                            u.handleModify && u.handleModify.apply(u, arguments)
                          );
                        }, 701),
                        p: e.n({ "default-lite": u.isLite }),
                        q: e.o(function () {
                          return (
                            u.handleDefault &&
                            u.handleDefault.apply(u, arguments)
                          );
                        }, 702),
                      },
                  {
                    r: o.wxNavBarIsShow && "wzq" === o.platform ? 1 : "",
                    s: a.needBottomInset ? 1 : "",
                  }
                )
              : {},
            { t: e.p({ name: "animation" }) }
          );
        },
      ],
      ["__scopeId", "data-v-884f45de"],
    ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index.js",
  }
);
require("pages/newsSbg/@tencent/stock-sq/src/source/profilePop/index.js");
