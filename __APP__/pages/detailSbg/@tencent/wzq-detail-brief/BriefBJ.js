var a = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../common/vendor.js"),
  e = require("api/index.js"),
  r = require("../stock-hq-data/index.js"),
  n = require("utils/const.js"),
  i = {
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
    },
    props: ["symbol", "market", "skin"],
    data: function () {
      return {
        error: "",
        data: null,
        gsjj: [
          { name: "公司名称", key: "compname", nq: !1 },
          { name: "经营范围", key: "bizscope", nq: !1 },
          { name: "主营业务", key: "majopribiz", nq: !1 },
          { name: "成立日期", key: "founddate", nq: !1 },
          { name: "上市日期", key: "listdate", nq: !1 },
          { name: "转让方式", key: "tranmod", nq: !0 },
          { name: "做市起始日", key: "begmmdate", nq: !0 },
          { name: "做市商", key: "markmarkers", nq: !0 },
        ],
        gbjg: [
          { name: "总股本", key: "totalshare" },
          { name: "流通股", key: "circskamt" },
          { name: "流通A股", key: "circaamt" },
          { name: "优先股", key: "preferskamt" },
        ],
        foldCop: !0,
        foldMaj: !0,
        foldType: "",
        nodata: !1,
      };
    },
    computed: {
      isBJ: function () {
        return r.utils.isBJMarket(this.market);
      },
      isNq: function () {
        return r.utils.isNQMarket(this.market);
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
    },
    created: function () {
      this.getData();
    },
    beforeDestroy: function () {
      this.data = null;
    },
    methods: {
      getData: function () {
        return (
          (r = this),
          null,
          (i = a().mark(function r() {
            var i,
              s = this;
            return a().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.prev = 0),
                        (a.next = 3),
                        e
                          .getBjNqData(t.StockBridge, this.symbol)
                          .catch(function () {
                            s.$nextTick(function () {
                              s.$emit("loaded");
                            }),
                              (s.error = n.COMMON_PAGE_STATUS.ERROR);
                          })
                      );
                    case 3:
                      if (
                        ((i = a.sent) &&
                          i.data &&
                          (i.data.jianjie &&
                            i.data.jianjie.compname &&
                            (this.gsjj = this.gsjj.filter(function (a) {
                              return (s.isBJ && !a.nq) || s.isNq;
                            })),
                          (this.data = i.data)),
                        (this.data.jianjie && this.data.jianjie.compname) ||
                          (this.data.sharestruct &&
                            this.data.sharestruct.date) ||
                          (this.data.divident &&
                            this.data.divident.length > 0) ||
                          (this.nodata = !0),
                        !(
                          this.data &&
                          this.data.jianjie &&
                          this.data.jianjie.tranmod
                        ))
                      ) {
                        a.next = 17;
                        break;
                      }
                      (a.t0 = +this.data.jianjie.tranmod),
                        (a.next =
                          1 === a.t0
                            ? 8
                            : 2 === a.t0
                            ? 10
                            : 3 === a.t0
                            ? 12
                            : 4 === a.t0
                            ? 14
                            : 16);
                      break;
                    case 8:
                      return (
                        (this.data.jianjie.tranmod = "协议转让"),
                        a.abrupt("break", 17)
                      );
                    case 10:
                      return (
                        (this.data.jianjie.tranmod = "做市转让"),
                        a.abrupt("break", 17)
                      );
                    case 12:
                      return (
                        (this.data.jianjie.tranmod = "集合竞价交易"),
                        a.abrupt("break", 17)
                      );
                    case 14:
                      return (
                        (this.data.jianjie.tranmod = "连续竞价"),
                        a.abrupt("break", 17)
                      );
                    case 16:
                      this.data.jianjie.tranmod = "未知";
                    case 17:
                      this.$emit("loaded"), (a.next = 23);
                      break;
                    case 20:
                      (a.prev = 20), (a.t1 = a.catch(0)), this.$emit("loaded");
                    case 23:
                    case "end":
                      return a.stop();
                  }
              },
              r,
              this,
              [[0, 20]]
            );
          })),
          new Promise(function (a, t) {
            var e = function (a) {
                try {
                  s(i.next(a));
                } catch (a) {
                  t(a);
                }
              },
              n = function (a) {
                try {
                  s(i.throw(a));
                } catch (a) {
                  t(a);
                }
              },
              s = function (t) {
                return t.done
                  ? a(t.value)
                  : Promise.resolve(t.value).then(e, n);
              };
            s((i = i.apply(r, null)).next());
          })
        );
        var r, i;
      },
      retryTab: function () {
        this.$emit("refreshTab"), (this.error = ""), this.getData();
      },
      toggleFold: function (a) {
        (this.foldType = a),
          "bizscope" === a && (this.foldCop = !this.foldCop),
          "majopribiz" === a && (this.foldMaj = !this.foldMaj),
          this.$emit("loaded");
      },
      goPage: function () {
        var a =
          "https://wzq.tenpay.com/mp/v2/index.html#/stockDetail/bjnq/gbjg?symbol=".concat(
            this.symbol
          );
        t.StockBridge.openExtraWebview(a);
      },
    },
  };
