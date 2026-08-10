Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = function (e) {
    void 0 === e && (e = {});
    return Object.keys(e)
      .map(function (t) {
        return void 0 !== e[t]
          ? "".concat(t, "=").concat(encodeURIComponent(e[t]))
          : "";
      })
      .filter(function (e) {
        return e;
      })
      .join("&");
  });
