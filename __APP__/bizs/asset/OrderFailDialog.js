require("../../app.js");
var e = require("../../common/vendor.js");
require("../../service/broker.js"), require("../../service/sdk/lib/api.js");
var r = require("../../service/sdk/platform/mp-weixin.js"),
  t = require("../../service/stat/mp-weixin.js"),
  n = require("../../config/enum.js"),
  i = require("../../config/broker/11100/index.js");
Math || e.unref(o)();
var o = function () {
    return "../../common/components/Dialog/Dialog.js";
  },
  u = e.defineComponent({
    __name: "OrderFailDialog",
    props: { type: {}, value: { type: Boolean }, order: {} },
    emits: ["close"],
    setup: function (o, u) {
      var a = u.emit,
        c = o,
        s = a,
        l = e.computed({
          get: function () {
            return c.value;
          },
          set: function () {
            s("close");
          },
        }),
        p = e.computed(function () {
          return { 1: "", 2: "委托无效常见原因", 3: "" }[c.type];
        }),
        v = e.computed(function () {
          var e;
          return (null == (e = c.order) ? void 0 : e.market) === n.MARKET.HK;
        }),
        m = function () {
          l.value = !1;
        },
        f = function () {
          l.value = !1;
        },
        d = function () {
          t.stat.click("trade.asset.fail-contact.click"),
            r.sdk.makePhoneCall(
              "".concat(i.brokerConfig.base.tel).replace(/-/g, "")
            );
        };
      return function (r, t) {
        return e.e(
          { a: "1" == r.type },
          (r.type, {}),
          { b: "2" == r.type },
          "2" == r.type ? e.e({ c: !v.value }, (v.value, {})) : {},
          { d: "3" == r.type },
          (r.type, {}),
          { e: "2" == r.type },
          "2" == r.type ? { f: e.o(m), g: e.o(d) } : { h: e.o(f) },
          { i: e.p({ visible: l.value, title: p.value }) }
        );
      };
    },
  });
wx.createComponent(u);
