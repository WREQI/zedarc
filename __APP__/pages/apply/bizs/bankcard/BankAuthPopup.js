var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var o = require("../../../../common/vendor.js"),
  n = require("../../../../common/components/Dialog/index.js"),
  r = require("../../../../config/enum.js"),
  a = require("../../../../service/stat/mp-weixin.js"),
  u = require("../../../../cgi/apply.js"),
  l = require("../../../../model/apply/useApply.js"),
  i = require("../../../../bizs/apply/SignProtocols/useSignProtocols.js"),
  c = {
    components: {
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
      SignProtocol: function () {
        return "../../../../bizs/apply/SignProtocols/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      applyInfoTel: { type: String, default: "" },
      bankCode: { type: String, default: "" },
      cardNum: { type: String, default: "" },
      authScene: { type: String, default: "0" },
      unionpayBankcardProtocol: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (c, s) {
      var p = s.emit,
        d = o.getCurrentInstance().proxy,
        f = l.useApply(),
        k = f.applyInfo,
        m = f.commitApplyData,
        v = o.ref(""),
        y = o.ref(!1),
        b = i.useSignProtocols(k, c.unionpayBankcardProtocol),
        g = b.protocolConfigObj;
      b.isProtocolListInit;
      (0, b.genMergingList)();
      var h = o.computed(function () {
          var e;
          return null == (e = c.unionpayBankcardProtocol) ? void 0 : e.signText;
        }),
        C = o.ref(!1),
        T = o.computed(function () {
          return v.value.includes("*");
        });
      function P() {
        (y.value = !1), p("input", !1);
      }
      function S() {
        return (
          (y.value =
            "" === v.value ||
            !(v.value === c.applyInfoTel || r.REGX.MOBILE.test(v.value))),
          !y.value
        );
      }
      return (
        o.watch(
          function () {
            return c.value;
          },
          function (e) {
            e
              ? ((v.value = c.applyInfoTel),
                a.stat.click("trade.apply.bankcard.authpopup.show"))
              : (v.value = "");
          },
          { immediate: !0 }
        ),
        {
          tel: v,
          isMaskTel: T,
          isTelError: y,
          isProtocolNeed: h,
          isProtocolCheck: C,
          unionpayBankcardProtocolConfig: g,
          onClose: P,
          onTelClear: function () {
            (v.value = ""), (y.value = !1);
          },
          onTelFocus: function () {
            a.stat.click("trade.apply.bankcard.authpopup.input"),
              (y.value = !1);
          },
          onTelCheck: S,
          onTelInputWithMarkNumberClick: function () {
            (v.value = ""),
              a.stat.click("trade.apply.bindcard.authpopup.input");
          },
          onSubmit: function () {
            S()
              ? !h.value || C.value
                ? t(
                    e().mark(function r() {
                      var l;
                      return e().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  a.stat.click(
                                    "trade.apply.bindcard.authpopup.submit"
                                  ),
                                  (r.prev = 1),
                                  o.index.showLoading({
                                    title: "验证中",
                                    mask: !0,
                                  }),
                                  (r.next = 5),
                                  m(
                                    u.ACTION.CARD_AUTH_UNIONPAY,
                                    {
                                      tel: v.value,
                                      bank_code: c.bankCode,
                                      bank_account: c.cardNum,
                                      auth_scene: c.authScene,
                                    },
                                    { encodeFields: ["bank_account", "tel"] }
                                  )
                                );
                              case 5:
                                (l = r.sent),
                                  o.index.hideLoading(),
                                  "0" === l.valid_status
                                    ? (p("authSuccess"), P())
                                    : ((function () {
                                        var o = t(
                                          e().mark(function t(o) {
                                            return e().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    (e.t0 = o.valid_status),
                                                      (e.next =
                                                        "10001111" === e.t0
                                                          ? 3
                                                          : "90010147" ===
                                                              e.t0 ||
                                                            "90010060" ===
                                                              e.t0 ||
                                                            "80010028" ===
                                                              e.t0 ||
                                                            "80010040" ===
                                                              e.t0 ||
                                                            "90010139" ===
                                                              e.t0 ||
                                                            "90010051" === e.t0
                                                          ? 4
                                                          : "90010047" ===
                                                              e.t0 ||
                                                            "90010048" === e.t0
                                                          ? 6
                                                          : "90010140" ===
                                                              e.t0 ||
                                                            "80010041" === e.t0
                                                          ? 8
                                                          : 9);
                                                    break;
                                                  case 3:
                                                    return e.abrupt("break", 9);
                                                  case 4:
                                                    return (
                                                      p("authError", {
                                                        clear: !0,
                                                      }),
                                                      P(),
                                                      e.abrupt("break", 9)
                                                    );
                                                  case 6:
                                                    return (
                                                      (v.value = ""),
                                                      e.abrupt("break", 9)
                                                    );
                                                  case 8:
                                                    p("authError", {
                                                      clear: !1,
                                                    }),
                                                      P();
                                                  case 9:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, t);
                                          })
                                        );
                                        return function (e) {
                                          return o.apply(this, arguments);
                                        };
                                      })()(l),
                                      n.Dialog({
                                        message:
                                          l.fail_reason ||
                                          "验证失败 请核对信息后再试",
                                      })),
                                  (r.next = 12);
                                break;
                              case 9:
                                (r.prev = 9),
                                  (r.t0 = r.catch(1)),
                                  o.index.hideLoading(),
                                  n.Dialog({
                                    message:
                                      r.t0.retmsg || "网络繁忙 请稍后再试",
                                  });
                              case 12:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[1, 9]]
                      );
                    })
                  )()
                : n.Dialog({ message: "请先同意签署协议" })
              : n.Dialog({ message: "请输入正确的手机号" });
          },
          openUnionpayProtocol: function () {
            a.stat.click("trade.apply.bankcard.agreement");
            var e = c.unionpayBankcardProtocol.key;
            e && d.$router.push({ name: "VProtocol", query: { key: e } });
          },
        }
      );
    },
  };
