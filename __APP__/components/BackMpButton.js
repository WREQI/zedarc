var t = require("../common/vendor.js"),
  e = {
    props: { params: { type: Object, default: function () {} } },
    data: function () {
      return { btnText: "", path: "", dealerCode: "" };
    },
    computed: {
      backNavExtData: function () {
        var t;
        return (null == (t = this.params) ? void 0 : t.backNavExtData) || {};
      },
    },
    watch: {
      params: {
        handler: function (t) {
          t.btnText && t.mpPath && t.brokerCode
            ? this.showBackButton(t)
            : this.hideBackBtn();
        },
        deep: !0,
        immediate: !0,
      },
    },
    methods: {
      showBackButton: function (t) {
        var e = t.btnText,
          a = void 0 === e ? "" : e,
          n = t.mpPath,
          o = void 0 === n ? "" : n,
          d = t.brokerCode,
          c = void 0 === d ? "" : d;
        (this.btnText = decodeURIComponent(a)),
          (this.path = decodeURIComponent(o)),
          (this.dealerCode = c);
      },
      onClickBackButton: function () {
        t.openTradeEmbeddedMp({
          path: this.path,
          dealerCode: this.dealerCode,
          extraData: this.backNavExtData,
        });
      },
      hideBackBtn: function () {
        (this.btnText = ""), (this.path = ""), (this.dealerCode = "");
      },
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, n, o, d, c) {
        return t.e(
          { a: d.btnText },
          d.btnText
            ? {
                b: t.t(d.btnText ? "返回".concat(d.btnText) : ""),
                c: t.o(function () {
                  return (
                    c.onClickBackButton &&
                    c.onClickBackButton.apply(c, arguments)
                  );
                }, 2139),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-f39d4004"],
  ]);
wx.createComponent(a);
