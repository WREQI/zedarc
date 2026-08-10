var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  c = function (e, n, i) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[n] = i);
  },
  l = function (t, n) {
    for (var i in n || (n = {})) o.call(n, i) && c(t, i, n[i]);
    if (a) {
      var l,
        u = e(a(n));
      try {
        for (u.s(); !(l = u.n()).done; ) {
          i = l.value;
          r.call(n, i) && c(t, i, n[i]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return t;
  },
  u = function (e, t) {
    return n(e, i(t));
  },
  s = require("../../../../../../common/vendor.js"),
  d = require("../../node-modules/@tencent/stock-news-router/index.js"),
  m = require("../../../stock-news-core/utils/knife.js"),
  v = require("../../../../hooks/shareProtocol.js"),
  p = require("../../../stock-base/visibilityObserver/index.js"),
  f = require("../../../stock-news-core/utils/force2https.js"),
  _ = {
    components: {
      newsItemBasket: function () {
        return "../wx-news/wx-newsitem-basket.js";
      },
      stockTag: function () {
        return "../stock-tag/stock-tag.js";
      },
    },
    props: {
      reportPrefix: { type: String, default: "" },
      reportParams: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemIndex: { type: Number, default: 0 },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      abtConfig: { type: Object, default: null },
      pressingIndex: { type: Number, default: -1 },
    },
    setup: function (e, t) {
      var n = t.emit,
        i = s.getCurrentInstance().proxy || s.getCurrentInstance(),
        a = s.inject("stockBridge"),
        o = s.inject("lctChannel") || !1,
        r = s.inject("newsLimit") || 0,
        c = s.inject("wxTopsAbtReportInfo", s.ref(null)),
        _ = s.computed(function () {
          var t;
          try {
            var n = null == (t = e.itemData) ? void 0 : t.event_news;
            if ((r && n.splice(r), n && n.length > 0))
              return "wx-news-item-typetop-".concat(
                n
                  .map(function (e) {
                    return e.news_id || e.id;
                  })
                  .join("-")
              );
          } catch (e) {}
          return null;
        }),
        w = s.computed(function () {
          var t;
          try {
            return "热度".concat(
              v.tophotFormat(null == (t = e.itemData) ? void 0 : t.event_heat)
            );
          } catch (e) {}
          return "";
        }),
        b = s.computed(function () {
          var t, n;
          return (null == (t = e.itemData) ? void 0 : t.event_news)
            ? null == (n = e.itemData)
              ? void 0
              : n.event_news.slice(0, 2)
            : [];
        }),
        g = s.computed(function () {
          var t;
          return (null == (t = e.itemData) ? void 0 : t.watchList) || {};
        }),
        x = s.computed(function () {
          var t,
            n,
            i,
            a,
            o = u(l({}, e.reportParams), {
              newsid: e.itemData.id,
              positionid: e.itemIndex,
              hotissueid: null == (t = e.itemData) ? void 0 : t.event_id,
            });
          if (e.abtConfig)
            try {
              var r =
                  ((null == (n = e.abtConfig) ? void 0 : n.data) &&
                    (null == (a = null == (i = e.abtConfig) ? void 0 : i.data)
                      ? void 0
                      : a[0])) ||
                  {},
                s = r.report_info;
              r.DiscoverVersion && s && (o = u(l({}, o), { report_info: s }));
            } catch (e) {}
          return c.value && (o = u(l({}, o), { report_info: c.value })), o;
        }),
        h = !1,
        D = null,
        y = function () {
          var e, t;
          null ==
            (t =
              null == (e = null == D ? void 0 : D.observer)
                ? void 0
                : e.disconnect) || t.call(e),
            (D = null);
        },
        k = !1,
        I = null;
      s.onUnmounted(function () {
        var e, t;
        try {
          y(),
            null == (t = null == (e = I.observer) ? void 0 : e.disconnect) ||
              t.call(e),
            (I = null);
        } catch (e) {}
      }),
        s.watch(
          function () {
            return e.itemData;
          },
          function (t, n) {
            t &&
              setTimeout(function () {
                try {
                  s.nextTick$1(function () {
                    y(),
                      (D = new p.VisibilityObserver(
                        "#".concat(_.value),
                        {
                          once: !0,
                          callback: function (t, n) {
                            h ||
                              (t &&
                                ((h = !0),
                                a.report(
                                  "".concat(e.reportPrefix, ".item_brow"),
                                  x.value
                                )));
                          },
                          intersection: { threshold: 0 },
                        },
                        { context: i }
                      ));
                  }),
                    s.nextTick$1(function () {
                      var t, n;
                      null ==
                        (n =
                          null == (t = null == I ? void 0 : I.observer)
                            ? void 0
                            : t.disconnect) || n.call(t),
                        (I = null),
                        (I = new p.VisibilityObserver(
                          "#".concat(_.value, "-title"),
                          {
                            once: !0,
                            callback: function (t, n) {
                              k ||
                                (t &&
                                  ((k = !0),
                                  a.report(
                                    "".concat(
                                      e.reportPrefix,
                                      ".eventitem_header_brow"
                                    ),
                                    x.value
                                  )));
                            },
                            intersection: { threshold: 0 },
                          },
                          { context: i }
                        ));
                    });
                } catch (e) {}
              }, 300);
          },
          { immediate: !0, deep: !0 }
        );
      var j = s.computed(function () {
          var t, n, i, a, o;
          try {
            if (
              null ==
              (i =
                null == (n = null == (t = e.itemData) ? void 0 : t.watchList)
                  ? void 0
                  : n.info)
                ? void 0
                : i.id
            )
              return !0;
            if (
              (null == (o = null == (a = e.itemData) ? void 0 : a.relate_code)
                ? void 0
                : o.length) > 0
            )
              return !0;
          } catch (e) {}
          return !1;
        }),
        P = s.ref(!0);
      o && (P.value = !0),
        s.watch(
          function () {
            return e.abtConfig;
          },
          function (e, t) {
            var n;
            if (e)
              try {
                var i = (
                  ((null == e ? void 0 : e.data) &&
                    (null == (n = null == e ? void 0 : e.data)
                      ? void 0
                      : n[0])) ||
                  {}
                ).DiscoverVersion;
                i && (P.value = "New" === i);
              } catch (e) {}
          },
          { immediate: !0, deep: !0 }
        );
      var C = s.ref(!1);
      return {
        formatTime: function (e) {
          return (
            m.timeFormat(
              null == e ? void 0 : e.publish_time,
              m.timeFormatType.exact
            ) || ""
          );
        },
        basketData: g,
        gotoNewsDetail: function (t, n) {
          var o = t.news_id || t.id,
            r = t.news_type,
            c = t.special_type,
            s = t.wx_tag,
            m = u(l({}, x.value || {}), {
              sub_positionid: "".concat(e.itemIndex, "_").concat(n),
              newsid: o,
            });
          a.report("".concat(e.reportPrefix, ".item_click"), m);
          var v = {};
          s && (v.wx_tag = s), d.router(r, c, { instance: i, params: t }, v);
        },
        getCommonParams: x,
        hot: w,
        newsList: b,
        thumbImg: function (e) {
          return 4 === (null == e ? void 0 : e.img_display_mode) &&
            (null == e ? void 0 : e.ext_image_list)
            ? f.forceHttpsAdvanced(
                (null == e ? void 0 : e.ext_image_list) || ""
              )
            : f.forceHttpsAdvanced((null == e ? void 0 : e.thumb_img) || "");
        },
        itemWatchId: _,
        showRelateTarget: j,
        newHeader: P,
        longPress: function (t) {
          var i, o;
          (null == (i = e.itemData) ? void 0 : i.event_id) &&
            P.value &&
            (n("longPress", t),
            (C.value = !0),
            a.report("".concat(e.reportPrefix, ".eventitem_longpress_click"), {
              positionid: e.itemIndex,
              hotissueid: null == (o = e.itemData) ? void 0 : o.event_id,
            }));
        },
        goToDetail: function () {
          var t, n, i;
          P.value &&
            ((null == (t = e.itemData) ? void 0 : t.event_id) &&
              s.StockRouter.routeTo({
                name: "discoverEventDetail",
                query: {
                  event_id: null == (n = e.itemData) ? void 0 : n.event_id,
                },
              }),
            a.report(
              "".concat(e.reportPrefix, ".eventitem_header_click"),
              l(
                {
                  positionid: e.itemIndex,
                  hotissueid: null == (i = e.itemData) ? void 0 : i.event_id,
                },
                c.value ? { report_info: c.value } : {}
              )
            ));
        },
        onLongPress: C,
        lctChannel: o,
      };
    },
  };
Array ||
  (s.resolveComponent("newsItemBasket") + s.resolveComponent("stockTag"))();
var w = s._export_sfc(_, [
  [
    "render",
    function (e, t, n, i, a, o) {
      return s.e(
        { a: !i.newHeader },
        i.newHeader
          ? {}
          : s.e(
              {
                b: s.t(n.itemIndex + 1),
                c: s.n("index-".concat(n.itemIndex)),
                d: s.n(n.itemIndex >= 9 ? "two-digit" : ""),
                e: s.t(n.itemData.event_title),
                f: s.n(
                  n.itemData.event_label_type &&
                    "tag-".concat(n.itemData.event_label_type)
                ),
                g: i.hot,
              },
              i.hot ? { h: s.t("".concat(i.hot)) } : {}
            ),
        { i: i.newHeader },
        i.newHeader
          ? s.e(
              {
                j: s.t(n.itemIndex + 1),
                k: s.n("index-".concat(n.itemIndex)),
                l: s.n(n.itemIndex >= 9 ? "two-digit" : ""),
                m: s.t(n.itemData.event_title),
                n: s.n(
                  n.itemData.event_label_type &&
                    "tag-".concat(n.itemData.event_label_type)
                ),
                o: n.itemData.event_id,
              },
              (n.itemData.event_id, {})
            )
          : {},
        { p: i.newHeader },
        i.newHeader ? { q: s.t("".concat(i.hot)) } : {},
        {
          r: "".concat(i.itemWatchId, "-title"),
          s: s.o(function () {
            return i.goToDetail && i.goToDetail.apply(i, arguments);
          }, 3775),
          t: s.f(i.newsList, function (e, t, n) {
            return s.e(
              { a: s.t(e.title), b: e.wx_tag },
              e.wx_tag ? { c: s.t(e.wx_tag) } : {},
              {
                d: s.t(e.source),
                e: s.t(i.formatTime(e)),
                f: i.thumbImg(e),
                g: "news-".concat(e.news_id || e.id, "-").concat(t),
                h: s.n(
                  t !== i.newsList.length - 1 || i.showRelateTarget
                    ? ""
                    : "last"
                ),
                i: s.o(
                  function (n) {
                    return i.gotoNewsDetail(e, t);
                  },
                  3776,
                  "news-".concat(e.news_id || e.id, "-").concat(t)
                ),
              }
            );
          }),
          v: "".concat(i.itemWatchId),
          w: i.showRelateTarget,
        },
        i.showRelateTarget
          ? s.e(
              { x: i.basketData && i.basketData.info && i.basketData.info.id },
              i.basketData && i.basketData.info && i.basketData.info.id
                ? {
                    y: s.p({
                      "report-prefix": n.reportPrefix,
                      "report-params": i.getCommonParams,
                      "item-data": i.basketData,
                      "item-index": n.itemIndex,
                    }),
                  }
                : n.itemData.relate_code && n.itemData.relate_code.length > 0
                ? {
                    A: s.p({
                      "report-prefix": n.reportPrefix,
                      index: n.itemIndex,
                      "stock-data": n.itemData.relate_code[0],
                      ext: i.getCommonParams,
                    }),
                  }
                : {},
              { z: n.itemData.relate_code && n.itemData.relate_code.length > 0 }
            )
          : {},
        { B: n.pressingIndex === n.itemIndex },
        (n.pressingIndex, n.itemIndex, {}),
        {
          C: s.n(i.lctChannel ? "lct-mode" : ""),
          D: s.o(function (e) {
            return i.longPress(e);
          }, 3777),
        }
      );
    },
  ],
  ["__scopeId", "data-v-e56c5554"],
]);
wx.createComponent(w);
