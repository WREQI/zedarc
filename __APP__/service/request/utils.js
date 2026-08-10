require("../../app.js"),
  (exports.decodeHexadecimal = function (e) {
    var r = e;
    return (
      "string" == typeof e &&
        (r = (r = r.replace(/\\x(\w{2})/g, function (e, r) {
          return "22" === r || "5C" === r
            ? ""
            : String.fromCharCode(parseInt(r, 16));
        })).replace(/(\n|\\)/g, "")),
      r
    );
  });
