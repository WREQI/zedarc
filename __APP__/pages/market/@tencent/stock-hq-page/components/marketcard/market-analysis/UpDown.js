var t = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (t, e, a) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  l = function (t, n) {
    for (var a in n || (n = {})) i.call(n, a) && u(t, a, n[a]);
    if (o) {
      var r,
        l = e(o(n));
      try {
        for (l.s(); !(r = l.n()).done; ) {
          a = r.value;
          c.call(n, a) && u(t, a, n[a]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return t;
  },
  f = function (t, e) {
    return a(t, r(e));
  },
  s = require("../../../../../../../common/vendor.js"),
  p = {
    detail: [
      { section: "涨停", count: 0, flag: 1 },
      { section: ">7%", count: 0, flag: 1 },
      { section: "7~5%", count: 0, flag: 1 },
      { section: "5~2%", count: 0, flag: 1 },
      { section: "2~0%", count: 0, flag: 1 },
      { section: "平", count: 0, flag: 0 },
      { section: "0~2%", count: 0, flag: -1 },
      { section: "2~5%", count: 0, flag: -1 },
      { section: "5~7%", count: 0, flag: -1 },
      { section: "7%<", count: 0, flag: -1 },
      { section: "跌停", count: 0, flag: -1 },
    ],
    down_count: 0,
    down_limit_count: 0,
    flat_count: 0,
    suspension_count: 0,
    up_count: 0,
    up_limit_count: 0,
  },
  d = "white",
  h = {
    components: {
      Compare: function () {
        return "../../common/Compare.js";
      },
    },
    inject: {
      hqBridge: { default: function () {} },
      isHqShow: {
        default: function () {
          return function () {
            return !1;
          };
        },
      },
    },
    props: { upDownData: Object },
    data: function () {
      return { viewData: {} };
    },
    computed: {
      hqShowStatus: function () {
        var t;
        return null == (t = this.isHqShow) ? void 0 : t.call(this);
      },
      isMp: function () {
        return !0;
      },
    },
    watch: {
      upDownData: {
        deep: !0,
        immediate: !0,
        handler: function (t) {
          this.formatViewData(t);
        },
      },
      hqShowStatus: function (t) {
        t && ((d = this.getTheme()), this.formatViewData(this.upDownData));
      },
    },
    mounted: function () {
      d = this.getTheme();
    },
    methods: {
      getTheme: function () {
        var t, e;
        return (
          (this.isMp &&
            (null == (e = null == (t = s.wx$1) ? void 0 : t.getStorageSync)
              ? void 0
              : e.call(t, "user/skin"))) ||
          "white"
        );
      },
      getEmptyData: function () {
        var t = this._fmtDtl(p.detail),
          e = this._fmtPercent(p);
        this.viewData = f(l({}, p), { detail: t, percent: e });
      },
      formatViewData: function (t) {
        if (t) {
          var e = this._fmtDtl(t.detail),
            n = this._fmtPercent(t);
          this.viewData = f(l({}, t), { detail: e, percent: n });
        }
      },
      _fmtPercent: function (t) {
        var e = t.up_count,
          n = t.down_count,
          a = t.flat_count;
        return e + n + a === a
          ? { up: 0, down: 0, flat: "100%" }
          : { up: e, down: n, flat: a };
      },
      _fmtDtl: function (e) {
        var n,
          a = 0;
        (e && e.length) || (e = p.detail);
        var r = t(e);
        r.forEach(function (t) {
          t.count > a && (a = t.count);
        });
        var o = this.flucShowMode,
          i = this.getThemeColors(),
          c = i.red,
          u = i.green,
          l = this.getThemeColors().grayColor;
        return (
          "greenup" === o && ((c = (n = [u, c])[0]), (u = n[1])),
          r.forEach(function (t, e) {
            (t.color = t.flag > 0 ? c[4 - e] : t.flag < 0 ? u[e - 6] : l),
              (t.percentage = a ? (t.count / a) * 100 * 0.85 + "%" : "0%");
          }),
          r
        );
      },
      getThemeColors: function () {
        return f(
          l(
            {},
            {
              white: {
                red: ["#e63535", "#eb5d5d", "#f5aeae", "#fad6d6", "#fcebeb"],
                green: ["#1caa3c", "#49bb63", "#76cc8a", "#d1eed8", "#e8f6eb"],
              },
              black: {
                red: ["#e63535", "#eb5d5d", "#A02C2D", "#662124", "#3C1B1E"],
                green: ["#1caa3c", "#49bb63", "#16642A", "#155026", "#163B25"],
              },
            }[d]
          ),
          { grayColor: "#98a0B3" }
        );
      },
      graphTapToDetail: function () {
        this.hqBridge.report("hq.hstab.analysis_updowns_graph_click"),
          this.hqBridge.routeTo({
            path: "/market-analysis-detail?target=upDownChart",
          });
      },
    },
  };
Array || s.resolveComponent("Compare")();
var g = s._export_sfc(h, [
  [
    "render",
    function (t, e, n, a, r, o) {
      return s.e(
        { a: n.upDownData },
        n.upDownData
          ? s.e(
              { b: r.viewData && r.viewData.detail },
              r.viewData && r.viewData.detail
                ? {
                    c: s.f(r.viewData.detail, function (t, e, n) {
                      return {
                        a: s.t(t.count),
                        b: s.s(
                          "height:" +
                            t.percentage +
                            ";background-color:" +
                            t.color
                        ),
                        c: t.section,
                        d: s.n(t.flag > 0 ? "red" : ""),
                        e: s.n(0 === t.flag ? "gray" : ""),
                        f: s.n(t.flag < 0 ? "green" : ""),
                      };
                    }),
                  }
                : {},
              { d: r.viewData && r.viewData.detail },
              r.viewData && r.viewData.detail
                ? {
                    e: s.f(r.viewData.detail, function (t, e, n) {
                      return {
                        a: s.t(t.section),
                        b: t.section,
                        c: s.n(0 === e ? "red" : ""),
                        d: s.n(10 === e ? "green" : ""),
                        e: s.n(e > 0 && e < 10 ? "gray" : ""),
                      };
                    }),
                  }
                : {},
              {
                f: s.p({
                  red: parseInt(r.viewData.percent.up, 10),
                  green: parseInt(r.viewData.percent.down, 10),
                  normal: parseInt(r.viewData.percent.flat, 10),
                }),
              }
            )
          : {},
        {
          g: s.o(function (t) {
            return o.graphTapToDetail();
          }, 5338),
        }
      );
    },
  ],
  ["__scopeId", "data-v-e1b97566"],
]);
wx.createComponent(g);
