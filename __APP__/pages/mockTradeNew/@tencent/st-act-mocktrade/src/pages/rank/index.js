var n = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../../../../@babel/runtime/helpers/createSuper"),
  o = function (n, e, r) {
    return new Promise(function (a, t) {
      var o = function (n) {
          try {
            u(r.next(n));
          } catch (n) {
            t(n);
          }
        },
        i = function (n) {
          try {
            u(r.throw(n));
          } catch (n) {
            t(n);
          }
        },
        u = function (n) {
          return n.done ? a(n.value) : Promise.resolve(n.value).then(o, i);
        };
      u((r = r.apply(n, e)).next());
    });
  },
  i = require("../../../../../../../common/vendor.js"),
  u = require("../../cp-util/navigator/index.js"),
  c = require("../../cp-util/appInfo/index.js"),
  s = require("../../services/BaseController.js"),
  l = require("../../utils/tool.js");
function k(n) {
  return n && 1 === n.length && "*" !== n ? "".concat(n, "**") : n;
}
var m = (function (n) {
    a(i, n);
    var o = t(i);
    function i() {
      var n;
      return (
        e(this, i),
        ((n = o.call(this)).mockTradeSwitch = !1),
        (n.contentList = []),
        (n.urank = {}),
        (n.rankList = {}),
        (n.rankHome = {}),
        (n.rankTotal = {}),
        n
      );
    }
    return (
      r(i, [
        {
          key: "getContentList",
          value: function (n) {
            var e = this;
            return s
              .myFetch(
                "https://wzq.tenpay.com/resources/vtools/mock_trade_rules_utf8.json"
              )
              .then(function (n) {
                return n.json();
              })
              .then(function (r) {
                (e.contentList = r[n].sort(function (n, e) {
                  return +n.seq - +e.seq;
                })),
                  e.emit(s.EVENT_NAME.GOT_RULE_LIST);
              });
          },
        },
        {
          key: "getRankData",
          value: function () {
            var n = this;
            return this.fetch(
              s.ACTIVITY_RANK_CGI,
              {
                action: "home",
                rank_name: s.config.rank_name,
                channel: s.config.channel,
              },
              { notNeedGameInfo: !0 }
            )
              .then(function (e) {
                var r, a;
                (null == (r = e.urank) ? void 0 : r.headimgurl) &&
                  (e.urank.headimgurl = e.urank.headimgurl.replace(
                    "http://",
                    "https://"
                  )),
                  (null == (a = e.urank) ? void 0 : a.nickname) &&
                    (e.urank.nickname = k(e.urank.nickname)),
                  e.rank_list &&
                    Array.isArray(e.rank_list) &&
                    e.rank_list.forEach(function (n) {
                      (null == n ? void 0 : n.headimgurl) &&
                        (n.headimgurl = n.headimgurl.replace(
                          "http://",
                          "https://"
                        )),
                        (null == n ? void 0 : n.nickname) &&
                          (n.nickname = k(n.nickname));
                    }),
                  (n.urank = e.urank),
                  (n.rankHome = e),
                  n.emit(s.EVENT_NAME.RANK_HOME);
              })
              .catch(function (n) {});
          },
        },
        {
          key: "getRankTotalData",
          value: function (n, e, r) {
            var a = this;
            return this.fetch(
              s.STOCK_GAME_RANK_CGI,
              {
                gameid: this.gameId,
                channel: s.config.channel,
                offset: n,
                limit: e,
                urank: r,
              },
              { notNeedGameInfo: !0 }
            )
              .then(function (n) {
                n.rank_list &&
                  Array.isArray(n.rank_list) &&
                  n.rank_list.forEach(function (n) {
                    (null == n ? void 0 : n.nickname) &&
                      (n.nickname = k(n.nickname));
                  }),
                  (a.rankTotal = n),
                  a.emit(s.EVENT_NAME.RANK_TOTAL);
              })
              .catch(function (n) {});
          },
        },
      ]),
      i
    );
  })(s.BaseController),
  f = {
    components: {
      errorModal: function () {
        return "../../components/errorModal.js";
      },
      rankList: function () {
        return "../../components/rankList.js";
      },
      rewardStage: function () {
        return "../../components/rewardStage.js";
      },
      tabNav: function () {
        return "../../cp-component/TabNav/mp.js";
      },
      TabView: function () {
        return "../../cp-component/TabView.js";
      },
      TabHost: function () {
        return "../../cp-component/TabHost.js";
      },
    },
    setup: function (e, r) {
      var a = this,
        t = (r.emit, new m()),
        k = i.ref(""),
        f = i.ref("");
      i.ref(!1), i.ref([]);
      var p = i.ref(s.RANK_TAB_LIST.WEEK),
        v = i.ref(""),
        d = i.ref(""),
        h = i.ref({}),
        _ = i.ref({}),
        T = i.ref([]),
        g = i.ref([]),
        w = i.ref([]),
        A = i.ref([]),
        b = i.ref([]),
        E = i.ref("345px"),
        N = i.ref(["周榜单", "总榜单"]),
        S = i.ref(null),
        L = i.computed(function () {
          return !0;
        }),
        R = function (n) {
          if (n) {
            var e = n;
            return "".concat(e.substr(4, 2), ".").concat(e.substr(6, 2));
          }
        };
      return (
        o(
          a,
          null,
          n().mark(function e() {
            return n().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (function () {
                        var n = c.getWindowInfo().windowWidth;
                        E.value = (n || 375) - 30 + "px";
                      })(),
                      (e.t0 = decodeURIComponent),
                      (e.next = 4),
                      u.getUrlParam("name")
                    );
                  case 4:
                    if (((e.t1 = e.sent), e.t1)) {
                      e.next = 7;
                      break;
                    }
                    e.t1 = "腾讯微证券模拟炒股规则";
                  case 7:
                    (e.t2 = e.t1),
                      (k.value = (0, e.t0)(e.t2)),
                      (T.value =
                        p.value != s.RANK_TAB_LIST.WEEK
                          ? t.rankHome.rank_list
                          : t.rankTotal.rank_list),
                      t.on(s.EVENT_NAME.RANK_HOME, function () {
                        var n;
                        (h.value =
                          (null == (n = t.rankHome) ? void 0 : n.urank) || {}),
                          (_.value = t.rankHome),
                          (g.value =
                            t.rankHome.rank_list &&
                            t.rankHome.rank_list.slice(3)),
                          (A.value = t.rankHome.rank_list),
                          (T.value = g.value),
                          (v.value = R(t.rankHome.date_begin)),
                          (d.value = R(t.rankHome.date_end));
                      }),
                      o(
                        a,
                        null,
                        n().mark(function e() {
                          return n().wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  t.getRankData();
                                case 1:
                                case "end":
                                  return n.stop();
                              }
                          }, e);
                        })
                      );
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        ),
        i.onBeforeUnmount(function () {
          t.off(s.EVENT_NAME.RANK_HOME), (t.currentTab = void 0);
        }),
        i.watch(p, function (n, e) {
          switch (n) {
            case s.RANK_TAB_LIST.WEEK:
              t.report("rank", "week", "click"),
                (p.value = s.RANK_TAB_LIST.WEEK),
                (T.value = g.value),
                (g.value =
                  t.rankHome.rank_list && t.rankHome.rank_list.slice(3));
              break;
            case s.RANK_TAB_LIST.TOTAL:
              t.report("rank", "total", "click"),
                (p.value = s.RANK_TAB_LIST.TOTAL),
                (T.value = w.value),
                (w.value =
                  t.rankTotal.rank_list && t.rankTotal.rank_list.slice(3));
          }
          t.currentTab = n;
        }),
        i.watch(T, function (n, e) {
          T.value = n;
        }),
        {
          name: k,
          id: f,
          currentTab: p,
          beginTime: v,
          endTime: d,
          urank: h,
          rankHome: _,
          rankList: T,
          rankWeekList: g,
          rankTotalList: w,
          rankWeekListRaw: A,
          rankTotalListRaw: b,
          windowWidths: E,
          navs: N,
          isSwiperShow: L,
          onTapTab: function (n) {
            (p.value = n),
              (g.value = t.rankHome.rank_list && t.rankHome.rank_list.slice(3)),
              (w.value =
                t.rankTotal.rank_list && t.rankTotal.rank_list.slice(3));
          },
          onDragging: function () {},
          onDropped: function (n) {
            n.currentSlide === s.RANK_TAB_LIST.WEEK &&
              (p.value = n.currentSlide);
          },
          onSwiperChange: function (n) {
            var e,
              r = n.detail && (null == (e = n.detail) ? void 0 : e.current);
            r === s.RANK_TAB_LIST.WEEK && (p.value = r);
          },
          onTabnavChange: function (n) {
            p.value = n;
          },
          layoutTabNav: function (n) {},
          cutString: function (n) {
            return l.cutStr(n, 6);
          },
          setSwiperindex: function (n) {
            S.value && S.value.setSwiperindex(n);
          },
          swiperref: S,
        }
      );
    },
  };
