var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, r, t) {
    return new Promise(function (n, a) {
      var c = function (e) {
          try {
            o(t.next(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          try {
            o(t.throw(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, u);
        };
      o((t = t.apply(e, r)).next());
    });
  },
  t = require("../../../../../../../common/vendor.js"),
  n = {},
  a = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = a;
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
})(n),
  (exports.getMockTradeFeeFeatureEnabled = function () {
    return r(
      this,
      null,
      e().mark(function n() {
        var a, c;
        return e().wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.prev = 0),
                    (n.next = 3),
                    (function () {
                      var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                      return r(
                        this,
                        null,
                        e().mark(function r() {
                          var a, c, u, o, i;
                          return e().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (a = {}),
                                      (e.prev = 1),
                                      (c = {
                                        appid: "act",
                                        schemaid: "yy_activity_page_config",
                                      }),
                                      n &&
                                        (c.filter = encodeURIComponent(
                                          "act_id=".concat(n)
                                        )),
                                      (e.next = 6),
                                      t.Wuji.get(c).then(function (e) {
                                        return e;
                                      })
                                    );
                                  case 6:
                                    (u = e.sent),
                                      (o = [
                                        "ui_conf",
                                        "rule",
                                        "rule_simplify",
                                        "rule_conf",
                                        "share_conf",
                                        "stat_conf",
                                        "task_conf",
                                        "whitelist",
                                        "ctrl_conf",
                                        "jval",
                                      ]),
                                      u &&
                                        ((i = u.data || u || []),
                                        (a = Array.isArray(i) ? i[0] : {}),
                                        o.forEach(function (e) {
                                          if (a[e] && "string" == typeof a[e])
                                            try {
                                              a[e] = JSON.parse(a[e]);
                                            } catch (e) {}
                                        })),
                                      (e.next = 14);
                                    break;
                                  case 11:
                                    return (
                                      (e.prev = 11),
                                      (e.t0 = e.catch(1)),
                                      e.abrupt("return", {})
                                    );
                                  case 14:
                                    return e.abrupt("return", a);
                                  case 15:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            r,
                            null,
                            [[1, 11]]
                          );
                        })
                      );
                    })("mocktrade")
                  );
                case 3:
                  return (
                    (c = n.sent),
                    n.abrupt(
                      "return",
                      !!(null == (a = null == c ? void 0 : c.ctrl_conf)
                        ? void 0
                        : a.fee_feature_enabled)
                    )
                  );
                case 7:
                  return (
                    (n.prev = 7), (n.t0 = n.catch(0)), n.abrupt("return", !1)
                  );
                case 10:
                case "end":
                  return n.stop();
              }
          },
          n,
          null,
          [[0, 7]]
        );
      })
    );
  }),
  (exports.navigator = n);
