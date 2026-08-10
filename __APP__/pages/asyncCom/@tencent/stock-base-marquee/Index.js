var t = require("../../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var i = require("../../../../common/vendor.js"),
  n = require("../st-adapter/src/navigator/mp.js"),
  o = require("../stock-hq-core/utils/market.js"),
  a = "horse_lamp_stock",
  s = (function (t) {
    return (
      (t[(t.normal = 0)] = "normal"),
      (t[(t.holiday = 1)] = "holiday"),
      (t[(t.rest = 2)] = "rest"),
      (t[(t.open = 3)] = "open"),
      (t[(t.half = 4)] = "half"),
      t
    );
  })(s || {}),
  r = { hs: 3, hk: 2, us: 1 },
  l = function () {
    return "./components/restNoticeDialog.js";
  },
  d = function () {
    return "./components/otherNoticeDialog.js";
  },
  u = (function () {
    function t(t, e) {
      return (
        t.date() === i.dayjs.unix(e).date() &&
        t.month() === i.dayjs.unix(e).month()
      );
    }
    function e(e, i) {
      return t(e, i.holiday_time) ? 1 : t(e, i.open_time) ? 3 : 0;
    }
    function n(t, e) {
      1 === t.tipsType && (t.holidayName = e.holiday_name);
    }
    return {
      formatNoticeList: function () {
        var o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (!(o.length <= 0)) {
          var l = JSON.parse(JSON.stringify(o));
          return (
            o[0].ad_type === a &&
              (l = (function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  i = [];
                return (
                  (t || []).forEach(function (t) {
                    (Array.isArray(t.show_market) &&
                      t.show_market.length > 0 &&
                      t.show_market.indexOf(e.substr(0, 2)) < 0) ||
                      (Array.isArray(t.notshow_scodes) &&
                        t.notshow_scodes.length > 0 &&
                        t.notshow_scodes.indexOf(e) > -1) ||
                      (Array.isArray(t.show_scodes) &&
                        t.show_scodes.length > 0 &&
                        t.show_scodes.find(function (t) {
                          return t.includes(e.substr(0, 2));
                        }) &&
                        t.show_scodes.indexOf(e) < 0) ||
                      i.push(t);
                  }),
                  i
                );
              })(l, s)),
            l.forEach(function (o) {
              o.text || (o.noDetail = !0),
                (o.bulletinText = o.name.replace(/;$/, "")),
                o.bulletinText &&
                  o.bulletinText.length > 22 &&
                  (o.bulletinText = "".concat(
                    o.bulletinText.substr(0, 22),
                    "..."
                  )),
                o.rest_notice_detail &&
                  o.rest_notice_detail
                    .sort(function (t, e) {
                      return (
                        (r[e.notice_market] || 0) - (r[t.notice_market] || 0)
                      );
                    })
                    .forEach(function (o) {
                      o.restCalendarData = (function (o, a) {
                        var s = [];
                        return (
                          o.forEach(function (r, l) {
                            var d;
                            if (
                              (i.dayjs.unix(r.begin_time),
                              i.dayjs.unix(r.end_time),
                              0 === l)
                            ) {
                              d = i.dayjs.unix(r.begin_time).subtract(1, "day");
                              for (
                                var u =
                                  +a.open_time > +a.holiday_time
                                    ? +a.holiday_time
                                    : +a.open_time;
                                6 !== d.day() ||
                                (u && (d.unix() > u || t(d, u)));

                              ) {
                                var c = {
                                  date: d.date(),
                                  day: d.day(),
                                  tipsType: e(d, a),
                                };
                                n(c, a),
                                  s.unshift(c),
                                  (d = d.subtract(1, "day"));
                              }
                            } else
                              for (
                                d = i.dayjs
                                  .unix(o[l - 1].end_time)
                                  .add(1, "day");
                                d.date() !==
                                  i.dayjs.unix(r.begin_time).date() ||
                                d.month() !==
                                  i.dayjs.unix(r.begin_time).month();

                              ) {
                                var h = {
                                  date: d.date(),
                                  day: d.day(),
                                  tipsType: e(d, a),
                                };
                                n(h, a), s.push(h), (d = d.add(1, "day"));
                              }
                            d = i.dayjs.unix(r.begin_time);
                            for (
                              var v = i.dayjs.unix(r.end_time).add(1, "day");
                              d.date() !== v.date() || d.month() !== v.month();

                            ) {
                              var p = {
                                date: d.date(),
                                day: d.day(),
                                tipsType: e(d, a),
                                isRest: !0,
                                isHalf: Boolean(
                                  t(d, r.begin_time) && r.halfday
                                ),
                              };
                              n(p, a), s.push(p), (d = d.add(1, "day"));
                            }
                            if (l === o.length - 1) {
                              d = v;
                              for (
                                var m =
                                  +a.open_time > +a.holiday_time
                                    ? +a.open_time
                                    : +a.holiday_time;
                                0 !== d.day() ||
                                (m && (d.unix() < m || t(d, m)));

                              ) {
                                var f = {
                                  date: d.date(),
                                  day: d.day(),
                                  tipsType: e(d, a),
                                };
                                n(f, a), s.push(f), (d = d.add(1, "day"));
                              }
                            }
                          }),
                          (function (t) {
                            for (
                              var e =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : 7,
                                i = [],
                                n = 0;
                              n < t.length;
                              n += e
                            ) {
                              var o = t.slice(n, n + e);
                              i.push(o);
                            }
                            return i;
                          })(s, 7)
                        );
                      })(o.rest_period, o);
                    });
            }),
            l
          );
        }
      },
    };
  })().formatNoticeList,
  c = {
    components: {
      BulletinBar: function () {
        return "./components/bulletinBar.js";
      },
      RestNoticeDialog: l,
      OtherNoticeDialog: d,
    },
    props: {
      premote: {
        type: Object,
        default: function () {
          return {};
        },
      },
      skin: { type: String, default: "white" },
    },
    inject: ["stockBridge"],
    data: function () {
      return {
        currPath: "",
        dataReady: !1,
        showBulletinText: "",
        noticeData: null,
        noticeTitle: "",
        noticeContent: "",
        showDialog: !1,
        noticeLink: "",
        noticeId: "",
        advInfo: [],
        advConfig: null,
        premoteNew: null,
        showAdv: !1,
        isLite: !0,
      };
    },
    computed: {
      visible: function () {
        return this.dataReady && this.showBulletinList.length > 0;
      },
      isRestTypeDialog: function () {
        return (this.noticeData || []).length > 0;
      },
      showBulletinList: function () {
        var t;
        return null == (t = this.advInfo)
          ? void 0
          : t.map(function (t) {
              return {
                text: t.bulletinText,
                icon:
                  (t.rest_notice_detail && t.rest_notice_detail.length > 0) ||
                  t.text,
              };
            });
      },
      isCarouselType: function () {
        var t;
        return (
          this.advInfo.length > 1 &&
          (null == (t = this.advInfo) ? void 0 : t[0].ad_type) === a
        );
      },
    },
    watch: {
      premote: {
        immediate: !0,
        deep: !0,
        handler: function (t) {
          var e = this;
          t &&
            this.$nextTick(function () {
              var i, n;
              (e.isLite = ["mpwzq", "wzqlight"].includes("mpweapp")),
                (e.currPath = e.getPagePath()),
                (e.premoteNew = t),
                t.ad_list &&
                  t.ad_list.length > 0 &&
                  (e.advConfig = t.ad_list[0]),
                (e.advInfo =
                  null ==
                  (n = null == (i = e.advConfig) ? void 0 : i.ext_properties)
                    ? void 0
                    : n.horse_lamps),
                (e.advInfo = u(e.advInfo, e.$parent.symbol || "") || []),
                (e.dataReady = !0);
            });
        },
      },
      advInfo: {
        handler: function () {
          this.updateCurNoticeData(0);
        },
        immediate: !0,
      },
      visible: {
        immediate: !0,
        deep: !0,
        handler: function (t) {
          (this.showAdv = t),
            t && (this.reportShow(), this.emitEvent("show_marquee"));
        },
      },
      $route: {
        handler: function () {
          this.$el.remove();
        },
        deep: !0,
      },
    },
    methods: {
      getDeliveryHandle: function () {
        return this.$parent;
      },
      updateCurNoticeData: function () {
        var t,
          e,
          i,
          n,
          o,
          a,
          s,
          r,
          l,
          d,
          u,
          c,
          h,
          v,
          p =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        (this.showBulletinText =
          null == (e = null == (t = this.advInfo) ? void 0 : t[p])
            ? void 0
            : e.bulletinText),
          (this.noticeData =
            null == (n = null == (i = this.advInfo) ? void 0 : i[p])
              ? void 0
              : n.rest_notice_detail),
          (this.noticeTitle =
            (null == (a = null == (o = this.advInfo) ? void 0 : o[p])
              ? void 0
              : a.notice_name) ||
            (null == (r = null == (s = this.advInfo) ? void 0 : s[p])
              ? void 0
              : r.name)),
          (this.noticeContent =
            null == (d = null == (l = this.advInfo) ? void 0 : l[p])
              ? void 0
              : d.text),
          (this.noticeLink =
            null == (c = null == (u = this.advInfo) ? void 0 : u[p])
              ? void 0
              : c.link),
          (this.noticeId =
            null == (v = null == (h = this.advInfo) ? void 0 : h[p])
              ? void 0
              : v.id);
      },
      reportShow: function () {
        var t = this.getDeliveryHandle(),
          e =
            (null == t
              ? void 0
              : t.deliveryFormatStatName(this.premoteNew, "brow")) ||
            "yy.global.marquee_brow";
        null == t || t.deliveryReportMta(t, this.premoteNew, e),
          null == t || t.reportQianjiGo(t, this.advConfig.dp_ctx, "show");
      },
      closeAdv: function () {
        var t = this.getDeliveryHandle(),
          e =
            (null == t
              ? void 0
              : t.deliveryFormatStatName(this.premoteNew, "close")) ||
            "yy.global.marquee_close";
        null == t || t.deliveryReportMta(t, this.premoteNew, e),
          null == t ||
            t.reportQianjiGo(t, this.advConfig.dp_ctx, "close", {
              sub_id: "".concat(this.noticeId),
              symbol: this.$parent.symbol,
            });
      },
      clickAdv: function () {
        var t = this.getDeliveryHandle(),
          e =
            (null == t
              ? void 0
              : t.deliveryFormatStatName(this.premoteNew, "click")) ||
            "yy.global.marquee_click";
        null == t || t.deliveryReportMta(t, this.premoteNew, e),
          null == t || t.reportQianjiGo(t, this.advConfig.dp_ctx, "click");
      },
      getPagePath: function () {
        return this.stockBridge.getCurRouteInfo().path;
      },
      emitEvent: function (t) {
        var e = this;
        this.$nextTick(function () {
          var n, o;
          null == (n = e.stockBridge) ||
            n.busEmit("growth-yy.activity.adv.event", {
              data: { type: t },
              path: e.getPagePath(),
            }),
            null == (o = e.stockBridge) ||
              o.busEmit(i.eventList.COMMON_MARQUEE_EVENT, {
                data: { type: t },
                path: e.getPagePath(),
              });
        });
      },
      closeBarClose: function (t) {
        this.updateCurNoticeData(t),
          this.closeAdv(),
          (this.showAdv = !1),
          this.emitEvent("close_marquee");
      },
      handleBarClick: function () {
        var t = this,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        if (
          (this.clickAdv(),
          this.updateCurNoticeData(e),
          this.noticeLink && this.noticeLink.startsWith("stockdetail"))
        )
          this.handleStockDetailJump(this.noticeLink);
        else if (this.noticeLink)
          setTimeout(function () {
            n.jump({ path: t.noticeLink });
          }, 200);
        else {
          if (!this.isRestTypeDialog && !this.noticeContent) return;
          if (["stock", "wzqlight"].includes("mpweapp"))
            return void this.showDialogH5();
          this.showDialog = !0;
        }
      },
      handleStockDetailJump: function (n) {
        var a = n.split("?")[1],
          s = {};
        if (
          (a &&
            a.split("&").forEach(function (t) {
              var i = t.split("="),
                n = e(i, 2),
                o = n[0],
                a = n[1];
              s[o] = a;
            }),
          s.symbol)
        ) {
          var r = s.symbol;
          delete s.symbol;
          var l = o.splitSymbol(r),
            d = l.market,
            u = l.scode;
          i.routeTo(
            t({ name: "stockdetail" }, "query", t({ market: d }, "scode", u))
          );
        }
      },
      showDialogH5: function () {
        var t;
        (t = this.isRestTypeDialog
          ? new (i.Vue.extend(l))({
              el: document.createElement("div"),
              propsData: {
                title: this.noticeTitle,
                content: this.noticeContent,
                restDetailData: this.noticeData,
                isLite: this.isLite,
                value: !0,
                stockBridge: this.stockBridge,
              },
            })
          : new (i.Vue.extend(d))({
              el: document.createElement("div"),
              propsData: {
                title: this.noticeTitle,
                content: this.noticeContent,
                value: !0,
              },
            })),
          document.body.appendChild(t.$el);
      },
    },
  };
