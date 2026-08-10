var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, n, i) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[n] = i);
  },
  l = function (t, n) {
    for (var i in n || (n = {})) o.call(n, i) && c(t, i, n[i]);
    if (r) {
      var l,
        u = e(r(n));
      try {
        for (u.s(); !(l = u.n()).done; ) {
          i = l.value;
          a.call(n, i) && c(t, i, n[i]);
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
  v = require("../../../stock-news-core/utils/knife.js"),
  m = require("../../../../hooks/shareProtocol.js"),
  f = require("../../../stock-base/visibilityObserver/index.js"),
  p = require("../../../stock-news-core/utils/force2https.js"),
  b = {
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
        r = s.inject("stockBridge"),
        o = s.inject("newsLimit") || 0,
        a = s.computed(function () {
          var t;
          try {
            var n = null == (t = e.itemData) ? void 0 : t.event_news;
            if ((o && n.splice(o), n && n.length > 0))
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
        c = s.computed(function () {
          var t;
          try {
            return "热度".concat(
              m.tophotFormat(null == (t = e.itemData) ? void 0 : t.event_heat)
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
        _ = s.computed(function () {
          var t;
          return (null == (t = e.itemData) ? void 0 : t.watchList) || {};
        }),
        w = s.computed(function () {
          var t,
            n,
            i,
            r,
            o = u(l({}, e.reportParams), {
              newsid: e.itemData.id,
              positionid: e.itemIndex,
              hotissueid: null == (t = e.itemData) ? void 0 : t.event_id,
            });
          if (e.abtConfig)
            try {
              var a =
                  ((null == (n = e.abtConfig) ? void 0 : n.data) &&
                    (null == (r = null == (i = e.abtConfig) ? void 0 : i.data)
                      ? void 0
                      : r[0])) ||
                  {},
                c = a.report_info;
              a.DiscoverVersion && c && (o = u(l({}, o), { report_info: c }));
            } catch (e) {}
          return o;
        }),
        h = !1,
        g = null,
        y = function () {
          var e, t;
          null ==
            (t =
              null == (e = null == g ? void 0 : g.observer)
                ? void 0
                : e.disconnect) || t.call(e),
            (g = null);
        },
        x = !1,
        D = null;
      s.onUnmounted(function () {
        var e, t;
        try {
          y(),
            null == (t = null == (e = D.observer) ? void 0 : e.disconnect) ||
              t.call(e),
            (D = null);
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
                      (g = new f.VisibilityObserver(
                        "#".concat(a.value),
                        {
                          once: !0,
                          callback: function (t, n) {
                            h ||
                              (t &&
                                ((h = !0),
                                r.report(
                                  "".concat(e.reportPrefix, ".item_brow"),
                                  w.value
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
                          null == (t = null == D ? void 0 : D.observer)
                            ? void 0
                            : t.disconnect) || n.call(t),
                        (D = null),
                        (D = new f.VisibilityObserver(
                          "#".concat(a.value, "-title"),
                          {
                            once: !0,
                            callback: function (t, n) {
                              x ||
                                (t &&
                                  ((x = !0),
                                  r.report(
                                    "".concat(
                                      e.reportPrefix,
                                      ".eventitem_header_brow"
                                    ),
                                    w.value
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
      var I = s.computed(function () {
          var t, n, i, r, o;
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
              (null == (o = null == (r = e.itemData) ? void 0 : r.relate_code)
                ? void 0
                : o.length) > 0
            )
              return !0;
          } catch (e) {}
          return !1;
        }),
        P = s.ref(!0);
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
      var j = s.ref(!1);
      return {
        formatTime: function (e) {
          return (
            v.timeFormat(
              null == e ? void 0 : e.publish_time,
              v.timeFormatType.exact
            ) || ""
          );
        },
        basketData: _,
        gotoNewsDetail: function (t, n) {
          var o = t.news_id || t.id,
            a = t.news_type,
            c = t.special_type,
            s = t.wx_tag,
            v = u(l({}, w.value || {}), {
              sub_positionid: "".concat(e.itemIndex, "_").concat(n),
              newsid: o,
            });
          r.report("".concat(e.reportPrefix, ".item_click"), v);
          var m = {};
          s && (m.wx_tag = s), d.router(a, c, { instance: i, params: t }, m);
        },
        getCommonParams: w,
        hot: c,
        newsList: b,
        thumbImg: function (e) {
          return 4 === (null == e ? void 0 : e.img_display_mode) &&
            (null == e ? void 0 : e.ext_image_list)
            ? p.forceHttpsAdvanced(null == e ? void 0 : e.ext_image_list)
            : p.forceHttpsAdvanced(null == e ? void 0 : e.thumb_img);
        },
        itemWatchId: a,
        showRelateTarget: I,
        newHeader: P,
        longPress: function (t) {
          var i, o;
          (null == (i = e.itemData) ? void 0 : i.event_id) &&
            P.value &&
            (n("longPress", t),
            (j.value = !0),
            r.report("".concat(e.reportPrefix, ".eventitem_longpress_click"), {
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
            r.report("".concat(e.reportPrefix, ".eventitem_header_click"), {
              positionid: e.itemIndex,
              hotissueid: null == (i = e.itemData) ? void 0 : i.event_id,
            }));
        },
        onLongPress: j,
      };
    },
  },
  _ = s._export_sfc(b, [
    [
      "render",
      function (e, t, n, i, r, o) {
        return s.e(
          {
            a: s.f(i.newsList, function (e, t, n) {
              return {
                a: s.t(e.title),
                b: i.thumbImg(e),
                c: "news-".concat(e.news_id || e.id, "-").concat(t),
                d: s.n(
                  t !== i.newsList.length - 1 || i.showRelateTarget
                    ? ""
                    : "last"
                ),
                e: s.o(
                  function () {
                    return i.goToDetail && i.goToDetail.apply(i, arguments);
                  },
                  3778,
                  "news-".concat(e.news_id || e.id, "-").concat(t)
                ),
              };
            }),
            b: s.t(n.itemData.event_title),
            c: "".concat(i.itemWatchId),
            d: n.pressingIndex === n.itemIndex,
          },
          (n.pressingIndex, n.itemIndex, {}),
          {
            e: s.o(function (e) {
              return i.longPress(e);
            }, 3779),
          }
        );
      },
    ],
    ["__scopeId", "data-v-837b7878"],
  ]);
wx.createComponent(_);
