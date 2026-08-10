$gwx23_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx23_XC_3 || [];
    function gz$gwx23_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx23_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx23_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx23_XC_3_1 = [];
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
                [[5], [[5], [1, "_div"]], [1, "data-v-bfbc051f"]],
                [1, "mod-show-more"],
              ],
              [[7], [3, "k"]],
            ],
            [[7], [3, "l"]],
          ],
        ]);
        Z([
          [2, "!"],
          [[7], [3, "m"]],
        ]);
        Z([3, "showMore"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "g"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx23_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx23_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx23_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx23_XC_3 = true;
    var x = [
      "./pages/communitySbg/@tencent/stock-community-ui/components/showMore/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx23_XC_3_1();
      var a6I = _mz(
        z,
        "view",
        ["class", 0, "hidden", 1, "ref", 1],
        [],
        e,
        s,
        gg
      );
      var t7I = _v();
      _(a6I, t7I);
      if (_oz(z, 3, e, s, gg)) {
        t7I.wxVkey = 1;
      }
      var e8I = _v();
      _(a6I, e8I);
      if (_oz(z, 4, e, s, gg)) {
        e8I.wxVkey = 1;
      }
      var b9I = _v();
      _(a6I, b9I);
      if (_oz(z, 5, e, s, gg)) {
        b9I.wxVkey = 1;
      }
      t7I.wxXCkey = 1;
      e8I.wxXCkey = 1;
      b9I.wxXCkey = 1;
      _(r, a6I);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx23_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx23_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/showMore/index.wxml"
  ] = [
    $gwx23_XC_3,
    "./pages/communitySbg/@tencent/stock-community-ui/components/showMore/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/showMore/index.wxml"
  ] = $gwx23_XC_3(
    "./pages/communitySbg/@tencent/stock-community-ui/components/showMore/index.wxml"
  );
__wxRoute =
  "pages/communitySbg/@tencent/stock-community-ui/components/showMore/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/communitySbg/@tencent/stock-community-ui/components/showMore/index.js";
define(
  "pages/communitySbg/@tencent/stock-community-ui/components/showMore/index.js",
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
    var e = require("../../../stock-community-base/utils/knife.js"),
      t = require("../../../../../../common/vendor.js"),
      o = {
        name: "showMore",
        components: {},
        props: {
          showType: { type: String, default: "" },
          pageType: { type: String, default: "" },
          lineClamp: { type: Number, default: 0 },
        },
        data: function () {
          return {
            hasShowMore: !1,
            isFolded: !1,
            foldH: "auto",
            ele: null,
            eleH: "",
            eleLH: "",
            eleFS: "",
            eleColor: "",
            moreW: "",
          };
        },
        computed: {
          showLine: function () {
            return this.lineClamp > 0
              ? this.lineClamp
              : {
                  long: 3,
                  turn: 6,
                  turnNews: 6,
                  turnShort: 6,
                  short: 6,
                  reply: 4,
                  comment: 2,
                  turnLog: 1,
                  desc: 3,
                }[this.showType] || 0;
          },
          onlyEllipsis: function () {
            return -1 !== ["long"].indexOf(this.showType);
          },
          foldedAndShow: function () {
            return -1 !== ["turn", "turnLog"].indexOf(this.showType);
          },
          onlyFolded: function () {
            return (
              -1 !==
              ["short", "turn", "turnNews", "turnShort"].indexOf(this.showType)
            );
          },
          showBR: function () {
            return -1 !== ["short"].indexOf(this.showType);
          },
          showText: function () {
            return (
              {
                short: "全文",
                turn: "全文",
                turnNews: "全文",
                turnShort: "全文",
                turnLog: "展开更多",
              }[this.showType] || "展开"
            );
          },
          hideText: function () {
            return { turn: "收起更多" }[this.showType] || "收起";
          },
          shadowColor: function () {
            return (
              { comment: "#F5F6FA", turnShort: "#F5F6FA" }[this.showType] ||
              "#FFFFFF"
            );
          },
        },
        methods: {
          initShowMore: function (t) {
            var o = this;
            if (this.showLine)
              if (t)
                if (((this.ele = t), this.onlyEllipsis))
                  (t.style.whiteSpace = "normal"),
                    (t.style.wordWrap = "break-word"),
                    (t.style.wordBreak = "break-all"),
                    (t.style.display = "-webkit-box"),
                    (t.style.WebkitBoxOrient = "vertical"),
                    (t.style.WebkitLineClamp = +this.showLine),
                    (t.style.overflow = "hidden");
                else {
                  if (
                    ((this.hasShowMore = !1),
                    (t.style.opacity = 0),
                    (t.style.position = ""),
                    (t.style.height = ""),
                    (t.style.overflow = ""),
                    (this.eleH = Math.floor(
                      e.getCurrentStyle(this.ele, "height").replace("px", "")
                    )),
                    0 == +this.eleH)
                  )
                    return void setTimeout(function () {
                      o.initShowMore(t);
                    }, 300);
                  var s = t.querySelector("span");
                  s &&
                    ((this.eleLH = Math.floor(
                      e.getCurrentStyle(s, "line-height").replace("px", "")
                    )),
                    (this.eleFS = Math.floor(
                      e.getCurrentStyle(s, "font-size").replace("px", "")
                    )),
                    (this.eleColor = e
                      .getCurrentStyle(s, "color")
                      .replace("px", ""))),
                    (this.foldH = this.eleLH * +this.showLine),
                    isNaN(this.eleLH) && (this.eleLH = ""),
                    isNaN(this.eleFS) && (this.eleFS = ""),
                    isNaN(this.eleColor) && (this.eleColor = ""),
                    +this.eleH > +this.foldH + 10 &&
                      ((this.hasShowMore = !0),
                      (this.isFolded = !0),
                      this.$nextTick(function () {
                        (o.ele.style.position = "relative"),
                          (o.ele.style.height = "".concat(o.foldH, "px")),
                          (o.ele.style.lineHeight = "".concat(o.eleLH, "px")),
                          (o.ele.style.overflow = "hidden"),
                          (o.$refs.showMore.style.fontSize =
                            o.eleFS - 1 + "px"),
                          (o.$refs.showMore.style.lineHeight = "".concat(
                            o.eleLH,
                            "px"
                          )),
                          (o.$refs.showMore.style.top =
                            o.eleLH * (o.showLine - 1) + "px");
                      })),
                    (t.style.opacity = 1);
                }
              else
                setTimeout(function () {
                  o.initShowMore(t);
                }, 300);
          },
          toggleShow: function (e) {
            var t = this;
            this.onlyFolded
              ? this.$emit("toggleShow", { isShow: e, showType: this.showType })
              : ("desc" === this.showType && this.$emit("toggleShow", e),
                e
                  ? ((this.isFolded = !1),
                    (this.ele.style.width = "auto"),
                    (this.ele.style.height = "auto"),
                    (this.$refs.showMore.style.position = ""),
                    (this.$refs.showMore.style.top = ""))
                  : ((this.isFolded = !0),
                    (this.ele.style.width =
                      this.ele.offsetWidth - this.moreW + "px"),
                    (this.ele.style.height = "".concat(this.foldH, "px")),
                    (this.$refs.showMore.style.position = "absolute"),
                    (this.$refs.showMore.style.top =
                      this.eleLH * (this.showLine - 1) + "px"),
                    this.onlyEllipsis ||
                      this.$nextTick(function () {
                        t.$refs.showMore.style.right = -t.moreW + "px";
                      })));
          },
        },
        mounted: function () {
          this.$emit("mounted");
        },
        watch: {},
      },
      s = t._export_sfc(o, [
        [
          "render",
          function (e, o, s, i, l, h) {
            return t.e(
              { a: !h.onlyEllipsis && l.isFolded },
              (!h.onlyEllipsis && l.isFolded, {}),
              { b: l.isFolded },
              l.isFolded
                ? {
                    c: l.eleColor,
                    d: t.t(h.showText),
                    e: t.o(function (e) {
                      return h.toggleShow(!0);
                    }, 5730),
                    f: t.n(s.showType),
                  }
                : {},
              {
                g:
                  !l.isFolded &&
                  !h.foldedAndShow &&
                  "commentDetail" !== s.pageType,
              },
              l.isFolded || h.foldedAndShow || "commentDetail" === s.pageType
                ? {}
                : {
                    h: t.t(h.hideText),
                    i: t.o(function (e) {
                      return h.toggleShow(!1);
                    }, 5731),
                    j: t.n(s.showType),
                  },
              {
                k: t.n(s.showType),
                l: t.n(l.isFolded ? "isFolded" : ""),
                m: l.hasShowMore,
              }
            );
          },
        ],
        ["__scopeId", "data-v-bfbc051f"],
      ]);
    wx.createComponent(s);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/communitySbg/@tencent/stock-community-ui/components/showMore/index.js",
  }
);
require("pages/communitySbg/@tencent/stock-community-ui/components/showMore/index.js");
