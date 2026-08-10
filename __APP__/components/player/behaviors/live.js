Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.registerLiveBehavior = function (e, r) {
    return new i(e, r);
  });
var e = require("../../../modules/getinfo/live-poller/index"),
  i = (function () {
    function i(i, r) {
      var t = this;
      (this.onLiveStreamEnded = r.onLiveStreamEnded),
        (this.onLivePreviewEnded = r.onLivePreviewEnded),
        (this.poller = new e.LivePoller()),
        this.poller.start(i.livepid, { onEnd: this.onLiveStreamEnded }),
        i.preview > 0 &&
          (this.previewTimer = setTimeout(function () {
            var e;
            t.poller.stop(),
              null === (e = t.onLivePreviewEnded) || void 0 === e || e.call(t);
          }, 1e3 * i.preview));
    }
    return (
      (i.prototype.stop = function () {
        this.previewTimer &&
          (clearTimeout(this.previewTimer), (this.previewTimer = null)),
          this.poller.stop();
      }),
      i
    );
  })();
