$gwx10_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx10_XC_2 || [];
    function gz$gwx10_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx10_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx10_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx10_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "o"]]);
        Z([3, "_div img-box data-v-7a456c12"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "c"]]);
        Z([1, false]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "l"]]);
        Z([[7], [3, "j"]]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "m"]]);
        Z([[7], [3, "n"]]);
        Z([3, "data-v-7a456c12"]);
        Z(z[4]);
        Z([[7], [3, "e"]]);
        Z([1, true]);
        Z(z[14]);
        Z(z[4]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "h"]]);
        Z(z[4]);
        Z(z[4]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx10_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx10_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx10_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx10_XC_2 = true;
    var x = ["./pages/information/components/mpPlayer.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx10_XC_2_1();
      var cPL = _mz(z, "view", ["bindtap", 0, "class", 1], [], e, s, gg);
      var hQL = _v();
      _(cPL, hQL);
      if (_oz(z, 2, e, s, gg)) {
        hQL.wxVkey = 1;
      }
      var oRL = _v();
      _(cPL, oRL);
      if (_oz(z, 3, e, s, gg)) {
        oRL.wxVkey = 1;
        var cSL = _mz(
          z,
          "txv-video",
          [
            "autoplay",
            4,
            "bindended",
            1,
            "binderror",
            2,
            "bindpause",
            3,
            "bindplay",
            4,
            "bindstatechange",
            5,
            "bindtimeupdate",
            6,
            "class",
            7,
            "controls",
            8,
            "height",
            9,
            "isHiddenStop",
            10,
            "isNeedMutex",
            11,
            "muted",
            12,
            "playerid",
            13,
            "poster",
            14,
            "showFullscreenBtn",
            15,
            "showMuteBtn",
            16,
            "vid",
            17,
            "width",
            18,
          ],
          [],
          e,
          s,
          gg
        );
        _(oRL, cSL);
      }
      hQL.wxXCkey = 1;
      oRL.wxXCkey = 1;
      oRL.wxXCkey = 3;
      _(r, cPL);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx10_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx10_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/information/components/mpPlayer.wxml"] = [
    $gwx10_XC_2,
    "./pages/information/components/mpPlayer.wxml",
  ];
else
  __wxAppCode__["pages/information/components/mpPlayer.wxml"] = $gwx10_XC_2(
    "./pages/information/components/mpPlayer.wxml"
  );
__wxRoute = "pages/information/components/mpPlayer";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/information/components/mpPlayer.js";
define(
  "pages/information/components/mpPlayer.js",
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
    var t = require("../../../common/vendor.js"),
      e = requirePlugin("tencentvideo"),
      i = "stock-video-page-lastplay-videoid",
      n = {
        name: "VideoPlayerMP",
        components: {},
        props: {
          data: { type: Object, default: function () {} },
          layout: {
            type: Object,
            default: function () {
              return {};
            },
          },
          TagId: { type: String, default: "222" },
          reportPrefix: { type: [String, Number], default: "" },
          networkType: { type: String, default: "" },
          stockId: { type: String, default: "" },
          newsId: { type: String, default: "" },
        },
        data: function () {
          return {
            txvContext: null,
            playing: !1,
            played: !1,
            playerMute: !0,
            paused: !1,
            inWindow: !1,
            autoPlayStartTime: 0,
            playStartTime: 0,
            playPercent: 0,
            isCanShowThumb: !1,
            startType: 1,
          };
        },
        computed: {
          isChannels: function () {
            return this.data && 21 == +this.data.type;
          },
          videoId: function () {
            return this.data.video_id;
          },
        },
        mounted: function () {},
        onLoad: function (t) {},
        created: function () {},
        methods: {
          getPlayerId: function () {
            return "playermp_".concat(this.TagId);
          },
          onPlay: function (e) {
            (this.played = !0),
              (this.playing = !0),
              this.$emit("onPlayStatusChange", {
                status: "playing",
                vid: this.videoId,
              }),
              (this.playStartTime = Date.now()),
              (t.StockBridge.getStorage(i) || "") === this.videoId
                ? (this.startType = 2)
                : ((this.startType = 1),
                  t.StockBridge.setStorage(i, this.videoId)),
              t.StockBridge.report(
                "".concat(this.reportPrefix, ".video.play"),
                {
                  newsid: this.newsId,
                  start_type: this.startType,
                  stockid: this.stockId,
                }
              );
          },
          onPause: function (t) {
            (this.playing = !1),
              (this.paused = this.inWindow),
              this.reportPlayTime(),
              this.$emit("onPlayStatusChange", {
                status: "pause",
                vid: this.videoId,
              });
          },
          onEnd: function () {
            (this.playing = !1),
              (this.paused = this.inWindow),
              this.reportPlayTime(),
              this.$emit("onPlayStatusChange", {
                status: "end",
                vid: this.videoId,
              });
          },
          onError: function () {
            (this.playing = !1),
              (this.paused = this.inWindow),
              this.reportPlayTime(),
              this.$emit("onPlayStatusChange", {
                status: "error",
                vid: this.videoId,
              });
          },
          reportPlayTime: function () {
            t.StockBridge.report(
              "".concat(this.reportPrefix, ".video.playtime"),
              {
                play_time: Date.now() - this.playStartTime,
                newsid: this.newsId,
                stockid: this.stockId,
                play_percentage: this.playPercent,
              }
            );
          },
          onMaskTap: function () {},
          setInWindow: function (t) {
            this.inWindow = t;
          },
          play: function () {
            (this.paused = !1), this.playVideo(!0, !0);
          },
          pause: function () {
            this.pauseVideo(!1);
          },
          playVideo: function (e, i) {
            this.playing ||
              this.paused ||
              ((this.inWindow = e),
              this.txvContext && this.txvContext.play(),
              i &&
                ((this.autoPlayStartTime = Date.now()),
                t.Request.reportMTAData({
                  eventName: "".concat(this.reportPrefix, ".video.autoPlay"),
                })));
          },
          pauseVideo: function (t) {
            this.playing &&
              ((this.inWindow = t), this.txvContext && this.txvContext.pause());
          },
          onTimeUpdate: function (t) {
            var e,
              i,
              n =
                null == (e = null == t ? void 0 : t.detail)
                  ? void 0
                  : e.duration,
              a =
                null == (i = null == t ? void 0 : t.detail)
                  ? void 0
                  : i.currentTime;
            !a || !n || isNaN(a) || isNaN(n)
              ? (this.playPercent = 0)
              : (this.playPercent = (a / n).toFixed(4));
          },
          videoStateChange: function (t) {
            var i = t.detail.newstate;
            if ("ready" === i)
              this.txvContext = e.getTxvContext(this.getPlayerId());
            else {
              if ("playing" === i) return;
              "ended" === i &&
                ((this.playing = !1),
                (this.played = !1),
                (this.paused = !1),
                this.reportPlayTime());
            }
            this.$emit("onPlayStatusChange", { status: i, vid: this.videoId });
          },
        },
      },
      a = t._export_sfc(n, [
        [
          "render",
          function (e, i, n, a, o, s) {
            return t.e(
              { a: o.isCanShowThumb },
              o.isCanShowThumb
                ? { b: n.data.focus_img || n.data.thumb_img }
                : {},
              { c: s.videoId },
              s.videoId
                ? {
                    d: n.layout.width,
                    e: n.layout.height,
                    f: s.videoId,
                    g: s.getPlayerId(),
                    h: n.data.focus_img || n.data.thumb_img,
                    i: t.o(function () {
                      return s.onPlay && s.onPlay.apply(s, arguments);
                    }, 3187),
                    j: t.o(function () {
                      return s.onPause && s.onPause.apply(s, arguments);
                    }, 3188),
                    k: t.o(function () {
                      return s.onEnd && s.onEnd.apply(s, arguments);
                    }, 3189),
                    l: t.o(function () {
                      return s.onError && s.onError.apply(s, arguments);
                    }, 3190),
                    m: t.o(function () {
                      return (
                        s.videoStateChange &&
                        s.videoStateChange.apply(s, arguments)
                      );
                    }, 3191),
                    n: t.o(function () {
                      return (
                        s.onTimeUpdate && s.onTimeUpdate.apply(s, arguments)
                      );
                    }, 3192),
                  }
                : {},
              {
                o: t.o(function () {
                  return s.onMaskTap && s.onMaskTap.apply(s, arguments);
                }, 3193),
              }
            );
          },
        ],
        ["__scopeId", "data-v-7a456c12"],
      ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/information/components/mpPlayer.js",
  }
);
require("pages/information/components/mpPlayer.js");
