require("../../app.js");
var e,
  r,
  t,
  n = require("./PublicKey.js"),
  o = require("./rsaEncrypt.js"),
  c = require("./TimeSeed.js");
(exports.getEncrypt = function () {
  return r;
}),
  (exports.getEncryptExtra = function () {
    return t;
  }),
  (exports.getTimeSeed = function () {
    return e;
  }),
  (exports.resetkey = function (e) {
    var c = "1" === e.gm_check_sign_switch;
    (r =
      e.encrypt_method === n.EncryptMethod.SM
        ? new Sm2Encode(c)
        : new o.RsaEncode(c)).setKey(e.key),
      e.key_front_and_broker &&
        (t =
          e.encrypt_method === n.EncryptMethod.SM
            ? new Sm2Encode(c)
            : new o.RsaEncode(c)).setKey(e.key_front_and_broker);
  }),
  (exports.setSeed = function (r) {
    e = r ? new c.TimeSeed(r) : null;
  });
