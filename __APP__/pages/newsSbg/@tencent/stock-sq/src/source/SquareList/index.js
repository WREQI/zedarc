require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  s = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable,
  p = function (e, t, n) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  h = function (e, t) {
    for (var n in t || (t = {})) l.call(t, n) && p(e, n, t[n]);
    if (u) {
      var o,
        i = r(u(t));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          n = o.value;
          m.call(t, n) && p(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return s(e, c(t));
  },
  f = function (e, t, n) {
    return new Promise(function (o, i) {
      var r = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(r, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  v = require("../../../../stock-community-base/utils/knife.js"),
  g = require("../../../../stock-community-base/utils/bus.js"),
  k = require("../../../../stock-community-base/utils/commentFilter.js"),
  w = require("../../utils/mixins/store.js"),
  b = require("../../utils/service/index.js"),
  x = require("../../../../wzq-lite-basket/api/StockBasketAPI.js"),
  y = require("../../../../../../../common/vendor.js"),
  T = require("../../../../stock-community-base/utils/constant.js"),
  P = require("../../utils/mixins/securityCheck/index.js"),
  D = require("../../../../stock-community-base/utils/privacyCheck.js"),
  _ = v.sdk,
  I = _.getUserInfo,
  L = _.navigateTo,
  S = {},
  C = 0,
  M = { userinfo: {} };
Object.keys(M).forEach(function (e) {
  S[e] = function () {
    return M[e];
  };
});
var q,
  j = d(h({}, w.store), {
    userInit: function () {
      "{}" === JSON.stringify(M.userinfo) &&
        I().then(function (e) {
          M.userinfo = e;
        });
    },
    onPageInit: function (e) {
      return f(this, arguments, function (e) {
        var t = this,
          n = e.params,
          o = e.scb,
          r = e.fcb;
        return i().mark(function e() {
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.t0 = "{}" === JSON.stringify(M.userinfo)), !e.t0)) {
                    e.next = 5;
                    break;
                  }
                  return (e.next = 4), I();
                case 4:
                  M.userinfo = e.sent;
                case 5:
                  return e.abrupt("return", t.getList(n, !0, o, r));
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })();
      });
    },
    getList: function (e, t, n, r) {
      var a = this;
      return new Promise(function (s, c) {
        b.getMainList(e, a.pageType, M.userinfo)
          .then(function () {
            for (var e = arguments.length, r = new Array(e), c = 0; c < e; c++)
              r[c] = arguments[c];
            return f(a, [].concat(r), function () {
              var e = this,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return i().mark(function a() {
                var c, u, l, m;
                return i().wrap(function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          t && ((C = 0), (e.commentsData.length = 0)),
                          (u = r.data || {}),
                          (i.next = 4),
                          k.CommentFilter(r.data, !0, !1, M.userinfo)
                        );
                      case 4:
                        (l = i.sent),
                          (m = l.commentsData) &&
                            m.length &&
                            (m.map(function (e) {
                              return (
                                17 == +e.type && ((C += 1), (e.hqCount = C)), e
                              );
                            }),
                            (c = e.commentsData).push.apply(c, o(m))),
                          n && n(t, u),
                          s(!0);
                      case 7:
                      case "end":
                        return i.stop();
                    }
                }, a);
              })();
            });
          })
          .catch(function (e) {
            r && r();
            var t = ""
              .concat(T.prefix[a.pageType], ".")
              .concat(T.moduleName, ".getdata.error");
            a.$emit("commentReport", t), c(e);
          });
      });
    },
    updateGdData: function () {
      return f(
        this,
        null,
        i().mark(function e() {
          var t, n, o, r, a, s, c, u, l, m, p;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((t = new x.StockBasketAPI(this.hqBridge)),
                      (n = []),
                      this.commentsData.map(function (e) {
                        var t,
                          o,
                          i =
                            null ==
                            (o =
                              null == (t = null == e ? void 0 : e.watchList)
                                ? void 0
                                : t.info)
                              ? void 0
                              : o.id;
                        return i && n.push(i), e;
                      }),
                      0 !== n.length)
                    ) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    return (
                      (o = { ids: n.join(",") }),
                      (e.prev = 4),
                      (e.next = 7),
                      t.getBasketSummary(o)
                    );
                  case 7:
                    (r = e.sent), (a = r.data), (s = a.list), (c = 0);
                  case 11:
                    if (!(c < s.length)) {
                      e.next = 26;
                      break;
                    }
                    (u = s[c]), (l = u.info.id), (m = 0);
                  case 14:
                    if (!(m < this.commentsData.length)) {
                      e.next = 23;
                      break;
                    }
                    if (!(p = this.commentsData[m].watchList)) {
                      e.next = 20;
                      break;
                    }
                    if (l !== p.info.id) {
                      e.next = 20;
                      break;
                    }
                    return (
                      (this.commentsData[m].watchList = u),
                      e.abrupt("break", 23)
                    );
                  case 20:
                    m++, (e.next = 14);
                    break;
                  case 23:
                    c++, (e.next = 11);
                    break;
                  case 26:
                    e.next = 30;
                    break;
                  case 28:
                    (e.prev = 28), (e.t0 = e.catch(4));
                  case 30:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[4, 28]]
          );
        })
      );
    },
    onPutLike: function (e, t) {
      return f(
        this,
        null,
        i().mark(function e() {
          var n, o, r, a, s;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = "{}" === JSON.stringify(M.userinfo)), !e.t0)) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 4), I(!0);
                  case 4:
                    M.userinfo = e.sent;
                  case 5:
                    (r = this.commentsData[t]).like_id
                      ? ((r.like_id = ""), (r.like_num -= 1))
                      : ((r.like_id = r.id),
                        (r.like_num += 1),
                        y.StockBridge.busEmit("growth-user.behavior.union", {
                          type: "click",
                          event: "custom_like_comment",
                        }),
                        this.$emit("onPutLike")),
                      (a = { attitude: r.like_id ? -1 : 0, publish_id: r.id }),
                      b.putRssLike(
                        "wzq" === v.platform
                          ? h(
                              {
                                nickname:
                                  null == (n = this.pUserinfo)
                                    ? void 0
                                    : n.nickname,
                                avatar_url:
                                  null == (o = this.pUserinfo)
                                    ? void 0
                                    : o.headimgurl,
                              },
                              a
                            )
                          : a,
                        M.userinfo,
                        !1
                      ),
                      (s = ""
                        .concat(T.prefix[this.pageType], ".")
                        .concat(T.moduleName, ".dianzan_tap")),
                      this.$emit("commentReport", {
                        event: s,
                        eventName: s,
                        data: { postid: r.id },
                      });
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
    },
    onRecommendFollow: function (e) {
      return f(this, arguments, function (e) {
        var t = this,
          n = e.status,
          o = e.toOpenid;
        return i().mark(function e() {
          var r, a, s, c;
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((e.t0 = M.userinfo.openid), e.t0)) {
                    e.next = 5;
                    break;
                  }
                  return (e.next = 4), I(!0);
                case 4:
                  M.userinfo = e.sent;
                case 5:
                  (s = { g_openid: M.userinfo.openid, to_openid: o }),
                    b.putFollow(
                      "wzq" === v.platform
                        ? h(
                            {
                              app: "wzq",
                              check: 12,
                              nickname:
                                null == (r = t.pUserinfo) ? void 0 : r.nickname,
                              avatar_url:
                                null == (a = t.pUserinfo)
                                  ? void 0
                                  : a.headimgurl,
                            },
                            s
                          )
                        : s,
                      M.userinfo,
                      n,
                      !1
                    ),
                    (c = ""
                      .concat(T.prefix[t.pageType], ".")
                      .concat(T.moduleName, ".recommend_guanzhu_tap")),
                    t.$emit("commentReport", c),
                    t.$emit("recommendFollow", { status: n, toOpenid: o });
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })();
      });
    },
    onRecommendList: function () {
      L({ path: "/community/hotFans", instance: this });
    },
    onTapFollow: function (e, t) {
      return f(
        this,
        null,
        i().mark(function e() {
          var n, o, r, a, s, c;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = M.userinfo.openid), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 4), I(!0);
                  case 4:
                    M.userinfo = e.sent;
                  case 5:
                    (r = this.commentsData[t]),
                      (a = r.isFollow
                        ? "已取消关注"
                        : "关注成功，可在「股友圈」看Ta的动态~"),
                      (r.isFollow = !r.isFollow),
                      (s = {
                        g_openid: M.userinfo.openid,
                        to_openid: r.user_id,
                      }),
                      b.putFollow(
                        "wzq" === v.platform
                          ? h(
                              {
                                app: "wzq",
                                check: 12,
                                nickname:
                                  null == (n = this.pUserinfo)
                                    ? void 0
                                    : n.nickname,
                                avatar_url:
                                  (null == (o = this.pUserinfo)
                                    ? void 0
                                    : o.headimgurl) || T.headimgurl,
                              },
                              s
                            )
                          : s,
                        M.userinfo,
                        r.isFollow,
                        !1
                      ),
                      (c = ""
                        .concat(T.prefix[this.pageType], ".")
                        .concat(T.moduleName, ".guanzhu_tap")),
                      this.$emit("commentReport", {
                        event: c,
                        eventName: c,
                        data: { postid: r.id },
                      }),
                      this.$emit("onTapFollow", { text: a, itemData: r });
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
    },
  }),
  $ = (
    (y.wx$1.getWindowInfo && y.wx$1.getWindowInfo()) ||
    y.wx$1.getSystemInfoSync()
  ).windowHeight;
