Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.request = function (e, n) {
    return new Promise(function (u, r) {
      var t = e.url,
        o = e.method,
        s = e.success,
        i = e.fail,
        l = e.header;
      null == n ||
        n.promise.then(function (e) {
          return r(e);
        }),
        wx.request({
          url: t,
          method: o,
          header: l,
          useHighPerformanceMode: !0,
          enableHttp2: !0,
          enableQuic: !0,
          success: function (e) {
            u((null == s ? void 0 : s(e)) || e);
          },
          fail: function (e) {
            r((null == i ? void 0 : i(e)) || e);
          },
        });
    });
  });
