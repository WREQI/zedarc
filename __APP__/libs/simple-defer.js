Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var e = function () {
  var e = this;
  this.promise = new Promise(function (t, r) {
    (e.resolve = t), (e.reject = r);
  });
};
exports.default = e;
