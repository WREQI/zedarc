var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  c = function (e, n) {
    for (var r in n || (n = {})) s.call(n, r) && u(e, r, n[r]);
    if (o) {
      var i,
        c = t(o(n));
      try {
        for (c.s(); !(i = c.n()).done; ) {
          r = i.value;
          a.call(n, r) && u(e, r, n[r]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return r(e, i(t));
  },
  h = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../../../common/vendor.js"),
  d = require("../utils/StockBridgeWrapper.js"),
  f = require("../../stock-base/service/common/sign.js"),
  m = require("../utils/RequestUtils.js"),
  w = {
    name: "WelcomeBox",
    props: {
      keyboardShowing: { type: Boolean, default: !1 },
      keyboardHeight: { type: Number, default: 0 },
      visible: { type: Boolean, default: !0 },
      sourceFrom: { required: !1, type: String, default: "" },
      theme: { required: !0, type: String },
      showSubscripeEntry: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        userName: "",
        displayQuestions: [],
        showAnimation: !1,
        isMP: !0,
      };
    },
    computed: {
      welcomeText: function () {
        return "Hi ".concat(this.userName, "，");
      },
      askAiApp: function () {
        return "mpweapp" === p.ShellTypeEnum.SHY
          ? "zxg"
          : d.StockBridge.getAppValue();
      },
      isNewQuestionChannel: function () {
        return [
          "newuser_a",
          "newuser_b",
          "newuser_c",
          "sharecard_mbti",
        ].includes(this.sourceFrom);
      },
      containerStyle: function () {
        if (!this.isMP) return {};
        var e = p.wx$1.getWindowInfo
            ? p.wx$1.getWindowInfo().windowWidth / 750
            : 1,
          t = Math.round(157 * e);
        return this.keyboardShowing && this.keyboardHeight > 0
          ? {
              bottom: "".concat(
                (this.showSubscripeEntry
                  ? this.keyboardHeight
                  : this.keyboardHeight + 24) + t,
                "px"
              ),
              top: "auto",
            }
          : {};
      },
    },
    created: function () {
      try {
        this.userName = "";
      } catch (e) {
        this.userName = "";
      }
      d.StockBridge.report("base.ai_search.quick_input_area_brow"),
        this.fetchOldUserQuestions();
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        setTimeout(function () {
          e.showAnimation = !0;
        }, 50);
      });
    },
    beforeDestroy: function () {
      this.showAnimation = !1;
    },
    methods: {
      reload: function () {
        this.isNewQuestionChannel
          ? this.requestNewUserQuestionFromServer()
          : this.requestComplexQuestionFromServer();
      },
      fetchOldUserQuestions: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.isNewQuestionChannel) {
                        e.next = 5;
                        break;
                      }
                      return (
                        (e.next = 3), this.requestNewUserQuestionFromServer()
                      );
                    case 3:
                      e.next = 7;
                      break;
                    case 5:
                      return (
                        (e.next = 7), this.requestComplexQuestionFromServer()
                      );
                    case 7:
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
      requestNewUserQuestionFromServer: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var n, r, i, o, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (n = function () {
                          return new Promise(function (e) {
                            d.StockBridge.getUserInfo(function (t) {
                              e((null == t ? void 0 : t.openid) || "");
                            });
                          });
                        }),
                        (e.next = 4),
                        n()
                      );
                    case 4:
                      return (
                        (r = e.sent),
                        (i = new Date().getTime()),
                        (e.next = 8),
                        m.requestWrapper(
                          "https://snp.tenpay.com/cgi-bin/openai/aiask/query",
                          "GET",
                          f.getSignV3({
                            data: {
                              app: this.askAiApp,
                              channel: this.sourceFrom,
                              openid: r || "",
                              t: i,
                            },
                            method: "GET",
                            origin: d.StockBridge.getAppValue(),
                          }),
                          { forceCallback: !0 }
                        )
                      );
                    case 8:
                      (o = e.sent) &&
                      0 === o.code &&
                      o.questions &&
                      o.questions.length > 0
                        ? ((s = o.questions).length > 3 && (s = s.slice(0, 3)),
                          (this.displayQuestions = s.map(function (e) {
                            return l(c({}, e), {
                              showTrendStyle:
                                (!e.heat || e.heat < 100) &&
                                Math.random() < 0.5,
                            });
                          })),
                          this.reportOldUserExposure())
                        : this.setDefaultQuestions(),
                        (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(0)),
                        this.setDefaultQuestions();
                    case 15:
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
      requestComplexQuestionFromServer: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var n, r, i, o, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (n = function () {
                          return new Promise(function (e) {
                            d.StockBridge.getUserInfo(function (t) {
                              e((null == t ? void 0 : t.openid) || "");
                            });
                          });
                        }),
                        (e.next = 4),
                        n()
                      );
                    case 4:
                      return (
                        (r = e.sent),
                        (i = new Date().getTime()),
                        (e.next = 8),
                        m.requestWrapper(
                          "https://snp.tenpay.com/cgi-bin/openai/aiask/query_complex",
                          "GET",
                          f.getSignV3({
                            data: {
                              app: this.askAiApp,
                              openid: r || "",
                              channel: "welcomepage",
                              content_id: "welcomepage_all",
                              t: i,
                            },
                            method: "GET",
                            origin: d.StockBridge.getAppValue(),
                          }),
                          { forceCallback: !0 }
                        )
                      );
                    case 8:
                      (o = e.sent) &&
                      0 === o.code &&
                      o.questions &&
                      o.questions.length > 0
                        ? ((s = o.questions).length > 3 && (s = s.slice(0, 3)),
                          (this.displayQuestions = s.map(function (e) {
                            return l(c({}, e), {
                              showTrendStyle:
                                (!e.heat || e.heat < 100) &&
                                Math.random() < 0.5,
                            });
                          })),
                          this.reportOldUserExposure())
                        : this.setDefaultQuestions(),
                        (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(0)),
                        this.setDefaultQuestions();
                    case 15:
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
      getQuestionDesc: function (e) {
        return e.heat && e.heat > 100
          ? this.formattedHeat(e.heat)
          : e.content_id && "welcomepage_all" !== e.content_id
          ? "你关注的股票"
          : "大家都在问";
      },
      setDefaultQuestions: function () {
        (this.displayQuestions = [
          { title: "最近机构调研较多的上市公司？" },
          { title: "当下港股市场的热点是哪些？" },
          { title: "美股盘后异动个股有哪些？" },
        ]),
          this.reportOldUserExposure();
      },
      formattedHeat: function (e) {
        return null === e || isNaN(Number(e)) || e < 100
          ? "大家都在问"
          : e < 1e4
          ? "".concat(e, "人问过")
          : e < 1e5
          ? "".concat((e / 1e4).toFixed(1), "万人问过")
          : "10万+人问过";
      },
      handleQuestionClick: function (e, t) {
        var n = e.title,
          r = e.sub_scene,
          i = void 0 === r ? "" : r;
        d.StockBridge.report("base.ai_search.guide_item_click", {
          contentId: n,
          subScene: i,
          position: t + 1,
          wptype: "1223",
        }),
          this.$emit("click-new-user-que", e);
      },
      reportOldUserExposure: function () {
        if (this.displayQuestions && 0 !== this.displayQuestions.length) {
          var e = [],
            t = [];
          this.displayQuestions.forEach(function (n) {
            e.push(n.title), t.push(n.sub_scene);
          }),
            d.StockBridge.report("base.ai_search.guide_card_brow", {
              contentId: e.join(","),
              subScene: t.join(","),
              wptype: "1223",
            });
        }
      },
    },
  },
  g = p._export_sfc(w, [
    [
      "render",
      function (e, t, n, r, i, o) {
        return {
          a: i.showAnimation ? 1 : "",
          b: p.f(i.displayQuestions, function (e, t, n) {
            return p.e(
              {
                a: p.t(e.title),
                b: e.content_id && "welcomepage_all" !== e.content_id,
              },
              e.content_id && "welcomepage_all" !== e.content_id
                ? {}
                : p.e(
                    {
                      c: e.heat && e.heat >= 100 ? 1 : "",
                      d: e.showTrendStyle ? 1 : "",
                      e: e.heat && e.heat >= 100,
                    },
                    e.heat && e.heat >= 100
                      ? { f: p.t(o.formattedHeat(e.heat)) }
                      : { g: p.t(e.showTrendStyle ? "今日热点" : "大家都在问") }
                  ),
              {
                h: t,
                i: p.n("question-item-".concat(t)),
                j: p.o(
                  function (n) {
                    return o.handleQuestionClick(e, t);
                  },
                  4778,
                  t
                ),
              }
            );
          }),
          c: p.n({ "animate-in": i.showAnimation }),
          d: p.n(i.isMP ? "mp" : ""),
          e: p.n(!i.isMP && n.keyboardShowing ? "keyboard-showing-top" : ""),
          f: p.n("skin-".concat(n.theme)),
          g: p.s(o.containerStyle),
        };
      },
    ],
    ["__scopeId", "data-v-b511b6c8"],
  ]);
wx.createComponent(g);
