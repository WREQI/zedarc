var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../../model/trade/utils.js"),
  r = require("../../../config/enum.js"),
  i = require("../../../common/vendor.js"),
  n = require("../../../components/ValueColor/utils.js"),
  o = [
    { text: "品种" },
    { text: "委托金额/年化", align: "right" },
    { text: "到期收益", align: "right" },
    { text: "状态", align: "right" },
  ],
  a = {
    options: { styleIsolation: "shared" },
    name: "DebtOrderList",
    components: {
      ListHeader: function () {
        return "../../../bizs/asset/ListHeader.js";
      },
      ListCell: function () {
        return "../../../bizs/asset/ListCell.js";
      },
    },
    props: {
      lists: {
        type: Array,
        default: function () {
          return [];
        },
      },
      revoking: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function () {
      return {
        simpleMode: i.inject("simpleMode"),
        adaptFontSize: n.adaptFontSize,
      };
    },
    data: function () {
      return { fields: o, TRADE_BASE_STATE: r.TRADE_BASE_STATE };
    },
    methods: {
      getState: function (i) {
        return t.getFinalTradeState(
          e(
            e({}, i),
            {},
            {
              stock_type: r.TARGET.DEBT,
              matched_amount: i.matched_amount || i.match_num,
            }
          )
        );
      },
      revoke: function (e) {
        this.$emit("revoke", e);
      },
      toDetail: function (e) {
        this.$router.push({
          name: "TradeDetail",
          query: {
            type: r.TARGET.DEBT,
            id: e.id,
            no: e.contract_no,
            time: e.trade_time,
          },
        }),
          this.$stat.click("trade.tradedebt.orderlist.click");
      },
    },
  };
Array ||
  (
    i.resolveComponent("ListHeader") +
    i.resolveComponent("ListCell") +
    i.resolveComponent("Empty")
  )(),
  Math;
var s = i._export_sfc(a, [
  [
    "render",
    function (e, t, r, n, o, a) {
      return i.e(
        { a: i.p({ fields: o.fields }), b: r.lists.length > 0 },
        r.lists.length > 0
          ? {
              c: i.f(r.lists, function (t, s, d) {
                return i.e(
                  {
                    a: i.t(e.$filters.defaults(t.name, "未知")),
                    b: i.t(e.$filters.defaults(t.code, "-")),
                    c: "7f5874b3-1-" + d,
                    d: i.t(e.$filters.money.formatNoUnit(t.trade_money, !1, 0)),
                    e: i.n(n.adaptFontSize(t.trade_money, 9999999, 24)),
                    f: i.t(
                      e.$filters.format.toCurrency(
                        e.$filters.defaults(t.order_rate),
                        3
                      )
                    ),
                    g: "7f5874b3-2-" + d,
                    h: i.t(e.$filters.money.formatNoUnit(t.trade_income)),
                    i: "7f5874b3-3-" + d,
                    j: a.getState(t) === o.TRADE_BASE_STATE.REVOKED,
                  },
                  a.getState(t) === o.TRADE_BASE_STATE.REVOKED ||
                    a.getState(t) === o.TRADE_BASE_STATE.NOTTRADEED ||
                    a.getState(t) === o.TRADE_BASE_STATE.FAILED
                    ? {}
                    : r.revoking[t._jsid] ||
                      "2" === t.can_cancel ||
                      [
                        o.TRADE_BASE_STATE.REVOKING,
                        o.TRADE_BASE_STATE.REVOKINGPARTLY,
                      ].indexOf(a.getState(t)) > -1
                    ? {
                        n: i.o(function (e) {
                          return a.revoke(t);
                        }, s),
                      }
                    : "1" === t.can_cancel
                    ? {
                        p: i.o(function (e) {
                          return a.revoke(t);
                        }, s),
                      }
                    : (t._isToday || "0" === t.is_due || t.is_due, {}),
                  {
                    k: a.getState(t) === o.TRADE_BASE_STATE.NOTTRADEED,
                    l: a.getState(t) === o.TRADE_BASE_STATE.FAILED,
                    m:
                      r.revoking[t._jsid] ||
                      "2" === t.can_cancel ||
                      [
                        o.TRADE_BASE_STATE.REVOKING,
                        o.TRADE_BASE_STATE.REVOKINGPARTLY,
                      ].indexOf(a.getState(t)) > -1,
                    o: "1" === t.can_cancel,
                    q: t._isToday || "0" === t.is_due,
                    r: "1" === t.is_due,
                    s: t._isToday || "0" === t.is_due,
                  },
                  t._isToday || "0" === t.is_due
                    ? {
                        t: i.t(
                          e.$filters.time.format(t.trade_time, "YYYY-MM-DD")
                        ),
                      }
                    : "1" === t.is_due
                    ? {
                        w: i.t(
                          e.$filters.time.format(t.endlock_time, "YYYY-MM-DD")
                        ),
                      }
                    : {},
                  {
                    v: "1" === t.is_due,
                    x: "7f5874b3-4-" + d,
                    y: s,
                    z: i.o(function (e) {
                      return a.toDetail(t);
                    }, s),
                  }
                );
              }),
            }
          : {
              d: i.p({
                text: "暂无记录",
                "bottom-border-radius": n.simpleMode,
              }),
            },
        { e: i.n(n.simpleMode ? "simple" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-7f5874b3"],
]);
wx.createComponent(s);
