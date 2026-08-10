require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  a = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  p = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && p(e, n, t[n]);
    if (c) {
      var i,
        r = o(c(t));
      try {
        for (r.s(); !(i = r.n()).done; ) {
          n = i.value;
          l.call(t, n) && p(e, n, t[n]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  h = function (e, t) {
    return a(e, s(t));
  },
  m = function (e, t, n) {
    return new Promise(function (i, o) {
      var r = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(r, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../stock-community-base/utils/knife.js"),
  g = require("../../../stock-community-base/utils/commentFilter.js"),
  k = require("../../utils/service/index.js"),
  v = require("../../utils/mixins/store.js"),
  y = require("../../../stock-community-base/utils/api/index.js"),
  w = require("../../../stock-community-base/utils/api/mini.js"),
  b = require("../../../../../../common/vendor.js"),
  x = require("../../../stock-community-base/utils/constant.js"),
  T = require("../../utils/mixins/securityCheck/index.js"),
  P = require("../../../stock-community-base/utils/defaultCfgTabsLeast.js"),
  _ = require("../../../stock-community-base/utils/bus.js"),
  D = require("../../../stock-community-base/utils/mixins/exposureReport.js"),
  L = require("../../../stock-community-base/utils/privacyCheck.js"),
  I = f.sdk,
  S = I.getUserInfo,
  q = I.reportAnalytics,
  C = I.notify,
  N = y.api,
  j = N.goPageCommon,
  F = N.goStockComment,
  E = {},
  U = 0,
  $ = 0,
  A = { userinfo: {} };
Object.keys(A).forEach(function (e) {
  E[e] = function () {
    return A[e];
  };
});
var O = h(d({}, v.store), {
    onPageInit: function (e) {
      return m(this, arguments, function (e) {
        var t = this,
          n = e.params,
          o = e.scb,
          r = e.fcb;
        return i().mark(function e() {
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.t0 = A.userinfo.openid), e.t0)) {
                    e.next = 5;
                    break;
                  }
                  return (e.next = 4), S(!1);
                case 4:
                  A.userinfo = e.sent;
                case 5:
                  return e.abrupt("return", t.getList(n, !0, t.pageType, o, r));
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })();
      });
    },
    getList: function (e, t, o, r, a) {
      var s = this;
      return new Promise(function (c, u) {
        var l = {
          topic: k.getTopicDetail,
          stock: k.getStockList,
          hqStock: k.getHqStockList,
          dailyStock: k.getStockList,
          square: k.getMainList,
          friends: k.getFriendsList,
          share: k.getCommonList,
        };
        (l[o] || k.getStockList)(e, o, A.userinfo)
          .then(function () {
            for (var e = arguments.length, l = new Array(e), p = 0; p < e; p++)
              l[p] = arguments[p];
            return m(s, [].concat(l), function () {
              var e = this,
                s =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return i().mark(function l() {
                var p, d, h, m, f;
                return i().wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            e.$emit("getListFinished", {
                              getRes: s,
                              isFirst: t,
                            }),
                            (p = s.data || {}),
                            (i.prev = 2),
                            (i.next = 5),
                            g.CommentFilter(s.data, !0, !1, A.userinfo)
                          );
                        case 5:
                          (d = i.sent),
                            (h = d.commentsData),
                            (m = e.formateData(h)),
                            t
                              ? ((U = 0),
                                (e.commentsData.length = 0),
                                (e.commentsData = m))
                              : (e.commentsData = [].concat(
                                  n(e.commentsData),
                                  n(m)
                                )),
                            r && r(t, p),
                            c(s),
                            (i.next = 16);
                          break;
                        case 11:
                          (i.prev = 11),
                            (i.t0 = i.catch(2)),
                            a && a(),
                            (f = ""
                              .concat(x.prefix[o], ".")
                              .concat(x.moduleName, ".getdata.error")),
                            q({ eventName: f }),
                            u(i.t0);
                        case 16:
                        case "end":
                          return i.stop();
                      }
                  },
                  l,
                  null,
                  [[2, 11]]
                );
              })();
            });
          })
          .catch(function (e) {
            a && a();
            var t = ""
              .concat(x.prefix[o], ".")
              .concat(x.moduleName, ".getdata.error");
            q({ eventName: t }), u(e);
          });
      });
    },
    getFriendsListUnread: function (e, t, n, o) {
      var r = this;
      return new Promise(function (a, s) {
        var c, u;
        k.getFriendsList(
          e,
          r.pageType,
          "wzq" === f.platform
            ? d(
                {
                  nickname: null == (c = r.pUserinfo) ? void 0 : c.nickname,
                  avatar_url: null == (u = r.pUserinfo) ? void 0 : u.headimgurl,
                },
                A.userinfo
              )
            : A.userinfo
        )
          .then(function () {
            for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
              c[u] = arguments[u];
            return m(r, [].concat(c), function () {
              var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return i().mark(function s() {
                var c;
                return i().wrap(function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        (c = r.data || {}),
                          e.unReadNum && 1 == +e.unReadNum
                            ? (n && n(t, c), a(!0))
                            : (o && o(), a(!1));
                      case 2:
                      case "end":
                        return i.stop();
                    }
                }, s);
              })();
            });
          })
          .catch(function (e) {
            o && o();
            var t = ""
              .concat(x.prefix[r.pageType], ".")
              .concat(x.moduleName, ".getdata.error");
            q({ eventName: t }), s(e);
          });
      });
    },
    formateData: function (e) {
      var t = this;
      return e.reduce(function (e, n, i) {
        var o =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return (
          o[i - 1] &&
            1 == +n.folding &&
            !o[i - 1].folding &&
            n.user_id === o[i - 1].user_id &&
            ((n.hasFolding = 1),
            ($ += 1),
            (n.count = $),
            t.$set(t.showTail, $, 1)),
          1 != +n.folding || n.count || (n.count = $),
          17 == +n.type && ((U += 1), (n.hqCount = U)),
          -1 === e.indexOf(n) && e.push(n),
          e
        );
      }, []);
    },
    onPutLike: function (e, t) {
      return m(
        this,
        null,
        i().mark(function e() {
          var n, o, r, a, s, c;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!A.userinfo.openid && "zxg" === f.platform) {
                      e.next = 11;
                      break;
                    }
                    if ((this.$emit("onPutLike"), "web" !== f.platform)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    (a = this.commentsData[t]).like_id
                      ? ((a.like_id = ""), (a.like_num -= 1))
                      : ((a.like_id = a.id),
                        (a.like_num += 1),
                        null == (n = b.StockBridge) ||
                          n.busEmit("growth-user.behavior.union", {
                            type: "click",
                            event: "custom_like_comment",
                          })),
                      (s = { attitude: a.like_id ? -1 : 0, publish_id: a.id }),
                      k.putRssLike(
                        "wzq" === f.platform
                          ? d(
                              {
                                nickname:
                                  (null == (o = this.pUserinfo)
                                    ? void 0
                                    : o.nickname) || "",
                                avatar_url:
                                  (null == (r = this.pUserinfo)
                                    ? void 0
                                    : r.headimgurl) || x.headimgurl,
                              },
                              s
                            )
                          : s,
                        A.userinfo,
                        !0
                      ),
                      (c = ""
                        .concat(x.prefix[this.pageType], ".")
                        .concat(x.moduleName, ".dianzan_tap")),
                      this.$emit("commentReport", {
                        eventName: c,
                        data: {
                          postid: (null == a ? void 0 : a.id) || "",
                          stockid: (null == a ? void 0 : a.stock_id) || "",
                        },
                      }),
                      (e.next = 14);
                    break;
                  case 11:
                    return (e.next = 13), S(!0);
                  case 13:
                    A.userinfo = e.sent;
                  case 14:
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
    onTapCommentItem: function (e) {
      this.$emit("onTapCommentItem", e);
    },
    onTapFollow: function (e, t) {
      return m(
        this,
        null,
        i().mark(function e() {
          var n, o, r, a, s, c;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!A.userinfo.openid && "zxg" === f.platform) {
                      e.next = 11;
                      break;
                    }
                    if (
                      ((r = this.commentsData[t]),
                      (a = r.isFollow
                        ? "已取消关注"
                        : "关注成功，可在「股友圈」看Ta的动态~"),
                      "web" !== f.platform)
                    ) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    (r.isFollow = !r.isFollow),
                      (s = {
                        g_openid: A.userinfo.openid,
                        to_openid: r.user_id,
                      }),
                      k.putFollow(
                        "wzq" === f.platform
                          ? d(
                              {
                                app: "wzq",
                                check: 12,
                                nickname:
                                  (null == (n = this.pUserinfo)
                                    ? void 0
                                    : n.nickname) || "",
                                avatar_url:
                                  (null == (o = this.pUserinfo)
                                    ? void 0
                                    : o.headimgurl) || x.headimgurl,
                              },
                              s
                            )
                          : s,
                        A.userinfo,
                        r.isFollow,
                        !1
                      ),
                      (c = ""
                        .concat(x.prefix[this.pageType], ".")
                        .concat(x.moduleName, ".guanzhu_tap")),
                      "zxg" === f.platform &&
                        C("updateTimeline", {
                          module: !1,
                          type: "follow",
                          parent_id: r.id,
                          to_openid: r.user_id,
                          isFollow: r.isFollow,
                        }),
                      this.$emit("commentReport", {
                        eventName: c,
                        data: {
                          stockid: (null == r ? void 0 : r.stock_id) || "",
                        },
                      }),
                      this.$emit("onTapFollow", { text: a, itemData: r }),
                      (e.next = 14);
                    break;
                  case 11:
                    return (e.next = 13), S(!0);
                  case 13:
                    A.userinfo = e.sent;
                  case 14:
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
    onTapTopic: function () {
      return m(this, arguments, function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return i().mark(function n() {
          var o, r, a, s, c, u, l, p, h;
          return i().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  (r = f.getUrlParams(e, f.platform) || {}),
                    (a = {
                      p_showNav: !0,
                      p_key: "com.tencent.shy.commentSystem",
                      p_title: "",
                    }),
                    (s = t.eventName),
                    (c = t.topicInfo),
                    (u = void 0 === c ? {} : c),
                    "web" === f.platform && e.$emit("onTapTopic", t),
                    "topic" === s &&
                      (u.selection && (l = { selection: u.selection }),
                      u.promotion_id && (u.topic_id = u.promotion_id),
                      (l = d(
                        { topicid: u.topic_id, topic: u.topic, s: r.s },
                        l
                      )),
                      (a.p_url = f.buildUrl("topic-topic", l))),
                    (p = ""
                      .concat(x.prefix[e.pageType], ".")
                      .concat(x.moduleName, ".")
                      .concat(s)
                      .concat(
                        (
                          null == (o = null == t ? void 0 : t.topicInfo)
                            ? void 0
                            : o.topic_id
                        )
                          ? ".operate"
                          : "",
                        "_tap"
                      )),
                    e.$emit("commentReport", p),
                    (h = {
                      url: x.toShyCommon(a),
                      selection: u.selection,
                      topicId: u.topic_id,
                      eventName: s,
                      instance: e,
                    }),
                    e.isMiniApp ? w.goPageCommon(h) : j(h);
                case 6:
                case "end":
                  return n.stop();
              }
          }, n);
        })();
      });
    },
    onTapListBar: function (e, t) {
      var n = ""
        .concat(x.prefix[this.pageType], ".")
        .concat(x.moduleName, ".")
        .concat(t, "_tap");
      this.$emit("commentReport", n),
        q({ eventName: n }),
        F({ code: "sh000001", name: "上证指数", instance: this });
    },
  }),
  R = (function () {
    function n(t) {
      e(this, n),
        (this.unreported = []),
        (this.recorded = new Set()),
        (this.report = t);
    }
    return (
      t(n, [
        {
          key: "reset",
          value: function () {
            this.recorded.clear();
          },
        },
        {
          key: "flush",
          value: function () {
            if (0 !== this.unreported.length) {
              var e = this.unreported[0],
                t = e.event,
                n = e.data;
              delete n.postid;
              var i,
                r = [],
                a = [],
                s = [],
                c = o(this.unreported);
              try {
                for (c.s(); !(i = c.n()).done; ) {
                  var u = i.value.data;
                  r.push(u.stocklist),
                    a.push(u.positionlist),
                    s.push(u.positionlist);
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
              (n.stocklist = r.join(",")),
                (n.positionlist = a.join(",")),
                (n.hasaddlist = s.join(",")),
                this.report && this.report(t, n),
                (this.unreported.length = 0);
            }
          },
        },
        {
          key: "exposeInList",
          value: function (e, t) {
            var n = "".concat(t.postid, ":").concat(t.stocklist);
            this.recorded.has(n) ||
              (this.recorded.add(n),
              this.unreported.push({ event: e, data: t }),
              this.unreported.length >= 10 && this.flush());
          },
        },
      ]),
      n
    );
  })(),
  M = (function () {
    function n(t) {
      e(this, n),
        (this.data = {}),
        (this.qtPollingTimer = null),
        (this.exposurePool = new R(t));
    }
    return (
      t(n, [
        {
          key: "setStocks",
          value: function (e) {
            return m(
              this,
              null,
              i().mark(function t() {
                var n, r, a, s, c;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (n = {}), (r = []), (a = o(e));
                          try {
                            for (a.s(); !(s = a.n()).done; )
                              (c = s.value),
                                this.data[c]
                                  ? (n[c] = this.data[c])
                                  : ((n[c] = {
                                      name: "",
                                      updown: "--",
                                      added: null,
                                    }),
                                    r.push(c));
                          } catch (e) {
                            a.e(e);
                          } finally {
                            a.f();
                          }
                          (this.data = n),
                            r.length > 0 &&
                              (this.requestQt(r), this.checkAdded(r));
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
        {
          key: "$on",
          value: function (e, t) {
            _.EvtBus.$on(this.updateEvent(e), t);
          },
        },
        {
          key: "$off",
          value: function (e, t) {
            _.EvtBus.$off(this.updateEvent(e), t);
          },
        },
        {
          key: "startPollingQt",
          value: function () {
            this.qtPollingTimer ||
              (this.requestQt(),
              this.checkAdded(),
              (this.qtPollingTimer = setInterval(
                this.requestQt.bind(this),
                5e3
              )));
          },
        },
        {
          key: "stopPollingQt",
          value: function () {
            this.qtPollingTimer &&
              (clearInterval(this.qtPollingTimer),
              (this.qtPollingTimer = null));
          },
        },
        {
          key: "requestQt",
          value: function (e) {
            return m(
              this,
              null,
              i().mark(function t() {
                var n, r, a, s, c, u, l, p;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (n = null != e ? e : Object.keys(this.data)) &&
                            !(n.length <= 0)
                          ) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          return (
                            (r = []), (t.prev = 4), (t.next = 7), k.getQTs(n)
                          );
                        case 7:
                          (a = t.sent), (s = o(n)), (t.prev = 9), s.s();
                        case 11:
                          if ((c = s.n()).done) {
                            t.next = 20;
                            break;
                          }
                          if (((u = c.value), (l = a[u]))) {
                            t.next = 16;
                            break;
                          }
                          return t.abrupt("continue", 18);
                        case 16:
                          !(p = this.data[u]) ||
                            (p.name === l.name && p.updown === l.updown) ||
                            ((p.name = l.name),
                            (p.updown = l.updown),
                            r.push(u));
                        case 18:
                          t.next = 11;
                          break;
                        case 20:
                          t.next = 25;
                          break;
                        case 22:
                          (t.prev = 22), (t.t0 = t.catch(9)), s.e(t.t0);
                        case 25:
                          return (t.prev = 25), s.f(), t.finish(25);
                        case 28:
                          this.notifyUpdate(r), (t.next = 33);
                          break;
                        case 31:
                          (t.prev = 31), (t.t1 = t.catch(4));
                        case 33:
                          return t.abrupt("return", r);
                        case 34:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [
                    [4, 31],
                    [9, 22, 25, 28],
                  ]
                );
              })
            );
          },
        },
        {
          key: "checkAdded",
          value: function (e) {
            return m(
              this,
              null,
              i().mark(function t() {
                var n, o, r, a, s;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (n = null != e ? e : Object.keys(this.data)) &&
                            0 !== n.length
                          ) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          return (
                            (o = []),
                            (r = {}),
                            (t.prev = 5),
                            (t.next = 8),
                            k.checkStocksAdded(n)
                          );
                        case 8:
                          for (a in (r = t.sent))
                            (s = !!r[a]),
                              this.data[a] &&
                                this.data[a].added != s &&
                                ((this.data[a].added = s), o.push(a));
                          this.notifyUpdate(o), (t.next = 15);
                          break;
                        case 13:
                          (t.prev = 13), (t.t0 = t.catch(5));
                        case 15:
                          return t.abrupt("return", o);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 13]]
                );
              })
            );
          },
        },
        {
          key: "operateStock",
          value: function (e, t) {
            return m(
              this,
              null,
              i().mark(function n() {
                var o;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), this.checkLogin();
                        case 3:
                          if (n.sent) {
                            n.next = 5;
                            break;
                          }
                          return n.abrupt("return");
                        case 5:
                          if ("zxg" !== f.platform) {
                            n.next = 15;
                            break;
                          }
                          return (n.next = 8), t;
                        case 8:
                          if (!n.sent) {
                            n.next = 12;
                            break;
                          }
                          f.sdk.addStockToGroup(e), (n.next = 13);
                          break;
                        case 12:
                          f.sdk.removeStockFromGroup(e);
                        case 13:
                          n.next = 17;
                          break;
                        case 15:
                          return (n.next = 17), k.operateStock(e, t);
                        case 17:
                          (o = this.data[e]) &&
                            ((o.added = t), this.notifyUpdate([e])),
                            (n.next = 23);
                          break;
                        case 21:
                          (n.prev = 21), (n.t0 = n.catch(0));
                        case 23:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  this,
                  [[0, 21]]
                );
              })
            );
          },
        },
        {
          key: "updateEvent",
          value: function (e) {
            return "StockPollUpdate-".concat(e);
          },
        },
        {
          key: "notifyUpdate",
          value: function (e) {
            var t = this;
            e.forEach(function (e) {
              _.EvtBus.$emit(t.updateEvent(e), t.data[e]);
            });
          },
        },
        {
          key: "checkLogin",
          value: function () {
            return m(
              this,
              null,
              i().mark(function e() {
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ("zxg" !== f.platform) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 3), f.sdk.getUserInfo(!0);
                      case 3:
                        return (
                          (e.t0 = e.sent.type),
                          e.abrupt("return", "none" !== e.t0)
                        );
                      case 5:
                        return e.abrupt("return", !0);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          },
        },
      ]),
      n
    );
  })(),
  z = {
    mixins: [T.securityCheck, D.exposureReport],
    name: "StockList",
    components: {
      ComItem: function () {
        return "../ComItem/index.js";
      },
      loadMore: function () {
        return "../loadMore/index.js";
      },
      noNetwork: function () {
        return "../noNetwork/index.js";
      },
      noData: function () {
        return "../noData/index.js";
      },
      foldTail: function () {
        return "../foldTail/index.js";
      },
    },
    inject: {
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
      stockBridge: { default: {} },
    },
    provide: function () {
      return { stockPollPool: this.stockPollPool };
    },
    props: {
      pageType: { type: String, default: "stock" },
      pUserinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageId: { type: String, default: "" },
      tabType: { type: String, default: "latest" },
      currentType: { type: String, default: "latest" },
      isVIP: { type: Boolean, default: !1 },
      theme: { type: String, default: "" },
      stockName: { type: String, default: "" },
      topic: { type: String, default: "" },
      dropDownValue: { type: String, default: "time" },
    },
    data: function () {
      var e = this,
        t = "topic" === this.pageType ? "newest" : "latest",
        n = this.dropDownValue;
      return {
        pageInit: !1,
        platform: f.platform,
        noNetwork: !1,
        firstLoading: !0,
        nomore: !1,
        isLoading: !1,
        pageNum: 0,
        rssListCount: 0,
        min_id: "",
        vorderArr: [],
        showLabels: [],
        activeTabKey: this.tabType || t,
        friendsId: "",
        showTail: [],
        commentsData: [],
        params: {},
        commentCount: {},
        updateValue: n,
        tagCfg: [],
        riskMsg: "",
        defaultCfgTabs: P.defaultCfgTabs,
        stockPollPool:
          ["wzq", "zxg", "mini"].includes(f.platform) &&
          ["stock", "topic", "square", "friends"].includes(this.pageType)
            ? new M(function (t, n) {
                e.$emit("commentReport", { eventName: t, data: n });
              })
            : null,
        appVersion: "",
        isDestroyed: !1,
        pageCount: 0,
      };
    },
    computed: h(d({}, E), {
      itemTopHandle: function () {
        var e = {
          wzq: ["follow"],
          mini: ["follow"],
          zxg: ["follow"],
          web: ["follow"],
          qqmac: ["follow"],
        };
        return (
          "friends" === this.pageType &&
            (e = {
              wzq: ["more"],
              mini: ["more"],
              zxg: ["more"],
              web: ["more"],
              qqmac: ["more"],
            }),
          e[f.platform] || []
        );
      },
      itemBottomHandle: function () {
        return (
          { wzq: ["comment", "like"], mini: ["comment", "like"] }[f.platform] ||
          []
        );
      },
      noMoreText: function () {
        return (
          {
            web: "已经到底了，触底反弹否极泰来",
            wzq: "已经到底了，触底反弹否极泰来",
            zxg: "已经到底了，触底反弹否极泰来",
            qqmac: "已经到底了，触底反弹否极泰来",
          }[f.platform] || ""
        );
      },
      showTags: function () {
        return this.tagCfg.map(function (e) {
          return {
            name: "最新" === e.tab_desc ? "latest" : e.tab_value,
            text: e.tab_desc,
            isShow: !0,
          };
        });
      },
    }),
    watch: {
      pageId: {
        immediate: !0,
        handler: function (e, t) {
          "" !== e && e !== t && this.init();
        },
      },
      commentsData: function () {
        var e,
          t,
          n = this;
        if (this.stockPollPool) {
          var i = new Set();
          null == (e = this.commentsData) ||
            e.forEach(function (e) {
              var t = e.relatedStocks;
              if (t && t.length > 0) {
                var r,
                  a = 0,
                  s = o(t);
                try {
                  for (s.s(); !(r = s.n()).done; ) {
                    var c = r.value;
                    if (c.symbol) {
                      if ("stock" === n.pageType && c.symbol === n.pageId)
                        continue;
                      if ((i.add(c.symbol), (a += 1) >= 2)) break;
                    }
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
              }
            }),
            null == (t = this.stockPollPool) || t.setStocks(Array.from(i));
        }
      },
    },
    created: function () {
      return m(
        this,
        null,
        i().mark(function e() {
          var t = this;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    this.pageType &&
                      "square" === this.pageType &&
                      f.getStorage("friend_lastedId_key").then(function (e) {
                        (t.friendsId = e || ""), t.getRssList();
                      });
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
      var e;
      (this.isDestroyed = !0),
        null == (e = this.stockPollPool) || e.stopPollingQt(),
        !this.pageType ||
          ("stock" !== this.pageType && "news" !== this.pageType) ||
          "function" != typeof this.removeAllExposureData ||
          this.removeAllExposureData();
    },
    methods: h(d({}, O), {
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
      getRssList: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        this.getFriendsListUnread(
                          { begin: this.friendsId, unReadNum: 1 },
                          !0,
                          this.notifyToIndex
                        )
                      );
                    case 3:
                      e.next = 7;
                      break;
                    case 5:
                      (e.prev = 5), (e.t0 = e.catch(0));
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 5]]
            );
          })
        );
      },
      notifyToIndex: function (e, t) {
        var n = (t || {}).unReadNum;
        this.$emit("notifyToIndex", { unReadNum: n });
      },
      onStockListShow: function () {
        var e;
        this.isDestroyed ||
          (null == (e = this.stockPollPool) || e.startPollingQt(),
          !this.pageType ||
            ("stock" !== this.pageType && "news" !== this.pageType) ||
            "function" != typeof this.initBatchObserver ||
            this.initBatchObserver());
      },
      onStockListHide: function () {
        var e, t, n;
        null == (e = this.stockPollPool) || e.stopPollingQt(),
          null ==
            (n = null == (t = this.stockPollPool) ? void 0 : t.exposurePool) ||
            n.flush(),
          !this.pageType ||
            ("stock" !== this.pageType && "news" !== this.pageType) ||
            "function" != typeof this.removeAllExposureData ||
            this.removeAllExposureData();
      },
      clickReload: function () {
        this.init();
      },
      changeTag: function (e) {
        (this.activeTabKey = e), this.loadData(!0, this.updateValue, e);
        var t = "".concat(x.prefix[this.pageType], "_").concat(e, "_tag_click");
        this.commentReport(t), this.$emit("changeTag", e);
      },
      commentReport: function (e) {
        this.$emit("commentReport", e);
      },
      goEdit: function () {
        this.$emit("goEdit");
      },
      init: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            var t;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((this.params = this.getParams(
                          !0,
                          this.dropDownValue,
                          this.activeTabKey
                        )),
                        !(null == (t = this.params) ? void 0 : t.order))
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (this.isLoading = !0),
                        (e.prev = 2),
                        (e.next = 5),
                        this.onPageInit({
                          params: this.params,
                          scb: this.successHanlde,
                          fcb: this.networkErrorHandle,
                        })
                      );
                    case 5:
                      (this.pageInit = e.sent), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(2)),
                        this.$emit("getListFinished", {
                          getRes: null,
                          isFirst: !0,
                        });
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[2, 8]]
            );
          })
        );
      },
      resetUsr: function (e) {
        var t = (e || {}).count;
        t &&
          (this.$set(this.showTail, t, 0),
          this.stockBridge.busEmit("community-commentChanged"));
      },
      onHandleTapList: function (e, t) {
        return m(
          this,
          null,
          i().mark(function n() {
            var o,
              r,
              a,
              s,
              c,
              u,
              l,
              p,
              m,
              g = this;
            return i().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (!L.isH5Native) {
                        n.next = 8;
                        break;
                      }
                      if (
                        ![
                          "putComment",
                          "turn",
                          "putLike",
                          "tapFollow",
                        ].includes(null == t ? void 0 : t.eventName)
                      ) {
                        n.next = 6;
                        break;
                      }
                      return (n.next = 4), L.sqPrivacyCheck();
                    case 4:
                      if (n.sent) {
                        n.next = 6;
                        break;
                      }
                      return n.abrupt("return");
                    case 6:
                      n.next = 10;
                      break;
                    case 8:
                      if (
                        (null == (o = this.didAgreeUserAgreement)
                          ? void 0
                          : o.value) ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        n.next = 10;
                        break;
                      }
                      return n.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 10:
                      (a = (r = t || {}).eventName),
                        (s = r.topTag),
                        (c = t.eventData),
                        (u = {
                          putComment: "onPutComment",
                          turn: "onHandelTurn",
                          putLike: "onPutLike",
                          tapPerson: "onTapPerson",
                          tapFollow: "onTapFollow",
                          tapImage: "onTapImage",
                          tapDetail: "onTapDetail",
                          tapTopic: "onTapTopic",
                          tapContent: "onTapContent",
                          tapShowBox: "onTapShowBox",
                          toggleShow: "onToggleShow",
                          tapOtherSource: "onTapOtherSource",
                          goSharePage: "onGoSharePage",
                          tapMore: "onTapMore",
                          tapIllegal: "onTapIllegal",
                          tapDeleteItem: "onTapDeleteItem",
                          tapCommentItem: "onTapCommentItem",
                          commentReport: "commentReport",
                          tapListBar: "onTapListBar",
                          goEdit: "goEdit",
                        }),
                        (l = (c || {}).fakeInput),
                        a &&
                          u[a] &&
                          ((p = e || {}),
                          (m =
                            "tapFollow" === a && p.isFollow
                              ? "tapUnfollow"
                              : a),
                          "tapCommentItem" === a &&
                            Object.assign(p, { comment_id: c.comment_id }),
                          this.securityCheck({
                            eventName: m,
                            fakeInput: l,
                            postData: p,
                          })
                            .then(function () {
                              "zxg" === f.platform &&
                                "tapOtherSource" === a &&
                                (c = h(d({}, c), { appVersion: g.appVersion }));
                              var t = g.commentsData.findIndex(function (t) {
                                  return t.id === e.id;
                                }),
                                n = g[u[a]];
                              n &&
                                n(c, t, {
                                  pageType: g.pageType,
                                  pageId: g.pageId,
                                  topTag: s,
                                  itemData: e,
                                });
                            })
                            .catch(function () {})),
                        this.$forceUpdate();
                    case 15:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      loadData: function () {
        var e,
          t = this,
          n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          i = arguments.length > 1 ? arguments[1] : void 0,
          o = arguments.length > 2 ? arguments[2] : void 0;
        if (!this.isLoading && !this.nomore)
          return (
            n && (null == (e = this.stockPollPool) || e.exposurePool.reset()),
            (this.isLoading = !0),
            i && (this.updateValue = i),
            o && (this.activeTabKey = o),
            (this.params = this.getParams(
              n,
              this.updateValue,
              this.activeTabKey
            )),
            new Promise(function (e, i) {
              t.getList(
                t.params,
                n,
                t.pageType,
                t.successHanlde,
                t.networkErrorHandle
              )
                .then(function (t) {
                  e(t);
                })
                .catch(function (e) {
                  i(e);
                });
            }).catch(function (e) {})
          );
      },
      loadDataSilence: function () {
        var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.isLoading) {
          this.isLoading = !0;
          var n = this.getParams(t, this.updateValue, this.activeTabKey);
          return new Promise(function (i, o) {
            e.getList(n, t, e.pageType, e.successHanlde, e.networkErrorHandle)
              .then(function (e) {
                i(e);
              })
              .catch(function (e) {
                o(e);
              });
          }).catch(function (e) {});
        }
      },
      successHanlde: function (e, t) {
        var n,
          i,
          o = this,
          r = t.more_flag,
          a = void 0 === r ? "" : r,
          s = t.begin,
          c = void 0 === s ? "" : s,
          u = t.begin_score,
          l = void 0 === u ? "" : u,
          p = (t.banner_list, t.comment_count),
          d = void 0 === p ? {} : p,
          h = t.comment_status,
          m = void 0 === h ? "" : h,
          g = t.risk_msg;
        if (e) {
          if (
            ((this.noNetwork = !1),
            (this.firstLoading = !1),
            "friends" === this.pageType)
          ) {
            var k = (null == (n = this.commentsData[0]) ? void 0 : n.id) || "";
            f.setStorage("friend_lastedId_key", "".concat(k)),
              (this.friendsId = k);
          }
          (this.vorderArr = []), (this.commentCount = d), (this.pageCount = 1);
        } else this.pageCount += 1;
        this.pageCount > 30
          ? this.removeAllExposureData && this.removeAllExposureData()
          : this.$nextTick(function () {
              setTimeout(function () {
                o.reinitBatchObserver();
              }, 100);
            }),
          this.$emit("renderFinished", {
            listData: this.commentsData,
            isFirst: e,
            noNetwork: this.noNetwork,
            commentStatus: m,
          }),
          (this.nomore = !a),
          (this.begin =
            c ||
            (null == (i = this.commentsData[this.commentsData.length - 1])
              ? void 0
              : i.id) ||
            ""),
          (this.begin_score = l),
          (this.isLoading = !1),
          (this.riskMsg = g),
          this.$forceUpdate();
      },
      networkErrorHandle: function () {
        (this.noNetwork = !0),
          (this.firstLoading = !1),
          (this.isLoading = !1),
          this.$emit("networkErrorHandle");
      },
      getParams: function (e, t, n) {
        var i = { limit: 10, withmini: 1, content_link: 1 };
        return (
          "topic" === this.pageType
            ? ((i.topic_id = this.pageId), (i.order = t))
            : "square" === this.pageType ||
              "friends" === this.pageType ||
              "share" === this.pageType
            ? ((i = { limit: 10, visible: 1, content_link: 1 }).order = "time")
            : ((i.stock_id = this.pageId),
              (i.id = this.pageId),
              -1 !== ["latest"].indexOf(n)
                ? (i.order = t)
                : -1 !== ["all"].indexOf(n)
                ? (i.order = "score")
                : -1 !== ["share"].indexOf(n) && (i.order = "comment"),
              (i.label = "latest" === n ? "all" : n)),
          e
            ? ((this.pageNum = 0),
              (this.rssListCount = 0),
              (i.begin = ""),
              (i.begin_score = ""))
            : ((this.pageNum += 1),
              (this.rssListCount = this.commentsData.length),
              (i.begin = this.begin),
              (i.begin_score = this.begin_score)),
          "zxg" === f.platform
            ? (i.rssListCount = this.rssListCount)
            : (i.pageNum = this.pageNum),
          i
        );
      },
      hideOperateItem: function (e) {
        var t;
        return (
          (null == (t = null == e ? void 0 : e.topic_info)
            ? void 0
            : t.topic_id) && "dailyStock" === this.pageType
        );
      },
    }),
  };
