var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js"), require("../../../service/broker.js");
var o = require("../../../common/components/Dialog/index.js"),
  r = require("../../../model/account/usePersonal.js"),
  c = require("../../../model/apply/count.js"),
  u = require("../../../common/vendor.js"),
  s = require("../../../stores/user/useUserinfo.js"),
  i = require("../../../components/FaceCheck/useForgetMobile.js"),
  a = require("../../../config/enum.js"),
  l = require("../../../components/FaceCheck/utils.js"),
  d = require("../../../utils/idcard.js"),
  m = require("../../../cgi/account.js"),
  p = require("../../../mixin/platforms/index.js"),
  h = require("../../../config/broker/11100/index.js"),
  f = null,
  g = {
    name: "BizPwdResetForm",
    mixins: [p.pluginMixins],
    components: {
      IdCardForm: function () {
        return "../../../components/FaceCheck/IdCardForm.js";
      },
      ForgetMobile: function () {
        return "../../../components/FaceCheck/ForgetMobile.js";
      },
      StCellGroup: function () {
        return "../../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../../common/components/Cell/index.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      ProtocolCheck: function () {
        return "../../../components/FaceCheck/ProtocolCheck.js";
      },
    },
    setup: function () {
      var e = r.usePersonal(),
        t = e.getResetPwdStatus,
        n = e.sendSms,
        c = e.checkSms,
        a = s.useUserinfoStore().getUserInfo,
        m = u.storeToRefs(s.useUserinfoStore()).userinfo,
        p = u.ref(""),
        h = u.ref(!0),
        g = u.getCurrentInstance().proxy,
        b = d.tryIDTransform(),
        C = i.useForgetMobile({
          scene: "2",
          handleToComplete: function () {
            g.$refs.idcardForm.setFormStatus(!0);
          },
          handleSuccess: function () {
            g.onFaceCheckNext();
          },
        });
      return (
        u.provide("forgetMobile", C),
        u.onBeforeUnmount(function () {
          f.clean(!0), (f = null);
        }),
        {
          idcardTips: b,
          isFaceCheckEntry: l.isFaceCheckEntry(),
          forgetMobile: C,
          handleClickFaceCheck: function () {
            g.checkData({ noCheckMobile: !0 }) &&
              (!g.$refs.protocolCheck || g.$refs.protocolCheck.isCheck()
                ? (C.setFormData({ account: p.value }),
                  g.$refs.idcardForm.setFormData({ idcard: g.idNumber }),
                  C.handleFaceCheck())
                : o.Dialog({ message: "请同意签署协议", showCancel: !1 }));
          },
          userinfo: m,
          account: p,
          loading: h,
          getResetPwdStatus: t,
          sendSms: n,
          checkSms: c,
          getUserInfo: a,
          needSign: l.needSign,
        }
      );
    },
    data: function () {
      return {
        accountInputDisabled: !1,
        idNumber: "",
        mobileNumber: "",
        smsInputVal: "",
        countTime: 0,
        broker: h.brokerConfig,
        smsSended: !1,
      };
    },
    computed: {
      commonInfoFilled: function () {
        return !!(this.account && this.idNumber && this.mobileNumber);
      },
      smsDisabled: function () {
        return this.countTime > 0 || !this.commonInfoFilled;
      },
      nextBtnDisabled: function () {
        return !this.commonInfoFilled || !this.smsInputVal;
      },
      brokerName: function () {
        return h.brokerConfig.base.name;
      },
      accountInputConfig: function () {
        return h.brokerConfig.bind.accountInput || {};
      },
      accountMaxLength: function () {
        return this.accountInputConfig.maxLength;
      },
      accountPlaceholder: function () {
        return (
          this.accountInputConfig.placeholder ||
          "请输入".concat(this.brokerName, "证券账户")
        );
      },
      captchaLen: function () {
        return h.brokerConfig.hall.captchaLen;
      },
    },
    methods: {
      onAccountInput: function (e) {
        var t = this,
          n = e.detail,
          o = (null == n ? void 0 : n.value) || "",
          r = this.accountMaxLength;
        if (!r || o.length <= r) return o;
        var c = o.slice(0, r);
        return (
          this.$nextTick(function () {
            t.account = c;
          }),
          c
        );
      },
      checkData: function (e) {
        return this.account.toString().length
          ? this.accountMaxLength &&
            this.account.toString().length > this.accountMaxLength
            ? (o.Dialog({
                message:
                  this.accountInputConfig.errorTips ||
                  "请输入".concat(this.accountMaxLength, "位资金帐号"),
              }),
              !1)
            : a.REGEXP_VALID_ID.test(this.idNumber)
            ? !(
                !0 !== (null == e ? void 0 : e.noCheckMobile) &&
                !a.REGX.MOBILE.test(this.mobileNumber) &&
                (o.Dialog({ message: "手机号码不正确" }), 1)
              )
            : (o.Dialog({ message: "身份证不正确" }), !1)
          : (o.Dialog({ message: "证券账户不正确" }), !1);
      },
      onCheck: function () {
        var e = this;
        this.checkData() &&
          ("1" === this.userinfo.userstate
            ? this.getResetPwdStatus({
                action: 4,
                reset_bind: 1,
                fundaccount: this.account,
              })
                .then(function (t) {
                  "0" === t.status
                    ? setTimeout(function () {
                        e.$router.push({
                          name: "BizPwdResetResult",
                          query: {
                            returl: e.$route.query.returl,
                            fundaccount: e.account,
                          },
                        });
                      }, 300)
                    : e.getSmsCode();
                })
                .catch(function (e) {
                  "51001096" !== e.retcode && o.Dialog({ message: e.retmsg });
                })
            : this.getSmsCode());
      },
      getSmsCode: u.debounce(
        n(
          t().mark(function e() {
            var n, r, c;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = "1" === this.userinfo.userstate ? 7 : 1),
                        (r = {
                          type: n,
                          id_type: "0",
                          id_number: this.idNumber,
                          tel: this.mobileNumber,
                        }),
                        7 === n && (r.fundaccount = this.account),
                        (e.prev = 2),
                        (e.next = 5),
                        this.sendSms(r)
                      );
                    case 5:
                      (this.smsSended = !0), f.start(), (e.next = 19);
                      break;
                    case 9:
                      if (
                        ((e.prev = 9),
                        (e.t0 = e.catch(2)),
                        103490028 != +e.t0.retcode &&
                          103490026 != +e.t0.retcode)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (f.clean(),
                        void o.Dialog({
                          message:
                            "输入的手机号码与开户预留手机号码不一致，请确认后重新输入",
                        }))
                      );
                    case 13:
                      if (
                        103490091 != +e.t0.retcode &&
                        103490092 != +e.t0.retcode
                      ) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (e.next = 16),
                        this.idcardTips(this.idNumber, e.t0.retmsg)
                      );
                    case 16:
                      return (
                        (c = e.sent),
                        e.abrupt(
                          "return",
                          (c.retcode === d.ID_TRANSFORM_RESULT.fail &&
                            (f.clean(),
                            o.Dialog({
                              message:
                                e.t0.retmsg ||
                                "输入的身份证信息与系统预留身份证信息不一致，请确认后重新输入",
                            })),
                          void (
                            c.retcode === d.ID_TRANSFORM_RESULT.success &&
                            ((this.idNumber = c.data), this.getSmsCode())
                          ))
                        )
                      );
                    case 18:
                      f.clean(),
                        o.Dialog({ message: e.t0.retmsg || "获取验证码失败" });
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[2, 9]]
            );
          })
        ),
        1e3,
        { leading: !0 }
      ),
      toNextRoute: function () {
        this.$router.push({
          name: "BizPwdResetUploadIdCard",
          query: { fundaccount: this.account, type: this.$route.query.type },
        });
      },
      onNext: function () {
        var e = this;
        return n(
          t().mark(function n() {
            var r, c, u;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = "1" === e.userinfo.userstate ? 7 : 1),
                        (c = {
                          action: r,
                          id_type: "0",
                          id_number: e.idNumber,
                          tel: e.mobileNumber,
                          sms_code: e.smsInputVal,
                        }),
                        7 === r && (c.fundaccount = e.account),
                        (t.prev = 2),
                        (t.next = 5),
                        e.checkSms(c)
                      );
                    case 5:
                      return (
                        (u = t.sent),
                        (t.next = 8),
                        m.accountCgi.saveInfo({
                          reset_bind: "1" === e.userinfo.userstate ? 1 : 0,
                          id_number: e.idNumber,
                          tel: e.mobileNumber,
                          xid_session: u.xid_session,
                          fundaccount: e.account,
                        })
                      );
                    case 8:
                      e.toNextRoute(), (t.next = 14);
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(2)),
                        o.Dialog({ message: t.t0.retmsg });
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              null,
              [[2, 11]]
            );
          })
        )();
      },
      onFaceCheckNext: function () {
        var r = this;
        return n(
          t().mark(function n() {
            var c;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (c = e(
                          {
                            reset_bind: "1" === r.userinfo.userstate ? 1 : 0,
                            id_type: "0",
                            id_number: r.idNumber,
                            fundaccount: r.account,
                            id_name: r.forgetMobile.getIDName(),
                          },
                          r.forgetMobile.getFaceCheckParams()
                        )),
                        (t.prev = 1),
                        (t.next = 4),
                        m.accountCgi.checkFace(c)
                      );
                    case 4:
                      r.forgetMobile.clearFaceCheckResult(),
                        r.toNextRoute(),
                        (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8),
                        (t.t0 = t.catch(1)),
                        r.forgetMobile.clearFaceCheckResult(),
                        o.Dialog({ message: t.t0.retmsg });
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              null,
              [[1, 8]]
            );
          })
        )();
      },
      onNoCode: function () {
        o.Dialog({ selector: "#no-code" });
      },
    },
    onLoad: function (e) {
      var o = this;
      return n(
        t().mark(function n() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (o.checkCodeVal = ""),
                      (t.prev = 1),
                      (t.next = 4),
                      o.getUserInfo()
                    );
                  case 4:
                    t.next = 8;
                    break;
                  case 6:
                    (t.prev = 6), (t.t0 = t.catch(1));
                  case 8:
                    (o.loading = !1),
                      (o.account = e.fundaccount || o.userinfo.fundaccount),
                      e.fundaccount && (o.accountInputDisabled = !0),
                      (f = new c.Count(function (e) {
                        o.countTime = e;
                      }));
                  case 9:
                  case "end":
                    return t.stop();
                }
            },
            n,
            null,
            [[1, 6]]
          );
        })
      )();
    },
    onHide: function () {
      f.clean();
    },
    onShow: function () {
      0 !== this.countTime &&
        this.countTime < f.getTotalTime() &&
        f.continue(this.countTime);
    },
  };
