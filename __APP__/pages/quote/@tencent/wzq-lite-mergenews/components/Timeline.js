var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  p = require("../../../../../common/vendor.js"),
  s = {
    components: {
      EventBlock: function () {
        return "./EventBlock.js";
      },
      MatchText: function () {
        return "./MatchText.js";
      },
    },
    props: {
      skin: { type: String, default: "" },
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return {
        dealList: [],
        nowYear: "",
        nowDate: "",
        dealType: ["10", "11", "12"],
      };
    },
    computed: {},
    created: function () {
      var t = new p.dayjs();
      (this.nowYear = t.format("YYYY")), (this.nowDate = t.format("MM-DD"));
      var s = t.format("YYYY-MM-DD"),
        l = this.list.map(function (t) {
          var l,
            u,
            f = new p.dayjs(t.date),
            m = [];
          return (
            Array.isArray(t.more) && (m = [].concat(t.more)).unshift(t),
            (l = (function (t, r) {
              for (var n in r || (r = {})) a.call(r, n) && i(t, n, r[n]);
              if (o) {
                var p,
                  s = e(o(r));
                try {
                  for (s.s(); !(p = s.n()).done; ) {
                    n = p.value;
                    c.call(r, n) && i(t, n, r[n]);
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
              }
              return t;
            })({}, t)),
            (u = {
              open: !1,
              year: f.format("YYYY"),
              mDay: s === f.format("YYYY-MM-DD") ? "今天" : f.format("MM-DD"),
              more: m,
            }),
            r(l, n(u))
          );
        });
      this.dealList = [].concat(l);
    },
    mounted: function () {},
    methods: {
      openIt: function (e) {
        var t = [].concat(this.dealList);
        (t[e].open = !t[e].open), (this.dealList = [].concat(t));
      },
    },
  };
Array || (p.resolveComponent("MatchText") + p.resolveComponent("EventBlock"))();
var l = p._export_sfc(s, [
  [
    "render",
    function (e, t, r, n, o, a) {
      return {
        a: p.f(o.dealList, function (e, t, r) {
          return p.e(
            { a: p.t(e.mDay), b: o.nowYear !== e.year },
            o.nowYear !== e.year ? { c: p.t(e.year) } : {},
            {
              d: p.n("今天" === e.mDay ? "today-core" : "cicle-core"),
              e: p.n("今天" === e.mDay ? "today-edge" : "cicle-edge"),
              f: p.t(e.type_name),
              g: e.more && e.more.length > 1,
            },
            e.more && e.more.length > 1
              ? {
                  h: p.n(e.open && "open"),
                  i: p.o(
                    function (e) {
                      return a.openIt(t);
                    },
                    2906,
                    e.ob_id
                  ),
                }
              : {},
            { j: !e.open },
            e.open
              ? { m: "9662257c-1-" + r, n: p.p({ list: e.more }) }
              : { k: "9662257c-0-" + r, l: p.p({ textData: e }) },
            { o: e.ob_id }
          );
        }),
      };
    },
  ],
  ["__scopeId", "data-v-9662257c"],
]);
wx.createComponent(l);
