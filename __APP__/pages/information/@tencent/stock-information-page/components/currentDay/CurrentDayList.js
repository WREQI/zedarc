var e = require("../../../../../../common/vendor.js"),
  t = require("../../pages/information/mp.js"),
  r = require("../../../../@ungap/url-search-params/esm/index.js"),
  i = {
    components: {
      currentDayListContent: function () {
        return "./currentDayListContent.js";
      },
    },
    inject: { stockBridge: { default: {} } },
    props: [
      "flashList",
      "listId",
      "isCurrSlide",
      "dataReady",
      "refreshCurrentList",
      "mpScrollHeight",
    ],
    data: function () {
      return {
        loadAll: !1,
        pullupText: "",
        enterTime: 0,
        mpRefreshTriggered: !1,
        mpPullDisabled: !1,
      };
    },
    computed: {
      disableReachBtm: function () {
        return !this.isCurrSlide || !this.dataReady;
      },
      isMP: function () {
        return "mp" === this.stockBridge.ENV;
      },
      skin: function () {
        return (
          (this.isMP &&
            e.wx$1.getStorageSync &&
            e.wx$1.getStorageSync("user/skin")) ||
          "white"
        );
      },
    },
    methods: {
      onMpScroll: function (e) {
        this.$emit("onMpScroll", e), this.updateCurrentTime();
      },
      openDetail: function (e) {
        var t = {};
        e && "5" === e.type
          ? (t.id = e.news_id || e.id)
          : ((t.id = e.news_id || e.id),
            (t.type = e.type || 4),
            (t.time = e.date),
            (t.source = e.source),
            (t.title = "快讯")),
          (t.columnfrom = "flash");
        var i = "/pages/newsCon/newsDetail/main?".concat(
          new r.URLSearchParams(t).toString()
        );
        this.stockBridge.report("news.index.twentyfour_strip_click", {
          newsid: e.news_id || e.id,
        }),
          this.stockBridge.routeTo({ url: i, path: i });
      },
      onShow: function () {
        (this.enterTime = Date.now()),
          this.stockBridge.report(t.INDEX_FLASH_VISITED);
      },
      onHide: function () {
        this.stockBridge.report(t.INDEX_FLASH_STAY_TIME, {
          ftime: Date.now() - this.enterTime,
        });
      },
      open: function (e) {
        e &&
          (this.stockBridge.report(t.INDEX_INFORMATION_FLASH_STOCK),
          this.$emit("open", { type: "stock", item: e }));
      },
      onMpReachBottom: function () {
        this.onPullingUp();
      },
      onPullingUp: function () {
        var e = this;
        return (
          this.stockBridge.report(t.INDEX_FLASH_PULLUP),
          this.loadAll
            ? Promise.resolve(!0)
            : this.refreshCurrentList &&
              this.refreshCurrentList(!1).then(function (t) {
                (e.loadAll = !t.hasNext), e.$emit("refreshListSuccess");
              })
        );
      },
      onPullingDown: function () {
        var e = this;
        (this.mpRefreshTriggered = !0),
          this.refreshCurrentList &&
            this.refreshCurrentList()
              .then(function (r) {
                e.stockBridge.report(t.INDEX_FLASH_PULLDOWN),
                  (e.loadAll = !r.hasNext),
                  (e.mpRefreshTriggered = !1),
                  t.initReachBottomCompStatus(e.$refs.reachBottom),
                  e.$emit("refreshListSuccess");
              })
              .catch(function () {
                e.mpRefreshTriggered = !1;
              });
      },
      updateCurrentTime: e.debounce(function () {
        var t = this;
        e.wx$1
          .createSelectorQuery()
          .in(this)
          .selectAll(".refresh-current >>> .current-item")
          .boundingClientRect()
          .exec(function (e) {
            var r,
              i,
              n = e && e[0];
            if (n && n.length)
              for (var o = 0; o < n.length; o++)
                if (n[o] && n[o].top > 0) {
                  var s =
                    (null == (i = null == (r = t.flashList) ? void 0 : r[o])
                      ? void 0
                      : i.currentTime) || "";
                  t.$emit("updateCurrentTime", s);
                  break;
                }
          });
      }, 300),
    },
  };
Array ||
  (
    e.resolveComponent("current-day-list-content") +
    e.resolveComponent("st-reach-bottom") +
    e.resolveComponent("st-pull-refresh")
  )();
var n = e._export_sfc(i, [
  [
    "render",
    function (t, r, i, n, o, s) {
      return e.e(
        { a: !s.isMP },
        s.isMP
          ? e.e(
              { h: s.isMP },
              s.isMP
                ? {
                    i: e.o(s.openDetail, 2614),
                    j: e.p({
                      "flash-list": i.flashList,
                      "load-all": o.loadAll,
                    }),
                    k: "".concat(i.mpScrollHeight, "px"),
                    l: !o.mpPullDisabled,
                    m: o.mpRefreshTriggered,
                    n: "black" === s.skin ? "white" : "black",
                    o: e.o(function (e) {
                      return s.onPullingDown();
                    }, 2615),
                    p: e.o(function () {
                      return s.onMpScroll && s.onMpScroll.apply(s, arguments);
                    }, 2616),
                    q: e.o(function () {
                      return (
                        s.onMpReachBottom &&
                        s.onMpReachBottom.apply(s, arguments)
                      );
                    }, 2617),
                  }
                : {}
            )
          : {
              b: e.o(s.openDetail, 2612),
              c: e.p({ "flash-list": i.flashList, "load-all": o.loadAll }),
              d: e.sr("reachBottom", "11918f05-1,11918f05-0"),
              e: e.p({
                "on-reach-bottom": s.onPullingUp,
                "finished-text": o.pullupText,
                disabled: s.disableReachBtm,
              }),
              f: e.sr("flashScroll", "11918f05-0"),
              g: e.o(s.onPullingDown, 2613),
            }
      );
    },
  ],
  ["__scopeId", "data-v-11918f05"],
]);
wx.createComponent(n);
