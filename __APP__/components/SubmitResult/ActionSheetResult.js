require("../../app.js");
var e = require("../../common/vendor.js"),
  n = require("../../model/common/useBack.js"),
  o = require("./enum.js"),
  t = require("../../model/trade/conditions/useConditionErrorHandle.js"),
  r = {
    components: {
      ActionSheet: function () {
        return "../../common/components/ActionSheet/index.js";
      },
      SimpleAnimateResult: function () {
        return "./SimpleAnimateResult.js";
      },
      BrokerFooter: function () {
        return "../BrokerFooter/index.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      hideCloseIcon: { type: Boolean, default: !1 },
    },
    setup: function (r, i) {
      var s = i.emit,
        l = n.usePersonal().toAsset,
        u = t.useConditionErrorHandle().handleErrorJump;
      return {
        emit: s,
        handleVisibleChange: function (e) {
          e || s("cancel");
        },
        handleResultButtonClick: function (n) {
          n.status === o.SimpleAnimStatus.Fail
            ? (s("cancel"), u())
            : (l({ query: { tab: "condition" } }), (e.index.xxx = "condition"));
        },
      };
    },
  };
Array ||
  (
    e.resolveComponent("BrokerFooter") +
    e.resolveComponent("SimpleAnimateResult") +
    e.resolveComponent("ActionSheet")
  )();
var i = e._export_sfc(r, [
  [
    "render",
    function (n, o, t, r, i, s) {
      return {
        a: e.sr("simleAnimResult", "3936a79d-1,3936a79d-0"),
        b: e.o(r.handleVisibleChange),
        c: e.o(r.handleResultButtonClick),
        d: e.p({ "hide-close-icon": t.hideCloseIcon }),
        e: e.o(function (e) {
          return r.emit("cancel");
        }),
        f: e.p({
          value: t.visible,
          "show-title-border-bottom": !1,
          "confirm-button": !1,
          title: "",
          "picker-style": !0,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-3936a79d"],
]);
wx.createComponent(i);