Array ||
  (
    i.resolveComponent("tab-nav") +
    i.resolveComponent("tab-view") +
    i.resolveComponent("reward-stage") +
    i.resolveComponent("rank-list") +
    i.resolveComponent("tab-host")
  )();
var p = i._export_sfc(f, [
  [
    "render",
    function (n, e, r, a, t, o) {
      return i.e(
        { a: a.windowWidths, b: a.beginTime },
        a.beginTime ? { c: i.t(a.beginTime), d: i.t(a.endTime) } : {},
        { e: a.urank },
        a.urank
          ? i.e(
              { f: "-1" != a.urank.rank && "--" != a.urank.rank },
              "-1" != a.urank.rank && "--" != a.urank.rank
                ? { g: i.t(a.urank.rank) }
                : {},
              {
                h: a.urank.headimgurl
                  ? a.urank.headimgurl
                  : "https://wzq.gtimg.com/resources/mocktrade/default_avatar.png",
                i: a.urank.nickname,
              },
              a.urank.nickname ? { j: i.t(a.cutString(a.urank.nickname)) } : {},
              { k: "-1" != a.urank.rank && "--" != a.urank.rank },
              "-1" != a.urank.rank && "--" != a.urank.rank
                ? i.e(
                    { l: a.urank.score / 1e4 },
                    a.urank.score / 1e4
                      ? {
                          m: i.t(
                            "-1" == a.urank.score || "--" == a.urank.score
                              ? "--"
                              : (a.urank.score / 1e4).toFixed(2)
                          ),
                          n: i.n(a.urank.score >= 0 ? "red" : "green"),
                        }
                      : {},
                    {
                      o:
                        "-1" != a.urank.score &&
                        "--" != a.urank.score &&
                        a.urank.score / 1e4,
                    },
                    "-1" != a.urank.score &&
                      "--" != a.urank.score &&
                      a.urank.score / 1e4
                      ? { p: i.n(a.urank.score >= 0 ? "red" : "green") }
                      : {}
                  )
                : {
                    q: i.t(
                      1 == +a.urank.reset
                        ? "重置账户后次周才可上榜"
                        : "本周访问且有过持仓才可上榜"
                    ),
                  }
            )
          : {},
        { r: a.windowWidths },
        {},
        {
          y: i.p({ "rank-list": a.rankWeekListRaw }),
          z: i.p({
            data: a.rankWeekList,
            order: 3,
            "empty-text": "当前暂无榜单",
            "list-type": "week",
          }),
          A: a.isSwiperShow ? 1 : "",
        },
        {},
        {
          E: a.currentTab,
          F: i.o(function () {
            return a.onDragging && a.onDragging.apply(a, arguments);
          }, 1150),
          G: i.o(function () {
            return a.onDropped && a.onDropped.apply(a, arguments);
          }, 1151),
          H: i.o(function () {
            return a.onSwiperChange && a.onSwiperChange.apply(a, arguments);
          }, 1152),
          I: i.o(a.setSwiperindex, 1153),
        }
      );
    },
  ],
  ["__scopeId", "data-v-42c5afc4"],
]);
wx.createComponent(p);