Array ||
  (
    i.resolveComponent("bulletin-bar") +
    i.resolveComponent("rest-notice-dialog") +
    i.resolveComponent("other-notice-dialog")
  )();
var h = i._export_sfc(c, [
  [
    "render",
    function (t, e, n, o, a, s) {
      return i.e(
        { a: s.visible && a.showAdv },
        s.visible && a.showAdv
          ? {
              b: i.o(s.handleBarClick, 1366),
              c: i.o(s.closeBarClose, 1367),
              d: i.p({
                showList: s.showBulletinList,
                isLite: a.isLite,
                isCarouselType: s.isCarouselType,
              }),
            }
          : {},
        { e: s.isRestTypeDialog },
        s.isRestTypeDialog
          ? {
              f: i.r("d", { isDialogShow: a.noticeData && a.showDialog }),
              g: i.sr("restDialog", "5ae2316c-1"),
              h: i.o(function (t) {
                return (a.showDialog = t);
              }, 1368),
              i: i.p({
                value: a.showDialog,
                isLite: a.isLite,
                title: a.noticeTitle,
                content: a.noticeContent,
                "rest-detail-data": a.noticeData,
              }),
            }
          : s.isRestTypeDialog
          ? {}
          : {
              k: i.sr("otherDialog", "5ae2316c-2"),
              l: i.o(function (t) {
                return (a.showDialog = t);
              }, 1369),
              m: i.p({
                value: a.showDialog,
                title: a.noticeTitle,
                content: a.noticeContent,
              }),
            },
        { j: !s.isRestTypeDialog }
      );
    },
  ],
]);
wx.createComponent(h);
var v = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWJhc2UtbWFycXVlZS9JbmRleC52dWU =
  v),
  (exports.restDayShowType = s);
