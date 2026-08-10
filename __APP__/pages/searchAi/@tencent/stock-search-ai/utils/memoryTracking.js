require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  i = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  f = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  h = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && f(e, n, t[n]);
    if (l) {
      var r,
        o = a(l(t));
      try {
        for (o.s(); !(r = o.n()).done; ) {
          n = r.value;
          s.call(t, n) && f(e, n, t[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  v = function (e, t, n) {
    return new Promise(function (r, a) {
      var o = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, i);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../../../common/vendor.js"),
  p = require("./StockBridgeWrapper.js"),
  g = require("../../../compare-versions/lib/esm/index.js"),
  m = (require("./RequestUtils.js"), require("../../stock-news-sdk/index.js")),
  y = require("../hooks/useComponentConfigHooks.js"),
  b = (function () {
    function e() {
      n(this, e),
        (this.messageList = []),
        (this.isMatching = !1),
        (this.replayMatchedCount = 0),
        (this.isReplayFullyMatched = !1),
        (this.hasReplayMismatch = !1);
    }
    return (
      r(e, [
        {
          key: "addMessage",
          value: function (e) {
            try {
              this.messageList.push({ event: e.event, data: e.data }),
                this.messageList.length;
            } catch (e) {}
          },
        },
        {
          key: "checkReplayState",
          value: function (e) {
            try {
              if (0 === this.messageList.length)
                return (
                  (this.isReplayFullyMatched = !0),
                  (this.isMatching = !1),
                  { type: "no_cache" }
                );
              if (this.hasReplayMismatch) return { type: "mismatch_blocked" };
              if (this.isReplayFullyMatched)
                return { type: "new_after_replay" };
              var t = this.replayMatchedCount;
              return t >= this.messageList.length
                ? ((this.isReplayFullyMatched = !0),
                  (this.isMatching = !1),
                  { type: "new_after_replay" })
                : this._getMessageHash(this.messageList[t]) ===
                  this._getMessageHash(e)
                ? ((this.replayMatchedCount += 1),
                  (this.isMatching =
                    this.replayMatchedCount < this.messageList.length),
                  this.replayMatchedCount === this.messageList.length
                    ? ((this.isReplayFullyMatched = !0),
                      { type: "cache_match_completed" })
                    : {
                        type: "cache_duplicate",
                        matchedCount: this.replayMatchedCount,
                        totalCount: this.messageList.length,
                      })
                : ((this.hasReplayMismatch = !0),
                  (this.isMatching = !1),
                  {
                    type: "mismatch_blocked",
                    expectedIndex: t,
                    totalCount: this.messageList.length,
                  });
            } catch (e) {
              return (
                (this.hasReplayMismatch = !0),
                (this.isMatching = !1),
                { type: "mismatch_blocked" }
              );
            }
          },
        },
        {
          key: "checkDuplicate",
          value: function (e) {
            var t = this.checkReplayState(e);
            return (
              "cache_duplicate" === t.type || "cache_match_completed" === t.type
            );
          },
        },
        {
          key: "resetMatchState",
          value: function () {
            (this.isMatching = !1),
              (this.replayMatchedCount = 0),
              (this.isReplayFullyMatched = !1),
              (this.hasReplayMismatch = !1);
          },
        },
        {
          key: "clearCache",
          value: function () {
            try {
              this.messageList.length,
                (this.messageList = []),
                (this.isMatching = !1),
                (this.replayMatchedCount = 0),
                (this.isReplayFullyMatched = !1),
                (this.hasReplayMismatch = !1);
            } catch (e) {}
          },
        },
        {
          key: "getCacheInfo",
          value: function () {
            return {
              messageCount: this.messageList.length,
              hasCache: this.messageList.length > 0,
              isMatching: this.isMatching,
              replayMatchedCount: this.replayMatchedCount,
              isReplayFullyMatched: this.isReplayFullyMatched,
              hasReplayMismatch: this.hasReplayMismatch,
            };
          },
        },
        {
          key: "_normalizeJsonString",
          value: function (e) {
            try {
              var t = JSON.parse(e);
              return JSON.stringify(t);
            } catch (t) {
              return e.trim();
            }
          },
        },
        {
          key: "_getMessageHash",
          value: function (e) {
            if (!e || !e.data) return "";
            try {
              var t = this._normalizeJsonString(e.data);
              return "".concat(e.event || "", ":").concat(t);
            } catch (t) {
              return "".concat(e.event || "", ":").concat(e.data);
            }
          },
        },
      ]),
      e
    );
  })();
function k(e) {
  var t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "POST",
    n = null,
    r = e.indexOf("?");
  if (r < 0) return null;
  var o,
    i = e.substring(r + 1).split("&"),
    u = [],
    l = a(i);
  try {
    for (l.s(); !(o = l.n()).done; ) {
      var c = o.value,
        s = c.indexOf("=");
      if (s >= 0) {
        var f = c.substring(0, s),
          h = c.substring(s + 1);
        "" !== h && u.push([f, decodeURIComponent(h)]);
      }
    }
  } catch (e) {
    l.e(e);
  } finally {
    l.f();
  }
  u.sort(function (e, t) {
    return e[0].localeCompare(t[0]);
  });
  for (var v = "", d = 0; d < u.length; d++)
    (v = v.concat(u[d][0]).concat("=").concat(u[d][1])),
      d !== u.length - 1 && (v = v.concat("&"));
  var p = "Android",
    g = "".concat(p).concat(t);
  return (
    (v = v.concat("&key=").concat(S(g))),
    (n = S(v)),
    ""
      .concat(e, "&x-appid=")
      .concat(p, "&x-timestamp=")
      .concat(new Date().valueOf(), "&x-sa-v=2&x-sa-sign=")
      .concat(n)
  );
}
function S(e) {
  return d.md5Module(e).toString().toUpperCase();
}
var w = null,
  x = null,
  C = null,
  M = null,
  B = function () {
    C && (clearTimeout(C), (C = null)),
      M && (d.wx$1.offNetworkStatusChange(M), (M = null));
  },
  R = (function () {
    function e() {
      n(this, e),
        (this.isRetrying = !1),
        (this._retryTimer = null),
        (this.currentCreated = null),
        (this.currentId = null),
        (this.retryCount = 0),
        (this.maxRetryCount = 3),
        (this.hasFatalError = !1),
        (this.isAborted = !1),
        (this.stopStream = null),
        (this.cache = new b());
    }
    return (
      r(e, [
        {
          key: "setStopStream",
          value: function (e) {
            this.stopStream = e;
          },
        },
        {
          key: "wrapOnMessage",
          value: function (e, t) {
            var n = this;
            return function (r) {
              if (!n.hasFatalError && ("" !== r.event || "" !== r.data)) {
                n.retryCount > 0 && (n.retryCount = 0);
                try {
                  var a = r.data,
                    o = !1;
                  try {
                    var i = JSON.parse(a);
                    i.created && ((o = !0), (n.currentCreated = i.created)),
                      i.id && (n.currentId = i.id);
                  } catch (e) {}
                  if (o) {
                    if (n.isRetrying) {
                      var u = n.cache.checkReplayState(r);
                      if ("cache_duplicate" === u.type) return;
                      if ("cache_match_completed" === u.type) return;
                      if ("mismatch_blocked" === u.type) {
                        var l = new Error("SSE replay mismatch, stop retry");
                        return (
                          (l.name = "SSEReplayMismatchError"),
                          (l.code = "SSE_REPLAY_MISMATCH"),
                          p.StockBridge.aegisReportEvent(
                            "[stock-search-ai] SSECheckCacheFail",
                            { errorMessage: "SSE请求重连数据匹配不上缓存数据" }
                          ),
                          (n.hasFatalError = !0),
                          (n.isRetrying = !1),
                          (n.retryCount = 0),
                          (n.currentCreated = null),
                          (n.currentId = null),
                          n.cache.clearCache(),
                          "function" == typeof n.stopStream && n.stopStream(),
                          void ("function" == typeof t && t(l))
                        );
                      }
                      "new_after_replay" === u.type || u.type,
                        (n.isRetrying = !1);
                    }
                    n.cache.addMessage(r);
                  }
                } catch (e) {
                  p.StockBridge.aegisReportEvent(
                    "[stock-search-ai] SSEDedupError",
                    { errorMessage: "SSE请求重连去重逻辑异常" }
                  );
                }
                (n.isRetrying &&
                  n.cache.messageList.length > 0 &&
                  !n.cache.isReplayFullyMatched) ||
                  ("function" == typeof e && e(r),
                  "[DONE]" === r.data &&
                    ((n.isRetrying = !1),
                    (n.currentCreated = null),
                    (n.currentId = null),
                    n.cache.clearCache()));
              }
            };
          },
        },
        {
          key: "wrapOnClose",
          value: function (e) {
            var t = this;
            return function () {
              t.retryCount > 0 ||
                ((!t.cache.getCacheInfo().hasCache && !t.currentCreated) ||
                  ((t.isRetrying = !1),
                  (t.currentCreated = null),
                  (t.currentId = null),
                  t.cache.clearCache()),
                "function" == typeof e && e());
            };
          },
        },
        {
          key: "wrapOnError",
          value: function (e, t) {
            var n = this;
            return function (r) {
              if (!n.hasFatalError) {
                if (t) {
                  var a =
                    null !== n.currentId &&
                    void 0 !== n.currentId &&
                    "" !== n.currentId;
                  if (
                    (function (e) {
                      return !(
                        (e && "AbortError" === e.name) ||
                        (e && "request:fail abort" === e.errMsg)
                      );
                    })(r) &&
                    n.retryCount < n.maxRetryCount &&
                    a
                  ) {
                    n.retryCount += 1;
                    var o = Math.min(1e3 * Math.pow(2, n.retryCount - 1), 5e3);
                    return void (n._retryTimer = setTimeout(function () {
                      t();
                    }, o));
                  }
                  n.retryCount >= n.maxRetryCount &&
                    p.StockBridge.aegisReportEvent(
                      "[stock-search-ai] MaxRetryReached",
                      { errorMessage: "SSE请求重连三次失败，停止重试" }
                    ),
                    (n.retryCount = 0);
                }
                n.isRetrying ||
                  (!n.cache.getCacheInfo().hasCache && !n.currentCreated) ||
                  ((n.currentCreated = null),
                  (n.currentId = null),
                  n.cache.clearCache()),
                  "function" == typeof e && e(r);
              }
            };
          },
        },
        {
          key: "cleanup",
          value: function () {
            this._retryTimer &&
              (clearTimeout(this._retryTimer), (this._retryTimer = null)),
              (this.isAborted = !0),
              (this.isRetrying = !1),
              (this.currentCreated = null),
              (this.currentId = null),
              (this.retryCount = 0),
              (this.hasFatalError = !1),
              (this.stopStream = null),
              this.cache.clearCache();
          },
        },
      ]),
      e
    );
  })(),
  _ = [],
  I = "",
  A = function (e, t) {
    for (
      var n = new Uint8Array(e.data),
        r = (function (e) {
          _ = _.concat(e);
          for (var t = 0; t < _.length; ) {
            var n = _[t],
              r = void 0;
            if (n <= 127) r = 1;
            else if (192 == (224 & n)) r = 2;
            else if (224 == (240 & n)) r = 3;
            else {
              if (240 != (248 & n)) throw new Error("Invalid UTF-8 start byte");
              r = 4;
            }
            if (t + r > _.length) break;
            t += r;
          }
          var a = _.slice(0, t);
          return (_ = _.slice(t)), a;
        })(Array.from(n)),
        o = new Uint8Array(r),
        i = "",
        u = 0;
      u < o.length;
      u++
    ) {
      var l = o[u];
      i += "%".concat(l < 16 ? "0" : "").concat(l.toString(16));
    }
    if ((i = decodeURIComponent(i))) {
      "" !== I && ((i = "".concat(I).concat(i)), (I = ""));
      var c,
        s = 0,
        f = i.matchAll(/event:(.*)\ndata:(.*)/g),
        h = a(f);
      try {
        for (h.s(); !(c = h.n()).done; ) {
          var v = c.value;
          s = v.index + v[0].length;
          var d = v[1].trim(),
            p = v[2].trim(),
            g = {};
          (g.event = d),
            (g.data = p),
            "[DONE]" === p
              ? (t(g), (I = ""))
              : T(p)
              ? t(g)
              : (I = "".concat(I).concat(v[0]));
        }
      } catch (e) {
        h.e(e);
      } finally {
        h.f();
      }
      if (s < i.length) {
        var m = i.slice(s).replace(/^\s+/, "");
        m && (I = "".concat(I).concat(m));
      }
    }
  };
function T(e) {
  try {
    JSON.parse(e);
  } catch (e) {
    return !1;
  }
  return !0;
}
var E = "moduleNameKey20260427",
  O = "thinkingModeKey20260428",
  H = {
    用户长期历史偏好检索: "long",
    用户中期历史偏好检索: "medium",
    用户短期历史偏好检索: "short",
  };
(exports.abortController = function () {
  B();
  try {
    w && w.offChunkReceived(), w && w.abort(), (w = null);
  } catch (e) {}
  (_ = []), (I = ""), x && (x.cleanup(), (x = null));
}),
  (exports.createSseInstance = function () {}),
  (exports.fetchEventDataWrapper = function (e, t) {
    var n = t.enableRetry,
      r = void 0 === n || n,
      a = t.method,
      o = t.data,
      i = t.headers,
      u = t.onmessage,
      l = t.onerror,
      c = t.onclose,
      s = "ios" === p.StockBridge.getPlatform().system;
    if (!r || s) {
      x = null;
      var f = k(s ? "".concat(e, "&write_history=1") : e),
        v = function (e) {
          ("" === e.event && "" === e.data) || ("function" == typeof u && u(e));
        };
      return (
        (w = d.wx$1.request({
          url: f,
          method: a,
          data: o,
          timeout: 3e5,
          enableChunked: !0,
          header: i,
          fail: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            "function" == typeof l && l(e);
          },
          complete: function () {
            B(), "function" == typeof c && c();
          },
        })).onChunkReceived(function (e) {
          try {
            C && (clearTimeout(C), (C = null)), A(e, v);
          } catch (t) {
            p.StockBridge.aegisReportEvent(
              "[stock-search-ai] OnHandleChunkError",
              {
                errorMessage: null == t ? void 0 : t.message,
                onChunkReceived: e,
              }
            );
          }
        }),
        s &&
          (B(),
          (M = function (e) {
            e.isConnected ||
              (C && clearTimeout(C),
              (C = setTimeout(function () {
                w && w.abort();
              }, 2e4)));
          }),
          d.wx$1.onNetworkStatusChange(M)),
        { manager: null, request: w }
      );
    }
    var g = new R();
    (x = g),
      g.setStopStream(function () {
        try {
          return w && w.offChunkReceived(), w && w.abort(), void (w = null);
        } catch (e) {}
      });
    var m = g.wrapOnMessage(u, l),
      y = g.wrapOnClose(c),
      b = (function t() {
        var n = "".concat(e, "&write_history=1");
        g.isRetrying &&
          (g.currentCreated &&
            (n = "".concat(n, "&last_created=").concat(g.currentCreated)),
          g.currentId && (n = "".concat(n, "&last_id=").concat(g.currentId)));
        var r = k(n),
          u = g.wrapOnError(l, function () {
            if (!g.isAborted && !g.hasFatalError) {
              (g.isRetrying = !0),
                g.cache.resetMatchState(),
                g.cache.getCacheInfo(),
                (_ = []),
                (I = "");
              try {
                w && w.offChunkReceived();
              } catch (e) {}
              t();
            }
          });
        return (
          (w = d.wx$1.request({
            url: r,
            method: a,
            data: o,
            timeout: 3e5,
            enableChunked: !0,
            header: i,
            fail: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              u(e);
            },
            complete: function () {
              y();
            },
          })).onChunkReceived(function (e) {
            try {
              A(e, m);
            } catch (t) {
              p.StockBridge.aegisReportEvent(
                "[stock-search-ai] OnHandleChunkError",
                {
                  errorMessage: null == t ? void 0 : t.message,
                  onChunkReceived: e,
                }
              );
            }
          }),
          { request: w }
        );
      })();
    return h({ manager: g }, b);
  }),
  (exports.reportMemoryIfHit = function (e) {
    var n;
    try {
      if (!y.isMemoryToolResponse(e)) return !1;
      var r = y.parseToolResponse(e);
      if (!r) return !1;
      var a = null == (n = JSON.parse(r.response)) ? void 0 : n.data,
        o = []
          .concat(
            t(
              Array.isArray(null == a ? void 0 : a.shortTermMemories)
                ? a.shortTermMemories
                : []
            ),
            t(
              Array.isArray(null == a ? void 0 : a.longTermMemories)
                ? a.longTermMemories
                : []
            )
          )
          .map(function (e) {
            return null == e ? void 0 : e.content;
          })
          .filter(function (e) {
            return "string" == typeof e && "" !== e;
          })
          .join("\n");
      return (
        "" !== o &&
        (d.StockBridge.report(
          "base.ai_search.ask_user_mid_memory_extraction_input",
          { memory_tool: H[r.name], memory_content: encodeURIComponent(o) }
        ),
        !0)
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.use13YearTaskHooks = function () {
    var e = d.ref(!1),
      t = d.ref(!1);
    return {
      thirteenYearTaskCanShow: e,
      thirteenYearBackPopShow: t,
      handleThirteenYearTaskShowEvent: function (t) {
        e.value = t.show;
      },
      handleThirteenYearBackPopShowEvent: function () {
        t.value = !0;
      },
    };
  }),
  (exports.useAiModuleHooks = function (t, n) {
    var r = this,
      a =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "fullscreen",
      o = d.ref("deepseek"),
      l = d.ref(0),
      c = d.ref(!1),
      s = d.ref(!1),
      f = d.ref(""),
      m = d.ref(!1),
      y = d.ref(!1),
      b = d.ref(!1),
      k = d.ref(!1),
      S = d.ref(!1),
      w = d.ref(!1),
      x = d.ref(null),
      C = d.ref("1"),
      M = d.ref({}),
      B = d.ref(""),
      R = d.ref(""),
      _ = d.ref(!0),
      I = "halfscreen" === a,
      A = d.ref(""),
      T = d.ref(""),
      H = d.ref("mpweapp" !== d.ShellTypeEnum.SHY),
      P = d.ref(!0),
      q = d.ref("b"),
      F = d.ref(""),
      L = d.ref({}),
      N = d.ref(!1),
      Q = function () {
        (c.value = !1),
          (f.value = "rotate-down"),
          setTimeout(function () {
            f.value = "";
          }, 400),
          I && n("maskShow", !1),
          (m.value || y.value) && x.value && x.value.keepFocus();
      },
      $ = null,
      D = null;
    return {
      moduleName: o,
      thinking: l,
      showAiModelSelect: c,
      showAiModelGuide: s,
      naviAnimClass: f,
      useAppH5: m,
      isIosOld: b,
      isAndroid: k,
      isHarmony: S,
      hasVoiceInput: N,
      useAppNative: w,
      inputRef: x,
      useWzqH5: y,
      xuanguVersion: C,
      xuanguAbtReportInfo: M,
      newUserXuanGuQueryType: B,
      followOnnewUserXuanGuQueryType: R,
      isFirstClicknewUserFollowOn: _,
      appDeviceId: A,
      mockTradeInfoStr: T,
      mockTradeAbtUser: H,
      useIncrementalModel: P,
      onOpenAiModelSelect: function () {
        (c.value = !0),
          (f.value = "rotate-up"),
          I && n("maskShow", !0),
          (m.value || y.value) && x.value && x.value.keepFocus();
      },
      onCloseAiModelSelect: Q,
      onOutMaskClick: function () {
        c.value && Q(), s.value && (s.value = !1);
      },
      onChooseModel: function (e) {
        o.value !== e &&
          ((o.value = e),
          Q(),
          p.StockBridge.setStorage(E, e, function (e) {}),
          p.StockBridge.report("jichu.ai_search.changemodel", {
            aimodel: o.value,
          })),
          (m.value || y.value) && x.value && x.value.keepFocus();
      },
      onInputChangeAiModel: function (e) {
        o.value !== e &&
          ((o.value = e), p.StockBridge.setStorage(E, e, function (e) {}));
      },
      checkAiModelSelectGuideShow: function () {},
      initAiModuleMame: function () {
        return v(
          r,
          null,
          e().mark(function n() {
            var r, a;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = (t || {}).query),
                      (a = I
                        ? null == t
                          ? void 0
                          : t.defaultModelName
                        : null == r
                        ? void 0
                        : r.defaultModelName),
                      e.abrupt(
                        "return",
                        (d.ShellTypeEnum.MPWAI,
                        I
                          ? t.sourceFrom
                          : !t.query ||
                            !t.query.searchfrom ||
                            t.query.searchfrom,
                        new Promise(function (e) {
                          p.StockBridge.getStorage(E, function (t) {
                            var n = (t || {}).data,
                              r = void 0 === n ? "" : n;
                            (o.value =
                              "deepseek" === r || "hunyuan-t1" === r
                                ? r
                                : "yuanbao" === r
                                ? "deepseek"
                                : a
                                ? "yuanbao" === a
                                  ? "deepseek"
                                  : a
                                : "deepseek"),
                              p.StockBridge.getStorage(O, function (t) {
                                var n = (t || {}).data,
                                  r = void 0 === n ? "" : n;
                                (l.value = "1" === r ? 1 : 0), e();
                              });
                          });
                        }))
                      )
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        );
      },
      initAppInputView: function () {
        (m.value = !0),
          shy.getSystemInfo(function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = {},
              n = t.ios;
            S.value = "harmony" === e.os;
            var r = e ? e.version || e.appVersion : "";
            if (((N.value = g.compare(r, "11.34.0", ">=")), I)) {
              if (((m.value = !0), n)) {
                var a = e && e.canGetKeyBoardHeight,
                  o = g.compare(r, "11.24.1", ">=");
                b.value = !(a || o);
              }
            } else {
              var i = e && e.canGetKeyBoardHeight,
                u = g.compare(r, "11.24.1", ">=");
              n
                ? ((b.value = !(i || u)), (m.value = !0), (w.value = !1))
                : ((m.value = i || u), (w.value = !m.value), (b.value = !1));
            }
          });
      },
      updateModuleName: function (e) {
        o.value !== e &&
          ((o.value = e), p.StockBridge.setStorage(E, e, function (e) {})),
          (m.value || y.value) && x.value && x.value.keepFocus();
      },
      entryAbtCreate: function () {
        (B.value = "blue_chip"), (R.value = "blue_chip");
      },
      entryOnlineAnswerAbt: function () {
        return (
          $ ||
          ($ = new Promise(function (e) {
            var t,
              n,
              r = !1,
              a = function (t) {
                r || ((r = !0), e(t));
              },
              o = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if (!r) {
                  var t = (null == e ? void 0 : e.type) || "",
                    n = "a" === t ? "a" : "b";
                  (q.value = n), a({ type: n, crossLayerType: t });
                }
              },
              i = function (e) {
                r || ((q.value = "b"), a({ type: "b", crossLayerType: "b" }));
              };
            if ("mpweapp" === d.ShellTypeEnum.SHY)
              return (
                (q.value = "b"), void a({ type: "b", crossLayerType: "shy" })
              );
            setTimeout(function () {
              return o({ type: "b" });
            }, 3e3);
            try {
              var u =
                null == (n = (t = p.StockBridge).abtWaitCrossLayerReady)
                  ? void 0
                  : n.call(t);
              if (!(null == u ? void 0 : u.then)) return void o({ type: "b" });
              u.then(o).catch(i);
            } catch (e) {
              i();
            }
          }))
        );
      },
      onlineAnswerAbtType: q,
      followOnAbtType: F,
      followOnAbtReportInfo: L,
      entryFollowOnAbtCreate: function () {
        return (
          D ||
          (D = new Promise(function (e) {
            var t =
              "mpweapp" === d.ShellTypeEnum.SHY
                ? "ui_layer_1782472130056"
                : "ai_followon_layer_0626";
            if (!t)
              return (
                (F.value = ""),
                (L.value = {}),
                void e({ type: "", reportInfo: {} })
              );
            p.StockBridge.abtCreate({
              moduleID: t,
              params: {
                channel: "mpweapp" === d.ShellTypeEnum.SHY ? 1 : 0,
                type: "query",
              },
              success: function (t) {
                var n = t.data,
                  r = void 0 === n ? [] : n,
                  a = (r && r[0]) || {},
                  o = a.type,
                  i = void 0 === o ? "" : o,
                  u = a.report_info,
                  l = void 0 === u ? {} : u;
                (F.value = i), (L.value = l), e({ type: i, reportInfo: l });
              },
              fail: function () {
                (F.value = ""), (L.value = {}), e({ type: "", reportInfo: {} });
              },
            });
          }))
        );
      },
      shouldAbtNewUserXuangu: function (e, t, n) {
        return !1;
      },
      entryGetDeviceId: function () {
        p.StockBridge.ENV === d.EnvTypeEnum.SHY_NATIVE &&
          p.StockBridge.getSystemInfo(function (e) {
            A.value = (null == e ? void 0 : e.devId) || "";
          });
      },
      fetchUserInfo: function () {
        var e,
          t,
          n,
          r = "https://"
            .concat(
              p.StockBridge.ENV === d.EnvTypeEnum.MP ||
                "mpweapp" === d.ShellTypeEnum.SHY
                ? "wzq.tenpay.com"
                : "undefined" != typeof window &&
                  window.location &&
                  (null == (e = window.location.host)
                    ? void 0
                    : e.includes("tenpay.com"))
                ? window.location.host
                : "wzq.tenpay.com",
              "/cgi-bin/userinfo.fcgi?&t="
            )
            .concat(Date.now()),
          a = { dealer: 1, detail: 1 };
        return (
          d.wx$1 &&
            ((t = h({}, a)),
            (n = {
              qluin: d.wx$1.getStorageSync("_qluin"),
              qlskey: d.wx$1.getStorageSync("_qlskey"),
            }),
            (a = i(t, u(n)))),
          p.StockBridge.request(r, "GET", a)
        );
      },
      stopInputBlur: function () {
        (m.value || y.value) && x.value && x.value.keepFocus();
      },
      generateGeneralWatchlistData: function (e) {
        try {
          var t = JSON.parse(e);
          return (t.mockTradeAbtUser = H.value), JSON.stringify(t);
        } catch (t) {
          return e;
        }
      },
      onInputChangeAiThinking: function (e) {
        (l.value = e), p.StockBridge.setStorage(O, String(e), function (e) {});
      },
    };
  }),
  (exports.useHistorySearchHooks = function (t, n) {
    var r = this,
      a = d.ref(null),
      o = d.ref(null),
      i = d.ref(!1),
      u = d.ref(!1),
      l = function (e) {
        if (!Array.isArray(e) || 0 === e.length) return e;
        var t = new Map(),
          n = [];
        e.forEach(function (e, r) {
          var a = (function (e) {
              if ("string" != typeof e || "" === e) return {};
              try {
                var t = JSON.parse(e);
                return {
                  group_id: (null == t ? void 0 : t.group_id) || "",
                  pk_role: (null == t ? void 0 : t.pk_role) || "",
                  prefer: (null == t ? void 0 : t.prefer) || "",
                };
              } catch (e) {
                return {};
              }
            })(null == e ? void 0 : e.answer),
            o = a.group_id;
          o
            ? (t.has(o) || t.set(o, []),
              t.get(o).push({ dialog: e, meta: a, idx: r }))
            : n.push({ dialog: e, idx: r });
        });
        var r = [];
        return (
          t.forEach(function (e) {
            var t = (function (e) {
              if (1 === e.length) return e[0];
              var t = function (e) {
                  return e.find(function (e) {
                    return "main" === e.meta.pk_role;
                  });
                },
                n = e.filter(function (e) {
                  return "prefer" === e.meta.prefer;
                });
              if (n.length > 0) return t(n) || n[0];
              var r = e.filter(function (e) {
                return "dislike" !== e.meta.prefer;
              });
              return r.length > 0 ? t(r) || r[0] : t(e) || e[0];
            })(e);
            r.push({ dialog: t.dialog, idx: t.idx });
          }),
          []
            .concat(n, r)
            .sort(function (e, t) {
              return e.idx - t.idx;
            })
            .map(function (e) {
              return e.dialog;
            })
        );
      },
      c = "stock-search-ai-history-isBtest";
    return {
      historyBTest: i,
      historyWelcomeBTest: u,
      fetchHistoryAbt: function () {
        return v(
          r,
          null,
          e().mark(function t() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      e.next = 13;
                      break;
                    case 5:
                      (n = e.sent) &&
                        (p.StockBridge.setStorage(c, n.status),
                        (u.value = 1 == +n.status),
                        (i.value = 1 == +n.status)),
                        (e.next = 11);
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(1));
                    case 11:
                      e.next = 14;
                      break;
                    case 13:
                      (u.value = !0), (i.value = !0);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[1, 9]]
            );
          })
        );
      },
      resetHistoryOffset: function () {},
      entrySearchHistory: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return v(
          r,
          null,
          e().mark(function r() {
            var i, u, c, s, f, h, v, d, g, y, b, k, S, w;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = null != a.value && null != o.value), e.t0)) {
                        e.next = 4;
                        break;
                      }
                      return (
                        (e.next = 4),
                        new Promise(function (e, t) {
                          p.StockBridge.getUserInfo(function (t) {
                            (a.value = t.openid), (o.value = t.fskey), e();
                          });
                        })
                      );
                    case 4:
                      if (
                        ((f = a.value),
                        (h = o.value),
                        (v = ""),
                        (v =
                          "https://wzq.tenpay.com/svr/openai/session/query_dialogs?&openid="
                            .concat(f, "&fskey=")
                            .concat(h)),
                        (d = { dialogs: [], sessionid: null }),
                        n)
                      )
                        try {
                          null == (u = (i = m.sdk).loadingBar) ||
                            u.call(i, "show");
                        } catch (e) {}
                      (g = 0), (y = t || null), (e.prev = 10), (b = 0);
                    case 12:
                      if (!(b < 50)) {
                        e.next = 28;
                        break;
                      }
                      return (
                        (k = { offset: g, limit: 20 }),
                        y && (k.sessionid = y),
                        (e.next = 17),
                        p.StockBridge.request(v, "POST", k, {
                          dataType: "json",
                          header: { "Content-Type": "application/json" },
                        })
                      );
                    case 17:
                      if ((S = e.sent) && 0 === S.retcode) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt("break", 28);
                    case 20:
                      if (
                        (S.sessionid && !y && (y = S.sessionid),
                        (d.sessionid = d.sessionid || S.sessionid),
                        (w = Array.isArray(S.dialogs) ? S.dialogs : []).length >
                          0 && (d.dialogs = d.dialogs.concat(w)),
                        !(w.length < 20))
                      ) {
                        e.next = 24;
                        break;
                      }
                      return e.abrupt("break", 28);
                    case 24:
                      g += 20;
                    case 25:
                      b++, (e.next = 12);
                      break;
                    case 28:
                      e.next = 33;
                      break;
                    case 30:
                      (e.prev = 30),
                        (e.t1 = e.catch(10)),
                        0 === d.dialogs.length &&
                          ((d.sessionid = null),
                          (d.error =
                            (null == e.t1 ? void 0 : e.t1.retmsg) ||
                            "系统繁忙，请稍后再试"));
                    case 33:
                      if (((e.prev = 33), n))
                        try {
                          null == (s = (c = m.sdk).loadingBar) ||
                            s.call(c, "hide");
                        } catch (e) {}
                      return e.finish(33);
                    case 36:
                      return e.abrupt(
                        "return",
                        ((d.dialogs = l(d.dialogs)), d)
                      );
                    case 37:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[10, 30, 33, 36]]
            );
          })
        );
      },
      parseHistoryDataItem: function (e) {
        var t = {
          recal: "",
          quote: "",
          reply: "",
          thinking: "",
          docs: [],
          answerFinish: !0,
          serverError: !1,
          permissionError: !1,
          functionObj: null,
          guessObj: null,
          sseStatus: y.SseStatus.ON_CLOSE,
          isOfflineQuestion: !1,
          aimodel: "",
          functionTips: "",
          requestId: "",
          commentStatus: 0,
          answerFinishFlag: 0,
          fromHistory: !0,
          illegalQuestion: !1,
          processSteps: [],
          answerChainMode: "",
          useProcessMode: !1,
          mainContentStarted: !1,
        };
        (t.answer_time = e.answer_time),
          (t.aimodel = e.model),
          (t.illegalQuestion = 2 === e.status),
          e.like_flag
            ? (t.commentStatus = 1)
            : e.dislike_flag
            ? (t.commentStatus = 2)
            : (t.commentStatus = 0),
          (t.requestId = e.dialogid);
        for (
          var r = JSON.parse(e.answer), a = 0;
          a < r.dialog_msg_list.length;
          a++
        ) {
          var o = r.dialog_msg_list[a].msg_type,
            i = r.dialog_msg_list[a].msg;
          if ("content" === o) t.reply = "".concat(t.reply).concat(i);
          else if ("ref_docs" === o)
            (t.docs = y.parseDocReply(i)),
              (t.quote = "引用 ".concat(t.docs.length, " 篇资料作为参考"));
          else if ("reason_content" === o) t.thinking = i;
          else if ("plugin_content" === o)
            try {
              if (y.isFunctionPluginInContentReply(i, n.value)) {
                var u = y.parseFunctionPluginComponentType(i),
                  l = y.parseFunctionPluginReply(i),
                  c = JSON.stringify(l),
                  s = y.generateComponentContent(u, c);
                t.reply = "".concat(t.reply).concat(s);
              }
            } catch (e) {}
          else if ("code_msg" === o)
            y.isFunctionPluginMessage(i) &&
              (t.functionTips = y.parseFunctionPluginMessage(i));
          else if ("xuangu_stock_list" === o)
            try {
              y.isXuanGuFunctionPluginReply(i) &&
                (t.functionObj = y.parseXuanGuFunctionPluginReply(i));
            } catch (e) {}
          else if ("agent_event" === o || "component" === o) {
            if (y.isCommonAgentPluginReply(i, n.value)) {
              var f = y.parseCommonAgentComponentName(i),
                h = y.parserMessage(i);
              if ("c-ai-gudan" === f) continue;
              if ("c-ai-marketing" === f) continue;
              var v = y.generateComponentContent(f, h);
              t.reply = "".concat(t.reply).concat(v);
            } else if (y.isMcpQuoteInfoPluginReply(i)) {
              var d = y.parseCommonAgentComponentName(i),
                p = y.parserMessage(i),
                g = [];
              try {
                g = JSON.parse(p || []);
              } catch (e) {
                g = [];
              }
              "fact_inner_reference" === d
                ? (t.factInnerDocs = g)
                : "fact_outer_reference" === d && (t.factOuterDocs = g);
            }
          } else
            "sub_agent_intent" === o
              ? y.isSubAagentMessage(i)
                ? (t.isMcpAgentMessage = !0)
                : y.isSmartServiceMessage(i) &&
                  ((t.isSmartServiceMessage = !0),
                  (t.mcpQuote = "正在检索智能客服知识库..."))
              : "plugin_type" === o
              ? y.isSubAagentReply(i) && (t.mcpQuote = y.parserMessage(i))
              : "exception" === o && (t.reply = JSON.parse(i).msg);
        }
        var m = y.buildHistoryProcessSteps(r.dialog_msg_list),
          b = m.processSteps,
          k = m.answerChainMode;
        return (
          (t.processSteps = b),
          (t.answerChainMode = k),
          (t.useProcessMode = b.length > 0),
          t
        );
      },
    };
  }),
  (exports.useScrollButtonsHooks = function (t) {
    var n = this,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      o = r.isMP,
      i = void 0 !== o && o,
      u = r.getAnswerList,
      l =
        void 0 === u
          ? function () {
              return [];
            }
          : u,
      c = r.getShowAiDrawer,
      s =
        void 0 === c
          ? function () {
              return !1;
            }
          : c,
      f = r.getIsReplying,
      h =
        void 0 === f
          ? function () {
              return !1;
            }
          : f,
      g = r.answerListRefName,
      m = void 0 === g ? "answerlistview" : g,
      y = r.getCurSession,
      b =
        void 0 === y
          ? function () {
              return "";
            }
          : y,
      k = r.pageType,
      S = void 0 === k ? "fullscreen" : k,
      w = r.getIsInputExpanded,
      x =
        void 0 === w
          ? function () {
              return !1;
            }
          : w,
      C = r.getEnableAutoScrollDown,
      M =
        void 0 === C
          ? function () {
              return !0;
            }
          : C,
      B = r.getIsAutoScrolling,
      R =
        void 0 === B
          ? function () {
              return !1;
            }
          : B,
      _ = d.ref(0),
      I = d.ref(0),
      A = d.ref(!1),
      T = d.ref(!1),
      E = d.ref(!1),
      O = d.ref(!1),
      H = d.ref(!1),
      P = d.ref(!1),
      q = d.ref(!1),
      F = d.ref(null),
      L = d.ref(!1),
      N = d.ref(!1),
      Q = d.ref(!0),
      $ = d.ref(!1),
      D = d.ref("halfscreen" === S ? 180 : 220),
      V = d.ref(0),
      j = (function () {
        if (i)
          try {
            return d.index.getSystemInfoSync().windowHeight / 2;
          } catch (e) {
            return 400;
          }
        return (
          (window.innerHeight || document.documentElement.clientHeight || 800) /
          2
        );
      })(),
      U = null,
      J = [],
      Y = null,
      G = 0,
      z = null,
      W = 0,
      X = function () {
        return l().length - 1;
      },
      K = d.computed(function () {
        if (q.value || s()) return !1;
        var e = l(),
          t = h();
        return (
          e.length > 1 && E.value && !L.value && !Q.value && !N.value && !t
        );
      }),
      Z = d.computed(function () {
        return (
          !q.value &&
          !s() &&
          l().length > 0 &&
          A.value &&
          !Q.value &&
          !N.value &&
          $.value &&
          !1 === M()
        );
      }),
      ee = function () {
        var e,
          n,
          r =
            null == (n = null == (e = t.$refs[m]) ? void 0 : e.$refs)
              ? void 0
              : n.mainList;
        if (r) {
          for (
            var a = r.getBoundingClientRect(),
              o = a.top,
              i = a.bottom,
              u = l(),
              c = 0,
              s = 1 / 0,
              f = 0;
            f < u.length;
            f++
          ) {
            var h = document.getElementById("aiAnswerBlock".concat(f));
            if (h) {
              var v = h.getBoundingClientRect(),
                d = v.top,
                p = v.bottom,
                g = Math.max(d, o),
                y = Math.min(p, i),
                b = Math.max(0, y - g),
                k = p - d;
              if ((k > 0 ? b / k : 0) > 0.1) {
                var S = Math.abs(d - o);
                S < s && ((s = S), (c = f));
              }
            }
          }
          _.value = c;
        }
      },
      te = function () {
        var e = l();
        i ? re(e) : ne(e);
      },
      ne = function (e) {
        var n,
          r,
          a =
            null == (r = null == (n = t.$refs[m]) ? void 0 : n.$refs)
              ? void 0
              : r.mainList;
        if (!a) return (Q.value = !0), ($.value = !1), void (L.value = !1);
        var o = a.getBoundingClientRect(),
          i = o.top,
          u = o.bottom,
          l = a.scrollTop,
          c = a.clientHeight,
          s = a.scrollHeight - (l + c);
        if (((Q.value = s <= 50), (N.value = s < -50), 0 === e.length))
          return ($.value = !1), void (L.value = !1);
        var f = e.length - 1,
          h = document.getElementById("answerItem".concat(f));
        if (h) {
          var v = h.getBoundingClientRect();
          $.value = v.bottom > u - 80;
        } else $.value = !0;
        var d = document.getElementById("aiAnswerBlock0");
        if (d) {
          var p = d.querySelector(".contentItemAlignRight");
          if (p) {
            var g = p.getBoundingClientRect(),
              y = g.top,
              b = g.bottom;
            L.value = y >= i && b <= u;
          } else L.value = !1;
        } else L.value = !1;
      },
      re = function (r) {
        return v(
          n,
          null,
          e().mark(function n() {
            var a, o, i, u, l, c, s, f, h, v, p, g;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (R()) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        null == (a = t.$refs[m])
                          ? void 0
                          : a.getScrollViewInfo()
                      );
                    case 4:
                      if ((o = e.sent)) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        ((Q.value = !0), ($.value = !1), void (L.value = !1))
                      );
                    case 7:
                      if (
                        ((i = o.scrollOffset),
                        (u = o.boundingClientRect),
                        (l = u.top),
                        (c = u.bottom),
                        (s = c - l),
                        (f = i.scrollTop || 0),
                        (h = i.scrollHeight || 0),
                        50,
                        (v = Math.max(0, h - s)),
                        (Q.value = f >= v - 50),
                        (N.value = f > v + 50),
                        0 !== r.length)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (($.value = !1), void (L.value = !1))
                      );
                    case 10:
                      (p = r.length - 1),
                        (g = d.index.createSelectorQuery().in(t))
                          .select("#answerItem".concat(p))
                          .boundingClientRect(),
                        g
                          .select("#aiAnswerBlock0 .contentItemAlignRight")
                          .boundingClientRect(),
                        g.exec(function (e) {
                          if (e && e[0]) {
                            var t = e[0];
                            $.value = t.bottom > c - 80;
                          } else $.value = !0;
                          if (e && e[1]) {
                            var n = e[1],
                              r = n.top,
                              a = n.bottom;
                            L.value = r >= l && a <= c;
                          } else L.value = !1;
                        }),
                        (e.next = 17);
                      break;
                    case 14:
                      (e.prev = 14),
                        (e.t0 = e.catch(1)),
                        (Q.value = !0),
                        ($.value = !1),
                        (L.value = !1);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[1, 14]]
            );
          })
        );
      },
      ae = function (e) {
        var n,
          r,
          a =
            null == (r = null == (n = t.$refs[m]) ? void 0 : n.$refs)
              ? void 0
              : r.mainList;
        if (a) {
          var o = a.getBoundingClientRect(),
            i = o.top,
            u = o.bottom,
            l = document.getElementById("aiAnswerBlock".concat(e));
          if (l) {
            var c = l.querySelector(".contentItemAlignRight");
            if (c) {
              var s = c.getBoundingClientRect(),
                f = s.top,
                h = s.bottom,
                v = f >= i && h <= u;
              L.value = v;
            } else L.value = !1;
          } else L.value = !1;
        } else L.value = !1;
      },
      oe = function (r) {
        return v(
          n,
          null,
          e().mark(function n() {
            var a, o, i, u, l, c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        null == (a = t.$refs[m])
                          ? void 0
                          : a.getScrollViewInfo()
                      );
                    case 3:
                      if ((o = e.sent)) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return", void (L.value = !1));
                    case 6:
                      (i = o.boundingClientRect),
                        (u = i.top),
                        (l = i.bottom),
                        (c = d.index.createSelectorQuery().in(t))
                          .select(
                            "#aiAnswerBlock".concat(
                              r,
                              " .contentItemAlignRight"
                            )
                          )
                          .boundingClientRect(),
                        c.exec(function (e) {
                          if (e && e[0]) {
                            var t = e[0],
                              n = t.top,
                              r = t.bottom,
                              a = n >= u && r <= l;
                            L.value = a;
                          } else L.value = !1;
                        }),
                        (e.next = 13);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(0)), (L.value = !1);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 10]]
            );
          })
        );
      },
      ie = function (e) {
        if (e > 0) {
          i && (G = e);
          var t = e + 12;
          t <= j && (D.value = t);
        }
      },
      ue = function (e, n) {
        var a = t.keyboardShowing;
        if (x())
          e <= 0 &&
            (a ||
              ((V.value = 0),
              r.onInputAreaHeightOffsetChange &&
                r.onInputAreaHeightOffsetChange(0)));
        else if (a)
          a &&
            t.isHarmony &&
            ((V.value = 0),
            r.onInputAreaHeightOffsetChange &&
              r.onInputAreaHeightOffsetChange(0));
        else {
          var o = Math.max(0, e - n);
          (V.value = o),
            r.onInputAreaHeightOffsetChange &&
              r.onInputAreaHeightOffsetChange(o);
        }
      },
      le = function () {
        var e = window.innerHeight || document.documentElement.clientHeight,
          t = document.querySelector(".bottomBar"),
          n = t ? t.offsetHeight : 0,
          r = function (e) {
            ie(e), ue(e, n);
          },
          a = document.querySelector(".h5-input-container-hide");
        if (a) {
          var o = a.getBoundingClientRect();
          if (o.height > 0 && o.top < e) return void r(e - o.top);
          if ("none" === getComputedStyle(a).display) {
            var i = a.style.display,
              u = a.style.visibility,
              l = a.style.position;
            (a.style.display = "flex"),
              (a.style.visibility = "hidden"),
              (a.style.position = "absolute");
            var c = a.offsetHeight;
            if (
              ((a.style.display = i),
              (a.style.visibility = u),
              (a.style.position = l),
              c > 0)
            ) {
              var s = parseInt(getComputedStyle(a).paddingBottom, 10) || 0;
              return (
                a.classList.contains("safeBottom") ||
                  0 !== s ||
                  (c += (function () {
                    if (p) return 0;
                    try {
                      var e = document.createElement("div");
                      (e.style.paddingBottom = "env(safe-area-inset-bottom)"),
                        (e.style.position = "fixed"),
                        (e.style.visibility = "hidden"),
                        document.body.appendChild(e);
                      var t =
                        parseInt(getComputedStyle(e).paddingBottom, 10) || 0;
                      return document.body.removeChild(e), t;
                    } catch (e) {
                      return 0;
                    }
                  })()),
                void r(c)
              );
            }
          }
        }
        var f = document.querySelector(".footer");
        if (f) {
          var h = f.querySelector(".h5-input-container");
          if (h) {
            var v = h.getBoundingClientRect();
            if (v.height > 0) {
              var d = parseFloat(f.style.paddingBottom) || 0;
              return void r(v.height + d);
            }
          }
          var p = f.getBoundingClientRect();
          if (p.height > 0 && p.top < e) return void r(e - p.top);
        }
        for (
          var g = 0, m = [".h5-input-container", ".bottomBar"];
          g < m.length;
          g++
        ) {
          var y = m[g],
            b = document.querySelector(y);
          if (b) {
            var k = b.getBoundingClientRect();
            if (k.height > 0 && k.top < e) return void r(e - k.top);
          }
        }
      },
      ce = function () {
        if (!i && !U && "undefined" != typeof ResizeObserver) {
          U = new ResizeObserver(function () {
            le();
          });
          J = [];
          for (
            var e = 0,
              t = [
                ".h5-input-container-hide",
                ".footer",
                ".h5-input-container",
                ".bottomBar",
              ];
            e < t.length;
            e++
          ) {
            var n = t[e],
              r = document.querySelector(n);
            r && (U.observe(r), J.push(r));
          }
        }
      },
      se = function () {
        U && (U.disconnect(), (U = null), (J = []));
      },
      fe = function () {
        var e, n;
        if (p) return null;
        var r = Date.now();
        if (z && r - W < 200) return z;
        var o =
          null == (n = null == (e = t.$refs[m]) ? void 0 : e.$refs)
            ? void 0
            : n.mainList;
        if (!o) return null;
        var i = o.getBoundingClientRect(),
          u = i.top,
          c = i.bottom,
          s = l().length,
          f = -1,
          h = 1 / 0,
          v = [];
        if (s > 20) {
          for (var d = -1, p = 1 / 0, g = 0; g < s; g += 5) {
            var y = document.getElementById("aiAnswerBlock".concat(g));
            if (y) {
              var b = y.getBoundingClientRect(),
                k = Math.abs(b.top - u);
              k < p && ((p = k), (d = g));
            }
          }
          for (
            var S = Math.max(0, d - 5), w = Math.min(s - 1, d + 5), x = S;
            x <= w;
            x++
          )
            v.push(x);
        } else
          v = Array.from({ length: s }, function (e, t) {
            return t;
          });
        var C,
          M = a(v);
        try {
          for (M.s(); !(C = M.n()).done; ) {
            var B = C.value,
              R = document.getElementById("aiAnswerBlock".concat(B));
            if (R) {
              var _ = R.getBoundingClientRect(),
                I = _.top,
                A = _.bottom,
                T = Math.max(I, u),
                E = Math.min(A, c);
              if (Math.max(0, E - T) > 0) {
                var O = Math.abs(I - u);
                O < h && ((h = O), (f = B));
              }
            }
          }
        } catch (e) {
          M.e(e);
        } finally {
          M.f();
        }
        if (-1 === f) return null;
        var H = document.getElementById("aiAnswerBlock".concat(f));
        if (!H) return null;
        var P = H.querySelector(".contentItemAlignRight"),
          q = !1;
        if (P) {
          var F = P.getBoundingClientRect(),
            L = F.top,
            N = F.bottom;
          q = L >= u - 5 && N <= c + 5;
        }
        var Q = { index: f, isBubbleVisible: q };
        return (z = Q), (W = r), Q;
      },
      he = function () {
        return v(
          n,
          null,
          e().mark(function n() {
            var r,
              a,
              o,
              i,
              u,
              c,
              s,
              f,
              h,
              v,
              p,
              g,
              y,
              b,
              k,
              S,
              w,
              x,
              C,
              M,
              B,
              R,
              _,
              I,
              A,
              T,
              E,
              O,
              H,
              P;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (a = l().length),
                        (e.next = 4),
                        null == (r = t.$refs[m])
                          ? void 0
                          : r.getScrollViewInfo()
                      );
                    case 4:
                      if ((o = e.sent)) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 7:
                      if (
                        ((i = o.boundingClientRect),
                        (u = i.top),
                        (c = i.bottom),
                        (s = -1),
                        (f = 1 / 0),
                        !(a > 20))
                      ) {
                        e.next = 24;
                        break;
                      }
                      for (
                        h = 5,
                          v = d.index.createSelectorQuery().in(t),
                          p = [],
                          g = 0;
                        g < a;
                        g += h
                      )
                        p.push(g),
                          v
                            .select("#aiAnswerBlock".concat(g))
                            .boundingClientRect();
                      return (
                        (e.next = 14),
                        new Promise(function (e) {
                          v.exec(function (t) {
                            return e(t);
                          });
                        })
                      );
                    case 14:
                      for (
                        y = e.sent,
                          b = -1,
                          k = 1 / 0,
                          y.forEach(function (e, t) {
                            if (e) {
                              var n = Math.abs(e.top - u);
                              n < k && ((k = n), (b = p[t]));
                            }
                          }),
                          S = Math.max(0, b - h),
                          w = Math.min(a - 1, b + h),
                          x = d.index.createSelectorQuery().in(t),
                          C = S;
                        C <= w;
                        C++
                      )
                        x.select(
                          "#aiAnswerBlock".concat(C)
                        ).boundingClientRect();
                      return (
                        (e.next = 21),
                        new Promise(function (e) {
                          x.exec(function (t) {
                            return e(t);
                          });
                        })
                      );
                    case 21:
                      e.sent.forEach(function (e, t) {
                        if (e) {
                          var n = S + t,
                            r = e.top,
                            a = e.bottom,
                            o = Math.max(r, u),
                            i = Math.min(a, c);
                          if (Math.max(0, i - o) > 0) {
                            var l = Math.abs(r - u);
                            l < f && ((f = l), (s = n));
                          }
                        }
                      }),
                        (e.next = 39);
                      break;
                    case 24:
                      for (
                        M = d.index.createSelectorQuery().in(t), B = 0;
                        B < a;
                        B++
                      )
                        M.select(
                          "#aiAnswerBlock".concat(B)
                        ).boundingClientRect();
                      return (
                        (e.next = 28),
                        new Promise(function (e) {
                          M.exec(function (t) {
                            return e(t);
                          });
                        })
                      );
                    case 28:
                      (R = e.sent), (_ = 0);
                    case 30:
                      if (!(_ < R.length)) {
                        e.next = 39;
                        break;
                      }
                      if ((I = R[_])) {
                        e.next = 34;
                        break;
                      }
                      return e.abrupt("continue", 36);
                    case 34:
                      (A = I.top),
                        (T = I.bottom),
                        (E = Math.max(A, u)),
                        (O = Math.min(T, c)),
                        Math.max(0, O - E) > 0 &&
                          (H = Math.abs(A - u)) < f &&
                          ((f = H), (s = _));
                    case 36:
                      _++, (e.next = 30);
                      break;
                    case 39:
                      if (-1 !== s) {
                        e.next = 41;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 41:
                      return (
                        (P = d.index.createSelectorQuery().in(t)),
                        e.abrupt(
                          "return",
                          (P.select(
                            "#aiAnswerBlock".concat(
                              s,
                              " .contentItemAlignRight"
                            )
                          ).boundingClientRect(),
                          new Promise(function (e) {
                            P.exec(function (t) {
                              var n = !1;
                              if (t && t[0]) {
                                var r = t[0],
                                  a = r.top,
                                  o = r.bottom;
                                n = a >= u - 5 && o <= c + 5;
                              }
                              e({ index: s, isBubbleVisible: n });
                            });
                          }))
                        )
                      );
                    case 45:
                      return (
                        (e.prev = 45),
                        (e.t0 = e.catch(0)),
                        e.abrupt("return", null)
                      );
                    case 48:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 45]]
            );
          })
        );
      },
      ve = function (r, a) {
        return v(
          n,
          null,
          e().mark(function n() {
            var o, i, u, l, c, s, f, h, v, p, g, y;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (H.value = !0),
                        (e.prev = 1),
                        (e.next = 4),
                        t.$nextTick()
                      );
                    case 4:
                      return (
                        (e.next = 6),
                        null == (o = t.$refs[m])
                          ? void 0
                          : o.getScrollViewInfo()
                      );
                    case 6:
                      if ((u = e.sent)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", void (H.value = !1));
                    case 9:
                      (l = function () {
                        return new Promise(function (e) {
                          var n = d.index.createSelectorQuery().in(t);
                          n.select("#".concat(a)).boundingClientRect(),
                            n.exec(function (t) {
                              e(t);
                            });
                        });
                      }),
                        (c = [0, 300, 800]),
                        (s = null),
                        (f = 0);
                    case 12:
                      if (((e.t0 = f < c.length), !e.t0)) {
                        e.next = 22;
                        break;
                      }
                      if (((e.t1 = f > 0), !e.t1)) {
                        e.next = 18;
                        break;
                      }
                      return (
                        (e.next = 18),
                        new Promise(function (e) {
                          return setTimeout(e, c[f]);
                        })
                      );
                    case 18:
                      return (e.next = 20), l();
                    case 20:
                      (s = e.sent), (e.t0 = !s || !s[0]);
                    case 22:
                      if (!e.t0) {
                        e.next = 27;
                        break;
                      }
                    case 24:
                      f++, (e.next = 12);
                      break;
                    case 27:
                      s && s[0]
                        ? ((h = s[0]),
                          (v = u.scrollOffset),
                          (p = u.boundingClientRect),
                          (g = v.scrollTop || 0),
                          (y = g + (h.top - p.top)),
                          null == (i = t.$refs[m]) || i.scrollToPosition(y),
                          setTimeout(function () {
                            (H.value = !1), (_.value = r);
                          }, 500))
                        : (H.value = !1),
                        (e.next = 33);
                      break;
                    case 30:
                      (e.prev = 30), (e.t2 = e.catch(1)), (H.value = !1);
                    case 33:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[1, 30]]
            );
          })
        );
      },
      de = function (r) {
        return v(
          n,
          null,
          e().mark(function n() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      i
                        ? new Promise(function (e) {
                            var n = d.index.createSelectorQuery().in(t);
                            n.select("#".concat(r)).boundingClientRect(),
                              n.exec(function (t) {
                                e(!(!t || !t[0]));
                              });
                          })
                        : !!document.getElementById(r)
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        );
      };
    return {
      currentQuestionIndex: _,
      lastScrollTop: I,
      isScrolling: A,
      isScrollingDown: T,
      isScrollingUp: E,
      hasUnseenQuestions: O,
      isProgrammaticScroll: H,
      hasManualScrolled: P,
      forceHideButtons: q,
      scrollStopTimer: F,
      isLastQuestionBubbleFullyVisible: L,
      isFirstAnswerItemBlocked: $,
      isAtBottom: Q,
      backToBottomButtonBottom: D,
      contentListPaddingBottom: V,
      showPrevQuestionButton: K,
      showBackToBottomButton: Z,
      handleScrollDirection: function (e) {
        H.value ||
          (F.value && (clearTimeout(F.value), (F.value = null)),
          (A.value = !0),
          (T.value = "down" === e),
          (E.value = "up" === e),
          (P.value = !0),
          Y ||
            (Y = setTimeout(function () {
              te(), (Y = null);
            }, 100)),
          (F.value = setTimeout(function () {
            (T.value = !1), (E.value = !1);
          }, 3e3)));
      },
      updateQuestionIndexByScroll: function () {
        H.value || ((P.value = !0), i || ee());
      },
      updateQuestionIndexForH5: ee,
      checkLastQuestionBubbleVisibility: function () {
        var e = l();
        if (0 !== e.length) {
          var t = e.length - 1;
          i ? oe(t) : ae(t);
        } else L.value = !1;
      },
      checkIsAtBottom: function (r) {
        return v(
          n,
          null,
          e().mark(function n() {
            var a, o, u, l, c, s, f, h, v, d, p, g, y, b, k;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!i || !R()) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (!i) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (e.prev = 3),
                        (e.next = 6),
                        null == (a = t.$refs[m])
                          ? void 0
                          : a.getScrollViewInfo()
                      );
                    case 6:
                      if ((s = e.sent)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return");
                    case 9:
                      (f = s.boundingClientRect.height || 0),
                        (h =
                          (null == (o = s.scrollOffset)
                            ? void 0
                            : o.scrollHeight) || 0),
                        (v =
                          "number" == typeof r
                            ? r
                            : (null == (u = s.scrollOffset)
                                ? void 0
                                : u.scrollTop) || 0),
                        (d = Math.max(0, h - f)),
                        (Q.value = v >= d - 50),
                        (N.value = v > d + 50),
                        (e.next = 15);
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(3));
                    case 15:
                      return e.abrupt("return");
                    case 16:
                      if (
                        (p =
                          null ==
                          (c = null == (l = t.$refs[m]) ? void 0 : l.$refs)
                            ? void 0
                            : c.mainList)
                      ) {
                        e.next = 19;
                        break;
                      }
                      return e.abrupt("return", void (Q.value = !0));
                    case 19:
                      (g = p.scrollTop),
                        (y = p.clientHeight),
                        (b = p.scrollHeight),
                        (k = b - (g + y)),
                        (Q.value = k <= 50),
                        (N.value = k < -50);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[3, 13]]
            );
          })
        );
      },
      handleBackToBottomClick: function (e) {
        (q.value = !0),
          (H.value = !0),
          (A.value = !1),
          e && e(),
          setTimeout(function () {
            (q.value = !1), (H.value = !1), (_.value = X());
          }, 300);
      },
      resetQuestionIndex: function () {
        (_.value = X()),
          (A.value = !1),
          (T.value = !1),
          (E.value = !1),
          (I.value = 0),
          (P.value = !1),
          (L.value = !1),
          ($.value = !1),
          (z = null),
          (W = 0);
      },
      cleanup: function () {
        F.value && (clearTimeout(F.value), (F.value = null)),
          Y && (clearTimeout(Y), (Y = null)),
          (z = null),
          (W = 0),
          se();
      },
      handleCancelProgrammaticScroll: function () {},
      calculateBackToBottomPosition: function () {
        if (i) {
          var e = d.index.createSelectorQuery().in(t);
          return (
            e.select(".bottomBar").boundingClientRect(),
            void e.exec(function (e) {
              var t = e && e[0] ? e[0].height : 0,
                n = Math.max(t, G);
              n > 0 ? ie(n) : (D.value = 150);
            })
          );
        }
        le(), ce();
      },
      updateContentListPadding: ue,
      updateBottomButtonPosition: ie,
      handleBackToBottomClickWrapper: function (e) {
        var n, r;
        p.StockBridge.report("base.ai_search.backto_bottom_btn_click", {
          session: b(),
        }),
          (q.value = !0),
          (H.value = !0),
          (A.value = !1),
          null ==
            (r =
              null == (n = t.$refs[m]) ? void 0 : n.setEnableAutoScrollDown) ||
            r.call(n, !0),
          e && e(),
          setTimeout(function () {
            (q.value = !1), (H.value = !1), (_.value = X());
          }, 500);
      },
      getHighestVisibilityQuestion: fe,
      getHighestVisibilityQuestionForMp: he,
      scrollToQuestionByScrollTop: ve,
      scrollToPreviousQuestion: function () {
        return v(
          n,
          null,
          e().mark(function n() {
            var r, a, o, u, l, c, s, f, h, v, d, g, y;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (p.StockBridge.report(
                          "base.ai_search.prev_question_btn_click",
                          { session: b() }
                        ),
                        (z = null),
                        (W = 0),
                        (l = null),
                        !i)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 5), he();
                    case 5:
                      (e.t0 = e.sent), (e.next = 9);
                      break;
                    case 8:
                      e.t0 = fe();
                    case 9:
                      if ((l = e.t0)) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt("return");
                    case 12:
                      if (((s = (c = l).index), !c.isBubbleVisible)) {
                        e.next = 18;
                        break;
                      }
                      if (!((f = s - 1) < 0)) {
                        e.next = 16;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void p.StockBridge.toast("已是最早的问题")
                      );
                    case 16:
                      e.next = 19;
                      break;
                    case 18:
                      f = s;
                    case 19:
                      return (
                        (h = "aiAnswerBlock".concat(f)), (e.next = 22), de(h)
                      );
                    case 22:
                      if (e.sent) {
                        e.next = 44;
                        break;
                      }
                      if (i) {
                        e.next = 25;
                        break;
                      }
                      return e.abrupt("return");
                    case 25:
                      return (
                        (e.prev = 25),
                        (e.next = 28),
                        null == (r = t.$refs[m])
                          ? void 0
                          : r.getScrollViewInfo()
                      );
                    case 28:
                      if ((v = e.sent)) {
                        e.next = 31;
                        break;
                      }
                      return e.abrupt("return");
                    case 31:
                      return (
                        (d = v.scrollOffset),
                        (g = d.scrollTop || 0),
                        (y = Math.max(0, g - 200)),
                        null == (a = t.$refs[m]) || a.scrollToPosition(y),
                        (e.next = 35),
                        new Promise(function (e) {
                          return setTimeout(e, 500);
                        })
                      );
                    case 35:
                      return (e.next = 37), de(h);
                    case 37:
                      if (e.sent) {
                        e.next = 39;
                        break;
                      }
                      return e.abrupt("return");
                    case 39:
                      e.next = 44;
                      break;
                    case 41:
                      return (
                        (e.prev = 41), (e.t1 = e.catch(25)), e.abrupt("return")
                      );
                    case 44:
                      (H.value = !0),
                        null ==
                          (u =
                            null == (o = t.$refs[m])
                              ? void 0
                              : o.setEnableAutoScrollDown) || u.call(o, !1),
                        i
                          ? ve(f, h)
                          : t.$nextTick(function () {
                              var e = document.getElementById(h);
                              e
                                ? (e.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  }),
                                  setTimeout(function () {
                                    (H.value = !1), (_.value = f);
                                  }, 500))
                                : (H.value = !1);
                            });
                    case 45:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[25, 41]]
            );
          })
        );
      },
    };
  });
