var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../../common/vendor.js"),
  i = {
    offscreenCanvas: null,
    getOffscreenCanvas: function () {
      if (!this.offscreenCanvas) {
        this.offscreenCanvas = a.wx$1.createOffscreenCanvas({
          type: "2d",
          width: 480,
          height: 384,
        });
        var e = this.offscreenCanvas.getContext("2d");
        e.canvas &&
          !e.canvas.toDataURL &&
          (e.canvas.toDataURL = this.offscreenCanvas.toDataURL);
      }
      return this.offscreenCanvas;
    },
    renderToImage: function () {
      return (
        (e = this),
        (a = arguments),
        (i = function () {
          var e = this,
            a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
          return t().mark(function i() {
            var n, o, r, c, d, s;
            return t().wrap(function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    (n = e.getOffscreenCanvas()),
                      (o = n.getContext("2d")).clearRect(0, 0, 480, 384),
                      (i.t0 = t().keys(a));
                  case 3:
                    if ((i.t1 = i.t0()).done) {
                      i.next = 14;
                      break;
                    }
                    if (
                      ((r = i.t1.value),
                      (c = a[r] || {}),
                      "image" !== (d = c.type))
                    ) {
                      i.next = 11;
                      break;
                    }
                    return (i.next = 9), e.drawImage(o, n, c);
                  case 9:
                    i.next = 12;
                    break;
                  case 11:
                    "text" === d
                      ? e.drawText(o, c)
                      : "bar" === d
                      ? e.drawBar(o, c)
                      : "radiusRect" === d
                      ? e.drawRadiusRect(o, c)
                      : "circle" === d && e.drawCircle(o, c);
                  case 12:
                    i.next = 3;
                    break;
                  case 14:
                    return (i.next = 16), e.canvasToTempFilePath(n);
                  case 16:
                    return (
                      (s = i.sent),
                      i.abrupt(
                        "return",
                        (o.clearRect(0, 0, 480, 384),
                        (n = null),
                        (o = null),
                        s.tempFilePath)
                      )
                    );
                  case 18:
                  case "end":
                    return i.stop();
                }
            }, i);
          })();
        }),
        new Promise(function (t, n) {
          var o = function (e) {
              try {
                c(i.next(e));
              } catch (e) {
                n(e);
              }
            },
            r = function (e) {
              try {
                c(i.throw(e));
              } catch (e) {
                n(e);
              }
            },
            c = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(o, r);
            };
          c((i = i.apply(e, a)).next());
        })
      );
      var e, a, i;
    },
    drawText: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.text,
        i = void 0 === a ? "" : a,
        n = t.fontSize,
        o = void 0 === n ? 30 : n,
        r = t.color,
        c = void 0 === r ? "#e63535" : r,
        d = t.fontWeight,
        s = void 0 === d ? "bold" : d,
        l = t.textAlign,
        v = void 0 === l ? "left" : l,
        h = t.x,
        u = void 0 === h ? 0 : h,
        f = t.y,
        g = void 0 === f ? 0 : f,
        m = t.textBaseline,
        p = void 0 === m ? "top" : m;
      (e.font = "".concat(s, " ").concat(o, "px stockFont")),
        (e.textAlign = v),
        (e.fillStyle = c),
        (e.textBaseline = p),
        e.fillText(i, u, g);
    },
    drawBar: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.color,
        i = void 0 === a ? "" : a,
        n = t.x,
        o = void 0 === n ? 0 : n,
        r = t.y,
        c = void 0 === r ? 0 : r,
        d = t.width,
        s = void 0 === d ? 0 : d,
        l = t.height,
        v = void 0 === l ? 0 : l;
      (e.fillStyle = i), e.fillRect(o, c, s, v);
    },
    drawRadiusRect: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.color,
        i = void 0 === a ? "" : a,
        n = t.x,
        o = void 0 === n ? 0 : n,
        r = t.y,
        c = void 0 === r ? 0 : r,
        d = t.width,
        s = void 0 === d ? 0 : d,
        l = t.height,
        v = void 0 === l ? 0 : l,
        h = t.borderTopLeftRadius,
        u = void 0 === h ? 0 : h,
        f = t.borderTopRightRadius,
        g = void 0 === f ? 0 : f,
        m = t.borderBottomRightRadius,
        p = void 0 === m ? 0 : m,
        w = t.borderBottomLeftRadius,
        x = void 0 === w ? 0 : w,
        T = t.strokeStyle,
        P = void 0 === T ? "" : T,
        y = t.lineWidth,
        R = void 0 === y ? 0 : y;
      e.save(),
        e.translate(o, c),
        e.beginPath(0),
        e.arc(s - p, v - p, p, 0, Math.PI / 2),
        e.lineTo(x, v),
        e.arc(x, v - x, x, Math.PI / 2, Math.PI),
        e.lineTo(0, x),
        e.arc(u, u, u, Math.PI, (3 * Math.PI) / 2),
        e.lineTo(s - g, 0),
        e.arc(s - g, g, g, (3 * Math.PI) / 2, 2 * Math.PI),
        e.lineTo(s, v - g),
        e.closePath(),
        (e.lineWidth = R),
        i && ((e.fillStyle = i), e.fill()),
        P && ((e.strokeStyle = P), e.stroke()),
        e.restore();
    },
    drawCircle: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.color,
        i = void 0 === a ? "" : a,
        n = t.x,
        o = void 0 === n ? 0 : n,
        r = t.y,
        c = void 0 === r ? 0 : r,
        d = t.roundRadius,
        s = void 0 === d ? 0 : d,
        l = t.start,
        v = void 0 === l ? 0 : l,
        h = t.end,
        u = void 0 === h ? 0 : h,
        f = t.lineWidth,
        g = void 0 === f ? 0 : f;
      e.save(),
        (e.strokeStyle = i),
        e.beginPath(),
        e.arc(o, c, s, v, u),
        (e.lineWidth = g),
        e.stroke(),
        e.restore();
    },
    drawImage: function (t, a) {
      var i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = i.url,
        o = i.x,
        r = i.y,
        c = i.width,
        d = void 0 === c ? a.width : c,
        s = i.height,
        l = void 0 === s ? a.height : s,
        v = i.time,
        h = void 0 === v || v,
        u = i.round;
      return new Promise(function (i, c) {
        var s = a.createImage();
        (s.onload = function () {
          if (u && u.length > 0) {
            if ((t.save(), t.beginPath(), t.roundRect))
              t.roundRect(o, r, d, l, u);
            else {
              var a = e(u, 4),
                n = a[0],
                c = void 0 === n ? 0 : n,
                v = a[1],
                h = void 0 === v ? 0 : v,
                f = a[2],
                g = void 0 === f ? 0 : f,
                m = a[3],
                p = void 0 === m ? 0 : m;
              t.moveTo(o + c, r),
                t.arcTo(o + d, r, o + d, r + l, h),
                t.arcTo(o + d, r + l, o, r + l, g),
                t.arcTo(o, r + l, o, r, p),
                t.arcTo(o, r, o + d, r, c);
            }
            t.closePath(), t.clip(), t.drawImage(s, o, r, d, l), t.restore();
          } else t.drawImage(s, o, r, d, l), t.restore();
          i(), (s = null);
        }),
          (s.onerror = function (e) {
            c(e), (s = null);
          }),
          (s.src = h ? "".concat(n, "?time=").concat(Date.now()) : n);
      });
    },
    canvasToTempFilePath: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = getApp(),
        n = i.globalData,
        o = void 0 === n ? {} : n,
        r = o.detect,
        c = void 0 === r ? {} : r,
        d = c.env,
        s = void 0 === d ? {} : d,
        l = s.IS_PCWEIXIN,
        v = void 0 !== l && l;
      return v
        ? this.canvasToTempFilePathForPc(e)
        : new Promise(function (i, n) {
            a.wx$1.canvasToTempFilePath({
              canvas: e,
              width: t.canvasWidth || 480,
              height: t.canvasHeight || 384,
              destWidth: t.canvasWidth || 480,
              destHeight: t.canvasHeight || 384,
              fileType: t.fileType || "png",
              quality: t.quality || 1,
              success: i,
              fail: n,
            });
          });
    },
    canvasToTempFilePathForPc: function (e) {
      var t = e.toDataURL("image/png"),
        i = Date.now(),
        n = ""
          .concat(a.wx$1.env.USER_DATA_PATH, "/temp_image_")
          .concat(i, ".png");
      return new Promise(function (e, i) {
        a.wx$1.getFileSystemManager().writeFile({
          filePath: n,
          data: t.replace("data:image/png;base64,", ""),
          encoding: "base64",
          success: function () {
            return e({ tempFilePath: n });
          },
          fail: i,
        });
      });
    },
    shortString: function (e, t) {
      return e.length > t ? "".concat(e.slice(0, t), "...") : e;
    },
  };
exports.ShareUtil = i;
