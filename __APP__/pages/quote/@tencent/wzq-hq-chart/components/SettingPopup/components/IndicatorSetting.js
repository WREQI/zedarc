var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, n, a) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[n] = a);
  },
  i = require("../../../../../../../common/vendor.js"),
  l = require("enum.js"),
  h = i.defineComponent({
    name: "IndicatorSetting",
    components: {
      CircleCheckVue: function () {
        return "./CircleCheck.js";
      },
      SliderBar: function () {
        return "../../../../../../detailSbg/@tencent/stock-markets-base/components/Slide/mp.js";
      },
    },
    props: {
      indicatorSetData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["input", "change", "updateSetting"],
    setup: function (t, h) {
      var s = h.emit,
        d = i.getCurrentInstance().proxy || i.getCurrentInstance(),
        v = i.StockBridge.ENV === i.EnvTypeEnum.MP,
        p = i.ref(0),
        f = i.ref(!1),
        S = i.ref(1),
        m = i.ref(["MA", "EMA", "BOLL", "SAR", "ENE"]),
        y = i.ref([]),
        w = function (e) {
          (p.value = e),
            (S.value = y.value[e].value),
            (f.value = !0),
            y.value[e].show || ((y.value[e].show = !0), g());
        },
        g = function () {
          var e = [],
            t = y.value.map(function (t, n) {
              return (
                t.show ? (e[n] = t.value) : (e[n] = 0),
                { value: t.value, show: t.show }
              );
            });
          s("change", {
            type: "maTypes",
            value: { miMaTypes: e, maSetting: t },
          });
        };
      return (
        i.onMounted(function () {
          var i = t.indicatorSetData.maSets;
          (null == i ? void 0 : i.length)
            ? (y.value = l.MaTypes.map(function (t, l) {
                return (
                  (h = (function (t, n) {
                    for (var a in n || (n = {})) r.call(n, a) && u(t, a, n[a]);
                    if (o) {
                      var i,
                        l = e(o(n));
                      try {
                        for (l.s(); !(i = l.n()).done; ) {
                          a = i.value;
                          c.call(n, a) && u(t, a, n[a]);
                        }
                      } catch (e) {
                        l.e(e);
                      } finally {
                        l.f();
                      }
                    }
                    return t;
                  })({}, t)),
                  (s = { value: i[l].value, show: i[l].show }),
                  n(h, a(s))
                );
                var h, s;
              }))
            : (y.value = l.MaTypes),
            (S.value = y.value[p.value].value),
            (f.value = y.value[p.value].show);
        }),
        {
          isMp: v,
          curKey: p,
          curShow: f,
          curValue: S,
          maSets: y,
          mainIndicatorType: m,
          changeMainIndicator: function (e) {
            s("change", { type: "mainIndicator", value: e });
          },
          changeSideCount: function (e) {
            s("change", { type: "indicatorCount", value: e });
          },
          chooseMa: w,
          changeSlide: function (e) {
            !1 === y.value[p.value].show &&
              ((f.value = !0), (y.value[p.value].show = !0)),
              (S.value = e),
              (y.value[p.value].value = S.value),
              g();
          },
          changeCheck: function () {
            (f.value = !f.value),
              (y.value[p.value].show = f.value),
              g(),
              v && i.wx$1.vibrateShort({ type: "light" });
          },
          handleTouchEvent: function (e) {
            v || e.stopPropagation(),
              "touchstart" === e.type
                ? s("lockSwiper", !0)
                : "touchend" === e.type && s("lockSwiper", !1);
          },
          handleH5ChooseMa: function (e) {
            var t = (e.target.dataset || {}).index;
            switch (e.type) {
              case "touchstart":
                d.touchState = {
                  startTime: Date.now(),
                  startX: e.touches[0].clientX,
                  startY: e.touches[0].clientY,
                };
                break;
              case "touchend":
                if (d.touchState && Date.now() - d.touchState.startTime < 300) {
                  var n = e.changedTouches[0].clientX,
                    a = e.changedTouches[0].clientY;
                  Math.abs(n - d.touchState.startX) < 5 &&
                    Math.abs(a - d.touchState.startY) < 5 &&
                    w(t),
                    (d.touchState = null);
                }
            }
          },
        }
      );
    },
  });
Array ||
  (i.resolveComponent("CircleCheckVue") + i.resolveComponent("slider-bar"))();
var s = i._export_sfc(h, [
  [
    "render",
    function (e, t, n, a, o, r) {
      return i.e(
        {
          a: i.f(e.mainIndicatorType, function (t, n, a) {
            return {
              a: i.t(t),
              b: t,
              c: i.n(e.indicatorSetData.mainIndicator === t && "active"),
              d: i.o(
                function (n) {
                  return e.changeMainIndicator(t);
                },
                6065,
                t
              ),
            };
          }),
          b: "MA" === e.indicatorSetData.mainIndicator,
        },
        (e.indicatorSetData.mainIndicator, {}),
        { c: e.isMp },
        e.isMp
          ? i.e(
              { d: "MA" === e.indicatorSetData.mainIndicator },
              "MA" === e.indicatorSetData.mainIndicator
                ? {
                    e: i.f(e.maSets, function (t, n, a) {
                      return {
                        a: i.t(t.value),
                        b: t.color,
                        c: t.show ? t.color : "#98A0B3",
                        d: n === e.curKey && e.curShow ? t.bkColor : "#fff",
                        e:
                          n === e.curKey && e.curShow
                            ? t.borderColor
                            : "#DCDFE6",
                        f: i.n(n === e.curKey && e.curShow && "choose"),
                        g: i.o(
                          function (t) {
                            return e.chooseMa(n);
                          },
                          6066,
                          t.color
                        ),
                      };
                    }),
                  }
                : {}
            )
          : i.e(
              { f: "MA" === e.indicatorSetData.mainIndicator },
              "MA" === e.indicatorSetData.mainIndicator
                ? {
                    g: i.f(e.maSets, function (t, n, a) {
                      return {
                        a: i.t(t.value),
                        b: t.color,
                        c: n,
                        d: t.show ? t.color : "#98A0B3",
                        e: n === e.curKey && e.curShow ? t.bkColor : "#fff",
                        f:
                          n === e.curKey && e.curShow
                            ? t.borderColor
                            : "#DCDFE6",
                        g: i.n(n === e.curKey && e.curShow && "choose"),
                        h: i.o(
                          function () {
                            return (
                              e.handleH5ChooseMa &&
                              e.handleH5ChooseMa.apply(e, arguments)
                            );
                          },
                          6067,
                          t.color
                        ),
                        i: i.o(
                          function () {
                            return (
                              e.handleH5ChooseMa &&
                              e.handleH5ChooseMa.apply(e, arguments)
                            );
                          },
                          6068,
                          t.color
                        ),
                      };
                    }),
                    h: i.o(function () {
                      return (
                        e.handleTouchEvent &&
                        e.handleTouchEvent.apply(e, arguments)
                      );
                    }, 6069),
                    i: i.o(function () {}, 6070),
                    j: i.o(function () {
                      return (
                        e.handleTouchEvent &&
                        e.handleTouchEvent.apply(e, arguments)
                      );
                    }, 6071),
                  }
                : {}
            ),
        { k: "MA" === e.indicatorSetData.mainIndicator },
        "MA" === e.indicatorSetData.mainIndicator
          ? {
              l: i.p({ checked: e.curShow }),
              m: i.n(e.curShow ? "text-active" : "text-unactive"),
              n: i.o(function () {
                return e.changeCheck && e.changeCheck.apply(e, arguments);
              }, 6072),
              o: i.o(e.changeSlide, 6073),
              p: i.p({ value: e.curValue, width: e.isMp ? 0 : 320 }),
              q: i.o(function () {
                return (
                  e.handleTouchEvent && e.handleTouchEvent.apply(e, arguments)
                );
              }, 6074),
              r: i.o(function () {
                return (
                  e.handleTouchEvent && e.handleTouchEvent.apply(e, arguments)
                );
              }, 6075),
            }
          : {},
        {
          s: i.n(1 === e.indicatorSetData.indicatorCount && "active"),
          t: i.o(function (t) {
            return e.changeSideCount(1);
          }, 6076),
          v: i.n(2 === e.indicatorSetData.indicatorCount && "active"),
          w: i.o(function (t) {
            return e.changeSideCount(2);
          }, 6077),
        }
      );
    },
  ],
  ["__scopeId", "data-v-5e561c53"],
]);
wx.createComponent(s);
