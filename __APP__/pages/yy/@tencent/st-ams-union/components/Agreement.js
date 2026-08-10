var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var n = function (e, t, n) {
    return new Promise(function (i, r) {
      var o = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  i = require("../../../../../common/vendor.js"),
  r = require("../Index.js"),
  o = "ZHONGJIN_OPENACCOUNT_AGREEMENT",
  a = r.BROKER_ID.ZHONGJIN,
  c = {
    user: "https://web.ciccwm.com/zzt/static/html/privacypolicy/user-agreement.html",
    privacy: "https://web.ciccwm.com/zzt/static/html/privacypolicy/index.html",
  };
function s() {
  var e = new Date();
  return ""
    .concat(e.getFullYear())
    .concat(String(e.getMonth() + 1).padStart(2, "0"))
    .concat(String(e.getDate()).padStart(2, "0"));
}
function h(e) {
  if (!e || 8 !== e.length) return new Date();
  try {
    var t = parseInt(e.substring(0, 4), 10),
      n = parseInt(e.substring(4, 6), 10) - 1,
      i = parseInt(e.substring(6, 8), 10);
    return new Date(t, n, i);
  } catch (e) {
    return new Date();
  }
}
function u(e, t) {
  var n = h(e),
    i = h(t),
    r = Math.abs(i.getTime() - n.getTime());
  return Math.ceil(r / 864e5);
}
function l(e) {
  i.StockBridge.setStorage(o, { date: s(), hasApplyAgreed: e });
}
function d() {
  return i.StockBridge.getStorage(o);
}
var g = {
    name: "AgreementCheckbox",
    props: {
      type: {
        type: String,
        default: "activity",
        validator: function (e) {
          return ["activity", "zhongjin"].includes(e);
        },
      },
      checked: { type: Boolean, default: null },
      broker: { type: [String, Number], default: "" },
    },
    data: function () {
      return { hasAgreed: !1, isShaking: !1, shakeTimer: null, ruleLinks: {} };
    },
    computed: {
      isZhongjinMode: function () {
        return "zhongjin" === this.type || String(this.broker) === a;
      },
      isZhaoShang: function () {
        return "10800" === String(this.broker);
      },
      actId: function () {
        return (
          {
            10800: "etf_zhaoshang_fourth",
            10100: "etf_hualin_fourth",
            15900: "etf_guojin_fourth",
          }[String(this.broker)] || ""
        );
      },
      isShow: function () {
        return !this.isZhongjinMode || !this.isAgreementSignedInValidPeriod();
      },
      defaultChecked: function () {
        return null !== this.checked ? this.checked : !this.isZhongjinMode;
      },
    },
    watch: {
      checked: function (e) {
        null === e || this.isZhongjinMode || (this.hasAgreed = e);
      },
      broker: {
        immediate: !0,
        handler: function (e) {
          this.isZhongjinMode;
        },
      },
      actId: {
        immediate: !0,
        handler: function (e) {
          return n(
            this,
            null,
            t().mark(function n() {
              var i, r, o;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e || this.isZhongjinMode) {
                          t.next = 10;
                          break;
                        }
                        return (
                          (t.prev = 1), (t.next = 4), this.getActivityConfig(e)
                        );
                      case 4:
                        (o = t.sent),
                          (null ==
                          (r =
                            null == (i = null == o ? void 0 : o.ui_conf)
                              ? void 0
                              : i.enrollIncentive)
                            ? void 0
                            : r.rule_link) &&
                            (this.ruleLinks =
                              o.ui_conf.enrollIncentive.rule_link),
                          (t.next = 10);
                        break;
                      case 8:
                        (t.prev = 8), (t.t0 = t.catch(1));
                      case 10:
                      case "end":
                        return t.stop();
                    }
                },
                n,
                this,
                [[1, 8]]
              );
            })
          );
        },
      },
    },
    mounted: function () {
      this.isZhongjinMode
        ? (this.loadStoredAgreementStatus(),
          this.notifyAgreementStatus(),
          i.StockBridge.busOn("shake-agreement", this.handleShake))
        : (this.hasAgreed = this.defaultChecked);
    },
    beforeDestroy: function () {
      this.isZhongjinMode &&
        i.StockBridge.busOff("shake-agreement", this.handleShake),
        this.shakeTimer &&
          (clearTimeout(this.shakeTimer), (this.shakeTimer = null));
    },
    methods: {
      loadStoredAgreementStatus: function () {
        var e = d();
        if (e && e.date) {
          var t = s();
          u(e.date, t) >= 7
            ? ((this.hasAgreed = this.defaultChecked), l(!1))
            : (this.hasAgreed = Boolean(e.hasApplyAgreed));
        } else this.hasAgreed = this.defaultChecked;
      },
      notifyAgreementStatus: function () {
        var e = this;
        this.$nextTick(function () {
          var t = e.isAgreementSignedInValidPeriod(),
            n = !!t || e.hasAgreed;
          e.$emit("change", { checked: n, visible: !t });
        });
      },
      isAgreementSignedInValidPeriod: function () {
        var e = d();
        if (!e || !e.date || !e.hasApplyAgreed) return !1;
        var t = s();
        return u(e.date, t) < 7;
      },
      toggleAgree: function () {
        var e = this;
        (this.hasAgreed = !this.hasAgreed),
          this.isZhongjinMode &&
            this.hasAgreed &&
            i.StockBridge.report("trade.apply.homepage.agreement.agree"),
          this.isZhongjinMode && l(this.hasAgreed),
          this.isZhongjinMode
            ? this.$nextTick(function () {
                e.$emit("change", { checked: e.hasAgreed, visible: e.isShow });
              })
            : this.$emit("change", this.hasAgreed);
      },
      openProtocol: function (e) {
        var t =
          "user" === e
            ? "trade.apply.homepage.agreement.click_user"
            : "trade.apply.homepage.agreement.click_privacy";
        i.StockBridge.report(t);
        var n = c[e];
        n && i.StockBridge.openExtraWebview(n);
      },
      handleLinkClick: function (e) {
        switch (e) {
          case "rule-activity":
            this.jumpToActivityRule(1);
            break;
          case "rule-common":
            this.jumpToActivityRule(4);
            break;
          case "rule-risk":
            this.jumpToTradeRule("risk_link");
            break;
          case "rule-consent":
            this.jumpToTradeRule("know_link");
            break;
          case "rule-contest":
            this.jumpToTradeRule("act_link");
        }
      },
      getActivityConfig: function (r) {
        return n(
          this,
          null,
          t().mark(function n() {
            var o, a, c, s;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (a = ["ui_conf", "share_conf", "stat_conf"]),
                      (t.next = 3),
                      i.Wuji.get({
                        appid: "act",
                        schemaid: "yy_activity_page_config",
                        filter: encodeURIComponent(
                          " act_id = '".concat(r, "' ")
                        ),
                      }).then(function (e) {
                        return e.data;
                      })
                    );
                  case 3:
                    return (
                      (c = t.sent),
                      (s = null),
                      t.abrupt(
                        "return",
                        (c &&
                          c.length &&
                          ((o = e(c, 1)),
                          (s = o[0]),
                          a.forEach(function (e) {
                            var t = s[e];
                            if (t && "string" == typeof t)
                              try {
                                s[e] = JSON.parse(s[e]);
                              } catch (e) {}
                          })),
                        s)
                      )
                    );
                  case 6:
                  case "end":
                    return t.stop();
                }
            }, n);
          })
        );
      },
      jumpToActivityRule: function (e) {
        if (this.actId) {
          var t =
            "https://zqact.tenpay.com/activity/page/etfEnrollMatchFourthPhase/#/rule?actId="
              .concat(this.actId, "&column=")
              .concat(e, "&lite=1");
          i.StockRouter.routeTo({
            name: "actWebview",
            query: { url: encodeURIComponent(t) },
          });
        } else i.StockBridge.toast("活动规则暂未配置", "none");
      },
      jumpToTradeRule: function (e) {
        var t,
          n = null == (t = this.ruleLinks) ? void 0 : t[e];
        n
          ? i.StockRouter.routeTo({
              name: "actWebview",
              query: { url: encodeURIComponent(n) },
            })
          : i.StockBridge.toast("规则链接暂未配置", "none");
      },
      handleShake: function () {
        var e = this;
        this.shakeTimer && clearTimeout(this.shakeTimer),
          (this.isShaking = !0),
          (this.shakeTimer = setTimeout(function () {
            (e.isShaking = !1), (e.shakeTimer = null);
          }, 600));
      },
    },
  },
  f = i._export_sfc(g, [
    [
      "render",
      function (e, t, n, r, o, a) {
        return i.e(
          { a: a.isShow },
          a.isShow
            ? i.e(
                { b: o.hasAgreed },
                (o.hasAgreed, {}),
                {
                  c: o.hasAgreed ? 1 : "",
                  d: i.o(function () {
                    return a.toggleAgree && a.toggleAgree.apply(a, arguments);
                  }, 4164),
                  e: a.isZhongjinMode,
                },
                a.isZhongjinMode
                  ? {
                      f: i.o(function (e) {
                        return a.openProtocol("user");
                      }, 4165),
                      g: i.o(function (e) {
                        return a.openProtocol("privacy");
                      }, 4166),
                    }
                  : i.e(
                      {
                        h: i.o(function (e) {
                          return a.handleLinkClick("rule-activity");
                        }, 4167),
                        i: i.o(function (e) {
                          return a.handleLinkClick("rule-common");
                        }, 4168),
                        j: i.o(function (e) {
                          return a.handleLinkClick("rule-risk");
                        }, 4169),
                        k: a.isZhaoShang,
                      },
                      a.isZhaoShang
                        ? {
                            l: i.o(function (e) {
                              return a.handleLinkClick("rule-consent");
                            }, 4170),
                          }
                        : {},
                      { m: a.isZhaoShang },
                      a.isZhaoShang
                        ? {
                            n: i.o(function (e) {
                              return a.handleLinkClick("rule-contest");
                            }, 4171),
                          }
                        : {},
                      { o: !a.isZhaoShang },
                      a.isZhaoShang
                        ? {}
                        : {
                            p: i.o(function (e) {
                              return a.handleLinkClick("rule-contest");
                            }, 4172),
                          }
                    ),
                { q: o.isShaking ? 1 : "", r: a.isZhongjinMode ? 1 : "" }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-9925b981"],
  ]);
wx.createComponent(f);
