var t = require("../../../../../../common/vendor.js"),
  e = t.StockBridge.ENV === t.EnvTypeEnum.MP ? "mpweapp" : "mini_h5";
(exports.getAnnouncementList = function (n) {
  var c =
    "https://proxy.finance.qq.com/ifzqgtimg/appstock/news/noticeList/searchByType?symbol="
      .concat(n.symbol, "&page=")
      .concat(n.pageIndex, "&n=20&noticeType=1&app=")
      .concat(e);
  return t.StockBridge.request(c, "GET");
}),
  (exports.getPDFcontent = function (n) {
    var c =
      "https://proxy.finance.qq.com/ifzqgtimg/appstock/news/content/content?id="
        .concat(n, "&app=")
        .concat(e);
    return t.StockBridge.request(c, "GET");
  }),
  (exports.getSummaryDetail = function (n) {
    var c =
      "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finance/summaryDetail?symbol="
        .concat(n.symbol, "&app=")
        .concat(e);
    return t.StockBridge.request(c, "GET", {}, { forceCallback: !0 });
  });
