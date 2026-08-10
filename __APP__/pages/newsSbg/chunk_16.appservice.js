$gwx21_XC_8 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_8 || [];
    function gz$gwx21_XC_8_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_8_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_8_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_8_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_8_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_8_1;
    }
    function gz$gwx21_XC_8_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_8_2)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_8_2;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_8_2 = [];
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
                [[5], [[5], [1, "_div"]], [1, "data-v-7bc09ac2"]],
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
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_8_2);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_8_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_8 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_8 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index.wxml",
      "./pages/newsSbg/@tencent/stock-sq/src/source/showMore/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_8_1();
      var oVJ = _v();
      _(r, oVJ);
      if (_oz(z, 0, e, s, gg)) {
        oVJ.wxVkey = 1;
      }
      oVJ.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_8_2();
      var aXJ = _mz(
        z,
        "view",
        ["class", 0, "hidden", 1, "ref", 1],
        [],
        e,
        s,
        gg
      );
      var tYJ = _v();
      _(aXJ, tYJ);
      if (_oz(z, 3, e, s, gg)) {
        tYJ.wxVkey = 1;
      }
      var eZJ = _v();
      _(aXJ, eZJ);
      if (_oz(z, 4, e, s, gg)) {
        eZJ.wxVkey = 1;
      }
      var b1J = _v();
      _(aXJ, b1J);
      if (_oz(z, 5, e, s, gg)) {
        b1J.wxVkey = 1;
      }
      tYJ.wxXCkey = 1;
      eZJ.wxXCkey = 1;
      b1J.wxXCkey = 1;
      _(r, aXJ);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_8();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index.wxml"
  ] = [
    $gwx21_XC_8,
    "./pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index.wxml"
  ] = $gwx21_XC_8(
    "./pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/showMore/index.wxml"
  ] = [
    $gwx21_XC_8,
    "./pages/newsSbg/@tencent/stock-sq/src/source/showMore/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/showMore/index.wxml"
  ] = $gwx21_XC_8(
    "./pages/newsSbg/@tencent/stock-sq/src/source/showMore/index.wxml"
  );
