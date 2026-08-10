var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  a = require("./helpers/loadImage.js"),
  n = require("./helpers/drawQRCode.js"),
  i = require("./helpers/drawing.js");
exports.captureMp = (function () {
  var o = r(
    e().mark(function r(o) {
      var s, u, c, d, h, p, w, l;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((s = o.width), (u = o.height), (c = o.draw))) {
                  e.next = 3;
                  break;
                }
                throw new Error("[useShareSnapshot] MP 平台必须传入 draw 函数");
              case 3:
                return (
                  (d = (function () {
                    try {
                      return t.index.getSystemInfoSync().pixelRatio || 2;
                    } catch (e) {
                      return 2;
                    }
                  })()),
                  (h = t.wx$1.createOffscreenCanvas({
                    type: "2d",
                    width: Math.round(s * d),
                    height: Math.round(u * d),
                  })),
                  (p = h.getContext("2d")).scale(d, d),
                  p.clearRect(0, 0, s, u),
                  (w = a.makeLoadImage(h)),
                  (l = {
                    canvas: h,
                    pixelRatio: d,
                    width: s,
                    height: u,
                    loadImage: w,
                    drawCircleImage: i.drawCircleImage(p, d),
                    drawRoundRect: i.drawRoundRect(p),
                    drawText: i.drawText(p),
                    drawQRCode: n.makeDrawQRCode(p),
                  }),
                  (e.prev = 6),
                  (e.next = 9),
                  c(p, l)
                );
              case 9:
                e.next = 14;
                break;
              case 11:
                throw (
                  ((e.prev = 11),
                  (e.t0 = e.catch(6)),
                  e.t0 instanceof Error ? e.t0 : new Error(String(e.t0)))
                );
              case 14:
                return e.abrupt(
                  "return",
                  new Promise(function (e, r) {
                    t.wx$1.canvasToTempFilePath({
                      canvas: h,
                      x: 0,
                      y: 0,
                      width: Math.round(s * d),
                      height: Math.round(u * d),
                      destWidth: Math.round(s * d),
                      destHeight: Math.round(u * d),
                      fileType: "png",
                      quality: 1,
                      success: function (r) {
                        e(r.tempFilePath);
                      },
                      fail: function (e) {
                        var t = e.errMsg || "canvasToTempFilePath failed";
                        r(new Error(t));
                      },
                    });
                  })
                );
              case 15:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[6, 11]]
      );
    })
  );
  return function (e) {
    return o.apply(this, arguments);
  };
})();
