var t,
  e = require("../../../../common/vendor.js"),
  r = { exports: {} };
(t = r),
  e.commonjsGlobal,
  (t.exports = (function () {
    var t = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      e =
        /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      r = /\d/,
      n = /\d\d/,
      o = /\d\d?/,
      i = /\d*[^-_:/,()\s\d]+/,
      s = {},
      a = function (t) {
        return (t = +t) + (t > 68 ? 1900 : 2e3);
      },
      f = function (t) {
        return function (e) {
          this[t] = +e;
        };
      },
      h = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function (t) {
          (this.zone || (this.zone = {})).offset = (function (t) {
            if (!t) return 0;
            if ("Z" === t) return 0;
            var e = t.match(/([+-]|\d\d)/g),
              r = 60 * e[1] + (+e[2] || 0);
            return 0 === r ? 0 : "+" === e[0] ? -r : r;
          })(t);
        },
      ],
      u = function (t) {
        var e = s[t];
        return e && (e.indexOf ? e : e.s.concat(e.f));
      },
      c = function (t, e) {
        var r,
          n = s.meridiem;
        if (n) {
          for (var o = 1; o <= 24; o += 1)
            if (t.indexOf(n(o, 0, e)) > -1) {
              r = o > 12;
              break;
            }
        } else r = t === (e ? "pm" : "PM");
        return r;
      },
      d = {
        A: [
          i,
          function (t) {
            this.afternoon = c(t, !1);
          },
        ],
        a: [
          i,
          function (t) {
            this.afternoon = c(t, !0);
          },
        ],
        Q: [
          r,
          function (t) {
            this.month = 3 * (t - 1) + 1;
          },
        ],
        S: [
          r,
          function (t) {
            this.milliseconds = 100 * +t;
          },
        ],
        SS: [
          n,
          function (t) {
            this.milliseconds = 10 * +t;
          },
        ],
        SSS: [
          /\d{3}/,
          function (t) {
            this.milliseconds = +t;
          },
        ],
        s: [o, f("seconds")],
        ss: [o, f("seconds")],
        m: [o, f("minutes")],
        mm: [o, f("minutes")],
        H: [o, f("hours")],
        h: [o, f("hours")],
        HH: [o, f("hours")],
        hh: [o, f("hours")],
        D: [o, f("day")],
        DD: [n, f("day")],
        Do: [
          i,
          function (t) {
            var e = s.ordinal,
              r = t.match(/\d+/);
            if (((this.day = r[0]), e))
              for (var n = 1; n <= 31; n += 1)
                e(n).replace(/\[|\]/g, "") === t && (this.day = n);
          },
        ],
        w: [o, f("week")],
        ww: [n, f("week")],
        M: [o, f("month")],
        MM: [n, f("month")],
        MMM: [
          i,
          function (t) {
            var e = u("months"),
              r =
                (
                  u("monthsShort") ||
                  e.map(function (t) {
                    return t.slice(0, 3);
                  })
                ).indexOf(t) + 1;
            if (r < 1) throw new Error();
            this.month = r % 12 || r;
          },
        ],
        MMMM: [
          i,
          function (t) {
            var e = u("months").indexOf(t) + 1;
            if (e < 1) throw new Error();
            this.month = e % 12 || e;
          },
        ],
        Y: [/[+-]?\d+/, f("year")],
        YY: [
          n,
          function (t) {
            this.year = a(t);
          },
        ],
        YYYY: [/\d{4}/, f("year")],
        Z: h,
        ZZ: h,
      };
    function m(r) {
      var n, o;
      (n = r), (o = s && s.formats);
      for (
        var i = (r = n.replace(
            /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
            function (e, r, n) {
              var i = n && n.toUpperCase();
              return (
                r ||
                o[n] ||
                t[n] ||
                o[i].replace(
                  /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                  function (t, e, r) {
                    return e || r.slice(1);
                  }
                )
              );
            }
          )).match(e),
          a = i.length,
          f = 0;
        f < a;
        f += 1
      ) {
        var h = i[f],
          u = d[h],
          c = u && u[0],
          m = u && u[1];
        i[f] = m ? { regex: c, parser: m } : h.replace(/^\[|\]$/g, "");
      }
      return function (t) {
        for (var e = {}, r = 0, n = 0; r < a; r += 1) {
          var o = i[r];
          if ("string" == typeof o) n += o.length;
          else {
            var s = o.regex,
              f = o.parser,
              h = t.slice(n),
              u = s.exec(h)[0];
            f.call(e, u), (t = t.replace(u, ""));
          }
        }
        return (
          (function (t) {
            var e = t.afternoon;
            if (void 0 !== e) {
              var r = t.hours;
              e ? r < 12 && (t.hours += 12) : 12 === r && (t.hours = 0),
                delete t.afternoon;
            }
          })(e),
          e
        );
      };
    }
    return function (t, e, r) {
      (r.p.customParseFormat = !0),
        t && t.parseTwoDigitYear && (a = t.parseTwoDigitYear);
      var n = e.prototype,
        o = n.parse;
      n.parse = function (t) {
        var e = t.date,
          n = t.utc,
          i = t.args;
        this.$u = n;
        var a = i[1];
        if ("string" == typeof a) {
          var f = !0 === i[2],
            h = !0 === i[3],
            u = f || h,
            c = i[2];
          h && (c = i[2]),
            (s = this.$locale()),
            !f && c && (s = r.Ls[c]),
            (this.$d = (function (t, e, r, n) {
              try {
                if (["x", "X"].indexOf(e) > -1)
                  return new Date(("X" === e ? 1e3 : 1) * t);
                var o = m(e)(t),
                  i = o.year,
                  s = o.month,
                  a = o.day,
                  f = o.hours,
                  h = o.minutes,
                  u = o.seconds,
                  c = o.milliseconds,
                  d = o.zone,
                  l = o.week,
                  M = new Date(),
                  Y = a || (i || s ? 1 : M.getDate()),
                  v = i || M.getFullYear(),
                  D = 0;
                (i && !s) || (D = s > 0 ? s - 1 : M.getMonth());
                var p,
                  w = f || 0,
                  g = h || 0,
                  L = u || 0,
                  y = c || 0;
                return d
                  ? new Date(
                      Date.UTC(v, D, Y, w, g, L, y + 60 * d.offset * 1e3)
                    )
                  : r
                  ? new Date(Date.UTC(v, D, Y, w, g, L, y))
                  : ((p = new Date(v, D, Y, w, g, L, y)),
                    l && (p = n(p).week(l).toDate()),
                    p);
              } catch (t) {
                return new Date("");
              }
            })(e, a, n, r)),
            this.init(),
            c && !0 !== c && (this.$L = this.locale(c).$L),
            u && e != this.format(a) && (this.$d = new Date("")),
            (s = {});
        } else if (a instanceof Array)
          for (var d = a.length, l = 1; l <= d; l += 1) {
            i[1] = a[l - 1];
            var M = r.apply(this, i);
            if (M.isValid()) {
              (this.$d = M.$d), (this.$L = M.$L), this.init();
              break;
            }
            l === d && (this.$d = new Date(""));
          }
        else o.call(this, t);
      };
    };
  })());
var n = r.exports,
  o = e.getDefaultExportFromCjs(n);
exports.customParseFormat = o;
