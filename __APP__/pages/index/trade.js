var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../common/vendor.js"),
  n = require("../../mixins/subpkg_reload.js"),
  o = require("../../utils/broker/usePluginInfo.js"),
  a = {
    onReady: function () {
      var e, t;
      null ==
        (t =
          null == (e = null == this ? void 0 : this.handlePageLifeTime)
            ? void 0
            : e.handleReady) || t.call(e);
    },
    onUnload: function () {
      var e, t;
      null ==
        (t =
          null == (e = null == this ? void 0 : this.handlePageLifeTime)
            ? void 0
            : e.handleUnload) || t.call(e);
    },
    onRouteDone: function () {
      var e, t;
      null ==
        (t =
          null == (e = null == this ? void 0 : this.handlePageLifeTime)
            ? void 0
            : e.handleRouteDone) || t.call(e);
    },
    onPullDownRefresh: function () {
      try {
        this.handlePageLifeTime.handlePullDownRefresh();
      } catch (e) {
        t.wx$1.stopPullDownRefresh();
      }
      setTimeout(function () {
        t.wx$1.stopPullDownRefresh();
      }, 1e3);
    },
    onReachBottom: function () {
      var e, t;
      null ==
        (t =
          null == (e = null == this ? void 0 : this.handlePageLifeTime)
            ? void 0
            : e.handleReachBottom) || t.call(e);
    },
    onPageScroll: function (e) {
      var t, n;
      null ==
        (n =
          null == (t = null == this ? void 0 : this.handlePageLifeTime)
            ? void 0
            : t.handlePageScroll) || n.call(t, e);
    },
    onResize: function () {
      var e, t;
      null ==
        (t =
          null == (e = null == this ? void 0 : this.handlePageLifeTime)
            ? void 0
            : e.handleResize) || t.call(e);
    },
  },
  i = getApp().globalData,
  r = {
    components: {
      Asset: function () {
        return "../noaccount/OpenAccount/OpenTransferPage.js";
      },
      TopBar: function () {
        return "../../components/topbar/index.js";
      },
      EscapeNotice: function () {
        return "../noaccount/EscapeNotice.js";
      },
    },
    mixins: [a, n.SubpkgReloadMixin],
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    setup: function () {
      var e,
        n,
        a = t.useBrokerInfo(),
        i = a.isDataFetched,
        r = a.isFail,
        l = a.updateAheadInfo,
        u = a.highestPriorityDealer,
        s = void 0 === u ? {} : u,
        c = t.computed(function () {
          return Boolean(s.value.userstateFront & t.USERSTATE_PID.FAILED);
        }),
        d = t.computed(function () {
          return Boolean(s.value.userstateFront & t.USERSTATE_PID.VERIFYING);
        }),
        p =
          (null ==
          (n = null == (e = getApp().globalData.detect) ? void 0 : e.env)
            ? void 0
            : n.IS_PCWEIXIN) || !1;
      p &&
        t.watch(
          function () {
            return [i.value, c.value, d.value];
          },
          function () {
            i.value &&
              (c.value || d.value) &&
              t.wx$1.redirectTo({
                url: "/pages/noaccount/textImage/TextImage",
              });
          },
          { immediate: !0 }
        );
      var h = o.usePageLifeTime(),
        g = t.ref(""),
        f = t.ref(0);
      t.provide("handlePageLifeTime", h),
        t.provide("pluginRoute", g),
        t.provide("scrollHeight", f);
      var v = t.computed(function () {
          return !i.value && !r.value;
        }),
        m = t.computed(function () {
          return !i.value && r.value;
        }),
        b = t.ref(!1),
        S = t.computed(function () {
          return v.value
            ? t.COMMON_PAGE_STATUS.LOADING
            : m.value
            ? t.COMMON_PAGE_STATUS.ERROR
            : "";
        }),
        E = t.ref(!1);
      function R() {
        (E.value = !0), require.async("../quote/placeholder");
      }
      function T() {
        t.index && t.index.$off("tradeToPreloadQuote", R);
      }
      return {
        isPc: p,
        pageStatus: S,
        isShowError: m,
        escapeEnabled: b,
        canPreloadQuote: E,
        onErrorRetry: function () {
          a.fetchData().catch(function () {});
        },
        handlePageLifeTime: h,
        pluginRoute: g,
        updateAheadInfo: l,
        isDataFetched: i,
        handlePreloadQuote: R,
        removeEvent: T,
        addEvent: function () {
          T(), E.value || (t.index && t.index.$on("tradeToPreloadQuote", R));
        },
        scrollHeight: f,
      };
    },
    data: function () {
      return {
        hqBridge: new t.HQBridge(),
        options: {},
        statData: "",
        pageHide: !1,
        subpkgName: "pages/noaccount/",
        skin: t.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    onLoad: function (e) {
      var t = e.stat_data,
        n = e.stat;
      (this.statData = t || n || ""),
        (getApp().globalData.__tradeTabTime = Date.now());
    },
    onShow: function () {
      var e = this;
      if (
        (this.isDataFetched && this.updateAheadInfo(),
        (this.pageHide = !1),
        this.addEvent(),
        !(t.StockBridge.store || {}).channelId[t.BISTAT.BI_STAT_I])
      ) {
        t.Request.updateChannel("Ijf00p000b120");
      }
      (i.isGetFreshSkin = !1),
        i.setSkin(function (t) {
          e.skin = t;
        }),
        this.refreshEscapeConfig();
    },
    onReady: function () {
      var e;
      this.setContainerHeight(),
        null == (e = this.setInitialRenderingCache) || e.call(this, null);
    },
    onResize: function () {
      var e = this;
      if (this.isPc) {
        var n = t.wx$1.createSelectorQuery();
        n.selectViewport().boundingClientRect(),
          n.exec(function (t) {
            if (t && t[0]) {
              var n = t[0].height;
              e.setContainerHeight(n);
            }
          });
      }
    },
    onHide: function () {
      (this.pageHide = !0),
        this.removeEvent(),
        this.clearParams(),
        (getApp().globalData.__tradeTabTime = null);
    },
    computed: {
      assetStyle: function () {
        var e = this.scrollHeight;
        return (
          this.subpkgMounted || (e = 0),
          "width: 100%; height: ".concat(e, "px; background-color: #f5f6fa;")
        );
      },
      statusStyle: function () {
        return "width: 100%; height: ".concat(
          this.scrollHeight ? "".concat(this.scrollHeight, "px") : "100%",
          ";"
        );
      },
    },
    onTabItemTap: function () {
      t.Request.reportMTAData({ eventName: "xcx_trade_click" }),
        (getApp().globalData.__tradeTabTime = Date.now());
    },
    methods: {
      handleErrorRetry: function () {
        this.onErrorRetry(), this.subpkgReady || this.reloadSubpkg(!1);
      },
      refreshEscapeConfig: t.throttle(function () {
        return (
          (t = this),
          null,
          (n = e().mark(function t() {
            var n,
              o,
              a,
              r = this;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      require.async("../noaccount/escapeConfig.js")
                    );
                  case 2:
                    (n = e.sent),
                      (o = n.fetchEscapeConfig),
                      (a = n.isEscapeEnabled),
                      o()
                        .then(function () {
                          var e = r.escapeEnabled;
                          (r.escapeEnabled = a()),
                            !e ||
                              r.escapeEnabled ||
                              r.subpkgMounted ||
                              r.reloadSubpkg(!1),
                            !e &&
                              r.escapeEnabled &&
                              i.mpReporter.reportEvent("ESCAPE_CONFIG_SHOW");
                        })
                        .catch(function () {});
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, t);
          })),
          new Promise(function (e, o) {
            var a = function (e) {
                try {
                  r(n.next(e));
                } catch (e) {
                  o(e);
                }
              },
              i = function (e) {
                try {
                  r(n.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              r = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(a, i);
              };
            r((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      }, 6e4),
      setContainerHeight: function (e) {
        var n = this,
          o = e;
        if (!o || o <= 0) {
          var a =
            (t.wx$1.getWindowInfo && t.wx$1.getWindowInfo()) ||
            t.wx$1.getSystemInfoSync();
          o = (null == a ? void 0 : a.windowHeight) || 0;
        }
        if (this.isPc)
          return (
            (n.scrollHeight = o),
            (getApp().globalData.tradeTabScrollHeight = n.scrollHeight),
            void (
              0 === o &&
              i.mpReporter.reportEvent("SET_CONTAINER_HEIGHT_ZERO", { ext3: o })
            )
          );
        var r = function (e, t) {
          var a = o - e;
          (a < 0.84 * o || a <= 0 || !o) &&
            (i.mpReporter.reportEvent("SCROLL_HEIGHT_FALLBACK", {
              ext1: o,
              ext2: e,
              ext3: a,
              ext4: t,
            }),
            (a = 0)),
            (n.scrollHeight = a),
            (getApp().globalData.tradeTabScrollHeight = a);
        };
        try {
          this.createSelectorQuery()
            .select(".top-bar")
            .boundingClientRect()
            .exec(function (e) {
              var n,
                a,
                l,
                u = null == (n = null == e ? void 0 : e[0]) ? void 0 : n.bottom;
              if (o && u > 0) r(u, "dom_query");
              else {
                var s =
                    (null == (l = (a = t.wx$1).getMenuButtonBoundingClientRect)
                      ? void 0
                      : l.call(a)) || {},
                  c = 80;
                s.bottom > 0 && (c = s.bottom + 48),
                  r(c, "menuBtn:".concat(s.bottom || 0)),
                  i.mpReporter.reportEvent("SCROLL_HEIGHT_DOM_FALLBACK", {
                    ext1: o,
                    ext2: c,
                    ext3: s.bottom || 0,
                  });
              }
            });
        } catch (e) {
          (n.scrollHeight = 0),
            (getApp().globalData.tradeTabScrollHeight = 0),
            i.mpReporter.reportEvent("SCROLL_HEIGHT_ERROR", {
              ext1: o,
              ext2:
                e instanceof Error
                  ? e.stack || e.message
                  : JSON.stringify(e || {}),
            });
        }
      },
      clearParams: function () {
        var e = getCurrentPages(),
          t = e[e.length - 1];
        t &&
          ((t.options = {}),
          t.$page && (t.$page.fullPath = "/pages/index/trade"));
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("TopBar") +
    t.resolveComponent("EscapeNotice") +
    t.resolveComponent("st-status") +
    t.resolveComponent("Asset")
  )();
var l = t._export_sfc(r, [
  [
    "render",
    function (e, n, o, a, i, r) {
      return t.e(
        { a: e.rootFontSize, b: t.p({ "no-auto": !0 }), c: !a.isPc },
        a.isPc
          ? {}
          : { d: t.p({ from: "trade", "hide-search": !0, skin: i.skin }) },
        { e: a.escapeEnabled },
        a.escapeEnabled
          ? {}
          : t.e(
              { f: a.pageStatus },
              a.pageStatus
                ? {
                    g: t.o(r.handleErrorRetry, 24),
                    h: t.p({ type: a.pageStatus }),
                    i: t.s(r.statusStyle),
                  }
                : {},
              { j: e.subpkgReady },
              e.subpkgReady
                ? {
                    k: t.s(r.assetStyle),
                    l: t.o(e.onPageSubpkgMounted, 25),
                    m: t.o(e.onPluginSubpkgMounted, 26),
                    n: t.p({
                      "page-hide": i.pageHide,
                      "stat-data": i.statData,
                      openfrom: "my",
                    }),
                  }
                : {},
              { o: !e.subpkgMounted },
              e.subpkgMounted
                ? {}
                : {
                    p: t.o(e.reloadSubpkg, 27),
                    q: t.p({ type: e.subpkgStatus }),
                    r: t.s(r.statusStyle),
                  }
            ),
        { s: i.skin }
      );
    },
  ],
]);
wx.createPage(l);
