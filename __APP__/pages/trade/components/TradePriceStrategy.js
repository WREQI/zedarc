var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  r = require("../../../config/enum.js");
require("../../../service/broker.js");
var o = require("../../../stores/user/useUserinfo.js"),
  s = require("../../../config/broker/11100/index.js"),
  n = {
    components: {
      Overlay: function () {
        return "../../../common/components/Overlay/index.js";
      },
    },
    emits: ["input", "changeStrategy"],
    props: {
      value: Boolean,
      strategy: { type: Number, default: r.STRATEGY.MANUAL },
      isAfterTradeStock: Boolean,
      isGGT: Boolean,
      pos: Object,
    },
    setup: function () {
      var e = t.inject("embeddedMode", !1),
        r = o.useUserinfoStore();
      return { embeddedMode: e, userinfo: t.storeToRefs(r).userinfo };
    },
    data: function () {
      return { STRATEGY_TEXT: r.STRATEGY_TEXT };
    },
    computed: {
      canUseStrategy: function () {
        var t,
          o,
          n = e({}, r.STRATEGY);
        return (
          this.isGGT && (delete n.BUY, delete n.SELL),
          !this.isAfterTradeStock ||
          (!1 ===
            (null == (t = s.brokerConfig.hall.kcOpen)
              ? void 0
              : t.afterClosed) &&
            "1" !==
              String(
                null == (o = this.userinfo) ? void 0 : o.hs_trade_after_status
              ))
            ? (delete n.AFTER_CLOSED, n)
            : n
        );
      },
    },
    methods: {
      onClickOverlay: function () {
        this.$emit("input", !1);
      },
      onClickStrategy: function (e) {
        switch ((this.$emit("input", !1), this.$emit("changeStrategy", e), e)) {
          case r.STRATEGY.MANUAL:
            this.$stat.click("trade.trade.trustmode.setprice");
            break;
          case r.STRATEGY.LATEST:
            this.$stat.click("trade.trade.trustmode.marketprice");
            break;
          case r.STRATEGY.BUY:
            this.$stat.click("trade.trade.trustmode.buyone");
            break;
          case r.STRATEGY.SELL:
            this.$stat.click("trade.trade.trustmode.sellone");
            break;
          case r.STRATEGY.AFTER_CLOSED:
            this.$stat.click("trade.trade.trustmode.afterhourstrading");
            break;
          default:
            return "";
        }
      },
    },
  };
Array || t.resolveComponent("Overlay")();
var a = t._export_sfc(n, [
  [
    "render",
    function (e, r, o, s, n, a) {
      return {
        a: t.f(a.canUseStrategy, function (e, r, s) {
          return {
            a: t.t(n.STRATEGY_TEXT[e]),
            b: r,
            c: t.n(o.strategy === Number(e) ? "primary-color" : ""),
            d: t.o(function (t) {
              return a.onClickStrategy(e);
            }, r),
          };
        }),
        b: e.useTransitionMask ? 1 : "",
        c: s.embeddedMode ? 1 : "",
        d: t.n(o.pos.left < 200 ? "left ^left" : ""),
        e: o.pos.top + "px",
        f: o.pos.left + "px",
        g: t.o(function (e) {
          return a.onClickOverlay(!1);
        }),
        h: t.p({ show: o.value }),
      };
    },
  ],
]);
wx.createComponent(a);
