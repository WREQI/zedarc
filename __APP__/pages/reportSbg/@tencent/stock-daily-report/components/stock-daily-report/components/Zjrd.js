var t = require("../../../../../../../common/vendor.js");
function e() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0",
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
    o = t.toString();
  return o.length < n
    ? e.repeat(n).replace(new RegExp("\\d{".concat(o.length, "}$")), o)
    : o;
}
function n(t) {
  var n,
    o =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : "yyyyMMdd";
  return t
    ? ((n =
        "number" == typeof t
          ? new Date(t)
          : "function" == typeof t.getFullYear
          ? t
          : new Date(t.toString().replace(/-/g, "/"))),
      o
        .replace(/y{4}/, n.getFullYear())
        .replace(/M{2}/, e(n.getMonth() + 1))
        .replace(/d{2}/, e(n.getDate()))
        .replace(/h{2}/, e(n.getHours()))
        .replace(/m{2}/, e(n.getMinutes()))
        .replace(/s{2}/, e(n.getSeconds()))
        .replace(/w{1}/, "日一二三四五六"[n.getDay()]))
    : "";
}
var o = {
  components: {
    BaseTitle: function () {
      return "./BaseTitle.js";
    },
    ZjrdList: function () {
      return "./ZjrdList.js";
    },
    newsTemplate: function () {
      return "../../../../../../newsCon/@tencent/stock-news-detail/components/newsTemplate/index.js";
    },
  },
  provide: function () {
    return { isFullTeach: !0 };
  },
  props: {
    detail: {},
    wzqConfig: {},
    more: { type: Boolean, default: !0 },
    dailyid: { type: String, default: "" },
  },
  data: function () {
    return { isShowAgspDetail: !0 };
  },
  methods: {
    fromNowSecond: function (t) {
      var e = (function (t) {
        if (!t) return "";
        var e = new Date(),
          o = new Date(t.toString().replace(/-/g, "/")),
          r = e.getTime() - o.getTime();
        return (
          (r = Math.abs(r)),
          Math.floor(r / 31536e6) >= 1 && e.getFullYear() !== o.getFullYear()
            ? n(o, "yyyy-MM-dd hh:mm")
            : n(o, "MM-dd hh:mm")
        );
      })(t);
      return n(e, "MM-dd hh:mm:ss");
    },
    onFundPlateClick: function (t) {
      this.$emit("onFundPlateClick", t);
    },
    gotoStrategy: function () {
      this.$emit("gotoStrategy");
    },
    viewStockDetail: function (t, e, n) {
      this.$emit("viewStockDetail", t, e, n);
    },
    onStatReport: function (t, e) {
      this.$emit("statReport", t, e);
    },
  },
};
Array ||
  (
    t.resolveComponent("BaseTitle") +
    t.resolveComponent("newsTemplate") +
    t.resolveComponent("ZjrdList")
  )();
var r = t._export_sfc(o, [
  [
    "render",
    function (e, n, o, r, i, a) {
      return t.e(
        {
          a: t.p({ title: "资金动向" }),
          b: t.p({
            "snp-content": o.detail.front_zjdx.contents,
            "wzq-config": o.wzqConfig,
            "news-id": o.dailyid,
          }),
          c:
            o.detail.front_zjdx &&
            o.detail.front_zjdx.contents &&
            o.detail.front_zjdx.contents.length > 0,
        },
        o.detail.front_zjdx &&
          o.detail.front_zjdx.contents &&
          o.detail.front_zjdx.contents.length > 0
          ? t.e(
              { d: o.detail.isZjrdContentOk },
              o.detail.isZjrdContentOk
                ? t.e(
                    {
                      e: t.t(
                        a.fromNowSecond(
                          o.detail.front_zjdx.fund_hotspot.update_at
                        )
                      ),
                      f: o.more,
                    },
                    o.more
                      ? {
                          g: t.o(function () {
                            return (
                              a.gotoStrategy &&
                              a.gotoStrategy.apply(a, arguments)
                            );
                          }, 4493),
                        }
                      : {}
                  )
                : {},
              {
                h: t.o(a.viewStockDetail, 4494),
                i: t.o(a.onFundPlateClick, 4495),
                j: t.o(a.onStatReport, 4496),
                k: t.p({
                  content: o.detail.front_zjdx.fund_hotspot.hot_funds_plates,
                }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-305560c2"],
]);
wx.createComponent(r);
