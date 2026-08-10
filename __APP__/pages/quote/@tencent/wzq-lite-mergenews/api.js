var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  i = function (t, i) {
    for (var c in i || (i = {})) n.call(i, c) && s(t, c, i[c]);
    if (r) {
      var p,
        a = e(r(i));
      try {
        for (a.s(); !(p = a.n()).done; ) {
          c = p.value;
          o.call(i, c) && s(t, c, i[c]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return t;
  },
  c = require("../../../../common/vendor.js"),
  p = require("../stock-crypto-modules-config/dist/index.js"),
  a = require("../stock-hq-core/config/const.js");
(exports.getBigEvents = function (e, t) {
  var r = c.getApiFullUrl(
    "cgi/cgi-bin/bigevent/getBigEventV2",
    c.API_HOST_ENUM.PROXY_QQ
  );
  return e
    .request(
      r,
      "post",
      i(
        {
          app:
            "mp" === e.ENV
              ? a.SOURCEENUM.MP
              : a.SOURCEENUM[c.isBroker] || a.SOURCEENUM.DEFAULT,
        },
        t
      )
    )
    .then(function (e) {
      return e.data || {};
    })
    .catch(function (e) {
      return e;
    });
}),
  (exports.getHotSpotInfo = function (e, t) {
    t.sign = (function (e) {
      var t = Object.assign({}, { _h5ver: "2.0.1" }, e),
        r = [];
      for (var n in t) n && r.push("".concat(n, "=").concat(t[n]));
      return (
        r.push("key=".concat(p.dist.SIGN_KEY.wzq_analyse)),
        c.md5Module(r.join("&")).toLowerCase()
      );
    })(t);
    var r = c.getApiFullUrl("stockpicking_plat.fcgi", c.API_HOST_ENUM.WZQ);
    return e
      .request("".concat(r, "?action=xg_plate_news_hotspot.fcgi"), "post", t)
      .then(function (e) {
        return e;
      });
  }),
  (exports.getInformationNew = function (e, t) {
    var r = e.ENV,
      n = t || {},
      o = n.symbol,
      s = n.page_start,
      i = n.type,
      p = n.offset,
      u = void 0 === p ? "" : p,
      f = n.req_session,
      l = c.getApiFullUrl(
        "cgi/cgi-bin/news/info/search",
        c.API_HOST_ENUM.PROXY_QQ
      ),
      g = {
        symbol: o,
        type: i,
        n: 10,
        page: s,
        offset: u,
        get_import: 0,
        scene: "stock",
        req_session: f || "",
        reserve: "wzq" === r && 2 === i ? "2102275" : "",
        app: t.app ? t.app : a.SOURCEENUM[c.isBroker] || a.SOURCEENUM.DEFAULT,
      };
    return e.request(l, "post", g);
  }),
  (exports.getInvestRate = function (e, t) {
    var r = c.getApiFullUrl(
      "ifzqgtimg/appstock/app/investRate/getInvestRate?&symbol=".concat(t),
      c.API_HOST_ENUM.PROXY_QQ
    );
    return e
      .request(r)
      .then(function (e) {
        return e.data || {};
      })
      .catch(function (e) {
        return e;
      });
  }),
  (exports.getMergeNewsInfo = function (e, t) {
    var r = i(
      {
        check: 11,
        get_import: 0,
        type: 3,
        n: 20,
        req_session: t.req_session || "",
        reserve: "4297069571",
      },
      t
    );
    return e.request(
      "https://proxy.finance.qq.com/cgi/cgi-bin/news/info/news",
      "post",
      r,
      { forceCallback: !0 }
    );
  }),
  (exports.getNewsInfo = function (e, t) {
    var r = e.ENV,
      n = t || {},
      o = n.symbol,
      s = n.page_start,
      i = n.type,
      p = n.offset,
      u = void 0 === p ? "" : p,
      f = n.req_session,
      l = n.last_score,
      g = n.top_importance,
      _ = void 0 === g ? 0 : g,
      E = n.importance_num,
      v = void 0 === E ? 0 : E,
      U = c.getApiFullUrl(
        "cgi/cgi-bin/news/info/news",
        c.API_HOST_ENUM.PROXY_QQ
      ),
      m = {
        symbol: o,
        type: i,
        n: 10,
        page: s,
        app: t.app ? t.app : a.SOURCEENUM[c.isBroker] || a.SOURCEENUM.DEFAULT,
        offset: u,
        get_import: 0,
        scene: "stock",
        last_score: l,
        top_importance: _,
        req_session: f || "",
        reserve: "wzq" === r && 2 === i ? "2102275" : "",
        importance_num: v,
      };
    return e.request(U, "post", m);
  });
