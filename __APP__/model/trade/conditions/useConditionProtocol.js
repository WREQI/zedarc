var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  n = require("../../../stores/protocol/enum.js"),
  o = require("../../../common/components/Dialog/index.js"),
  a = require("../../../stores/protocol/useProtocolMul.js"),
  c = require("../../../service/aegis/platform/not-wujie.js");
exports.useConditionProtocol = function () {
  var s,
    u = r.getCurrentInstance().proxy,
    i = r.ref([]),
    l = r.ref([]),
    p = r.ref(!0),
    f = a.useProtocolMulStore(),
    v = f.fetchProtocolListByBiz,
    m = (f.getProtocolContent, f.signProtocol);
  return {
    signable: p,
    fetchData:
      ((s = t(
        e().mark(function t() {
          var r, a, s, f, m;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      v({ biz: n.ENUM_PROTOCOL_BIZ.CONDITION, forceUpdate: !0 })
                    );
                  case 3:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 6;
                      break;
                    }
                    e.t0 = [];
                  case 6:
                    for (i.value = e.t0, r = [], a = 0; a < i.value.length; a++)
                      (s = i.value[a]),
                        (f = (s || {}).content),
                        (m = void 0 === f ? "" : f),
                        r.push(m);
                    (l.value = r), (p.value = !0), (e.next = 15);
                    break;
                  case 12:
                    (e.prev = 12),
                      (e.t1 = e.catch(0)),
                      (p.value = !1),
                      o.Dialog({
                        context: u,
                        message:
                          (null == e.t1 ? void 0 : e.t1.retmsg) ||
                          "协议查询失败，请重试",
                        showCancelButton: !1,
                        confirmButtonText: "我知道了",
                        cancelButtonText: "取消",
                      }),
                      c.aegisReporter.reportEvent(
                        "MONITOR-TRADE—CONDITION-PROTOCOL-ERR",
                        { ext3: JSON.stringify(e.t1 || {}) }
                      );
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 12]]
          );
        })
      )),
      function () {
        return s.apply(this, arguments);
      }),
    protcolContents: l,
    signProtocol: (function () {
      var r = t(
        e().mark(function r() {
          return e().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (r.prev = 0),
                      (r.next = 3),
                      m({ biz: n.ENUM_PROTOCOL_BIZ.CONDITION })
                    );
                  case 3:
                    r.next = 8;
                    break;
                  case 5:
                    return (
                      (r.prev = 5),
                      (r.t0 = r.catch(0)),
                      r.abrupt(
                        "return",
                        (c.aegisReporter.reportEvent(
                          "condition-base-sign-protocol-fail",
                          { ext2: null == r.t0 ? void 0 : r.t0.retmsg }
                        ),
                        new Promise(function (n, c) {
                          var s;
                          o.Dialog({
                            context: u,
                            message:
                              (null == r.t0 ? void 0 : r.t0.retmsg) ||
                              "协议签署失败，请重试",
                            showCancelButton: !0,
                            confirmButtonText: "重试",
                            cancelButtonText: "取消",
                            onConfirm:
                              ((s = t(
                                e().mark(function t() {
                                  return e().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (e.next = 2), a();
                                        case 2:
                                          n();
                                        case 3:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, t);
                                })
                              )),
                              function () {
                                return s.apply(this, arguments);
                              }),
                            onCancel: function () {
                              c();
                            },
                          });
                        }))
                      )
                    );
                  case 8:
                  case "end":
                    return r.stop();
                }
            },
            r,
            null,
            [[0, 5]]
          );
        })
      );
      function a() {
        return r.apply(this, arguments);
      }
      return a;
    })(),
  };
};
