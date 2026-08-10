require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (r, i) {
      var o = function (t) {
          try {
            s(n.next(t));
          } catch (t) {
            i(t);
          }
        },
        a = function (t) {
          try {
            s(n.throw(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(o, a);
        };
      s((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../common/vendor.js"),
  r = require("../stock-hq-data/index.js"),
  i = require("node-modules/@tencent/st-tools/dist/index.js"),
  o = require("hooks/useDiscoverConfig.js"),
  a = require("api/index.js"),
  s = { root: null, rootMargin: "0px", threshold: 0.5 },
  c = { appid: "base", schemaid: "gray_user_config", size: "total" };
function l(t, e, r, i, o) {
  var a;
  return (function (t, e, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function a(t) {
        try {
          c(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function s(t) {
        try {
          c(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(a, s);
      }
      c((r = r.apply(t, e || [])).next());
    });
  })(this, void 0, void 0, function () {
    var o, s, l, u, h, f, d;
    return (function (t, e) {
      var n,
        r,
        i,
        o,
        a = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (o = { next: s(0), throw: s(1), return: s(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function s(o) {
        return function (s) {
          return (function (o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & o[0]
                        ? r.return
                        : o[0]
                        ? r.throw || ((i = r.return) && i.call(r), 0)
                        : r.next) &&
                    !(i = i.call(r, o[1])).done)
                )
                  return i;
                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return a.label++, { value: o[1], done: !1 };
                  case 5:
                    a.label++, (r = o[1]), (o = [0]);
                    continue;
                  case 7:
                    (o = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (i = (i = a.trys).length > 0 && i[i.length - 1]) ||
                        (6 !== o[0] && 2 !== o[0])
                      )
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                      a.label = o[1];
                      break;
                    }
                    if (6 === o[0] && a.label < i[1]) {
                      (a.label = i[1]), (i = o);
                      break;
                    }
                    if (i && a.label < i[2]) {
                      (a.label = i[2]), a.ops.push(o);
                      break;
                    }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                o = e.call(t, a);
              } catch (t) {
                (o = [6, t]), (r = 0);
              } finally {
                n = i = 0;
              }
            if (5 & o[0]) throw o[1];
            return { value: o[0] ? o[1] : void 0, done: !0 };
          })([o, s]);
        };
      }
    })(this, function (p) {
      switch (p.label) {
        case 0:
          return (
            p.trys.push([0, 4, , 5]),
            (o = i),
            (s = []),
            t ? (void 0 !== o ? [3, 2] : [4, e.get(c)]) : [2, !1]
          );
        case 1:
          if (200 !== (l = p.sent()).code) return [2, !1];
          if (
            !(
              (u =
                null === (a = l.data) || void 0 === a
                  ? void 0
                  : a.findIndex(function (t) {
                      return t.key === r || Number(t.key) === Number(r);
                    })) >= 0
            )
          )
            return [2, !1];
          o = l.data[u].grayScale || 0;
          try {
            s = (s = JSON.parse(l.data[u].whitelist) || []).map(function (t) {
              return "".concat(t).trim();
            });
          } catch (t) {
            s = [];
          }
          return [3, 3];
        case 2:
          if (!(o >= 0 && o <= 99)) return [2, !1];
          p.label = 3;
        case 3:
          return (
            (h = new n.MurmurHash3(t, parseInt(r)).result()),
            (f = h % 100),
            (d =
              s.findIndex(function (e) {
                return e === t;
              }) >= 0),
            [2, f < o || d]
          );
        case 4:
          return p.sent(), [2, !1];
        case 5:
          return [2];
      }
    });
  });
}
var u = function (t, e, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function a(t) {
        try {
          c(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function s(t) {
        try {
          c(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function c(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(a, s);
      }
      c((r = r.apply(t, e || [])).next());
    });
  },
  h = function (t, e) {
    var n,
      r,
      i,
      o,
      a = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      "function" == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function s(o) {
      return function (s) {
        return (function (o) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (i =
                    2 & o[0]
                      ? r.return
                      : o[0]
                      ? r.throw || ((i = r.return) && i.call(r), 0)
                      : r.next) &&
                  !(i = i.call(r, o[1])).done)
              )
                return i;
              switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  return a.label++, { value: o[1], done: !1 };
                case 5:
                  a.label++, (r = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !(
                      (i = (i = a.trys).length > 0 && i[i.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0])
                    )
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                    a.label = o[1];
                    break;
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    (a.label = i[1]), (i = o);
                    break;
                  }
                  if (i && a.label < i[2]) {
                    (a.label = i[2]), a.ops.push(o);
                    break;
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              o = e.call(t, a);
            } catch (t) {
              (o = [6, t]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        })([o, s]);
      };
    }
  },
  f = null,
  d = { light: "light", white: "light", black: "dark", dark: "dark" },
  p = {
    inject: ["hqBridge"],
    components: {
      EtfBulletin: function () {
        return "./components/EtfBulletin.js";
      },
      EtfQuickEntry: function () {
        return "./components/EtfQuickEntry.js";
      },
      TrustFooter: function () {
        return "../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
      EtfRankBlock: function () {
        return "./components/EtfRankBlock/mp.js";
      },
      EtfDiscoverBlock: function () {
        return "./components/EtfDiscoverBlock.js";
      },
      EtfDividendBlock: function () {
        return "./components/EtfDividendBlock.js";
      },
      EtfDigHotBlock: function () {
        return "./components/EtfDigHotBlock.js";
      },
      EtfBuyIndexEntry: function () {
        return "./components/EtfBuyIndexEntry.js";
      },
      EtfTeach: function () {
        return "./components/EtfTeach.js";
      },
      EtfZoneT0Module: function () {
        return "./components/EtfZoneT0Module.js";
      },
      NewpubEtfBar: function () {
        return "./components/NewpubEtfBar.js";
      },
      EtfPopCom: function () {
        return "./components/EtfPopCom.js";
      },
      TeachPop: function () {
        return "./components/TeachPop.js";
      },
      GlobalInvest: function () {
        return "./components/GlobalInvest.js";
      },
    },
    props: {
      query: { type: Object, default: function () {} },
      initETFbanner: { type: String, default: "0" },
      lct: { type: Boolean, default: !1 },
      etfAbtReport: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isZhonJing: { type: Boolean, default: !1 },
      showETFBar: { type: Boolean, default: !1 },
      showETFBulletin: { type: Boolean, default: !0 },
      showQuickEntry: { type: Boolean, default: !0 },
    },
    provide: function () {
      return {
        IS_ZXG: this.IS_ZXG,
        isMpZxg: this.isMpZxg,
        isLite: this.isLite,
        theme: this.theme,
      };
    },
    data: function () {
      return {
        showTeachBlock: !0,
        interval: null,
        tradeInterval: null,
        isTrading: !1,
        webscrolltouch: !1,
        showETFMatch: !0,
        isEtfPageShow: !0,
        pullDisabled: !1,
        scrollTimer: null,
        DiscoverType: o.DiscoverType,
        needReportScroll: !0,
        firstAppear: !0,
        pageAppear: !0,
        pageShown: !this.IS_ZXG,
        showETFPop: !1,
        showTeachPop: !1,
        scrollTop: 0,
        hotPointData: null,
        overseaData: null,
        dividendData: null,
        buyIndexData: null,
        t0Data: null,
        firstPageAggregateLoaded: !1,
        firstPageAggregateLoading: !1,
        globalInvestGrayHit: !1,
        globalInvestGrayChecked: !1,
      };
    },
    setup: function () {
      var t = n.inject("isHqShow", function () {
          return !1;
        }),
        e = ["mpwzq", "wzqlight"].includes("mpweapp"),
        a = n.inject("hqBridge"),
        s = !1;
      navigator && (s = i.dist.detect(navigator.userAgent).env.IS_ZXG);
      var c = function () {
        return "undefined" != typeof document
          ? d[document.body.getAttribute("data-theme") || "light"]
          : d[n.wx$1.getStorageSync("user/skin") || "light"];
      };
      f ||
        (f = new r.DetailApi(function (t) {
          return a.request(t);
        }));
      var l = o.useDiscoverConfig(a),
        u = l.tabPageData,
        h = l.getTabPageData;
      return (
        h(),
        {
          isLite: e,
          isMp: !1,
          isHqShow: t,
          isMpZxg: !0,
          isPro: !0,
          getThemeSkin: c,
          theme: c(),
          IS_ZXG: s,
          tabPageData: u,
          getTabPageData: h,
        }
      );
    },
    created: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          var n,
            r,
            o,
            a = this;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    !this.isMp &&
                      navigator &&
                      ((n = i.dist.detect(navigator.userAgent)),
                      (r = n.os).ios &&
                        r.version <= "11.4.0" &&
                        (this.webscrolltouch = !0)),
                      this.IS_ZXG
                        ? this.zxgHandle()
                        : (this.loadFirstPageAggregate(), this.updateData()),
                      this.checkGlobalInvestGray(),
                      (o = setTimeout(function () {
                        a.judgePopTeach(), clearTimeout(o);
                      }, 2e3));
                  case 3:
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
    computed: {
      hqShowStatus: function () {
        return this.isHqShow && this.isHqShow();
      },
    },
    watch: {
      hqShowStatus: function () {
        this.theme = this.getThemeSkin();
      },
    },
    mounted: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          var n = this;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (this.hqBridge.report("hq.etfpage.etfmatch_brow"),
                      this.hqBridge.busEmit("etf-zj-qj-entry-show"),
                      this.IS_ZXG ||
                        (this.reportFirstPageModule(),
                        this.loadFirstPageAggregate()),
                      this.handleScroll(),
                      this.isMp ||
                        this.isMpZxg ||
                        ((this.onVisibilityChange = function () {
                          document.hidden
                            ? ((n.isEtfPageShow = !1), n.clearRefresh())
                            : ((n.isEtfPageShow = !0), n.updateData());
                        }),
                        document.addEventListener(
                          "visibilitychange",
                          this.onVisibilityChange
                        )),
                      !this.IS_ZXG)
                    ) {
                      t.next = 6;
                      break;
                    }
                    return (t.next = 3), this.checkPageVisible();
                  case 3:
                    if (((t.t0 = t.sent), !t.t0)) {
                      t.next = 6;
                      break;
                    }
                    this.loadFirstPageAggregate();
                  case 6:
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
    destroyed: function () {
      (this.isEtfPageShow = !1),
        this.clearRefresh(),
        this.handleScroll(!0),
        this.isMp ||
          this.isMpZxg ||
          !this.onVisibilityChange ||
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
    },
    deactivated: function () {
      (this.isEtfPageShow = !1), this.clearRefresh();
    },
    activated: function () {
      this.theme = this.getThemeSkin();
    },
    methods: {
      chunk: n.chunk,
      checkPageVisible: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        !this.$sdk ||
                        "function" != typeof this.$sdk.getPageState
                      ) {
                        t.next = 11;
                        break;
                      }
                      return (
                        (t.prev = 1), (t.next = 4), this.$sdk.getPageState()
                      );
                    case 4:
                      if (!(n = t.sent) || "boolean" != typeof n.visible) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return", n.visible);
                    case 7:
                      t.next = 11;
                      break;
                    case 9:
                      (t.prev = 9), (t.t0 = t.catch(1));
                    case 11:
                      return t.abrupt(
                        "return",
                        "undefined" != typeof document &&
                          "visible" === document.visibilityState
                      );
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[1, 9]]
            );
          })
        );
      },
      checkGlobalInvestGray: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var r, i, o, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.IS_ZXG) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((this.globalInvestGrayHit = !0),
                        void (this.globalInvestGrayChecked = !0))
                      );
                    case 2:
                      return (
                        (t.prev = 2),
                        (t.next = 5),
                        n.StockBridge.getLoginInfoUnion()
                      );
                    case 5:
                      if (((r = t.sent), (i = r.qluin))) {
                        t.next = 9;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((this.globalInvestGrayHit = !1),
                        void (this.globalInvestGrayChecked = !0))
                      );
                    case 9:
                      return (
                        (t.next = 11),
                        (a = i),
                        "7992594680",
                        u(void 0, void 0, void 0, function () {
                          return h(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  t.trys.push([0, 2, , 3]),
                                  [4, l(a, n.Wuji, "7992594680", void 0)]
                                );
                              case 1:
                                return [2, t.sent()];
                              case 2:
                                return t.sent(), [2, !1];
                              case 3:
                                return [2];
                            }
                          });
                        })
                      );
                    case 11:
                      (o = t.sent),
                        (this.globalInvestGrayHit = o),
                        (this.globalInvestGrayChecked = !0),
                        (t.next = 18);
                      break;
                    case 15:
                      (t.prev = 15),
                        (t.t0 = t.catch(2)),
                        (this.globalInvestGrayHit = !1),
                        (this.globalInvestGrayChecked = !0);
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[2, 15]]
            );
          })
        );
      },
      updateData: function () {
        this.handleMarketState(), this.judgeTime();
      },
      loadFirstPageAggregate: function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e(
          this,
          null,
          t().mark(function e() {
            var r, i, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (n && !this.firstPageAggregateLoaded) {
                        t.next = 22;
                        break;
                      }
                      if (n) {
                        t.next = 5;
                        break;
                      }
                      if (
                        !this.firstPageAggregateLoaded &&
                        !this.firstPageAggregateLoading
                      ) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return");
                    case 4:
                      this.firstPageAggregateLoading = !0;
                    case 5:
                      return (
                        n ||
                          ((this.hotPointData = null),
                          (this.overseaData = null),
                          (this.dividendData = null),
                          (this.t0Data = null)),
                        (t.prev = 6),
                        (t.next = 9),
                        a.api.getEtfFirstPageAggregate(this.hqBridge)
                      );
                    case 9:
                      if ((i = t.sent) && 0 === i.code && i.data) {
                        t.next = 12;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void (
                          n ||
                          ((this.hotPointData = []),
                          (this.overseaData = {}),
                          (this.dividendData = {}),
                          (this.t0Data = {}),
                          (this.buyIndexData = null))
                        )
                      );
                    case 12:
                      (o =
                        null == (r = i.data.hot_point)
                          ? void 0
                          : r.hot_point_list),
                        (this.hotPointData = Array.isArray(o) ? o : []),
                        (this.overseaData = i.data.oversea || {}),
                        (this.dividendData = i.data.dividend || {}),
                        (this.buyIndexData = i.data.buy_index || null),
                        (this.t0Data = i.data.t0 || {}),
                        (this.firstPageAggregateLoaded = !0),
                        (t.next = 19);
                      break;
                    case 16:
                      (t.prev = 16),
                        (t.t0 = t.catch(6)),
                        n ||
                          ((this.hotPointData = []),
                          (this.overseaData = {}),
                          (this.dividendData = {}),
                          (this.t0Data = {}),
                          (this.buyIndexData = null));
                    case 19:
                      return (
                        (t.prev = 19),
                        n || (this.firstPageAggregateLoading = !1),
                        t.finish(19)
                      );
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[6, 16, 19, 22]]
            );
          })
        );
      },
      tabActivated: function () {
        var t = this;
        (this.isEtfPageShow = !0),
          this.handleMarketState(),
          this.judgeTime(),
          this.$nextTick(function () {
            t.$refs.scroll && t.$refs.scroll.scrollTo(0, t.scrollTop);
          }),
          this.hqBridge.busEmit("etf-zj-qj-entry-show"),
          this.getTabPageData();
      },
      tabDeactivated: function () {
        (this.isEtfPageShow = !1), this.clearRefresh();
      },
      handleMarketState: function () {
        var n = this;
        this.getTradeTime(),
          this.tradeInterval && clearInterval(this.tradeInterval),
          (this.tradeInterval = setInterval(function () {
            return e(
              n,
              null,
              t().mark(function e() {
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          this.getTradeTime();
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
          }, 3e4));
      },
      getTradeTime: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        f.getMarketState({ market: 0 }, { needProcess: !0 })
                      );
                    case 2:
                      (n = t.sent),
                        (r = ((null == n ? void 0 : n.split("|")) || [])
                          .map(function (t) {
                            return t.split("_");
                          })
                          .filter(function (t) {
                            return "NEWSH" === t[0];
                          })).length && (this.isTrading = "open" === r[0][1]);
                    case 5:
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
      toggleShowTeachPop: function (t) {
        this.$emit("toggleShowTeachPop");
      },
      judgePopTeach: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isPro) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      n.StockBridge.getStorage("etf-teach-ispoped")
                        ? (this.showETFPop = !1)
                        : ((this.showETFPop = !0),
                          n.StockBridge.setStorage("etf-teach-ispoped", !0),
                          this.hqBridge.report("hq.etfpage.teach_guide_show"));
                    case 3:
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
      clearRefresh: function () {
        this.interval && clearInterval(this.interval),
          this.tradeInterval && clearInterval(this.tradeInterval);
      },
      judgeTime: function () {
        var t = this;
        this.interval && clearInterval(this.interval),
          (this.interval = setInterval(function () {
            t.isTrading &&
              (t.$refs.etfranklist && t.$refs.etfranklist.getRankData(),
              t.loadFirstPageAggregate(!0),
              t.getTabPageData());
          }, 5e3));
      },
      refresh: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      this.$emit("onPullingDown");
                      try {
                        this.getTabPageData(),
                          this.$refs.etfranklist &&
                            this.$refs.etfranklist.getRankData(!0, !1),
                          this.loadFirstPageAggregate(!0),
                          null == (n = this.$refs.refresh) ||
                            n.stopPullDownRefresh();
                      } catch (t) {
                        null == (r = this.$refs.refresh) ||
                          r.stopPullDownRefresh();
                      }
                    case 2:
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
      gotoEtfMatch: function () {
        this.hqBridge.report("hq.etfpage.etf_match_entry_click"),
          setTimeout(function () {
            location &&
              (location.href =
                "https://zqact03.tenpay.com/activity/page/etfEnrollMatchThirdPhase/#/index?target=hotetf&stat_data=I9E00p000b072");
          }, 500);
      },
      gotoHotTopicEntry: function () {
        n.StockBridge.mtaReport({
          busi: "hq",
          eventName: "hot_topic_home_entry_click",
          params: { from: "etf_home" },
        }),
          n.StockRouter.routeTo({
            name: "etfhotlist",
            query: { from: "etf_home" },
          });
      },
      openTeach: function (t, e) {
        if (
          (this.hqBridge.report("hq.etfpage.".concat(t, "_teach_click")),
          "rank" === t)
        )
          this.hqBridge.routeTo({
            path: "/information/detail",
            query: {
              articleStyle: "fullTeach",
              id: "SN2022120907324782a92961",
            },
          });
        else {
          var n = e;
          if (n.includes("wzq.tenpay.com/mp/v2/index.html")) {
            var r = n.split("#");
            if (r && r[1]) return void this.hqBridge.routeTo({ path: r[1] });
          }
          if (location) {
            var i = this.lct ? "lct" : "wzq";
            location.href =
              n.indexOf("?") > 0
                ? "".concat(n, "&env=").concat(i)
                : "".concat(n, "?env=").concat(i);
          }
        }
      },
      zxgHandle: function () {
        var t = this;
        this.IS_ZXG &&
          (this.$sdk.setRefresh(!1),
          this.$sdk.pageWillAppear(function () {
            (t.pageAppear = !0),
              (t.pageShown = !0),
              t.hqBridge.report("hq.etf.etf_tab_page_show"),
              t.updateData(),
              t.firstAppear &&
                (t.reportFirstPageModule(), t.loadFirstPageAggregate()),
              (t.firstAppear = !1);
          }));
      },
      handleScroll: function (t) {
        var e = this;
        this.isMp ||
          this.isMpZxg ||
          (t
            ? window.removeEventListener("scroll", this.onScroll, !0)
            : this.$nextTick(function () {
                window.addEventListener("scroll", e.onScroll, !0);
              }));
      },
      reportFirstPageModule: function () {
        this.hqBridge.report("hq.etf.etf_quick_entry_show"),
          this.IS_ZXG && this.reportNotFirstPageModule();
      },
      reportNotFirstPageModule: function () {
        var t,
          e,
          n,
          r,
          i,
          o = this,
          a = [
            {
              dom: null == (t = this.$refs.bulletin) ? void 0 : t.$el,
              event: "hq.etf.etf_bulletin_show",
            },
            {
              dom: null == (e = this.$refs.buyIndexEntry) ? void 0 : e.$el,
              event: "hq.etf.etf_buy_index_entry_show",
            },
            {
              dom: null == (n = this.$refs.globalDiscover) ? void 0 : n.$el,
              event: "hq.etf.etf_global_discover_block_show",
            },
            {
              dom: null == (r = this.$refs.etfStrategy) ? void 0 : r.$el,
              event: "hq.etf.etf_dg_card_show",
            },
            {
              dom: this.$refs.tranklistWrapper,
              event: "hq.etf.etf_trade_list_show",
            },
            {
              dom: null == (i = this.$refs.etfranklist) ? void 0 : i.$el,
              event: "hq.etf.etf_rank_list_show",
            },
            { dom: this.$refs.etfTeachWrapper, event: "hq.etf.etf_teach_show" },
          ];
        setTimeout(function () {
          a.forEach(function (t) {
            !(function (t, e) {
              t instanceof Element &&
                e instanceof Function &&
                new IntersectionObserver(function (t, n) {
                  t.forEach(function (t) {
                    t.isIntersecting && (n.unobserve(t.target), e());
                  });
                }, s).observe(t);
            })(t.dom, function () {
              o.hqBridge.report(t.event);
            });
          });
        }, 100);
      },
      onScroll: function () {
        var t,
          e = this;
        (this.scrollTop =
          null == (t = this.$refs.scroll) ? void 0 : t.scrollTop),
          (this.pullDisabled = !0),
          this.scrollTimer && clearTimeout(this.scrollTimer),
          (this.scrollTimer = setTimeout(function () {
            window.scrollY <= 10 && (e.pullDisabled = !1);
          }, 10)),
          this.needReportScroll &&
            (this.hqBridge.report("hq.etf.etf_tab_scroll"),
            (this.needReportScroll = !1));
      },
    },
  };
