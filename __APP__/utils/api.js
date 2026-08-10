module.exports = {
  getServerTime: function (t) {
    return new Promise(function (e, n) {
      try {
        wx.request({
          url: "https://asr.cloud.tencent.com/server_time",
          data: t,
          method: "GET",
          dataType: "json",
          success: function (t) {
            t && t.data ? e(t && t.data) : n(t);
          },
          fail: function (t) {
            n(t);
          },
        });
      } catch (t) {
        n(t);
      }
    });
  },
};
