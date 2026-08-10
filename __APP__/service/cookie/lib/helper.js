require("../../../app.js");
var e = require("../../../common/vendor.js");
exports.parseCookieFromHeader = function (i) {
  if (i) {
    var a = [],
      r = {};
    return 0 !==
      (a = i
        .replace(/(Expires=[A-Za-z]{3}),/gi, "$1_")
        .split(",")
        .map(function (e) {
          return e.replace(/(Expires=[A-Za-z]{3})_/gi, "$1,");
        })).length
      ? (a.forEach(function (i) {
          var a = (function (i) {
            var a = i.split(";"),
              r = {},
              t = a.shift().split("=");
            return t.length < 2
              ? void 0
              : ((r.name = t[0]),
                (r.value = t[1]),
                a.forEach(function (i) {
                  i.match(/^\s*Expires=/i) &&
                    (r.expires = e.dayjs(i.split("=")[1]).format()),
                    i.match(/^\s*Max-age=/i) && (r.maxAge = +i.split("=")[1]),
                    i.match(/^\s*DOMAIN=/i) && (r.domain = i.split("=")[1]),
                    i.match(/^\s*PATH=/i) && (r.path = i.split("=")[1]);
                }),
                r);
          })(i);
          a && a.name && ((a.name = a.name.trim()), (r[a.name] = a));
        }),
        r)
      : void 0;
  }
};
