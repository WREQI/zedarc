$gwx34_XC_9 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx34_XC_9 || [];
    function gz$gwx34_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx34_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx34_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx34_XC_9_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "__l"]);
        Z([3, "data-v-a573e25a"]);
        Z([3, "a573e25a-0"]);
        Z([[7], [3, "b"]]);
        Z(z[0]);
        Z(z[1]);
        Z([3, "a573e25a-1"]);
        Z(z[3]);
      })(__WXML_GLOBAL__.ops_cached.$gwx34_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx34_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx34_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx34_XC_9 = true;
    var x = ["./pages/act/wx_subscribe.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx34_XC_9_1();
      var o2C = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 0, "class", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(r, o2C);
      var b1C = _v();
      _(r, b1C);
      if (_oz(z, 3, e, s, gg)) {
        b1C.wxVkey = 1;
        var x3C = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(b1C, x3C);
      }
      b1C.wxXCkey = 1;
      b1C.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx34_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx34_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/act/wx_subscribe.wxml"] = [
    $gwx34_XC_9,
    "./pages/act/wx_subscribe.wxml",
  ];
else
  __wxAppCode__["pages/act/wx_subscribe.wxml"] = $gwx34_XC_9(
    "./pages/act/wx_subscribe.wxml"
  );
__wxRoute = "pages/act/wx_subscribe";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/act/wx_subscribe.js";
define(
  "pages/act/wx_subscribe.js",
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
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      n = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
      t = Object.defineProperty,
      r = Object.defineProperties,
      a = Object.getOwnPropertyDescriptors,
      o = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      s = Object.prototype.propertyIsEnumerable,
      c = function (e, n, r) {
        return n in e
          ? t(e, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[n] = r);
      },
      u = function (e, n, t) {
        return new Promise(function (r, a) {
          var o = function (e) {
              try {
                s(t.next(e));
              } catch (e) {
                a(e);
              }
            },
            i = function (e) {
              try {
                s(t.throw(e));
              } catch (e) {
                a(e);
              }
            },
            s = function (e) {
              return e.done ? r(e.value) : Promise.resolve(e.value).then(o, i);
            };
          s((t = t.apply(e, n)).next());
        });
      },
      p = require("../../common/vendor.js"),
      f = {
        data: function () {
          return {
            dispStyles: ["1_123", "2_123", "3_123", "4_123"],
            buttonRows: [],
            msg: "这里展示结果",
            businesses: [],
          };
        },
        mounted: function () {
          return u(
            this,
            null,
            e().mark(function t() {
              var u, f, g, b, l, d;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (this.buttonRows = this.chunkArray(
                            this.dispStyles,
                            3
                          )),
                          (e.next = 3),
                          p.getSubscribeConfig()
                        );
                      case 3:
                        (u = e.sent.template_ids.reduce(function (e, t) {
                          var u;
                          return (
                            e.some(function (e) {
                              return e.business === t.business;
                            }) ||
                              e.push(
                                ((u = (function (e, t) {
                                  for (var r in t || (t = {}))
                                    i.call(t, r) && c(e, r, t[r]);
                                  if (o) {
                                    var a,
                                      u = n(o(t));
                                    try {
                                      for (u.s(); !(a = u.n()).done; ) {
                                        r = a.value;
                                        s.call(t, r) && c(e, r, t[r]);
                                      }
                                    } catch (e) {
                                      u.e(e);
                                    } finally {
                                      u.f();
                                    }
                                  }
                                  return e;
                                })({}, t)),
                                r(u, a({ num: 0, isSubscribed: !1 })))
                              ),
                            e
                          );
                        }, [])),
                          (this.businesses = u),
                          (f = n(this.businesses)),
                          (e.prev = 6),
                          f.s();
                      case 8:
                        if ((g = f.n()).done) {
                          e.next = 25;
                          break;
                        }
                        return (
                          (b = g.value),
                          (e.prev = 10),
                          (e.next = 13),
                          p.getTemplateId(b.business)
                        );
                      case 13:
                        return (
                          (l = e.sent), (e.next = 16), p.querySubscribeSwitch(l)
                        );
                      case 16:
                        (d = e.sent),
                          (b.isSubscribed = "accept" === d.status),
                          (e.next = 23);
                        break;
                      case 20:
                        (e.prev = 20),
                          (e.t0 = e.catch(10)),
                          (b.isSubscribed = !1);
                      case 23:
                        e.next = 8;
                        break;
                      case 25:
                        e.next = 30;
                        break;
                      case 27:
                        (e.prev = 27), (e.t1 = e.catch(6)), f.e(e.t1);
                      case 30:
                        return (e.prev = 30), f.f(), e.finish(30);
                      case 33:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                this,
                [
                  [6, 27, 30, 33],
                  [10, 20],
                ]
              );
            })
          );
        },
        methods: {
          chunkArray: function (e, n) {
            for (var t = [], r = 0; r < e.length; r += n)
              t.push(e.slice(r, r + n));
            return t;
          },
          navigateToUnion: function (e) {
            p.wx$1.navigateTo({
              url: "/pages/yy/ams?disp_style=".concat(e, "&dealer=10100"),
            });
          },
          subscribe: function (n) {
            return u(
              this,
              null,
              e().mark(function t() {
                var r,
                  a = this;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), p.getTemplateId(n);
                      case 2:
                        (r = e.sent),
                          p
                            .subscribe(n, r)
                            .then(function (e) {
                              a.msg = "subscribe: "
                                .concat(e || "", " ")
                                .concat(e.errMsg || "");
                              var t = a.businesses.find(function (e) {
                                return e.business === n;
                              });
                              t && (t.num++, (t.isSubscribed = !0));
                            })
                            .catch(function (e) {});
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
          silentSubscribe: function (e) {
            ["price_remind", "calendar_event", "gudan_notice"].includes(e)
              ? p.silentSubscribe()
              : p.silentSubscribe(e);
          },
          goToSearchImgOcr: function () {
            p.wx$1.navigateTo({
              url: "/pages/additional/search/imgOcr?_scene_from_=2",
            });
          },
          goToMorningReport: function () {
            p.wx$1.navigateTo({
              url: "/pages/report/morning/main?id=SN20250520070735a6e53ce6&type=4&isfrom=msg&stat_data=OyT00p000f069&articleStyle=card&__push_flag__=1&subtype=morningreportcard&__template_report_id__=zixunmorningreport&symbols=&_scene_from_=1012",
            });
          },
          goToDailyReport: function () {
            p.wx$1.navigateTo({
              url: "/pages/report/daily/main?isgray=1&from=msg&id=2025052002&__template_report_id__=marketnotice.after&__push_flag__=1&_scene_from_=1012",
            });
          },
          navigateToWechatHotSearch: function () {
            p.wx$1.navigateTo({
              url: "/pages/additional/search/hot_stock/main?tabId=1&_scene_from_=1012",
            });
          },
          navigateToInvestmentTopList: function () {
            p.wx$1.switchTab({
              url: "/pages/index/discover/main?toindex=top&_scene_from_=1012",
            });
          },
          navigateToBuffettStockList: function () {
            p.wx$1.navigateTo({
              url: "/pages/stockBasket/detail?gdId=gd000628&_scene_from_=1012",
            });
          },
          navigateToEtfRank: function (e, n, t, r) {
            p.wx$1.navigateTo({
              url: "/pages/act/guide/broker?broker="
                .concat(n, "&label=")
                .concat(t, "&stat_data=")
                .concat(e, "&key=")
                .concat(r),
            });
          },
          navigateToBank: function (e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            p.wx$1.navigateTo({
              url: "/pages/act/channeldesignatedbank/main?stat_data="
                .concat(e)
                .concat(n ? "&bank=" + n : ""),
            });
          },
        },
      };
    Array ||
      (
        p.resolveComponent("mp-privacy-dialog") +
        p.resolveComponent("stock-privacy-dialog")
      )();
    var g = p._export_sfc(f, [
      [
        "render",
        function (e, n, t, r, a, o) {
          return {
            a: e.rootFontSize,
            b: p.p({ "no-auto": !0 }),
            c: p.f(a.buttonRows, function (e, n, t) {
              return {
                a: p.f(e, function (e, n, t) {
                  return {
                    a: p.t(e),
                    b: n,
                    c: p.o(
                      function (n) {
                        return o.navigateToUnion(e);
                      },
                      375,
                      n
                    ),
                  };
                }),
                b: n,
              };
            }),
            d: p.o(function () {
              return (
                o.goToSearchImgOcr && o.goToSearchImgOcr.apply(o, arguments)
              );
            }, 376),
            e: p.o(function () {
              return (
                o.goToMorningReport && o.goToMorningReport.apply(o, arguments)
              );
            }, 377),
            f: p.o(function () {
              return o.goToDailyReport && o.goToDailyReport.apply(o, arguments);
            }, 378),
            g: p.o(function () {
              return (
                o.navigateToWechatHotSearch &&
                o.navigateToWechatHotSearch.apply(o, arguments)
              );
            }, 379),
            h: p.o(function () {
              return (
                o.navigateToInvestmentTopList &&
                o.navigateToInvestmentTopList.apply(o, arguments)
              );
            }, 380),
            i: p.o(function () {
              return (
                o.navigateToBuffettStockList &&
                o.navigateToBuffettStockList.apply(o, arguments)
              );
            }, 381),
            j: p.o(function (e) {
              return o.navigateToEtfRank(
                "Ig600p000k",
                "10800",
                "etfrank",
                "yifangda"
              );
            }, 382),
            k: p.f(a.businesses, function (e, n, t) {
              return p.e(
                { a: p.t(e.business), b: e.isSubscribed },
                (e.isSubscribed, {}),
                {
                  c: p.o(
                    function () {
                      return o.subscribe(e.business);
                    },
                    383,
                    n
                  ),
                  d: p.o(
                    function () {
                      return o.silentSubscribe(e.business);
                    },
                    384,
                    n
                  ),
                  e: p.t(e.num || 0),
                  f: n,
                }
              );
            }),
            l: p.t(a.msg),
            m: p.o(function (e) {
              return o.navigateToBank("OlP01p000k011");
            }, 385),
            n: p.o(function (e) {
              return o.navigateToBank("OZB00p000g051", "icbc");
            }, 386),
            o: p.o(function (e) {
              return o.navigateToBank("OZB00p000g050", "boc");
            }, 387),
            p: p.o(function (e) {
              return o.navigateToBank("OZB00p000g053", "comm");
            }, 388),
            q: p.o(function (e) {
              return o.navigateToBank("OZB00p000g052", "abc");
            }, 389),
          };
        },
      ],
      ["__scopeId", "data-v-a573e25a"],
    ]);
    wx.createPage(g);
  },
  { isPage: true, isComponent: true, currentFile: "pages/act/wx_subscribe.js" }
);
require("pages/act/wx_subscribe.js");
