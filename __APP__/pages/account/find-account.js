var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../common/vendor.js"),
  o = require("../../cgi/bind.js"),
  c = require("../../config/enum.js");
require("../../service/broker.js");
var a = require("../../model/common/useSms.js"),
  i = require("../../common/components/Dialog/index.js"),
  s = require("../../components/FaceCheck/useForgetMobile.js"),
  u = require("../../utils/accountHelper.js"),
  l = require("../../model/account/useFindAccountPrivacy.js"),
  p = require("../../service/stat/mp-weixin.js"),
  d = require("../../mixin/platforms/index.js"),
  m = require("../../config/broker/11100/index.js"),
  h = {
    components: {
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      StCellGroup: function () {
        return "../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../common/components/Cell/index.js";
      },
      ForgetMobile: function () {
        return "../../components/FaceCheck/ForgetMobile.js";
      },
      ProtocolCheck: function () {
        return "../../components/FaceCheck/ProtocolCheck.js";
      },
      CFTPrivacyPopup: function () {
        return "./components/CFTPrivacyPopup.js";
      },
      ServerBroker: function () {
        return "../../components/ServerBroker/ServerBroker.js";
      },
    },
    mixins: [d.pluginMixins],
    setup: function () {
      var d = r.getCurrentInstance().proxy,
        h = r.ref(d.$route.query.mode || c.E_ACCOUNT_MODE.NORMAL),
        f = r.ref(!1),
        v = r.reactive({ name: "", id: "", phone: "", code: "" }),
        k = a.useSms(),
        C = k.isSend,
        b = k.countTimeText,
        g = k.countTimmer,
        x = k.sendSms;
      function _(e) {
        var n = (function (e) {
          if (!v.name) return "用户姓名不能为空";
          if (!v.id) return "身份证号码不能为空";
          if (!c.REGEXP_VALID_ID.test(v.id)) return "身份证号码不合法";
          if (!(null == e ? void 0 : e.noCheckMobile)) {
            if (!v.phone) return "手机号码不能为空";
            if (!c.REGX.MOBILE.test(v.phone)) return "手机号码不合法";
            if (!v.code) return "验证码不能为空";
            if (!a.CODE_REG.test(v.code)) return "验证码错误";
          }
          return "";
        })(e);
        return !n || (i.Dialog({ message: n, showCancel: !1 }), !1);
      }
      function S() {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = t(
          e().mark(function t() {
            var r,
              c,
              a,
              i = arguments;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = i.length > 0 && void 0 !== i[0] ? i[0] : {}),
                        (e.prev = 1),
                        (e.next = 4),
                        o.bindCgi.requestGetAccount(
                          n(n({}, r), {}, { mode: h.value })
                        )
                      );
                    case 4:
                      if (
                        (c = e.sent).account_list &&
                        0 !== c.account_list.length &&
                        c.account_list[0].fundacct
                      ) {
                        e.next = 7;
                        break;
                      }
                      throw {
                        retcode: "no_account_find",
                        retmsg: "没查询到你的".concat(
                          m.brokerConfig.bind.accountCalled
                        ),
                      };
                    case 7:
                      (a = c.account_list.map(function (e) {
                        return {
                          account: e.fundacct,
                          hasBind: e.hasbind,
                          smsCheck: e.smscheck,
                          phone: e.mobile,
                          isspecialvarify: e.isspecialvarify,
                        };
                      })),
                        u.setStorageAccount(a),
                        d.$router.back(),
                        (e.next = 14);
                      break;
                    case 11:
                      throw ((e.prev = 11), (e.t0 = e.catch(1)), e.t0);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[1, 11]]
            );
          })
        )).apply(this, arguments);
      }
      var w,
        D = !1,
        j = r.computed(function () {
          return !!b.value || !v.phone;
        }),
        q = r.computed(function () {
          return !!(v.name && v.id && (f.value || (v.phone && v.code)));
        }),
        A = s.useForgetMobile({
          scene: "0",
          handleSuccess:
            ((w = t(
              e().mark(function t() {
                var o, c;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            r.index.showLoading({
                              title: "正在处理",
                              mask: !0,
                            }),
                            (e.prev = 1),
                            (o = v.name),
                            (c = v.id),
                            (e.next = 5),
                            S(n({ name: o, id: c }, A.getFaceCheckParams()))
                          );
                        case 5:
                          r.index.hideLoading(),
                            A.clearFaceCheckResult(),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            r.index.hideLoading(),
                            i.Dialog({
                              message: e.t0.retmsg || "找回账号失败",
                            });
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })
            )),
            function () {
              return w.apply(this, arguments);
            }),
        });
      r.provide("forgetMobile", A);
      var F,
        P,
        T = l.useFindAccountPrivacy(),
        M = T.isFuncOn,
        E = T.isPopupShow,
        G = T.init,
        L = T.pullCftInfo;
      function O() {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = t(
          e().mark(function n() {
            var t,
              r,
              o,
              c,
              a,
              s = arguments;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t =
                        s.length > 0 && void 0 !== s[0]
                          ? s[0]
                          : { isShowErr: !0 }),
                      (r = t.isShowErr),
                      (e.next = 3),
                      L()
                    );
                  case 3:
                    (o = e.sent),
                      (c = o.success),
                      (a = o.data),
                      c
                        ? ((v.id = a.cred_id || ""),
                          (v.name = a.cred_name || ""))
                        : r &&
                          i.Dialog({
                            message: "授权书签署失败，请您手动输入身份信息",
                          });
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )).apply(this, arguments);
      }
      return (
        r.onMounted(
          t(
            e().mark(function n() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((f.value =
                          "1" === d.$route.query.smscheck &&
                          !!d.$route.query.phone),
                        f.value && (v.phone = d.$route.query.phone),
                        !M.value)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 3), G();
                    case 3:
                      if (((e.t0 = e.sent), !e.t0)) {
                        e.next = 6;
                        break;
                      }
                      O({ isShowErr: !1 });
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          )
        ),
        r.onBeforeUnmount(function () {
          null !== g && g.clear();
        }),
        {
          nextEnabled: q,
          smsDisabled: j,
          countTimeText: b,
          countTimmer: g,
          captchaLen: m.brokerConfig.bind.captchaLen,
          getAccountData: v,
          accountMode: h,
          isSend: C,
          sendSms: x,
          requestGetAccount: S,
          handleNext:
            ((P = t(
              e().mark(function n() {
                var c, a, s, u, l, d;
                return e().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (p.stat.click(
                              "trade.find_account.next_click",
                              void 0,
                              void 0,
                              { has_sms_check: f.value ? "1" : "0" }
                            ),
                            _({ noCheckMobile: f.value }))
                          ) {
                            n.next = 2;
                            break;
                          }
                          return n.abrupt("return");
                        case 2:
                          if (!D) {
                            n.next = 4;
                            break;
                          }
                          return n.abrupt("return");
                        case 4:
                          if (
                            ((D = !0),
                            (c = v.name),
                            (a = v.id),
                            (s = v.phone),
                            (u = v.code),
                            (n.prev = 6),
                            f.value)
                          ) {
                            n.next = 12;
                            break;
                          }
                          return (
                            (n.next = 10),
                            (function () {
                              var n = t(
                                e().mark(function n(t) {
                                  var r, c, a, i, s;
                                  return e().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (r = t.phone),
                                            (c = t.code),
                                            (a = t.action),
                                            (i = t.hasbind),
                                            (e.next = 3),
                                            o.bindCgi.requestSmsCheck(a, {
                                              phone: r,
                                              code: c,
                                              hasbind: i,
                                            })
                                          );
                                        case 3:
                                          return (
                                            (s = e.sent),
                                            e.abrupt(
                                              "return",
                                              (s.xid_session, s)
                                            )
                                          );
                                        case 5:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, n);
                                })
                              );
                              return function (e) {
                                return n.apply(this, arguments);
                              };
                            })()({
                              action: o.SMS_ACTION.GET_ACCOUNT,
                              phone: s,
                              code: u,
                            })
                          );
                        case 10:
                          (d = n.sent), (l = d.xid_session);
                        case 12:
                          return (
                            r.index.showLoading({
                              title: "正在处理",
                              mask: !0,
                            }),
                            (n.next = 15),
                            S({ name: c, id: a, phone: s, xidSession: l })
                          );
                        case 15:
                          (D = !1), (n.next = 21);
                          break;
                        case 18:
                          (n.prev = 18),
                            (n.t0 = n.catch(6)),
                            (D = !1),
                            r.index.hideLoading(),
                            null !== g && g.clear(),
                            i.Dialog({
                              message: n.t0.retmsg || "找回账号失败",
                            });
                        case 21:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[6, 18]]
                );
              })
            )),
            function () {
              return P.apply(this, arguments);
            }),
          handleSms: function () {
            x({
              action: o.SMS_ACTION.GET_ACCOUNT,
              phone: v.phone,
              brokerCaptchaCode: "",
              isspecialvarify: "",
            });
          },
          handleClickFaceCheck: function () {
            _({ noCheckMobile: !0 }) &&
              (!d.$refs.protocolCheck || d.$refs.protocolCheck.isCheck()
                ? (A.setFormData({ idcard: v.id, name: v.name }),
                  A.handleFaceCheck())
                : i.Dialog({ message: "请同意签署协议", showCancel: !1 }));
          },
          hasSmsCheck: f,
          isCftPopupShow: E,
          confirmPrivacy:
            ((F = t(
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), O();
                      case 2:
                        p.stat.click(
                          "trade.find_account.cft_privacy_confirm_click"
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            )),
            function () {
              return F.apply(this, arguments);
            }),
          rejectPrivacy: function () {
            (E.value = !1),
              p.stat.click("trade.find_account.cft_privacy_reject_click");
          },
        }
      );
    },
  };
