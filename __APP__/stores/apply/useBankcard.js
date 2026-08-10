var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  a = require("../../service/aegis/platform/not-wujie.js");
require("../../service/broker.js");
var t = require("../../cgi/apply.js"),
  u = require("../../config/bank.js"),
  i = require("../../utils/getPlatform.js"),
  s = require("../actconfig/useThirdCustody.js"),
  o = require("./useCommonData.js");
require("../../service/sdk/lib/api.js");
var c = require("../../service/sdk/platform/mp-weixin.js"),
  p = require("../../model/apply/usePrivacyInfo.js"),
  l = require("./useIdCardQuickImport.js"),
  b = require("../../model/apply/useApply.js"),
  d = require("../../config/broker/11100/index.js"),
  f = i.getPlatform(),
  v = f.isZxg,
  k = f.isWeixin,
  m = p.usePrivacyInfo(p.EScene.APPLY),
  y = m.isPrivacyStatusInit,
  g = m.refreshPrivacySignStatus,
  h = m.getPrivacySignStatus,
  A = n.defineStore("apply-bankcard", function () {
    var i,
      f = n.ref([]),
      m = n.ref([]),
      A = n.ref([]),
      x = l.useIdCardQuickImport(),
      C = b.useApply().applyInfo,
      P = n.computed(function () {
        return "1" === C.value.idfront || "1" === C.value.idback;
      });
    function S() {
      return w.apply(this, arguments);
    }
    function w() {
      return (w = r(
        e().mark(function r() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.t0 = y.value), e.t0)) {
                    e.next = 4;
                    break;
                  }
                  return (e.next = 4), g();
                case 4:
                  return e.abrupt("return", h(p.PrivacySignId.BANKCARD));
                case 5:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )).apply(this, arguments);
    }
    function q() {
      return j.apply(this, arguments);
    }
    function j() {
      return (j = r(
        e().mark(function r() {
          var n, a, t;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((n = !1), !k)) {
                    e.next = 5;
                    break;
                  }
                  (n = !0), (e.next = 12);
                  break;
                case 5:
                  if (!v) {
                    e.next = 12;
                    break;
                  }
                  return (
                    (e.next = 8),
                    c.sdk.login().catch(function () {
                      return {};
                    })
                  );
                case 8:
                  (a = e.sent), (t = (a || {}).loginFrom), (n = "wx" === t);
                case 12:
                  return e.abrupt("return", n);
                case 13:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )).apply(this, arguments);
    }
    function B() {
      return I.apply(this, arguments);
    }
    function I() {
      return (I = r(
        e().mark(function r() {
          var i, s, c, p, l, b, f, v, k, y, g, h, x;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = d.brokerConfig.apply.bankDisplayNameMap),
                      (e.prev = 1),
                      (e.next = 4),
                      t.applyCgi.querySupportBankcard()
                    );
                  case 4:
                    if (
                      ((s = e.sent),
                      (c = s.support_banks),
                      !((p = void 0 === c ? [] : c).length < 1))
                    ) {
                      e.next = 9;
                      break;
                    }
                    throw { errmsg: "support_banks is empty" };
                  case 9:
                    (l = o.useCommonData()),
                      (b = n.storeToRefs(l)),
                      (f = b.applyArgs),
                      (v = f.value.out_abbr),
                      (k = void 0 === v ? "" : v),
                      (y = u.normalizeBankAbbr(k)),
                      (g = p.filter(function (e) {
                        var r = u.normalizeBankAbbr(e.bank_abbr);
                        return !y || r === y;
                      })),
                      (h = g.length > 0 ? g : p),
                      (m.value = h.map(function (e) {
                        var r = u.normalizeBankAbbr(e.bank_abbr);
                        return {
                          bankAbbr: r,
                          bankName: (null == i ? void 0 : i[r]) || e.name,
                          bankCode: e.code,
                          activeOnline: "Y" === e.telweb,
                          activeTransfer: "Y" === e.oncecard,
                          needPassword: "Y" === e.need_pwd,
                        };
                      })),
                      (A.value = Array.from(
                        new Set(
                          m.value
                            .filter(function (e) {
                              return e.needPassword;
                            })
                            .map(function (e) {
                              return e.bankAbbr;
                            })
                        )
                      )),
                      (e.next = 18);
                    break;
                  case 13:
                    (e.prev = 13),
                      (e.t0 = e.catch(1)),
                      a.aegisReporter.reportEvent(
                        "MONITOR-APPLY-BANKCARD-GETSUPPORTCARD-FAIL",
                        { ext2: JSON.stringify(e.t0 || {}) }
                      ),
                      (x = d.brokerConfig.apply.supportedBanks || []),
                      (m.value = x.map(function (e) {
                        var r = u.BANKS[e],
                          n = u.normalizeBankAbbr(e),
                          a = "".concat(r.name, "银行");
                        return {
                          bankName: (null == i ? void 0 : i[n]) || a,
                          bankAbbr: n,
                          bankCode: r.code,
                          activeOnline: !0,
                          activeTransfer: !1,
                          needPassword: !1,
                        };
                      })),
                      (A.value = []);
                  case 18:
                    return e.abrupt("return", m.value);
                  case 19:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[1, 13]]
          );
        })
      )).apply(this, arguments);
    }
    return {
      cftBankcardList: f,
      supportedBankList: m,
      needPasswordBanks: A,
      getInitData:
        ((i = r(
          e().mark(function i(c) {
            var l, b, d, v, m;
            return e().wrap(function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    return (
                      (l = c.pullCftCard),
                      (b = void 0 !== l && l),
                      (d = c.pullCftIdCard),
                      (v = void 0 !== d && d),
                      (m = [B()]),
                      b &&
                        m.push(
                          r(
                            e().mark(function r() {
                              var i, c, p, l, b, d, v, k, m;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), q();
                                      case 2:
                                        if (((e.t0 = e.sent), !e.t0)) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (e.next = 6), S();
                                      case 6:
                                        e.t0 = e.sent;
                                      case 7:
                                        if (!e.t0) {
                                          e.next = 25;
                                          break;
                                        }
                                        return (
                                          (e.prev = 8),
                                          (c = o.useCommonData()),
                                          (p = n.storeToRefs(c)),
                                          (l = p.applyArgs),
                                          (b = l.value.out_abbr),
                                          (d = void 0 === b ? "" : b),
                                          (e.next = 16),
                                          t.applyCgi.queryCftBankcard({
                                            bank_activity_from:
                                              (null == (i = u.BANKS[d])
                                                ? void 0
                                                : i.code) || "",
                                          })
                                        );
                                      case 16:
                                        (v = e.sent),
                                          (k = v.cards),
                                          (m = void 0 === k ? [] : k).length >
                                            0 &&
                                            ((f.value = m.map(function (e) {
                                              return {
                                                cardNum: e.card_num,
                                                bankAbbr: u.normalizeBankAbbr(
                                                  e.bank_abbr
                                                ),
                                                bankCode: e.bank_code,
                                                bankName: e.bank_name,
                                                cardSno: e.serial_num,
                                                isSupport: "1" === e.is_support,
                                                isChoose: "1" === e.is_choose,
                                              };
                                            })),
                                            (0,
                                            s.useThirdCustodyStore()
                                              .judgeThirdCustody)(m)),
                                          (e.next = 25);
                                        break;
                                      case 22:
                                        (e.prev = 22),
                                          (e.t1 = e.catch(8)),
                                          a.aegisReporter.reportEvent(
                                            "MONITOR-APPLY-BANKCARD-GETCFTCARD-FAIL",
                                            { ext2: JSON.stringify(e.t1 || {}) }
                                          );
                                      case 25:
                                        return e.abrupt("return", f.value);
                                      case 26:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                r,
                                null,
                                [[8, 22]]
                              );
                            })
                          )()
                        ),
                      v &&
                        k &&
                        !P.value &&
                        h(p.PrivacySignId.IDCARD) &&
                        x.preFetch(),
                      (i.next = 6),
                      Promise.all(m)
                    );
                  case 6:
                    return i.abrupt("return", i.sent);
                  case 7:
                  case "end":
                    return i.stop();
                }
            }, i);
          })
        )),
        function (e) {
          return i.apply(this, arguments);
        }),
      checkPrivacySign: S,
      checkAcctSupport: q,
    };
  });
exports.useBankcardStore = A;
