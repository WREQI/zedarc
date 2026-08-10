var e = require("../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var t = e(require("./event-emitter")),
  o = (function () {
    function e() {
      this.msg = new t.default();
    }
    return (
      (e.prototype.destroy = function () {
        this.msg.removeAllListeners();
      }),
      (e.prototype.on = function (e, t, o) {
        void 0 === o && (o = this), this.msg.on(e, t, o);
      }),
      (e.prototype.emit = function (e, t) {
        return this.msg.emit(e, t);
      }),
      (e.prototype.removeAllListeners = function (e) {
        this.msg.removeAllListeners(e);
      }),
      (e.prototype.once = function (e, t, o) {
        void 0 === o && (o = this), this.msg.once(e, t, o);
      }),
      (e.prototype.off = function (e, t, o, i) {
        void 0 === o && (o = this),
          e ? this.msg.off(e, t, o, i) : this.msg.removeAllListeners();
      }),
      e
    );
  })();
exports.default = o;
