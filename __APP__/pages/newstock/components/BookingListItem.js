require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../cgi/types/newstock.js"),
  t = require("../../../model/newstock/useNewStockBooking.js"),
  o = {
    stock_name: "BookingListItem",
    props: {
      purchaseType: { required: !0, type: String },
      bookingList: { required: !0, type: Array },
    },
    setup: function () {
      var o = e.inject("goToDetails");
      return {
        showExplain: t.showExplain,
        EPurchaseType: r.EPurchaseType,
        formatUnit: t.formatUnit,
        goToDetails: o,
        noop: e.noop,
      };
    },
  },
  s = e._export_sfc(o, [
    [
      "render",
      function (r, t, o, s, n, a) {
        return {
          a: e.t(
            o.purchaseType !== s.EPurchaseType.DEBT ? "股票名称" : "债券名称"
          ),
          b: e.t(
            o.purchaseType !== s.EPurchaseType.DEBT
              ? "发行价/市盈率"
              : "转股溢价率"
          ),
          c: e.o(function (e) {
            return s.showExplain(o.purchaseType);
          }),
          d: e.f(o.bookingList, function (t, n, a) {
            return e.e(
              {
                a: e.t(t.stock_name),
                b: e.t(t.purchase_code),
                c: e.t(r.$filters.marketId(t.market, ".")),
              },
              o.purchaseType !== s.EPurchaseType.DEBT
                ? {
                    d: e.t(t.issue_price),
                    e: e.t(
                      t.issue_price_earning_ratio &&
                        "-" !== t.issue_price_earning_ratio
                        ? t.issue_price_earning_ratio
                        : "--"
                    ),
                  }
                : {
                    f: e.t(
                      r.$filters.postfix(
                        t.premium_rate && "-" !== t.premium_rate
                          ? t.premium_rate
                          : "--",
                        ":percent:"
                      )
                    ),
                  },
              {
                g: e.t(
                  "0" === t.purchase_quantity
                    ? "最优额度"
                    : s.formatUnit(t.purchase_quantity, t.purchase_type)
                ),
                h: e.t(r.$filters.date(t.purchase_date, "MM-DD")),
                i: "2" === t.shown_book_status,
              },
              "2" === t.shown_book_status
                ? {
                    j: e.o(function () {
                      return s.noop && s.noop.apply(s, arguments);
                    }, t.purchase_code),
                  }
                : {
                    k: e.o(function (e) {
                      return r.$emit("cancel", t);
                    }, t.purchase_code),
                  },
              {
                l: t.purchase_code,
                m: n < o.bookingList.length - 1 ? 1 : "",
                n: e.o(function (e) {
                  return s.goToDetails(t);
                }, t.purchase_code),
              }
            );
          }),
          e: o.purchaseType !== s.EPurchaseType.DEBT,
        };
      },
    ],
    ["__scopeId", "data-v-244b07e7"],
  ]);
wx.createComponent(s);
