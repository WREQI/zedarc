require("../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var o = Object.defineProperty,
  u = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? o(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != a(r) ? r + "" : r, t),
      t
    );
  },
  c = require("../../../../common/vendor.js"),
  d = require("../../../../service/sdk/lib/enum.js");
require("../../../../service/sdk/lib/api.js");
var l = require("../../../../service/sdk/platform/mp-weixin.js"),
  p = require("../../../../cgi/apply.js"),
  m = require("../../profile/utils/index.js"),
  v = require("../../../../service/aegis/platform/not-wujie.js"),
  h = require("../../../../utils/getPlatform.js"),
  f = require("../../../../service/cookie/mp-weixin.js");
exports.BaseVideo = (function () {
  function a() {
    n(this, a),
      u(this, "$sdk", l.sdk),
      u(this, "times", 0),
      u(this, "videoRes", ""),
      u(this, "srcType");
  }
  var o;
  return (
    s(a, [
      {
        key: "upload",
        value:
          ((o = i(
            e().mark(function i(n) {
              var s,
                a,
                o,
                u = this,
                l = arguments;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (s = l.length > 1 && void 0 !== l[1] ? l[1] : {}),
                          (a =
                            l.length > 2 && void 0 !== l[2]
                              ? l[2]
                              : p.RES_SRC.H5),
                          c.index.showLoading({ title: "上传中", mask: !0 }),
                          (o = this.videoRes),
                          e.abrupt(
                            "return",
                            (this.srcType ===
                              d.ENUM_SDK_CONSTANTS.RESOURCE_TYPE.BASE64 &&
                              (o = m.base64toBlob(
                                this.videoRes.replace(
                                  "data:video/mp4;base64,",
                                  ""
                                ),
                                "video/mp4"
                              )),
                            new Promise(function (e, i) {
                              try {
                                var d,
                                  l = h.getPlatform(),
                                  p = l.isInMainXcx,
                                  m = l.isBrokerXcx,
                                  b = new f.AdapterCookie(),
                                  g = new FormData(),
                                  E = new XMLHttpRequest();
                                E.open("POST", n),
                                  g.append("file", o),
                                  g.append("src", a);
                                var O = s;
                                (p || m) && (O = t(t({}, b.getAll()), s || {})),
                                  O &&
                                    Object.entries(O).forEach(function (e) {
                                      var t = r(e, 2),
                                        i = t[0],
                                        n = t[1];
                                      g.append(i, n);
                                    }),
                                  E.addEventListener("load", function () {
                                    c.index.hideLoading();
                                    try {
                                      d = JSON.parse(E.responseText);
                                    } catch (e) {
                                      return (
                                        v.aegisReporter.reportEvent(
                                          "ERR-VIDEO-UPLOAD-1",
                                          { ext2: JSON.stringify(e) }
                                        ),
                                        i({
                                          retcode: "EUPLOADFAIL[-1]",
                                          retmsg:
                                            "上传视频失败了 请稍后重试[-1]",
                                        })
                                      );
                                    }
                                    if (200 !== E.status || "0" !== d.retcode)
                                      return (
                                        v.aegisReporter.reportEvent(
                                          "ERR-VIDEO-UPLOAD-2",
                                          {
                                            ext2: "statusCode: "
                                              .concat(E.status, ", retcode: ")
                                              .concat(d.retcode),
                                          }
                                        ),
                                        i({
                                          retcode: "EUPLOADFAIL[-2]",
                                          retmsg:
                                            d.retmsg ||
                                            "上传视频失败了 请稍后重试[-2]",
                                        })
                                      );
                                    try {
                                      var r = u.verifyVideo(d);
                                      e(r);
                                    } catch (e) {
                                      i(e);
                                    }
                                  }),
                                  E.addEventListener("abort", function () {
                                    c.index.hideLoading(),
                                      v.aegisReporter.reportEvent(
                                        "ERR-VIDEO-UPLOAD-3"
                                      ),
                                      i({
                                        retcode: "EUPLOADFAIL[-3]",
                                        retmsg: "上传视频失败了 请稍后重试[-3]",
                                      });
                                  }),
                                  E.addEventListener("error", function (e) {
                                    c.index.hideLoading(),
                                      v.aegisReporter.reportEvent(
                                        "ERR-VIDEO-UPLOAD-4",
                                        { ext2: JSON.stringify(e) }
                                      ),
                                      i({
                                        retcode: "EUPLOADFAIL[-4]",
                                        retmsg: "上传视频失败了 请稍后重试[-4]",
                                      });
                                  }),
                                  E.send(g);
                              } catch (e) {
                                c.index.hideLoading(),
                                  v.aegisReporter.reportEvent(
                                    "ERR-VIDEO-UPLOAD-UNCATCH",
                                    { ext2: JSON.stringify(e) }
                                  ),
                                  i({
                                    retcode: "EUPLOADFAIL[any]",
                                    retmsg:
                                      e.retmsg || "上传视频失败了 请稍后重试",
                                  });
                              }
                            }))
                          )
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                },
                i,
                this
              );
            })
          )),
          function (e) {
            return o.apply(this, arguments);
          }),
      },
      {
        key: "verifyVideo",
        value: function (e) {
          var t = e.check_result;
          if (!t || "0" === t.need_retry) {
            if (e.media_id) return !0;
            throw { retmsg: "上传失败[media]" };
          }
          if (
            "0" === (null == t ? void 0 : t.broadcast_result) ||
            "0" === (null == t ? void 0 : t.user_result)
          ) {
            var i = (t.tips || "上传失败").split("|"),
              n = "";
            throw (
              (1 === i.length
                ? (n = r(i, 1)[0])
                : (n = i
                    .map(function (e, r) {
                      return "".concat(r + 1, "、").concat(e);
                    })
                    .join("<br>")),
              { retmsgHtml: n })
            );
          }
          throw e;
        },
      },
    ]),
    a
  );
})();
