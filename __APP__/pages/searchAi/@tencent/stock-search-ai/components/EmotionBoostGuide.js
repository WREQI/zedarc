var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../common/vendor.js"),
  n = [
    "逻辑看懂了？我帮你盯紧它😜",
    "好标的怕错过？我帮你盯紧😊",
    "逻辑看懂了？别让好机会溜走\n加入自选~我帮你盯紧它！😜",
    "好标的怕错过？我帮你盯紧它\n自选~追踪后续异动！😊",
  ],
  o = [
    "还没有账户？好机会别踏空💪",
    "别让看懂的机会只停留在自选\n开通账户，去把认知变现！👍",
    "机会总是留给有准备的人💪\n开通账户~好机会不踏空！",
    "开通账户，去把认知变现！👍",
  ],
  r = function (e) {
    return e[Math.floor(Math.random() * e.length)];
  },
  c = t.defineComponent({
    name: "EmotionBoostGuide",
    props: {
      theme: { type: String, default: "blue" },
      stockCode: { type: String, default: "" },
      stockName: { type: String, default: "" },
      stockAdded: { type: Boolean, default: !1 },
    },
    setup: function (c, u) {
      var a = this,
        i = u.emit,
        d = t.inject("isAccountOpen", !1),
        l = t.ref("addStock"),
        s = t.ref(!1),
        f = t.computed(function () {
          return "addStock" === l.value;
        }),
        p = t.computed(function () {
          return f.value
            ? "https://st.gtimg.com/design/85d74ec1d48e6bc26f0a288ac75baf00.svg"
            : "https://st.gtimg.com/design/979304304e6392d427203d8304540c27.svg";
        }),
        v = t.ref(""),
        m = t.ref(0),
        h = t.ref(!1),
        g = null,
        k = function () {
          var e = v.value,
            t = Array.from(e.replace(/\n/g, "")).length;
          (m.value = 0),
            (h.value = !1),
            (g = setInterval(function () {
              (m.value += 1),
                m.value >= t && (clearInterval(g), (g = null), (h.value = !0));
            }, 50));
        };
      t.onMounted(function () {
        c.stockAdded
          ? d ||
            ((l.value = "openAccount"),
            (v.value = r(o)),
            (s.value = !0),
            k(),
            t.StockBridge.report("jichu.ai_search.emotion_open_account_brow"))
          : ((l.value = "addStock"),
            (v.value = r(n)),
            (s.value = !0),
            k(),
            t.StockBridge.report("jichu.ai_search.emotion_add_stock_brow"));
      }),
        t.onBeforeUnmount(function () {
          g && (clearInterval(g), (g = null));
        });
      var _ = t.computed(function () {
          return v.value.split("\n");
        }),
        y = t.computed(function () {
          var e = _.value,
            t = m.value;
          return e.map(function (e) {
            if (t <= 0) return "";
            var n = Array.from(e),
              o = n.slice(0, t).join("");
            return (t -= n.length), o;
          });
        }),
        S = t.computed(function () {
          return f.value ? (c.stockAdded ? "已加自选" : "加自选") : "去开户";
        });
      return {
        guideIcon: p,
        guideLines: _,
        displayLines: y,
        btnText: S,
        isReady: s,
        isAddStockMode: f,
        isTypingDone: h,
        handleBtnClick: function () {
          f.value
            ? (c.stockAdded
                ? t.StockBridge.report(
                    "jichu.ai_search.emotion_add_stock_cancel"
                  )
                : t.StockBridge.report("jichu.ai_search.emotion_add_stock_add"),
              (function () {
                return (
                  (t = a),
                  null,
                  (n = e().mark(function t() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c.stockCode && i("toggleAdded");
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                  })),
                  new Promise(function (e, o) {
                    var r = function (e) {
                        try {
                          u(n.next(e));
                        } catch (e) {
                          o(e);
                        }
                      },
                      c = function (e) {
                        try {
                          u(n.throw(e));
                        } catch (e) {
                          o(e);
                        }
                      },
                      u = function (t) {
                        return t.done
                          ? e(t.value)
                          : Promise.resolve(t.value).then(r, c);
                      };
                    u((n = n.apply(t, null)).next());
                  })
                );
                var t, n;
              })())
            : (t.StockBridge.report(
                "jichu.ai_search.emotion_open_account_click"
              ),
              t.StockRouter.routeTo({ name: "ApplyIndex", query: {} }));
        },
      };
    },
  }),
  u = t._export_sfc(c, [
    [
      "render",
      function (e, n, o, r, c, u) {
        return t.e(
          { a: e.isReady },
          e.isReady
            ? {
                b: e.guideIcon,
                c: t.f(e.displayLines, function (e, n, o) {
                  return { a: t.t(e), b: n };
                }),
                d: t.t(e.btnText),
                e: e.isAddStockMode && e.stockAdded ? 1 : "",
                f: e.isTypingDone ? 1 : "",
                g: t.o(function () {
                  return (
                    e.handleBtnClick && e.handleBtnClick.apply(e, arguments)
                  );
                }, 5047),
                h: t.n("skin-".concat(e.theme)),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-e00574b8"],
  ]);
wx.createComponent(u);
