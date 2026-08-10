$gwx4_XC_11 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_11 || [];
    function gz$gwx4_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div chart-setting data-v-54063886"]);
        Z([3, "item"]);
        Z([[7], [3, "a"]]);
        Z([3, "o"]);
        Z([3, "_div setting-item data-v-54063886"]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z([3, "_div select-box data-v-54063886"]);
        Z([[6], [[7], [3, "item"]], [3, "b"]]);
        Z([3, "__l"]);
        Z([3, "content data-v-54063886"]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z(z[7]);
        Z([[6], [[7], [3, "item"]], [3, "n"]]);
        Z(z[8]);
        Z([[6], [[7], [3, "item"]], [3, "l"]]);
        Z([3, "data-v-54063886"]);
        Z([[6], [[7], [3, "item"]], [3, "m"]]);
        Z(z[12]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "j"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1;
    }
    function gz$gwx4_XC_11_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_11_2)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_11_2;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_11_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_11_2);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_11_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_11 = true;
    var x = [
      "./pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg.wxml",
      "./pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_11_1();
      var c95 = _n("view");
      _rz(z, c95, "class", 0, e, s, gg);
      var aB6 = _v();
      _(c95, aB6);
      var tC6 = function (bE6, eD6, oF6, gg) {
        var oH6 = _n("view");
        _rz(z, oH6, "class", 4, bE6, eD6, gg);
        var cJ6 = _mz(z, "view", ["bindtap", 5, "class", 1], [], bE6, eD6, gg);
        var hK6 = _v();
        _(cJ6, hK6);
        if (_oz(z, 7, bE6, eD6, gg)) {
          hK6.wxVkey = 1;
          var oL6 = _mz(
            z,
            "circle-check-vue",
            ["bind:__l", 8, "class", 1, "uI", 2, "uP", 3],
            [],
            bE6,
            eD6,
            gg
          );
          _(hK6, oL6);
        }
        hK6.wxXCkey = 1;
        hK6.wxXCkey = 3;
        _(oH6, cJ6);
        var fI6 = _v();
        _(oH6, fI6);
        if (_oz(z, 12, bE6, eD6, gg)) {
          fI6.wxVkey = 1;
          var cM6 = _mz(
            z,
            "slider-bar",
            [
              "bind:__l",
              13,
              "bindvalueChange",
              1,
              "class",
              2,
              "uI",
              3,
              "uP",
              4,
            ],
            [],
            bE6,
            eD6,
            gg
          );
          _(fI6, cM6);
        }
        fI6.wxXCkey = 1;
        fI6.wxXCkey = 3;
        _(oF6, oH6);
        return oF6;
      };
      aB6.wxXCkey = 4;
      _2z(z, 2, tC6, e, s, gg, aB6, "item", "index", "o");
      var o05 = _v();
      _(c95, o05);
      if (_oz(z, 18, e, s, gg)) {
        o05.wxVkey = 1;
      }
      var lA6 = _v();
      _(c95, lA6);
      if (_oz(z, 19, e, s, gg)) {
        lA6.wxVkey = 1;
      }
      o05.wxXCkey = 1;
      lA6.wxXCkey = 1;
      _(r, c95);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_11_2();
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx4_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_11();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg.wxml"
  ] = [
    $gwx4_XC_11,
    "./pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg.wxml",
  ];
else
  __wxAppCode__[
    "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg.wxml"
  ] = $gwx4_XC_11(
    "./pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck.wxml"
  ] = [
    $gwx4_XC_11,
    "./pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck.wxml",
  ];
else
  __wxAppCode__[
    "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck.wxml"
  ] = $gwx4_XC_11(
    "./pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck.wxml"
  );
__wxRoute =
  "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg.js";
