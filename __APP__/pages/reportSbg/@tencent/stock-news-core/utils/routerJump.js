var a = require("../../../../../common/vendor.js"),
  o = require("./market.js");
require("../../stock-news-sdk/index.js");
var t = {
  gotoDetail: function (t) {
    var e,
      n,
      i = t.stockid,
      r = (t.tabs, t.selectTab),
      d = void 0 === r ? "" : r,
      l = t.tabCurrentModule,
      s = void 0 === l ? "" : l,
      u = o.splitSymbol(i),
      c = u.market,
      w = u.scode,
      v = {
        url: "/pages/quote/quote?market="
          .concat(c, "&scode=")
          .concat(w, "&tab=")
          .concat(d, "&tabCurrentModule=")
          .concat(s),
      };
    a.wx$1 && a.wx$1.navigateTo
      ? a.wx$1.navigateTo(v)
      : null ==
          (n =
            null == (e = null == window ? void 0 : window.wx)
              ? void 0
              : e.miniProgram) || n.navigateTo(v);
  },
  goNewsDetail: function (o) {
    var t,
      e,
      n = o.id,
      i = o.stat_data,
      r = {
        url: "/pages/newsCon/newsDetail/main?id="
          .concat(n, "&stat_data=")
          .concat(i),
      };
    a.wx$1 && a.wx$1.navigateTo
      ? a.wx$1.navigateTo(r)
      : null ==
          (e =
            null == (t = null == window ? void 0 : window.wx)
              ? void 0
              : t.miniProgram) || e.navigateTo(r);
  },
};
exports.routerJump = t;
