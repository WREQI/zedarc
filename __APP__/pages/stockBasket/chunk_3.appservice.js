$gwx0_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_4 || [];
    function gz$gwx0_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "c"]]);
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "a"]]);
        Z([3, "eccc15cc-0"]);
        Z(z[0]);
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_4 = true;
    var x = [
      "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx0_XC_4_1();
      var aZH = _v();
      _(r, aZH);
      if (_oz(z, 0, e, s, gg)) {
        aZH.wxVkey = 1;
        var t1H = _mz(
          z,
          "basket-header",
          [
            "bind:__l",
            1,
            "bindbasketFooterClick",
            1,
            "bindheaderTitleClick",
            2,
            "uI",
            3,
            "uP",
            4,
          ],
          [],
          e,
          s,
          gg
        );
        _(aZH, t1H);
      }
      aZH.wxXCkey = 1;
      aZH.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx0_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.wxml"
  ] = [
    $gwx0_XC_4,
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.wxml",
  ];
else
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.wxml"
  ] = $gwx0_XC_4(
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.wxml"
  );
__wxRoute =
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.js";
define(
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.js",
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
    var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      e = Object.defineProperty,
      r = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable,
      o = function (t, r, i) {
        return r in t
          ? e(t, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (t[r] = i);
      },
      s = function (e, s) {
        for (var n in s || (s = {})) i.call(s, n) && o(e, n, s[n]);
        if (r) {
          var c,
            l = t(r(s));
          try {
            for (l.s(); !(c = l.n()).done; ) {
              n = c.value;
              a.call(s, n) && o(e, n, s[n]);
            }
          } catch (t) {
            l.e(t);
          } finally {
            l.f();
          }
        }
        return e;
      },
      n = require("../api/CheckIntersectionObserver.js"),
      c = require("../api/ReportLog.js"),
      l = require("../../../../../common/vendor.js"),
      u = {
        components: {
          basketHeader: function () {
            return "./basketHeader.js";
          },
        },
        inject: ["hqBridge"],
        props: {
          rootClass: { type: [String, Array], default: "" },
          isBgWhite: { type: Boolean, default: !1 },
          isBigRadius: { type: Boolean, default: !1 },
          basketData: {
            type: Object,
            default: function () {
              return {};
            },
          },
          reportPrefix: { type: String, default: "" },
          reportExtra: {
            type: Object,
            default: function () {
              return {};
            },
          },
          basketType: { type: String, default: "" },
          isNews: { type: Boolean, default: !1 },
          subjectData: {
            type: Object,
            default: function () {
              return {};
            },
          },
          newsData: {
            type: Object,
            default: function () {
              return {};
            },
          },
          isSubject: { type: Boolean, default: !1 },
          isHstabShow: { type: Boolean, default: !1 },
          positionid: { type: Number, default: 0 },
        },
        emits: ["goToBasketDetail"],
        computed: {
          baseInfo: function () {
            var t;
            return (null == (t = this.basketData) ? void 0 : t.info) || {};
          },
          userData: function () {
            var t;
            return (null == (t = this.basketData) ? void 0 : t.userData) || {};
          },
          categoryId: function () {
            var t, e;
            return (
              (null == (e = null == (t = this.basketData) ? void 0 : t.column)
                ? void 0
                : e.id) || ""
            );
          },
          rankingData: function () {
            var t, e, r, i;
            return {
              avgChangePct:
                null == (e = null == (t = this.basketData) ? void 0 : t.ranking)
                  ? void 0
                  : e.avgChangePct,
              total:
                null == (i = null == (r = this.basketData) ? void 0 : r.ranking)
                  ? void 0
                  : i.total,
            };
          },
        },
        watch: {
          isHstabShow: function (t) {
            t && !this.isHasObserved
              ? this.openObserver()
              : (this.closeObserver(), (this.isHasObserved = !1));
          },
        },
        mounted: function () {
          this.openObserver();
        },
        beforeDestroy: function () {
          this.closeObserver();
        },
        methods: {
          openObserver: function () {
            var t = this;
            c.REPORT_PREFIX_REG.test(this.reportPrefix) &&
              n.checkIntersectionObserver(
                this,
                ".basket-header-wrapper",
                function (e) {
                  t.reportLog("watchlist_brow"), e && (t.isHasObserved = !0);
                },
                0
              );
          },
          closeObserver: function () {
            c.REPORT_PREFIX_REG.test(this.reportPrefix) &&
              n.checkIntersectionObserver(this, "");
          },
          reportLog: function (t) {
            var e,
              r,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = c.reportLogExtra(
                {
                  category_id: this.categoryId || this.basketType,
                  watchlist_id:
                    null ==
                    (r = null == (e = this.basketData) ? void 0 : e.info)
                      ? void 0
                      : r.id,
                  positionlist: this.positionid,
                  positionid: this.positionid,
                },
                this.reportPrefix,
                this.newsData,
                this.subjectData
              );
            this.hqBridge.report(
              "".concat(this.reportPrefix, ".").concat(t),
              s(s(s({}, a), i), this.reportExtra || {})
            );
          },
          goToBasketDetail: function (t) {
            var e,
              r = null == (e = this.basketData.info) ? void 0 : e.id;
            if (r) {
              "wzq" !== this.hqBridge.ENV &&
                this.hqBridge.routeTo({
                  path: "/pages/stockBasket/detail",
                  query: { gdId: r },
                }),
                this.$emit("goToBasketDetail", r);
              var i = {
                title: "watchlist_title_click",
                summary: "watchlist_word_click",
                footer: "watchlist_more_click",
              };
              i[t] && this.reportLog(i[t]);
            }
          },
        },
      };
    Array || l.resolveComponent("basket-header")();
    var d = l._export_sfc(u, [
      [
        "render",
        function (t, e, r, i, a, o) {
          return {
            a: l.o(o.goToBasketDetail, 5332),
            b: l.o(function (t) {
              return o.goToBasketDetail("footer");
            }, 5333),
            c: l.p({
              mode: "embed",
              "is-show-more-action": !0,
              "is-show-bottom-line": !1,
              "is-show-desc": !1,
              "is-added": r.basketData.userData.watched,
              "report-prefix": r.reportPrefix,
              "base-info": r.basketData.info,
              "ranking-data": o.rankingData,
            }),
          };
        },
      ],
    ]);
    wx.createComponent(d);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.js",
  }
);
require("pages/stockBasket/@tencent/wzq-lite-basket/components/basketEmbedHeader.js");
