var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../common/vendor.js"),
  n = require("../../Index.js"),
  i = require("../../../stock-hq-core/utils/market.js"),
  r = n.detect().os,
  a = {
    components: {
      PlateContainer: function () {
        return "./plate-container/PlateContainerTwo.js";
      },
      platefund: function () {
        return "./platefund.js";
      },
      plateMarketChange: function () {
        return "./plateMarketChange.js";
      },
      AnalysisTutorial: function () {
        return "./AnalysisTutorial.js";
      },
    },
    inject: {
      isHqShow: {
        default: function () {
          return function () {
            return !1;
          };
        },
      },
    },
    provide: function () {
      return { sharedState: {} };
    },
    props: {
      tabOnShow: { type: Boolean, default: !0 },
      barHeight: { type: Number, default: 0 },
      outerSwiperHeight: { type: Number, default: 0 },
    },
    data: function () {
      var t = n.RANK_META_INFO.HS;
      return {
        plate: [
          { name: "热门行业", plateId: t.industry, data: {} },
          { name: "热门概念", plateId: t.concept, data: {} },
          { name: "热门地域", plateId: t.region, data: {} },
        ],
        timer: null,
        fundData: null,
        webscrolltouch: r.ios && r.version <= "11.4.0",
        winHeight: 0,
        screenRatio: 1,
        scrollHeight: 550,
        mpTriggered: !1,
        mpRefreshing: !1,
        enabled: !1,
      };
    },
    computed: {
      isWzq: function () {
        return !1;
      },
      scrollStyle: function () {
        return "width: 100%; height: ".concat(this.scrollHeight, "px;");
      },
      isPageShow: function () {
        var t;
        return null == (t = this.isHqShow) ? void 0 : t.call(this);
      },
    },
    watch: {
      barHeight: function (t) {
        this.scrollHeight = this.winHeight - t - 44 * this.screenRatio;
      },
      outerSwiperHeight: function (t) {
        this.scrollHeight = t;
      },
      tabOnShow: function (t, e) {
        t !== e && (t ? this.startGetData() : this.clearTimer());
      },
      isPageShow: function (t, e) {
        t !== e &&
          (t && this.tabOnShow ? this.startGetData() : this.clearTimer());
      },
    },
    created: function () {
      var t = this;
      this.getData().then(function () {
        t.$emit("loaded");
      }),
        this.startGetData();
    },
    mounted: function () {
      var t = this;
      if (this.isWzq) {
        var n = document.documentElement.clientWidth || 375;
        (this.screenRatio = n / 375),
          (this.winHeight =
            document.documentElement.clientHeight ||
            document.body.clientHeight),
          this.$refs.scroll &&
            this.$refs.scroll.addEventListener("scroll", this.onScroll, !0);
      } else {
        var i = (null == getApp ? void 0 : getApp().globalData).rpxToPx(208),
          r =
            (e.wx$1.getWindowInfo && e.wx$1.getWindowInfo()) ||
            e.wx$1.getSystemInfoSync(),
          a = r.screenWidth,
          o = r.screenHeight;
        (this.screenRatio = a / 375),
          (this.winHeight = o),
          (this.scrollHeight =
            this.winHeight - (this.barHeight || i) - 44 * this.screenRatio),
          setTimeout(function () {
            t.enabled = !0;
          }, 1e3);
      }
    },
    activated: function () {
      this.tabOnShow && this.startGetData();
      var t = this.$refs.scroll;
      t && t.pullDownY && (t.scrollTo(0, t.pullDownY), t.refresh());
    },
    deactivated: function () {
      this.clearTimer();
    },
    beforeDestroy: function () {
      this.clearTimer();
    },
    methods: {
      mpStartPull: function () {
        this.mpTriggered = !0;
      },
      mpPullEnd: function () {
        this.mpTriggered = !1;
      },
      mpPullRefresh: function () {
        var t = this;
        if ((this.onPullingDown(!0), !this.mpRefreshing)) {
          this.mpRefreshing = !0;
          var e = setTimeout(function () {
            (t.mpTriggered = !1), (t.mpRefreshing = !1), clearTimeout(e);
          }, 600);
        }
      },
      onScroll: function (t) {
        this.$emit("onTabScroll", t);
      },
      startGetData: function () {
        var t = this;
        this.clearTimer(),
          (this.timer = setInterval(function () {
            var e = new Date().toTimeString().slice(0, 5).replace(":", "");
            i.isHSTradeTime(e) && t.getData();
          }, 5e3));
      },
      clearTimer: function () {
        this.timer && clearInterval(this.timer);
      },
      getData: function () {
        return (
          (e = this),
          null,
          (i = t().mark(function () {
            var e, i, r, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), n.HqAPI.getHotPlate();
                    case 2:
                      (e = t.sent),
                        (this.fundData = e),
                        (i = e.rank),
                        (r = void 0 === i ? {} : i),
                        (a = ["industry", "concept", "region"]),
                        this.plate.map(function (t, e) {
                          t.data = r[a[e]];
                        });
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              a,
              this
            );
          })),
          new Promise(function (t, n) {
            var r = function (t) {
                try {
                  o(i.next(t));
                } catch (t) {
                  n(t);
                }
              },
              a = function (t) {
                try {
                  o(i.throw(t));
                } catch (t) {
                  n(t);
                }
              },
              o = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(r, a);
              };
            o((i = i.apply(e, null)).next());
          })
        );
        var e, i;
      },
      onPullingDown: function (t) {
        var e, n, i, r;
        this.$emit("onPullingDown");
        try {
          this.getData();
          var a = null == (e = this.$refs) ? void 0 : e.plateChange;
          a && a.requestRealtimeData && a.requestRealtimeData();
          var o =
            null == (n = null == a ? void 0 : a.$refs)
              ? void 0
              : n.changeWrapper;
          o && o.getData && o.getData(),
            t &&
              (null == (r = null == (i = this.$refs) ? void 0 : i.refresh) ||
                r.stopPullDownRefresh());
        } catch (t) {}
      },
      gotoMoneyFlowIndustry: function () {
        this.gotoMoneyFlow("dy");
      },
      gotoMoneyFlow: function (t) {
        e.StockBridge.routeTo({ path: "/moneyflow/".concat(t) });
      },
      gotoNorthPlate: function (t) {
        if (t) {
          var e = t.dateNum;
          e && this.activePlate(e);
        }
      },
      activePlateEnter: function () {
        this.activePlate(1);
      },
      activePlate: function (t) {
        e.StockBridge.routeTo({ path: "/activeplate/".concat(t) });
      },
    },
  };
