var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/slicedToArray");
require("../../app.js");
var r = require("../../common/vendor.js");
require("../../service/broker.js");
var c = require("../../service/stat/mp-weixin.js"),
  i = require("../../common/components/Dialog/index.js"),
  a = require("../../stores/app/useMode.js"),
  s = require("../../model/bind/useAccount.js"),
  u = require("../../model/bind/useProtocol.js");
require("../../service/sdk/lib/api.js");
var l = require("../../service/sdk/platform/mp-weixin.js"),
  d = require("../../config/enum.js"),
  p = require("../../mixin/platforms/index.js"),
  h = require("../../config/broker/10900/index.js"),
  m = {
    mixins: [p.pluginMixins],
    components: {
      StCellGroup: function () {
        return "../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../common/components/Cell/index.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      SelectAccountSheet: function () {
        return "./components/bind/SelectAccountSheet.js";
      },
      Protocols: function () {
        return "../../bizs/apply/Protocols.js";
      },
      BottomNav: function () {
        return "./components/bind/BottomNav.js";
      },
      ServerBroker: function () {
        return "../../components/ServerBroker/ServerBroker.js";
      },
    },
    setup: function () {
      var p,
        m = null == (p = r.getCurrentInstance()) ? void 0 : p.proxy,
        f = s.useAccount(),
        v = f.bindData,
        b = f.initBindData,
        g = f.accountCalled,
        C = f.accountMaxLength,
        w = f.accountPlaceholder,
        P = f.accounts,
        k = f.accountsLength,
        S = f.isPasswordHide,
        x = f.onPasswordHideClick,
        A = f.clearInvalidAccount,
        D = f.clearInvalidPassword,
        j = f.isAccountSheetShow,
        q = f.setAccountSheetShow,
        y = f.setSelectedAccountData,
        L = f.setCustomAccount,
        M = f.checkData,
        _ = f.sendBind,
        B = u.useProtocol(),
        N = B.protocolList,
        I = B.hasProtocol,
        F = B.isProtocolCheck,
        T = B.isProtocolShow,
        H = B.getProtocolList,
        E = B.viewProtocol,
        O = B.signProtocol,
        G = B.setProtocolShow,
        z = a.useModeStore(),
        R = r.storeToRefs(z).simpleMode,
        U = !1;
      function $(e) {
        return new Promise(function (o, r) {
          var c,
            a,
            s = n(e, 2),
            u = s[0],
            d = s[1];
          if (u) return o();
          var p = h.brokerConfig.base.tel;
          "bind_get_bankcard_fail" === d.retcode &&
            (a = {
              showCancelButton: !!p,
              cancelButtonText: "我知道了",
              confirmButtonText: p ? "联系券商" : "我知道了",
              onConfirm: function () {
                p && l.sdk.makePhoneCall(String(p).replace(/-/g, ""));
              },
            }),
            d.showDialog ||
              i.Dialog(
                t(
                  { message: d.retmsg || "系统繁忙 请稍后再试" },
                  null !== (c = a) && void 0 !== c ? c : {}
                )
              ),
            r(d || new Error("绑户失败"));
        });
      }
      r.onMounted(function () {
        b(m.$route.query), H();
      });
      var J,
        K = r.ref(!1);
      return {
        bindData: v,
        initBindData: b,
        accounts: P,
        accountsLength: k,
        setCustomAccount: L,
        isAccountSheetShow: j,
        setAccountSheetShow: q,
        selectAccount: function (e) {
          y(e),
            setTimeout(function () {
              q(!1);
            }, 300);
        },
        isPasswordHide: S,
        onPasswordHideClick: x,
        accountMaxLength: C,
        accountPlaceholder: w,
        clearInvalidAccount: A,
        clearInvalidPassword: D,
        protocolList: N,
        hasProtocol: I,
        isProtocolCheck: F,
        setProtocolShow: G,
        isProtocolShow: T,
        viewProtocol: E,
        onNextClick:
          ((J = o(
            e().mark(function t() {
              var a, s, u, l, d, p;
              return e().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (c.stat.click("trade.ts_bind.account_next_click"),
                          !I.value || F.value)
                        ) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          (i.Dialog({ message: "请同意签署协议" }), !1)
                        );
                      case 2:
                        if (
                          ((s = M()), (u = n(s, 2)), (l = u[0]), (d = u[1]), l)
                        ) {
                          t.next = 5;
                          break;
                        }
                        return t.abrupt(
                          "return",
                          (i.Dialog({
                            message:
                              null !== (a = null == d ? void 0 : d.retmsg) &&
                              void 0 !== a
                                ? a
                                : "填写信息有误 请确认",
                          }),
                          !1)
                        );
                      case 5:
                        if (!U) {
                          t.next = 7;
                          break;
                        }
                        return t.abrupt("return");
                      case 7:
                        return (
                          (U = !0),
                          r.index.showLoading({ title: "登录中..." }),
                          (p = !0),
                          (t.prev = 9),
                          (t.t0 = $),
                          (t.next = 13),
                          o(
                            e().mark(function o() {
                              var t, c, i, a, s, u;
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        !I.value ||
                                        !(null ==
                                        (c =
                                          null == (t = h.brokerConfig.bind)
                                            ? void 0
                                            : t.protocol)
                                          ? void 0
                                          : c.needSign)
                                      ) {
                                        e.next = 8;
                                        break;
                                      }
                                      return (
                                        (i = { fund_account: v.account }),
                                        (e.next = 4),
                                        r.to(O(i))
                                      );
                                    case 4:
                                      return (
                                        (a = e.sent),
                                        (s = n(a, 1)),
                                        (u = s[0]),
                                        e.abrupt(
                                          "return",
                                          u ? [!1, { showDialog: !1 }] : [!0]
                                        )
                                      );
                                    case 8:
                                      return e.abrupt("return", [!0]);
                                    case 9:
                                    case "end":
                                      return e.stop();
                                  }
                              }, o);
                            })
                          )()
                        );
                      case 13:
                        return (t.t1 = t.sent), (t.next = 16), (0, t.t0)(t.t1);
                      case 16:
                        return (t.t2 = $), (t.next = 19), _();
                      case 19:
                        return (t.t3 = t.sent), (t.next = 22), (0, t.t2)(t.t3);
                      case 22:
                        t.next = 27;
                        break;
                      case 24:
                        (t.prev = 24), (t.t4 = t.catch(9)), (p = !1);
                      case 27:
                        return (
                          (t.prev = 27),
                          r.index.hideLoading(),
                          (U = !1),
                          t.finish(27)
                        );
                      case 30:
                        p &&
                          i.Dialog({
                            message: "你已成功登录".concat(
                              h.brokerConfig.base.name,
                              "账户"
                            ),
                            onConfirm: function () {
                              r.index.$host.onBind();
                            },
                          });
                      case 31:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[9, 24, 27, 30]]
              );
            })
          )),
          function () {
            return J.apply(this, arguments);
          }),
        E_ACCOUNT_MODE: d.E_ACCOUNT_MODE,
        findFlag: K,
        setFindFlag: function (e) {
          K.value = e;
        },
        simpleMode: R,
        accountCalled: g,
        brokerName: h.brokerConfig.base.name,
      };
    },
    onShow: function () {
      this.findFlag &&
        (this.setFindFlag(!1), this.initBindData(this.$route.query));
    },
  };