Array ||
  (
    b.resolveComponent("noNetwork") +
    b.resolveComponent("noData") +
    b.resolveComponent("ComItem") +
    b.resolveComponent("foldTail") +
    b.resolveComponent("loadMore")
  )();
var H = b._export_sfc(z, [
  [
    "render",
    function (e, t, n, i, o, r) {
      return b.e(
        { a: o.pageInit },
        o.pageInit
          ? b.e(
              { b: "hqStock" === n.pageType && r.showTags.length > 1 },
              "hqStock" === n.pageType && r.showTags.length > 1
                ? {
                    c: b.f(r.showTags, function (e, t, n) {
                      return {
                        a: b.t(e.text),
                        b: b.o(
                          function (t) {
                            return r.changeTag(e.name);
                          },
                          4219,
                          t
                        ),
                        c: b.n(o.activeTabKey === e.name ? "active" : ""),
                        d: b.n(e.isShow ? "isShow" : ""),
                        e: t,
                      };
                    }),
                  }
                : {},
              {
                d:
                  o.noNetwork ||
                  (!o.noNetwork && !o.firstLoading && !o.commentsData.length) ||
                  o.riskMsg,
              },
              o.noNetwork ||
                (!o.noNetwork && !o.firstLoading && !o.commentsData.length) ||
                o.riskMsg
                ? b.e(
                    { e: o.noNetwork },
                    o.noNetwork ? { f: b.o(r.clickReload, 4220) } : {},
                    {
                      g:
                        (!o.noNetwork &&
                          !o.firstLoading &&
                          !o.commentsData.length) ||
                        o.riskMsg,
                    },
                    (!o.noNetwork &&
                      !o.firstLoading &&
                      !o.commentsData.length) ||
                      o.riskMsg
                      ? {
                          h: b.p({
                            text: n.isVIP
                              ? "解锁后可查看评论"
                              : o.riskMsg && o.riskMsg.length > 0
                              ? o.riskMsg
                              : "别观望，加入评论",
                          }),
                        }
                      : {}
                  )
                : {},
              { i: o.commentsData.length && !o.riskMsg },
              o.commentsData.length && !o.riskMsg
                ? {
                    j: b.f(o.commentsData, function (e, t, i) {
                      return b.e(
                        { a: !e.folding || !o.showTail[e.count] },
                        e.folding && o.showTail[e.count]
                          ? {}
                          : {
                              b: e.beforeBanner ? 1 : "",
                              c: e.afterBanner ? 1 : "",
                              d: b.o(
                                function (t) {
                                  return r.onHandleTapList(e, t);
                                },
                                4221,
                                e.id
                              ),
                              e: b.o(r.commentReport, 4222, e.id),
                              f: "3ba2cf82-2-" + i,
                              g: b.p({
                                pageType: n.pageType,
                                itemData: e,
                                comIndex: e.id,
                                itemTopHandle: r.itemTopHandle,
                                itemBottomHandle: r.itemBottomHandle,
                                showLabels: o.showLabels,
                                pageId: n.pageId,
                                stockName: n.stockName,
                                topic: n.topic,
                                position: t,
                              }),
                            },
                        {
                          h:
                            t < o.commentsData.length - 1 &&
                            (!e.folding || !o.showTail[e.count]),
                        },
                        (!(t < o.commentsData.length - 1) ||
                          (e.folding && o.showTail[e.count]),
                        {}),
                        { i: e.hasFolding && o.showTail[e.count] },
                        e.hasFolding && o.showTail[e.count]
                          ? {
                              j: b.o(
                                function (t) {
                                  return r.resetUsr(e);
                                },
                                4223,
                                e.id
                              ),
                              k: "3ba2cf82-3-" + i,
                              l: b.p({ item: e, index: t }),
                            }
                          : {},
                        {
                          m: e.id,
                          n: e.id,
                          o: b.n(t ? "" : "first"),
                          p: "comItem_" + e.id,
                          q: e.id,
                        }
                      );
                    }),
                  }
                : {},
              {
                k:
                  "dailyStock" !== n.pageType &&
                  !o.firstLoading &&
                  o.commentsData.length &&
                  !o.riskMsg,
              },
              "dailyStock" === n.pageType ||
                o.firstLoading ||
                !o.commentsData.length ||
                o.riskMsg
                ? {}
                : {
                    l: b.o(r.loadData, 4224),
                    m: b.p({
                      noMoreText: r.noMoreText,
                      noMore: o.nomore,
                      currentType: n.currentType,
                      noNetwork: o.noNetwork,
                    }),
                  }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-3ba2cf82"],
]);
wx.createComponent(H);
