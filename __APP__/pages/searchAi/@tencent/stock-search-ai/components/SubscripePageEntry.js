require("../../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, t, n) {
    return new Promise(function (r, i) {
      var a = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, s);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  r = require("../../../../../common/vendor.js"),
  i = require("../../stock-base/service/common/sign.js"),
  a = function () {
    return "mpweapp" === r.ShellTypeEnum.SHY
      ? /\bAndroid([^;]+)/.test(
          null == navigator ? void 0 : navigator.userAgent
        )
        ? "Android"
        : /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(
            null == navigator ? void 0 : navigator.userAgent
          )
        ? "iOS"
        : "Harmony"
      : "zxg_xcx";
  };
function s() {
  return n(this, arguments, function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return t().mark(function n() {
      var s, u, c, o, l, p, f, d;
      return t().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (s = e.offset),
                  (u = void 0 === s ? 0 : s),
                  (c = e.limit),
                  (o = void 0 === c ? 20 : c),
                  (t.prev = 1),
                  (t.next = 4),
                  new Promise(function (e) {
                    if ("mpweapp" === r.ShellTypeEnum.SHY)
                      shy.getUserInfo(function (t) {
                        e(t);
                      });
                    else {
                      var t = {};
                      (t.openid = r.wx$1.getStorageSync("_qluin")),
                        (t.fskey = r.wx$1.getStorageSync("_qlskey")),
                        (t.check = 10),
                        e(t);
                    }
                  })
                );
              case 4:
                return (
                  (l = t.sent),
                  "wx9cf8c670ebd68ce4",
                  (p = "mpweapp" === r.ShellTypeEnum.SHY ? "zxg" : a()),
                  (f = new Date().getTime()),
                  (t.next = 10),
                  (function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "GET",
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {},
                      i =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : {};
                    if (r.StockBridge.ENV === r.EnvTypeEnum.SHY_NATIVE) {
                      var a = e;
                      return (
                        "GET" === t &&
                          (a = "".concat(a, "?").concat(
                            Object.keys(n)
                              .map(function (e) {
                                return "".concat(e, "=").concat(n[e]);
                              })
                              .join("&")
                          )),
                        new Promise(function (e, t) {
                          fetch(a)
                            .then(function (e) {
                              if (!e.ok) throw new Error("网络响应不正常");
                              return e.json();
                            })
                            .then(function (t) {
                              e(t);
                            })
                            .catch(function (e) {
                              t(e);
                            });
                        })
                      );
                    }
                    return r.StockBridge.request(e, t, n, i);
                  })(
                    "https://proxy.finance.qq.com/cgi/cgi-bin/openai/article/list",
                    "GET",
                    i.getSignV3({
                      data: {
                        app: p || "wzqxcx",
                        appid: "wx9cf8c670ebd68ce4",
                        openid: l.openid || "",
                        fskey: l.fskey || "",
                        check: l.check || 10,
                        offset: u,
                        limit: o,
                        t: f,
                      },
                      method: "get",
                      origin: a(),
                    }),
                    { forceCallback: !0 }
                  )
                );
              case 10:
                return (
                  (d = t.sent),
                  t.abrupt(
                    "return",
                    d && 0 === d.code
                      ? {
                          success: !0,
                          data: d.data || {
                            list: [],
                            hasMore: !1,
                            isGenerating: !1,
                          },
                        }
                      : { success: !1, message: d.msg || "获取文章列表失败" }
                  )
                );
              case 14:
                return (
                  (t.prev = 14),
                  (t.t0 = t.catch(1)),
                  t.abrupt("return", {
                    success: !1,
                    message: "网络异常，请稍后重试",
                  })
                );
              case 17:
              case "end":
                return t.stop();
            }
        },
        n,
        null,
        [[1, 14]]
      );
    })();
  });
}
var u = { headers: { "Content-Type": "application/json" }, forceCallback: !0 },
  c = function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      a = {
        source: "zxgxcx",
        business: e,
        subscribeDetails: t,
        allow_silent_subscribe: n,
        auto_subscribe: i,
      };
    return r.StockBridge.request(
      "https://wzq.tenpay.com/svr/user/user_service/user_open_subscribe",
      r.RequestTypeEnum.POST,
      a,
      u
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  },
  o = null,
  l = null,
  p = function () {
    if (o) return Promise.resolve(o);
    if (l) return l;
    if ((3, !r.Wuji)) throw new Error("Wuji is not loaded");
    return (l = r.Wuji.get({
      appid: "act",
      schemaid: "wx_subscribe_tmpl_id",
      rowid: 3,
    })
      .then(function (e) {
        return (o = e.data), (l = null), o;
      })
      .catch(function (e) {
        throw ((l = null), e);
      }));
  };
