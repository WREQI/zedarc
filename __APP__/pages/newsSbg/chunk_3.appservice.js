$gwx21_XC_15 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_15 || [];
    function gz$gwx21_XC_15_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_15_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_15_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_15_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "k"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-de3dcdfe"]],
              [1, "stock-container"],
            ],
            [[7], [3, "j"]],
          ],
        ]);
        Z([[7], [3, "b"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_15_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_15_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_15 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_15 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-news-base/components/relatedStock.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_15_1();
      var c1R = _v();
      _(r, c1R);
      if (_oz(z, 0, e, s, gg)) {
        c1R.wxVkey = 1;
        var o2R = _mz(z, "view", ["catchtap", 1, "class", 1], [], e, s, gg);
        var l3R = _v();
        _(o2R, l3R);
        if (_oz(z, 3, e, s, gg)) {
          l3R.wxVkey = 1;
        }
        l3R.wxXCkey = 1;
        _(c1R, o2R);
      }
      c1R.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_15";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_15();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-news-base/components/relatedStock.wxml"
  ] = [
    $gwx21_XC_15,
    "./pages/newsSbg/@tencent/stock-news-base/components/relatedStock.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-news-base/components/relatedStock.wxml"
  ] = $gwx21_XC_15(
    "./pages/newsSbg/@tencent/stock-news-base/components/relatedStock.wxml"
  );
__wxRoute = "pages/newsSbg/@tencent/stock-news-base/components/relatedStock";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/newsSbg/@tencent/stock-news-base/components/relatedStock.js";
define(
  "pages/newsSbg/@tencent/stock-news-base/components/relatedStock.js",
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
      e = require("../service/market/RelatedStockUtils.js"),
      o = require("../../stock-news-core/utils/routerJump.js"),
      n = require("../../../../../common/vendor.js"),
      r = require("../../stock-news-core/utils/force2https.js"),
      i = require("../../stock-news-core/utils/market.js"),
      c = { IS_CCM_XCX: !1 },
      s = c.IS_CCM_XCX,
      a = c.IS_ZXG,
      d = {
        name: "RelatedStock",
        inject: {
          didAgreeUserAgreement: {
            default: function () {
              return { value: !0 };
            },
          },
          onCheckUserAgreementStatus: {
            default: function () {
              return function () {};
            },
          },
        },
        props: {
          extra_info: {
            type: Object,
            default: function () {
              return {
                stock_code: "0",
                stock_name: "三六零",
                chg_percent: "10.3",
              };
            },
          },
          newsId: { type: String, default: "" },
          reportData: {
            type: Object,
            default: function () {
              return {
                prefix: { type: String, default: "" },
                fchannel_id_fm_i: { type: String, default: "" },
              };
            },
          },
          brow_y_offset: { type: String, default: "-70px" },
          enableSkinChange: { type: Boolean, default: !0 },
        },
        data: function () {
          return { isPortFolioAdded: !1 };
        },
        computed: {
          zxgXcxType: function () {
            return !0;
          },
        },
        created: function () {
          var t = this;
          (this.isPortFolioAdded =
            e.RelatedStockUtils.getInstance().isStockInPortfolio(
              this.getStockCode()
            )),
            (this.relatedStockChangeListener = function (e) {
              t.isPortFolioAdded = 1 === e[t.getStockCode()];
            }),
            n.StockBridge.busOn(
              "news-RelatedStockChange",
              this.relatedStockChangeListener
            );
        },
        beforeDestroy: function () {
          n.StockBridge.busOff(
            "news-RelatedStockChange",
            this.relatedStockChangeListener
          );
        },
        methods: {
          getVisibleSetting: function () {
            return {
              callback: function (t) {},
              once: !0,
              intersection: { threshold: 0.5, rootMargin: this.brow_y_offset },
            };
          },
          reportBrow: function () {
            var t = this.getStockReportDic();
            n.StockBridge.report(
              "".concat(this.reportData.prefix, ".related_stock_brow"),
              t
            );
          },
          getStockReportDic: function () {
            return {
              fchannel_id_fm_i: this.reportData.fchannel_id_fm_i,
              newsid: this.newsId,
              stocklist: this.getStockCode(),
              positionlist: "0",
              hasaddlist: this.isPortFolioAdded ? "1" : "0",
              foperation_purpose: "zixuan",
            };
          },
          getStockCode: function () {
            var t;
            return null == (t = this.extra_info) ? void 0 : t.stock_code;
          },
          getStockName: function () {
            return this.extra_info.stock_name;
          },
          getStockChange: function () {
            return this.extra_info.chg_percent;
          },
          getStockIcon: function () {
            return r.forceHttpsAdvanced(
              i.getMarketIcon(this.getStockCode()) || ""
            );
          },
          getStockChangeColor: function () {
            var t = this.getStockChange();
            return t > 0 ? "red" : t < 0 ? "green" : "stop";
          },
          getStockChangeText: function () {
            var t = this.getStockChange();
            return t > 0
              ? "+".concat(t, "%")
              : t < 0
              ? "".concat(t, "%")
              : "0.00%";
          },
          getStockType: function () {
            return this.getStockCode().substr(0, 2).toUpperCase();
          },
          isHaveData: function () {
            var t, e;
            return (
              (null ==
              (e = null == (t = this.extra_info) ? void 0 : t.stock_name)
                ? void 0
                : e.length) > 0
            );
          },
          checkAppLogin: function () {
            return new Promise(function (t) {
              shy.getUserInfo(function (e) {
                t(e && "none" !== e.type);
              });
            });
          },
          addStockToZixuan: function () {
            return (
              (o = this),
              null,
              (r = t().mark(function () {
                var o,
                  r,
                  i,
                  c = this;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (null == (o = this.didAgreeUserAgreement)
                              ? void 0
                              : o.value) ||
                            "function" != typeof this.onCheckUserAgreementStatus
                          ) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            void this.onCheckUserAgreementStatus()
                          );
                        case 2:
                          if (((t.t0 = a), !t.t0)) {
                            t.next = 7;
                            break;
                          }
                          return (t.next = 6), this.checkAppLogin();
                        case 6:
                          t.t0 = !t.sent;
                        case 7:
                          if (!t.t0) {
                            t.next = 9;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            void shy.login(function (t) {
                              "success" === t.status && c.addStockToZixuan();
                            })
                          );
                        case 9:
                          !this.isPortFolioAdded &&
                            s &&
                            n.StockBridge.busEmit("common-follow-modal-show", {
                              stat: "OyM00p000k011",
                              type: "qrcode",
                              qrcodeImg:
                                "https://st.gtimg.com/design/5a69781847d1ee3faa2deb232b6bad7f.png",
                            }),
                            (r = !this.isPortFolioAdded),
                            e.RelatedStockUtils.getInstance().requestStockToAdd(
                              r,
                              this.getStockCode()
                            ),
                            (i = "".concat(
                              this.reportData.prefix,
                              ".related_stock_add"
                            )),
                            r ||
                              (i = "".concat(
                                this.reportData.prefix,
                                ".related_stock_cancel"
                              )),
                            n.StockBridge.report(i, {
                              fchannel_id_fm_i:
                                this.reportData.fchannel_id_fm_i,
                              newsid: this.newsId,
                              stocklist: this.getStockCode(),
                              stockid: this.getStockCode(),
                              hasaddlist: r ? "1" : "0",
                              foperation_purpose: "zixuan",
                            });
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  i,
                  this
                );
              })),
              new Promise(function (t, e) {
                var n = function (t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  i = function (t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  c = function (e) {
                    return e.done
                      ? t(e.value)
                      : Promise.resolve(e.value).then(n, i);
                  };
                c((r = r.apply(o, null)).next());
              })
            );
            var o, r;
          },
          jumpToStockDetail: function () {
            var t = {
              fchannel_id_fm_i: this.reportData.fchannel_id_fm_i,
              newsid: this.newsId,
              stocklist: this.getStockCode(),
              stockid: this.getStockCode(),
              hasaddlist: this.isPortFolioAdded ? "1" : "0",
            };
            o.routerJump.gotoDetail(t),
              n.StockBridge.report(
                "".concat(this.reportData.prefix, ".relate_stock_click"),
                t
              );
          },
        },
      },
      u = n._export_sfc(d, [
        [
          "render",
          function (t, e, o, r, i, c) {
            return n.e(
              { a: c.isHaveData() },
              c.isHaveData()
                ? n.e(
                    { b: c.getStockType() },
                    c.getStockType()
                      ? { c: "url(".concat(c.getStockIcon(), ")") }
                      : {},
                    {
                      d: n.t(c.getStockName()),
                      e: n.t(c.getStockChangeText()),
                      f: n.n(c.getStockChangeColor()),
                      g: i.isPortFolioAdded,
                    },
                    (i.isPortFolioAdded, {}),
                    {
                      h: n.n(c.zxgXcxType ? "zxg-xcx-add" : ""),
                      i: n.o(function (t) {
                        return c.addStockToZixuan();
                      }, 4227),
                      j: n.n(o.enableSkinChange ? "skin-change" : ""),
                      k: n.o(function (t) {
                        return c.jumpToStockDetail();
                      }, 4228),
                    }
                  )
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-de3dcdfe"],
      ]);
    wx.createComponent(u);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/newsSbg/@tencent/stock-news-base/components/relatedStock.js",
  }
);
require("pages/newsSbg/@tencent/stock-news-base/components/relatedStock.js");
