var t = require("../stock-hq-core/utils/storage/local.js");
require("../../js-cookie/src/js.cookie.js");
var e = require("../../../../common/vendor.js"),
  i = {
    name: "NewstockPurchase",
    inject: ["hqBridge"],
    props: {
      marketType: { type: String, default: "" },
      category: { type: String, default: "" },
      timeStamp: { type: String, default: "" },
      tabbarHeight: { type: Number, default: 0 },
      query: { type: Object, default: function () {} },
    },
    components: {
      StockPurchaseList: function () {
        return "./components/perform-page/StockPurchaseList.js";
      },
      TeachPopBlock: function () {
        return "./components/common/TeachPopBlock.js";
      },
    },
    data: function () {
      return {
        periodList: [90, 180, 360],
        tabs: ["近3月", "近6月", "近一年"],
        dataReady: !1,
        currTab: 0,
        purchaseDailyAnination: !1,
        isFirst: !0,
        isStockInit: !1,
        isBondInit: !1,
        containerHeight: 0,
        env: this.hqBridge.ENV,
        queryParams: null,
        market: "",
        type: "",
        teachBlockShow: !1,
        teachContent: "",
        teachTips: "",
        teachTitle: "",
      };
    },
    computed: {
      swiper: function () {
        var t;
        return null == (t = this.$refs.chooseSwiper) ? void 0 : t.swiper;
      },
      isH5: function () {
        return "mini" === this.env;
      },
    },
    watch: {
      category: {
        handler: function (t) {
          var e = this;
          this.isH5 &&
            ((this.type = t),
            this.$nextTick(function () {
              [0, 1, 2].forEach(function (i) {
                var n = e.$refs["purchase-list-".concat(i)];
                n[0] &&
                  (n[0].updateConfig(e.market, e.type),
                  ("stock" === t && !e.isStockInit) ||
                  ("bond" === t && !e.isBondInit)
                    ? (n[0].loadData(!0), e.switchTab(e.currTab))
                    : n[0].tabActivated());
              }),
                e.isStockInit || "stock" !== t || (e.isStockInit = !0),
                e.isBondInit || "bond" !== t || (e.isBondInit = !0);
            }));
        },
        immediate: !0,
      },
      tabbarHeight: function (t) {
        this.setContainerHeight(t);
      },
      query: {
        handler: function (t) {
          t &&
            ((this.queryParams = t),
            (this.market = this.queryParams.market),
            (this.type = this.queryParams.type));
        },
        immediate: !0,
        deep: !0,
      },
    },
    created: function () {
      this.checkAnimation(), this.setContainerHeight();
    },
    activated: function () {
      var t = this;
      if (!this.isH5) {
        if (
          this.timestamp !== this.$route.query.timestamp ||
          this.market !== this.$route.query.market
        ) {
          var e = this.$route.query || {},
            i = e.market,
            n = e.type,
            a = e.timestamp,
            o = e.periodTab,
            r = void 0 === o ? 1 : o;
          (this.market = i),
            (this.type = n),
            (this.timestamp = a),
            (this.currTab = +r),
            [0, 1, 2].forEach(function (e) {
              var i,
                n,
                a,
                o,
                r,
                s =
                  null == (i = t.$refs)
                    ? void 0
                    : i["purchase-list-".concat(e)];
              (null == s ? void 0 : s[0]) &&
                (s[0].updateConfig(t.market, t.type),
                s[0].loadData(!0),
                null ==
                  (r =
                    null ==
                    (o =
                      null == (a = null == (n = s[0]) ? void 0 : n.$refs)
                        ? void 0
                        : a.scrollView)
                      ? void 0
                      : o.scrollTo) || r.call(o, 0, 0));
            }),
            this.switchTab(this.currTab);
        }
        setTimeout(function () {
          t.handleShareConfig();
        }, 1e3);
      }
    },
    beforeRouteLeave: function (t, e, i) {
      i();
    },
    methods: {
      onPullingDown: function () {
        this.$refs.purchaselist && this.$refs.purchaselist.onPullingDown();
      },
      handleReachBottom: function () {
        this.$refs.purchaselist && this.$refs.purchaselist.onPullingUp();
      },
      finishPullDown: function () {
        this.$emit("finishPullDown");
      },
      didSHowDailyAnination: function () {
        this.purchaseDailyAnination = !1;
      },
      checkAnimation: function () {
        var e = t.sls.getItem("purchaseDailyAnination"),
          i = new Date(),
          n = ""
            .concat(i.getFullYear(), "-")
            .concat(i.getMonth() + 1, "-")
            .concat(i.getDate());
        e && e === n
          ? (this.purchaseDailyAnination = !1)
          : ((this.purchaseDailyAnination = !0),
            t.sls.setItem("purchaseDailyAnination", n));
      },
      swiperChange: function (t) {
        var e = ((null == t ? void 0 : t.detail) || {}).current;
        this.currTab = e || 0;
      },
      switchTab: function (t) {
        this.afterSwitchTab(t);
      },
      afterSwitchTab: function (e) {
        (this.currTab = e), t.sessionStorage.setItem("hq/purchase", e);
      },
      enableSwiper: function () {},
      disableSwiper: function () {},
      showTips: function (t) {
        this.showTeachPop(t);
      },
      onTipsHide: function () {
        this.showPurchaseTips = !1;
      },
      showTeachPop: function (t) {
        "normal" === t &&
          ((this.teachTitle = "普通新股"),
          (this.teachContent = [
            {
              title: "连板天数",
              context:
                "普通新股上市以来的连续涨停天数（含发行首日涨幅达到44%的天数）",
            },
            {
              title: "每签获利",
              context: "每签新股股数*（涨停开板当日的收盘价-发行价）",
            },
          ]),
          (this.teachTips = "注：创业板和科创板股票不包含在内")),
          "chuangyeban" === t &&
            ((this.teachTitle = "创业板新股"),
            (this.teachContent = [
              {
                title: "首日破发数",
                context:
                  "统计区间内，创业板新股中上市第一天最低价低于发行价格的股票数量",
              },
              {
                title: "首日涨幅",
                context: "（新股上市第一天的收盘价-发行价）/发行价",
              },
            ]),
            (this.teachTips = "")),
          "kechuangban" === t &&
            ((this.teachTitle = "科创板新股"),
            (this.teachContent = [
              {
                title: "首日破发数",
                context:
                  "统计区间内，科创板新股中上市第一天最低价低于发行价格的股票数量",
              },
              {
                title: "首日涨幅",
                context: "（新股上市第一天的收盘价-发行价）/发行价",
              },
            ]),
            (this.teachTips = "")),
          this.popTeach();
      },
      popTeach: function () {
        this.teachBlockShow = !0;
      },
      hideTeach: function () {
        var t = this;
        (this.teachBlockShow = !1),
          setTimeout(function () {
            t.teachContent = "";
          }, 300);
      },
      handleShareConfig: function () {
        var t,
          e = {
            GUOSEN: "国信证券帮你洞悉市场，一键打新",
            ZHONGXINJIANTOU: "中信建投证券帮你洞悉市场，一键打新",
            ZHONGJINCAIFU: "中信财富帮你洞悉市场，一键打新",
            ZHONGXIN: "中信证券帮你洞悉市场，一键打新",
            GUANGFA: "广发证券帮你洞悉市场，一键打新",
            DEFAULT: "帮你洞悉市场，一键打新",
          },
          i =
            e[
              (null == (t = null == window ? void 0 : window.$broker)
                ? void 0
                : t.id) || ""
            ] || e.DEFAULT;
        this.hqBridge.useShare &&
          this.hqBridge.useShare({ desc: i, title: "近期打新获利请查收" });
      },
      setContainerHeight: function (t) {
        this.containerHeight = "calc(100vh - ".concat(t, "px - 50px)");
      },
    },
  };