!(function e() {
  var r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
  return n(
    exports,
    null,
    t().mark(function n() {
      return t().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (o) {
                  t.next = 9;
                  break;
                }
                return (t.prev = 1), (t.next = 4), p();
              case 4:
                t.next = 9;
                break;
              case 6:
                (t.prev = 6),
                  (t.t0 = t.catch(1)),
                  r &&
                    setTimeout(function () {
                      return e(!1);
                    }, 1500);
              case 9:
              case "end":
                return t.stop();
            }
        },
        n,
        null,
        [[1, 6]]
      );
    })
  );
})();
var f = (function (e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = null,
      i = null,
      a = null,
      s = 0,
      u = n || {},
      c = u.leading,
      o = void 0 === c || c,
      l = u.trailing,
      p = void 0 === l || l,
      f = function (t) {
        if (((s = t), "function" != typeof e))
          throw new Error("func必须为函数");
        e.apply(a, i), (i = null), (a = null);
      },
      d = function () {
        for (
          var e = Date.now(), n = arguments.length, u = new Array(n), c = 0;
          c < n;
          c++
        )
          u[c] = arguments[c];
        if (((i = u), (a = this), 0 === s && o)) f(e);
        else {
          r && (clearTimeout(r), (r = null));
          var l,
            d = ((l = e), Math.max(t - (l - s), 0));
          d > 0 &&
            p &&
            (r = setTimeout(function () {
              f(Date.now());
            }, d)),
            d <= 0 && f(e);
        }
      };
    return (
      (d.cancel = function () {
        r && (clearTimeout(r), (r = null)), (s = 0), (i = null), (a = null);
      }),
      d
    );
  })(function (i) {
    return n(
      exports,
      null,
      t().mark(function a() {
        var s, u, o, l, f, d, h, m, g, v, w, b, x, S, _, k, y, T, E;
        return t().wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.next = 2), p();
                case 2:
                  return (
                    (s = a.sent),
                    (u = s.limit),
                    (o = s.expire),
                    (l = s.template_ids),
                    (f = o ? 60 * o * 1e3 + Date.now() : null),
                    (a.next = 9),
                    "wx_subscribe_limit_info",
                    n(
                      exports,
                      null,
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (e) {
                                    return n(
                                      exports,
                                      null,
                                      t().mark(function n() {
                                        var i, a, s, u;
                                        return t().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.next = 2),
                                                  r.wx$1.getStorageSync(
                                                    "wx_subscribe_limit_info"
                                                  )
                                                );
                                              case 2:
                                                return (
                                                  (i = t.sent),
                                                  (a = i.data),
                                                  (s = i.expire),
                                                  (u = Date.now()),
                                                  t.abrupt(
                                                    "return",
                                                    e(s && u > s ? null : a)
                                                  )
                                                );
                                              case 7:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, n);
                                      })
                                    );
                                  })
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )
                  );
                case 9:
                  return (
                    (d = a.sent),
                    (h = l
                      .filter(function (e) {
                        if (i) return e.business === i;
                        if (
                          ![
                            "price_remind",
                            "calendar_event",
                            "gudan_notice",
                          ].includes(e.business)
                        )
                          return !1;
                        if (!e.isAdd) return !1;
                        if (!d) return !0;
                        var t = d.find(function (t) {
                          return t.template_id === e.template_id;
                        });
                        return !(t && +t.left_number >= u);
                      })
                      .map(function (e) {
                        return e.template_id.trim();
                      })),
                    (m = []),
                    (a.next = 14),
                    Promise.all(
                      h.map(function (e) {
                        return (
                          (t = e),
                          new Promise(function (e, n) {
                            if (!t) return n("invalid param");
                            r.wx$1.getSetting({
                              withSubscriptions: !0,
                              success: function (n) {
                                var r = n.subscriptionsSetting || {},
                                  i = r.mainSwitch,
                                  a = void 0 !== i && i,
                                  s = r.itemSettings,
                                  u = void 0 === s ? {} : s;
                                return a && u[t]
                                  ? e({ mainSwitch: a, status: u[t] })
                                  : e({ mainSwitch: a, status: "unset" });
                              },
                              fail: function (e) {
                                r.StockBridge.aegisReportEvent(
                                  "wx.getSetting fail: "
                                    .concat(e.errno, " ")
                                    .concat(e.errMsg)
                                ),
                                  n(e.errMsg);
                              },
                            });
                          })
                        );
                        var t;
                      })
                    )
                  );
                case 14:
                  if (
                    ((g = a.sent),
                    !(
                      (v = h.filter(function (e, t) {
                        return g[t] && "accept" === g[t].status;
                      })).length > 0
                    ))
                  ) {
                    a.next = 45;
                    break;
                  }
                  return (
                    (a.prev = 17),
                    (a.next = 20),
                    new Promise(function (e) {
                      r.wx$1.requestSubscribeMessage({
                        tmplIds: v,
                        success: function (t) {
                          v.forEach(function (e) {
                            t.errCode ||
                              "accept" !== t[e] ||
                              m.push({ template_id: e, status: "accept" });
                          }),
                            e(t);
                        },
                        fail: function () {
                          e(null);
                        },
                      });
                    })
                  );
                case 20:
                  if (!(m.length > 0)) {
                    a.next = 41;
                    break;
                  }
                  if (!i) {
                    a.next = 26;
                    break;
                  }
                  return (a.next = 24), c(i, m, 1, 1);
                case 24:
                  a.next = 41;
                  break;
                case 26:
                  (w = {}),
                    m.forEach(function (e) {
                      var t = e.template_id,
                        n = l.find(function (e) {
                          return e.template_id === t;
                        });
                      n &&
                        (w[n.business] || (w[n.business] = []),
                        w[n.business].push({
                          template_id: t,
                          status: "accept",
                        }));
                    }),
                    (b = []),
                    (x = 0),
                    (S = Object.entries(w));
                case 30:
                  if (!(x < S.length)) {
                    a.next = 40;
                    break;
                  }
                  return (
                    (_ = e(S[x], 2)),
                    (k = _[0]),
                    (y = _[1]),
                    (a.next = 34),
                    c(k, y, 1, 1)
                  );
                case 34:
                  (T = a.sent), (E = T.template_subscribe_number), b.push(E);
                case 37:
                  x++, (a.next = 30);
                  break;
                case 40:
                  !(function (e, i, a) {
                    n(
                      exports,
                      null,
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  r.wx$1.setStorageSync(
                                    "wx_subscribe_limit_info",
                                    { data: i, expire: a || null }
                                  )
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                  })(0, b.flat(), f);
                case 41:
                  a.next = 45;
                  break;
                case 43:
                  (a.prev = 43), (a.t0 = a.catch(17));
                case 45:
                case "end":
                  return a.stop();
              }
          },
          a,
          null,
          [[17, 43]]
        );
      })
    );
  }, 1e3),
  d = "newsMediaViewPointLastReadArticleId",
  h = {
    name: "QuickInputArea",
    components: {
      ScrollViewXWrapper: function () {
        return "./ScrollViewXWrapper.js";
      },
    },
    props: {
      theme: { type: String, default: "" },
      keyboardShowing: { type: Boolean, default: !1 },
      hasSentQuestion: { type: Boolean, default: !1 },
    },
    data: function () {
      return { latestArticle: {}, hasUnreadMessage: !1 };
    },
    computed: {
      shouldShowEntry: function () {
        return !this.keyboardShowing && !this.hasSentQuestion;
      },
    },
    mounted: function () {
      return n(
        this,
        null,
        t().mark(function e() {
          var n, i, a, u, c;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), s({ limit: 1 });
                  case 2:
                    (u = e.sent).success &&
                      (null == (i = null == (n = u.data) ? void 0 : n.list)
                        ? void 0
                        : i.length) &&
                      ((c = r.StockBridge.getStorage(d)),
                      (this.latestArticle =
                        (null == (a = u.data) ? void 0 : a.list[0]) || {}),
                      this.latestArticle.article_id === c ||
                        this.latestArticle.is_read ||
                        (this.hasUnreadMessage = !0));
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    methods: {
      handleJumpToSubscripePage: function () {
        return n(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), f("ai_v_subscribe");
                    case 3:
                      e.next = 7;
                      break;
                    case 5:
                      (e.prev = 5), (e.t0 = e.catch(0));
                    case 7:
                      r.wx$1.navigateTo({ url: "/pages/viewpoint/viewpoint" }),
                        r.StockBridge.setStorage(
                          d,
                          this.latestArticle.article_id || ""
                        ),
                        (this.hasUnreadMessage = !1);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 5]]
            );
          })
        );
      },
    },
  };
Array || r.resolveComponent("ScrollViewXWrapper")();
var m = r._export_sfc(h, [
  [
    "render",
    function (e, t, n, i, a, s) {
      return r.e(
        { a: s.shouldShowEntry },
        s.shouldShowEntry
          ? r.e({ b: a.hasUnreadMessage }, (a.hasUnreadMessage, {}), {
              c: r.o(function () {
                return (
                  s.handleJumpToSubscripePage &&
                  s.handleJumpToSubscripePage.apply(s, arguments)
                );
              }, 5534),
              d: r.n("skin-".concat(n.theme)),
            })
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-7301552e"],
]);
wx.createComponent(m);