define(
  "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg.js",
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
    require("../../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../../common/vendor.js"),
      t = require("../constants.js"),
      n = {
        props: {
          skin: { type: String, default: "white" },
          type: { type: String, default: "ma" },
        },
        components: {
          SliderBar: function () {
            return "../../../../../detailSbg/@tencent/stock-markets-base/components/Slide/mp.js";
          },
          CircleCheckVue: function () {
            return "./components/CircleCheck.js";
          },
        },
        data: function () {
          return {
            chartSetting: Object.assign({}, t.DEFAULT_SETTING),
            currPageSetting: [],
            lineNum: [],
            validNum: [],
            color: [
              { color: "216, 0, 254", name: "graph_line_1" },
              { color: "219, 192, 0", name: "graph_line_2" },
              { color: "0, 180, 254", name: "graph_line_3" },
              { color: "129, 117, 243", name: "graph_line_4" },
              { color: "184, 168, 159", name: "graph_line_5" },
              { color: "241, 147, 29", name: "graph_line_6" },
              { color: "118, 169, 255", name: "graph_line_7" },
              { color: "255, 109, 94", name: "graph_line_8" },
              { color: "52, 194, 124", name: "graph_line_9" },
              { color: "255, 118, 176", name: "graph_line_10" },
            ],
            folder: !0,
            minValue: 1,
            maxValue: 250,
          };
        },
        created: function () {
          this.initData();
        },
        computed: {
          isBlack: function () {
            return ["black", "dark"].includes(this.skin);
          },
          typeName: function () {
            var e = "";
            return (
              "ma" === this.type
                ? (e = "MA")
                : "ema" === this.type
                ? (e = "EMA")
                : "volume" === this.type
                ? (e = "成交量")
                : "cje" === this.type && (e = "成交额"),
              e
            );
          },
          text: function () {
            return this.folder ? "展示显示十条" : "收起显示十条";
          },
          isNeedShow: function () {
            return "ma" === this.type || "ema" === this.type;
          },
          brief: function () {
            return "ma" === this.type
              ? "MA（移动平均线），是将一定周期N内的收盘价求和后除N计算出平均价格，连接形成一条曲线，简称均线，用以观察股价的变动趋势。"
              : "EMA（指数移动平均值），是一种趋势类指标，以指数式递减加权方法计算的移动平均值。相比传统的MA均线，EMA的曲线更平滑更稳定。";
          },
          method: function () {
            return "ma" === this.type
              ? [
                  "1.多空趋势：当短期均线(如MA5)在中长期均线(如MA30)均线上方，且均线都在向上走，表明股价处于上涨周期，且趋势保持良好。",
                  "2.支撑/压力：当上涨趋势过程中，股价短期下跌到均线的位置，均线附近会起到有一定的支撑作用；同理下跌过程中反弹到均线位置会受到一定的阻力。",
                  "3.金叉/死叉：当短期均线从下方上穿中长期均线，称为金叉；反之短期均线从上下穿中长期均线为死叉。",
                ]
              : [
                  "1.当短期EMA1均线在长期EMA2均线上方，且两条线都在向上走，表明股价处于上涨周期，且趋势保持良好。",
                  "2.当短期EMA1均线在长期EMA2均线下方，出现从下往上交叉的形态，表明股价通过一段时间的下跌盘整后，趋势好转。",
                  "3.每条均线都可以视作周期内的支撑压力位，若股价跌破短期EMA1均线，表明股价跌破短期支持，走势转弱。",
                ];
          },
        },
        methods: {
          initData: function () {
            var n = this;
            e.StockBridge.setTitle({ title: this.typeName });
            var i = e.StockBridge.getStorage(t.CHART_SETTING) || {};
            i && "string" == typeof i && (i = JSON.parse(i)),
              Object.assign(this.chartSetting, i || {}),
              (this.currPageSetting = this.chartSetting[
                "".concat(this.type, "Types")
              ].map(function (e, i) {
                var r,
                  a = t.AVG_PAGE_DEFAULT["".concat(n.type, "Types")][i],
                  l = a.defValue,
                  o = a.defSelect;
                return {
                  value:
                    null !=
                    (r =
                      null != e
                        ? e
                        : n.chartSetting["".concat(n.type, "Temp")][i])
                      ? r
                      : l,
                  defValue: l,
                  isSelect: !!e,
                  defSelect: o,
                };
              })),
              this.currPageSetting.forEach(function (e, t) {
                n.$set(n.lineNum, t, {
                  preVal: e.value,
                  curVal: e.value,
                  default: 1,
                  isSelect: e.isSelect,
                });
              }),
              "ma" === this.type &&
                e.StockBridge.report(
                  "hq.kline_setting.ma_setting_page_baoguang"
                );
          },
          onInput: function (e) {
            var t = +e.target.dataset.index,
              n = e.target.value;
            (this.lineNum[t].curVal = n),
              n < this.minValue || n > this.maxValue || !/\d/.test(n)
                ? (this.lineNum[t].curVal = this.lineNum[t].preVal)
                : n <= this.maxValue &&
                  n >= this.minValue &&
                  (this.lineNum[t].preVal = +n);
          },
          sliderChange: function (e, t) {
            var n = this;
            (this.lineNum[t].curVal = +e),
              (this.lineNum[t].preVal = +e),
              this.slideTimer && clearTimeout(this.slideTimer),
              (this.slideTimer = setTimeout(function () {
                n.updateSetting();
              }, 500));
          },
          oninputBlur: function (e) {
            var t = this,
              n = +e.target.dataset.index,
              i = e.target.value;
            (this.lineNum[n].curVal = +i),
              setTimeout(function () {
                (+i < t.minValue || +i > t.maxValue || !/\d/.test(i)) &&
                  (t.lineNum[n].curVal = t.lineNum[n].preVal),
                  t.updateSetting();
              }, 0);
          },
          toggleItem: function (e) {
            (this.lineNum[e].isSelect = !this.lineNum[e].isSelect),
              this.updateSetting();
          },
          updateSetting: function () {
            var n = this;
            this.lineNum.forEach(function (e, t) {
              var i = e.curVal,
                r = e.isSelect;
              n.currPageSetting[t].isSelect = r;
              var a = +i || n.currPageSetting[t].defValue;
              (n.currPageSetting[t].value = a),
                r
                  ? (n.chartSetting["".concat(n.type, "Types")][t] = a)
                  : ((n.chartSetting["".concat(n.type, "Types")][t] = 0),
                    (n.chartSetting["".concat(n.type, "Temp")][t] = a));
            }),
              e.StockBridge.setStorage(t.CHART_SETTING, this.chartSetting),
              e.StockBridge.busEmit("market-chartSetting-Update", {
                key: "".concat(this.type, "Types"),
                setting: this.chartSetting,
              });
          },
          restoreDefault: function () {
            var e = this;
            this.lineNum.forEach(function (t, n) {
              var i = e.currPageSetting[n],
                r = i.defValue,
                a = i.defSelect;
              (t.curVal = r), (t.isSelect = a), (t.preVal = r);
            }),
              this.updateSetting();
          },
          folderHandler: function () {
            var e;
            this.folder = !this.folder;
            var t = null == (e = this.$refs) ? void 0 : e.setting;
            t &&
              (t.style.maxHeight = this.folder
                ? ""
                : "".concat(t.scrollHeight, "px"));
          },
        },
      };
    Array ||
      (
        e.resolveComponent("CircleCheckVue") + e.resolveComponent("slider-bar")
      )();
    var i = e._export_sfc(n, [
      [
        "render",
        function (t, n, i, r, a, l) {
          return e.e(
            {
              a: e.f(a.lineNum, function (t, n, i) {
                return {
                  a: "54063886-0-" + i,
                  b: e.p({ checked: t.isSelect }),
                  c: e.o(
                    function (e) {
                      return l.toggleItem(n);
                    },
                    495,
                    n
                  ),
                  d: "rgba(".concat(a.color[n].color, ")"),
                  e: "rgb(".concat(a.color[n].color, ")"),
                  f: "rgba(".concat(a.color[n].color, ", 0.08)"),
                  g: t.curVal,
                  h: n,
                  i: a.currPageSetting[n].defValue,
                  j: e.o(
                    function () {
                      return l.onInput && l.onInput.apply(l, arguments);
                    },
                    496,
                    n
                  ),
                  k: e.o(
                    function () {
                      return l.oninputBlur && l.oninputBlur.apply(l, arguments);
                    },
                    497,
                    n
                  ),
                  l: e.o(
                    function (e) {
                      return l.sliderChange(e, n);
                    },
                    498,
                    n
                  ),
                  m: "54063886-1-" + i,
                  n: e.p({
                    value: t.curVal,
                    max: a.maxValue,
                    min: a.minValue,
                    width: "180",
                    showOperator: !1,
                  }),
                  o: n,
                };
              }),
              b: e.t(l.typeName),
              c: a.folder ? "" : 1,
              d: e.o(function () {
                return l.restoreDefault && l.restoreDefault.apply(l, arguments);
              }, 499),
              e: l.isNeedShow,
            },
            l.isNeedShow
              ? {
                  f: e.t(l.text),
                  g: a.folder ? "" : 1,
                  h: l.isBlack ? 1 : "",
                  i: e.o(function () {
                    return (
                      l.folderHandler && l.folderHandler.apply(l, arguments)
                    );
                  }, 500),
                }
              : {},
            { j: l.isNeedShow },
            l.isNeedShow
              ? {
                  k: e.t(l.brief),
                  l: e.f(l.method, function (t, n, i) {
                    return { a: e.t(t), b: n };
                  }),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-54063886"],
    ]);
    wx.createComponent(i);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg.js",
  }
);
require("pages/quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingAvg.js");
__wxRoute =
  "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck.js";
define(
  "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck.js",
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
      c = { props: { checked: { type: Boolean, default: !1 } } },
      r = e._export_sfc(c, [
        [
          "render",
          function (c, r, o, n, t, d) {
            return { a: o.checked, b: e.n(o.checked && "check") };
          },
        ],
        ["__scopeId", "data-v-c539f660"],
      ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck.js",
  }
);
require("pages/quote/@tencent/stock-hq-chart/components/SettingPopup/components/CircleCheck.js");
