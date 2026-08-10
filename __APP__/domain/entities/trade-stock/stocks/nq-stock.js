var e = require("../../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../@babel/runtime/helpers/createClass"),
  t = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../../@babel/runtime/helpers/inherits"),
  u = require("../../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var s = Object.defineProperty,
  o = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? s(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      })(e, "symbol" != a(r) ? r + "" : r, i),
      i
    );
  },
  c = require("./a-stock.js");
require("../../../../common/vendor.js");
var l = require("../../../../config/enum/trade.js");
require("../../../../service/broker.js");
var p = require("../../../../config/enum.js"),
  h = require("../../../../config/broker/11100/index.js"),
  T = (function (a) {
    n(c, a);
    var s = u(c);
    function c() {
      var i, n;
      return (
        r(this, c),
        (n = s.apply(this, arguments)),
        o(t(n), "tradeHourMap", [p.MARKET_STATE.ALL_DAY_AUCTION]),
        o(
          t(n),
          "marketTips",
          (e(
            (i = {}),
            p.MARKET_STATE.NOT_TRADEDAY,
            "已休市，券商清算完成前/夜市委托开始前提交的订单将会失效，之后提交的订单将在下个交易日交易；"
          ),
          e(
            i,
            p.MARKET_STATE.NOT_OPEN,
            "未开市，现在发起的委托将在9:30开市后进行交易；"
          ),
          e(
            i,
            p.MARKET_STATE.SIESTA,
            "午间休市，现在发起的委托将在13:00开市后进行交易；"
          ),
          e(
            i,
            p.MARKET_STATE.CLOSED,
            "已休市，券商清算完成前/夜市委托开始前提交的订单将会失效，之后提交的订单将在下个交易日交易；"
          ),
          i)
        ),
        n
      );
    }
    return (
      i(c, [
        {
          key: "getLimitChg",
          value: function () {
            return { UP: 5, DOWN: -5 };
          },
        },
        {
          key: "hasPurchasePermission",
          value: function (e) {
            return e.authorities.gz === l.GZAccountStatus.opening
              ? [
                  !1,
                  {
                    retcode: "gz_auth_opening",
                    retmsg: h.brokerConfig.trade.checkNQAuthTips.GZAuthOpening,
                  },
                ]
              : e.authorities.gz === l.GZAccountStatus.not_open
              ? [
                  !1,
                  {
                    retcode: "gz_auth_notopen",
                    retmsg: h.brokerConfig.trade.checkNQAuthTips.noGZAuthTips,
                  },
                ]
              : [!0];
          },
        },
        {
          key: "hasTradeRisk",
          value: function (e) {
            return [!1];
          },
        },
        {
          key: "calcPriceCageLimit",
          value: function () {
            return { upPrice: 1 / 0, downPrice: -1 / 0 };
          },
        },
      ]),
      c
    );
  })(c.IStock);
exports.NQStock = T;
