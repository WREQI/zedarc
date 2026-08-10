require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  o = require("../../../../model/trade/useConditionEntry.js"),
  n = require("../../../../stores/user/useUserinfo.js"),
  r = require("../../../../stores/app/useMode.js"),
  i = require("../../../../service/stat/mp-weixin.js"),
  l = require("../../../../model/index/useTabBar.js"),
  a = {
    components: {
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
      PopupDisplay: function () {
        return "../../../../components/PopupSelect/Display.js";
      },
      TradeToolOption: function () {
        return "../TradeToolOption.js";
      },
    },
    props: {
      text: { type: String, default: "" },
      showIcon: { type: Boolean, default: !0 },
      code: { type: String, required: !0 },
      market: { type: String, required: !0 },
      name: { type: String, default: "" },
      holder: { type: String, default: "" },
      assetData: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (a, s) {
      var c,
        u = s.emit,
        T = o.useConditionEntry().isConditionEntry,
        p = t.storeToRefs(n.useUserinfoStore()).userinfo,
        d = t.storeToRefs(r.useModeStore()).simpleMode,
        A = t.ref(!1),
        E =
          (e((c = {}), l.TRADE_TAB_TYPE.STANDARD, {
            text: l.labelNameMap[l.TRADE_TAB_TYPE.STANDARD],
            key: l.TRADE_TAB_TYPE.STANDARD,
            value: l.TRADE_TAB_TYPE.STANDARD,
            stat: "trade.trade.type_select.standard",
          }),
          e(c, l.TRADE_TAB_TYPE.CONDITION, {
            text: l.labelNameMap[l.TRADE_TAB_TYPE.CONDITION],
            key: l.TRADE_TAB_TYPE.CONDITION,
            value: l.TRADE_TAB_TYPE.CONDITION,
            actionSheetTitle: "选择条件单策略",
            stat: "trade.trade.type_select.condition",
          }),
          e(c, l.TRADE_TAB_TYPE.BROKER_TOOL, {
            text: l.labelNameMap[l.TRADE_TAB_TYPE.BROKER_TOOL],
            key: l.TRADE_TAB_TYPE.BROKER_TOOL,
            value: l.TRADE_TAB_TYPE.BROKER_TOOL,
            actionSheetTitle: "券商精选",
            stat: "trade.trade.type_select.broker_tool",
          }),
          c),
        D = t.ref(l.TRADE_TAB_TYPE.STANDARD),
        _ = t.computed(function () {
          return E[D.value];
        }),
        m = t.computed(function () {
          return [l.TRADE_TAB_TYPE.STANDARD, l.TRADE_TAB_TYPE.CONDITION];
        }),
        f = t.ref(!1),
        y = t.computed(function () {
          return [
            l.TRADE_TAB_TYPE.CONDITION,
            l.TRADE_TAB_TYPE.BROKER_TOOL,
          ].includes(D.value);
        }),
        R = t.computed(function () {
          var e;
          return (null == (e = E[D.value]) ? void 0 : e.actionSheetTitle) || "";
        });
      return {
        userinfo: p,
        isConditionEntry: T,
        simpleMode: d,
        selectKey: D,
        selectMap: E,
        selectItem: _,
        intelligentEntrustExplainVisible: A,
        showDropdown: f,
        dropdownList: m,
        showTradeToolActionSheet: y,
        toolActionSheetTitle: R,
        toggleExplain: function () {
          (A.value = !A.value),
            i.stat.click(
              "trade.trade.type_explain." + (A.value ? "show" : "hide")
            );
        },
        clickDropdown: function () {
          (f.value = !f.value),
            i.stat.click(
              "trade.trade.type_select." + (f.value ? "show" : "hide")
            );
        },
        clickDropdownItem: function (e) {
          (D.value = e),
            (f.value = !f.value),
            i.stat.click("trade.trade.type_select.select", void 0, void 0, {
              type: e,
            });
        },
        closeToolActionSheet: function () {
          (D.value = l.TRADE_TAB_TYPE.STANDARD), u("jumpToCond");
        },
      };
    },
  };
Array ||
  (
    t.resolveComponent("action-sheet") + t.resolveComponent("TradeToolOption")
  )();
var s = t._export_sfc(a, [
  [
    "render",
    function (e, o, n, r, i, l) {
      return t.e(
        { a: r.isConditionEntry },
        r.isConditionEntry
          ? t.e(
              {
                b: t.o(function () {
                  return r.toggleExplain && r.toggleExplain.apply(r, arguments);
                }),
                c: t.t(r.selectItem.text),
                d: t.o(function () {
                  return r.clickDropdown && r.clickDropdown.apply(r, arguments);
                }),
                e: r.showDropdown,
              },
              r.showDropdown
                ? {
                    f: t.o(function () {
                      return (
                        r.clickDropdown && r.clickDropdown.apply(r, arguments)
                      );
                    }),
                    g: t.f(r.dropdownList, function (e, o, n) {
                      return {
                        a: t.t(r.selectMap[e].text),
                        b: e,
                        c: t.n(o > 0 ? "border--top" : ""),
                        d: t.n(e === r.selectKey ? "active" : ""),
                        e: t.o(function (t) {
                          return r.clickDropdownItem(e);
                        }, e),
                      };
                    }),
                  }
                : {},
              { h: t.n(r.simpleMode ? "ordertype-select--simple" : "") }
            )
          : {},
        {},
        {},
        {
          i: t.o(r.toggleExplain),
          j: t.o(r.toggleExplain),
          k: t.p({
            value: r.intelligentEntrustExplainVisible,
            pickerStyle: !0,
            "confirm-button": !1,
            "show-title-border-bottom": !1,
            title: "智能下单说明",
          }),
          l: t.o(r.closeToolActionSheet),
          m: t.p({
            type: r.selectKey,
            market: n.market,
            code: n.code,
            name: n.name,
            holder: n.holder,
            "asset-data": n.assetData,
          }),
          n: t.o(r.closeToolActionSheet),
          o: t.o(r.closeToolActionSheet),
          p: t.p({
            value: r.showTradeToolActionSheet,
            pickerStyle: !0,
            "confirm-button": !1,
            "show-title-border-bottom": !1,
            title: r.toolActionSheetTitle,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-bee416b9"],
]);
wx.createComponent(s);
