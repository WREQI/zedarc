var e = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var t = require("../../../../config/enum.js"),
  r = require("../../../../model/trade/utils.js"),
  a = require("../../../../filters/defaults.js"),
  s = require("../../../../common/vendor.js"),
  i = require("../../../../filters/money.js"),
  o = require("../../../../stores/app/useMode.js"),
  n = require("../../../../stores/user/useUserinfo.js"),
  T = require("../../../../utils/getPlatform.js"),
  u = {
    props: {
      itemClass: {
        type: Array,
        default: function () {
          return [];
        },
      },
      item: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["click"],
    setup: function (u, _) {
      var c = _.emit;
      T.getPlatform();
      var m = s.storeToRefs(n.useUserinfoStore()).userinfo,
        p = s.computed(function () {
          return 1 == +m.value.merge_status_control;
        }),
        A = s.computed(function () {
          return u.itemClass.join(" ");
        }),
        d = o.useModeStore();
      return {
        itemClassStr: A,
        simpleMode: s.storeToRefs(d).simpleMode,
        stateText: function (e) {
          return e.trade_type === t.ACTION.NEWSTOCK_BUY
            ? e.purchase_status && t.PLAYNEW_STATE_TEXT[e.purchase_status]
              ? t.PLAYNEW_STATE_TEXT[e.purchase_status]
              : t.PLAYNEW_STATE_TEMP_TEXT[e.newstock_status] || "未知"
            : e.trade_type === t.ACTION.ETF_SUBSCRIBE
            ? t.ETFSUBSCRIBE_STATE_FOR_RECORD_TEXT[e.etfsub_status] || "未知"
            : e.stock_type === t.TARGET.DEBT && +e.balance_status < 0
            ? t.TRADE_STATE_TEXT[e.stock_type][r.getFinalTradeState(e)] ||
              "未知"
            : t.BALANCE_PRODUCTS.includes(e.stock_type)
            ? e.balance_status > -1
              ? t.BALANCE_STATE_TEXT[e.balance_status] || "未知"
              : ""
            : t.TRADE_STATE_TEXT[e.stock_type][r.getFinalTradeState(e)] ||
              "未知";
        },
        actionText: function (e) {
          return e.trade_type === t.ACTION.NEWSTOCK_BUY
            ? "打新"
            : e.trade_type === t.ACTION.ETF_SUBSCRIBE
            ? "认购"
            : t.ACTION_TEXT[e.stock_type || t.TARGET.STOCK][e.trade_type] ||
              "未知";
        },
        displayAmountInfo: function (r) {
          var s,
            o =
              ((s = {}),
              e(s, t.TARGET.BALANCE, "order_amt"),
              e(s, t.TARGET.DUOTIANQI, "order_amt"),
              s)[r.stock_type] || "trade_money";
          switch (r.stock_type) {
            case t.TARGET.DUOTIANQI:
            case t.TARGET.BALANCE:
            case t.TARGET.DEBT:
              return r.balance_status === t.BALANCE_STATE.INTERST_RECEIVED &&
                r.finish_income &&
                p.value
                ? a.defaults(
                    "".concat(i.formatNoUnit(r.finish_income, !1, 2), "元")
                  )
                : a.defaults("".concat(i.formatNoUnit(r[o], !1, 2), "元"));
            default:
              return (
                a.defaults(i.formatNoUnit(r.order_num, !1, 0), 0) +
                (t.ACTION_UNIT[r.trade_type] || t.TARGET_UNIT[r.stock_type])
              );
          }
        },
        displayPriceInfo: function (r) {
          var a,
            i =
              ((a = {}),
              e(a, t.TARGET.BALANCE, "rate"),
              e(a, t.TARGET.DUOTIANQI, "rate"),
              a)[r.stock_type] || "order_price";
          switch (r.stock_type) {
            case t.TARGET.DUOTIANQI:
            case t.TARGET.BALANCE:
            case t.TARGET.DEBT:
              return "".concat(s.__CJS__export_default__.toText(r[i], 3), "%");
            default:
              return r[i];
          }
        },
        emit: c,
        getName: function (e) {
          return e.trade_type === t.ACTION.ALLOT ? e.pgname : e.name;
        },
      };
    },
    data: function () {
      return { ACTION: t.ACTION };
    },
    methods: { isAfterTrade: r.isAfterTrade },
  };
Array || s.resolveComponent("AdaptFontSize")(), Math;
var _ = s._export_sfc(u, [
  [
    "render",
    function (e, t, r, a, i, o) {
      return s.e(
        { a: s.t(a.actionText(r.item)), b: o.isAfterTrade(r.item.trade_type) },
        o.isAfterTrade(r.item.trade_type) ? { c: r.item.trade_type } : {},
        {
          d: s.p({
            value: a.actionText(r.item).length,
            breakpoint: 4,
            "font-size": "24",
          }),
          e: s.n("action-" + r.item.stock_type + "-" + r.item.trade_type),
          f: s.n("^action-" + r.item.stock_type + "-" + r.item.trade_type),
          g: s.t(a.stateText(r.item)),
          h: s.p({
            value: a.stateText(r.item).length,
            breakpoint: 4,
            "font-size": "22",
          }),
          i: s.t(a.getName(r.item)),
          j: s.p({
            value: a.getName(r.item).length,
            breakpoint: 5,
            "font-size": "24",
          }),
          k: s.t(
            r.item.trade_type === i.ACTION.ALLOT ? r.item.pgcode : r.item.code
          ),
          l: s.t(a.displayAmountInfo(r.item)),
          m: s.p({
            value: a.displayAmountInfo(r.item).length,
            breakpoint: 10,
            "font-size": "24",
          }),
          n: s.t(a.displayPriceInfo(r.item)),
          o: s.t(e.$filters.time.format(r.item.trade_time, "MM-DD")),
          p: s.t(e.$filters.time.format(r.item.trade_time, "HH:mm:ss")),
          q: s.n(a.simpleMode ? "" : "history-simpleitem"),
          r: s.n(a.itemClassStr),
          s: s.o(function (e) {
            return a.emit("click");
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-a2faaea0"],
]);
wx.createComponent(_);
