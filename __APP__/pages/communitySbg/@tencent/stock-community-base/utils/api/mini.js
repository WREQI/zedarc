var e = require("../../../../../../common/vendor.js"),
  a = require("../knife.js"),
  o = require("../../../stock-hq-data/index.js");
function t(a) {
  var o = a.scode,
    t = a.market;
  if (window && window.wx && window.wx.miniProgram) {
    var n = e.StockBridge.getStorage("latestQuotePage") || {};
    if (n && n.scode === o && +n.market === t)
      return (
        window.wx.miniProgram.navigateBack(),
        e.StockBridge.setStorage("latestQuotePage", {}),
        !1
      );
  } else if (e.wx$1) {
    var i = getCurrentPages() || [];
    if (i.length > 1) {
      var r = i[i.length - 2] || {};
      if ("pages/quote/quote" === ((null == r ? void 0 : r.route) || "")) {
        var c = (null == r ? void 0 : r.options) || {};
        if (
          (null == c ? void 0 : c.scode) === o &&
          (null == c ? void 0 : c.market) &&
          +(null == c ? void 0 : c.market) === t &&
          e.wx$1
        )
          return e.wx$1.navigateBack(), !1;
      }
    }
  }
  return !0;
}
function n(e) {
  var n = e.code;
  if (n) {
    var i = n.substr(0, 2).toLocaleLowerCase(),
      r = k({ symbol: n }),
      c = r.scode,
      s = r.market;
    if (t({ scode: c, market: s })) {
      var d = "",
        l = ["p", "pt", "ph", "pu"].indexOf(i);
      (-1 === l &&
        -1 === ["sz", "sh", "hk", "us", "nq", "bj", "sp", "cs"].indexOf(i)) ||
        (l < 2 || o.utils.isHSMarket(s)
          ? (d = "/pages/quote/quote?scode=".concat(c, "&market=").concat(s))
          : l >= 2 &&
            (d = "/pages/market/pages/PlateList?plate="
              .concat([200, 200, 400, 601][l], "&code=")
              .concat(c)),
        a.navigateTo({ url: d }));
    }
  }
}
var i = function (e) {
    var o,
      t = e.code,
      n = e.name,
      i = ["sz", "sh", "hk", "us"],
      r =
        null == (o = null == t ? void 0 : t.substr(0, 2))
          ? void 0
          : o.toLocaleLowerCase(),
      c = "/pages/comment/comment?symbol="
        .concat(t, "&name=")
        .concat(n, "&market=")
        .concat(-1 === i.indexOf(r) ? r : i.indexOf(r));
    a.navigateTo({ url: c });
  },
  r = function (e) {
    var o = e.topicId,
      t = e.text,
      n = "/pages/comment/comment?topicId=".concat(o, "&topic=").concat(t);
    a.navigateTo({ url: n });
  },
  c = function () {
    a.navigateTo({ url: "/pages/additional/topicPlaza/topicPlaza" });
  },
  s = function (e) {
    var o = e.itemId,
      t = e.gdId,
      n = e.anchorId,
      i = "" + (t ? "&gdId=".concat(t) : ""),
      r = "/pages/comment/detailView/main?nid="
        .concat(o)
        .concat(
          n && n.length > 0 ? "&anchorId=".concat(n) : "",
          "&source=list&listname=community"
        )
        .concat(i);
    a.navigateTo({ url: r });
  },
  d = function (e) {
    var o = e.userId,
      t = "/pages/comment/personal/main?userId=".concat(encodeURIComponent(o));
    a.navigateTo({ url: t });
  },
  l = function (e) {
    var o = e.url;
    e.linkTradeAccount ||
      (o &&
        -1 === o.indexOf("/strategy/") &&
        /^http(s)?:\/\//.test(o) &&
        a.navigateTo({ url: o }));
  },
  g = function (e) {
    var o = e.newsid;
    if (/^SN/.test(o)) {
      var t = "/pages/newsCon/newsDetail/main?id=".concat(o, "&zxtype=1");
      a.navigateTo({ url: t });
    } else if (/^VD/.test(o)) {
      var n = "/pages/newsCon/video/videoDetail?newsId=".concat(o, "&zxtype=1");
      a.navigateTo({ url: n });
    }
  },
  u = function (e) {
    var o = e.newsid;
    if (o) {
      var t = "/pages/report/AIFinancial/index?id=".concat(o);
      a.navigateTo({ url: t });
    }
  },
  m = function (e) {
    var o = e.newsid,
      t = "/pages/report/morning/main?id=".concat(
        o,
        "&articleStyle=card&subtype=morningreportcard"
      );
    a.navigateTo({ url: t });
  },
  v = function (e) {
    var o = e.newsid,
      t = "/pages/report/morning/briefing?id=".concat(o || "");
    a.navigateTo({ url: t });
  },
  p = function (e) {
    var o = e || {},
      t = o.text,
      p = o.symbol,
      k = o.topicId,
      f = o.chaolian,
      w = o.userId,
      b = o.name,
      x = o.eventName,
      T = o.url,
      h = o.wxMiniUrl,
      I = o.newsid,
      q = o.linkTradeAccount;
    switch (x) {
      case "stock":
        i({ code: p, name: b });
        break;
      case "stockdetail":
        n({ code: p });
        break;
      case "topic":
        r({ topicId: k, text: t });
        break;
      case "plaza":
        c();
        break;
      case "detail":
        s(e);
        break;
      case "complaint":
        break;
      case "person":
        d({ userId: w });
        break;
      case "news":
        g(e);
        break;
      case "aiFinancialReport":
        u({ newsid: I });
        break;
      case "morningReport":
        m({ newsid: I });
        break;
      case "morningBriefing":
        v({ newsid: I });
        break;
      case "chaolian":
        h ? a.navigateTo({ url: h }) : l({ url: f || T, linkTradeAccount: q });
    }
  },
  k = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      a = e.symbol;
    if (!a) return { scode: "", market: "" };
    var o = ["sz", "sh", "hk", "us"],
      t = a.substr(0, 2).toLocaleLowerCase(),
      n = -1 === o.indexOf(t) ? t : o.indexOf(t),
      i = a.substr(2);
    return { scode: i.split(".")[0] ? i : i.replace(".", ""), market: n };
  },
  f = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        continueJumpToStockDetail: t,
        getStock: k,
        goAIFinancialReport: u,
        goChaolian: l,
        goDetail: s,
        goIndex: function () {
          a.navigateTo({ url: "/pages/square/index" });
        },
        goMorningBriefing: v,
        goMorningReport: m,
        goNewsDetail: g,
        goPageCommon: p,
        goPerson: d,
        goStockComment: i,
        goStockDetail: n,
        goStockDetailWithHqData: function (e) {
          if (e) {
            var o = e.market,
              t = e.scode,
              n = "/pages/quote/quote?scode=".concat(t, "&market=").concat(o);
            a.navigateTo({ url: n });
          }
        },
        goTopic: r,
        goTopicPlaza: c,
        goWatchList: function (e) {
          var o = e.gdId,
            t = "/pages/stockBasket/detail?gdId=".concat(o);
          a.navigateTo({ url: t });
        },
        gotoETFContestPage: function (e) {
          var o = e.wzqUrl;
          if (o && 0 !== o.length) {
            var t = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(o)
            );
            a.navigateTo({ url: t });
          }
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
(exports.goPageCommon = p), (exports.mini = f);
