var n = require("../../../../../../common/vendor.js"),
  t = {
    3: { text: "看好", cls: "judgment--bullish" },
    2: { text: "中性", cls: "judgment--neutral" },
    1: { text: "看淡", cls: "judgment--bearish" },
  },
  e = [
    "https://st.gtimg.com/design/1a8b9a06b66838aacbd73be9162f561c.svg",
    "https://st.gtimg.com/pcm/mp3q0oko_e32b5336da660576afd41facb6853e4f.svg",
    "https://st.gtimg.com/pcm/mp3q0oht_a8598b33993404d877492cbe52de8ef9.svg",
  ],
  i = ["高速增长", "持续流入", "机构看好"],
  o = n.defineComponent({
    name: "OpinionCard",
    props: {
      opinion: {
        type: Object,
        default: function () {
          return {};
        },
      },
      judgments: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isOpinionExpanded: { type: Boolean, default: !1 },
      opinionAnalysisList: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (o) {
      var a,
        s =
          (null == (a = n.getCurrentInstance()) ? void 0 : a.proxy) ||
          n.getCurrentInstance();
      function r(t, e) {
        n.StockBridge.mtaReport({
          busi: "hq",
          eventName: t,
          exposure: { selector: e, context: s },
        });
      }
      return (
        n.onMounted(function () {
          r("market_outlook_module_brow", ".opinion-card");
        }),
        n.watch(
          function () {
            return o.isOpinionExpanded;
          },
          function (t) {
            t &&
              n.nextTick$1(function () {
                r(
                  "market_outlook_three_dimension_dtl_brow",
                  ".opinion-card__analysis-list"
                );
              });
          }
        ),
        {
          getJudgmentText: function (n) {
            var e,
              i = Number(n);
            return (
              (null == (e = t[i]) ? void 0 : e.text) ||
              (function (n) {
                return null == n || "" === n ? "--" : n;
              })(n)
            );
          },
          getJudgmentClass: function (n) {
            var e,
              i = Number(n);
            return (null == (e = t[i]) ? void 0 : e.cls) || "";
          },
          getAnalysisBadgeText: function (n, t) {
            return n.star_desc
              ? String(n.star_desc).replace(/[★☆\s]/g, "") || n.star_desc
              : i[t] || "--";
          },
          getAnalysisBadgeClass: function (n) {
            var t = Number(n.star);
            return t >= 4
              ? "opinion-card__analysis-badge--positive"
              : 3 === t
              ? "opinion-card__analysis-badge--neutral"
              : "opinion-card__analysis-badge--bearish";
          },
          getAnalysisBadgeIcon: function (n) {
            var t = Number(n.star);
            return e[t >= 3 ? 2 : t >= 2 ? 1 : 0] || e[0];
          },
        }
      );
    },
  }),
  a = n._export_sfc(o, [
    [
      "render",
      function (t, e, i, o, a, s) {
        return n.e(
          {
            a: n.o(function (n) {
              return t.$emit("show-rule");
            }, 2433),
            b: n.t(
              t.opinion.overview ||
                "短期利好政策密集发布，中长期成长空间大，可以持续关注"
            ),
            c: n.t(t.getJudgmentText(t.judgments.short)),
            d: n.n(t.getJudgmentClass(t.judgments.short)),
            e: n.t(t.getJudgmentText(t.judgments.long)),
            f: n.n(t.getJudgmentClass(t.judgments.long)),
            g: t.isOpinionExpanded,
          },
          t.isOpinionExpanded
            ? {
                h: n.f(t.opinionAnalysisList, function (e, i, o) {
                  return {
                    a: n.t(e.title),
                    b: t.getAnalysisBadgeIcon(e),
                    c: n.t(t.getAnalysisBadgeText(e, i)),
                    d: n.n(t.getAnalysisBadgeClass(e)),
                    e: n.t(e.content),
                    f: "".concat(e.title, "-").concat(i),
                  };
                }),
              }
            : {},
          {
            i: n.n({ "opinion-card__share-icon--up": !t.isOpinionExpanded }),
            j: t.isOpinionExpanded ? "收起" : "展开",
            k: n.o(function (n) {
              return t.$emit("toggle");
            }, 2434),
            l: n.n({ "opinion-card--expanded": t.isOpinionExpanded }),
          }
        );
      },
    ],
    ["__scopeId", "data-v-e89c6e8a"],
  ]);
wx.createComponent(a);
