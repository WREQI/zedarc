require("../@babel/runtime/helpers/Arrayincludes");
var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator");
require("../app.js");
var r = require("../common/vendor.js"),
  n = require("./index.js"),
  a = require("../service/aegis/platform/not-wujie.js"),
  i = require("./getPlatform.js").getPlatform(),
  o = i.bizPlatform,
  c = i.isMiniProgram,
  u = "ios" === i.platform,
  s = u ? 4096 : 5e3,
  l = u ? 4096 : 5e3;
function h(e) {
  return new Promise(function (t, n) {
    r.wx$1.getImageInfo({
      src: e,
      success: function (e) {
        return t(e);
      },
      fail: function (e) {
        return n(e);
      },
    });
  });
}
(exports.compressImgForMiniProgram = (function () {
  var n = t(
    e().mark(function t(n) {
      var i, c, u, s, l, d, p;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (i = n.src),
                  (c = n.quality),
                  (u = void 0 === c ? 80 : c),
                  (s = n.bizType),
                  (l = void 0 === s ? "" : s),
                  (e.prev = 1),
                  (e.next = 4),
                  h(i)
                );
              case 4:
                return (
                  (e.next = 6),
                  (function (e, t) {
                    return new Promise(function (n, a) {
                      r.index.compressImage({
                        src: e,
                        quality: t,
                        success: function (e) {
                          return n(e.tempFilePath);
                        },
                        fail: function (e) {
                          return a(e);
                        },
                      });
                    });
                  })(i, u)
                );
              case 6:
                return (d = e.sent), (e.next = 9), h(d);
              case 9:
                return (
                  (p = e.sent),
                  e.abrupt(
                    "return",
                    (a.aegisReporter.reportEvent("COMPRESS-IMAGE-MP-SUCC", {
                      ext2: "".concat(o, ";").concat(l),
                      ext3: "".concat(p.width, "*").concat(p.height),
                    }),
                    { tempFilePath: d })
                  )
                );
              case 13:
                return (
                  (e.prev = 13),
                  (e.t0 = e.catch(1)),
                  e.abrupt(
                    "return",
                    (a.aegisReporter.reportEvent("COMPRESS-IMAGE-MP-FAIL", {
                      ext2: ""
                        .concat(
                          (null == e.t0 ? void 0 : e.t0.errMsg) || "unknown",
                          "("
                        )
                        .concat(o, ";")
                        .concat(l, ")"),
                      ext3: "",
                    }),
                    { tempFilePath: i })
                  )
                );
              case 16:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[1, 13]]
      );
    })
  );
  return function (e) {
    return n.apply(this, arguments);
  };
})()),
  (exports.compressImgWithCanvas = (function () {
    var i = t(
      e().mark(function i(u) {
        var h, d, p, g, m, f, v, A, w, R, E, S, x, M, b, y, I, P;
        return e().wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  return (
                    (h = u.imageFile),
                    (d = u.targetSize),
                    (p = u.bizType),
                    (g = u.maxWidth),
                    (m = void 0 === g ? s : g),
                    (f = u.maxHeight),
                    (v = void 0 === f ? l : f),
                    (A = u.minWidth),
                    (w = void 0 === A ? 500 : A),
                    (R = u.minHeight),
                    (E = void 0 === R ? 500 : R),
                    (S = r.index.getSystemInfoSync()),
                    (x = S.pixelRatio),
                    (M = void 0 === x ? 2 : x),
                    (b = 1048576 * (d ? Number(d) : 5)),
                    (y = ""),
                    (I = ""),
                    (P = (function (e) {
                      var t, a;
                      if ("[object File]" === Object.prototype.toString.call(e))
                        return {
                          dataURL:
                            null ==
                            (a =
                              window.createObjectURL ||
                              (null == (t = window.URL)
                                ? void 0
                                : t.createObjectURL))
                              ? void 0
                              : a(e),
                          size: null == e ? void 0 : e.size,
                          protoFile: e,
                          type: "0",
                        };
                      if (r.isString(e) && /data:image\//.test(e))
                        return {
                          dataURL: e,
                          size: n.calcBase64ImgSize(e).fileSize,
                          protoFile: e,
                          type: "1",
                        };
                      if (c) {
                        var i = "",
                          o = 0;
                        return (
                          r.isObject(e)
                            ? ((i = (null == e ? void 0 : e.path) || ""),
                              (o = (null == e ? void 0 : e.size) || 0))
                            : r.isString(e) && (i = e),
                          { dataURL: i, size: o, protoFile: e, type: "2" }
                        );
                      }
                      return {
                        dataURL: "",
                        size: (null == e ? void 0 : e.size) || 0,
                        protoFile: e,
                        type: "3",
                      };
                    })(h)),
                    (i.prev = 3),
                    (i.next = 6),
                    new Promise(
                      (function () {
                        var r = t(
                          e().mark(function t(r, i) {
                            var c, u, s, l;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!["3", "2"].includes(P.type)) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      i({
                                        retcode: "EUNKNOWNTYPE",
                                        retmsg: "不支持该图片类型",
                                      })
                                    );
                                  case 2:
                                    if (((c = P.size), (u = 1), !(c < b))) {
                                      e.next = 6;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      i({
                                        retcode: "ENONEEDCOMPRESS",
                                        retmsg: "图片无需压缩",
                                      })
                                    );
                                  case 6:
                                    (u = Math.sqrt(c / b) * M),
                                      (s = new Image()),
                                      (l = "image/jpeg"),
                                      s.setAttribute(
                                        "crossOrigin",
                                        "anonymous"
                                      ),
                                      s.addEventListener("load", function () {
                                        var e =
                                            document.createElement("canvas"),
                                          t = e.getContext("2d");
                                        if (
                                          ((y = ""
                                            .concat(s.naturalWidth, "*")
                                            .concat(s.naturalHeight, "(")
                                            .concat(
                                              n.formatBytes(P.size),
                                              ")"
                                            )),
                                          (e.height = Math.floor(
                                            (s.naturalHeight * M) / u
                                          )),
                                          (e.width = Math.floor(
                                            (s.naturalWidth * M) / u
                                          )),
                                          e.width > e.height)
                                        ) {
                                          if (e.width > m) {
                                            e.width = m;
                                            var h = s.naturalWidth / m;
                                            e.height = Math.floor(
                                              s.naturalHeight / h
                                            );
                                          }
                                          if (e.height < E) {
                                            e.height = E;
                                            var d = s.naturalHeight / E;
                                            e.width = Math.floor(
                                              s.naturalWidth / d
                                            );
                                          }
                                        } else {
                                          if (e.height > v) {
                                            e.height = v;
                                            var g = s.naturalHeight / v;
                                            e.width = Math.floor(
                                              s.naturalWidth / g
                                            );
                                          }
                                          if (e.width < w) {
                                            e.width = w;
                                            var f = s.naturalWidth / w;
                                            e.height = Math.floor(
                                              s.naturalHeight / f
                                            );
                                          }
                                        }
                                        t && (t.__hidpi__ = !1),
                                          null == t ||
                                            t.clearRect(
                                              0,
                                              0,
                                              e.width,
                                              e.height
                                            ),
                                          null == t ||
                                            t.drawImage(
                                              s,
                                              0,
                                              0,
                                              e.width,
                                              e.height
                                            );
                                        for (
                                          var A = 0.92,
                                            R = e.toDataURL(l, A),
                                            S = n.calcBase64ImgSize(R).fileSize,
                                            x = 0;
                                          S > b && A > 0.3 && x < 5;

                                        ) {
                                          var z = b / S;
                                          (A = Math.max(A * Math.sqrt(z), 0.3)),
                                            (R = e.toDataURL(l, A)),
                                            (S =
                                              n.calcBase64ImgSize(R).fileSize),
                                            x++;
                                        }
                                        if (R.length <= 25)
                                          return i({
                                            retcode: "ECOMPRESSFAIL",
                                            retmsg: "压缩图片失败 请稍后重试",
                                          });
                                        if (
                                          ((I = ""
                                            .concat(e.width, "*")
                                            .concat(e.height, "(")
                                            .concat(
                                              n.calcBase64ImgSize(R).formatted,
                                              ")"
                                            )),
                                          S > c)
                                        )
                                          return i({
                                            retcode: "ECOMPRESSINVALID",
                                            retmsg: "压缩图片无效 请稍后重试",
                                          });
                                        var L = n.getBytesRange(P.size),
                                          O = n.getBytesRange(S);
                                        return (
                                          a.aegisReporter.reportEvent(
                                            "COMPRESS-IMAGE-SUCC",
                                            {
                                              ext2: "".concat(o, ";").concat(p),
                                              ext3: "".concat(L, "-").concat(O),
                                            }
                                          ),
                                          (e.width = 0),
                                          (e.height = 0),
                                          e.remove(),
                                          r({ image: R })
                                        );
                                      }),
                                      (s.src = P.dataURL),
                                      (s.complete || void 0 === s.complete) &&
                                        ((s.src =
                                          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
                                        (s.src = P.dataURL)),
                                      (s.onerror = function () {
                                        i({
                                          retcode: "ELOADFAIL",
                                          retmsg: "加载图片失败 请稍后重试",
                                        });
                                      });
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e, t) {
                          return r.apply(this, arguments);
                        };
                      })()
                    )
                  );
                case 6:
                  return i.abrupt("return", i.sent);
                case 9:
                  return (
                    (i.prev = 9),
                    (i.t0 = i.catch(3)),
                    i.abrupt(
                      "return",
                      ("ENONEEDCOMPRESS" !==
                        (null == i.t0 ? void 0 : i.t0.retcode) &&
                        a.aegisReporter.reportEvent("COMPRESS-IMAGE-FAIL", {
                          ext2: ""
                            .concat(i.t0.retcode, "(")
                            .concat(o, ";")
                            .concat(p, ")"),
                          ext3: "".concat(y, ";").concat(I),
                        }),
                      new Promise(function (e, t) {
                        if ("0" === P.type) {
                          var r = new FileReader();
                          return (
                            r.readAsDataURL(P.protoFile),
                            (r.onload = function () {
                              return e({ image: r.result });
                            }),
                            void (r.onerror = function (e) {
                              return t({
                                retcode: "EREADFAIL",
                                retmsg: "获取图片失败 请稍后重试",
                              });
                            })
                          );
                        }
                        return "1" === P.type || "2" === P.type
                          ? e({ image: P.dataURL })
                          : e({ image: P.protoFile });
                      }))
                    )
                  );
                case 12:
                case "end":
                  return i.stop();
              }
          },
          i,
          null,
          [[3, 9]]
        );
      })
    );
    return function (e) {
      return i.apply(this, arguments);
    };
  })());
