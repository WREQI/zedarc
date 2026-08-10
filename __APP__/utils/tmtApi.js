var e,
  t = require("../@babel/runtime/helpers/typeof"),
  r = require("./qcloudApiV3.js");
var o = (function () {
    function e(e, t) {
      Error.call(this, t), (this.type = e), (this.message = t);
    }
    return (e.prototype = new Error()), (e.prototype.constructor = e), e;
  })(),
  n = function () {};
module.exports = {
  SetQCloudSecret: function (t, n) {
    if (!t || !n) throw new o("ERR_INVALID_PARAMS", "请传入云账号信息");
    e || (e = new r({ SecretId: t, SecretKey: n, path: "/" }));
  },
  doQueryTMT: function (r) {
    if ("object" !== t(r)) {
      var c = "请求传参应为 object 类型，但实际传了 " + t(r) + " 类型";
      throw new o("ERR_INVALID_PARAMS", c);
    }
    var s = r.success || n,
      i = r.fail || n,
      u = r.complete || n;
    delete r.SecretKey;
    var p = function (e) {
      i(e), u(arguments);
    };
    if (!e) throw new o("ERR_INVALID_PARAMS", "请传入云账号信息");
    e.request(
      r,
      { serviceType: "tmt", baseHost: "tencentcloudapi.com", method: "POST" },
      function (e, t) {
        var r;
        e
          ? p(e)
          : t && t.Response
          ? (console.log("queryTMT succ：", JSON.stringify(t.Response)),
            (function (e) {
              s(e), u(arguments);
            })(t))
          : ("请求Response为空",
            (r = new o("error", "请求Response为空")),
            p(r));
      }
    );
  },
};
