$gwx6_XC_14 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx6_XC_14 || [];
    function gz$gwx6_XC_14_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx6_XC_14_1)
        return __WXML_GLOBAL__.ops_cached.$gwx6_XC_14_1;
      __WXML_GLOBAL__.ops_cached.$gwx6_XC_14_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "b"]]);
        Z([3, "_div zhuxiao-account-rights data-v-f673e9b8"]);
        Z([3, "__l"]);
        Z([3, "data-v-f673e9b8"]);
        Z([3, "f673e9b8-0"]);
        Z([[7], [3, "c"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "f673e9b8-1"]);
        Z(z[5]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "j"]]);
        Z([[7], [3, "l"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx6_XC_14_1);
      return __WXML_GLOBAL__.ops_cached.$gwx6_XC_14_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx6_XC_14 = z;
    __WXML_GLOBAL__.ops_init.$gwx6_XC_14 = true;
    var x = ["./pages/account/cancellation/detailZhuxiao.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx6_XC_14_1();
      var cVF = _v();
      _(r, cVF);
      if (_oz(z, 0, e, s, gg)) {
        cVF.wxVkey = 1;
        var hWF = _n("view");
        _rz(z, hWF, "class", 1, e, s, gg);
        var e4F = _mz(
          z,
          "mp-privacy-dialog",
          ["bind:__l", 2, "class", 1, "uI", 2],
          [],
          e,
          s,
          gg
        );
        _(hWF, e4F);
        var oXF = _v();
        _(hWF, oXF);
        if (_oz(z, 5, e, s, gg)) {
          oXF.wxVkey = 1;
          var b5F = _mz(
            z,
            "stock-privacy-dialog",
            ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(oXF, b5F);
        }
        var cYF = _v();
        _(hWF, cYF);
        if (_oz(z, 10, e, s, gg)) {
          cYF.wxVkey = 1;
        }
        var oZF = _v();
        _(hWF, oZF);
        if (_oz(z, 11, e, s, gg)) {
          oZF.wxVkey = 1;
        }
        var l1F = _v();
        _(hWF, l1F);
        if (_oz(z, 12, e, s, gg)) {
          l1F.wxVkey = 1;
        }
        var a2F = _v();
        _(hWF, a2F);
        if (_oz(z, 13, e, s, gg)) {
          a2F.wxVkey = 1;
        }
        var t3F = _v();
        _(hWF, t3F);
        if (_oz(z, 14, e, s, gg)) {
          t3F.wxVkey = 1;
        }
        oXF.wxXCkey = 1;
        oXF.wxXCkey = 3;
        cYF.wxXCkey = 1;
        oZF.wxXCkey = 1;
        l1F.wxXCkey = 1;
        a2F.wxXCkey = 1;
        t3F.wxXCkey = 1;
        _(cVF, hWF);
      }
      cVF.wxXCkey = 1;
      cVF.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx6_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx6_XC_14();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/account/cancellation/detailZhuxiao.wxml"] = [
    $gwx6_XC_14,
    "./pages/account/cancellation/detailZhuxiao.wxml",
  ];
else
  __wxAppCode__["pages/account/cancellation/detailZhuxiao.wxml"] = $gwx6_XC_14(
    "./pages/account/cancellation/detailZhuxiao.wxml"
  );
__wxRoute = "pages/account/cancellation/detailZhuxiao";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/account/cancellation/detailZhuxiao.js";
define(
  "pages/account/cancellation/detailZhuxiao.js",
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
    var n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../common/vendor.js"),
      o = {
        data: function () {
          return {
            isRequesting: !0,
            canUnbindList: [],
            cannotUnbindToApp: [],
            cannotUnbindToWzq: [],
            cannotUnbindToLiangrong: [],
            cannotUnbindToApplying: [],
            bindPlatform: {
              wzq_h5: "1",
              light_h5: "2",
              zxg_xcx: "3",
              wzq_xcx: "4",
              zxg_app: "5",
            },
          };
        },
        mounted: function () {
          return (
            (o = this),
            null,
            (e = n().mark(function o() {
              var e, i, a, r, c, l, u, d, s;
              return n().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0),
                          t.Request.reportMTAData({
                            eventName:
                              "base.accountcancellation_apply_detail.zhuxiao_brow",
                          }),
                          (n.next = 4),
                          t.AccountAPI.accountCancellationQuery()
                        );
                      case 4:
                        (a = n.sent),
                          (this.isRequesting = !1),
                          0 == +a.code &&
                            (null == (e = null == a ? void 0 : a.data)
                              ? void 0
                              : e.step2) &&
                            ((r = this.bindPlatform.wzq_xcx),
                            (c =
                              (null == (i = null == a ? void 0 : a.data)
                                ? void 0
                                : i.step2) || {}),
                            (l = (
                              (null == c ? void 0 : c.wzq_bind_list) || []
                            ).concat(
                              (null == c ? void 0 : c.zxg_bind_list) || []
                            )),
                            (u = Array.from(new Set(l.map(JSON.stringify))).map(
                              JSON.parse
                            )),
                            (d = (
                              (null == c ? void 0 : c.wzq_apply_list) || []
                            ).concat(
                              (null == c ? void 0 : c.zxg_apply_list) || []
                            )),
                            (s = Array.from(new Set(d.map(JSON.stringify))).map(
                              JSON.parse
                            )),
                            (this.canUnbindList = l.filter(function (n) {
                              var t;
                              return (
                                0 == +(null == n ? void 0 : n.account_mode) &&
                                -1 !==
                                  (null ==
                                  (t =
                                    null == n ? void 0 : n.unbind_support_item)
                                    ? void 0
                                    : t.indexOf(r))
                              );
                            })),
                            (this.cannotUnbindToApp = u.filter(function (n) {
                              var t, o;
                              return (
                                0 == +(null == n ? void 0 : n.account_mode) &&
                                -1 ===
                                  (null ==
                                  (t =
                                    null == n ? void 0 : n.unbind_support_item)
                                    ? void 0
                                    : t.indexOf(r)) &&
                                0 ===
                                  (null ==
                                  (o =
                                    null == n ? void 0 : n.unbind_support_item)
                                    ? void 0
                                    : o.indexOf("5"))
                              );
                            })),
                            (this.cannotUnbindToWzq = u.filter(function (n) {
                              var t, o;
                              return (
                                0 == +(null == n ? void 0 : n.account_mode) &&
                                -1 ===
                                  (null ==
                                  (t =
                                    null == n ? void 0 : n.unbind_support_item)
                                    ? void 0
                                    : t.indexOf(r)) &&
                                0 ===
                                  (null ==
                                  (o =
                                    null == n ? void 0 : n.unbind_support_item)
                                    ? void 0
                                    : o.indexOf("1"))
                              );
                            })),
                            (this.cannotUnbindToLiangrong = u.filter(function (
                              n
                            ) {
                              return (
                                1 == +(null == n ? void 0 : n.account_mode)
                              );
                            })),
                            (this.cannotUnbindToApplying = s)),
                          (n.next = 11);
                        break;
                      case 8:
                        throw (
                          ((n.prev = 8),
                          (n.t0 = n.catch(0)),
                          (this.isRequesting = !1),
                          n.t0)
                        );
                      case 11:
                      case "end":
                        return n.stop();
                    }
                },
                o,
                this,
                [[0, 8]]
              );
            })),
            new Promise(function (n, t) {
              var i = function (n) {
                  try {
                    r(e.next(n));
                  } catch (n) {
                    t(n);
                  }
                },
                a = function (n) {
                  try {
                    r(e.throw(n));
                  } catch (n) {
                    t(n);
                  }
                },
                r = function (t) {
                  return t.done
                    ? n(t.value)
                    : Promise.resolve(t.value).then(i, a);
                };
              r((e = e.apply(o, null)).next());
            })
          );
          var o, e;
        },
        methods: {
          applyCancellation: function (n) {
            n.qs_id &&
              (t.Request.reportMTAData({
                eventName:
                  "base.accountcancellation_apply_detail.zhuxiao_broker_btn_click",
              }),
              t.sdkBridge.navToBrokerPage({
                broker: n.qs_id,
                replace: !0,
                name: "AccountPersonal",
                data: { action: "unbind" },
              }));
          },
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog")
      )();
    var e = t._export_sfc(o, [
      [
        "render",
        function (n, o, e, i, a, r) {
          return t.e(
            { a: n.rootFontSize, b: !a.isRequesting },
            a.isRequesting
              ? {}
              : t.e(
                  { c: t.p({ "no-auto": !0 }), d: a.canUnbindList.length > 0 },
                  a.canUnbindList.length > 0
                    ? {
                        e: t.f(a.canUnbindList, function (n, o, e) {
                          return {
                            a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                              n.qs_id,
                              ".png)"
                            ),
                            b: t.t(n.qs_name),
                            c: t.o(
                              function (t) {
                                return r.applyCancellation(n);
                              },
                              251,
                              o
                            ),
                            d: o,
                          };
                        }),
                      }
                    : {},
                  { f: a.cannotUnbindToApp.length > 0 },
                  a.cannotUnbindToApp.length > 0
                    ? {
                        g: t.f(a.cannotUnbindToApp, function (n, o, e) {
                          return {
                            a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                              n.qs_id,
                              ".png)"
                            ),
                            b: t.t(n.qs_name),
                            c: o,
                          };
                        }),
                      }
                    : {},
                  { h: a.cannotUnbindToWzq.length > 0 },
                  a.cannotUnbindToWzq.length > 0
                    ? {
                        i: t.f(a.cannotUnbindToWzq, function (n, o, e) {
                          return {
                            a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                              n.qs_id,
                              ".png)"
                            ),
                            b: t.t(n.qs_name),
                            c: o,
                          };
                        }),
                      }
                    : {},
                  { j: a.cannotUnbindToLiangrong.length > 0 },
                  a.cannotUnbindToLiangrong.length > 0
                    ? {
                        k: t.f(a.cannotUnbindToLiangrong, function (n, o, e) {
                          return {
                            a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                              n.qs_id,
                              ".png)"
                            ),
                            b: t.t(n.qs_name),
                            c: o,
                          };
                        }),
                      }
                    : {},
                  { l: a.cannotUnbindToApplying.length > 0 },
                  a.cannotUnbindToApplying.length > 0
                    ? {
                        m: t.f(a.cannotUnbindToApplying, function (n, o, e) {
                          return {
                            a: "url(https://st.gtimg.com/image/mp-broker/trade/asset-logo-".concat(
                              n.qs_id,
                              ".png)"
                            ),
                            b: t.t(n.qs_name),
                            c: o,
                          };
                        }),
                      }
                    : {}
                )
          );
        },
      ],
      ["__scopeId", "data-v-f673e9b8"],
    ]);
    wx.createPage(e);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/account/cancellation/detailZhuxiao.js",
  }
);
require("pages/account/cancellation/detailZhuxiao.js");
