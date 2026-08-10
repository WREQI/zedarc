var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  t = require("../../../utils/navigator.js"),
  o = require("../../../utils/getPlatform.js"),
  i = require("../../../config/enum.js"),
  a = require("../../../common/components/Dialog/index.js"),
  c = require("../../../components/Password/index.js");
require("../../../service/broker.js");
var s = require("../../../stores/user/useUserinfo.js"),
  u = require("../../../model/trade/useConditionEntry.js"),
  l = require("../../../model/account/usePersonal.js"),
  d = require("../../../service/connect/index.js"),
  p = require("../../../adapter/router.js"),
  f = require("../../../config/mpConfig.js"),
  m = require("../../../service/navigateMp.js"),
  h = require("../../../config/broker/11100/index.js"),
  v = {
    name: "ChangeAccount",
    components: {
      ActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
    },
    setup: function () {
      var v = r.ref(!1),
        g = r.ref(""),
        w = o.getPlatform(),
        b = w.isZxg,
        x = w.isMiniProgram,
        q = w.isMpPlugin,
        y = s.useUserinfoStore(),
        S = u.useConditionEntry().isConditionEntry,
        j = r.storeToRefs(y),
        k = j.userinfo,
        M = j.accountMode,
        P = y.removeUserInfo,
        U = l.usePersonal(),
        C = U.unBind,
        T = U.unBindZxg;
      function E() {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = n(
          e().mark(function n() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), P();
                  case 2:
                    d.disconnect(),
                      r.index.$host.onUnBind({
                        formActionKey: p.route().query.action,
                        code: h.brokerConfig.base.code,
                      });
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )).apply(this, arguments);
      }
      function B() {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = n(
          e().mark(function n() {
            var r,
              t,
              o = arguments;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = o.length > 0 && void 0 !== o[0] ? o[0] : ""),
                        (t = k.value.fundaccount),
                        (e.prev = 2),
                        (e.next = 5),
                        C({ account: t, password_front_and_broker: r })
                      );
                    case 5:
                      E(), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(2)),
                        a.Dialog({ message: e.t0.retmsg });
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[2, 8]]
            );
          })
        )).apply(this, arguments);
      }
      return {
        showSwitchButton: r.computed(function () {
          var e, n, r;
          return (
            !x ||
            "wzqxcx" ===
              (null ==
              (r =
                null ==
                (n =
                  null == (e = requireMiniProgram()) ? void 0 : e.main2Plugin)
                  ? void 0
                  : n.call(e))
                ? void 0
                : r.from)
          );
        }),
        handleBtnSwitch: function () {
          q
            ? m.navigateTo({
                url: "/pages/account/switch",
                linkType: f.linkTypeMap.plugin2MainMp,
              })
            : t.hrefToWzqDomain("/account/switch");
        },
        isZxg: b,
        onUnbind: function () {
          var e = k.value,
            n = e.fundaccount,
            r = "1" === e.is_newstock_booking_gray,
            t = "";
          M.value !== i.E_ACCOUNT_MODE.MARGIN &&
            (S.value
              ? ((t = "条件单"), r && (t = "条件单和预约打新服务都"))
              : r && (t = "预约打新打新服务"));
          var o = t
            ? "且设置的".concat(t, "将在解绑后立即失效(如有设置)。")
            : "";
          (g.value = "解除绑定"
            .concat(k.value.dealername, "账户")
            .concat(
              n ? "(".concat(n, ")") : "",
              "后，将不能直接进行股票交易、资产查询、收取信息通知等操作，"
            )
            .concat(o, "请确认是否要解绑当前证券账户?")),
            (v.value = !0);
        },
        actionSheetVisible: v,
        sheetMessage: g,
        actionUnbind: function () {
          var t, o, i, s, u;
          if (((v.value = !1), b))
            c.Password({
              theme: c.THEME.FUND,
              isTrade: !0,
              noSubmit: !1,
              onSuccess:
                ((u = n(
                  e().mark(function t(o) {
                    return e().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                T({ passwd: o.encodePwd })
                              );
                            case 3:
                              r.index.clearStorageSync(),
                                a.Dialog({
                                  message: "解绑成功",
                                  onConfirm: (function () {
                                    var r = n(
                                      e().mark(function n() {
                                        return e().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                E();
                                              case 1:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, n);
                                      })
                                    );
                                    return function () {
                                      return r.apply(this, arguments);
                                    };
                                  })(),
                                }),
                                (t.next = 10);
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                a.Dialog({ message: t.t0.retmsg });
                            case 10:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]]
                    );
                  })
                )),
                function (e) {
                  return u.apply(this, arguments);
                }),
            });
          else {
            if (
              null ==
              (i =
                null == (o = null == (t = h.brokerConfig) ? void 0 : t.hall)
                  ? void 0
                  : o.account)
                ? void 0
                : i.unbindNeedPwd
            )
              return void c.Password({
                theme: c.THEME.FUND,
                isTrade: !0,
                noSubmit: !1,
                onSuccess:
                  ((s = n(
                    e().mark(function n(r) {
                      return e().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              try {
                                B(r.encodePwdExtra);
                              } catch (e) {
                                a.Dialog({ message: e.retmsg });
                              }
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, n);
                    })
                  )),
                  function (e) {
                    return s.apply(this, arguments);
                  }),
              });
            B();
          }
        },
        onUnbindSuccess: E,
      };
    },
  };
Array || r.resolveComponent("action-sheet")();
var g = r._export_sfc(v, [
  [
    "render",
    function (e, n, t, o, i, a) {
      return r.e(
        { a: o.showSwitchButton },
        o.showSwitchButton
          ? {
              b: r.o(function () {
                return (
                  o.handleBtnSwitch && o.handleBtnSwitch.apply(o, arguments)
                );
              }),
            }
          : {},
        {
          c: r.o(function () {
            return o.onUnbind && o.onUnbind.apply(o, arguments);
          }),
          d: r.t(o.sheetMessage),
          e: r.o(function () {
            return o.actionUnbind && o.actionUnbind.apply(o, arguments);
          }),
          f: r.o(function (e) {
            return (o.actionSheetVisible = e);
          }),
          g: r.p({ value: o.actionSheetVisible }),
        }
      );
    },
  ],
]);
wx.createComponent(g);