Array || (t.resolveComponent("NoData") + t.resolveComponent("st-status"))();
var s = t._export_sfc(i, [
  [
    "render",
    function (a, e, r, n, i, s) {
      return t.e(
        { a: i.data && !i.nodata },
        i.data && !i.nodata
          ? t.e(
              { b: i.data.jianjie && i.data.jianjie.compname },
              i.data.jianjie && i.data.jianjie.compname
                ? {
                    c: t.f(i.gsjj, function (a, e, r) {
                      return t.e(
                        { a: (s.isBJ && !a.nq) || s.isNq },
                        (s.isBJ && !a.nq) || s.isNq
                          ? t.e(
                              {
                                b: t.t(a.name),
                                c: t.t(i.data.jianjie[a.key] || "--"),
                                d:
                                  ("bizscope" === a.key && i.foldCop) ||
                                  ("majopribiz" === a.key && i.foldMaj)
                                    ? 1
                                    : "",
                                e: t.o(
                                  function (t) {
                                    return s.toggleFold(a.key);
                                  },
                                  1932,
                                  a.key
                                ),
                                f:
                                  ("bizscope" === a.key ||
                                    "majopribiz" === a.key) &&
                                  i.data.jianjie[a.key].length > 54,
                              },
                              ("bizscope" === a.key ||
                                "majopribiz" === a.key) &&
                                i.data.jianjie[a.key].length > 54
                                ? {
                                    g: t.t(
                                      ("bizscope" === a.key && i.foldCop) ||
                                        ("majopribiz" === a.key && i.foldMaj)
                                        ? "查看更多"
                                        : "收起"
                                    ),
                                    h: t.n(
                                      ("bizscope" === a.key && i.foldCop) ||
                                        ("majopribiz" === a.key && i.foldMaj)
                                        ? "bottom"
                                        : "top"
                                    ),
                                    i: t.o(
                                      function (t) {
                                        return s.toggleFold(a.key);
                                      },
                                      1933,
                                      a.key
                                    ),
                                  }
                                : {}
                            )
                          : {},
                        { j: a.key }
                      );
                    }),
                  }
                : {},
              {
                d:
                  i.data.jianjie &&
                  i.data.jianjie.compname &&
                  i.data.sharestruct &&
                  i.data.sharestruct.date,
              },
              (i.data.jianjie &&
                i.data.jianjie.compname &&
                i.data.sharestruct &&
                i.data.sharestruct.date,
              {}),
              { e: i.data.sharestruct && i.data.sharestruct.date },
              i.data.sharestruct && i.data.sharestruct.date
                ? t.e(
                    { f: s.isLite },
                    s.isLite ? { g: t.t(i.data.sharestruct.date) } : {},
                    { h: !s.isLite },
                    s.isLite ? {} : { i: t.t(i.data.sharestruct.date) },
                    {
                      j: t.o(function (a) {
                        return s.goPage();
                      }, 1934),
                      k: t.f(i.gbjg, function (a, e, r) {
                        return {
                          a: t.t(a.name),
                          b: t.t(i.data.sharestruct[a.key]),
                          c: a.key,
                        };
                      }),
                    }
                  )
                : {},
              {
                l:
                  i.data.sharestruct &&
                  i.data.sharestruct.date &&
                  i.data.divident &&
                  i.data.divident.length > 0,
              },
              (i.data.sharestruct &&
                i.data.sharestruct.date &&
                i.data.divident &&
                i.data.divident.length,
              {}),
              { m: i.data.divident && i.data.divident.length > 0 },
              i.data.divident && i.data.divident.length > 0
                ? {
                    n: t.f(i.data.divident, function (a, e, r) {
                      return t.e(
                        {
                          a: t.t(a.date),
                          b:
                            parseFloat(a.pretaxcashmaxdvcny) &&
                            parseFloat(a.pretaxcashmindvcny),
                        },
                        parseFloat(a.pretaxcashmaxdvcny) &&
                          parseFloat(a.pretaxcashmindvcny)
                          ? {
                              c: t.t(a.pretaxcashmindvcny),
                              d: t.t(a.pretaxcashmaxdvcny),
                            }
                          : parseFloat(a.pretaxcashmindvcny) &&
                            parseFloat(a.pretaxcashmindvcny)
                          ? { f: t.t(a.pretaxcashmindvcny) }
                          : parseFloat(a.pretaxcashmaxdvcny) &&
                            parseFloat(a.pretaxcashmaxdvcny)
                          ? { h: t.t(a.pretaxcashmaxdvcny) }
                          : {},
                        {
                          e:
                            parseFloat(a.pretaxcashmindvcny) &&
                            parseFloat(a.pretaxcashmindvcny),
                          g:
                            parseFloat(a.pretaxcashmaxdvcny) &&
                            parseFloat(a.pretaxcashmaxdvcny),
                          i: parseFloat(a.probonusrt),
                        },
                        parseFloat(a.probonusrt)
                          ? { j: t.t(a.probonusrt) }
                          : {},
                        { k: parseFloat(a.tranaddrt) },
                        parseFloat(a.tranaddrt) ? { l: t.t(a.tranaddrt) } : {},
                        { m: parseFloat(a.bonusrt) },
                        parseFloat(a.bonusrt) ? { n: t.t(a.bonusrt) } : {},
                        { o: t.t(a.xdrdate), p: e }
                      );
                    }),
                  }
                : {}
            )
          : (i.nodata && i.error, {}),
        { o: i.nodata && !i.error, p: i.error },
        i.error
          ? {
              q: t.o(function (a) {
                return s.retryTab();
              }, 1935),
              r: t.p({ type: i.error }),
            }
          : {},
        { s: "black" === r.skin ? 1 : "", t: s.isLite ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-abaaf907"],
]);
wx.createComponent(s);
