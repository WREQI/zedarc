var t = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  d = function (t, e, a) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[e] = a);
  },
  o = function (t, n) {
    for (var a in n || (n = {})) s.call(n, a) && d(t, a, n[a]);
    if (r) {
      var i,
        o = e(r(n));
      try {
        for (o.s(); !(i = o.n()).done; ) {
          a = i.value;
          c.call(n, a) && d(t, a, n[a]);
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }
    }
    return t;
  },
  u = function (t, e) {
    return a(t, i(e));
  },
  g = function (t, e, n) {
    return new Promise(function (a, i) {
      var r = function (t) {
          try {
            c(n.next(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          try {
            c(n.throw(t));
          } catch (t) {
            i(t);
          }
        },
        c = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(r, s);
        };
      c((n = n.apply(t, e)).next());
    });
  },
  h = require("../../../../../../../../common/vendor.js"),
  f = require("../../../../Index.js"),
  p = {
    apply: "https://st.gtimg.com/design/4e0ddf2b2464d363d069f75db44968e4.png",
    longhubang:
      "https://st.gtimg.com/design/58ec3a7135b98f19f8d997bcae77a631.png",
    nationalDebt:
      "https://st.gtimg.com/design/0bf9b796ed72bfb5bbc3e319c689e335.png",
    mineSweeper:
      "https://st.gtimg.com/design/1d1b55edc73bf44cb1f9308f493268cb.png",
    reits: "https://st.gtimg.com/design/d2d8c63efb55b24147b6b24cc8bc837c.png",
    earnSeason:
      "https://st.gtimg.com/design/7e7ad0e411b98ad9a0f982209a2ee37a.png",
    industryLeading:
      "https://st.gtimg.com/design/0fbe2f0581ac07c29cf9e7b1d657469c.png",
    mainForceRaise:
      "https://st.gtimg.com/design/41eee07c33035c834cf2c70d779297be.png",
    etfHotList:
      "https://st.gtimg.com/design/06219be546f141b2b2d3ac90a7d0f1cc.png",
    beijiaosuoRank:
      "https://st.gtimg.com/design/8743b62a7b35fff439cd92796f80b661.png",
    strategyIndex:
      "https://st.gtimg.com/design/141afeb1f295619506f95183df1d66c4.png",
    etfMatch:
      "https://st.gtimg.com/design/2becd7711b8344d3638c8dcf96d5352f.png",
    shareholderRights:
      "https://st.gtimg.com/design/510d1ecd766b59d92e2beafbdf9fde7b.png",
    globalInvest:
      "https://st.gtimg.com/design/87ffe75183eec1e83ca37f7faa837afb.png",
    t0Trade: "https://st.gtimg.com/design/350412bbe5a6919028a2ca5e494c23e5.png",
    buyIndex:
      "https://st.gtimg.com/design/40e95c2a2347c4031f17afba8007c15e.png",
  },
  l = {
    name: "longhubang",
    src: "https://st.gtimg.com/design/eafd44d61f4ab6c64683db5d6c0499c9.png",
    title: "龙虎榜",
    path: "/longhubang",
    eventId: "longhubang",
  },
  m = {
    name: "nationalDebt",
    src: "https://st.gtimg.com/design/6dd268cb0945de45680d3f9babc7daba.png",
    id: 2,
    tag: "",
    title: "通用回购",
    path: "/national-debt-index?stat_data=Ix600p000t013",
    query: { market: "sz" },
    eventId: "national_debt",
  },
  b = {
    name: "mineSweeper",
    src: "https://st.gtimg.com/design/b03007a070a5aaf6fbf7f90b48bf122f.png",
    title: "股票扫雷",
    path: "/strategy/risk/index",
    eventId: "mine_sweeper",
  },
  v = {
    name: "reits",
    src: "https://st.gtimg.com/design/5c3d84f07854011039966d0ac4293a7c.png",
    id: 1,
    tag: "",
    title: "REITs",
    path: "/reits-fund",
    eventId: "reits",
  },
  y = {
    name: "earnSeason",
    src: "https://st.gtimg.com/design/9da75502081c787100bcdc07fd52fd74.png",
    title: "财报季",
    path: "/earn/season",
    eventId: "earn_season",
  },
  w = {
    name: "etfHotList",
    src: "https://st.gtimg.com/design/3d6051a23b4a3c36657a3f71bdd7e886.png",
    title: "热门ETF",
    path: "/hot?tab=2",
    eventId: "etf_hot_list",
  },
  I = {
    name: "beijiaosuoRank",
    src: "https://st.gtimg.com/design/0cc74865ad4c0c2daf35a24d7a9ecb9e.png",
    title: "北交所排行",
    path: "/bj-rank",
    eventId: "beijiaosuo_rank",
  },
  x = {
    name: "strategyIndex",
    src: "https://st.gtimg.com/design/16bf41913ba9e171b950a4a9e0c7a382.png",
    title: "智能选股",
    path: "/market/strategy",
    eventId: "strategy_index",
  },
  _ = {
    name: "shareholderRights",
    src: "https://st.gtimg.com/design/abc9dfde68dd68d0162838e39fd75d9e.png",
    title: "股东权益",
    path: "/hq/shareholder-rights",
    eventId: "shareholder_rights",
  },
  k = {
    name: "globalInvest",
    src: "https://st.gtimg.com/design/97469a6156a94d39ad79f9ea19896536.png",
    title: "投资全球",
    path: "/hq/etf/global-invest",
    pathName: "investglobal",
    eventId: "global_invest",
  },
  S = {
    name: "t0Trade",
    src: "https://st.gtimg.com/design/76699016ea2a1256787ac2648c14772e.png",
    title: "T+0交易",
    path: "/hq/etf/etf-t0-zone",
    pathName: "ttradezone",
    eventId: "t0_trade",
  },
  q = {
    name: "buyIndex",
    src: "https://st.gtimg.com/design/78533a4fc51820ee90e9348bf30f7b5e.png",
    title: "买指数",
    path: "/buy-index-landing",
    pathName: "buyindexlanding",
    eventId: "buy_index",
  },
  R = [
    l,
    w,
    x,
    k,
    _,
    S,
    q,
    m,
    {
      name: "mainForceRaise",
      src: "https://st.gtimg.com/design/37aab0d6d4a564876f7ffe809452c6f8.png",
      title: "主力抢筹",
      path: "/strategy/strategy/detail?id=3003",
      eventId: "main_force_raise",
    },
    {
      name: "industryLeading",
      src: "https://st.gtimg.com/design/65065e47dc02809a221f3d3eb13c13c1.png",
      title: "行业龙头",
      path: "/strategy/strategy/detail?id=1002",
      eventId: "industry_leading",
    },
    b,
    v,
    y,
    I,
  ],
  C = [
    {
      name: "apply",
      src: "https://st.gtimg.com/design/305602e6b1b5e7a898dfd676f7baecb9.png",
      tag: "便捷交易",
      title: "立即开户",
      path: "/apply/index",
      routerName: "ApplyIndex",
      query: { stat_data: "I4v00p000a019" },
      eventId: "apply",
    },
    l,
    w,
    k,
    x,
    S,
    q,
    m,
    _,
    b,
    v,
    y,
    I,
  ],
  T = function () {
    var t, e;
    return "dark" ===
      { dark: "dark", black: "dark" }[
        "undefined" != typeof document
          ? (null == (e = null == (t = document.body) ? void 0 : t.getAttribute)
              ? void 0
              : e.call(t, "data-st-theme")) || "light"
          : h.wx$1.getStorageSync("user/skin") || "light"
      ]
      ? R.map(function (t) {
          return u(o({}, t), { src: p[t.name] || t.src });
        })
      : [].concat(R);
  },
  D = function () {
    var t, e;
    return "dark" ===
      { dark: "dark", black: "dark" }[
        "undefined" != typeof document
          ? (null == (e = null == (t = document.body) ? void 0 : t.getAttribute)
              ? void 0
              : e.call(t, "data-st-theme")) || "light"
          : h.wx$1.getStorageSync("user/skin") || "light"
      ]
      ? C.map(function (t) {
          return u(o({}, t), { src: p[t.name] || t.src });
        })
      : [].concat(C);
  },
  j = {
    components: {
      FunctionCard: function () {
        return "./FunctionCard.js";
      },
    },
    inject: {
      hqBridge: { default: function () {} },
      isAccountOpen: {
        default: function () {
          return !1;
        },
      },
      theme: {
        default: function () {
          return "light";
        },
      },
      isHqShow: {
        default: function () {
          return function () {
            return !1;
          };
        },
      },
    },
    props: {
      isTrading: { type: Boolean, default: !1 },
      onShow: { type: Boolean, default: !1 },
    },
    data: function () {
      var t,
        e,
        n,
        a,
        i = h.StockBridge.ENV === h.EnvTypeEnum.MP;
      return {
        cardData: [],
        pagination: !1,
        swiperIndex: 0,
        swiperHeight: 64,
        isReported: !1,
        timer: null,
        isPC:
          (i &&
            (null ==
            (a =
              null ==
              (n =
                null ==
                (e =
                  null == (t = null == getApp ? void 0 : getApp())
                    ? void 0
                    : t.globalData)
                  ? void 0
                  : e.detect)
                ? void 0
                : n.env)
              ? void 0
              : a.IS_PCWEIXIN)) ||
          !1,
        isMp: i,
      };
    },
    computed: {
      isStartRefresh: function () {
        return this.isTrading && this.onShow;
      },
      hqShowStatus: function () {
        var t;
        return null == (t = this.isHqShow) ? void 0 : t.call(this);
      },
      screenRatio: function () {
        var t,
          e = 375;
        return (
          (this.isMp
            ? h.wx$1.getSystemInfoSync().windowWidth || e
            : (null ==
              (t = null == document ? void 0 : document.documentElement)
                ? void 0
                : t.clientWidth) || e) / e
        );
      },
    },
    watch: {
      isStartRefresh: function (t) {
        t ? this.startRefresh() : this.clearTimer();
      },
      theme: function () {
        this.initCard();
      },
      hqShowStatus: function () {
        this.initCard();
      },
    },
    created: function () {
      return g(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    this.initCard(),
                      this.refreshLabel(),
                      this.isAccountOpen ||
                        this.hqBridge.report(
                          "hq.choose_hq.function_area_apply_exposure",
                          { fchannel_id_fm_i: "I4v00p000a019" }
                        );
                  case 1:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    activated: function () {
      this.initCard(), this.isStartRefresh && this.startRefresh();
    },
    deactivated: function () {
      this.clearTimer();
    },
    beforeDestroy: function () {
      this.clearTimer(), clearTimeout(this.timer);
    },
    methods: {
      chunk: h.chunk,
      initCard: function () {
        return g(
          this,
          null,
          t().mark(function e() {
            var n,
              a,
              i,
              r = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = T),
                        (a = D),
                        (i = this.isAccountOpen ? n() : a()),
                        (t.next = 3),
                        this.handleEtfEntry(i)
                      );
                    case 3:
                      (this.cardData = h.chunk(i, 5)),
                        this.isPC && (this.cardData = h.chunk(i, i.length)),
                        "mp" === this.hqBridge.ENV
                          ? this.$nextTick(function () {
                              h.wx$1
                                .createSelectorQuery()
                                .in(r)
                                .select(".function-card-info")
                                .boundingClientRect(function (t) {
                                  r.swiperHeight =
                                    null == t ? void 0 : t.height;
                                })
                                .exec();
                            })
                          : this.$nextTick(function () {
                              var t, e, n;
                              r.swiperHeight =
                                null ==
                                (n =
                                  null ==
                                  (e =
                                    null == (t = r.$refs.functionCard)
                                      ? void 0
                                      : t[0])
                                    ? void 0
                                    : e.$el)
                                  ? void 0
                                  : n.offsetHeight;
                            }),
                        this.cardData.length > 1 && (this.pagination = !0);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      startRefresh: function () {
        var t = this;
        this.clearTimer(),
          (this.timer = setInterval(function () {
            t.refreshLabel();
          }, 15e3));
      },
      clearTimer: function () {
        clearInterval(this.timer);
      },
      refreshLabel: function () {
        return g(
          this,
          null,
          t().mark(function e() {
            var n, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), f.HqAPI.getFunctionArea(this.hqBridge)
                      );
                    case 2:
                      (a = t.sent),
                        null == (n = this.cardData) ||
                          n.forEach(function (t) {
                            t.forEach(function (t) {
                              var e = t.id,
                                n = a.find(function (t) {
                                  return t.id === e;
                                });
                              if (n) {
                                var i = n.tag,
                                  r = n.query;
                                (t.tag = i), (t.query = r);
                              }
                            });
                          });
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      afterSwitchTab: function (t) {
        var e = ((null == t ? void 0 : t.detail) || {}).current;
        (this.swiperIndex = e),
          1 !== this.swiperIndex ||
            this.isReported ||
            (this.hqBridge.report(
              "hq.choose_hq.hstab.function_area_second_page_exposure"
            ),
            (this.isReported = !0));
      },
      handleEtfEntry: function (e) {
        return g(
          this,
          null,
          t().mark(function n() {
            var a, i, r, s, c;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (i = e.findIndex(function (t) {
                          return "etfMatch" === t.name;
                        })),
                        (t.next = 4),
                        h.Wuji.get({
                          appid: "act",
                          schemaid: "etf_match_function_area_entry",
                          schemakey: "81a5084b99c34f40abde925d23bb3602",
                        })
                      );
                    case 4:
                      (r = t.sent),
                        (s =
                          (null == (a = null == r ? void 0 : r.data)
                            ? void 0
                            : a[0]) || {}),
                        (c = s.isShow),
                        -1 === i || c || e.splice(i, 1),
                        (t.next = 12);
                      break;
                    case 10:
                      (t.prev = 10), (t.t0 = t.catch(0));
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              null,
              [[0, 10]]
            );
          })
        );
      },
    },
  };
Array || h.resolveComponent("function-card")();
var P = h._export_sfc(j, [
  [
    "render",
    function (t, e, n, a, i, r) {
      return h.e(
        { a: i.isPC },
        i.isPC
          ? {
              b: h.f(i.cardData, function (t, e, n) {
                return {
                  a: h.f(t, function (t, e, a) {
                    return {
                      a: "b9947ce0-0-" + n + "-" + a,
                      b: h.p({ data: t, pagination: i.pagination }),
                      c: t.name,
                    };
                  }),
                  b: e,
                };
              }),
            }
          : {},
        { c: !i.isPC },
        i.isPC
          ? {}
          : h.e(
              { d: i.cardData },
              i.cardData
                ? {
                    e: h.f(i.cardData, function (t, e, n) {
                      return {
                        a: h.f(t, function (t, e, a) {
                          return {
                            a: h.sr(
                              "functionCard",
                              "b9947ce0-1-" + n + "-" + a,
                              { f: 1 }
                            ),
                            b: "b9947ce0-1-" + n + "-" + a,
                            c: h.p({ data: t, pagination: i.pagination }),
                            d: t.name,
                          };
                        }),
                        b: e,
                      };
                    }),
                    f: i.swiperIndex,
                    g: "".concat(i.swiperHeight || 64 * r.screenRatio, "px"),
                    h: h.o(function () {
                      return (
                        r.afterSwitchTab && r.afterSwitchTab.apply(r, arguments)
                      );
                    }, 4957),
                  }
                : {},
              { i: i.cardData.length > 1 },
              i.cardData.length > 1
                ? {
                    j: h.f(i.cardData, function (t, e, n) {
                      return {
                        a: e,
                        b: h.n(i.swiperIndex === e ? "cur-dot" : ""),
                      };
                    }),
                  }
                : {}
            )
      );
    },
  ],
  ["__scopeId", "data-v-b9947ce0"],
]);
wx.createComponent(P);
