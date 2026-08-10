require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../common/vendor.js"),
  n = require("../../model/apply/useApply.js");
require("../../service/broker.js");
var r = require("../../config/enum.js"),
  i = require("../../model/apply/count.js"),
  a = require("../../cgi/apply.js"),
  c = require("../../utils/getPlatform.js"),
  s = require("../../common/components/Dialog/index.js"),
  l = require("../../service/aegis/platform/not-wujie.js"),
  u = require("../../bizs/apply/SignProtocols/useSignProtocols.js"),
  p = require("../../mixin/platforms/index.js"),
  f = require("../../config/broker/11100/index.js"),
  h = { UNSET: 1, VERIFY: 2, PASS: 3, UNPASS: 4 },
  m = null,
  d = !1,
  g = !1;
r.REGX.CODE = new RegExp("^\\d{".concat(f.brokerConfig.apply.captchaLen, "}"));
var S = {
  mixins: [p.pluginMixins],
  components: {
    FootPrint: function () {
      return "../../bizs/apply/FootPrint.js";
    },
    StCellGroup: function () {
      return "../../common/components/CellGroup/index.js";
    },
    StCell: function () {
      return "../../common/components/Cell/index.js";
    },
    MpDialog: function () {
      return "../../common/components/Dialog/Dialog.js";
    },
    ProgressBar: function () {
      return "../../bizs/apply/ProgressBar.js";
    },
    Certificate: function () {
      return "../../bizs/apply/bindmobile/Certificate.js";
    },
    StepButtons: function () {
      return "./components/StepButtons/StepButtons.js";
    },
    SignProtocol: function () {
      return "../../bizs/apply/SignProtocols/index.js";
    },
  },
  setup: function () {
    var r = o.getCurrentInstance().proxy,
      a = n.useApply(),
      c = a.applyInfo,
      s = a.isRecoverMode,
      l = a.commitApplyData,
      p = a.curStepConf,
      g = a.navigateNextStep,
      S = a.curStepInfo,
      C = a.nextStepInfo,
      b = o.reactive({ phone: "", code: "", xidSession: "" }),
      v = o.ref(0);
    m = new i.Count(function (e) {
      (r.countTime = e), e <= 0 && (d = !1);
    });
    var P = o.ref(!1),
      x = p.protocol || {},
      w = u.useSignProtocols(c, x),
      D = w.protocolConfigObj,
      k = w.isProtocolListInit,
      I = w.genMergingList,
      y = (function () {
        var o = t(
          e().mark(function t() {
            var o;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    I(),
                      (null == (o = c.value) ? void 0 : o.tel) &&
                        (b.phone = c.value.tel);
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
        return function () {
          return o.apply(this, arguments);
        };
      })();
    o.provide("onPageInit", y);
    var T = o.index.getSystemInfoSync().windowHeight,
      E = o.ref(!1),
      A = o.computed(function () {
        return "1" === c.value.tel_check;
      });
    return {
      applyInfo: c,
      isRecoverMode: s,
      curStepConf: p,
      navigateNextStep: g,
      curStepInfo: S,
      nextStepInfo: C,
      commitApplyData: l,
      mobileProtocolConfig: D,
      isMobileProtocolListInit: k,
      STATUS: h,
      checkStatus: o.ref(h.UNSET),
      formData: b,
      countTime: v,
      captchaLen: f.brokerConfig.apply.captchaLen,
      isProtocolCheck: P,
      ownerCertificate: A,
      windowHeight: T,
      isInputFocus: E,
      onPageInit: y,
    };
  },
  computed: {
    isPhoneCorrect: function () {
      return (
        !!(this.formData.phone && this.formData.phone.indexOf("*") >= 0) ||
        r.REGX.MOBILE.test(this.formData.phone)
      );
    },
    isSmsEnable: function () {
      return this.isPhoneCorrect && !this.countTime;
    },
    isCodeEnable: function () {
      return (
        this.isPhoneCorrect && ![h.VERIFY, h.PASS].includes(this.checkStatus)
      );
    },
    isSubmitable: function () {
      return (
        !(this.mobileProtocolConfig.signText && !this.isProtocolCheck) &&
        this.isPhoneCorrect &&
        r.REGX.CODE.test(this.formData.code)
      );
    },
  },
  beforeUnmount: function () {
    null !== m && (m.clean(!0), (m = null));
  },
  methods: {
    handlerFocus: function (e) {
      this.$stat.click(e), (this.isInputFocus = !0);
    },
    sendSms: function () {
      var n = this;
      return t(
        e().mark(function t() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (n.isPhoneCorrect) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      o.index.showToast({
                        icon: "none",
                        title: "手机号码填写不正确",
                      })
                    );
                  case 2:
                    if ((n.$stat.click("trade.apply.phone.getcode"), d)) {
                      e.next = 16;
                      break;
                    }
                    return (
                      n.$nextTick(function () {}),
                      (e.prev = 4),
                      (d = !0),
                      (e.next = 8),
                      a.applyCgi.requestSmsCode(
                        a.SEND_SMS_ACTION,
                        n.formData.phone
                      )
                    );
                  case 8:
                    m.start(),
                      o.index.showToast({
                        icon: "success",
                        title: "验证码已发送",
                      }),
                      (e.next = 15);
                    break;
                  case 12:
                    (e.prev = 12),
                      (e.t0 = e.catch(4)),
                      o.index.showToast({
                        icon: "none",
                        title: e.t0.retmsg || "网络繁忙 请稍后再试",
                      }),
                      (d = !1),
                      m.clean();
                  case 15:
                    l.aegisReporter.reportEvent(
                      "MONITOR-APPLY-BINDMOBILE-GETCODE-CLICK"
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[4, 12]]
          );
        })
      )();
    },
    submitPhone: function () {
      var n = this;
      return t(
        e().mark(function t() {
          var r, i, u, p, f;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (g || !n.checkData()) {
                      e.next = 26;
                      break;
                    }
                    return (
                      (g = !0),
                      (e.prev = 2),
                      (r = n.formData),
                      (i = r.code),
                      (u = r.phone),
                      (e.next = 6),
                      n.commitApplyData(
                        a.ACTION.PROFILE_CHANGE_PHONE,
                        { tel: u.replace(/\s/g, ""), verify_code: i },
                        { encodeFields: ["tel"] }
                      )
                    );
                  case 6:
                    o.index.hideLoading(),
                      n.$stat.click("trade.apply.phone.next"),
                      n.navigateNextStep(),
                      l.aegisReporter.reportEvent(
                        "MONITOR-APPLY-BINDMOBILE-CHECKCODE-SUC"
                      ),
                      (e.next = 25);
                    break;
                  case 12:
                    (e.prev = 12),
                      (e.t0 = e.catch(2)),
                      (p = c.getPlatform()),
                      (f = p.bizPlatform),
                      (e.t1 = (o.index.hideLoading(), e.t0.retcode)),
                      (e.next =
                        51088850 === e.t1
                          ? 18
                          : 51091501 === e.t1 || 51079708 === e.t1
                          ? 20
                          : 51092516 === e.t1
                          ? 22
                          : 24);
                    break;
                  case 18:
                    return (
                      "zxg" === f
                        ? s.Dialog({
                            message: "仅支持实名认证用户登录，请先进行实名认证",
                            showCancelButton: !1,
                          })
                        : s.Dialog({
                            message:
                              "仅支持微信支付实名认证用户登录，请先通过微信支付绑定银行卡进行实名认证",
                            showCancelButton: !1,
                          }),
                      e.abrupt("break", 25)
                    );
                  case 20:
                    return (
                      (n.formData.code = ""),
                      (n.checkStatus = h.UNPASS),
                      s.Dialog({
                        message: "验证码已过期，请重新验证手机号",
                        showCancelButton: !1,
                      }),
                      e.abrupt("break", 25)
                    );
                  case 22:
                    return (
                      (n.formData.code = ""),
                      (n.checkStatus = h.UNPASS),
                      s.Dialog({
                        message: "手机号校验失败，请重新输入手机号",
                        showCancelButton: !1,
                      }),
                      e.abrupt("break", 25)
                    );
                  case 24:
                    s.Dialog({
                      message: e.t0.retmsg || "网络繁忙 请稍后再试",
                      showCancelButton: !1,
                    });
                  case 25:
                    g = !1;
                  case 26:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[2, 12]]
          );
        })
      )();
    },
    checkData: function () {
      try {
        var e = this.formData.code;
        if (!this.isSwitchMode) {
          if (!this.isPhoneCorrect) throw "手机号码填写不正确";
          if (!e) throw "请填写短信验证码";
          if (!r.REGX.CODE.test(e)) throw "请正确填写短信验证码";
        }
        return !0;
      } catch (e) {
        return s.Dialog({ content: e, showCancelButton: !1 }), !1;
      }
    },
    clearInput: function () {
      (this.formData.phone = ""),
        (this.formData.code = ""),
        this.$nextTick(function () {});
    },
    maskPhoneClear: function () {
      this.clearInput();
    },
    onCheckChange: function (e) {
      (this.isProtocolCheck = e),
        this.isProtocolCheck
          ? this.$stat.click("trade.apply.phone.checkboxshow")
          : this.$stat.click("trade.apply.phone.checkboxhide");
    },
  },
  onShow: function () {
    var e, t, n, r, i, a;
    try {
      var c = o.dist.urltools.param.parse(
        null == location ? void 0 : location.search
      );
      (null == window ? void 0 : window.__POWERED_BY_WUJIE__) &&
        (c = o.dist.urltools.param.parse(
          null ==
            (t =
              null == (e = null == window ? void 0 : window.parent)
                ? void 0
                : e.location)
            ? void 0
            : t.search
        ));
      var s =
        null ==
        (r =
          null == (n = null == window ? void 0 : window.sessionStorage)
            ? void 0
            : n.getItem)
          ? void 0
          : r.call(n, "reported_trace_time");
      if (c.trace_time && !s) {
        var u = Date.now() - Number(c.trace_time);
        l.aegisReporter.reportEvent("TRACE_TIME", {
          ext2: u,
          ext3: "bindmobile",
        }),
          null ==
            (a =
              null == (i = null == window ? void 0 : window.sessionStorage)
                ? void 0
                : i.setItem) || a.call(i, "reported_trace_time", "1");
      }
    } catch (e) {}
  },
};
Array ||
  (
    o.resolveComponent("progress-bar") +
    o.resolveComponent("st-cell") +
    o.resolveComponent("st-cell-group") +
    o.resolveComponent("SignProtocol") +
    o.resolveComponent("FootPrint") +
    o.resolveComponent("StepButtons") +
    o.resolveComponent("Certificate") +
    o.resolveComponent("mp-dialog") +
    o.resolveComponent("ApplyWrap") +
    o.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var C = o._export_sfc(S, [
  [
    "render",
    function (e, t, n, r, i, a) {
      return o.e(
        {
          a: e.rootFontSize,
          b: o.p({ "step-name": r.curStepInfo.name }),
          c: !r.ownerCertificate,
        },
        r.ownerCertificate
          ? {}
          : o.e(
              { d: r.formData.phone.indexOf("*") >= 0 },
              r.formData.phone.indexOf("*") >= 0
                ? {
                    e: r.checkStatus === r.STATUS.PASS,
                    f: o.o(function () {
                      return (
                        a.maskPhoneClear && a.maskPhoneClear.apply(a, arguments)
                      );
                    }),
                    g: r.formData.phone,
                    h: o.o(function (e) {
                      return (r.formData.phone = e.detail.value);
                    }),
                  }
                : {
                    i: r.checkStatus === r.STATUS.PASS,
                    j: o.o(function (e) {
                      return a.handlerFocus("trade.apply.phone.phone_enter");
                    }),
                    k: o.o(function (e) {
                      return (r.isInputFocus = !1);
                    }),
                    l: r.formData.phone,
                    m: o.o(function (e) {
                      return (r.formData.phone = e.detail.value);
                    }),
                  },
              {
                n:
                  r.formData.phone &&
                  r.formData.phone.length &&
                  r.checkStatus !== r.STATUS.PASS,
              },
              r.formData.phone &&
                r.formData.phone.length &&
                r.checkStatus !== r.STATUS.PASS
                ? {
                    o: o.o(function () {
                      return a.clearInput && a.clearInput.apply(a, arguments);
                    }),
                  }
                : {},
              {
                p: r.captchaLen,
                q: !a.isCodeEnable,
                r: o.o(function (e) {
                  return a.handlerFocus("trade.apply.phone.code_enter");
                }),
                s: o.o(function (e) {
                  return (r.isInputFocus = !1);
                }),
                t: r.formData.code,
                v: o.o(function (e) {
                  return (r.formData.code = e.detail.value);
                }),
                w: o.t(
                  r.countTime
                    ? "获取验证码(" + r.countTime + "s)"
                    : "获取验证码"
                ),
                x: !a.isSmsEnable,
                y: o.o(function () {
                  return a.sendSms && a.sendSms.apply(a, arguments);
                }),
                z:
                  r.mobileProtocolConfig.signText && r.isMobileProtocolListInit,
              },
              r.mobileProtocolConfig.signText && r.isMobileProtocolListInit
                ? {
                    A: o.sr("SignProtocol", "3588f16e-6,3588f16e-1"),
                    B: o.o(a.onCheckChange),
                    C: o.p({
                      "protocol-config": r.mobileProtocolConfig,
                      "is-protocol-check": r.isProtocolCheck,
                    }),
                  }
                : {},
              { D: r.curStepConf.bottomText },
              r.curStepConf.bottomText ? { E: r.curStepConf.bottomText } : {},
              {
                F: o.o(a.submitPhone),
                G: o.p({
                  fixed: !0,
                  "transparent-bg": !0,
                  "disable-next-button": !a.isSubmitable,
                  "hide-prev-button": !0,
                  "next-button-text": "使用该手机号开户",
                }),
              }
            ),
        {
          H: o.p({ id: "mp-dialog" }),
          I: r.isInputFocus ? "".concat(r.windowHeight, "px") : "auto",
          J: o.sr("#global-wrap", "3588f16e-0"),
          K: o.p({
            id: "global-wrap",
            filePath: "/apply/bindmobile",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-3588f16e"],
]);
wx.createPage(C);
