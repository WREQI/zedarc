var e = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, r) {
    return new Promise(function (n, i) {
      var o = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, a);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  r = require("../../../../../../../../../common/vendor.js"),
  n = require("../../service/api/index.js"),
  i = require("../../service/platform/index.js"),
  o = {
    name: "ShareBar",
    components: {
      shareButtonWrapper: function () {
        return "./shareButtonWrapper.js";
      },
    },
    props: {
      sourceFrom: { type: String, default: "" },
      reqid: { type: String, default: "" },
    },
    data: function () {
      return {
        uiConfig: {},
        shareData: {
          retcode: 0,
          share_code: "",
          question: "",
          hot_score: 0,
          like_score: 0,
          nickname: "",
          headimgurl: "",
        },
        internalShowShareBar: !1,
        pollTimer: null,
        shouldStopPolling: !1,
      };
    },
    computed: {
      shouldShowShareBar: function () {
        return this.internalShowShareBar;
      },
      button: function () {
        var e, t, r;
        return (
          (null ==
          (r =
            null == (t = null == (e = this.uiConfig) ? void 0 : e.aiPluginPop)
              ? void 0
              : t.shareBar)
            ? void 0
            : r.button) ||
          "https://st.gtimg.com/design/0856d7629693950be27cad1e607ee843.png"
        );
      },
      icon: function () {
        var e, t, r;
        return (
          (null ==
          (r =
            null == (t = null == (e = this.uiConfig) ? void 0 : e.aiPluginPop)
              ? void 0
              : t.shareBar)
            ? void 0
            : r.icon) ||
          "https://st.gtimg.com/design/e81f904b96f4fb7fb98dd50eb80e03e8.png"
        );
      },
      background: function () {
        var e, t, r;
        return (
          (null ==
          (r =
            null == (t = null == (e = this.uiConfig) ? void 0 : e.aiPluginPop)
              ? void 0
              : t.shareBar)
            ? void 0
            : r.background) ||
          "https://st.gtimg.com/design/fb318541e72717d0556488a822a04a02.png"
        );
      },
      ribbon: function () {
        var e, t, r;
        return (
          (null ==
          (r =
            null == (t = null == (e = this.uiConfig) ? void 0 : e.aiPluginPop)
              ? void 0
              : t.shareBar)
            ? void 0
            : r.ribbon) ||
          "https://st.gtimg.com/design/8f5d4f71c2ecae5077c65d7f3d441bcf.png"
        );
      },
      title: function () {
        var e, t, r;
        return (
          (null ==
          (r =
            null == (t = null == (e = this.uiConfig) ? void 0 : e.aiPluginPop)
              ? void 0
              : t.shareBar)
            ? void 0
            : r.title) || "分享好友点赞赢大奖"
        );
      },
      subtitle: function () {
        var e, t, r;
        return (
          (null ==
          (r =
            null == (t = null == (e = this.uiConfig) ? void 0 : e.aiPluginPop)
              ? void 0
              : t.shareBar)
            ? void 0
            : r.subtitle) || "最高可获价值1888元大奖"
        );
      },
    },
    watch: {
      reqid: {
        handler: function (e) {
          e && this.callAIQShareAPI();
        },
        immediate: !0,
      },
    },
    created: function () {
      this.initWujiConfig();
    },
    beforeDestroy: function () {
      this.stopPolling();
    },
    methods: {
      initWujiConfig: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, i, o, a, u;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        r.Wuji.get({
                          appid: "act",
                          schemaid: "yy_activity_page_config",
                          filter: encodeURIComponent("act_id=thirteen_year"),
                        })
                      );
                    case 2:
                      if (((n = e.sent), (i = n.data), 200 == +n.code)) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      (o = (i && i[0]) || {}),
                        (a = o.ui_conf),
                        (u = void 0 === a ? "{}" : a),
                        (this.uiConfig = JSON.parse(u) || {});
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
      stopPolling: function () {
        (this.shouldStopPolling = !0),
          this.pollTimer &&
            (clearTimeout(this.pollTimer), (this.pollTimer = null));
      },
      callAIQShareAPI: function () {
        return t(
          this,
          null,
          e().mark(function i() {
            var o,
              a,
              u = this;
            return e().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      (this.shouldStopPolling = !1),
                        (o = Date.now()),
                        (a = function () {
                          return t(
                            u,
                            null,
                            e().mark(function t() {
                              var i;
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!this.shouldStopPolling) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return", !0);
                                      case 2:
                                        return (
                                          (e.prev = 2),
                                          (e.next = 5),
                                          n.callAIQShareAPI(this.reqid)
                                        );
                                      case 5:
                                        return (
                                          (i = e.sent),
                                          e.abrupt(
                                            "return",
                                            i && 0 === i.retcode && i.share_code
                                              ? ((this.shareData = {
                                                  retcode: i.retcode,
                                                  share_code: i.share_code,
                                                  question: i.question || "",
                                                  hot_score: i.hot_score || 0,
                                                  like_score: i.like_score || 0,
                                                  nickname: i.nickname || "",
                                                  headimgurl:
                                                    i.headimgurl || "",
                                                }),
                                                (this.internalShowShareBar =
                                                  !0),
                                                r.StockBridge.report(
                                                  "yy.thirteenyear.askai_share_bar_help_brow",
                                                  {
                                                    fchannel_id_fm_i:
                                                      "OUo00p000d452",
                                                  }
                                                ),
                                                !0)
                                              : Date.now() - o >= 2e4 &&
                                                  ((this.internalShowShareBar =
                                                    !1),
                                                  !0)
                                          )
                                        );
                                      case 9:
                                        return (
                                          (e.prev = 9),
                                          (e.t0 = e.catch(2)),
                                          e.abrupt(
                                            "return",
                                            Date.now() - o >= 2e4 &&
                                              ((this.internalShowShareBar = !1),
                                              !0)
                                          )
                                        );
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                this,
                                [[2, 9]]
                              );
                            })
                          );
                        }),
                        (function r() {
                          return t(
                            u,
                            null,
                            e().mark(function t() {
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!this.shouldStopPolling) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 2:
                                        return (e.next = 4), a();
                                      case 4:
                                        if (((e.t0 = e.sent), e.t0)) {
                                          e.next = 7;
                                          break;
                                        }
                                        e.t0 = this.shouldStopPolling;
                                      case 7:
                                        if (((e.t1 = e.t0), e.t1)) {
                                          e.next = 10;
                                          break;
                                        }
                                        this.pollTimer = setTimeout(r, 2e3);
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                        })();
                    case 3:
                    case "end":
                      return i.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      shareFriend: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, o, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        r.StockBridge.report(
                          "yy.thirteenyear.askai_share_bar_help_click"
                        ),
                        (e.next = 4),
                        i.platform.shareFriend(
                          this.shareData,
                          null ==
                            (a =
                              null ==
                              (o =
                                null == (n = this.uiConfig)
                                  ? void 0
                                  : n.aiPluginPop)
                                ? void 0
                                : o.shareBar)
                            ? void 0
                            : a.statData
                        )
                      );
                    case 4:
                      if (((e.t0 = e.sent), !e.t0)) {
                        e.next = 7;
                        break;
                      }
                      this.$emit("showBackpop");
                    case 7:
                      e.next = 12;
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t1 = e.catch(0)),
                        r.StockBridge.toast("系统繁忙，请稍后重试", "none", {
                          duration: 3e3,
                        });
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 9]]
            );
          })
        );
      },
    },
  };
Array || r.resolveComponent("shareButtonWrapper")();
var a = r._export_sfc(o, [
  [
    "render",
    function (e, t, n, i, o, a) {
      return r.e(
        { a: a.shouldShowShareBar },
        a.shouldShowShareBar
          ? {
              b: a.ribbon,
              c: a.icon,
              d: r.t(a.title),
              e: r.t(a.subtitle),
              f: a.button,
              g: r.o(function () {
                return a.shareFriend && a.shareFriend.apply(a, arguments);
              }, 4876),
              h: "url(".concat(a.background, ")"),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-40444cfa"],
]);
wx.createComponent(a);
