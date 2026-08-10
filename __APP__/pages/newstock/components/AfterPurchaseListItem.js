var e = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../app.js");
var t = require("../../../common/vendor.js"),
  r = require("../../../cgi/types/newstock.js"),
  o = require("../../../model/newstock/useNewStockBooking.js"),
  n = require("../../../common/components/Dialog/index.js"),
  a = {
    name: "AfterPurchaseListItem",
    props: {
      canBook: { type: Boolean, required: !0 },
      stockList: { type: Array, required: !0 },
      debtList: { type: Array, required: !0 },
    },
    setup: function (a) {
      var c = t.inject("goToDetails"),
        s = t.inject("stockPickerIndex"),
        i = t.inject("onStockPickerChange"),
        u = t.inject("onDebtPickerClick"),
        p = t.inject("solutionHanlder"),
        h = t.inject("selectHandler"),
        l = t.computed(function () {
          return [e(a.stockList), e(a.debtList)];
        });
      return {
        EPurchaseType: r.EPurchaseType,
        EConvType: r.EConvType,
        EPurchaseStatus: r.EPurchaseStatus,
        showExplain: o.showExplain,
        listObj: l,
        goToDetails: c,
        formatUnit: o.formatUnit,
        stockPickerIndex: s,
        onStockPickerChange: i,
        onDebtPickerClick: u,
        formatMarketTag: o.formatMarketTag,
        solutionHanlder: p,
        selectHandler: h,
        explainDialog: function () {
          n.Dialog({
            title: "最优可申购额度",
            messageType: "html",
            message:
              "<p>因实际新股申购日，您的配售额度可能与当日预约时有差异，在实际申购日，默认将以“最优额度”进行预约申购。</p><p>最优可申购额度是指单只新股将按照申购当日的最大可申购数量进行申购，即选择“申购配额”与“申购上限”的最小值。</p>",
            messageAlign: "justify",
          });
        },
      };
    },
  };
Array || t.resolveComponent("Empty")(), Math;
var c = t._export_sfc(a, [
  [
    "render",
    function (e, r, o, n, a, c) {
      return t.e(
        {
          a: t.t(o.canBook ? "当前可预约" : "暂不可预约"),
          b: !(o.stockList.length + o.debtList.length),
        },
        o.stockList.length + o.debtList.length
          ? {
              d: t.f(n.listObj, function (r, a, c) {
                return t.e(
                  { a: r.length },
                  r.length
                    ? {
                        b: t.t(0 === a ? "新股" : "新债"),
                        c: t.f(r, function (a, c, s) {
                          return t.e(
                            {
                              a: t.t(n.formatMarketTag(a)),
                              b: t.t(a.stock_name),
                              c: t.t(a.purchase_code),
                              d: t.t(e.$filters.marketId(a.market, ".")),
                              e: t.o(function (e) {
                                return n.goToDetails(a);
                              }, a.purchase_code),
                              f: a.purchase_type !== n.EPurchaseType.DEBT,
                            },
                            a.purchase_type !== n.EPurchaseType.DEBT
                              ? {
                                  g: t.t(a.comparable_company || "暂无"),
                                  h: t.o(function (e) {
                                    return n.goToDetails(a);
                                  }, a.purchase_code),
                                }
                              : {},
                            o.canBook
                              ? {
                                  i: a.selected ? 1 : "",
                                  j: t.o(function (e) {
                                    return n.selectHandler(a, a.selected);
                                  }, a.purchase_code),
                                }
                              : {},
                            {
                              k: t.t(a.issue_price),
                              l: t.t(
                                a.purchase_type !== n.EPurchaseType.DEBT
                                  ? "发行市盈率"
                                  : "转股溢价率"
                              ),
                              m: t.o(function (e) {
                                return n.showExplain(a.purchase_type);
                              }, a.purchase_code),
                              n: a.purchase_type !== n.EPurchaseType.DEBT,
                            },
                            a.purchase_type !== n.EPurchaseType.DEBT
                              ? {
                                  o: t.t(
                                    a.issue_price_earning_ratio &&
                                      "-" !== a.issue_price_earning_ratio
                                      ? a.issue_price_earning_ratio
                                      : "--"
                                  ),
                                }
                              : {
                                  p: t.t(
                                    e.$filters.postfix(
                                      a.premium_rate && "-" !== a.premium_rate
                                        ? a.premium_rate
                                        : "--",
                                      ":percent:"
                                    )
                                  ),
                                },
                            o.canBook
                              ? t.e(
                                  {
                                    q: t.o(function () {
                                      return (
                                        n.explainDialog &&
                                        n.explainDialog.apply(n, arguments)
                                      );
                                    }, a.purchase_code),
                                    r: a.purchase_type !== n.EPurchaseType.DEBT,
                                  },
                                  a.purchase_type !== n.EPurchaseType.DEBT
                                    ? {
                                        s: t.t(
                                          0 === a._purchaseAmount
                                            ? "最优额度"
                                            : n.formatUnit(
                                                a._purchaseAmount,
                                                a.purchase_type
                                              )
                                        ),
                                        t: n.stockPickerIndex(a),
                                        v: a._optionsArr,
                                        w: t.o(function (e) {
                                          return n.onStockPickerChange(e, a);
                                        }, a.purchase_code),
                                      }
                                    : {
                                        x: t.t(
                                          0 === a._purchaseAmount
                                            ? "最优额度"
                                            : n.formatUnit(
                                                a._purchaseAmount,
                                                a.purchase_type
                                              )
                                        ),
                                        y: t.o(function (e) {
                                          return n.onDebtPickerClick(a);
                                        }, a.purchase_code),
                                      }
                                )
                              : {
                                  z: t.t(
                                    n.formatUnit(
                                      a.purchase_amount_upper_limit,
                                      a.purchase_type
                                    )
                                  ),
                                },
                            {
                              A: t.t(
                                e.$filters.date(a.purchase_date, "YYYY-MM-DD")
                              ),
                            },
                            o.canBook
                              ? {}
                              : {
                                  B: t.t(
                                    a.notbook.text ||
                                      "未知错误[".concat(
                                        a.purchase_status || 0,
                                        "]"
                                      )
                                  ),
                                  C: t.n(
                                    a.notbook.text && a.notbook.handle
                                      ? ["icon", "icon-arrow"]
                                      : ""
                                  ),
                                  D: a.notbook.highLight ? 1 : "",
                                  E: t.o(function (e) {
                                    return n.solutionHanlder(a);
                                  }, a.purchase_code),
                                },
                            { F: a.purchase_code, G: c < r.length - 1 ? 1 : "" }
                          );
                        }),
                        d: o.canBook,
                        e: o.canBook,
                        f: o.canBook ? "" : 1,
                        g: !o.canBook,
                        h: 0 === a ? 1 : "",
                        i: o.canBook ? "" : 1,
                      }
                    : {},
                  { j: a }
                );
              }),
            }
          : { c: t.p({ text: "暂无新股/新债可预约" }) }
      );
    },
  ],
  ["__scopeId", "data-v-2cc34f3b"],
]);
wx.createComponent(c);
