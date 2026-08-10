var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/slicedToArray");
require("../../app.js");
var r = require("../../common/vendor.js"),
  c = require("../../config/enum.js"),
  i = require("../../model/apply/count.js"),
  a = require("../../cgi/bind.js"),
  s = require("../../utils/crypt/index.js");
require("../../service/broker.js");
var u = require("../../utils/getPlatform.js");
require("../../cgi/base.js");
var l = require("../../common/components/Dialog/index.js");
require("../../utils/index.js");
var d = require("../../stores/user/useUserinfo.js"),
  h = require("../../utils/passwd.js"),
  p = require("../../stores/app/useMode.js"),
  f = require("../../components/FaceCheck/useForgetMobile.js"),
  m = require("../../utils/accountHelper.js");
require("../../service/sdk/lib/api.js");
var C = require("../../service/sdk/platform/mp-weixin.js"),
  b = require("../../model/bind/useProtocol.js"),
  v = require("../../service/aegis/utils.js"),
  g = require("../../model/account/accountMonitorEvents.js"),
  w = require("../../mixin/platforms/index.js"),
  k = require("../../config/broker/11100/index.js"),
  x = u.getPlatform(),
  A = x.bizPlatform,
  M = x.isWeixin,
  D = x.isPCWeixin,
  P = null,
  _ = !1,
  T = "";