Array ||
  (
    e.resolveComponent("stock-purchase-list") +
    e.resolveComponent("TeachPopBlock")
  )();
var n = e._export_sfc(i, [
  [
    "render",
    function (t, i, n, a, o, r) {
      return e.e(
        {
          a: e.f(o.tabs, function (t, i, n) {
            return e.e({ a: e.t(t), b: o.currTab === i }, (o.currTab, {}), {
              c: i,
              d: e.n(o.currTab === i ? "active" : ""),
              e: e.o(
                function (t) {
                  return r.switchTab(i);
                },
                1277,
                i
              ),
            });
          }),
          b: o.market,
        },
        o.market
          ? e.e(
              { c: 0 === o.currTab },
              0 === o.currTab
                ? {
                    d: e.sr("purchaselist", "e79fd235-0"),
                    e: o.currTab,
                    f: e.o(r.disableSwiper, 1278),
                    g: e.o(r.enableSwiper, 1279),
                    h: e.o(r.showTips, 1280),
                    i: e.o(r.finishPullDown, 1281),
                    j: e.p({
                      period: 90,
                      querytype: o.type,
                      querymarket: o.market,
                    }),
                  }
                : {},
              { k: 1 === o.currTab },
              1 === o.currTab
                ? {
                    l: e.sr("purchaselist", "e79fd235-1"),
                    m: e.o(r.disableSwiper, 1282),
                    n: e.o(r.enableSwiper, 1283),
                    o: e.o(r.showTips, 1284),
                    p: e.o(r.didSHowDailyAnination, 1285),
                    q: e.o(r.finishPullDown, 1286),
                    r: e.p({
                      period: 180,
                      querytype: o.type,
                      querymarket: o.market,
                      showDailyAnimation: o.purchaseDailyAnination,
                    }),
                  }
                : {},
              { s: 2 === o.currTab },
              2 === o.currTab
                ? {
                    t: e.sr("purchaselist", "e79fd235-2"),
                    v: e.o(r.disableSwiper, 1287),
                    w: e.o(r.enableSwiper, 1288),
                    x: e.o(r.showTips, 1289),
                    y: e.o(r.finishPullDown, 1290),
                    z: e.p({
                      period: 360,
                      querymarket: o.market,
                      querytype: o.type,
                    }),
                  }
                : {}
            )
          : {},
        { A: o.teachContent },
        o.teachContent
          ? {
              B: e.o(r.hideTeach, 1291),
              C: e.p({
                visible: o.teachBlockShow,
                title: o.teachTitle,
                content: o.teachContent,
                tips: o.teachTips,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-e79fd235"],
]);
wx.createComponent(n);
