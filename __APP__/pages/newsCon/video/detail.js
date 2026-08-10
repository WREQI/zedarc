var e,
  t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, i) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  d = require("../../../common/vendor.js"),
  h = {
    components: {
      VideoList: function () {
        return "./index.js";
      },
    },
    beforeRouteEnter: function (e, t, n) {
      n();
    },
    beforeRouteLeave: function (e, t, n) {
      if ("/information/index" === e.path) {
        if (
          this.$vnode &&
          this.$vnode.data.keepAlive &&
          this.$vnode.parent &&
          this.$vnode.parent.componentInstance &&
          this.$vnode.parent.componentInstance.cache &&
          this.$vnode.componentOptions
        ) {
          var i =
              null == this.$vnode.key
                ? this.$vnode.componentOptions.Ctor.cid +
                  (this.$vnode.componentOptions.tag
                    ? "::".concat(this.$vnode.componentOptions.tag)
                    : "")
                : this.$vnode.key,
            o = this.$vnode.parent.componentInstance.cache,
            a = this.$vnode.parent.componentInstance.keys;
          if (o[i]) {
            if (a.length) {
              var r = a.indexOf(i);
              r > -1 && a.splice(r, 1);
            }
            delete o[i];
          }
        }
        this.keepVideoAlive = !1;
      } else this.keepVideoAlive = !0;
      n();
    },
    props: {
      newsId: { type: String, default: "" },
      isSharePage: { type: Boolean, default: !1 },
      stockId: { type: String, default: "" },
    },
    data: function () {
      var e = this;
      return {
        isMP: !0,
        currentTab: 1,
        tabs: [
          { id: "0", name: "关注", interval: 1e4 },
          { id: "1", name: "推荐", interval: 15e3 },
        ],
        tabsId: ["follow", "recommend"],
        isIphoneX: !1,
        isPcWeixin: !1,
        swiperOptions: {
          speed: 100,
          allowTouchMove: !0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !1,
          notNextTick: !0,
          direction: "horizontal",
          grabCursor: !0,
          setWrapperSize: !0,
          mousewheelControl: !0,
          observeParents: !0,
          loop: !1,
          slidesPerView: 1,
          touchAngle: 30,
          resistanceRatio: 0,
          initialSlide: 1,
          threshold: 0,
          on: {
            slideChangeTransitionStart: function () {
              var t,
                n,
                i =
                  null ==
                  (n = null == (t = e.$refs.detailSwiper) ? void 0 : t.swiper)
                    ? void 0
                    : n.activeIndex,
                o = i || 0 === i ? i : e.currentTab;
              e.changetab(o);
            },
          },
        },
        showShare: !1,
        keepVideoAlive: !1,
      };
    },
    computed: {
      bottomInset: function () {
        var e,
          t,
          n,
          i,
          o =
            null == (t = null == (e = getApp()) ? void 0 : e.globalData)
              ? void 0
              : t.device,
          a =
            (null != (n = null == o ? void 0 : o.screenHeight) ? n : 0) -
            (null != (i = null == o ? void 0 : o.safeArea.bottom) ? i : 0);
        return this.isSharePage ? 49 + a : a;
      },
    },
    created: function () {
      var t,
        n,
        i =
          null == (n = null == (t = getApp()) ? void 0 : t.globalData)
            ? void 0
            : n.device,
        o = null == i ? void 0 : i.safeArea;
      (this.isIphoneX = i.screenHeight > o.bottom),
        (e = Date.now()),
        this.dataReport({
          event: "information.videodetail.onshow",
          data: { newsId: this.newsId },
        });
    },
    beforeDestroy: function () {
      this.dataReport({
        event: "information.videodetail.onhide",
        data: { newsId: this.newsId },
      }),
        this.dataReport({
          event: "information.videodetail.stay_time",
          data: { stay_time: Date.now() - e },
          newsid: this.newsId,
        });
    },
    beforeCreate: function () {},
    mounted: function () {},
    activated: function () {
      var e = this;
      id !== this.newsId &&
        (this.$nextTick(function () {
          var t = e.$refs["videoList_".concat(e.tabsId[e.currentTab])];
          t && t[0] && t[0].resetData();
        }),
        this.switchNav(1));
    },
    deactivated: function () {
      this.showShare = !1;
    },
    methods: {
      onVisible: function () {
        try {
          var e = this.$refs["videoList_".concat(this.tabsId[this.currentTab])];
          e && e[0].onVisible();
        } catch (e) {}
      },
      shareAppMessage: function () {
        try {
          var e = this.$refs["videoList_".concat(this.tabsId[this.currentTab])];
          return e && e[0].shareAppMessage();
        } catch (e) {}
      },
      shareTimeline: function () {
        try {
          var e = this.$refs["videoList_".concat(this.tabsId[this.currentTab])];
          return e && e[0].shareTimeline();
        } catch (e) {}
      },
      onSwiperChange: function (e) {
        var t = e.detail.current;
        this.switchNav(t),
          this.dataReport({
            event: "information.videodetail.swiper_".concat(
              this.tabsId[this.currentTab],
              "_change"
            ),
            data: { currentTab: this.tabsId[this.currentTab] },
          });
      },
      switchNav: function (e) {
        var t, n;
        this.currentTab !== e &&
          ((this.currentTab = e),
          null ==
            (n = null == (t = this.$refs.detailSwiper) ? void 0 : t.swiper) ||
            n.slideTo(e));
      },
      clickChangeTag: function (e) {
        this.switchNav(e),
          this.dataReport({
            event: "information.videodetail.topnav_".concat(
              this.tabsId[this.currentTab],
              "_click"
            ),
            data: { currentTab: this.tabsId[this.currentTab] },
            newsid: this.newsId,
          });
      },
      changetab: function (e) {
        this.switchNav(e);
      },
      showShareModal: function () {
        (this.showShare = !this.showShare),
          this.dataReport({ event: "information.videodetail.video_turn" });
      },
      tapAction: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.action;
        switch (t) {
          case "turn":
            this.showShareModal();
            break;
          case "closeShare":
            this.showShare = !1;
            break;
          case "recommend":
            this.switchNav(1);
        }
      },
      dataReport: function (e) {
        var n,
          h = e.event,
          l = void 0 === h ? "" : h,
          u = e.data,
          p =
            ((n = (function (e, n) {
              for (var i in n || (n = {})) r.call(n, i) && c(e, i, n[i]);
              if (a) {
                var o,
                  d = t(a(n));
                try {
                  for (d.s(); !(o = d.n()).done; ) {
                    i = o.value;
                    s.call(n, i) && c(e, i, n[i]);
                  }
                } catch (e) {
                  d.e(e);
                } finally {
                  d.f();
                }
              }
              return e;
            })({}, void 0 === u ? {} : u)),
            i(n, o({ eventName: l })));
        d.Request.reportMTAData(p);
      },
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
    },
  };
