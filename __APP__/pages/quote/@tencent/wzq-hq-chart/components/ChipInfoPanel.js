require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = require("../node-modules/throttle-debounce/esm/index.js"),
  n = 0,
  i = "CHIP_GUIDE_KEY",
  r = e.defineComponent({
    props: {
      kIndex: { type: Number, default: -1 },
      layout: {
        type: Object,
        default: function () {
          return {};
        },
      },
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (r, o) {
      var a = o.emit,
        c = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        d = ["mpwzq", "mpweapp"].includes("mpweapp"),
        s = e.StockBridge.getStorage(i),
        u = e.ref("90"),
        l = e.ref(+s < 3),
        h = e.ref(!0),
        f = e.ref(!1),
        p = e.computed(function () {
          var e = r.data.profitPercent;
          return (
            70 *
              (isNaN(e.replace("%", ""))
                ? 0
                : parseFloat(e.replace("%", "")) / 100) +
            "px"
          );
        }),
        v = e.computed(function () {
          return r.kIndex < 0 || r.kIndex > 5;
        });
      e.watch(
        function () {
          return r.data;
        },
        function (e) {
          e.crossPrice ? g() : (f.value = !1);
        }
      );
      var g = function () {
          e.nextTick$1(function () {
            var e, t;
            try {
              var n =
                  null == (e = c.$refs.chipInfoContent)
                    ? void 0
                    : e.getBoundingClientRect(),
                i =
                  null == (t = c.$refs.crossTips)
                    ? void 0
                    : t.getBoundingClientRect();
              f.value =
                !isNaN(null == n ? void 0 : n.width) &&
                !isNaN(null == i ? void 0 : i.width) &&
                +n.width < +i.width + 4;
            } catch (e) {}
          });
        },
        w = t.debounce(200, function () {
          try {
            var e = c.$refs.chipInfoContent.getBoundingClientRect(),
              t = c.$refs.footer.getBoundingClientRect();
            if (
              isNaN(null == e ? void 0 : e.height) ||
              isNaN(null == t ? void 0 : t.height)
            )
              h.value = !0;
            else {
              var n = parseInt(e.height / t.height);
              h.value = n < 8;
            }
          } catch (e) {}
        });
      return (
        e.onMounted(function () {
          e.StockBridge.setStorage(i, +s + 1),
            d ||
              (e.nextTick$1(function () {
                l.value &&
                  (function e() {
                    var t,
                      i =
                        null == (t = c.$refs.scrollContent)
                          ? void 0
                          : t.scrollHeight;
                    setTimeout(function () {
                      var t;
                      (null == (t = c.$refs.scrollContent)
                        ? void 0
                        : t.scrollTo) &&
                        (c.$refs.scrollContent.scrollTo(0, n),
                        i > n + 10 && ((n += i / 10), e()));
                    }, 200);
                  })(),
                  w();
              }),
              window.addEventListener("resize", w));
        }),
        e.onBeforeUnmount(function () {
          var e;
          d ||
            (null == (e = w.cancel) || e.call(w),
            window.removeEventListener("resize", w));
        }),
        {
          showType: u,
          showGuide: l,
          hideLegend: h,
          useMiniFont: f,
          riseWidth: p,
          isShowText: v,
          fixed2: function (e) {
            return isNaN(e) ? "--" : e.toFixed(2);
          },
          formatPrice: function (e) {
            return isNaN(e)
              ? e
              : parseFloat(e) > 1e4
              ? parseFloat(e).toFixed(1)
              : parseFloat(e).toFixed(2);
          },
          handleSwitch: function (e) {
            u.value = e;
          },
          handleChipTeach: function () {
            a("showTeach");
          },
        }
      );
    },
  }),
  o = e._export_sfc(r, [
    [
      "render",
      function (t, n, i, r, o, a) {
        return e.e(
          { a: !t.hideLegend || !t.data.crossPrice },
          (t.hideLegend && t.data.crossPrice, {}),
          { b: t.data.crossPrice && t.hideLegend },
          t.data.crossPrice && t.hideLegend
            ? {
                c: e.t(t.formatPrice(t.data.crossPrice)),
                d: e.t(t.fixed2(100 * t.data.crossProfitPercent)),
                e: t.useMiniFont ? 1 : "",
              }
            : {},
          { f: t.data.crossPrice && !t.hideLegend },
          t.data.crossPrice && !t.hideLegend
            ? {
                g: e.t(t.formatPrice(t.data.crossPrice)),
                h: e.t(t.fixed2(100 * t.data.crossProfitPercent)),
                i: t.useMiniFont ? 1 : "",
              }
            : {},
          {
            j: t.riseWidth,
            k: e.t(t.data.profitPercent),
            l: e.t(t.fixed2(t.data.avgPrice)),
            m: e.n("90" === t.showType ? "active" : ""),
            n: e.o(function (e) {
              return t.handleSwitch("90");
            }, 4698),
            o: e.n("70" === t.showType ? "active" : ""),
            p: e.o(function (e) {
              return t.handleSwitch("70");
            }, 4699),
            q: e.t("90" === t.showType ? t.data.p90.price : t.data.p70.price),
            r: e.t(
              "90" === t.showType ? t.data.p90.percent : t.data.p70.percent
            ),
            s: e.n(t.showGuide ? "guide-mode" : ""),
            t: e.t(t.data.chipTime),
            v: t.isShowText,
          },
          (t.isShowText, {}),
          {
            w: e.o(function () {
              return t.handleChipTeach && t.handleChipTeach.apply(t, arguments);
            }, 4700),
            x: e.s(t.layout),
          }
        );
      },
    ],
    ["__scopeId", "data-v-eb9bb28a"],
  ]);
wx.createComponent(o);
