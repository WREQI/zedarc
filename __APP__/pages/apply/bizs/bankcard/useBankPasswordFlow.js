var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var n = require("../../../../common/vendor.js"),
  a = require("../../../../service/aegis/platform/not-wujie.js"),
  t = require("../../../../stores/apply/useBankcard.js"),
  u = "APPLY_BANK_PASSWORD_DONE";
(exports.APPLY_BANK_PASSWORD_DONE_EVENT = u),
  (exports.useBankPasswordFlow = function (s) {
    var i = t.useBankcardStore(),
      l = n.storeToRefs(i).needPasswordBanks,
      o = n.ref(!1),
      c = null;
    return {
      pending: o,
      isNeedPassword: function (e) {
        return (
          l.value.length > 0 &&
            !l.value.includes(e) &&
            a.aegisReporter.reportEvent(
              "MONITOR-APPLY-BANKCARD-PWD-ABBR-MISMATCH",
              {
                ext2: JSON.stringify({
                  bankAbbr: e,
                  needPasswordBanksCount: l.value.length,
                }),
              }
            ),
          l.value.includes(e)
        );
      },
      startFlow: function (t, i, l) {
        o.value ||
          ((o.value = !0),
          (c = (function () {
            var n = r(
              e().mark(function r(n) {
                var t, u, i, l;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (o.value) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            ((o.value = !1),
                            (c = null),
                            (i = "success" === (null == n ? void 0 : n.status)),
                            (l = null == n ? void 0 : n.encodePwd),
                            !i || l)
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            (a.aegisReporter.reportEvent(
                              "MONITOR-APPLY-BANKCARD-PWD-EMPTY",
                              { ext2: JSON.stringify(n || {}) }
                            ),
                            void (null == (t = s.onCancel) || t.call(s)))
                          );
                        case 6:
                          if (!i || !l) {
                            e.next = 16;
                            break;
                          }
                          return (
                            s.emitProcessing(!0),
                            (e.prev = 8),
                            (e.next = 11),
                            s.onSubmit(l)
                          );
                        case 11:
                          return (
                            (e.prev = 11), s.emitProcessing(!1), e.finish(11)
                          );
                        case 14:
                          e.next = 17;
                          break;
                        case 16:
                          null == (u = s.onCancel) || u.call(s);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[8, , 11, 14]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })()),
          n.index.$once(u, c),
          s
            .getRouter()
            .push({
              name: "ApplyBankPwd",
              query: { bank_abbr: t, bank_name: i, card_tail: l },
            }));
      },
      cleanupIfPending: function () {
        o.value && ((o.value = !1), c && (n.index.$off(u, c), (c = null)));
      },
    };
  });
