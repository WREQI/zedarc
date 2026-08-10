var r = require("../../@babel/runtime/helpers/toConsumableArray");
require("../../app.js"),
  (exports.getQuestionAnswerText = function (r, e) {
    if (!r) throw new Error("question is required");
    var t = r.answers;
    return e >= t.length ? "" : t[e];
  }),
  (exports.getRawQuestionList = function (e, t) {
    var n = e.prompts,
      o = void 0 === n ? [] : n,
      i = e.extraPrompts,
      s = void 0 === i ? [] : i,
      u = r(o);
    return (
      (null == t ? void 0 : t.withExtra) && u.concat.apply(u, r(s)),
      u.reduce(function (r, e) {
        return r.concat(e.questions);
      }, [])
    );
  });
