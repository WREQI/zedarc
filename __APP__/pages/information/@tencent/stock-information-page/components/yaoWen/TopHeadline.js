var t,
  e = require("../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../common/vendor.js"),
  i = { exports: {} };
(t = i),
  n.commonjsGlobal,
  (t.exports = (function () {
    var t = 6e4,
      n = 36e5,
      i = "millisecond",
      r = "second",
      s = "minute",
      u = "hour",
      o = "day",
      a = "week",
      c = "month",
      f = "quarter",
      h = "year",
      d = "date",
      l = "Invalid Date",
      m =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      $ =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      g = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
      },
      p = function (t, e, n) {
        var i = String(t);
        return !i || i.length >= e
          ? t
          : "" + Array(e + 1 - i.length).join(n) + t;
      },
      v = {
        s: p,
        z: function (t) {
          var e = -t.utcOffset(),
            n = Math.abs(e),
            i = Math.floor(n / 60),
            r = n % 60;
          return (e <= 0 ? "+" : "-") + p(i, 2, "0") + ":" + p(r, 2, "0");
        },
        m: function t(e, n) {
          if (e.date() < n.date()) return -t(n, e);
          var i = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            r = e.clone().add(i, c),
            s = n - r < 0,
            u = e.clone().add(i + (s ? -1 : 1), c);
          return +(-(i + (n - r) / (s ? r - u : u - r)) || 0);
        },
        a: function (t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function (t) {
          return (
            { M: c, y: h, w: a, d: o, D: d, h: u, m: s, s: r, ms: i, Q: f }[
              t
            ] ||
            String(t || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (t) {
          return void 0 === t;
        },
      },
      M = "en",
      y = {};
    y[M] = g;
    var D = function (t) {
        return t instanceof b;
      },
      S = function t(e, n, i) {
        var r;
        if (!e) return M;
        if ("string" == typeof e) {
          var s = e.toLowerCase();
          y[s] && (r = s), n && ((y[s] = n), (r = s));
          var u = e.split("-");
          if (!r && u.length > 1) return t(u[0]);
        } else {
          var o = e.name;
          (y[o] = e), (r = o);
        }
        return !i && r && (M = r), r || (!i && M);
      },
      w = function (t, n) {
        if (D(t)) return t.clone();
        var i = "object" == e(n) ? n : {};
        return (i.date = t), (i.args = arguments), new b(i);
      },
      _ = v;
    (_.l = S),
      (_.i = D),
      (_.w = function (t, e) {
        return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
      });
    var b = (function () {
        function e(t) {
          (this.$L = S(t.locale, null, !0)), this.parse(t);
        }
        var g = e.prototype;
        return (
          (g.parse = function (t) {
            (this.$d = (function (t) {
              var e = t.date,
                n = t.utc;
              if (null === e) return new Date(NaN);
              if (_.u(e)) return new Date();
              if (e instanceof Date) return new Date(e);
              if ("string" == typeof e && !/Z$/i.test(e)) {
                var i = e.match(m);
                if (i) {
                  var r = i[2] - 1 || 0,
                    s = (i[7] || "0").substring(0, 3);
                  return n
                    ? new Date(
                        Date.UTC(
                          i[1],
                          r,
                          i[3] || 1,
                          i[4] || 0,
                          i[5] || 0,
                          i[6] || 0,
                          s
                        )
                      )
                    : new Date(
                        i[1],
                        r,
                        i[3] || 1,
                        i[4] || 0,
                        i[5] || 0,
                        i[6] || 0,
                        s
                      );
                }
              }
              return new Date(e);
            })(t)),
              (this.$x = t.x || {}),
              this.init();
          }),
          (g.init = function () {
            var t = this.$d;
            (this.$y = t.getFullYear()),
              (this.$M = t.getMonth()),
              (this.$D = t.getDate()),
              (this.$W = t.getDay()),
              (this.$H = t.getHours()),
              (this.$m = t.getMinutes()),
              (this.$s = t.getSeconds()),
              (this.$ms = t.getMilliseconds());
          }),
          (g.$utils = function () {
            return _;
          }),
          (g.isValid = function () {
            return !(this.$d.toString() === l);
          }),
          (g.isSame = function (t, e) {
            var n = w(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
          }),
          (g.isAfter = function (t, e) {
            return w(t) < this.startOf(e);
          }),
          (g.isBefore = function (t, e) {
            return this.endOf(e) < w(t);
          }),
          (g.$g = function (t, e, n) {
            return _.u(t) ? this[e] : this.set(n, t);
          }),
          (g.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (g.valueOf = function () {
            return this.$d.getTime();
          }),
          (g.startOf = function (t, e) {
            var n = this,
              i = !!_.u(e) || e,
              f = _.p(t),
              l = function (t, e) {
                var r = _.w(
                  n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                  n
                );
                return i ? r : r.endOf(o);
              },
              m = function (t, e) {
                return _.w(
                  n
                    .toDate()
                    [t].apply(
                      n.toDate("s"),
                      (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                    ),
                  n
                );
              },
              $ = this.$W,
              g = this.$M,
              p = this.$D,
              v = "set" + (this.$u ? "UTC" : "");
            switch (f) {
              case h:
                return i ? l(1, 0) : l(31, 11);
              case c:
                return i ? l(1, g) : l(0, g + 1);
              case a:
                var M = this.$locale().weekStart || 0,
                  y = ($ < M ? $ + 7 : $) - M;
                return l(i ? p - y : p + (6 - y), g);
              case o:
              case d:
                return m(v + "Hours", 0);
              case u:
                return m(v + "Minutes", 1);
              case s:
                return m(v + "Seconds", 2);
              case r:
                return m(v + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (g.endOf = function (t) {
            return this.startOf(t, !1);
          }),
          (g.$set = function (t, e) {
            var n,
              a = _.p(t),
              f = "set" + (this.$u ? "UTC" : ""),
              l = ((n = {}),
              (n[o] = f + "Date"),
              (n[d] = f + "Date"),
              (n[c] = f + "Month"),
              (n[h] = f + "FullYear"),
              (n[u] = f + "Hours"),
              (n[s] = f + "Minutes"),
              (n[r] = f + "Seconds"),
              (n[i] = f + "Milliseconds"),
              n)[a],
              m = a === o ? this.$D + (e - this.$W) : e;
            if (a === c || a === h) {
              var $ = this.clone().set(d, 1);
              $.$d[l](m),
                $.init(),
                (this.$d = $.set(d, Math.min(this.$D, $.daysInMonth())).$d);
            } else l && this.$d[l](m);
            return this.init(), this;
          }),
          (g.set = function (t, e) {
            return this.clone().$set(t, e);
          }),
          (g.get = function (t) {
            return this[_.p(t)]();
          }),
          (g.add = function (e, i) {
            var f,
              d = this;
            e = Number(e);
            var l = _.p(i),
              m = function (t) {
                var n = w(d);
                return _.w(n.date(n.date() + Math.round(t * e)), d);
              };
            if (l === c) return this.set(c, this.$M + e);
            if (l === h) return this.set(h, this.$y + e);
            if (l === o) return m(1);
            if (l === a) return m(7);
            var $ = ((f = {}), (f[s] = t), (f[u] = n), (f[r] = 1e3), f)[l] || 1,
              g = this.$d.getTime() + e * $;
            return _.w(g, this);
          }),
          (g.subtract = function (t, e) {
            return this.add(-1 * t, e);
          }),
          (g.format = function (t) {
            var e = this,
              n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var i = t || "YYYY-MM-DDTHH:mm:ssZ",
              r = _.z(this),
              s = this.$H,
              u = this.$m,
              o = this.$M,
              a = n.weekdays,
              c = n.months,
              f = function (t, n, r, s) {
                return (t && (t[n] || t(e, i))) || r[n].slice(0, s);
              },
              h = function (t) {
                return _.s(s % 12 || 12, t, "0");
              },
              d =
                n.meridiem ||
                function (t, e, n) {
                  var i = t < 12 ? "AM" : "PM";
                  return n ? i.toLowerCase() : i;
                },
              m = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: o + 1,
                MM: _.s(o + 1, 2, "0"),
                MMM: f(n.monthsShort, o, c, 3),
                MMMM: f(c, o),
                D: this.$D,
                DD: _.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: f(n.weekdaysMin, this.$W, a, 2),
                ddd: f(n.weekdaysShort, this.$W, a, 3),
                dddd: a[this.$W],
                H: String(s),
                HH: _.s(s, 2, "0"),
                h: h(1),
                hh: h(2),
                a: d(s, u, !0),
                A: d(s, u, !1),
                m: String(u),
                mm: _.s(u, 2, "0"),
                s: String(this.$s),
                ss: _.s(this.$s, 2, "0"),
                SSS: _.s(this.$ms, 3, "0"),
                Z: r,
              };
            return i.replace($, function (t, e) {
              return e || m[t] || r.replace(":", "");
            });
          }),
          (g.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (g.diff = function (e, i, d) {
            var l,
              m = _.p(i),
              $ = w(e),
              g = ($.utcOffset() - this.utcOffset()) * t,
              p = this - $,
              v = _.m(this, $);
            return (
              (v =
                ((l = {}),
                (l[h] = v / 12),
                (l[c] = v),
                (l[f] = v / 3),
                (l[a] = (p - g) / 6048e5),
                (l[o] = (p - g) / 864e5),
                (l[u] = p / n),
                (l[s] = p / t),
                (l[r] = p / 1e3),
                l)[m] || p),
              d ? v : _.a(v)
            );
          }),
          (g.daysInMonth = function () {
            return this.endOf(c).$D;
          }),
          (g.$locale = function () {
            return y[this.$L];
          }),
          (g.locale = function (t, e) {
            if (!t) return this.$L;
            var n = this.clone(),
              i = S(t, e, !0);
            return i && (n.$L = i), n;
          }),
          (g.clone = function () {
            return _.w(this.$d, this);
          }),
          (g.toDate = function () {
            return new Date(this.valueOf());
          }),
          (g.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (g.toISOString = function () {
            return this.$d.toISOString();
          }),
          (g.toString = function () {
            return this.$d.toUTCString();
          }),
          e
        );
      })(),
      O = b.prototype;
    return (
      (w.prototype = O),
      [
        ["$ms", i],
        ["$s", r],
        ["$m", s],
        ["$H", u],
        ["$W", o],
        ["$M", c],
        ["$y", h],
        ["$D", d],
      ].forEach(function (t) {
        O[t[1]] = function (e) {
          return this.$g(e, t[0], t[1]);
        };
      }),
      (w.extend = function (t, e) {
        return t.$i || (t(e, b, w), (t.$i = !0)), w;
      }),
      (w.locale = S),
      (w.isDayjs = D),
      (w.unix = function (t) {
        return w(1e3 * t);
      }),
      (w.en = y[M]),
      (w.Ls = y),
      (w.p = {}),
      w
    );
  })());
var r = i.exports,
  s = n.getDefaultExportFromCjs(r),
  u = {
    name: "TopHeadline",
    props: {
      topList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isFromShare: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        titleLogo:
          "https://st.gtimg.com/design/a0dd4b7c0df996269393b3ac49874e97.png",
        indexImage: [
          "https://st.gtimg.com/design/b003640b09ecf2c4e8fcc50b03121da0.png",
          "https://st.gtimg.com/design/ef8e4d97801fbadf0cd7247bce0f02e2.png",
          "https://st.gtimg.com/design/d7d9191604737988c5c7ea07d487e181.png",
        ],
      };
    },
    computed: {
      list: function () {
        var t = n.cloneDeep(this.topList.slice(0, 3));
        return (
          t.forEach(function (t) {
            t.time =
              s().format("YYYY-MM-DD") === t.time.slice(0, 10)
                ? t.time.slice(10, -3)
                : t.time.slice(0, -3);
          }),
          t
        );
      },
    },
    methods: {
      clickTopItem: function (t, e) {
        this.$emit("goNewsDetail", t, e);
      },
    },
  },
  o = n._export_sfc(u, [
    [
      "render",
      function (t, e, i, r, s, u) {
        return {
          a: s.titleLogo,
          b: n.f(u.list, function (t, e, i) {
            return n.e(
              { a: s.indexImage[e] },
              s.indexImage[e] ? { b: s.indexImage[e] } : {},
              {
                c: n.t(t.title),
                d: n.n(t.read ? "read" : ""),
                e: n.t(t.source),
                f: t.comment_num >= 20,
              },
              t.comment_num >= 20 ? { g: n.t(t.comment_num) } : {},
              { h: t.formatedTime },
              t.formatedTime ? { i: n.t(t.formatedTime) } : {},
              { j: t.view_num },
              t.view_num ? { k: n.t(t.view_num) } : {},
              {
                l: n.o(
                  function (n) {
                    return u.clickTopItem(t, e);
                  },
                  5344,
                  t.id
                ),
                m: t.id,
              }
            );
          }),
        };
      },
    ],
    ["__scopeId", "data-v-62b78143"],
  ]);
wx.createComponent(o);
