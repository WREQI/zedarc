var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../common/vendor.js"),
  r = require("../../utils/crypt/index.js"),
  a = require("../../service/aegis/platform/not-wujie.js");
require("../../service/broker.js");
var t = require("../../stores/app/useMode.js"),
  s = require("./bizs/bankcard/useBankPasswordFlow.js"),
  i = require("../../common/components/Dialog/index.js"),
  u = require("../../mixin/platforms/index.js"),
  c = require("../../config/broker/11100/index.js"),
  l = o.defineComponent({
    mixins: [u.pluginMixins],
    name: "ApplyBankPwd",
    components: {
      ProgressBar: function () {
        return "../../bizs/apply/ProgressBar.js";
      },
      StPasswordInput: function () {
        return "../../common/components/PasswordInput.js";
      },
      StNumberKeyboard: function () {
        return "../../common/components/NumberKeyboard/index.js";
      },
      BankLogo: function () {
        return "../../components/BankLogo/BankLogo.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    setup: function () {
      var u,
        l,
        p =
          (
            (null == (u = c.brokerConfig.apply.stepConfig) ? void 0 : u.card) ||
            {}
          ).bankPasswordSecurityTips ||
          "为保障持卡人账户安全，银行要求验证银行密码才能建立证券账户与银行卡的三方存管关系。银行密码通过加密通道由券商直接发送至银行验证，其它三方无法获取或存储您的密码信息。",
        d = c.brokerConfig.base.name || "",
        m = o.storeToRefs(t.useModeStore()).simpleMode,
        b = o.ref(""),
        f = o.ref(""),
        v = o.ref(""),
        g = o.ref(""),
        k = o.ref(!1),
        w = null;
      function P(e) {
        o.index.hideLoading(),
          i.Dialog({
            message: (null == e ? void 0 : e.retmsg) || "网络繁忙 请稍后再试",
            confirmBtn: "我知道了",
            onConfirm: function () {
              g.value = "";
            },
          }),
          (g.value = ""),
          a.aegisReporter.reportEvent(
            "MONITOR-APPLY-BANKPWD-CRYPTPASSWD-FAIL",
            { ext2: JSON.stringify(e || {}) }
          );
      }
      function y(e) {
        k.value ||
          ((k.value = !0),
          w && (clearTimeout(w), (w = null)),
          o.index.$emit(s.APPLY_BANK_PASSWORD_DONE_EVENT, e));
      }
      return {
        brokerName: d,
        bankPasswordSecurityTips: p,
        simpleMode: m,
        bankAbbr: b,
        bankName: f,
        cardTail: v,
        rawPassword: g,
        startUnloadTimer: function () {
          w = setTimeout(function () {
            y({ status: "cancel" });
          }, 100);
        },
        emitEvent: y,
        onInput: function (e) {
          g.value = (g.value + e).slice(0, 6);
        },
        onDelete: function () {
          g.value = g.value.slice(0, g.value.length - 1);
        },
        complete:
          ((l = n(
            e().mark(function n() {
              var a;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          o.index.showLoading({ title: "加载中", mask: !0 }),
                          (e.prev = 1),
                          (e.next = 4),
                          r.cryptPasswd(g.value)
                        );
                      case 4:
                        if (null == (a = e.sent) ? void 0 : a.encodePwd) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          void P({
                            retmsg: "密码加密失败 请稍后再试",
                            reason: "encodePwd_empty",
                          })
                        );
                      case 7:
                        o.index.hideLoading(),
                          (g.value = ""),
                          o.index.navigateBack({
                            success: function () {
                              y({ status: "success", encodePwd: a.encodePwd });
                            },
                            fail: function () {
                              y({ status: "success", encodePwd: a.encodePwd });
                            },
                          }),
                          (e.next = 13);
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(1)), P(e.t0);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[1, 10]]
              );
            })
          )),
          function () {
            return l.apply(this, arguments);
          }),
        onCancel: function () {
          o.index.navigateBack({
            success: function () {
              y({ status: "cancel" });
            },
            fail: function () {
              y({ status: "cancel" });
            },
          });
        },
      };
    },
    onLoad: function (e) {
      (this.bankAbbr = (null == e ? void 0 : e.bank_abbr) || ""),
        (this.bankName = decodeURIComponent(
          (null == e ? void 0 : e.bank_name) || ""
        )),
        (this.cardTail = (null == e ? void 0 : e.card_tail) || ""),
        (this.bankAbbr && this.bankName && this.cardTail) ||
          o.index.navigateBack();
    },
    onUnload: function () {
      this.startUnloadTimer();
    },
  });
Array ||
  (
    o.resolveComponent("progress-bar") +
    o.resolveComponent("BankLogo") +
    o.resolveComponent("st-password-input") +
    o.resolveComponent("st-number-keyboard") +
    o.resolveComponent("mp-dialog") +
    o.resolveComponent("ApplyWrap") +
    o.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/BankLogo/BankLogo.js";
      } +
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var p = o._export_sfc(l, [
  [
    "render",
    function (e, n, r, a, t, s) {
      return {
        a: e.rootFontSize,
        b: o.p({ "step-name": "ApplyBindCard" }),
        c: o.p({ bank: e.bankAbbr }),
        d: o.t(e.bankName),
        e: o.t(e.cardTail),
        f: o.o(e.complete),
        g: o.p({ value: e.rawPassword }),
        h: o.o(function () {
          return e.onCancel && e.onCancel.apply(e, arguments);
        }),
        i: o.t(e.bankPasswordSecurityTips),
        j: o.o(e.onInput),
        k: o.o(e.onDelete),
        l: o.p({ show: !0, embedded: !0 }),
        m: o.p({ id: "mp-dialog" }),
        n: o.n(e.simpleMode ? "page-apply-bankpwd__simple-mode" : ""),
        o: o.o(function () {}),
        p: o.sr("#global-wrap", "528ce82a-0"),
        q: o.p({
          id: "global-wrap",
          filePath: "/apply/bankpwd",
          defaultTheme: "",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-528ce82a"],
]);
wx.createPage(p);
