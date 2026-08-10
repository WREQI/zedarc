var e = require("../../../../../../../../common/vendor.js"),
  n = { appid: "base", schemaid: "gray_user_config", size: "total" };
function t(t, r, o, u, a) {
  var i;
  return (function (e, n, t, r) {
    return new (t || (t = Promise))(function (o, u) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          u(e);
        }
      }
      function i(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          u(e);
        }
      }
      function c(e) {
        var n;
        e.done
          ? o(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(a, i);
      }
      c((r = r.apply(e, n || [])).next());
    });
  })(this, void 0, void 0, function () {
    var a, c, l, s, f, p, h;
    return (function (e, n) {
      var t,
        r,
        o,
        u,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (u = { next: i(0), throw: i(1), return: i(2) }),
        "function" == typeof Symbol &&
          (u[Symbol.iterator] = function () {
            return this;
          }),
        u
      );
      function i(u) {
        return function (i) {
          return (function (u) {
            if (t) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((t = 1),
                  r &&
                    (o =
                      2 & u[0]
                        ? r.return
                        : u[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, u[1])).done)
                )
                  return o;
                switch (((r = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return a.label++, { value: u[1], done: !1 };
                  case 5:
                    a.label++, (r = u[1]), (u = [0]);
                    continue;
                  case 7:
                    (u = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (o = (o = a.trys).length > 0 && o[o.length - 1]) ||
                        (6 !== u[0] && 2 !== u[0])
                      )
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                      a.label = u[1];
                      break;
                    }
                    if (6 === u[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = u);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(u);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                u = n.call(e, a);
              } catch (e) {
                (u = [6, e]), (r = 0);
              } finally {
                t = o = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          })([u, i]);
        };
      }
    })(this, function (y) {
      switch (y.label) {
        case 0:
          return (
            y.trys.push([0, 4, , 5]),
            (a = u),
            (c = []),
            t ? (void 0 !== a ? [3, 2] : [4, r.get(n)]) : [2, !1]
          );
        case 1:
          if (200 !== (l = y.sent()).code) return [2, !1];
          if (
            !(
              (s =
                null === (i = l.data) || void 0 === i
                  ? void 0
                  : i.findIndex(function (e) {
                      return e.key === o || Number(e.key) === Number(o);
                    })) >= 0
            )
          )
            return [2, !1];
          a = l.data[s].grayScale || 0;
          try {
            c = (c = JSON.parse(l.data[s].whitelist) || []).map(function (e) {
              return "".concat(e).trim();
            });
          } catch (e) {
            c = [];
          }
          return [3, 3];
        case 2:
          if (!(a >= 0 && a <= 99)) return [2, !1];
          y.label = 3;
        case 3:
          return (
            (f = new e.MurmurHash3(t, parseInt(o)).result()),
            (p = f % 100),
            (h =
              c.findIndex(function (e) {
                return e === t;
              }) >= 0),
            [2, p < a || h]
          );
        case 4:
          return y.sent(), [2, !1];
        case 5:
          return [2];
      }
    });
  });
}
exports.judgeGrayUser = function (n, r, o, u) {
  return (function (e, n, t, r) {
    return new (t || (t = Promise))(function (o, u) {
      function a(e) {
        try {
          c(r.next(e));
        } catch (e) {
          u(e);
        }
      }
      function i(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          u(e);
        }
      }
      function c(e) {
        var n;
        e.done
          ? o(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(a, i);
      }
      c((r = r.apply(e, n || [])).next());
    });
  })(void 0, void 0, void 0, function () {
    return (function (e, n) {
      var t,
        r,
        o,
        u,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (u = { next: i(0), throw: i(1), return: i(2) }),
        "function" == typeof Symbol &&
          (u[Symbol.iterator] = function () {
            return this;
          }),
        u
      );
      function i(u) {
        return function (i) {
          return (function (u) {
            if (t) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((t = 1),
                  r &&
                    (o =
                      2 & u[0]
                        ? r.return
                        : u[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, u[1])).done)
                )
                  return o;
                switch (((r = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return a.label++, { value: u[1], done: !1 };
                  case 5:
                    a.label++, (r = u[1]), (u = [0]);
                    continue;
                  case 7:
                    (u = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (o = (o = a.trys).length > 0 && o[o.length - 1]) ||
                        (6 !== u[0] && 2 !== u[0])
                      )
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                      a.label = u[1];
                      break;
                    }
                    if (6 === u[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = u);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(u);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                u = n.call(e, a);
              } catch (e) {
                (u = [6, e]), (r = 0);
              } finally {
                t = o = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          })([u, i]);
        };
      }
    })(this, function (u) {
      switch (u.label) {
        case 0:
          return u.trys.push([0, 2, , 3]), [4, t(n, e.Wuji, r, o)];
        case 1:
          return [2, u.sent()];
        case 2:
          return u.sent(), [2, !1];
        case 3:
          return [2];
      }
    });
  });
};
