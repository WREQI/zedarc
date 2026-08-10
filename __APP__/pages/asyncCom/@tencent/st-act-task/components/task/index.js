var t = require("../../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  s = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  h = function (t, e, n) {
    return e in t
      ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  l = function (t, e) {
    for (var n in e || (e = {})) u.call(e, n) && h(t, n, e[n]);
    if (c) {
      var i,
        a = r(c(e));
      try {
        for (a.s(); !(i = a.n()).done; ) {
          n = i.value;
          d.call(e, n) && h(t, n, e[n]);
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
    return t;
  },
  b = function (t, e) {
    return s(t, o(e));
  },
  p = function (t, e, n) {
    return new Promise(function (i, r) {
      var a = function (t) {
          try {
            o(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          try {
            o(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        o = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(a, s);
        };
      o((n = n.apply(t, e)).next());
    });
  },
  k = require("../../../../../../common/vendor.js"),
  f = require("../../utils/tidConf.js"),
  v = {
    2: {
      "/choose/index": { type: "guide", text: "成功添加热股，返回拆现金红包" },
      "/hot": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "添加一只热搜股票到自选，得".concat(e || "奖励");
        },
        event: "add_stock",
      },
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: function (t) {
          return t.invalid
            ? "已经在你的自选啦，去看看其他股票"
            : "加自选即完成任务";
        },
        selector: ".yy-task-add",
        delay: 0.5,
        event: "add_stock",
      },
    },
    3: {
      "/account/index": {
        type: "bubble",
        text: "点击进行设置",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
        direction: "left",
        left: "10px",
      },
      "/account/setting_subscribe": {
        type: "bubble",
        text: "点击开启大盘提醒",
        selector: ".yy-task-sti-subs-bubble",
        direction: "right",
        right: "20px",
        event: "open_service",
      },
    },
    4: {
      "/community/hotsubjects": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "点赞一条社区评论，得".concat(e || "奖励");
        },
        event: "like_post",
      },
    },
    5: {
      "/information/index": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "阅读一篇资讯，可获得".concat(e || "奖励");
        },
      },
      "/information/subject": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "阅读一篇资讯，可获得".concat(e || "奖励");
        },
      },
      "/information/detail": {
        type: "countdown",
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    11: {
      "/choose/hq": {
        type: "countdown",
        duration: 8,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    13: {
      "/account/index": {
        type: "bubble",
        text: "点击模拟炒股",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
        direction: "left",
        left: "10px",
      },
    },
    14: {
      "/strategy/index": {
        type: "guide",
        text: "查看选股卡页",
        event: "browse_page",
      },
    },
    21: {
      "/community/hotsubjects": {
        type: "bubble",
        text: "点击后成功发表一个帖子",
        selector: ".yy-task-community-tiezi",
        delay: 0.8,
        direction: "right",
        right: "20px",
        event: "add_post",
        fixed: !0,
      },
    },
    22: {
      type: "share",
      target: ["/trade/stock_detail.shtml"],
      "/search": {
        type: "bubble",
        text: "搜索或查看任意一只股票",
        direction: "left",
        left: "20px",
        selector: ".yy-task-choose-index-search",
      },
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: "分享到外部，可获得奖励",
        selector: ".yy-task-share-stock",
        delay: 0.5,
        fixed: !0,
        direction: "right",
        right: "20px",
      },
    },
    24: {
      "/strategy/index": {
        type: "bubble",
        text: "点击【股票扫雷】进入任务",
        directive: "saolei_index_task",
      },
      "/strategy/risk/index": {
        type: "bubble",
        text: "点击【开启通知】完成任务",
        directive: "saolei_risk_task",
      },
    },
    25: {
      "/community/hotsubjects": {
        type: "guide",
        text: "点击并成功发表评论",
        event: "add_comment",
      },
    },
    28: {
      type: "share",
      target: ["/information/detail"],
      "/information/index": { type: "guide", text: "分享一篇资讯，可获得奖励" },
      "/information/detail": {
        type: "bubble",
        text: "分享到外部，即可获取奖励",
        selector: ".yy-task-info-share-tip",
      },
    },
    29: {
      type: "share",
      target: ["/comment/detail/detail"],
      "/account/index": {
        type: "bubble",
        text: "点击进入社区广场页面",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
        direction: "left",
        left: "10px",
      },
      "/community/index": { type: "guide", text: "分享一个帖子，可获得奖励" },
      "/comment/detail/detail": {
        type: "bubble",
        text: "点击触发分享",
        selector: ".yy-task-comment-detail",
        fixed: !0,
        direction: "right",
        right: "10px",
      },
    },
    31: {
      "/account/index": {
        type: "bubble",
        text: "点击进入社区广场页面",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
        direction: "left",
        left: "10px",
      },
      "/community/index": {
        type: "countdown",
        duration: 5,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    44: {
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: "添加到自选，即可获得奖励",
        directive: "stock-detail-added",
      },
      "/trade/index_detail.shtml": {
        type: "bubble",
        text: "添加到自选，即可获得奖励",
        directive: "stock-detail-added",
      },
    },
    50: {
      type: "share",
      target: ["/information/detail"],
      "/information/index": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享资讯给好友，阅读后得".concat(e || "奖励");
        },
      },
      "/information/detail": {
        type: "bubble",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享资讯给好友，阅读后得".concat(e || "奖励");
        },
        selector: ".yy-task-information-share",
        immediate: !1,
        snackbar: { text: "被阅读后得奖励", button: { text: "更多福利" } },
        linkService: !0,
      },
    },
    51: {
      type: "share",
      target: ["/trade/stock_detail.shtml", "/trade/index_detail.shtml"],
      "/hot": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享个股给好友，阅读后得".concat(e || "奖励");
        },
      },
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享被阅读后，得".concat(e || "奖励");
        },
        selector: ".yy-task-share-stock",
        delay: 0.5,
        snackbar: { text: "被阅读后得奖励", button: { text: "更多福利" } },
        immediate: !1,
        linkService: !0,
      },
      "/trade/index_detail.shtml": {
        type: "bubble",
        text: function (t) {
          var e = t.rewardDesc;
          return "分享被阅读后，得".concat(e || "奖励");
        },
        selector: ".yy-task-share-stock",
        delay: 0.5,
        snackbar: { text: "被阅读后得奖励", button: { text: "更多福利" } },
        immediate: !1,
        linkService: !0,
      },
    },
    55: {
      "/hangqingxinzhai": {
        type: "countdown",
        duration: 8,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    56: {
      "/choose/hq": {
        type: "countdown",
        duration: 5,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    57: {
      "/account/index": {
        type: "bubble",
        text: "去【社区广场】完成任务",
        selector: ".yy-task-account-bubble",
        delay: 0.8,
      },
      "/community/index": {
        type: "guide",
        text: "点「关注」即可完成任务",
        event: "follow_user",
      },
      "/comment/detail/detail": { type: "bubble", text: "点击触发分享" },
    },
    58: {
      "/strategy/concept/index": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "点击任意题材热点阅读，得".concat(e || "奖励");
        },
      },
      "/strategy/concept/detail": {
        type: "countdown",
        duration: 5,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    59: {
      "/strategy/risk/index": {
        type: "countdown",
        duration: 5,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
      },
    },
    60: {
      "/strategy/system/index": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "策略个股加自选，得".concat(e || "奖励");
        },
        event: "add_stock",
      },
      "/strategy/system/detail": {
        type: "guide",
        text: function (t) {
          var e = t.rewardDesc;
          return "策略个股加自选，得".concat(e || "奖励");
        },
        event: "add_stock",
      },
      "/trade/stock_detail.shtml": {
        type: "bubble",
        text: function (t) {
          var e = t.invalid,
            n = t.rewardDesc;
          return e
            ? "已经在你的自选啦，去看看其他股票"
            : "股票加自选，得".concat(n || "奖励");
        },
        selector: ".yy-task-add",
        delay: 0.6,
        event: "add_stock",
        direction: "right",
        right: "20px",
      },
    },
    65: {
      "/account/setting_subscribe": {
        type: "bubble",
        text: function (t) {
          var e = t.rewardDesc;
          return "订阅微证券早报，得".concat(e || "奖励");
        },
        selector: ".yy-task-bubble-gszb",
        delay: 0.5,
        direction: "right",
        right: "20px",
        event: "open_service",
      },
    },
    67: {
      "/information/index": {
        type: "countdown",
        duration: 10,
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
        paused: !0,
      },
      "/information/videoDetail": {
        type: "countdown",
        text: function (t) {
          var e = t.rewardDesc;
          return "" + (e ? "+".concat(e) : "得奖励");
        },
        paused: !0,
      },
    },
  },
  m = {
    logo: "https://wzq.gtimg.com/resource/images/66005d6da694ff953b1e2e6f084f5d4a.png",
    countdown: { logo: "https://wzq.gtimg.com/image/activity/icon-count.png" },
    snackbar: {
      button: { text: "更多福利" },
      text: function (t) {
        var e = t.reward_desc,
          n = t.rewardDesc;
        return '已获得<span style="color:#ff891e">'.concat(
          e || n || "奖励",
          "</span>"
        );
      },
      duration: 3,
    },
    guide: { duration: 1.2 },
    bubble: { duration: 3, closable: !0 },
  },
  g = {
    default: m,
    1124: b(l({}, m), {
      snackbar: {
        button: { text: "返回活动" },
        text: function (t) {
          var e = t.reward_desc;
          return '已获得<span style="color:#ff891e">'.concat(
            e || "奖励",
            "</span>"
          );
        },
        duration: 5,
      },
    }),
    1134: b(l({}, m), {
      snackbar: {
        button: { text: "返回活动" },
        text: function (t) {
          var e = t.reward_desc;
          return '已获得<span style="color:#ff891e">'.concat(
            e || "奖励",
            "</span>"
          );
        },
        duration: 5,
      },
    }),
  },
  x =
    "mp" === k.StockBridge.ENV
      ? "https://wzq.tenpay.com/cgi-bin/"
      : "".concat(location.origin, "/cgi-bin/"),
  y = "activity_share.fcgi",
  w = function () {
    return "".concat(x, "activity_task.fcgi?t=").concat(new Date().getTime());
  },
  _ = new ((function () {
    function t() {
      n(this, t);
    }
    return (
      i(t, [
        {
          key: "isTaskDone",
          value: function (t) {
            return p(this, arguments, function (t) {
              var n = t.actid,
                i = t.id,
                r = t.tid;
              return e().mark(function t() {
                return e().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          k.StockBridge.request(w(), k.RequestTypeEnum.POST, {
                            action: "taskstatus",
                            actid: n,
                            id: i,
                            tid: r,
                          })
                            .then(function (t) {
                              return t;
                            })
                            .catch(function (t) {
                              return t;
                            })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })();
            });
          },
        },
        {
          key: "getTicket",
          value: function (t) {
            return p(this, arguments, function (t) {
              var n = t.actid;
              return e().mark(function t() {
                return e().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          k.StockBridge.request(w(), k.RequestTypeEnum.POST, {
                            action: "taskticket",
                            actid: n,
                          })
                            .then(function (t) {
                              return t;
                            })
                            .catch(function (t) {
                              return t;
                            })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })();
            });
          },
        },
        {
          key: "doTask",
          value: function (t) {
            return p(this, arguments, function (t) {
              var n = t.actid,
                i = t.tid,
                r = t.id,
                a = t.task_ticket;
              return e().mark(function t() {
                return e().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          k.StockBridge.request(w(), k.RequestTypeEnum.POST, {
                            action: "taskdone",
                            task_ticket: a,
                            actid: n,
                            tid: i,
                            id: r,
                          })
                            .then(function (t) {
                              return t;
                            })
                            .catch(function (t) {
                              return t;
                            })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })();
            });
          },
        },
        {
          key: "getShareCode",
          value: function (t) {
            return p(this, arguments, function (t) {
              var n = t.tid,
                i = t.actid,
                r = t.id;
              return e().mark(function t() {
                return e().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          k.StockBridge.request(x + y, k.RequestTypeEnum.POST, {
                            action: "query_share_code",
                            share_type: "task_".concat(n, "_").concat(i),
                            extra_info: r || "",
                          })
                            .then(function (t) {
                              return t;
                            })
                            .catch(function (t) {
                              return t;
                            })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })();
            });
          },
        },
        {
          key: "glanceRecord",
          value: function (t) {
            return p(this, arguments, function (t) {
              var n = t.share_code,
                i = t.share_type,
                r = t._share_source_,
                a = void 0 === r ? "" : r;
              return e().mark(function t() {
                var r;
                return e().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = {
                            action: "share_code_info",
                            share_type: i,
                            share_code: n,
                            task_source: "appmessage" === a ? 0 : 1,
                          }),
                          t.abrupt(
                            "return",
                            ("" === a && delete r.task_source,
                            k.StockBridge.request(
                              x + y,
                              k.RequestTypeEnum.POST,
                              l({}, r)
                            )
                              .then(function (t) {
                                return t;
                              })
                              .catch(function (t) {
                                return t;
                              }))
                          )
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })();
            });
          },
        },
      ]),
      t
    );
  })())(),
  T = function (t, e, n) {
    t.has(e) && t.delete(e), n && t.append(e, n);
  },
  S = function (t, e) {
    var n = t.match(/(\?|#[^\?]*\?*|)(.*)/);
    if (!n) return t;
    var i = new URLSearchParams(n[2]);
    if (Array.isArray(e))
      e.forEach(function (t) {
        T(i, t);
      });
    else {
      var r = Object.keys(e);
      Array.isArray(r) &&
        r.forEach(function (t) {
          T(i, t, e[t]);
        });
    }
    return "".concat(n[1]).concat(i.toString());
  },
  C = function (t) {
    var e = t.url,
      n = t.rmParams,
      i = void 0 === n ? [] : n,
      r = t.addParams;
    if (e)
      return (
        (e = (function (t) {
          var e = document.createElement("a");
          return (e.href = t), e;
        })(e)),
        i.length &&
          (e.search && (e.search = S(e.search, i)),
          e.hash && (e.hash = S(e.hash, i))),
        r && (e.hash ? (e.hash = S(e.hash, r)) : (e.search = S(e.search, r))),
        ""
          .concat(e.protocol, "//")
          .concat(e.host)
          .concat(e.pathname)
          .concat(e.search)
          .concat(e.hash)
      );
  },
  D = "https://".concat(
    "mp" !== k.StockBridge.ENV ? location.host : "wzq.tenpay.com",
    "/"
  );
var B = { headers: { "Content-Type": "application/json" } },
  q = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return k.StockBridge.request(
      D + "svr/activity/simple_activity/new_customer_taskdone",
      k.RequestTypeEnum.POST,
      b(l({}, t), { scene: "" }),
      B
    )
      .then(function (t) {
        return t;
      })
      .catch(function (t) {
        return t;
      });
  },
  O = k._default().env.IS_PCWEIXIN,
  E = "mp" === k.StockBridge.ENV ? { IS_MINA: !0 } : k._default().env.IS_MINA,
  P = "mp" === k.StockBridge.ENV ? "mp" : "wx",
  N = [
    "add_stock",
    "add_post",
    "add_comment",
    "like_post",
    "follow_user",
    "open_service",
    "browse_page",
    "guess_change",
  ],
  j = {
    components: {
      CountDown: function () {
        return "../../../stockfe-act-ui/h5/count-down/index.js";
      },
      Guide: function () {
        return "../../../stockfe-act-ui/h5/guide/index.js";
      },
      Bubble: function () {
        return "../../../stockfe-act-ui/mp/bubble/index.js";
      },
      Snackbar: function () {
        return "../../../stockfe-act-ui/h5/snackbar/index.js";
      },
      NewBubble: function () {
        return "./newBubble.js";
      },
      NewGuide: function () {
        return "./newGuide.js";
      },
      DonePop: function () {
        return "./donePop.js";
      },
    },
    inject: { stockBridge: { default: function () {} } },
    props: {
      task: { type: Object, default: function () {} },
      judgePath: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        mpTask: "",
        taskAward: null,
        countdown: {},
        snackbar: {},
        guide: {},
        newguide: {},
        toast: {},
        bubble: {},
        newbubble: {},
        donepop: {},
        isMina: E,
        isPCMina: E && O,
        banner: {},
        appName: "",
      };
    },
    options: { styleIsolation: "shared" },
    computed: {
      curTask: function () {
        return this.mpTask;
      },
    },
    watch: {
      curTask: {
        immediate: !0,
        deep: !0,
        handler: function (t) {
          return p(
            this,
            null,
            e().mark(function n() {
              var i, r;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!t) {
                          e.next = 14;
                          break;
                        }
                        return this.initPath(), (e.next = 4), this.loadConfs();
                      case 4:
                        if (
                          ((this.options = this.getOption()),
                          this.hideNewbubble(),
                          this.act_plan && this.updateOption(),
                          (null == (i = this.curTask) ? void 0 : i.actid) &&
                            (this.uiConf = g[this.curTask.actid] || g.default),
                          !this.options)
                        ) {
                          e.next = 13;
                          break;
                        }
                        (r = this.options.delay),
                          (this.done = !1),
                          this.updateRender(r),
                          (e.next = 14);
                        break;
                      case 13:
                        this.hide();
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                this
              );
            })
          );
        },
      },
    },
    created: function () {
      (this.options = {}),
        (this.uiConf = {}),
        (this.done = !1),
        (this.renderTimer = null),
        (this.snackbarTimer = null),
        (this.timeout = null),
        (this.loadedConfs = !1),
        (this.taskOptionsArr = null),
        (this.allConfs = v),
        (this.fristRender = !0),
        (this.act_plan = "");
    },
    mounted: function () {
      return p(
        this,
        null,
        e().mark(function t() {
          var n = this;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      this.initPath(),
                      this.initParams(),
                      (t.next = 4),
                      this.loadConfs()
                    );
                  case 4:
                    setTimeout(function () {
                      n.initShareConfig();
                    }, 800),
                      this.stockBridge.busOn(
                        "growth-user.behavior.union",
                        this.userBehaviorDone
                      );
                  case 6:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    destroyed: function () {
      this.stockBridge.busOff("growth-user.behavior.union");
    },
    methods: {
      customDrawCash: function (t) {
        return p(
          this,
          null,
          e().mark(function n() {
            var i, r, a, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = ""),
                        (r = ""),
                        (e.next = 3),
                        (s = t),
                        k.StockBridge.request(
                          D + "svr/activity/simple_activity/exchange_cash",
                          k.RequestTypeEnum.POST,
                          b(l({}, s), { scene: "" }),
                          B
                        )
                          .then(function (t) {
                            return t;
                          })
                          .catch(function (t) {
                            return t;
                          })
                      );
                    case 3:
                      0 === (a = e.sent).retcode
                        ? ((i = "提现成功"),
                          (r = "".concat(
                            a.reward_desc,
                            "现金将在24小时内发放到微信零钱"
                          )),
                          this.stockBridge.busEmit(
                            "growth-task-ball.update.homedata",
                            t.package_name
                          ))
                        : ((i = "提现失败"), (r = a.retmsg)),
                        this.stockBridge.modal({
                          title: i,
                          content: r,
                          confirmText: "我知道了",
                          showCancel: !1,
                        });
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      userBehaviorDone: function (t) {
        return p(
          this,
          null,
          e().mark(function n() {
            var i,
              r,
              a,
              s,
              o,
              c,
              u,
              d,
              h,
              l,
              b,
              p,
              k,
              f,
              v,
              m,
              g,
              x,
              y,
              w,
              _,
              T,
              S,
              C,
              D,
              B,
              O,
              E,
              P,
              j,
              A,
              R,
              I,
              z = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      (x = t.type),
                        (y = t.event),
                        (w = t.state),
                        (_ = t.paused),
                        (T = t.data),
                        t.event_tid,
                        (e.t0 = x),
                        (e.next =
                          "show" === e.t0
                            ? 6
                            : "click" === e.t0
                            ? 8
                            : "share" === e.t0
                            ? 42
                            : "browse" === e.t0
                            ? 64
                            : "info" === e.t0
                            ? 87
                            : "http" === e.t0
                            ? 89
                            : 103);
                      break;
                    case 6:
                      return (
                        (this.countdown = {}),
                        (this.snackbar = {}),
                        (this.guide = {}),
                        (this.bubble = {}),
                        this.initPath(),
                        this.initParams(),
                        e.abrupt("break", 103)
                      );
                    case 8:
                      if (this.options) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return");
                    case 10:
                      if (!(null == (i = this.options) ? void 0 : i.showpop)) {
                        e.next = 26;
                        break;
                      }
                      if (!this.options || y !== this.options.event) {
                        e.next = 24;
                        break;
                      }
                      if (((e.prev = 12), !this.done)) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return");
                    case 15:
                      return (
                        (e.next = 17),
                        q({
                          tid: null == (r = this.curTask) ? void 0 : r.tid,
                          id: null == (a = this.curTask) ? void 0 : a.id,
                        })
                      );
                    case 17:
                      (S = e.sent),
                        this.hide(),
                        this.stockBridge.report(
                          "yy.custom_task.task_done.".concat(
                            null == (s = this.curTask) ? void 0 : s.tid
                          )
                        ),
                        this.stockBridge.busEmit(
                          "growth-task-ball.update.homedata",
                          JSON.parse(JSON.stringify(S))
                        ),
                        (this.done = !0),
                        this.stockBridge.busEmit("growth-custom-task-on", {}),
                        (!(null == (o = this.options) ? void 0 : o.subscribe) ||
                          ((null == (c = this.options)
                            ? void 0
                            : c.subscribe) &&
                            S.subscribe_status)) &&
                          this.showDonePop(S),
                        (e.next = 24);
                      break;
                    case 21:
                      (e.prev = 21),
                        (e.t1 = e.catch(12)),
                        this.stockBridge.busEmit("growth-yy.task.error", e.t1),
                        this.hide();
                    case 24:
                      e.next = 41;
                      break;
                    case 26:
                      if ("watch_vedio" !== y) {
                        e.next = 30;
                        break;
                      }
                      (this.countdown.paused = _), (e.next = 41);
                      break;
                    case 30:
                      if (
                        !N.includes(y) ||
                        !this.options ||
                        y !== this.options.event
                      ) {
                        e.next = 41;
                        break;
                      }
                      return (
                        (e.prev = 31),
                        (e.next = 34),
                        this.taskDone(this.curTask)
                      );
                    case 34:
                      (C = e.sent),
                        this.hide(),
                        this.$nextTick(function () {
                          z.showSnackbar(C);
                        }),
                        (e.next = 41);
                      break;
                    case 38:
                      (e.prev = 38),
                        (e.t2 = e.catch(31)),
                        this.stockBridge.busEmit("growth-yy.task.error", e.t2),
                        this.hide();
                    case 41:
                      return e.abrupt("break", 103);
                    case 42:
                      if (
                        ((D = this.curTask.tid),
                        !(
                          (B = this.allConfs[D]) &&
                          "share" === B.type &&
                          B.target &&
                          B.target.includes(this.path)
                        ))
                      ) {
                        e.next = 63;
                        break;
                      }
                      if (
                        ((e.prev = 44), (O = null), !this.checkDirectAward())
                      ) {
                        e.next = 52;
                        break;
                      }
                      return (e.next = 49), this.taskDone(this.curTask);
                    case 49:
                      (e.t3 = e.sent), (e.next = 53);
                      break;
                    case 52:
                      e.t3 = {};
                    case 53:
                      (O = e.t3),
                        this.hide(),
                        this.act_plan && this.closeBanner("taskSuccess"),
                        (null == (u = B[this.path]) ? void 0 : u.snackbar) &&
                          this.showSnackbar(O),
                        (null == (d = B[this.path]) ? void 0 : d.newguide) &&
                          this.showNewGuide(
                            null == (h = B[this.path]) ? void 0 : h.newguide
                          ),
                        (e.next = 63);
                      break;
                    case 60:
                      (e.prev = 60),
                        (e.t4 = e.catch(44)),
                        this.stockBridge.busEmit("growth-yy.task.error", e.t4);
                    case 63:
                      return e.abrupt("break", 103);
                    case 64:
                      if ("timeend" !== y) {
                        e.next = 86;
                        break;
                      }
                      if (
                        ((e.prev = 65),
                        !(null == (l = this.options) ? void 0 : l.showpop))
                      ) {
                        e.next = 75;
                        break;
                      }
                      if (!this.done) {
                        e.next = 69;
                        break;
                      }
                      return e.abrupt("return");
                    case 69:
                      return (
                        (e.next = 71),
                        q({
                          tid: null == (b = this.curTask) ? void 0 : b.tid,
                          id: null == (p = this.curTask) ? void 0 : p.id,
                        })
                      );
                    case 71:
                      (E = e.sent),
                        this.hide(),
                        this.stockBridge.report(
                          "yy.custom_task.task_done.".concat(
                            null == (k = this.curTask) ? void 0 : k.tid
                          )
                        ),
                        this.stockBridge.busEmit(
                          "growth-task-ball.update.homedata",
                          JSON.parse(JSON.stringify(E))
                        ),
                        (this.done = !0),
                        this.stockBridge.busEmit("growth-custom-task-on", {}),
                        (!(null == (f = this.options) ? void 0 : f.subscribe) ||
                          ((null == (v = this.options)
                            ? void 0
                            : v.subscribe) &&
                            E.subscribe_status)) &&
                          this.showDonePop(E),
                        (e.next = 81);
                      break;
                    case 75:
                      return (e.next = 77), this.taskDone(this.curTask);
                    case 77:
                      (P = e.sent),
                        (this.taskAward = P.reward_desc || ""),
                        (j = this.curTask.tid),
                        (A = this.allConfs[j]) &&
                          A[this.path] &&
                          (null == (m = A[this.path])
                            ? void 0
                            : m.toast_text) &&
                          ((this.guide = {
                            text:
                              null == (g = A[this.path])
                                ? void 0
                                : g.toast_text,
                            duration: 3,
                            visible: !0,
                            guideid: "guide--".concat(j),
                          }),
                          this.hideCountdown());
                    case 81:
                      e.next = 86;
                      break;
                    case 83:
                      (e.prev = 83),
                        (e.t5 = e.catch(65)),
                        this.stockBridge.busEmit("growth-yy.task.error", e.t5);
                    case 86:
                      return e.abrupt("break", 103);
                    case 87:
                      return (
                        "add_stock" === y &&
                          this.options &&
                          (this.options.invalid = w),
                        e.abrupt("break", 103)
                      );
                    case 89:
                      if (this.options) {
                        e.next = 91;
                        break;
                      }
                      return e.abrupt("return");
                    case 91:
                      if (
                        !(R = this.options.fn) ||
                        "function" != typeof R ||
                        !R(T)
                      ) {
                        e.next = 103;
                        break;
                      }
                      return (
                        (e.prev = 93),
                        (e.next = 96),
                        this.taskDone(this.curTask)
                      );
                    case 96:
                      (I = e.sent),
                        this.hide(),
                        this.$nextTick(function () {
                          z.showSnackbar(I);
                        }),
                        (e.next = 103);
                      break;
                    case 100:
                      (e.prev = 100),
                        (e.t6 = e.catch(93)),
                        this.stockBridge.busEmit("growth-yy.task.error", e.t6);
                    case 103:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this,
              [
                [12, 21],
                [31, 38],
                [44, 60],
                [65, 83],
                [93, 100],
              ]
            );
          })
        );
      },
      showDonePop: function (t) {
        return p(
          this,
          null,
          e().mark(function n() {
            var i = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      try {
                        (this.curTask.tid === f.TID.CUSTOM_NEW_ADDREMAIND &&
                          0 === t.subscribe_status) ||
                          this.$nextTick(function () {
                            i.stockBridge.busEmit(
                              "growth-task-ball-taskdonePopStatus",
                              !0
                            ),
                              (i.donepop = b(l({}, t), { visible: !0 }));
                          });
                      } catch (t) {
                        this.stockBridge.busEmit("growth-yy.task.error", t),
                          this.hide();
                      }
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      taskRealShow: function () {
        var t,
          e = this.stockBridge.getSession("growth-custom-task") || {};
        e &&
          "custom" === e.tasktype &&
          (null == e ? void 0 : e.tid) ==
            (null == (t = this.curTask) ? void 0 : t.tid) &&
          (e.target.push(this.path),
          this.stockBridge.setSession(
            "growth-custom-task",
            b(l({}, e), { target: e.target })
          ));
      },
      initPath: function () {
        var t = getCurrentPages(),
          e = t[t.length - 1] || {};
        this.path = e.route;
      },
      initParams: function () {
        this.appName = getApp().globalData.APPNAME;
        var t = getCurrentPages(),
          e = t[t.length - 1] || {},
          n = e.options || {},
          i = n.act_actid,
          r = n.act_id,
          a = n.act_tid,
          s = n.act_url;
        i && a
          ? ((this.mpTask = {
              actid: i,
              tid: a,
              id: r,
              url: s,
              done: !1,
              visible: !0,
            }),
            (getApp().globalData.taskConfig = this.mpTask))
          : (this.mpTask = getApp().globalData.taskConfig || "");
        var o = e.options || {},
          c = o.share_code,
          u = o.share_type;
        if (c && u && u.includes("task_")) {
          (!["wzq", "zxg"].includes(this.appName) &&
            [
              "pages/newsCon/newsDetail/main",
              "pages/quote/quote",
              "pages/quote/quote_zs",
            ].includes(this.path)) ||
            _.glanceRecord(e.options);
          var d = u.split("_");
          this.stockBridge.report("yy.activity.share_task_brow", {
            actid: d && d[2],
            tid: d && d[1],
          });
        }
      },
      initShareConfig: function () {
        var t,
          e,
          n,
          i = null == (t = this.curTask) ? void 0 : t.tid,
          r = this.allConfs[i];
        r &&
          r[this.path] &&
          (null == (e = r[this.path]) ? void 0 : e.share_title) &&
          (null == (n = r[this.path]) ? void 0 : n.immediate) &&
          this.stockBridge.busEmit("growth-yy.task.shareConfig", r[this.path]);
      },
      loadConfs: function () {
        return p(
          this,
          null,
          e().mark(function t() {
            var n,
              i,
              r = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.loadedConfs && Promise.resolve(),
                        (t.next = 3),
                        k.Wuji.get({
                          appid: "act",
                          schemaid: "yy_tasks",
                          filter: encodeURIComponent(
                            "platform='".concat(P, "'")
                          ),
                          size: "total",
                        })
                      );
                    case 3:
                      (n = t.sent), (i = {});
                      try {
                        n.data.forEach(function (t) {
                          var e = JSON.parse(t.confs);
                          if (t.shell) {
                            if (t.shell) {
                              var n =
                                "mp" !== r.stockBridge.ENV &&
                                k._default().env.IS_LITE_MODE;
                              n && "wzqlight" === t.shell
                                ? (i[+t.task_id] = e)
                                : n ||
                                  "stock" !== t.shell ||
                                  (i[+t.task_id] = e);
                            }
                          } else i[+t.task_id] = e;
                        }),
                          (this.allConfs = i);
                      } catch (t) {
                        this.allConfs = v;
                      }
                      this.loadedConfs = !0;
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      checkDirectAward: function () {
        return !1 !== this.options.immediate;
      },
      queryRemind: function () {
        return p(
          this,
          null,
          e().mark(function t() {
            var n, i, r, a, s;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = null == (n = this.$route) ? void 0 : n.query),
                        (r = i.market),
                        (a = i.scode),
                        (t.next = 5),
                        (function () {
                          var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          return k.StockBridge.request(
                            D + "cgi-bin/querypriceremind.fcgi",
                            k.RequestTypeEnum.POST,
                            l({}, t)
                          )
                            .then(function (t) {
                              var e;
                              return (null == (e = t.qlist) ? void 0 : e.length)
                                ? 1
                                : 0;
                            })
                            .catch(function (t) {
                              return t;
                            });
                        })({ market: r, scode: a })
                      );
                    case 5:
                      return (s = t.sent), t.abrupt("return", s);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      render: function () {
        return p(
          this,
          null,
          e().mark(function t() {
            var n,
              i,
              r,
              a,
              s,
              o,
              c,
              u,
              d,
              h,
              v,
              m,
              g,
              x,
              y,
              w,
              T,
              S,
              C,
              q,
              O,
              E,
              P,
              N,
              j,
              A,
              R,
              I,
              z,
              M,
              L,
              G,
              U,
              V,
              W = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.curTask || !this.curTask.done) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      if (
                        ((u = this.options),
                        (d = u.type),
                        (h = u.duration),
                        (v = u.selector),
                        (m = u.invalid),
                        (g = u.paused),
                        (x = u.direction),
                        (y = u.linkService),
                        u.fixed,
                        (w = u.bubbleid),
                        (T = this.uiConf),
                        (S = T.logo),
                        (C = T.countdown),
                        (q = T.bubble),
                        (O = q.closable),
                        (E = q.duration),
                        (P = T.guide),
                        (N = 0),
                        (j = ""),
                        (A =
                          this.stockBridge.getSession("growth-custom-task") ||
                          {}),
                        "custom" !==
                          (null == (n = this.curTask) ? void 0 : n.tasktype))
                      ) {
                        t.next = 32;
                        break;
                      }
                      return (
                        (t.next = 8),
                        k.StockBridge.request(
                          D +
                            "svr/activity/simple_activity/new_customer_scene_query",
                          k.RequestTypeEnum.POST,
                          l({}, { page_scene: "page_level", scene: "" }),
                          B
                        )
                          .then(function (t) {
                            return t;
                          })
                          .catch(function (t) {
                            return t;
                          })
                      );
                    case 8:
                      if (1 === (R = t.sent).status) {
                        t.next = 13;
                        break;
                      }
                      (N = 1), (t.next = 30);
                      break;
                    case 13:
                      if (
                        ((I = null == (i = R.task_list[0]) ? void 0 : i.tasks),
                        (z = null == (r = R.task_list[1]) ? void 0 : r.tasks),
                        (M = I.concat(z)),
                        (N =
                          null == M
                            ? void 0
                            : M.filter(function (t) {
                                return t.tid === +W.curTask.tid;
                              })[0].status),
                        (t.t0 = N),
                        t.t0)
                      ) {
                        t.next = 30;
                        break;
                      }
                      if (
                        !(
                          "custom" === A.tasktype &&
                          (null == A ? void 0 : A.tid) ===
                            (null == (a = this.curTask) ? void 0 : a.tid) &&
                          (null == (s = null == A ? void 0 : A.target)
                            ? void 0
                            : s.indexOf(this.path)) >= 0
                        )
                      ) {
                        t.next = 21;
                        break;
                      }
                      (N = 1), (t.next = 30);
                      break;
                    case 21:
                      if (this.curTask.tid !== f.TID.CUSTOM_NEW_ADDREMAIND) {
                        t.next = 29;
                        break;
                      }
                      if (((t.t1 = "/quote/detail" === this.path), !t.t1)) {
                        t.next = 27;
                        break;
                      }
                      return (t.next = 26), this.queryRemind();
                    case 26:
                      N = t.sent;
                    case 27:
                      t.next = 30;
                      break;
                    case 29:
                      this.curTask.tid === f.TID.CUSTOM_PRO_ADDPLATE &&
                        "/quote/detail" === this.path &&
                        (N =
                          "p" ===
                          (null == (o = this.$route.query) ? void 0 : o.market)
                            ? 0
                            : 1);
                    case 30:
                      t.next = 38;
                      break;
                    case 32:
                      return (t.next = 34), _.isTaskDone(this.curTask);
                    case 34:
                      (L = t.sent),
                        (G = L.done),
                        (U = L.reward_desc),
                        (N = G),
                        (j = U);
                    case 38:
                      (V = this.options.text),
                        this.options,
                        this.hide(d),
                        (V = this.makeText(V, { invalid: m, rewardDesc: j })),
                        1 != +N &&
                          setTimeout(
                            function () {
                              return p(
                                W,
                                null,
                                e().mark(function t() {
                                  var n,
                                    i,
                                    r,
                                    a,
                                    s,
                                    o,
                                    c,
                                    u,
                                    p,
                                    k,
                                    f,
                                    m,
                                    T,
                                    D,
                                    B = this;
                                  return e().wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            if (
                                              "custom" !== this.curTask.tasktype
                                            ) {
                                              t.next = 15;
                                              break;
                                            }
                                            if (
                                              !(null == (n = this.options)
                                                ? void 0
                                                : n.scroll)
                                            ) {
                                              t.next = 14;
                                              break;
                                            }
                                            if (
                                              "/discover/index" !== this.path &&
                                              "/market/index" !== this.path
                                            ) {
                                              t.next = 8;
                                              break;
                                            }
                                            (s = document.querySelector(
                                              null == (i = this.options)
                                                ? void 0
                                                : i.scroll
                                            )),
                                              (o =
                                                document.querySelector(
                                                  ".st-pull-refresh"
                                                )),
                                              (c = s.getBoundingClientRect()),
                                              (u = o.getBoundingClientRect()),
                                              (p =
                                                "/discover/index" === this.path
                                                  ? ".container"
                                                  : ".market-container"),
                                              document
                                                .querySelector(p)
                                                .scrollTo({
                                                  top: c.top - u.top,
                                                  behavior: "smooth",
                                                }),
                                              (t.next = 12);
                                            break;
                                          case 8:
                                            if (
                                              (k = document.querySelector(
                                                null == (r = this.options)
                                                  ? void 0
                                                  : r.scroll
                                              ))
                                            ) {
                                              t.next = 11;
                                              break;
                                            }
                                            return t.abrupt("return");
                                          case 11:
                                            k.scrollIntoView({
                                              behavior: "smooth",
                                              block: "start",
                                            });
                                          case 12:
                                            t.next = 15;
                                            break;
                                          case 14:
                                            ("/market/index" !== this.path &&
                                              "/discover/index" !==
                                                this.path) ||
                                              ((f =
                                                "/discover/index" === this.path
                                                  ? ".container"
                                                  : ".market-container"),
                                              (m = document.querySelector(f)) &&
                                                m.scrollTo({
                                                  top: 0,
                                                  behavior: "smooth",
                                                }));
                                          case 15:
                                            (t.t0 =
                                              (this.options.resetData &&
                                                (getApp().globalData.taskConfig =
                                                  b(l({}, this.mpTask), {
                                                    done: !0,
                                                  })),
                                              d)),
                                              (t.next =
                                                "guide" === t.t0
                                                  ? 18
                                                  : "newguide" === t.t0
                                                  ? 20
                                                  : "bubble" === t.t0
                                                  ? 22
                                                  : "newbubble" === t.t0
                                                  ? 29
                                                  : "countdown" === t.t0
                                                  ? 34
                                                  : "banner" === t.t0
                                                  ? 36
                                                  : 38);
                                            break;
                                          case 18:
                                            return (
                                              (this.guide = {
                                                text: V,
                                                logo: S,
                                                duration: P.duration,
                                                visible: !0,
                                              }),
                                              t.abrupt("break", 39)
                                            );
                                          case 20:
                                            return (
                                              (this.newguide = b(
                                                l({}, this.options),
                                                { visible: !0 }
                                              )),
                                              y && this.updateShareLink(),
                                              t.abrupt("break", 39)
                                            );
                                          case 22:
                                            if (
                                              ((this.bubble = {
                                                selector: v,
                                                text: V,
                                                logo: S,
                                                fixed: !0,
                                                direction: x,
                                                allowClose: O,
                                                closable: O,
                                                bubbleid:
                                                  w ||
                                                  "yy-bubble-task".concat(
                                                    this.curTask.tid
                                                  ),
                                                visible: !0,
                                                duration: E,
                                              }),
                                              !y)
                                            ) {
                                              t.next = 28;
                                              break;
                                            }
                                            return (
                                              (t.next = 25),
                                              _.getShareCode(this.curTask)
                                            );
                                          case 25:
                                            (T = t.sent),
                                              (D = T.share_code),
                                              this.stockBridge.busEmit(
                                                "growth-yy.task.update_share_link",
                                                {
                                                  type: "update_share_link",
                                                  scode: D,
                                                  taskid: this.curTask.tid,
                                                  actid: this.curTask.actid,
                                                  taskType: "task",
                                                }
                                              );
                                          case 28:
                                            return t.abrupt("break", 39);
                                          case 29:
                                            if (
                                              (y && this.updateShareLink(),
                                              !(null == (a = this.options)
                                                ? void 0
                                                : a.priority))
                                            ) {
                                              t.next = 32;
                                              break;
                                            }
                                            return (
                                              setTimeout(
                                                function () {
                                                  B.newbubble = b(
                                                    l({}, B.options),
                                                    { visible: !0 }
                                                  );
                                                },
                                                this.options.needwait
                                                  ? this.options.needwait
                                                  : 0
                                              ),
                                              t.abrupt("break", 39)
                                            );
                                          case 32:
                                            return (
                                              (this.newbubble = b(
                                                l({}, this.options),
                                                { visible: !0 }
                                              )),
                                              t.abrupt("break", 39)
                                            );
                                          case 34:
                                            return (
                                              (this.countdown = {
                                                duration: h || 8,
                                                text: V,
                                                paused: g,
                                                logo: C.logo,
                                                visible: !0,
                                              }),
                                              t.abrupt("break", 39)
                                            );
                                          case 36:
                                            return (
                                              (this.banner = {
                                                text: V,
                                                duration: h,
                                                visible: !0,
                                              }),
                                              y && this.updateShareLink(),
                                              this.infobannerTimer &&
                                                clearTimeout(
                                                  this.infobannerTimer
                                                ),
                                              (this.infobannerTimer =
                                                setTimeout(function () {
                                                  B.hideBanner(),
                                                    B.closeBanner();
                                                }, 1e3 * h || 0)),
                                              t.abrupt("break", 39)
                                            );
                                          case 38:
                                            this.hide();
                                          case 39:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    this
                                  );
                                })
                              );
                            },
                            (null == (c = this.options) ? void 0 : c.scroll)
                              ? 1e3
                              : 0
                          );
                    case 40:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      findFirstVisibleElement: function (t) {
        var e,
          n = r(t);
        try {
          for (n.s(); !(e = n.n()).done; ) {
            var i = e.value,
              a = i.getBoundingClientRect();
            if (a.x >= 0 && a.width > 0) return i;
          }
        } catch (t) {
          n.e(t);
        } finally {
          n.f();
        }
        return null;
      },
      taskDone: function (t) {
        return p(this, arguments, function (t) {
          var n = this,
            i = t.actid,
            r = t.tid,
            a = t.id;
          return e().mark(function t() {
            var s, o;
            return e().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (r && i) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (!n.done) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return");
                  case 4:
                    return (t.next = 6), _.getTicket({ actid: i });
                  case 6:
                    return (
                      (s = t.sent),
                      (o = s.task_ticket),
                      t.abrupt(
                        "return",
                        _.doTask({
                          actid: i,
                          tid: r,
                          id: a,
                          task_ticket: o,
                        }).then(function (t) {
                          var e = t.retcode,
                            i = t.retmsg;
                          return 0 != +e
                            ? Promise.reject({ retmsg: i, retcode: e })
                            : ((n.done = !0), t);
                        })
                      )
                    );
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })();
        });
      },
      makeText: function (t, e) {
        e.invalid;
        var n = e.rewardDesc,
          i = void 0 === n ? "奖励" : n;
        return t.replace("${rewardDesc}", i);
      },
      jumptoAimpage: function (t, e) {
        "mp" !== this.stockBridge.ENV && k._default().env.IS_LITE_MODE,
          k.StockRouter.routeTo({ name: e[t].routename }),
          this.$emit("clearJudgePath");
      },
      getOption: function () {
        var e = this.allConfs[+this.curTask.tid];
        if (!e) return null;
        if (this.judgePath) {
          for (var n = "", i = 0, r = Object.entries(e); i < r.length; i++) {
            var a = t(r[i], 2),
              s = a[0];
            1 === a[1].pageorder && (n = s);
          }
          if ((this.$emit("clearJudgePath"), n && n !== this.path))
            return this.jumptoAimpage(n, e), null;
        }
        return e[this.path];
      },
      handleCountdownClik: function () {
        this.curTask.url && this.locationTo();
      },
      textFormat: function (t, e) {
        try {
          var n = t.text;
          /^\//.test(e) &&
            (null == n ? void 0 : n.indexOf("return")) >= 0 &&
            (t.text = new Function("obj", t.text));
        } catch (n) {
          t.text = "得奖励";
        }
      },
      updateRender: function (t) {
        var e = this;
        this.renderTimer &&
          (clearTimeout(this.renderTimer), (this.renderTimer = null)),
          (this.renderTimer = setTimeout(function () {
            e.render(),
              e.stockBridge.report("yy.activity.task_brow", {
                actid: e.curTask.actid,
                tid: e.curTask.tid,
                id: e.curTask.id,
              });
          }, 1e3 * t || 0));
      },
      updateOption: function () {
        (this.taskOptionsArr = this.options[this.act_plan] || []),
          this.fristRender ||
            (this.taskOptionsArr = this.taskOptionsArr.filter(function (t) {
              return !t.once;
            })),
          (this.fristRender = !1);
        var t = this.taskOptionsArr.shift();
        t && (this.options = t);
      },
      handelCountdownTimeout: function () {
        this.stockBridge.busEmit("growth-user.behavior.union", {
          type: "browse",
          event: "timeend",
        });
      },
      handleBubbleClose: function () {
        this.hideBubble();
      },
      handleToastTimeout: function () {
        this.hideToast();
      },
      handleGuideTimeout: function () {
        this.hideGuide();
      },
      handleSnackbarClose: function () {
        this.hideSnackbar();
      },
      handleDonepopClose: function () {
        this.stockBridge.busEmit("growth-task-ball-taskdonePopStatus", !1),
          this.hideDonepop();
      },
      handleSnackbarClik: function () {
        this.curTask.url ? this.locationTo() : this.hideSnackbar();
      },
      locationTo: function () {
        k.wx$1.navigateTo({ url: decodeURIComponent(this.curTask.url) });
      },
      showNewGuide: function (t) {
        this.newguide = b(l({}, t), { visible: !0 });
      },
      showSnackbar: function (t) {
        var e,
          n,
          i,
          r = this;
        if (t) {
          var a = this.uiConf.snackbar,
            s = (null == (e = this.options) ? void 0 : e.snackbar) || {},
            o = null == (n = this.options) ? void 0 : n.logo,
            c = null == (i = this.options) ? void 0 : i.invalid,
            u = (null == s ? void 0 : s.text) ? s.text : a.text,
            d = t.reward_desc;
          (this.snackbar = {
            logo: o || this.uiConf.logo,
            hideBtn: (null == s ? void 0 : s.hideBtn) || !1,
            button: a.button || (null == s ? void 0 : s.button),
            text: this.makeText(u, { invalid: c, rewardDesc: d }),
            visible: !0,
          }),
            this.snackbarTimer && clearTimeout(this.snackbarTimer),
            (this.snackbarTimer = setTimeout(function () {
              r.hideSnackbar();
            }, 1e3 * ((null == s ? void 0 : s.duration) || a.duration) || 0));
        }
      },
      hide: function (t) {
        var e = this;
        [
          "countdown",
          "toast",
          "guide",
          "bubble",
          "snackbar",
          "banner",
          "newbubble",
        ].forEach(function (n) {
          (t && n === t) ||
            e[
              "hide".concat(
                n.replace(/^\S/, function (t) {
                  return t.toUpperCase();
                })
              )
            ]();
        });
      },
      hideSnackbar: function () {
        this.snackbar.visible = !1;
      },
      hideDonepop: function () {
        this.donepop.visible = !1;
      },
      hideCountdown: function () {
        this.countdown.visible = !1;
      },
      hideToast: function () {
        this.toast.visible = !1;
      },
      hideGuide: function () {
        this.guide.visible = !1;
      },
      hideBubble: function () {
        this.bubble.visible = !1;
      },
      hideNewbubble: function () {
        this.newbubble.visible = !1;
      },
      hideNewguide: function () {
        this.newguide.visible = !1;
      },
      hideBanner: function () {
        this.banner.visible = !1;
      },
      closeBanner: function (t) {
        this.infobannerTimer && clearTimeout(this.infobannerTimer),
          this.taskOptionsArr.length &&
            ((this.options = this.taskOptionsArr.shift()),
            "taskSuccess" !== t && this.updateRender(this.options.delay)),
          this.hideBanner();
      },
      updateShareLink: function () {
        return p(
          this,
          null,
          e().mark(function t() {
            var n, i;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        (i = this.curTask),
                        p(
                          exports,
                          null,
                          e().mark(function t() {
                            var n, r, a, s, o, c;
                            return e().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (r = (n = i).tid),
                                      (a = n.id),
                                      (s =
                                        (null == i ? void 0 : i.act_id) ||
                                        (null == i ? void 0 : i.actid)),
                                      (t.next = 6),
                                      _.getShareCode({
                                        tid: r,
                                        actid: s,
                                        id: a,
                                      })
                                    );
                                  case 6:
                                    return (
                                      (o = t.sent),
                                      (c = o.share_code),
                                      t.abrupt("return", function (t) {
                                        var e = t.url,
                                          n = t.addParams,
                                          i = t.rmParams;
                                        return C({
                                          url: e,
                                          addParams: l(
                                            {
                                              share_code: c,
                                              share_type: "task_"
                                                .concat(r, "_")
                                                .concat(s),
                                            },
                                            n
                                          ),
                                          rmParams: i,
                                        });
                                      })
                                    );
                                  case 9:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        )
                      );
                    case 2:
                      (n = t.sent),
                        this.stockBridge.busEmit(
                          "growth-yy.task.update_share_link",
                          b(l({}, this.options), {
                            lnkUpdateService: n,
                            type: "update_share_link",
                            path: this.path,
                            taskid: this.curTask.tid,
                            actid: this.curTask.actid,
                            taskType: "task",
                          })
                        );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
    },
  };
Array ||
  (
    k.resolveComponent("CountDown") +
    k.resolveComponent("Bubble") +
    k.resolveComponent("new-bubble") +
    k.resolveComponent("Guide") +
    k.resolveComponent("new-guide") +
    k.resolveComponent("done-pop") +
    k.resolveComponent("Snackbar")
  )();
var A = k._export_sfc(j, [
  [
    "render",
    function (t, e, n, i, r, a) {
      return k.e(
        { a: r.countdown && r.countdown.visible },
        r.countdown && r.countdown.visible
          ? {
              b: k.w(
                function (t, e, n) {
                  return {
                    a: k.t(
                      r.taskAward
                        ? r.taskAward
                        : "浏览".concat(t.remaining, "s")
                    ),
                    b: n,
                    c: e,
                  };
                },
                { name: "slot-text", path: "b", vueId: "aad407ad-0" }
              ),
              c: r.taskAward ? "" : 1,
              d: k.t(r.taskAward ? "返回查看" : r.countdown.text || "得奖励"),
              e: k.o(a.handleCountdownClik, 984),
              f: k.o(a.handelCountdownTimeout, 985),
              g: k.p({
                duration: r.countdown.duration,
                paused: r.countdown.paused,
                logo: r.countdown.logo,
              }),
            }
          : {},
        { h: r.bubble && r.bubble.visible },
        r.bubble && r.bubble.visible
          ? {
              i: k.t(r.bubble.text),
              j: k.o(a.handleBubbleClose, 986),
              k: k.p({ config: r.bubble }),
            }
          : {},
        { l: r.newbubble && r.newbubble.visible },
        r.newbubble && r.newbubble.visible
          ? {
              m: k.o(a.hideNewbubble, 987),
              n: k.o(a.taskRealShow, 988),
              o: k.p({ config: r.newbubble }),
            }
          : {},
        { p: r.guide && r.guide.visible },
        r.guide && r.guide.visible
          ? {
              q: k.t(r.guide.text),
              r: k.n(r.guide.guideid),
              s: k.o(a.handleGuideTimeout, 989),
              t: k.p({ duration: r.guide.duration }),
            }
          : {},
        { v: r.newguide && r.newguide.visible },
        r.newguide && r.newguide.visible
          ? {
              w: k.o(a.taskRealShow, 990),
              x: k.o(a.hideNewguide, 991),
              y: k.p({ config: r.newguide }),
            }
          : {},
        { z: r.donepop && r.donepop.visible },
        r.donepop && r.donepop.visible
          ? {
              A: k.o(a.handleDonepopClose, 992),
              B: k.o(a.customDrawCash, 993),
              C: k.p({ config: r.donepop }),
            }
          : {},
        { D: r.snackbar && r.snackbar.visible },
        r.snackbar && r.snackbar.visible
          ? k.e(
              { E: r.snackbar.text },
              r.snackbar.text ? { F: r.snackbar.text } : {},
              {
                G: k.t(r.snackbar.button.text),
                H: k.o(a.handleSnackbarClose, 994),
                I: k.o(a.handleSnackbarClik, 995),
                J: k.p({
                  logo: r.snackbar.logo,
                  "hide-btn": r.snackbar.hideBtn,
                  "btn-text": r.snackbar.button.text,
                }),
              }
            )
          : {},
        { K: r.banner && r.banner.visible },
        r.banner && r.banner.visible
          ? k.e(
              { L: r.banner.text },
              r.banner.text ? { M: r.banner.text } : {},
              { N: k.o(a.closeBanner, 996), O: k.p({ "hide-btn": !0 }) }
            )
          : {},
        {
          P: r.isMina ? 1 : "",
          Q: r.isPCMina ? 1 : "",
          R: "wzq" === r.appName ? 1 : "",
          S: "zxg" === r.appName ? 1 : "",
        }
      );
    },
  ],
  ["__scopeId", "data-v-aad407ad"],
]);
wx.createComponent(A);
var R = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC10YXNrL2NvbXBvbmVudHMvdGFzay9pbmRleC52dWU =
  R),
  (exports.getNewCustomConf = function () {
    return p(
      this,
      null,
      e().mark(function t() {
        var n, i;
        return e().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  k.Wuji.get({ appid: "act", schemaid: "yy_new_custom_task" })
                );
              case 2:
                return (n = t.sent), (i = n.data), t.abrupt("return", i);
              case 5:
              case "end":
                return t.stop();
            }
        }, t);
      })
    );
  });
