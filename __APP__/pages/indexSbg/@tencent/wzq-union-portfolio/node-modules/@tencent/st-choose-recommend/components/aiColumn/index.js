require("../../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  u = function (e, n) {
    for (var u in n || (n = {})) i.call(n, u) && a(e, u, n[u]);
    if (r) {
      var l,
        c = t(r(n));
      try {
        for (c.s(); !(l = c.n()).done; ) {
          u = l.value;
          o.call(n, u) && a(e, u, n[u]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  l = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, a);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  c = require("../../../../../../../../../common/vendor.js"),
  s = require("../../../../../../stock-base/visibilityObserver/index.js"),
  d = require("../../../../../../stock-hq-data/index.js"),
  h = require("../recommend/index.js"),
  m = require("../../utils/index.js"),
  f = new d.DetailApi(function (e) {
    return c.StockBridge.request(e, "GET");
  }),
  v = !1,
  p = c.ref(!1),
  g = c.ref(["🔥", "🌟", "👀"]),
  b = c.ref([]),
  y = c.ref([]),
  _ = "market-ai-half-screen-show",
  x = [],
  w = [],
  k = 0,
  q = 3,
  T = !1,
  S = null,
  A = "aiColumn",
  j = "v2",
  C = {
    name: "aiColumn",
    props: {
      isCurrent: { type: Boolean, default: !1 },
      type: { type: String, default: "" },
      scene: { type: String, default: "" },
      scodeList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      abtType: { type: Number, default: 0 },
      topBanner: { type: Boolean, default: !1 },
      theme: { type: String, default: "" },
    },
    components: {
      targetVer: function () {
        return "../targetVer/index.js";
      },
    },
    setup: function (t, n) {
      return (function (t, n) {
        var r,
          i,
          o = this,
          a = n.emit,
          C = h.useClickProxy().proxyHandlers,
          B = c.getCurrentInstance().proxy || c.getCurrentInstance(),
          O = c.computed(function () {
            return "t_aicolumn".concat(t.abtType);
          });
        ((i = r || (r = {})).SHOW = "show"), (i.HIDE = "hide");
        var E = c.computed(function () {
            return t.theme === j
              ? t.scodeList && t.scodeList.length
                ? "更多投资灵感问AI"
                : "👋 Hi，我是你的AI炒股助手"
              : "大家都在问AI";
          }),
          Q = c.ref(!1),
          I = c.ref(""),
          D = null,
          L = null,
          P = null,
          H = null,
          F = null,
          z = !1;
        !(function () {
          l(
            this,
            null,
            e().mark(function n() {
              var r, i, o;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (v) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (v = !0),
                          (e.prev = 2),
                          (e.next = 5),
                          h.queryAiAsk(t.scene)
                        );
                      case 5:
                        if (
                          ((r = e.sent),
                          (i = r.code),
                          (o = r.questions),
                          0 == +i && o.length)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          void a("columnStatus", { type: A, flag: !1 })
                        );
                      case 10:
                        (x = o),
                          o.forEach(function (e) {
                            w.push({ title: e.title });
                          }),
                          t.topBanner &&
                            ((q = 4), (g.value = ["👀", "🌟", "🔥", "💕"])),
                          (b.value = w.slice(0, q)),
                          (p.value = !0),
                          (k = b.value.length),
                          a("columnStatus", { type: A, flag: !0 }),
                          M(),
                          (e.next = 16);
                        break;
                      case 13:
                        (e.prev = 13),
                          (e.t0 = e.catch(2)),
                          a("columnStatus", { type: A, flag: !1 });
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[2, 13]]
              );
            })
          );
        })();
        var M = function () {
            t.isCurrent &&
              (V(),
              (F = setTimeout(function () {
                S = new s.VisibilityObserver(
                  ".ai-column",
                  {
                    once: !0,
                    throttle: 1e3,
                    callback: function (e) {
                      var t, n;
                      if (e) {
                        var r =
                          null ==
                          (n =
                            null == (t = b.value)
                              ? void 0
                              : t.map(function (e) {
                                  return e.title;
                                }))
                            ? void 0
                            : n.join("｜");
                        R("yy.choose.recommend_item_brow"),
                          R("yy.choose.recommend_aiquestion_brow", {
                            ai_question: r,
                          });
                      }
                    },
                    intersection: { threshold: 0.2 },
                  },
                  { context: B }
                );
              }, 500)));
          },
          V = function () {
            var e, t;
            null ==
              (t =
                null == (e = null == S ? void 0 : S.observer)
                  ? void 0
                  : e.disconnect) || t.call(e),
              F && clearTimeout(F);
          },
          R = function (e) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            c.StockBridge.report(
              e,
              u({ recommend_id: O.value, ai_scene: t.scene }, n)
            );
          },
          W = c.debounce(function (n, r) {
            return l(
              o,
              null,
              e().mark(function i() {
                var o, a, u, l, s, v, p, g, q, T, S;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = x.find(function (e) {
                              return e.title === n.title;
                            })),
                            c.StockBridge.report(
                              "yy.choose.recommend_ai_ask_click",
                              {
                                recommend_id: O.value,
                                ai_scene: t.scene,
                                ai_question: n.title,
                                ai_index: r + 1,
                              }
                            ),
                            "manual" !== a.sub_channel &&
                              "newuser_mbti" !== a.sub_scene)
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            (c.StockBridge.busEmit(
                              "market-choose-toggle-added"
                            ),
                            void c.StockRouter.routeTo({
                              name: "searchAi",
                              query: {
                                searchfrom: t.scene,
                                mainQuery: a.title,
                                subChannel: a.sub_channel,
                                subScene: a.sub_scene,
                                questionQuery: a.prompt,
                              },
                            }))
                          );
                        case 3:
                          if (a.ext_content) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void c.StockBridge.busEmit(_, {
                              aiDialogQuestion: a.title || {},
                              aiQuestionQuery: a.prompt || "",
                              aiSourceFrom: t.scene,
                              aiServerObj: a,
                            })
                          );
                        case 5:
                          if (!z) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt("return");
                        case 7:
                          return (
                            (z = !0),
                            (Q.value = !0),
                            y.value.push({
                              type: "ai_askanwer".concat(y.value.length + 1),
                              title: n.title,
                              preText: "",
                              postText: "",
                              list: [],
                            }),
                            b.value.splice(r, 1),
                            (w = w.filter(function (e) {
                              return e.title !== n.title;
                            })),
                            k && (k -= k),
                            (u = y.value[y.value.length - 1]),
                            (e.prev = 9),
                            (e.next = 12),
                            h.queryAiAnswer({
                              ai_channel: t.scene,
                              title: n.title,
                            })
                          );
                        case 12:
                          if (
                            ((l = e.sent),
                            (s = l.retcode),
                            (v = l.pre_text),
                            (p = l.post_text),
                            (g = l.xg_data),
                            (z = !1),
                            0 == +s && v)
                          ) {
                            e.next = 19;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void (u.preText = "暂无答案，请稍后再试~")
                          );
                        case 19:
                          return (
                            (q =
                              (null == (o = null == g ? void 0 : g.analyze_data)
                                ? void 0
                                : o.data.map(function (e) {
                                    return { symbol: e.code, name: e.name };
                                  })) || []),
                            (T = q.map(function (e) {
                              return e.symbol;
                            })),
                            (e.next = 23),
                            f.getQTsWithProcess(T)
                          );
                        case 23:
                          (S = e.sent),
                            null == q ||
                              q.forEach(function (e) {
                                var n,
                                  r,
                                  i,
                                  o,
                                  a =
                                    S[
                                      d.utils.trimScode(
                                        null == e ? void 0 : e.symbol
                                      )
                                    ];
                                a &&
                                  ((e.dqj =
                                    (null == (n = a.secu_quote)
                                      ? void 0
                                      : n.dqj) || ""),
                                  (e.zdf = m.formatZdf(
                                    (null == (r = a.secu_quote)
                                      ? void 0
                                      : r.zdf) || ""
                                  )),
                                  (e.type =
                                    (null == (i = a.secu_info)
                                      ? void 0
                                      : i.stocktype) || "")),
                                  (e.add =
                                    null == (o = t.scodeList)
                                      ? void 0
                                      : o.includes(e.symbol));
                              }),
                            (L = setTimeout(function () {
                              G(v, p, q);
                            }, 1500)),
                            (e.next = 30);
                          break;
                        case 27:
                          (e.prev = 27),
                            (e.t0 = e.catch(9)),
                            (u.preText = "网络异常，请稍后再试~"),
                            (z = !1);
                        case 30:
                        case "end":
                          return e.stop();
                      }
                  },
                  i,
                  null,
                  [[9, 27]]
                );
              })
            );
          }, 1e3),
          G = function e(t, n, r) {
            var i = y.value[y.value.length - 1],
              o = t.substr(0, 1),
              u = t.substr(1, t.length);
            (i.preText += o),
              u
                ? (P = setTimeout(function () {
                    e(u, n, r);
                  }, 50))
                : ((i.postText = n),
                  (i.list = r),
                  (Q.value = !1),
                  a("updateHeight", 0));
          },
          N = function () {
            var e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            "hide" !== I.value &&
              (e && R("yy.choose.recommend_aichange_click"),
              (I.value = "hide"),
              H && clearTimeout(H),
              (H = setTimeout(function () {
                var e,
                  t,
                  n = w.length === k ? 0 : k;
                (b.value = w.slice(n, n + q - y.value.length)),
                  (k = n + b.value.length),
                  (I.value = "show"),
                  R("yy.choose.recommend_aiquestion_brow", {
                    ai_event: "change",
                    ai_question:
                      null ==
                      (t =
                        null == (e = b.value)
                          ? void 0
                          : e.map(function (e) {
                              return e.title;
                            }))
                        ? void 0
                        : t.join("｜"),
                  });
              }, 400)));
          };
        c.watch(
          function () {
            return t.scodeList;
          },
          function (e) {
            !T &&
              y.value.length &&
              ((T = !0),
              y.value.forEach(function (t) {
                var n;
                null == (n = null == t ? void 0 : t.list) ||
                  n.forEach(function (t) {
                    t.add = e.includes(t.symbol);
                  });
              }),
              (D = setTimeout(function () {
                T = !1;
              }, 500)));
          },
          { immediate: !0 }
        ),
          c.onActivated(function () {
            t.theme === j && t.isCurrent && N(!1);
          }),
          c.onBeforeUnmount(function () {
            V(),
              D && clearTimeout(D),
              L && clearTimeout(L),
              P && clearTimeout(P),
              H && clearTimeout(H);
          });
        var U = {
            show: p,
            emolji: g,
            list: b,
            answer: y,
            loading: Q,
            questionAnimate: I,
            title: E,
          },
          Z = C({
            handleQuestion: W,
            handleAdd: function (e, n) {
              a("addStock", e, O.value, n, t.scene);
            },
            handleDetail: function (e, n) {
              a("viewStock", e.symbol, O.value, n, t.scene);
            },
            handleAiDetail: function (e) {
              var n = e.title,
                r = x.find(function (e) {
                  return e.title === n;
                });
              c.StockBridge.busEmit(_, {
                aiDialogQuestion: n,
                aiQuestionQuery: (null == r ? void 0 : r.prompt) || "",
                aiSourceFrom: t.scene,
                aiServerObj: r,
              }),
                R("yy.choose.recommend_aidetail_click", {
                  ai_question: e.title,
                });
            },
            handleAiMore: function () {
              t.theme !== j &&
                (c.StockBridge.busEmit(_, { aiSourceFrom: t.scene }),
                R("yy.choose.recommend_aimore_click"));
            },
            handleChange: N,
            handleAnswer: function (e, t) {
              Q.value ||
                (y.value.splice(
                  y.value.findIndex(function (t) {
                    return t.title === e.title;
                  }),
                  1
                ),
                b.value.splice(t, 0, { title: e.title }),
                w.splice(t, 0, { title: e.title }),
                (k += b.value.length),
                a("updateHeight", 0));
            },
          });
        return u(u({}, U), Z);
      })(t, { emit: n.emit });
    },
    onPageShow: function () {
      "v2" === this.theme && this.isCurrent && this.handleChange(!1);
    },
  };
