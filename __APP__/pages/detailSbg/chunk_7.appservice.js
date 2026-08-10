$gwx3_XC_56 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_56 || [];
    function gz$gwx3_XC_56_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_56_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_56_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_56_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div worran-contaner data-v-a2fb50d0"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "c"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_56_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_56_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_56 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_56 = true;
    var x = ["./pages/detailSbg/@tencent/stock-detail-brief/BriefWarran.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_56_1();
      var lGRB = _n("view");
      _rz(z, lGRB, "class", 0, e, s, gg);
      var aHRB = _v();
      _(lGRB, aHRB);
      if (_oz(z, 1, e, s, gg)) {
        aHRB.wxVkey = 1;
      }
      var tIRB = _v();
      _(lGRB, tIRB);
      if (_oz(z, 2, e, s, gg)) {
        tIRB.wxVkey = 1;
      }
      aHRB.wxXCkey = 1;
      tIRB.wxXCkey = 1;
      _(r, lGRB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_56";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_56();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-detail-brief/BriefWarran.wxml"
  ] = [
    $gwx3_XC_56,
    "./pages/detailSbg/@tencent/stock-detail-brief/BriefWarran.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-detail-brief/BriefWarran.wxml"
  ] = $gwx3_XC_56(
    "./pages/detailSbg/@tencent/stock-detail-brief/BriefWarran.wxml"
  );
__wxRoute = "pages/detailSbg/@tencent/stock-detail-brief/BriefWarran";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-detail-brief/BriefWarran.js";
define(
  "pages/detailSbg/@tencent/stock-detail-brief/BriefWarran.js",
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
    var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("api/index.js"),
      r = require("../../../../common/vendor.js"),
      a = {
        zqdm: "证券代码",
        zqmc: "证券名称",
        xgzc: "相关资产",
        fxr: "发行机构",
        xz: "证券性质",
        jsfs: "结算方式",
        xqjg: "行权价格",
        xqbl: "行权比例",
        fxsl: "发行数量",
        ssrq: "上市日期",
        zhjyr: "最后交易",
        dqr: "到期日期",
        syts: "剩余天数",
      },
      n = {
        sjgg: "有效杠杆",
        ggbl: "杠杆比例",
        yj: "溢价",
        dcz: "对冲值",
        mrsjzsh: "每日时间损失消耗",
        ysbf: "引伸波幅",
        ysbfmgd: "引伸波幅敏感度",
        jzzk: "价值状况",
        dhd: "打和点",
        jhl: "街货量",
        jhzb: "街货占比",
      },
      c = {
        props: ["scode"],
        components: {},
        data: function () {
          return { briefData: [], tecData: [] };
        },
        created: function () {
          this.getData();
        },
        methods: {
          getData: function () {
            return (
              (c = this),
              null,
              (s = e().mark(function () {
                var c, s, i, o, u, f, d;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.getWorranBrief(r.StockBridge, this.scode)
                          );
                        case 2:
                          for (i in ((c = e.sent), (s = []), a))
                            (o = { name: a[i] || "--", value: c[i] || "--" }),
                              s.push(o);
                          for (f in ((u = []), n))
                            (d = {
                              name: n[f],
                              value: ("—" !== c[f] && c[f]) || "--",
                            }),
                              u.push(d);
                          (this.briefData = s),
                            (this.tecData = u),
                            this.$emit("loaded");
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  },
                  u,
                  this
                );
              })),
              new Promise(function (e, t) {
                var r = function e(r) {
                    try {
                      n(s.next(r));
                    } catch (e) {
                      t(e);
                    }
                  },
                  a = function (e) {
                    try {
                      n(s.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  n = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(r, a);
                  };
                n((s = s.apply(c, null)).next());
              })
            );
            var c, s;
          },
        },
      },
      s = r._export_sfc(c, [
        [
          "render",
          function (e, t, a, n, c, s) {
            return r.e(
              {
                a: r.f(c.briefData, function (e, t, a) {
                  return { a: r.t(e.name), b: r.t(e.value), c: e.name };
                }),
                b: c.tecData,
              },
              (c.tecData, {}),
              { c: c.tecData },
              (c.tecData, {}),
              {
                d: r.f(c.tecData, function (e, t, a) {
                  return { a: r.t(e.name), b: r.t(e.value), c: e.name };
                }),
              }
            );
          },
        ],
        ["__scopeId", "data-v-a2fb50d0"],
      ]);
    wx.createComponent(s);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/detailSbg/@tencent/stock-detail-brief/BriefWarran.js",
  }
);
require("pages/detailSbg/@tencent/stock-detail-brief/BriefWarran.js");
