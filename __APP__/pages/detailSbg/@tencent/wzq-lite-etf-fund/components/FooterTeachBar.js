require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = require("../FundETF.js"),
  a = require("../../stock-hq-data/index.js"),
  n = {
    data: function () {
      return { teachData: {}, learnNum: "--" };
    },
    computed: {
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
    },
    created: function () {
      this.getTeachData();
    },
    methods: {
      getTeachData: function () {
        var e = this,
          n = 1e4;
        t.getEtfFundTeach("etf")
          .then(function (t) {
            e.teachData = (null == t ? void 0 : t.data) || {};
            var r = e.teachData.learn_num;
            isNaN(r) || (n += parseFloat(r)),
              (e.learnNum = a.utils.bigNumberToText(n, "", 1));
          })
          .catch(function (t) {
            e.learnNum = a.utils.bigNumberToText(n, "", 1);
          });
      },
      goTeach: function () {
        var t = this.teachData.news_id;
        t &&
          (e.StockBridge.report("hq.stock_detail.fund.footer.teach_click"),
          e.StockRouter.routeTo({
            name: "informationSubject",
            query: { id: t, type: 1 },
          }));
      },
    },
  },
  r = e._export_sfc(n, [
    [
      "render",
      function (t, a, n, r, i, c) {
        return e.e(
          { a: !c.isLite },
          c.isLite
            ? {
                d: e.o(function () {
                  return c.goTeach && c.goTeach.apply(c, arguments);
                }, 2924),
              }
            : {
                b: e.t("".concat(i.learnNum, "人已学习")),
                c: e.o(function () {
                  return c.goTeach && c.goTeach.apply(c, arguments);
                }, 2923),
              },
          { e: e.n(c.isLite ? "lite" : "pro") }
        );
      },
    ],
    ["__scopeId", "data-v-a62234d6"],
  ]);
wx.createComponent(r);
