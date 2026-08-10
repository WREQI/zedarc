var t = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var i = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  o = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  h = function (t, e, i) {
    return new Promise(function (n, r) {
      var a = function (t) {
          try {
            o(i.next(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          try {
            o(i.throw(t));
          } catch (t) {
            r(t);
          }
        },
        o = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(a, s);
        };
      o((i = i.apply(t, e)).next());
    });
  },
  l = require("../../../../common/vendor.js"),
  u = function () {
    var t = l.wx$1.getSystemInfoSync(),
      e = t.platform,
      i = t.version,
      n = t.system;
    return {
      env: { IS_PCWEIXIN: /(windows|mac)/i.test(e) },
      platformVersion: i,
      os: n,
    };
  },
  c = function (t) {
    var e = l.getApiFullUrl(
      "ifzqfinance/stock/notice/EtfIpo/get2Publishing",
      l.API_HOST_ENUM.PROXY_QQ
    );
    return t
      .request(e)
      .then(function (t) {
        return t || {};
      })
      .catch(function (t) {
        return t;
      });
  },
  f = function (t) {
    var e = l.getApiFullUrl(
      "ifzqfinance/stock/notice/EtfIpo/getPublishing",
      l.API_HOST_ENUM.PROXY_QQ
    );
    return t
      .request(e)
      .then(function (t) {
        return t || {};
      })
      .catch(function (t) {
        return t;
      });
  },
  d = function (t) {
    var e = l.getApiFullUrl(
      "ifzqfinance/stock/notice/EtfIpo/get2Listing",
      l.API_HOST_ENUM.PROXY_QQ
    );
    return t
      .request(e, "post", {})
      .then(function (t) {
        return t || {};
      })
      .catch(function (t) {
        return t;
      });
  },
  p = function (t, e) {
    var n = l.getApiFullUrl(
      "ifzqfinance/stock/notice/EtfIpo/getListed",
      l.API_HOST_ENUM.PROXY_QQ
    );
    return t
      .request(
        n,
        "post",
        (function (t, e) {
          for (var n in e || (e = {})) a.call(e, n) && o(t, n, e[n]);
          if (r) {
            var h,
              l = i(r(e));
            try {
              for (l.s(); !(h = l.n()).done; ) {
                n = h.value;
                s.call(e, n) && o(t, n, e[n]);
              }
            } catch (t) {
              l.e(t);
            } finally {
              l.f();
            }
          }
          return t;
        })({}, e)
      )
      .then(function (t) {
        return t.data || {};
      })
      .catch(function (t) {
        return t;
      });
  };
function g(t) {
  return Array.isArray(t)
    ? t.filter(function (t) {
        return t && "bj" !== t.market;
      })
    : t;
}
function m(t) {
  return new Date().getHours() < 15
    ? t
    : Array.isArray(t)
    ? t.filter(function (t) {
        var e = t.issue_end_date,
          i = t.current_date;
        return new l.dayjs(e).format("YYYY-MM-DD") !== i;
      })
    : t;
}
var b = u().env.IS_ZXG,
  w = {
    components: {
      StoreList: function () {
        return "./components/StoreList.js";
      },
      OrderList: function () {
        return "./components/OrderList.js";
      },
      Empty: function () {
        return "./components/Empty.js";
      },
      Counter: function () {
        return "./components/Counter.js";
      },
      Tabbar: function () {
        return "./components/tabs/mp.js";
      },
      TrustFooter: function () {
        return "../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
    },
    inject: {
      hqBridge: {
        default: function () {
          return {};
        },
      },
    },
    props: {
      isZxg: { type: Boolean, default: !1 },
      queryData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {
        from: "",
        type: "",
        os: u().os,
        skin: "white",
        tabs: [
          { name: "待发售", value: "willPublish" },
          { name: "发售中", value: "nowPublish" },
          { name: "待上市", value: "willbeListed" },
          { name: "已上市", value: "hasLister" },
        ],
        curTab: 0,
        cur: 0,
        order: "listed_date",
        desc: 1,
        offset: 0,
        count: 50,
        willPublishData: [],
        publishData: [],
        willListData: [],
        listedData: [],
        swiperHeight: 0,
        loading: !1,
        end: !1,
        firstFinish: !1,
        itemHeight: 0,
        scrollContainer: null,
        oriStart: 0,
        curCount: 0,
        total: 0,
        interVal: null,
        openStatus: !1,
        refresherEnabled: !1,
        mpTriggered: !1,
        webscrolltouch: !1,
        isSwitchByClick: !1,
        systemInfo: null,
        screenRatio: 1,
        titleHeight: 0,
        lastScrollTop: 0,
        countComputedTimer: null,
        lastCountComputedTime: 0,
      };
    },
    computed: {
      isMp: function () {
        return l.StockBridge.ENV === l.EnvTypeEnum.MP;
      },
      scrollStyle: function () {
        return { height: "".concat(this.swiperHeight, "px") };
      },
      getQueryData: function () {
        var t;
        return this.isMp
          ? this.queryData
          : null == (t = this.$route)
          ? void 0
          : t.query;
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
    },
    created: function () {
      var t;
      this.getInitData(),
        this.getListedData(),
        this.getState(),
        this.isZxg &&
          (null == (t = this.os) ? void 0 : t.ios) &&
          this.$sdk.setbounce("no"),
        this.isMp && this.setSkin();
    },
    onShow: function () {
      this.setSkin();
    },
    mounted: function () {
      var t = this,
        e = this.getQueryData || {},
        i = e.tab,
        n = void 0 === i ? 1 : i,
        r = e.from,
        a = void 0 === r ? "" : r,
        s = e.type,
        o = void 0 === s ? "" : s;
      (this.from = a),
        (this.type = o),
        "mini" === a && this.hqBridge.setTitle("腾讯微证券"),
        this.switchTab(n),
        this.$nextTick(function () {
          t.getSystemInfo(), t.setSwiperHeight();
        }),
        !this.isMp && this.setShare(),
        l.StockBridge.report("hq.etfpage.newpubetf.page_brow");
    },
    destroyed: function () {
      (this.systemInfo = null),
        (this.lastScrollTop = 0),
        clearInterval(this.interVal),
        clearInterval(this.dataInterval),
        (this.interVal = null),
        (this.dataInterval = null);
    },
    deactivated: function () {
      clearInterval(this.interVal),
        clearInterval(this.dataInterval),
        (this.interVal = null),
        (this.dataInterval = null);
    },
    activated: function () {
      var t;
      !this.dataInterval &&
        (null == (t = this.publishData) ? void 0 : t.length) > 0 &&
        this.refreshData();
    },
    methods: {
      setSkin: function () {
        var t = this;
        this.skin = l.wx$1.getStorageSync("user/skin") || "white";
        try {
          getApp().globalData.setSkin(function (e) {
            t.skin = "black" === e ? "black" : "white";
          });
        } catch (t) {}
      },
      setShare: function () {
        this.hqBridge.useShare({
          title: "你的好友向你推荐新发ETF",
          desc: "关注ETF新品，投资快人一步",
          link: null == location ? void 0 : location.href,
          hideExternalNav: !0,
        });
      },
      goTeach: function () {
        l.StockBridge.report("hq.etfpage.newpubetf_teach_click"),
          l.StockRouter.routeTo({
            name: "newpubETFTeach",
            query: { from: this.from },
          });
      },
      getState: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var i, n, r, a, s, o, h;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        this.hqBridge
                          .request(
                            "https://sqt.gtimg.cn/utf8/?q=marketStat&fmt=json"
                          )
                          .then(function (t) {
                            return t || {};
                          })
                          .catch(function (t) {
                            return t;
                          })
                      );
                    case 2:
                      (i = t.sent),
                        (n = (i || {}).marketStat),
                        (r = ((void 0 === n ? [] : n)[0] || "").split("|")),
                        (a = r[0] || ""),
                        (s = r.find(function (t) {
                          return t.indexOf("NEWSH") > -1;
                        })).indexOf("盘前竞价") > -1 ||
                        s.indexOf("等待开盘") > -1 ||
                        s.indexOf("未开盘") > -1
                          ? ((o = l.dayjs(a)),
                            (h = l.dayjs(
                              "".concat(a.split(" ")[0], " 09:10:00")
                            )),
                            (this.openStatus = o.isAfter(h)))
                          : s.indexOf("交易中") > -1 || s.indexOf("open") > -1
                          ? (this.openStatus = !0)
                          : (this.openStatus = !1);
                    case 5:
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
      initCompute: function () {
        try {
          var t = 30 * this.screenRatio,
            e = 32 * this.screenRatio;
          this.itemHeight = 50 * this.screenRatio;
          var i = this.swiperHeight || 500,
            n = t + e;
          this.itemHeight > 0
            ? (this.oriStart = Math.round((i - n) / this.itemHeight))
            : (this.oriStart = 0);
        } catch (t) {
          (this.itemHeight = 50 * this.screenRatio), (this.oriStart = 0);
        }
      },
      countCoputed: function () {
        (this.itemHeight && this.scrollContainer) || this.initCompute(),
          isNaN(this.oriStart) && this.initCompute();
        var t = (this.scrollContainer || {}).scrollTop,
          e = void 0 === t ? 0 : t,
          i = Math.round(this.oriStart + e / this.itemHeight);
        (this.curCount =
          i > this.listedData.length ? this.listedData.length : i),
          isNaN(this.curCount) &&
            (this.curCount = Math.min(
              this.oriStart || 0,
              this.listedData.length
            ));
      },
      changeStatus: function (t, e) {
        var i,
          n,
          r = this.desc,
          a = this.order;
        t === this.order && "main" === e
          ? (this.desc = +!r)
          : t !== this.order && "main" === e
          ? (this.desc = 1)
          : (this.desc = e),
          (this.order = t),
          (r === this.desc && a === this.order) ||
            ((this.offset = 0),
            (this.end = !1),
            null ==
              (n =
                null == (i = this.$refs.loadMore) ? void 0 : i.resetStatus) ||
              n.call(i),
            this.getListedData(!0));
      },
      onLoadMore: function () {
        var t,
          i,
          n = this;
        return this.end
          ? (null ==
              (i =
                null == (t = this.$refs.loadMore) ? void 0 : t.resetStatus) ||
              i.call(t),
            Promise.resolve(!0))
          : new Promise(function (t) {
              return h(
                n,
                null,
                e().mark(function i() {
                  var n;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this.getListedData();
                          case 2:
                            (n = e.sent), t(n);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    i,
                    this
                  );
                })
              );
            });
      },
      getInitData: function () {
        var t = this;
        Promise.allSettled([
          c(this.hqBridge),
          f(this.hqBridge),
          d(this.hqBridge),
        ])
          .then(function (e) {
            "fulfilled" === e[0].status && e[0].value
              ? (t.willPublishData = g((e[0].value || {}).data || []))
              : (t.willPublishData = []),
              "fulfilled" === e[1].status && e[1].value
                ? (t.publishData = g(m((e[1].value || {}).data)))
                : (t.publishData = []),
              "fulfilled" === e[2].status && e[2].value
                ? (t.willListData = g((e[2].value || {}).data || []))
                : (t.willListData = []),
              (t.firstFinish = !0),
              t.refreshData();
          })
          .catch(function (e) {
            (t.willPublishData = []),
              (t.publishData = []),
              (t.willListData = []),
              (t.firstFinish = !0);
          });
      },
      refreshData: function () {
        var t = this;
        this.dataInterval = setInterval(function () {
          0 == t.curTab
            ? c(t.hqBridge).then(function (e) {
                t.willPublishData = g((e || {}).data || []);
              })
            : 1 == t.curTab &&
              f(t.hqBridge).then(function (e) {
                t.publishData = g(m((e || {}).data));
              });
        }, 5e3);
      },
      getListedData: function (i, n, r) {
        return h(
          this,
          null,
          e().mark(function a() {
            var s, o, h, l, u, c, f, d, m;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.loading) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (this.loading = !0),
                        (s = {
                          order: this.order,
                          desc: this.desc,
                          offset: n ? r : this.offset,
                          count: this.count,
                        }),
                        (e.next = 6),
                        p(this.hqBridge, s)
                      );
                    case 6:
                      if (
                        ((o = e.sent),
                        (l = (h = o || {}).data),
                        (u = void 0 === l ? [] : l),
                        (c = h.total),
                        (f = void 0 === c ? 0 : c),
                        (d = g(u)),
                        (this.total = f),
                        !n)
                      ) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (m = this.listedData),
                        e.abrupt(
                          "return",
                          (m.splice.apply(m, [r, this.count].concat(t(d))),
                          (this.listedData = m),
                          void (this.loading = !1))
                        )
                      );
                    case 16:
                      u.length < this.count ? (this.end = !0) : (this.end = !1),
                        (this.listedData = i
                          ? d
                          : [].concat(t(this.listedData), t(d))),
                        (this.offset = i
                          ? this.count
                          : this.offset + this.count),
                        (this.loading = !1);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              a,
              this
            );
          })
        );
      },
      changeSwiperAble: function (t) {},
      updateCurPageData: function () {
        var t = Math.floor(this.curCount / 50) * this.count;
        this.getListedData(!1, !0, t);
      },
      switchTab: function (t) {
        var e = this;
        if (((this.isSwitchByClick = !0), this.curTab !== +t)) {
          var i = this.curTab;
          (this.curTab = +t),
            this.handleTabSwitch(i, +t, "click"),
            this.setSwiperHeight(),
            this.$nextTick(function () {
              e.isSwitchByClick = !1;
            });
        } else this.isSwitchByClick = !1;
      },
      afterSwitchTab: function (t) {
        var e = (null == t ? void 0 : t.detail) || {},
          i = e.current,
          n = e.source,
          r = +i;
        if (!this.isSwitchByClick && this.curTab !== r && "touch" === n) {
          var a = this.curTab;
          (this.curTab = r),
            this.handleTabSwitch(a, r, "swipe"),
            this.setSwiperHeight();
        }
      },
      handleTabSwitch: function (t, e, i) {
        var n = this;
        try {
          this.interVal &&
            (clearInterval(this.interVal), (this.interVal = null)),
            3 === e &&
              (this.$nextTick(function () {
                try {
                  n.itemHeight || n.initCompute(),
                    (isNaN(n.curCount) || n.curCount < 0) &&
                      (n.curCount = Math.min(
                        n.oriStart || 0,
                        n.listedData.length
                      )),
                    0 === n.curCount &&
                      n.oriStart > 0 &&
                      (n.curCount = Math.min(n.oriStart, n.listedData.length));
                } catch (t) {}
              }),
              this.openStatus &&
                (this.interVal = setInterval(function () {
                  try {
                    n.updateCurPageData();
                  } catch (t) {}
                }, 5e3))),
            "click" === i && this.reportTabClick(e);
        } catch (t) {}
      },
      reportTabClick: function (t) {
        try {
          var e = {
            0: "hq.etfpage.newpubetf.willpublishtab_click",
            1: "hq.etfpage.newpubetf.publingtab_click",
            2: "hq.etfpage.newpubetf_willlistedtab_click",
            3: "hq.etfpage.newpubetf.listedtab_click",
          }[t];
          e && l.StockBridge.report(e);
        } catch (e) {}
      },
      getSwiperHeight: function () {},
      setSwiperHeight: function (t) {
        this.mpSetSwiperHeight(t);
      },
      mpSetSwiperHeight: function (t) {
        var e,
          i = this;
        try {
          var n =
              this.systemInfo ||
              (l.wx$1.getWindowInfo && l.wx$1.getWindowInfo()) ||
              l.wx$1.getSystemInfoSync(),
            r = t || n.windowHeight;
          l.wx$1
            .createSelectorQuery()
            .in(this)
            .select(".tab-bar")
            .boundingClientRect()
            .exec(function (t) {
              if (t && t[0]) {
                var e = t[0].bottom || 0,
                  n = r - e + (i.titleHeight || 0);
                i.swiperHeight = Math.max(n, 300);
              } else i.swiperHeight = Math.max(r - 300, 400);
            });
        } catch (t) {
          var a =
            (null == (e = this.systemInfo) ? void 0 : e.windowHeight) || 667;
          this.swiperHeight = Math.max(a - 300, 400);
        }
      },
      goBuy: function () {
        this.isZxg || ((this.publishData = []), (this.firstFinish = !1));
      },
      mpStartPull: function () {},
      mpPullEnd: function () {
        try {
          this.mpTriggered = !1;
        } catch (t) {}
      },
      mpPullRefresh: function () {
        var t = this;
        try {
          (this.mpTriggered = !0),
            this.refreshCurrentTabData()
              .then(function () {})
              .catch(function (t) {})
              .finally(function () {
                t.mpTriggered = !1;
              });
        } catch (t) {
          this.mpTriggered = !1;
        }
      },
      onScroll: function (t) {
        try {
          var e = (null == t ? void 0 : t.detail) || {},
            i = e.scrollTop,
            n = e.scrollHeight;
          e.scrollLeft;
          if (
            ("number" == typeof i && (this.lastScrollTop = i),
            3 === this.curTab)
          ) {
            var r = this.swiperHeight || n;
            this.mpCountComputed(i, n, r);
          }
        } catch (i) {}
      },
      mpCountComputed: function (t, e, i) {
        if (this.itemHeight && void 0 !== t) {
          isNaN(this.oriStart) && this.initCompute();
          try {
            var n,
              r = Math.floor(t / this.itemHeight);
            (n =
              i && this.itemHeight > 0
                ? r + Math.floor(i / this.itemHeight)
                : r + this.oriStart),
              (isNaN(n) || n < 0) &&
                (n = Math.min(this.oriStart || 0, this.listedData.length)),
              (n = Math.min(n, this.listedData.length)),
              (n = Math.max(0, n)),
              t + i >= e - 5 && (n = this.listedData.length),
              (this.curCount = Math.min(n, this.listedData.length)),
              (this.curCount = Math.max(0, this.curCount)),
              isNaN(this.curCount) &&
                (this.curCount = Math.min(
                  this.oriStart || 0,
                  this.listedData.length
                ));
          } catch (t) {
            (this.curCount = Math.min(
              this.oriStart || 0,
              this.listedData.length
            )),
              (this.curCount = Math.max(0, this.curCount));
          }
        }
      },
      onScrollToLower: function () {
        try {
          3 === this.curTab && this.onLoadMore().catch(function (t) {});
        } catch (t) {}
      },
      refreshCurrentTabData: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var i, n, r;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), 0 !== this.curTab)) {
                        t.next = 8;
                        break;
                      }
                      return (t.next = 4), c(this.hqBridge);
                    case 4:
                      (i = t.sent),
                        (this.willPublishData = g((i || {}).data || [])),
                        (t.next = 28);
                      break;
                    case 8:
                      if (1 !== this.curTab) {
                        t.next = 15;
                        break;
                      }
                      return (t.next = 11), f(this.hqBridge);
                    case 11:
                      (n = t.sent),
                        (this.publishData = g(m((n || {}).data))),
                        (t.next = 28);
                      break;
                    case 15:
                      if (2 !== this.curTab) {
                        t.next = 22;
                        break;
                      }
                      return (t.next = 18), d(this.hqBridge);
                    case 18:
                      (r = t.sent) && r.data
                        ? (this.willListData = g(r.data || []))
                        : (this.willListData = []),
                        (t.next = 28);
                      break;
                    case 22:
                      if (((t.t0 = 3 === this.curTab), !t.t0)) {
                        t.next = 28;
                        break;
                      }
                      return (
                        (this.offset = 0),
                        (this.end = !1),
                        (t.next = 28),
                        this.getListedData(!0)
                      );
                    case 28:
                      t.next = 33;
                      break;
                    case 30:
                      (t.prev = 30),
                        (t.t1 = t.catch(0)),
                        0 === this.curTab
                          ? (this.willPublishData = [])
                          : 1 === this.curTab
                          ? (this.publishData = [])
                          : 2 === this.curTab && (this.willListData = []);
                    case 33:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 30]]
            );
          })
        );
      },
      throttledCountComputed: function () {},
      getSystemInfo: function () {
        var t = this;
        try {
          var e;
          (e = l.wx$1.getWindowInfo
            ? l.wx$1.getWindowInfo()
            : l.wx$1.getSystemInfoSync()),
            (this.systemInfo = e);
          var i = e.windowWidth,
            n = void 0 === i ? 375 : i;
          (this.screenRatio = n / 375),
            this.$nextTick(function () {
              l.wx$1
                .createSelectorQuery()
                .in(t)
                .select(".header-container")
                .boundingClientRect()
                .exec(function (e) {
                  e &&
                    e[0] &&
                    ((t.titleHeight = e[0].height || 0), t.setSwiperHeight());
                });
            });
        } catch (t) {
          (this.screenRatio = 1),
            (this.systemInfo = {
              windowWidth: 375,
              windowHeight: 667,
              pixelRatio: 1,
            });
        }
      },
    },
  };
