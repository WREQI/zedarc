var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../common/vendor.js"),
  n = {
    components: {
      Mins: function () {
        return "../../stockfe-hq-chart/src/chart/Mins.js";
      },
      Kline: function () {
        return "../../stockfe-hq-chart/src/chart/Kline.js";
      },
    },
    inject: { helper: { default: {} } },
    options: { styleIsolation: "shared" },
    props: {
      chartType: String,
      width: Number,
      height: Number,
      skin: { type: String, default: "plain" },
      params: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isMp: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        qtData: null,
        computedWidth: 611,
        computedHeight: 400,
        initReady: !1,
      };
    },
    computed: {
      containerStyle: function () {
        return this.isMp ? {} : { width: "".concat(this.width, "px") };
      },
      market: function () {
        var t;
        return (null == (t = this.params) ? void 0 : t.market) || "";
      },
      scode: function () {
        var t;
        return (null == (t = this.params) ? void 0 : t.scode) || "";
      },
      lineColor: function () {
        return "dark" === this.skin ? "#191E27" : "#E9EBF0";
      },
      borderStyle: function () {
        return "mins" === this.chartType
          ? {}
          : {
              borderTop: "1px solid ".concat(this.lineColor),
              borderRight: "1px solid ".concat(this.lineColor),
            };
      },
      price: function () {
        if (!this.qtData) return "";
        var t = this.qtData[3],
          e = "fx" === this.market ? 12 : 31,
          n = "fx" === this.market ? 13 : 32;
        return "".concat(
          t,
          " ",
          "".concat(this.qtData[e] > 0 ? "+" : "").concat(this.qtData[e]),
          " ",
          "".concat(this.qtData[n] > 0 ? "+" : "").concat(this.qtData[n], "%")
        );
      },
      color: function () {
        return this.qtData
          ? 0 == +this.qtData[31]
            ? "color-equal"
            : this.qtData[31] > 0
            ? "color-rise"
            : "color-drop"
          : "";
      },
      chartWidth: function () {
        return (this.width || this.computedWidth) - 16;
      },
      chartHeight: function () {
        return this.height || this.computedHeight;
      },
      env: function () {
        var t;
        return (null == (t = this.helper) ? void 0 : t.env) || {};
      },
      stockChartClass: function () {
        return "stock-chart-"
          .concat(this.market)
          .concat(this.scode.replace(".", "-"));
      },
    },
    mounted: function () {
      var t = this;
      setTimeout(function () {
        t.initChartSize();
      }, 200);
    },
    methods: {
      initChartSize: function () {
        return (
          (e = this),
          null,
          (n = t().mark(function e() {
            var n, i, r, a, c, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.env.__MP__) {
                        t.next = 9;
                        break;
                      }
                      return (
                        (t.next = 3), this.getEleInfo(".chart-wrapper", this)
                      );
                    case 3:
                      (i = t.sent),
                        (r = (i || {}).width),
                        (n = r),
                        (t.next = 10);
                      break;
                    case 9:
                      this.env.__MP__ ||
                        ((a = document.querySelector(
                          ".".concat(this.stockChartClass)
                        )),
                        (c =
                          (null == a ? void 0 : a.getBoundingClientRect()) ||
                          {}),
                        (o = c.width),
                        (n = o));
                    case 10:
                      (this.computedWidth = n || 611),
                        (this.computedHeight = (400 / 611) * n || 400),
                        (this.initReady = !0);
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, i) {
            var r = function (t) {
                try {
                  c(n.next(t));
                } catch (t) {
                  i(t);
                }
              },
              a = function (t) {
                try {
                  c(n.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              c = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(r, a);
              };
            c((n = n.apply(e, null)).next());
          })
        );
        var e, n;
      },
      getEleInfo: function (t, n) {
        return new Promise(function (i) {
          e.wx$1
            .createSelectorQuery()
            .in(n)
            .select(t)
            .fields({ node: !0, size: !0, rect: !0 })
            .exec(function (t) {
              var e = (t && t[0]) || {};
              i(e);
            });
        });
      },
      getQTData: function (t) {
        this.qtData = t;
      },
    },
  };
Array || (e.resolveComponent("Mins") + e.resolveComponent("Kline"))();
var i = e._export_sfc(n, [
  [
    "render",
    function (t, n, i, r, a, c) {
      return e.e(
        { a: a.qtData },
        a.qtData
          ? {
              b: e.t("".concat(a.qtData[1], "(").concat(a.qtData[2], ")")),
              c: e.t(c.price),
              d: e.n(c.color),
            }
          : {},
        { e: "mins" === i.chartType && a.initReady },
        "mins" === i.chartType && a.initReady
          ? {
              f: e.o(c.getQTData, 5642),
              g: e.p({
                width: c.chartWidth,
                height: c.chartHeight,
                market: c.market,
                scode: c.scode,
                skin: i.skin,
                hideIndicator: !0,
                disableInteract: !0,
              }),
            }
          : {},
        { h: "kline" === i.chartType && a.initReady },
        "kline" === i.chartType && a.initReady
          ? {
              i: e.o(c.getQTData, 5643),
              j: e.p({
                width: c.chartWidth,
                height: c.chartHeight,
                market: c.market,
                scode: c.scode,
                skin: i.skin,
                hideIndicator: !0,
                hideChip: !0,
                disableInteract: !0,
              }),
            }
          : {},
        {
          k: e.s(c.borderStyle),
          l: e.n("mins" === i.chartType ? "chart-wrapper-mins" : ""),
          m: e.n(c.stockChartClass),
          n: e.s(c.containerStyle),
          o: e.n(i.skin || ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-dc5793fa"],
]);
wx.createComponent(i);
