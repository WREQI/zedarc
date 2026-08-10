var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  o = function (t, n, r) {
    return n in t
      ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r);
  },
  s = require("../../../../../../../common/vendor.js"),
  d = {
    0: "https://st.gtimg.com/design/d56f018323c2eb25d839eae0f764ab66.png",
    1: "https://st.gtimg.com/design/1606a04a92a7fcac9f71eb4ab5794c04.png",
    2: "https://st.gtimg.com/design/f6c470d786e1a71cc8e5e5759957dcc7.png",
    3: "https://st.gtimg.com/design/2f3c472b66694bc6dea342c54d26cdb1.png",
    4: "https://st.gtimg.com/design/d56f018323c2eb25d839eae0f764ab66.png",
    5: "https://st.gtimg.com/design/d56f018323c2eb25d839eae0f764ab66.png",
    6: "https://st.gtimg.com/design/11cce51432e8c45732f9bd66de070d96.png",
  },
  f = {
    name: "Clock",
    props: {
      dateList: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return { dataList: [] };
    },
    computed: {
      bgPercent: function () {
        var t = this.dateList.findIndex(function (t) {
          return 3 == +t.status;
        });
        return t >= 0 ? 25 * t : 0;
      },
    },
    watch: {
      dateList: {
        handler: function (e) {
          var s;
          this.dataList = e
            .map(function (e) {
              return (
                (s = (function (e, n) {
                  for (var r in n || (n = {})) a.call(n, r) && o(e, r, n[r]);
                  if (c) {
                    var s,
                      d = t(c(n));
                    try {
                      for (d.s(); !(s = d.n()).done; ) {
                        r = s.value;
                        i.call(n, r) && o(e, r, n[r]);
                      }
                    } catch (t) {
                      d.e(t);
                    } finally {
                      d.f();
                    }
                  }
                  return e;
                })({}, e)),
                (f = { icon: d[+e.status] || d[0] }),
                n(s, r(f))
              );
              var s, f;
            })
            .sort(
              ((s = "date"),
              function (t, e) {
                return t[s] - e[s];
              })
            );
        },
        deep: !0,
        immediate: !0,
      },
    },
    methods: {
      formatDate: function (t) {
        if (!t) return "";
        var e = String(t).substring(4, 8);
        return 4 === e.length
          ? "".concat(e.slice(0, 2), "/").concat(e.slice(2))
          : "";
      },
    },
  },
  u = s._export_sfc(f, [
    [
      "render",
      function (t, e, n, r, c, a) {
        return {
          a: s.f(c.dataList, function (t, e, n) {
            return {
              a: t.icon,
              b: s.t(a.formatDate(t.date)),
              c: s.t(t.text),
              d: "clock-item-" + e,
            };
          }),
          b: a.bgPercent + "%",
        };
      },
    ],
    ["__scopeId", "data-v-3abce4dd"],
  ]);
wx.createComponent(u);
