var e = require("./age.js"),
  t = require("../../../../service/mpIntercept.js"),
  r = {
    SEX_TYPE: { MALE: "1", FEMALE: "0" },
    getSex: function (e) {
      return "string" != typeof e || (15 !== e.length && 18 !== e.length)
        ? r.SEX_TYPE.MALE
        : 15 === e.length
        ? +e[14] % 2 == 0
          ? r.SEX_TYPE.FEMALE
          : r.SEX_TYPE.MALE
        : 18 === e.length
        ? +e[16] % 2 == 0
          ? r.SEX_TYPE.FEMALE
          : r.SEX_TYPE.MALE
        : void 0;
    },
  },
  n = {
    getAge: e.getAge,
    AGE_TYPE: e.AGE_TYPE,
    getBirthYear: e.getBirthYear,
    isBornAfterYear: e.isBornAfterYear,
  };
(exports.ageUtil = n),
  (exports.base64toBlob = function (e) {
    for (
      var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 512,
        o = t.atob(e),
        E = [],
        i = 0;
      i < o.length;
      i += n
    ) {
      for (
        var a = o.slice(i, i + n), g = new Array(a.length), s = 0;
        s < a.length;
        s++
      )
        g[s] = a.charCodeAt(s);
      var c = new Uint8Array(g);
      E.push(c);
    }
    return new Blob(E, { type: r });
  }),
  (exports.base64toUtf8 = function (e) {
    if (e)
      try {
        return decodeURIComponent(
          t
            .atob(e)
            .split("")
            .map(function (e) {
              return "%".concat(
                "00".concat(e.charCodeAt(0).toString(16)).slice(-2)
              );
            })
            .join("")
        );
      } catch (e) {
        return;
      }
  }),
  (exports.sexUtil = r);