__wxRoute = "pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index.js";
define(
  "pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index.js",
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
    var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      n = require("../../../../stock-community-base/utils/knife.js"),
      e = require("../../../../../../../common/vendor.js"),
      i = {
        name: "itemCmp",
        components: {},
        props: {
          disabled: { type: Boolean, default: !1 },
          iContent: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        data: function () {
          return {
            IsMINAPP: n.IsMINAPP,
            isLiteMode: n.IS_LITE_MODE,
            isBindBroker: !0,
          };
        },
        computed: {
          hyperIcon: function () {
            var t,
              n,
              e,
              i =
                "https://mat1.gtimg.com/finance/images/stock/p/community/comItem/CMP/hyperIcon-active.svg";
            return (
              (null ==
              (e =
                null == (n = null == (t = this.iContent) ? void 0 : t.link)
                  ? void 0
                  : n.data)
                ? void 0
                : e.hyperIcon) && (i = this.iContent.link.data.hyperIcon),
              i
            );
          },
          setGrey: function () {
            var t,
              e,
              i = (
                (null == (e = null == (t = this.iContent) ? void 0 : t.link)
                  ? void 0
                  : e.data) || {}
              ).hyperH5Url,
              r = ["策略金股", "脱水研报"].find(function (t) {
                return decodeURIComponent(i).includes(t);
              });
            return ("zxg" !== n.platform && r) || this.disabled;
          },
          isSupportHyper: function () {
            if (this.iContent.link && this.iContent.link.type) {
              var t = (this.iContent.link.data || {}).linkTradeAccount;
              if (!t) return !0;
              if (this.isBindBroker) return !1;
              if ("zxg" === n.platform) return !!t.app;
              if (this.IsMINAPP) return !!t.zxg_mini;
              if ("wzq" === n.platform)
                return !!(this.isLiteMode ? t.mini_h5 : t.wzq);
            }
            return (
              !!(
                this.iContent &&
                "CMP" === this.iContent.type &&
                this.iContent.text &&
                this.iContent.text.startsWith("@")
              ) ||
              !!(
                this.iContent &&
                this.iContent.link &&
                this.iContent.link.type &&
                "user" === this.iContent.link.type
              )
            );
          },
        },
        watch: {
          iContent: {
            handler: function (t) {
              t &&
                t.link &&
                (t.link.data || {}).linkTradeAccount &&
                this.fetchBrokerIsBind();
            },
            immediate: !0,
          },
        },
        methods: {
          tapHyper: function (t) {
            this.setGrey || this.$emit("tapHyper", t);
          },
          fetchBrokerIsBind: function () {
            return (
              (e = this),
              null,
              (i = t().mark(function e() {
                var i = this;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ("zxg" !== n.platform) {
                            t.next = 4;
                            break;
                          }
                          shy.invoke("isOpenAccount", {}, function (t) {
                            var n = t.isOpen;
                            "[object Boolean]" ===
                            Object.prototype.toString.call(n)
                              ? (i.isBindBroker = n)
                              : (i.isBindBroker = "true" === n);
                          }),
                            (t.next = 7);
                          break;
                        case 4:
                          return (t.next = 6), TradeFunc.fetchBrokerInfo();
                        case 6:
                          this.isBindBroker = TradeFunc.isBind();
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this
                );
              })),
              new Promise(function (t, n) {
                var r = function (t) {
                    try {
                      s(i.next(t));
                    } catch (t) {
                      n(t);
                    }
                  },
                  o = function (t) {
                    try {
                      s(i.throw(t));
                    } catch (t) {
                      n(t);
                    }
                  },
                  s = function (n) {
                    return n.done
                      ? t(n.value)
                      : Promise.resolve(n.value).then(r, o);
                  };
                s((i = i.apply(e, null)).next());
              })
            );
            var e, i;
          },
        },
      },
      r = e._export_sfc(i, [
        [
          "render",
          function (t, n, i, r, o, s) {
            return e.e(
              { a: s.isSupportHyper },
              s.isSupportHyper
                ? {
                    b: e.t(i.iContent.text),
                    c: e.n(s.setGrey && !i.iContent.iconHide ? "disabled" : ""),
                    d: e.n(
                      i.iContent.link && i.iContent.link.type
                        ? i.iContent.link.type
                        : ""
                    ),
                    e: e.n(i.iContent.iconHide ? "" : "hasIcon"),
                    f: e.o(function (t) {
                      return s.tapHyper(i.iContent);
                    }, 4162),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-7c900e3e"],
      ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index.js",
  }
);
require("pages/newsSbg/@tencent/stock-sq/src/source/itemCmp/index.js");
__wxRoute = "pages/newsSbg/@tencent/stock-sq/src/source/showMore/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/newsSbg/@tencent/stock-sq/src/source/showMore/index.js";
define(
  "pages/newsSbg/@tencent/stock-sq/src/source/showMore/index.js",
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
    var e = require("../../../../stock-community-base/utils/knife.js"),
      t = require("../../../../../../../common/vendor.js"),
      o = {
        name: "showMore",
        components: {},
        props: { showType: { type: String, default: "" } },
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
            return (
              {
                long: 3,
                turn: 6,
                turnNews: 6,
                turnShort: 6,
                short: 6,
                reply: 4,
                comment: 2,
                turnLog: 1,
                desc: 3,
              }[this.showType] || 0
            );
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
                        var e, t, s;
                        (null == (e = o.ele) ? void 0 : e.style) &&
                          (null ==
                          (s = null == (t = o.$refs) ? void 0 : t.showMore)
                            ? void 0
                            : s.style) &&
                          ((o.ele.style.position = "relative"),
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
                            o.eleLH * (o.showLine - 1) + "px"));
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
                    }, 4160),
                    f: t.n(s.showType),
                  }
                : {},
              { g: !l.isFolded && !h.foldedAndShow },
              l.isFolded || h.foldedAndShow
                ? {}
                : {
                    h: t.t(h.hideText),
                    i: t.o(function (e) {
                      return h.toggleShow(!1);
                    }, 4161),
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
        ["__scopeId", "data-v-7bc09ac2"],
      ]);
    wx.createComponent(s);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/newsSbg/@tencent/stock-sq/src/source/showMore/index.js",
  }
);
require("pages/newsSbg/@tencent/stock-sq/src/source/showMore/index.js");
