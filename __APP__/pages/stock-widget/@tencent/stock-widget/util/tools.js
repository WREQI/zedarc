var e = require("../../../../../common/vendor.js"),
  r = require("../../stock-crypto-modules-config/dist/index.js"),
  a = require("./const.js");
(exports.getDefaultSetting = function () {
  return {
    fq: 1,
    trendline: !1,
    supportPressureLine: !1,
    gap: !1,
    lastestPrice: !1,
    remindPrice: !1,
    ds: !1,
    zx: !1,
    minsIndicator: "volume",
    mainIndicator: "ma",
    indicatorCount: 1,
    firstIndicator: "volume",
    secondIndicator: "macd",
    thirdIndicator: "kdj",
    fourthIndicator: "rsi",
    yangKStyle: { id: "solid", name: "实心阳线" },
    auctionMode: "close",
    miMaTypes: [5, 10, 20, 0, 0, 0, 0, 0, 0, 0],
    maTypes: [5, 10, 20, 30, 0, 0, 0, 0, 0, 0],
    maTemp: [],
    emaTypes: [12, 50, 0, 0, 0, 0, 0, 0, 0, 0],
    emaTemp: [],
    volumeTypes: [5, 10, 20, 0, 0],
    volumeTemp: [],
    cjeTypes: [5, 10, 20, 0, 0],
    cjeTemp: [],
    macdParams: { short: 12, long: 26, m: 9 },
    dmiParams: { n: 14, m: 6 },
    cciParams: { n: 14 },
    wrParams: { n1: 10, n2: 6 },
    bollParams: { deviation: 20, width: 2 },
    kdjParams: { n1: 9, n2: 3, n3: 3 },
    rsiParams: { n1: 6, n2: 12, n3: 24 },
    chartRatio: 100,
    foldState: !0,
    macdPattern: !1,
    magicNine: !1,
    tradeSecret: !1,
  };
}),
  (exports.getXGSign = function (n, t) {
    var i = [];
    for (var o in n) o && i.push("".concat(o, "=").concat(n[o]));
    if (t.__WZQ__ || t.__MP__)
      i.push("key=".concat(r.dist.SIGN_KEY.wzq_analyse));
    else if (t.isBroker) {
      var s = a.KEYENUM[t.isBroker] || window.$broker.appKey;
      i.push("key=".concat(s));
    } else i.push("key=".concat(r.dist.SIGN_KEY.xg));
    return e.md5Module(i.join("&"));
  });