Array ||
  (
    n.resolveComponent("etf-bulletin") +
    n.resolveComponent("etf-quick-entry") +
    n.resolveComponent("NewpubEtfBar") +
    n.resolveComponent("etf-dig-hot-block") +
    n.resolveComponent("etf-buy-index-entry") +
    n.resolveComponent("etf-discover-block") +
    n.resolveComponent("GlobalInvest") +
    n.resolveComponent("etf-dividend-block") +
    n.resolveComponent("etf-zone-t0-module") +
    n.resolveComponent("etf-rank-block") +
    n.resolveComponent("etf-teach") +
    n.resolveComponent("TrustFooter") +
    n.resolveComponent("st-pull-refresh") +
    n.resolveComponent("etf-pop-com") +
    n.resolveComponent("TeachPop")
  )();
var g = n._export_sfc(p, [
  [
    "render",
    function (t, e, r, i, o, a) {
      return n.e(
        { a: r.showETFBulletin },
        r.showETFBulletin ? { b: n.sr("bulletin", "f5c3aef2-0") } : {},
        { c: r.showQuickEntry && i.isPro && !i.IS_ZXG },
        (r.showQuickEntry && i.isPro && i.IS_ZXG, {}),
        { d: r.showQuickEntry },
        r.showQuickEntry ? { e: n.p({ theme: i.theme }) } : {},
        { f: r.showETFBar },
        (r.showETFBar, {}),
        {
          g: n.sr("digHotBlock", "f5c3aef2-4,f5c3aef2-1"),
          h: n.o(a.gotoHotTopicEntry, 523),
          i: n.p({ theme: i.theme, "hot-point-list": o.hotPointData }),
          j: n.sr("buyIndexEntry", "f5c3aef2-5,f5c3aef2-1"),
          k: n.p({ theme: i.theme, "buy-index-data": o.buyIndexData }),
          l: !o.globalInvestGrayHit,
        },
        o.globalInvestGrayHit
          ? {}
          : {
              m: n.sr("globalDiscover", "f5c3aef2-6,f5c3aef2-1"),
              n: n.p({
                type: "global",
                theme: i.theme,
                curCardData: i.tabPageData[o.DiscoverType.GLOBAL],
              }),
            },
        { o: o.globalInvestGrayHit },
        o.globalInvestGrayHit
          ? {
              p: n.o(a.gotoHotTopicEntry, 524),
              q: n.p({
                theme: i.theme,
                "oversea-data": o.overseaData,
                "page-shown": o.pageShown,
              }),
            }
          : {},
        {
          r: n.sr("dividendDiscover", "f5c3aef2-8,f5c3aef2-1"),
          s: n.p({ theme: i.theme, "dividend-data": o.dividendData || {} }),
          t: n.sr("etfStrategy", "f5c3aef2-9,f5c3aef2-1"),
          v: n.p({ "t0-data": o.t0Data, theme: i.theme }),
          w: o.pageAppear,
        },
        o.pageAppear
          ? {
              x: n.sr("etfranklist", "f5c3aef2-10,f5c3aef2-1"),
              y: n.o(function (t) {
                return a.toggleShowTeachPop(!0);
              }, 525),
              z: n.p({ isEtfPageShow: o.isEtfPageShow }),
            }
          : {},
        {
          A: n.sr("etfteach", "f5c3aef2-11,f5c3aef2-1"),
          B: n.n(i.IS_ZXG ? "has-bottom" : ""),
          C: i.isLite,
        },
        (i.isLite, {}),
        {
          D: n.sr("refresh", "f5c3aef2-1"),
          E: n.o(a.refresh, 526),
          F: n.p({ disabled: o.pullDisabled }),
          G: !i.isPro && o.showETFPop,
        },
        (!i.isPro && o.showETFPop, {}),
        {
          H: n.o(function (t) {
            return a.toggleShowTeachPop(!1);
          }, 527),
          I: n.p({ showPop: o.showTeachPop }),
          J: n.n(o.webscrolltouch ? "wrapper-touch" : ""),
          K: n.n(i.isLite ? "lite" : ""),
          L: n.n(i.IS_ZXG ? "zxg" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-f5c3aef2"],
]);
wx.createComponent(g);
