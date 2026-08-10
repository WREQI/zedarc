var n = require("../../common/vendor.js");
(exports.usePageLifeTime = function () {
  return {
    handleLoad: function () {},
    handleShow: function () {},
    handleReady: function () {},
    handleHide: function () {},
    handleUnload: function () {},
    handleRouteDone: function () {},
    handlePullDownRefresh: function () {},
    handleReachBottom: function () {},
    handlePageScroll: function () {},
    handleResize: function () {},
    handleShareAppMessage: function () {},
  };
}),
  (exports.usePluginInfo = function (e) {
    return {
      isZhongXin: n.computed(function () {
        return e.value.code === n.BROKER_CODE.ZHONGXIN;
      }),
      isHuaLin: n.computed(function () {
        return e.value.code === n.BROKER_CODE.HUALIN;
      }),
      isHaiTong: n.computed(function () {
        return e.value.code === n.BROKER_CODE.HAITONG;
      }),
      isGuangFa: n.computed(function () {
        return e.value.code === n.BROKER_CODE.GUANGFA;
      }),
      isZhaoShang: n.computed(function () {
        return e.value.code === n.BROKER_CODE.ZHAOSHANG;
      }),
      isGuoXin: n.computed(function () {
        return e.value.code === n.BROKER_CODE.GUOXIN;
      }),
      isZhongXinJianTou: n.computed(function () {
        return e.value.code === n.BROKER_CODE.ZHONGXINJIANTOU;
      }),
      isZhongJinCaiFu: n.computed(function () {
        return e.value.code === n.BROKER_CODE.ZHONGJINCAIFU;
      }),
      isGuoJin: n.computed(function () {
        return e.value.code === n.BROKER_CODE.GUOJIN;
      }),
      isHengTai: n.computed(function () {
        return e.value.code === n.BROKER_CODE.HENGTAI;
      }),
      isZhongShan: n.computed(function () {
        return e.value.code === n.BROKER_CODE.ZHONGSHAN;
      }),
      currentTradePluginName: n.computed(function () {
        return n.TRADE_PLUGIN_NAME_MAP[e.value.code];
      }),
    };
  });
