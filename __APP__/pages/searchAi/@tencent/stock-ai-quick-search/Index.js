require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n =
    (require("../../../../@babel/runtime/helpers/typeof"),
    require("../../../../@babel/runtime/helpers/createForOfIteratorHelper")),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  i = function (e, t) {
    for (var i in t || (t = {})) o.call(t, i) && c(e, i, t[i]);
    if (r) {
      var u,
        l = n(r(t));
      try {
        for (l.s(); !(u = l.n()).done; ) {
          i = u.value;
          a.call(t, i) && c(e, i, t[i]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  u = function (e, n, t) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            i(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            i(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, c);
        };
      i((t = t.apply(e, n)).next());
    });
  },
  l = require("../../../../common/vendor.js"),
  s = require("../../markdown-it/lib/index.js"),
  p = require("../../throttle-debounce/esm/index.js"),
  d = {
    ENV: l.StockBridge.ENV,
    SHELL: "mpweapp",
    store: {
      get: function () {
        return l.StockBridge.store;
      },
    },
    report: function (e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      l.StockBridge.report(e, n);
    },
    request: function (e) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "GET",
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return l.StockBridge.request(e, n, t, r);
    },
    setStorage: function (e, n, t) {
      l.StockBridge.setStorage(e, n);
    },
    getStorage: function (e, n) {
      var t = l.StockBridge.getStorage(e);
      n && n({ data: t });
    },
    getStorageSync: function (e) {
      var n = this;
      return new Promise(function (t) {
        n.getStorage(e, function (e) {
          t(e);
        });
      });
    },
    getCookie: function (e) {
      return l.StockBridge.getCookie(e);
    },
    busOn: function (e, n) {
      l.StockBridge.busOn(e, n);
    },
    busOff: function (e, n) {
      l.StockBridge.busOff(e, n);
    },
    busEmit: function (e) {
      for (
        var n, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        r[o - 1] = arguments[o];
      (n = l.StockBridge).busEmit.apply(n, [e].concat(r));
    },
    toast: function (e, n) {
      l.StockBridge.toast(e, "none", n);
    },
    routeTo: function (e) {
      l.StockBridge.routeTo(e);
    },
    exitPage: function () {
      try {
        getCurrentPages().length <= 1
          ? l.wx$1.switchTab({ url: "/pages/index/index" })
          : l.wx$1.navigateBack();
      } catch (e) {}
    },
    setBounces: function (e) {},
    getUserInfo: function () {
      var e = {};
      return (
        (e.openid = l.wx$1.getStorageSync("_qluin")),
        (e.fskey = l.wx$1.getStorageSync("_qlskey")),
        (e.check = 10),
        e
      );
    },
    openExtraWebview: function (e) {
      l.StockBridge.openExtraWebview(e);
    },
    getAppValue: function () {
      return "zxg_xcx";
    },
    aegisReportEvent: function (e, n) {
      l.StockBridge.aegisReportEvent(e, n);
    },
    recordLog: function (e, n) {},
    setTitle: function (e) {
      l.StockBridge.setTitle(e);
    },
  },
  f = null,
  v = [],
  h = "",
  g = function (e, t) {
    for (
      var r = new Uint8Array(e.data),
        o = (function (e) {
          v = v.concat(e);
          for (var n = 0; n < v.length; ) {
            var t = v[n],
              r = void 0;
            if (t <= 127) r = 1;
            else if (192 == (224 & t)) r = 2;
            else if (224 == (240 & t)) r = 3;
            else {
              if (240 != (248 & t)) throw new Error("Invalid UTF-8 start byte");
              r = 4;
            }
            if (n + r > v.length) break;
            n += r;
          }
          var o = v.slice(0, n);
          return (v = v.slice(n)), o;
        })(Array.from(r)),
        a = new Uint8Array(o),
        c = "",
        i = 0;
      i < a.length;
      i++
    ) {
      var u = a[i];
      c += "%".concat(u < 16 ? "0" : "").concat(u.toString(16));
    }
    if ((c = decodeURIComponent(c))) {
      "" !== h && ((c = "".concat(h).concat(c)), (h = ""));
      var l,
        s = c.matchAll(/event:(.*)\n*data:(.*)\n*/g),
        p = n(s);
      try {
        for (p.s(); !(l = p.n()).done; ) {
          var d = l.value,
            f = d[1].trim(),
            g = d[2].trim(),
            w = {};
          (w.event = f),
            (w.data = g),
            "[DONE]" === g
              ? (t(w), (h = ""))
              : y(g)
              ? t(w)
              : (h = "".concat(h, "event:").concat(f, "\ndata:").concat(g));
        }
      } catch (e) {
        p.e(e);
      } finally {
        p.f();
      }
    }
  };
function y(e) {
  try {
    JSON.parse(e);
  } catch (e) {
    return !1;
  }
  return !0;
}
function w(e) {
  return l.md5Module(e).toString().toUpperCase();
}
function m(e) {
  return JSON.parse(e).choices[0].delta.content;
}
function b(e) {
  try {
    var n = (function (e) {
      try {
        var n = JSON.parse(e);
        return Object.prototype.hasOwnProperty.call(n, "event") &&
          Object.prototype.hasOwnProperty.call(n.event, "name")
          ? n.event.name
          : void 0;
      } catch (e) {
        return;
      }
    })(e);
    return void 0 !== n && "sub_agent_stock_query" === n;
  } catch (e) {
    return !1;
  }
}
function k(e) {
  try {
    return JSON.parse(e);
  } catch (e) {
    return null;
  }
}
var x,
  S = "正在分析问题...",
  q = 1620053006,
  C = (
    (l.wx$1.getWindowInfo && l.wx$1.getWindowInfo()) ||
    l.wx$1.getSystemInfoSync()
  ).windowWidth;
x = (void 0 === C ? 0 : C) / 750;
var E = {
    props: {
      serachValue: { type: String, default: "" },
      intention: { type: String, default: "" },
      abtModule: { type: String, default: "" },
      inputConfirmed: { type: Number, default: 0 },
    },
    setup: function (t, r) {
      var o = r.emit;
      l.StockBridge.ENV, l.EnvTypeEnum.MP;
      var a = (function (t, r, o) {
        var a = r.emit,
          c = l.ref(!1),
          i = l.ref(!1),
          y = l.ref(""),
          C = l.ref(!1),
          E = l.ref(S),
          O = l.ref(""),
          _ = l.ref(""),
          T = l.ref(""),
          M = l.ref(!1),
          A = new s.MarkdownIt({ html: !0 });
        (A.renderer.rules.hr = function () {
          return "";
        }),
          [
            "paragraph_open",
            "list_item_open",
            "ordered_list_open",
            "bullet_list_open",
            "heading_open",
            "link_open",
            "strong_open",
          ].forEach(function (e) {
            var n =
              A.renderer.rules[e] ||
              function (e, n, t, r, o) {
                return o.renderToken(e, n, t);
              };
            A.renderer.rules[e] = function (e, t, r, o, a) {
              return (
                (e[t].attrs = e[t].attrs || []),
                e[t].attrs.push(["class", "_".concat(e[t].tag)]),
                n(e, t, r, o, a)
              );
            };
          });
        var I = d.getUserInfo(),
          P = function () {
            (y.value = ""),
              (E.value = S),
              (c.value = !1),
              (i.value = !1),
              (C.value = !1),
              (_.value = ""),
              (O.value = ""),
              (T.value = ""),
              (M.value = !1),
              (U.value = []),
              (V.value = !1);
          },
          j = function () {
            !(function () {
              try {
                f && f.offChunkReceived(), f && f.abort(), (f = null);
              } catch (e) {}
              (v = []), (h = "");
            })();
          },
          B = function (e, t) {
            var r, o, a, c;
            _.value = (function () {
              var e = new Uint8Array(16);
              if (d.ENV === l.EnvTypeEnum.MP)
                for (var n = 0; n < e.length; n++)
                  e[n] = Math.floor(256 * Math.random());
              else crypto.getRandomValues(e);
              return Array.from(e, function (e) {
                return e.toString(16).padStart(2, "0");
              }).join("");
            })();
            var i = d.getAppValue();
            (r = I.openid), (o = I.openid), (a = I.fskey), (c = I.check);
            var u = "";
            return (
              (u = "&appid=wx9cf8c670ebd68ce4"),
              "mpweapp" === l.ShellTypeEnum.MPWAI &&
                (u = "&appid=wx1559de8bc252bce9"),
              (function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "GET",
                  r = null,
                  o = e.indexOf("?");
                if (o < 0) return null;
                var a,
                  c = e.substring(o + 1).split("&"),
                  i = [],
                  u = n(c);
                try {
                  for (u.s(); !(a = u.n()).done; ) {
                    var l = a.value,
                      s = l.indexOf("=");
                    if (s >= 0) {
                      var p = l.substring(0, s),
                        d = l.substring(s + 1);
                      "" !== d && i.push([p, decodeURIComponent(d)]);
                    }
                  }
                } catch (e) {
                  u.e(e);
                } finally {
                  u.f();
                }
                i.sort(function (e, n) {
                  return e[0].localeCompare(n[0]);
                });
                for (var f = "", v = 0; v < i.length; v++)
                  (f = f.concat(i[v][0]).concat("=").concat(i[v][1])),
                    v !== i.length - 1 && (f = f.concat("&"));
                var h = "Android",
                  g = "".concat(h).concat(t);
                return (
                  (f = f.concat("&key=").concat(w(g))),
                  (r = w(f)),
                  ""
                    .concat(e, "&x-appid=")
                    .concat(h, "&x-timestamp=")
                    .concat(new Date().valueOf(), "&x-sa-v=2&x-sa-sign=")
                    .concat(r)
                );
              })(
                "https://proxy.finance.qq.com/cgi/cgi-bin/openai/sse/workflow?query="
                  .concat(e, "&route_id=workflow&business=")
                  .concat(t, "&request_id=")
                  .concat(_.value, "&user=")
                  .concat(r, "&openid=")
                  .concat(o, "&fskey=")
                  .concat(a, "&check=")
                  .concat(c)
                  .concat(u, "&app=")
                  .concat(i)
              )
            );
          },
          V = l.ref(!1),
          F = function (n, t) {
            return u(
              exports,
              null,
              e().mark(function r() {
                var o;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (n) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        (o = B(n, t)),
                          j(),
                          (function (e, n) {
                            var t = n.onmessage,
                              r = n.onerror,
                              o = n.onclose,
                              a = {
                                url: e,
                                method: n.method,
                                data: n.data,
                                timeout: 3e5,
                                enableChunked: !0,
                                header: n.headers,
                                fail: function () {
                                  var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {};
                                  r(e);
                                },
                                complete: function () {
                                  o();
                                },
                              };
                            (f = l.wx$1.request(a)).onChunkReceived(function (
                              e
                            ) {
                              try {
                                g(e, t);
                              } catch (n) {
                                d.aegisReportEvent(
                                  "[stock-search-ai] OnHandleChunkError",
                                  {
                                    errorMessage: n.message,
                                    onChunkReceived: e,
                                  }
                                );
                              }
                            });
                          })(o, {
                            method: "GET",
                            headers: { "Content-Type": "application/json" },
                            onmessage: function (e) {
                              if ("" !== e.event || "" !== e.data) {
                                var t = e.event,
                                  r = e.data;
                                if ("message" === t)
                                  if (((M.value = !1), "[DONE]" === r)) {
                                    var o = y.value && y.value.length > 0,
                                      c = O.value && O.value.length > 0;
                                    if (
                                      (o &&
                                        c &&
                                        N(O.value, _.value, y.value, n),
                                      !C.value)
                                    ) {
                                      C.value = !0;
                                      var u = "" !== y.value,
                                        l = {
                                          requestid: _.value,
                                          answertype: T.value,
                                        };
                                      a("onFetchFinish", n, u, l);
                                    }
                                    o &&
                                      (d.report(
                                        "base.search.ai_search_smartbox_answer_finish",
                                        { searchText: n }
                                      ),
                                      L(y.value, n));
                                  } else if (
                                    (function (e) {
                                      try {
                                        var n = JSON.parse(e);
                                        return (
                                          !!(
                                            Object.prototype.hasOwnProperty.call(
                                              n,
                                              "choices"
                                            ) &&
                                            Array.isArray(n.choices) &&
                                            n.choices.length > 0 &&
                                            Object.prototype.hasOwnProperty.call(
                                              n.choices[0],
                                              "delta"
                                            ) &&
                                            Object.prototype.hasOwnProperty.call(
                                              n.choices[0].delta,
                                              "content"
                                            )
                                          ) && "" !== m(e)
                                        );
                                      } catch (e) {
                                        return !1;
                                      }
                                    })(r)
                                  ) {
                                    if (!C.value && "" === y.value) {
                                      C.value = !0;
                                      var s = {
                                        requestid: _.value,
                                        answertype: T.value,
                                      };
                                      a("onFetchFinish", n, !0, s);
                                    }
                                    var p = m(r);
                                    null !== p && (y.value = y.value.concat(p)),
                                      i.value || H();
                                  } else
                                    b(r) &&
                                      (E.value = (function (e) {
                                        var n, t;
                                        try {
                                          var r = JSON.parse(e);
                                          return (
                                            (Object.prototype.hasOwnProperty.call(
                                              r.event,
                                              "content"
                                            ) &&
                                              Object.prototype.hasOwnProperty.call(
                                                r.event.content,
                                                "message"
                                              ) &&
                                              (null ==
                                              (t =
                                                null ==
                                                (n =
                                                  null == r ? void 0 : r.event)
                                                  ? void 0
                                                  : n.content)
                                                ? void 0
                                                : t.message)) ||
                                            ""
                                          );
                                        } catch (e) {
                                          return "";
                                        }
                                      })(r));
                                else if ("param" === t) {
                                  var f = k(r);
                                  (O.value =
                                    (null == f ? void 0 : f.session) || ""),
                                    (T.value =
                                      (null == f ? void 0 : f.agent) || "");
                                } else if ("exception" === t) {
                                  var v = k(r),
                                    h = (null == v ? void 0 : v.code) || 0,
                                    g = (null == v ? void 0 : v.msg) || "",
                                    w = [q, 1620053011, 1620053013];
                                  h === q && (V.value = !0),
                                    w.includes(h)
                                      ? ((y.value = g), (M.value = !1))
                                      : ((y.value =
                                          "很抱歉，服务器忙得不可开交，过2分钟再试试。"),
                                        (M.value = !0),
                                        a("onFetchFinish", n, !1, {}));
                                }
                              }
                            },
                            onclose: function () {},
                            onerror: function (e) {
                              M.value = !0;
                            },
                          });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            );
          },
          N = function (n, t, r, o) {
            return u(
              exports,
              null,
              e().mark(function a() {
                var c, i, u, l, s;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (c = R(
                              (c =
                                "https://proxy.finance.qq.com/cgi/cgi-bin/openai/answer/recheck?")
                            )),
                            (i = {
                              session: n,
                              requestId: t,
                              user: I.openid,
                              answer: r,
                              query: o,
                              app: d.getAppValue(),
                              type: "offline",
                            }),
                            (e.prev = 3),
                            (e.next = 6),
                            d.request(c, "POST", i, {
                              dataType: "json",
                              header: { "Content-Type": "application/json" },
                            })
                          );
                        case 6:
                          (u = e.sent) &&
                            0 === u.code &&
                            ((l = u.data),
                            1 === l.result &&
                              (0 === (s = l.msg).length &&
                                (s =
                                  "很抱歉，我还未学习到如何回答这个问题，暂时无法提供相关信息。您可以问我其他问题，我尽量尝试回答。"),
                              (y.value = s))),
                            (e.next = 12);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(3));
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  a,
                  null,
                  [[3, 10]]
                );
              })
            );
          },
          R = function (e, n) {
            var t;
            t = ""
              .concat(e, "user=")
              .concat(I.openid, "&openid=")
              .concat(I.openid, "&fskey=")
              .concat(I.fskey, "&check=")
              .concat(I.check);
            var r = "";
            return (
              (r = "&appid=wx9cf8c670ebd68ce4"),
              "mpweapp" === l.ShellTypeEnum.MPWAI &&
                (r = "&appid=wx1559de8bc252bce9"),
              (t = "".concat(t).concat(r))
            );
          },
          U = l.ref([]),
          L = function (n, t) {
            return u(
              exports,
              null,
              e().mark(function r() {
                var o, a, c, i;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = R(
                              (o =
                                "https://proxy.finance.qq.com/cgi/cgi-bin/openai/question/guess?")
                            )),
                            (a = {
                              session: O.value,
                              count: 2,
                              requestId: _.value,
                              user: I.openid,
                              type: "offline",
                              answer: n,
                              question: t,
                            }),
                            (e.prev = 2),
                            (e.next = 5),
                            d.request(o, "POST", a, {
                              dataType: "json",
                              header: { "Content-Type": "application/json" },
                            })
                          );
                        case 5:
                          (c = e.sent) &&
                            0 === c.code &&
                            (i = c.data).questionList &&
                            i.questionList.length > 0 &&
                            (U.value = i.questionList || []),
                            (e.next = 11);
                          break;
                        case 9:
                          (e.prev = 9), (e.t0 = e.catch(2));
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[2, 9]]
                );
              })
            );
          };
        l.watch(
          function () {
            return t.serachValue;
          },
          function (e) {
            e ? (P(), F(e, t.intention)) : (P(), j());
          },
          { immediate: !0 }
        );
        var $ = l.computed(function () {
            return A.render(y.value);
          }),
          W = l.computed(function () {
            var e =
                t.intention &&
                "baike" === t.intention &&
                y.value &&
                y.value.length > 0,
              n = t.intention && "factual" === t.intention,
              r = t.intention && "factual-baike" === t.intention;
            return n || e || r;
          }),
          H = p.throttle(32, function () {
            l.wx$1
              .createSelectorQuery()
              .in(o)
              .select(".card-container")
              .boundingClientRect()
              .exec(function (e) {
                if (0 === x);
                else if (e && e.length > 0 && e[0]) {
                  e[0].height;
                  var n = e[0].height / x,
                    t = Math.ceil(n) > 480;
                  i.value = t;
                }
              });
          }),
          J = null;
        return (
          l.onMounted(function () {}),
          l.onUnmounted(function () {
            var e, n;
            null ==
              (n =
                null == (e = null == J ? void 0 : J.observer)
                  ? void 0
                  : e.disconnect) || n.call(e),
              (J = null),
              j();
          }),
          {
            isExpanded: c,
            showToggle: i,
            replayContent: y,
            replayContentHtml: $,
            quoteContent: E,
            isServerError: M,
            canShowMainLayout: W,
            onViewMoreClick: function () {
              a("onExpandBtclick", !c.value), (c.value = !c.value);
            },
            followOnArray: U,
            handleFollowOnItemClick: function () {
              var e,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
              if (n)
                if (
                  (d.report("base.search.quick_search_follow_on_click", {
                    requestid: _.value,
                    search_scene: t.inputConfirmed ? "all" : "suggest",
                  }),
                  d.ENV === l.EnvTypeEnum.MP &&
                    "app_lct" === (null == (e = d.store) ? void 0 : e.lctfrom))
                ) {
                  var r = "searchfrom=searchfollowon&mainQuery=".concat(
                      encodeURIComponent(n),
                      "&queryUsage=forceSend"
                    ),
                    o = "/pages/additional/webview/index?url=".concat(
                      encodeURIComponent(
                        "https://wzq.tenpay.com/mp/v2/index.html#/pages/searchAi/main?".concat(
                          r
                        )
                      )
                    );
                  l.wx$1.navigateTo({ url: o });
                } else
                  l.StockRouter.routeTo({
                    name: "searchAi",
                    query: {
                      searchfrom: "searchfollowon",
                      mainQuery: n,
                      queryUsage: "forceSend",
                    },
                  });
            },
            quickSearchQuestionErrorCodeFlag: V,
          }
        );
      })(
        t,
        { emit: o },
        l.getCurrentInstance().proxy || l.getCurrentInstance()
      );
      return i({ isLite: !1 }, a);
    },
  },
  O = l._export_sfc(E, [
    [
      "render",
      function (e, n, t, r, o, a) {
        return l.e(
          { a: e.canShowMainLayout },
          e.canShowMainLayout
            ? l.e(
                {
                  b:
                    "ai_guess_new" === t.abtModule &&
                    !e.quickSearchQuestionErrorCodeFlag,
                },
                "ai_guess_new" !== t.abtModule ||
                  e.quickSearchQuestionErrorCodeFlag
                  ? "ai_guess_new" !== t.abtModule
                    ? l.e(
                        { t: t.intention },
                        t.intention ? { v: l.t(t.serachValue) } : {},
                        { w: e.quoteContent && 0 == e.replayContent.length },
                        e.quoteContent && 0 == e.replayContent.length
                          ? { x: l.t(e.quoteContent) }
                          : {},
                        { y: e.replayContentHtml, z: e.showToggle },
                        e.showToggle
                          ? l.e({ A: !e.isExpanded }, (e.isExpanded, {}), {
                              B: l.t(e.isExpanded ? "收起" : "展开"),
                              C: e.isExpanded ? 1 : "",
                              D: l.o(function () {
                                return (
                                  e.onViewMoreClick &&
                                  e.onViewMoreClick.apply(e, arguments)
                                );
                              }, 4129),
                            })
                          : {},
                        { E: e.isExpanded ? 1 : "" }
                      )
                    : {}
                  : l.e(
                      { c: t.intention },
                      (t.intention, {}),
                      { d: t.intention },
                      t.intention ? { e: l.t(t.serachValue) } : {},
                      { f: e.quoteContent && 0 == e.replayContent.length },
                      e.quoteContent && 0 == e.replayContent.length
                        ? { g: l.t(e.quoteContent) }
                        : {},
                      {
                        h: e.replayContentHtml,
                        i: l.n(
                          "ai_guess_new" === t.abtModule ? "abtModuleClass" : ""
                        ),
                        j: e.showToggle,
                      },
                      e.showToggle
                        ? l.e({ k: !e.isExpanded }, (e.isExpanded, {}), {
                            l: l.t(e.isExpanded ? "收起" : "展开"),
                            m: e.isExpanded ? 1 : "",
                            n: l.o(function () {
                              return (
                                e.onViewMoreClick &&
                                e.onViewMoreClick.apply(e, arguments)
                              );
                            }, 4127),
                          })
                        : {},
                      {
                        o: e.isExpanded ? 1 : "",
                        p: "ai_guess_new" === t.abtModule,
                      },
                      "ai_guess_new" === t.abtModule
                        ? l.e(
                            { q: e.followOnArray && e.followOnArray.length },
                            e.followOnArray && e.followOnArray.length
                              ? {
                                  r: l.f(e.followOnArray, function (n, t, r) {
                                    return {
                                      a: l.t(n),
                                      b: n,
                                      c: l.o(
                                        function (t) {
                                          return e.handleFollowOnItemClick(n);
                                        },
                                        4128,
                                        n
                                      ),
                                    };
                                  }),
                                }
                              : {}
                          )
                        : {}
                    ),
                {
                  s: "ai_guess_new" !== t.abtModule,
                  F: l.n(r.isLite ? "" : "pro"),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-c4e1891e"],
  ]);
wx.createComponent(O);
