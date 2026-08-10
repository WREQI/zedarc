Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.loadImg = void 0);
var e = {};
exports.loadImg = function o(s) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    c = s.src,
    i = s.onSuccess,
    n = s.onFail,
    r = s.maxTimes,
    a = void 0 === r ? 3 : r;
  e[c]
    ? i && i(e[c])
    : wx.getImageInfo({
        src: c,
        success: function (o) {
          (e[c] = o), i && i(o);
        },
        fail: function () {
          (t += 1) >= a ? n && n() : o(s, t);
        },
      });
};
