var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  u = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  l = function (e, r, t) {
    return r in e
      ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t);
  },
  c = function (e, r) {
    for (var n in r || (r = {})) s.call(r, n) && l(e, n, r[n]);
    if (a) {
      var u,
        o = t(a(r));
      try {
        for (o.s(); !(u = o.n()).done; ) {
          n = u.value;
          i.call(r, n) && l(e, n, r[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  f = function (e, r) {
    return u(e, o(r));
  },
  v = function (e, r, t) {
    return new Promise(function (n, u) {
      var o = function (e) {
          try {
            s(t.next(e));
          } catch (e) {
            u(e);
          }
        },
        a = function (e) {
          try {
            s(t.throw(e));
          } catch (e) {
            u(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, a);
        };
      s((t = t.apply(e, r)).next());
    });
  },
  m = require("../../../../../common/vendor.js"),
  d = require("../utils/dealData.js"),
  _ = require("../../stock-news-core/utils/knife.js"),
  p = require("../utils/api.js"),
  b = m.ref([]),
  g = m.ref([]),
  y = m.ref(!1),
  x = m.ref(""),
  h = m.ref([]),
  w = m.ref([]),
  E = m.ref(0),
  k = m.computed(function () {
    var e;
    return (
      (null == (e = b.value[E.value]) ? void 0 : e.msg_box_type) ||
      d.BACK_END_MESSAGE_ID.chooseRemind
    );
  }),
  j = m.ref(!1),
  D = m.ref(!1);
exports.useHome = function () {
  var t = this,
    n = m.inject("TradeFunc"),
    u = m.inject("stockBridge"),
    o = function (e) {
      (b.value = []),
        (g.value = []),
        (y.value = !1),
        null == e ||
          e.forEach(function (e) {
            var r,
              t,
              o = e.summary;
            e.summary ||
              (o =
                0 === e.unread_num
                  ? "暂无未读消息"
                  : "您有".concat(e.unread_num, "条新通知"));
            var a = f(c(c({}, e), d.MessageboxConfigV2[e.msg_box_type]), {
              showTime: +e.time,
              summary: o,
            });
            (a.time = _.timeFormat(e.time)),
              0 !== e.unread_num && (y.value = !0),
              b.value.push(a),
              e.msg_box_type === d.BACK_END_MESSAGE_ID.platformMessage &&
                (null == (r = null == e ? void 0 : e.boxes) ||
                  r.forEach(function (r) {
                    var t = f(
                      c(
                        c({ msg_box_type: e.msg_box_type }, r),
                        d.MessageboxConfigV2[r.sub_type]
                      ),
                      { showTime: +r.time }
                    );
                    (t.time = _.timeFormat(r.time)), g.value.push(t);
                  })),
              "trade" === e.msg_box_type &&
                (0 === w.value.length
                  ? (w.value =
                      null == (t = null == e ? void 0 : e.boxes)
                        ? void 0
                        : t.map(function (r) {
                            var t = n.getDealerList(),
                              u = +r.unread_num;
                            return f(
                              c(
                                c({ msg_box_type: e.msg_box_type }, r),
                                t.find(function (e) {
                                  return e.code == r.dealer_code;
                                }) || {}
                              ),
                              {
                                showTime: +r.time,
                                unreadNum: u > 99 ? "99+" : u,
                              }
                            );
                          }))
                  : w.value.forEach(function (r) {
                      var t =
                        null == e
                          ? void 0
                          : e.boxes.find(function (e) {
                              return e.dealer_code === r.code;
                            });
                      if (t) {
                        var n = +t.unread_num;
                        r.unreadNum = n > 99 ? "99+" : n;
                      }
                    }),
                0 === w.value.length &&
                  u.report("yy.message_box.empty_page_brow"));
          });
    },
    a = function (e) {
      return v(
        t,
        null,
        r().mark(function t() {
          return r().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.next = 2), p.readMessage(c({}, e));
                case 2:
                  s();
                case 3:
                case "end":
                  return r.stop();
              }
          }, t);
        })
      );
    };
  function s() {
    return v(
      this,
      null,
      r().mark(function e() {
        var t;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    p.queryMessagelist({
                      dealer_code: x.value,
                      dealer_codes: h.value,
                    })
                  );
                case 3:
                  (t = e.sent), o(t.items), (e.next = 9);
                  break;
                case 7:
                  (e.prev = 7), (e.t0 = e.catch(0));
                case 9:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 7]]
        );
      })
    );
  }
  return {
    renderList: b,
    canclear: y,
    customEntryList: g,
    bindBroker: x,
    bindBrokerList: h,
    tabBrokerList: w,
    currentIndex: E,
    currentValue: k,
    hasVisitedQuote: j,
    readyReport: D,
    judgeCurrentIndex: function () {
      var r,
        t,
        u,
        o =
          b.value.filter(function (e) {
            return e.unread_num > 0;
          }) || [];
      if (j.value) j.value = !1;
      else if (o.length > 0) {
        var s = e(o).sort(function (e, r) {
          return r.showTime - e.showTime;
        });
        s.find(function (e) {
          return e.msg_box_type === d.BACK_END_MESSAGE_ID.chooseRemind;
        })
          ? (E.value = 0)
          : b.value.forEach(function (e, r) {
              var t;
              (null == (t = null == s ? void 0 : s[0])
                ? void 0
                : t.msg_box_type) === e.msg_box_type && (E.value = r);
            });
      } else {
        var i = n.isBind();
        E.value = i ? 1 : 2;
      }
      D.value = !0;
      var l = null == (r = b.value) ? void 0 : r[E.value];
      l &&
        l.msg_box_type !== d.BACK_END_MESSAGE_ID.platformMessage &&
        a(
          c(
            { msg_box_type: l.msg_box_type },
            "trade" === l.msg_box_type
              ? {
                  dealer_code:
                    null == (u = null == (t = w.value) ? void 0 : t[0])
                      ? void 0
                      : u.code,
                }
              : {}
          )
        );
    },
    dealMessageListV2Hooks: o,
    clearAllCountStatus: function () {
      return v(
        t,
        null,
        r().mark(function e() {
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    p.readMessage({
                      msg_box_type: "all",
                      dealer_code: x.value,
                      dealer_codes: h.value,
                    })
                  );
                case 2:
                  (y.value = !1), s();
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    },
    clearOneCountStatus: a,
    changeCurrentIndex: function (e) {
      b.value.forEach(function (r, t) {
        e.msg_box_type === r.msg_box_type && (E.value = t);
      });
    },
    getDealerInfo: function () {
      return v(
        this,
        null,
        r().mark(function t() {
          var u;
          return r().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.next = 2), n.fetchBrokerInfo();
                case 2:
                  (x.value = n.getCurrentBroker().code || ""),
                    (u = n.getDealerList()),
                    (u = [].concat(
                      e(
                        null == u
                          ? void 0
                          : u.filter(function (e) {
                              return 128 & e.userstateFront;
                            })
                      ),
                      e(
                        null == u
                          ? void 0
                          : u.filter(function (e) {
                              return 256 & e.userstateFront;
                            })
                      ),
                      e(
                        null == u
                          ? void 0
                          : u.filter(function (e) {
                              return 64 & e.userstateFront;
                            })
                      )
                    )),
                    (h.value =
                      (null == u
                        ? void 0
                        : u.map(function (e) {
                            return e.code;
                          })) || []);
                case 5:
                case "end":
                  return r.stop();
              }
          }, t);
        })
      );
    },
    getMessagelist: s,
    clearTabBrokerList: function () {
      w.value = [];
    },
  };
};
