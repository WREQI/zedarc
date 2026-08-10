require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../common/vendor.js"),
  r = e.StockBridge.ENV === e.EnvTypeEnum.MP,
  t = ["stock"].includes("mpweapp");
exports.jumpStockDetail = function (o) {
  var a = o.market,
    c = o.scode;
  if (t)
    e.StockRouter.routeTo({ name: "HqStock", params: { market: a, code: c } });
  else {
    if (r) {
      var i = getCurrentPages(),
        u = i[i.length - 2];
      if (u) {
        var n = u.options || {};
        if (n.scode === c && String(n.market) === String(a))
          return void e.StockRouter.routeBack();
      }
    }
    e.StockRouter.routeTo({
      name: "stockdetail",
      query: { market: a, scode: c },
    });
  }
};
