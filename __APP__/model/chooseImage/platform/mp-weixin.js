var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/slicedToArray"),
  s = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  u = require("../../../@babel/runtime/helpers/createSuper");
require("../../../app.js");
var o = require("../../../common/vendor.js"),
  c = require("../../../service/sdk/lib/enum.js");
require("../../../service/sdk/lib/api.js"),
  require("../../../service/sdk/platform/mp-weixin.js");
var p = require("./base.js"),
  l = require("../../../config/enum.js"),
  h = require("../../../service/request/interceptors/handleSensitiveData.js"),
  m = require("../../../adapter/router.js"),
  d = (function (p) {
    n(S, p);
    var d,
      v,
      b = u(S);
    function S(e) {
      var r;
      return a(this, S), ((r = b.call(this)).fileName = e || ""), r;
    }
    return (
      i(S, [
        {
          key: "customChooseImage",
          value: function (e) {
            return new Promise(function (r, t) {
              var s = m
                .router()
                ._getRouterUrl({
                  name: "ApplyTakePhoto",
                  query: { side: e },
                }).url;
              o.index.navigateTo({
                url: s,
                events: {
                  acceptDataFromOpenedPage: function (e) {
                    e.tempFilePaths ? r(e) : t(e);
                  },
                },
                success: function (e) {
                  e.eventChannel.emit("acceptDataFromOpenerPage", {
                    data: "test",
                  });
                },
              });
            });
          },
        },
        {
          key: "capture",
          value:
            ((v = s(
              e().mark(function s(a) {
                var i, n, u, o, p, h, m, d;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((i = a.sourceType),
                            (n = a.side),
                            (u = a.useCustomChooseImage),
                            (o = void 0 !== u && u),
                            (e.prev = 1),
                            !o)
                          ) {
                            e.next = 8;
                            break;
                          }
                          return (e.next = 5), this.customChooseImage(n);
                        case 5:
                          (h = e.sent), (e.next = 12);
                          break;
                        case 8:
                          return (
                            "string" == typeof i && (i = [i]),
                            (e.next = 11),
                            this.$sdk.chooseImage({
                              count: 1,
                              sourceType: i || [
                                c.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
                                c.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
                              ],
                              sizeType: [
                                c.ENUM_SDK_CONSTANTS.QUALITY.COMPRESSED,
                              ],
                            })
                          );
                        case 11:
                          h = e.sent;
                        case 12:
                          return (
                            (m = h.tempFilePaths),
                            e.abrupt(
                              "return",
                              ((p = t(m, 1)),
                              (this.photoRes = p[0]),
                              this.photoRes)
                            )
                          );
                        case 16:
                          if (
                            ((e.prev = 16),
                            (e.t0 = e.catch(1)),
                            e.t0.retcode !== c.ENUM_SDK_RESULTS.CANCELED)
                          ) {
                            e.next = 20;
                            break;
                          }
                          throw r(
                            r({}, e.t0),
                            {},
                            { statusCode: l.MEDIA_STATUS.CANCEL }
                          );
                        case 20:
                          throw (
                            ((d = "选择图片时发生错误[wx]"),
                            (e.t0.errmsg || e.t0.errMsg).indexOf(
                              "system permission denied"
                            ) > -1 &&
                              (d = "系统权限被拒绝, 请在系统设置中打开权限"),
                            r(
                              r({}, e.t0),
                              {},
                              { retmsg: d, statusCode: l.MEDIA_STATUS.FAIL },
                              o ? { downgrade: !0 } : {}
                            ))
                          );
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  },
                  s,
                  this,
                  [[1, 16]]
                );
              })
            )),
            function (e) {
              return v.apply(this, arguments);
            }),
        },
        {
          key: "upload",
          value:
            ((d = s(
              e().mark(function r(t, s) {
                var a, i;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            this.$sdk.uploadImage({
                              url: t,
                              filePath: this.photoRes,
                              name: this.fileName,
                              formData: s,
                            })
                          );
                        case 3:
                          return (
                            (a = e.sent),
                            (i = h.handleDecodeFields(a, this.decodeFields)),
                            e.abrupt("return", Object.assign(a, i))
                          );
                        case 8:
                          throw (
                            ((e.prev = 8),
                            (e.t0 = e.catch(0)),
                            {
                              retmsg: e.t0.retmsg || "网络繁忙 请稍后再试",
                              statusCode: l.MEDIA_STATUS.FAIL,
                            })
                          );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  this,
                  [[0, 8]]
                );
              })
            )),
            function (e, r) {
              return d.apply(this, arguments);
            }),
        },
      ]),
      S
    );
  })(p.BaseChooseImage);
exports.MpWeinxin = d;
