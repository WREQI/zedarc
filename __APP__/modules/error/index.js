var t;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0),
  (function (t) {
    (t.CORE = "11"), (t.PLUGIN = "12"), (t.VOD_CGI = "13"), (t.LIVE_CGI = "14");
  })(t || (t = {}));
var r = (function () {
  function r() {}
  return (
    (r.vodCgiError = function (r, o, c) {
      return (
        void 0 === o && (o = "0"),
        {
          code: "".concat(t.VOD_CGI).concat(r.padStart(3, "0"), ".").concat(o),
          message: c,
        }
      );
    }),
    (r.liveCgiError = function (r, o, c) {
      return (
        void 0 === o && (o = "0"),
        {
          code: "".concat(t.LIVE_CGI).concat(r.padStart(3, "0"), ".").concat(o),
          message: c,
        }
      );
    }),
    (r.pluginError = function (r, o) {
      return {
        code: "".concat(t.PLUGIN).concat(r.padStart(3, "0")),
        message: o,
      };
    }),
    (r.coreError = function (r, o) {
      return { code: "".concat(t.CORE).concat(r.padStart(3, "0")), message: o };
    }),
    (r.is = function (t, r) {
      return t === r;
    }),
    r
  );
})();
exports.default = r;
