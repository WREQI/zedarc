var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../common/vendor.js"),
  t = require("../stock-base/service/common/sign.js"),
  o = "portfolio/ai_icon",
  n = {
    props: {
      from: { type: String, default: "" },
      openid: { type: String, default: "" },
      scene: { type: String, default: "" },
      app: { type: String, default: "" },
    },
    setup: function (n) {
      var a = this,
        i = r.ref(!1);
      return (
        r.onMounted(function () {
          "choose" === n.from &&
            (function () {
              return (
                (c = a),
                null,
                (u = e().mark(function () {
                  var a, c, u, s;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((c = 0),
                              (u = r.StockBridge.getStorage(o)),
                              !(u && u.expire > Date.now()))
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              ((i.value = u.showAIIcon),
                              void (
                                i.value &&
                                r.StockBridge.report(
                                  "jichu.top_bar.ai_search_top_bar_brow"
                                )
                              ))
                            );
                          case 4:
                            return (
                              (e.prev = 4),
                              (e.next = 7),
                              r.StockBridge.request(
                                "https://snp.tenpay.com/cgi-bin/openai/aiask/query",
                                "GET",
                                t.getSignV3({
                                  data: {
                                    app: n.app || "wzqxcx",
                                    channel: n.scene || "stocklists",
                                    openid: n.openid,
                                    t: new Date().getTime(),
                                  },
                                  methods: "get",
                                  origin: "wzqxcx",
                                }),
                                { forceCallback: !0 }
                              )
                            );
                          case 7:
                            (s = e.sent),
                              (i.value =
                                (null == (a = null == s ? void 0 : s.questions)
                                  ? void 0
                                  : a.length) > 0),
                              (null == s ? void 0 : s.expire) && (c = s.expire),
                              i.value &&
                                r.StockBridge.report(
                                  "jichu.top_bar.ai_search_top_bar_brow"
                                ),
                              (e.next = 14);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(4)),
                              (i.value = !1),
                              r.StockBridge.aegisReportEvent(
                                "AIENTRY-ICON-FAIL"
                              );
                          case 14:
                            return (
                              (e.prev = 14),
                              r.StockBridge.setStorage(o, {
                                showAIIcon: i.value,
                                expire: Date.now() + 1e3 * c,
                              }),
                              e.finish(14)
                            );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    u,
                    null,
                    [[4, 11, 14, 17]]
                  );
                })),
                new Promise(function (e, r) {
                  var t = function e(t) {
                      try {
                        n(u.next(t));
                      } catch (e) {
                        r(e);
                      }
                    },
                    o = function (e) {
                      try {
                        n(u.throw(e));
                      } catch (e) {
                        r(e);
                      }
                    },
                    n = function (r) {
                      return r.done
                        ? e(r.value)
                        : Promise.resolve(r.value).then(t, o);
                    };
                  n((u = u.apply(c, null)).next());
                })
              );
              var c, u;
            })();
        }),
        {
          showAIIcon: i,
          goToAI: function () {
            r.StockBridge.routeTo({
              url: "/pages/searchAi/main?searchfrom=".concat(
                n.scene || "stocklists"
              ),
            }),
              r.StockBridge.report("jichu.top_bar.ai_search_top_bar_click");
          },
        }
      );
    },
  },
  a = r._export_sfc(n, [
    [
      "render",
      function (e, t, o, n, a, i) {
        return r.e(
          { a: n.showAIIcon },
          n.showAIIcon
            ? {
                b: r.o(function () {
                  return n.goToAI && n.goToAI.apply(n, arguments);
                }, 2187),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(a);
