require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../service/cookie/mp-weixin.js"),
  c = require("../../config/key.js"),
  t = e.__CJS__export_SM4IV__;
function n() {
  var t = new r.AdapterCookie().get(c.SESSION_UIN);
  return e.md5("".concat(t));
}
(exports.decrypt = function (r) {
  return e.src.sm4.decrypt(r, n(), { padding: "pkcs#7", mode: "cbc", iv: t });
}),
  (exports.encrypt = function (r) {
    var c = r;
    try {
      c = e.src.sm4.encrypt(r, n(), { mode: "cbc", iv: t });
    } catch (e) {}
    return c;
  });