q = $;
var B = Date.now(),
  A = function (e, t, n) {
    return (
      Date.now() - B > t &&
      ((B = Date.now()),
      (function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (!e) return !1;
        var n = e,
          o = n.getBoundingClientRect(),
          i = o.bottom,
          r = o.top,
          a = o.height;
        if (r < 0 || i < 0) return !1;
        var s = q - 0;
        return a - (i - s) >= a * t || (i >= a && i <= s);
      })(e, n))
    );
  },
  N = {
    props: {},
    data: function () {
      return {
        collectReportedMap: [],
        postList: [],
        topicIdMap: [],
        positionList: [],
      };
    },
    methods: {
      onTouchMove: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.7;
        this.sendExposure("number" == typeof t ? t : 10, n),
          this.checkTopicItem(n),
          setTimeout(function () {
            e.checkPromotion(n);
          }, 2e3);
      },
      checkTopicItem: function (e) {
        var t,
          n,
          o,
          i = this.$refs.topicItem;
        if (i) {
          var r = null == (t = i[0]) ? void 0 : t.isTopic,
            a = null == (n = i[0]) ? void 0 : n.comIndex,
            s = null == (o = i[0]) ? void 0 : o.$el;
          -1 === this.topicIdMap.indexOf(r) &&
            s &&
            A(s, 0, e) &&
            (this.topicIdMap.push(r),
            b.recordTopic({ topic_id: r, subject_id: a }),
            this.$emit("commentReport", "shequ_gegu_topic_operate_baoguang"));
        }
      },
      checkPromotion: function (e) {
        var t,
          n = this.$refs.dailybox;
        if (n) {
          var o = null == (t = n.proTopic) ? void 0 : t.topic_id,
            i = null == n ? void 0 : n.$el;
          -1 === this.topicIdMap.indexOf(o) &&
            i &&
            A(i, 0, e) &&
            (this.topicIdMap.push(o),
            b.reportPromotion({ topic_id: o }),
            this.$emit("commentReport", "shequ_detail_daily_baoguang"));
        }
      },
      sendExposure: function (e, t) {
        var n = this,
          o = this.$refs.comItem;
        (
          (o &&
            o.filter(function (e) {
              return -1 === n.collectReportedMap.indexOf(e.dataset.id);
            })) ||
          []
        ).map(function (o) {
          if (A(o, 0, t)) {
            var i = o.dataset || {},
              r = i.id,
              a = i.index;
            r &&
              -1 === n.collectReportedMap.indexOf(r) &&
              n.handleSendData(r, a, e);
          }
        });
      },
      handleSendData: function (e, t, n) {
        this.collectReportedMap.push(e),
          this.postList.push(e),
          this.positionList.push(t),
          this.postList.length >= n && this.sendAndResetExposure();
      },
      sendAndResetExposure: function () {
        if (this.postList.length) {
          var e = ""
              .concat(T.prefix[this.pageType], "_")
              .concat(
                this.activeTabKey ? "".concat(this.activeTabKey, "_") : "",
                "baoguang"
              ),
            t = {
              postlist: this.postList.join(","),
              positionlist: this.positionList.join(","),
            };
          this.$emit("commentReport", { eventName: e, data: t }),
            (this.postList = []),
            (this.positionList = []);
        }
      },
      sendMaxPage: function () {
        var e = "".concat(T.prefix[this.pageType], "_feedsview");
        "square" === this.pageType &&
          (e = ""
            .concat(T.prefix.index, "_")
            .concat(this.pageType, "_feedsview"));
        var t = this.collectReportedMap.length;
        this.$emit("commentReport", { eventName: e, data: { maxPage: t } });
      },
      onShow: function () {
        window.addEventListener("touchmove", this.onTouchMove),
          window.addEventListener("scroll", this.onTouchMove),
          this.onTouchMove();
      },
      onHide: function () {
        this.sendMaxPage(),
          this.sendAndResetExposure(),
          window.removeEventListener("touchmove", this.onTouchMove),
          window.removeEventListener("scroll", this.onTouchMove);
      },
    },
  },
  R = (function () {
    function e(n) {
      t(this, e),
        (this.unreported = []),
        (this.recorded = new Set()),
        (this.report = n);
    }
    return (
      n(e, [
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
              var o,
                i = [],
                a = [],
                s = [],
                c = r(this.unreported);
              try {
                for (c.s(); !(o = c.n()).done; ) {
                  var u = o.value.data;
                  i.push(u.stocklist),
                    a.push(u.positionlist),
                    s.push(u.positionlist);
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
              (n.stocklist = i.join(",")),
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
      e
    );
  })(),
  F = (function () {
    function e(n) {
      t(this, e),
        (this.data = {}),
        (this.qtPollingTimer = null),
        (this.exposurePool = new R(n));
    }
    return (
      n(e, [
        {
          key: "setStocks",
          value: function (e) {
            return f(
              this,
              null,
              i().mark(function t() {
                var n, o, a, s, c;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (n = {}), (o = []), (a = r(e));
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
                                    o.push(c));
                          } catch (e) {
                            a.e(e);
                          } finally {
                            a.f();
                          }
                          (this.data = n),
                            o.length > 0 &&
                              (this.requestQt(o), this.checkAdded(o));
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
            g.EvtBus.$on(this.updateEvent(e), t);
          },
        },
        {
          key: "$off",
          value: function (e, t) {
            g.EvtBus.$off(this.updateEvent(e), t);
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
            return f(
              this,
              null,
              i().mark(function t() {
                var n, o, a, s, c, u, l, m;
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
                            (o = []), (t.prev = 4), (t.next = 7), b.getQTs(n)
                          );
                        case 7:
                          (a = t.sent), (s = r(n)), (t.prev = 9), s.s();
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
                          !(m = this.data[u]) ||
                            (m.name === l.name && m.updown === l.updown) ||
                            ((m.name = l.name),
                            (m.updown = l.updown),
                            o.push(u));
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
                          this.notifyUpdate(o), (t.next = 33);
                          break;
                        case 31:
                          (t.prev = 31), (t.t1 = t.catch(4));
                        case 33:
                          return t.abrupt("return", o);
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
            return f(
              this,
              null,
              i().mark(function t() {
                var n, o, a, s, c, u, l, m, p, h;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (o = null != e ? e : Object.keys(this.data)) &&
                            0 !== o.length
                          ) {
                            t.next = 3;
                            break;
                          }
                          return t.abrupt("return");
                        case 3:
                          if (
                            ((a = []),
                            (s = {}),
                            (t.prev = 5),
                            "zxg" !== v.platform)
                          ) {
                            t.next = 28;
                            break;
                          }
                          (c = r(o)), (t.prev = 8), c.s();
                        case 10:
                          if ((u = c.n()).done) {
                            t.next = 18;
                            break;
                          }
                          return (
                            (l = u.value),
                            (t.next = 14),
                            v.sdk.checkStockExist(l)
                          );
                        case 14:
                          (m = t.sent),
                            (s[l] =
                              null != (n = null == m ? void 0 : m.exist) && n);
                        case 16:
                          t.next = 10;
                          break;
                        case 18:
                          t.next = 23;
                          break;
                        case 20:
                          (t.prev = 20), (t.t0 = t.catch(8)), c.e(t.t0);
                        case 23:
                          return (t.prev = 23), c.f(), t.finish(23);
                        case 26:
                          t.next = 31;
                          break;
                        case 28:
                          return (t.next = 30), b.checkStocksAdded(o);
                        case 30:
                          s = t.sent;
                        case 31:
                          for (p in s)
                            (h = !!s[p]),
                              this.data[p] &&
                                this.data[p].added != h &&
                                ((this.data[p].added = h), a.push(p));
                          this.notifyUpdate(a), (t.next = 37);
                          break;
                        case 35:
                          (t.prev = 35), (t.t1 = t.catch(5));
                        case 37:
                          return t.abrupt("return", a);
                        case 38:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [
                    [5, 35],
                    [8, 20, 23, 26],
                  ]
                );
              })
            );
          },
        },
        {
          key: "operateStock",
          value: function (e, t) {
            return f(
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
                          if ("zxg" !== v.platform) {
                            n.next = 15;
                            break;
                          }
                          return (n.next = 8), t;
                        case 8:
                          if (!n.sent) {
                            n.next = 12;
                            break;
                          }
                          v.sdk.addStockToGroup(e), (n.next = 13);
                          break;
                        case 12:
                          v.sdk.removeStockFromGroup(e);
                        case 13:
                          n.next = 22;
                          break;
                        case 15:
                          if ("mini" !== v.platform) {
                            n.next = 20;
                            break;
                          }
                          return (n.next = 18), v.sdk.operateStock(e, t);
                        case 18:
                          n.next = 22;
                          break;
                        case 20:
                          return (n.next = 22), b.operateStock(e, t);
                        case 22:
                          (o = this.data[e]) &&
                            ((o.added = t), this.notifyUpdate([e])),
                            (n.next = 28);
                          break;
                        case 26:
                          (n.prev = 26), (n.t0 = n.catch(0));
                        case 28:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  this,
                  [[0, 26]]
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
              g.EvtBus.$emit(t.updateEvent(e), t.data[e]);
            });
          },
        },
        {
          key: "checkLogin",
          value: function () {
            return f(
              this,
              null,
              i().mark(function e() {
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ("zxg" !== v.platform) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 3), v.sdk.getUserInfo(!0);
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
      e
    );
  })(),
  E = {
    CU_calcData: function (e) {
      var t = this,
        n = e.res,
        o = e.isFirst,
        i = e.cb;
      k.CommentFilter(n, o, !0).then(function (e) {
        var n = [];
        o && e.hotData && (n = e.hotData.commentsData);
        var r = e.commentsData;
        o || (r = t.iCommentsData.concat(r)),
          i && i({ iHotData: n, iCommentsData: r });
      });
    },
    CU_refreshTimeFormat: function (e) {
      var t = function (e) {
          var t = e;
          return String(e).length < 2 && (t = "0".concat(e)), t;
        },
        n = e || new Date(),
        o = t(n.getDate());
      return ""
        .concat(t(n.getMonth() + 1), "/")
        .concat(o, " ")
        .concat(t(n.getHours()), ":")
        .concat(t(n.getMinutes()), ":")
        .concat(t(n.getSeconds()));
    },
    CU_updateFreshTime: function (e) {
      if (e) {
        var t = e.overRefreshPortDom,
          n = t && t.querySelector(".freshTime");
        n && (n.innerHTML = this.CU_refreshTimeFormat(new Date()));
      }
    },
    CU_createHtml: function (e, t) {
      var n = "";
      return (
        "refreshing" === t && (n = '<span class="loadingIcon"></span>'),
        '<div class="scrollHtml">'
          .concat(n, " ")
          .concat(e, " ")
          .concat(
            "overRefreshPort" === t ? '<span class="freshTime"></span>' : "",
            "</div>"
          )
      );
    },
    CU_newSubject: function (e) {
      var t = this;
      if ((v.isString(e) && (e = v.doJSONparse(e)), e && v.isObject(e))) {
        var n = e && e.post ? e.post : e,
          o = n.subject_id || n.commentid || "";
        o &&
          this.getList({
            isFirst: !0,
            onlyGetData: !0,
            cb: function (e) {
              var n = e.iHotData,
                i = e.iCommentsData,
                r = e.res,
                a = e.isFirst,
                s = !1;
              i.forEach(function (e) {
                e.id === o && (s = !0);
              }),
                s &&
                  (t.setResData &&
                    t.setResData({
                      iHotData: n,
                      iCommentsData: i,
                      res: r,
                      isFirst: a,
                    }),
                  t.$nextTick(function () {
                    t.scrollToTop({ subjectId: o });
                  }));
            },
          });
      }
    },
    CU_updateTimeLine: function (e) {
      var t = this,
        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        o = e.parent_id || e.id || "",
        i = v.getUrlParams(this, v.platform),
        r = (i && i.newsCommentId) || this.newsCommentId || "";
      if (o) {
        var a = function (e, t) {
            if (e && v.isArray(e))
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                if (v.isObject(i) && i.id) {
                  if ("follow" === t.type || "follow" === t.nType)
                    i.user_id === t.to_openid && s({ item: i, post: t });
                  else if (i.id === o) {
                    c({ list: e, item: i, post: t, index: n });
                    break;
                  }
                } else if (v.isArray(i))
                  for (var r = 0; r < i.length; r++) {
                    var a = i[r];
                    if ("follow" === t.type)
                      a.user_id === t.to_openid && s({ item: a, post: t });
                    else if (a.id === o) {
                      c({ list: i, item: a, post: t, index: r });
                      break;
                    }
                  }
              }
          },
          s = function (e) {
            var n = e.item,
              o = e.post;
            t.$set(n, "isFollow", o.isFollow);
          },
          c = function (e) {
            var n = e.list,
              o = e.item,
              i = e.post,
              r = e.index;
            if ("complaint" === i.type) t.$delete(n, r);
            else if ("comment" === i.type)
              t.$set(o, "comment_num", i.comment_num);
            else if ("like" === i.type)
              t.$set(o, "like_num", i.like_num),
                t.$set(o, "like_id", i.like_id || "");
            else {
              var a = {
                retweet_count: i.retweet_count || "",
                like_num: i.like_num || "",
                like_id: i.like_id || "",
                commentsTail: i.commentsTail,
              };
              Object.assign(o, a);
            }
          };
        n
          ? this.CU_updateCardItem({
              itemId: o,
              newsCommentId: r,
              cb: function (n) {
                var o = Object.assign({}, e, n);
                a(t.iCommentsData, o), a(t.iHotData, o);
              },
            })
          : (a(this.iCommentsData, e), a(this.iHotData, e));
      }
    },
    CU_updateCardItem: function (t) {
      var n = t.itemId,
        o = t.newsCommentId,
        i = t.cb,
        r = new Promise(function (e) {
          b.getCommentDetail({ subjectId: n, newsCommentId: o }).then(function (
            t
          ) {
            k.CommentFilter(t.data || t, !1, !1, {
              openid: "5F3337AFB9FC64D9B5B47F1DBEF5AF61",
            }).then(function (t) {
              e(t.commentsData[0]);
            });
          });
        }),
        a = new Promise(function (e) {
          b.commentListPlatContent({ subjectId: n, first: !0, begin: "" }).then(
            function (t) {
              k.CommentFilter(t).then(function (t) {
                e(t.commentsData);
              });
            }
          );
        });
      return Promise.all([r, a]).then(function (t) {
        var n = e(t, 2),
          o = n[0],
          r = n[1],
          a = Object.assign({}, o);
        return (
          a.commentsTail || (a.commentsTail = { cnt: "0" }),
          (a.commentsTail.cnt = r.length),
          (a.commentsTail.list = r),
          i && i(a),
          a
        );
      });
    },
  },
  U = {
    mixins: [N, P.securityCheck],
    name: "SquareList",
    components: {
      ComItem: function () {
        return "../ComItem/index.js";
      },
      loadMore: function () {
        return "../loadMore/index.js";
      },
      noData: function () {
        return "../noData/index.js";
      },
      noNetwork: function () {
        return "../noNetwork/index.js";
      },
      BaseImage: function () {
        return "../baseImage/index.js";
      },
      recommendArea: function () {
        return "../recommendArea/index.js";
      },
      hotPost: function () {
        return "../hotPost/index.js";
      },
    },
    inject: {
      BUS: {
        default: function () {
          return {};
        },
      },
      hqBridge: {
        default: function () {
          return {};
        },
      },
      didAgreeUserAgreement: {
        default: function () {
          return {};
        },
      },
      onCheckUserAgreementStatus: { default: function () {} },
      xcxScene: { default: "" },
    },
    provide: function () {
      return { stockPollPool: this.stockPollPool };
    },
    props: {
      pageType: { type: String, default: "square" },
      curPage: { type: String, default: "square" },
      pUserinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      from: { type: String, default: "" },
      hotRank: { type: Number, default: 0 },
      reportPrefix: { type: String, default: "" },
      tabsStyleType: { type: String, default: "1" },
      theme: { type: String, default: "blue" },
    },
    data: function () {
      var e = this;
      return {
        pageInit: !1,
        platform: v.platform,
        noNetwork: !1,
        firstLoading: !0,
        nomore: !1,
        isLoading: !1,
        pageNum: 0,
        feedsBanner: [],
        vorderArr: [],
        showLabels: [],
        useBlack: !1,
        commentsData: [],
        userInfo: "",
        riskMsg: "",
        isMiniApp: v.IsMINAPP,
        isMpZxgH5: v.IS_ZXG_XCX_ALLH5,
        stockPollPool:
          ["wzq", "mini"].includes(v.platform) && "square" === this.pageType
            ? new F(function (t, n) {
                e.$emit("commentReport", { eventName: t, data: n });
              })
            : null,
        iCommentsData: [],
      };
    },
    computed: d(h({}, S), {
      showRecommend: function () {
        return "qqmac" !== v.platform || this.userInfo;
      },
      itemTopHandle: function () {
        return (
          {
            wzq: ["follow"],
            zxg: ["follow"],
            web: ["follow"],
            qqmac: ["follow"],
            mini: ["follow"],
          }[v.platform] || []
        );
      },
      itemBottomHandle: function () {
        return (
          {
            web: ["comment", "like"],
            wzq:
              this.isMiniApp || this.isLiteMode
                ? ["comment", "like"]
                : ["turn", "comment", "like"],
            zxg: ["turn", "comment", "like"],
            mini: ["comment", "like"],
            qqmac: ["turn", "comment", "like"],
          }[v.platform] || []
        );
      },
      noMoreText: function () {
        return (
          {
            web: "已经到底了，触底反弹否极泰来",
            wzq: "已经到底了，触底反弹否极泰来",
            zxg: "已经到底了，触底反弹否极泰来",
            qqmac: "已经到底了，触底反弹否极泰来",
          }[v.platform] || ""
        );
      },
      isLiteMode: function () {
        return v.IS_LITE_MODE;
      },
    }),
    created: function () {
      return f(
        this,
        null,
        i().mark(function e() {
          var t = this;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    g.EvtBus.$on("userInfoReady", function (e) {
                      (t.userInfo = e), t.init();
                    }),
                      this.curPage === this.pageType && this.init(),
                      y.StockBridge.busOn(
                        "updateTimelineInNewsTab",
                        this.updateTimeLine
                      );
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
      null == (e = this.stockPollPool) || e.stopPollingQt(),
        y.StockBridge.busOff("updateTimelineInNewsTab", this.updateTimeLine);
    },
    watch: {
      curPage: function (e) {
        e !== this.pageType || this.pageInit || this.init();
      },
      commentsData: {
        handler: function () {
          var e, t;
          if (this.stockPollPool) {
            var n = [];
            null == (e = this.commentsData) ||
              e.forEach(function (e) {
                var t = e.relatedStocks;
                t &&
                  t.length > 0 &&
                  n.push.apply(
                    n,
                    o(
                      t.map(function (e) {
                        return e.symbol;
                      })
                    )
                  );
              }),
              null == (t = this.stockPollPool) || t.setStocks(n);
          }
        },
        deep: !0,
        immediate: !0,
      },
    },
    methods: d(h(h({}, j), E), {
      init: function () {
        return f(
          this,
          null,
          i().mark(function e() {
            var t,
              n = this;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        this.userInit(),
                        (t = this.getParams(!0)),
                        (e.next = 4),
                        this.onPageInit({
                          params: t,
                          scb: this.successHanlde,
                          fcb: this.networkErrorHandle,
                        })
                      );
                    case 4:
                      (this.pageInit = e.sent),
                        setTimeout(function () {
                          n.onTouchMove(0, 0.7), n.onShow();
                        }, 1e3);
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
      onShow: function () {
        var e;
        null == (e = this.stockPollPool) || e.startPollingQt(),
          this.updateGdData();
      },
      onHide: function () {
        var e, t;
        null == (e = this.stockPollPool) || e.stopPollingQt(),
          null == (t = this.stockPollPool) || t.exposurePool.flush();
      },
      showBanner: function (e) {
        return (
          (this.isMpZxgH5 || !this.isMiniApp) &&
          !this.isLiteMode &&
          ["post", "topic", "news", "miniapp", "pk", "atv"].includes(e)
        );
      },
      recommendFollow: function (e) {
        this.onRecommendFollow(e);
      },
      hotScroll: function () {
        this.$emit("hotScroll");
      },
      hotScrollEnd: function () {
        this.$emit("hotScrollEnd");
      },
      handleNavigateTo: function (e) {
        this.$emit("navigateTo", e);
      },
      commentReport: function (e) {
        this.$emit("commentReport", e);
      },
      tapPerson: function (e) {
        this.onTapPerson("tapPerson", e, "", this);
      },
      toRecommendList: function () {
        this.onRecommendList();
      },
      onHandleTapList: function (e, t) {
        return f(
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
              m,
              p,
              h = this;
            return i().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (!D.isH5Native) {
                        n.next = 8;
                        break;
                      }
                      if (
                        ![
                          "putComment",
                          "turn",
                          "putLike",
                          "tapFollow",
                          "tapDeleteItem",
                        ].includes(null == t ? void 0 : t.eventName)
                      ) {
                        n.next = 6;
                        break;
                      }
                      return (n.next = 4), D.sqPrivacyCheck();
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
                        this.didAgreeUserAgreement.value ||
                        !this.onCheckUserAgreementStatus
                      ) {
                        n.next = 10;
                        break;
                      }
                      return n.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 10:
                      (s = (a = t || {}).eventName),
                        (c = a.eventData),
                        (u = {
                          putComment: "onPutComment",
                          turn: "onHandelTurn",
                          putLike: "onPutLike",
                          tapPerson: "onTapPerson",
                          tapFollow: "onTapFollow",
                          tapImage: "onTapImage",
                          tapDetail: "onTapDetail",
                          tapContent: "onTapContent",
                          tapShowBox: "onTapShowBox",
                          toggleShow: "onToggleShow",
                          tapOtherSource: "onTapOtherSource",
                          goSharePage: "onGoSharePage",
                          tapMore: "onTapMore",
                          tapDeleteItem: "onTapDeleteItem",
                          commentReport: "commentReport",
                        }),
                        (l = (c || {}).fakeInput),
                        (m = i().mark(function t(n) {
                          var a, m, p, d;
                          return i().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  n === s &&
                                    ((a = h.commentsData[e] || {}),
                                    (m =
                                      "tapFollow" === s && a.isFollow
                                        ? "tapUnfollow"
                                        : s),
                                    (p = { pageType: h.pageType }),
                                    (d =
                                      null ==
                                      (r =
                                        null ==
                                        (o = null == a ? void 0 : a.watchList)
                                          ? void 0
                                          : o.info)
                                        ? void 0
                                        : r.id) && (p.gdId = d),
                                    h
                                      .securityCheck({
                                        eventName: m,
                                        fakeInput: l,
                                        postData: a,
                                      })
                                      .then(function () {
                                        h[u[n]](c, e, p);
                                      }));
                                case 1:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })),
                        (n.t0 = i().keys(u));
                    case 13:
                      if ((n.t1 = n.t0()).done) {
                        n.next = 18;
                        break;
                      }
                      return (p = n.t1.value), n.delegateYield(m(p), "t2", 16);
                    case 16:
                      n.next = 13;
                      break;
                    case 18:
                      this.$forceUpdate();
                    case 19:
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
          o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (o || (!this.isLoading && this.pageType === this.curPage)) {
          n &&
            (this.updateRecommendArea(),
            null == (e = this.stockPollPool) || e.exposurePool.reset()),
            (this.isLoading = !0);
          var i = this.getParams(n);
          return new Promise(function (e, o) {
            t.getList(i, n, t.successHanlde, t.networkErrorHandle)
              .then(function (t) {
                e(t);
              })
              .catch(function (e) {
                o(e);
              });
          });
        }
      },
      updateRecommendArea: function () {
        var e, t, n, o;
        this.$refs.recommendArea && this.$refs.recommendArea.length
          ? this.$refs.recommendArea.forEach(function (e) {
              e.getNewList();
            })
          : "function" ==
              typeof (null ==
              (t = null == (e = this.$refs) ? void 0 : e.recommendArea)
                ? void 0
                : t.getNewList) &&
            (null ==
              (o = null == (n = this.$refs) ? void 0 : n.recommendArea) ||
              o.getNewList());
      },
      updateHotPost: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.hotpost) ||
          t.getHotList();
      },
      successHanlde: function (e, t) {
        var n,
          i = t.more_flag,
          r = void 0 === i ? "" : i,
          a = t.begin,
          s = void 0 === a ? "" : a,
          c = t.begin_score,
          u = void 0 === c ? "" : c,
          l = t.feeds_banner,
          m = void 0 === l ? [] : l,
          p = t.comment_status,
          h = void 0 === p ? "" : p,
          d = t.risk_msg;
        e &&
          ((this.firstLoading = !1),
          (this.feedsBanner = []),
          (this.vorderArr = [])),
          (this.feedsBanner = m && [].concat(o(this.feedsBanner), o(m))),
          (this.commentsData = this.feedsInsertBanner(
            this.commentsData,
            this.feedsBanner,
            10 * (this.pageNum + 1)
          )),
          (this.riskMsg = d),
          this.$emit("renderFinished", {
            listData: this.commentsData,
            isFirst: e,
            commentStatus: h,
            riskMsg: d,
          }),
          (this.iCommentsData = this.commentsData),
          (this.nomore = !r),
          y.StockBridge.busEmit("getNoMore", {
            nomore: this.nomore,
            commmentDataLength: this.commentsData.length,
          }),
          (this.begin =
            s ||
            (null == (n = this.commentsData[this.commentsData.length - 1])
              ? void 0
              : n.id) ||
            ""),
          (this.begin_score = u),
          (this.isLoading = !1),
          this.$forceUpdate();
      },
      feedsInsertBanner: function (e, t, n) {
        var o = this,
          i = e;
        return (
          t &&
            t.forEach &&
            t.forEach(function (e) {
              var t = e.vorder,
                r = e.type;
              o.showBanner(r) &&
                t < n &&
                !o.vorderArr.includes(t - 1) &&
                (i.splice(t - 1, 0, e),
                o.vorderArr.push(t - 1),
                i[t - 2] && (i[t - 2].beforeBanner = !0),
                i[t] && (i[t].afterBanner = !0));
            }),
          i
        );
      },
      networkErrorHandle: function () {
        (this.noNetwork = !0), (this.firstLoading = !1), (this.isLoading = !1);
      },
      getParams: function (e) {
        var t = { limit: 10, content_link: 1 };
        return (
          e
            ? ((this.pageNum = 0), (t.begin = ""), (t.begin_score = ""))
            : ((this.pageNum += 1),
              (t.begin = this.begin),
              (t.begin_score = this.begin_score)),
          (t.pageNum = this.pageNum),
          (t.order = "time"),
          (t.withmini = 1),
          t
        );
      },
      bindTouchMove: function () {
        this.$refs.loadMore.bindTouchMove();
      },
      updateTimeLine: function (e) {
        this.CU_updateTimeLine(e, !1);
      },
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
    }),
  };
Array ||
  (
    y.resolveComponent("noNetwork") +
    y.resolveComponent("hotPost") +
    y.resolveComponent("ComItem") +
    y.resolveComponent("recommendArea") +
    y.resolveComponent("noData") +
    y.resolveComponent("loadMore")
  )();
var H = y._export_sfc(U, [
  [
    "render",
    function (e, t, n, o, i, r) {
      return y.e(
        { a: i.noNetwork && !i.commentsData.length },
        i.noNetwork && !i.commentsData.length
          ? {
              b: y.o(function (e) {
                return r.loadData(!0);
              }, 5511),
            }
          : {},
        { c: i.commentsData.length && i.pageInit && !i.riskMsg },
        i.commentsData.length && i.pageInit && !i.riskMsg
          ? y.e(
              { d: !r.isLiteMode },
              r.isLiteMode
                ? {}
                : {
                    e: y.sr("hotpost", "9d857bd2-1"),
                    f: y.o(r.hotScroll, 5512),
                    g: y.o(r.hotScrollEnd, 5513),
                    h: y.o(r.commentReport, 5514),
                    i: y.o(r.handleNavigateTo, 5515),
                    j: y.p({
                      hotRank: n.hotRank,
                      pageType: n.pageType,
                      tabsStyleType: n.tabsStyleType,
                      theme: n.theme,
                    }),
                  },
              {
                k: y.f(i.commentsData, function (e, t, o) {
                  return y.e(
                    { a: r.showBanner(e.type) },
                    r.showBanner(e.type)
                      ? {
                          b: "banner-" + o,
                          c: y.r("banner", { itemData: e, index: t }, o),
                        }
                      : {
                          d: e.beforeBanner ? 1 : "",
                          e: e.afterBanner ? 1 : "",
                          f: t,
                          g: y.o(
                            function (e) {
                              return r.onHandleTapList(t, e);
                            },
                            5516,
                            t
                          ),
                          h: y.o(r.commentReport, 5517, t),
                          i: y.o(r.showProfilePop, 5518, t),
                          j: "9d857bd2-2-" + o,
                          k: y.p({
                            last: t === i.commentsData.length - 1,
                            pageType: n.pageType,
                            itemData: e,
                            from: n.from,
                            itemTopHandle: r.itemTopHandle,
                            itemBottomHandle: r.itemBottomHandle,
                            showLabels: i.showLabels,
                            position: t,
                            BUS: r.BUS,
                            reportPrefix: n.reportPrefix,
                          }),
                        },
                    { l: 3 == +t && r.showRecommend },
                    3 == +t && r.showRecommend
                      ? {
                          m: y.sr("recommendArea", "9d857bd2-3-" + o, { f: 1 }),
                          n: y.o(r.recommendFollow, 5519, t),
                          o: y.o(r.toRecommendList, 5520, t),
                          p: y.o(r.tapPerson, 5521, t),
                          q: y.o(r.handleNavigateTo, 5522, t),
                          r: "9d857bd2-3-" + o,
                          s: y.p({ pageSource: "1", pageSize: 3 }),
                        }
                      : {},
                    {
                      t: e.id,
                      v: t,
                      w: t,
                      x: r.showBanner(e.type) || 3 == +t ? "" : "comItem",
                    }
                  );
                }),
              }
            )
          : {},
        {
          l:
            (!i.noNetwork && !i.commentsData.length && i.pageInit) || i.riskMsg,
        },
        (!i.noNetwork && !i.commentsData.length && i.pageInit) || i.riskMsg
          ? { m: y.p({ useBlack: i.useBlack, text: i.riskMsg }) }
          : {},
        { n: !i.firstLoading && i.commentsData.length && !i.riskMsg },
        i.firstLoading || !i.commentsData.length || i.riskMsg
          ? {}
          : {
              o: y.sr("loadMore", "9d857bd2-5"),
              p: y.o(r.loadData, 5523),
              q: y.p({
                noMoreText: r.noMoreText,
                nomore: i.nomore,
                noNetwork: i.noNetwork,
              }),
            },
        {
          r: y.o(function () {
            return e.onTouchMove && e.onTouchMove.apply(e, arguments);
          }, 5524),
        }
      );
    },
  ],
]);
wx.createComponent(H);
