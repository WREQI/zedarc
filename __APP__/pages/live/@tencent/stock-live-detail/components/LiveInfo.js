var t = require("../../../../../common/vendor.js"),
  e = [20, 21, 22],
  i = { 20: "预告", 21: "直播中", 22: "回顾" },
  a = {
    props: {
      item: { type: Object, default: function () {} },
      isHorizonal: { type: Boolean, default: !1 },
    },
    data: function () {
      return {};
    },
    computed: {
      enableStatus: function () {
        return e;
      },
    },
    methods: {
      formatLiveStatus: function (t) {
        return i[t] || "";
      },
      formatNum: function (t) {
        if ("" === t || null == t) return "0";
        if (isNaN(t)) return "--";
        var e = Number(t);
        return e < 0
          ? "--"
          : e > 2e6
          ? "200万+"
          : e >= 1e4
          ? "".concat((e / 1e4).toFixed(1), "万")
          : "".concat(parseInt(e, 10));
      },
    },
  },
  n = t._export_sfc(a, [
    [
      "render",
      function (e, i, a, n, u, s) {
        return t.e(
          { a: a.item && s.enableStatus.includes(a.item.live_status) },
          a.item && s.enableStatus.includes(a.item.live_status)
            ? t.e(
                { b: 20 == a.item.live_status },
                (a.item.live_status, {}),
                { c: 21 == a.item.live_status },
                (a.item.live_status, {}),
                { d: 22 == a.item.live_status },
                (a.item.live_status, {}),
                {
                  e: t.t(
                    ""
                      .concat(s.formatLiveStatus(a.item.live_status), "·")
                      .concat(s.formatNum(a.item.participate_num), "人围观")
                  ),
                  f: t.n(a.isHorizonal ? "horizonal-box" : ""),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-78208bd8"],
  ]);
wx.createComponent(n);
