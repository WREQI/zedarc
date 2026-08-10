require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../../../model/trade/conditions/formatter.js"),
  r = require("../../../../config/enum.js");
require("../../../../service/broker.js");
var n = require("../../../../utils/system.js"),
  o = require("../../../../config/broker/11100/index.js"),
  d = {
    components: {
      ConditionDetailRow: function () {
        return "../../../../components/DetailRow/index.js";
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
      showArrow: { type: Boolean, default: !1 },
      hidefund: { type: Boolean, default: !1 },
      isAssetIndexScene: { type: Boolean, default: !1 },
    },
    emits: ["click"],
    setup: function (d, a) {
      var i = a.emit,
        u = e.getCurrentInstance().proxy,
        s = e.computed(function () {
          return t.triggeredTimeFormatter(d.data.order_time);
        }),
        c = e.computed(function () {
          return t.orderStateFormatter(d.data.code);
        }),
        l = e.computed(function () {
          return "cond-order-".concat(c.value);
        }),
        f = e.computed(function () {
          return t.unitFormatter(d.data.stock_cls);
        }),
        p = /.*联系券商客服$/,
        m = e.computed(function () {
          return (
            d.data.status_desc &&
            p.test(d.data.status_desc) &&
            !d.isAssetIndexScene
          );
        }),
        _ = n.getWindowInfoCompact().windowWidth,
        T = e.computed(function () {
          return o.brokerConfig.base.tel.length > 8 && _ < 540
            ? "tel-block"
            : "";
        });
      return {
        emit: i,
        triggeredTime: s,
        condOrderStatus: c,
        condOrderStatusCls: l,
        unitText: f,
        ORDER_ACTIONS_TEXTS: r.ORDER_ACTIONS_TEXTS,
        isTelShow: m,
        telCls: T,
        tel: o.brokerConfig.base.tel,
        call: function () {
          if (m.value) {
            var e = "".concat(o.brokerConfig.base.tel).replace(/-/g, "");
            u.$sdk.makePhoneCall(e);
          }
        },
      };
    },
  };
Array || e.resolveComponent("ConditionDetailRow")();
var a = e._export_sfc(d, [
  [
    "render",
    function (t, r, n, o, d, a) {
      return e.e(
        { a: e.t(o.ORDER_ACTIONS_TEXTS[n.data.trade_type]), b: n.showArrow },
        (n.showArrow, {}),
        {
          c: e.p({
            label: "触发条件",
            value: n.data.order_cond,
            hidefund: n.hidefund,
          }),
          d: !n.hidefund,
        },
        n.hidefund
          ? {}
          : {
              e: e.t(o.ORDER_ACTIONS_TEXTS[n.data.trade_type]),
              f: e.t(n.data.order_price || "--"),
              g: e.t(n.data.order_quantity || "--"),
              h: e.t(o.unitText),
            },
        {
          i: e.p({
            label: "触发时间",
            value: o.triggeredTime,
            hidefund: n.hidefund,
          }),
          j: e.t(n.data.status_desc),
          k: o.isTelShow,
        },
        o.isTelShow ? { l: e.t(o.tel), m: e.n(o.telCls) } : {},
        {
          n: n.isAssetIndexScene ? 1 : "",
          o: e.o(function () {
            return o.call && o.call.apply(o, arguments);
          }),
          p: n.isAssetIndexScene ? 1 : "",
          q: e.p({ last: !0, label: "委托状态", hidefund: n.hidefund }),
          r: e.n(o.condOrderStatusCls),
          s: e.o(function (e) {
            return o.emit("click");
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-1e5b3403"],
]);
wx.createComponent(a);
