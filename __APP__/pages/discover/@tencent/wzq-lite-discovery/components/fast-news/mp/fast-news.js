var e = require("../../../../../../../common/vendor.js"),
  r = require("../../../utils/page-status.js"),
  t = {
    components: {
      fastNewsContent: function () {
        return "../fast-news-content.js";
      },
    },
    props: {
      abtConfig: { type: Object, default: null },
      sourceFrom: { type: String, default: "" },
    },
    setup: function (t) {
      var n = e.ref(!1),
        o = e.ref(null),
        s = e.ref(!1),
        a = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        f = e.ref(r.COMMON_PAGE_STATUS.LOADING);
      return {
        reportParams: { category_id: "fastnews" },
        contentRef: o,
        onListScroll: function (e) {},
        pullRefresh: function () {
          (s.value = !0),
            a.$refs.contentRef.refresh(),
            setTimeout(function () {
              s.value = !1;
            }, 300);
        },
        loadMore: function () {
          a.$refs.contentRef.loadMore();
        },
        refreshTriggered: s,
        refreshSuccess: function (e) {
          n.value = !0;
        },
        refreshFail: function () {
          f.value = r.COMMON_PAGE_STATUS.ERROR;
        },
        pageStatus: f,
        didLoadData: n,
        onErrorRetry: function () {
          (f.value = r.COMMON_PAGE_STATUS.LOADING),
            a.$refs.contentRef.refresh();
        },
      };
    },
  };
Array ||
  (e.resolveComponent("fastNewsContent") + e.resolveComponent("st-status"))();
var n = e._export_sfc(t, [
  [
    "render",
    function (r, t, n, o, s, a) {
      return e.e(
        {
          a: e.sr("contentRef", "13945647-0"),
          b: e.o(o.refreshSuccess, 2169),
          c: e.o(o.refreshFail, 2170),
          d: e.p({
            "report-prefix": "news.fastnews",
            "report-params": o.reportParams,
            "abt-config": n.abtConfig,
            "source-from": n.sourceFrom,
          }),
          e: !o.didLoadData,
        },
        o.didLoadData
          ? {}
          : { f: e.o(o.onErrorRetry, 2171), g: e.p({ type: o.pageStatus }) },
        {
          h: o.refreshTriggered,
          i: e.o(function (e) {
            return o.pullRefresh();
          }, 2172),
          j: e.o(function (e) {
            return o.loadMore();
          }, 2173),
          k: e.o(function () {
            return o.onListScroll && o.onListScroll.apply(o, arguments);
          }, 2174),
        }
      );
    },
  ],
  ["__scopeId", "data-v-13945647"],
]);
wx.createComponent(n);
