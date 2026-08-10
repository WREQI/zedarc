var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  c = function (e, a, o) {
    return a in e
      ? t(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[a] = o);
  },
  n = function (t, n) {
    for (var i in n || (n = {})) o.call(n, i) && c(t, i, n[i]);
    if (a) {
      var s,
        u = e(a(n));
      try {
        for (u.s(); !(s = u.n()).done; ) {
          i = s.value;
          r.call(n, i) && c(t, i, n[i]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return t;
  },
  i = require("../../stock-hq-data/index.js"),
  s = require("./common.js");
(exports.gotoHangqingxinzhaiDetail = function (e, t) {
  var a = e.ENV,
    o = t || {},
    r = o.market,
    c = o.type,
    i = o.name,
    s = o.symbol,
    u = o.listCode,
    l = o.StockCode,
    p = o.isPurchase;
  if ("app" === a) {
    var m = s;
    switch (r) {
      case "hk":
        m = u;
        break;
      case "us":
        m = l;
    }
    var y = "detail?market="
      .concat(r, "&type=")
      .concat(c, "&symbol=")
      .concat(m);
    i && (y = "".concat(y, "&name=").concat(i)),
      p && (y = "".concat(y, "&isPurchase=").concat(p));
    var h = encodeURIComponent(
      JSON.stringify({
        p_key: "com.tencent.shy.daxin_calendar",
        p_url: y,
        p_showNav: !0,
      })
    );
    e.routeTo({ url: "qqstock://shy?info=".concat(h) });
  } else {
    var b;
    switch (r) {
      case "hs":
        b = { name: i, symbol: s };
        break;
      case "hk":
        b = { symbol: u };
        break;
      case "us":
        b = { symbol: l };
    }
    "mp" === a
      ? e.routeTo({
          path: "/pages/marketDx/DxDetailPage",
          query: n({ market: r, type: c, isPurchase: p }, b),
        })
      : e.routeTo({
          path: "/hangqingxinzhaidetail",
          query: n({ market: r, type: c, isPurchase: p }, b),
        });
  }
  "mini" === a && e.report("hq.daxin_page.goto_daxin_detail");
}),
  (exports.gotoQuoteDetail = function (e, t, a) {
    var o = e.ENV,
      r = t || {},
      c = r.market,
      n = r.type,
      u = r.symbol,
      l = r.listName;
    e.report("hq.xingurili.goto_cixin_".concat(c, "_").concat(n));
    var p = i.utils.splitSymbol(u),
      m = p.market,
      y = p.scode;
    a
      ? s.goToMiniAppQuote(m, y)
      : ("mp" === o &&
          e.routeTo({
            path: "/pages/quote/quote",
            query: { market: m, scode: y },
          }),
        "wzq" === o &&
          e.routeTo({ path: "/hq/stock/".concat(m, "/").concat(y) }),
        "oem" === o &&
          e.routeTo({ path: "/detail", query: { market: m, scode: y } }),
        "app" === o &&
          e.routeTo({
            url: "qqstock://detailstock/".concat(u, "/").concat(l),
          }));
  });