Array ||
  (
    u.resolveComponent("BrokerLogo") +
    u.resolveComponent("st-cell") +
    u.resolveComponent("st-cell-group") +
    u.resolveComponent("ForgetMobile") +
    u.resolveComponent("ProtocolCheck") +
    u.resolveComponent("mp-dialog") +
    u.resolveComponent("MpDialog") +
    u.resolveComponent("IdCardForm") +
    u.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../../components/BrokerLogo/BrokerLogo.js";
      } +
      function () {
        return "../../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var b = u._export_sfc(g, [
  [
    "render",
    function (e, t, n, o, r, c) {
      return u.e(
        { a: e.rootFontSize, b: !o.loading },
        o.loading
          ? {}
          : u.e(
              { c: r.accountInputDisabled },
              r.accountInputDisabled
                ? {
                    d: u.t(c.brokerName || ""),
                    e: u.t(o.account ? "账号：" + o.account : ""),
                  }
                : {},
              { f: !r.accountInputDisabled },
              r.accountInputDisabled
                ? {}
                : {
                    g: c.accountPlaceholder,
                    h: c.accountMaxLength,
                    i: r.accountInputDisabled,
                    j: u.o([
                      function (e) {
                        return (o.account = e.detail.value);
                      },
                      function () {
                        return (
                          c.onAccountInput &&
                          c.onAccountInput.apply(c, arguments)
                        );
                      },
                    ]),
                    k: o.account,
                    l: u.p({ title: "证券账户" }),
                  },
              {
                m: r.idNumber,
                n: u.o(function (e) {
                  return (r.idNumber = e.detail.value);
                }),
                o: u.p({ title: "身份证号" }),
                p: u.p({ border: !1 }),
                q: r.mobileNumber,
                r: u.o(function (e) {
                  return (r.mobileNumber = e.detail.value);
                }),
                s: u.p({ title: "手机号码" }),
                t: c.captchaLen,
                v: !r.smsSended,
                w: r.smsInputVal,
                x: u.o(function (e) {
                  return (r.smsInputVal = e.detail.value);
                }),
                y: u.t(r.countTime ? r.countTime + "秒" : "获取验证码"),
                z: c.smsDisabled,
                A: u.o(function () {
                  return c.onCheck && c.onCheck.apply(c, arguments);
                }),
                B: u.p({ title: "验证码" }),
                C: u.p({ border: !1 }),
                D: o.isFaceCheckEntry,
              },
              o.isFaceCheckEntry ? { E: u.o(o.handleClickFaceCheck) } : {},
              {
                F: u.o(function () {
                  return c.onNoCode && c.onNoCode.apply(c, arguments);
                }),
                G: u.sr("protocolCheck", "1dd162e3-9,1dd162e3-0"),
                H: c.nextBtnDisabled,
                I: u.o(function () {
                  return c.onNext && c.onNext.apply(c, arguments);
                }),
                J: u.n(o.needSign() ? "submit-wrapper-sign" : "submit-wrapper"),
                K: u.p({ id: "mp-dialog" }),
                L: u.t(r.broker.base.name),
                M: u.t(r.broker.base.tel),
                N: u.p({ id: "no-code" }),
                O: u.sr("idcardForm", "1dd162e3-12,1dd162e3-0"),
              }
            ),
        {
          P: u.sr("#global-wrap", "1dd162e3-0"),
          Q: u.p({
            id: "global-wrap",
            filePath: "/biz/pwd-reset/form",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(b);
