var e = require("../../../../../../@babel/runtime/helpers/defineProperty");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, r) {
    for (var n in r || (r = {})) a.call(r, n) && u(e, n, r[n]);
    if (l) {
      var i,
        s = t(l(r));
      try {
        for (s.s(); !(i = s.n()).done; ) {
          n = i.value;
          c.call(r, n) && u(e, n, r[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  o = function (e, t) {
    return n(e, i(t));
  },
  d = require("../../../../../../common/vendor.js"),
  f = require("../constants.js"),
  p = d.defineComponent({
    props: { skin: { type: String, default: "white" } },
    components: {
      SliderBar: function () {
        return "../../../../../detailSbg/@tencent/stock-markets-base/components/Slide/mp.js";
      },
    },
    setup: function (t, r) {
      r.emit;
      var n = d.getCurrentInstance().proxy || d.getCurrentInstance(),
        i = d.StockBridge.ENV === d.EnvTypeEnum.MP,
        l = ["black", "dark"].includes(t.skin),
        a = d.ref(f.K_STYLES),
        c = d.ref(f.KLINE_MARK),
        u = d.ref("solid"),
        p = d.ref(40),
        m = d.ref(!1),
        k = d.ref(f.DEFAULT_SETTING),
        v = d.computed(function () {
          return 150 + 3 * p.value;
        }),
        g = d.computed(function () {
          return (
            c.value.zjzf.selected || c.value.ds.selected || c.value.zx.selected
          );
        }),
        S = function (e) {
          if (e) {
            var t = o(s({}, k.value), {
              yangKStyle: a.value.find(function (e) {
                return e.selected;
              }),
              zjzf: c.value.zjzf.selected,
              gap: c.value.gap.selected,
              ds: c.value.ds.selected,
              lastestPrice: c.value.lastestPrice.selected,
              remindPrice: c.value.remindPrice.selected,
              zx: c.value.zx.selected,
              chartRatio: p.value + 60,
            });
            d.StockBridge.setStorage(f.CHART_SETTING, t),
              d.StockBridge.busEmit("market-chartSetting-Update", {
                key: e,
                setting: t,
              });
          }
        };
      return (
        d.onMounted(function () {
          (n.localSetting = d.StockBridge.getStorage(f.CHART_SETTING)),
            "string" == typeof n.localSetting &&
              (n.localSetting = JSON.parse(n.localSetting)),
            (k.value = s(s({}, k.value), n.localSetting)),
            Object.keys(k.value).length &&
              ((a.value = a.value.map(function (e) {
                return (
                  (e.selected = e.id === k.value.yangKStyle.id),
                  e.selected && (u.value = e.id),
                  e
                );
              })),
              Object.keys(f.KLINE_MARK).map(function (e) {
                c.value[e].selected = !!k.value[e];
              }),
              (p.value = +k.value.chartRatio - 60));
        }),
        d.onBeforeUnmount(function () {
          n.slideTimer && clearTimeout(n.slideTimer),
            n.timer && clearTimeout(n.timer);
        }),
        {
          isMP: i,
          isBlack: l,
          curValue: p,
          klineStyle: a,
          isShowTips: g,
          klineMark: c,
          mainChartType: u,
          showCrossLine: m,
          mainChartHeight: v,
          changeSlide: function (e) {
            (p.value = e),
              n.slideTimer && clearTimeout(n.slideTimer),
              (n.slideTimer = setTimeout(function () {
                S("chartRatio");
              }, 1500));
          },
          klineMarkChange: function (t) {
            (c.value = o(
              s({}, c.value),
              e({}, t, o(s({}, c.value[t]), { selected: !c.value[t].selected }))
            )),
              "zjzf" === t &&
                (c.value.zjzf.selected
                  ? ((m.value = !0),
                    n.timer && clearTimeout(n.timer),
                    (n.timer = setTimeout(function () {
                      m.value = !1;
                    }, 3e3)))
                  : ((m.value = !1), n.timer && clearTimeout(n.timer))),
              S(t);
          },
          klineStyleChange: function (e) {
            (u.value = e),
              (a.value = a.value.map(function (t) {
                return (t.selected = t.id === e), t;
              })),
              S("yangKStyle");
          },
        }
      );
    },
  });
Array || d.resolveComponent("slider-bar")();
var m = d._export_sfc(p, [
  [
    "render",
    function (e, t, r, n, i, l) {
      return d.e(
        { a: e.klineMark.zjzf.selected },
        (e.klineMark.zjzf.selected, {}),
        { b: e.klineMark.gap.selected },
        e.klineMark.gap.selected
          ? {
              c: 16 + 0.28 * e.curValue + "px",
              d: 18 + 0.38 * e.curValue + "px",
            }
          : {},
        { e: e.klineMark.ds.selected },
        (e.klineMark.ds.selected, {}),
        { f: e.klineMark.lastestPrice.selected },
        (e.klineMark.lastestPrice.selected, {}),
        { g: e.klineMark.remindPrice.selected },
        (e.klineMark.remindPrice.selected, {}),
        { h: e.klineMark.zx.selected },
        e.klineMark.zx.selected
          ? {
              i: 16 + 0.28 * e.curValue + "px",
              j: 18 + 0.38 * e.curValue + "px",
              k: 115 + 2.2 * e.curValue + "px",
            }
          : {},
        { l: e.showCrossLine },
        (e.showCrossLine, {}),
        {
          m: d.n(e.mainChartType),
          n: e.mainChartHeight + "px",
          o: e.isShowTips,
        },
        (e.isShowTips, {}),
        {
          p: d.f(e.klineMark, function (t, r, n) {
            return {
              a: d.t(t.text),
              b: r,
              c: t.selected ? 1 : "",
              d: d.o(
                function (t) {
                  return e.klineMarkChange(r);
                },
                492,
                r
              ),
            };
          }),
          q: d.f(e.klineStyle, function (t, r, n) {
            return d.e(
              { a: t.selected },
              t.selected
                ? d.e({ b: "solid" === t.id }, (t.id, {}))
                : d.e({ c: "solid" === t.id }, (t.id, {})),
              {
                d: d.t(t.name),
                e: r,
                f: t.selected ? 1 : "",
                g: d.o(
                  function (r) {
                    return e.klineStyleChange(t.id);
                  },
                  493,
                  r
                ),
              }
            );
          }),
          r: d.o(e.changeSlide, 494),
          s: d.p({
            value: e.curValue,
            width: 220,
            min: 2,
            max: 102,
            dotSize: 24,
            showMaxMin: !1,
            showOperator: !1,
          }),
          t: e.isBlack ? 1 : "",
        }
      );
    },
  ],
  ["__scopeId", "data-v-3d237d88"],
]);
wx.createComponent(m);
