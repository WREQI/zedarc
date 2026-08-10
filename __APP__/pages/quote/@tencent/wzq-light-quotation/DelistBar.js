var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = function (e, t, n) {
    return new Promise(function (o, r) {
      var i = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(i, a);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../common/vendor.js"),
  o = require("../stock-hq-data/index.js"),
  r = n.defineComponent({
    props: ["market", "symbol", "stockOverView"],
    setup: function (r, i) {
      var a = this,
        c = i.emit,
        s = n.getCurrentInstance().proxy || n.getCurrentInstance(),
        u = ["mpwzq", "wzqlight"].includes("mpweapp"),
        l = ["mpwzq", "mpweapp"].includes("mpweapp"),
        d = n.ref(!1),
        p = n.ref(!1),
        m = n.ref(!1),
        f = n.ref(!1),
        k = n.ref({}),
        v = n.computed(function () {
          var e = r.stockOverView.attribute || "";
          return (
            !(0 != +r.market || !/D|E/.test(e)) ||
            (1 == +r.market && "S" === e[3])
          );
        }),
        h = n.computed(function () {
          var e = r.stockOverView.attribute || "";
          return (
            !(0 != +r.market || !/J/.test(e)) ||
            (1 == +r.market && "P" === e[3])
          );
        }),
        b = n.computed(function () {
          return "D" === r.stockOverView.status;
        }),
        w = function () {
          return t(
            a,
            null,
            e().mark(function t() {
              var i, a, c, s;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (i =
                            "https://proxy.finance.qq.com/cgi/cgi-bin/stockminor/neeq/get?code=".concat(
                              r.symbol
                            )),
                          (e.next = 4),
                          n.StockBridge.request(
                            i,
                            n.RequestTypeEnum.GET,
                            {},
                            { forceCallback: !0, timeout: 6e3 }
                          )
                        );
                      case 4:
                        (a = e.sent),
                          (k.value = a.data || {}),
                          a.data &&
                            1 == +a.data.codetype &&
                            ((c = o.utils.splitSymbol(a.data.neeqcode)),
                            (s = c.scode),
                            (k.value.neeqScode = s),
                            (f.value = !0)),
                          (d.value = +a.data.codetype > 0),
                          (e.next = 11);
                        break;
                      case 9:
                        (e.prev = 9), (e.t0 = e.catch(0));
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[0, 9]]
              );
            })
          );
        };
      return (
        n.onMounted(function () {
          return t(
            a,
            null,
            e().mark(function t() {
              var o;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!v.value && !h.value) {
                        e.next = 4;
                        break;
                      }
                      (d.value = !0), (e.next = 8);
                      break;
                    case 4:
                      if (((e.t0 = b.value), !e.t0)) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 8), w();
                    case 8:
                      if (!d.value) {
                        e.next = 12;
                        break;
                      }
                      s.$parent.$emit("heightChange"),
                        (o = ""),
                        b.value
                          ? (o = "hq.stock_detail.delist_bar_show")
                          : h.value
                          ? (o = "hq.stock_detail.delisting_bar_show")
                          : v.value && (o = "hq.stock_detail.st_bar_show"),
                        o && n.StockBridge.report(o, { stockid: r.symbol });
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
        }),
        {
          showBar: d,
          showPopup: p,
          popupIn: m,
          toNeeq: f,
          data: k,
          st: v,
          delisting: h,
          delisted: b,
          isLite: u,
          getData: w,
          goDetail: function () {
            f.value &&
              (n.StockRouter.routeTo({
                name: "stockdetail",
                query: { market: "nq", scode: k.value.neeqScode },
              }),
              n.StockBridge.report("hq.stock_detail.delist_bar_click", {
                stockid: r.symbol,
              }));
          },
          showTip: function () {
            u && ((m.value = !0), (p.value = !0));
            var e = "";
            b.value
              ? ((e = "hq.stock_detail.delist_bar_click"),
                u ||
                  (l
                    ? c("showModal", {
                        title: "退市说明",
                        content: [
                          {
                            type: "text",
                            text: "上市公司被交易所终止上市后，相应股份将转移至全国中小企业股份转让系统（老三板）或者直接退市，具体取决于上市公司，请投资者关注上市公司公告。",
                          },
                        ],
                      })
                    : s.$modal.alert({
                        title: "股票退市说明",
                        content:
                          "上市公司被交易所终止上市后，相应股份将转移至全国中小企业股份转让系统（老三板）或者直接退市，具体取决于上市公司，请投资者关注上市公司公告。",
                        confirmBtn: "我知道了",
                      })))
              : h.value
              ? ((e = "hq.stock_detail.delisting_bar_click"),
                u ||
                  (l
                    ? c("showModal", {
                        title: "退市整理期说明",
                        content: [
                          {
                            type: "text",
                            text: "退市整理期是沪深交易所设置的一个特殊交易阶段。当上市公司的股票被证券交易所作出强制终止上市的决定后的5到15个交易日后，该股票会进入退市整理期进行交易。退市整理期的期限通常为30个交易日。",
                          },
                          {
                            type: "text",
                            text: "退市整理期的主要目的是为投资者提供股票正式退市前必要的交易卖出机会，充分释放风险。在退市整理期届满后的5个交易日内，证券交易所会对该股票进行摘牌，公司股票正式终止上市，届时股票将不支持在沪深交易所继续交易。",
                          },
                          {
                            type: "text",
                            text: "请投资者关注相关风险，谨慎投资。",
                          },
                        ],
                      })
                    : s.$modal.alert({
                        title: "退市整理期说明",
                        content:
                          "退市整理期是沪深交易所设置的一个特殊交易阶段。当上市公司的股票被证券交易所作出强制终止上市的决定后的5到15个交易日后，该股票会进入退市整理期进行交易。退市整理期的期限通常为30个交易日。\n                <br/>\n                <br/>退市整理期的主要目的是为投资者提供股票正式退市前必要的交易卖出机会，充分释放风险。在退市整理期届满后的5个交易日内，证券交易所会对该股票进行摘牌，公司股票正式终止上市，届时股票将不支持在沪深交易所继续交易。\n                <br/>\n                <br/>请投资者关注相关风险，谨慎投资。",
                        confirmBtn: "我知道了",
                      })))
              : v.value &&
                ((e = "hq.stock_detail.st_bar_click"),
                u ||
                  (l
                    ? c("showModal", {
                        title: "ST风险说明",
                        content: [
                          {
                            type: "text",
                            text: "ST意为“特别处理”，当上市公司出现财务或其他方面的问题时，证券交易所向投资者发出风险警示并在股票名称前贴上ST标签，提示投资者关注公司风险。",
                          },
                          {
                            type: "text",
                            text: "当被交易所实施退市风险警示，在股票简称前会冠以*ST字样，如果上市公司在规定时间内未能改善业绩或解决问题，可能会面临退市，届时相关股票将不支持在沪深交易所继续交易。",
                          },
                          {
                            type: "text",
                            text: "请投资者关注公司动态和风险变化，谨慎投资。",
                          },
                        ],
                        confirmBtn: "查看详情",
                        onConfirm: function () {
                          n.StockBridge.report(
                            "hq.stock_detail.delisting_modal.tips_click",
                            { stockid: r.symbol }
                          ),
                            c("showTip");
                        },
                      })
                    : s.$modal.confirm({
                        title: "ST风险说明",
                        content:
                          "ST意为“特别处理”，当上市公司出现财务或其他方面的问题时，证券交易所向投资者发出风险警示并在股票名称前贴上ST标签，提示投资者关注公司风险。\n                <br/>\n                <br/>当被交易所实施退市风险警示，在股票简称前会冠以*ST字样，如果上市公司在规定时间内未能改善业绩或解决问题，可能会面临退市，届时相关股票将不支持在沪深交易所继续交易。\n                <br/>\n                <br/>请投资者关注公司动态和风险变化，谨慎投资。",
                        confirmBtn: "我知道了",
                        cancelBtn: "查看详情",
                        onCancel: function () {
                          n.StockBridge.report(
                            "hq.stock_detail.delisting_modal.tips_click",
                            { stockid: r.symbol }
                          ),
                            c("showTip");
                        },
                      }))),
              n.StockBridge.report(e, { stockid: r.symbol });
          },
          closePopup: function () {
            (m.value = !1),
              setTimeout(function () {
                p.value = !1;
              }, 300);
          },
        }
      );
    },
  }),
  i = n._export_sfc(r, [
    [
      "render",
      function (e, t, o, r, i, a) {
        return n.e(
          { a: e.showBar },
          e.showBar
            ? n.e(
                { b: e.toNeeq },
                e.toNeeq
                  ? { c: n.t(e.data.neeqname), d: n.t(e.data.neeqScode) }
                  : n.e(
                      { e: e.delisted },
                      (e.delisted || e.delisting || e.st, {}),
                      {
                        f: e.delisting,
                        g: e.st,
                        h: n.o(function (t) {
                          return e.showTip();
                        }, 2759),
                      }
                    ),
                { i: e.showPopup },
                e.showPopup
                  ? n.e(
                      { j: e.delisted },
                      (e.delisted || e.delisting || e.st, {}),
                      {
                        k: e.delisting,
                        l: e.st,
                        m: n.o(function (t) {
                          return e.closePopup();
                        }, 2760),
                        n: e.delisted,
                      },
                      (e.delisted || e.delisting || e.st, {}),
                      {
                        o: e.delisting,
                        p: e.st,
                        q: n.n(e.popupIn ? "slide-in" : "slide-out"),
                        r: n.o(function (e) {
                          return {};
                        }, 2761),
                        s: n.n(e.popupIn ? "fade-in" : "fade-out"),
                        t: n.o(function (t) {
                          return e.closePopup();
                        }, 2762),
                        v: n.o(function (e) {
                          return {};
                        }, 2763),
                      }
                    )
                  : {},
                {
                  w: e.isLite ? 1 : "",
                  x: n.o(function (t) {
                    return e.goDetail();
                  }, 2764),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-2cb7f082"],
  ]);
wx.createComponent(i);