Array ||
  (
    r.resolveComponent("st-cell") +
    r.resolveComponent("st-cell-group") +
    r.resolveComponent("ForgetMobile") +
    r.resolveComponent("ProtocolCheck") +
    r.resolveComponent("server-broker") +
    r.resolveComponent("mp-dialog") +
    r.resolveComponent("CFTPrivacyPopup") +
    r.resolveComponent("GlobalWrap")
  )(),
  Math;
var f = r._export_sfc(h, [
  [
    "render",
    function (e, n, t, o, c, a) {
      return r.e(
        {
          a: e.rootFontSize,
          b: o.getAccountData.name,
          c: r.o(function (e) {
            return (o.getAccountData.name = e.detail.value);
          }),
          d: r.p({ title: "姓名" }),
          e: o.getAccountData.id,
          f: r.o(function (e) {
            return (o.getAccountData.id = e.detail.value);
          }),
          g: r.p({ title: "身份证号" }),
          h: r.p({ "border-top": !1 }),
          i: !o.hasSmsCheck,
        },
        o.hasSmsCheck
          ? {}
          : {
              j: o.getAccountData.phone,
              k: r.o(function (e) {
                return (o.getAccountData.phone = e.detail.value);
              }),
              l: r.p({ title: "手机号码" }),
              m: "请输入".concat(o.captchaLen, "位验证码"),
              n: o.captchaLen,
              o: o.getAccountData.code,
              p: r.o(function (e) {
                return (o.getAccountData.code = e.detail.value);
              }),
              q: r.t(o.countTimeText ? o.countTimeText + "秒" : "获取验证码"),
              r: o.smsDisabled,
              s: r.o(function () {
                return o.handleSms && o.handleSms.apply(o, arguments);
              }),
              t: r.p({ title: "验证码 " }),
              v: r.p({ "border-top": !1 }),
              w: r.o(o.handleClickFaceCheck),
              x: r.sr("protocolCheck", "25ba1d48-8,25ba1d48-0"),
            },
        {
          y: !o.nextEnabled,
          z: r.o(function () {
            return o.handleNext && o.handleNext.apply(o, arguments);
          }),
          A: r.p({ fixed: !0 }),
          B: r.p({ id: "mp-dialog" }),
          C: r.o(o.confirmPrivacy),
          D: r.o(o.rejectPrivacy),
          E: r.p({ visible: o.isCftPopupShow }),
          F: r.sr("#global-wrap", "25ba1d48-0"),
          G: r.p({
            id: "global-wrap",
            filePath: "/account/find-account",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-25ba1d48"],
]);
wx.createPage(f);
