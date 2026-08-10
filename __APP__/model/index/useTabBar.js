var e,
  n,
  r,
  o = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/defineProperty"),
  a = require("../../common/vendor.js"),
  u = require("../trade/useConditionEntry.js"),
  i = require("../../service/stat/mp-weixin.js"),
  l = require("../../config/enum.js"),
  s = require("../../stores/user/useUserinfo.js"),
  O = require("../../stores/app/useMode.js"),
  d = {
    TRADE: "trade",
    HOLDING: "holding",
    HISTORY: "history",
    CONDITION: "condition",
  },
  T =
    (t((e = {}), l.COND_TAB_VALUE.priceCond, "PriceCondition"),
    t(e, l.COND_TAB_VALUE.investCond, "InvestCondition"),
    t(e, l.COND_TAB_VALUE.gridCond, "GridCondition"),
    t(e, l.COND_TAB_VALUE.tpslCond, "TPSLCondition"),
    t(e, l.COND_TAB_VALUE.limitUpCond, "LimitUpCondition"),
    t(e, l.COND_TAB_VALUE.openingSellCond, "OpeningSellCondition"),
    e),
  v = {
    STANDARD: "standard",
    MONEY: "money",
    AMOUNT: "amount",
    CONDITION: "condition",
    BROKER_TOOL: "broker_tool",
    GGT_ELO: "ggt_elo",
    GGT_ALO: "ggt_alo",
    GGT_OLO: "ggt_olo",
  },
  c =
    (t((n = {}), v.STANDARD, "标准下单"),
    t(n, v.MONEY, "金额下单"),
    t(n, v.AMOUNT, "股数下单"),
    t(n, v.CONDITION, "条件下单"),
    t(n, v.BROKER_TOOL, "券商精选"),
    t(n, v.GGT_ELO, "增强限价盘"),
    t(n, v.GGT_ALO, "竞价限价盘"),
    t(n, v.GGT_OLO, "碎股单"),
    n),
  N =
    (t((r = {}), v.STANDARD, "标准"),
    t(r, v.MONEY, "金额"),
    t(r, v.AMOUNT, "股数"),
    t(r, v.CONDITION, "条件"),
    t(r, v.BROKER_TOOL, "券商"),
    t(r, v.GGT_ELO, "增强"),
    t(r, v.GGT_ALO, "竞价"),
    t(r, v.GGT_OLO, "碎股"),
    r);
(exports.INDEPENDENT_PAGE_CONFIG_TABBAR = T),
  (exports.TAB = d),
  (exports.TRADE_TAB_TYPE = v),
  (exports.labelNameMap = c),
  (exports.subLabelMap = N),
  (exports.useTabbar = function (e, n, r) {
    var t,
      l,
      T = e.numHolding,
      v = e.numHistory,
      c = e.numCondition,
      N = e.assetV2Control,
      A = a.getCurrentInstance().proxy,
      _ = u.useConditionEntry().isConditionEntry,
      p = s.useUserinfoStore();
    a.storeToRefs(p);
    var C = O.useModeStore();
    a.storeToRefs(C);
    var D = a.computed(function () {
        return r;
      }),
      E = a.ref(
        n ||
          (null ==
          (l = null == (t = null == A ? void 0 : A.$route) ? void 0 : t.query)
            ? void 0
            : l.tab) ||
          d.HOLDING
      ),
      I = a.ref("智能下单"),
      L = a.ref({}),
      b = a.ref(0),
      G = a.computed(function () {
        var e = [];
        if (!D.value) {
          if (
            ((e = [
              {
                label: (null == N ? void 0 : N.value)
                  ? "持仓分布"
                  : "持仓".concat(T.value),
                value: d.HOLDING,
              },
              { label: "今日委托".concat(v.value), value: d.HISTORY },
            ]),
            _.value)
          ) {
            var n = c.value && Number(c.value) ? "(".concat(c.value, ")") : "";
            e.push({ label: "条件单".concat(n), value: d.CONDITION });
          }
          return e;
        }
        return (e = [
          o(
            { label: I.value, value: d.TRADE, prefixIcon: "icon-trade-tool" },
            L.value
          ),
          { label: "今日委托".concat(v.value), value: d.HISTORY },
          { label: "持仓", value: d.HOLDING },
        ]);
      }),
      f = a.computed(function () {
        var e = G.value.findIndex(function (e) {
          return e.value === E.value;
        });
        return -1 === e ? 0 : e;
      });
    return (
      a.watch(
        function () {
          return f.value;
        },
        function (e) {
          var n = G.value[e];
          if (n)
            try {
              var r = A.$route,
                o = r.name,
                t = r.route;
              ("AssetIndex" !== o &&
                "pages/index/trade" !== (void 0 === t ? "" : t)) ||
                i.stat.click("trade.asset.tab.".concat(n.value));
            } catch (e) {}
        }
      ),
      {
        currentTab: E,
        tabs: G,
        currentTabIndex: f,
        currentDropdownIndex: b,
        tradeLabelName: I,
        dropDownOption: L,
        handleChangeTab: function (e) {
          G.value[e] && (E.value = G.value[e].value);
        },
      }
    );
  });
