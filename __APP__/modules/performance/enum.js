Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.reportTime = exports.reportParam = exports.PERFORMANCE_KEY = void 0);
var e = function () {
    return (e =
      Object.assign ||
      function (e) {
        for (var t, r = 1, o = arguments.length; r < o; r++)
          for (var n in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }).apply(this, arguments);
  },
  t = (exports.reportTime = {
    initStart: 0,
    initEnd: 0,
    vidInto: 0,
    getVideoInfoStart: 0,
    computeCKeyStart: 0,
    computeCKeyEnd: 0,
    getVideoInfoRequestStart: 0,
    getVideoInfoRequestEnd: 0,
    parseVideoInfoStart: 0,
    parseVideoInfoEnd: 0,
    getAdStart: 0,
    computeMD5Start: 0,
    computeMD5End: 0,
    getAdRequestStart: 0,
    getAdRequestEnd: 0,
    handleAdStart: 0,
    handleAdEnd: 0,
    getAdEnd: 0,
    getVideoInfoEnd: 0,
    playInnerStart: 0,
    playInnerEnd: 0,
    setSrc: 0,
    playStart: 0,
  }),
  r = (exports.reportParam = {
    reportCount: 0,
    hasHidePage: !1,
    hasVideoNodeRetry: !1,
    retryReason: {},
    isAdPlayError: !1,
    hasAdRequestRetry: !1,
    hasVideoRequestRetry: !1,
    isPreload: !1,
  }),
  o = (exports.PERFORMANCE_KEY = {});
Object.keys(e(e({}, t), r)).forEach(function (e) {
  return (o[e] = e);
});
