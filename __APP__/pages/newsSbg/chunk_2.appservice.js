$gwx21_XC_12 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_12 || [];
    function gz$gwx21_XC_12_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_12_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_12 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_12 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_12_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_12();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml"
  ] = [
    $gwx21_XC_12,
    "./pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml"
  ] = $gwx21_XC_12(
    "./pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.wxml"
  );
__wxRoute =
  "pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.js";
define(
  "pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.js",
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
    var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      r = Object.defineProperty,
      n = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable,
      u = function (e, t, n) {
        return t in e
          ? r(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
      },
      i = function (e, r) {
        for (var i in r || (r = {})) o.call(r, i) && u(e, i, r[i]);
        if (n) {
          var c,
            s = t(n(r));
          try {
            for (s.s(); !(c = s.n()).done; ) {
              i = c.value;
              a.call(r, i) && u(e, i, r[i]);
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
        }
        return e;
      },
      c = function (e, t, r) {
        return new Promise(function (n, o) {
          var a = function (e) {
              try {
                i(r.next(e));
              } catch (e) {
                o(e);
              }
            },
            u = function (e) {
              try {
                i(r.throw(e));
              } catch (e) {
                o(e);
              }
            },
            i = function (e) {
              return e.done ? n(e.value) : Promise.resolve(e.value).then(a, u);
            };
          i((r = r.apply(e, t)).next());
        });
      },
      s = require("../../../../../../common/vendor.js"),
      m = require("../../util/helperUtil.js"),
      l = require("../../../stock-community-base/utils/privacyCheck.js"),
      p = {
        name: "HotEventBar",
        props: {
          reportPrefix: { type: String, default: "" },
          reportParams: {
            type: Object,
            default: function () {
              return {};
            },
          },
          isSharePage: { type: Boolean, default: !1 },
          forbidComment: { type: Boolean, default: !1 },
          shareCount: { type: Number, default: 0 },
          commentCount: { type: Number, default: 0 },
        },
        setup: function (t, r) {
          var n = this,
            o = s.inject("stockBridge"),
            a = s.inject("onCheckUserAgreementStatus", function () {}),
            u = s.inject("didAgreeUserAgreement", { value: !0 }),
            p = s.computed(function () {
              var e = Math.max(t.shareCount, 0);
              return e > 99 ? "99+" : e || "分享";
            }),
            f = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              o.report(e, t);
            },
            b = function () {
              return t.reportParams;
            },
            d = function (e) {
              return "".concat(t.reportPrefix, ".").concat(e);
            };
          return (
            s.onMounted(function () {
              f(d("bottomadd_brow"), i({}, b()));
            }),
            {
              shareTitle: p,
              numberFormat: m.numberFormat,
              reportData: f,
              getReportCommonData: b,
              getReportFullName: d,
              onClickShare: function () {
                return c(
                  n,
                  null,
                  e().mark(function t() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (f(d("bottom_bar_share_click"), i({}, b())),
                              !l.isH5Native)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (e.next = 3), l.sqPrivacyCheck();
                          case 3:
                            if (e.sent) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return");
                          case 5:
                            e.next = 9;
                            break;
                          case 7:
                            if (u.value || "function" != typeof a) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", void a());
                          case 9:
                            r.emit("tapShare", {});
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                  })
                );
              },
              onClickComment: function () {
                return c(
                  n,
                  null,
                  e().mark(function n() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (f(d("bottom_bar_pos_click"), i({}, b())),
                              !l.isH5Native)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (e.next = 3), l.sqPrivacyCheck();
                          case 3:
                            if (e.sent) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return");
                          case 5:
                            e.next = 9;
                            break;
                          case 7:
                            if (u.value || "function" != typeof a) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", void a());
                          case 9:
                            t.forbidComment
                              ? o.toast("暂不开放评论")
                              : r.emit("tapComment", {
                                  number: t.commentCount,
                                });
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, n);
                  })
                );
              },
              didAgreeUserAgreement: u,
            }
          );
        },
      },
      f = s._export_sfc(p, [
        [
          "render",
          function (e, t, r, n, o, a) {
            return s.e(
              { a: n.didAgreeUserAgreement },
              n.didAgreeUserAgreement
                ? {
                    b: s.t(n.shareTitle),
                    c: s.o(function () {
                      return (
                        n.onClickShare && n.onClickShare.apply(n, arguments)
                      );
                    }, 3026),
                  }
                : {
                    d: s.t(n.shareTitle),
                    e: s.o(function () {
                      return (
                        n.onClickShare && n.onClickShare.apply(n, arguments)
                      );
                    }, 3027),
                  },
              { f: r.commentCount },
              r.commentCount ? { g: s.t(n.numberFormat(r.commentCount)) } : {},
              {
                h: s.o(function () {
                  return (
                    n.onClickComment && n.onClickComment.apply(n, arguments)
                  );
                }, 3028),
                i: s.n(r.isSharePage ? "is-share-page" : ""),
              }
            );
          },
        ],
        ["__scopeId", "data-v-4c16856f"],
      ]);
    wx.createComponent(f);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.js",
  }
);
require("pages/newsSbg/@tencent/stock-common-bar/component/hot-event-bar/hotEventBar.js");
