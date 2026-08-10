$gwx24_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx24_XC_1 || [];
    function gz$gwx24_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[4], [[5], [[5], [1, "container"]], [[7], [3, "f"]]]]);
        Z([3, "__l"]);
        Z([3, "48b93524-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "48b93524-1"]);
        Z(z[3]);
        Z([[7], [3, "d"]]);
        Z(z[1]);
        Z([[7], [3, "c"]]);
        Z([3, "48b93524-2"]);
        Z(z[7]);
        Z([[7], [3, "e"]]);
        Z(z[1]);
        Z([3, "48b93524-3"]);
        Z(z[12]);
      })(__WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx24_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx24_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx24_XC_1 = true;
    var x = ["./pages/comment/comment.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx24_XC_1_1();
      var o0C = _n("view");
      _rz(z, o0C, "class", 0, e, s, gg);
      var eDD = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(o0C, eDD);
      var lAD = _v();
      _(o0C, lAD);
      if (_oz(z, 3, e, s, gg)) {
        lAD.wxVkey = 1;
        var bED = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(lAD, bED);
      }
      var aBD = _v();
      _(o0C, aBD);
      if (_oz(z, 7, e, s, gg)) {
        aBD.wxVkey = 1;
        var oFD = _mz(
          z,
          "zxg-webview",
          ["bind:__l", 8, "bindmessage", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(aBD, oFD);
      }
      var tCD = _v();
      _(o0C, tCD);
      if (_oz(z, 12, e, s, gg)) {
        tCD.wxVkey = 1;
        var xGD = _mz(
          z,
          "thirteen-anniversary-task",
          ["bind:__l", 13, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(tCD, xGD);
      }
      lAD.wxXCkey = 1;
      lAD.wxXCkey = 3;
      aBD.wxXCkey = 1;
      aBD.wxXCkey = 3;
      tCD.wxXCkey = 1;
      tCD.wxXCkey = 3;
      _(r, o0C);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx24_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx24_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/comment/comment.wxml"] = [
    $gwx24_XC_1,
    "./pages/comment/comment.wxml",
  ];
else
  __wxAppCode__["pages/comment/comment.wxml"] = $gwx24_XC_1(
    "./pages/comment/comment.wxml"
  );
__wxRoute = "pages/comment/comment";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/comment/comment.js";
define(
  "pages/comment/comment.js",
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
    var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      e = require("../../common/vendor.js"),
      n = getApp().globalData,
      a = {
        components: {
          zxgWebview: function () {
            return "../../components/webView.js";
          },
          ThirteenAnniversaryTask: function () {
            return "../searchAi/@tencent/st-act-ai-activity-plugins/task/index.js".then(
              function (t) {
                return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC1haS1hY3Rpdml0eS1wbHVnaW5zL3Rhc2svaW5kZXgudnVl;
              }
            );
          },
        },
        data: function () {
          return {
            url: "",
            time: 0,
            resUrl: "",
            subjectId: "",
            skin: e.wx$1.getStorageSync("user/skin") || "white",
            shareInfo: {},
          };
        },
        onLoad: function (t) {
          getApp().globalData.Event.on("newSubject", this, this.newSubject);
          var e = t.name,
            a = t.symbol,
            o = t.market,
            i = t.topicId,
            r = t.topicid,
            s = t.topic,
            c = t.hasTask,
            l = t.tid,
            u = t.used_flag,
            h = t.invite_code;
          i = null != i ? i : r;
          var d = this;
          n.setSkin(function (t) {
            d.skin = "black" === t ? "black" : "white";
          });
          var p = "https://wzq.tenpay.com/mp/v2/index.html#/comment/comment";
          a
            ? (this.url =
                p +
                "?from=miniapp&symbol="
                  .concat(a, "&market=")
                  .concat(o)
                  .concat(
                    e ? "&name=".concat(encodeURIComponent(e)) : "",
                    "&passive_task_activated="
                  )
                  .concat(c, "&"))
            : i &&
              (this.url =
                p +
                "?from=miniapp&topicId="
                  .concat(i, "&topic=")
                  .concat(s, "&passive_task_activated=")
                  .concat(c, "&")),
            l &&
              (this.url = ""
                .concat(this.url, "tid=")
                .concat(l, "&used_flag=")
                .concat(u, "&invite_code=")
                .concat(h, "&"));
          var m = this.getLatestQuotePage() || {};
          m.scode &&
            m.market &&
            (this.url = ""
              .concat(this.url, "latestScode=")
              .concat(m.scode, "&latestMarket=")
              .concat(m.market, "&"));
        },
        onShow: function () {
          this.isShow = !0;
          var t = this;
          n.setSkin(function (e) {
            t.skin = "black" === e ? "black" : "white";
          }),
            (this.time += 1),
            (this.resUrl = ""
              .concat(this.url, "time=")
              .concat(this.time)
              .concat(
                this.subjectId ? "&subject=".concat(this.subjectId) : ""
              ));
        },
        onHide: function () {
          this.subjectId = "";
        },
        onUnload: function () {
          getApp().globalData.Event.remove("newSubject", this),
            "agree" !== getApp().globalData.protocolStatus &&
              e.StockBridge.store.getProtocolStatus();
        },
        onShareAppMessage: function () {
          return (
            (e = this),
            null,
            (n = t().mark(function e() {
              var n;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          !this.resUrl ||
                          !this.shareInfo.link ||
                          "act" !== this.shareInfo.share_source
                        ) {
                          t.next = 3;
                          break;
                        }
                        return (
                          (n = /^pages\//.test(this.shareInfo.link)
                            ? this.shareInfo.link
                            : "pages/act/webview/main?url=".concat(
                                encodeURIComponent(this.shareInfo.link)
                              )),
                          t.abrupt("return", {
                            title: this.shareInfo.title,
                            path: n,
                            imageUrl: this.shareInfo.imgUrl,
                          })
                        );
                      case 3:
                      case "end":
                        return t.stop();
                    }
                },
                e,
                this
              );
            })),
            new Promise(function (t, a) {
              var o = function (t) {
                  try {
                    r(n.next(t));
                  } catch (t) {
                    a(t);
                  }
                },
                i = function (t) {
                  try {
                    r(n.throw(t));
                  } catch (t) {
                    a(t);
                  }
                },
                r = function (e) {
                  return e.done
                    ? t(e.value)
                    : Promise.resolve(e.value).then(o, i);
                };
              r((n = n.apply(e, null)).next());
            })
          );
          var e, n;
        },
        methods: {
          handleMessage: function (t) {
            var e = t.detail.data,
              n = void 0 === e ? [] : e;
            n && n.length && (this.shareInfo = n[n.length - 1] || {});
          },
          newSubject: function (t) {
            this.subjectId = t.comment_id;
          },
          getLatestQuotePage: function () {
            var t = getCurrentPages() || [];
            if (!(t.length < 2)) {
              var e = t[t.length - 2] || {};
              if ("pages/quote/quote" !== (null == e ? void 0 : e.route))
                return null;
              var n = (null == e ? void 0 : e.options) || {},
                a = (null == n ? void 0 : n.scode) || "",
                o = (null == n ? void 0 : n.market) || "";
              return !a || a.length <= 0 || !o || o.length <= 0
                ? null
                : { scode: a, market: o };
            }
          },
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("zxg-webview") +
        e.resolveComponent("ThirteenAnniversaryTask")
      )();
    var o = e._export_sfc(a, [
      [
        "render",
        function (t, n, a, o, i, r) {
          return {
            a: t.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.o(r.handleMessage, 339),
            d: e.p({ src: i.resUrl }),
            e: e.p({ mode: "guide" }),
            f: e.n("black" == i.skin ? "skin-black" : "skin-white"),
          };
        },
      ],
    ]);
    (a.__runtimeHooks = 2), wx.createPage(o);
  },
  { isPage: true, isComponent: true, currentFile: "pages/comment/comment.js" }
);
require("pages/comment/comment.js");
