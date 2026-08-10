require("../app.js"),
  (exports.fixInvalidComplexPassword = function (e) {
    return e.replace(
      /[^0-9a-zA-Z!'@#$%^&*()'":=_`|:;?~|+\-\\\/\[\]{},.<>\s]/g,
      ""
    );
  }),
  (exports.fixInvalidNumberPassword = function (e) {
    return e.replace(/\D/g, "");
  }),
  (exports.isValidComplexPassword = function (e, r) {
    if (r) {
      var t = r.maxlength,
        s = r.minlength;
      if ((t && e.length > t) || (s && e.length < s)) return !1;
    }
    return /^[0-9a-zA-Z!'@#$%^&*()'":=_`|:;?~|+\-\\\/\[\]{},.<>\s]*$/.test(e);
  }),
  (exports.isValidNumberPassword = function (e, r) {
    return /^\d*$/.test(e);
  });
