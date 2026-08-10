var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  n = function (e, o, r) {
    return o in e
      ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[o] = r);
  },
  i = function (t, i) {
    for (var p in i || (i = {})) r.call(i, p) && n(t, p, i[p]);
    if (o) {
      var s,
        a = e(o(i));
      try {
        for (a.s(); !(s = a.n()).done; ) {
          p = s.value;
          c.call(i, p) && n(t, p, i[p]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return t;
  },
  p = require("../../../js-cookie/src/js.cookie.js"),
  s = require("../../stock-hq-core/utils/storage/local.js"),
  a = require("../../../../../common/vendor.js"),
  g = require("../../stock-base/service/common/sign.js"),
  u = {
    getHotStock: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/HotStock/getHotStock2",
        "get",
        i(i({}, t), q())
      );
    },
    getWxHotStock: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/HotStock/getWxHotStock",
        "get",
        i(i({}, t), q())
      );
    },
    getHotStockDetail: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/HotStock/getHotStockDetail",
        "get",
        i(i({}, t), q())
      );
    },
    getPlateRank: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/HotStock/getHotRankBK",
        "get",
        i(i({}, t), q())
      );
    },
    getEtfRank: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/mktJJ/hotFund",
        "get",
        i(i({}, t), q())
      );
    },
    getNewsRank: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/HotStock/getHotNews",
        "get",
        i(i({}, t), q())
      );
    },
    getSearchResult: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/cgi/cgi-bin/smartbox/search",
        "get",
        i(i({}, t), q()),
        { forceCallback: !0 }
      );
    },
    addUserStock: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
        "get",
        i(i({}, t), q())
      );
    },
    getSearchInfo: function (e, t) {
      return e.request(
        "https://wzq.tenpay.com/ifzqgtimg/appstock/smartbox/search/getSearchNews",
        "get",
        t
      );
    },
    getSearchIndex: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/cgi/cgi-bin/smartbox/index",
        "get",
        i(i({}, t), q())
      );
    },
    getAiGuess: function (e, t) {
      return e.request(
        "https://proxy.finance.qq.com/cgi/cgi-bin/openai/query/guess",
        "GET",
        g.getSignV3({
          data: i(i({}, t), q()),
          method: "get",
          origin: a.OriginTypeEnum.mpweapp,
          t: new Date().getTime(),
        })
      );
    },
  },
  q = function () {
    if (a.StockBridge.ENV === a.EnvTypeEnum.MP)
      return {
        check: 11,
        app: a.OriginTypeEnum.mpweapp,
        appid: "wx4ffb369b6881ee5e",
        openid: s.sls.getItem("_qluin"),
        fskey: s.sls.getItem("_qlskey"),
      };
    if (a.StockBridge.ENV === a.EnvTypeEnum.WZQ) {
      return {
        app: "wzq",
        appid: "wx9cf8c670ebd68ce4",
        openid: p.cookie.get("wzq_qluin"),
        fskey: p.cookie.get("wzq_qlskey"),
        access_token: p.cookie.get("wzq_qlskey"),
        check: 11,
        _h5ver: "2.0.1",
      };
    }
    return {
      check: 11,
      app: "mini_h5",
      appid: "wx9cf8c670ebd68ce4",
      openid: p.cookie.get("wzq_qluin"),
      fskey: p.cookie.get("wzq_qlskey"),
    };
  };
exports.serviceApi = u;
