var S = require("./constants.js"),
  _ = require("../../utils/market.js");
function N(S, _) {
  var N;
  if (
    null == (N = null == navigator ? void 0 : navigator.userAgent)
      ? void 0
      : N.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  )
    return screen.width === S && screen.height === _;
}
N(812, 375) || N(896, 414),
  (exports.getChartScale = function (N, I) {
    return _.isKeChuangStock(N)
      ? S.SCALES_KCH
      : _.isChuangYeStock(N)
      ? S.SCALES_CHY
      : {
          0: S.SCALES_HS,
          1: S.SCALES_HS,
          2: S.SCALES_HK,
          14: S.SCALES_HK,
          3: S.SCALES_US,
          p: S.SCALES_PT,
        }[I];
  }),
  (exports.getRenderPoint = function (N) {
    return _.isHSPlate(N)
      ? [
          S.POINT_PLATE_MINUS,
          S.POINT_ASHARE_FMINUS,
          S.POINT_KLINE,
          S.POINT_KLINE_LANDSCAPE,
        ]
      : _.isSHMarket(N)
      ? [
          S.POINT_ASHARE_MINUS,
          S.POINT_ASHARE_FMINUS,
          S.POINT_KLINE,
          S.POINT_KLINE_LANDSCAPE,
          S.POINT_KC_ASHARE_MINS,
        ]
      : _.isSZMarket(N)
      ? [
          S.POINT_ASHARE_MINUS,
          S.POINT_ASHARE_FMINUS,
          S.POINT_KLINE,
          S.POINT_KLINE_LANDSCAPE,
          S.POINT_CY_ASHARE_MINS,
        ]
      : _.isHKMarket(N)
      ? [
          S.POINT_HKSHARE_MINUS,
          S.POINT_HKSHARE_FMINUS,
          S.POINT_KLINE,
          S.POINT_KLINE_LANDSCAPE,
        ]
      : _.isUSMarket(N)
      ? [
          S.POINT_USSHARE_MINUS,
          S.POINT_USSHARE_FMINUS,
          S.POINT_KLINE,
          S.POINT_KLINE_LANDSCAPE,
        ]
      : _.isBJMarket(N) || _.isNQMarket(N)
      ? [
          S.POINT_ASHARE_MINUS,
          S.POINT_ASHARE_FMINUS,
          S.POINT_KLINE,
          S.POINT_KLINE_LANDSCAPE,
        ]
      : void 0;
  }),
  (exports.getTradeUnit = function (S, N) {
    return _.isKeChuangStock(S)
      ? "股"
      : { 0: "手", 1: "手", 2: "股", 3: "股", 12: "股", 14: "股", p: "手" }[N];
  }),
  (exports.uniqChartID = function (_, N) {
    return (
      S.ID_CHART.indexOf(_) >= 0 || (_ = S.ID_CHART[_]),
      N ? "".concat(_, "_").concat(S.fqPY[N]) : _
    );
  }),
  (exports.uniqStockID = function (S) {
    return "".concat(S.scode, "_").concat(S.market);
  });
