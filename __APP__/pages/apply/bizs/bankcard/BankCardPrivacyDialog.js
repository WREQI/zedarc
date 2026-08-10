var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var n = require("../../../../common/vendor.js");
require("../../../../service/broker.js");
var o = require("../../../../model/apply/usePrivacyInfo.js"),
  t = require("../../../../common/components/Dialog/index.js"),
  i = require("../../../../service/aegis/platform/not-wujie.js"),
  s = require("../../../../config/broker/11100/index.js");
Array || n.resolveComponent("BrokerLogo")(),
  Math ||
    (
      function () {
        return "../../../../components/BrokerLogo/BrokerLogo.js";
      } + n.unref(a)
    )();
var a = function () {
    return "../../../../common/components/Popup/index.js";
  },
  u = n.defineComponent({
    __name: "BankCardPrivacyDialog",
    props: { visible: { type: Boolean, default: !1 } },
    emits: ["confirm", "refuse", "close"],
    setup: function (a, u) {
      var c = u.emit,
        p = o.usePrivacyInfo(o.EScene.APPLY),
        f = p.getProtocolUrl,
        l = p.setPrivacySignStatus,
        v = p.toProtocol,
        m = c;
      function g() {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = r(
          e().mark(function r() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), _(!0);
                    case 3:
                      m("confirm"), m("close"), (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        t.Dialog({
                          message: "授权书签署失败，请您手动输入银行卡信息",
                        }),
                        i.aegisReporter.reportEvent(
                          "MONITOR-APPLY-ERR_APPLY_SIGN_CFT_FAIL"
                        ),
                        m("refuse"),
                        m("close");
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function b() {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = r(
          e().mark(function r() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), _(!1);
                    case 3:
                      e.next = 8;
                      break;
                    case 5:
                      (e.prev = 5),
                        (e.t0 = e.catch(0)),
                        i.aegisReporter.reportEvent(
                          "MONITOR-APPLY-ERR_APPLY_SIGN_CFT_FAIL"
                        );
                    case 8:
                      return (e.prev = 8), m("refuse"), m("close"), e.finish(8);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 5, 8, 11]]
            );
          })
        )).apply(this, arguments);
      }
      function _(e) {
        var r = f();
        return l({ isSign: e, protocolUrl: r });
      }
      var h = s.brokerConfig.base.name;
      return function (e, r) {
        return {
          a: n.t(n.unref(h)),
          b: n.o(function () {
            return n.unref(v) && n.unref(v).apply(void 0, arguments);
          }),
          c: n.t(n.unref(h)),
          d: n.t(n.unref(h)),
          e: n.o(b),
          f: n.o(g),
          g: n.p({ show: e.visible, position: "bottom" }),
        };
      };
    },
  }),
  c = n._export_sfc(u, [["__scopeId", "data-v-91617622"]]);
wx.createComponent(c);
