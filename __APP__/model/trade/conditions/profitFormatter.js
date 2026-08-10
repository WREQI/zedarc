require("../../../app.js"),
  (exports.orderProfitFormatter = function (r) {
    var t = null;
    return (
      r.run_day &&
        0 != +r.run_day &&
        (t = {
          runningDays: "".concat(r.run_day, "天"),
          transactionNum: r.trade_num ? "".concat(r.trade_num, "笔") : "",
          profit: r.total_income ? "".concat(r.total_income) : "",
        }),
      t
    );
  });
