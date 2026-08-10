var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (t, n, o) {
    return new Promise(function (e, a) {
      var r = function (t) {
          try {
            i(o.next(t));
          } catch (t) {
            a(t);
          }
        },
        u = function (t) {
          try {
            i(o.throw(t));
          } catch (t) {
            a(t);
          }
        },
        i = function (t) {
          return t.done ? e(t.value) : Promise.resolve(t.value).then(r, u);
        };
      i((o = o.apply(t, n)).next());
    });
  },
  o = require("../../../Index.js"),
  e = require("../../../../../../../common/vendor.js"),
  a = require("../../../../../hqPage_plugin_gen_assets.js"),
  r = {
    components: {
      UpDown: function () {
        return "./UpDown.js";
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
    props: {
      market: { type: String, default: "" },
      onShow: { type: Boolean, default: !0 },
    },
    data: function () {
      return {
        dataReady: !1,
        marketData: null,
        heatValue: 0,
        northBoundFlow: 0,
        totalAmount: 0,
        amountChange: 0,
        up_count: 0,
        flat_count: 0,
        down_count: 0,
        ups_downs_dsb: {},
        countdowntimer: "",
        north_bound_market_close: !0,
        appear: !0,
        countdown: 0,
        noSenceHeat: !1,
        noSenceNorth: !1,
        northFlowTitle: "北向资金",
        hasNorthBoundKey: !0,
      };
    },
    computed: {
      isWindows: function () {
        var t, n;
        return (
          ("mp" === this.hqBridge.ENV &&
            (null ==
            (n =
              null == (t = null == getApp ? void 0 : getApp().globalData.detect)
                ? void 0
                : t.env)
              ? void 0
              : n.IS_PCWEIXIN)) ||
          !1
        );
      },
      hqShowStatus: function () {
        var t;
        return null == (t = this.isHqShow) ? void 0 : t.call(this);
      },
    },
    created: function () {
      return n(
        this,
        null,
        t().mark(function n() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    this.dataReady = !0;
                  case 1:
                  case "end":
                    return t.stop();
                }
            },
            n,
            this
          );
        })
      );
    },
    activated: function () {
      this.handleStatus(!0);
    },
    onPageShow: function () {
      this.handleStatus(!0);
    },
    deactivated: function () {
      this.handleStatus(!1);
    },
    onPageHide: function () {
      this.handleStatus(!1);
    },
    mounted: function () {
      this.loadData(),
        (this.timer = setInterval(this.loadData, 5e3)),
        (this.countdowntimer = setInterval(this.countDownAni, 1e3)),
        this.hqBridge.report("hq.hstab.analysis_show");
    },
    beforeDestroy: function () {
      clearInterval(this.timer), clearInterval(this.countdowntimer);
    },
    methods: {
      handleStatus: function (t) {
        var n, o, e, a;
        (this.appear = t),
          t &&
            (null ==
              (a =
                null == (o = null == (n = this.$refs) ? void 0 : n.upDown)
                  ? void 0
                  : o.formatViewData) ||
              a.call(
                o,
                (null == (e = this.marketData) ? void 0 : e.ups_downs_dsb) || {}
              ));
      },
      loadData: function () {
        if (this.appear && this.onShow) {
          this.requestRealtimeData();
          var t = new Date(),
            n = 60 * t.getHours() + t.getMinutes();
          (this.noSenceHeat = n >= 550 && n <= 555),
            (this.noSenceNorth = !+this.northBoundFlow && n >= 550 && n <= 564);
        }
      },
      requestRealtimeData: function () {
        return n(
          this,
          null,
          t().mark(function n() {
            var e, a, r, u, i, s, d, l;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), o.HqAPI.getMarketHSIndex(this.hqBridge)
                      );
                    case 2:
                      (a = t.sent),
                        (r = (a || {}).data),
                        (u = void 0 === r ? {} : r),
                        (this.marketData = u),
                        (i = u.cntdown_sec),
                        (this.countdown = i || 0),
                        u &&
                          u.ups_downs_dsb &&
                          ((this.up_count = u.ups_downs_dsb.up_count),
                          (this.flat_count = u.ups_downs_dsb.flat_count),
                          (this.down_count = u.ups_downs_dsb.down_count),
                          (this.heatValue = u.ups_downs_dsb.up_ratio)),
                        (this.hasNorthBoundKey = u && u.north_bound),
                        (this.north_bound_market_close =
                          u && u.north_bound && u.north_bound.close_flag),
                        Object.prototype.hasOwnProperty.call(
                          null == u ? void 0 : u.north_bound,
                          "day_flag"
                        ) &&
                          (this.northFlowTitle =
                            (1 == +u.north_bound.day_flag ? "今日" : "昨日") +
                            "北向资金"),
                        (this.northBoundFlow =
                          1e4 *
                            (null == (e = u.north_bound)
                              ? void 0
                              : e.fund_flow_net_in) || ""),
                        (s = u.turnover_dsb.all) &&
                          ((d = s.amount ? s.amount : 0),
                          (l = s.amount_change ? s.amount_change : 0),
                          (this.totalAmount = parseFloat(d).toFixed(1)),
                          (this.amountChange = parseFloat(l).toFixed(1)));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      numberFormat: function (t) {
        var n,
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          e = t < 0,
          a = {},
          r = 1e4,
          u = ["", "万", "亿", "万亿"];
        return (
          (t = Math.abs(t)) < r
            ? ((a.value = t), (a.unit = ""))
            : ((n = Math.floor(Math.log(t) / Math.log(r))),
              (a.value = (t / Math.pow(r, n)).toFixed(o)),
              (a.unit = u[n])),
          (e ? "-" : "") + a.value + a.unit
        );
      },
      showTip: function () {
        e.StockBridge.report("hq.hstab.market_analysis_guide_click"),
          e.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN2022092909252083301d1d",
              zxtype: 1,
              articleStyle: "fullTeach",
            },
          });
      },
      gotoDetail: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n =
            "https://wzq.tenpay.com/mp/v2/index.html#/market-analysis-detail".concat(
              t ? "?target=".concat(t) : ""
            );
        e.StockBridge.routeTo({
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(n)
          ),
        }),
          "northFlow" === t
            ? e.StockBridge.report("hq.hstab.market_analysis_north_flow_click")
            : "marketHeat" === t
            ? e.StockBridge.report("hq.hstab.market_analysis_market_heat_click")
            : e.StockBridge.report("hq.HS.market_sczl_click");
      },
      countDownAni: function () {
        this.countdown > 0
          ? (this.countdown -= 1)
          : (clearInterval(this.countdowntimer), (this.countdowntimer = null));
      },
    },
  };
