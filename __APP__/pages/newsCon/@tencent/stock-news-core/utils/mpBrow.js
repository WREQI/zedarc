var i = require("../../../../../common/vendor.js"),
  e = {
    mpObserveVisibility: function (e, s) {
      var r = this;
      this._observer ||
        ((this._observer = i.wx$1.createIntersectionObserver(this)),
        this._observer.relativeToViewport().observe(e, function (i) {
          i.intersectionRatio > 0 &&
            !r.mpVisibilityCalled &&
            (s(!0), (r.mpVisibilityCalled = !0), r.mpDisobserveVisibility());
        }));
    },
    mpDisobserveVisibility: function () {
      this._observer && (this._observer.disconnect(), (this._observer = null));
    },
  };
exports.mutations = e;
