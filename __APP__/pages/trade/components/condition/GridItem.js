require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../model/trade/conditions/formatter.js"),
  n = require("../../../../model/trade/conditions/profitFormatter.js"),
  o = require("../../../../model/trade/conditions/gridFormatter.js"),
  a = require("../../../../config/enum/condition.js"),
  r = require("../../../../model/trade/conditions/utils.js"),
  i = {
    components: {
      ConditionDetailHeader: function () {
        return "../../../../components/DetailHeader/index.js";
      },
      ConditionDetailRow: function () {
        return "../../../../components/DetailRow/index.js";
      },
      ConditionReason: function () {
        return "./ConditionReason.js";
      },
      ConditionCard: function () {
        return "../../../../components/DetailCard/index.js";
      },
      ConditionProfit: function () {
        return "./ConditionProfit.js";
      },
    },
    emits: ["click"],
    props: {
      basePriceTag: {
        type: Object,
        default: function () {
          return {};
        },
      },
      hidefund: { type: Boolean, default: !1 },
      showBorderTop: { type: Boolean, default: !0 },
      showBorderBottom: { type: Boolean, default: !1 },
      showArrow: { type: Boolean, default: !0 },
      showStatus: { type: Boolean, default: !1 },
      showSleepReason: { type: Boolean, default: !0 },
      data: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
      scene: { type: String, default: "" },
    },
    setup: function (i, d) {
      var s = d.emit,
        u = e.getCurrentInstance().proxy,
        l = r.useNavigateToQuote(i.data.market, i.data.scode, i.data.name).toHq,
        c = e.computed(function () {
          return o.statusFormatter(i.data.status);
        }),
        p = e.computed(function () {
          return o.orderPriceFormatter(
            i.data.buy_price_type,
            i.data.sell_price_type
          );
        }),
        m = e.computed(function () {
          return o.quantityFormatter(i.data.quantity, i.data.stock_cls);
        }),
        f = e.computed(function () {
          return n.orderProfitFormatter({
            run_day: i.data.run_day,
            trade_num: i.data.trade_num,
            total_income: i.data.total_income,
          });
        });
      return {
        emit: s,
        statusText: c,
        orderPriceText: p,
        quantityText: m,
        sleepReason: e.computed(function () {
          return t.sleepReasonFormatter({
            sellSleepStatus: i.data.sell_sleep_status,
            buySleepStatus: i.data.buy_sleep_status,
          });
        }),
        orderProfile: f,
        timeConfig: e.computed(function () {
          return t.timeRorRenderFormatter({
            status: i.data.status,
            invalid_time: i.data.invalid_time,
            end_time: i.data.end_time,
          });
        }),
        toSleepIntro: function () {
          u.$router.push({
            name: "GridConditionGuide",
            query: { gridGuideType: a.GridGuideType.Sleep },
          });
        },
        isRunningScene: e.computed(function () {
          return [
            a.COND_CURRENT_SCENE.assetIndex,
            a.COND_CURRENT_SCENE.condIndex,
          ].includes(i.scene);
        }),
        COND_CURRENT_SCENE: a.COND_CURRENT_SCENE,
        handleHeaderClick: function () {
          l();
        },
      };
    },
  };
Array ||
  (
    e.resolveComponent("ConditionDetailHeader") +
    e.resolveComponent("ConditionDetailRow") +
    e.resolveComponent("ConditionReason") +
    e.resolveComponent("ConditionProfit") +
    e.resolveComponent("ConditionCard")
  )();
var d = e._export_sfc(i, [
  [
    "render",
    function (t, n, o, a, r, i) {
      return e.e(
        {
          a: e.o(a.handleHeaderClick),
          b: e.p({
            name: o.data.name,
            "type-text": o.data.type_desc,
            market: o.data.market,
            code: o.data.scode,
            "show-arrow": o.showArrow,
            hidefund: o.hidefund,
            "base-price-tag": o.basePriceTag,
          }),
          c: o.showStatus,
        },
        o.showStatus
          ? {
              d: e.p({
                label: "当前状态",
                value: a.statusText,
                hidefund: o.hidefund,
              }),
            }
          : {},
        { e: o.data.base_price },
        o.data.base_price
          ? e.e(
              {
                f: e.t(o.data.base_price),
                g: o.basePriceTag && o.basePriceTag.tagsText,
              },
              o.basePriceTag && o.basePriceTag.tagsText
                ? {
                    h: e.t(o.basePriceTag.tagsText),
                    i: e.t(o.basePriceTag.tagsValueFormatted || ""),
                    j: e.n(
                      o.basePriceTag.tagsValue >= 0
                        ? "cond-baseprice-up"
                        : "cond-baseprice-down"
                    ),
                  }
                : {}
            )
          : {},
        {
          k: e.p({ label: "基准价", hidefund: o.hidefund }),
          l: e.p({
            label: "触发条件",
            value: o.data.order_cond,
            hidefund: o.hidefund,
          }),
          m: e.p({
            label: "委托价格",
            value: a.orderPriceText,
            hidefund: o.hidefund,
          }),
          n: e.p({
            label: "委托数量",
            value: a.quantityText,
            hidefund: o.hidefund,
            last: a.isRunningScene && 0 === a.sleepReason.length,
          }),
          o: !a.isRunningScene,
        },
        a.isRunningScene
          ? {}
          : {
              p: e.p({
                label: a.timeConfig.label,
                value: a.timeConfig.time,
                hidefund: o.hidefund,
                last: !a.sleepReason.length,
              }),
            },
        { q: o.showSleepReason && a.sleepReason && a.sleepReason.length },
        o.showSleepReason && a.sleepReason && a.sleepReason.length
          ? { r: e.o(a.toSleepIntro), s: e.p({ reason: a.sleepReason }) }
          : {},
        { t: a.orderProfile },
        a.orderProfile
          ? {
              v: o.scene === a.COND_CURRENT_SCENE.assetIndex ? 1 : "",
              w: e.p({
                value: a.orderProfile,
                hidefund: o.hidefund,
                type: "grid",
              }),
            }
          : {},
        {
          x: e.o(function (e) {
            return a.emit("click");
          }),
          y: e.p({
            "show-border-bottom": o.showBorderBottom,
            "show-border-top": o.showBorderTop,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-691dea72"],
]);
wx.createComponent(d);
