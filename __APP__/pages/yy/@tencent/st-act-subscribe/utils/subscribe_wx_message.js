require("../../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  u = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  a = function (e, t, r) {
    return new Promise(function (n, u) {
      var i = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            u(e);
          }
        },
        s = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            u(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, s);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  o = require("../../../../../common/vendor.js"),
  l = { headers: { "Content-Type": "application/json" }, forceCallback: !0 },
  p = "zxgxcx",
  f = function (e, t) {
    var r = { source: p, business: e, subscribeDetails: t };
    return o.StockBridge.request(
      "https://wzq.tenpay.com/svr/user/user_service/user_open_subscribe",
      o.RequestTypeEnum.POST,
      r,
      l
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  },
  b = function (e) {
    var t = (function (e, t) {
      for (var n in t || (t = {})) i.call(t, n) && c(e, n, t[n]);
      if (u) {
        var a,
          o = r(u(t));
        try {
          for (o.s(); !(a = o.n()).done; ) {
            n = a.value;
            s.call(t, n) && c(e, n, t[n]);
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
      }
      return e;
    })({ source: p }, e);
    return o.StockBridge.request(
      "https://wzq.tenpay.com/cgi-bin/usersetting.fcgi",
      o.RequestTypeEnum.POST,
      t
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  },
  m = null,
  d = function () {
    return new Promise(function (e) {
      return a(
        exports,
        null,
        t().mark(function r() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (!m) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return", e(m));
                case 2:
                  2,
                    3,
                    o.Wuji.get({
                      appid: "act",
                      schemaid: "wx_subscribe_tmpl_id",
                      rowid: 3,
                    }).then(function (t) {
                      (m = t.data), e(m);
                    });
                case 4:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      );
    });
  },
  x = function (e) {
    return new Promise(function (r, n) {
      return a(
        exports,
        null,
        t().mark(function u() {
          var i, s, c, a, o;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), d();
                case 2:
                  if (
                    ((i = t.sent),
                    (s = i.template_ids),
                    0 !==
                      (c = s.filter(function (t) {
                        return t.business === e;
                      })).length)
                  ) {
                    t.next = 7;
                    break;
                  }
                  return t.abrupt("return", n("no template id"));
                case 7:
                  return (
                    (a = c.map(function (e) {
                      return e.template_id;
                    })),
                    (o = c.map(function (e) {
                      return e.usersetting || "";
                    })),
                    t.abrupt(
                      "return",
                      r({
                        templateIds: a,
                        userSettings: o,
                        templateInfoList: c,
                      })
                    )
                  );
                case 9:
                case "end":
                  return t.stop();
              }
          }, u);
        })
      );
    });
  },
  h = function (e) {
    return new Promise(function (t, r) {
      if (!e) return r("invalid param");
      o.wx$1.getSetting({
        withSubscriptions: !0,
        success: function (r) {
          var n = r.subscriptionsSetting || {},
            u = n.mainSwitch,
            i = n.itemSettings;
          return u && i && i[e]
            ? t({ mainSwitch: u, status: i[e] })
            : t({ mainSwitch: u, status: "unset" });
        },
        fail: function (e) {
          o.StockBridge.aegisReportEvent(
            "wx.getSetting fail: ".concat(e.errno, " ").concat(e.errMsg)
          ),
            r(e.errMsg);
        },
      });
    });
  },
  w = function (e, n) {
    return new Promise(function (u, i) {
      return e && n && 0 !== n.length
        ? void o.wx$1.requestSubscribeMessage({
            tmplIds: n,
            success: function (s) {
              return a(
                exports,
                null,
                t().mark(function c() {
                  var a, l, p, b, m, d, x, h, w;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((a = s.errMsg), !((l = s.errCode) && l > 0))) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return", i(a));
                          case 3:
                            (p = []), (b = r(n));
                            try {
                              for (b.s(); !(m = b.n()).done; )
                                (d = m.value),
                                  "accept" === s[d] &&
                                    p.push({
                                      template_id: d,
                                      status: "accept",
                                    });
                            } catch (e) {
                              b.e(e);
                            } finally {
                              b.f();
                            }
                            if (!p.length) {
                              t.next = 20;
                              break;
                            }
                            return (t.prev = 7), (t.next = 10), f(e, p);
                          case 10:
                            if (
                              ((x = t.sent),
                              (h = x.retcode),
                              (w = x.retmsg),
                              0 === h)
                            ) {
                              t.next = 15;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              (o.StockBridge.aegisReportEvent(
                                "wx_subscribe_backend_fail"
                              ),
                              i(w || "backend error"))
                            );
                          case 15:
                            t.next = 20;
                            break;
                          case 17:
                            return (
                              (t.prev = 17),
                              (t.t0 = t.catch(7)),
                              t.abrupt("return", i("backend error"))
                            );
                          case 20:
                            return t.abrupt("return", u(s));
                          case 21:
                          case "end":
                            return t.stop();
                        }
                    },
                    c,
                    null,
                    [[7, 17]]
                  );
                })
              );
            },
            fail: function (e) {
              o.StockBridge.aegisReportEvent(
                "wx_subscribe_fail_".concat(n.join(","))
              ),
                i(e.errMsg);
            },
          })
        : i("invalid param");
    });
  },
  g = function (e) {
    return Promise.all(
      e.map(function (e) {
        return b({ subscribe: e });
      })
    );
  },
  v = (function (e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = null,
      u = null,
      i = null,
      s = 0,
      c = r || {},
      a = c.leading,
      o = void 0 === a || a,
      l = c.trailing,
      p = void 0 === l || l,
      f = function (t) {
        if (((s = t), "function" != typeof e))
          throw new Error("func必须为函数");
        e.apply(i, u), (u = null), (i = null);
      },
      b = function () {
        for (
          var e = Date.now(), r = arguments.length, c = new Array(r), a = 0;
          a < r;
          a++
        )
          c[a] = arguments[a];
        if (((u = c), (i = this), 0 === s && o)) f(e);
        else {
          n && (clearTimeout(n), (n = null));
          var l,
            b = ((l = e), Math.max(t - (l - s), 0));
          b > 0 &&
            p &&
            (n = setTimeout(function () {
              f(Date.now());
            }, b)),
            b <= 0 && f(e);
        }
      };
    return (
      (b.cancel = function () {
        n && (clearTimeout(n), (n = null)), (s = 0), (u = null), (i = null);
      }),
      b
    );
  })(function (r) {
    return a(
      exports,
      null,
      t().mark(function n() {
        var u, i, s, c, l, p, b, m, x, w, g, v, _, S, y, k, q, P, T;
        return t().wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.next = 2), d();
                case 2:
                  return (
                    (u = n.sent),
                    (i = u.limit),
                    (s = u.expire),
                    (c = u.template_ids),
                    (l = s ? 60 * s * 1e3 + Date.now() : null),
                    (n.next = 9),
                    "wx_subscribe_limit_info",
                    a(
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
                                    return a(
                                      exports,
                                      null,
                                      t().mark(function r() {
                                        var n, u, i, s;
                                        return t().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.next = 2),
                                                  o.wx$1.getStorageSync(
                                                    "wx_subscribe_limit_info"
                                                  )
                                                );
                                              case 2:
                                                return (
                                                  (n = t.sent),
                                                  (u = n.data),
                                                  (i = n.expire),
                                                  (s = Date.now()),
                                                  t.abrupt(
                                                    "return",
                                                    e(i && s > i ? null : u)
                                                  )
                                                );
                                              case 7:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, r);
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
                    (p = n.sent),
                    (b = c
                      .filter(function (e) {
                        if (r) return e.business === r;
                        if (
                          ![
                            "price_remind",
                            "calendar_event",
                            "gudan_notice",
                          ].includes(e.business)
                        )
                          return !1;
                        if (!e.isAdd) return !1;
                        if (!p) return !0;
                        var t = p.find(function (t) {
                          return t.template_id === e.template_id;
                        });
                        return !(t && +t.left_number >= i);
                      })
                      .map(function (e) {
                        return e.template_id.trim();
                      })),
                    (m = []),
                    (n.next = 14),
                    Promise.all(
                      b.map(function (e) {
                        return h(e);
                      })
                    )
                  );
                case 14:
                  if (
                    ((x = n.sent),
                    !(
                      (w = b.filter(function (e, t) {
                        return x[t] && "accept" === x[t].status;
                      })).length > 0
                    ))
                  ) {
                    n.next = 45;
                    break;
                  }
                  return (
                    (n.prev = 17),
                    (n.next = 20),
                    new Promise(function (e) {
                      o.wx$1.requestSubscribeMessage({
                        tmplIds: w,
                        success: function (t) {
                          w.forEach(function (e) {
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
                    n.next = 41;
                    break;
                  }
                  if (!r) {
                    n.next = 26;
                    break;
                  }
                  return (n.next = 24), f(r, m);
                case 24:
                  n.next = 41;
                  break;
                case 26:
                  (g = {}),
                    m.forEach(function (e) {
                      var t = e.template_id,
                        r = c.find(function (e) {
                          return e.template_id === t;
                        });
                      r &&
                        (g[r.business] || (g[r.business] = []),
                        g[r.business].push({
                          template_id: t,
                          status: "accept",
                        }));
                    }),
                    (v = []),
                    (_ = 0),
                    (S = Object.entries(g));
                case 30:
                  if (!(_ < S.length)) {
                    n.next = 40;
                    break;
                  }
                  return (
                    (y = e(S[_], 2)),
                    (k = y[0]),
                    (q = y[1]),
                    (n.next = 34),
                    f(k, q)
                  );
                case 34:
                  (P = n.sent), (T = P.template_subscribe_number), v.push(T);
                case 37:
                  _++, (n.next = 30);
                  break;
                case 40:
                  !(function (e, r, n) {
                    a(
                      exports,
                      null,
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  o.wx$1.setStorageSync(
                                    "wx_subscribe_limit_info",
                                    { data: r, expire: n || null }
                                  )
                                );
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                  })(0, v.flat(), l);
                case 41:
                  n.next = 45;
                  break;
                case 43:
                  (n.prev = 43), (n.t0 = n.catch(17));
                case 45:
                case "end":
                  return n.stop();
              }
          },
          n,
          null,
          [[17, 43]]
        );
      })
    );
  }, 1e3),
  _ = [
    { key: "svrPush", type: "ams_cooper_1", enabled: !0 },
    { key: "amsAiSilentSubscribe", type: "ai_pre_post_market", enabled: !0 },
    { key: "amdEtfCompSubscribe", type: "ams_cooper_6", enabled: !0 },
    { key: "etfSilentSubscribe", type: "etf_ranking", enabled: !0 },
  ],
  S = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        cancelSubscribe: function (e) {
          return Promise.all(
            e.map(function (e) {
              return b({ unsubscribe: e });
            })
          );
        },
        getSubscribeConfig: d,
        getTemplateInfo: x,
        handleClickSilentSubscribe: function () {
          return a(
            this,
            null,
            t().mark(function e() {
              var r, n;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          "devtools" !== o.wx$1.getSystemInfoSync().platform
                        ) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          -1 ===
                            (r = _.findIndex(function (e) {
                              return e.enabled;
                            })) &&
                            (_.forEach(function (e) {
                              return (e.enabled = !0);
                            }),
                            (r = 0)),
                          (n = _[r].type),
                          (_[r].enabled = !1),
                          (e.prev = 6),
                          (e.next = 9),
                          v(n)
                        );
                      case 9:
                        e.next = 13;
                        break;
                      case 11:
                        (e.prev = 11), (e.t0 = e.catch(6));
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[6, 11]]
              );
            })
          );
        },
        querySubscribeSwitch: h,
        querySubscribes: function (e) {
          return b({ querysub: e.join(",") });
        },
        setSubscribe: g,
        silentSubscribe: v,
        subscribe: w,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
(exports.getTemplateInfo = x),
  (exports.queryStockAlert = function (e) {
    return o.StockBridge.request(
      "https://wzq.tenpay.com/svr/stock/alert/query",
      o.RequestTypeEnum.POST,
      e,
      l
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.querySubscribeSwitch = h),
  (exports.setStockAlert = function (e) {
    return o.StockBridge.request(
      "https://wzq.tenpay.com/svr/stock/alert/set",
      o.RequestTypeEnum.POST,
      e,
      l
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.setSubscribe = g),
  (exports.subscribe = w),
  (exports.subscribe_wx_message = S);
