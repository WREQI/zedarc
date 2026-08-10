require("../../app.js"),
  Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" }),
  require("../../service/broker.js");
var e = require("../../config/enum.js"),
  o = require("../../common/vendor.js"),
  n = require("../../config/broker/11100/index.js"),
  t = {
    components: {
      Matches: function () {
        return "./Matchs/11100/index.js";
      },
      UnMatches: function () {
        return "./UnMatchs/11100/index.js";
      },
    },
    emits: ["confirm", "cancel"],
    props: {
      type: [Number, String],
      scenes: { type: String, default: "" },
      matchInfo: { type: Object, required: !0 },
      position: { type: String, default: "absolute" },
      isShowMatchProtocol: { type: Boolean, default: !0 },
    },
    setup: function (e) {
      return {
        confirmationStyle: o.computed(function () {
          return "confirmation-".concat(e.position);
        }),
      };
    },
    data: function () {
      return {
        dealercode: n.brokerConfig.base.code,
        TRADE_MATCH_TYPE: e.TRADE_MATCH_TYPE,
      };
    },
    methods: {
      handleCancel: function () {
        this.$emit("cancel");
      },
      handleConfirm: function () {
        this.$emit("confirm");
      },
    },
  };
Array || (o.resolveComponent("matches") + o.resolveComponent("un-matches"))();
var c = o._export_sfc(t, [
  [
    "render",
    function (e, n, t, c, r, a) {
      return o.e(
        { a: t.type === r.TRADE_MATCH_TYPE.NEED_SIGN_MATCH_PRO },
        t.type === r.TRADE_MATCH_TYPE.NEED_SIGN_MATCH_PRO
          ? {
              b: o.n(c.confirmationStyle),
              c: o.o(a.handleConfirm),
              d: o.o(a.handleCancel),
              e: o.p({
                dealercode: r.dealercode,
                scenes: t.scenes,
                "match-info": t.matchInfo,
                "is-show-match-protocol": t.isShowMatchProtocol,
              }),
            }
          : t.type === r.TRADE_MATCH_TYPE.NEED_SIGN_NOT_MATCH_PRO
          ? {
              g: o.n(c.confirmationStyle),
              h: o.o(a.handleConfirm),
              i: o.o(a.handleCancel),
              j: o.p({
                dealercode: r.dealercode,
                scenes: t.scenes,
                "match-info": t.matchInfo,
                "is-show-match-protocol": t.isShowMatchProtocol,
              }),
            }
          : t.type === r.TRADE_MATCH_TYPE.NEED_LOAD_VIDEO
          ? {
              l: o.n(c.confirmationStyle),
              m: o.o(a.handleConfirm),
              n: o.o(a.handleCancel),
              o: o.p({
                dealercode: r.dealercode,
                scenes: t.scenes,
                "match-info": t.matchInfo,
              }),
              p: o.n(c.confirmationStyle),
              q: o.o(a.handleConfirm),
              r: o.o(a.handleCancel),
              s: o.p({
                dealercode: r.dealercode,
                scenes: t.scenes,
                "match-info": t.matchInfo,
              }),
            }
          : {},
        {
          f: t.type === r.TRADE_MATCH_TYPE.NEED_SIGN_NOT_MATCH_PRO,
          k: t.type === r.TRADE_MATCH_TYPE.NEED_LOAD_VIDEO,
        }
      );
    },
  ],
]);
exports.default = c;
