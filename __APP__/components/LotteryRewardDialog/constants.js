require("../../app.js");
var e = require("../../common/vendor.js");
require("../../service/broker.js");
var t = require("../../utils/index.js"),
  s = require("../../config/broker/11100/index.js"),
  c = {
    shareLogo:
      "https://wzqimg.gtimg.cn/jsclient/wzqimg/imageCDN/wzqresource/lottery-logo.png",
    defaultAvatar:
      "https://st.gtimg.com/design/7469e93cf198f3dc6658978a3e9aec3c.png",
    cardBgSimple:
      "https://st.gtimg.com/design/c739367cdb546ee4bf4e661292db61b4.png",
    cardBgClassic:
      "https://st.gtimg.com/design/7e63cb30ccc09bce33506366fc4202e8.png",
    shareBack:
      "https://st.gtimg.com/design/e7115932762587d1cf1bfd4e43371785.png",
    shareClose:
      "https://st.gtimg.com/design/465c22e3cdfbdca11996fa7f74d7fe57.png",
    shareBgClassic:
      "https://st.gtimg.com/design/9f4ff48883959c474be1beddd6c0e398.png",
    shareBgSimple:
      "https://st.gtimg.com/design/da69304d9b98c2b83703b517c93d8a9e.png",
  },
  r = {
    wx: "5002000331",
    pyq: "5002000332",
    qq: "5002000333",
    qzone: "5002000334",
  },
  g = {
    sh: "https://st.gtimg.com/design/e2690eb5c3a9da4a7d2c9b8642aec5e3.png",
    sz: "https://st.gtimg.com/design/6f9cc5d5ad397921f8d404cdfb3dc04e.png",
    ke: "https://st.gtimg.com/design/3441e9271daaf25c9159d9026db946a6.png",
    zhai: "https://st.gtimg.com/design/9746cf8f3e5d11da9f12abb1902260c6.png",
  };
(exports.ACTIVE_SCALE = 1),
  (exports.AUTOPLAY_START_DELAY = 1500),
  (exports.FADEOUT_DURATION = 167),
  (exports.FLY_DURATION = 320),
  (exports.IMAGES = c),
  (exports.INACTIVE_SCALE = 0.9),
  (exports.MARKET_LOGOS = g),
  (exports.NICKNAME_MAX_LEN = 20),
  (exports.getDefaultShareQrUrl = function () {
    return "https://"
      .concat(s.brokerConfig.base.domain)
      .concat(t.getStaticPath(), "#/newstock/index?stat_data=OyI00p000d053");
  }),
  (exports.getZxgChannelShareQrUrl = function (e) {
    var t = r[e];
    return t
      ? "https://gu.qq.com/resource/jump/m.htm?immediate=0&number=".concat(t)
      : "";
  }),
  (exports.preloadShareAssets = function () {
    try {
      [
        c.shareBack,
        c.shareClose,
        c.shareBgClassic,
        c.shareBgSimple,
        c.defaultAvatar,
        g.sh,
        g.sz,
        g.ke,
        g.zhai,
      ].forEach(function (t) {
        e.index.getImageInfo({
          src: t,
          success: function () {},
          fail: function () {},
        });
      });
    } catch (e) {}
  }),
  (exports.resolveMarketLogoKey = function (e, t) {
    var s = String(e || ""),
      c = String(t || "");
    return "k" === c || "GP-A-KCB" === c
      ? "ke"
      : "1" === c || "g" === c || "s" === c || "z" === c
      ? "zhai"
      : "7" === c || ("0" === c && "1" === s)
      ? "sh"
      : "2" === c || "3" === c || "6" === c || ("0" === c && "0" === s)
      ? "sz"
      : "sh";
  });
