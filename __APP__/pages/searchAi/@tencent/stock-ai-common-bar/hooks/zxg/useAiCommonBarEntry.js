var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  l = function (e, n, t) {
    return n in e
      ? r(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  s = function (e, n) {
    for (var r in n || (n = {})) c.call(n, r) && l(e, r, n[r]);
    if (u) {
      var o,
        a = t(u(n));
      try {
        for (a.s(); !(o = a.n()).done; ) {
          r = o.value;
          i.call(n, r) && l(e, r, n[r]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  v = function (e, n) {
    return o(e, a(n));
  },
  f = function (e, n, t) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            c(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            c(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, u);
        };
      c((t = t.apply(e, n)).next());
    });
  },
  p = require("../../../../../../common/vendor.js"),
  d = require("../../../stock-base/visibilityObserver/index.js"),
  g = require("../../../stock-base/service/common/sign.js"),
  h = (require("../../../../js-cookie/src/js.cookie.js"), 0),
  _ = {
    ENV: "zxg",
    SHELL: "zxg",
    store: {
      get: function () {
        return {};
      },
    },
    report: function (e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      shy.reportAnalytics({ eventName: e, dataObject: n });
    },
    request: function (e) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "GET",
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return (
        "GET" === n &&
          (e = "".concat(e, "?").concat(
            Object.keys(t)
              .map(function (e) {
                return "".concat(e, "=").concat(t[e]);
              })
              .join("&")
          )),
        new Promise(function (n, t) {
          fetch(e)
            .then(function (e) {
              if (!e.ok) throw new Error("网络响应不正常");
              return e.json();
            })
            .then(function (e) {
              n(e);
            })
            .catch(function (e) {
              t(e);
            });
        })
      );
    },
    setStorage: function (e, n, t) {
      shy.invoke("setGlobalStorageAsync", { key: e, data: n }, t);
    },
    getStorage: function (e, n) {
      shy.invoke("getGlobalStorageAsync", { key: e }, n);
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
      throw new Error("getCookie is not supported in ZXG");
    },
    busOn: function (e, n) {
      shyBUS.$on(e, n);
    },
    busOff: function (e, n) {
      shyBUS.$off(e, n);
    },
    busEmit: function (e) {
      for (
        var n, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        r[o - 1] = arguments[o];
      (n = shyBUS).$emit.apply(n, [e].concat(r));
    },
    toast: function (e, n) {
      shy.showToast("top", e);
    },
    routeTo: function (e) {
      shy.navigateTo(e);
    },
    exitPage: function () {
      shy.exit(!0);
    },
    setBounces: function (e) {
      shy.setBounces(e);
    },
    getUserInfo: function (e) {
      return new Promise(function (e) {
        shy.getUserInfo(function (n) {
          e(n || {});
        });
      });
    },
    openExtraWebview: function (e) {
      var n = "qqstock://WebBrowser?info=".concat(
        encodeURIComponent(JSON.stringify({ p_url: "".concat(e) }))
      );
      shy.navigateTo({ url: n });
    },
    getAppValue: function () {
      return /\bAndroid([^;]+)/.test(
        null == navigator ? void 0 : navigator.userAgent
      )
        ? "Android"
        : /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(
            null == navigator ? void 0 : navigator.userAgent
          )
        ? "iOS"
        : "Harmony";
    },
    aegisReportEvent: function (e, n) {
      var t, r, o;
      null ==
        (o =
          null ==
          (r =
            null == (t = null == window ? void 0 : window.__UNION_BRIDGE__)
              ? void 0
              : t.UNION_AEGIS)
            ? void 0
            : r.reportEvent) || o.call(r, e, n);
    },
    recordLog: function (e, n) {
      "string" == typeof n
        ? shy.invoke("recordLog", { eventName: e, param: n })
        : shy.invoke("recordLog", s({ eventName: e }, n));
    },
    setTitle: function (e) {
      shy.setTitle(e);
    },
  },
  y = d.VisibilityStateH5;
(exports.useSearchBar = function (t, r, o) {
  var a = r.emit,
    u = p.ref(0),
    c = p.ref(null),
    i = p.ref(null),
    l = p.inject("questionsInterceptor", null),
    d = function (e, n) {
      var r, o, a, u;
      if ("string" == typeof t.reportPrefix) {
        var l = t.reportPrefix.trim();
        if (0 === l.length) return;
        if (!e || "string" != typeof e) return;
        var f = "".concat(l, ".").concat(e);
        try {
          var p =
            null != (o = null != n ? n : c.value)
              ? o
              : null == (r = i.value)
              ? void 0
              : r[0];
          if (!p) return;
          var d = null != (a = null == p ? void 0 : p.scene) ? a : "",
            g = (null == p ? void 0 : p.uuid) || (null == p ? void 0 : p.title),
            h = null != (u = null == p ? void 0 : p.sub_scene) ? u : "";
          _.report(
            f,
            v(s({}, t.reportInfo || {}), {
              searchfrom: null != d ? d : "",
              contentId: null != g ? g : "",
              subScene: null != h ? h : "",
            })
          );
        } catch (e) {}
      }
    },
    h = null,
    b = !1,
    k = function () {
      var e, n;
      null ==
        (n =
          null == (e = null == h ? void 0 : h.observer)
            ? void 0
            : e.disconnect) || n.call(e),
        (h = null);
    },
    A = function () {
      return f(
        exports,
        null,
        n().mark(function e() {
          return n().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((k(), !o)) {
                      e.next = 10;
                      break;
                    }
                    return (e.prev = 1), (e.next = 4), p.nextTick$1();
                  case 4:
                    e.next = 9;
                    break;
                  case 6:
                    return (
                      (e.prev = 6),
                      (e.t0 = e.catch(1)),
                      e.abrupt(
                        "return",
                        void _.aegisReportEvent("AI_COMMON_BAR_RENDER_FAIL")
                      )
                    );
                  case 9:
                    try {
                      h = new y(
                        "#aiSearchBar",
                        {
                          once: !0,
                          callback: function (e, n) {
                            b ||
                              (e &&
                                ((b = !0),
                                d("ai_search_entry_brow"),
                                I(),
                                a("onSearchAiBarBrow")));
                          },
                          intersection: { threshold: 0 },
                        },
                        { context: o }
                      );
                    } catch (e) {
                      _.aegisReportEvent("AI_COMMON_BAR_ADD_OBSERVER_FAIL");
                    }
                  case 10:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[1, 6]]
          );
        })
      );
    },
    E = p.computed(function () {
      return "zxg";
    });
  p.computed(function () {
    return f(
      exports,
      null,
      n().mark(function e() {
        return n().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt("return", "");
              case 1:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  });
  var m = function () {
      (c.value = null), (i.value = null);
    },
    x = function (e) {
      return (null == e ? void 0 : e.constructor) === Object;
    },
    S = p.ref(0),
    O = p.computed(function () {
      return "ai_common_bar_entry_".concat(t.contentId, "_").concat(t.scene);
    }),
    R = p.computed(function () {
      var e, n;
      return null ==
        (n =
          null == (e = i.value)
            ? void 0
            : e.map(function (e) {
                return e.id;
              }))
        ? void 0
        : n.join(",");
    }),
    w = function () {
      return f(
        exports,
        null,
        n().mark(function e() {
          var t, r, o, a, c, l;
          return n().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (3 === u.value && i.value) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  return (t = 0), (e.next = 5), _.getStorageSync(O.value);
                case 5:
                  return (
                    (r = e.sent),
                    (a = (o = r || {}).sortKey),
                    (c = o.index),
                    (l = void 0 === c ? -1 : c),
                    e.abrupt(
                      "return",
                      ((t =
                        a === R.value && i.value.length
                          ? (l + 1) % i.value.length
                          : 0),
                      (S.value = t),
                      t < i.value.length ? i.value[t] : null)
                    )
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    },
    I = function () {
      3 === u.value &&
        _.setStorage(
          O.value,
          { sortKey: R.value, index: S.value },
          function () {}
        );
    },
    B = [],
    C = p.computed(function () {
      return "".concat(t.contentId, "_").concat(t.scene);
    }),
    M = function (t) {
      return f(
        exports,
        null,
        n().mark(function r() {
          var o, s, v, f, p, d, g, h, y;
          return n().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  if (t) {
                    n.next = 2;
                    break;
                  }
                  return n.abrupt("return");
                case 2:
                  if (
                    ((s = t.questions),
                    (v = t.display),
                    (u.value = v),
                    (f = "function" == typeof l ? l(s) : s),
                    m(),
                    !(f && Array.isArray(f) && f.length > 0))
                  ) {
                    n.next = 22;
                    break;
                  }
                  (n.t0 = ((i.value = f), v)),
                    (n.next =
                      0 === n.t0
                        ? 9
                        : 1 === n.t0
                        ? 12
                        : 2 === n.t0
                        ? 15
                        : 3 === n.t0
                        ? 16
                        : 21);
                  break;
                case 9:
                  return (
                    (p = e(f, 1)),
                    (d = p[0]),
                    x(d) && (c.value = d),
                    n.abrupt("break", 22)
                  );
                case 12:
                  return (
                    (g = f.length),
                    (h = f[Math.floor(Math.random() * g)]),
                    x(h) && (c.value = h),
                    n.abrupt("break", 22)
                  );
                case 15:
                  return n.abrupt("break", 22);
                case 16:
                  return (n.next = 18), w();
                case 18:
                  return (
                    (y = n.sent), x(y) && (c.value = y), n.abrupt("break", 22)
                  );
                case 21:
                  return n.abrupt(
                    "return",
                    void _.aegisReportEvent(
                      "AI_COMMON_BAR_REQUEST_DISPLAY_TYPE_ERROR"
                    )
                  );
                case 22:
                  c.value || (null == (o = i.value) ? void 0 : o.length) > 0
                    ? (A(), a("onShowAiEntry", c.value))
                    : (m(), a("onHideAiEntry"));
                case 23:
                case "end":
                  return n.stop();
              }
          }, r);
        })
      );
    },
    T = function () {
      return f(
        exports,
        null,
        n().mark(function e() {
          var r, o, u, c, i, l;
          return n().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t.scene) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (
                      (r = ""), (e.prev = 3), (e.next = 6), _.getUserInfo()
                    );
                  case 6:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 9;
                      break;
                    }
                    e.t0 = {};
                  case 9:
                    (o = e.t0), (u = o.openid), (r = u), (e.next = 17);
                    break;
                  case 14:
                    (e.prev = 14),
                      (e.t1 = e.catch(3)),
                      _.aegisReportEvent("AI_COMMON_BAR_GET_OPENID_FAIL");
                  case 17:
                    return (
                      (e.prev = 17),
                      (c = C.value),
                      (i = new Date().getTime()),
                      (e.next = 22),
                      _.request(
                        "https://snp.tenpay.com/cgi-bin/openai/aiask/query",
                        "GET",
                        g.getSignV3({
                          data: {
                            app: E.value,
                            channel: t.scene,
                            openid: r,
                            content_id: t.contentId || "",
                            t: i,
                          },
                          method: "get",
                          origin: E.value,
                        }),
                        { forceCallback: !0 }
                      )
                    );
                  case 22:
                    (l = e.sent) && 0 === l.code
                      ? ((B[c] = l), M(l))
                      : (m(),
                        _.aegisReportEvent("AI_COMMON_BAR_REQUEST_CODE_ERROR"),
                        a("onHideAiEntry")),
                      (e.next = 29);
                    break;
                  case 26:
                    (e.prev = 26),
                      (e.t2 = e.catch(17)),
                      a("onHideAiEntry"),
                      m(),
                      _.aegisReportEvent("AI_COMMON_BAR_REQUEST_FAIL");
                  case 29:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [3, 14],
              [17, 26],
            ]
          );
        })
      );
    };
  p.watch(
    function () {
      return t.contentId;
    },
    function (e, n) {
      e &&
        (m(),
        p.nextTick$1(function () {
          b = !1;
        })),
        e && e !== n && T();
    }
  ),
    p.watch(
      function () {
        return t.scene;
      },
      function (e, n) {
        if (e && e !== n) {
          var t = B[C.value];
          t ? M(t) : ((b = !1), T());
        }
      }
    ),
    p.onMounted(function () {
      t.preData ? M(t.preData) : t.scene && T();
    }),
    p.onUnmounted(function () {
      k();
    });
  var j = function (e) {
      var n = null != e ? e : c.value;
      d("ai_search_entry_click", n), a("onClickAiDialog", n);
    },
    D = p.computed(function () {
      var e;
      return 2 !== u.value && (null == (e = c.value) ? void 0 : e.title);
    });
  return {
    displayType: u,
    onClickAiDialog: j,
    onScrollShowAiDialog: function (e) {
      d("ai_search_entry_click");
      try {
        if (i.value && i.value.length > 0) {
          var n = i.value[e];
          a("onClickAiDialog", n);
        }
      } catch (e) {}
    },
    showSearchBarObj: c,
    showSearchBarList: i,
    fetchAIConfigStatus: T,
    isSingleEntry: D,
    onClickEntireEntry: function () {
      D.value && j();
    },
    rotateAiQuestion: function () {
      return f(
        exports,
        null,
        n().mark(function e() {
          var t;
          return n().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (3 !== u.value || !i.value || !i.value.length) {
                    e.next = 5;
                    break;
                  }
                  return (e.next = 3), w();
                case 3:
                  (t = e.sent), x(t) && ((c.value = t), (b = !1), A());
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    },
  };
}),
  (exports.useSearchBar$1 = function (t, r, o) {
    var a = r.emit,
      u = p.ref(0),
      c = p.ref(null),
      i = p.ref(null),
      l = p.ref(!1),
      _ = p.ref(!1),
      y = p.inject("questionsInterceptor", null),
      b = function (e, n) {
        var r, o, a, u;
        if ("string" == typeof t.reportPrefix) {
          var l = t.reportPrefix.trim();
          if (0 === l.length) return;
          if (!e || "string" != typeof e) return;
          var f = "".concat(l, ".").concat(e);
          try {
            var d =
              null != (o = null != n ? n : c.value)
                ? o
                : null == (r = i.value)
                ? void 0
                : r[0];
            if (!d) return;
            var g = null != (a = null == d ? void 0 : d.scene) ? a : "",
              h =
                (null == d ? void 0 : d.uuid) || (null == d ? void 0 : d.title),
              _ = null != (u = null == d ? void 0 : d.sub_scene) ? u : "";
            p.StockBridge.report(
              f,
              v(s({}, t.reportInfo || {}), {
                searchfrom: null != g ? g : "",
                contentId: null != h ? h : "",
                subScene: null != _ ? _ : "",
              })
            );
          } catch (e) {}
        }
      },
      k = null,
      A = !1,
      E = function () {
        var e, n;
        null ==
          (n =
            null == (e = null == k ? void 0 : k.observer)
              ? void 0
              : e.disconnect) || n.call(e),
          (k = null);
      },
      m = function () {
        return f(
          exports,
          null,
          n().mark(function e() {
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((E(), !o)) {
                        e.next = 10;
                        break;
                      }
                      return (e.prev = 1), (e.next = 4), p.nextTick$1();
                    case 4:
                      e.next = 9;
                      break;
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e.catch(1)),
                        e.abrupt(
                          "return",
                          void p.StockBridge.aegisReportEvent(
                            "AI_COMMON_BAR_RENDER_FAIL"
                          )
                        )
                      );
                    case 9:
                      try {
                        k = new d.VisibilityObserver(
                          "#aiSearchBar",
                          {
                            once: !0,
                            callback: function (e, n) {
                              A ||
                                (e &&
                                  ((A = !0),
                                  b("ai_search_entry_brow"),
                                  M(),
                                  a("onSearchAiBarBrow")));
                            },
                            intersection: { threshold: 0 },
                          },
                          { context: o }
                        );
                      } catch (e) {
                        p.StockBridge.aegisReportEvent(
                          "AI_COMMON_BAR_ADD_OBSERVER_FAIL"
                        );
                      }
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 6]]
            );
          })
        );
      },
      x = p.computed(function () {
        return "zxg_xcx";
      }),
      S = p.computed(function () {
        var e,
          n,
          t = "";
        try {
          t =
            null !=
            (n = null == (e = p.wx$1) ? void 0 : e.getStorageSync("_qluin"))
              ? n
              : "";
        } catch (e) {
          p.StockBridge.aegisReportEvent("AI_COMMON_BAR_GET_OPENID_FAIL");
        }
        return t;
      }),
      O = function () {
        (c.value = null), (i.value = null);
      },
      R = function (e) {
        return (null == e ? void 0 : e.constructor) === Object;
      },
      w = p.ref(0),
      I = p.computed(function () {
        return "ai_common_bar_entry_".concat(t.contentId, "_").concat(t.scene);
      }),
      B = p.computed(function () {
        var e, n;
        return null ==
          (n =
            null == (e = i.value)
              ? void 0
              : e.map(function (e) {
                  return e.id;
                }))
          ? void 0
          : n.join(",");
      }),
      C = function () {
        if (3 === u.value && i.value) {
          var e,
            n = p.StockBridge.getStorage(I.value) || {},
            t = n.sortKey,
            r = n.index,
            o = void 0 === r ? -1 : r;
          return (
            (e =
              t === B.value && i.value.length ? (o + 1) % i.value.length : 0),
            (w.value = e),
            e < i.value.length ? i.value[e] : null
          );
        }
      },
      M = function () {
        3 === u.value &&
          p.StockBridge.setStorage(I.value, {
            sortKey: B.value,
            index: w.value,
          });
      },
      T = [],
      j = p.computed(function () {
        return "".concat(t.contentId, "_").concat(t.scene);
      }),
      D = function (n) {
        var t;
        if (n) {
          var r = n.questions,
            o = n.display;
          u.value = o;
          var l = "function" == typeof y ? y(r) : r;
          if ((O(), l && Array.isArray(l) && l.length > 0))
            switch (((i.value = l), o)) {
              case h:
                var s = e(l, 1)[0];
                R(s) && (c.value = s);
                break;
              case 1:
                var v = l.length,
                  f = l[Math.floor(Math.random() * v)];
                R(f) && (c.value = f);
                break;
              case 2:
                break;
              case 3:
                var d = C();
                R(d) && (c.value = d);
                break;
              default:
                return void p.StockBridge.aegisReportEvent(
                  "AI_COMMON_BAR_REQUEST_DISPLAY_TYPE_ERROR"
                );
            }
          c.value || (null == (t = i.value) ? void 0 : t.length) > 0
            ? (m(), a("onShowAiEntry", c.value))
            : (O(), a("onHideAiEntry"));
        }
      },
      N = function () {
        return f(
          exports,
          null,
          n().mark(function e() {
            var r, o, u, c, i, l;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t.scene) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        ((r = t.material),
                        (o = ""),
                        r &&
                          "[object Object]" ===
                            Object.prototype.toString.call(r))
                      )
                        try {
                          (u = Object.keys(r)
                            .map(function (e) {
                              return ""
                                .concat(e, "=")
                                .concat(encodeURIComponent(r[e] || ""));
                            })
                            .join("&")),
                            (o = encodeURIComponent(u));
                        } catch (e) {
                          p.StockBridge.aegisReportEvent(
                            "AI_COMMON_BAR_MATERIAL_FORMAT_ERROR"
                          );
                        }
                      return (
                        (e.prev = 5),
                        (c = j.value),
                        (i = new Date().getTime()),
                        (e.next = 10),
                        p.StockBridge.request(
                          "https://snp.tenpay.com/cgi-bin/openai/aiask/query",
                          "GET",
                          g.getSignV3({
                            data: {
                              app: x.value,
                              channel: t.scene,
                              openid: S.value || "",
                              content_id: t.contentId || "",
                              material: o || "",
                              t: i,
                            },
                            method: "get",
                            origin: x.value,
                          }),
                          { forceCallback: !0 }
                        )
                      );
                    case 10:
                      (l = e.sent) && 0 === l.code
                        ? ((T[c] = l), D(l))
                        : (O(),
                          p.StockBridge.aegisReportEvent(
                            "AI_COMMON_BAR_REQUEST_CODE_ERROR"
                          ),
                          a("onHideAiEntry")),
                        (e.next = 17);
                      break;
                    case 14:
                      (e.prev = 14),
                        (e.t0 = e.catch(5)),
                        a("onHideAiEntry"),
                        O(),
                        p.StockBridge.aegisReportEvent(
                          "AI_COMMON_BAR_REQUEST_FAIL",
                          { ext4: JSON.stringify(e.t0 || {}) }
                        );
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[5, 14]]
            );
          })
        );
      };
    p.watch(
      function () {
        return t.contentId;
      },
      function (e, n) {
        e &&
          (O(),
          p.nextTick$1(function () {
            A = !1;
          })),
          e && e !== n && N();
      }
    ),
      p.watch(
        function () {
          return t.scene;
        },
        function (e, n) {
          if (e && e !== n) {
            var t = T[j.value];
            t ? D(t) : ((A = !1), N());
          }
        }
      ),
      p.onMounted(function () {
        t.preData ? D(t.preData) : t.scene && N();
      }),
      p.onUnmounted(function () {
        E();
      });
    var P = function (e) {
        var n =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          t = null != e ? e : c.value;
        b("ai_search_entry_click", t), a("onClickAiDialog", t, n);
      },
      q = p.computed(function () {
        var e;
        return 2 !== u.value && (null == (e = c.value) ? void 0 : e.title);
      });
    return {
      displayType: u,
      isWzq: l,
      isWzqLight: _,
      onClickAiIcon: function () {
        var e;
        (l.value || _.value) && (null == (e = o.$refs.fakeInput) || e.focus());
        var n = c.value;
        b("ai_search_wenyuanbo_click", n), a("onClickAiDialog", n, !1);
      },
      onClickAiDialog: P,
      onScrollShowAiDialog: function (e) {
        b("ai_search_entry_click");
        try {
          if (i.value && i.value.length > 0) {
            var n = i.value[e];
            a("onClickAiDialog", n);
          }
        } catch (e) {}
      },
      showSearchBarObj: c,
      showSearchBarList: i,
      fetchAIConfigStatus: N,
      isSingleEntry: q,
      onClickEntireEntry: function () {
        q.value && P();
      },
      rotateAiQuestion: function () {
        return f(
          exports,
          null,
          n().mark(function e() {
            var t;
            return n().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (3 !== u.value || !i.value || !i.value.length) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 3), C();
                  case 3:
                    (t = e.sent), R(t) && ((c.value = t), (A = !1), m());
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      },
    };
  });
