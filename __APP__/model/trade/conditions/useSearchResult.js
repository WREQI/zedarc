require("../../../app.js");
var e = require("../../common/useVisibleControl.js"),
  r = require("../../../common/vendor.js");
exports.useSearchResult = function (c) {
  var a,
    n = null == (a = r.getCurrentInstance()) ? void 0 : a.proxy,
    t = e.useVisibleControl(),
    i = t.visible,
    l = t.hide,
    o = t.show;
  return {
    searching: i,
    hideSearch: l,
    showSearch: o,
    handleSearchStateChange: function (e) {
      e ? o() : l();
    },
    handleSearchResultClick: function (e) {
      "g" !== e.class
        ? (l(), c.clickCallback && c.clickCallback(e))
        : null == n ||
          n.$router.push({
            type: "redirectTo",
            name: "TradeDebt",
            query: { code: e.code, market: e.market },
          });
    },
  };
};
