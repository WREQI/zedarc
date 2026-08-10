var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../../config/enum.js"),
  o = require("../../../stores/actconfig/useGovBondsStore.js"),
  n = require("../../../utils/getPlatform.js"),
  r = require("../../../common/vendor.js"),
  s = [
    { text: "品种" },
    { text: "年化收益率", align: "center" },
    { text: "10万总收益(元)", align: "right" },
  ],
  a = {
    name: "DebtList",
    options: { styleIsolation: "shared" },
    components: {
      Empty: function () {
        return "../../../components/Empty/Empty.js";
      },
    },
    props: {
      lists: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function () {
      return {
        govBondsInfo: o.useGovBondsStore().govBondsInfo,
        isIOS: "ios" === n.getPlatform().platform,
        simpleMode: r.inject("simpleMode"),
        dealCoinTime: function (e) {
          var t, o;
          return "资金"
            .concat(
              (null == (t = e.endlock_date) ? void 0 : t.slice(5)) || "——",
              "可用，"
            )
            .concat(
              (null == (o = e.cashout_date) ? void 0 : o.slice(5)) || "——",
              "可提"
            );
        },
      };
    },
    data: function () {
      return { fields: s };
    },
    methods: {
      redirectTrade: function (o) {
        var n;
        this.$router.push({
          name: "TradeDebt",
          query: { market: o.market, code: o.code },
        });
        var r = { stockid: "".concat(t.MARKET[this.market]).concat(o.code) },
          s = this.$route.query.stat_data;
        (null == (n = this.govBondsInfo) ? void 0 : n.cssType) &&
          (r = e(e({}, r), {}, { type: this.govBondsInfo.cssType })),
          s && (r = e(e({}, r), {}, { stat_data: s })),
          this.$stat.click("trade.tradedebt.totrade.click", void 0, void 0, r);
      },
    },
  };
Array || (r.resolveComponent("ValueColor") + r.resolveComponent("Empty"))(),
  Math ||
    (
      function () {
        return "../../../components/ValueColor/ValueColor.js";
      } +
      function () {
        return "../../../components/Empty/Empty.js";
      }
    )();
var i = r._export_sfc(a, [
  [
    "render",
    function (e, t, o, n, s, a) {
      return r.e(
        { a: o.lists.length > 0 },
        o.lists.length > 0
          ? {
              b: r.f(o.lists, function (e, t, o) {
                return {
                  a: r.t(e.lock_days),
                  b: r.t(e.earn_days),
                  c: r.n(e.earn_days > 1 ? "mark-text" : ""),
                  d: r.t(n.dealCoinTime(e)),
                  e: r.f(e.repo_array, function (e, t, s) {
                    return r.e(
                      {
                        a: r.t(e.name.slice(0, 2) || "未命名"),
                        b:
                          n.govBondsInfo &&
                          e.code === n.govBondsInfo.code &&
                          n.govBondsInfo.maxDays,
                      },
                      n.govBondsInfo &&
                        e.code === n.govBondsInfo.code &&
                        n.govBondsInfo.maxDays
                        ? { c: r.t(n.govBondsInfo.maxDays) }
                        : {},
                      {
                        d: r.t(e.code || "-"),
                        e: r.t(e.income_rate ? e.income_rate + "%" : "-"),
                        f: r.t(e.expected_income),
                        g: "8d13a7c7-0-" + o + "-" + s,
                        h: r.p({ animate: !0, value: e.income_rate }),
                        i: t,
                        j: r.o(function (t) {
                          return a.redirectTrade(e);
                        }, t),
                      }
                    );
                  }),
                  f: t,
                };
              }),
              c: r.n(n.isIOS ? "ios" : ""),
            }
          : {
              d: r.p({
                text: "暂无内容",
                "bottom-border-radius": n.simpleMode,
              }),
            },
        { e: r.n(n.simpleMode ? "simple" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-8d13a7c7"],
]);
wx.createComponent(i);
