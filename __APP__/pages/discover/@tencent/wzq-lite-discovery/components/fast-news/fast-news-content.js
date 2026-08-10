var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, t, r) {
    return new Promise(function (a, n) {
      var o = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            n(e);
          }
        },
        s = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            n(e);
          }
        },
        i = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(o, s);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  a = require("../../../../../../common/vendor.js"),
  n = require("../../api/request.js"),
  o = require("../../../stock-news-core/utils/knife.js"),
  s = {
    components: {
      fastNewsItem: function () {
        return "./fast-newitem.js";
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
      abtConfig: { type: Object, default: null },
      sourceFrom: { type: String, default: "" },
    },
    setup: function (s, i) {
      var u = this,
        l = i.emit,
        f = a.ref(!1),
        c = a.ref(""),
        p = a.ref(!0),
        m = [],
        d = a.ref([]),
        h = a.ref([]),
        v = a.ref([]);
      a.onMounted(function () {
        b();
      });
      var b = function () {
          return r(
            u,
            null,
            t().mark(function e() {
              var r;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          n.requestFastNewsData(0, 20, "")
                        );
                      case 3:
                        (r = e.sent) && 0 === r.code
                          ? ((m = r.news_list || []),
                            g(m),
                            (p.value = 1 == r.has_next),
                            (c.value = r.next_page_cursor || ""),
                            (f.value = !0),
                            l("refreshSuccess", r))
                          : l("refreshFail"),
                          (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0)), l("refreshFail");
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
        },
        g = function (e) {
          var t = [],
            r = [],
            a = new Map(),
            n = "";
          e.forEach(function (e) {
            if ("今天" === (n = y(e.publish_time))) t.push(e);
            else if ("昨天" === n) r.push(e);
            else {
              var o = a.get(n);
              o || ((o = []), a.set(n, o)), o.push(e);
            }
          }),
            (d.value = t),
            (h.value = r),
            (v.value = Array.from(a.values()));
        },
        y = function (e) {
          var t = new Date(),
            r = new Date(t);
          r.setDate(t.getDate() - 1);
          var a = new Date(1e3 * e);
          return a.toDateString() === t.toDateString()
            ? "今天"
            : a.toDateString() === r.toDateString()
            ? "昨天"
            : o.date2Str(a, "%Y-%M-%d");
        };
      return {
        isDataReady: f,
        listDataToday: d,
        listDataYestoday: h,
        otherListList: v,
        formatPublishTime: function (e) {
          return o.timeFormat(e, o.timeFormatType.exact);
        },
        formatDate2Str: y,
        refresh: b,
        loadMore: function () {
          return r(
            u,
            null,
            t().mark(function r() {
              var a, o, s, i;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!p.value) {
                          t.next = 13;
                          break;
                        }
                        if (((t.prev = 1), (o = 0), c.value))
                          try {
                            (s = JSON.parse(c.value)),
                              (o = Number(null != (a = s.offset) ? a : 0));
                          } catch (e) {}
                        return (
                          (t.next = 6), n.requestFastNewsData(o, 20, c.value)
                        );
                      case 6:
                        (i = t.sent) &&
                          0 === i.code &&
                          ((m = [].concat(e(m), e(i.news_list || []))),
                          g(m),
                          (p.value = 1 == i.has_next),
                          (c.value = i.next_page_cursor || ""),
                          l("loadMoreSuccess", i)),
                          (t.next = 13);
                        break;
                      case 10:
                        (t.prev = 10), (t.t0 = t.catch(1)), l("loadMoreFail");
                      case 13:
                      case "end":
                        return t.stop();
                    }
                },
                r,
                null,
                [[1, 10]]
              );
            })
          );
        },
        getYestodayIndex: function (e) {
          return d.value.length ? d.value.length + e : e;
        },
        getOtherDayIndex: function (e, t) {
          var r = d.value.length;
          r += h.value.length;
          for (var a = 0; a < v.value.length && a < e; a++)
            r += v.value[a].length;
          return r + t;
        },
      };
    },
  };
Array || a.resolveComponent("fastNewsItem")();
var i = a._export_sfc(s, [
  [
    "render",
    function (e, t, r, n, o, s) {
      return a.e(
        { a: n.listDataToday && n.listDataToday.length },
        (n.listDataToday && n.listDataToday.length, {}),
        {
          b: a.f(n.listDataToday, function (e, t, o) {
            return {
              a: "8aa01bf9-0-" + o,
              b: a.p({
                "report-prefix": r.reportPrefix,
                "report-params": r.reportParams,
                "item-index": t,
                "item-data": e,
                "time-str": n.formatPublishTime(e.publish_time),
                "abt-config": r.abtConfig,
                "source-from": r.sourceFrom,
              }),
              c: e.news_id || e.id,
            };
          }),
          c: n.listDataYestoday && n.listDataYestoday.length,
        },
        (n.listDataYestoday && n.listDataYestoday.length, {}),
        {
          d: a.f(n.listDataYestoday, function (e, t, o) {
            return {
              a: "8aa01bf9-1-" + o,
              b: a.p({
                "report-prefix": r.reportPrefix,
                "report-params": r.reportParams,
                "item-index": n.getYestodayIndex(t),
                "item-data": e,
                "time-str": n.formatPublishTime(e.publish_time),
                "abt-config": r.abtConfig,
                "source-from": r.sourceFrom,
              }),
              c: e.news_id || e.id,
            };
          }),
          e: a.f(n.otherListList, function (e, t, o) {
            return a.e(
              { a: e && e.length },
              e && e.length
                ? {
                    b: a.t(n.formatDate2Str(e[0].publish_time)),
                    c: a.f(e, function (e, s, i) {
                      return {
                        a: "8aa01bf9-2-" + o + "-" + i,
                        b: a.p({
                          "report-prefix": r.reportPrefix,
                          "report-params": r.reportParams,
                          "item-index": n.getOtherDayIndex(t, s),
                          "item-data": e,
                          "time-str": n.formatPublishTime(e.publish_time),
                          "abt-config": r.abtConfig,
                          "source-from": r.sourceFrom,
                        }),
                        c: e.news_id || e.id,
                      };
                    }),
                  }
                : {},
              { d: t }
            );
          }),
          f: n.isDataReady,
        },
        (n.isDataReady, {})
      );
    },
  ],
  ["__scopeId", "data-v-8aa01bf9"],
]);
wx.createComponent(i);
