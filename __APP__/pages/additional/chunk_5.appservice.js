$gwx27_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx27_XC_5 || [];
    function gz$gwx27_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx27_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx27_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx27_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div webview-container"]);
        Z([3, "__l"]);
        Z([3, "1ec7712f-0"]);
        Z([[7], [3, "c"]]);
        Z(z[1]);
        Z([[7], [3, "b"]]);
        Z([3, "1ec7712f-1"]);
        Z(z[3]);
      })(__WXML_GLOBAL__.ops_cached.$gwx27_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx27_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx27_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx27_XC_5 = true;
    var x = ["./pages/additional/webview/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx27_XC_5_1();
      var oFL = _n("view");
      _rz(z, oFL, "class", 0, e, s, gg);
      var aHL = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(oFL, aHL);
      var lGL = _v();
      _(oFL, lGL);
      if (_oz(z, 3, e, s, gg)) {
        lGL.wxVkey = 1;
        var tIL = _mz(
          z,
          "zxg-webview",
          ["bind:__l", 4, "bindmessage", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(lGL, tIL);
      }
      lGL.wxXCkey = 1;
      lGL.wxXCkey = 3;
      _(r, oFL);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx27_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx27_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/additional/webview/index.wxml"] = [
    $gwx27_XC_5,
    "./pages/additional/webview/index.wxml",
  ];
else
  __wxAppCode__["pages/additional/webview/index.wxml"] = $gwx27_XC_5(
    "./pages/additional/webview/index.wxml"
  );
__wxRoute = "pages/additional/webview/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/additional/webview/index.js";
define(
  "pages/additional/webview/index.js",
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
    require("../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      r = require("../../../@babel/runtime/helpers/slicedToArray"),
      t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      n = Object.defineProperty,
      a = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable,
      s = function (e, r, t) {
        return r in e
          ? n(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      },
      c = function (e, r) {
        for (var n in r || (r = {})) i.call(r, n) && s(e, n, r[n]);
        if (a) {
          var c,
            l = t(a(r));
          try {
            for (l.s(); !(c = l.n()).done; ) {
              n = c.value;
              o.call(r, n) && s(e, n, r[n]);
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
        }
        return e;
      },
      l = require("../../../common/vendor.js"),
      u = require("../@tencent/stock-markets-base/utils/share.js"),
      p = getApp().globalData,
      h = {
        components: {
          zxgWebview: function () {
            return "../../../components/webView.js";
          },
        },
        data: function () {
          return { url: "", frompage: "", shareInfo: {} };
        },
        onShareAppMessage: function () {
          return (
            (t = this),
            null,
            (n = e().mark(function () {
              var t, n, a, i, o, s, c, p, h, f, d, g, m, v, b, w, x;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (null == (t = l.Request) ||
                            t.reportMTAData({
                              eventName: "xcx_share_webview_friends",
                            }),
                          (c = this.url),
                          (-1 ===
                            (p =
                              (null == (n = this.shareInfo)
                                ? void 0
                                : n.link) || "").indexOf("/hangqingxinzhai") &&
                            -1 === p.indexOf("activity") &&
                            -1 === p.indexOf("searchAi")) ||
                            (c = p),
                          c.includes("vip.sfconnect.cn"))
                        )
                          try {
                            (h = c.split("#").pop()),
                              (f = h.split("?")),
                              (d = r(f, 2)),
                              (g = d[0]),
                              (m = d[1]),
                              (c = "pages/newsCon/tsyb/index?path="
                                .concat(g.replace(/^\//, ""), "&")
                                .concat(m));
                          } catch (e) {}
                        return (
                          (v = {
                            path: /^pages\//.test(c)
                              ? c
                              : "pages/additional/webview/index?url=".concat(
                                  encodeURIComponent(c)
                                ),
                          }),
                          (null == (a = this.shareInfo) ? void 0 : a.title) &&
                            (v.title = this.shareInfo.title),
                          (null == (i = this.shareInfo) ? void 0 : i.imgUrl) &&
                            (v.imageUrl = this.shareInfo.imgUrl),
                          (e.next = 8),
                          null ==
                          (s =
                            null == (o = getApp().globalData.detect)
                              ? void 0
                              : o.env)
                            ? void 0
                            : s.IS_PCWEIXIN
                        );
                      case 8:
                        if (((e.t0 = e.sent), e.t0)) {
                          e.next = 11;
                          break;
                        }
                        e.t0 = !1;
                      case 11:
                        if (
                          ((b = e.t0),
                          !(
                            c.indexOf("longhubang") > -1 &&
                            this.shareInfo.shareData
                          ) || b)
                        ) {
                          e.next = 18;
                          break;
                        }
                        return (
                          (w = this.shareInfo.shareData),
                          (e.next = 16),
                          u.ShareUtil.renderToImage(w)
                        );
                      case 16:
                        (x = e.sent), (v.imageUrl = x);
                      case 18:
                        return e.abrupt("return", v);
                      case 19:
                      case "end":
                        return e.stop();
                    }
                },
                a,
                this
              );
            })),
            new Promise(function (e, r) {
              var a = function (e) {
                  try {
                    o(n.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                i = function (e) {
                  try {
                    o(n.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                o = function (r) {
                  return r.done
                    ? e(r.value)
                    : Promise.resolve(r.value).then(a, i);
                };
              o((n = n.apply(t, null)).next());
            })
          );
          var t, n;
        },
        onLoad: function (e) {
          if (
            ((this.url = decodeURIComponent(e.url)),
            (this.frompage = e.frompage),
            p.setSkin(),
            /https:\/\/(wzq|zqact|zqact01|zqact02|zqact03|zqact04|zqact05).\w+(.com|.cn){1,}\/mp\/v2\/index.html#\/hangqingxinzhai/.test(
              this.url
            ))
          ) {
            p.wx.request({
              url: "".concat(p.CGI_PREFIX, "exposure_report.fcgi"),
              data: c({}, { channel: 4, report_id: "hangqingxinzhai" }),
              method: "GET",
              success: function (e) {},
            });
          }
          if (
            (p.mpReporter.reportEvent("WEBVIWE_LOADING_H5", {
              ext1: this.frompage
                ? "".concat(this.url, "?frompage=").concat(this.frompage)
                : this.url,
            }),
            l.wx$1.getStorageSync("independent/webviewerror"))
          ) {
            var r = l.wx$1.getStorageSync("independent/webviewerror").fullUrl,
              t = void 0 === r ? "" : r;
            p.mpReporter.reportEvent("INDEPENDENT_WEBVIEW_ERROR", { ext1: t }),
              l.wx$1.removeStorageSync("independent/webviewerror");
          }
          1 == +e.hideShareMenu &&
            l.wx$1.hideShareMenu({
              menus: ["shareAppMessage", "shareTimeline"],
            });
        },
        methods: {
          handleMessage: function (e) {
            var r = e.detail.data,
              t = void 0 === r ? [] : r;
            t && t.length && (this.shareInfo = t[t.length - 1]);
          },
        },
      };
    Array ||
      (
        l.resolveComponent("mp-privacy-dialog") +
        l.resolveComponent("zxg-webview")
      )();
    var f = l._export_sfc(h, [
      [
        "render",
        function (e, r, t, n, a, i) {
          return {
            a: e.rootFontSize,
            b: l.o(i.handleMessage, 363),
            c: l.p({
              src: a.frompage ? a.url + "?frompage=" + a.frompage : a.url,
            }),
          };
        },
      ],
    ]);
    (h.__runtimeHooks = 2), wx.createPage(f);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/additional/webview/index.js",
  }
);
require("pages/additional/webview/index.js");
