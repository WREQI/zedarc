var t = require("../../../../../common/vendor.js"),
  e = [
    { text: "5%", value: 0.05 },
    { text: "10%", value: 0.1 },
    { text: "20%", value: 0.2 },
    { text: "30%", value: 0.3 },
  ],
  a = {
    props: {
      showPrice: { type: Boolean, default: !0 },
      isUp: { type: Boolean, default: !0 },
      zxj: { type: Number, default: 1 },
      zdfTagList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      priceAcc: { type: Number, default: 2 },
    },
    computed: {
      priceTaglList: function () {
        var t = this;
        return e.map(function (e, a) {
          return {
            id: a + 1,
            tagText: "".concat(t.isUp ? "涨" : "跌").concat(e.text),
            priceText: (t.zxj * (t.isUp ? 1 + e.value : 1 - e.value)).toFixed(
              t.priceAcc
            ),
            inputValue: (t.zxj * (t.isUp ? 1 + e.value : 1 - e.value)).toFixed(
              t.priceAcc
            ),
          };
        });
      },
      tagList: function () {
        return this.zdfTagList.map(function (t, e) {
          return {
            id: e + 1,
            tagText: "".concat(Number(100 * t).toFixed(0), "%"),
            inputValue: Number(100 * t).toFixed(0),
          };
        });
      },
    },
    methods: {
      handleTagClick: function (t) {
        this.$emit("tagClick", t);
      },
    },
  },
  i = t._export_sfc(a, [
    [
      "render",
      function (e, a, i, n, r, c) {
        return t.e(
          { a: i.showPrice },
          i.showPrice
            ? {
                b: t.f(c.priceTaglList, function (e, a, i) {
                  return {
                    a: t.t(e.tagText),
                    b: t.t(e.priceText),
                    c: e.tagText,
                    d: t.o(
                      function (t) {
                        return c.handleTagClick(e);
                      },
                      3422,
                      e.tagText
                    ),
                  };
                }),
              }
            : {
                c: t.f(c.tagList, function (e, a, i) {
                  return {
                    a: t.t(e.tagText),
                    b: e.id,
                    c: t.o(
                      function (t) {
                        return c.handleTagClick(e);
                      },
                      3423,
                      e.id
                    ),
                  };
                }),
                d: t.n(c.tagList.length < 4 ? "start" : ""),
              }
        );
      },
    ],
    ["__scopeId", "data-v-8319e818"],
  ]);
wx.createComponent(i);