Array || e.resolveComponent("UpDown")();
var u = e._export_sfc(r, [
  [
    "render",
    function (t, n, o, r, u, i) {
      return e.e(
        { a: u.marketData },
        u.marketData
          ? e.e(
              {
                b: e.o(function () {
                  return i.showTip && i.showTip.apply(i, arguments);
                }, 4947),
                c: u.countdown <= 0,
              },
              u.countdown <= 0
                ? e.e(
                    {
                      d: e.t(
                        u.totalAmount > 0 ? i.numberFormat(u.totalAmount, 1) : 0
                      ),
                      e: e.t(u.amountChange > 0 ? "较昨日放量" : "较昨日缩量"),
                      f: e.t(u.amountChange > 0 ? "+" : ""),
                      g: e.t(i.numberFormat(u.amountChange, 1)),
                      h: e.n(
                        u.amountChange > 0
                          ? "value-up"
                          : u.amountChange < 0
                          ? "value-down"
                          : "value-flat"
                      ),
                      i: i.isWindows,
                    },
                    i.isWindows ? {} : { j: a._imports_0$1 },
                    {
                      k: e.o(function () {
                        return i.gotoDetail && i.gotoDetail.apply(i, arguments);
                      }, 4948),
                    }
                  )
                : e.e(
                    {
                      l: e.t(
                        parseInt(u.countdown / 60, 10)
                          .toString()
                          .padStart(2, "0")
                      ),
                      m: e.t(
                        parseInt(u.countdown % 60, 10)
                          .toString()
                          .padStart(2, "0")
                      ),
                      n: i.isWindows,
                    },
                    i.isWindows ? {} : { o: a._imports_0$1 },
                    {
                      p: e.o(function (t) {
                        return i.gotoDetail();
                      }, 4949),
                    }
                  ),
              {
                q: e.sr("upDown", "0fac1ded-0"),
                r: e.p({
                  "up-down-data": u.marketData
                    ? u.marketData.ups_downs_dsb
                    : {},
                }),
                s: e.t(u.up_count),
                t: e.t(u.down_count),
                v: e.o(function (t) {
                  return i.gotoDetail("upDownChart");
                }, 4950),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-0fac1ded"],
]);
wx.createComponent(u);
