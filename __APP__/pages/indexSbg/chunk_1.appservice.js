$gwx50_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx50_XC_1 || [];
    function gz$gwx50_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx50_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx50_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx50_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx50_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx50_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx50_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx50_XC_1 = true;
    var x = ["./pages/indexSbg/@tencent/stock-ai-entry-tiny/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx50_XC_1_1();
      var xQ = _v();
      _(r, xQ);
      if (_oz(z, 0, e, s, gg)) {
        xQ.wxVkey = 1;
      }
      xQ.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx50_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx50_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/indexSbg/@tencent/stock-ai-entry-tiny/index.wxml"] = [
    $gwx50_XC_1,
    "./pages/indexSbg/@tencent/stock-ai-entry-tiny/index.wxml",
  ];
else
  __wxAppCode__["pages/indexSbg/@tencent/stock-ai-entry-tiny/index.wxml"] =
    $gwx50_XC_1("./pages/indexSbg/@tencent/stock-ai-entry-tiny/index.wxml");
__wxRoute = "pages/indexSbg/@tencent/stock-ai-entry-tiny/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/indexSbg/@tencent/stock-ai-entry-tiny/index.js";
define(
  "pages/indexSbg/@tencent/stock-ai-entry-tiny/index.js",
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
    var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
      r = require("../../../../common/vendor.js"),
      t = require("../stock-base/service/common/sign.js"),
      o = "portfolio/ai_icon",
      n = {
        props: {
          from: { type: String, default: "" },
          openid: { type: String, default: "" },
          scene: { type: String, default: "" },
          app: { type: String, default: "" },
        },
        setup: function (n) {
          var a = this,
            i = r.ref(!1);
          return (
            r.onMounted(function () {
              "choose" === n.from &&
                (function () {
                  return (
                    (c = a),
                    null,
                    (u = e().mark(function () {
                      var a, c, u, s;
                      return e().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((c = 0),
                                  (u = r.StockBridge.getStorage(o)),
                                  !(u && u.expire > Date.now()))
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  ((i.value = u.showAIIcon),
                                  void (
                                    i.value &&
                                    r.StockBridge.report(
                                      "jichu.top_bar.ai_search_top_bar_brow"
                                    )
                                  ))
                                );
                              case 4:
                                return (
                                  (e.prev = 4),
                                  (e.next = 7),
                                  r.StockBridge.request(
                                    "https://snp.tenpay.com/cgi-bin/openai/aiask/query",
                                    "GET",
                                    t.getSignV3({
                                      data: {
                                        app: n.app || "wzqxcx",
                                        channel: n.scene || "stocklists",
                                        openid: n.openid,
                                        t: new Date().getTime(),
                                      },
                                      methods: "get",
                                      origin: "wzqxcx",
                                    }),
                                    { forceCallback: !0 }
                                  )
                                );
                              case 7:
                                (s = e.sent),
                                  (i.value =
                                    (null ==
                                    (a = null == s ? void 0 : s.questions)
                                      ? void 0
                                      : a.length) > 0),
                                  (null == s ? void 0 : s.expire) &&
                                    (c = s.expire),
                                  i.value &&
                                    r.StockBridge.report(
                                      "jichu.top_bar.ai_search_top_bar_brow"
                                    ),
                                  (e.next = 14);
                                break;
                              case 11:
                                (e.prev = 11),
                                  (e.t0 = e.catch(4)),
                                  (i.value = !1),
                                  r.StockBridge.aegisReportEvent(
                                    "AIENTRY-ICON-FAIL"
                                  );
                              case 14:
                                return (
                                  (e.prev = 14),
                                  r.StockBridge.setStorage(o, {
                                    showAIIcon: i.value,
                                    expire: Date.now() + 1e3 * c,
                                  }),
                                  e.finish(14)
                                );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        u,
                        null,
                        [[4, 11, 14, 17]]
                      );
                    })),
                    new Promise(function (e, r) {
                      var t = function e(t) {
                          try {
                            n(u.next(t));
                          } catch (e) {
                            r(e);
                          }
                        },
                        o = function (e) {
                          try {
                            n(u.throw(e));
                          } catch (e) {
                            r(e);
                          }
                        },
                        n = function (r) {
                          return r.done
                            ? e(r.value)
                            : Promise.resolve(r.value).then(t, o);
                        };
                      n((u = u.apply(c, null)).next());
                    })
                  );
                  var c, u;
                })();
            }),
            {
              showAIIcon: i,
              goToAI: function () {
                r.StockBridge.routeTo({
                  url: "/pages/searchAi/main?searchfrom=".concat(
                    n.scene || "stocklists"
                  ),
                }),
                  r.StockBridge.report("jichu.top_bar.ai_search_top_bar_click");
              },
            }
          );
        },
      },
      a = r._export_sfc(n, [
        [
          "render",
          function (e, t, o, n, a, i) {
            return r.e(
              { a: n.showAIIcon },
              n.showAIIcon
                ? {
                    b: r.o(function () {
                      return n.goToAI && n.goToAI.apply(n, arguments);
                    }, 2187),
                  }
                : {}
            );
          },
        ],
      ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/indexSbg/@tencent/stock-ai-entry-tiny/index.js",
  }
);
require("pages/indexSbg/@tencent/stock-ai-entry-tiny/index.js");
