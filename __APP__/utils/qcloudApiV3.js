var e = require("./cryptojs"),
  t = require("./util"),
  o = require("./config"),
  r = {},
  n = function (e) {
    Object.assign(r, { path: "/", method: "POST", protocol: "https" }, e);
  };
(n.prototype.generateUrl = function (e) {
  e = e || {};
  var t = this._getHost(e),
    o = void 0 === e.path ? r.path : e.path;
  return (e.protocol || r.protocol) + "://" + t + o;
}),
  (n.prototype.generateQueryString = function (e, t) {
    t = t || r;
    var n = r;
    delete e.success, delete e.fail, delete e.complete;
    var a,
      s = Object.assign(
        {
          Region: r.Region,
          SecretId: t.SecretId || r.SecretId,
          Timestamp: Math.round(Date.now() / 1e3),
          Nonce: Math.round(65535 * Math.random()),
          Token: r.Token,
        },
        e
      ),
      c = !!e.Version,
      i = Object.keys(s),
      p = "",
      u = "",
      l = this._getHost(t),
      d = (t.method || n.method).toUpperCase(),
      h = void 0 === t.path ? n.path : t.path;
    return (
      i.sort(),
      i.forEach(function (e) {
        var t = s[e];
        (!c && "POST" === d && t && "@" === t[0]) ||
          ("" !== e &&
            ((null == t || ("number" == typeof t && isNaN(t))) && (t = ""),
            (p += "&" + (e.indexOf("_") ? e.replace(/_/g, ".") : e) + "=" + t),
            (u +=
              "&" +
              (e.indexOf("_") ? e.replace(/_/g, ".") : e) +
              "=" +
              encodeURIComponent(t))));
      }),
      (p = p.slice(1)),
      (u = u.slice(1)),
      (a = this.sign(d + l + h + "?" + p, t.SecretKey || n.SecretKey)),
      (s.Signature = a),
      o.GetQCloudSecret().openConsole &&
        console.log("signStr:", encodeURIComponent(a)),
      (u += "&Signature=" + encodeURIComponent(a))
    );
  }),
  (n.prototype.request = function (e, t, n, a) {
    "function" == typeof t && ((n = t), (t = r)),
      (t = t || r),
      (n = n || Function.prototype);
    var s = this.generateUrl(t),
      c = (t.method || r.method).toUpperCase(),
      i = this.generateQueryString(e, t),
      p = { url: s, method: c };
    "POST" === c || (p.url += "?" + i),
      Object.assign(p, a),
      o.GetQCloudSecret().openConsole && console.log("dataStr:", i),
      wx.request({
        url: p.url,
        data: i,
        method: c,
        header: { "content-type": "application/x-www-form-urlencoded" },
        success: function (e) {
          n(null, e.data);
        },
        fail: function (e) {
          n(e, null);
        },
      });
  }),
  (n.prototype.sign = function (r, n) {
    var a = e.HmacSHA1(r, n),
      s = t.toUint8Array(a),
      c = wx.arrayBufferToBase64(s);
    return (
      o.GetQCloudSecret().openConsole && console.log("wx.base64后：", c), c
    );
  }),
  (n.prototype._getHost = function (e) {
    var t = e.host;
    return (
      t ||
        (t =
          (e.serviceType || r.serviceType) + "." + (e.baseHost || r.baseHost)),
      t
    );
  }),
  (module.exports = n);
