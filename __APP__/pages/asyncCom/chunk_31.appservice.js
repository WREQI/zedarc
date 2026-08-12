$gwx1_XC_25 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_25 || [];
    function gz$gwx1_XC_25_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "site-popup"]], [1, "data-v-bea87391"]],
            [[7], [3, "f"]],
          ],
        ]);
        Z([3, "__l"]);
        Z([3, "data-v-bea87391"]);
        Z([3, "bea87391-0"]);
        Z([[7], [3, "b"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_25 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_25 = true;
    var x = ["./pages/asyncCom/components/privpopup.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_25_1();
      var cGJ = _n("view");
      _rz(z, cGJ, "class", 0, e, s, gg);
      var lIJ = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(cGJ, lIJ);
      var oHJ = _v();
      _(cGJ, oHJ);
      if (_oz(z, 4, e, s, gg)) {
        oHJ.wxVkey = 1;
      }
      oHJ.wxXCkey = 1;
      _(r, cGJ);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_25";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_25();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/privpopup.wxml"] = [
    $gwx1_XC_25,
    "./pages/asyncCom/components/privpopup.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/privpopup.wxml"] = $gwx1_XC_25(
    "./pages/asyncCom/components/privpopup.wxml"
  );
__wxRoute = "pages/asyncCom/components/privpopup";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/asyncCom/components/privpopup.js";
define(
  "pages/asyncCom/components/privpopup.js",
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
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../common/vendor.js");

    var n = {
      props: {
        visible: { type: Boolean },
        type: { type: Number, value: 1 },
        notConfirmList: { type: Array },
      },
      data: function () {
        return { popVisible: !1 };
      },
      onReady: function () {
        this.popVisible = this.visible;
      },
      methods: {
        onCancel: function () {
          this.nextPopupState &&
            t.wx$1.setStorageSync("180823mpflow", this.nextPopupState),
            (this.popVisible = !1);
        },
        onConfirm: function () {
          return (
            (n = this),
            null,
            (r = e().mark(function n() {
              var r, o, i;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = this.notConfirmList.map(function (e) {
                            return e.id;
                          })),
                          (e.prev = 1),
                          (e.next = 4),
                          t.AccountAPI.updateUserArgreementStatus({
                            action: "agree",
                            agreement_ids: r,
                          })
                        );
                      case 4:
                        e.next = 8;
                        break;
                      case 6:
                        (e.prev = 6), (e.t0 = e.catch(1));
                      case 8:
                        this.popVisible = !1;
                        try {
                          (o = new Date().getTime()),
                            ((i = t.wx$1.getStorageSync(
                              "PROTOCOL/USERAGREEMENTLIST"
                            )).val = ""),
                            t.wx$1.setStorageSync(
                              "PROTOCOL/USERAGREEMENTLIST",
                              { val: i.val, time: o }
                            );
                        } catch (e) {}
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                this,
                [[1, 6]]
              );
            })),
            new Promise(function (e, t) {
              var o = function (e) {
                  try {
                    a(r.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                i = function (e) {
                  try {
                    a(r.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                a = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(o, i);
                };
              a((r = r.apply(n, null)).next());
            })
          );
          var n, r;
        },
        clickProtocol: function (e) {
          var n,
            r,
            o = e.currentTarget.dataset.from,
            i = getCurrentPages(),
            a = i[i.length - 1].route;
          if (((this.frompage = a), "about" !== o))
            return (
              (n = e.currentTarget.dataset.url),
              (r = "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(n)
              )),
              t.wx$1.navigateTo({ url: r }),
              !1
            );
          (n = e.target.dataset.url),
            (r = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(n)
            ));
        },
      },
    };
    Array || t.resolveComponent("mp-privacy-dialog")();
    var r = t._export_sfc(n, [
      [
        "render",
        function (e, n, r, o, i, a) {
          return t.e(
            { a: e.rootFontSize, b: e.item.id && e.item.title && e.item.url },
            e.item.id && e.item.title && e.item.url
              ? {
                  c: t.f(r.notConfirmList, function (e, n, r) {
                    return {
                      a: t.t(e.title),
                      b: n,
                      c: e.url,
                      d: t.o(
                        function () {
                          return (
                            a.clickProtocol &&
                            a.clickProtocol.apply(a, arguments)
                          );
                        },
                        70,
                        n
                      ),
                    };
                  }),
                }
              : {},
            {
              d: t.o(function () {
                return a.onCancel && a.onCancel.apply(a, arguments);
              }, 71),
              e: t.o(function () {
                return a.onConfirm && a.onConfirm.apply(a, arguments);
              }, 72),
              f: t.n(i.popVisible ? "show" : ""),
            }
          );
        },
      ],
      ["__scopeId", "data-v-bea87391"],
    ]);
    wx.createPage(r);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/asyncCom/components/privpopup.js",
  }
);
require("pages/asyncCom/components/privpopup.js");
