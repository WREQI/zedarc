$gwx13_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx13_XC_0 || [];
    function gz$gwx13_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx13_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx13_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx13_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [5],
                  [[5], [[5], [1, "_div"]], [1, "live-card-container"]],
                  [1, "data-v-f8fac6ac"],
                ],
                [[7], [3, "P"]],
              ],
              [[7], [3, "Q"]],
            ],
            [[7], [3, "R"]],
          ],
        ]);
        Z([[7], [3, "C"]]);
        Z([3, "_div data-v-f8fac6ac"]);
        Z([[7], [3, "t"]]);
        Z([[7], [3, "x"]]);
        Z([[7], [3, "A"]]);
        Z([3, "_div bottom-section data-v-f8fac6ac"]);
        Z([[7], [3, "D"]]);
        Z([3, "url"]);
        Z([[7], [3, "E"]]);
        Z([3, "d"]);
        Z([[6], [[7], [3, "url"]], [3, "a"]]);
        Z([[7], [3, "H"]]);
        Z([[7], [3, "N"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx13_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx13_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx13_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx13_XC_0 = true;
    var x = [
      "./pages/live/@tencent/stock-live-combine/component/LiveCard.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx13_XC_0_1();
      var oB = _n("view");
      _rz(z, oB, "class", 0, e, s, gg);
      var xC = _mz(z, "view", ["bindtap", 1, "class", 1], [], e, s, gg);
      var oD = _v();
      _(xC, oD);
      if (_oz(z, 3, e, s, gg)) {
        oD.wxVkey = 1;
        var fE = _v();
        _(oD, fE);
        if (_oz(z, 4, e, s, gg)) {
          fE.wxVkey = 1;
        }
        fE.wxXCkey = 1;
      } else {
        oD.wxVkey = 2;
        var cF = _v();
        _(oD, cF);
        if (_oz(z, 5, e, s, gg)) {
          cF.wxVkey = 1;
        }
        cF.wxXCkey = 1;
      }
      oD.wxXCkey = 1;
      _(oB, xC);
      var hG = _n("view");
      _rz(z, hG, "class", 6, e, s, gg);
      var oH = _v();
      _(hG, oH);
      if (_oz(z, 7, e, s, gg)) {
        oH.wxVkey = 1;
        var oJ = _v();
        _(oH, oJ);
        var lK = function (tM, aL, eN, gg) {
          var oP = _v();
          _(eN, oP);
          if (_oz(z, 11, tM, aL, gg)) {
            oP.wxVkey = 1;
          }
          oP.wxXCkey = 1;
          return eN;
        };
        oJ.wxXCkey = 2;
        _2z(z, 9, lK, e, s, gg, oJ, "url", "index", "d");
      } else if (_oz(z, 12, e, s, gg)) {
        oH.wxVkey = 2;
      } else {
        oH.wxVkey = 3;
      }
      var cI = _v();
      _(hG, cI);
      if (_oz(z, 13, e, s, gg)) {
        cI.wxVkey = 1;
      }
      oH.wxXCkey = 1;
      cI.wxXCkey = 1;
      _(oB, hG);
      _(r, oB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx13_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx13_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/live/@tencent/stock-live-combine/component/LiveCard.wxml"
  ] = [
    $gwx13_XC_0,
    "./pages/live/@tencent/stock-live-combine/component/LiveCard.wxml",
  ];
else
  __wxAppCode__[
    "pages/live/@tencent/stock-live-combine/component/LiveCard.wxml"
  ] = $gwx13_XC_0(
    "./pages/live/@tencent/stock-live-combine/component/LiveCard.wxml"
  );
__wxRoute = "pages/live/@tencent/stock-live-combine/component/LiveCard";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/live/@tencent/stock-live-combine/component/LiveCard.js";
define(
  "pages/live/@tencent/stock-live-combine/component/LiveCard.js",
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
    var e = require("../../stock-news-core/utils/tools.js"),
      t = require("../../../../../common/vendor.js"),
      i = require("../../stock-news-core/utils/force2https.js"),
      a = { IS_WZQ_XCX: !1 },
      n = a.IS_ZXG_XCX,
      o = a.IS_WZQ_XCX,
      r = a.IS_PCWEIXIN,
      s = {},
      c = {
        inject: { isLiteMode: { default: o } },
        props: {
          liveData: {
            type: Object,
            default: function () {
              return {};
            },
          },
          showLinkLine: { type: Boolean, default: !0 },
          showPlaybackTag: { type: Boolean, default: !1 },
          wzqConfig: {
            type: Object,
            default: function () {
              return {
                Helper: { navigateTo: function () {} },
                stat: { click: function () {} },
                openStock: function () {},
              };
            },
          },
          showShare: { type: Boolean, default: !0 },
          showDate: { type: Boolean, default: !1 },
          theme: { type: String, default: "blue" },
        },
        data: function () {
          return {
            isWZQ: !1,
            isAndroid: s.android,
            isiOs: s.ios,
            isPCMP: r && (n || o),
            isiPad: s.ipad,
          };
        },
        computed: {
          isMac: function () {
            var e;
            return (
              null != (e = null == navigator ? void 0 : navigator.userAgent)
                ? e
                : ""
            ).includes("Macintosh");
          },
          liveInfo: function () {
            var e;
            return (null == (e = this.liveData) ? void 0 : e.extra_info) || {};
          },
          liveStatus: function () {
            var e = this.liveInfo,
              t = +(null == e ? void 0 : e.live_status),
              i = +(null == e ? void 0 : e.reserve_flag);
            return 20 === t ? i : 21 === t ? 3 : 22 === t ? 4 : 0;
          },
          durationTime: function () {
            var t = this.liveInfo,
              i = t.estimate_start_time,
              a = t.estimate_end_time;
            if (
              "square" === this.liveData.livecard_type &&
              (22 === this.liveInfo.live_status || this.showDate)
            ) {
              var n = e.getTimeDate(1e3 * i) || {},
                o = n.year,
                r = n.month,
                s = n.date,
                c = n.hour,
                l = void 0 === c ? "" : c,
                v = n.minute,
                u = void 0 === v ? "" : v,
                d = e.getTimeDate(1e3 * a) || {},
                p = d.year,
                f = d.month,
                h = d.date,
                m = d.hour,
                _ = void 0 === m ? "" : m,
                y = d.minute,
                w = void 0 === y ? "" : y,
                g = "".concat(_, ":").concat(w);
              return (
                h != s &&
                  (g = ""
                    .concat(p, ".")
                    .concat(f < 10 ? "0".concat(f) : r, ".")
                    .concat(h < 10 ? "0".concat(h) : h, " ")
                    .concat(g)),
                "".concat(
                  ""
                    .concat(o, ".")
                    .concat(r < 10 ? "0".concat(r) : r, ".")
                    .concat(s < 10 ? "0".concat(s) : s, " ")
                    .concat(l, ":")
                    .concat(u),
                  "-",
                  g
                )
              );
            }
            var S = e.getTimeDate(1e3 * i) || {},
              D = S.hour,
              I = void 0 === D ? "" : D,
              A = S.minute,
              P = void 0 === A ? "" : A,
              k = e.getTimeDate(1e3 * a) || {},
              C = k.hour,
              L = void 0 === C ? "" : C,
              T = k.minute,
              q = void 0 === T ? "" : T;
            return "".concat(I, ":").concat(P, "-").concat(L, ":").concat(q);
          },
          participateNum: function () {
            var e = this.liveInfo;
            return null == e ? void 0 : e.participate_num;
          },
          participateText: function () {
            var e = { 1: "已预约", 2: "已预约", 3: "正在观看", 4: "围观" };
            return "square" === this.liveData.livecard_type
              ? e[this.liveStatus] || "已预约"
              : e[this.liveStatus] || "";
          },
          posterImg: function () {
            var e = this.liveData || {};
            return i.forceHttpsAdvanced(
              e.focus_image || e.focus_img || e.thumb_image || e.thumb_img || ""
            );
          },
          viewerAvatars: function () {
            var e = (this.liveInfo.viewer_icons_url || "").split("|");
            return e.length > 0 ? e.slice(0, 3) : [];
          },
          isShowLivePlayer: function () {
            var e = this.liveData,
              t = e.type,
              i = e.news_type;
            return 4 != +t && 4 != +i;
          },
        },
        methods: {
          forceHttpsAdvanced: i.forceHttpsAdvanced,
          handleClick: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            this.$emit("tapLiveCard", { action: e, data: this.liveData });
          },
          handleReserve: function () {
            this.$emit("reserve");
          },
        },
      },
      l = t._export_sfc(c, [
        [
          "render",
          function (e, i, a, n, o, r) {
            return t.e(
              { a: 4 === a.liveData.news_type || 4 === a.liveData.type },
              4 === a.liveData.news_type || 4 === a.liveData.type
                ? { b: t.t(a.liveData.extra_info.live_count || 0) }
                : t.e(
                    { c: 1 === r.liveStatus },
                    1 === r.liveStatus
                      ? {
                          d: t.n(o.isiOs ? "ios" : ""),
                          e: t.n(o.isAndroid && !o.isWZQ ? "android" : ""),
                          f: t.o(function () {
                            return (
                              r.handleReserve &&
                              r.handleReserve.apply(r, arguments)
                            );
                          }, 4501),
                        }
                      : 2 === r.liveStatus
                      ? {
                          h: t.n(o.isiOs ? "ios" : ""),
                          i: t.n(o.isAndroid && !o.isWZQ ? "android" : ""),
                          j: t.o(function () {
                            return (
                              r.handleReserve &&
                              r.handleReserve.apply(r, arguments)
                            );
                          }, 4502),
                        }
                      : 3 === r.liveStatus
                      ? {
                          l: t.n(o.isiOs ? "ios" : ""),
                          m: t.n(o.isAndroid && !o.isWZQ ? "android" : ""),
                        }
                      : 4 !== r.liveStatus ||
                        ("square" !== a.liveData.livecard_type &&
                          !a.showPlaybackTag)
                      ? {}
                      : {
                          o: t.n(o.isiOs ? "ios" : ""),
                          p: t.n(o.isAndroid && !o.isWZQ ? "android" : ""),
                        },
                    {
                      g: 2 === r.liveStatus,
                      k: 3 === r.liveStatus,
                      n:
                        4 === r.liveStatus &&
                        ("square" === a.liveData.livecard_type ||
                          a.showPlaybackTag),
                      q: t.t(r.durationTime),
                    }
                  ),
              {
                r: t.t(a.liveData.title || ""),
                s: t.n(o.isAndroid ? "android" : ""),
                t: r.isMac || o.isiPad,
              },
              r.isMac || o.isiPad
                ? t.e(
                    { v: r.posterImg, w: r.posterImg, x: r.isShowLivePlayer },
                    (r.isShowLivePlayer, {}),
                    { y: t.n(o.isPCMP ? "pcmp" : "") }
                  )
                : t.e(
                    { z: r.posterImg, A: r.isShowLivePlayer },
                    (r.isShowLivePlayer, {}),
                    { B: t.n(o.isPCMP ? "pcmp" : "") }
                  ),
              {
                C: t.o(function (e) {
                  return r.handleClick("detail");
                }, 4503),
                D: r.viewerAvatars.length > 0 && "" !== r.viewerAvatars[0],
              },
              r.viewerAvatars.length > 0 && "" !== r.viewerAvatars[0]
                ? {
                    E: t.f(r.viewerAvatars, function (e, i, a) {
                      return t.e(
                        { a: e },
                        e ? { b: r.forceHttpsAdvanced(e) } : {},
                        { c: 0 !== i ? 1 : "", d: e }
                      );
                    }),
                    F: t.t(r.participateNum),
                    G: t.t(r.participateText),
                  }
                : "square" === a.liveData.livecard_type &&
                  r.liveInfo.media_icon_url &&
                  r.liveInfo.media_name
                ? {
                    I: r.forceHttpsAdvanced(r.liveInfo.media_icon_url),
                    J: t.o(function (e) {
                      return r.handleClick("media");
                    }, 4504),
                    K: t.t(r.liveInfo.media_name),
                    L: t.t(r.participateNum),
                    M: t.t(r.participateText),
                  }
                : {},
              {
                H:
                  "square" === a.liveData.livecard_type &&
                  r.liveInfo.media_icon_url &&
                  r.liveInfo.media_name,
                N: a.showShare,
              },
              a.showShare
                ? {
                    O: t.o(function (e) {
                      return r.handleClick("share");
                    }, 4505),
                  }
                : {},
              {
                P: t.n(a.showLinkLine ? "link-line" : ""),
                Q: t.n(a.theme),
                R: t.n(r.isLiteMode ? "lite-mode" : ""),
              }
            );
          },
        ],
        ["__scopeId", "data-v-f8fac6ac"],
      ]);
    wx.createComponent(l);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/live/@tencent/stock-live-combine/component/LiveCard.js",
  }
);
require("pages/live/@tencent/stock-live-combine/component/LiveCard.js");
