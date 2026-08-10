var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/slicedToArray");
require("../../app.js");
var a = require("../../common/vendor.js"),
  t = require("../../cgi/transfer.js"),
  i = require("../../service/aegis/platform/not-wujie.js");
require("../../service/broker.js");
var o = require("../../utils/index.js"),
  s = require("../../service/stat/mp-weixin.js"),
  c = require("../../components/Password/index.js"),
  u = require("../../config/broker/11100/index.js"),
  l = a.defineStore("useTransferInMoneySearch", function () {
    var l = a.ref(""),
      d = a.ref(!1),
      f = a.ref(!1),
      v = a.ref(!1),
      m = a.ref(!1),
      b = a.ref(""),
      k = a.ref(!1),
      h = a.ref(!1),
      p = a.reactive({ bankName: "", cardTail: "", bankAbbr: "" });
    function T() {
      (l.value = ""), (v.value = !1), (m.value = !1), (h.value = !0);
    }
    function w(e) {
      a.index.showToast({
        title: (null == e ? void 0 : e.retmsg) || "网络繁忙 请稍后再试",
        icon: "none",
      }),
        s.stat.click("trade.transferin.error.notdefinition");
    }
    var x,
      g = {
        51096401: function () {
          (m.value = !0), s.stat.click("trade.transferin.error.timeout");
        },
        51096403: function (e) {
          a.index.showToast({
            title: (null == e ? void 0 : e.retmsg) || "网络繁忙 请稍后再试",
            icon: "none",
          }),
            s.stat.click("trade.transferin.error.isnot.transferintime");
        },
        51096402: function (e) {
          (m.value = !0),
            a.index.showToast({
              title: (null == e ? void 0 : e.retmsg) || "网络繁忙 请稍后再试",
              icon: "none",
            }),
            s.stat.click("trade.transferin.error.pwd.error");
        },
      },
      y = a.computed(function () {
        if (!d.value || k.value) return "";
        var e = (u.brokerConfig.transfer || {}).bankTime,
          r = void 0 === e ? {} : e;
        if (r[b.value] || r.default) {
          var t = r[b.value] || r.default,
            i = t.startTime,
            s = void 0 === i ? [] : i,
            c = t.endTime,
            l = void 0 === c ? [] : c;
          if (
            a.isArray(s) &&
            3 === s.length &&
            a.isArray(l) &&
            3 === l.length
          ) {
            var f = n(s, 2),
              v = f[0],
              m = f[1],
              h = n(l, 2),
              p = h[0],
              T = h[1];
            return "交易日"
              .concat(o.fixedTimeNumber(v), ":")
              .concat(o.fixedTimeNumber(m), "-")
              .concat(o.fixedTimeNumber(p), ":")
              .concat(o.fixedTimeNumber(T), "可查银行余额");
          }
        }
        return "交易日09:00-16:00可查银行余额";
      });
    return {
      bankBalance: l,
      isSearching: v,
      isSupportSearchCardMoney: d,
      isNeedBankPwd: f,
      isShowRetryBySearchError: m,
      notRealTimeSearchMoneyTip: y,
      isLoadEnd: h,
      searchMoneyClick:
        ((x = r(
          e().mark(function r() {
            var n, a, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((v.value = !0),
                        (e.prev = 1),
                        m.value
                          ? s.stat.click("trade.transferin.retrygetcardmoney")
                          : s.stat.click("trade.transferin.getcardmoney"),
                        (m.value = !1),
                        (e.t0 = f.value),
                        !e.t0)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (e.next = 8),
                        new Promise(function (e, r) {
                          c.Password({
                            showCloseIcon: !0,
                            passwordName: "银行密码",
                            hideOnFinish: !0,
                            needUpdateSeed: !1,
                            theme: c.THEME.BANK,
                            extraInfo: p,
                            onSuccess: function (r) {
                              e(r);
                            },
                            onCancel: function () {
                              r("BankPwdCancelError");
                            },
                          });
                        })
                      );
                    case 8:
                      (n = e.sent),
                        s.stat.click("trade.transferin.check.password");
                    case 10:
                      return (
                        (a = { action: t.FUNDINFO_QRY_TYPE.SEARCHCARDMONEY }),
                        n && (a.bank_pwd = null == n ? void 0 : n.encodePwd),
                        (e.next = 14),
                        t.transferCgi.getBankcards(a)
                      );
                    case 14:
                      (o = e.sent),
                        (v.value = !1),
                        (l.value = o.bank_balance),
                        (e.next = 24);
                      break;
                    case 18:
                      if (
                        ((e.prev = 18),
                        (e.t1 = e.catch(1)),
                        "BankPwdCancelError" !== e.t1)
                      ) {
                        e.next = 22;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (T(),
                        void s.stat.click(
                          "trade.transferin.check.password.cancel"
                        ))
                      );
                    case 22:
                      (v.value = !1),
                        (g[null == e.t1 ? void 0 : e.t1.retcode] || w)(e.t1),
                        i.aegisReporter.reportEvent(
                          "SEARCH_BANK_CARD_MONEY_FAIL",
                          {
                            ext2: null == e.t1 ? void 0 : e.t1.retcode,
                            ext3:
                              (null == e.t1 ? void 0 : e.t1.retmsg) ||
                              JSON.stringify(e.t1 || {}),
                          }
                        );
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[1, 18]]
            );
          })
        )),
        function () {
          return x.apply(this, arguments);
        }),
      handleSearchCardMoneyAuthInfo: function (e) {
        var r = e.isSupportSearch,
          n = void 0 !== r && r,
          a = e.isNeedBankPassword,
          t = void 0 !== a && a,
          i = e.bankAbbr,
          o = void 0 === i ? "" : i;
        (d.value = n), (f.value = t), (b.value = o);
      },
      handleTransferTime: function (e, r) {
        (k.value = e && r),
          k.value ||
            s.stat.click("trade.transferin.error.isnot.transferintime"),
          T();
      },
      handleCardInfo: function (e) {
        var r = e.bankName,
          n = e.cardTail,
          a = e.bankAbbr;
        (p.bankName = r), (p.cardTail = n), (p.bankAbbr = a);
      },
    };
  });
exports.useTransferInMoneySearch = l;
