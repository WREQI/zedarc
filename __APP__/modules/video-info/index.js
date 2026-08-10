var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.VideoInfo = void 0);
var t = e(require("../utils/gen-id")),
  r = require("../../enums"),
  n = function () {
    return (n =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  };
exports.VideoInfo = (function () {
  function e(e, n) {
    (this.playtime = 0),
      (this.error = null),
      (this.performance = { loadStart: 0, loadEnd: 0 }),
      (this.preloaded = !1),
      (this.innerMode = r.PlayMode.VOD),
      (this.nextRetryUrl = 0),
      (this.innerBackUrls = []),
      (this.config = e),
      (this.uid = (0, t.default)(8)),
      (this.innerMode = n),
      this.reset();
  }
  return (
    Object.defineProperty(e.prototype, "width", {
      get: function () {
        return this.config.width || 1;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "height", {
      get: function () {
        return this.config.height || 1;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "isPreview", {
      get: function () {
        return this.config.isPreview || !1;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "isDrm", {
      get: function () {
        return this.config.isDrm || !1;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "drmCertificate", {
      get: function () {
        return this.config.drmCertificate || "";
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "drmLicense", {
      get: function () {
        return this.config.drmLicense || "";
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "duration", {
      get: function () {
        return this.config.duration || 0;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "durationS", {
      get: function () {
        return this.config.durationS || 0;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "previewS", {
      get: function () {
        return this.config.isPreview ? this.config.duration : 0;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "loadingUrl", {
      get: function () {
        return this.innerLoadingUrl;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "loadingUrlIndex", {
      get: function () {
        return this.nextRetryUrl;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e.prototype, "backupUrls", {
      get: function () {
        return this.innerBackUrls;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype.retryNextUrl = function () {
      var e = this.innerBackUrls[this.nextRetryUrl];
      return (
        !!e &&
        ((this.innerLoadingUrl = "".concat(e, "-").concat(this.nextRetryUrl)),
        (this.nextRetryUrl += 1),
        !0)
      );
    }),
    (e.prototype.reset = function () {
      var e;
      (this.performance = { loadStart: 0, loadEnd: 0 }),
        (this.preloaded = !1),
        (this.nextRetryUrl = 0),
        (e = this.config.urls),
        (this.innerLoadingUrl = e[0]),
        (this.innerBackUrls = e.slice(1));
    }),
    (e.prototype.update = function (e) {
      (this.config = n(n({}, this.config), e)), this.reset();
    }),
    e
  );
})();
