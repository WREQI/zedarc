require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/defineProperty");
require("../../@babel/runtime/helpers/Objectvalues");
var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = require("../../@babel/runtime/helpers/objectSpread2"),
  c = require("../../@babel/runtime/helpers/typeof"),
  a = require("../../common/vendor.js"),
  s = require("../log/index.js"),
  i = require("../cookie/mp-weixin.js"),
  u = require("./maps.js"),
  d = require("./reason.js"),
  l = require("./config.js"),
  E = require("../request/index.js"),
  _ = require("../request/replay.js");
require("../broker.js");
var p = require("./reporter.js"),
  b = require("../../config/broker/11100/index.js"),
  m = new s.Log("app:connect"),
  f = new i.AdapterCookie();
a.axios.CancelToken;
var C,
  N,
  S = { INITIAL: 1, CONNECTING: 2, CONNECTED: 3, CLOSED: 4 },
  T = { WEBSOCKET: 1, AJAX: 2 },
  O = 0,
  h = function () {},
  w = new Map();
function R(e) {
  var t =
    arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : ["_firstDataWaiter", "_connectionWaiter", "_heartBeatWaiter"];
  e &&
    t.forEach(function (t) {
      e[t] && (clearTimeout(e[t]), (e[t] = null));
    });
}
function A(e) {
  if (
    (p.reportUnExpectScheme(e.scheme, A._expectScheme),
    e.scheme !== u.SCHEME.NONE &&
      p.updateWebsocketReportKey(e.reportScene || ""),
    e.scheme !== u.SCHEME.NONE || [S.CONNECTED].includes(A.status))
  )
    try {
      if (
        (m.info("connector config change with schema ".concat(e.scheme)),
        A.stopPullers(d.REASON.CONNECT_CREATE),
        A.bindEvents(),
        (A.instance = {}),
        (A.instance.params = e),
        (A.instance.map = {}),
        (A.instance.routers = {}),
        (A.instance.params.options = e.options || {}),
        void 0 === e.scheme || null === e.scheme)
      )
        return m.error("configure connect need proper scheme");
      (A.instance.scheme = a.cloneDeep(
        "object" == c(e.scheme) ? e.scheme : [e.scheme]
      )),
        A.instance.scheme.map(function (e) {
          (A.instance.routers = o(
            o({}, A.instance.routers),
            u.maps[e].routers || {}
          )),
            (A.instance.map = o(o({}, A.instance.map), u.maps[e]));
        }),
        (A.instance.websocketTryTimes = 0),
        (A.instance.isConnectEventFired = !1),
        (A.instance.pullers = {}),
        (A.instance.resource = A.collectResource()),
        (e.context = e.context || {}),
        (e.context.resource = A.instance.resource),
        (e.context.params = A.instance.params),
        (A.resource = A.instance.resource),
        A.create();
    } catch (t) {
      if ("function" != typeof e.error)
        throw { retcode: "ECONN", retmsg: "数据源连接建立失败" };
      e.error({ retcode: "ECONN", retmsg: "数据源连接建立失败" });
    }
}
(A.instance = {}),
  (A.status = S.INITIAL),
  (A.source = void 0),
  (A.connection = void 0),
  (A.resource = {}),
  (A._listeners = {}),
  (A._isWesocketDisabled = !1),
  (A._isWebsocketWaiting = !1),
  (A._websocketErrorCount = 0),
  (A._heartBeatNoReturnCount = 0),
  (A._websocketDisableExpire = 0),
  (A._websocketDisableDuration = 6e4),
  (A._websocketDisableReason = void 0),
  (A._packetDropInfo = {
    hasDropped: !1,
    timestamp: 0,
    scene: null,
    expectedScene: null,
  }),
  (A.collectResource = function () {
    var e = {};
    for (var t in A.instance.routers)
      A.instance.routers.hasOwnProperty(t) &&
        (e[t] = {
          name: t,
          loaded: 0,
          loaded_ajax: 0,
          loaded_websocket: 0,
          tried: 0,
          tried_ajax: 0,
          tried_websocket: 0,
          errorFired: !1,
          stopped: !1,
          data: null,
        });
    return (
      Object.defineProperties(e, {
        length: {
          enumerable: !1,
          get: function () {
            return Object.keys(e).length;
          },
        },
        ready: {
          enumerable: !1,
          get: function () {
            for (var t in e)
              if (e.hasOwnProperty(t) && 0 === e[t].loaded) return !1;
            return !0;
          },
        },
      }),
      e
    );
  }),
  (A.bindEvents = function () {}),
  (A.create = function () {
    var e, t;
    if (
      ((C = f.get("wzq_qluin")),
      (N = f.get("wzq_qlskey")),
      (C && N) || m.warn("creating connect instance without login state"),
      A._websocketErrorCount > l.CONNECT.ERROR_LIMIT &&
        (m.warn(
          "websocket produces errors too many times, we should not use it in this session life"
        ),
        A.disableGlobalWebsocket(1, d.REASON.ERROR_COUNT_LIMIT)),
      A.isWebsocketDisabled() || A._isWebsocketWaiting)
    )
      A.switch(T.AJAX, d.REASON.NOSUPPORT_WSS);
    else {
      if (A.instance.params.source === T.AJAX)
        return A.switch(T.AJAX, d.REASON.SCHEME_REQUIRED);
      A.source === T.WEBSOCKET && A.isWebSocketConnected()
        ? (A.send({
            subscribe_scene: A.getSendingScene(),
            param: A.getSendingParams(),
          }),
          (null == (e = null == A ? void 0 : A.connection) ? void 0 : e.id) &&
            w.has(A.connection.id) &&
            p.reportEvent("wss_use_closing_connection"))
        : A.source === T.WEBSOCKET && A.isWebSocketConnecting()
        ? (null == (t = null == A ? void 0 : A.connection) ? void 0 : t.id) &&
          w.has(A.connection.id) &&
          p.reportEvent("wss_use_closing_connection")
        : A.connection && A.isWebSocketConnecting()
        ? (A.switch(T.AJAX, d.REASON.PENDING_WSS),
          p.reportEvent("wss_timeout_butconnecting"))
        : A.instance.params.scheme !== u.SCHEME.NONE &&
          A.switch(T.WEBSOCKET, d.REASON.CONNECT_CREATE);
    }
  }),
  (A.switch = function (e, t) {
    if (!A.instance)
      return m.warn("connect is not active, cannot call related api");
    if (
      ((e = e || (A.source === T.AJAX ? T.WEBSOCKET : T.AJAX)),
      A.source === e &&
        A.source === T.WEBSOCKET &&
        (A.isWebSocketConnecting() || A.isWebSocketConnected()))
    )
      return !0;
    if (
      (m.info("upgrading source to " + (e === T.AJAX ? "ajax" : "websocket"), {
        reason: t,
      }),
      h("STATICS.CONNECT_UPGRADE_" + (e === T.AJAX ? "AJAX" : "WSS")),
      (A._heartBeatNoReturnCount = 0),
      clearTimeout(A._downgradeIntervalTimer),
      e === T.AJAX)
    ) {
      if (
        (A.connection &&
          t !== d.REASON.PENDING_WSS &&
          (m.info("cleaning heatBeatWiter, firstDataWaiter, connectWaiter"),
          A._heartBeat.stop(),
          clearTimeout(A.connection._heartBeatWaiter),
          clearTimeout(A.connection._firstDataWaiter),
          clearTimeout(A.connection._connectionWaiter),
          (A.connection._heartBeatWaiter = null),
          (A.connection._firstDataWaiter = null),
          (A.connection._connectionWaiter = null)),
        A.emit("upgrade:".concat(T.AJAX), t),
        t !== d.REASON.SCHEME_REQUIRED)
      ) {
        var n =
          t === d.REASON.NOSUPPORT_WSS ? A._websocketDisableReason : void 0;
        p.reportDowngrade(t, n);
      }
      t !== d.REASON.PENDING_WSS && A.stopWebsocket(t), (A.source = T.AJAX);
      var r = +A.instance.params.downgradeInterval || 0;
      r
        ? (A._downgradeIntervalTimer = setTimeout(function () {
            A.startPull(t);
          }, 1e3 * r))
        : A.startPull(t);
    } else
      A.emit("upgrade:".concat(T.WEBSOCKET), t),
        A.stopPullers(t),
        A.startWebsocket(t);
  }),
  (A.emit = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    if (A._listeners[e])
      try {
        A._listeners[e].apply(null, t);
      } catch (t) {
        m.error("emit event[global] ".concat(e, " failed"), t.message);
      }
    var n,
      o = e.split(":"),
      c = A.instance.params,
      a = r(o);
    try {
      for (a.s(); !(n = a.n()).done; ) {
        var s = n.value;
        if (!(c = c[s])) break;
      }
    } catch (e) {
      a.e(e);
    } finally {
      a.f();
    }
    if ("function" == typeof c)
      try {
        return c.apply(A.instance.params.context, t);
      } catch (t) {
        m.error("emit event ".concat(e, " failed"), t.message);
      }
  }),
  (A.startWebsocket = function (e) {
    var r;
    if (
      ((A.source = T.WEBSOCKET),
      ++A.instance.websocketTryTimes > l.CONNECT.TRY_TIME)
    )
      return (
        m.info(
          "retry time out, limited in ".concat(
            l.CONNECT.TRY_TIME,
            ", fallback to ajax"
          )
        ),
        (A.instance.websocketTryTimes = 0),
        A.switch(T.AJAX, d.REASON.MAX_RETRY_TIME),
        !1
      );
    try {
      var o = (function () {
        var e = n(
          t().mark(function e(n) {
            var o, c, a, s, i, b, f;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ++r._messageRecieveCount,
                        (a = A.instance.resource),
                        clearTimeout(r._firstDataWaiter),
                        1 === r._messageRecieveCount &&
                          ((r._performance.data = Date.now()),
                          m.info(
                            "websocket performance ".concat(
                              (
                                (r._performance.data - r._performance.connect) /
                                1e3
                              ).toFixed(1),
                              "s"
                            ),
                            r._performance
                          ),
                          h(
                            "STATICS.CONNECT_DATA_AVGTIME_".concat(
                              (
                                (r._performance.data - r._performance.connect) /
                                1e3
                              ).toFixed(1)
                            )
                          )),
                        (e.prev = 3),
                        (s = JSON.parse(n.data)),
                        (e.next = 10);
                      break;
                    case 7:
                      return (
                        (e.prev = 7),
                        (e.t0 = e.catch(3)),
                        e.abrupt(
                          "return",
                          (m.error("invalid response", e.t0.message),
                          ++A._websocketErrorCount,
                          1 === r._messageRecieveCount
                            ? (m.warn(
                                "receive invalid data on first push, switch to ajax"
                              ),
                              void A.switch(T.AJAX, d.REASON.INVALID_RESP))
                            : void (++r._invalidRspCount > 3
                                ? (m.warn(
                                    "receive invalid push response more than 3 times, switch to ajax"
                                  ),
                                  A.switch(T.AJAX, d.REASON.INVALID_RESP))
                                : A._websocketErrorCount >
                                    l.CONNECT.ERROR_LIMIT &&
                                  (m.warn(
                                    "error count more than limitation, switch to ajax"
                                  ),
                                  A.disableGlobalWebsocket(
                                    1,
                                    d.REASON.ERROR_COUNT_LIMIT
                                  ),
                                  A.switch(
                                    T.AJAX,
                                    d.REASON.ERROR_COUNT_LIMIT
                                  ))))
                        )
                      );
                    case 10:
                      if ("1" !== s.pong) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (m.info("pong!"),
                        clearTimeout(A.connection._heartBeatWaiter),
                        (A.connection._heartBeatWaiter = null),
                        void (A._heartBeatNoReturnCount = 0))
                      );
                    case 12:
                      if (
                        ((e.prev = 12),
                        !(null ==
                        (c =
                          null == (o = null == A ? void 0 : A.instance)
                            ? void 0
                            : o.params)
                          ? void 0
                          : c.acceptSchemes) || !s.scene)
                      ) {
                        e.next = 17;
                        break;
                      }
                      if (
                        ((i = A.instance.params.acceptSchemes),
                        Object.values(i)
                          .map(function (e) {
                            return Array.isArray(e) ? e.join("++") : String(e);
                          })
                          .includes(String(s.scene)))
                      ) {
                        e.next = 17;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (m.error("unexpect response, scene not match!"),
                        "new_home_push" === s.data_describe &&
                          (A._packetDropInfo = {
                            hasDropped: !0,
                            timestamp: Date.now(),
                            scene: s.scene,
                            expectedScene: A.getSendingScene(),
                          }),
                        void p.reportUnMatchScene(
                          s.scene,
                          A.getSendingScene(),
                          s.data_describe
                        ))
                      );
                    case 17:
                      e.next = 21;
                      break;
                    case 19:
                      (e.prev = 19), (e.t1 = e.catch(12));
                    case 21:
                      if (
                        "secuinfo" !== s.data_describe &&
                        (s.data_describe || (!s.secu_quote && !s.secu_info))
                      ) {
                        e.next = 25;
                        break;
                      }
                      (s.data_describe = "[quotation]"),
                        A.emit("data:quotation", s),
                        (e.next = 62);
                      break;
                    case 25:
                      if ("new_home_push" !== s.data_describe) {
                        e.next = 29;
                        break;
                      }
                      (s.data_describe = "[new_home_push]"),
                        A.emit("data:new_home_push", s),
                        (e.next = 62);
                      break;
                    case 29:
                      if (!a[s.data_describe]) {
                        e.next = 61;
                        break;
                      }
                      if (
                        (a[s.data_describe].tried++,
                        a[s.data_describe].tried_websocket++,
                        "0" === s.retcode)
                      ) {
                        e.next = 47;
                        break;
                      }
                      if (!l.REGEXP.NEED_TRADE_SESSION.test(s.retcode)) {
                        e.next = 45;
                        break;
                      }
                      return (
                        m.warn(
                          "trade session expired, try re-grant session with password popup for resource ".concat(
                            s.data_describe
                          )
                        ),
                        (e.prev = 33),
                        (e.next = 36),
                        _.passwordCheckHandler(E.request, s, _.FLAG_NOREPLAY)
                      );
                    case 36:
                      m.info(
                        "trade session re-granted， resend scheme subscribtion to get data we need"
                      ),
                        A.send({
                          subscribe_scene: A.instance.scheme.join("++"),
                          param: A.getSendingParams(),
                        }),
                        (e.next = 43);
                      break;
                    case 40:
                      return (
                        (e.prev = 40), (e.t2 = e.catch(33)), e.abrupt("return")
                      );
                    case 43:
                      e.next = 46;
                      break;
                    case 45:
                      0 === a[s.data_describe].loaded &&
                        (A.emit(
                          "error",
                          s,
                          !a[s.data_describe].errorFired,
                          s.data_describe
                        ),
                        (a[s.data_describe].errorFired = !0));
                    case 46:
                      return e.abrupt("return");
                    case 47:
                      a[s.data_describe].loaded++,
                        a[s.data_describe].loaded_websocket++,
                        (a[s.data_describe].data = s),
                        (b = {}),
                        (e.t3 = t().keys(A.instance._sentParams));
                    case 50:
                      if ((e.t4 = e.t3()).done) {
                        e.next = 58;
                        break;
                      }
                      if (
                        ((f = e.t4.value),
                        !A.instance._sentParams.hasOwnProperty(f))
                      ) {
                        e.next = 56;
                        break;
                      }
                      if (!u.maps[f].routers.hasOwnProperty(s.data_describe)) {
                        e.next = 56;
                        break;
                      }
                      return (
                        (b = A.instance._sentParams[f]), e.abrupt("break", 58)
                      );
                    case 56:
                      e.next = 50;
                      break;
                    case 58:
                      A.emit(
                        "data:".concat(s.data_describe),
                        s,
                        1 === a[s.data_describe].loaded,
                        { url: s.data_describe, data: b }
                      ),
                        (e.next = 62);
                      break;
                    case 61:
                      m.warn(
                        "receive unregistered push data: '".concat(
                          s.data_describe,
                          "'"
                        )
                      );
                    case 62:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [3, 7],
                [12, 19],
                [33, 40],
              ]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      (A.status = S.CONNECTING),
        m.info("creating new websocket interface"),
        h("STATICS.CONNECT_CREATE"),
        ((r = a.index.connectSocket({
          url: "wss://".concat(b.brokerConfig.base.domain, "/wss/trade"),
          complete: function () {},
        })).id = O++),
        (A.connection = r),
        (r._messageRecieveCount = 0),
        (r._performance = { create: Date.now() }),
        clearTimeout(r._connectionWaiter),
        (r._connectionWaiter = setTimeout(function () {
          (r._connectionWaiter = null),
            m.warn(
              "websocket connect timeout after 10000ms, switching to ajax source"
            ),
            A.disableGlobalWebsocket(1, d.REASON.CONNECT_TIMEOUT),
            A.switch(T.AJAX, d.REASON.CONNECT_TIMEOUT);
        }, 1e4)),
        (r._invalidRspCount = 0),
        r.onOpen(function () {
          m.info("connection established"),
            (A.status = S.CONNECTED),
            A.emit("connected"),
            (A.instance.isConnectEventFired = !0),
            clearTimeout(r._connectionWaiter),
            h("STATICS.CONNECT_OPEN"),
            (r._performance.connect = Date.now()),
            m.info(
              "websocket performance ".concat(
                (
                  (r._performance.connect - r._performance.create) /
                  1e3
                ).toFixed(1),
                "s"
              ),
              r._performance
            ),
            h(
              "STATICS.CONNECT_OPEN_AVGTIME_".concat(
                (
                  (r._performance.connect - r._performance.create) /
                  1e3
                ).toFixed(1)
              )
            ),
            A.source === T.AJAX &&
              (m.warn(
                "get websocket open event when source is already switched to ajax, try to flag source to websocket"
              ),
              (A.source = T.WEBSOCKET),
              A.emit("upgrade:".concat(T.WEBSOCKET), e),
              A.stopPullers(e)),
            A.send({
              subscribe_scene: A.instance.scheme.join("++"),
              param: A.getSendingParams(),
            });
          var t = A.instance.map.firstPushTimeout || 1500;
          R(A.connection, ["_firstDataWaiter"]),
            (r._firstDataWaiter = setTimeout(function () {
              (r._firstDataWaiter = null),
                A.instance.map.noFirstDataWaiter ||
                  (m.warn(
                    "no data recived after subscribe in ".concat(
                      t,
                      "ms, switching to ajax source"
                    )
                  ),
                  A.switch(T.AJAX, d.REASON.NO_DATA_PUSH));
            }, t)),
            A._heartBeat.start(r.id),
            p.reportRecovery();
        }),
        r.onMessage(o),
        r.onClose(
          function (e, t) {
            var n, o, c, a, s, i;
            if (
              (w.has(e) && w.delete(e),
              m.info("websocket is closed as code ".concat(t.code)),
              A.source === T.AJAX)
            )
              return m.warn(
                "websocket close event received in-regularly, source is already ajax, so this event will be ignored"
              );
            if (
              (null == (n = null == A ? void 0 : A.connection)
                ? void 0
                : n.id) !== e
            )
              return (
                p.reportEvent("wss_close_wssid_notmatch", {
                  ext4: ""
                    .concat(
                      null == (o = null == A ? void 0 : A.connection)
                        ? void 0
                        : o.id,
                      "_"
                    )
                    .concat(e),
                  ext6: (null == t ? void 0 : t.code) || "empty",
                }),
                void m.info(
                  "websocket is miss closed,  previous id:"
                    .concat(e, ", current id:")
                    .concat(
                      null == (c = null == A ? void 0 : A.connection)
                        ? void 0
                        : c.id
                    )
                )
              );
            switch (
              (clearTimeout(r._firstDataWaiter),
              clearTimeout(r._connectionWaiter),
              (t = t || { code: 1006 }),
              (A.status = S.CLOSED),
              A._heartBeat.stop(),
              A.connection &&
                (A.connection._closeAction !== d.REASON.CONNECT_CREATE
                  ? (m.info("connection closed", t.code),
                    A.emit("disconnected", t.code),
                    p.reportEvent("connect_disconnected", {
                      ext4: t.code || "empty",
                      ext6: "websocket",
                    }))
                  : delete A.connection._closeAction),
              h("STATICS.CONNECT_CLOSE_".concat((t && t.code) || "CODE", "_")),
              +t.code)
            ) {
              case 1e3:
              case 1005:
                A.connection = void 0;
                break;
              case 1006:
                (s = r._isClientAction),
                  (A.connection = void 0),
                  h("STATICS.CONNECT_UNNORMAL_BROKEN"),
                  h("STATICS.CONNECT_UNNORMAL_BROKEN_".concat(t.code)),
                  ++A._websocketErrorCount,
                  s ||
                    (m.info(
                      "retry connecting, current tried times ".concat(
                        A.instance.websocketTryTimes
                      )
                    ),
                    A.startWebsocket(d.REASON.RETRY_WEBSOCKET));
                break;
              case 4001:
                h("STATICS.CONNECT_NEED_LOGIN"),
                  (A.connection = void 0),
                  m.info("server response with session expired");
                break;
              case 4002:
                h("STATICS.CONNECT_SERVER_DELAY"),
                  (i = JSON.parse(t.reason || {})),
                  (a =
                    parseInt(i.next_time || 0, 10) -
                    parseInt(i.current_time || 0, 10)),
                  A.switch(),
                  (A.connection = void 0),
                  (A._isWebsocketWaiting = !0),
                  (A.instance._switchDelay = setTimeout(function () {
                    (A._isWebsocketWaiting = !1), A.switch(T.WEBSOCKET);
                  }, 1e3 * a));
                break;
              case 4003:
                h("STATICS.CONNECT_SERVER_UPGRADE"),
                  A.disableGlobalWebsocket(1, d.REASON.SERVER_DIRECTIVE),
                  A.switch(T.AJAX, d.REASON.SERVER_DIRECTIVE),
                  (A.connection = void 0);
                break;
              case 4004:
                h("STATICS.CONNECT_SERVER_HEAVY_LOAD"),
                  (a = ~~(5 + 10 * Math.random())),
                  m.warn("heavy load, deplay for ".concat(a, "s")),
                  A.switch(),
                  (A.connection = void 0),
                  setTimeout(function () {
                    m.info(
                      "4004 delay tick out, switching back to websocket source"
                    ),
                      A.switch(T.WEBSOCKET);
                  }, 1e3 * a);
                break;
              case 4005:
                h("STATICS.CONNECT_SERVER_DISCONNECT"), (A.connection = void 0);
                break;
              case 4007:
                (C = f.get("wzq_qluin")),
                  (N = f.get("wzq_qlskey")),
                  (C && N) || m.warn("require login state"),
                  h("STATICS.CONNECT_SCHEME_ERROR"),
                  ++A._websocketErrorCount,
                  m.warn("wrong subscribe_scene, maybe mis-spelled?"),
                  A.switch(T.AJAX, d.REASON.WRONG_SCHEME),
                  (A.connection = void 0);
                break;
              case 4008:
                h("STATICS.CONNECT_MAXIUM_PERSONAL_CONNECTION"),
                  ++A._websocketErrorCount,
                  m.warn("over maxium limit of personal connection"),
                  A.disableGlobalWebsocket(1, d.REASON.SERVER_DIRECTIVE),
                  A.switch(T.AJAX, d.REASON.SERVER_DIRECTIVE),
                  (A.connection = void 0);
                break;
              case 4009:
                h("STATICS.CONNECT_MAXIUM_CONNECTION"),
                  ++A._websocketErrorCount,
                  m.warn("over maxium limit of connection"),
                  A.disableGlobalWebsocket(1, d.REASON.SERVER_DIRECTIVE),
                  A.switch(T.AJAX, d.REASON.SERVER_DIRECTIVE),
                  (A.connection = void 0);
                break;
              default:
                h("STATICS.CONNECT_UNNORMAL_BROKEN"),
                  h("STATICS.CONNECT_UNNORMAL_BROKEN_".concat(t.code)),
                  ++A._websocketErrorCount,
                  A.emit("close", d.REASON.SERVER_DIRECTIVE, t),
                  A.disableGlobalWebsocket(1, d.REASON.CONNECT_ERROR),
                  A.switch(T.AJAX, d.REASON.CONNECT_ERROR),
                  (A.connection = void 0);
            }
            p.reportEndTime("wss_close_time");
          }.bind(null, A.connection.id)
        ),
        r.onError(function (e) {
          m.error("connection error", e),
            A.emit("error", {
              retcode: d.REASON.CONNECT_ERROR,
              retmsg: e.type,
            });
        });
    } catch (e) {
      m.error("error constructing websocket connection", e.message),
        A.disableGlobalWebsocket(2, d.REASON.CREATE_ERROR),
        A.switch(T.AJAX, d.REASON.CREATE_ERROR),
        p.reportEvent("wss_create_error", { ext4: e.message || "empty" });
    }
  }),
  (A.getSendingScene = function () {
    return A.instance.scheme.join("++");
  }),
  (A.getSendingParams = function () {
    var t = {};
    if (!A.instance.params.beforeSend) return t;
    var n,
      c = r(A.instance.scheme);
    try {
      for (c.s(); !(n = c.n()).done; ) {
        var s = n.value,
          i = A.instance.params.beforeSend[s];
        a.isFunction(i)
          ? (t = o(
              o({}, t),
              {},
              e({}, s, o({}, i.call(A.instance.params.context)))
            ))
          : a.isPlainObject(i) && (t = o(o({}, t), {}, e({}, s, o({}, i))));
      }
    } catch (e) {
      c.e(e);
    } finally {
      c.f();
    }
    return t;
  }),
  (A.getPacketDropInfo = function () {
    return A._packetDropInfo;
  }),
  (A.getConnectionInfo = function () {
    var t,
      n,
      r = (e((t = {}), T.WEBSOCKET, "websocket"), e(t, T.AJAX, "ajax"), t),
      o =
        (e((n = {}), S.INITIAL, "initial"),
        e(n, S.CONNECTING, "connecting"),
        e(n, S.CONNECTED, "connected"),
        e(n, S.CLOSED, "closed"),
        n),
      c = {
        source: r[A.source] || "unknown",
        status: o[A.status] || "unknown",
      };
    return (
      A.source === T.WEBSOCKET && A.connection
        ? (c.readyState = A.connection.readyState)
        : A.source === T.AJAX
        ? (c.readyState = "ajax")
        : (c.readyState = "unknown"),
      c
    );
  }),
  (A._heartBeat = {
    start: function (e) {
      m.info("heart beat will start", e),
        A.connection._heartBeatInterval &&
          (clearInterval(A.connection._heartBeatInterval),
          m.warn(
            "heart beat is started multiple times, you should check this",
            e
          )),
        (A.connection._heartBeatInterval = setInterval(function () {
          A.connection &&
            (A.isWebSocketConnected()
              ? (A.send({ ping: "1" }),
                clearTimeout(A.connection._heartBeatWaiter),
                (A.connection._heartBeatWaiter = setTimeout(function () {
                  (A.connection._heartBeatWaiter = null),
                    ++A._heartBeatNoReturnCount > 3 &&
                      (m.warn(
                        "ping without pong several times, switching to ajax for reliability",
                        e
                      ),
                      (A._heartBeatNoReturnCount = 0),
                      A.disableGlobalWebsocket(
                        1,
                        d.REASON.NO_HEART_BEAT_RETURNS
                      ),
                      A.switch(T.AJAX, d.REASON.NO_HEART_BEAT_RETURNS));
                }, 600)))
              : p.reportEvent("wss_heartbeat_notconnected"));
        }, 1e4));
    },
    stop: function () {
      var e, t;
      m.info("heart beat will stop"),
        (null == (e = null == A ? void 0 : A.connection)
          ? void 0
          : e._heartBeatInterval) &&
          (clearInterval(A.connection._heartBeatInterval),
          delete A.connection._heartBeatInterval),
        (null == (t = null == A ? void 0 : A.connection)
          ? void 0
          : t._heartBeatWaiter) &&
          (clearTimeout(A.connection._heartBeatWaiter),
          delete A.connection._heartBeatWaiter);
    },
  }),
  (A.startPull = function (e) {
    for (var t in ((A.source = T.AJAX),
    (A.status = S.CONNECTED),
    A.emit("connected"),
    (A.instance.isConnectEventFired = !0),
    A.instance.routers))
      A.instance.routers.hasOwnProperty(t) &&
        A.instance.resource.hasOwnProperty(t) &&
        ((A.instance.resource[t].stopped = !1), A._definePuller(t));
    A.detectWebsocket();
  }),
  (A._definePuller = function (e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : A.instance.params.options.interval || l.TIME_DIFF;
    A._requestPuller(e)
      .then(function () {
        var n;
        A.resource[e] &&
          A.source == T.AJAX &&
          ((null == (n = A.instance.resource[e]) ? void 0 : n.stopped) ||
            ("os-ppuNWP0Bn6UGa605iMvhDyamI" === f.get("wzq_qluin")
              ? (t = 1e4)
              : ((t = 1e3 * a.get(A.resource[e].data, "refresh_time", t / 1e3)),
                (t = Math.max(t, 2e3))),
            "1" !== a.get(A.resource[e].data, "stop_refresh") &&
              ((A.instance.pullers[e] = setTimeout(function () {
                var t, n;
                (null == (n = null == (t = A.instance) ? void 0 : t.resource[e])
                  ? void 0
                  : n.stopped) || A._definePuller(e);
              }, t)),
              t > 3e4 &&
                m.warn(
                  "request delay for "
                    .concat(e, " is pretty large(")
                    .concat(t / 1e3, "s)")
                ))));
      })
      .catch(function (e) {
        a.axios.isCancel(e);
      });
  }),
  (A._requestPuller = function (e) {
    var t = A.instance.resource;
    if (!t || !t[e]) return Promise.reject();
    if ((delete t[e].delayed, t[e].pending))
      return (
        m.warn("request ".concat(e, " is pending, awaiting response...")),
        Promise.resolve()
      );
    var n = Object.assign({}, A.instance.routers[e].data),
      r = Object.assign({}, A.instance.routers[e].options);
    if (A.instance.params.beforeRequest) {
      var c = A.emit("beforeRequest:".concat(e), n, r);
      if (!1 === c) return (t[e].delayed = !0), Promise.resolve();
      n = Object.assign(n || {}, c);
    }
    return (
      (t[e].pending = !0),
      (t[e].request = E.request(e, o({}, n), o({}, r))),
      t[e].tried++,
      t[e].tried_ajax++,
      t[e].request
        .then(function (r) {
          var o;
          for (o in ((r = r.data),
          (t[e].pending = !1),
          t[e].loaded++,
          t[e].loaded_ajax++,
          (t[e].data = r),
          A.emit("data:".concat(e), r, 1 === t[e].loaded, { url: e, data: n }),
          t))
            t.hasOwnProperty(o) &&
              t[o].delayed &&
              (m.info("re-send delayed request ".concat(o)),
              A._requestPuller(o));
          return (
            "1" === r.stop_refresh &&
              (m.info(
                "cgi<".concat(
                  e,
                  "> respond with directive 'stop_refresh'=1, stopping..."
                )
              ),
              A.stopPullers(d.REASON.SERVER_DIRECTIVE, [e])),
            r
          );
        })
        .catch(function (n) {
          throw (
            ((t[e].pending = !1),
            a.axios.isCancel(n) ||
              (0 === t[e].loaded &&
                (A.emit("error", n, !t[e].errorFired, e),
                (t[e].errorFired = !0))),
            n)
          );
        })
    );
  }),
  (A.stopWebsocket = function (e) {
    if (A.source === T.WEBSOCKET) {
      if (!A.connection)
        return m.error(
          "connector.connection is necessary here, check if it is cleared elsewhere"
        );
      (A.connection._closeAction = e || !0),
        (A.connection._isClientAction = !0),
        (A.instance.websocketTryTimes = 0),
        R(A.connection, ["_connectionWaiter", "_firstDataWaiter"]),
        A._heartBeat.stop(),
        A.isWebSocketConnected()
          ? (m.info("positively closing websocket now, notice the errcode"),
            A.connection.close({ code: 1e3 }),
            A.connection.id && w.set(A.connection.id, 1),
            p.reportStartTime("wss_close_time"))
          : p.reportEvent("wss_close_notconnected");
    } else
      m.warn("source websocket is not connected, there is no need to stop");
  }),
  (A.stopPullers = function (e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : Object.keys(A.resource);
    if ((clearTimeout(A._downgradeIntervalTimer), A.instance)) {
      var n,
        o = r(t);
      try {
        for (o.s(); !(n = o.n()).done; ) {
          var c = n.value;
          A.instance.resource[c] &&
            A.instance.resource[c].pending &&
            (A.instance.resource[c].request &&
              A.instance.resource[c].cancel &&
              A.instance.resource[c].cancel("stop pullers"),
            m.info(
              "puller<".concat(c, "> is cancelled, due to pending request")
            )),
            clearTimeout(A.instance.pullers[c]),
            (A.instance.resource[c].stopped = !0),
            m.info("puller<".concat(c, "> is stopped"), A.instance.pullers[c]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      t.length > 0 &&
        Object.keys(A.instance.resource).every(function (e) {
          return A.instance.resource[e].stopped;
        }) &&
        (m.info("all resource are now stopped"),
        (A.instance.pullers = {}),
        A.source === T.AJAX &&
          ((A.status = S.CLOSED),
          e !== d.REASON.CONNECT_CREATE &&
            (A.emit("disconnected", e),
            p.reportEvent("connect_disconnected", { ext4: e, ext6: "ajax" }))));
    }
  }),
  (A.clearListeners = function () {
    A.instance &&
      (delete A.instance.params.data, delete A.instance.params.error);
  }),
  (A.send = function (e) {
    (C = f.get("wzq_qluin")),
      (N = f.get("wzq_qlskey")),
      e.param
        ? ((A.instance._sentParams = e.param),
          (e.param = Object.keys(e.param)
            .map(function (t) {
              return "".concat(t, "||").concat(a.lib.stringify(e.param[t]));
            })
            .join("++")))
        : ((A.instance._sentParams = {}), delete e.param),
      (e = Object.assign(
        e,
        e.ping ? {} : { qluin: C, skey: N },
        e.ping ? {} : { secu_type: A.instance.map.secu_type || "1" }
      )),
      A.instance.params.options.scode &&
        (e = Object.assign(
          e,
          e.ping ? {} : { scode: A.instance.params.options.scode || "" }
        )),
      e.ping
        ? m.info("ping!")
        : m.info(
            "sending command",
            a.mapValues(e, function (e, t) {
              return ["qluin", "skey", "param"].includes(t) ? "?" : e;
            })
          ),
      A.connection.send({ data: JSON.stringify(e) });
  }),
  (A.detectWebsocket = function () {
    A.isWebsocketDisabled() ||
      (A._websocketDetector = setInterval(function () {}, 5e3));
  }),
  (A.listen = function (e) {
    for (var t in ((A._listeners = {}), e))
      "function" == typeof e[t] && (A._listeners[t] = e[t]);
  });
var k = function () {
  try {
    switch (A.source) {
      case T.AJAX:
        A.stopPullers();
        break;
      case T.WEBSOCKET:
        A.stopWebsocket(d.REASON.CLIENT_DIRECTIVE);
    }
  } catch (e) {}
};
A.disconnect = k;
var v = function () {
  try {
    switch (A.source) {
      case T.AJAX:
        A.stopPullers();
        break;
      case T.WEBSOCKET:
        A({ scheme: u.SCHEME.NONE });
    }
  } catch (e) {}
};
(A.unsubscribe = v),
  (A.reconnect = function (e) {
    A.source === T.AJAX
      ? A.status === S.CLOSED
        ? (m.info(
            "connector is closed state, and source is ajax, reconnect for new data now..."
          ),
          A(A.instance.params))
        : e && A.instance.resource[e].stopped
        ? ((A.resource[e].stopped = !1), A._definePuller(e))
        : A(A.instance.params)
      : A.source === T.WEBSOCKET &&
        (A.source === S.CLOSED &&
          m.info(
            "connector is closed state, and source is websocket, reconnect for new data now..."
          ),
        A(A.instance.params));
  }),
  (A.shouldEnable = function (e) {
    return !a.isArray(l.CONNECT.BROKERS) || -1 !== l.CONNECT.BROKERS.indexOf(e);
  }),
  (A.disableGlobalWebsocket = function (e, t) {
    try {
      if (2 === e)
        return (
          (A._isWesocketDisabled = !0),
          (A._websocketDisableExpire = 0),
          void (A._websocketDisableReason = t)
        );
      (A._isWesocketDisabled = !0),
        (A._websocketDisableExpire = Date.now() + A._websocketDisableDuration),
        (A._websocketDisableReason = t),
        t === d.REASON.ERROR_COUNT_LIMIT &&
          (m.info(
            "websocket error count reset due to ERROR_COUNT_LIMIT disable, previous count: ".concat(
              A._websocketErrorCount
            )
          ),
          (A._websocketErrorCount = 0)),
        m.info(
          "websocket disabled for "
            .concat(A._websocketDisableDuration / 1e3, " seconds, reason: ")
            .concat(t)
        );
    } catch (e) {
      (A._isWesocketDisabled = !0), (A._websocketDisableReason = t);
    }
  }),
  (A.isWebsocketDisabled = function () {
    try {
      return (
        A._isWesocketDisabled &&
          A._websocketDisableExpire &&
          Date.now() > A._websocketDisableExpire &&
          ((A._isWesocketDisabled = !1),
          (A._websocketDisableExpire = 0),
          m.info("websocket disable expired, reset to enabled")),
        A._isWesocketDisabled
      );
    } catch (e) {
      return A._isWesocketDisabled;
    }
  }),
  (A.isWebsocketConnectedByReadyState = function () {
    try {
      return (
        !!A.connection &&
        (void 0 === A.connection.readyState || 1 === A.connection.readyState)
      );
    } catch (e) {
      return (
        m.error("error checking websocket connection status", e.message), !0
      );
    }
  }),
  (A.isWebSocketConnected = function () {
    return A.status === S.CONNECTED && A.isWebsocketConnectedByReadyState();
  }),
  (A.isWebSocketConnecting = function () {
    return (
      (function () {
        try {
          return (
            !!A.connection &&
            (void 0 === A.connection.readyState ||
              0 === A.connection.readyState)
          );
        } catch (e) {
          return (
            m.error("error checking websocket connecting status", e.message), !0
          );
        }
      })() && A.status === S.CONNECTING
    );
  }),
  (A.STATUS = S),
  (A.REASON = d.REASON),
  (A.SOURCE = T),
  (A.COMMAND = { RECONNECT: "retry_connect", RESUBSCIBE: "retry_subscribe" }),
  (A.SCHEME = u.SCHEME),
  (exports.SOURCE = T),
  (exports.connector = A),
  (exports.disconnect = k),
  (exports.unsubscribe = v),
  (exports.updateExpectScheme = function (e) {
    A._expectScheme = e;
  });