Array ||
  (
    l.resolveComponent("Tabbar") +
    l.resolveComponent("StoreList") +
    l.resolveComponent("Empty") +
    l.resolveComponent("TrustFooter") +
    l.resolveComponent("OrderList") +
    l.resolveComponent("st-reach-bottom") +
    l.resolveComponent("Counter")
  )();
var v = l._export_sfc(w, [
  [
    "render",
    function (t, e, i, n, r, a) {
      return l.e(
        {
          a: l.o(function () {
            return a.goTeach && a.goTeach.apply(a, arguments);
          }, 634),
          b: l.sr("tabBar", "37d35d71-0"),
          c: l.o(a.switchTab, 635),
          d: l.p({
            "cur-index": r.curTab,
            "tab-config": r.tabs,
            "show-more": !1,
            typeid: "hqtabs",
          }),
          e: r.willPublishData.length > 0,
        },
        r.willPublishData.length > 0
          ? {
              f: l.p({
                "list-data": r.willPublishData,
                status: 0,
                from: r.from,
                type: r.type,
              }),
            }
          : {},
        { g: r.firstFinish && 0 === r.willPublishData.length },
        r.firstFinish && 0 === r.willPublishData.length
          ? { h: l.o(a.switchTab, 636), i: l.p({ from: r.from }) }
          : {},
        { j: a.isLite },
        (a.isLite, {}),
        { k: r.publishData && r.publishData.length > 0 },
        r.publishData && r.publishData.length > 0
          ? {
              l: l.o(a.goBuy, 637),
              m: l.p({
                "list-data": r.publishData,
                status: 1,
                from: r.from,
                type: r.type,
              }),
            }
          : {},
        { n: r.firstFinish && r.publishData && 0 === r.publishData.length },
        r.firstFinish && r.publishData && 0 === r.publishData.length
          ? { o: l.o(a.switchTab, 638), p: l.p({ from: r.from }) }
          : {},
        { q: a.isLite },
        (a.isLite, {}),
        { r: r.willListData.length > 0 },
        r.willListData.length > 0
          ? {
              s: l.p({
                "list-data": r.willListData,
                status: 2,
                from: r.from,
                type: r.type,
              }),
            }
          : {},
        { t: r.firstFinish && 0 === r.willListData.length },
        r.firstFinish && 0 === r.willListData.length
          ? { v: l.o(a.switchTab, 639), w: l.p({ from: r.from }) }
          : {},
        { x: a.isLite },
        (a.isLite, {}),
        { y: r.listedData.length > 0 },
        r.listedData.length > 0
          ? {
              z: l.o(a.changeStatus, 640),
              A: l.o(a.changeSwiperAble, 641),
              B: l.p({
                "order-data": r.listedData,
                order: r.order,
                zdf: r.desc,
                from: r.from,
                type: r.type,
              }),
            }
          : {},
        { C: 0 === r.listedData.length },
        0 === r.listedData.length
          ? { D: l.o(a.switchTab, 642), E: l.p({ from: r.from }) }
          : {},
        {
          F: l.sr("loadMore", "37d35d71-10"),
          G: l.p({
            "immediate-check": !1,
            disabled: !1,
            "on-reach-bottom": a.onLoadMore,
          }),
          H: r.end && r.listedData.length > 0,
        },
        (r.end && r.listedData.length, {}),
        {
          I: r.refresherEnabled,
          J: r.mpTriggered,
          K: l.o(function () {
            return a.mpStartPull && a.mpStartPull.apply(a, arguments);
          }, 643),
          L: l.o(function () {
            return a.mpPullEnd && a.mpPullEnd.apply(a, arguments);
          }, 644),
          M: l.o(function () {
            return a.mpPullRefresh && a.mpPullRefresh.apply(a, arguments);
          }, 645),
          N: l.o(function () {
            return a.onScroll && a.onScroll.apply(a, arguments);
          }, 646),
          O: l.o(function () {
            return a.onScrollToLower && a.onScrollToLower.apply(a, arguments);
          }, 647),
          P: r.curTab,
          Q: "".concat(r.swiperHeight, "px"),
          R: l.o(function () {
            return a.afterSwitchTab && a.afterSwitchTab.apply(a, arguments);
          }, 648),
          S: l.n(r.webscrolltouch ? "wrapper-touch" : ""),
          T: 3 === r.curTab,
        },
        3 === r.curTab
          ? { U: l.p({ total: r.total, "cur-count": r.curCount }) }
          : {},
        { V: r.skin, W: l.n(i.isZxg ? "zxg" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-37d35d71"],
]);
wx.createComponent(v);
var S = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.IS_ZXG = b),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhxLW5ld3B1YmV0Zi9OZXdwdWJFdGZQYWdlLnZ1ZQ =
    S);
