var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/slicedToArray"),
  s = require("../../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../config/addressValidationConfig.js"),
  n = require("../../../model/apply/profile/utils/string.js"),
  a = require("../../../model/apply/profile/utils/address.js");
exports.validateAddress = (function () {
  var E = i(
    e().mark(function i(E, u) {
      var S, o, R, l, d, A, _, p;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((S = s(s({}, t.ADDRESS_VALIDATION_CONFIG), u)),
                (o = E),
                (R = S.ADMINISTRATIVE_KEYWORDS),
                n.judgeStrInclude(o, R))
              ) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", {
                isValid: !1,
                errorMessage: S.ERROR_MESSAGES.MISSING_ADMINISTRATIVE,
                errorType: "missing_admin",
              });
            case 3:
              return (
                (e.next = 5), a.addressUtil.splitAddress(E, { ignoreFail: !0 })
              );
            case 5:
              return (
                (l = e.sent),
                (d = r(l, 4)),
                (A = d[0]),
                (_ = d[1]),
                (p = d[3]),
                e.abrupt(
                  "return",
                  A && _
                    ? (function (e, r) {
                        return !(e.length < r || !n.checkHasChineseStr(e));
                      })(p, S.DETAILED_ADDRESS_MIN_LENGTH)
                      ? (function (e, r) {
                          var s = e.match(/[\u4e00-\u9fa5]/g);
                          return (s ? s.length : 0) >= r;
                        })(E, S.FULL_ADDRESS_MIN_CHINESE_COUNT)
                        ? (function (e) {
                            var r = e.replace(/\s/g, ""),
                              s = /^\d+$/.test(r),
                              i = /^[a-zA-Z]+$/.test(r);
                            return s || i;
                          })(E)
                          ? {
                              isValid: !1,
                              errorMessage: S.ERROR_MESSAGES.GENERAL,
                              errorType: "pure_invalid",
                            }
                          : (function (e, r) {
                              return n.judgeStrInclude(e, r);
                            })(E, S.SPECIAL_CHARACTERS)
                          ? {
                              isValid: !1,
                              errorMessage: S.ERROR_MESSAGES.GENERAL,
                              errorType: "special_chars",
                            }
                          : (function (e, r) {
                              return n.hasRepeatStr({
                                str: e,
                                length: r,
                                isContinuous: !0,
                              });
                            })(E, S.CONSECUTIVE_REPEAT_THRESHOLD)
                          ? {
                              isValid: !1,
                              errorMessage: S.ERROR_MESSAGES.GENERAL,
                              errorType: "repeat_chars",
                            }
                          : (function (e, r) {
                              return n.judgeStrInclude(e, r);
                            })(E, S.REQUIRED_KEYWORDS)
                          ? (function (e) {
                              return /\s/.test(e);
                            })(E)
                            ? {
                                isValid: !1,
                                errorMessage: S.ERROR_MESSAGES.GENERAL,
                                errorType: "contains_whitespace",
                              }
                            : { isValid: !0 }
                          : {
                              isValid: !1,
                              errorMessage: S.ERROR_MESSAGES.GENERAL,
                              errorType: "missing_keywords",
                            }
                        : {
                            isValid: !1,
                            errorMessage: S.ERROR_MESSAGES.GENERAL,
                            errorType: "length_short",
                          }
                      : {
                          isValid: !1,
                          errorMessage: S.ERROR_MESSAGES.GENERAL,
                          errorType:
                            p.length < S.DETAILED_ADDRESS_MIN_LENGTH
                              ? "detail_short"
                              : "no_chinese",
                        }
                    : {
                        isValid: !1,
                        errorMessage: S.ERROR_MESSAGES.MISSING_ADMINISTRATIVE,
                        errorType: "missing_admin",
                      }
                )
              );
            case 11:
            case "end":
              return e.stop();
          }
      }, i);
    })
  );
  return function (e, r) {
    return E.apply(this, arguments);
  };
})();
