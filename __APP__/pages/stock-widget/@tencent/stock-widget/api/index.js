var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../../../@babel/runtime/helpers/createClass"),
  n = Object.defineProperty,
  c = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  p = function (e, t, o) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  u = require("../../../js-cookie/src/js.cookie.js");
require("../../../../../common/vendor.js");
var g = {}.IS_ZXG_XCX_ALLH5;
exports.StockAPiService = (function () {
  function n() {
    t(this, n);
  }
  return (
    o(n, null, [
      {
        key: "getMoneyFlows",
        value: function (e, t) {
          return t(
            "https://proxy.finance.qq.com/ifzqgtimg/appstock/fundflow/ShscFundflow/zjlx2",
            e,
            { method: "get" }
          );
        },
      },
      {
        key: "getMarketIndex",
        value: function (e, t) {
          return t(
            "https://proxy.finance.qq.com/cgi/cgi-bin/market/hs/index",
            e,
            { method: "get" }
          );
        },
      },
      {
        key: "getQuote",
        value: function (e, t) {
          return t(
            "https://proxy.finance.qq.com/cgi/cgi-bin/stockinfoquery/quote/app/get",
            e,
            { method: "get" }
          );
        },
      },
      {
        key: "getIndustryRank",
        value: function (e, t) {
          return t(
            "https://proxy.finance.qq.com/ifzqgtimg/appstock/fundflow/Fundflow/getHyRank",
            e,
            { method: "get" }
          );
        },
      },
      {
        key: "getPlateList",
        value: function (e, t) {
          return t(
            "https://proxy.finance.qq.com/cgi/cgi-bin/rank/hs/getBoardRankListForSNP",
            e,
            { method: "get" }
          );
        },
      },
      {
        key: "getDapanIndex",
        value: function (e) {
          return e(
            "https://proxy.finance.qq.com/cgi/cgi-bin/dapan/index",
            {},
            { method: "get" }
          );
        },
      },
      {
        key: "getPlateInfo",
        value: function (e, t) {
          return t("https://sqt.gtimg.cn/utf8", e, { method: "get" });
        },
      },
      {
        key: "getPlateStocks",
        value: function (e, t) {
          return t(
            "https://bisheng.tenpay.com/fcgi-bin/xg_plate_stocks.fcgi?fmt=json",
            e,
            { method: "post", dropCookie: !0 }
          );
        },
      },
      {
        key: "queryStockAdd",
        value: function (e, t) {
          var o = this.getParams(t),
            n = o.app,
            c = o.openId,
            r = o.fsKey,
            a = o.check,
            i =
              "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?app="
                .concat(n, "&appid=wx9cf8c670ebd68ce4&openid=")
                .concat(c, "&fskey=")
                .concat(r, "&check=")
                .concat(a);
          return t.request(i, e, {
            method: "post",
            isShowToast: !1,
            dropCookie: !0,
          });
        },
      },
      {
        key: "queryStocksAddStatus",
        value: function (e, t) {
          var o = this.getParams(t),
            n = o.app,
            c = o.openId,
            r = o.fsKey,
            a = o.check,
            i =
              "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd?stocks="
                .concat(e, "&app=")
                .concat(n, "&appid=wx9cf8c670ebd68ce4&check=")
                .concat(a, "&openid=")
                .concat(c, "&fskey=")
                .concat(r);
          return t.request(
            i,
            {},
            { method: "get", isShowToast: !1, dropCookie: !0 }
          );
        },
      },
      {
        key: "getPlateRelateFund",
        value: function (e, t) {
          return t(
            "https://proxy.finance.qq.com/cgi/cgi-bin/rank/fund/getList",
            e,
            { method: "get", isShowToast: !1 }
          );
        },
      },
      {
        key: "getParams",
        value: function (e) {
          var t,
            o,
            n,
            c = e.env,
            r = e.wx,
            a = c.__WZQ__,
            i = c.__MP__;
          return (
            a &&
              ((t = "wzq"),
              (o = u.cookie.get("wzq_qluin")),
              (n = u.cookie.get("wzq_qlskey"))),
            i &&
              r &&
              ((t = "zxg_xcx"),
              (o = r.getStorageSync("_qluin")),
              (n = r.getStorageSync("_qlskey"))),
            window && window.IS_WZQ_LIGHT
              ? (t = "mini_h5")
              : g && (t = "zxg_xcx"),
            { app: t, openId: o, fsKey: n, check: 11 }
          );
        },
      },
      {
        key: "getEtfRecommend",
        value: function () {
          var t,
            o,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            u = arguments.length > 1 ? arguments[1] : void 0,
            g = null == (t = this.getParams(u)) ? void 0 : t.openId,
            d =
              ((o = (function (t, o) {
                for (var n in o || (o = {})) i.call(o, n) && p(t, n, o[n]);
                if (a) {
                  var c,
                    r = e(a(o));
                  try {
                    for (r.s(); !(c = r.n()).done; ) {
                      n = c.value;
                      s.call(o, n) && p(t, n, o[n]);
                    }
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                }
                return t;
              })({}, n)),
              c(o, r({ openid: g })));
          return u.request(
            "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/board/getRecommendedETF",
            d,
            { method: "get", isShowToast: !1 }
          );
        },
      },
      {
        key: "queryNationalDebt",
        value: function (e) {
          var t = e.env,
            o =
              "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/ReverseRepo/get" +
              ((void 0 === t ? {} : t).__WZQ__ ? "?app=wzq" : "");
          return e.request(o, {}, { method: "get", isShowToast: !1 });
        },
      },
      {
        key: "getBrokerList",
        value: function (e, t) {
          var o = "https://wzq.tenpay.com/cgi-bin/zt_getbound.fcgi?check="
            .concat(e.check, "&fskey=")
            .concat(e.fskey, "&uin=")
            .concat(e.openid, "&openid=")
            .concat(e.openid);
          return t.request(o, {}, { method: "get", isShowToast: !1 });
        },
      },
      {
        key: "queryBrokerGoldStocks",
        value: function (e, t) {
          var o = t.env,
            n = (void 0 === o ? {} : o).__APP__,
            c =
              "https://snp.tenpay.com/cgi/cgi-bin/snp/news/brokerageStocks?id=".concat(
                e
              );
          return (
            n || (c = "".concat(c, "&app=wzq")),
            t.request(c, {}, { method: "get", isShowToast: !1 })
          );
        },
      },
      {
        key: "queryLongHu",
        value: function (e, t) {
          var o =
            "https://proxy.finance.qq.com/cgi/cgi-bin/longhubang/lhbDetail?tab="
              .concat(e.type, "&date=")
              .concat(e.date);
          return t.request(o, {}, { method: "get", isShowToast: !1 });
        },
      },
    ]),
    n
  );
})();
