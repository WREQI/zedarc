$gwx5_XC_9 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_9 || [];
    function gz$gwx5_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_9_1 = [];
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
              [[5], [[5], [1, "_div"]], [1, "rank-list"]],
              [1, "data-v-1ec8cc90"],
            ],
            [
              [2, "&&"],
              [[7], [3, "g"]],
              [1, "skin-black"],
            ],
          ],
        ]);
        Z([[7], [3, "h"]]);
        Z([3, "__l"]);
        Z([3, "data-v-1ec8cc90"]);
        Z([3, "1ec8cc90-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "1ec8cc90-1"]);
        Z(z[5]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_9 = true;
    var x = ["./pages/market/pages/PlateList.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_9_1();
      var tAT = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var bCT = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(tAT, bCT);
      var eBT = _v();
      _(tAT, eBT);
      if (_oz(z, 5, e, s, gg)) {
        eBT.wxVkey = 1;
        var oDT = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(eBT, oDT);
      }
      eBT.wxXCkey = 1;
      eBT.wxXCkey = 3;
      _(r, tAT);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/PlateList.wxml"] = [
    $gwx5_XC_9,
    "./pages/market/pages/PlateList.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/PlateList.wxml"] = $gwx5_XC_9(
    "./pages/market/pages/PlateList.wxml"
  );
__wxRoute = "pages/market/pages/PlateList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/PlateList.js";
define(
  "pages/market/pages/PlateList.js",
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
    var t = require("../../../@babel/runtime/helpers/slicedToArray"),
      e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      r = function (t, e, r) {
        return new Promise(function (n, o) {
          var a = function (t) {
              try {
                i(r.next(t));
              } catch (t) {
                o(t);
              }
            },
            s = function (t) {
              try {
                i(r.throw(t));
              } catch (t) {
                o(t);
              }
            },
            i = function (t) {
              return t.done ? n(t.value) : Promise.resolve(t.value).then(a, s);
            };
          i((r = r.apply(t, e)).next());
        });
      },
      n = require("../../../common/vendor.js"),
      o =
        (require("../@tencent/stock-hq-data/index.js"),
        require("../@tencent/stock-hq-core/utils/market.js"));
    [
      ["1", "000001"],
      ["0", "399001"],
      ["0", "399006"],
    ].map(function (t) {
      return t.join("");
    });
    var a = function (t, e) {
        return t.request(
          "https://wzq.tenpay.com/cgi-bin/stockquotation.fcgi",
          "POST",
          e,
          { forceCallback: !0 }
        );
      },
      s = {
        data: function () {
          return {
            list: [],
            skin: n.wx$1.getStorageSync("user/skin") || "white",
            hqBridge: new n.HQBridge(),
            order: "desc",
          };
        },
        computed: {
          getSortIcon: function () {
            return "desc" === this.order
              ? "https://st.gtimg.com/design/96ee808c2c42c1534830aeb9234615ec.png"
              : "https://st.gtimg.com/design/990ad4e7a7a1da68b0bcdcfa0ac37795.png";
          },
        },
        onLoad: function (t) {
          (this.order = "desc"),
            (this.urlParam = t || ""),
            this.queryData(),
            n.wx$1.setBackgroundColor({ backgroundColor: "#f5f6fa" });
          var e = (this.urlParam || {}).name,
            r = void 0 === e ? "腾讯自选股" : e;
          this.hqBridge.setTitle(decodeURIComponent(r));
        },
        onPullDownRefresh: function () {
          return r(
            this,
            null,
            e().mark(function t() {
              return e().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        this.queryData();
                      case 1:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
        },
        methods: {
          setZdpClass: function (t) {
            var e = parseFloat(t);
            return e > 0 ? "rise" : e < 0 ? "drop" : "equal";
          },
          transMarketIcon: function (t, e, r) {
            if (void 0 !== t) {
              var n = o.getMarketPYName(t);
              if (!n)
                try {
                  +t > 600 ? (n = "us") : +t > 300 && (n = "hk"),
                    ("uk" !== t &&
                      "cnjj" !== t &&
                      "cwjj" !== t &&
                      "jj" !== t &&
                      "nq" !== t &&
                      "zhai" !== t) ||
                      (n = t),
                    "ft" === t && (n = "hqzhi");
                } catch (t) {
                  return;
                }
              return (
                o.isKeChuangStock(e)
                  ? (n = "ke")
                  : o.isChuangYeStock(e) && (n = "chuang"),
                "sh" === n && r && /^68/.test(r) && (n = "ke"),
                "sz" === n && r && /^30/.test(r) && (n = "chuang"),
                "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/".concat(
                  n,
                  ".svg"
                )
              );
            }
          },
          queryData: function () {
            return r(
              this,
              null,
              e().mark(function t() {
                var r, o, s, i, c;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = this.urlParam),
                            (o = r.plate),
                            (s = r.code),
                            (i = {
                              action: "2",
                              plate: o,
                              code: s,
                              app: "zxg_xcx",
                            }),
                            (t.next = 6),
                            a(this.hqBridge, i)
                          );
                        case 6:
                          (c = t.sent),
                            (this.list = null == c ? void 0 : c.pstock),
                            this.handleSort(),
                            n.wx$1.stopPullDownRefresh();
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
          navigateToQuoteDetail: function (t) {
            var e = t.market,
              r = t.code;
            !(function (t, e, r) {
              var n = { market: e, scode: r };
              e && r && t.routeTo({ path: "/pages/quote/quote", query: n });
            })(this.hqBridge, e, r);
          },
          sortList: function () {
            (this.order = "desc" === this.order ? "asc" : "desc"),
              this.handleSort();
          },
          handleSort: function () {
            var t;
            (t =
              "desc" === this.order
                ? this.list.sort(function (t, e) {
                    return +e.zdf - +t.zdf;
                  })
                : this.list.sort(function (t, e) {
                    return +t.zdf - +e.zdf;
                  })),
              (this.list = t);
          },
          formatStockCode: function (e) {
            var r = e.split(".");
            return t(r, 1)[0];
          },
        },
      };
    Array ||
      (
        n.resolveComponent("mp-privacy-dialog") +
        n.resolveComponent("stock-privacy-dialog")
      )();
    var i = n._export_sfc(s, [
      [
        "render",
        function (t, e, r, o, a, s) {
          return {
            a: t.rootFontSize,
            b: n.p({ "no-auto": !0 }),
            c: "asc" === a.order ? 1 : "",
            d: "desc" === a.order ? 1 : "",
            e: n.o(function () {
              return s.sortList && s.sortList.apply(s, arguments);
            }, 201),
            f: n.f(a.list, function (t, e, r) {
              return {
                a: n.t(t.name),
                b: s.transMarketIcon(t.market, t.type, t.code),
                c: n.t(s.formatStockCode(t.code)),
                d: n.t(t.zjcj),
                e: n.t(t.zdf),
                f: n.n(s.setZdpClass(t.zdf)),
                g: e,
                h: n.o(
                  function (e) {
                    return s.navigateToQuoteDetail(t);
                  },
                  202,
                  e
                ),
              };
            }),
            g: "black" === a.skin ? 1 : "",
            h: a.skin,
          };
        },
      ],
      ["__scopeId", "data-v-1ec8cc90"],
    ]);
    wx.createPage(i);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/PlateList.js",
  }
);
require("pages/market/pages/PlateList.js");
