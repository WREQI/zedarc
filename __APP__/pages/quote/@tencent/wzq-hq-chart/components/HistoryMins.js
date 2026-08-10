require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../stock-hq-data/index.js"),
  i = require("../prefetch.js"),
  s = require("../../../../../common/vendor.js"),
  n = {
    components: {
      mins: function () {
        return "../../stock-kline/mins.js";
      },
      NoData: function () {
        return "./NoData.js";
      },
      Status: function () {
        return "../../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    props: {
      width: Number,
      height: Number,
      skin: String,
      market: String,
      scode: String,
      date: String,
      stockType: String,
      stopTime: String,
      hideIndicator: Boolean,
      disableInteract: Boolean,
      customSetting: Object,
      landscape: Boolean,
    },
    data: function () {
      return {
        options: null,
        noData: !1,
        defaultSetting: i.getDefaultSetting(),
      };
    },
    computed: {
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      isHKIndex: function () {
        return (
          e.utils.isHKMarket(this.market) && e.utils.isIndex(this.stockType)
        );
      },
      isHKOrZsOrFundOrNhg: function () {
        return (
          e.utils.isHKMarket(this.market) ||
          e.utils.isIndex(this.stockType) ||
          e.utils.isFund(this.stockType) ||
          e.utils.isDebt(this.stockType) ||
          e.utils.isNationalDebt(this.stockType)
        );
      },
    },
    created: function () {
      (this.dataStatus = i.COMMON_PAGE_STATUS.LOADING), this.getData();
    },
    methods: {
      getData: function () {
        return (
          (s = this),
          null,
          (n = t().mark(function () {
            var s,
              n,
              o,
              r,
              a,
              u,
              c,
              h,
              d,
              l = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        i.detailApi
                          .getHistoryMins(
                            {
                              market: this.market,
                              scode: this.scode,
                              date: this.date,
                              stockType: this.stockType,
                              isHKOrZsOrFundOrNhg: this.isHKOrZsOrFundOrNhg,
                            },
                            { needProcess: !0 }
                          )
                          .catch(function (t) {
                            l.dataStatus = i.COMMON_PAGE_STATUS.ERROR;
                          })
                      );
                    case 2:
                      if (
                        ((n = t.sent),
                        (r = (o = n || {}).items),
                        (a = void 0 === r ? [] : r),
                        (u = o.preClose),
                        a.length)
                      ) {
                        t.next = 9;
                        break;
                      }
                      return t.abrupt("return", void (this.noData = !0));
                    case 9:
                      (this.dataStatus = ""),
                        (this.noData = !1),
                        (c = this.getStopIndex(a)),
                        (h = i.getRenderPoint(
                          this.stockType,
                          this.market,
                          this.scode
                        )),
                        (d =
                          e.utils.isHSMarket(this.market) &&
                          (e.utils.isAMarket(this.stockType) ||
                            e.utils.isKeChuangStock(this.stockType) ||
                            e.utils.isChuangYeStock(this.stockType) ||
                            ["ETF", "QDII-ETF"].includes(this.stockType))),
                        (this.chartData = {
                          items: a.slice(0, c + 1),
                          preClose: u,
                        }),
                        (this.options = {
                          ready: !0,
                          isTrading: !1,
                          options: {
                            skin: "black" === this.skin ? "dark" : "plain",
                            isHistoryMins: !0,
                            type: "mins",
                            layout: this.landscape
                              ? "mins-landscape"
                              : "mins-portrait",
                            market: this.market,
                            scode: this.scode,
                            fixNum:
                              +(null == (s = a[0].price.split(".")[1])
                                ? void 0
                                : s.length) || 2,
                            stockUnit: i.getTradeUnit(
                              this.stockType,
                              this.market
                            ),
                            labels: i.getChartScale(
                              this.stockType,
                              this.market
                            ),
                            count: d
                              ? h[4]
                              : e.utils.isDebt(this.stockType) ||
                                e.utils.isDebtIndex(this.stockType)
                              ? h[5]
                              : h[0],
                            panhouRange: d ? [h[0], h[4]] : null,
                            hideIndicator: this.hideIndicator,
                            disableInteract: this.disableInteract,
                            setting: this.setting,
                            isHKIndex: this.isHKIndex,
                            isHKOrZsOrFundOrNhg: this.isHKOrZsOrFundOrNhg,
                          },
                        }),
                        this.$emit("getData", n);
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              a,
              this
            );
          })),
          new Promise(function (t, e) {
            var i = function (t) {
                try {
                  r(n.next(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (t) {
                try {
                  r(n.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              r = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, o);
              };
            r((n = n.apply(s, null)).next());
          })
        );
        var s, n;
      },
      getInitData: function (t) {
        t && t({ data: this.chartData });
      },
      onTouchMove: function (t) {
        this.$emit("onTouchMove", t);
      },
      onTouchCancel: function () {
        this.$emit("onTouchCancel");
      },
      getStopIndex: function (t) {
        if (this.stopTime) {
          var e = 0,
            i = t.length - 1;
          if (t[0].time === this.stopTime) return 0;
          if (t[i].time === this.stopTime) return i;
          for (; e < i; ) {
            var s = Math.ceil((e + i) / 2);
            if (t[s].time < this.stopTime) e = s;
            else {
              if (!(t[s].time > this.stopTime)) return s;
              i = s;
            }
          }
        }
        return t.length - 1;
      },
    },
  };
Array ||
  (
    s.resolveComponent("mins") +
    s.resolveComponent("NoData") +
    s.resolveComponent("Status")
  )();
var o = s._export_sfc(n, [
  [
    "render",
    function (t, e, i, n, o, r) {
      return s.e(
        { a: o.options },
        o.options
          ? {
              b: s.o(r.onTouchMove, 5207),
              c: s.o(r.onTouchCancel, 5208),
              d: s.o(r.getInitData, 5209),
              e: s.p({
                type: "mins",
                width: i.width,
                height: i.height,
                options: o.options,
              }),
            }
          : {},
        { f: o.noData },
        (o.noData, {}),
        { g: t.dataStatus },
        t.dataStatus
          ? {
              h: s.o(function (t) {
                return r.getData();
              }, 5210),
              i: s.p({
                "is-simple-mode": !1,
                showErrorImg: !1,
                type: t.dataStatus,
              }),
            }
          : {},
        { j: "".concat(i.width, "px"), k: "".concat(i.height, "px") }
      );
    },
  ],
]);
wx.createComponent(o);