Array ||
  (
    e.resolveComponent("platefund") +
    e.resolveComponent("plateMarketChange") +
    e.resolveComponent("plate-container") +
    e.resolveComponent("analysis-tutorial")
  )();
var o = e._export_sfc(a, [
  [
    "render",
    function (t, n, i, r, a, o) {
      return {
        a: e.o(o.gotoNorthPlate, 3966),
        b: e.p({ "fund-data": a.fundData }),
        c: e.sr("plateChange", "fa9bada6-1"),
        d: e.p({ "tab-on-show": i.tabOnShow }),
        e: e.f(a.plate, function (t, n, i) {
          return { a: t.plateId, b: "fa9bada6-2-" + i, c: e.p({ plate: t }) };
        }),
        f: e.s(o.scrollStyle),
        g: a.enabled,
        h: a.mpTriggered,
        i: e.o(function () {
          return o.mpStartPull && o.mpStartPull.apply(o, arguments);
        }, 3967),
        j: e.o(function () {
          return o.mpPullEnd && o.mpPullEnd.apply(o, arguments);
        }, 3968),
        k: e.o(function () {
          return o.mpPullRefresh && o.mpPullRefresh.apply(o, arguments);
        }, 3969),
        l: e.o(function () {
          return o.onScroll && o.onScroll.apply(o, arguments);
        }, 3970),
        m: e.n(a.webscrolltouch ? "wrapper-touch" : ""),
      };
    },
  ],
  ["__scopeId", "data-v-fa9bada6"],
]);
wx.createComponent(o);
