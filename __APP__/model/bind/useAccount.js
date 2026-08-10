var e = require("../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../common/vendor.js");
require("../../service/broker.js");
var u = require("../../utils/passwd.js"),
  c = require("../../cgi/bind.js"),
  a = require("../../config/enum.js"),
  o = require("../../utils/accountHelper.js"),
  i = require("../../utils/crypt/index.js"),
  s = require("../../utils/getPlatform.js"),
  d = require("../../config/broker/10900/index.js");
exports.useAccount = function () {
  var l,
    p,
    f = r.reactive({ account: "", password: "", phone: "", xidSession: "" }),
    v = d.brokerConfig.bind.accountCalled,
    m = d.brokerConfig.bind.accountInput || {},
    g = r.computed(function () {
      return m.maxLength;
    }),
    h = r.computed(function () {
      return m.placeholder || "请输入".concat(v);
    }),
    b = r.ref([]),
    x = r.computed(function () {
      return b.value.filter(function (e) {
        return !!e.account;
      }).length;
    }),
    w = "",
    k = r.ref(!1),
    q = r.ref(!0);
  function _(e) {
    var n, t;
    (f.account = null !== (n = e.account) && void 0 !== n ? n : ""),
      (f.phone = null !== (t = e.phone) && void 0 !== t ? t : ""),
      (w = f.account);
  }
  return {
    bindData: f,
    initBindData:
      ((p = t(
        n().mark(function e() {
          var u,
            i,
            s,
            d,
            l,
            p,
            f = arguments;
          return n().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (s = f.length > 0 && void 0 !== f[0] ? f[0] : {}),
                    (e.next = 3),
                    t(
                      n().mark(function e() {
                        var t;
                        return n().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    c.cgi.requestGetAccount({
                                      mode: a.E_ACCOUNT_MODE.NORMAL,
                                    })
                                  );
                                case 3:
                                  if (((e.t0 = e.sent.account_list), e.t0)) {
                                    e.next = 6;
                                    break;
                                  }
                                  e.t0 = [];
                                case 6:
                                  return (
                                    (t = e.t0
                                      .filter(function (e) {
                                        return e.fundacct;
                                      })
                                      .map(function (e) {
                                        return {
                                          account: e.fundacct,
                                          phone: e.mobile,
                                        };
                                      })),
                                    e.abrupt("return", ((b.value = t), t))
                                  );
                                case 10:
                                  return (
                                    (e.prev = 10),
                                    (e.t1 = e.catch(0)),
                                    e.abrupt("return", [])
                                  );
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 10]]
                        );
                      })
                    )()
                  );
                case 3:
                  (d = e.sent),
                    (l = (function (e) {
                      var n = e.accounts,
                        t = void 0 === n ? "" : n,
                        r = e.phone,
                        u = void 0 === r ? "" : r,
                        c = e.xid_session,
                        a = void 0 === c ? "" : c,
                        o = decodeURIComponent(t),
                        i = decodeURIComponent(u),
                        s = decodeURIComponent(a);
                      return {
                        accounts: o
                          .split(",")
                          .filter(function (e) {
                            return e;
                          })
                          .map(function (e) {
                            return { account: e, phone: u || "" };
                          }),
                        phone: i,
                        xidSession: s,
                      };
                    })(s)),
                    (p = o
                      .getStorageAccount()
                      .filter(function (e) {
                        return e;
                      })
                      .map(function (e) {
                        return r.pick(e, ["account", "phone"]);
                      })),
                    (l.phone = null !== (u = l.phone) && void 0 !== u ? u : ""),
                    (l.xidSession =
                      null !== (i = l.xidSession) && void 0 !== i ? i : ""),
                    d.length ||
                      (l.accounts.length
                        ? (b.value = l.accounts)
                        : p.length && (b.value = p)),
                    b.value.length && _(b.value[0]);
                case 7:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return p.apply(this, arguments);
      }),
    accountCalled: v,
    accountMaxLength: g,
    accountPlaceholder: h,
    accounts: b,
    accountsLength: x,
    isPasswordHide: q,
    onPasswordHideClick: function () {
      q.value = !q.value;
    },
    clearInvalidAccount: function (e) {
      var n = e.detail.value,
        t = g.value;
      if (!t || n.length <= t) return n;
      var u = n.slice(0, t);
      return (
        r.nextTick$1(function () {
          f.account = u;
        }),
        u
      );
    },
    clearInvalidPassword: function (e) {
      var n = e.detail.value;
      u.isValidNumberPassword(n) ||
        r.nextTick$1(function () {
          f.password = u.fixInvalidNumberPassword(n);
        });
    },
    isAccountSheetShow: k,
    setAccountSheetShow: function (e) {
      k.value = e;
    },
    setSelectedAccountData: _,
    setCustomAccount: function (e) {
      var n = e.detail.value;
      if (n !== w) {
        w = n;
        var t = b.value.findIndex(function (e) {
          return e.account === n;
        });
        -1 === t ? (f.phone = "") : _(b.value[t]);
      }
    },
    checkData: function () {
      return f.account
        ? g.value && f.account.length > g.value
          ? [
              !1,
              { retmsg: m.errorTips || "请输入".concat(g.value, "位资金帐号") },
            ]
          : u.isValidNumberPassword(f.password, { length: 6 })
          ? [!0]
          : [!1, { retmsg: "交易密码不正确" }]
        : [!1, { retmsg: "证券账户不能为空" }];
    },
    sendBind:
      ((l = t(
        n().mark(function t() {
          var u, o, d, l, p, v, m, g, h, b, x, w, k, q, _, A, C, P;
          return n().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (o = s.getPlatform()),
                    (d = o.isWeixin),
                    (l = o.isZxg),
                    (p = f.account),
                    (v = f.password),
                    f.phone,
                    (n.next = 8),
                    r.to(i.cryptPasswd(v))
                  );
                case 8:
                  if (
                    ((m = n.sent),
                    (g = e(m, 2)),
                    (h = g[0]),
                    (b = g[1]),
                    (x = b.encodePwd),
                    (w = b.encodePwdExtra),
                    !h)
                  ) {
                    n.next = 16;
                    break;
                  }
                  return n.abrupt("return", [
                    !1,
                    {
                      retmsg:
                        null !== (u = h.retmsg) && void 0 !== u
                          ? u
                          : "加密失败 请稍后再试",
                    },
                  ]);
                case 16:
                  return (
                    (k = ""),
                    d && (k = "1"),
                    (q = {
                      account: p,
                      xid_session: "",
                      passwd: x,
                      password: x,
                      password_front_and_broker: w,
                      mode: a.E_ACCOUNT_MODE.NORMAL,
                      scene: k,
                    }),
                    (_ = l ? c.cgi.requestZxgBind(q) : c.cgi.requestBind(q)),
                    (n.next = 22),
                    r.to(_)
                  );
                case 22:
                  if (((A = n.sent), (C = e(A, 1)), !(P = C[0]))) {
                    n.next = 34;
                    break;
                  }
                  (n.t0 = +P.retcode),
                    (n.next =
                      51088850 === n.t0
                        ? 29
                        : 51091501 === n.t0 || 51079708 === n.t0
                        ? 30
                        : 51091406 === n.t0
                        ? 31
                        : 317610017 === n.t0
                        ? 32
                        : 33);
                  break;
                case 29:
                  return n.abrupt("return", [
                    !1,
                    {
                      retmsg: l
                        ? "仅支持实名认证用户登录，请先进行实名认证"
                        : "仅支持微信支付实名认证用户登录，请先通过微信支付绑定银行卡进行实名认证",
                    },
                  ]);
                case 30:
                  return n.abrupt("return", [
                    !1,
                    { retmsg: "验证码已过期，请重新验证手机号" },
                  ]);
                case 31:
                  return n.abrupt("return", [
                    !1,
                    {
                      retmsg: "交易密码输入错误，还有".concat(
                        P.rest_num || "有限",
                        "次重试机会"
                      ),
                    },
                  ]);
                case 32:
                  return n.abrupt("return", [
                    !1,
                    {
                      retcode: "bind_get_bankcard_fail",
                      retmsg: P.retmsg || "系统繁忙 请稍后再试",
                    },
                  ]);
                case 33:
                  return n.abrupt("return", [
                    !1,
                    { retmsg: P.retmsg || "系统繁忙 请稍后再试" },
                  ]);
                case 34:
                  return n.abrupt("return", [!0]);
                case 35:
                case "end":
                  return n.stop();
              }
          }, t);
        })
      )),
      function () {
        return l.apply(this, arguments);
      }),
  };
};
