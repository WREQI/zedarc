require("../app.js");
var i = require("./newstock.js");
(exports.confirmIpoWinPopupShown = function () {
  return i.newstockCgi.queryIPOedStock({ action: "confirm_ipo_win_tip" });
}),
  (exports.extractIpoWinPopup = function (i) {
    return i && "1" === i.ipo_win_tip && Array.isArray(i.ipo_win_list)
      ? i.ipo_win_list
      : [];
  });
