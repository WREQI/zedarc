var e = function (e) {
    var t = e.notice_type,
      r = e.alert_time;
    return 1 == +t ? !r : 2 == +t && "user_manual_close" !== r;
  },
  t = function (e, t) {
    return 0 === e.length
      ? null
      : 1 === e.length
      ? e[0]
      : e.reduce(function (e, r) {
          var n = Number(e.val),
            l = Number(r.val),
            i = Number(t);
          return Math.abs(l - i) < Math.abs(n - i) ? r : e;
        });
  };
(exports.deepEqual = function (e, t) {
  var r, n;
  if (!e || !t) return !1;
  var l = (null == (r = e.qlist) ? void 0 : r.length) > 0 ? e.qlist[0] : {},
    i = (null == (n = t.qlist) ? void 0 : n.length) > 0 ? t.qlist[0] : {},
    u = Object.keys(l),
    a = Object.keys(i);
  return (
    u.length === a.length &&
    u.every(function (e) {
      return l[e] === i[e];
    })
  );
}),
  (exports.getChartRemindData = function (r, n) {
    if (r) {
      var l = { downflag: "0", downprice: "", upflag: "0", upprice: "" },
        i = r.price_up,
        u = r.price_down,
        a = i.filter(e);
      if (a.length) {
        var o = t(a, n);
        (l.upflag = "1"), (l.upprice = (null == o ? void 0 : o.val) || "");
      }
      var c = u.filter(e);
      if (c.length) {
        var v = t(c, n);
        (l.downflag = "1"), (l.downprice = (null == v ? void 0 : v.val) || "");
      }
      return { qlist: [l] };
    }
  });
