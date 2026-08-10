$gwx6_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_6 || [];
    function gz$gwx6_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div setting-container data-v-492c5ed3"]);
        Z([[7], [3, "p"]]);
        Z([3, "__l"]);
        Z([3, "data-v-492c5ed3"]);
        Z([3, "492c5ed3-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "492c5ed3-1"]);
        Z(z[5]);
        Z([3, "_div setting-list-wrapper data-v-492c5ed3"]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "h"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "492c5ed3-2"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_6 = true;
    var x = ["./pages/account/setting.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_6_1();
      var h7C = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var c9C = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(h7C, c9C);
      var o8C = _v();
      _(h7C, o8C);
      if (_oz(z, 5, e, s, gg)) {
        o8C.wxVkey = 1;
        var o0C = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(o8C, o0C);
      }
      var lAD = _n("view");
      _rz(z, lAD, "class", 10, e, s, gg);
      var aBD = _v();
      _(lAD, aBD);
      if (_oz(z, 11, e, s, gg)) {
        aBD.wxVkey = 1;
      }
      var tCD = _v();
      _(lAD, tCD);
      if (_oz(z, 12, e, s, gg)) {
        tCD.wxVkey = 1;
      }
      var eDD = _v();
      _(lAD, eDD);
      if (_oz(z, 13, e, s, gg)) {
        eDD.wxVkey = 1;
      }
      aBD.wxXCkey = 1;
      tCD.wxXCkey = 1;
      eDD.wxXCkey = 1;
      _(h7C, lAD);
      var bED = _mz(
        z,
        "protocol-list",
        ["bind:__l", 14, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(h7C, bED);
      o8C.wxXCkey = 1;
      o8C.wxXCkey = 3;
      _(r, h7C);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/setting.wxml"] = [
    $gwx6_XC_6,
    "./pages/account/setting.wxml",
  ];
else
  __wxAppCode__["pages/account/setting.wxml"] = $gwx6_XC_6(
    "./pages/account/setting.wxml"
  );
__wxRoute = "pages/account/setting";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/setting.js";
define(
  "pages/account/setting.js",
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
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime");
    require("../../@babel/runtime/helpers/Arrayincludes");
    var t = function (e, t, n) {
        return new Promise(function (o, a) {
          var r = function (e) {
              try {
                c(n.next(e));
              } catch (e) {
                a(e);
              }
            },
            i = function (e) {
              try {
                c(n.throw(e));
              } catch (e) {
                a(e);
              }
            },
            c = function (e) {
              return e.done ? o(e.value) : Promise.resolve(e.value).then(r, i);
            };
          c((n = n.apply(e, t)).next());
        });
      },
      n = require("../../common/vendor.js"),
      o = n.useBrokerInfo(),
      a = o.hasBind,
      r = o.navigateToTrade,
      i = o.isTradeEnable,
      c = getApp().globalData,
      s = {
        components: {
          ProtocolList: function () {
            return "./components/ProtocolList.js";
          },
        },
        data: function () {
          return {
            hasAgree: "agree" === n.StockBridge.store.protocolStatus,
            aboutTxt: "zxg" === c.APPNAME ? "关于腾讯自选股" : "关于腾讯微证券",
            headUrl: "",
            nickName: "",
            isShowAiSetting: !1,
            logoImg: ["black", "dark"].includes(
              n.StockBridge.getStorage("user/skin")
            )
              ? n.tencentLogoBlack
              : n.tencentLogoWhite,
            skin: ["black", "dark"].includes(
              n.StockBridge.getStorage("user/skin")
            )
              ? "dark"
              : "light",
          };
        },
        computed: {
          isAccountOpen: function () {
            return a.value;
          },
          isTradeEnable: function () {
            return i.value;
          },
        },
        onLoad: function (e) {
          "msg" === (null == e ? void 0 : e.from) &&
            "aisetting" === (null == e ? void 0 : e.pageto) &&
            this.goAI(null == e ? void 0 : e.from);
        },
        onPageShow: function () {
          var e = ["black", "dark"].includes(
            n.StockBridge.getStorage("user/skin")
          );
          (this.skin = e ? "dark" : "light"),
            (this.logoImg = e ? n.tencentLogoBlack : n.tencentLogoWhite);
        },
        mounted: function () {
          this.getUserInfo(),
            this.checkUserTagrule(),
            n.StockBridge.store.subscribeProtocolStatus(
              this.handleProtocolStatusChange
            );
        },
        methods: {
          handleProtocolStatusChange: function (e) {
            this.hasAgree = "agree" === e;
          },
          getUserInfo: function () {
            var e = this;
            n.userinfo.get(!0, function (t) {
              (e.headUrl = t.headimgurl), (e.nickName = t.nickname);
            });
          },
          checkUserTagrule: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                var o;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            n.AccountAPI.checkUserTagrule({
                              appid: "zxg_xcx|ai_helper",
                              app: "zxg_xcx",
                            })
                          );
                        case 3:
                          0 == +(null == (o = e.sent) ? void 0 : o.retcode)
                            ? (this.isShowAiSetting =
                                1 == +(null == o ? void 0 : o.status) || !1)
                            : (this.isShowAiSetting = !1),
                            (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            (this.isShowAiSetting = !1);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 7]]
                );
              })
            );
          },
          goPersonalInfoList: function () {
            var e =
              "https://gu.qq.com/resource/products/portfolio/personal_info/index.html#/?openid="
                .concat(n.wx$1.getStorageSync("_qluin"), "&fskey=")
                .concat(
                  n.wx$1.getStorageSync("_qlskey"),
                  "&app=zxg_xcx&nickName="
                )
                .concat(this.nickName, "&apptype=zxg_xcx&headUrl=")
                .concat(this.headUrl);
            n.wx$1.navigateTo({
              url: "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(e)
              ),
            });
          },
          goWxPrivateSetting: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            n.StockBridge.privacyAgreement.check()
                          );
                        case 3:
                          e.next = 8;
                          break;
                        case 5:
                          return (
                            (e.prev = 5),
                            (e.t0 = e.catch(0)),
                            e.abrupt("return")
                          );
                        case 8:
                          n.wx$1.openSetting();
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 5]]
                );
              })
            );
          },
          changeSkin: function () {
            n.wx$1.navigateTo({ url: "/pages/account/skin/main" });
          },
          goAI: function (e) {
            n.Request.reportMTAData({
              eventName: e
                ? "base.aisetting.ai_setting_frommsg_auto_jump"
                : "base.aisetting.ai_setting_enyrt_click",
            }),
              n.wx$1.navigateTo({ url: "/pages/account/aiSetting" });
          },
          goPrivateSetting: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            n.StockBridge.privacyAgreement.check()
                          );
                        case 3:
                          e.next = 8;
                          break;
                        case 5:
                          return (
                            (e.prev = 5),
                            (e.t0 = e.catch(0)),
                            e.abrupt("return")
                          );
                        case 8:
                          n.Request.reportMTAData({
                            eventName: "base.setting.private_setting",
                          }),
                            n.wx$1.navigateTo({
                              url: "/pages/account/privateSetting",
                            });
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 5]]
                );
              })
            );
          },
          goCancellation: function () {
            n.wx$1.setStorageSync(
              "account_cancellation/apply_protocol_agree",
              ""
            ),
              n.Request.reportMTAData({
                eventName: "base.setting.accountcancellation_apply",
              }),
              n.wx$1.navigateTo({ url: "/pages/account/cancellation/apply" });
          },
          goTradeSetting: function () {
            n.Request.reportMTAData({
              eventName: "base.setting.trade_setting",
            }),
              r({ name: "AccountSafeSetting" }).catch(function (e) {
                var t =
                  "ERR_MAINTAIN" === e.retcode
                    ? e.retmsg
                    : "系统繁忙请稍后再试";
                n.wx$1.showModal({
                  confirmText: "确定",
                  content: t,
                  showCancel: !1,
                });
              });
          },
          tapAbout: function () {
            n.Request.reportMTAData({ eventName: "xcx_mine_about" }),
              n.wx$1.navigateTo({ url: "/pages/account/about" });
          },
        },
      };
    Array ||
      (
        n.resolveComponent("mp-privacy-dialog") +
        n.resolveComponent("stock-privacy-dialog") +
        n.resolveComponent("protocol-list")
      )();
    var u = n._export_sfc(s, [
      [
        "render",
        function (e, t, o, a, r, i) {
          return n.e(
            { a: e.rootFontSize, b: n.p({ "no-auto": !0 }), c: r.hasAgree },
            r.hasAgree
              ? {
                  d: n.o(function () {
                    return (
                      i.goCancellation && i.goCancellation.apply(i, arguments)
                    );
                  }, 211),
                }
              : {},
            { e: i.isAccountOpen && i.isTradeEnable },
            i.isAccountOpen && i.isTradeEnable
              ? {
                  f: n.o(function () {
                    return (
                      i.goTradeSetting && i.goTradeSetting.apply(i, arguments)
                    );
                  }, 212),
                }
              : {},
            {
              g: n.o(function () {
                return i.changeSkin && i.changeSkin.apply(i, arguments);
              }, 213),
              h: r.isShowAiSetting,
            },
            r.isShowAiSetting
              ? {
                  i: n.o(function () {
                    return i.goAI && i.goAI.apply(i, arguments);
                  }, 214),
                }
              : {},
            {
              j: n.o(function () {
                return (
                  i.goPrivateSetting && i.goPrivateSetting.apply(i, arguments)
                );
              }, 215),
              k: n.o(function () {
                return (
                  i.goPersonalInfoList &&
                  i.goPersonalInfoList.apply(i, arguments)
                );
              }, 216),
              l: n.o(function () {
                return (
                  i.goWxPrivateSetting &&
                  i.goWxPrivateSetting.apply(i, arguments)
                );
              }, 217),
              m: n.t(r.aboutTxt),
              n: n.o(function () {
                return i.tapAbout && i.tapAbout.apply(i, arguments);
              }, 218),
              o: r.logoImg,
              p: r.skin,
            }
          );
        },
      ],
      ["__scopeId", "data-v-492c5ed3"],
    ]);
    wx.createPage(u);
  },
  { isPage: true, isComponent: true, currentFile: "pages/account/setting.js" }
);
require("pages/account/setting.js");
