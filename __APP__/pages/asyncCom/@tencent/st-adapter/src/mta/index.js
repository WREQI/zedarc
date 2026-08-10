var t = null,
  a = function () {
    if (!t) {
      var a = getApp();
      t = a && a.globalData;
    }
    if (t && t.WxRequest) return t.WxRequest.apply(this, arguments);
  },
  e = null,
  r = function (t, a, r) {
    if (!e) {
      var p = getApp();
      e = p && p.globalData;
    }
    e && e.reportMTADataMP && e.reportMTADataMP(t, a, r);
  };
(exports.reportMta = r), (exports.request = a);
