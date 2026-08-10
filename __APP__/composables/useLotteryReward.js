var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator");
require("../app.js");
var t = require("../common/vendor.js"),
  n = require("../config/key.js"),
  i = require("../service/aegis/platform/not-wujie.js");
require("../service/broker.js");
var a = require("../stores/red-point/useQuickEntry.js"),
  o = require("../cgi/lotteryReward.js"),
  s = require("../service/stat/mp-weixin.js"),
  u = require("../config/broker/11100/index.js");
function c() {
  var e, r, t, n;
  return (
    (null ==
    (n =
      null ==
      (t =
        null == (r = null == (e = u.brokerConfig) ? void 0 : e.dictionary)
          ? void 0
          : r.Enties)
        ? void 0
        : t.ipo)
      ? void 0
      : n.routeName) || ""
  );
}
(exports.deleteIpoRedPoint = function () {
  try {
    a.useQuickEntry().deleteBubbleTip(c());
  } catch (e) {}
}),
  (exports.useLotteryReward = function (u) {
    var p,
      l = u.scene,
      f = t.ref([]),
      v = !1;
    function d() {
      var e;
      return (
        (null == (e = f.value[0]) ? void 0 : e.date) ||
        t.dayjs().format("YYYYMMDD")
      );
    }
    function g() {
      return y.apply(this, arguments);
    }
    function y() {
      return (y = r(
        e().mark(function r() {
          var a;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!v) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (
                      (a = d()),
                      (v = !0),
                      (function (e) {
                        if (e)
                          try {
                            t.index.setStorageSync(n.LOTTERY_POPUP_SHOWN, e);
                          } catch (e) {
                            i.aegisReporter.reportEvent(
                              "LOTTERY_DIALOG_LOCALSTORAGE_ERROR",
                              {
                                ext4:
                                  e instanceof Error
                                    ? e.stack || e.message
                                    : JSON.stringify(e || {}),
                              }
                            );
                          }
                      })(a),
                      (e.prev = 4),
                      (e.next = 7),
                      o.confirmIpoWinPopupShown()
                    );
                  case 7:
                    e.next = 12;
                    break;
                  case 9:
                    (e.prev = 9),
                      (e.t0 = e.catch(4)),
                      i.aegisReporter.reportEvent(
                        "LOTTERY_DIALOG_CONFIRM_ERROR",
                        {
                          ext4:
                            e.t0 instanceof Error
                              ? e.t0.stack || e.t0.message
                              : JSON.stringify(e.t0 || {}),
                        }
                      );
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[4, 9]]
          );
        })
      )).apply(this, arguments);
    }
    return {
      items: f,
      trigger: function (e) {
        if (!(f.value.length > 0)) {
          var r = o.extractIpoWinPopup(e);
          0 !== r.length &&
            ((f.value = r),
            (function (e) {
              if (!e) return !1;
              try {
                return t.index.getStorageSync(n.LOTTERY_POPUP_SHOWN) === e;
              } catch (e) {
                return !1;
              }
            })(d()) && (f.value = []));
        }
      },
      closeDialog:
        ((p = r(
          e().mark(function r() {
            var t,
              n,
              o = arguments;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((t = o.length > 0 && void 0 !== o[0] ? o[0] : "know"),
                      0 === f.value.length)
                    ) {
                      e.next = 7;
                      break;
                    }
                    return (e.next = 4), g();
                  case 4:
                    if ("asset" !== l || "know" !== t) {
                      e.next = 6;
                      break;
                    }
                    try {
                      (n = c()) &&
                        a
                          .useQuickEntry()
                          .addBubbleTip(n, { contentText: "已中签" });
                    } catch (e) {
                      i.aegisReporter.reportEvent(
                        "LOTTERY_DIALOG_ADD_REDPOINT_ERROR",
                        {
                          ext4:
                            e instanceof Error
                              ? e.stack || e.message
                              : JSON.stringify(e || {}),
                        }
                      );
                    }
                  case 6:
                    s.stat.click(
                      "asset" === l
                        ? "trade.assetindex.lottery_incentive_popup_close"
                        : "trade.newstocklucky.lottery_incentive_popup_close"
                    ),
                      (f.value = []),
                      (v = !1);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function () {
          return p.apply(this, arguments);
        }),
      markShown: g,
    };
  });
