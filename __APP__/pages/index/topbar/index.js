var e = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = function (e, t, i) {
    return new Promise(function (n, r) {
      var o = function (e) {
          try {
            c(i.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            c(i.throw(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, a);
        };
      c((i = i.apply(e, t)).next());
    });
  },
  n = require("../../../common/vendor.js"),
  r = {
    choose: {
      click: "choose.search.bar_click",
      exposure: "choose.search.bar_exposure",
    },
    hq: { click: "hq.search.bar_click", exposure: "hq.search.bar_exposure" },
    news: {
      click: "news.search.bar_click",
      exposure: "news.search.bar_exposure",
    },
    discover: {
      click: "discover.search.bar_click",
      exposure: "discover.search.bar_exposure",
    },
  },
  o =
    ((typeof getApp === "function" && getApp()) || {}).globalData || {
      safeTop: 0,
      isPC: !1,
      dynamicPlaceholder: "",
      aiIndex: { allQuestion: [] },
      actData: { isAddMyXcxEnable: !1 },
      rpxToPx: function (e) {
        return e;
      },
      init: function (e) {
        e && e();
      },
      navigateTo: function (e) {
        wx.navigateTo(e || {});
      },
    },
  a = "lite/search-ai-new-user",
  c = "lite/search-ai-displayed-text",
  s = 0,
  l = {
    options: { styleIsolation: "shared" },
    inject: ["hqBridge"],
    props: ["from", "hideTitle", "hideSearch", "premoteMixin", "isShow"],
    data: function () {
      var e, t;
      return {
        safeTop: 0,
        searchTop: 0,
        fixWidth: 0,
        showAddXcx: !1,
        allQuestion: [],
        dynamicPlaceholder: "",
        isAINewUser: n.StockBridge.getStorage(a) || { isNewUser: !0, time: 0 },
        isPC:
          (null ==
          (t = null == (e = o.detect) ? void 0 : e.env)
            ? void 0
            : t.IS_PCWEIXIN) || !1,
      };
    },
    computed: {
      fixStyle: function () {
        return "width: ".concat(this.fixWidth, "px;");
      },
      fixPlaceholderStyle: function () {
        return "width: ".concat(this.fixWidth - o.rpxToPx(200), "px;");
      },
      coverStyle: function () {
        return "width: 100%;";
      },
      isDevelopVersion: function () {
        var e, t;
        return (
          n.wx$1.getAccountInfoSync &&
          "develop" ===
            (null ==
            (t =
              null == (e = n.wx$1.getAccountInfoSync())
                ? void 0
                : e.miniProgram)
              ? void 0
              : t.envVersion)
        );
      },
    },
    watch: {
      isShow: function (e) {
        var t = this;
        e
          ? o.init(function () {
              t.updateShownText(), t.handleAIPlaceHolder();
            })
          : clearTimeout(s);
      },
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        e.getSafeArea();
      });
    },
    beforeDestroy: function () {
      clearTimeout(s);
    },
    onPageShow: function () {
      o.actData.isAddMyXcxEnable && (this.showAddXcx = !0);
    },
    methods: {
      handleAIPlaceHolder: function () {
        return i(
          this,
          null,
          t().mark(function e() {
            var i,
              r,
              o,
              c,
              l,
              h,
              u = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (s && clearTimeout(s),
                        !(i = n.StockBridge.getStorage(a)) || i.isNewUser)
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (e.prev = 3),
                        (r = n.login.getLoginInfo()),
                        (e.next = 7),
                        n.StockBridge.request(
                          "https://proxy.finance.qq.com/cgi/cgi-bin/smartbox/index",
                          "GET",
                          {
                            check: 11,
                            app: "wzqxcx",
                            appid: "wx4ffb369b6881ee5e",
                            openid: r.qluin,
                            fskey: r.qlskey,
                          }
                        )
                      );
                    case 7:
                      if ((o = e.sent)) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return");
                    case 10:
                      (c = o.aiIndex || {}),
                        (l = c.allQuestion),
                        (h = void 0 === l ? [] : l),
                        (this.allQuestion = Array.from(new Set(h))),
                        this.allQuestion.length > 0 &&
                          !this.dynamicPlaceholder &&
                          this.updateShownText(),
                        this.allQuestion.length > 0 &&
                          n.StockBridge.setStorage(
                            "lite/search-ai-all-question",
                            this.allQuestion
                          ),
                        (e.next = 16);
                      break;
                    case 14:
                      (e.prev = 14), (e.t0 = e.catch(3));
                    case 16:
                      s = setTimeout(function () {
                        u.handleAIPlaceHolder();
                      }, 6e5);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[3, 14]]
            );
          })
        );
      },
      updateShownText: function () {
        var t;
        if (null == (t = this.allQuestion) ? void 0 : t.length) {
          var i = n.StockBridge.getStorage(c) || [],
            r = this.allQuestion.filter(function (e) {
              return !i.includes(e);
            }),
            o = r.length > 0 ? r[0] : this.allQuestion[0],
            a = e(i);
          a.length >= this.allQuestion.length && (a = a.slice(1)),
            (a = r.length > 0 ? [].concat(e(a), [o]) : [o]),
            n.StockBridge.setStorage(c, a),
            n.StockBridge.setStorage("lite/search-ai-current-text", o),
            (this.dynamicPlaceholder = o);
        }
      },
      getSafeArea: function () {
        var e = this,
          r = n.wx$1.getMenuButtonBoundingClientRect(),
          o = r.top,
          a = void 0 === o ? 0 : o,
          c = r.left;
        (this.safeTop = this.isPC ? 0 : a),
          (this.fixWidth = c),
          this.$nextTick(function () {
            return i(
              e,
              null,
              t().mark(function e() {
                var i, n, r, o;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            this.hqBridge.getEleInfo(".top-bar-container", this)
                          );
                        case 2:
                          return (
                            (i = e.sent),
                            (n = (i || {}).height),
                            (r = void 0 === n ? 0 : n),
                            this.$emit("getBarHeight", r),
                            (e.next = 9),
                            this.hqBridge.getEleInfo(
                              this.isPC
                                ? ".search-bar-container"
                                : ".big-title",
                              this
                            )
                          );
                        case 9:
                          (o = e.sent),
                            this.$emit(
                              "getTitleHeight",
                              o.height || 0,
                              this.safeTop
                            );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          });
      },
      jumpToSearch: function () {
        return i(
          this,
          null,
          t().mark(function e() {
            var i, n;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (i = this.from || "") &&
                        ((n = (r[i] || {}).click), this.hqBridge.report(n)),
                        o.navigateTo({
                          url: "/pages/additional/search/main",
                          fail: function (e) {},
                        });
                    case 3:
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
      goToAiPage: function () {
        (this.isAINewUser = { isNewUser: !1, time: Date.now() }),
          n.StockBridge.setStorage(a, this.isAINewUser);
        var e = { searchfrom: "portfoliopage" };
        if (
          (this.dynamicPlaceholder &&
            (e = {
              searchfrom: "portfoliopage",
              mainQuery: this.dynamicPlaceholder,
              queryUsage: "sendToInput",
            }),
          "app_lct" === n.StockBridge.store.lctfrom)
        ) {
          var t = Object.keys(e)
              .map(function (t) {
                return "".concat(t, "=").concat(encodeURIComponent(e[t]));
              })
              .join("&"),
            i = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://wzq.tenpay.com/mp/v2/index.html#/pages/searchAi/main?".concat(
                  t
                )
              )
            );
          n.wx$1.navigateTo({ url: i });
        } else n.StockRouter.routeTo({ name: "searchAi", query: e });
        n.Request.reportMTAData({
          eventName: "jichu.search.ai_search_input_ai_ask_click",
          searchfrom: "portfoliopage",
        });
      },
      specialDebugFunc: function () {
        n.wx$1.vibrateShort({ type: "heavy" }),
          this.isDevelopVersion &&
            n.wx$1.showModal({
              title: "调试路由跳转",
              editable: !0,
              placeholderText: "请输入路由路径，如 /pages/index/main",
              confirmText: "跳转",
              cancelText: "取消",
              success: function (e) {
                if (e.confirm && e.content) {
                  var t = e.content.trim();
                  n.wx$1.navigateTo({ url: t });
                }
              },
            });
      },
    },
  },
  h = n._export_sfc(l, [
    [
      "render",
      function (e, t, i, r, o, a) {
        return n.e(
          { a: "".concat(o.safeTop, "px"), b: !o.isPC },
          o.isPC
            ? {}
            : {
                c: n.o(function () {
                  return (
                    a.specialDebugFunc && a.specialDebugFunc.apply(a, arguments)
                  );
                }, 417),
                d: n.n(!0 === i.hideTitle && "hidenbar"),
                e: n.n(!1 === i.hideTitle && "appearBar"),
                f: n.n(i.hideSearch && "hideBottom"),
                g: n.n(o.safeTop && "showBar"),
              },
          { h: !i.hideSearch },
          i.hideSearch
            ? {}
            : n.e(
                { i: o.dynamicPlaceholder },
                o.dynamicPlaceholder ? { j: n.t(o.dynamicPlaceholder) } : {},
                {
                  k: n.s(!0 === i.hideTitle ? a.fixPlaceholderStyle : ""),
                  l: n.o(function () {
                    return a.jumpToSearch && a.jumpToSearch.apply(a, arguments);
                  }, 418),
                  m: n.o(function () {
                    return a.goToAiPage && a.goToAiPage.apply(a, arguments);
                  }, 419),
                  n: n.n({
                    "bar-hidden": o.isPC && !0 === i.hideTitle,
                    pc: o.isPC,
                  }),
                  o: n.s(
                    !0 !== i.hideTitle || o.isPC ? a.coverStyle : a.fixStyle
                  ),
                }
              )
        );
      },
    ],
    ["__scopeId", "data-v-1a86a5e7"],
  ]);
wx.createComponent(h);