Array || d.resolveComponent("VideoList")();
var l = d._export_sfc(h, [
  [
    "render",
    function (e, t, n, i, o, a) {
      return {
        a: d.f(o.tabs, function (e, t, n) {
          return d.e(
            { a: d.t(e.name), b: o.currentTab === t },
            (o.currentTab, {}),
            {
              c: e.id,
              d: d.n(o.currentTab === t ? "active" : ""),
              e: d.o(
                function (e) {
                  return a.clickChangeTag(t);
                },
                692,
                e.id
              ),
            }
          );
        }),
        b: d.f(o.tabsId, function (e, t, i) {
          return {
            a: d.sr("videoList_" + o.tabsId[t], "6957870e-0-" + i, { f: 1 }),
            b: "videoList_" + o.tabsId[t],
            c: e + "_" + t,
            d: d.o(a.tapAction, 693, e + "_" + t),
            e: d.o(a.dataReport, 694, e + "_" + t),
            f: d.o(a.showProfilePop, 695, e + "_" + t),
            g: "6957870e-0-" + i,
            h: d.p({
              "news-id": n.newsId,
              "stock-id": n.stockId,
              TagId: o.tabsId[t],
              "current-type": o.tabsId[o.currentTab],
              dataType: e,
              "keep-video-alive": o.keepVideoAlive,
              "is-share-page": n.isSharePage,
              "is-iphone-x": o.isIphoneX,
              "bottom-inset": a.bottomInset,
            }),
            i: "slide_".concat(t),
          };
        }),
        c: d.n(n.isSharePage ? "sharePage" : ""),
        d: o.currentTab,
        e: d.o(function () {
          return a.onSwiperChange && a.onSwiperChange.apply(a, arguments);
        }, 696),
        f: o.showShare,
        g: d.o(function () {
          return a.showShareModal && a.showShareModal.apply(a, arguments);
        }, 697),
        h: d.n(n.isSharePage ? "p-b-0" : ""),
        i: d.n(o.isIphoneX ? "isIphoneX" : ""),
        j: d.n(o.isPcWeixin ? "isPcWeixin" : ""),
      };
    },
  ],
  ["__scopeId", "data-v-6957870e"],
]);
wx.createComponent(l);
