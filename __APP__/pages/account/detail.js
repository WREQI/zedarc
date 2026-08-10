var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var r = require("../../common/vendor.js"),
  o = require("../../utils/getPlatform.js"),
  t = require("../../common/components/Dialog/index.js"),
  s = require("../../model/account/usePersonal.js"),
  a = require("../../components/Password/index.js"),
  i = require("../../service/connect/index.js"),
  c = require("../../utils/navigator.js"),
  u = require("../../model/trade/useConditionEntry.js");
require("../../service/broker.js");
var d = require("../../stores/user/useUserinfo.js"),
  l = require("../../config/enum.js"),
  h = require("../../stores/app/useMode.js"),
  f = require("../../utils/index.js"),
  p = require("../../mixin/platforms/index.js"),
  m = require("../../config/broker/11100/index.js"),
  g = {
    name: "AccountDetail",
    mixins: [p.pluginMixins],
    components: {
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    setup: function () {
      r.getCurrentInstance().proxy;
      var e = s.usePersonal(),
        n = e.unBind,
        o = e.unBindZxg,
        t = u.useConditionEntry().isConditionEntry,
        a = d.useUserinfoStore(),
        i = r.storeToRefs(a),
        c = i.userinfo,
        l = i.accountMode,
        p = a.forceGetUserInfo,
        g = a.removeUserInfo,
        v = m.brokerConfig.bind.accountCalled || "资金账号",
        _ = h.useModeStore();
      return {
        simpleMode: r.storeToRefs(_).simpleMode,
        accountName: v,
        userinfo: c,
        accountMode: l,
        unBind: n,
        unBindZxg: o,
        isConditionEntry: t,
        forceGetUserInfo: p,
        removeUserInfo: g,
        setCliboard: function () {
          var e = c.value.fundaccount,
            n = "".concat(v);
          e &&
            n &&
            f.setClipboardData({
              data: e,
              success: function () {
                r.index.showToast({
                  title: "".concat(n, "复制成功"),
                  icon: "none",
                });
              },
            });
        },
      };
    },
    data: function () {
      var e = o.getPlatform();
      return {
        isZxg: e.isZxg,
        isMiniProgram: e.isMiniProgram,
        shareholdercards_h: "-----------",
        is_shareholdercards_h_opened: !0,
        shareholdercards_s: "-----------",
        is_shareholdercards_s_opened: !0,
      };
    },
    computed: {
      showSwitchButton: function () {
        var e = !1;
        return this.isMiniProgram && (e = !0), this.isZxg || e;
      },
    },
    mounted: function () {
      var e = this;
      this.forceGetUserInfo().then(function () {
        var n = [],
          r = [];
        e.userinfo.shareholdercards.forEach(function (e) {
          "1" === e.market && e.code && r.push(e.code),
            "0" === e.market && e.code && n.push(e.code);
        }),
          r.length > 0
            ? ((e.shareholdercards_h = r.join("\n\r")),
              (e.is_shareholdercards_h_opened = !0))
            : (e.shareholdercards_h = "未开通"),
          n.length > 0
            ? ((e.shareholdercards_s = n.join("\n\r")),
              (e.is_shareholdercards_s_opened = !0))
            : (e.shareholdercards_s = "未开通");
      });
    },
    methods: {
      handleBtnSwitch: function () {
        c.hrefToWzqDomain("/account/switch");
      },
      handleUnbind: function () {
        var r = arguments,
          o = this;
        return n(
          e().mark(function n() {
            var s, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s = r.length > 0 && void 0 !== r[0] ? r[0] : ""),
                        (a = o.userinfo.fundaccount),
                        (e.prev = 2),
                        (e.next = 5),
                        o.unBind({ account: a, password_front_and_broker: s })
                      );
                    case 5:
                      o.onUnbindSuccess(), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(2)),
                        t.Dialog({ message: e.t0.retmsg });
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
        )();
      },
      onUnbindSuccess: function () {
        var o = this;
        return n(
          e().mark(function n() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), o.removeUserInfo();
                  case 2:
                    i.disconnect(), r.index.$host.onUnBind();
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )();
      },
      onUnbind: function () {
        var o = this,
          s = this.userinfo,
          i = s.fundaccount,
          c = "1" === s.is_newstock_booking_gray,
          u = "";
        this.accountMode !== l.E_ACCOUNT_MODE.MARGIN &&
          (this.isConditionEntry
            ? ((u = "条件单"), c && (u = "条件单和预约打新服务都"))
            : c && (u = "预约打新打新服务"));
        var d,
          h = u
            ? "且您设置的".concat(
                u,
                "将在解除绑定证券账户后立即失效(如有设置)，"
              )
            : "";
        t.Dialog({
          message:
            '<p style="text-align: justify;word-break: break-all;">解除绑定'
              .concat(this.userinfo.dealername, "账户")
              .concat(
                i ? "(".concat(i, ")") : "",
                "后，将不能直接进行股票交易、资产查询、收取信息通知等，"
              )
              .concat(h, "请确认是否要解除绑定当前证券账户？</p>"),
          messageType: "html",
          confirmButtonText: "解除绑定",
          showCancelButton: !0,
          onConfirm:
            ((d = n(
              e().mark(function s() {
                var i, c, u;
                return e().wrap(function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        if (!o.isZxg) {
                          s.next = 4;
                          break;
                        }
                        a.Password({
                          theme: a.THEME.FUND,
                          isTrade: !0,
                          noSubmit: !1,
                          onSuccess: (function () {
                            var s = n(
                              e().mark(function s(a) {
                                return e().wrap(
                                  function (s) {
                                    for (;;)
                                      switch ((s.prev = s.next)) {
                                        case 0:
                                          return (
                                            (s.prev = 0),
                                            (s.next = 3),
                                            o.unBindZxg({ passwd: a.encodePwd })
                                          );
                                        case 3:
                                          r.index.clearStorageSync(),
                                            t.Dialog({
                                              message: "解绑成功",
                                              onConfirm: (function () {
                                                var r = n(
                                                  e().mark(function n() {
                                                    return e().wrap(function (
                                                      e
                                                    ) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            o.onUnbindSuccess();
                                                          case 1:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    n);
                                                  })
                                                );
                                                return function () {
                                                  return r.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })(),
                                            }),
                                            (s.next = 10);
                                          break;
                                        case 7:
                                          (s.prev = 7),
                                            (s.t0 = s.catch(0)),
                                            t.Dialog({ message: s.t0.retmsg });
                                        case 10:
                                        case "end":
                                          return s.stop();
                                      }
                                  },
                                  s,
                                  null,
                                  [[0, 7]]
                                );
                              })
                            );
                            return function (e) {
                              return s.apply(this, arguments);
                            };
                          })(),
                        }),
                          (s.next = 7);
                        break;
                      case 4:
                        if (
                          !(null ==
                          (u =
                            null ==
                            (c = null == (i = m.brokerConfig) ? void 0 : i.hall)
                              ? void 0
                              : c.account)
                            ? void 0
                            : u.unbindNeedPwd)
                        ) {
                          s.next = 6;
                          break;
                        }
                        return s.abrupt(
                          "return",
                          void a.Password({
                            theme: a.THEME.FUND,
                            isTrade: !0,
                            noSubmit: !1,
                            onSuccess: (function () {
                              var r = n(
                                e().mark(function n(r) {
                                  return e().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          try {
                                            o.handleUnbind(r.encodePwdExtra);
                                          } catch (e) {
                                            t.Dialog({ message: e.retmsg });
                                          }
                                        case 1:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, n);
                                })
                              );
                              return function (e) {
                                return r.apply(this, arguments);
                              };
                            })(),
                          })
                        );
                      case 6:
                        o.handleUnbind();
                      case 7:
                      case "end":
                        return s.stop();
                    }
                }, s);
              })
            )),
            function () {
              return d.apply(this, arguments);
            }),
        });
      },
    },
  };
Array || (r.resolveComponent("mp-dialog") + r.resolveComponent("GlobalWrap"))(),
  Math;
var v = r._export_sfc(g, [
  [
    "render",
    function (e, n, o, t, s, a) {
      return r.e(
        {
          a: e.rootFontSize,
          b: r.t(t.accountName),
          c: r.t(t.userinfo.fundaccount),
          d: r.o(function () {
            return t.setCliboard && t.setCliboard.apply(t, arguments);
          }),
          e: r.t(s.shareholdercards_h),
          f: !s.is_shareholdercards_h_opened,
        },
        (s.is_shareholdercards_h_opened, {}),
        { g: r.t(s.shareholdercards_s), h: !s.is_shareholdercards_s_opened },
        (s.is_shareholdercards_s_opened, {}),
        {
          i: r.o(function () {
            return a.onUnbind && a.onUnbind.apply(a, arguments);
          }),
          j: r.p({ id: "mp-dialog" }),
          k: t.simpleMode ? 1 : "",
          l: r.sr("#global-wrap", "47a4ea74-0"),
          m: r.p({
            id: "global-wrap",
            filePath: "/account/detail",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(v);
