require("../../../../app.js");
var e = require("../../../../model/trade/conditions/utils.js"),
  t = require("../../../../common/vendor.js"),
  o = {
    components: {
      ConditionDetailHeader: function () {
        return "../../../../components/DetailHeader/index.js";
      },
      TriggeredBody: function () {
        return "./TriggeredBody.js";
      },
      ConditionCard: function () {
        return "../../../../components/DetailCard/index.js";
      },
    },
    props: {
      data: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
      hidefund: { type: Boolean, default: !1 },
      showBorderTop: { type: Boolean, default: !0 },
      showBorderBottom: { type: Boolean, default: !1 },
      isAssetIndexScene: { type: Boolean, default: !1 },
    },
    emits: ["click"],
    setup: function (t, o) {
      var n = o.emit,
        d = e.useNavigateToQuote(t.data.market, t.data.scode, t.data.name).toHq;
      return {
        emit: n,
        handleHeaderClick: function () {
          d();
        },
      };
    },
  };
Array ||
  (
    t.resolveComponent("ConditionDetailHeader") +
    t.resolveComponent("TriggeredBody") +
    t.resolveComponent("ConditionCard")
  )();
var n = t._export_sfc(o, [
  [
    "render",
    function (e, o, n, d, r, a) {
      return {
        a: t.o(d.handleHeaderClick),
        b: t.p({
          name: n.data.name,
          "type-text": n.data.type_desc,
          market: n.data.market,
          code: n.data.scode,
          hidefund: n.hidefund,
        }),
        c: t.p({
          data: n.data,
          hidefund: n.hidefund,
          "is-asset-index-scene": n.isAssetIndexScene,
        }),
        d: t.o(function (e) {
          return d.emit("click");
        }),
        e: t.p({
          "show-border-bottom": n.showBorderBottom,
          "show-border-top": n.showBorderTop,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-2b2a399a"],
]);
wx.createComponent(n);
