var t = require("../../../../../../common/vendor.js"),
  e = { hs: "A股", hk: "港股", us: "美股" },
  n = {
    name: "rest-notice-swiper",
    props: {
      restNoticeData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      content: { type: String, default: "" },
      isLite: { type: Boolean, default: !0 },
    },
    components: {
      RestCalendar: function () {
        return "../restCalendar.js";
      },
      TabBar: function () {
        return "../tabbar/mp.js";
      },
      SwiperDots: function () {
        return "../swiperDots.js";
      },
    },
    data: function () {
      return { swiperHeight: 150, marketIndex: 0 };
    },
    computed: {
      curActiveIndex: function () {
        return (
          this.restNoticeData.findIndex(function (t) {
            return t.b_current;
          }) || 0
        );
      },
      marketConfig: function () {
        return this.restNoticeData.map(function (t) {
          return { name: e[t.notice_market] };
        });
      },
    },
    mounted: function () {
      this.restNoticeData.length > 1 &&
        (this.changeSwiperHeight(0), (this.marketIndex = this.curActiveIndex));
    },
    methods: {
      changeSwiperHeight: function (t) {
        var e = this;
        this.createSelectorQuery()
          .select(".rest-com-wrapper-".concat(t))
          .boundingClientRect()
          .exec(function (t) {
            var n;
            e.swiperHeight =
              (null == (n = null == t ? void 0 : t[0]) ? void 0 : n.height) +
                16 || 150;
          });
      },
      changeMarketItem: function (t) {
        var e,
          n =
            (null == (e = null == t ? void 0 : t.detail)
              ? void 0
              : e.current) || 0;
        (this.marketIndex = n), this.changeSwiperHeight(n);
      },
      marketSwitchTab: function (t) {
        this.marketIndex = t || 0;
      },
    },
  };
Array ||
  (
    t.resolveComponent("tab-bar") +
    t.resolveComponent("rest-calendar") +
    t.resolveComponent("swiper-dots")
  )();
var r = t._export_sfc(n, [
  [
    "render",
    function (e, n, r, a, i, o) {
      return t.e(
        { a: r.restNoticeData.length > 1 },
        r.restNoticeData.length > 1
          ? {
              b: t.o(o.marketSwitchTab, 3136),
              c: t.p({
                isLite: r.isLite,
                "market-index": i.marketIndex,
                "market-config": o.marketConfig,
              }),
            }
          : {},
        { d: r.restNoticeData.length > 1 },
        r.restNoticeData.length > 1
          ? {
              e: t.f(r.restNoticeData, function (e, n, a) {
                return {
                  a: "4a858f9b-1-" + a,
                  b: t.p({ "date-list": e.restCalendarData, isLite: r.isLite }),
                  c: t.t(e.notice_note),
                  d: t.n("rest-com-wrapper-".concat(n)),
                  e: "noticeMarket".concat(e.notice_market),
                };
              }),
              f: "".concat(i.swiperHeight, "px"),
              g: i.marketIndex,
              h: t.o(function () {
                return (
                  o.changeMarketItem && o.changeMarketItem.apply(o, arguments)
                );
              }, 3137),
              i: t.p({ "dot-index": i.marketIndex, list: o.marketConfig }),
            }
          : {
              j: t.p({
                "date-list": r.restNoticeData[0].restCalendarData,
                isLite: r.isLite,
              }),
              k: t.t(r.restNoticeData[0].notice_note),
            }
      );
    },
  ],
  ["__scopeId", "data-v-4a858f9b"],
]);
wx.createComponent(r);
