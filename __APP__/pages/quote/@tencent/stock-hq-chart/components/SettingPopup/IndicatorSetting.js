require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = function (t, e, r) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  c = function (t, n) {
    for (var c in n || (n = {})) o.call(n, c) && i(t, c, n[c]);
    if (r) {
      var u,
        l = e(r(n));
      try {
        for (l.s(); !(u = l.n()).done; ) {
          c = u.value;
          a.call(n, c) && i(t, c, n[c]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return t;
  },
  u = require("../../../../../../common/vendor.js"),
  l = require("../constants.js"),
  s = u.defineComponent({
    setup: function (e, n) {
      var r = this,
        o = (n.emit, u.getCurrentInstance().proxy || u.getCurrentInstance()),
        a = u.ref(l.DEFAULT_SETTING.indicatorCount),
        i = u.computed(function () {
          return ["ma", "ema", "boll", "sar"].map(function (t) {
            return { key: t, value: t.toUpperCase() };
          });
        }),
        s = u.computed(function () {
          var t = l.INDICATOR.slice(0, 13).map(function (t, e) {
              return { key: t, value: l.INDICATOR_TEXT[e] };
            }),
            e = l.INDICATOR.indexOf("rally");
          return -1 !== e && t.splice(e, 1), t;
        }),
        d = function () {
          u.StockBridge.setStorage(l.CHART_SETTING, o.setting),
            u.StockBridge.busEmit("market-chartSetting-Update", {
              key: "indicatorCount",
              setting: o.setting,
            });
        };
      return (
        u.onMounted(function () {
          if (
            (u.StockBridge.setTitle({ title: "K线设置" }),
            (o.localSetting = u.StockBridge.getStorage(l.CHART_SETTING)),
            "string" == typeof o.localSetting)
          )
            try {
              o.localSetting = JSON.parse(o.localSetting);
            } catch (t) {
              o.localSetting = {};
            }
          (o.setting = c(c({}, l.DEFAULT_SETTING), o.localSetting)),
            (a.value = o.setting.indicatorCount);
        }),
        {
          indicatorCount: a,
          mainIndicators: i,
          indicators: s,
          updateSetting: d,
          gotoParams: function (e) {
            return (
              (n = r),
              null,
              (o = t().mark(function n() {
                var r;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        u.StockBridge.report(
                          "hq.stock_detail.chart_setting_".concat(e, "_click")
                        ),
                          (r = ["ma", "volume", "cje", "ema"].includes(e)
                            ? "chartSettingAvg"
                            : "chartSettingParams"),
                          u.StockRouter.routeTo({
                            name: r,
                            query: { type: e },
                          });
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, n);
              })),
              new Promise(function (t, e) {
                var r = function (t) {
                    try {
                      i(o.next(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  a = function (t) {
                    try {
                      i(o.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  i = function (e) {
                    return e.done
                      ? t(e.value)
                      : Promise.resolve(e.value).then(r, a);
                  };
                i((o = o.apply(n, null)).next());
              })
            );
            var n, o;
          },
          changeIndicatorCount: function (t) {
            (a.value = t), (o.setting.indicatorCount = t), d();
          },
        }
      );
    },
  }),
  d = u._export_sfc(s, [
    [
      "render",
      function (t, e, n, r, o, a) {
        return {
          a: u.f(t.mainIndicators, function (e, n, r) {
            return {
              a: u.t(e.value),
              b: n === t.mainIndicators.length - 1 ? 1 : "",
              c: "main_".concat(e.key),
              d: u.o(
                function (n) {
                  return t.gotoParams(e.key);
                },
                486,
                "main_".concat(e.key)
              ),
            };
          }),
          b: 1 === t.indicatorCount ? 1 : "",
          c: u.o(function (e) {
            return t.changeIndicatorCount(1);
          }, 487),
          d: 2 === t.indicatorCount ? 1 : "",
          e: u.o(function (e) {
            return t.changeIndicatorCount(2);
          }, 488),
          f: 3 === t.indicatorCount ? 1 : "",
          g: u.o(function (e) {
            return t.changeIndicatorCount(3);
          }, 489),
          h: 4 === t.indicatorCount ? 1 : "",
          i: u.o(function (e) {
            return t.changeIndicatorCount(4);
          }, 490),
          j: u.f(t.indicators, function (e, n, r) {
            return {
              a: u.t(e.value),
              b: n === t.indicators.length - 1 ? 1 : "",
              c: e.key,
              d: u.o(
                function (n) {
                  return t.gotoParams(e.key);
                },
                491,
                e.key
              ),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-48a1dd44"],
  ]);
wx.createComponent(d);
