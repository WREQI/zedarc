$gwx1_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_2 || [];
    function gz$gwx1_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_2 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_2_1();
      var cT = _v();
      _(r, cT);
      if (_oz(z, 0, e, s, gg)) {
        cT.wxVkey = 1;
      }
      cT.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml"
  ] = [
    $gwx1_XC_2,
    "./pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml"
  ] = $gwx1_XC_2(
    "./pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.wxml"
  );
__wxRoute = "pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.js";
define(
  "pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.js",
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
    var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = function (e, t, i) {
        return new Promise(function (n, o) {
          var r = function (e) {
              try {
                u(i.next(e));
              } catch (e) {
                o(e);
              }
            },
            s = function (e) {
              try {
                u(i.throw(e));
              } catch (e) {
                o(e);
              }
            },
            u = function (e) {
              return e.done ? n(e.value) : Promise.resolve(e.value).then(r, s);
            };
          u((i = i.apply(e, t)).next());
        });
      },
      i = require("../../../../../common/vendor.js"),
      n = {
        props: ["premote"],
        inject: { stockBridge: { default: function () {} } },
        data: function () {
          return {
            advConfig: null,
            advPicInfo: null,
            advStyleConfig: {},
            showAdv: !1,
            premoteNew: null,
            elTopCal: "",
          };
        },
        watch: {
          premote: {
            immediate: !0,
            handler: function (e) {
              var t,
                i,
                n,
                o,
                r,
                s,
                u = this;
              e &&
                ((this.premoteNew = e),
                e.ad_list &&
                  e.ad_list.length > 0 &&
                  (this.advConfig = e.ad_list[0]),
                (this.advStyleConfig = JSON.parse(
                  null ==
                    (i =
                      null == (t = null == e ? void 0 : e.component_param)
                        ? void 0
                        : t.component_style)
                    ? void 0
                    : i.template
                )),
                (this.advPicInfo =
                  null ==
                  (o = null == (n = this.stockBridge) ? void 0 : n.deliverySdk)
                    ? void 0
                    : o.deliveryFormatPic(this.premoteNew)),
                this.preSettimeout && clearTimeout(this.preSettimeout),
                (this.preSettimeout = null),
                (null == (r = this.advStyleConfig) ? void 0 : r.pre_wait_second)
                  ? (this.preSettimeout = setTimeout(function () {
                      u.showGuide();
                    }, 1e3 *
                      (null == (s = this.advStyleConfig)
                        ? void 0
                        : s.pre_wait_second)))
                  : this.showGuide());
            },
          },
        },
        onPageHide: function () {
          this.closeAndClear();
        },
        methods: {
          closeAndClear: function () {
            (this.showAdv = !1),
              this.hideSettimeout && clearTimeout(this.hideSettimeout),
              (this.hideSettimeout = null),
              this.preSettimeout && clearTimeout(this.preSettimeout),
              (this.preSettimeout = null);
          },
          showGuide: function () {
            var e,
              t,
              i = this;
            (this.showAdv = !0),
              this.calBubblePosition(),
              this.reportShow(),
              this.hideSettimeout && clearTimeout(this.hideSettimeout),
              (this.hideSettimeout = null),
              (null == (e = this.advStyleConfig) ? void 0 : e.exp_hold_s) &&
                (this.hideSettimeout = setTimeout(function () {
                  i.showAdv = !1;
                }, 1e3 *
                  (null == (t = this.advStyleConfig) ? void 0 : t.exp_hold_s)));
          },
          calBubblePosition: function () {
            return t(
              this,
              null,
              e().mark(function t() {
                var n, o, r, s, u;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            (n = i.wx$1
                              .createSelectorQuery()
                              .in(this.$parent)
                              .select(".delivery-guide-pulldown-access")))
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt("return");
                        case 4:
                          return (e.next = 6), this.getNodeWidth(n);
                        case 6:
                          if ((o = e.sent)) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          (r = o.height),
                            (s = o.top),
                            (u = 750 / this.getWindowWidth()),
                            (this.elTopCal = "".concat(s + r + 12 / u, "px")),
                            (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13),
                            (e.t0 = e.catch(0)),
                            (this.elTopCal = "182px");
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 13]]
                );
              })
            );
          },
          getWindowWidth: function () {
            var e;
            return (
              i.index.getSystemInfo({
                success: function (t) {
                  e = t.windowWidth;
                },
              }),
              e
            );
          },
          getNodeWidth: function (i) {
            return t(
              this,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          new Promise(function (e) {
                            i.boundingClientRect(function (t) {
                              e(t);
                            }).exec();
                          })
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
          reportShow: function () {
            var e, t;
            null ==
              (t = null == (e = this.stockBridge) ? void 0 : e.deliverySdk) ||
              t.deliveryMtaAndRport(this.premote, "show");
          },
          clickAdv: function () {
            var e, t;
            this.closeAndClear(),
              null ==
                (t = null == (e = this.stockBridge) ? void 0 : e.deliverySdk) ||
                t.deliveryMtaAndRport(this.premote, "click");
          },
        },
      },
      o = i._export_sfc(n, [
        [
          "render",
          function (e, t, n, o, r, s) {
            return i.e(
              {
                a:
                  r.showAdv &&
                  r.premoteNew &&
                  r.advPicInfo &&
                  r.advPicInfo.ad_pic,
              },
              r.showAdv && r.premoteNew && r.advPicInfo && r.advPicInfo.ad_pic
                ? {
                    b: "url(".concat(r.advPicInfo.ad_pic, ")"),
                    c: "".concat(r.elTopCal),
                    d: i.o(function () {
                      return s.clickAdv && s.clickAdv.apply(s, arguments);
                    }, 2185),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-bc0fb375"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.js",
  }
);
require("pages/asyncCom/@tencent/st-delivery-guide-pulldown-access/src/mp.js");
