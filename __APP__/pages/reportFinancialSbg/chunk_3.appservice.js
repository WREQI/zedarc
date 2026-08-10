$gwx17_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx17_XC_3 || [];
    function gz$gwx17_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx17_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx17_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx17_XC_3_1 = [];
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
              [[5], [[5], [1, "_div"]], [1, "ai-financial-report-container"]],
              [1, "data-v-45296178"],
            ],
            [[7], [3, "q"]],
          ],
        ]);
        Z([[7], [3, "r"]]);
        Z([3, "_div ai-content-container data-v-45296178"]);
        Z([[7], [3, "j"]]);
        Z([3, "item"]);
        Z([[7], [3, "n"]]);
        Z([3, "c"]);
        Z([[6], [[7], [3, "item"]], [3, "b"]]);
        Z([3, "__l"]);
        Z([3, "data-v-45296178"]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z(z[7]);
        Z([[7], [3, "o"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx17_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx17_XC_3_1;
    }
    function gz$gwx17_XC_3_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx17_XC_3_2)
        return __WXML_GLOBAL__.ops_cached.$gwx17_XC_3_2;
      __WXML_GLOBAL__.ops_cached.$gwx17_XC_3_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([3, "r data-v-8e0edc3a"]);
        Z([3, "8e0edc3a-0"]);
        Z([3, "searchList"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx17_XC_3_2);
      return __WXML_GLOBAL__.ops_cached.$gwx17_XC_3_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx17_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx17_XC_3 = true;
    var x = [
      "./pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.wxml",
      "./pages/reportFinancialSbg/search.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx17_XC_3_1();
      var bMC = _mz(z, "view", ["class", 0, "style", 1], [], e, s, gg);
      var xOC = _n("view");
      _rz(z, xOC, "class", 2, e, s, gg);
      var oPC = _v();
      _(xOC, oPC);
      if (_oz(z, 3, e, s, gg)) {
        oPC.wxVkey = 1;
      }
      var fQC = _v();
      _(xOC, fQC);
      var cRC = function (oTC, hSC, cUC, gg) {
        var lWC = _v();
        _(cUC, lWC);
        if (_oz(z, 7, oTC, hSC, gg)) {
          lWC.wxVkey = 1;
          var aXC = _mz(
            z,
            "stock-search-item",
            ["bind:__l", 8, "class", 1, "uI", 2, "uP", 3],
            [],
            oTC,
            hSC,
            gg
          );
          _(lWC, aXC);
        }
        lWC.wxXCkey = 1;
        lWC.wxXCkey = 3;
        return cUC;
      };
      fQC.wxXCkey = 4;
      _2z(z, 5, cRC, e, s, gg, fQC, "item", "index", "c");
      oPC.wxXCkey = 1;
      _(bMC, xOC);
      var oNC = _v();
      _(bMC, oNC);
      if (_oz(z, 12, e, s, gg)) {
        oNC.wxVkey = 1;
      }
      oNC.wxXCkey = 1;
      _(r, bMC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx17_XC_3_2();
      var eZC = _mz(
        z,
        "a-i-financial-report-search-list",
        ["bind:__l", 0, "bindonCancelClick", 1, "class", 1, "uI", 2, "uR", 3],
        [],
        e,
        s,
        gg
      );
      _(r, eZC);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx17_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx17_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.wxml"
  ] = [
    $gwx17_XC_3,
    "./pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.wxml",
  ];
else
  __wxAppCode__[
    "pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.wxml"
  ] = $gwx17_XC_3(
    "./pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/reportFinancialSbg/search.wxml"] = [
    $gwx17_XC_3,
    "./pages/reportFinancialSbg/search.wxml",
  ];
else
  __wxAppCode__["pages/reportFinancialSbg/search.wxml"] = $gwx17_XC_3(
    "./pages/reportFinancialSbg/search.wxml"
  );
__wxRoute =
  "pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.js";
define(
  "pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.js",
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
    var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = require("../../../../../common/vendor.js"),
      n = require("../api/financialReportRequest.js"),
      i = require("../../stock-news-core/utils/force2https.js"),
      a = {
        options: { styleIsolation: "shared" },
        components: {
          StockSearchItem: function () {
            return "../components/StockSearchItem.js";
          },
        },
        props: { theme: "", fromSearchClick: !1 },
        computed: {
          isMP: function () {
            return n.isMPEnv();
          },
          isWZQ: function () {
            return n.isWZQEnv();
          },
          isApp: function () {
            return n.isAppEnv();
          },
          isWeb: function () {
            return n.isWebEnv();
          },
          containerStyle: function () {
            return this.isMP
              ? {}
              : {
                  backgroundImage: "url('".concat(
                    i.forceHttpsAdvanced(this.aiTitleBgImgUrl || ""),
                    "')"
                  ),
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                };
          },
          aiTitleBgImgUrl: function () {
            return "black" === this.theme
              ? "https://st.gtimg.com/design/8641a84cc73d84f64c2e48f0209144c6.png"
              : "https://st.gtimg.com/design/e1627c56f1035f395b7c5915f307bdb7.png";
          },
          aiSearchClearUrl: function () {
            return "black" === this.theme
              ? "https://st.gtimg.com/design/cd7e7ad2f1be91614220ace241a8a040.png"
              : "https://st.gtimg.com/design/d01365f162bbb6efb1130da527bb8ed9.png";
          },
          aiSearchUrl: function () {
            return "black" === this.theme
              ? "https://st.gtimg.com/design/3cfd82f771e90ce5abdbf2895ccbdd16.png"
              : "https://st.gtimg.com/design/f87eaf66e6de28862e174eb6ab7256e4.png";
          },
          aiSearchNoResultImgUrl: function () {
            return "black" === this.theme
              ? "https://st.gtimg.com/design/6aaceec2945636e7624299b0dfec49e9.png"
              : "https://st.gtimg.com/design/49256c57651483a8b728da5c5c1fcb74.png";
          },
        },
        data: function () {
          return {
            financialList: [],
            loading: !1,
            searchCode: "",
            searchLoading: !1,
            isFirstLoading: !0,
            isInputFocused: !1,
            fromSearch: !1,
            mpAutoFocus: !0,
          };
        },
        created: function () {
          (this.fromSearch = this.fromSearchClick),
            this.requestDefaultFinancialList(),
            this.isApp && shy.setWebViewFollowKeyboardChanged(!1);
        },
        mounted: function () {
          var t = this;
          this.addEvent(),
            this.$nextTick(function () {
              t.$refs.aiSearchInput && t.$refs.aiSearchInput.focus();
            });
        },
        beforeDestroy: function () {
          this.removeEvent();
        },
        activated: function () {
          var t = this;
          this.addEvent(),
            this.isWZQ
              ? this.fromSearch &&
                this.$nextTick(function () {
                  t.aiSearchFocus(),
                    (t.fromSearch = !1),
                    t.$emit("resetSearchClickStatus");
                })
              : this.$nextTick(function () {
                  t.aiSearchFocus();
                });
        },
        deactivated: function () {
          this.removeEvent();
        },
        methods: {
          aiSearchFocus: function () {
            this.$refs.aiSearchInput && this.$refs.aiSearchInput.focus();
          },
          refreshDataWhenRouteChange: function () {
            (!this.searchCode || this.searchCode.length <= 0) &&
              ((this.loading = !1), this.requestDefaultFinancialList());
          },
          requestDefaultFinancialList: function () {
            var t = this;
            this.loading ||
              ((this.loading = !0),
              n
                .getFinancialReportListData({
                  last_score: "",
                  page_start: 1,
                  n: 10,
                })
                .then(function (e) {
                  (t.isFirstLoading = !1), (t.loading = !1);
                  var n = (e || {}).data,
                    i = void 0 === n ? {} : n;
                  i &&
                    i.data &&
                    i.data.length > 0 &&
                    (t.financialList = i.data);
                }));
          },
          handleInput: function (t) {
            (this.searchCode = t.target.value), this.searchStockReport();
          },
          searchStockReport: e.debounce(function () {
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
                          try {
                            (n = this.searchCode.replace(/\s/g, "")) &&
                            n.length > 0
                              ? this.requestSearchList(n)
                              : this.requestDefaultFinancialList();
                          } catch (t) {}
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  this
                );
              })),
              new Promise(function (t, i) {
                var a = function (t) {
                    try {
                      s(n.next(t));
                    } catch (t) {
                      i(t);
                    }
                  },
                  c = function (t) {
                    try {
                      s(n.throw(t));
                    } catch (t) {
                      i(t);
                    }
                  },
                  s = function (e) {
                    return e.done
                      ? t(e.value)
                      : Promise.resolve(e.value).then(a, c);
                  };
                s((n = n.apply(e, null)).next());
              })
            );
            var e, n;
          }, 300),
          requestSearchList: function (t) {
            var e = this;
            this.searchLoading ||
              !t ||
              t.length <= 0 ||
              ((this.searchLoading = !0),
              n.getFinancialSearchListData({ search: t }).then(function (t) {
                e.searchLoading = !1;
                var n = (t || {}).data,
                  i = void 0 === n ? {} : n;
                i && i.data && i.data.length > 0
                  ? (e.financialList = i.data)
                  : (e.financialList = []);
              }));
          },
          xcxNavigate: function (t) {
            var n, i;
            e.wx$1 && e.wx$1.navigateTo
              ? e.wx$1.navigateTo(t)
              : null ==
                  (i =
                    null == (n = null == window ? void 0 : window.wx)
                      ? void 0
                      : n.miniProgram) || i.navigateTo(t);
          },
          cancelBtnClick: function () {
            (this.searchCode = ""),
              this.requestDefaultFinancialList(),
              this.$emit("onCancelClick");
          },
          clearBtnClick: function () {
            (this.searchCode = ""), this.requestDefaultFinancialList();
          },
          handleScroll: function () {
            this.isInputFocused &&
              (this.isMP
                ? (this.mpAutoFocus = !1)
                : this.$refs.aiSearchInput.blur(),
              (this.isInputFocused = !1));
          },
          handleInputFocus: function () {
            this.isInputFocused = !0;
          },
          addEvent: function () {
            this.isMP ||
              window.addEventListener("touchstart", this.handleScroll, !1);
          },
          removeEvent: function () {
            this.isMP ||
              window.removeEventListener("touchstart", this.handleScroll, !1);
          },
        },
      };
    Array || e.resolveComponent("StockSearchItem")();
    var c = e._export_sfc(a, [
      [
        "render",
        function (t, n, i, a, c, s) {
          return e.e(
            { a: s.aiSearchUrl, b: !s.isMP },
            s.isMP
              ? {
                  f: c.mpAutoFocus,
                  g: c.searchCode,
                  h: e.o(function () {
                    return s.handleInput && s.handleInput.apply(s, arguments);
                  }, 1695),
                  i: e.o(function () {
                    return (
                      s.handleInputFocus &&
                      s.handleInputFocus.apply(s, arguments)
                    );
                  }, 1696),
                }
              : {
                  c: c.searchCode,
                  d: e.o(function () {
                    return s.handleInput && s.handleInput.apply(s, arguments);
                  }, 1693),
                  e: e.o(function () {
                    return (
                      s.handleInputFocus &&
                      s.handleInputFocus.apply(s, arguments)
                    );
                  }, 1694),
                },
            { j: c.searchCode && c.searchCode.length > 0 },
            c.searchCode && c.searchCode.length > 0
              ? {
                  k: s.aiSearchClearUrl,
                  l: e.o(function () {
                    return (
                      s.clearBtnClick && s.clearBtnClick.apply(s, arguments)
                    );
                  }, 1697),
                }
              : {},
            {
              m: e.o(function () {
                return s.cancelBtnClick && s.cancelBtnClick.apply(s, arguments);
              }, 1698),
              n: e.f(c.financialList, function (t, n, i) {
                return {
                  a: "45296178-0-" + i,
                  b: e.p({ itemData: t, pageType: "search" }),
                  c: n,
                };
              }),
              o: !c.isFirstLoading && c.financialList.length <= 0,
            },
            !c.isFirstLoading && c.financialList.length <= 0
              ? { p: s.aiSearchNoResultImgUrl }
              : {},
            { q: e.n(s.isMP ? "container-bg" : ""), r: e.s(s.containerStyle) }
          );
        },
      ],
      ["__scopeId", "data-v-45296178"],
    ]);
    wx.createComponent(c);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.js",
  }
);
require("pages/reportFinancialSbg/@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.js");
__wxRoute = "pages/reportFinancialSbg/search";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/reportFinancialSbg/search.js";
define(
  "pages/reportFinancialSbg/search.js",
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
    var e = require("../../common/vendor.js"),
      r = {
        components: {
          AIFinancialReportSearchList: function () {
            return "./@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.js";
          },
        },
        provide: function () {
          return { hqBridge: new e.HQBridge() };
        },
        methods: {
          cancelClick: function () {
            e.wx$1.navigateBack();
          },
          handleScroll: function () {
            this.$refs &&
              this.$refs.searchList &&
              this.$refs.searchList.handleScroll();
          },
        },
      };
    Array || e.resolveComponent("AIFinancialReportSearchList")();
    var n = e._export_sfc(r, [
      [
        "render",
        function (r, n, c, t, a, i) {
          return {
            a: e.sr("searchList", "8e0edc3a-0"),
            b: e.o(i.cancelClick, 944),
          };
        },
      ],
      ["__scopeId", "data-v-8e0edc3a"],
    ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/reportFinancialSbg/search.js",
  }
);
require("pages/reportFinancialSbg/search.js");
