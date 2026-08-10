var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  s = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  u = function (e, t, s) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s);
  },
  a = function (e, t, r) {
    return new Promise(function (s, n) {
      var i = function (e) {
          try {
            a(r.next(e));
          } catch (e) {
            n(e);
          }
        },
        u = function (e) {
          try {
            a(r.throw(e));
          } catch (e) {
            n(e);
          }
        },
        a = function (e) {
          return e.done ? s(e.value) : Promise.resolve(e.value).then(i, u);
        };
      a((r = r.apply(e, t)).next());
    });
  },
  c = require("../../../../../../common/vendor.js"),
  o = { headers: { "Content-Type": "application/json" }, forceCallback: !0 },
  p = "zxgxcx",
  l = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = (function (e, r) {
        for (var a in r || (r = {})) n.call(r, a) && u(e, a, r[a]);
        if (s) {
          var c,
            o = t(s(r));
          try {
            for (o.s(); !(c = o.n()).done; ) {
              a = c.value;
              i.call(r, a) && u(e, a, r[a]);
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
        }
        return e;
      })({ source: p }, e);
    return c.StockBridge.request(
      "https://wzq.tenpay.com/cgi-bin/usersetting.fcgi",
      c.RequestTypeEnum.POST,
      r
    )
      .then(function (e) {
        return e;
      })
      .catch(function (e) {
        return e;
      });
  },
  b = {
    name: "AiSubscribeNewsletter",
    props: {
      propsObj: {
        type: Object,
        required: !1,
        default: function () {
          return {};
        },
      },
      curRequestId: { required: !1, type: String, default: "" },
      curSessionId: { required: !1, type: String, default: "" },
    },
    data: function () {
      return {
        isMP: !0,
        tmplIds: [
          "A35U4AqG2OofTeF5LXMe6V7xd4zNurCTmEFEqFgIgYo",
          "SahFvo2WkWpPJv6E660xp15SNkWZUs4NuJMEvoRG1tI",
        ],
        templateIdMap: {
          A35U4AqG2OofTeF5LXMe6V7xd4zNurCTmEFEqFgIgYo: "scqz",
          SahFvo2WkWpPJv6E660xp15SNkWZUs4NuJMEvoRG1tI: "scfp",
        },
        subscribeNewsletter: !1,
      };
    },
    created: function () {
      c.StockBridge.report("base.ai_search.subscribe_card_expose", {
        requestid: this.curRequestId,
        session: this.curSessionId,
      });
    },
    methods: {
      getSubscriptionSettings: function (e) {
        var t = this;
        return new Promise(function (r, s) {
          return e && Array.isArray(e) && 0 !== e.length
            ? t.isMP
              ? void c.wx$1.getSetting({
                  withSubscriptions: !0,
                  success: function (t) {
                    var s = t.subscriptionsSetting || {},
                      n = s.mainSwitch,
                      i = s.itemSettings,
                      u = e.map(function (e) {
                        return {
                          templateId: e,
                          status: (null == i ? void 0 : i[e]) || "unset",
                          hasHistory: n && i && void 0 !== i[e],
                        };
                      });
                    r({
                      mainSwitch: n || !1,
                      itemSettings: i || {},
                      analysis: u,
                    });
                  },
                  fail: function (e) {
                    c.StockBridge.aegisReportEvent(
                      "wx.getSetting fail: "
                        .concat(e.errno, " ")
                        .concat(e.errMsg)
                    ),
                      s(e.errMsg);
                  },
                })
              : r({
                  mainSwitch: !1,
                  itemSettings: {},
                  analysis: e.map(function (e) {
                    return { templateId: e, status: "unset", hasHistory: !1 };
                  }),
                })
            : s("invalid param: tmplIds must be a non-empty array");
        });
      },
      applySubscribe: function (r) {
        var s = this;
        c.StockBridge.report("base.ai_search.subscribe_card_click", {
          requestid: this.curRequestId,
          session: this.curSessionId,
        }),
          this.isMP
            ? c.wx$1.requestSubscribeMessage({
                tmplIds: r,
                success: function (n) {
                  return a(
                    s,
                    null,
                    e().mark(function s() {
                      var i,
                        u,
                        a,
                        b,
                        d,
                        f,
                        h,
                        m,
                        v,
                        _,
                        g,
                        S,
                        y,
                        w,
                        k,
                        x,
                        q,
                        I,
                        M,
                        P = this;
                      return e().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ((n.errMsg, !((u = n.errCode) && u > 0))) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                (a = []), (b = t(r));
                                try {
                                  for (b.s(); !(d = b.n()).done; )
                                    (f = d.value),
                                      "accept" === n[f] &&
                                        a.push({
                                          template_id: f,
                                          status: "accept",
                                        });
                                } catch (e) {
                                  b.e(e);
                                } finally {
                                  b.f();
                                }
                                if (!a.length) {
                                  e.next = 50;
                                  break;
                                }
                                if (
                                  ((this.subscribeNewsletter = !0),
                                  c.wx$1.showToast({
                                    title: "订阅成功",
                                    icon: "success",
                                    duration: 2e3,
                                  }),
                                  (h = []),
                                  a.forEach(function (e) {
                                    "accept" === e.status &&
                                      P.templateIdMap[e.template_id] &&
                                      h.push(P.templateIdMap[e.template_id]);
                                  }),
                                  c.StockBridge.report(
                                    "base.ai_search.subscribe_allow_click",
                                    {
                                      requestid: this.curRequestId,
                                      session: this.curSessionId,
                                      column: h.join(","),
                                    }
                                  ),
                                  (e.prev = 10),
                                  (m = "ai_pre_post_market"),
                                  (v = 0),
                                  !(a.length > 0))
                                ) {
                                  e.next = 25;
                                  break;
                                }
                                return (
                                  (e.prev = 14),
                                  (_ = a.map(function (e) {
                                    return e.template_id;
                                  })),
                                  (e.next = 18),
                                  this.getSubscriptionSettings(_)
                                );
                              case 18:
                                (g = e.sent),
                                  (v = (
                                    null ==
                                    (i = null == g ? void 0 : g.analysis)
                                      ? void 0
                                      : i.some(function (e) {
                                          return (
                                            e.hasHistory && "unset" !== e.status
                                          );
                                        })
                                  )
                                    ? 1
                                    : 0),
                                  (e.next = 25);
                                break;
                              case 22:
                                (e.prev = 22), (e.t0 = e.catch(14)), (v = 0);
                              case 25:
                                return (
                                  (e.next = 27),
                                  (function (e, t) {
                                    var r =
                                        arguments.length > 2 &&
                                        void 0 !== arguments[2]
                                          ? arguments[2]
                                          : 0,
                                      s = {
                                        source: p,
                                        business: e,
                                        subscribeDetails: t,
                                        allow_silent_subscribe: r,
                                      };
                                    return c.StockBridge.request(
                                      "https://wzq.tenpay.com/svr/user/user_service/user_open_subscribe",
                                      c.RequestTypeEnum.POST,
                                      s,
                                      o
                                    )
                                      .then(function (e) {
                                        return e;
                                      })
                                      .catch(function (e) {
                                        return e;
                                      });
                                  })(m, a, v)
                                );
                              case 27:
                                if (
                                  ((S = e.sent),
                                  (y = S.retcode),
                                  S.retmsg,
                                  0 === y)
                                ) {
                                  e.next = 32;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  void c.StockBridge.aegisReportEvent(
                                    "wx_subscribe_backend_fail"
                                  )
                                );
                              case 32:
                                return (
                                  (w = function (e) {
                                    return Promise.all(
                                      e.map(function (e) {
                                        return l({ querysub: e });
                                      })
                                    );
                                  }),
                                  (e.next = 35),
                                  w([
                                    "pre_market_ai_opportunities",
                                    "ai_post_market_analysis",
                                  ])
                                );
                              case 35:
                                if (
                                  ((k = e.sent),
                                  (x = (k || []).some(function (e) {
                                    var t;
                                    return (
                                      1 ===
                                      (null ==
                                      (t =
                                        null == e
                                          ? void 0
                                          : e.pre_market_ai_opportunities)
                                        ? void 0
                                        : t.switch)
                                    );
                                  })),
                                  (q = (k || []).some(function (e) {
                                    var t;
                                    return (
                                      1 ===
                                      (null ==
                                      (t =
                                        null == e
                                          ? void 0
                                          : e.ai_post_market_analysis)
                                        ? void 0
                                        : t.switch)
                                    );
                                  })),
                                  (I = []),
                                  x || I.push("pre_market_ai_opportunities"),
                                  q || I.push("ai_post_market_analysis"),
                                  !(I.length > 0))
                                ) {
                                  e.next = 43;
                                  break;
                                }
                                return (
                                  (M = function (e) {
                                    return Promise.all(
                                      e.map(function (e) {
                                        return l({ subscribe: e });
                                      })
                                    );
                                  }),
                                  (e.next = 43),
                                  M(I)
                                );
                              case 43:
                                e.next = 48;
                                break;
                              case 45:
                                return (
                                  (e.prev = 45),
                                  (e.t1 = e.catch(10)),
                                  e.abrupt("return")
                                );
                              case 48:
                                e.next = 51;
                                break;
                              case 50:
                                c.StockBridge.report(
                                  "base.ai_search.subscribe_refuse_click",
                                  {
                                    requestid: this.curRequestId,
                                    session: this.curSessionId,
                                  }
                                ),
                                  c.wx$1.showModal({
                                    title: "订阅提示",
                                    content:
                                      '由于你拒绝了此提醒，需要通过右上角"···"-设置-订阅消息，手动允许消息提醒',
                                    showCancel: !1,
                                    confirmText: "我知道了",
                                    success: function (e) {},
                                  });
                              case 51:
                              case "end":
                                return e.stop();
                            }
                        },
                        s,
                        this,
                        [
                          [10, 45],
                          [14, 22],
                        ]
                      );
                    })
                  );
                },
                fail: function (t) {
                  return a(
                    s,
                    null,
                    e().mark(function t() {
                      return e().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case "end":
                              return e.stop();
                          }
                      }, t);
                    })
                  );
                },
              })
            : c.StockBridge.toast("当前环境不支持订阅", "none");
      },
    },
  },
  d = c._export_sfc(b, [
    [
      "render",
      function (e, t, r, s, n, i) {
        return c.e(
          { a: n.isMP },
          n.isMP
            ? c.e(
                { b: !n.subscribeNewsletter },
                n.subscribeNewsletter
                  ? (n.subscribeNewsletter, {})
                  : {
                      c: c.o(function (e) {
                        return i.applySubscribe(n.tmplIds);
                      }, 5896),
                    },
                { d: n.subscribeNewsletter }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-9f3333ec"],
  ]);
wx.createComponent(d);