Array || c.resolveComponent("target-ver")();
var B = c._export_sfc(C, [
  [
    "render",
    function (e, t, n, r, i, o) {
      return c.e(
        { a: e.show },
        e.show
          ? c.e(
              { b: c.t(e.title), c: "v2" !== n.theme },
              (n.theme, {}),
              { d: !e.answer.length },
              e.answer.length
                ? {}
                : {
                    e: c.o(function (t) {
                      return e.handleChange(!0);
                    }, 3499),
                  },
              { f: "v2" === n.theme && !n.scodeList.length },
              ("v2" !== n.theme || n.scodeList.length, {}),
              {
                g: c.n("head-".concat(n.theme)),
                h: c.n(n.scodeList.length ? "head-v2-scode" : ""),
                i: e.answer.length,
              },
              e.answer.length
                ? {
                    j: c.f(e.answer, function (t, n, r) {
                      return c.e(
                        {
                          a: c.t(t.title),
                          b: c.o(
                            function (r) {
                              return e.handleAnswer(t, n);
                            },
                            3500,
                            n
                          ),
                          c: !t.preText,
                        },
                        (t.preText, {}),
                        { d: c.t(t.preText), e: t.list.length },
                        t.list.length
                          ? {
                              f: c.o(
                                function (n) {
                                  return e.handleAdd(n, t.title);
                                },
                                3501,
                                n
                              ),
                              g: c.o(
                                function (n) {
                                  return e.handleDetail(n, t.title);
                                },
                                3502,
                                n
                              ),
                              h: "19a1de9a-0-" + r,
                              i: c.p({ data: t }),
                            }
                          : {},
                        { j: t.postText },
                        t.postText ? { k: c.t(t.postText) } : {},
                        e.loading
                          ? {}
                          : {
                              l: c.o(
                                function (n) {
                                  return e.handleAiDetail(t);
                                },
                                3503,
                                n
                              ),
                            },
                        { m: n }
                      );
                    }),
                    k: !e.loading,
                  }
                : {},
              { l: !e.loading && e.list.length },
              !e.loading && e.list.length
                ? c.e(
                    { m: e.answer.length },
                    e.answer.length
                      ? {
                          n: c.o(function () {
                            return (
                              e.handleChange &&
                              e.handleChange.apply(e, arguments)
                            );
                          }, 3504),
                        }
                      : {},
                    {
                      o: c.f(e.list, function (t, r, i) {
                        return c.e(
                          { a: n.topBanner && !r },
                          n.topBanner && !r
                            ? { b: c.t(e.emolji[r]), c: c.t(t.title) }
                            : c.e(
                                { d: "v2" === n.theme },
                                "v2" === n.theme
                                  ? c.e({ e: 0 === r }, {}, { f: c.t(t.title) })
                                  : { g: c.t(e.emolji[r]), h: c.t(t.title) },
                                {
                                  i: "hide" === e.questionAnimate ? 1 : "",
                                  j: "show" === e.questionAnimate ? 1 : "",
                                  k: "v2" === n.theme ? 1 : "",
                                }
                              ),
                          {
                            l: r,
                            m: c.o(
                              function (n) {
                                return e.handleQuestion(t, r);
                              },
                              3505,
                              r
                            ),
                          }
                        );
                      }),
                    }
                  )
                : {},
              { p: !e.loading },
              e.loading
                ? {}
                : c.e({ q: "v2" === n.theme }, (n.theme, {}), {
                    r: c.n("bottom-".concat(n.theme)),
                    s: c.o(function () {
                      return (
                        e.handleAiMore && e.handleAiMore.apply(e, arguments)
                      );
                    }, 3506),
                  }),
              { t: c.n("content-".concat(n.theme)) }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-19a1de9a"],
]);
wx.createComponent(B);
