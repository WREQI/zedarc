var e,
  r = require("../@babel/runtime/helpers/objectSpread2"),
  t = require("../@babel/runtime/helpers/typeof"),
  o = require("./sendYunAPIRequestV3"),
  n = require("./config");
var s = (function () {
    function e(e, r) {
      Error.call(this, r), (this.type = e), (this.message = r);
    }
    return (e.prototype = new Error()), (e.prototype.constructor = e), e;
  })(),
  c = function () {};
module.exports = {
  SetQCloudSecret: function (r) {
    if (!r.secretid || !r.secretkey)
      throw new s("ERR_INVALID_PARAMS", "请传入云账号信息");
    var t = { SecretId: r.secretid, SecretKey: r.secretkey, path: "/" };
    r.token && (t.Token = r.token), e || (e = new o(t));
  },
  doQuerySentence: function (o, i) {
    if ("object" !== t(o)) {
      var u = "请求传参应为 object 类型，但实际传了 " + t(o) + " 类型";
      throw new s("ERR_INVALID_PARAMS", u);
    }
    var p = o.success || c,
      a = o.fail || c,
      l = o.complete || c;
    delete o.SecretKey;
    var f = function (e) {
      a(e), l(arguments);
    };
    if (!e) throw new s("ERR_INVALID_PARAMS", "请传入云账号信息");
    e.request(
      o,
      r(
        { serviceType: "asr", baseHost: "tencentcloudapi.com", method: "POST" },
        i
      ),
      function (e, r) {
        var t;
        e
          ? f(e)
          : r && r.Response
          ? (n.GetQCloudSecret().openConsole &&
              console.log("doQuery succ：", JSON.stringify(r.Response)),
            (function (e) {
              p(e), l(arguments);
            })(r))
          : ("请求Response为空",
            (t = new s("error", "请求Response为空")),
            f(t));
      }
    );
  },
};
