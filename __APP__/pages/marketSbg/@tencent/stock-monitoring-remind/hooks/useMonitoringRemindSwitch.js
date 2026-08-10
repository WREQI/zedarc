var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, r) {
    return new Promise(function (n, s) {
      var u = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            s(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(u, a);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  r = require("../../../../../common/vendor.js"),
  n = "monitoring_remind_switch_state",
  s = function (e) {
    try {
      var t = { state: e, timestamp: Date.now() },
        s = JSON.stringify(t);
      r.StockBridge.setSession(n, s);
    } catch (e) {}
  },
  u = function () {
    try {
      var e = r.StockBridge.getSession(n);
      return e ? JSON.parse(e).state : null;
    } catch (e) {
      return null;
    }
  },
  a = function (e) {
    r.StockBridge.ENV === r.EnvTypeEnum.MP
      ? r.wx$1.showToast({ title: e, icon: "none" })
      : r.StockBridge.toast(e, "none");
  };
exports.useMonitoringRemindSwitch = function () {
  var c = r.ref(null);
  return {
    switchState: c,
    getSwitchState: function () {
      return t(
        exports,
        null,
        e().mark(function a() {
          var i, o, p, l, v;
          return e().wrap(
            function (a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    if (
                      ((a.prev = 0),
                      (i = !!r.StockBridge.getSession(n)),
                      (o = (function () {
                        try {
                          var e = r.StockBridge.getSession(n);
                          if (!e) return !1;
                          var t = JSON.parse(e);
                          return Date.now() - t.timestamp < 432e5;
                        } catch (e) {
                          return !1;
                        }
                      })()),
                      !i || !o)
                    ) {
                      a.next = 6;
                      break;
                    }
                    if (!(p = u())) {
                      a.next = 6;
                      break;
                    }
                    return a.abrupt("return", ((c.value = p), p));
                  case 6:
                    return (
                      (a.next = 8),
                      new Promise(function (n, s) {
                        return t(
                          exports,
                          null,
                          e().mark(function t() {
                            var u;
                            return e().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        "https://wzq.tenpay.com/svr/user/user_service/get_user_eb_event_reminder_switch_state",
                                        (e.next = 4),
                                        r.StockBridge.request(
                                          "https://wzq.tenpay.com/svr/user/user_service/get_user_eb_event_reminder_switch_state",
                                          r.RequestTypeEnum.GET,
                                          {}
                                        )
                                      );
                                    case 4:
                                      void 0 !==
                                      (null == (u = e.sent)
                                        ? void 0
                                        : u.switch_status)
                                        ? n(u)
                                        : s(new Error("获取开关状态失败")),
                                        (e.next = 11);
                                      break;
                                    case 8:
                                      (e.prev = 8),
                                        (e.t0 = e.catch(0)),
                                        s(e.t0);
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 8]]
                            );
                          })
                        );
                      })
                    );
                  case 8:
                    return (
                      (l = a.sent),
                      (v = {
                        isGrayUser: l.is_gray_user,
                        isOpen: 1 === l.switch_status,
                        reportInfo: l.report_info,
                      }),
                      a.abrupt("return", ((c.value = v), s(v), v))
                    );
                  case 13:
                    return (
                      (a.prev = 13),
                      (a.t0 = a.catch(0)),
                      a.abrupt("return", null)
                    );
                  case 16:
                  case "end":
                    return a.stop();
                }
            },
            a,
            null,
            [[0, 13]]
          );
        })
      );
    },
    updateSwitchState: function (n) {
      return t(
        exports,
        null,
        e().mark(function i() {
          var o, p, l, v, f;
          return e().wrap(
            function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    return (
                      (i.prev = 0),
                      (i.next = 3),
                      (function (n) {
                        return new Promise(function (s, u) {
                          return t(
                            exports,
                            null,
                            e().mark(function t() {
                              var a, c;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          "https://wzq.tenpay.com/svr/user/user_service/set_user_eb_event_reminder_switch_state",
                                          (a = { switch_status: n ? 1 : 2 }),
                                          (e.next = 5),
                                          r.StockBridge.request(
                                            "https://wzq.tenpay.com/svr/user/user_service/set_user_eb_event_reminder_switch_state",
                                            r.RequestTypeEnum.POST,
                                            a
                                          )
                                        );
                                      case 5:
                                        0 ===
                                        (null == (c = e.sent)
                                          ? void 0
                                          : c.retcode)
                                          ? s(c)
                                          : u(new Error("设置开关状态失败")),
                                          (e.next = 12);
                                        break;
                                      case 9:
                                        (e.prev = 9),
                                          (e.t0 = e.catch(0)),
                                          u(e.t0);
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                null,
                                [[0, 9]]
                              );
                            })
                          );
                        });
                      })(n)
                    );
                  case 3:
                    if (0 !== (null == (l = i.sent) ? void 0 : l.retcode)) {
                      i.next = 7;
                      break;
                    }
                    return (
                      (v = c.value || u()),
                      (f = {
                        isGrayUser:
                          null != (o = null == v ? void 0 : v.isGrayUser) && o,
                        reportInfo:
                          null != (p = null == v ? void 0 : v.reportInfo)
                            ? p
                            : "",
                        isOpen: n,
                      }),
                      i.abrupt("return", ((c.value = f), s(f), !0))
                    );
                  case 7:
                    return i.abrupt("return", (a("网络异常，请稍后重试"), !1));
                  case 10:
                    return (
                      (i.prev = 10),
                      (i.t0 = i.catch(0)),
                      i.abrupt("return", (a("网络异常，请稍后重试"), !1))
                    );
                  case 13:
                  case "end":
                    return i.stop();
                }
            },
            i,
            null,
            [[0, 10]]
          );
        })
      );
    },
    clearState: function () {
      c.value = null;
    },
  };
};
