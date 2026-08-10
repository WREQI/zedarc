var e = require("../@babel/runtime/helpers/objectSpread2"),
  t = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  n = require("../@babel/runtime/helpers/inherits"),
  i = require("../@babel/runtime/helpers/createSuper"),
  u = require("../config/cgi.js"),
  s = require("../model/trade/useHistory.js"),
  c = (function (c) {
    n(a, c);
    var o = i(a);
    function a() {
      return t(this, a), o.apply(this, arguments);
    }
    return (
      r(a, [
        {
          key: "newIncomeinfo",
          value: function (e) {
            return this.request("income_home.fcgi", e);
          },
        },
        {
          key: "newIncomeCurve",
          value: function (e) {
            return this.request("income_curve.fcgi", e);
          },
        },
        {
          key: "newIncomeTrade",
          value: function (e) {
            return this.request("income_trade.fcgi", e);
          },
        },
        {
          key: "newStockIncome",
          value: function (e) {
            return this.request("stockincome_review.fcgi", e);
          },
        },
        {
          key: "newStockIncomeDetail",
          value: function (e) {
            return this.request("stockincome_detail.fcgi", e);
          },
        },
        {
          key: "stockInfo",
          value: function (e) {
            return this.request("stock_info.fcgi", e);
          },
        },
        {
          key: "stockInfomation",
          value: function (e) {
            return this.request("stock_info.fcgi", e);
          },
        },
        {
          key: "queryPointedDateTradeData",
          value: function (t) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return this.request(
              u.API_TRADE_COUNT,
              e(
                {
                  page_num: 0,
                  page_size: 2,
                  query_date: t,
                  type: s.STATE_TYPE.COMPLETE,
                },
                r
              )
            );
          },
        },
        {
          key: "incomeReportInfo",
          value: function (e) {
            var t = e.report_id,
              r = e.action;
            return this.request(u.INCOME_REPORTINFO, {
              report_id: t,
              action: r,
            });
          },
        },
        {
          key: "incomeReportList",
          value: function (e) {
            var t = e.action,
              r = e.page_num,
              n = e.page_size;
            return this.request(u.INCOME_REPORTLIST, {
              action: t,
              page_num: r,
              page_size: n,
            });
          },
        },
        {
          key: "incomeCalendar",
          value: function (e) {
            return this.request("income_calendar.fcgi", e);
          },
        },
        {
          key: "incomeAssetsList",
          value: function (e) {
            return this.request("income_assets.fcgi", e);
          },
        },
        {
          key: "incomeAssetInfo",
          value: function (e) {
            return this.request("income_asset.fcgi", e);
          },
        },
      ]),
      a
    );
  })(require("./base.js").BaseAPI);
exports.AssetAnalysisAPI = c;
