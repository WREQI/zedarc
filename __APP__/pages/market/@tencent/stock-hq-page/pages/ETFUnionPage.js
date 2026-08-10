var e = require("../../../../../common/vendor.js"),
  t = {
    components: {
      ETFMainPage: function () {
        return "../../../../marketSbg/@tencent/stock-hq-etf/ETFMainPage.js";
      },
    },
    inject: {
      isAccountOpen: {
        default: function () {
          return !1;
        },
      },
      brokerName: { default: function () {} },
    },
    props: {
      lct: { type: Boolean, default: !1 },
      barHeight: { type: Number, default: 0 },
      outerSwiperHeight: { type: Number, default: 0 },
    },
    options: { styleIsolation: "shared" },
    data: function () {
      return {
        webscrolltouch: !1,
        scrollHeight: 550,
        screenRatio: 1,
        mpTriggered: !1,
        mpRefreshing: !1,
        enabled: !1,
      };
    },
    computed: {
      scrollStyle: function () {
        return "width: 100%; height: ".concat(this.scrollHeight, "px;");
      },
      isWzq: function () {
        return !1;
      },
      showETFBar: function () {
        var e = this.brokerName || {},
          t = e.isZhaoShang,
          i = e.isHuaLin;
        return (
          !this.isAccountOpen ||
          (null == t ? void 0 : t.value) ||
          (null == i ? void 0 : i.value)
        );
      },
    },
    watch: {
      barHeight: function (e) {
        this.scrollHeight = this.winHeight - e - 44 * this.screenRatio;
      },
      outerSwiperHeight: function (e) {
        this.scrollHeight = e;
      },
    },
    beforeDestroy: function () {
      this.isWzq &&
        this.$refs.scroll &&
        this.$refs.scroll.removeEventListener("scroll", this.onScroll, !0),
        clearTimeout(this.timer),
        (this.timer = null);
    },
    created: function () {
      var e = this;
      this.$nextTick(function () {
        e.$emit("loaded");
      });
    },
    mounted: function () {
      var t = this;
      if (this.isWzq) {
        var i = document.documentElement.clientWidth || 375;
        (this.screenRatio = i / 375),
          (this.winHeight =
            document.documentElement.clientHeight ||
            document.body.clientHeight),
          this.$refs.scroll &&
            this.$refs.scroll.addEventListener("scroll", this.onScroll, !0);
      } else {
        var n = (null == getApp ? void 0 : getApp().globalData).rpxToPx(208),
          r =
            (e.wx$1.getWindowInfo && e.wx$1.getWindowInfo()) ||
            e.wx$1.getSystemInfoSync(),
          o = r.screenWidth,
          s = r.screenHeight;
        (this.screenRatio = o / 375),
          (this.winHeight = s),
          (this.scrollHeight =
            this.winHeight - (this.barHeight || n) - 44 * this.screenRatio),
          setTimeout(function () {
            t.enabled = !0;
          }, 1e3);
      }
    },
    methods: {
      mpStartPull: function () {
        this.mpTriggered = !0;
      },
      mpPullEnd: function () {
        this.mpTriggered = !1;
      },
      mpPullRefresh: function () {
        var e = this;
        this.onPullingDown(),
          this.mpRefreshing ||
            ((this.mpRefreshing = !0),
            (this.timer = setTimeout(function () {
              (e.mpTriggered = !1),
                (e.mpRefreshing = !1),
                clearTimeout(e.timer);
            }, 600)));
      },
      onPullingDown: function () {
        this.$refs.etfPage && this.$refs.etfPage.refresh();
      },
      tabActivated: function () {
        this.$refs.etfPage && this.$refs.etfPage.tabActivated();
      },
      tabDeactivated: function () {
        this.$refs.etfPage && this.$refs.etfPage.tabDeactivated();
      },
      onScroll: function (e) {
        this.$emit("onTabScroll", e);
      },
    },
  };
Array || e.resolveComponent("ETFMainPage")();
var i = e._export_sfc(t, [
  [
    "render",
    function (t, i, n, r, o, s) {
      return {
        a: e.sr("etfPage", "5de13424-0"),
        b: e.o(function (e) {
          return t.$emit("toggleShowTeachPop");
        }, 4e3),
        c: e.p({
          "show-e-t-f-bar": s.showETFBar,
          "show-e-t-f-bulletin": !1,
          "show-quick-entry": !0,
          lct: n.lct,
        }),
        d: e.s(s.scrollStyle),
        e: o.enabled,
        f: o.mpTriggered,
        g: e.o(function () {
          return s.mpStartPull && s.mpStartPull.apply(s, arguments);
        }, 4001),
        h: e.o(function () {
          return s.mpPullEnd && s.mpPullEnd.apply(s, arguments);
        }, 4002),
        i: e.o(function () {
          return s.mpPullRefresh && s.mpPullRefresh.apply(s, arguments);
        }, 4003),
        j: e.o(function () {
          return s.onScroll && s.onScroll.apply(s, arguments);
        }, 4004),
        k: e.n(o.webscrolltouch ? "wrapper-touch" : ""),
      };
    },
  ],
  ["__scopeId", "data-v-5de13424"],
]);
wx.createComponent(i);
