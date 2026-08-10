var e = require("../../../utils/getPlatform.js").getPlatform().bizPlatform,
  o = {
    chooseImage: "chooseImage",
    uploadImage: "uploadImage",
    downloadImage: "downloadImage",
    getLocalImgData: "getLocalImgData",
    doPay: "chooseWXPay",
    verifyPayPassword: "verifyWCPayPassword",
    chooseVideo: "chooseVideo",
    recordVideo: "recordVideo",
    uploadVideo: "uploadVideo",
    previewImage: "previewImage",
    hideMenuItems: "hideMenuItems",
    showMenuItems: "showMenuItems",
    hideOptionMenu: "hideOptionMenu",
    showOptionMenu: "showOptionMenu",
    scanQRCode: "scanQRCode",
    setShareInfo: ["onMenuShareTimeline", "onMenuShareAppMessage"],
    openUrlWithExtraWebview: "openUrlWithExtraWebview",
    requestWxFacePictureVerifyUnionVideo:
      "requestWxFacePictureVerifyUnionVideo",
    checkIsSupportFaceDetect: "checkIsSupportFaceDetect",
    requestWxFaceVerifyV2: "requestFacialVerify",
    checkIsSupportFaceVerifyV2: "checkIsSupportFaceDetect",
    requestWxFacePictureVerify: "requestWxFacePictureVerify",
    openHorizonWebView: ["openCustomWebview", "openWKWebView"],
    closeWindow: "closeWindow",
    disableBounceScroll: "disableBounceScroll",
    setPageTitle: "setPageTitle",
    bindNewCard: "getBrandWCPayBindCardRequest",
    makeVoIPCall: "startVoipCall",
    disableSetFontSize: "disableSetFontSize",
    setTitleButtons: "setTitleButtons",
    setWebViewBehavior: "setWebViewBehavior",
    setStatusBar: "setStatusBar",
    popBack: "popBack",
    getNetworkType: "getNetworkType",
    getInstallState: "getInstallState",
    redirect: "redirect",
    handleJSTouchEventFirst: "handleJSTouchEventFirst",
    setRefresh: "setRefresh",
    pageWillAppear: "pageWillAppear",
    pageWillDisAppear: "pageWillDisAppear",
    retainDialogCancel: "retainDialogCancel",
    clientinfo: "clientinfo",
    reportAppInfo: "reportAppInfo",
    uploadFile: "uploadFile",
    downloadFile: "downloadFile",
    previewMedia: "previewMedia",
    checkIsSupportFacialRecognition: "checkIsSupportFacialRecognition",
    getSystemInfo: "getSystemInfo",
    manageDealAccount: "manageDealAccount",
    applyAccountRetain: "applyAccountRetain",
    vibrate: "vibrate",
    requirePrivacyAuthorize: "requirePrivacyAuthorize",
    getLocation: "getLocation",
    openLocation: "openLocation",
    versionMap: {
      "h5-weixin": {
        recordVideo: { ios: "6.5.1", android: "6.5.1" },
        requestWxFacePictureVerifyUnionVideo: {
          ios: "6.5.14",
          android: "6.5.7",
        },
        openHorizonWebView: { ios: "6.5.8", android: "6.5.6" },
        openCustomWebview: { ios: "0.0.0", android: "6.5.6" },
        openWKWebView: { ios: "6.5.8", android: "0.0.0" },
      },
      zxg: { redirect: { ios: "5.15.0", android: "5.15.0" } },
    },
  };
(o.versionControl = o.versionMap[e] || {}),
  (o.fallback = function (o) {
    return function (t) {
      return "function" == typeof (t = t || {}).error
        ? (t.error({
            retcode: "EIMPLS",
            retmsg: "接口".concat(o, "在目前的平台上不适用"),
          }),
          !1)
        : Promise.reject({
            retcode: "EIMPLS",
            retmsg: "接口".concat(o, "在目前的平台").concat(e, "上不适用"),
          });
    };
  }),
  (o.fullfill = function (e) {
    var t = this;
    Object.keys(o).forEach(function (o) {
      if (!e[o]) {
        var i = t.fallback(o);
        (i.fallback = !0), (e[o] = i);
      }
    });
  });
var t = function (e, o) {
  for (
    var t = (e || "").split("."), i = (o || "").split("."), a = 0;
    a < t.length;
    a++
  ) {
    var r = parseFloat(t[a]),
      n = parseFloat(i[a]);
    if (r > n) return !0;
    if (r < n) return !1;
  }
  return !0;
};
Object.defineProperty(o, "version", {
  enumerable: !1,
  configurable: !1,
  get: function () {
    var o = "zxg" === e || "h5-weixin" === e;
    return ((o = new String(o)).compare = t.bind(null, o)), o;
  },
}),
  (exports.API = o);
