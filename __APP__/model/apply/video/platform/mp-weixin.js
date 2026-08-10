var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var u = require("../../../../common/vendor.js"),
  l = require("./base.js"),
  o = require("../../../../service/sdk/lib/enum.js"),
  c = require("../../../../cgi/apply.js"),
  h = (function (l) {
    a(m, l);
    var h,
      p = n(m);
    function m() {
      var e;
      return (
        i(this, m),
        ((e = p.call(this)).srcType = o.ENUM_SDK_CONSTANTS.RESOURCE_TYPE.PATH),
        e
      );
    }
    return (
      s(m, [
        {
          key: "capture",
          value: function (e) {
            throw new Error("Method not implemented.");
          },
        },
        {
          key: "setVideoPath",
          value: function (e) {
            this.videoRes = e;
          },
        },
        {
          key: "upload",
          value:
            ((h = t(
              e().mark(function t(i) {
                var s,
                  a,
                  n = arguments;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (s = n.length > 1 && void 0 !== n[1] ? n[1] : {}),
                            u.index.showLoading({ title: "上传中", mask: !0 }),
                            (e.prev = 2),
                            (e.next = 5),
                            this.$sdk.uploadFile({
                              url: i,
                              filePath: this.videoRes,
                              name: "file",
                              formData: r(r({}, s), {}, { src: c.RES_SRC.H5 }),
                            })
                          );
                        case 5:
                          if ("0" !== (a = e.sent).retcode) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt("return", this.verifyVideo(a));
                        case 8:
                          throw a;
                        case 11:
                          throw (
                            ((e.prev = 11),
                            (e.t0 = e.catch(2)),
                            u.index.hideLoading(),
                            r(
                              r({}, e.t0),
                              {},
                              {
                                retmsg:
                                  e.t0.retmsg || "上传视频失败了 请稍后重试",
                                retmsgHtml: e.t0.retmsgHtml,
                              }
                            ))
                          );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this,
                  [[2, 11]]
                );
              })
            )),
            function (e) {
              return h.apply(this, arguments);
            }),
        },
      ]),
      m
    );
  })(l.BaseVideo);
exports.MpVideo = h;
