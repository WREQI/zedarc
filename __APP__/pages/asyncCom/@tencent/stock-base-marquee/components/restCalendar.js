var e = require("../Index.js"),
  t = require("../../../../../common/vendor.js"),
  a = ["日", "一", "二", "三", "四", "五", "六"],
  o = {
    name: "rest-notice-swiper",
    props: {
      dateList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isLite: { type: Boolean, default: !0 },
    },
    data: function () {
      return { DateLabelList: a, restDayShowType: e.restDayShowType };
    },
    methods: {},
  },
  r = t._export_sfc(o, [
    [
      "render",
      function (e, a, o, r, n, i) {
        return {
          a: t.f(n.DateLabelList, function (e, a, o) {
            return { a: t.t(e), b: "dateLabel".concat(a) };
          }),
          b: t.f(o.dateList, function (e, a, r) {
            return {
              a: t.f(e, function (e, a, r) {
                return t.e(
                  { a: t.t(e.date), b: e.isHalf },
                  e.isHalf
                    ? {}
                    : e.isRest
                    ? { d: t.n(o.isLite ? "" : "blue") }
                    : (e.tipsType, n.restDayShowType.open, {}),
                  {
                    c: e.isRest,
                    e: e.tipsType === n.restDayShowType.open,
                    f:
                      e.tipsType === n.restDayShowType.holiday && e.holidayName,
                  },
                  e.tipsType === n.restDayShowType.holiday && e.holidayName
                    ? { g: t.t(e.holidayName) }
                    : {},
                  { h: "dateItem".concat(e.date) }
                );
              }),
              b: "dateLabel".concat(a),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-b7cf0c51"],
  ]);
wx.createComponent(r);
