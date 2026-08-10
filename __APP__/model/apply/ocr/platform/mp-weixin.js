var e = require("../../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../@babel/runtime/helpers/inherits"),
  i = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var c = require("../../../../common/vendor.js"),
  u = require("../../../../service/sdk/lib/enum.js");
require("../../../../service/sdk/lib/api.js"),
  require("../../../../service/sdk/platform/mp-weixin.js");
var o = require("./base.js"),
  p = require("../../../../config/enum.js"),
  h = require("../../../../service/request/interceptors/handleSensitiveData.js"),
  l = (function (o) {
    s(v, o);
    var l,
      d,
      m,
      b = i(v);
    function v() {
      return a(this, v), b.apply(this, arguments);
    }
    return (
      n(v, [
        {
          key: "ocr",
          value:
            ((m = t(
              r().mark(function e(t) {
                var a, n, s, i;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = t.ocrCgi),
                            (n = t.ocrData),
                            (s = t.hideLoading),
                            (e.prev = 1),
                            (e.next = 4),
                            this.capture()
                          );
                        case 4:
                          return (
                            (i = e.sent),
                            !0 !== s &&
                              c.index.showLoading({ title: "正在识别..." }),
                            (e.next = 8),
                            this.serverOcr(i, a, n)
                          );
                        case 8:
                          return e.abrupt("return", e.sent);
                        case 9:
                          return (
                            (e.prev = 9), c.index.hideLoading(), e.finish(9)
                          );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[1, , 9, 12]]
                );
              })
            )),
            function (e) {
              return m.apply(this, arguments);
            }),
        },
        {
          key: "capture",
          value:
            ((d = t(
              r().mark(function t() {
                var a, n, s;
                return r().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (r.next = 3),
                            this.$sdk.chooseImage({
                              count: 1,
                              sourceType: [
                                u.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
                                u.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
                              ],
                            })
                          );
                        case 3:
                          return (
                            (a = r.sent),
                            (n = a.tempFilePaths),
                            (s = void 0 === n ? [] : n),
                            r.abrupt("return", s[0])
                          );
                        case 9:
                          if (
                            ((r.prev = 9),
                            (r.t0 = r.catch(0)),
                            this.$log.error("pick pictre", r.t0),
                            r.t0.retcode !== u.ENUM_SDK_RESULTS.CANCELED)
                          ) {
                            r.next = 13;
                            break;
                          }
                          throw e(
                            e({}, r.t0),
                            {},
                            { statusCode: p.MEDIA_STATUS.CANCEL }
                          );
                        case 13:
                          throw e(
                            e({}, r.t0),
                            {},
                            {
                              retmsg: "选择图片时发生错误[wx]",
                              statusCode: p.MEDIA_STATUS.FAIL,
                            }
                          );
                        case 15:
                        case "end":
                          return r.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 9]]
                );
              })
            )),
            function () {
              return d.apply(this, arguments);
            }),
        },
        {
          key: "serverOcr",
          value:
            ((l = t(
              r().mark(function e(t, a, n) {
                var s, i, c, u, o, l, d, m;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            this.$sdk.uploadImage({
                              url: a,
                              filePath: t,
                              name: "file",
                              formData: n,
                            })
                          );
                        case 3:
                          if ("0" !== (s = e.sent).retcode) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (i = s.ocr_info),
                            (c = h.handleDecodeFields(i, [
                              "card_no_gm",
                              "valid_date_gm",
                              "card_no_image_gm",
                            ])),
                            (u = Object.assign(i, c)),
                            (o = u.bank_code),
                            (l = u.bank_name),
                            (d = u.card_no),
                            (m = u.card_no_image),
                            e.abrupt("return", {
                              ocrImg: m
                                ? "data:image/jpg;base64,".concat(m)
                                : t,
                              bankCode: o,
                              bankName: l,
                              cardNo: d,
                              isLocalImg: !m,
                            })
                          );
                        case 7:
                          throw s;
                        case 10:
                          throw (
                            ((e.prev = 10),
                            (e.t0 = e.catch(0)),
                            {
                              retmsg: e.t0.retmsg || "网络繁忙 请稍后再试",
                              statusCode: p.MEDIA_STATUS.FAIL,
                            })
                          );
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 10]]
                );
              })
            )),
            function (e, r, t) {
              return l.apply(this, arguments);
            }),
        },
      ]),
      v
    );
  })(o.Ocr);
exports.MpWeinxin = l;
