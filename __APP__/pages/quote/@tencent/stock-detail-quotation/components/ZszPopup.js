var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, i) {
    return new Promise(function (s, n) {
      var a = function (t) {
          try {
            r(i.next(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          try {
            r(i.throw(t));
          } catch (t) {
            n(t);
          }
        },
        r = function (t) {
          return t.done ? s(t.value) : Promise.resolve(t.value).then(a, o);
        };
      r((i = i.apply(t, e)).next());
    });
  },
  i = require("../../../../../common/vendor.js"),
  s = require("../../stock-hq-data/index.js"),
  n = {
    components: {
      SearchAiBar: function () {
        return "../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
      },
    },
    props: [
      "symbol",
      "skin",
      "market",
      "zsz",
      "xszsz",
      "hblx",
      "zxzRatio",
      "isTrading",
      "isHidden",
      "hkVIP",
    ],
    data: function () {
      var t = "https://st.gtimg.com/image/mp-weapp/stock";
      return {
        ready: !1,
        top: 0,
        left: 0,
        ratio: [],
        list: [
          {
            zsz: "",
            xszsz: "",
            zhzsz: "",
            unit: "人民币",
            ratio: "",
            image:
              "https://st.gtimg.com/design/6271b032a6bde142d98a64bee1e18cde.png",
            hblx: "CNY",
          },
          {
            zsz: "",
            xszsz: "",
            zhzsz: "",
            unit: "港币",
            ratio: "",
            image:
              "https://st.gtimg.com/design/5f1f066032063c7f32c518b9a9084acf.png",
            hblx: "HKD",
          },
          {
            zsz: "",
            xszsz: "",
            zhzsz: "",
            unit: "美元",
            ratio: "",
            image:
              "https://st.gtimg.com/design/e51313c8f0c11066bbfff11fd9a35ef7.png",
            hblx: "USD",
          },
        ],
        triangleWhite: "".concat(t, "/triangle-white.png"),
        triangleBlack: "".concat(t, "/triangle-black.png"),
        reportInfo: {},
        showExtra: !1,
        extraTitleConfig: {},
        titleConfig: { subTitle: "总市值" },
        material: "hs_market_value",
        zhzsz: void 0,
        hasZhzsz: !1,
      };
    },
    computed: {
      isMP: function () {
        return "mp" === i.StockBridge.ENV;
      },
    },
    watch: {
      isTrading: function (t) {
        t ? this.polling() : this.stopPolling();
      },
      isHidden: function (t) {
        t ? this.stopPolling() : this.polling();
      },
      zsz: function () {
        var t;
        (null == (t = this.ratio) ? void 0 : t.length) && this.format();
      },
      xszsz: function () {
        var t;
        (null == (t = this.ratio) ? void 0 : t.length) && this.format();
      },
    },
    created: function () {
      var t = this;
      this.list.sort(function (e) {
        return e.hblx === t.hblx ? -1 : 1;
      }),
        this.format(),
        this.getRatio(),
        (this.reportInfo = { stockid: this.symbol }),
        this.calcPosition(),
        s.utils.isUSMarket(this.market)
          ? ((this.showExtra = !!this.xszsz),
            (this.material = "us_market_value"),
            (this.extraTitleConfig = {
              title: "总市值 (稀释)",
              subTitle: "普通股+隐含股本",
            }),
            (this.titleConfig = {
              title: this.showExtra ? "总市值 (基本)" : "",
              subTitle: this.showExtra ? "仅统计普通股" : "总市值",
            }),
            this.showExtra && this.calcPosition())
          : (this.fetchZSZInfo(),
            s.utils.isHSMarket(this.market)
              ? ((this.material = "hs_market_value"),
                (this.extraTitleConfig = {
                  title: "总市值 (A股)",
                  subTitle: "最新价*总股本",
                }))
              : s.utils.isHKMarket(this.market) &&
                ((this.material = "hk_market_value"),
                (this.extraTitleConfig = {
                  title: "总市值 (港股)",
                  subTitle: "最新价*总股本",
                }))),
        i.StockBridge.report("hq.gegu_xiangqingye.market_value_alert_brow", {
          stockid: this.symbol,
        });
    },
    beforeDestroy: function () {
      this.stopPolling();
    },
    methods: {
      calcPosition: function () {
        var t = this,
          e = this.showExtra || this.hasZhzsz ? 265 : 220;
        if (this.isMP)
          i.wx$1
            .createSelectorQuery()
            .in(this.$parent)
            .select("#zszTriangle")
            .boundingClientRect(function (i) {
              var s = i.top,
                n = i.height,
                a = i.left;
              (t.top = s + 2 * n), (t.left = a - e), (t.ready = !0);
            })
            .exec();
        else {
          var s = this.$parent.$refs.zszTriangle[0].getBoundingClientRect(),
            n = s.top,
            a = s.height,
            o = s.left;
          (this.top = n + 2 * a), (this.left = o - e), (this.ready = !0);
        }
      },
      checkIsAH: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        "https://proxy.finance.qq.com/stockdata/code_ah.json",
                        (t.next = 4),
                        i.StockBridge.request(
                          "https://proxy.finance.qq.com/stockdata/code_ah.json",
                          i.RequestTypeEnum.GET
                        )
                      );
                    case 4:
                      if (
                        (s = t.sent) &&
                        s.ah &&
                        s.ah.length &&
                        s.ah.includes(this.symbol)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return");
                    case 7:
                      this.fetchZSZInfo(), (t.next = 12);
                      break;
                    case 10:
                      (t.prev = 10), (t.t0 = t.catch(0));
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 10]]
            );
          })
        );
      },
      fetchZSZInfo: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/quote/weighted_market_value",
                        (t.next = 4),
                        i.StockBridge.request(
                          ""
                            .concat(
                              "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/quote/weighted_market_value",
                              "?symbol="
                            )
                            .concat(this.symbol),
                          i.RequestTypeEnum.GET
                        )
                      );
                    case 4:
                      if ((s = t.sent) && 0 === s.code && s.data) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return");
                    case 7:
                      this.formatAHData(s.data), (t.next = 12);
                      break;
                    case 10:
                      (t.prev = 10), (t.t0 = t.catch(0));
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 10]]
            );
          })
        );
      },
      formatAHData: function (t) {
        var e = t || {},
          i = e.type,
          s = (e.currency, e.weightedValue);
        e.marketValue, e.USDCNY, e.HKDCNY, e.USDHKD;
        (this.hasZhzsz = 1 == +i && void 0 !== s),
          this.hasZhzsz &&
            ((this.titleConfig = {
              title: "总市值 (综合)",
              subTitle: "多地市值加总",
            }),
            (this.zhzsz = "".concat(s, "亿")),
            this.format(),
            this.polling(),
            this.calcPosition());
      },
      getRatio: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), this.$parent.getRatio();
                    case 2:
                      (this.ratio = this.zxzRatio), this.format();
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      format: function () {
        var t = this,
          e = this.formatScale(this.zsz),
          i = this.formatScale(this.xszsz),
          s = this.formatScale(this.zhzsz),
          n = this.getTextHb(this.hblx);
        this.list.forEach(function (a) {
          var o = "USD" === a.hblx ? 2 : "HKD" === a.hblx ? 1 : 0,
            r = t.getTextHb(a.hblx),
            h = t.ratio[o];
          a.hblx === t.hblx
            ? ((a.ratio = "默认"), (h = 1))
            : (a.ratio = "1"
                .concat(n, "=")
                .concat(isNaN(h) ? "--" : h.toFixed(2))
                .concat(r)),
            (a.zsz = t.formatNum(e * h)),
            (a.xszsz = t.formatNum(i * h)),
            t.hasZhzsz && (a.zhzsz = t.formatNum(s * h));
        });
      },
      close: function () {
        this.stopPolling(), this.$emit("close");
      },
      onShowAiDialog: function (t) {
        this.close(), i.StockBridge.busEmit("showAiDialog", t);
      },
      getTextHb: function (t) {
        return "CNY" === t || (!t && s.utils.isHSMarket(this.market))
          ? "RMB"
          : t;
      },
      polling: function () {
        var t = this;
        this.stopPolling(),
          (this.timer = setTimeout(function () {
            t.isHidden ||
              !t.isTrading ||
              !t.hasZhzsz ||
              (s.utils.isHKMarket(t.market) && !t.hkVIP) ||
              (t.fetchZSZInfo(), t.polling());
          }, 5e3));
      },
      stopPolling: function () {
        this.timer && (clearInterval(this.timer), (this.timer = null));
      },
      formatScale: function (t) {
        return (
          parseFloat(t) * (/万亿/.test(t) ? 1e12 : /亿/.test(t) ? 1e8 : 1e4)
        );
      },
      formatNum: function (t) {
        return isNaN(t)
          ? "--"
          : t >= 1e13
          ? "".concat((t / 1e12).toFixed(2), "万亿")
          : t >= 1e12
          ? "".concat((t / 1e8).toFixed(0), "亿")
          : t >= 1e8
          ? "".concat((t / 1e8).toFixed(2), "亿")
          : "".concat((t / 1e4).toFixed(2), "万");
      },
    },
  };
