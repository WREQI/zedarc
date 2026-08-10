$gwx32_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx32_XC_0 || [];
    function gz$gwx32_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx32_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx32_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx32_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div data-v-a2d4b581"]);
        Z([3, "__l"]);
        Z([3, "data-v-a2d4b581"]);
        Z([3, "a2d4b581-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "a2d4b581-1"]);
        Z(z[4]);
      })(__WXML_GLOBAL__.ops_cached.$gwx32_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx32_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx32_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx32_XC_0 = true;
    var x = ["./pages/forbidden/webview.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx32_XC_0_1();
      var oB = _n("view");
      _rz(z, oB, "class", 0, e, s, gg);
      var oD = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oB, oD);
      var xC = _v();
      _(oB, xC);
      if (_oz(z, 4, e, s, gg)) {
        xC.wxVkey = 1;
        var fE = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(xC, fE);
      }
      xC.wxXCkey = 1;
      xC.wxXCkey = 3;
      _(r, oB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx32_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx32_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/forbidden/webview.wxml"] = [
    $gwx32_XC_0,
    "./pages/forbidden/webview.wxml",
  ];
else
  __wxAppCode__["pages/forbidden/webview.wxml"] = $gwx32_XC_0(
    "./pages/forbidden/webview.wxml"
  );
__wxRoute = "pages/forbidden/webview";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/forbidden/webview.js";
define(
  "pages/forbidden/webview.js",
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
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      n = require("../../common/vendor.js"),
      r = {
        setup: function () {
          var r = n.ref(""),
            t = n.ref(""),
            a = n.ref(!1),
            o = n.ref(!1),
            u = n.computed(function () {
              return "/pages/index/index?forbiddenurl=".concat(r.value);
            });
          return (
            n.onMounted(function () {
              var u = getCurrentPages(),
                i = u[u.length - 1];
              i &&
                i.options &&
                (function (u) {
                  return (
                    (i = this),
                    null,
                    (c = e().mark(function i() {
                      var c, l, s, d, f, v;
                      return e().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r.value = u.url || ""),
                                  (t.value = u.errUrl || ""),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  n.Wuji.get({
                                    appid: "act",
                                    schemaid: "webview_forbidden_url",
                                    schemakey:
                                      "47a11d5c48664e6fafb724c212c3f33d",
                                    size: "total",
                                  })
                                );
                              case 4:
                                (c = e.sent),
                                  (l = c.data),
                                  (s = void 0 === l ? [] : l),
                                  (f = (d = function (e, n) {
                                    return (
                                      !(
                                        !(null == n ? void 0 : n.length) || !e
                                      ) &&
                                      n.some(function (n) {
                                        var r = n.forbidden_url.replace(
                                          /[.*+?^${}()|[\]\\]/g,
                                          "\\$&"
                                        );
                                        return new RegExp(r).test(
                                          decodeURIComponent(e)
                                        );
                                      })
                                    );
                                  })(r.value, s)),
                                  (v = d(t.value, s)),
                                  (a.value = f && v),
                                  (o.value = !a.value),
                                  (e.next = 16);
                                break;
                              case 13:
                                (e.prev = 13),
                                  (e.t0 = e.catch(1)),
                                  (a.value = !1),
                                  (o.value = !0);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        i,
                        null,
                        [[1, 13]]
                      );
                    })),
                    new Promise(function (e, n) {
                      var r = function e(r) {
                          try {
                            a(c.next(r));
                          } catch (e) {
                            n(e);
                          }
                        },
                        t = function (e) {
                          try {
                            a(c.throw(e));
                          } catch (e) {
                            n(e);
                          }
                        },
                        a = function (n) {
                          return n.done
                            ? e(n.value)
                            : Promise.resolve(n.value).then(r, t);
                        };
                      a((c = c.apply(i, null)).next());
                    })
                  );
                  var i, c;
                })(i.options);
            }),
            {
              sendMessagePath: u,
              handleOpenChat: function () {},
              isTokefu: a,
              isShowDefaultPage: o,
              url: r,
              errUrl: t,
            }
          );
        },
      };
    Array ||
      (
        n.resolveComponent("mp-privacy-dialog") +
        n.resolveComponent("stock-privacy-dialog")
      )();
    var t = n._export_sfc(r, [
      [
        "render",
        function (e, r, t, a, o, u) {
          return n.e(
            { a: e.rootFontSize, b: n.p({ "no-auto": !0 }), c: a.isTokefu },
            a.isTokefu
              ? {
                  d: a.sendMessagePath,
                  e: n.o(function () {
                    return (
                      a.handleOpenChat && a.handleOpenChat.apply(a, arguments)
                    );
                  }, 368),
                }
              : (a.isShowDefaultPage, {}),
            { f: a.isShowDefaultPage }
          );
        },
      ],
      ["__scopeId", "data-v-a2d4b581"],
    ]);
    wx.createPage(t);
  },
  { isPage: true, isComponent: true, currentFile: "pages/forbidden/webview.js" }
);
require("pages/forbidden/webview.js");
