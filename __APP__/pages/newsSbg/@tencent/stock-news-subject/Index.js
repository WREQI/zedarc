var e = require("../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && l(e, n, t[n]);
    if (c) {
      var a,
        i = s(c(t));
      try {
        for (i.s(); !(a = i.n()).done; ) {
          n = a.value;
          p.call(t, n) && l(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  h = function (e, t) {
    return r(e, o(t));
  },
  f = function (e, t, n) {
    return new Promise(function (a, s) {
      var i = function (e) {
          try {
            o(n.next(e));
          } catch (e) {
            s(e);
          }
        },
        r = function (e) {
          try {
            o(n.throw(e));
          } catch (e) {
            s(e);
          }
        },
        o = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(i, r);
        };
      o((n = n.apply(e, t)).next());
    });
  },
  m = require("../stock-news-core/components/status/config.js"),
  w = require("../stock-news-core/utils/request/index.js"),
  _ = require("../stock-news-base/service/news/gray.js"),
  y = require("../stock-news-base/service/news/apis/queryThemeInfo.js"),
  b = require("../stock-news-core/utils/report.js"),
  g = require("../stock-news-core/utils/tools.js"),
  v = require("../stock-news-core/utils/bus.js"),
  k = require("../stock-news-core/utils/shy/index.js"),
  j = require("../stock-news-sdk/index.js"),
  q = require("../../../../common/vendor.js"),
  T = require("../stock-news-core/utils/force2https.js"),
  D = new ((function () {
    function e() {
      n(this, e);
    }
    return (
      a(e, [
        {
          key: "getTaskTicket",
          value: function (e) {
            return f(
              this,
              null,
              t().mark(function n() {
                var a;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a =
                            "https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=".concat(
                              e.act_actid
                            )),
                          t.abrupt(
                            "return",
                            new Promise(function (e, t) {
                              shy.request({
                                url: a,
                                method: "GET",
                                header: {
                                  "Content-Type":
                                    "application/x-www-form-urlencoded",
                                },
                                dataType: "json",
                                success: function (t) {
                                  e(t.data);
                                },
                                fail: function (e) {
                                  t(e);
                                },
                              });
                            })
                          )
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, n);
              })
            );
          },
        },
        {
          key: "doTaskStandard",
          value: function (e) {
            return f(
              this,
              null,
              t().mark(function n() {
                var a, s;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), this.getTaskTicket(e);
                        case 2:
                          if (!(a = t.sent) || !a.task_ticket) {
                            t.next = 6;
                            break;
                          }
                          return (
                            (s =
                              "https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid="
                                .concat(e.act_actid, "&tid=")
                                .concat(e.act_tid, "&id=")
                                .concat(e.act_id, "&task_ticket=")
                                .concat(a.task_ticket)),
                            t.abrupt(
                              "return",
                              new Promise(function (e, t) {
                                shy.request({
                                  url: s,
                                  method: "GET",
                                  header: {
                                    "Content-Type":
                                      "application/x-www-form-urlencoded",
                                  },
                                  dataType: "json",
                                  success: function (t) {
                                    var n = t.data || "";
                                    if (n && n.reward_type)
                                      if ("20001" === n.reward_type)
                                        e({
                                          reward_type: n.reward_type,
                                          cash_reward_value:
                                            "" + n.reward_value / 100,
                                        });
                                      else if ("20101" === n.reward_type)
                                        e({
                                          reward_type: n.reward_type,
                                          coin_reward_value: n.reward_value,
                                        });
                                      else if (
                                        parseInt(n.reward_type) > 20900 &&
                                        parseInt(n.reward_type) < 20999
                                      ) {
                                        var a = n.reward_package.filter(
                                            function (e) {
                                              return "20101" === e.reward_type;
                                            }
                                          )[0],
                                          s = n.reward_package.filter(function (
                                            e
                                          ) {
                                            return "20001" === e.reward_type;
                                          })[0];
                                        e({
                                          reward_type: n.reward_type,
                                          coin_reward_value: a.reward_value,
                                          cash_reward_value:
                                            "" + s.reward_value / 100,
                                        });
                                      }
                                  },
                                  fail: function (e) {
                                    t(e);
                                  },
                                });
                              })
                            )
                          );
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
          },
        },
        {
          key: "isTaskDone",
          value: function (e) {
            return f(
              this,
              null,
              t().mark(function n() {
                var a;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a =
                            "https://wzq.tenpay.com/cgi-bin/activity_task.fcgi"),
                          t.abrupt(
                            "return",
                            ((a = ""
                              .concat(a, "?action=taskstatus&channel=1&actid=")
                              .concat(e.act_actid, "&tid=")
                              .concat(e.act_tid, "&id=")
                              .concat(e.act_id)),
                            new Promise(function (e, t) {
                              shy.request({
                                url: a,
                                method: "GET",
                                header: {
                                  "Content-Type":
                                    "application/x-www-form-urlencoded",
                                },
                                dataType: "json",
                                success: function (t) {
                                  e(t.data);
                                },
                                fail: function (e) {
                                  t(e);
                                },
                              });
                            }))
                          )
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, n);
              })
            );
          },
        },
      ]),
      e
    );
  })())(),
  x = function () {
    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
      n[a] = arguments[a];
    return f(exports, [].concat(n), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return t().mark(function n() {
        var a, i, r, o, l, f, m, b, g, v;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (i = (a = e).news_id),
                  (r = a.module),
                  (o = a.reserve),
                  (l = a.zappid),
                  (f = a.sign),
                  (m = a.nonce),
                  (b = (function (e, t) {
                    var n = {};
                    for (var a in e)
                      u.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
                    if (null != e && c) {
                      var i,
                        r = s(c(e));
                      try {
                        for (r.s(); !(i = r.n()).done; ) {
                          a = i.value;
                          t.indexOf(a) < 0 && p.call(e, a) && (n[a] = e[a]);
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                    }
                    return n;
                  })(a, [
                    "news_id",
                    "module",
                    "reserve",
                    "zappid",
                    "sign",
                    "nonce",
                  ])),
                  (t.next = 3),
                  _.isNewsGrayUser("queryThemeInfo")
                );
              case 3:
                if (!t.sent) {
                  t.next = 5;
                  break;
                }
                return t.abrupt(
                  "return",
                  y.queryThemeInfo({
                    news_id: i || "",
                    module: null != r ? r : "0,2,3",
                  })
                );
              case 5:
                return (
                  "https://snp.tenpay.com/cgi-bin/snpgw_specialnews_zxg.fcgi",
                  (g = h(d({}, b), {
                    news_id: i || "",
                    reserve: null != o ? o : 1075843072,
                    module: null != r ? r : "0,2,3",
                    zappid: l,
                    sign: f,
                    nonce: m,
                  })),
                  (t.next = 9),
                  w.request(
                    "https://snp.tenpay.com/cgi-bin/snpgw_specialnews_zxg.fcgi",
                    g,
                    { method: "get" }
                  )
                );
              case 9:
                return (
                  (v = t.sent), t.abrupt("return", y.adaptQueryThemeInfoResp(v))
                );
              case 11:
              case "end":
                return t.stop();
            }
        }, n);
      })();
    });
  },
  O = j.sdk.hasBindBrokerAccount,
  S = 0,
  N = {
    s1EventName: "news.newsdetail.common_share_click_s1",
    s2EventName: "news.newsdetail.common_share_click_s2",
    def: "4003000030",
    wx: "4003000031",
    pyq: "4003000032",
    qq: "4003000033",
    qzone: "4003000034",
    gpq: "4003000035",
    link: "4003000036",
  },
  C = {
    options: { styleIsolation: "shared" },
    components: {
      NewsStatus: function () {
        return "../stock-news-core/components/status/index.js";
      },
      DownLoad: null,
      NewsList: function () {
        return "./componments/newsList.js";
      },
      TaskPop: function () {
        return "./componments/ActTask/TaskPop.js";
      },
      Directory: function () {
        return "./componments/directory.js";
      },
      Collect: function () {
        return "./componments/collect.js";
      },
    },
    inject: { useBroker: { value: "useBroker", default: null } },
    props: {
      params: {
        type: Object,
        default: function () {
          return {};
        },
      },
      readedNews: { type: String, default: "" },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
      isIphoneX: { type: Boolean, default: !1 },
      shareFlag: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        subjectData: "",
        downloadText: "下载",
        installed: !1,
        isShowTips: !1,
        errMsg: "请求出错",
        errorStatusType: "",
        title: "资讯专题title",
        showDown: !1,
        showTaskPop: !1,
        isConnected: !0,
        popOptions: {
          showPop: !1,
          pop_text: "阅读资讯3秒钟，可以获得奖励",
          arrow_color: "#3077EC",
        },
        query: this.$root.params || {},
        allNewsIds: [],
        isRefresh: !1,
        isApp: !1,
        safeBottom: window && window.__safeAreaBottom__,
        theme: "white",
        isMP: !0,
        isFullTeach: !1,
        accountOpenFlag: !1,
        isAndroid: /\bAndroid([^;]+)/.test(
          null == navigator ? void 0 : navigator.userAgent
        ),
        logoDark:
          "https://st.gtimg.com/design/742a918a488c6ba230900f633f71e094.png",
        logoLight:
          "https://st.gtimg.com/design/4633d096f5ae1eb58955820c250cd281.png",
      };
    },
    computed: {
      headerImgUrl: function () {
        var e, t;
        return T.forceHttpsAdvanced(
          (null == (t = null == (e = this.subjectData) ? void 0 : e.thumbnails)
            ? void 0
            : t.imgurl) ||
            "https://mat1.gtimg.com/finance/images/stock/p/news_subject/62582c766886bea0.png"
        );
      },
      isMacOrIPadApp: function () {
        return this.isApp && !1;
      },
      introStyle: function () {
        return this.isMacOrIPadApp
          ? { "min-width": "calc(100% - 0.8rem)" }
          : {};
      },
    },
    watch: {
      params: function () {
        this.init();
      },
    },
    beforeCreate: function () {
      k.shy.setTitle("资讯专题");
    },
    created: function () {
      return f(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      this.init(),
                      b.report("news_article_visited", {
                        newsid: this.params.id,
                      }),
                      this.reportRewardCourse(),
                      (e.next = 5),
                      O(this)
                    );
                  case 5:
                    this.accountOpenFlag = !e.sent;
                  case 6:
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
    mounted: function () {
      return f(
        this,
        null,
        t().mark(function e() {
          var n = this;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    this.doActTask(),
                      this.$nextTick(function () {
                        v.BUS.$on("accountDom", n.accountDomCallback);
                      }),
                      this.reportFullTeachPage();
                  case 1:
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
    beforeDestroy: function () {
      v.BUS.$off("accountDom", this.accountDomCallback);
    },
    methods: {
      accountDomCallback: function () {
        this.$emit("showMiniApply");
      },
      isInWeixin: function () {},
      setShareCheck: function () {},
      setShareInfo: function () {
        var t = (this.subjectData || {}).id_list,
          n = void 0 === t ? [] : t,
          a = {};
        n &&
          n.length &&
          n.some(function (t) {
            if (t.news_list && t.news_list.length) {
              var n = e(t.news_list, 1)[0];
              return (a = n), !0;
            }
          }),
          wxSdk.setShareInfo({
            title: "【专题】".concat(a && a.title) || "",
            desc: (a && a.abstract) || "",
            link: location.href,
            imgUrl: "https://wzq.tenpay.com/resources/images/zxg_logo.png",
          });
      },
      checkAppLogin: function () {
        return new Promise(function (e) {
          k.shy.getUserInfo(function (t) {
            e(t && "none" !== t.type);
          });
        });
      },
      getUserinfoKh: function () {
        var e = this;
        k.shy.getUserInfo(function (t) {
          t &&
            "none" !== t.type &&
            k.shy.request({
              url: "https://wzq.tenpay.com/cgi-bin/zt_getbound.fcgi",
              method: "GET",
              success: function (t) {
                var n = JSON.parse(t.data);
                n &&
                  "0" === n.retcode &&
                  (n.has_bind && n.has_bind.length > 0
                    ? ((e.accountOpenFlag = !1),
                      k.shy.setStorage("image_link_status", {
                        accountOpenFlag: e.accountOpenFlag,
                        time: new Date().getTime(),
                      }))
                    : (e.accountOpenFlag = !0));
              },
            });
        });
      },
      reportFullTeachPage: function () {
        this.isFullTeach;
      },
      handleScrolltoSection: function (e, t) {
        this.$refs.newsList.goto(e, t);
      },
      doActTask: function () {
        var e = this;
        if (this.params && this.params.taskInfo) {
          var n = decodeURIComponent(this.params.taskInfo),
            a = "string" == typeof n ? JSON.parse(n) : n;
          if (a.act_actid && a.act_tid && a.act_id) {
            var s = a.task_pop_config.find(function (e) {
              return (
                e.actid === a.act_actid &&
                e.tid === a.act_tid &&
                "news" === e.current_index
              );
            });
            (function (e) {
              return f(
                exports,
                null,
                t().mark(function n() {
                  var a;
                  return t().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((n.t0 = (function (e) {
                              return e.act_actid && e.act_id && e.act_tid;
                            })(e)),
                            !n.t0)
                          ) {
                            n.next = 5;
                            break;
                          }
                          return (
                            (n.next = 4),
                            (function (e) {
                              return f(
                                exports,
                                null,
                                t().mark(function n() {
                                  var a, s;
                                  return t().wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (
                                            ((a = 1),
                                            !(
                                              e.act_actid &&
                                              e.act_tid &&
                                              e.act_id
                                            ))
                                          ) {
                                            t.next = 6;
                                            break;
                                          }
                                          return (
                                            (t.next = 4),
                                            D.isTaskDone(e).catch(function (e) {
                                              shy.showToast(e && e.retmsg);
                                            })
                                          );
                                        case 4:
                                          (s = t.sent) &&
                                            s.done &&
                                            (a = parseInt(s.done || 1));
                                        case 6:
                                          return t.abrupt("return", a);
                                        case 7:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, n);
                                })
                              );
                            })(e)
                          );
                        case 4:
                          n.t0 = !n.sent;
                        case 5:
                          return (a = n.t0), n.abrupt("return", a);
                        case 7:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
            })({
              act_actid: a.act_actid,
              act_tid: a.act_tid,
              act_id: a.act_id,
            }).then(function (t) {
              t
                ? "28" === a.act_tid
                  ? (e.popOptions = Object.assign(e.popOptions, {
                      showPop: !0,
                      pop_text: s ? s.text : "",
                    }))
                  : ((e.popOptions = Object.assign(e.popOptions, {
                      showPop: !0,
                    })),
                    s &&
                      s.text &&
                      (e.popOptions = Object.assign(e.popOptions, {
                        pop_text: s.text,
                      })))
                : (e.popOptions = Object.assign(e.popOptions, { showPop: !1 }));
            });
          }
        }
      },
      reportRewardCourse: function () {
        "SN20220705100956845b075a" === this.params.id &&
          this.rewardWallstreet();
      },
      rewardWallstreet: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = d({}, e);
          return w.request(
            "https://zqact01.tenpay.com/cgi-bin/activity_tenth_birthday.fcgi",
            t,
            { method: "post", isShowToast: !1 }
          );
        })({ action: "reward_wallstreet" }, e)
          .then(function (e) {})
          .catch(function (e) {});
      },
      init: function () {
        var e = this,
          t = this.params,
          n = t.id,
          a = t.articleStyle,
          s = t.fchannel_id_o,
          i = n;
        if ((/^nes\w+/.test(i) && (i = i.substring(3)), i)) {
          a && "fullTeach" === a && (this.isFullTeach = !0);
          var r = g.md5(),
            o = r.zappid,
            c = r.sign,
            u = r.nonce;
          x({ news_id: i, zappid: o, sign: c, nonce: u })
            .then(function (t) {
              if (t && null != t.code && 0 != +t.code) throw t;
              e.handleDateReady(t),
                (e.isShowTips = !1),
                (e.errorStatusType = "");
            })
            .catch(function (t) {
              var n = t.retmsg,
                a = t.retcode,
                s = t.msg,
                i = t.code,
                r = t.originMsg;
              e.errMsg = n || s;
              var o = a || i,
                c = "859220007" === o || "859220001" === o;
              c && (e.errMsg = r || e.errMsg),
                (e.isShowTips = !0),
                (e.errorStatusType = c
                  ? m.NEWS_STATUS_TYPE.ERROR_DELETED
                  : m.NEWS_STATUS_TYPE.ERROR_NETWORK);
            }),
            "OdX00p000g046" === s && (this.showDown = !1);
        }
      },
      handleDateReady: function (e) {
        this.isRefresh &&
          (k.shy && k.shy.stopPullDownRefresh(), (this.isRefresh = !1)),
          (this.subjectData = this.setReadFlag(e.news_info)),
          this.$emit("loadedData", this.subjectData),
          this.subjectData &&
            Array.isArray(this.subjectData.id_list) &&
            (this.allNewsIds = this.subjectData.id_list
              .map(function (e) {
                return e.news_ids && Array.isArray(e.news_ids)
                  ? e.news_ids
                  : [];
              })
              .flat());
      },
      setHtmlClass: function (e) {
        var t = e.fontSize,
          n = void 0 === t ? "" : t,
          a = e.theme,
          s = void 0 === a ? "" : a,
          i = e.flucShowMode,
          r = void 0 === i ? "" : i;
        document
          .querySelector("html")
          .setAttribute("class", [n, s, r].join(" "));
      },
      initNative: function () {
        var e = this,
          t = this;
        k.shy.enablePullDownRefresh(!0, this),
          k.shy.onThemeChange(function (t) {
            (e.theme = t && t.theme), e.setHtmlClass(t);
          }),
          k.shy.onPullDownRefresh(function () {
            (e.isRefresh = !0), e.init();
          }),
          k.shy.getSystemInfo(function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            e.theme = t.theme;
          }),
          k.shy.getNetworkStatus(function (e) {
            t.isConnected = e && e.isConnected;
          }),
          k.shy.onNetworkStatusChange(function (e) {
            t.isConnected = e && e.isConnected;
          }),
          k.shy.onFunctionButtonClick(function (t) {
            var n = N.link,
              a = e.subjectData || {},
              s = a.id_list,
              i = void 0 === s ? [] : s,
              r = a.intro,
              o = a.news_id,
              c = {};
            i &&
              i.length &&
              i.some(function (e) {
                if (e.news_list && e.news_list.length)
                  return (c = e.news_list[0]), !0;
              });
            var u = {
                title: "【专题】".concat(c && c.title) || "",
                source:
                  r ||
                  (c && c.abstract) ||
                  (c && c.media_name + " " + c && c.time) ||
                  "",
                time: (c && c.time) || "",
                summary: (c && c.abstract) || "",
                url: "https://gu.qq.com/resources/shy/news/subject/index.html?#/index?id="
                  .concat(o, "&s=")
                  .concat(
                    "blue" == e.params.theme ? "g" : "b",
                    "&fchannel_id_fm="
                  )
                  .concat(n),
                newsId: o,
                isGpqNeedEdit: !0,
              },
              p = ["wx", "pyq", "qq", "qzone", "gpq"];
            e.subjectData &&
              1 === e.subjectData.comment_status &&
              (p = ["wx", "pyq", "qq", "qzone"]);
            var l = {
              to: p,
              function: ["copyLink"],
              type: "onlyEvent",
              params: u,
              callback: function () {},
            };
            l.params.url.includes("appVersion") ||
              (l.params.url = ""
                .concat(l.params.url, "&appVersion=")
                .concat(e.appVersion)),
              k.shy.openShareView(l);
            var d = {
              eventName: N.s1EventName,
              dataObject: { newsid: e.params.id, fchannel_id_fm: N.def },
            };
            b.report(d.eventName, d.dataObject);
          }),
          k.shy.onshareSelect(function (t) {
            var n,
              a = N.link,
              s = e.subjectData || {},
              i = s.id_list,
              r = void 0 === i ? [] : i,
              o = s.intro,
              c = s.news_id,
              u = {};
            r &&
              r.length &&
              r.some(function (e) {
                if (e.news_list && e.news_list.length)
                  return (u = e.news_list[0]), !0;
              });
            var p = t.channel;
            n =
              "wx" === p || "pyq" === p
                ? "https://wzq.tenpay.com/mp/v2/index.html#/information/subject?id="
                    .concat(c, "&s=")
                    .concat(
                      "blue" == e.params.theme ? "g" : "b",
                      "&fchannel_id_fm="
                    )
                    .concat(a, "&__share_flag__=1")
                : "https://gu.qq.com/resources/shy/news/subject/index.html?#/index?id="
                    .concat(c, "&s=")
                    .concat(
                      "blue" == e.params.theme ? "g" : "b",
                      "&fchannel_id_fm="
                    )
                    .concat(a);
            var l = {
              title: "【专题】".concat(u && u.title) || "",
              source:
                o ||
                (u && u.abstract) ||
                (u && u.media_name + " " + u && u.time) ||
                "",
              time: (u && u.time) || "",
              summary: (u && u.abstract) || "",
              url: n,
              newsId: c,
              isGpqNeedEdit: !0,
            };
            if ("wx" === p) {
              var d = u,
                h = d.media_name,
                f = d.publish_time,
                m = d.title;
              e.shareToMinigram(m, o, h, f, n, c);
            } else k.shy.share(p, "subject", l, function () {});
          }),
          k.shy.onPageVisible(function () {
            S = Date.now();
          }),
          k.shy.onPageInvisible(function () {
            k.shy.reportAnalytics({
              eventName: "news.subject.detail.stay_time",
              dataObject: {
                newsid: e.params.id,
                form: e.params.from || "",
                from: e.params.from || "",
                listType: e.params.listType || "",
                time: Date.now() - S,
              },
            }),
              k.shy.reportAnalytics({
                eventName: "news.unified.detail.stay_time",
                dataObject: {
                  newsid: e.params.id,
                  form: e.params.from || "",
                  from: e.params.from || "",
                  listType: e.params.listType || "",
                  time: Date.now() - S,
                  newsReportType: "subject",
                },
              });
          }),
          k.shy.onshareResult(function (t) {
            var n = N[t.channel],
              a = N.s2EventName,
              s = (e.subjectData || {}).news_id,
              i = {
                eventName: a,
                dataObject: {
                  newsid: void 0 === s ? "" : s,
                  fchannel_id_fm: n,
                  channel: t.channel,
                },
              };
            b.report(i.eventName, i.dataObject);
          }),
          k.shy.onShareViewCopyLinkButtonClick(function () {
            var n = N.link,
              a = (e.subjectData || {}).news_id,
              s = void 0 === a ? "" : a;
            k.shy.copyToPasteboard(
              "https://gu.qq.com/resources/shy/news/subject/index.html?#/index?id="
                .concat(s, "&s=")
                .concat(
                  "blue" === t.params.theme ? "g" : "b",
                  "&fchannel_id_fm="
                )
                .concat(n)
            ),
              k.shy.showToast("top", "链接复制成功", function () {});
            var i = {
              eventName: N.s2EventName,
              dataObject: { newsid: s, fchannel_id_fm: n },
            };
            b.report(i.eventName, i.dataObject);
          }),
          k.shy.on(
            "onGpqNeedEdit",
            function () {
              var n =
                  t.subjectData &&
                  t.subjectData.id_list[0] &&
                  t.subjectData.id_list[0].news_list[0],
                a = {
                  type: "share",
                  title: encodeURIComponent("【专题】".concat(n.title)),
                  desc: encodeURIComponent(e.subjectData.intro),
                  icon: encodeURIComponent(n.thumbnails_qqnews[0]),
                  appUrl: encodeURIComponent(
                    "qqstock://stockhybrid/com.tencent.shy.news_subject_zixuangu/index?id=".concat(
                      t.params.id
                    )
                  ),
                  tag: "",
                  imgs: "",
                  h5Url: encodeURIComponent(
                    "https://gu.qq.com/resources/shy/news/subject/index.html?#/index?id="
                      .concat(t.params.id, "&s=")
                      .concat("blue" === t.params.theme ? "g" : "b")
                  ),
                  source: "zhuanti",
                },
                s = Object.keys(a).map(function (e) {
                  return "".concat(e, "=").concat(a[e]);
                });
              k.shy.navigateTo({
                url: "qqstock://stockhybrid/com.tencent.shy.commentSystem/comEdit-comEdit?".concat(
                  s.join("&")
                ),
                type: "present",
              });
              var i = {
                eventName: N.s2EventName,
                dataObject: { fchannel_id_fm: N.gpq },
              };
              b.report(i.eventName, i.dataObject);
            },
            "news-subject"
          );
      },
      setReadFlag: function (e) {
        var t = this.readedNews;
        return (
          Array.isArray(e.id_list) &&
            e.id_list.map(function (e) {
              Array.isArray(e.news_list) &&
                e.news_list.map(function (e) {
                  e.isReaded = t.indexOf(e.news_id) >= 0;
                });
            }),
          e
        );
      },
      handleTapDetail: function (e) {
        var t = e.news_id,
          n = e.title,
          a = (e.articletype, e.video_info),
          s = this.allNewsIds.indexOf(t);
        this.allNewsIds.slice(s, this.allNewsIds.length).join(","),
          a && a.course_id,
          b.report("news.subject.detail.click", { id: t, title: n }),
          this.isEventItem(e),
          this.$emit("tapDetail", { data: e });
      },
      isEventItem: function (e) {
        return "SN202307271640248473decb" === e.news_id;
      },
      handleDownLoad: function (e) {
        e ? this.openApp() : this.installApp();
      },
      shareToMinigram: function (e, t, n, a, s, i) {
        var r = encodeURIComponent(
            JSON.stringify({ summary: t, source: n, publish_time: a })
          ),
          o = N.wx,
          c = encodeURIComponent(
            JSON.stringify({
              to: "wx",
              type: "miniProgram",
              userName: "gh_71365cb35ad5",
              path: "/pages/newsCon/topic/main?id="
                .concat(i, "&fchannel_id_fm=")
                .concat(o),
              url: s,
              title: e,
              addition_share_report_info: { fchannel_id_fm: o },
            })
          ),
          u = {
            url: "qqstock://SHY?info=".concat(
              encodeURIComponent(
                JSON.stringify({
                  p_key: "com.tencent.shy.share_snapshot",
                  p_url: "index?render=news&info="
                    .concat(r, "&share=")
                    .concat(c),
                  showNav: !1,
                })
              )
            ),
            height: 0,
            coverColor: "#00000000",
            backgroundColor: "#00000000",
          },
          p = "qqstock://SDModal?info=".concat(
            encodeURIComponent(JSON.stringify(u))
          );
        k.shy.navigateTo({ url: p }), this.shareStatic();
      },
    },
  };
Array ||
  (
    q.resolveComponent("Collect") +
    q.resolveComponent("NewsList") +
    q.resolveComponent("DownLoad") +
    q.resolveComponent("TaskPop") +
    q.resolveComponent("Directory") +
    q.resolveComponent("NewsStatus")
  )();
var I = q._export_sfc(C, [
  [
    "render",
    function (e, t, n, a, s, i) {
      return q.e(
        { a: s.subjectData && s.subjectData.news_id },
        s.subjectData && s.subjectData.news_id
          ? q.e(
              { b: i.isMacOrIPadApp },
              i.isMacOrIPadApp
                ? { c: i.headerImgUrl, d: i.headerImgUrl }
                : { e: q.n(s.isMP ? "isMp" : ""), f: i.headerImgUrl },
              { g: s.subjectData.intro },
              s.subjectData.intro
                ? {
                    h: q.n(s.isAndroid ? "android" : ""),
                    i: q.t(s.subjectData.intro),
                    j: q.s(i.introStyle),
                  }
                : {},
              { k: s.isApp },
              s.isApp ? { l: q.p({ "subject-data": s.subjectData }) } : {},
              {
                m: q.sr("newsList", "67949ce0-1"),
                n: q.o(i.handleTapDetail, 1420),
                o: q.p({
                  theme: s.theme,
                  "subject-data": s.subjectData,
                  params: n.params,
                  "wzq-config": n.wzqConfig,
                  "account-open-flag": s.accountOpenFlag,
                }),
                p: "black" === s.theme ? s.logoDark : s.logoLight,
                q: s.showDown,
              },
              s.showDown
                ? {
                    r: q.o(i.handleDownLoad, 1421),
                    s: q.p({ params: n.params }),
                  }
                : {},
              { t: s.showTaskPop },
              s.showTaskPop ? { v: q.p({ options: s.popOptions }) } : {},
              {
                w:
                  !s.isMP &&
                  s.subjectData &&
                  1 === Number(s.subjectData.show_index),
              },
              !s.isMP && s.subjectData && 1 === Number(s.subjectData.show_index)
                ? {
                    x: q.o(i.handleScrolltoSection, 1422),
                    y: q.p({
                      "subject-data": s.subjectData,
                      "wzq-config": n.wzqConfig,
                      "is-share": n.shareFlag,
                    }),
                  }
                : {},
              { z: s.showDown ? "50px" : "0px" }
            )
          : {},
        { A: s.isShowTips },
        s.isShowTips
          ? {
              B: q.o(function (e) {
                return i.init();
              }, 1423),
              C: q.p({ type: s.errorStatusType }),
            }
          : {},
        {
          D:
            s.subjectData &&
            s.subjectData.news_id &&
            (s.safeBottom || n.isIphoneX)
              ? 1
              : "",
        }
      );
    },
  ],
  ["__scopeId", "data-v-67949ce0"],
]);
wx.createComponent(I);
var P = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLW5ld3Mtc3ViamVjdC9JbmRleC52dWU =
  P),
  (exports.checkCollect = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = e.action,
      n = void 0 === t ? "checkNews" : t,
      a = e.method,
      s = void 0 === a ? "get" : a,
      i = e.newsid,
      r = e.type,
      o = e.title,
      c =
        "https://proxy.finance.qq.com/ifzqfinance/appstock/news/Likenews/".concat(
          n
        ),
      u = { newsid: i };
    return (
      "post" === s &&
        (u = h(d({}, u), {
          type: r,
          title: o,
          ctime: parseInt(Date.now() / 1e3),
        })),
      w.request(c, u, { method: s, isShowToast: "checkNews" !== n })
    );
  });
