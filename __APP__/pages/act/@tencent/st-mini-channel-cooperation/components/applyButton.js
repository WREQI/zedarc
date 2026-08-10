require("../../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, t, n) {
    return new Promise(function (r, u) {
      var a = function (e) {
          try {
            i(n.next(e));
          } catch (e) {
            u(e);
          }
        },
        c = function (e) {
          try {
            i(n.throw(e));
          } catch (e) {
            u(e);
          }
        },
        i = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, c);
        };
      i((n = n.apply(e, t)).next());
    });
  },
  r = require("../../../../../common/vendor.js"),
  u = require("../Index.js"),
  a = {
    props: {
      config: { type: Object, default: function () {} },
      stat: { type: String, default: "" },
      actStatus: { type: String, default: "" },
      subscribeStatus: { type: String, default: "0" },
    },
    setup: function (a, c) {
      var i = c.emit,
        s = r.inject("TradeFunc"),
        o = r.ref(!0),
        l = r.ref(!1),
        p = r.ref([]),
        f = r.computed(function () {
          return +a.actStatus === u.USER_STATE.normal;
        }),
        b = r.computed(function () {
          var e, t;
          return (
            (null == (t = null == (e = a.config) ? void 0 : e.templateId)
              ? void 0
              : t.split(",")) || u.DEFAULT_TMPLIDS
          );
        }),
        v = r.computed(function () {
          var e,
            t,
            n = u.USER_STATE_MAP[+a.actStatus];
          return (
            (null == (t = null == (e = a.config) ? void 0 : e.button)
              ? void 0
              : t[n]) || { text: "点此签约 解锁福利", bgColor: "btn-red" }
          );
        });
      function S() {
        i("reportData", "apply_btn_click"),
          s
            .navToApplyStep({
              broker: a.config.broker || u.DEFAULTBROKER,
              stat: a.stat,
              hideSubscribe: !0,
            })
            .catch(function (e) {
              i("aegisReporterFn", "WZQMINI-CHANNEL-BROKER-BINDCARD-INVALID", {
                ext2: JSON.stringify(e),
              });
            });
      }
      return (
        r.onMounted(function () {
          +a.subscribeStatus !== u.SUBSCRIBE_STATE.subscribe &&
            (function () {
              n(
                this,
                null,
                t().mark(function e() {
                  var n, r, a;
                  return t().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              u.querySubscribe(b.value)
                            );
                          case 3:
                            (n = e.sent),
                              (r = n.retcode),
                              (a = n.templates),
                              (p.value =
                                0 == +r
                                  ? a
                                      .filter(function (e) {
                                        return 1 != +e.left_number;
                                      })
                                      .map(function (e) {
                                        return e.template_id;
                                      })
                                  : b.value),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              (p.value = b.value),
                              i(
                                "aegisReporterFn",
                                "WZQMINI-CHANNEL-QUERYSUBSCRIBE-FAIL",
                                { ext2: JSON.stringify(e.t0) }
                              );
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
            })();
        }),
        {
          targetUser: f,
          buttonConfig: v,
          handleApply: function () {
            return n(
              this,
              null,
              t().mark(function c() {
                return t().wrap(function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        l.value ||
                          (+a.subscribeStatus !== u.SUBSCRIBE_STATE.subscribe &&
                          p.value.length &&
                          o.value
                            ? ((l.value = !0),
                              (function (a) {
                                var c = this;
                                r.wx$1.requestSubscribeMessage({
                                  tmplIds: a,
                                  success: function (r) {
                                    return n(
                                      c,
                                      null,
                                      t().mark(function a() {
                                        return t().wrap(function (a) {
                                          for (;;)
                                            switch ((a.prev = a.next)) {
                                              case 0:
                                                return (
                                                  (a.next = 2),
                                                  (function (r) {
                                                    return n(
                                                      this,
                                                      null,
                                                      t().mark(function n() {
                                                        var a;
                                                        return t().wrap(
                                                          function (t) {
                                                            for (;;)
                                                              switch (
                                                                (t.prev =
                                                                  t.next)
                                                              ) {
                                                                case 0:
                                                                  if (
                                                                    ((t.prev = 0),
                                                                    (a =
                                                                      Object.entries(
                                                                        r
                                                                      )
                                                                        .filter(
                                                                          function (
                                                                            t
                                                                          ) {
                                                                            var n =
                                                                              e(
                                                                                t,
                                                                                2
                                                                              );
                                                                            n[0];
                                                                            return (
                                                                              "accept" ===
                                                                              n[1]
                                                                            );
                                                                          }
                                                                        )
                                                                        .map(
                                                                          function (
                                                                            t
                                                                          ) {
                                                                            return {
                                                                              template_id:
                                                                                e(
                                                                                  t,
                                                                                  1
                                                                                )[0],
                                                                              status:
                                                                                "accept",
                                                                            };
                                                                          }
                                                                        )),
                                                                    (t.t0 =
                                                                      a.length),
                                                                    !t.t0)
                                                                  ) {
                                                                    t.next = 7;
                                                                    break;
                                                                  }
                                                                  return (
                                                                    (t.next = 6),
                                                                    u.openSubscribe(
                                                                      {
                                                                        subscribe_details:
                                                                          a,
                                                                      }
                                                                    )
                                                                  );
                                                                case 6:
                                                                  i(
                                                                    "reportData",
                                                                    "subscribe_btn_click"
                                                                  );
                                                                case 7:
                                                                  (o.value =
                                                                    !1),
                                                                    (t.next = 13);
                                                                  break;
                                                                case 10:
                                                                  (t.prev = 10),
                                                                    (t.t1 =
                                                                      t.catch(
                                                                        0
                                                                      )),
                                                                    i(
                                                                      "aegisReporterFn",
                                                                      "WZQMINI-CHANNEL-SUBSCRIBE-MESSAGE-FAIL",
                                                                      {
                                                                        ext2: JSON.stringify(
                                                                          t.t1
                                                                        ),
                                                                      }
                                                                    ),
                                                                    S();
                                                                case 13:
                                                                case "end":
                                                                  return t.stop();
                                                              }
                                                          },
                                                          n,
                                                          null,
                                                          [[0, 10]]
                                                        );
                                                      })
                                                    );
                                                  })(r)
                                                );
                                              case 2:
                                                S(), (l.value = !1);
                                              case 4:
                                              case "end":
                                                return a.stop();
                                            }
                                        }, a);
                                      })
                                    );
                                  },
                                  fail: function (e) {
                                    return n(
                                      c,
                                      null,
                                      t().mark(function n() {
                                        return t().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                i(
                                                  "aegisReporterFn",
                                                  "WZQMINI-CHANNEL-SUBSCRIBE-MESSAGE-FAIL",
                                                  { ext2: JSON.stringify(e) }
                                                ),
                                                  S(),
                                                  (l.value = !1);
                                              case 1:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, n);
                                      })
                                    );
                                  },
                                });
                              })(p.value),
                              i("reportData", "subscribe_popup_brow"))
                            : S());
                      case 1:
                      case "end":
                        return c.stop();
                    }
                }, c);
              })
            );
          },
        }
      );
    },
  },
  c = r._export_sfc(a, [
    [
      "render",
      function (e, t, n, u, a, c) {
        return {
          a: r.t(u.buttonConfig.text),
          b: r.n(u.buttonConfig.bgColor),
          c: r.n(u.targetUser ? "btn-breathing" : ""),
          d: r.o(function () {
            return u.handleApply && u.handleApply.apply(u, arguments);
          }, 2492),
        };
      },
    ],
    ["__scopeId", "data-v-ed586fe5"],
  ]);
wx.createComponent(c);
