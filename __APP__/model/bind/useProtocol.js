var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../stores/protocol/useProtocolMul.js"),
  n = require("../../stores/protocol/enum.js"),
  o = require("../../service/aegis/platform/not-wujie.js"),
  i = require("../../common/vendor.js"),
  c = require("../../common/components/Dialog/index.js");
require("../../service/broker.js");
var u = require("../../config/broker/11100/index.js");
exports.useProtocol = function () {
  var s,
    a = i.ref([]),
    l = i.computed(function () {
      return a.value.length > 0;
    }),
    p = i.ref(!1),
    f = i.ref(!1),
    v = t.useProtocolMulStore(),
    m = v.signProtocol,
    g = v.fetchProtocolListByBiz,
    h = v.toPreviewProtocol;
  return {
    protocolList: a,
    hasProtocol: l,
    isProtocolCheck: p,
    isProtocolShow: f,
    getProtocolList: (function () {
      var t = r(
        e().mark(function t() {
          var s, l, p, f;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (p =
                        null ==
                        (l =
                          null == (s = u.brokerConfig.bind)
                            ? void 0
                            : s.protocol)
                          ? void 0
                          : l.forceGet),
                      (t.prev = 1),
                      (t.next = 4),
                      g({ biz: n.ENUM_PROTOCOL_BIZ.BIND })
                    );
                  case 4:
                    (f = t.sent), (a.value = f), (t.next = 12);
                    break;
                  case 8:
                    if (
                      ((t.prev = 8),
                      (t.t0 = t.catch(1)),
                      o.aegisReporter.reportEvent(
                        "MONITOR-BIND-PROTOCOL-GET-ERROR",
                        { ext2: null == t.t0 ? void 0 : t.t0.retmsg }
                      ),
                      !p)
                    ) {
                      t.next = 12;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      new Promise(function (n) {
                        var o;
                        c.Dialog({
                          message:
                            (null == t.t0 ? void 0 : t.t0.retmsg) ||
                            "协议信息获取失败，请重试",
                          confirmButtonText: "重试",
                          onConfirm:
                            ((o = r(
                              e().mark(function r() {
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), i();
                                      case 2:
                                        n();
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, r);
                              })
                            )),
                            function () {
                              return o.apply(this, arguments);
                            }),
                        });
                      })
                    );
                  case 12:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[1, 8]]
          );
        })
      );
      function i() {
        return t.apply(this, arguments);
      }
      return i;
    })(),
    viewProtocol:
      ((s = r(
        e().mark(function r(t) {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0), (e.next = 3), h(t, n.ENUM_PROTOCOL_BIZ.BIND)
                    );
                  case 3:
                    e.next = 8;
                    break;
                  case 5:
                    (e.prev = 5),
                      (e.t0 = e.catch(0)),
                      c.Dialog({
                        message:
                          (null == e.t0 ? void 0 : e.t0.retmsg) ||
                          "协议加载失败，请稍后重试",
                      });
                  case 8:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 5]]
          );
        })
      )),
      function (e) {
        return s.apply(this, arguments);
      }),
    signProtocol: (function () {
      var t = r(
        e().mark(function t() {
          var s,
            a,
            l,
            p,
            f = arguments;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (s = f.length > 0 && void 0 !== f[0] ? f[0] : {}),
                      (p =
                        null ==
                        (l =
                          null == (a = u.brokerConfig.bind)
                            ? void 0
                            : a.protocol)
                          ? void 0
                          : l.forceSign),
                      (t.prev = 2),
                      (t.next = 5),
                      m({ biz: n.ENUM_PROTOCOL_BIZ.BIND, data: s })
                    );
                  case 5:
                    t.next = 11;
                    break;
                  case 7:
                    if (
                      ((t.prev = 7),
                      (t.t0 = t.catch(2)),
                      o.aegisReporter.reportEvent(
                        "MONITOR-BIND-PROTOCOL-SIGN-ERROR",
                        { ext2: null == t.t0 ? void 0 : t.t0.retmsg }
                      ),
                      !p)
                    ) {
                      t.next = 11;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      new Promise(function (n, o) {
                        var u;
                        c.Dialog({
                          message:
                            (null == t.t0 ? void 0 : t.t0.retmsg) ||
                            "协议签署失败，请重试",
                          showCancelButton: !0,
                          confirmButtonText: "重试",
                          cancelButtonText: "取消",
                          onConfirm:
                            ((u = r(
                              e().mark(function r() {
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), i(s);
                                      case 2:
                                        n();
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, r);
                              })
                            )),
                            function () {
                              return u.apply(this, arguments);
                            }),
                          onCancel: function () {
                            o();
                          },
                        });
                      })
                    );
                  case 11:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[2, 7]]
          );
        })
      );
      function i() {
        return t.apply(this, arguments);
      }
      return i;
    })(),
    setProtocolShow: function (e) {
      f.value = e;
    },
  };
};
