$gwx3_XC_57 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_57 || [];
    function gz$gwx3_XC_57_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_57_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_57_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_57_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_57_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_57_1;
    }
    function gz$gwx3_XC_57_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_57_2)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_57_2;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_57_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "n"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [[5], [[5], [1, "_div"]], [1, "data-v-cdbca69f"]],
                [1, "wiki-bar"],
              ],
              [[7], [3, "l"]],
            ],
            [[7], [3, "m"]],
          ],
        ]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [[5], [[5], [1, "_div"]], [1, "data-v-cdbca69f"]],
                [1, "wiki-detail"],
              ],
              [[7], [3, "h"]],
            ],
            [[7], [3, "i"]],
          ],
        ]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "j"]]);
        Z([3, "__l"]);
        Z([3, "data-v-cdbca69f"]);
        Z([3, "cdbca69f-0"]);
        Z([[7], [3, "k"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_57_2);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_57_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_57 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_57 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk.wxml",
      "./pages/detailSbg/@tencent/stock-detail-brief/components/Wiki.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_57_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_57_2();
      var oLRB = _v();
      _(r, oLRB);
      if (_oz(z, 0, e, s, gg)) {
        oLRB.wxVkey = 1;
        var xMRB = _mz(z, "view", ["bindtap", 1, "class", 1], [], e, s, gg);
        var fORB = _n("view");
        _rz(z, fORB, "class", 3, e, s, gg);
        var cPRB = _v();
        _(fORB, cPRB);
        if (_oz(z, 4, e, s, gg)) {
          cPRB.wxVkey = 1;
        }
        var hQRB = _v();
        _(fORB, hQRB);
        if (_oz(z, 5, e, s, gg)) {
          hQRB.wxVkey = 1;
        }
        cPRB.wxXCkey = 1;
        hQRB.wxXCkey = 1;
        _(xMRB, fORB);
        var oNRB = _v();
        _(xMRB, oNRB);
        if (_oz(z, 6, e, s, gg)) {
          oNRB.wxVkey = 1;
          var oRRB = _mz(
            z,
            "hot-talk",
            ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(oNRB, oRRB);
        }
        oNRB.wxXCkey = 1;
        oNRB.wxXCkey = 3;
        _(oLRB, xMRB);
      }
      oLRB.wxXCkey = 1;
      oLRB.wxXCkey = 3;
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_57";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_57();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk.wxml"
  ] = [
    $gwx3_XC_57,
    "./pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk.wxml"
  ] = $gwx3_XC_57(
    "./pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-detail-brief/components/Wiki.wxml"
  ] = [
    $gwx3_XC_57,
    "./pages/detailSbg/@tencent/stock-detail-brief/components/Wiki.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-detail-brief/components/Wiki.wxml"
  ] = $gwx3_XC_57(
    "./pages/detailSbg/@tencent/stock-detail-brief/components/Wiki.wxml"
  );
__wxRoute = "pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk.js";
define(
  "pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk.js",
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
    var o = require("../../../../../common/vendor.js"),
      t = {
        props: ["wikiInfo"],
        methods: {
          jumpComment: function () {
            o.StockBridge.report("hq.stock_detail.communityhottalk_btnclick"),
              o.StockBridge.setStorage("communityShowGoing", 1);
            var t = this.wikiInfo,
              e = t.symbol,
              n = t.stockName,
              m = t.market;
            o.StockRouter.routeTo({
              name: "comment",
              query: { symbol: e, name: n, market: m },
            });
          },
        },
      },
      e = o._export_sfc(t, [
        [
          "render",
          function (t, e, n, m, r, c) {
            return {
              a: o.t(n.wikiInfo.rank),
              b: o.o(function () {
                return c.jumpComment && c.jumpComment.apply(c, arguments);
              }, 4048),
            };
          },
        ],
        ["__scopeId", "data-v-7c8247cd"],
      ]);
    wx.createComponent(e);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk.js",
  }
);
require("pages/detailSbg/@tencent/stock-detail-brief/components/HotTalk.js");
__wxRoute = "pages/detailSbg/@tencent/stock-detail-brief/components/Wiki";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-detail-brief/components/Wiki.js";
define(
  "pages/detailSbg/@tencent/stock-detail-brief/components/Wiki.js",
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
      i = require("../../../../../common/vendor.js"),
      e = require("../../stock-hq-data/index.js"),
      a = {
        inject: ["hqBridge"],
        props: ["wikiInfo", "skin"],
        data: function () {
          return { data: {} };
        },
        components: {
          HotTalk: function () {
            return "./HotTalk.js";
          },
        },
        computed: {
          symbol: function () {
            return this.wikiInfo.symbol;
          },
          isMP: function () {
            return "mp" === this.hqBridge.ENV;
          },
          imgSrc: function () {
            return this.data.thumb_image &&
              this.data.thumb_image.startsWith("http://")
              ? this.data.thumb_image.replace("http://", "https://")
              : this.data.thumb_image;
          },
          isHSMarket: function () {
            if (!this.wikiInfo.symbol) return !1;
            var t = e.utils.splitSymbol(this.wikiInfo.symbol).market;
            return !!t && e.utils.isHSMarket(t);
          },
        },
        created: function () {
          this.getData();
        },
        methods: {
          getData: function () {
            return (
              (e = this),
              null,
              (a = t().mark(function () {
                var e, a, n;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = i.getApiFullUrl(
                              "ifzqgtimg/appstock/news/stockBKInfo/getBK?symbol=".concat(
                                this.symbol
                              ),
                              "PROXY_QQ"
                            )),
                            (t.next = 3),
                            this.hqBridge.request(a)
                          );
                        case 3:
                          (n = t.sent),
                            (this.data =
                              (null == (e = n.data) ? void 0 : e.bk_info) ||
                              {}),
                            this.$emit("gotData", this.data);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  },
                  n,
                  this
                );
              })),
              new Promise(function (t, i) {
                var n = function (t) {
                    try {
                      o(a.next(t));
                    } catch (t) {
                      i(t);
                    }
                  },
                  r = function (t) {
                    try {
                      o(a.throw(t));
                    } catch (t) {
                      i(t);
                    }
                  },
                  o = function (i) {
                    return i.done
                      ? t(i.value)
                      : Promise.resolve(i.value).then(n, r);
                  };
                o((a = a.apply(e, null)).next());
              })
            );
            var e, a;
          },
          gotoDetail: function () {
            this.hqBridge.report("hq.stock_detail.stock_wiki", {
              stockid: this.symbol,
            }),
              "wzq" === this.hqBridge.ENV
                ? this.hqBridge.routeTo({
                    path: "/wiki/detail",
                    query: { id: this.data.id, symbol: this.symbol },
                  })
                : this.hqBridge.openExtraWebview(
                    "https://wzq.tenpay.com/mp/v2/index.html#/wiki/detail?id="
                      .concat(this.data.id, "&symbol=")
                      .concat(this.symbol, "&broker=")
                      .concat(i.isBroker)
                  );
          },
        },
      };
    Array || i.resolveComponent("HotTalk")();
    var n = i._export_sfc(a, [
      [
        "render",
        function (t, e, a, n, r, o) {
          return i.e(
            { a: r.data.title },
            r.data.title
              ? i.e(
                  {
                    b: i.n(o.isHSMarket ? "wiki-key-hs" : "wiki-key"),
                    c: r.data.thumb_image,
                  },
                  r.data.thumb_image ? { d: o.isMP ? 1 : "", e: o.imgSrc } : {},
                  { f: i.t(r.data.title), g: !o.isHSMarket },
                  (o.isHSMarket, {}),
                  {
                    h: i.n(a.wikiInfo.rank ? "rank" : ""),
                    i: i.n(o.isHSMarket ? "wiki-detail-hs" : ""),
                    j: a.wikiInfo.rank,
                  },
                  a.wikiInfo.rank ? { k: i.p({ wikiInfo: a.wikiInfo }) } : {},
                  {
                    l: i.n("black" === a.skin ? "skin-black" : ""),
                    m: i.n(o.isHSMarket ? "wiki-bar-hs" : ""),
                    n: i.o(function (t) {
                      return o.gotoDetail();
                    }, 3209),
                  }
                )
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-cdbca69f"],
    ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/stock-detail-brief/components/Wiki.js",
  }
);
require("pages/detailSbg/@tencent/stock-detail-brief/components/Wiki.js");