Array ||
  (o.resolveComponent("SignProtocol") + o.resolveComponent("action-sheet"))();
var s = o._export_sfc(c, [
  [
    "render",
    function (e, t, n, r, a, u) {
      return o.e(
        { a: r.isMaskTel },
        r.isMaskTel
          ? {
              b: o.o(function () {
                return (
                  r.onTelInputWithMarkNumberClick &&
                  r.onTelInputWithMarkNumberClick.apply(r, arguments)
                );
              }),
              c: r.tel,
              d: o.o(function (e) {
                return (r.tel = e.detail.value);
              }),
            }
          : {
              e: o.o(function () {
                return r.onTelFocus && r.onTelFocus.apply(r, arguments);
              }),
              f: o.o(function () {
                return r.onTelCheck && r.onTelCheck.apply(r, arguments);
              }),
              g: r.tel,
              h: o.o(function (e) {
                return (r.tel = e.detail.value);
              }),
            },
        { i: r.tel && r.tel.length },
        r.tel && r.tel.length
          ? {
              j: o.o(function () {
                return r.onTelClear && r.onTelClear.apply(r, arguments);
              }),
            }
          : {},
        { k: r.isProtocolNeed },
        r.isProtocolNeed
          ? {
              l: o.sr("SignProtocol", "e9aff8b1-1,e9aff8b1-0"),
              m: o.o(function (e) {
                return (r.isProtocolCheck = !r.isProtocolCheck);
              }),
              n: o.p({
                "protocol-config": r.unionpayBankcardProtocolConfig,
                "is-protocol-check": r.isProtocolCheck,
              }),
            }
          : {},
        { o: r.isTelError },
        (r.isTelError, {}),
        {
          p: o.o(function () {
            return r.onSubmit && r.onSubmit.apply(r, arguments);
          }),
          q: o.o(r.onClose),
          r: o.p({
            value: n.value,
            "picker-style": !0,
            "mask-closable": !1,
            "show-title-border-bottom": !1,
            "confirm-button": !1,
            title: "手机号验证",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-e9aff8b1"],
]);
wx.createComponent(s);
