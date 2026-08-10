$gwx35_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx35_XC_1 || [];
    function gz$gwx35_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx35_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx35_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx35_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "c"]]);
        Z([3, "broker-index"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "e"]]);
        Z(z[4]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "g"]]);
        Z(z[4]);
        Z([[7], [3, "h"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx35_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx35_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx35_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx35_XC_1 = true;
    var x = ["./pages/broker/components/guojin/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx35_XC_1_1();
      var oH = _n("view");
      _rz(z, oH, "class", 0, e, s, gg);
      var cI = _v();
      _(oH, cI);
      if (_oz(z, 1, e, s, gg)) {
        cI.wxVkey = 1;
        var oJ = _mz(
          z,
          "asset-index",
          [
            "bindjumpQuote",
            2,
            "bindreportTime",
            1,
            "class",
            2,
            "scrollHeight",
            3,
          ],
          [],
          e,
          s,
          gg
        );
        _(cI, oJ);
      } else if (_oz(z, 6, e, s, gg)) {
        cI.wxVkey = 2;
        var lK = _mz(
          z,
          "apply-recover",
          ["class", 7, "scrollHeight", 1],
          [],
          e,
          s,
          gg
        );
        _(cI, lK);
      } else if (_oz(z, 9, e, s, gg)) {
        cI.wxVkey = 3;
        var aL = _mz(
          z,
          "apply-progress",
          ["class", 10, "scrollHeight", 1],
          [],
          e,
          s,
          gg
        );
        _(cI, aL);
      }
      cI.wxXCkey = 1;
      cI.wxXCkey = 3;
      cI.wxXCkey = 3;
      cI.wxXCkey = 3;
      _(r, oH);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx35_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx35_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/broker/components/guojin/index.wxml"] = [
    $gwx35_XC_1,
    "./pages/broker/components/guojin/index.wxml",
  ];
else
  __wxAppCode__["pages/broker/components/guojin/index.wxml"] = $gwx35_XC_1(
    "./pages/broker/components/guojin/index.wxml"
  );
__wxRoute = "pages/broker/components/guojin/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/broker/components/guojin/index.js";
define(
  "pages/broker/components/guojin/index.js",
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
    var e;
    require("../../../../@babel/runtime/helpers/Arrayincludes");
    var n = require("../../../../module/plugin/pluginComponentLifeTimeMixin.js"),
      o = require("../../../../common/vendor.js"),
      r = (null == (e = getApp()) ? void 0 : e.globalData) || {},
      t = {
        mixins: [n.PluginComponentLifeTimeMixin],
        setup: function (e, n) {
          var t = n.emit,
            i = o.useBrokerInfo(),
            l = i.hasBind,
            u = i.highestPriorityDealer,
            a = void 0 === u ? {} : u,
            p = o.computed(function () {
              return l.value;
            }),
            s = o.computed(function () {
              return Boolean(a.value.userstateFront & o.USERSTATE_PID.FAILED);
            }),
            c = o.computed(function () {
              return Boolean(
                a.value.userstateFront & o.USERSTATE_PID.VERIFYING
              );
            }),
            d = o.inject("pluginRoute"),
            v = o.inject("scrollHeight", 0);
          d.value = o.computed(function () {
            return p.value
              ? "pages/asset/index"
              : s.value
              ? "pages/apply/recover"
              : c.value
              ? "pages/apply/progress"
              : "";
          });
          var m = [];
          return {
            isAsset: p,
            isApplyRecover: s,
            isApplyProgress: c,
            handleReportTime: function (e) {
              var n, o, i, l, u, a;
              t("ready");
              var p =
                  (null ==
                  (o =
                    null == (n = null == e ? void 0 : e.detail)
                      ? void 0
                      : n.__args__)
                    ? void 0
                    : o[0]) || {},
                s =
                  (null == (l = null == (i = getApp()) ? void 0 : i.globalData)
                    ? void 0
                    : l.__tradeTabTime) || "",
                c = "".concat(p.event, "-").concat(p.dealerCode);
              !m.includes(c) &&
                s &&
                (null ==
                  (a =
                    null == (u = null == r ? void 0 : r.mpReporter)
                      ? void 0
                      : u.reportTime) ||
                  a.call(
                    u,
                    "PAGE-ASSET-INDEX-OPEN-TIME-".concat(c),
                    Date.now() - s
                  ),
                m.push(c));
            },
            handleJumpQuote: function (e) {
              var n = e || {},
                r = n.type,
                t = n.scode,
                i = o.preload || {},
                l = i.queryStockInfo,
                u = i.queryPrimary;
              "function" == typeof l && r && t && l(t, r),
                "function" == typeof u && r && t && u(t, r);
            },
            scrollHeight: v,
          };
        },
        data: function () {
          return { componentEle: ".broker-index" };
        },
      },
      i = o._export_sfc(t, [
        [
          "render",
          function (e, n, r, t, i, l) {
            return o.e(
              { a: t.isAsset },
              t.isAsset
                ? {
                    b: t.scrollHeight,
                    c: o.o(function () {
                      return (
                        t.handleReportTime &&
                        t.handleReportTime.apply(t, arguments)
                      );
                    }, 2528),
                    d: o.o(function () {
                      return (
                        t.handleJumpQuote &&
                        t.handleJumpQuote.apply(t, arguments)
                      );
                    }, 2529),
                  }
                : t.isApplyRecover
                ? { f: t.scrollHeight }
                : t.isApplyProgress
                ? { h: t.scrollHeight }
                : {},
              { e: t.isApplyRecover, g: t.isApplyProgress }
            );
          },
        ],
      ]);
    wx.createComponent(i);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/broker/components/guojin/index.js",
  }
);
require("pages/broker/components/guojin/index.js");
