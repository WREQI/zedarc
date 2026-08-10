var t = require("../../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    components: {
      HeadStock: function () {
        return "./HeadStock.js";
      },
    },
    props: {
      info: { type: Object, default: null },
      type: { type: String, default: null },
    },
    data: function () {
      return { env: this.hqBridge.ENV };
    },
    computed: {
      curProgress: function () {
        var t = this.compareDate(this.info.zqgbrq),
          e = this.compareDate(this.info.ssrq),
          n = this.compareDate(this.info.sgrq);
        return e ? 3 : t ? 2 : n ? 1 : 0;
      },
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    methods: {
      compareDate: function (t) {
        if ("--" === t) return !1;
        if (void 0 === t || "" === t) return !1;
        var e = t.split("-");
        if (3 !== e.length) return !1;
        var n = new Date(),
          r = ""
            .concat(String(e[0]), "-")
            .concat(String(e[1]).padStart(2, "0"), "-")
            .concat(String(e[2]).padStart(2, "0")),
          s = ""
            .concat(String(n.getFullYear()), "-")
            .concat(String(n.getMonth() + 1).padStart(2, "0"), "-")
            .concat(String(n.getDate()).padStart(2, "0"));
        return Date.parse(s) >= Date.parse(r);
      },
      isPass: function (t) {
        return this.curProgress > t
          ? "pass-".concat(this.env)
          : "unpass-".concat(this.env);
      },
    },
  };
Array || t.resolveComponent("HeadStock")();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, r, s, a, i) {
      return t.e(
        { a: t.p({ info: r.info, type: r.type }), b: !i.isMp },
        (i.isMp, {}),
        {
          c: t.n(i.isPass(0)),
          d: t.n(i.isPass(1)),
          e: t.n(i.isPass(1)),
          f: t.n(i.isPass(2)),
          g: t.n(i.isPass(2)),
          h: t.n(i.isMp ? "no-top" : ""),
          i: t.t(r.info.sgrq),
          j: t.t(r.info.zqgbrq),
          k: t.t(r.info.ssrq),
          l: t.n("purchase-detail-header-schedule-description-".concat(a.env)),
          m: t.n(i.isMp ? "purchase-detail-header-mp" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-092eba33"],
]);
wx.createComponent(n);
