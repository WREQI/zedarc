$gwx28_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx28_XC_5 || [];
    function gz$gwx28_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "data-v-dc6b091d"]], [1, "container"]],
            [[7], [3, "g"]],
          ],
        ]);
        Z([3, "__l"]);
        Z([3, "data-v-dc6b091d"]);
        Z([3, "dc6b091d-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "dc6b091d-1"]);
        Z(z[4]);
      })(__WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx28_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx28_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx28_XC_5 = true;
    var x = ["./pages/stock/shareholder.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx28_XC_5_1();
      var bUB = _n("view");
      _rz(z, bUB, "class", 0, e, s, gg);
      var xWB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(bUB, xWB);
      var oVB = _v();
      _(bUB, oVB);
      if (_oz(z, 4, e, s, gg)) {
        oVB.wxVkey = 1;
        var oXB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oVB, oXB);
      }
      oVB.wxXCkey = 1;
      oVB.wxXCkey = 3;
      _(r, bUB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx28_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx28_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/stock/shareholder.wxml"] = [
    $gwx28_XC_5,
    "./pages/stock/shareholder.wxml",
  ];
else
  __wxAppCode__["pages/stock/shareholder.wxml"] = $gwx28_XC_5(
    "./pages/stock/shareholder.wxml"
  );
__wxRoute = "pages/stock/shareholder";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/stock/shareholder.js";
define(
  "pages/stock/shareholder.js",
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
    var t = require("../../common/vendor.js"),
      e = getApp().globalData,
      a = {
        data: function () {
          return {
            list: [],
            total: 1 / 0,
            date: null,
            skin: t.wx$1.getStorageSync("user/skin") || "white",
            title: "",
          };
        },
        onShareAppMessage: function () {
          return {
            title: this.title,
            path: "pages/stock/shareholder?".concat(
              t.Fns.queryStringify(this.urlParams)
            ),
          };
        },
        onLoad: function (a) {
          var r = this;
          (a.holder = parseInt(a.holder)),
            (a.name = decodeURIComponent(a.name || ""));
          var n = "".concat(a.name, "(").concat(a.scode, ")");
          (this.urlParams = a),
            (this.title = n),
            t.wx$1.setNavigationBarTitle({ title: n }),
            this.queryData(),
            e.setSkin(function (t) {
              r.skin = "black" === t ? "black" : "white";
            });
        },
        onReady: function () {},
        onShow: function () {},
        onHide: function () {},
        onUnload: function () {},
        methods: {
          queryData: function () {
            var t = this,
              a = this.urlParams,
              r = {
                url: e.CGI_PREFIX + "information.fcgi",
                data: { scode: a.scode, markets: a.market, type: 2 },
                success: function (r) {
                  if (r && "0" === r.retcode) {
                    var n = [],
                      o = r.circulation_date;
                    if (o) {
                      var i,
                        c,
                        s = (o || "").match(/(\d*)[^\d]*(\d*)[^\d]*\d*/);
                      s &&
                        s.length &&
                        ((i = s[1]),
                        (o = i +=
                          (c = parseInt(s[2], 10)) < 4
                            ? "一季报"
                            : c < 7
                            ? "半年报"
                            : c < 10
                            ? "三季报"
                            : "年报"));
                    }
                    switch (parseInt(a.holder)) {
                      case 1:
                        n = (n = r.circulation_top || []).map(function (t) {
                          return (t.data = parseFloat(t.ratio).toFixed(2)), t;
                        });
                        break;
                      case 2:
                        n = (n = r.institution || []).map(function (t) {
                          return (t.data = parseFloat(t.ratio).toFixed(2)), t;
                        });
                        break;
                      default:
                        n = r.institution || [];
                        var d = r.circulation_a;
                        n = n.map(function (t) {
                          return (
                            (t.data = (parseFloat(t.bcccgs / d) / 100).toFixed(
                              3
                            )),
                            t
                          );
                        });
                    }
                    (n = n.map(function (t) {
                      switch (parseInt(t.change)) {
                        case 0:
                          t.changeText = "未变";
                          break;
                        case 1:
                          t.changeText = "新进";
                          break;
                        case 2:
                          t.changeText = "减持";
                          break;
                        case 3:
                          t.changeText = "增持";
                      }
                      return t;
                    })),
                      (t.list = n),
                      (t.date = o);
                  } else e.showError(r.retmsg, r.retcode);
                },
              };
            e.wx.request(r);
          },
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog")
      )();
    var r = t._export_sfc(a, [
      [
        "render",
        function (e, a, r, n, o, i) {
          return t.e(
            {
              a: e.rootFontSize,
              b: t.p({ "no-auto": !0 }),
              c: 1 === e.urlParams.holder,
            },
            (e.urlParams.holder, {}),
            { d: t.t(e.date), e: 1 === e.urlParams.holder },
            (e.urlParams.holder, {}),
            {
              f: t.f(e.list, function (e, a, r) {
                return {
                  a: t.t(e.stockholder),
                  b: t.t(e.data),
                  c: t.t(e.changeText),
                  d: e.stockholder,
                };
              }),
              g: t.n("skin-" + e.skin),
            }
          );
        },
      ],
      ["__scopeId", "data-v-dc6b091d"],
    ]);
    wx.createPage(r);
  },
  { isPage: true, isComponent: true, currentFile: "pages/stock/shareholder.js" }
);
require("pages/stock/shareholder.js");
