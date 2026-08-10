var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../../../@babel/runtime/helpers/typeof"),
  a = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  c = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  p = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  f = function (e, t, n) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t) {
    for (var n in t || (t = {})) p.call(t, n) && f(e, n, t[n]);
    if (u) {
      var r,
        o = a(u(t));
      try {
        for (o.s(); !(r = o.n()).done; ) {
          n = r.value;
          l.call(t, n) && f(e, n, t[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  m = function (e, t) {
    return c(e, i(t));
  },
  h = function (e, t, n) {
    return f(e, "symbol" != o(t) ? t + "" : t, n);
  },
  v = function (e, t, n) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  y = require("../../../../../common/vendor.js"),
  g = require("../utils/StockBridgeWrapper.js"),
  _ = n(function e() {
    r(this, e);
  });
h(_, "BEGIN_CONNECT", 0),
  h(_, "ON_RECALL", 1),
  h(_, "ON_QUOTE", 2),
  h(_, "ON_REASON_CONTENT", 10),
  h(_, "ON_CONTENT", 11),
  h(_, "ON_SERVER_XP", 90),
  h(_, "ON_CLOSE", 100),
  h(_, "ON_ERROR", 101);
var b = 1620053017,
  O = 1620053018,
  w = 1620053019;
function S(e) {
  return JSON.parse(e).choices[0].delta.content;
}
function P(e) {
  return JSON.parse(e).choices[0].delta.reasoning_content;
}
var k = "trpc_agent",
  j = "preprocess",
  x = "skill_load";
function N(e) {
  return e === x;
}
function E(e) {
  return !(!e || "string" != typeof e) && e.toLowerCase().includes("skill");
}
function C(e) {
  var t, n, r;
  try {
    var o = JSON.parse(e),
      a =
        null ==
        (r =
          null ==
          (n = null == (t = null == o ? void 0 : o.choices) ? void 0 : t[0])
            ? void 0
            : n.delta)
          ? void 0
          : r.tool_calls;
    return Array.isArray(a) && 0 !== a.length
      ? a
          .map(function (e) {
            return (function (e) {
              var t, n, r, o;
              if (!e || "function" !== e.type) return null;
              var a = (null == (t = e.function) ? void 0 : t.name) || "",
                s = {
                  id: e.id || "",
                  name: a,
                  title: (null == (n = e.function) ? void 0 : n.title) || "",
                  arguments:
                    (null == (r = e.function) ? void 0 : r.arguments) || "",
                  functionType:
                    (null == (o = e.function) ? void 0 : o.function_type) || "",
                  isSkill: E(a),
                };
              return "number" == typeof e.index && (s.callIndex = e.index), s;
            })(e);
          })
          .filter(function (e) {
            return null !== e;
          })
      : [];
  } catch (e) {
    return [];
  }
}
function R(e) {
  var t, n, r, o;
  try {
    var a = JSON.parse(e),
      s =
        null ==
        (o =
          null ==
          (r =
            null ==
            (n = null == (t = null == a ? void 0 : a.choices) ? void 0 : t[0])
              ? void 0
              : n.delta)
            ? void 0
            : r.tool_calls)
          ? void 0
          : o[0];
    if (!s || "tool_response" !== s.type) return null;
    var c = s.tool_response || {},
      i = c.name || "",
      u =
        "string" == typeof c.response
          ? c.response
          : JSON.stringify(c.response || ""),
      p = { id: s.id || "", name: i, response: u, isSkill: E(i) };
    return "number" == typeof s.index && (p.callIndex = s.index), p;
  } catch (e) {
    return null;
  }
}
var A,
  T = ["用户中期历史偏好检索"];
function q(e) {
  try {
    var t = JSON.parse(e);
    return Object.prototype.hasOwnProperty.call(t.event, "content") &&
      Object.prototype.hasOwnProperty.call(t.event.content, "message")
      ? t.event.content.message
      : "";
  } catch (e) {
    return "";
  }
}
function M(e) {
  var t = JSON.parse(e);
  if (
    Object.prototype.hasOwnProperty.call(t, "event") &&
    Object.prototype.hasOwnProperty.call(t.event, "name")
  )
    return t.event.name;
}
function J(e) {
  return (null == e ? void 0 : e.answerChainMode) === k;
}
function L() {
  return "step_"
    .concat(Date.now(), "_")
    .concat(Math.random().toString(36).slice(2, 9));
}
function B(e) {
  return e.processSteps || [];
}
function U(e, t) {
  y.Vue.set(e, "processSteps", t);
}
function I(e) {
  var t = {
    id: e.id || L(),
    type: e.isSkill ? "skill" : "tool",
    name: e.name,
    title: e.title || "",
    arguments: e.arguments || "",
    response: "",
  };
  return "number" == typeof e.callIndex && (t.callIndex = e.callIndex), t;
}
function D(e, t) {
  var n = e[e.length - 1];
  !n || "thinking" !== n.type || n.isLeading
    ? e.push({ id: L(), type: "thinking", status: "done", content: t })
    : (e[e.length - 1] = m(d({}, n), {
        content: "".concat(n.content || "").concat(t),
      }));
}
var F = y.getDefaultExportFromCjs([
    {
      component_type: "stock_day_kline",
      component_desc: "K线类型",
      component_props: '[{"propName": "functionObj"}]',
      component_entry: "components/custom-components/AiKlineComponent.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "profit_forecast",
      component_desc: "盈利预测",
      component_props: '[{"propName": "functionObj"}]',
      component_entry: "components/custom-components/AiAnswerFunctionItem.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "institutional_perspective",
      component_desc: "机构评级",
      component_props: '[{"propName": "functionObj"}]',
      component_entry: "components/custom-components/AiAnswerFunctionItem.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-gudan",
      component_desc: "股单卡片组件",
      component_props: '[{"propName": "data"}]',
      component_entry: "components/custom-components/AiGuDanComponent.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-strategy",
      component_desc: "稳健型蓝筹股",
      component_props: '[{"propName": "data", "value":"data.component_data"}]',
      component_entry: "components/custom-components/AiStrategyComponent.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-marketing",
      component_desc: "功能跳转运营位组件",
      component_props: '[{"propName": "data"}]',
      component_entry: "components/custom-components/AiMarketingComponent.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-general_watchlist",
      component_desc: "股单推荐组件",
      component_props:
        '[{"propName": "basketId", "value":"data.fsid"},{"propName":"routeMockTradeParam","value":"{ scene: \'fromai\', type: \'gd\', id: data.fsid }"},{"propName": "isToMockTrade", "value":"data.mockTradeAbtUser"},{"propName": "theme", "value":"theme"},{"propName": "data", "value":"data"}]',
      component_entry:
        "components/custom-components/AiCardCAiGeneralWatchlist.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-sub_agent_aics_button",
      component_desc: "跳转人工客服组件",
      component_props: '[{ "propName": "propsObj", "value": "data" }]',
      component_entry:
        "components/custom-components/AiEnterLiveSupportComponent.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-news",
      component_desc: "新闻卡片",
      component_props: '[{"propName": "data"}]',
      component_entry: "components/custom-components/AiNewsItem.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-subscribe-report",
      component_desc: "订阅盘前盘后简报组件",
      component_props: '[{ "propName": "propsObj", "value": "data" }]',
      component_entry: "components/custom-components/AiSubscribeNewsletter.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-market_sentiment",
      component_desc: "市场情绪组件",
      component_props:
        '[{ "propName": "sentiment", "value": "data.sentiment" }]',
      component_entry: "components/custom-components/SentimentBar.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-divergent_opinions",
      component_desc: "积极/看空组件",
      component_props:
        '[{ "propName": "data", "value": "data.divergent_opinions" }]',
      component_entry: "components/custom-components/SentimentPanel.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-gzh_info",
      component_desc: "公众号信源气泡组件",
      component_props: '[{ "propName": "propsObj", "value": "data" }]',
      component_entry: "components/custom-components/PublicAccountViews.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-related_quotes",
      component_desc: "相关股票推荐组件",
      component_props:
        '[{ "propName": "related_quotes", "value": "data.related_quotes" }]',
      component_entry: "components/custom-components/RelatedStockList.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
    {
      component_type: "c-ai-plate_info",
      component_desc: "板块推荐组件",
      component_props: '[{ "propName": "propsObj", "value": "data" }]',
      component_entry: "components/custom-components/SectorCardComponent.vue",
      component_version: "workspace:*",
      component_package: "stock-ai-markdown",
    },
  ]),
  V = {},
  G = {},
  H = {};
Object.defineProperty(H, "__esModule", { value: !0 }),
  (H.default = function () {
    return function (e) {
      var t = e.data;
      if (e.headers.noEncode) return delete e.headers.noEncode, e;
      var n = [];
      for (var r in t)
        t.hasOwnProperty(r) &&
          n.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
      return (e.data = n.join("&")), e;
    };
  });
var z = {};
Object.defineProperty(z, "__esModule", { value: !0 });
var $ = 0;
z.default = function () {
  return function (e) {
    return (e.id = ++$), e;
  };
};
var X = {},
  Q =
    (y.commonjsGlobal && y.commonjsGlobal.__assign) ||
    function () {
      return (Q =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
Object.defineProperty(X, "__esModule", { value: !0 });
var W = y.dist,
  K = { removeNil: !1, removeEmpty: !1 };
X.default = function (e) {
  void 0 === e && (e = {});
  var t = Q(Q({}, K), e),
    n = t.removeNil,
    r = t.removeEmpty;
  return function (e) {
    return (
      (n = void 0 === e.removeNilValue ? n : Boolean(e.removeNilValue)),
      (r = void 0 === e.removeEmptyValue ? r : Boolean(e.removeEmptyValue)),
      (e.data = (0, W.safeobj)(e.data, n, r)),
      e
    );
  };
};
var Y = {},
  Z = { exports: {} },
  ee = function (e, t) {
    return function () {
      for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
        n[r] = arguments[r];
      return e.apply(t, n);
    };
  },
  te = ee,
  ne = Object.prototype.toString;
function re(e) {
  return Array.isArray(e);
}
function oe(e) {
  return void 0 === e;
}
function ae(e) {
  return "[object ArrayBuffer]" === ne.call(e);
}
function se(e) {
  return null !== e && "object" == o(e);
}
function ce(e) {
  if ("[object Object]" !== ne.call(e)) return !1;
  var t = Object.getPrototypeOf(e);
  return null === t || t === Object.prototype;
}
function ie(e) {
  return "[object Function]" === ne.call(e);
}
function ue(e, t) {
  if (null != e)
    if (("object" != o(e) && (e = [e]), re(e)))
      for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e);
}
var pe = {
    isArray: re,
    isArrayBuffer: ae,
    isBuffer: function (e) {
      return (
        null !== e &&
        !oe(e) &&
        null !== e.constructor &&
        !oe(e.constructor) &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: function (e) {
      return "[object FormData]" === ne.call(e);
    },
    isArrayBufferView: function (e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && ae(e.buffer);
    },
    isString: function (e) {
      return "string" == typeof e;
    },
    isNumber: function (e) {
      return "number" == typeof e;
    },
    isObject: se,
    isPlainObject: ce,
    isUndefined: oe,
    isDate: function (e) {
      return "[object Date]" === ne.call(e);
    },
    isFile: function (e) {
      return "[object File]" === ne.call(e);
    },
    isBlob: function (e) {
      return "[object Blob]" === ne.call(e);
    },
    isFunction: ie,
    isStream: function (e) {
      return se(e) && ie(e.pipe);
    },
    isURLSearchParams: function (e) {
      return "[object URLSearchParams]" === ne.call(e);
    },
    isStandardBrowserEnv: function () {
      return (
        ("undefined" == typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" != typeof window &&
        "undefined" != typeof document
      );
    },
    forEach: ue,
    merge: function e() {
      var t = {};
      function n(n, r) {
        ce(t[r]) && ce(n)
          ? (t[r] = e(t[r], n))
          : ce(n)
          ? (t[r] = e({}, n))
          : re(n)
          ? (t[r] = n.slice())
          : (t[r] = n);
      }
      for (var r = 0, o = arguments.length; r < o; r++) ue(arguments[r], n);
      return t;
    },
    extend: function (e, t, n) {
      return (
        ue(t, function (t, r) {
          e[r] = n && "function" == typeof t ? te(t, n) : t;
        }),
        e
      );
    },
    trim: function (e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    },
    stripBOM: function (e) {
      return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
    },
  },
  le = pe;
function fe(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var de = function (e, t, n) {
    if (!t) return e;
    var r;
    if (n) r = n(t);
    else if (le.isURLSearchParams(t)) r = t.toString();
    else {
      var o = [];
      le.forEach(t, function (e, t) {
        null != e &&
          (le.isArray(e) ? (t += "[]") : (e = [e]),
          le.forEach(e, function (e) {
            le.isDate(e)
              ? (e = e.toISOString())
              : le.isObject(e) && (e = JSON.stringify(e)),
              o.push(fe(t) + "=" + fe(e));
          }));
      }),
        (r = o.join("&"));
    }
    if (r) {
      var a = e.indexOf("#");
      -1 !== a && (e = e.slice(0, a)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
    }
    return e;
  },
  me = pe;
function he() {
  this.handlers = [];
}
(he.prototype.use = function (e, t, n) {
  return (
    this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: !!n && n.synchronous,
      runWhen: n ? n.runWhen : null,
    }),
    this.handlers.length - 1
  );
}),
  (he.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  }),
  (he.prototype.forEach = function (e) {
    me.forEach(this.handlers, function (t) {
      null !== t && e(t);
    });
  });
var ve,
  ye,
  ge,
  _e,
  be,
  Oe,
  we,
  Se,
  Pe,
  ke,
  je,
  xe,
  Ne,
  Ee,
  Ce,
  Re,
  Ae,
  Te,
  qe,
  Me,
  Je = he,
  Le = pe,
  Be = function (e, t, n, r, o) {
    return (
      (e.config = t),
      n && (e.code = n),
      (e.request = r),
      (e.response = o),
      (e.isAxiosError = !0),
      (e.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      }),
      e
    );
  },
  Ue = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  };
function Ie() {
  if (ye) return ve;
  ye = 1;
  var e = Be;
  return (ve = function (t, n, r, o, a) {
    var s = new Error(t);
    return e(s, n, r, o, a);
  });
}
function De() {
  if (Te) return Ae;
  function e(e) {
    this.message = e;
  }
  return (
    (Te = 1),
    (e.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
    (e.prototype.__CANCEL__ = !0),
    (Ae = e)
  );
}
var Fe = pe,
  Ve = function (e, t) {
    Le.forEach(e, function (n, r) {
      r !== t &&
        r.toUpperCase() === t.toUpperCase() &&
        ((e[t] = n), delete e[r]);
    });
  },
  Ge = Be,
  He = { "Content-Type": "application/x-www-form-urlencoded" };
function ze(e, t) {
  !Fe.isUndefined(e) &&
    Fe.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
var $e,
  Xe = {
    transitional: Ue,
    adapter:
      (("undefined" != typeof XMLHttpRequest ||
        ("undefined" != typeof process &&
          "[object process]" === Object.prototype.toString.call(process))) &&
        ($e = (function () {
          if (Me) return qe;
          Me = 1;
          var e = pe,
            t = (function () {
              if (_e) return ge;
              _e = 1;
              var e = Ie();
              return (ge = function (t, n, r) {
                var o = r.config.validateStatus;
                r.status && o && !o(r.status)
                  ? n(
                      e(
                        "Request failed with status code " + r.status,
                        r.config,
                        null,
                        r.request,
                        r
                      )
                    )
                  : t(r);
              });
            })(),
            n = (function () {
              if (Oe) return be;
              Oe = 1;
              var e = pe;
              return (be = e.isStandardBrowserEnv()
                ? {
                    write: function (t, n, r, o, a, s) {
                      var c = [];
                      c.push(t + "=" + encodeURIComponent(n)),
                        e.isNumber(r) &&
                          c.push("expires=" + new Date(r).toGMTString()),
                        e.isString(o) && c.push("path=" + o),
                        e.isString(a) && c.push("domain=" + a),
                        !0 === s && c.push("secure"),
                        (document.cookie = c.join("; "));
                    },
                    read: function (e) {
                      var t = document.cookie.match(
                        new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                      );
                      return t ? decodeURIComponent(t[3]) : null;
                    },
                    remove: function (e) {
                      this.write(e, "", Date.now() - 864e5);
                    },
                  }
                : {
                    write: function () {},
                    read: function () {
                      return null;
                    },
                    remove: function () {},
                  });
            })(),
            r = de,
            o = (function () {
              if (xe) return je;
              xe = 1;
              var e = Se
                  ? we
                  : ((Se = 1),
                    (we = function (e) {
                      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
                    })),
                t = ke
                  ? Pe
                  : ((ke = 1),
                    (Pe = function (e, t) {
                      return t
                        ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                        : e;
                    }));
              return (je = function (n, r) {
                return n && !e(r) ? t(n, r) : r;
              });
            })(),
            a = (function () {
              if (Ee) return Ne;
              Ee = 1;
              var e = pe,
                t = [
                  "age",
                  "authorization",
                  "content-length",
                  "content-type",
                  "etag",
                  "expires",
                  "from",
                  "host",
                  "if-modified-since",
                  "if-unmodified-since",
                  "last-modified",
                  "location",
                  "max-forwards",
                  "proxy-authorization",
                  "referer",
                  "retry-after",
                  "user-agent",
                ];
              return (Ne = function (n) {
                var r,
                  o,
                  a,
                  s = {};
                return n
                  ? (e.forEach(n.split("\n"), function (n) {
                      if (
                        ((a = n.indexOf(":")),
                        (r = e.trim(n.substr(0, a)).toLowerCase()),
                        (o = e.trim(n.substr(a + 1))),
                        r)
                      ) {
                        if (s[r] && t.indexOf(r) >= 0) return;
                        s[r] =
                          "set-cookie" === r
                            ? (s[r] ? s[r] : []).concat([o])
                            : s[r]
                            ? s[r] + ", " + o
                            : o;
                      }
                    }),
                    s)
                  : s;
              });
            })(),
            s = (function () {
              if (Re) return Ce;
              Re = 1;
              var e = pe;
              return (Ce = e.isStandardBrowserEnv()
                ? (function () {
                    var t,
                      n = /(msie|trident)/i.test(navigator.userAgent),
                      r = document.createElement("a");
                    function o(e) {
                      var t = e;
                      return (
                        n && (r.setAttribute("href", t), (t = r.href)),
                        r.setAttribute("href", t),
                        {
                          href: r.href,
                          protocol: r.protocol
                            ? r.protocol.replace(/:$/, "")
                            : "",
                          host: r.host,
                          search: r.search ? r.search.replace(/^\?/, "") : "",
                          hash: r.hash ? r.hash.replace(/^#/, "") : "",
                          hostname: r.hostname,
                          port: r.port,
                          pathname:
                            "/" === r.pathname.charAt(0)
                              ? r.pathname
                              : "/" + r.pathname,
                        }
                      );
                    }
                    return (
                      (t = o(window.location.href)),
                      function (n) {
                        var r = e.isString(n) ? o(n) : n;
                        return r.protocol === t.protocol && r.host === t.host;
                      }
                    );
                  })()
                : function () {
                    return !0;
                  });
            })(),
            c = Ie(),
            i = Ue,
            u = De();
          return (qe = function (p) {
            return new Promise(function (l, f) {
              var d,
                m = p.data,
                h = p.headers,
                v = p.responseType;
              function y() {
                p.cancelToken && p.cancelToken.unsubscribe(d),
                  p.signal && p.signal.removeEventListener("abort", d);
              }
              e.isFormData(m) && delete h["Content-Type"];
              var g = new XMLHttpRequest();
              if (p.auth) {
                var _ = p.auth.username || "",
                  b = p.auth.password
                    ? unescape(encodeURIComponent(p.auth.password))
                    : "";
                h.Authorization = "Basic " + btoa(_ + ":" + b);
              }
              var O = o(p.baseURL, p.url);
              function w() {
                if (g) {
                  var e =
                      "getAllResponseHeaders" in g
                        ? a(g.getAllResponseHeaders())
                        : null,
                    n = {
                      data:
                        v && "text" !== v && "json" !== v
                          ? g.response
                          : g.responseText,
                      status: g.status,
                      statusText: g.statusText,
                      headers: e,
                      config: p,
                      request: g,
                    };
                  t(
                    function (e) {
                      l(e), y();
                    },
                    function (e) {
                      f(e), y();
                    },
                    n
                  ),
                    (g = null);
                }
              }
              if (
                (g.open(
                  p.method.toUpperCase(),
                  r(O, p.params, p.paramsSerializer),
                  !0
                ),
                (g.timeout = p.timeout),
                "onloadend" in g
                  ? (g.onloadend = w)
                  : (g.onreadystatechange = function () {
                      g &&
                        4 === g.readyState &&
                        (0 !== g.status ||
                          (g.responseURL &&
                            0 === g.responseURL.indexOf("file:"))) &&
                        setTimeout(w);
                    }),
                (g.onabort = function () {
                  g &&
                    (f(c("Request aborted", p, "ECONNABORTED", g)), (g = null));
                }),
                (g.onerror = function () {
                  f(c("Network Error", p, null, g)), (g = null);
                }),
                (g.ontimeout = function () {
                  var e = p.timeout
                      ? "timeout of " + p.timeout + "ms exceeded"
                      : "timeout exceeded",
                    t = p.transitional || i;
                  p.timeoutErrorMessage && (e = p.timeoutErrorMessage),
                    f(
                      c(
                        e,
                        p,
                        t.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                        g
                      )
                    ),
                    (g = null);
                }),
                e.isStandardBrowserEnv())
              ) {
                var S =
                  (p.withCredentials || s(O)) && p.xsrfCookieName
                    ? n.read(p.xsrfCookieName)
                    : void 0;
                S && (h[p.xsrfHeaderName] = S);
              }
              "setRequestHeader" in g &&
                e.forEach(h, function (e, t) {
                  void 0 === m && "content-type" === t.toLowerCase()
                    ? delete h[t]
                    : g.setRequestHeader(t, e);
                }),
                e.isUndefined(p.withCredentials) ||
                  (g.withCredentials = !!p.withCredentials),
                v && "json" !== v && (g.responseType = p.responseType),
                "function" == typeof p.onDownloadProgress &&
                  g.addEventListener("progress", p.onDownloadProgress),
                "function" == typeof p.onUploadProgress &&
                  g.upload &&
                  g.upload.addEventListener("progress", p.onUploadProgress),
                (p.cancelToken || p.signal) &&
                  ((d = function (e) {
                    g &&
                      (f(!e || (e && e.type) ? new u("canceled") : e),
                      g.abort(),
                      (g = null));
                  }),
                  p.cancelToken && p.cancelToken.subscribe(d),
                  p.signal &&
                    (p.signal.aborted
                      ? d()
                      : p.signal.addEventListener("abort", d))),
                m || (m = null),
                g.send(m);
            });
          });
        })()),
      $e),
    transformRequest: [
      function (e, t) {
        return (
          Ve(t, "Accept"),
          Ve(t, "Content-Type"),
          Fe.isFormData(e) ||
          Fe.isArrayBuffer(e) ||
          Fe.isBuffer(e) ||
          Fe.isStream(e) ||
          Fe.isFile(e) ||
          Fe.isBlob(e)
            ? e
            : Fe.isArrayBufferView(e)
            ? e.buffer
            : Fe.isURLSearchParams(e)
            ? (ze(t, "application/x-www-form-urlencoded;charset=utf-8"),
              e.toString())
            : Fe.isObject(e) || (t && "application/json" === t["Content-Type"])
            ? (ze(t, "application/json"),
              (function (e, t) {
                if (Fe.isString(e))
                  try {
                    return (0, JSON.parse)(e), Fe.trim(e);
                  } catch (e) {
                    if ("SyntaxError" !== e.name) throw e;
                  }
                return (0, JSON.stringify)(e);
              })(e))
            : e
        );
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional || Xe.transitional,
          n = t && t.silentJSONParsing,
          r = t && t.forcedJSONParsing,
          o = !n && "json" === this.responseType;
        if (o || (r && Fe.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (e) {
            if (o) {
              if ("SyntaxError" === e.name) throw Ge(e, this, "E_JSON_PARSE");
              throw e;
            }
          }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
Fe.forEach(["delete", "get", "head"], function (e) {
  Xe.headers[e] = {};
}),
  Fe.forEach(["post", "put", "patch"], function (e) {
    Xe.headers[e] = Fe.merge(He);
  });
var Qe,
  We,
  Ke = Xe,
  Ye = pe,
  Ze = Ke;
function et() {
  return We
    ? Qe
    : ((We = 1),
      (Qe = function (e) {
        return !(!e || !e.__CANCEL__);
      }));
}
var tt = pe,
  nt = function (e, t, n) {
    var r = this || Ze;
    return (
      Ye.forEach(n, function (n) {
        e = n.call(r, e, t);
      }),
      e
    );
  },
  rt = et(),
  ot = Ke,
  at = De();
function st(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new at("canceled");
}
var ct,
  it,
  ut = pe,
  pt = function (e, t) {
    t = t || {};
    var n = {};
    function r(e, t) {
      return ut.isPlainObject(e) && ut.isPlainObject(t)
        ? ut.merge(e, t)
        : ut.isPlainObject(t)
        ? ut.merge({}, t)
        : ut.isArray(t)
        ? t.slice()
        : t;
    }
    function o(n) {
      return ut.isUndefined(t[n])
        ? ut.isUndefined(e[n])
          ? void 0
          : r(void 0, e[n])
        : r(e[n], t[n]);
    }
    function a(e) {
      if (!ut.isUndefined(t[e])) return r(void 0, t[e]);
    }
    function s(n) {
      return ut.isUndefined(t[n])
        ? ut.isUndefined(e[n])
          ? void 0
          : r(void 0, e[n])
        : r(void 0, t[n]);
    }
    function c(n) {
      return n in t ? r(e[n], t[n]) : n in e ? r(void 0, e[n]) : void 0;
    }
    var i = {
      url: a,
      method: a,
      data: a,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: c,
    };
    return (
      ut.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
        var t = i[e] || o,
          r = t(e);
        (ut.isUndefined(r) && t !== c) || (n[e] = r);
      }),
      n
    );
  };
function lt() {
  return it ? ct : ((it = 1), (ct = { version: "0.26.1" }));
}
var ft = lt().version,
  dt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    dt[e] = function (n) {
      return o(n) === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var mt = {};
dt.transitional = function (e, t, n) {
  return function (r, o, a) {
    if (!1 === e)
      throw new Error(
        (function (e, t) {
          return (
            "[Axios v" +
            ft +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        })(o, " has been removed" + (t ? " in " + t : ""))
      );
    return t && !mt[o] && (mt[o] = !0), !e || e(r, o, a);
  };
};
var ht,
  vt,
  yt,
  gt,
  _t,
  bt,
  Ot = pe,
  wt = de,
  St = Je,
  Pt = function (e) {
    return (
      st(e),
      (e.headers = e.headers || {}),
      (e.data = nt.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = tt.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      tt.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (t) {
          delete e.headers[t];
        }
      ),
      (e.adapter || ot.adapter)(e).then(
        function (t) {
          return (
            st(e),
            (t.data = nt.call(e, t.data, t.headers, e.transformResponse)),
            t
          );
        },
        function (t) {
          return (
            rt(t) ||
              (st(e),
              t &&
                t.response &&
                (t.response.data = nt.call(
                  e,
                  t.response.data,
                  t.response.headers,
                  e.transformResponse
                ))),
            Promise.reject(t)
          );
        }
      )
    );
  },
  kt = pt,
  jt = {
    assertOptions: function (e, t, n) {
      if ("object" != o(e)) throw new TypeError("options must be an object");
      for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
        var s = r[a],
          c = t[s];
        if (c) {
          var i = e[s],
            u = void 0 === i || c(i, s, e);
          if (!0 !== u) throw new TypeError("option " + s + " must be " + u);
        } else if (!0 !== n) throw Error("Unknown option " + s);
      }
    },
    validators: dt,
  },
  xt = jt.validators;
function Nt(e) {
  (this.defaults = e),
    (this.interceptors = { request: new St(), response: new St() });
}
(Nt.prototype.request = function (e, t) {
  "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
    (t = kt(this.defaults, t)).method
      ? (t.method = t.method.toLowerCase())
      : this.defaults.method
      ? (t.method = this.defaults.method.toLowerCase())
      : (t.method = "get");
  var n = t.transitional;
  void 0 !== n &&
    jt.assertOptions(
      n,
      {
        silentJSONParsing: xt.transitional(xt.boolean),
        forcedJSONParsing: xt.transitional(xt.boolean),
        clarifyTimeoutError: xt.transitional(xt.boolean),
      },
      !1
    );
  var r = [],
    o = !0;
  this.interceptors.request.forEach(function (e) {
    ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
      ((o = o && e.synchronous), r.unshift(e.fulfilled, e.rejected));
  });
  var a,
    s = [];
  if (
    (this.interceptors.response.forEach(function (e) {
      s.push(e.fulfilled, e.rejected);
    }),
    !o)
  ) {
    var c = [Pt, void 0];
    for (
      Array.prototype.unshift.apply(c, r),
        c = c.concat(s),
        a = Promise.resolve(t);
      c.length;

    )
      a = a.then(c.shift(), c.shift());
    return a;
  }
  for (var i = t; r.length; ) {
    var u = r.shift(),
      p = r.shift();
    try {
      i = u(i);
    } catch (e) {
      p(e);
      break;
    }
  }
  try {
    a = Pt(i);
  } catch (e) {
    return Promise.reject(e);
  }
  for (; s.length; ) a = a.then(s.shift(), s.shift());
  return a;
}),
  (Nt.prototype.getUri = function (e) {
    return (
      (e = kt(this.defaults, e)),
      wt(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    );
  }),
  Ot.forEach(["delete", "get", "head", "options"], function (e) {
    Nt.prototype[e] = function (t, n) {
      return this.request(
        kt(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
  Ot.forEach(["post", "put", "patch"], function (e) {
    Nt.prototype[e] = function (t, n, r) {
      return this.request(kt(r || {}, { method: e, url: t, data: n }));
    };
  });
var Et = pe,
  Ct = ee,
  Rt = Nt,
  At = pt,
  Tt = (function e(t) {
    var n = new Rt(t),
      r = Ct(Rt.prototype.request, n);
    return (
      Et.extend(r, Rt.prototype, n),
      Et.extend(r, n),
      (r.create = function (n) {
        return e(At(t, n));
      }),
      r
    );
  })(Ke);
(Tt.Axios = Rt),
  (Tt.Cancel = De()),
  (Tt.CancelToken = (function () {
    if (vt) return ht;
    vt = 1;
    var e = De();
    function t(t) {
      if ("function" != typeof t)
        throw new TypeError("executor must be a function.");
      var n;
      this.promise = new Promise(function (e) {
        n = e;
      });
      var r = this;
      this.promise.then(function (e) {
        if (r._listeners) {
          var t,
            n = r._listeners.length;
          for (t = 0; t < n; t++) r._listeners[t](e);
          r._listeners = null;
        }
      }),
        (this.promise.then = function (e) {
          var t,
            n = new Promise(function (e) {
              r.subscribe(e), (t = e);
            }).then(e);
          return (
            (n.cancel = function () {
              r.unsubscribe(t);
            }),
            n
          );
        }),
        t(function (t) {
          r.reason || ((r.reason = new e(t)), n(r.reason));
        });
    }
    return (
      (t.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
      (t.prototype.subscribe = function (e) {
        this.reason
          ? e(this.reason)
          : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
      }),
      (t.prototype.unsubscribe = function (e) {
        if (this._listeners) {
          var t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
      }),
      (t.source = function () {
        var e;
        return {
          token: new t(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (ht = t)
    );
  })()),
  (Tt.isCancel = et()),
  (Tt.VERSION = lt().version),
  (Tt.all = function (e) {
    return Promise.all(e);
  }),
  (Tt.spread = gt
    ? yt
    : ((gt = 1),
      (yt = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      }))),
  (Tt.isAxiosError = (function () {
    if (bt) return _t;
    bt = 1;
    var e = pe;
    return (_t = function (t) {
      return e.isObject(t) && !0 === t.isAxiosError;
    });
  })()),
  (Z.exports = Tt),
  (Z.exports.default = Tt);
var qt = Z.exports;
Object.defineProperty(Y, "__esModule", { value: !0 });
var Mt = qt,
  Jt = y.dist;
Y.default = function () {
  return function (e) {
    if (Mt.default.isCancel(e)) return (0, Jt.blackhole)();
  };
};
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 }),
  (Lt.default = function () {
    return function (e) {
      var t = e.data;
      return (
        "string" == typeof t &&
          (e.data = t.replace(/[\\]*\\x(\w{2})/g, function (e, t) {
            return "22" === t ? "" : String.fromCharCode(parseInt(t, 16));
          })),
        e
      );
    };
  });
var Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
var Ut = y.dist;
Bt.default = function (e) {
  return function (t) {
    return (
      "function" == typeof e && e(t),
      t.config && !1 === t.config.catch
        ? (0, Ut.blackhole)()
        : Promise.reject(t)
    );
  };
};
var It = {},
  Dt =
    (y.commonjsGlobal && y.commonjsGlobal.__assign) ||
    function () {
      return (Dt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
Object.defineProperty(It, "__esModule", { value: !0 });
var Ft = y.dist,
  Vt = { codenames: ["retcode", "code"], normalcodes: [0] };
It.default = function (e) {
  void 0 === e && (e = {});
  var t = Dt(Dt({}, Vt), e),
    n = Array.from(t.codenames),
    r = Array.from(t.normalcodes);
  return function (e) {
    var t = e.data,
      o = e.config;
    if (o.handle) return e;
    if (!t)
      return !1 === o.catch
        ? (0, Ft.blackhole)()
        : Promise.reject(
            Dt(Dt({}, e), {
              data: { retcode: "EMPTYRESP", retmsg: "系统繁忙 请稍后再试" },
            })
          );
    for (var a = 0, s = n; a < s.length; a++) {
      var c = t[s[a]];
      if (void 0 !== c)
        return r.includes(c)
          ? e
          : !1 === o.catch
          ? (0, Ft.blackhole)()
          : Promise.reject(e);
    }
    return e;
  };
};
var Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 }),
  (Gt.default = function () {
    return function (e) {
      var t = e.data;
      if ("string" == typeof t) {
        t = t.trim();
        try {
          t = JSON.parse(t);
        } catch (n) {
          try {
            t = new Function("return ".concat(t))();
          } catch (t) {
            throw { type: "json", info: e };
          }
        }
      }
      return (e.data = t), e;
    };
  });
var Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
var zt = y.dist;
Ht.default = function () {
  return function (e) {
    return (e.data = (0, zt.safeobj)(e.data, !0, !0)), e;
  };
};
var $t = {},
  Xt =
    (y.commonjsGlobal && y.commonjsGlobal.__assign) ||
    function () {
      return (Xt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
Object.defineProperty($t, "__esModule", { value: !0 });
var Qt = { codenames: ["retcode"] };
($t.default = function (e) {
  void 0 === e && (e = {});
  var t = Xt(Xt({}, Qt), e).codenames;
  return function (e) {
    for (var n = e.data, r = 0, o = t; r < o.length; r++) {
      var a = o[r];
      if (void 0 !== n[a]) {
        n[a] = Number.isNaN(+n[a]) ? n[a] : +n[a];
        break;
      }
    }
    return e;
  };
}),
  Object.defineProperty(G, "__esModule", { value: !0 }),
  (G.resRetcode =
    G.resNoEmpty =
    G.resJson =
    G.resExceptions =
    G.resError =
    G.resDecodeHex =
    G.resCancel =
    G.reqNoNil =
    G.reqid =
    G.reqEncode =
      void 0);
var Wt = H;
G.reqEncode = Wt.default;
var Kt = z;
G.reqid = Kt.default;
var Yt = X;
G.reqNoNil = Yt.default;
var Zt = Y;
G.resCancel = Zt.default;
var en = Lt;
G.resDecodeHex = en.default;
var tn = Bt;
G.resError = tn.default;
var nn = It;
G.resExceptions = nn.default;
var rn = Gt;
G.resJson = rn.default;
var on = Ht;
G.resNoEmpty = on.default;
var an = $t;
G.resRetcode = an.default;
var sn = {};
y.commonjsGlobal && y.commonjsGlobal.__spreadArray,
  Object.defineProperty(sn, "__esModule", { value: !0 });
var cn = function (e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
};
sn.default = function (e) {
  e.onRequestError(function (e) {
    cn("error", "Request error:", e);
  }),
    e.onResponseError(function (e) {
      cn("error", "Response error:", e);
    }),
    e.onResponse(function (e) {
      return (
        cn(
          "info",
          "[" + e.status + " " + e.statusText + "]",
          "[" + e.config.method.toUpperCase() + "]",
          e.config.url
        ),
        e
      );
    });
};
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 }),
  (un.default = function (e) {
    e.onRequest(function (e) {
      void 0 === e.withCredentials &&
        ((/^https?:\/\//i.test(e.url) && 0 !== e.url.indexOf(e.baseURL)) ||
          (e.withCredentials = !0));
    });
  }),
  (function (e) {
    var t =
        (y.commonjsGlobal && y.commonjsGlobal.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                });
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n]);
            }),
      n =
        (y.commonjsGlobal && y.commonjsGlobal.__exportStar) ||
        function (e, n) {
          for (var r in e)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(n, r) ||
              t(n, e, r);
        };
    Object.defineProperty(e, "__esModule", { value: !0 }), n(G, e);
    for (
      var r = qt,
        o = sn,
        a = un,
        s = {
          setBaseURL: function (e) {
            this.defaults.baseURL = e;
          },
          setHeader: function (e, t, n) {
            void 0 === n && (n = "common");
            for (var r = 0, o = Array.isArray(n) ? n : [n]; r < o.length; r++) {
              var a = o[r];
              if (!t) return void delete this.defaults.headers[a][e];
              this.defaults.headers[a][e] = t;
            }
          },
          setToken: function (e, t, n) {
            void 0 === n && (n = "common");
            var r = e ? (t ? t + " " : "") + e : null;
            this.setHeader("Authorization", r, n);
          },
          onRequest: function (e) {
            this.interceptors.request.use(function (t) {
              return e(t) || t;
            });
          },
          onResponse: function (e) {
            this.interceptors.response.use(function (t) {
              return e(t) || t;
            });
          },
          onRequestError: function (e) {
            this.interceptors.request.use(void 0, function (t) {
              return e(t) || Promise.reject(t);
            });
          },
          onResponseError: function (e) {
            this.interceptors.response.use(void 0, function (t) {
              return e(t) || Promise.reject(t);
            });
          },
          onError: function (e) {
            this.onRequestError(e), this.onResponseError(e);
          },
          create: function (e) {
            return p(Object.assign({}, e, this.defaults));
          },
        },
        c = function (e) {
          s["$" + e] = function () {
            return this[e].apply(this, arguments).then(function (e) {
              return e && e.data;
            });
          };
        },
        i = 0,
        u = [
          "request",
          "delete",
          "get",
          "head",
          "options",
          "post",
          "put",
          "patch",
        ];
      i < u.length;
      i++
    )
      c(u[i]);
    var p = function (e, t) {
      void 0 === t && (t = {});
      var n = r.default.create(e);
      return (
        (n.CancelToken = r.default.CancelToken),
        (n.isCancel = r.default.isCancel),
        (function (e) {
          for (var t in s) e[t] = s[t].bind(e);
        })(n),
        t.debug && (0, o.default)(n),
        t.credentials && (0, a.default)(n),
        n
      );
    };
    e.default = p;
  })(V);
var pn = y.getDefaultExportFromCjs(V)({ timeout: 16e3, baseURL: "" });
pn.setHeader("Content-Type", "application/x-www-form-urlencoded", ["post"]),
  pn.onRequest(V.reqEncode()),
  pn.onRequest(V.reqNoNil()),
  pn.onResponse(V.resJson()),
  pn.onResponse(V.resNoEmpty()),
  pn.onResponse(function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return 0 === e.data.code ||
      0 == +e.data.retcode ||
      /qt.finance.qq.com/.test(e.config.url) ||
      /qt.gtimg.cn/.test(e.config.url) ||
      /domain_upstream\/sqtgtimgcn/.test(e.config.url) ||
      /tencent-cloud.com/.test(e.config.url) ||
      /wzqcf.gtimg.com/.test(e.config.url)
      ? e
      : Promise.reject(e);
  }),
  pn.onResponseError(function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.config,
      n = void 0 === t ? {} : t,
      r = e.data,
      o = void 0 === r ? {} : r,
      a = "系统繁忙，请稍后重试";
    return (
      "Network Error" === e.message
        ? (a = "网络不可用，请检查网络设置")
        : e.message &&
          e.message.indexOf("timeout") > -1 &&
          (a = "请求超时，请稍后再试"),
      n.isShowToast && location.hostname,
      Promise.reject({ msg: a, code: o.code || o.retcode || -1003 })
    );
  });
var ln = function (e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = d({}, t),
    o = n.method,
    a = void 0 === o ? "post" : o,
    s = a.toLowerCase();
  return "get" === s
    ? pn["$".concat(s)](e, d({ params: r, isShowToast: !0 }, n))
    : pn["$".concat(s)](e, r, d({ isShowToast: !0 }, n));
};
(exports.ANSWER_CHAIN_TRPC_AGENT = k),
  (exports.HIDDEN_PROCESS_TOOL_NAME_SKILL_LOAD = x),
  (exports.SERVER_CODE_MBTI_ANSWER = w),
  (exports.SERVER_CODE_MBTI_CHOOSE = O),
  (exports.SERVER_CODE_WUJI = b),
  (exports.SseStatus = _),
  (exports.TOOL_FUNCTION_TYPE_PREPROCESS = j),
  (exports.applyAnswerChainModeFromParam = function (e, t) {
    e &&
      t &&
      (y.Vue.set(
        e,
        "answerChainMode",
        (function (e) {
          return (function (e) {
            return !(!e || e.agent !== k);
          })(e)
            ? k
            : "legacy";
        })(t)
      ),
      t.agent && y.Vue.set(e, "agent", t.agent));
  }),
  (exports.buildHistoryProcessSteps = function (e) {
    var t = [],
      n = !1,
      r = !1;
    if (!Array.isArray(e)) return { processSteps: t, answerChainMode: "" };
    for (var o = 0; o < e.length; o += 1) {
      var a = e[o],
        s = a.msg_type,
        c = a.msg;
      if ("pre_content" === s) {
        if (((r = !0), !c)) continue;
        n
          ? D(t, c)
          : ((n = !0),
            t.push({
              id: L(),
              type: "thinking",
              status: "done",
              content: c,
              isLeading: !0,
            }));
      } else
        "trpc_tool_calls" === s &&
          ((r = !0),
          C(c).forEach(function (e) {
            e.functionType !== j &&
              (N(e.name) || t.push(m(d({}, I(e)), { status: "done" })));
          }));
    }
    return { processSteps: t, answerChainMode: r ? k : "" };
  }),
  (exports.generateComponentContent = function (e, t) {
    return '\n:::card {"comp_id": "'
      .concat(e, '", "props": ')
      .concat(t, "}:::\n");
  }),
  (exports.getAnswerContentForCheck = function (e) {
    var t, n;
    return (
      (null == e ? void 0 : e.reply) ||
      "" ||
      (J(e) && (null == (t = e.processSteps) ? void 0 : t.length) > 0
        ? ((n = e.processSteps),
          Array.isArray(n) && 0 !== n.length
            ? n
                .filter(function (e) {
                  return "thinking" === e.type && e.content;
                })
                .map(function (e) {
                  return e.content;
                })
                .join("")
            : "")
        : "")
    );
  }),
  (exports.getProcessStepsStreamingLength = function (e) {
    return J(e)
      ? B(e).reduce(function (e, t) {
          return "thinking" === t.type
            ? e + (t.content ? t.content.length : 0)
            : e;
        }, 0)
      : 0;
  }),
  (exports.h5Request = ln),
  (exports.handleProcessContent = function (e, n, r) {
    if (J(e) && n) {
      if (e.mainContentStarted || !e.useProcessMode) {
        var o = ""
          .concat((null == r ? void 0 : r.replyContent) || e.reply || "")
          .concat(n);
        return r && (r.replyContent = o), void y.Vue.set(e, "reply", o);
      }
      !(function (e, n) {
        var r = t(B(e)),
          o = r[r.length - 1];
        o && "thinking" === o.type && "streaming" === o.status
          ? (r[r.length - 1] = m(d({}, o), {
              content: "".concat(o.content || "").concat(n),
            }))
          : r.push({
              id: L(),
              type: "thinking",
              status: "streaming",
              content: n,
            }),
          U(e, r);
      })(e, n);
    }
  }),
  (exports.handleProcessToolCall = function (e, n, r) {
    if (J(e)) {
      var o = C(n);
      if (0 !== o.length) {
        var a = o.filter(function (e) {
            return e.functionType !== j && !N(e.name);
          }),
          s = o.some(function (e) {
            return e.functionType === j;
          }),
          c = o.some(function (e) {
            return N(e.name);
          });
        if (((s || c) && y.Vue.set(e, "useProcessMode", !0), 0 !== a.length)) {
          e.reply &&
            (function (e, n) {
              var r = e.reply || "";
              if (r) {
                var o = t(B(e));
                o.push({
                  id: L(),
                  type: "thinking",
                  status: "done",
                  content: r,
                }),
                  U(e, o),
                  n && (n.replyContent = ""),
                  y.Vue.set(e, "reply", "");
              }
            })(e, r),
            y.Vue.set(e, "useProcessMode", !0),
            y.Vue.set(e, "mainContentStarted", !1);
          var i = t(B(e));
          (i = (function (e) {
            var t = e.length - 1;
            return (
              t >= 0 &&
                "thinking" === e[t].type &&
                "streaming" === e[t].status &&
                (e[t] = m(d({}, e[t]), { status: "done" })),
              e
            );
          })(i)),
            a.forEach(function (e) {
              i.push(m(d({}, I(e)), { status: "calling" }));
            }),
            U(e, i);
        }
      }
    }
  }),
  (exports.handleProcessToolResponse = function (e, n) {
    if (J(e)) {
      var r = R(n);
      if (r) {
        var o = t(B(e)),
          a = (function (e, t) {
            if ("number" == typeof t.callIndex) {
              var n = e.findIndex(function (e) {
                return (
                  ("tool" === e.type || "skill" === e.type) &&
                  e.callIndex === t.callIndex &&
                  "calling" === e.status
                );
              });
              if (-1 !== n) return n;
            }
            if (t.id) {
              var r = e.reduce(function (e, n, r) {
                return (
                  ("tool" !== n.type && "skill" !== n.type) ||
                    n.id !== t.id ||
                    "calling" !== n.status ||
                    e.push(r),
                  e
                );
              }, []);
              if (1 === r.length) return r[0];
            }
            if (t.name)
              for (var o = e.length - 1; o >= 0; o -= 1) {
                var a = e[o];
                if (
                  ("tool" === a.type || "skill" === a.type) &&
                  "calling" === a.status &&
                  a.name === t.name
                )
                  return o;
              }
            return -1;
          })(o, r);
        -1 !== a &&
          ((o[a] = m(d({}, o[a]), {
            status: "done",
            response: r.response || "",
            type: r.isSkill ? "skill" : o[a].type,
          })),
          U(e, o),
          y.Vue.set(e, "mainContentStarted", !0));
      }
    }
  }),
  (exports.isBusinessPluginMessage = function (e) {
    try {
      var t = JSON.parse(e);
      if (
        t &&
        t.event &&
        t.event.name &&
        "business" === t.event.name &&
        t.event.content &&
        t.event.content.message
      ) {
        var n = JSON.parse(t.event.content.message);
        return n && n.subIntentCode;
      }
      return !1;
    } catch (e) {
      return !1;
    }
  }),
  (exports.isCommonAgentPluginReply = function (e) {
    var t,
      n,
      r,
      o =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : [
              "c-ai-general_watchlist",
              "c-ai-marketing",
              "c-ai-strategy",
              "c-ai-gudan",
            ];
    try {
      var a = JSON.parse(e);
      return (null == a ? void 0 : a.component_id)
        ? o.includes(null == a ? void 0 : a.component_id)
        : "Plugin" === (null == (t = a.event) ? void 0 : t.type) &&
            1 === (null == (n = a.event) ? void 0 : n.state) &&
            o.includes(null == (r = a.event) ? void 0 : r.name);
    } catch (e) {
      return !1;
    }
  }),
  (exports.isDeltaContentReply = function (e) {
    try {
      var t = JSON.parse(e);
      return (
        !!(
          Object.prototype.hasOwnProperty.call(t, "choices") &&
          Array.isArray(t.choices) &&
          t.choices.length > 0 &&
          Object.prototype.hasOwnProperty.call(t.choices[0], "delta") &&
          Object.prototype.hasOwnProperty.call(t.choices[0].delta, "content")
        ) && "" !== S(e)
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isDeltaDocReply = function (e) {
    var t, n;
    try {
      var r = JSON.parse(e);
      return !!(
        Object.prototype.hasOwnProperty.call(r, "choices") &&
        Array.isArray(r.choices) &&
        r.choices.length > 0 &&
        Object.prototype.hasOwnProperty.call(r.choices[0], "delta") &&
        Object.prototype.hasOwnProperty.call(
          r.choices[0].delta,
          "output_sources"
        ) &&
        (null ==
        (n = null == (t = r.choices[0].delta) ? void 0 : t.output_sources)
          ? void 0
          : n.ref_docs)
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isDeltaReasoningContentReply = function (e) {
    try {
      var t = JSON.parse(e);
      return (
        !!(
          Object.prototype.hasOwnProperty.call(t, "choices") &&
          Array.isArray(t.choices) &&
          t.choices.length > 0 &&
          Object.prototype.hasOwnProperty.call(t.choices[0], "delta") &&
          Object.prototype.hasOwnProperty.call(
            t.choices[0].delta,
            "reasoning_content"
          )
        ) && "" !== P(e)
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isDeltaToolCallsReply = function (e) {
    var t, n, r, o;
    try {
      var a = JSON.parse(e),
        s = null == (t = null == a ? void 0 : a.choices) ? void 0 : t[0],
        c =
          null ==
          (r =
            null == (n = null == s ? void 0 : s.delta) ? void 0 : n.tool_calls)
            ? void 0
            : r[0];
      return !(
        !c ||
        "function" !== c.type ||
        ("tool_calls" !== s.finish_reason &&
          !(null == (o = c.function) ? void 0 : o.name))
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isDeltaToolResponseReply = function (e) {
    var t, n, r, o;
    try {
      var a = JSON.parse(e),
        s =
          null ==
          (o =
            null ==
            (r =
              null ==
              (n = null == (t = null == a ? void 0 : a.choices) ? void 0 : t[0])
                ? void 0
                : n.delta)
              ? void 0
              : r.tool_calls)
            ? void 0
            : o[0];
      return !(!s || "tool_response" !== s.type || !s.tool_response);
    } catch (e) {
      return !1;
    }
  }),
  (exports.isFunctionPluginInContentReply = function (e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : ["stock_day_kline", "profit_forecast", "institutional_perspective"];
    try {
      var n = JSON.parse(e);
      return (
        !!(
          Object.prototype.hasOwnProperty.call(n, "choices") &&
          Array.isArray(n.choices) &&
          n.choices.length > 0 &&
          Object.prototype.hasOwnProperty.call(n.choices[0], "delta") &&
          Object.prototype.hasOwnProperty.call(
            n.choices[0].delta,
            "output_deepmode"
          ) &&
          Object.prototype.hasOwnProperty.call(
            n.choices[0].delta.output_deepmode,
            "ren_type"
          )
        ) &&
        "stock_ana" === n.choices[0].delta.output_deepmode.ren_type &&
        t.includes(n.choices[0].delta.output_deepmode.component_type)
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isFunctionPluginMessage = function (e) {
    try {
      var t = JSON.parse(e);
      return !(
        !Object.prototype.hasOwnProperty.call(t, "code") ||
        !Object.prototype.hasOwnProperty.call(t, "msg") ||
        1620053008 !== t.code
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isMcpQuoteInfoPluginReply = function (e) {
    try {
      var t = JSON.parse(e);
      if (
        Object.prototype.hasOwnProperty.call(t, "event") &&
        Object.prototype.hasOwnProperty.call(t.event, "type") &&
        Object.prototype.hasOwnProperty.call(t.event, "name")
      ) {
        return (
          "Plugin" === t.event.type &&
          1 === t.event.state &&
          ["fact_inner_reference", "fact_outer_reference"].includes(
            t.event.name
          )
        );
      }
      return !1;
    } catch (e) {
      return !1;
    }
  }),
  (exports.isMemoryToolResponse = function (e) {
    var t, n, r, o;
    try {
      var a = JSON.parse(e),
        s =
          null ==
          (o =
            null ==
            (r =
              null ==
              (n = null == (t = null == a ? void 0 : a.choices) ? void 0 : t[0])
                ? void 0
                : n.delta)
              ? void 0
              : r.tool_calls)
            ? void 0
            : o[0];
      return (
        !(!s || "tool_response" !== s.type || !s.tool_response) &&
        T.includes(s.tool_response.name)
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isNewUserPickStockMessage = function (e) {
    try {
      var t = JSON.parse(e);
      return !(
        !Object.prototype.hasOwnProperty.call(t, "code") ||
        1620053016 !== t.code
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isParamObj = function (e) {
    try {
      var t = JSON.parse(e);
      return t && t.module;
    } catch (e) {
      return !1;
    }
  }),
  (exports.isQuoteReply = function (e) {
    var t = M(e);
    return void 0 !== t && "quote" === t;
  }),
  (exports.isRecallReply = function (e) {
    try {
      var t = M(e);
      return void 0 !== t && "recall" === t;
    } catch (e) {
      return !1;
    }
  }),
  (exports.isServerBusyMessage = function (e) {
    try {
      var t = JSON.parse(e);
      return !(
        !Object.prototype.hasOwnProperty.call(t, "code") ||
        1620053010 !== t.code
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isServerCacheMessage = function (e) {
    try {
      var t = JSON.parse(e);
      return !(
        !Object.prototype.hasOwnProperty.call(t, "code") ||
        1620053012 !== t.code
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isServerCodeMessage = function (e) {
    try {
      var t = JSON.parse(e);
      return !(
        !Object.prototype.hasOwnProperty.call(t, "code") ||
        (t.code !== b && t.code !== O && t.code !== w)
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isSmartServiceMessage = function (e) {
    try {
      var t = M(e);
      if (void 0 === t) return !1;
      if ("scene_intent" === t) {
        var n = q(e);
        if (n) {
          var r = JSON.parse(n);
          return "E" === r.code && "客服" === r.name;
        }
        return !1;
      }
      return !1;
    } catch (e) {
      return !1;
    }
  }),
  (exports.isSubAagentMessage = function (e) {
    try {
      var t = M(e);
      if (void 0 === t) return !1;
      if ("scene_intent" === t) {
        var n = q(e);
        if (n) {
          var r = JSON.parse(n);
          return r.code && "A" === r.code;
        }
        return !1;
      }
      return !1;
    } catch (e) {
      return !1;
    }
  }),
  (exports.isSubAagentReply = function (e) {
    try {
      var t = M(e);
      return (
        void 0 !== t &&
        ("sub_agent_stock_query" === t || "sub_agent_aics_query" === t)
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isXuanGuFunctionPluginReply = function (e) {
    try {
      var t = JSON.parse(e);
      return !(
        !Object.prototype.hasOwnProperty.call(t, "event") ||
        !Object.prototype.hasOwnProperty.call(t.event, "type") ||
        "Plugin" !== t.event.type ||
        1 !== t.event.state ||
        ("stockList" !== t.event.name && "stocklist-mbti" !== t.event.name)
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.isXuanGuPluginMessage = function (e) {
    try {
      var t = JSON.parse(e);
      return !(
        !Object.prototype.hasOwnProperty.call(t, "code") ||
        !Object.prototype.hasOwnProperty.call(t, "msg") ||
        1620053014 !== t.code
      );
    } catch (e) {
      return !1;
    }
  }),
  (exports.parseBusinessPluginMessage = function (e) {
    var t = JSON.parse(e);
    return Object.prototype.hasOwnProperty.call(t, "event") &&
      Object.prototype.hasOwnProperty.call(t.event, "content") &&
      Object.prototype.hasOwnProperty.call(t.event.content, "message")
      ? t.event.content.message
      : "";
  }),
  (exports.parseCommonAgentComponentName = function (e) {
    var t;
    try {
      var n = JSON.parse(e);
      return (
        (null == n ? void 0 : n.component_id) ||
        (null == (t = null == n ? void 0 : n.event) ? void 0 : t.name) ||
        ""
      );
    } catch (e) {
      return "";
    }
  }),
  (exports.parseDocReply = function (e) {
    var t = JSON.parse(e);
    return Object.prototype.hasOwnProperty.call(
      t.choices[0].delta.output_sources,
      "ref_docs"
    ) && Array.isArray(t.choices[0].delta.output_sources.ref_docs)
      ? t.choices[0].delta.output_sources.ref_docs
      : [];
  }),
  (exports.parseFunctionPluginComponentType = function (e) {
    var t, n, r, o, a;
    try {
      return null !=
        (a =
          null ==
          (o =
            null ==
            (r =
              null == (n = null == (t = JSON.parse(e).choices) ? void 0 : t[0])
                ? void 0
                : n.delta)
              ? void 0
              : r.output_deepmode)
            ? void 0
            : o.component_type)
        ? a
        : "";
    } catch (e) {
      return "";
    }
  }),
  (exports.parseFunctionPluginMessage = function (e) {
    try {
      var t = JSON.parse(e);
      return Object.prototype.hasOwnProperty.call(t, "msg") ? t.msg : "";
    } catch (e) {
      return "";
    }
  }),
  (exports.parseFunctionPluginReply = function (e) {
    try {
      var t = JSON.parse(e);
      return Object.prototype.hasOwnProperty.call(t, "choices") &&
        Array.isArray(t.choices) &&
        t.choices.length > 0 &&
        Object.prototype.hasOwnProperty.call(t.choices[0], "delta") &&
        Object.prototype.hasOwnProperty.call(
          t.choices[0].delta,
          "output_deepmode"
        )
        ? t.choices[0].delta.output_deepmode
        : null;
    } catch (e) {
      return null;
    }
  }),
  (exports.parseServerBusyMessage = function (e) {
    try {
      var t = JSON.parse(e);
      return t && t.msg ? t.msg : "";
    } catch (e) {
      return "";
    }
  }),
  (exports.parseServerCodeMessage = function (e) {
    try {
      var t = JSON.parse(e);
      return Object.prototype.hasOwnProperty.call(t, "code") ? t.code : 0;
    } catch (e) {
      return 0;
    }
  }),
  (exports.parseToolResponse = R),
  (exports.parseXuanGuFunctionPluginReply = function (e) {
    try {
      var t = JSON.parse(e);
      return Object.prototype.hasOwnProperty.call(t, "event") &&
        Object.prototype.hasOwnProperty.call(t.event, "type")
        ? t.event
        : null;
    } catch (e) {
      return null;
    }
  }),
  (exports.parserContent = S),
  (exports.parserMessage = q),
  (exports.parserReasoningContent = P),
  (exports.shouldApplyReplyErrFallback = function (e) {
    var t;
    return !(
      e &&
      (e.reply ||
        e.functionTips ||
        e.functionXuanGuTips ||
        (J(e) && (null == (t = e.processSteps) ? void 0 : t.length) > 0))
    );
  }),
  (exports.tryToParseTraceId = function (e) {
    try {
      var t = JSON.parse(e);
      return Object.prototype.hasOwnProperty.call(t, "id") ? t.id : "";
    } catch (e) {
      return "";
    }
  }),
  (exports.useComponentConfigHooks = function () {
    var t = this,
      n = y.ref([]),
      r = function (e) {
        var t = [];
        return e && e.length
          ? (e.forEach(function (e) {
              "c-ai-subscribe-report" === e.component_type ||
                t.push(e.component_type);
            }),
            t)
          : t;
      },
      o = "search-ai-components-config";
    return {
      componentPluginArray: n,
      fetchComponentConfig: function () {
        return v(
          t,
          null,
          e().mark(function t() {
            var a, s, c, i, u, p, l;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (a = r(F)).length && (n.value = a),
                        (e.next = 5),
                        y.StockBridge.getStorage(o)
                      );
                    case 5:
                      if (
                        ((s = e.sent) && (c = r(s)).length && (n.value = c),
                        (i =
                          "https://wzqcf.gtimg.com/wuji/object?appid=hq&schemaid=AiMarkdownComponentConfig&schemakey=c5cb02652b6a4ad0b1bce02e5b744cb5"),
                        (u = {}),
                        y.StockBridge.ENV !== y.EnvTypeEnum.MP &&
                          "mpweapp" !== y.ShellTypeEnum.SHY)
                      ) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (e.next = 12),
                        y.StockBridge.request(
                          i,
                          "GET",
                          {},
                          { withoutCommonParams: !0 }
                        )
                      );
                    case 12:
                      (e.t0 = e.sent), (e.next = 18);
                      break;
                    case 15:
                      return (e.next = 17), ln(i, {}, { method: "GET" });
                    case 17:
                      e.t0 = e.sent;
                    case 18:
                      if (!(u = e.t0) || !u.data) {
                        e.next = 22;
                        break;
                      }
                      (p = u.data),
                        (l = r(p)).length && (n.value = l),
                        y.StockBridge.setStorage(o, p);
                    case 22:
                      e.next = 26;
                      break;
                    case 24:
                      (e.prev = 24), (e.t1 = e.catch(0));
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, 24]]
            );
          })
        );
      },
    };
  }),
  (exports.useLongPressHooks = function (t, n, r) {
    var o = this;
    A || (A = y.ref(!1));
    var a = y.ref({}),
      s = y.ref(""),
      c = y.ref(-1),
      i = "halfscreen" === r,
      u = y.ref(i ? -1 : 0),
      p = function () {
        (A.value = !1), (a.value = {}), (c.value = -1);
      },
      l = function (e, t) {
        y.wx$1.setClipboardData({
          data: e,
          success: function () {
            t && g.StockBridge.toast(t);
          },
        });
      };
    return {
      parseMarkdownToText: function (e) {
        try {
          return e
            .replace(/^#{1,6}\s+/gm, "")
            .replace(/!\[[^\]]*\]\([^\)]*\)/g, "")
            .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
            .replace(/(\*\*|\*|__|_|~~)/g, "")
            .replace(/```[\s\S]*?```/g, "")
            .replace(/`{1,2}[^`](.*?)`{1,2}/g, "$1")
            .replace(/^\s{0,3}>\s?/gm, "")
            .replace(/^\s*([-*+]|\d+\.)\s+/gm, "")
            .replace(/\|/g, "")
            .replace(/---+/g, "")
            .replace(/<[^>]+>/g, "")
            .replace(/\n{2,}/g, "\n")
            .replace(/:::card[\s\S]*?:::/g, "");
        } catch (e) {}
        return e;
      },
      copyToPasteboard: l,
      questionLongPress: A,
      longPressPostion: c,
      targetRect: a,
      targetQuestion: s,
      handleQuestionLongPress: function (n, r, i) {
        try {
          (c.value = n),
            y.wx$1
              .createSelectorQuery()
              .in(t)
              .select(
                "#questionItem_".concat(
                  (null == i ? void 0 : i.requestId) || ""
                )
              )
              .boundingClientRect(function (n) {
                return v(
                  o,
                  null,
                  e().mark(function o() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.t0 = n), !e.t0)) {
                              e.next = 9;
                              break;
                            }
                            if (((e.t1 = -1 === u.value), !e.t1)) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 6),
                              new Promise(function (e) {
                                y.wx$1
                                  .createSelectorQuery()
                                  .in(t)
                                  .select(".search-ai-container")
                                  .boundingClientRect(function (t) {
                                    (u.value = t.top), e();
                                  })
                                  .exec();
                              })
                            );
                          case 6:
                            (a.value = {
                              x: n.left,
                              y: n.top - u.value,
                              width: n.width || n.right - n.left,
                              height: n.height || n.bottom - n.top,
                            }),
                              (A.value = !0),
                              (s.value = r);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, o);
                  })
                );
              })
              .exec();
        } catch (e) {}
      },
      hideQuestionLongPressMenu: p,
      handleLongPressMenuTap: function (e, t) {
        var r, o;
        "copy" === e
          ? l(t, "已全部复制")
          : "edit" === e &&
            n &&
            n.value &&
            (null == (o = (r = n.value).inputQuestion) || o.call(r, t)),
          p();
      },
    };
  });