c.REGX.CODE = new RegExp("^\\d{".concat(k.brokerConfig.bind.captchaLen, "}"));
var S = {
  components: {
    IdCardForm: function () {
      return "../../components/FaceCheck/IdCardForm.js";
    },
    ForgetMobile: function () {
      return "../../components/FaceCheck/ForgetMobile.js";
    },
    FootPrint: function () {
      return "../../bizs/apply/FootPrint.js";
    },
    Protocols: function () {
      return "../../bizs/apply/Protocols.js";
    },
    MpDialog: function () {
      return "../../common/components/Dialog/Dialog.js";
    },
    StCellGroup: function () {
      return "../../common/components/CellGroup/index.js";
    },
    StCell: function () {
      return "../../common/components/Cell/index.js";
    },
    ActionSheet: function () {
      return "../../common/components/ActionSheet/index.js";
    },
    BrokerLogo: function () {
      return "../../components/BrokerLogo/BrokerLogo.js";
    },
    StCustomTextInput: function () {
      return "../../common/components/CustomTextInput/index.js";
    },
  },
  behaviors: ["wx://component-export"],
  export: function () {
    return {};
  },
  mixins: [w.pluginMixins],
  setup: function () {
    var e,
      t = r.getCurrentInstance().proxy,
      o = r.ref({ chooseAccount: !1, protocols: !1 }),
      n = r.reactive({ account: "", pwd: "", phone: "", code: "" }),
      a = r.ref(!0),
      s = r.ref([]),
      u = r.ref(!1),
      l =
        (null == window ? void 0 : window.__POWERED_BY_WUJIE__) &&
        (null == window ? void 0 : window.$wujie),
      h = r.ref(0);
    P = new i.Count(function (e) {
      t.bindCountTime = e;
    });
    var m = b.useProtocol(),
      C = m.protocolList,
      w = m.hasProtocol,
      x = m.isProtocolCheck,
      A = m.isProtocolShow,
      M = m.getProtocolList,
      _ = m.viewProtocol,
      T = m.signProtocol,
      S = m.setProtocolShow,
      I = r.ref({}),
      O = Date.now();
    r.onBeforeMount(function () {
      t.initAccounts();
    });
    var E = r.ref(0),
      N = p.useModeStore(),
      y = r.storeToRefs(N).simpleMode,
      B = null;
    r.onMounted(function () {
      var e, o, n, r, c, i;
      v.reportMonitorTime(g.ACCOUNT_MONITOR.BIND_PAGELOAD_TIME, Date.now() - O);
      var a =
        (null ==
        (o = null == (e = null == t ? void 0 : t.$route) ? void 0 : e.query)
          ? void 0
          : o.from) || "direct";
      if (
        (v.reportMonitorEvent(g.ACCOUNT_MONITOR.BIND_ENTRY, { ext2: a }),
        (B = setTimeout(function () {
          var e;
          B = null;
          var o = null == t ? void 0 : t.$el;
          if (o && o.querySelector) {
            var n =
              null == o ? void 0 : o.querySelector(".account-common-form");
            n &&
              0 ===
                (null == (e = null == n ? void 0 : n.children)
                  ? void 0
                  : e.length) &&
              v.reportMonitorEvent(g.ACCOUNT_MONITOR.BIND_WHITE_SCREEN);
          }
        }, 5e3)),
        M({
          forceGet:
            null ==
            (r = null == (n = k.brokerConfig.bind) ? void 0 : n.protocol)
              ? void 0
              : r.forceGet,
        }),
        l &&
          (null == (i = null == (c = k.brokerConfig) ? void 0 : c.bind)
            ? void 0
            : i.brokerCaptcha))
      ) {
        var s = window.$wujie.bus;
        (null == s ? void 0 : s.$emit) && s.$emit("SHOW_CAPTCHA_CODE");
      }
    }),
      r.onBeforeUnmount(function () {
        B && (clearTimeout(B), (B = null));
      });
    var j = d.useUserinfoStore(),
      q = j.forceGetUserInfo,
      F = j.getAccountMode,
      L = r.ref(t.$route.query.mode || c.E_ACCOUNT_MODE.NORMAL),
      R = f.useForgetMobile({
        scene: "1",
        handleToComplete: function () {
          t.$refs.idcardForm.setFormStatus(!0);
        },
        handleSuccess: function () {
          t.submitBind();
        },
      });
    r.provide("forgetMobile", R);
    var U = r.ref(null);
    return {
      isPCWeixin: D,
      forgetMobile: R,
      isCheckSms: function () {
        return !t.isSwitchMode && !R.isFaceCheckSuc();
      },
      handleClickFaceCheck: function () {
        t.checkData({ noCheckMobile: !0 }) &&
          (R.setFormData({ account: n.account }), R.handleFaceCheck());
      },
      showStatus: o,
      formData: n,
      bindCountTime: h,
      selectedAccount: I,
      onBindSuccess: function () {
        L.value === c.E_ACCOUNT_MODE.MARGIN && F(), r.index.$host.onBind();
      },
      buildVer: "202607271629",
      buildverClickCount: E,
      onShowBuildVerClick: function () {
        E.value += 1;
      },
      isWujie: l,
      simpleMode: y,
      forceGetUserInfo: q,
      dealer: k.brokerConfig.base.name,
      accounts: s,
      hasBindGetCaptchaEvent: u,
      isPasswordHide: a,
      handlePasswdHide: function () {
        a.value = !a.value;
      },
      enableComplexPassword:
        null == (e = k.brokerConfig.common) ? void 0 : e.enableComplexPassword,
      headerTip: k.brokerConfig.bind.headerTip || "",
      accountMode: L,
      E_ACCOUNT_MODE: c.E_ACCOUNT_MODE,
      switchAccountType: function () {
        L.value =
          L.value === c.E_ACCOUNT_MODE.MARGIN
            ? c.E_ACCOUNT_MODE.NORMAL
            : c.E_ACCOUNT_MODE.MARGIN;
      },
      protocolList: C,
      hasProtocol: w,
      isProtocolCheck: x,
      isProtocolShow: A,
      viewProtocol: _,
      signProtocol: T,
      setProtocolShow: S,
      customPwdInput: U,
      onCustomPwdInput: function (e) {
        var t;
        n.pwd = (null == (t = e.detail) ? void 0 : t.value) || "";
      },
      onCustomPwdConfirm: function () {
        var e;
        null == (e = U.value) || e.blur();
      },
    };
  },
  computed: {
    accountsLen: function () {
      return this.accounts
        ? this.accounts.filter(function (e) {
            return !!e.account;
          }).length
        : 0;
    },
    accountDisabled: function () {
      return !1;
    },
    isSwitchMode: function () {
      var e;
      return "0" === (null == (e = this.selectedAccount) ? void 0 : e.smsCheck);
    },
    isBindPhoneCorrect: function () {
      return c.REGX.MOBILE.test(this.formData.phone);
    },
    brokerCaptchaConf: function () {
      return k.brokerConfig.bind.brokerCaptcha || {};
    },
    isShowBrokerCaptcha: function () {
      var e;
      return (
        "1" ===
          (null == (e = this.selectedAccount) ? void 0 : e.isspecialvarify) &&
        !!this.brokerCaptchaConf.type
      );
    },
    captchaLen: function () {
      return k.brokerConfig.bind.captchaLen;
    },
    accountInputConfig: function () {
      return k.brokerConfig.bind.accountInput || {};
    },
    accountMaxLength: function () {
      return this.accountInputConfig.maxLength;
    },
    accountPlaceholder: function () {
      return (
        this.accountInputConfig.placeholder ||
        "请输入".concat(this.accountCalled)
      );
    },
    accountCalled: function () {
      return this.accountMode === c.E_ACCOUNT_MODE.MARGIN
        ? k.brokerConfig.bind.marginAccountCalled
        : k.brokerConfig.bind.accountCalled;
    },
    findAccountCalled: function () {
      return k.brokerConfig.bind.findAccountCalled;
    },
    passwordCalled: function () {
      return this.accountMode === c.E_ACCOUNT_MODE.MARGIN
        ? "融资融券交易密码"
        : "交易密码";
    },
    isFindAccAvailable: function () {
      return k.brokerConfig.bind.findAccount;
    },
    isAccountSwitchAvailable: function () {
      return this.accounts.length > 1;
    },
  },
  watch: {
    bindPhone: function (e) {
      this.formData.phone = e.replace(/\s/g, "");
    },
    isProtocolCheck: function (e) {
      this.$stat.click(
        e
          ? "trade.apply.bindid.checkboxshow"
          : "trade.apply.bindid.checkboxhide"
      );
    },
  },
  beforeUnmount: function () {
    null !== P && (P.clean(!0), (P = null));
  },
  onShow: function () {
    this.setFindedAccounts();
  },
  methods: {
    focusAccount: function () {
      this.$stat.click("trade.apply.bindid.id_enter"),
        this.isAccountSwitchAvailable && (this.showStatus.chooseAccount = !0);
    },
    onAccountInput: function (e) {
      var t,
        o = this,
        n = e.detail,
        r =
          (null == (t = null == n ? void 0 : n.value)
            ? void 0
            : t.replace(/\s/g, "")) || "",
        c = this.accountMaxLength,
        i = !c || r.length <= c ? r : r.slice(0, c);
      return (
        this.$nextTick(function () {
          o.formData.account = i;
        }),
        i
      );
    },
    blurAccount: function () {
      var e,
        t,
        o = this;
      if (
        this.formData.account &&
        this.formData.account !==
          (null == (e = this.selectedAccount) ? void 0 : e.account)
      ) {
        var n = null;
        if (
          (this.accounts &&
            this.accounts.length &&
            (n = this.accounts.find(function (e) {
              return e.account === o.formData.account;
            })),
          n)
        )
          this.setCurrentAccount(n);
        else {
          var r = (null == (t = this.accounts) ? void 0 : t[0]) || {};
          this.setCurrentAccount({
            account: this.formData.account,
            phone: r.phone || "",
            hasBind: r.account ? "0" : r.hasBind,
            smsCheck: r.account ? "1" : r.smsCheck,
            phoneChangedisabled: r.phoneChangedisabled || !1,
            isspecialvarify: r.isspecialvarify || "",
          });
        }
      }
    },
    setSelectedAccount: function () {
      var e;
      this.accounts.length > 0 &&
        ((e = n(this.accounts, 1)),
        (this.selectedAccount = e[0]),
        (this.formData.account = this.accounts[0].account),
        (this.formData.phone = this.accounts[0].phone));
    },
    initAccounts: function () {
      var n = this;
      return o(
        e().mark(function o() {
          var c, i, s, u, l, d, h, p, f, m, C, b, v, g, w, k, x;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (null == (i = null == (c = n.$route) ? void 0 : c.query)
                        ? void 0
                        : i.tip) &&
                        ((l = decodeURIComponent(n.$route.query.tip)),
                        r.index.showToast({ title: l })),
                      (e.prev = 1),
                      (e.next = 4),
                      a.bindCgi.requestGetAccount({ mode: n.accountMode })
                    );
                  case 4:
                    if (((e.t0 = e.sent.account_list), e.t0)) {
                      e.next = 7;
                      break;
                    }
                    e.t0 = [];
                  case 7:
                    (d = e.t0),
                      (n.accounts = d.map(function (e) {
                        return {
                          account: e.fundacct,
                          hasBind: e.hasbind,
                          smsCheck: e.smscheck,
                          phone: e.mobile,
                          phoneChangedisabled: !(
                            !e.mobile ||
                            (e.change_tel && "0" !== e.change_tel)
                          ),
                          isspecialvarify: e.isspecialvarify,
                        };
                      })),
                      (e.next = 13);
                    break;
                  case 11:
                    (e.prev = 11), (e.t1 = e.catch(1));
                  case 13:
                    (h = n.accounts.length),
                      (p = n.$route.query),
                      (f = p.accounts),
                      (m = void 0 === f ? "" : f),
                      (C = p.phone),
                      (b = void 0 === C ? "" : C),
                      (m = decodeURIComponent(m)),
                      (b = decodeURIComponent(b)),
                      0 === h &&
                        (n.accounts = m
                          .split(",")
                          .filter(function (e) {
                            return e;
                          })
                          .map(function (e) {
                            return {
                              account: e,
                              hasBind: "0",
                              phone: b,
                              phoneChangedisabled: !!b,
                            };
                          })),
                      1 === h &&
                        ((v = null == (s = n.accounts[0]) ? void 0 : s.account),
                        (g = null == (u = n.accounts[0]) ? void 0 : u.phone),
                        (w = m),
                        (k = b),
                        v ||
                          g ||
                          (!w && !k) ||
                          ((x = t({}, n.accounts[0])),
                          (n.accounts = (w || "")
                            .split(",")
                            .filter(function (e) {
                              return e;
                            })
                            .map(function (e) {
                              return t(
                                t({}, x),
                                {},
                                {
                                  account: e,
                                  phone: k,
                                  phoneChangedisabled: !!k,
                                }
                              );
                            })))),
                      (n.accounts && 0 !== n.accounts.length) ||
                        n.setAccountFromStorage(),
                      n.setSelectedAccount();
                  case 17:
                  case "end":
                    return e.stop();
                }
            },
            o,
            null,
            [[1, 11]]
          );
        })
      )();
    },
    setAccountFromStorage: function () {
      var e = m.getStorageAccount();
      e.length && ((this.accounts = e), this.setSelectedAccount());
    },
    setFindedAccounts: function () {
      this.findFlag && ((this.findFlag = !1), this.setAccountFromStorage());
    },
    setCurrentAccount: function (e) {
      this.selectedAccount = e;
      var t = e.account,
        o = e.phone;
      (this.formData.account = t), (this.formData.phone = o);
    },
    selectAccount: function (e) {
      var t = this;
      this.setCurrentAccount(e),
        setTimeout(function () {
          t.showStatus.chooseAccount = !1;
        }, 300);
    },
    pwdInput: function (e) {
      var t = this,
        o = e.detail.value;
      this.enableComplexPassword
        ? h.isValidComplexPassword(o) ||
          this.$nextTick(function () {
            t.formData.pwd = h.fixInvalidComplexPassword(o);
          })
        : h.isValidNumberPassword(o) ||
          this.$nextTick(function () {
            t.formData.pwd = h.fixInvalidNumberPassword(o);
          });
    },
    handlerSendSms: function (t) {
      return o(
        e().mark(function o() {
          var n, c, i, s, u;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.action),
                      (c = t.phone),
                      (i = t.brokerCaptchaCode),
                      (s = t.isspecialvarify),
                      (u = t.timer),
                      (e.prev = 1),
                      (e.next = 4),
                      a.bindCgi.requestSendSms(n, {
                        phone: c,
                        captchaCode: i,
                        isspecialvarify: s,
                      })
                    );
                  case 4:
                    v.reportMonitorEvent(g.ACCOUNT_MONITOR.BIND_SMS_SEND),
                      u.start(),
                      r.index.showToast({
                        icon: "success",
                        title: "验证码已发送",
                      }),
                      (e.next = 12);
                    break;
                  case 9:
                    (e.prev = 9),
                      (e.t0 = e.catch(1)),
                      v.reportMonitorEvent(g.ACCOUNT_MONITOR.BIND_SMS_FAIL, {
                        ext3: ""
                          .concat(
                            (null == e.t0 ? void 0 : e.t0.retcode) || "unknown",
                            "|"
                          )
                          .concat((null == e.t0 ? void 0 : e.t0.retmsg) || ""),
                      }),
                      r.index.showToast({
                        icon: "none",
                        title: e.t0.retmsg || "网络繁忙 请稍后再试",
                      }),
                      u.clear();
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            o,
            null,
            [[1, 9]]
          );
        })
      )();
    },
    sendSms: function (t) {
      var n = this;
      return o(
        e().mark(function o() {
          var i, s, u, l, d, h, p;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((l = ""), "bind" === t)) {
                      e.next = 3;
                      break;
                    }
                    throw "send sms in unknoe type";
                  case 3:
                    if (
                      ((l = n.formData.phone),
                      (s = a.SMS_ACTION.BIND),
                      (u = P),
                      n.$stat.click("trade.apply.bindid.getcode"),
                      c.REGX.MOBILE.test(l))
                    ) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      r.index.showToast({
                        icon: "none",
                        title: "手机号码填写不正确",
                      })
                    );
                  case 5:
                    if (!_) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return");
                  case 7:
                    if (
                      ((_ = !0),
                      setTimeout(function () {
                        _ = !1;
                      }, 1e3),
                      (d = ""),
                      (h = ""),
                      "bind" !== t ||
                        ((d =
                          null == (i = n.selectedAccount)
                            ? void 0
                            : i.isspecialvarify),
                        !n.isShowBrokerCaptcha))
                    ) {
                      e.next = 22;
                      break;
                    }
                    if (!n.isWujie) {
                      e.next = 13;
                      break;
                    }
                    return (
                      (p = window.$wujie.bus),
                      e.abrupt(
                        "return",
                        ((null == p ? void 0 : p.$on) &&
                          !n.hasBindGetCaptchaEvent &&
                          ((n.hasBindGetCaptchaEvent = !0),
                          p.$on("GET_CAPTCHA_CODE_SUC", function (e) {
                            e !== T &&
                              ((T = e),
                              n.handlerSendSms({
                                action: s,
                                phone: l,
                                brokerCaptchaCode: e,
                                timer: u,
                                isspecialvarify: d,
                              }));
                          })),
                        void (
                          (null == p ? void 0 : p.$emit) &&
                          p.$emit("GET_CAPTCHA_CODE")
                        ))
                      )
                    );
                  case 13:
                    return (
                      (e.prev = 13),
                      (e.next = 16),
                      n.$refs.brokerCaptcha.asyncVerify()
                    );
                  case 16:
                    (h = e.sent), (e.next = 22);
                    break;
                  case 19:
                    return (
                      (e.prev = 19), (e.t0 = e.catch(13)), e.abrupt("return")
                    );
                  case 22:
                    return (
                      (e.next = 24),
                      n.handlerSendSms({
                        action: s,
                        phone: l,
                        brokerCaptchaCode: h,
                        timer: u,
                        isspecialvarify: d,
                      })
                    );
                  case 24:
                  case "end":
                    return e.stop();
                }
            },
            o,
            null,
            [[13, 19]]
          );
        })
      )();
    },
    checkCode: function () {
      var t = this;
      return o(
        e().mark(function o() {
          var n, r, c, i;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = t.formData),
                    (c = r.phone),
                    (i = r.code),
                    (e.next = 3),
                    t.smsCheck({
                      action: a.SMS_ACTION.BIND,
                      phone: c,
                      code: i,
                      hasbind:
                        null == (n = t.selectedAccount) ? void 0 : n.hasBind,
                    })
                  );
                case 3:
                  return e.abrupt("return", e.sent.xid_session);
                case 4:
                case "end":
                  return e.stop();
              }
          }, o);
        })
      )();
    },
    submitBind: function () {
      var n = this;
      return o(
        e().mark(function o() {
          var c, i, u, d, h, p, f, m, b, w, x, D, P, T, S, I, O, E;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (n.$stat.click("trade.apply.bindid.logon"), n.checkData())
                    ) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (!_) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    if (
                      ((_ = !0),
                      setTimeout(function () {
                        _ = !1;
                      }, 1e3),
                      (h = Date.now()),
                      (n._bindTotalStart = n._bindTotalStart || Date.now()),
                      r.index.showLoading({ title: "登录中..." }),
                      !n.hasProtocol ||
                        !(null ==
                        (i =
                          null == (c = k.brokerConfig.bind)
                            ? void 0
                            : c.protocol)
                          ? void 0
                          : i.needSign))
                    ) {
                      e.next = 16;
                      break;
                    }
                    return (
                      (e.prev = 7),
                      (p = { fund_account: n.formData.account }),
                      (e.next = 11),
                      n.signProtocol(p, {
                        forceSign:
                          null ==
                          (d =
                            null == (u = k.brokerConfig.bind)
                              ? void 0
                              : u.protocol)
                            ? void 0
                            : d.forceSign,
                      })
                    );
                  case 11:
                    e.next = 16;
                    break;
                  case 13:
                    return (
                      (e.prev = 13),
                      (e.t0 = e.catch(7)),
                      e.abrupt("return", void r.index.hideLoading())
                    );
                  case 16:
                    if (!(m = n.isCheckSms())) {
                      e.next = 27;
                      break;
                    }
                    return (e.prev = 18), (e.next = 21), n.checkCode();
                  case 21:
                    (f = e.sent), (e.next = 27);
                    break;
                  case 24:
                    return (
                      (e.prev = 24),
                      (e.t1 = e.catch(18)),
                      e.abrupt(
                        "return",
                        (r.index.hideLoading(),
                        l.Dialog({
                          message: e.t1.retmsg || "网络繁忙 请稍后再试",
                        }),
                        void (n.formData.code = ""))
                      )
                    );
                  case 27:
                    return (
                      (b = n.selectedAccount.hasBind),
                      (e.prev = 28),
                      (w = n.formData),
                      (x = w.account),
                      (D = w.pwd),
                      (e.next = 34),
                      s.cryptPasswd(D)
                    );
                  case 34:
                    if (
                      ((P = e.sent),
                      (T = P.encodePwd),
                      (S = P.encodePwdExtra),
                      (I = {}),
                      m ||
                        (I = t(
                          t({}, n.forgetMobile.getFaceCheckParams()),
                          {},
                          {
                            credential_id: n.forgetMobile.getIDNum(),
                            credential_name: n.forgetMobile.getIDName(),
                          }
                        )),
                      (O = t(
                        t({ account: x }, I),
                        {},
                        {
                          xid_session: f,
                          hasbind: b,
                          passwd: T,
                          password: T,
                          password_front_and_broker: S,
                          mode: n.accountMode,
                        }
                      )),
                      M && (O.scene = 1),
                      "zxg" !== A)
                    ) {
                      e.next = 47;
                      break;
                    }
                    return (e.next = 44), a.bindCgi.requestZxgBind(O);
                  case 44:
                    (e.t2 = e.sent), (e.next = 50);
                    break;
                  case 47:
                    return (e.next = 49), a.bindCgi.requestBind(O);
                  case 49:
                    e.t2 = e.sent;
                  case 50:
                    e.t2,
                      r.index.hideLoading(),
                      n.signPrivacyProtocol(),
                      n.forgetMobile.clearFaceCheckResult(),
                      v.reportMonitorTime(
                        g.ACCOUNT_MONITOR.BIND_SUBMIT_TIME,
                        Date.now() - h
                      ),
                      n._bindTotalStart &&
                        (v.reportMonitorTime(
                          g.ACCOUNT_MONITOR.BIND_TOTAL_TIME,
                          Date.now() - n._bindTotalStart
                        ),
                        (n._bindTotalStart = 0)),
                      v.reportMonitorEvent(g.ACCOUNT_MONITOR.BIND_SUC),
                      l.Dialog({
                        message: "你已成功登录".concat(
                          k.brokerConfig.base.name,
                          "账户"
                        ),
                        onConfirm: function () {
                          n.onBindSuccess();
                        },
                      }),
                      (e.next = 76);
                    break;
                  case 60:
                    (e.prev = 60),
                      (e.t3 = e.catch(28)),
                      r.index.hideLoading(),
                      (n.formData.code = ""),
                      n.forgetMobile.clearFaceCheckResult(),
                      v.reportMonitorTime(
                        g.ACCOUNT_MONITOR.BIND_SUBMIT_TIME,
                        Date.now() - h
                      ),
                      v.reportMonitorEvent(g.ACCOUNT_MONITOR.BIND_FAIL, {
                        ext3: ""
                          .concat(
                            (null == e.t3 ? void 0 : e.t3.retcode) || "unknown",
                            "|"
                          )
                          .concat((null == e.t3 ? void 0 : e.t3.retmsg) || ""),
                      }),
                      (E = k.brokerConfig.base.tel),
                      (e.t4 = e.t3.retcode),
                      (e.next =
                        51088850 === e.t4
                          ? 67
                          : 51091501 === e.t4 || 51079708 === e.t4
                          ? 69
                          : 51091406 === e.t4
                          ? 71
                          : 317610017 === e.t4
                          ? 73
                          : 75);
                    break;
                  case 67:
                    return (
                      "zxg" === A
                        ? l.Dialog({
                            message: "仅支持实名认证用户登录，请先进行实名认证",
                          })
                        : l.Dialog({
                            message:
                              "仅支持微信支付实名认证用户登录，请先通过微信支付绑定银行卡进行实名认证",
                          }),
                      e.abrupt("break", 76)
                    );
                  case 69:
                    return (
                      l.Dialog({ message: "验证码已过期，请重新验证手机号" }),
                      e.abrupt("break", 76)
                    );
                  case 71:
                    return (
                      l.Dialog({
                        message: "交易密码输入错误，还有".concat(
                          e.t3.rest_num || "有限",
                          "次重试机会"
                        ),
                      }),
                      e.abrupt("break", 76)
                    );
                  case 73:
                    return (
                      l.Dialog({
                        message: e.t3.retmsg || "网络繁忙 请稍后再试",
                        showCancelButton: !!E,
                        cancelButtonText: "我知道了",
                        confirmButtonText: E ? "联系券商" : "我知道了",
                        onConfirm: function () {
                          E && C.sdk.makePhoneCall(String(E).replace(/-/g, ""));
                        },
                      }),
                      e.abrupt("break", 76)
                    );
                  case 75:
                    l.Dialog({ message: e.t3.retmsg || "网络繁忙 请稍后再试" });
                  case 76:
                  case "end":
                    return e.stop();
                }
            },
            o,
            null,
            [
              [7, 13],
              [18, 24],
              [28, 60],
            ]
          );
        })
      )();
    },
    smsCheck: function (t) {
      return o(
        e().mark(function o() {
          var n, r, c, i, s;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = t.phone),
                    (r = t.code),
                    (c = t.action),
                    (i = t.hasbind),
                    (e.next = 3),
                    a.bindCgi.requestSmsCheck(c, {
                      phone: n,
                      code: r,
                      hasbind: i,
                    })
                  );
                case 3:
                  return (s = e.sent), e.abrupt("return", (s.xid_session, s));
                case 5:
                case "end":
                  return e.stop();
              }
          }, o);
        })
      )();
    },
    checkData: function (e) {
      try {
        var t = this.formData,
          o = t.account,
          n = t.pwd,
          r = t.phone,
          i = t.code;
        if (!o)
          throw (
            (this.accountMode === c.E_ACCOUNT_MODE.MARGIN
              ? "信用账户"
              : "证券账户") + "不能为空"
          );
        if (this.accountMaxLength && o.length > this.accountMaxLength)
          throw (
            this.accountInputConfig.errorTips ||
            "请输入".concat(this.accountMaxLength, "位资金帐号")
          );
        if (0 === n.length) throw "交易密码不能为空";
        if (this.enableComplexPassword) {
          if (!h.isValidComplexPassword(n, { minlength: 6, maxlength: 18 }))
            throw "交易密码不正确";
        } else if (6 !== n.length) throw "交易密码不正确";
        if (
          this.isCheckSms() &&
          !0 !== (null == e ? void 0 : e.noCheckMobile)
        ) {
          if (!c.REGX.MOBILE.test(r)) throw "手机号码填写不正确";
          if (!i) throw "请填写短信验证码";
          if (!c.REGX.CODE.test(i)) throw "请正确填写短信验证码";
        }
        if (this.hasProtocol && !this.isProtocolCheck) throw "请同意签署协议";
        return !0;
      } catch (o) {
        return l.Dialog({ message: o, showCancel: !1 }), !1;
      }
    },
    findAccount: function () {
      this.$stat.click("trade.apply.bindid.find_id"),
        (this.findFlag = !0),
        this.$router.push({
          name: "FindAccount",
          query: { mode: this.accountMode },
        });
    },
    forgetPwd: function () {
      var e, t, o;
      if (
        (this.$stat.click("trade.apply.bindid.forgot_passwd"),
        k.brokerConfig.bind.forgetPwd)
      ) {
        var n =
          (null ==
          (o =
            null == (t = null == (e = k.brokerConfig.hall) ? void 0 : e.third)
              ? void 0
              : t.entry)
            ? void 0
            : o.resetpwd) || "";
        if (!this.formData.account && !n)
          return void l.Dialog({
            message: "请先设置".concat(this.accountCalled),
          });
        this.$router.push({
          name: "BizPwdReset",
          query: { fundaccount: this.formData.account },
        });
      } else {
        var r = k.brokerConfig.base || {},
          c = r.name,
          i = r.tel,
          a = "请您携带本人有效身份证前往".concat(c, "营业部办理重置密码业务");
        l.Dialog({
          message: a,
          showCancelButton: !!i,
          confirmButtonText: i ? "致电券商" : "确认",
          cancelButtonText: "确认",
          onConfirm: function () {
            i && C.sdk.makePhoneCall(String(i).replace(/-/g, ""));
          },
        });
      }
    },
    signPrivacyProtocol: function () {
      return o(
        e().mark(function t() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )();
    },
    showProtocols: function () {
      this.setProtocolShow(!0),
        this.$stat.click("trade.apply.bindid.agreement");
    },
  },
};
Array ||
  (
    r.resolveComponent("BrokerLogo") +
    r.resolveComponent("st-cell") +
    r.resolveComponent("st-custom-text-input") +
    r.resolveComponent("st-cell-group") +
    r.resolveComponent("ForgetMobile") +
    r.resolveComponent("action-sheet") +
    r.resolveComponent("FootPrint") +
    r.resolveComponent("protocols") +
    r.resolveComponent("mp-dialog") +
    r.resolveComponent("IdCardForm") +
    r.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/BrokerLogo/BrokerLogo.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var I = r._export_sfc(S, [
  [
    "render",
    function (e, t, o, n, c, i) {
      return r.e(
        { a: e.rootFontSize, b: n.accountMode === n.E_ACCOUNT_MODE.MARGIN },
        n.accountMode === n.E_ACCOUNT_MODE.MARGIN
          ? { c: r.t(n.dealer) }
          : r.e(
              { d: !i.isSwitchMode },
              i.isSwitchMode
                ? { f: r.t(n.dealer) }
                : {
                    e: r.t(
                      n.headerTip ||
                        "请输入你的".concat(n.dealer, "账户资料，完成登录")
                    ),
                  },
              {
                g: n.headerTip ? 1 : "",
                h: r.o(function () {
                  return (
                    n.onShowBuildVerClick &&
                    n.onShowBuildVerClick.apply(n, arguments)
                  );
                }),
              }
            ),
        {
          i: i.accountPlaceholder,
          j: i.accountMaxLength,
          k: i.accountDisabled,
          l: r.o([
            function (e) {
              return (n.formData.account = e.detail.value);
            },
            function () {
              return i.onAccountInput && i.onAccountInput.apply(i, arguments);
            },
          ]),
          m: r.o(function () {
            return i.blurAccount && i.blurAccount.apply(i, arguments);
          }),
          n: n.formData.account,
          o: i.accountDisabled,
        },
        i.accountDisabled
          ? {
              p: r.o(function () {
                return i.focusAccount && i.focusAccount.apply(i, arguments);
              }),
            }
          : {},
        { q: !i.accountsLen && i.isFindAccAvailable },
        !i.accountsLen && i.isFindAccAvailable
          ? {
              r: r.t(i.findAccountCalled),
              s: r.o(function () {
                return i.findAccount && i.findAccount.apply(i, arguments);
              }),
            }
          : i.accountsLen > 1
          ? {
              v: r.o(function () {
                return i.focusAccount && i.focusAccount.apply(i, arguments);
              }),
            }
          : {},
        {
          t: i.accountsLen > 1,
          w: r.p({
            title:
              n.accountMode === n.E_ACCOUNT_MODE.MARGIN
                ? "信用账户"
                : "证券账户",
          }),
          x: !n.enableComplexPassword,
        },
        n.enableComplexPassword
          ? {
              D: r.sr("customPwdInput", "8010c15f-5,8010c15f-4"),
              E: r.o(n.onCustomPwdInput),
              F: r.o(n.onCustomPwdConfirm),
              G: r.p({
                "simple-mode": !0,
                value: n.formData.pwd,
                placeholder: "请输入" + i.passwordCalled,
                "max-length": 18,
                "password-mode": n.isPasswordHide,
              }),
            }
          : {
              y: "输入6位" + i.passwordCalled,
              z: n.isPasswordHide,
              A: r.o([
                function (e) {
                  return (n.formData.pwd = e.detail.value);
                },
                function () {
                  return i.pwdInput && i.pwdInput.apply(i, arguments);
                },
              ]),
              B: r.o(function (t) {
                return e.$stat.click("trade.apply.bindid.passwd_enter");
              }),
              C: n.formData.pwd,
            },
        {
          H: r.n(n.isPasswordHide ? "icon-eye-close" : "icon-eye-open"),
          I: r.o(function () {
            return n.handlePasswdHide && n.handlePasswdHide.apply(n, arguments);
          }),
          J: r.p({ title: "交易密码", border: !i.isSwitchMode }),
          K: r.p({ border: !1 }),
          L: !i.isSwitchMode,
        },
        i.isSwitchMode
          ? {}
          : r.e(
              {
                M: n.selectedAccount.phoneChangedisabled,
                N: r.o(function (t) {
                  return e.$stat.click("trade.apply.bindid.phone_enter");
                }),
                O: n.formData.phone,
                P: r.o(function (e) {
                  return (n.formData.phone = e.detail.value);
                }),
                Q: r.p({ title: "手机号码" }),
                R: i.captchaLen,
                S: !i.isBindPhoneCorrect,
                T: r.o(function (t) {
                  return e.$stat.click("trade.apply.bindid.code_enter");
                }),
                U: n.formData.code,
                V: r.o(function (e) {
                  return (n.formData.code = e.detail.value);
                }),
                W: r.t(n.bindCountTime ? n.bindCountTime + "秒" : "获取验证码"),
                X: !!n.bindCountTime,
                Y: r.o(function (e) {
                  return i.sendSms("bind");
                }),
                Z: r.p({ title: "验证码", border: !1 }),
                aa: r.p({ border: !1 }),
                ab: !n.isPCWeixin,
              },
              n.isPCWeixin ? {} : { ac: r.o(n.handleClickFaceCheck) }
            ),
        { ad: n.hasProtocol },
        n.hasProtocol
          ? {
              ae: n.simpleMode ? "#e63535" : "#3077ec",
              af: n.isProtocolCheck,
              ag: r.o(function (e) {
                return (n.isProtocolCheck = !n.isProtocolCheck);
              }),
              ah: r.n(
                n.simpleMode
                  ? "all-protocol-text-simple-mode"
                  : "all-protocol-text"
              ),
              ai: r.o(function () {
                return i.showProtocols && i.showProtocols.apply(i, arguments);
              }),
              aj: r.o(function (e) {
                return (n.isProtocolCheck = !n.isProtocolCheck);
              }),
            }
          : {},
        {
          ak: r.t(n.accountMode === n.E_ACCOUNT_MODE.MARGIN ? "信用账户" : ""),
          al: r.o(function () {
            return i.submitBind && i.submitBind.apply(i, arguments);
          }),
          am: r.o(function () {
            return i.forgetPwd && i.forgetPwd.apply(i, arguments);
          }),
          an: n.buildverClickCount >= 3,
        },
        n.buildverClickCount >= 3 ? { ao: r.t(n.buildVer) } : {},
        { ap: n.accounts.length > 1 },
        n.accounts.length > 1
          ? {
              aq: r.f(n.accounts, function (e, t, o) {
                return r.e(
                  { a: r.t(e.account), b: e.account === n.formData.account },
                  (e.account, n.formData.account, {}),
                  {
                    c: e.account,
                    d: r.o(function (t) {
                      return i.selectAccount(e);
                    }, e.account),
                  }
                );
              }),
              ar: r.o(function (e) {
                return (n.showStatus.chooseAccount = e);
              }),
              as: r.p({
                value: n.showStatus.chooseAccount,
                title: "请选择".concat(i.accountCalled),
                "picker-style": !0,
                "close-button": !0,
              }),
            }
          : {},
        {
          at: r.p({ fixed: !0, "focus-event": !n.isPCWeixin }),
          av: r.o(function (e) {
            return (n.isProtocolCheck = !0);
          }),
          aw: r.o(function (e) {
            return n.setProtocolShow(!1);
          }),
          ax: r.o(function (e) {
            return n.setProtocolShow(!1);
          }),
          ay: r.o(n.viewProtocol),
          az: r.p({ protocols: n.protocolList, visible: n.isProtocolShow }),
          aA: r.p({ id: "mp-dialog" }),
          aB: r.sr("idcardForm", "8010c15f-14,8010c15f-0"),
          aC: r.sr("#global-wrap", "8010c15f-0"),
          aD: r.p({
            id: "global-wrap",
            filePath: "/account/bind",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-8010c15f"],
]);
wx.createPage(I);
