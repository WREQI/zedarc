require("../../app.js");
var o = require("../../common/vendor.js"),
  t = {
    components: {
      VProtocol: function () {
        return "../../bizs/protocol/rich-text-protocol/index.js";
      },
      LoadingProvider: function () {
        return "../../bizs/protocol/loading-provider/index.js";
      },
    },
    emits: ["confirm"],
    props: {
      normalButtons: {
        type: Boolean,
        require: !1,
        default: function () {
          return !0;
        },
      },
      protocolKey: { type: String, required: !0 },
      showRiskResult: { type: Boolean, default: !1 },
      matchInfo: { type: Object, default: function () {} },
      isShowMatchProtocol: { type: Boolean, default: !0 },
    },
    setup: function () {
      return { protocolConfig: o.inject("protocolConfig", {}) };
    },
    computed: {
      isButton: function () {
        var t, n, r, e, i;
        return (
          !(null == (t = this.matchInfo) ? void 0 : t.isHideProtocolButton) &&
          this.normalButtons &&
          ((null ==
          (r = o.unref(null == (n = this.protocolConfig) ? void 0 : n.config))
            ? void 0
            : r.buttonsNormal) ||
            (null ==
            (i = o.unref(null == (e = this.protocolConfig) ? void 0 : e.config))
              ? void 0
              : i.buttonsTrade))
        );
      },
    },
    methods: {
      handleConfirm: function () {
        this.$emit("confirm");
      },
    },
  };
Array ||
  (o.resolveComponent("VProtocol") + o.resolveComponent("LoadingProvider"))();
var n = o._export_sfc(t, [
  [
    "render",
    function (t, n, r, e, i, c) {
      return o.e(
        { a: r.isShowMatchProtocol },
        r.isShowMatchProtocol
          ? {
              b: o.p({
                "protocol-key": r.protocolKey,
                "match-info": r.matchInfo,
              }),
            }
          : {},
        { c: r.showRiskResult && r.matchInfo.risk },
        r.showRiskResult && r.matchInfo.risk
          ? o.e({ d: r.isShowMatchProtocol }, (r.isShowMatchProtocol, {}))
          : {},
        { e: c.isButton },
        c.isButton
          ? {
              f: o.o(function () {
                return c.handleConfirm && c.handleConfirm.apply(c, arguments);
              }),
            }
          : {},
        { g: o.n(c.isButton ? "flex flex-column" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-21123344"],
]);
wx.createComponent(n);