Array ||
  (
    r.resolveComponent("st-cell") +
    r.resolveComponent("st-cell-group") +
    r.resolveComponent("BottomNav") +
    r.resolveComponent("server-broker") +
    r.resolveComponent("mp-dialog") +
    r.resolveComponent("SelectAccountSheet") +
    r.resolveComponent("protocols") +
    r.resolveComponent("GlobalWrap")
  )(),
  Math;
var f = r._export_sfc(m, [
  [
    "render",
    function (e, o, t, n, c, i) {
      return r.e(
        {
          a: e.rootFontSize,
          b: r.t(n.brokerName),
          c: n.accountPlaceholder,
          d: n.accountMaxLength,
          e: r.o([
            function (e) {
              return (n.bindData.account = e.detail.value);
            },
            function () {
              return (
                n.clearInvalidAccount &&
                n.clearInvalidAccount.apply(n, arguments)
              );
            },
          ]),
          f: r.o(function () {
            return n.setCustomAccount && n.setCustomAccount.apply(n, arguments);
          }),
          g: n.bindData.account,
          h: n.accountsLength > 1,
        },
        n.accountsLength > 1
          ? {
              i: r.o(function (e) {
                return n.setAccountSheetShow(!0);
              }),
            }
          : {},
        {
          j: r.p({ title: "证券账户" }),
          k: n.isPasswordHide,
          l: r.o([
            function (e) {
              return (n.bindData.password = e.detail.value);
            },
            function () {
              return (
                n.clearInvalidPassword &&
                n.clearInvalidPassword.apply(n, arguments)
              );
            },
          ]),
          m: n.bindData.password,
          n: r.n(n.isPasswordHide ? "icon-eye-close" : "icon-eye-open"),
          o: r.o(function () {
            return (
              n.onPasswordHideClick && n.onPasswordHideClick.apply(n, arguments)
            );
          }),
          p: r.p({ title: "交易密码", border: !1 }),
          q: r.p({ "border-top": !1 }),
          r: n.hasProtocol,
        },
        n.hasProtocol
          ? {
              s: n.simpleMode ? "#e63535" : "#3077ec",
              t: n.isProtocolCheck,
              v: r.o(function (e) {
                return (n.isProtocolCheck = !n.isProtocolCheck);
              }),
              w: r.o(function (e) {
                return n.setProtocolShow(!0);
              }),
              x: r.o(function (e) {
                return (n.isProtocolCheck = !n.isProtocolCheck);
              }),
            }
          : {},
        {
          y: r.o(function () {
            return n.onNextClick && n.onNextClick.apply(n, arguments);
          }),
          z: r.o(function (e) {
            return n.setFindFlag(!0);
          }),
          A: r.p({
            type: "ts-bind",
            "current-account": n.bindData.account,
            "account-called": n.accountCalled,
            "account-mode": n.E_ACCOUNT_MODE.NORMAL,
          }),
          B: r.p({ fixed: !0 }),
          C: r.p({ id: "mp-dialog" }),
          D: n.accountsLength > 1,
        },
        n.accountsLength > 1
          ? {
              E: r.o(n.selectAccount),
              F: r.o(function (e) {
                return n.setAccountSheetShow(!1);
              }),
              G: r.p({
                visible: n.isAccountSheetShow,
                "current-account": n.bindData.account,
                accounts: n.accounts,
                "account-called": n.accountCalled,
              }),
            }
          : {},
        {
          H: r.o(function (e) {
            return (n.isProtocolCheck = !0);
          }),
          I: r.o(function (e) {
            return n.setProtocolShow(!1);
          }),
          J: r.o(function (e) {
            return n.setProtocolShow(!1);
          }),
          K: r.o(n.viewProtocol),
          L: r.p({ protocols: n.protocolList, visible: n.isProtocolShow }),
          M: r.sr("#global-wrap", "86ed79b8-0"),
          N: r.p({
            id: "global-wrap",
            filePath: "/account/ts-bind-account",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-86ed79b8"],
]);
wx.createPage(f);
