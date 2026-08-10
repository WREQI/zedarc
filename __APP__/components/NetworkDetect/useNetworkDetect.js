require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var E = require("../../common/vendor.js"),
  n = require("./index.js");
require("../../service/broker.js");
var T = require("../../config/event.js"),
  o = require("./constants.js"),
  c = require("../../service/aegis/platform/not-wujie.js"),
  i = require("../../common/components/Dialog/index.js"),
  a = require("../../utils/getPlatform.js"),
  s = require("../../config/broker/11100/index.js"),
  _ = [
    o.NETWORK_DETECT_RESULT_TYPE.FAILED,
    o.NETWORK_DETECT_RESULT_TYPE.UNREACHABLE,
    o.NETWORK_DETECT_RESULT_TYPE.REACHABLE,
    o.NETWORK_DETECT_RESULT_TYPE.IGNORE,
  ],
  u = E.defineStore("NetworkDetect", function () {
    var u,
      R = E.ref(o.NETWORK_DETECT_UI_TYPE.HIDDEN),
      C = E.reactive({ networkType: "", action: "" });
    function N(e, r) {
      var E, n, T, i;
      try {
        return null ==
          (i =
            null == (n = (E = requireMiniProgram()).main2Plugin)
              ? void 0
              : (T = n.call(E)).runDetectCommand)
          ? void 0
          : i.call(T, e, t({ dealerCode: s.brokerConfig.base.code }, r));
      } catch (e) {
        c.aegisReporter.reportEvent(
          o.NETWORK_DETECT_MONITOR_EVENT.MAIN_PROCESS_EXCEPTION,
          {
            ext2: s.brokerConfig.base.code,
            ext3: e instanceof Error ? e.message : String(e),
          }
        );
      }
    }
    function D(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (f = r(
        e().mark(function E(n) {
          var T, i, a;
          return e().wrap(
            function (E) {
              for (;;)
                switch ((E.prev = E.next)) {
                  case 0:
                    return (
                      (E.prev = 0),
                      (i = {
                        dealerCode: s.brokerConfig.base.code,
                        error: n,
                        pathWhiteList: o.NETWORK_DETECT_CGI_LIST,
                      }),
                      (E.next = 4),
                      (function () {
                        var E = r(
                          e().mark(function E(n) {
                            var T,
                              c,
                              i,
                              a,
                              s,
                              _ = arguments;
                            return e().wrap(function (E) {
                              for (;;)
                                switch ((E.prev = E.next)) {
                                  case 0:
                                    return (
                                      (T =
                                        _.length > 1 && void 0 !== _[1]
                                          ? _[1]
                                          : o.NETWORK_DETECT_TYPE.OTHER),
                                      (c =
                                        !(_.length > 2 && void 0 !== _[2]) ||
                                        _[2]),
                                      (i = t(
                                        t({}, n),
                                        {},
                                        {
                                          onStartDetect: (function () {
                                            var t = r(
                                              e().mark(function r(t) {
                                                return e().wrap(function (e) {
                                                  for (;;)
                                                    switch ((e.prev = e.next)) {
                                                      case 0:
                                                        t &&
                                                          d(
                                                            o
                                                              .NETWORK_DETECT_UI_TYPE
                                                              .LOADING,
                                                            "",
                                                            ""
                                                          ),
                                                          O(c, {});
                                                      case 1:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, r);
                                              })
                                            );
                                            return function (e) {
                                              return t.apply(this, arguments);
                                            };
                                          })(),
                                        }
                                      )),
                                      (a =
                                        T === o.NETWORK_DETECT_TYPE.OTHER
                                          ? o.NETWORK_DETECT_COMMAND
                                              .DETECT_IF_NEED
                                          : o.NETWORK_DETECT_COMMAND
                                              .DETECT_MP_REQUEST_IF_NEED),
                                      (E.next = 6),
                                      N(a, i)
                                    );
                                  case 6:
                                    return (
                                      (s = E.sent),
                                      E.abrupt(
                                        "return",
                                        ((function (e) {
                                          var r =
                                              !(
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                              ) || arguments[1],
                                            t = e.type,
                                            E = e.detectResult,
                                            n = e.performance;
                                          if (
                                            E &&
                                            t !==
                                              o.NETWORK_DETECT_RESULT_TYPE
                                                .CANCEL &&
                                            t !==
                                              o.NETWORK_DETECT_RESULT_TYPE
                                                .IGNORE
                                          ) {
                                            var T = E.action,
                                              c = n || {},
                                              i = c.networkType,
                                              a = void 0 === i ? "" : i;
                                            switch (T) {
                                              case o.NETWORK_DETECT_ACTION
                                                .REACHABLE:
                                                p();
                                                break;
                                              case o.NETWORK_DETECT_ACTION
                                                .ABROAD_IP:
                                              case o.NETWORK_DETECT_ACTION
                                                .BLACK_IP:
                                              case o.NETWORK_DETECT_ACTION
                                                .UNREACHABLE:
                                                d(
                                                  o.NETWORK_DETECT_UI_TYPE
                                                    .RESULT,
                                                  T,
                                                  a
                                                ),
                                                  O(r, {});
                                                break;
                                              default:
                                                d(
                                                  o.NETWORK_DETECT_UI_TYPE
                                                    .RESULT,
                                                  o.NETWORK_DETECT_ACTION
                                                    .UNREACHABLE,
                                                  a
                                                ),
                                                  O(r, {});
                                            }
                                          }
                                        })(s, c),
                                        s)
                                      )
                                    );
                                  case 8:
                                  case "end":
                                    return E.stop();
                                }
                            }, E);
                          })
                        );
                        return function (e) {
                          return E.apply(this, arguments);
                        };
                      })()(
                        i,
                        o.NETWORK_DETECT_TYPE.REQUEST,
                        null == (T = null == n ? void 0 : n.config)
                          ? void 0
                          : T.autoNetworkDetect
                      )
                    );
                  case 4:
                    return (a = E.sent), E.abrupt("return", a);
                  case 8:
                    (E.prev = 8),
                      (E.t0 = E.catch(0)),
                      c.aegisReporter.reportEvent(
                        o.NETWORK_DETECT_MONITOR_EVENT.MAIN_DETECT_EXCEPTION,
                        {
                          ext2: s.brokerConfig.base.code,
                          ext3:
                            E.t0 instanceof Error ? E.t0.message : String(E.t0),
                        }
                      );
                  case 11:
                  case "end":
                    return E.stop();
                }
            },
            E,
            null,
            [[0, 8]]
          );
        })
      )).apply(this, arguments);
    }
    function O(o, c) {
      var i;
      o
        ? ((i = r(
            e().mark(function r(E) {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      l(!0), n.networkDetect(t({}, E));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          )),
          function (e) {
            return i.apply(this, arguments);
          })(c)
        : E.index.$emit(T.PLUGIN_SHOW_NETWORK_DETECT, {
            dealerCode: s.brokerConfig.base.code,
            show: !0,
            options: c,
          });
    }
    function p() {
      n.networkDetect.hide(), l(!1), d(o.NETWORK_DETECT_UI_TYPE.HIDDEN, "", "");
    }
    function d(e, r, t) {
      var E;
      (C.action = r), (C.networkType = t), (E = e), (R.value = E);
    }
    function l(e) {
      N(o.NETWORK_DETECT_COMMAND.SYNC_UI_STATUS, { show: e });
    }
    function A(e) {
      return e === o.NETWORK_DETECT_RESULT_TYPE.REACHABLE;
    }
    function W(e) {
      return _.includes(e);
    }
    return {
      uiType: R,
      resultData: C,
      updateData: d,
      isNetworkDetectSuccess: A,
      isNetworkDetectError: W,
      detectRequestIfNeed: D,
      onDetectReceiveResponse: function (e) {
        return N(o.NETWORK_DETECT_COMMAND.RECEIVE_RESPONSE, { response: e }), e;
      },
      onDetectResponseError:
        ((u = r(
          e().mark(function r(E) {
            var n;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.t0 = function (e) {
                        if (e)
                          try {
                            var r,
                              t = e.type,
                              E = (e.errorInfo || {}).type,
                              n = void 0 === E ? "" : E,
                              T =
                                o.NETWORK_DETECT_REQUEST_ERROR_MSG_MAP[n] || "";
                            switch (t) {
                              case o.NETWORK_DETECT_RESULT_TYPE.REACHABLE:
                                r = {
                                  retcode:
                                    o.NETWORK_DETECT_RESULT_TYPE.REACHABLE,
                                  retmsg: o.RETMSG_NETWORK_DETECT_REACHABLE,
                                };
                                break;
                              case o.NETWORK_DETECT_RESULT_TYPE.UNREACHABLE:
                              case o.NETWORK_DETECT_RESULT_TYPE.FAILED:
                                r = {
                                  retcode:
                                    o.NETWORK_DETECT_RESULT_TYPE.UNREACHABLE,
                                  retmsg: T,
                                };
                                break;
                              case o.NETWORK_DETECT_RESULT_TYPE.IGNORE:
                                r = {
                                  retcode: o.NETWORK_DETECT_RESULT_TYPE.IGNORE,
                                  retmsg: T,
                                };
                                break;
                              case o.NETWORK_DETECT_RESULT_TYPE.CANCEL:
                                n && (r = { retcode: n, retmsg: T });
                            }
                            return r;
                          } catch (e) {}
                      }),
                      (e.next = 3),
                      D(E)
                    );
                  case 3:
                    return (
                      (e.t1 = e.sent),
                      (n = (0, e.t0)(e.t1)),
                      e.abrupt(
                        "return",
                        n
                          ? Promise.reject({
                              retcode: n.retcode,
                              retmsg: n.retmsg,
                              data: t({}, n),
                            })
                          : Promise.reject(E)
                      )
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function (e) {
          return u.apply(this, arguments);
        }),
      syncUIStatus: l,
      hideNetworkUI: p,
      handleNetworkDetectError: function (e, r, t) {
        return (
          !!(
            a.getPlatform().isMpPlugin &&
            r &&
            "string" == typeof r.retcode &&
            r.retcode.startsWith("NETWORK_DETECT")
          ) &&
          (W(r.retcode)
            ? (A(r.retcode) &&
                (l(!0),
                i.Dialog({
                  context: e,
                  message: o.RETMSG_NETWORK_DETECT_REACHABLE,
                  confirmButtonText: "刷新",
                  showCancelButton: !1,
                  onConfirm: function () {
                    "function" == typeof t && t();
                  },
                  onHidden: function () {
                    l(!1);
                  },
                })),
              !0)
            : (i.Dialog({
                context: e,
                message: r.retmsg || "服务器繁忙 请稍后再试",
                confirmButtonText: "刷新",
                showCancelButton: !0,
                onConfirm: function () {
                  "function" == typeof t && t();
                },
              }),
              !0))
        );
      },
    };
  });
exports.useNetworkDetect = u;
