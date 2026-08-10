var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, r) {
    return new Promise(function (t, a) {
      var u = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(u, o);
        };
      c((r = r.apply(e, n)).next());
    });
  },
  r = require("../../../../../../common/vendor.js"),
  t = require("../../utils/api.js"),
  a = require("../../utils/dealData.js"),
  u = {
    onPageShow: function () {
      this.initData();
    },
    setup: function () {
      var u = r.inject("stockBridge"),
        o = r.inject("TradeFunc"),
        c = r.ref({}),
        s = r.ref(!1),
        i = r.ref(""),
        l = r.ref(!1),
        m = r.ref(0);
      function _() {
        return n(
          this,
          null,
          e().mark(function r() {
            var _, d;
            return e().wrap(
              function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (Date.now() - m.value < 5e3) {
                        r.next = 15;
                        break;
                      }
                      return (
                        (m.value = Date.now()),
                        (r.prev = 2),
                        (r.next = 5),
                        (function () {
                          return n(
                            this,
                            null,
                            e().mark(function n() {
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), o.fetchBrokerInfo();
                                    case 2:
                                      o.isBind() &&
                                        (i.value =
                                          o.getCurrentBroker().code || "");
                                    case 3:
                                    case "end":
                                      return e.stop();
                                  }
                              }, n);
                            })
                          );
                        })()
                      );
                    case 5:
                      return (
                        (r.next = 7),
                        t.queryMessagelist({ dealer_code: i.value })
                      );
                    case 7:
                      (_ = r.sent),
                        (d = a.dealMessageList(_.items)),
                        (c.value = d.renderlist),
                        (s.value = d.canclear),
                        (l.value = !0),
                        c.value.forEach(function (e) {
                          e.unread_num > 0 &&
                            u.report(
                              "yy.message_box.".concat(
                                e.msg_box_type,
                                "_red_brow"
                              ),
                              { msg_num: e.unread_num }
                            );
                        }),
                        (r.next = 15);
                      break;
                    case 12:
                      (r.prev = 12),
                        (r.t0 = r.catch(2)),
                        (l.value = !0),
                        (c.value = a.EMPTY_LIST);
                    case 15:
                    case "end":
                      return r.stop();
                  }
              },
              r,
              null,
              [[2, 12]]
            );
          })
        );
      }
      return (
        r.onActivated(function () {
          _();
        }),
        _(),
        {
          renderList: c,
          jump: function (a) {
            return n(
              this,
              null,
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (u.report(
                            "yy.message_box.".concat(
                              a.msg_box_type,
                              "_entry_click"
                            )
                          ),
                          (e.t0 = a.unread_num > 0),
                          !e.t0)
                        ) {
                          e.next = 8;
                          break;
                        }
                        if (
                          ((e.t1 = "interaction" !== a.msg_box_type), !e.t1)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (e.next = 7),
                          t.readMessage({
                            msg_box_type: a.msg_box_type,
                            dealer_code: i.value,
                          })
                        );
                      case 7:
                        u.report(
                          "yy.message_box.".concat(
                            a.msg_box_type,
                            "_red_click"
                          ),
                          { msg_num: a.unread_num }
                        );
                      case 8:
                        a.unsupported
                          ? r.StockRouter.routeTo({ name: "empty-message" })
                          : a.tradeflag
                          ? o.navToBrokerPage({
                              broker: i.value,
                              path: "/message/newbox",
                            })
                          : r.StockRouter.routeTo({ name: a.routename });
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
          canclear: s,
          clearAll: function () {
            var r = this;
            u.report("yy.message_box.list_clearall_click"),
              s.value
                ? u.modal({
                    content: "将全部信息标记为已读?",
                    showCancel: !0,
                    success: function () {
                      for (
                        var a = arguments.length, o = new Array(a), l = 0;
                        l < a;
                        l++
                      )
                        o[l] = arguments[l];
                      return n(r, [].concat(o), function () {
                        var n =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { confirm: !0 };
                        return e().mark(function r() {
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!n.confirm) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    t.readMessage({
                                      msg_box_type: "all",
                                      dealer_code: i.value,
                                    })
                                  );
                                case 3:
                                  u.report(
                                    "yy.message_box.list_clearall_confirm"
                                  ),
                                    (s.value = !1),
                                    c.value.forEach(function (e) {
                                      (e.show_type = "num"), (e.unread_num = 0);
                                    }),
                                    (e.next = 9);
                                  break;
                                case 8:
                                  u.report(
                                    "yy.message_box.list_clearall_cancel"
                                  );
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          }, r);
                        })();
                      });
                    },
                    fail: function () {
                      u.report("yy.message_box.list_clearall_cancel");
                    },
                  })
                : u.toast("当前无未读消息", "none");
          },
          initData: _,
          dataReady: l,
        }
      );
    },
  },
  o = r._export_sfc(u, [
    [
      "render",
      function (e, n, t, a, u, o) {
        return r.e(
          { a: a.canclear },
          a.canclear
            ? {
                b: r.o(function () {
                  return a.clearAll && a.clearAll.apply(a, arguments);
                }, 1242),
              }
            : {
                c: r.o(function () {
                  return a.clearAll && a.clearAll.apply(a, arguments);
                }, 1243),
              },
          { d: a.dataReady },
          a.dataReady
            ? {
                e: r.f(a.renderList, function (e, n, t) {
                  return r.e(
                    {
                      a: e.icon,
                      b: "red_dot" === e.show_type && e.unread_num > 0,
                    },
                    "red_dot" === e.show_type && e.unread_num > 0
                      ? {}
                      : "num" === e.show_type && e.unread_num > 0
                      ? {
                          d: r.t(e.unread_num),
                          e: r.n(e.unread_num < 10 ? "single-num" : ""),
                        }
                      : {},
                    {
                      c: "num" === e.show_type && e.unread_num > 0,
                      f: r.t(e.title),
                      g: e.showTime,
                    },
                    e.showTime ? { h: r.t(e.time) } : {},
                    {
                      i: r.t(e.summary),
                      j: r.n(0 === e.unread_num ? "un-summary" : ""),
                      k: n < a.renderList.length - 1,
                    },
                    (a.renderList.length, {}),
                    {
                      l: n,
                      m: r.o(
                        function (e) {
                          return a.jump(a.renderList[n]);
                        },
                        1244,
                        n
                      ),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-9942375f"],
  ]);
wx.createComponent(o);
