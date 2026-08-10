var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = function (e, t, n) {
    return new Promise(function (r, i) {
      var s = function (e) {
          try {
            u(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          try {
            u(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(s, o);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  r = require("../utils/StockBridgeWrapper.js"),
  i = require("../../stock-base/service/common/sign.js"),
  s = {
    name: "FirstGuideItem",
    props: {
      defaultQuestionArray: {
        type: String,
        default:
          "最近机构调研较多的上市公司？|当下港股市场的热点是哪些？|美股盘后异动个股有哪些？",
      },
      aimodel: { required: !1, type: String, default: "deepseek" },
      theme: { required: !0, type: String },
      sourceFrom: { required: !1, type: String, default: "" },
      defaultInputQuestion: { required: !1, type: String, default: "" },
    },
    data: function () {
      return {
        isMP: !0,
        newUserquestionArray: [],
        emolji: ["👀️", "🌟", "🔥", "💕"],
        isWrapped: !1,
      };
    },
    computed: {
      welcomeGuideStr: function () {
        return "Hi～我是你的股票AI助手“元宝”";
      },
      isNewQuestionChannel: function () {
        return [
          "newuser_a",
          "newuser_b",
          "newuser_c",
          "sharecard_mbti",
        ].includes(this.sourceFrom);
      },
      logoImage: function () {
        return "black" === this.theme
          ? "https://st.gtimg.com/design/0e7a09cbe7092e40e32e7ff58e28ee84.png"
          : "https://st.gtimg.com/design/d19087ddc395a56148851c548f3d2834.png";
      },
      askAiApp: function () {
        return "mpweapp" === n.ShellTypeEnum.SHY
          ? "zxg"
          : r.StockBridge.getAppValue();
      },
    },
    watch: {
      defaultQuestionArray: {
        handler: function (n, r) {
          return t(
            this,
            null,
            e().mark(function t() {
              var r = this;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        "" !== n && n.split("|").length > 0
                          ? ((this.newUserquestionArray = []),
                            n.split("|").forEach(function (e) {
                              r.newUserquestionArray.push({ title: e });
                            }),
                            this.reportExposeEvent())
                          : this.isNewQuestionChannel
                          ? this.requestNewUserQuestionFromServer()
                          : ((this.newUserquestionArray = [
                              { title: "最近机构调研较多的上市公司？" },
                              { title: "当下港股市场的热点是哪些？" },
                              { title: "美股盘后异动个股有哪些？" },
                            ]),
                            this.requestFormServer());
                      case 1:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                this
              );
            })
          );
        },
        immediate: !0,
      },
      newUserquestionArray: {
        handler: function (n, r) {
          return t(
            this,
            null,
            e().mark(function t() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this.checkTextWrap();
                      case 2:
                        this.isWrapped = e.sent;
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                this
              );
            })
          );
        },
      },
    },
    methods: {
      reload: function () {
        this.isNewQuestionChannel
          ? this.requestNewUserQuestionFromServer()
          : this.requestFormServer();
      },
      onNewUserClickDefaultQuestion: function (e, t) {
        var n = e.title,
          i = e.sub_scene,
          s = void 0 === i ? "" : i;
        this.isNewQuestionChannel,
          this.$emit("click-new-user-que", e),
          r.StockBridge.report("base.ai_search.guide_item_click", {
            contentId: n,
            subScene: s,
            position: t + 1,
          });
      },
      reportExposeEvent: function () {
        if (
          this.newUserquestionArray &&
          0 !== this.newUserquestionArray.length
        ) {
          var e = [],
            t = [];
          this.newUserquestionArray.forEach(function (n) {
            e.push(n.title), t.push(n.sub_scene);
          }),
            r.StockBridge.report("base.ai_search.guide_card_brow", {
              contentId: e.join(","),
              subScene: t.join(","),
            });
        }
      },
      requestFormServer: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n,
              s,
              o,
              u,
              a,
              c = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (n = function () {
                          return new Promise(function (e) {
                            r.StockBridge.getUserInfo(function (t) {
                              e((null == t ? void 0 : t.openid) || "");
                            });
                          });
                        }),
                        (e.next = 4),
                        n()
                      );
                    case 4:
                      return (
                        (s = e.sent),
                        (o = new Date().getTime()),
                        (e.next = 8),
                        this.requestWrapper(
                          "https://snp.tenpay.com/cgi-bin/openai/aiask/query_complex",
                          "GET",
                          i.getSignV3({
                            data: {
                              app: this.askAiApp,
                              channel: "welcomepage",
                              openid: s || "",
                              content_id: "welcomepage_all",
                              t: o,
                            },
                            method: "get",
                            origin: r.StockBridge.getAppValue(),
                          }),
                          { forceCallback: !0 }
                        )
                      );
                    case 8:
                      (u = e.sent) &&
                        0 === u.code &&
                        u.questions &&
                        u.questions.length &&
                        ((a = (a = u.questions).filter(function (e) {
                          return e.title !== c.defaultInputQuestion;
                        })).length > 3 && (a = a.slice(0, 3)),
                        (this.newUserquestionArray = a),
                        this.reportExposeEvent()),
                        (e.next = 14);
                      break;
                    case 12:
                      (e.prev = 12), (e.t0 = e.catch(0));
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 12]]
            );
          })
        );
      },
      requestNewUserQuestionFromServer: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, s, o, u;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        new Promise(function (e) {
                          r.StockBridge.getUserInfo(function (t) {
                            e((null == t ? void 0 : t.openid) || "");
                          });
                        })
                      );
                    case 2:
                      return (
                        (n = e.sent),
                        (s = new Date().getTime()),
                        (o = i.getSignV3({
                          data: {
                            app: this.askAiApp,
                            channel: this.sourceFrom,
                            t: s,
                            openid: n || "",
                          },
                          method: "GET",
                          origin: r.StockBridge.getAppValue(),
                        })),
                        (e.next = 7),
                        this.requestWrapper(
                          "https://snp.tenpay.com/cgi-bin/openai/aiask/query",
                          "GET",
                          o,
                          { forceCallback: !0 }
                        )
                      );
                    case 7:
                      (u = e.sent) &&
                        0 === u.code &&
                        u.questions &&
                        u.questions.length > 0 &&
                        ((this.newUserquestionArray = u.questions),
                        this.newUserquestionArray.length > 3 &&
                          this.newUserquestionArray.splice(3));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      requestWrapper: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "GET",
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return r.StockBridge.ENV === n.EnvTypeEnum.SHY_NATIVE
          ? ("GET" === t &&
              (e = "".concat(e, "?").concat(
                Object.keys(i)
                  .map(function (e) {
                    return "".concat(e, "=").concat(i[e]);
                  })
                  .join("&")
              )),
            new Promise(function (t, n) {
              fetch(e)
                .then(function (e) {
                  if (!e.ok) throw new Error("网络响应不正常");
                  return e.json();
                })
                .then(function (e) {
                  t(e);
                })
                .catch(function (e) {
                  n(e);
                });
            }))
          : r.StockBridge.request(e, t, i, s);
      },
      formattedHeat: function (e) {
        return null === e || isNaN(Number(e)) || e < 100
          ? ""
          : e < 1e4
          ? "".concat(e, "人问过")
          : e < 1e5
          ? "".concat((e / 1e4).toFixed(1), "万人问过")
          : "10万+人问过";
      },
      checkTextWrap: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var r = this;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        r.$nextTick(function () {
                          n.index
                            .createSelectorQuery()
                            .in(r)
                            .select(".text")
                            .boundingClientRect(function (t) {
                              e(!!t && t.height > 30);
                            })
                            .exec();
                        });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      },
    },
  },
  o = n._export_sfc(s, [
    [
      "render",
      function (e, t, r, i, s, o) {
        return n.e(
          {
            a: n.t(o.welcomeGuideStr),
            b: s.newUserquestionArray && s.newUserquestionArray.length > 0,
          },
          s.newUserquestionArray && s.newUserquestionArray.length > 0
            ? {
                c: n.f(s.newUserquestionArray, function (e, t, r) {
                  return n.e(
                    { a: !t },
                    t
                      ? n.e(
                          {
                            g: n.t(s.emolji[t]),
                            h: n.t(e.title),
                            i: o.formattedHeat(e.heat) ? 1 : "",
                            j: !!o.formattedHeat(e.heat),
                          },
                          o.formattedHeat(e.heat)
                            ? { k: n.t(o.formattedHeat(e.heat)) }
                            : {},
                          {
                            l: t === s.newUserquestionArray.length - 1 ? 1 : "",
                          }
                        )
                      : {
                          b: n.t(s.emolji[t]),
                          c: n.t(e.title),
                          d: n.t(o.formattedHeat(e.heat)),
                          e: s.isWrapped ? 1 : "",
                          f: o.logoImage,
                        },
                    {
                      m: t,
                      n: n.o(
                        function (n) {
                          return o.onNewUserClickDefaultQuestion(e, t);
                        },
                        5041,
                        t
                      ),
                    }
                  );
                }),
              }
            : {},
          { d: n.n(s.isMP ? "mp" : ""), e: n.n("skin-".concat(r.theme)) }
        );
      },
    ],
    ["__scopeId", "data-v-2d747e2f"],
  ]);
wx.createComponent(o);
