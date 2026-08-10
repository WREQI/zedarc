(exports.getMarketIcon = function (s) {
  if (!s) return "";
  var t = s.toLowerCase();
  return (
    {
      sz: "https://wzq.gtimg.com/resources/shy/news/roundangle/sz.png",
      sh: "https://wzq.gtimg.com/resources/shy/news/roundangle/sh.png",
      hk: "https://wzq.gtimg.com/resources/shy/news/roundangle/hk.png",
      us: "https://wzq.gtimg.com/resources/shy/news/roundangle/us.png",
      uk: "https://wzq.gtimg.com/resources/shy/news/roundangle/uk.png",
      cnjj: "https://wzq.gtimg.com/resources/shy/news/roundangle/cnjj.png",
      kc: "https://wzq.gtimg.com/resources/shy/news/roundangle/kc.png",
      zq: "https://wzq.gtimg.com/resources/shy/news/roundangle/zq.png",
      nq: "https://wzq.gtimg.com/resources/shy/news/roundangle/nq.png",
      jj: "https://wzq.gtimg.com/resources/shy/news/roundangle/cwjj.png",
      pt: "https://wzq.gtimg.com/resources/shy/news/roundangle/bk.png",
      ft: "https://wzq.gtimg.com/resources/shy/news/roundangle/ft.png",
      fu: "https://wzq.gtimg.com/resources/shy/news/roundangle/ft.png",
      bj: "https://wzq.gtimg.com/resources/shy/news/roundangle/bj.png",
      cyb: "https://wzq.gtimg.com/resources/shy/news/roundangle/cyb.png",
      "zs-hs": "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hs.png",
      "zs-hk": "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hk.png",
      "zs-us": "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-us.png",
      "zs-uk": "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-uk.png",
      "zs-nq": "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-nq.png",
      "zs-hq": "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hq.png",
      cs: "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hq.png",
      sp: "https://st.gtimg.com/design/c99493c9093f704f5d16c687bdb13cf3.png",
    }[
      t.startsWith("cnjj")
        ? t.substr(0, 4)
        : t.startsWith("cyb")
        ? t.substr(0, 3)
        : t.startsWith("zs-")
        ? t.substr(0, 5)
        : t.substr(0, 2)
    ] || ""
  );
}),
  (exports.isBJMarket = function (s) {
    return "bj" === s;
  }),
  (exports.isCSMarket = function (s) {
    return "cs" === s;
  }),
  (exports.isDAX30 = function (s) {
    return "ftDAX30" === s;
  }),
  (exports.isHKMarket = function (s) {
    return 2 == +s;
  }),
  (exports.isHKPlate = function (s) {
    return "ph" === s;
  }),
  (exports.isHSMarket = function (s) {
    return (
      (function (s) {
        return 1 == +s;
      })(s) ||
      (function (s) {
        return 0 == +s;
      })(s)
    );
  }),
  (exports.isHSPlate = function (s) {
    return "p" === s || "pt" === s;
  }),
  (exports.isSPMarket = function (s) {
    return "sp" === s;
  }),
  (exports.isUSMarket = function (s) {
    return 3 == +s;
  }),
  (exports.isUSPlate = function (s) {
    return "pu" === s;
  }),
  (exports.splitSymbol = function (s) {
    var t = s.slice(0, 2),
      n = ["sz", "sh", "hk", "us"].indexOf(t);
    return { market: -1 === n ? t : "".concat(n), scode: s.slice(2) };
  });
