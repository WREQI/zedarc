$gwx11_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx11_XC_3 || [];
    function gz$gwx11_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "data-v-e0605b51"]], [1, "container"]],
            [[7], [3, "h"]],
          ],
        ]);
        Z([[7], [3, "i"]]);
        Z([3, "__l"]);
        Z([3, "data-v-e0605b51"]);
        Z([3, "e0605b51-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "e0605b51-1"]);
        Z(z[5]);
        Z([[7], [3, "g"]]);
        Z(z[2]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "d"]]);
        Z([3, "r data-v-e0605b51"]);
        Z([3, "e0605b51-2"]);
        Z(z[10]);
        Z([3, "newSubject"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx11_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx11_XC_3 = true;
    var x = ["./pages/newsCon/topic/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx11_XC_3_1();
      var eVN = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var xYN = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(eVN, xYN);
      var bWN = _v();
      _(eVN, bWN);
      if (_oz(z, 5, e, s, gg)) {
        bWN.wxVkey = 1;
        var oZN = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(bWN, oZN);
      }
      var oXN = _v();
      _(eVN, oXN);
      if (_oz(z, 10, e, s, gg)) {
        oXN.wxVkey = 1;
        var f1N = _mz(
          z,
          "new-subject",
          [
            "bind:__l",
            11,
            "binddataReport",
            1,
            "bindloadedData",
            2,
            "bindtapDetail",
            3,
            "class",
            4,
            "uI",
            5,
            "uP",
            6,
            "uR",
            7,
          ],
          [],
          e,
          s,
          gg
        );
        _(oXN, f1N);
      }
      bWN.wxXCkey = 1;
      bWN.wxXCkey = 3;
      oXN.wxXCkey = 1;
      oXN.wxXCkey = 3;
      _(r, eVN);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx11_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx11_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/newsCon/topic/main.wxml"] = [
    $gwx11_XC_3,
    "./pages/newsCon/topic/main.wxml",
  ];
else
  __wxAppCode__["pages/newsCon/topic/main.wxml"] = $gwx11_XC_3(
    "./pages/newsCon/topic/main.wxml"
  );
__wxRoute = "pages/newsCon/topic/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/newsCon/topic/main.js";
define(
  "pages/newsCon/topic/main.js",
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
    var e = require("../../../common/vendor.js"),
      t = require("../../../utils/mixins/privacy.js"),
      n = getApp().globalData,
      a = new e.HQBridge(),
      i = {
        components: {
          NewSubject: function () {
            return "../../newsSbg/@tencent/stock-news-subject/Index.js".then(
              function (e) {
                return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLW5ld3Mtc3ViamVjdC9JbmRleC52dWU;
              }
            );
          },
        },
        mixins: [t.privacy],
        provide: function () {
          return { useBroker: e.useBrokerInfo(), hqBridge: a };
        },
        data: function () {
          return {
            img: "",
            digest: "",
            themeList: [],
            bannerClass: "banner-zxg",
            params: {},
            localReadedNewsIds: "",
            enterTime: 0,
            hqBridge: a,
            skin: "",
          };
        },
        created: function () {
          var e = this;
          n.setSkin(function (t) {
            e.skin = t;
          });
        },
        onLoad: function (t) {
          (this.localReadedNewsIds =
            e.wx$1.getStorageSync("subject/readingflag") || ""),
            (this.params = { id: t.id }),
            t.from &&
              "focus" === t.from &&
              e.Request.reportMTAData({
                eventName: "news.mini.subject.visitedFocus",
              }),
            e.Request.reportMTAData({ eventName: "news.mini.subject.visited" });
        },
        onShareAppMessage: function () {
          var t = this.params,
            n = this.topicTitle,
            a = void 0 === n ? "" : n;
          return (
            e.Request.reportMTAData({
              eventName: "news.mini.detail.share",
              newsid: t.id,
            }),
            {
              title: "【专题】".concat(a),
              path: "pages/newsCon/topic/main?id=".concat(t.id),
            }
          );
        },
        onShareTimeline: function () {
          var t = this.params,
            n = this.topicTitle,
            a = void 0 === n ? "" : n;
          return (
            e.Request.reportMTAData({
              eventName: "news.mini.detail.share",
              newsid: t.id,
            }),
            { title: "【专题】".concat(a), query: "id=".concat(t.id) }
          );
        },
        onPullDownRefresh: function () {
          e.wx$1.stopPullDownRefresh();
        },
        onShow: function () {
          this.enterTime = Date.now();
        },
        onHide: function () {
          e.Request.reportMTAData({
            time: Date.now() - this.enterTime,
            eventName: "news.subject.detail.stay_time",
          });
        },
        onUnload: function () {
          e.Request.reportMTAData({
            time: Date.now() - this.enterTime,
            eventName: "news.subject.detail.stay_time",
          });
        },
        methods: {
          dataLoaded: function (e) {
            var t;
            this.topicTitle =
              null != (t = null == e ? void 0 : e.title) ? t : "";
          },
          handleDataReport: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.eventName;
            t.dataObject;
            e.Request.reportMTAData({ eventName: n });
          },
          handleTapDetail: function (t) {
            var a = t.data,
              i = a.news_id,
              o = void 0 === i ? "" : i,
              r = a.title,
              s = a.articletype,
              c = a.time,
              d = a.source,
              l = a.video_info,
              u = a.url;
            if ("SN202307271640248473decb" !== o)
              26 == +s && u
                ? e.wx$1.navigateTo({
                    url: "/pages/additional/webview/index?url=".concat(
                      encodeURIComponent(u)
                    ),
                  })
                : 7 == +s || 8 == +s
                ? (l && l.course_id) ||
                  n.navigateTo({
                    url: "/pages/newsCon/video/videoDetail?id=".concat(o),
                  })
                : 14 == +s
                ? n.navigateTo({ url: "/pages/live/liveDetail?id=".concat(o) })
                : 4 == +s
                ? n.navigateTo({
                    url: "/pages/newsCon/topic/main?id=".concat(o),
                  })
                : n.navigateTo({
                    url: "../newsDetail/main?id="
                      .concat(o, "&zxtype=")
                      .concat(s, "&title=")
                      .concat(r, "&date=")
                      .concat(c, "&source=")
                      .concat(d),
                  }),
                e.Request.reportMTAData({
                  eventName: "news.mini.subject.newsClick",
                });
            else {
              e.Request.reportMTAData({
                eventName: "news.mini.subject.etf_match_entry",
              });
              e.wx$1.navigateTo({
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(
                    "https://zqact03.tenpay.com/activity/page/etfEnrollMatchTwoPhase/#/index?target=rank"
                  )
                ),
              });
            }
          },
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("NewSubject")
      )();
    var o = e._export_sfc(i, [
      [
        "render",
        function (t, n, a, i, o, r) {
          return {
            a: t.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.sr("newSubject", "e0605b51-2"),
            d: e.o(r.handleTapDetail, 287),
            e: e.o(r.handleDataReport, 288),
            f: e.o(r.dataLoaded, 289),
            g: e.p({ params: o.params, "readed-news": o.localReadedNewsIds }),
            h: e.n("black" === o.skin ? "black" : ""),
            i: o.skin,
          };
        },
      ],
      ["__scopeId", "data-v-e0605b51"],
    ]);
    (i.__runtimeHooks = 6), wx.createPage(o);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/newsCon/topic/main.js",
  }
);
require("pages/newsCon/topic/main.js");
