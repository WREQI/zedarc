var e = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../common/vendor.js"),
  r = { headers: { "Content-Type": "application/json" } };
exports.StockAPiService = (function () {
  function c() {
    e(this, c);
  }
  return (
    t(c, null, [
      {
        key: "queryPriceRemind",
        value: function (e, t) {
          var n =
            "https://wzq.tenpay.com/cgi-bin/querypriceremind.fcgi?smartswitch=1";
          return "wzq_light" === t.ENV && window.$request
            ? window.$request(n, e, { method: "get" })
            : t.request(n, "get", e);
        },
      },
      {
        key: "updatePriceRemind",
        value: function (e, t) {
          return t(
            "https://wzq.tenpay.com/cgi-bin/updatepriceremind.fcgi?smartswitch=1",
            "post",
            e
          );
        },
      },
      {
        key: "queryStockinfo",
        value: function (e, t) {
          return t("https://wzq.tenpay.com/cgi-bin/stockinfo.fcgi", "post", e);
        },
      },
      {
        key: "queryMainInflow",
        value: function (e, t) {
          return t(
            "https://wzq.tenpay.com/cgi-bin/openapi_zxgplat.fcgi?action=hsfundtab",
            "post",
            e
          );
        },
      },
      {
        key: "queryHkMainInflow",
        value: function (e, t) {
          return t(
            "https://wzq.tenpay.com/cgi/cgi-bin/fundflow/hkff",
            "get",
            e
          );
        },
      },
      {
        key: "deletePriceRemind",
        value: function (e, t) {
          return t(
            "https://wzq.tenpay.com/cgi-bin/deletepriceremind.fcgi?smartswitch=1",
            "get",
            e
          );
        },
      },
      {
        key: "QueryStockAlert",
        value: function (e) {
          return n.StockBridge.request(
            "https://wzq.tenpay.com/svr/stock/alert/query",
            n.RequestTypeEnum.POST,
            e,
            r
          );
        },
      },
      {
        key: "SetStockAlert",
        value: function (e) {
          return n.StockBridge.request(
            "https://wzq.tenpay.com/svr/stock/alert/set",
            n.RequestTypeEnum.POST,
            e,
            r
          );
        },
      },
      {
        key: "DeleteStockAlert",
        value: function (e) {
          return n.StockBridge.request(
            "https://wzq.tenpay.com/svr/stock/alert/delete",
            n.RequestTypeEnum.POST,
            e,
            r
          );
        },
      },
      {
        key: "CloseStockAlert",
        value: function (e) {
          return n.StockBridge.request(
            "https://wzq.tenpay.com/svr/stock/alert/close",
            n.RequestTypeEnum.POST,
            e,
            r
          );
        },
      },
      {
        key: "OpenStockAlert",
        value: function (e) {
          return n.StockBridge.request(
            "https://wzq.tenpay.com/svr/stock/alert/open",
            n.RequestTypeEnum.POST,
            e,
            r
          );
        },
      },
    ]),
    c
  );
})();
