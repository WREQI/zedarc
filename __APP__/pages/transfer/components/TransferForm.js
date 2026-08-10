require("../../../app.js");
var t = require("../../../utils/getPlatform.js"),
  n = require("../../../common/vendor.js"),
  e = {
    name: "TransferForm",
    props: {
      money: { default: "", type: [String, Number] },
      initMaxLen: { type: Number, default: 0 },
      pageStatus: {
        type: Object,
        default: function () {
          return {};
        },
      },
      transferType: { type: String, default: "" },
    },
    setup: function (t) {
      return {
        transferData: n.inject("transferData"),
        moneyUnit: n.computed(function () {
          var n = Number(t.money);
          return (
            (n &&
              [
                "",
                "",
                "百",
                "千",
                "万",
                "十万",
                "百万",
                "千万",
                "亿",
                "十亿",
                "百亿",
                "千亿",
                "万亿",
                "十万亿",
                "百万亿",
                "千万亿",
              ][String(n).split(".")[0].length - 1]) ||
            ""
          );
        }),
      };
    },
    data: function () {
      return { androidFocus: !1 };
    },
    computed: {
      maxlength: function () {
        if (t.getPlatform().isMpPlugin && this.initMaxLen > 0)
          return this.initMaxLen;
        var n = String(this.money);
        return n.length >= 12 || null === this.money
          ? 12
          : -1 !== n.indexOf(".")
          ? n.split(".")[0].length + 1 + 2
          : n.length + 2;
      },
    },
    methods: {
      oninput: function (t) {
        var n = t.detail.value;
        if ((/^00/.test(n) && (n = "0.00"), -1 !== n.indexOf("."))) {
          var e = n.split(".");
          if (e[1].length > 2)
            return (
              (n = "".concat(e[0], ".").concat(e[1].slice(0, 2))),
              this.$emit("input", n),
              n
            );
        }
        this.$emit("input", n);
      },
      onFocus: function () {
        var n = t.getPlatform().platform;
        ("android" !== n && n !== t.PLATFORM_HARMONY) ||
          (this.androidFocus = !0),
          this.$emit("focus"),
          this.$stat.click(
            "trade.transfer".concat(this.transferType, ".input.focus")
          );
      },
      onBlur: function () {
        (this.androidFocus = !1), this.$emit("blur");
      },
    },
  },
  r = n._export_sfc(e, [
    [
      "render",
      function (t, e, r, i, o, a) {
        return n.e(
          { a: !i.transferData.support && !i.transferData.supportCard },
          i.transferData.support || i.transferData.supportCard
            ? {
                c: n.t(i.moneyUnit),
                d: i.moneyUnit.length < 2 ? 1 : "",
                e: 0 !== r.money && r.money ? String(r.money) : "",
                f: n.n(o.androidFocus ? "fund-input-focus-android" : ""),
                g: a.maxlength,
                h: n.o(function () {
                  return a.oninput && a.oninput.apply(a, arguments);
                }),
                i: n.o(function () {
                  return a.onFocus && a.onFocus.apply(a, arguments);
                }),
                j: n.o(function () {
                  return a.onBlur && a.onBlur.apply(a, arguments);
                }),
              }
            : { b: n.t(i.transferData.notSupportText) }
        );
      },
    ],
  ]);
wx.createComponent(r);
