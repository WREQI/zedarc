var e = require("../@babel/runtime/helpers/objectSpread2"),
  t = require("./crypto-js"),
  o = require("./config"),
  n = {},
  r = function (e) {
    Object.assign(n, { path: "/", method: "POST", protocol: "https" }, e);
  };
function c(e) {
  var t = (function (e) {
      var t = e.host;
      t ||
        (t =
          (e.serviceType || n.serviceType) + "." + (e.baseHost || n.baseHost));
      return t;
    })((e = e || {})),
    o = void 0 === e.path ? n.path : e.path;
  return (e.protocol || n.protocol) + "://" + t + o;
}
function i(e, o, n) {
  delete o.success, delete o.fail, delete o.complete;
  var r =
      "POST\n/\n\n" +
      "content-type:application/json\nhost:"
        .concat(null == e ? void 0 : e.serviceType, ".")
        .concat(null == e ? void 0 : e.baseHost, "\n") +
      "\ncontent-type;host\n" +
      t.SHA256(JSON.stringify(o)),
    c = Math.ceil(n / 1e3),
    i = (function (e) {
      var t = new Date(e),
        o = t.getUTCFullYear(),
        n = ("0" + (t.getUTCMonth() + 1)).slice(-2),
        r = ("0" + t.getUTCDate()).slice(-2);
      return "".concat(o, "-").concat(n, "-").concat(r);
    })(n),
    a = i + "/" + (null == e ? void 0 : e.serviceType) + "/tc3_request",
    s = "TC3-HMAC-SHA256\n" + c + "\n" + a + "\n" + t.SHA256(r);
  function l(e, o) {
    return t.HmacSHA256(o, e);
  }
  var u = l("TC3" + (null == e ? void 0 : e.SecretKey), i),
    p = l(u, null == e ? void 0 : e.serviceType),
    d = l(p, "tc3_request"),
    T = t.HmacSHA256(s, d);
  return (
    "TC3-HMAC-SHA256 Credential=" +
    (null == e ? void 0 : e.SecretId) +
    "/" +
    a +
    ", SignedHeaders=content-type;host, Signature=" +
    T
  );
}
(r.prototype.request = function (t, r, a, s) {
  "function" == typeof r && ((a = r), (r = n)),
    (r = e(e({}, n), r)),
    (a = a || Function.prototype);
  var l = c(r),
    u = (r.method || n.method).toUpperCase(),
    p = Date.now(),
    d = { url: l, method: u },
    T = {
      Authorization: i(r, t, p),
      Host: "".concat(r.serviceType, ".").concat(r.baseHost),
      "Content-Type": "application/json",
      "X-TC-Action": r.Action,
      "X-TC-Timestamp": Math.ceil(p / 1e3).toString(),
      "X-TC-Version": r.Version,
      "X-TC-Region": r.Region,
    };
  r.Token && (T["X-TC-Token"] = r.Token);
  var v = {
    url: l,
    method: "post",
    header: T,
    data: t,
    timeout: 1e4,
    success: function (e) {
      a(null, e.data);
    },
    fail: function (e) {
      a(e, null);
    },
  };
  if ((Object.assign(d, s), o.GetQCloudSecret().openConsole)) {
    var h = {};
    for (var C in t) "Data" !== C && (h[C] = t[C]);
    console.log("req", h);
  }
  wx.request(v);
}),
  (module.exports = r);