Array || i.resolveComponent("SearchAiBar")();
var a = i._export_sfc(n, [
  [
    "render",
    function (t, e, s, n, a, o) {
      return i.e(
        { a: i.n({ big: !a.titleConfig.title }), b: a.showExtra || a.hasZhzsz },
        a.showExtra || a.hasZhzsz
          ? {
              c: i.t(a.extraTitleConfig.title),
              d: i.t(a.extraTitleConfig.subTitle),
            }
          : {},
        { e: a.titleConfig.title },
        a.titleConfig.title ? { f: i.t(a.titleConfig.title) } : {},
        {
          g: i.t(a.titleConfig.subTitle),
          h: i.n({ big: !a.titleConfig.title }),
          i: i.f(a.list, function (t, e, n) {
            return i.e(
              { a: t.image, b: i.t(t.unit), c: i.t(t.ratio) },
              a.showExtra || a.hasZhzsz
                ? { d: i.t(a.hasZhzsz ? t.zsz : t.xszsz) }
                : {},
              {
                e: i.t(a.hasZhzsz ? t.zhzsz : t.zsz),
                f: t.unit,
                g: t.hblx === s.hblx ? 1 : "",
              }
            );
          }),
          j: a.showExtra || a.hasZhzsz,
          k: i.n({ active: !a.showExtra && !a.hasZhzsz }),
          l: a.showExtra || a.hasZhzsz,
        },
        a.showExtra || a.hasZhzsz
          ? {
              m: i.o(o.onShowAiDialog, 2737),
              n: i.p({
                "report-prefix": "qutation.ai_zsz",
                "report-info": a.reportInfo,
                scene: "stockdetail",
                "content-id": s.symbol,
                material: { tag: a.material },
              }),
            }
          : {},
        {
          o: i.n({ big: a.showExtra || a.hasZhzsz }),
          p: "".concat(a.top, "px"),
          q: "".concat(a.left, "px"),
          r: i.o(function () {}, 2738),
          s: "black" === s.skin ? 1 : "",
          t: a.ready ? "flex" : "none",
          v: i.o(function () {}, 2739),
          w: i.o(function (t) {
            return o.close();
          }, 2740),
        }
      );
    },
  ],
  ["__scopeId", "data-v-f015138e"],
]);
wx.createComponent(a);
