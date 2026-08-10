require("../../independentpack/@babel/runtime/helpers/Arrayincludes"),
  Page({
    data: { url: "", shareInfo: null },
    onLoad: function (e) {
      if (e && e.url) {
        var n = wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene,
          t = "";
        (t =
          e.url.indexOf("%252526") >= 0
            ? decodeURIComponent(e.url) +
              "%2526scene%253D" +
              n +
              "%2526xcx_scene%253D" +
              n +
              "%2526srcsite%253Dzxgxcx_h5%2526" +
              encodeURIComponent("__mina_container__=independent")
            : decodeURIComponent(e.url) +
              "&scene=" +
              n +
              "&xcx_scene=" +
              n +
              "&srcsite=zxgxcx_h5&__mina_container__=independent"),
          this.setData({ url: t });
      }
    },
    onMessage: function (e) {
      var n,
        t = null === (n = e.detail) || void 0 === n ? void 0 : n.data;
      if (t && t.length > 0) {
        var a = t[t.length - 1];
        ("share" === a.type || a.link) && this.setData({ shareInfo: a });
      }
    },
    onShareAppMessage: function () {
      var e = this.data,
        n = e.shareInfo,
        t = e.url;
      if (n) {
        var a = n.share_url_mina || n.path || n.link || "";
        if (a && a.includes("pages/act/webview/main")) {
          var i = a.match(/url=([^&]+)/);
          i && (a = "independentpack/webview/index?url=".concat(i[1]));
        }
        return (
          a &&
            !/^(pages|independentpack)\//.test(a) &&
            (a = "independentpack/webview/index?url=".concat(
              encodeURIComponent(a)
            )),
          a ||
            (a = "independentpack/webview/index?url=".concat(
              encodeURIComponent(t)
            )),
          a && !a.startsWith("/") && (a = "/".concat(a)),
          {
            title: n.share_title || n.title || "腾讯自选股",
            path: a,
            imageUrl: n.share_image_wx || n.imageUrl || n.imgUrl || "",
          }
        );
      }
      return {
        title: "腾讯自选股",
        path: "/independentpack/webview/index?url=".concat(
          encodeURIComponent(t)
        ),
      };
    },
    onWebViewError: function (e) {
      console.error("[异常监控] WebView独立分包加载失败:", e.detail),
        wx.setStorageSync("independent/webview", e.detail),
        wx.redirectTo({
          url: "/pages/additional/webview/index?url=https%3A%2F%2Fwzq.tenpay.com%2Fwzq%2Ffront%2Faics%2F%23%2FaiserviceV2%2Fhome%3Fchannel%3D14%26channel%3D14%26from_pagedo%3D1%26random%3D1741071782780%26contextPath%3Daics-cloud%26_%3D1741071782599%26entry%3Dwzq_my_account%26stat_data%3DIHR00p000r006%26type%3Dchat",
        });
    },
  });
