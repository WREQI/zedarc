var e = require("../../@babel/runtime/helpers/objectWithoutProperties"),
  r = ["url", "data"],
  n = [];
exports.loginHandler = function (t, o) {
  var i = o.config,
    u = i.url,
    a = i.data,
    c = e(i, r),
    l = { is_replay_req: "2" };
  (u = u.replace(c.baseURL, "")),
    (a = a.split("&") || []).forEach(function (e) {
      var r = e.split("=");
      r[0] && (l[decodeURIComponent(r[0])] = decodeURIComponent(r[1]));
    });
  var s = new Promise(function (e) {
    n.push({ url: u, resolve: e });
  });
  return (
    n.forEach(function (e) {
      return e.resolve();
    }),
    s.then(function () {
      return t(u, l, c);
    })
  );
};
