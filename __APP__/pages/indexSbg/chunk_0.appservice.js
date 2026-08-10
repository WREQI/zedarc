$gwx50_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx50_XC_0 || [];
    function gz$gwx50_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx50_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx50_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx50_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div portrait-apply-guide-card-container"]);
        Z([3, "_div text"]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "e"]]);
        Z([3, "item"]);
        Z([[7], [3, "f"]]);
        Z([3, "c"]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "k"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx50_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx50_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx50_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx50_XC_0 = true;
    var x = ["./pages/indexSbg/@tencent/st-portrait-apply-card/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx50_XC_0_1();
      var oB = _v();
      _(r, oB);
      if (_oz(z, 0, e, s, gg)) {
        oB.wxVkey = 1;
        var xC = _n("view");
        _rz(z, xC, "class", 1, e, s, gg);
        var fE = _n("view");
        _rz(z, fE, "class", 2, e, s, gg);
        var cF = _v();
        _(fE, cF);
        if (_oz(z, 3, e, s, gg)) {
          cF.wxVkey = 1;
        }
        var hG = _v();
        _(fE, hG);
        if (_oz(z, 4, e, s, gg)) {
          hG.wxVkey = 1;
          var cI = _v();
          _(hG, cI);
          var oJ = function (aL, lK, tM, gg) {
            var bO = _v();
            _(tM, bO);
            if (_oz(z, 8, aL, lK, gg)) {
              bO.wxVkey = 1;
            }
            bO.wxXCkey = 1;
            return tM;
          };
          cI.wxXCkey = 2;
          _2z(z, 6, oJ, e, s, gg, cI, "item", "index", "c");
        }
        var oH = _v();
        _(fE, oH);
        if (_oz(z, 9, e, s, gg)) {
          oH.wxVkey = 1;
        }
        cF.wxXCkey = 1;
        hG.wxXCkey = 1;
        oH.wxXCkey = 1;
        _(xC, fE);
        var oD = _v();
        _(xC, oD);
        if (_oz(z, 10, e, s, gg)) {
          oD.wxVkey = 1;
        }
        oD.wxXCkey = 1;
        _(oB, xC);
      }
      oB.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx50_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx50_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/indexSbg/@tencent/st-portrait-apply-card/index.wxml"] = [
    $gwx50_XC_0,
    "./pages/indexSbg/@tencent/st-portrait-apply-card/index.wxml",
  ];
else
  __wxAppCode__["pages/indexSbg/@tencent/st-portrait-apply-card/index.wxml"] =
    $gwx50_XC_0("./pages/indexSbg/@tencent/st-portrait-apply-card/index.wxml");
__wxRoute = "pages/indexSbg/@tencent/st-portrait-apply-card/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/indexSbg/@tencent/st-portrait-apply-card/index.js";
define(
  "pages/indexSbg/@tencent/st-portrait-apply-card/index.js",
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
    var t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
      i = Object.defineProperty,
      a = Object.defineProperties,
      n = Object.getOwnPropertyDescriptors,
      r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable,
      s = function (t, e, a) {
        return e in t
          ? i(t, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a,
            })
          : (t[e] = a);
      },
      c = function (t, e, i) {
        return new Promise(function (a, n) {
          var r = function (t) {
              try {
                u(i.next(t));
              } catch (t) {
                n(t);
              }
            },
            o = function (t) {
              try {
                u(i.throw(t));
              } catch (t) {
                n(t);
              }
            },
            u = function (t) {
              return t.done ? a(t.value) : Promise.resolve(t.value).then(r, o);
            };
          u((i = i.apply(t, e)).next());
        });
      },
      l = require("../../../../common/vendor.js"),
      h = {
        props: ["len", "config", "premote"],
        data: function () {
          return { abtType: "1", uiData: {}, isShow: !1, nowIndex: 0 };
        },
        watch: {
          len: {
            immediate: !0,
            handler: function (t, e) {
              e &&
                t > e &&
                this.isShow &&
                ((this.isShow = !1),
                this.$emit("updateHasDefaultChooseAdded", "added"));
            },
          },
        },
        created: function () {
          return c(
            this,
            null,
            e().mark(function t() {
              return e().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        this.initData();
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
          initData: function () {
            return c(
              this,
              null,
              e().mark(function i() {
                var c, h, p, d;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          try {
                            l.StockBridge.report(
                              "yy.choose_guide_card.wzq_newuser_homepage_bigcardapply_brow",
                              { fchannel_id_fm_i: "I0100p000a005" }
                            ),
                              (this.uiData =
                                ((p = (function (e, i) {
                                  for (var a in i || (i = {}))
                                    o.call(i, a) && s(e, a, i[a]);
                                  if (r) {
                                    var n,
                                      c = t(r(i));
                                    try {
                                      for (c.s(); !(n = c.n()).done; ) {
                                        a = n.value;
                                        u.call(i, a) && s(e, a, i[a]);
                                      }
                                    } catch (t) {
                                      c.e(t);
                                    } finally {
                                      c.f();
                                    }
                                  }
                                  return e;
                                })({}, this.config)),
                                (d = {
                                  subTitle:
                                    null ==
                                    (h =
                                      null == (c = this.config)
                                        ? void 0
                                        : c.subTitle)
                                      ? void 0
                                      : h.split(";"),
                                }),
                                a(p, n(d)))),
                              this.formatData(),
                              (this.isShow = !0),
                              this.$emit("yyRefreshHeight", "after"),
                              this.carouselMessage(),
                              l.StockBridge.report(
                                "yy.wzq_newuser_homepage_bigcardnews_brow"
                              ),
                              this.qianjiCompReportGo("show");
                          } catch (t) {
                            this.$emit("updateHasDefaultChooseAdded", "added"),
                              (this.isShow = !1);
                          }
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  i,
                  this
                );
              })
            );
          },
          qianjiCompReportGo: function (t) {
            var e, i;
            null ==
              (i = null == (e = l.StockBridge) ? void 0 : e.deliverySdk) ||
              i.deliveryMtaAndRport(this.premote, t);
          },
          formatData: function () {
            if (this.uiData) {
              var t = this.uiData.subTitle;
              "string" == typeof t && (t = [].concat(t));
              var e = t.map(function (t) {
                return t
                  .replace(/<#/g, '<span class="highlight">')
                  .replace(/#>/g, "</span>");
              });
              this.uiData.subTitle = e;
            }
          },
          carouselMessage: function () {
            var t,
              e = this;
            1 == this.abtType &&
              (null == (t = this.uiData) ? void 0 : t.subTitle.length) > 1 &&
              (this.interVal = setInterval(function () {
                var t,
                  i = e.nowIndex + 1;
                e.nowIndex =
                  i > (null == (t = e.uiData) ? void 0 : t.subTitle.length) - 1
                    ? 0
                    : i;
              }, 3e3));
          },
          clickBtn: function () {
            var t = this;
            this.uiData.btnUrl &&
              (l.StockBridge.report(
                "yy.choose_guide_card.wzq_newuser_homepage_bigcardapply_btnclick",
                { fchannel_id_fm_i: "I0100p000a005" }
              ),
              this.qianjiCompReportGo("click"),
              setTimeout(function () {
                var e;
                null == (e = l.StockBridge.deliverySdk) ||
                  e.deliveryDoJump(
                    {},
                    {
                      otherLinks: {
                        target_link_type: 3,
                        target_link: t.uiData.btnUrl,
                      },
                    }
                  );
              }, 100));
          },
        },
      },
      p = l._export_sfc(h, [
        [
          "render",
          function (t, e, i, a, n, r) {
            return l.e(
              {
                a:
                  n.isShow && !!n.uiData && n.uiData.title && n.uiData.subTitle,
              },
              n.isShow && n.uiData && n.uiData.title && n.uiData.subTitle
                ? l.e(
                    { b: l.t(n.uiData.title), c: 0 == n.abtType },
                    0 == n.abtType ? { d: n.uiData.subTitle[0] } : {},
                    { e: 1 == n.abtType && n.uiData.subTitle.length > 0 },
                    1 == n.abtType && n.uiData.subTitle.length > 0
                      ? {
                          f: l.f(n.uiData.subTitle, function (t, e, i) {
                            return l.e(
                              { a: e === n.nowIndex },
                              e === n.nowIndex ? { b: t } : {},
                              { c: e }
                            );
                          }),
                          g: l.n(n.uiData.subTitle.length > 1 ? "animate" : ""),
                        }
                      : {},
                    { h: n.uiData.btnText },
                    n.uiData.btnText
                      ? {
                          i: l.t(n.uiData.btnText),
                          j: l.o(function () {
                            return r.clickBtn && r.clickBtn.apply(r, arguments);
                          }, 1388),
                        }
                      : {},
                    { k: n.uiData.bg_pic },
                    n.uiData.bg_pic ? { l: "url(" + n.uiData.bg_pic + ")" } : {}
                  )
                : {}
            );
          },
        ],
      ]);
    wx.createComponent(p);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/indexSbg/@tencent/st-portrait-apply-card/index.js",
  }
);
require("pages/indexSbg/@tencent/st-portrait-apply-card/index.js");
