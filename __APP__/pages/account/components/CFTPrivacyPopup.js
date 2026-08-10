var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js");
require("../../../service/broker.js");
var t = require("../../../model/apply/usePrivacyInfo.js"),
  o = require("../../../service/aegis/platform/not-wujie.js"),
  i = require("../../../service/stat/mp-weixin.js"),
  a = require("../../../common/components/Dialog/index.js"),
  c = require("../../../config/broker/11100/index.js");
Math || n.unref(s)();
var s = function () {
    return "../../../common/components/Popup/index.js";
  },
  u = n.defineComponent({
    __name: "CFTPrivacyPopup",
    props: { visible: { type: Boolean, default: !1 } },
    emits: ["confirm", "refuse", "error", "close"],
    setup: function (s, u) {
      var p = u.emit,
        f = c.brokerConfig.base.name,
        l = t.usePrivacyInfo(t.EScene.BIZ),
        m = l.getProtocolUrl,
        v = l.setPrivacySignStatus,
        d = l.toProtocol,
        _ = p;
      function b() {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = r(
          e().mark(function r() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        i.stat.click(
                          "trade.biz.find_account.privacy_dialog.confirm"
                        ),
                        (e.next = 4),
                        h(!0)
                      );
                    case 4:
                      _("confirm"), _("close"), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        a.Dialog({
                          message: "授权书签署失败，请您手动输入身份信息",
                        }),
                        o.aegisReporter.reportEvent(
                          "MONITOR-BIZ-ERR_FIND_ACCOUNT_SIGN_CFT_FAIL"
                        ),
                        _("error"),
                        _("close");
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 8]]
            );
          })
        )).apply(this, arguments);
      }
      function y() {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = r(
          e().mark(function r() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        i.stat.click(
                          "trade.biz.find_account.privacy_dialog.refuse"
                        ),
                        (e.next = 4),
                        h(!1)
                      );
                    case 4:
                      e.next = 9;
                      break;
                    case 6:
                      (e.prev = 6),
                        (e.t0 = e.catch(0)),
                        o.aegisReporter.reportEvent(
                          "MONITOR-BIZ-ERR_FIND_ACCOUNT_SIGN_CFT_FAIL"
                        );
                    case 9:
                      return (e.prev = 9), _("refuse"), _("close"), e.finish(9);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 6, 9, 12]]
            );
          })
        )).apply(this, arguments);
      }
      function h(e) {
        var r = m();
        return v({ isSign: e, protocolUrl: r });
      }
      return function (e, r) {
        return {
          a: n.o(function () {
            return n.unref(d) && n.unref(d).apply(void 0, arguments);
          }),
          b: n.t(n.unref(f)),
          c: n.t(n.unref(f)),
          d: n.o(y),
          e: n.o(b),
          f: n.p({
            show: e.visible,
            center: !1,
            mask: !0,
            "z-index": 100,
            position: "bottom",
            "mask-closable": !1,
          }),
        };
      };
    },
  }),
  p = n._export_sfc(u, [["__scopeId", "data-v-79cf935f"]]);
wx.createComponent(p);
