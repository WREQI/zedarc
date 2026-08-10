require("../../../../app.js");
var e = require("../../../../common/vendor.js");
require("../../../../service/broker.js");
var o = require("../../../../model/index/useTabBar.js"),
  n = require("../../../../stores/app/useMode.js"),
  t = require("../../../../stores/user/useUserinfo.js"),
  r = require("../../../../utils/getPlatform.js"),
  i = require("../../../../config/broker/11100/index.js"),
  s = {
    components: {
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
      TradeToolOption: function () {
        return "../TradeToolOption.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      needNavbarHeight: { type: Boolean, default: !1 },
      scene: { type: String, default: "" },
      conditionItem: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (s, u) {
      var c = u.emit,
        a = e.getCurrentInstance().proxy;
      n.useModeStore();
      var l = t.useUserinfoStore();
      return {
        isMpPlugin: r.getPlatform().isMpPlugin,
        fundaccount: e.computed(function () {
          var e,
            o = null == (e = l.userinfo) ? void 0 : e.fundaccount;
          return o
            ? ""
                .concat(o.substring(0, 1), "**")
                .concat(o.substring(o.length - 3))
            : "";
        }),
        handleClose: function () {
          a.$emit("close");
        },
        handleItemClick: function () {
          c("conditionItemClick");
        },
        broker: i.brokerConfig,
        TRADE_TAB_TYPE: o.TRADE_TAB_TYPE,
      };
    },
  };
Array ||
  (
    e.resolveComponent("TradeToolOption") +
    e.resolveComponent("BrokerLogo") +
    e.resolveComponent("action-sheet")
  )(),
  Math;
var u = e._export_sfc(s, [
  [
    "render",
    function (o, n, t, r, i, s) {
      return {
        a: e.o(r.handleItemClick),
        b: e.p({
          scene: t.scene,
          type: r.TRADE_TAB_TYPE.CONDITION,
          conditionItem: t.conditionItem,
        }),
        c: e.p({ colorful: !0 }),
        d: e.t(r.broker.base.name),
        e: e.t(r.fundaccount),
        f: t.needNavbarHeight ? 1 : "",
        g: e.o(r.handleClose),
        h: e.p({
          value: t.value,
          title: "选择条件单策略",
          "show-title-border-bottom": !1,
          "confirm-button": !1,
          "need-mask": !("simpleEmbeded" === t.scene && r.isMpPlugin),
          "picker-style": !0,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-2ecda134"],
]);
wx.createComponent(u);
