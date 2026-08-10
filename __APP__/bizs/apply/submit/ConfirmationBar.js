require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../model/apply/useApply.js");
require("../../../service/broker.js");
var o = require("../../../service/stat/mp-weixin.js");
require("../../../stores/protocol/broker/11100.js"),
  require("../../../cgi/base.js"),
  require("../../../service/aegis/platform/not-wujie.js"),
  require("../../../service/sdk/lib/api.js"),
  require("../../../service/sdk/platform/mp-weixin.js"),
  require("../../../utils/index.js"),
  require("../../../service/request/pureRequest.js");
var t = require("../../../config/broker/11100/index.js");
Math || n();
var n = function () {
    return "../SignProtocols/index.js";
  },
  i = e.defineComponent({
    __name: "ConfirmationBar",
    props: {
      isProtocolCheck: { type: Boolean, default: !0 },
      config: {
        default: function () {
          return {};
        },
      },
    },
    emits: ["show-confirmation", "check"],
    setup: function (n, i) {
      var u = i.emit,
        a = r.useApply(),
        c = a.applyInfo,
        s = a.curStepConf,
        p = u,
        l = e.inject("AGREEMENT_TYPE", {}),
        f = e.computed(function () {
          return +c.value.invest_agreement_type !== l.UNMATCH;
        }),
        m = e.computed(function () {
          return t
            .brokerConfig.apply.protocol[f.value ? "suitable" : "insuitable"];
        }),
        v = e.computed(function () {
          return t.brokerConfig.apply.protocol.suitable;
        });
      function d() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : l[f.value ? "MATCH" : "UNMATCH"],
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          t =
            r ||
            (f.value
              ? "trade.apply.apply.mate_agreement"
              : "trade.apply.apply.notmate_agreement");
        o.stat.click(t), p("show-confirmation", e);
      }
      function g(e) {
        p("check", e);
      }
      return function (r, o) {
        return e.e(
          { a: r.config.newMode },
          r.config.newMode
            ? {
                b: e.o(g),
                c: e.p({
                  "protocol-config": r.config,
                  "is-protocol-check": r.isProtocolCheck,
                }),
              }
            : e.e(
                { d: !f.value && e.unref(s).insuitableUserShowSuitable },
                !f.value && e.unref(s).insuitableUserShowSuitable
                  ? {
                      e: e.t(v.value),
                      f: e.o(function (r) {
                        return d(
                          e.unref(l).MATCH,
                          "trade.apply.apply.mate_agreement"
                        );
                      }),
                    }
                  : {},
                {
                  g: e.t(m.value ? "《".concat(m.value, "》") : ""),
                  h: e.o(function (e) {
                    return d();
                  }),
                }
              )
        );
      };
    },
  });
wx.createComponent(i);
