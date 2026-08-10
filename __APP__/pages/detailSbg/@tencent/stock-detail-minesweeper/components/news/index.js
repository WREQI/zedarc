var a = require("../../../../../../common/vendor.js");
Array ||
  (
    a.resolveComponent("NewsCompNE") +
    a.resolveComponent("NewsCompSR") +
    a.resolveComponent("NewsCompLS") +
    a.resolveComponent("NewsCompEREC") +
    a.resolveComponent("NewsCompOR") +
    a.resolveComponent("foldBar")
  )();
var e = a._export_sfc(
  {
    name: "MineSweeping-News",
    props: ["data", "mpscrollTop"],
    components: {
      foldBar: function () {
        return "../foldBar.js";
      },
      NewsCompLS: function () {
        return "./newsCompLS.js";
      },
      NewsCompNE: function () {
        return "./newsCompNE.js";
      },
      NewsCompSR: function () {
        return "./newsCompSR.js";
      },
      NewsCompEREC: function () {
        return "./newsCompEREC.js";
      },
      NewsCompOR: function () {
        return "./newsCompOR.js";
      },
    },
    data: function () {
      return {
        label: [
          {
            type: "负面事件",
            data: "negative_event",
            comp: "NewsCompNE",
            label: "manNE",
          },
          {
            type: "股权风险",
            data: "stock_right",
            comp: "NewsCompSR",
            label: "manSR",
          },
          {
            type: "诉讼仲裁",
            data: "lawsuit",
            comp: "NewsCompLS",
            label: "manLS",
          },
          {
            type: "高管增减持",
            data: "exec_reduce",
            comp: "NewsCompEREC",
            label: "manER",
          },
          {
            type: "高管变动",
            data: "exec_change",
            comp: "NewsCompEREC",
            label: "manEC",
          },
          {
            type: "分析师评级",
            data: "stock_opinion_rating",
            comp: "NewsCompOR",
            label: "manOR",
          },
        ],
      };
    },
  },
  [
    [
      "render",
      function (e, t, o, d, p, n) {
        return a.e(
          { a: o.data },
          o.data
            ? {
                b: a.f(p.label, function (t, d, n) {
                  return a.e(
                    { a: "NewsCompNE" === t.comp && o.data[t.data] },
                    "NewsCompNE" === t.comp && o.data[t.data]
                      ? {
                          b: "193226dd-1-" + n + ",193226dd-0-" + n,
                          c: a.p({ type: t.label, data: o.data[t.data] }),
                        }
                      : "NewsCompSR" === t.comp && o.data[t.data]
                      ? {
                          e: "193226dd-2-" + n + ",193226dd-0-" + n,
                          f: a.p({ type: t.label, data: o.data[t.data] }),
                        }
                      : "NewsCompLS" === t.comp && o.data[t.data]
                      ? {
                          h: "193226dd-3-" + n + ",193226dd-0-" + n,
                          i: a.p({ type: t.label, data: o.data[t.data] }),
                        }
                      : "NewsCompEREC" === t.comp && o.data[t.data]
                      ? {
                          k: "193226dd-4-" + n + ",193226dd-0-" + n,
                          l: a.p({ type: t.label, data: o.data[t.data] }),
                        }
                      : "NewsCompOR" === t.comp && o.data[t.data]
                      ? {
                          n: "193226dd-5-" + n + ",193226dd-0-" + n,
                          o: a.p({ type: t.label, data: o.data[t.data] }),
                        }
                      : {},
                    {
                      d: "NewsCompSR" === t.comp && o.data[t.data],
                      g: "NewsCompLS" === t.comp && o.data[t.data],
                      j: "NewsCompEREC" === t.comp && o.data[t.data],
                      m: "NewsCompOR" === t.comp && o.data[t.data],
                      p: a.sr(
                        o.data[t.data].tag.tag_name_eng,
                        "193226dd-0-" + n,
                        { f: 1 }
                      ),
                      q: d,
                      r: o.data[t.data].tag.tag_name_eng,
                      s: a.n(d === p.label.length - 1 ? "last" : ""),
                      t: a.o(
                        function (a) {
                          return e.$emit("foldChange");
                        },
                        2888,
                        d
                      ),
                      v: "193226dd-0-" + n,
                      w: a.p({
                        title: t.type,
                        type: t.label,
                        data: o.data[t.data],
                        mpscrollTop: o.mpscrollTop,
                      }),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-193226dd"],
  ]
);
wx.createComponent(e);
