var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../common/vendor.js");
require("../../../stock-hq-data/api/hostConfig.js");
var n = require("../../Index.js"),
  o = {
    components: {
      changeIndex: function () {
        return "./marketChangeChart.js";
      },
    },
    props: { tabOnShow: { type: Boolean, default: !0 } },
    data: function () {
      return { selectedIndex: 0, countdowntimer: "", countdown: 0 };
    },
    mounted: function () {
      this.requestRealtimeData();
    },
    beforeDestroy: function () {
      this.countdowntimer && clearInterval(this.countdowntimer);
    },
    methods: {
      showTip: function () {
        e.StockRouter.routeTo({
          name: "informationDetail",
          query: {
            id: "SN20220629170316804d2480",
            articleStyle: "fullTeach",
            anchorTitle: "板块异动",
          },
        }),
          e.StockBridge.report("hq.choose_hq.plate.market_bkyd_i");
      },
      goToDetail: function () {
        e.StockBridge.ENV === e.EnvTypeEnum.MP
          ? e.wx$1.navigateTo({
              url: "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(
                  "https://wzq.tenpay.com/mp/v2/index.html#/platefund-detail"
                ),
                "&hideShareMenu=1"
              ),
            })
          : this.$router.push({ path: "/platefund-detail" }),
          e.StockBridge.report("hq.choose_hq.plate.market_bkyd_click");
      },
      requestRealtimeData: function () {
        return (
          (e = this),
          null,
          (o = t().mark(function () {
            var e, o, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), n.HqAPI.getMarketHSIndex();
                    case 2:
                      (e = t.sent),
                        (o = (e || {}).data),
                        (r = (void 0 === o ? {} : o).cntdown_sec),
                        (this.countdown = r || 0),
                        (this.countdowntimer = setInterval(
                          this.countDownAni,
                          1e3
                        ));
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              this
            );
          })),
          new Promise(function (t, n) {
            var r = function (t) {
                try {
                  i(o.next(t));
                } catch (t) {
                  n(t);
                }
              },
              a = function (t) {
                try {
                  i(o.throw(t));
                } catch (t) {
                  n(t);
                }
              },
              i = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(r, a);
              };
            i((o = o.apply(e, null)).next());
          })
        );
        var e, o;
      },
      countDownAni: function () {
        this.countdown > 0
          ? (this.countdown -= 1)
          : clearInterval(this.countdowntimer);
      },
    },
  };
Array || e.resolveComponent("changeIndex")();
var r = e._export_sfc(o, [
  [
    "render",
    function (t, n, o, r, a, i) {
      return e.e(
        {
          a: e.o(function (t) {
            return i.showTip();
          }, 4589),
          b: a.countdown && a.countdown > 0,
        },
        a.countdown && a.countdown > 0
          ? {
              c: e.t(
                parseInt(a.countdown / 60, 10)
                  .toString()
                  .padStart(2, "0")
              ),
              d: e.t(
                parseInt(a.countdown % 60, 10)
                  .toString()
                  .padStart(2, "0")
              ),
            }
          : {},
        {
          e: e.o(function () {
            return i.goToDetail && i.goToDetail.apply(i, arguments);
          }, 4590),
          f: e.sr("changeWrapper", "c884a35b-0"),
          g: e.p({ "tab-on-show": o.tabOnShow, "m-can-show-bottom": !0 }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-c884a35b"],
]);
wx.createComponent(r);
