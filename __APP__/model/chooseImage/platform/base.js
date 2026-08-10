var e = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../@babel/runtime/helpers/Objectentries");
var r = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  s = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var n = Object.defineProperty,
  a = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? n(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != s(r) ? r + "" : r, t),
      t
    );
  };
require("../../../service/sdk/lib/api.js");
var o = require("../../../service/sdk/platform/mp-weixin.js"),
  c = require("../../../service/log/index.js"),
  d = require("../../apply/profile/utils/index.js"),
  u = require("../../../service/request/utils.js"),
  l = require("../../../utils/getPlatform.js"),
  m = require("../../../service/cookie/mp-weixin.js"),
  p = require("../../../service/request/interceptors/handleSensitiveData.js"),
  g = new c.Log("chooseImage");
exports.BaseChooseImage = (function () {
  function s() {
    t(this, s),
      a(this, "$sdk", o.sdk),
      a(this, "$log", g),
      a(this, "photoRes", ""),
      a(this, "times", 1),
      a(this, "fileName", ""),
      a(this, "decodeFields", [
        "id_number_enc_gm",
        "name_enc_gm",
        "ocr_cred_address_enc_gm",
        "cred_address_enc_gm",
        "cred_valid_gm",
        "cred_authority_enc_gm",
      ]);
  }
  return (
    i(s, [
      {
        key: "setPhotoSrc",
        value: function (e) {
          this.photoRes = e;
        },
      },
      {
        key: "uploadByBase64",
        value: function (t, i) {
          var s = this;
          if (!/data:image\//.test(this.photoRes))
            throw { retcode: "EFILETYPEERR", retmsg: "file type isn't base64" };
          return new Promise(function (n, a) {
            var o;
            try {
              var c,
                g = l.getPlatform().isInMainXcx,
                h = new m.AdapterCookie(),
                b = new FormData(),
                v = new XMLHttpRequest();
              v.open("POST", t);
              var f = i;
              g && (f = r(r({}, h.getAll()), i || {})),
                b.append(
                  "file",
                  d.base64toBlob(
                    null == (o = s.photoRes) ? void 0 : o.split(",")[1],
                    "image/png"
                  )
                ),
                f &&
                  Object.entries(f).forEach(function (r) {
                    var t = e(r, 2),
                      i = t[0],
                      s = t[1];
                    b.append(i, s);
                  }),
                v.addEventListener("load", function () {
                  try {
                    var e = u.decodeHexadecimal(v.responseText);
                    c = JSON.parse(e);
                    var r = p.handleDecodeFields(c, s.decodeFields);
                    c = Object.assign(c, r);
                  } catch (e) {
                    return a({
                      retcode: "EUPLOADFAIL[-1]",
                      retmsg: "上传照片失败了 请稍后重试[-1]",
                      errMsg: JSON.stringify(e),
                    });
                  }
                  return 200 !== v.status
                    ? a({
                        retcode: "EUPLOADFAIL[-2]",
                        retmsg: "上传照片失败了 请稍后重试[-2]",
                      })
                    : "0" !== c.retcode
                    ? a({
                        retcode: "EUPLOADFAIL[retcode]",
                        retmsg: c.retmsg || "网络繁忙 请稍后再试",
                      })
                    : void n(c);
                }),
                v.addEventListener("abort", function () {
                  a({
                    retcode: "EUPLOADFAIL[-3]",
                    retmsg: "上传照片失败了 请稍后重试[-3]",
                  });
                }),
                v.addEventListener("error", function (e) {
                  a({
                    retcode: "EUPLOADFAIL[-4]",
                    retmsg: "上传照片失败了 请稍后重试[-4]",
                    errMsg: JSON.stringify(e),
                  });
                }),
                v.send(b);
            } catch (g) {
              a({
                retcode: "EUPLOADFAIL[any]",
                retmsg: g.retmsg || "上传照片失败了 请稍后重试",
                errMsg: JSON.stringify(g),
              });
            }
          });
        },
      },
    ]),
    s
  );
})();
