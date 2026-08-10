var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../../@babel/runtime/helpers/inherits"),
  c = require("../../../../../../@babel/runtime/helpers/createSuper"),
  i = Object.defineProperty,
  u = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  o = function (e, r, t) {
    return r in e
      ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t);
  },
  _ = function (e, r, t) {
    return new Promise(function (a, n) {
      var c = function (e) {
          try {
            u(t.next(e));
          } catch (e) {
            n(e);
          }
        },
        i = function (e) {
          try {
            u(t.throw(e));
          } catch (e) {
            n(e);
          }
        },
        u = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(c, i);
        };
      u((t = t.apply(e, r)).next());
    });
  },
  l = require("./BaseController.js"),
  p = require("../cp-util/navigator/index.js"),
  f = {},
  h = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = h;
  Object.keys(r).forEach(function (t) {
    "default" !== t &&
      "__esModule" !== t &&
      ((t in e && e[t] === r[t]) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return r[t];
          },
        }));
  });
})(f);
var w = new ((function (i) {
  n(h, i);
  var f = c(h);
  function h() {
    return t(this, h), f.call(this);
  }
  return (
    a(h, [
      {
        key: "doCustomerTask",
        value: function (e) {
          return this.fetch(l.NEW_CUSTOMER_TASKDONE_CGI, e, { method: "GET" });
        },
      },
      {
        key: "isTaskDone",
        value: function (e) {
          return this.fetch(
            l.ACT_TASK_CGI,
            {
              action: "taskstatus",
              actid: e.act_actid || e.actid,
              tid: e.act_tid || e.tid,
              id: e.act_id || e.id,
            },
            { method: "GET" }
          );
        },
      },
      {
        key: "doActTask",
        value: function (e) {
          return _(
            this,
            null,
            r().mark(function t() {
              var a, n, c, i;
              return r().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          this.fetch(
                            l.ACT_TASK_CGI,
                            {
                              action: "taskticket",
                              actid: e.act_actid || e.actid,
                            },
                            { method: "GET" }
                          )
                        );
                      case 2:
                        if (!(a = r.sent) || !a.task_ticket) {
                          r.next = 17;
                          break;
                        }
                        return (
                          (r.next = 6),
                          this.fetch(
                            l.ACT_TASK_CGI,
                            {
                              action: "taskdone",
                              actid: e.act_actid || e.actid,
                              tid: e.act_tid || e.tid,
                              id: e.act_id || e.id,
                              task_ticket: a.task_ticket,
                            },
                            { method: "GET" }
                          )
                        );
                      case 6:
                        if (!(n = r.sent) || !n.reward_type) {
                          r.next = 16;
                          break;
                        }
                        if (
                          ("--" == n.reward_desc && (n.reward_desc = ""),
                          "20001" !== n.reward_type)
                        ) {
                          r.next = 10;
                          break;
                        }
                        return r.abrupt("return", {
                          reward_desc: n.reward_desc,
                          reward_type: n.reward_type,
                          cash_reward_value: n.reward_value + "",
                        });
                      case 10:
                        if ("20101" !== n.reward_type) {
                          r.next = 12;
                          break;
                        }
                        return r.abrupt("return", {
                          reward_desc: n.reward_desc,
                          reward_type: n.reward_type,
                          coin_reward_value: n.reward_value,
                        });
                      case 12:
                        if (
                          !(
                            parseInt(n.reward_type) > 20900 &&
                            parseInt(n.reward_type) < 20999
                          )
                        ) {
                          r.next = 15;
                          break;
                        }
                        return (
                          (c = n.reward_package.filter(function (e) {
                            return "20101" === e.reward_type;
                          })[0]),
                          (i = n.reward_package.filter(function (e) {
                            return "20001" === e.reward_type;
                          })[0]),
                          r.abrupt("return", {
                            reward_desc: n.reward_desc,
                            reward_type: n.reward_type,
                            coin_reward_value: c.reward_value,
                            cash_reward_value: i.reward_value + "",
                          })
                        );
                      case 15:
                        return r.abrupt("return", {
                          reward_desc: n.reward_desc,
                          reward_type: n.reward_type,
                        });
                      case 16:
                        return r.abrupt("return", Promise.reject(n));
                      case 17:
                      case "end":
                        return r.stop();
                    }
                },
                t,
                this
              );
            })
          );
        },
      },
      {
        key: "do8thznqShareTask",
        value: function () {
          return _(
            this,
            null,
            r().mark(function t() {
              var a, n, c;
              return r().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), p.getUrlParam("act_actid");
                      case 2:
                        return (
                          (r.t0 = r.sent),
                          (r.next = 5),
                          p.getUrlParam("act_sharetid")
                        );
                      case 5:
                        return (
                          (r.t1 = r.sent),
                          (r.next = 8),
                          p.getUrlParam("act_shareid")
                        );
                      case 8:
                        if (
                          ((r.t2 = r.sent),
                          !(
                            (a = {
                              act_actid: r.t0,
                              act_sharetid: r.t1,
                              act_shareid: r.t2,
                            }).act_actid &&
                            a.act_sharetid &&
                            a.act_shareid &&
                            [1012, 1014].indexOf(+a.act_actid) > -1
                          ))
                        ) {
                          r.next = 27;
                          break;
                        }
                        if (
                          !(n = (function (r, t) {
                            for (var a in t || (t = {}))
                              s.call(t, a) && o(r, a, t[a]);
                            if (u) {
                              var n,
                                c = e(u(t));
                              try {
                                for (c.s(); !(n = c.n()).done; ) {
                                  a = n.value;
                                  d.call(t, a) && o(r, a, t[a]);
                                }
                              } catch (e) {
                                c.e(e);
                              } finally {
                                c.f();
                              }
                            }
                            return r;
                          })(
                            {
                              actid: a.act_actid,
                              tid: a.act_sharetid,
                              id: a.act_shareid,
                            },
                            {}
                          ))
                        ) {
                          r.next = 27;
                          break;
                        }
                        return (r.prev = 13), (r.next = 16), this.isTaskDone(n);
                      case 16:
                        if (((c = r.sent), 0 != +c.done)) {
                          r.next = 22;
                          break;
                        }
                        return (r.next = 21), this.doActTask(n);
                      case 21:
                        return r.abrupt("return", r.sent);
                      case 22:
                        r.next = 27;
                        break;
                      case 24:
                        return (
                          (r.prev = 24),
                          (r.t3 = r.catch(13)),
                          r.abrupt("return", r.t3.data)
                        );
                      case 27:
                      case "end":
                        return r.stop();
                    }
                },
                t,
                this,
                [[13, 24]]
              );
            })
          );
        },
      },
    ]),
    h
  );
})(l.BaseController))();
(exports.ActTaskController = w), (exports.bridgeInit = f);
