$gwx1_XC_32 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_32 || [];
    function gz$gwx1_XC_32_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_32_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_32_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_32_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div banner-content data-v-168d42c3"]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "h"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_32_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_32_1;
    }
    function gz$gwx1_XC_32_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_32_2)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_32_2;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_32_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "c"]]);
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "a"]]);
        Z([3, "d235d57e-0"]);
        Z(z[0]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_32_2);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_32_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_32 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_32 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner.wxml",
      "./pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_32_1();
      var eBM = _v();
      _(r, eBM);
      if (_oz(z, 0, e, s, gg)) {
        eBM.wxVkey = 1;
        var bCM = _n("view");
        _rz(z, bCM, "class", 1, e, s, gg);
        var oDM = _v();
        _(bCM, oDM);
        if (_oz(z, 2, e, s, gg)) {
          oDM.wxVkey = 1;
        }
        var xEM = _v();
        _(bCM, xEM);
        if (_oz(z, 3, e, s, gg)) {
          xEM.wxVkey = 1;
        }
        oDM.wxXCkey = 1;
        xEM.wxXCkey = 1;
        _(eBM, bCM);
      }
      eBM.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_32_2();
      var fGM = _v();
      _(r, fGM);
      if (_oz(z, 0, e, s, gg)) {
        fGM.wxVkey = 1;
        var cHM = _mz(
          z,
          "adv-banner",
          ["bind:__l", 1, "bindclick", 1, "bindclose", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(fGM, cHM);
      }
      fGM.wxXCkey = 1;
      fGM.wxXCkey = 3;
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_32";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_32();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner.wxml"
  ] = [
    $gwx1_XC_32,
    "./pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner.wxml"
  ] = $gwx1_XC_32(
    "./pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.wxml"
  ] = [
    $gwx1_XC_32,
    "./pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.wxml"
  ] = $gwx1_XC_32(
    "./pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.wxml"
  );
__wxRoute =
  "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner.js";
define(
  "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner.js",
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
    var e = require("../../../../../../../common/vendor.js"),
      t = {
        props: {
          showAdv: { type: Boolean, default: !0 },
          type: { type: String, default: "" },
          close: { type: Boolean, default: !0 },
          sideLeft: { type: Boolean, default: !1 },
          size: { type: String, default: "" },
          advInfo: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        data: function () {
          return {
            initBgUrl:
              "https://st.gtimg.com/design/0011f8d48d9cffdb0a93e3843eaab8c9.png",
            sideLeftStart: !1,
            visible: !0,
          };
        },
        created: function () {
          this.$emit("show");
        },
        methods: {
          loadImage: function () {
            var e = this;
            setTimeout(function () {
              e.sideLeft && (e.sideLeftStart = !0);
            }, 500);
          },
          handleCloseAdv: function () {
            (this.visible = !1), this.$emit("close");
          },
          handleClickBg: function () {
            this.advInfo.btn_pic || this.$emit("click");
          },
          handleClickBtn: function () {
            this.$emit("click");
          },
        },
      },
      n = e._export_sfc(t, [
        [
          "render",
          function (t, n, i, o, a, d) {
            return e.e(
              { a: i.showAdv && a.visible },
              i.showAdv && a.visible
                ? e.e(
                    {
                      b: i.advInfo.imgurl ? i.advInfo.imgurl : a.initBgUrl,
                      c: e.o(function () {
                        return d.loadImage && d.loadImage.apply(d, arguments);
                      }, 3819),
                      d: e.o(function () {
                        return (
                          d.handleClickBg && d.handleClickBg.apply(d, arguments)
                        );
                      }, 3820),
                      e: i.advInfo.btn_pic,
                    },
                    i.advInfo.btn_pic
                      ? {
                          f: i.advInfo.btn_pic,
                          g: e.o(function () {
                            return (
                              d.handleClickBtn &&
                              d.handleClickBtn.apply(d, arguments)
                            );
                          }, 3821),
                        }
                      : {},
                    { h: i.close },
                    i.close
                      ? {
                          i: e.o(function () {
                            return (
                              d.handleCloseAdv &&
                              d.handleCloseAdv.apply(d, arguments)
                            );
                          }, 3822),
                        }
                      : {},
                    {
                      j: e.n("adv-".concat(i.type)),
                      k: e.n(i.sideLeft ? "side-left" : ""),
                      l: e.n(
                        i.sideLeft && a.sideLeftStart
                          ? "side-left-animation"
                          : ""
                      ),
                      m: e.n("yy-adv-".concat(i.size)),
                    }
                  )
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-168d42c3"],
      ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner.js",
  }
);
require("pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/advBanner.js");
__wxRoute =
  "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.js";
define(
  "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.js",
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
    require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../../../../../@babel/runtime/helpers/classCallCheck"),
      n = require("../../../../../../../@babel/runtime/helpers/createClass"),
      r = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      a = Object.defineProperty,
      o = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable,
      s = function (e, t, n) {
        return t in e
          ? a(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
      },
      c = function (e, t) {
        for (var n in t || (t = {})) i.call(t, n) && s(e, n, t[n]);
        if (o) {
          var a,
            c = r(o(t));
          try {
            for (c.s(); !(a = c.n()).done; ) {
              n = a.value;
              u.call(t, n) && s(e, n, t[n]);
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
        }
        return e;
      },
      l = function (e, t, n) {
        return new Promise(function (r, a) {
          var o = function (e) {
              try {
                u(n.next(e));
              } catch (e) {
                a(e);
              }
            },
            i = function (e) {
              try {
                u(n.throw(e));
              } catch (e) {
                a(e);
              }
            },
            u = function (e) {
              return e.done ? r(e.value) : Promise.resolve(e.value).then(o, i);
            };
          u((n = n.apply(e, t)).next());
        });
      },
      p = require("../../../../../../../common/vendor.js"),
      h = require("../../../../st-adapter/src/mta/index.js"),
      d = require("../../../../st-adapter/src/navigator/mp.js"),
      f = {
        setup: function () {
          return {
            premoteInfo: getApp().globalData.usePremoteInfo().premoteInfo,
          };
        },
        data: function () {
          return {
            adType: "",
            premote: null,
            appRouteCallback: null,
            hasBottomBar: !1,
            returnArray: !1,
            comPath: "",
          };
        },
        watch: {
          premoteInfo: function (e) {
            this.comPath === e.path &&
              e[this.adType] &&
              e[this.adType].length > 0 &&
              ((this.premote = this.returnArray
                ? e[this.adType]
                : e[this.adType][0]),
              (this.hasBottomBar = e.hasBottomBar));
          },
        },
        created: function () {
          var e = this;
          (this.comPath = this.getPagePath()),
            (this.appRouteCallback = function () {
              e.premote = null;
            }),
            p.wx$1.onAppRoute(this.appRouteCallback);
        },
        beforeDestroy: function () {
          if (this.appRouteCallback && p.wx$1.offAppRoute) {
            try {
              p.wx$1.offAppRoute(this.appRouteCallback);
            } catch (e) {}
            this.appRouteCallback = null;
          }
        },
        methods: {
          initPremoteData: function (e, t) {
            (this.adType = e), (this.returnArray = t);
          },
          getPagePath: function () {
            var e = getCurrentPages();
            return e[e.length - 1].route;
          },
          clearPremoteDataCache: function () {
            this.premoteInfo[this.adType] &&
              delete this.premoteInfo[this.adType];
          },
        },
      };
    window && window.$broker && window.$broker.id;
    var b = "https://wzq.tenpay.com/cgi-bin/ad.fcgi",
      m = new ((function () {
        function r() {
          t(this, r);
        }
        return (
          n(r, [
            {
              key: "query",
              value: function (t) {
                return l(
                  this,
                  null,
                  e().mark(function n() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              h
                                .request(b, c({ action: 1 }, t), {
                                  method: "GET",
                                })
                                .then(function (e) {
                                  return e.data;
                                })
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, n);
                  })
                );
              },
            },
            {
              key: "update",
              value: function (t) {
                return l(
                  this,
                  null,
                  e().mark(function n() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              h
                                .request(b, c({ action: 2 }, t))
                                .then(function (e) {
                                  return e.data;
                                })
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, n);
                  })
                );
              },
            },
          ]),
          r
        );
      })())(),
      y = {},
      v = ["zx_top_banner"],
      w = {
        components: {
          AdvBanner: function () {
            return "./advBanner.js";
          },
        },
        mixins: [f],
        props: {
          type: { type: String, default: "" },
          size: { type: String, default: "" },
          isUpdate: { type: Boolean, default: !1 },
          sideLeft: { type: Boolean, default: !1 },
        },
        data: function () {
          return { showBanner: !1, bannerData: null };
        },
        watch: {
          premote: {
            handler: function (e) {
              var t = this;
              e
                ? ((this.bannerData = e),
                  setTimeout(function () {
                    t.showBanner = !0;
                  }, 1e3))
                : ((this.showBanner = !1), (this.bannerData = null));
            },
            immediate: !0,
          },
        },
        mounted: function () {
          this.initPremoteData("newsdetail");
        },
        methods: {
          handleBannerClose: function () {
            var t, n, r, a, o;
            this.isUpdate &&
              this.bannerData &&
              ((a = null == (t = this.bannerData) ? void 0 : t.adid),
              (o = null == (n = this.bannerData) ? void 0 : n.ad_type),
              l(
                exports,
                null,
                e().mark(function t() {
                  var n, r;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = { adid: a, ad_type: o, channel: 4 }),
                            ["zx_top_banner", "stockdetail_banner"].includes(
                              o
                            ) || (n.oper = 2),
                            (r = y[o]) &&
                              r.adid === a &&
                              (r.show_disabled_front = !0),
                            (e.next = 6),
                            m.update(n)
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, t);
                })
              )),
              h.reportMta(
                "".concat(
                  null == (r = this.bannerData) ? void 0 : r.ad_type,
                  "_close"
                ),
                this.bannerData
              ),
              this.clearPremoteDataCache();
          },
          handleBannerClick: function () {
            return l(
              this,
              null,
              e().mark(function t() {
                var n, r, a, o, i, u;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (h.reportMta(
                              "".concat(
                                null == (n = this.bannerData)
                                  ? void 0
                                  : n.ad_type,
                                "_click"
                              ),
                              this.bannerData
                            ),
                            (t.t0 = this.isUpdate && this.bannerData),
                            !t.t0)
                          ) {
                            t.next = 5;
                            break;
                          }
                          return (
                            (t.next = 5),
                            (o = this.type),
                            (i =
                              null == (r = this.bannerData)
                                ? void 0
                                : r.report_info),
                            (u =
                              null == (a = this.bannerData) ? void 0 : a.adid),
                            l(
                              exports,
                              null,
                              e().mark(function t() {
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          m.update({
                                            channel: 4,
                                            ad_type: o,
                                            report_info: i,
                                            adid: u,
                                          })
                                        );
                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, t);
                              })
                            )
                          );
                        case 5:
                          v.includes(this.type) && (this.showBanner = !1),
                            this.bannerData.link &&
                              d.jump({ path: this.bannerData.link });
                        case 7:
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
        },
      };
    Array || p.resolveComponent("AdvBanner")();
    var k = p._export_sfc(w, [
      [
        "render",
        function (e, t, n, r, a, o) {
          return {
            a: p.o(o.handleBannerClose, 2129),
            b: p.o(o.handleBannerClick, 2130),
            c: p.p({
              "show-adv": a.showBanner,
              "adv-info": a.bannerData,
              type: n.type,
              size: n.size,
              "side-left": n.sideLeft,
            }),
          };
        },
      ],
    ]);
    wx.createComponent(k);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.js",
  }
);
require("pages/asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.js");
