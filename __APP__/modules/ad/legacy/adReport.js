var t,
  r = require("../../../behaviors/logger"),
  n = (0, r.logFactory)("adReport");
(module.exports = {
  attachReporter: function (r) {
    t = r;
  },
  updateUrlParam: function (t, r) {
    try {
      var n = (function (t) {
          var r = t.indexOf("?"),
            n = new Object(),
            c = t;
          if (r >= 0)
            for (
              var o, e, a = (c = c.substr(r + 1)).split("&"), i = 0;
              i < a.length;
              i++
            )
              (o = a[i]),
                (e = o.split("=")).length > 1
                  ? (n[e[0]] = e[1])
                  : (n[e[0]] = "null");
          return n;
        })(t),
        c = t,
        o = !0;
      if (-1 != t.indexOf("?")) {
        var e;
        for (e in ((c = t.substring(0, t.indexOf("?"))), r)) n[e] = r[e];
        for (e in n)
          o
            ? ((o = !1), (c += "?".concat(e, "=").concat(n[e])))
            : (c += "&".concat(e, "=").concat(n[e]));
      }
    } catch (t) {
      c = "";
    }
    return c;
  },
  reportWisdomPoint: function (t, r, c, o) {
    n("开始智慧点上报");
    var e = "".concat("https://t.l.qq.com?t=s", "&actid=").concat(t);
    e += "&oid=".concat(r, "&mid=").concat(c, "&locid=").concat(o);
    try {
      this.pingUrl(e);
    } catch (t) {}
  },
  pingUrl: function (r, c, o, e) {
    n("ping上报地址：".concat(r));
    var a = new Date().getTime();
    (r = this.updateUrlParam(r, { reportTime: a })),
      t.emit("report", { reportUrl: r }),
      n("用message抛出上报事件");
  },
}).reporter = t;
