require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  e = {
    components: {},
    props: {
      suggestionList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      keyword: { type: String, default: "" },
    },
    computed: {
      renderData: function () {
        return this.formatAddressItemHighlight(
          t.cloneDeep(this.suggestionList)
        );
      },
    },
    methods: {
      handleClose: function () {
        this.$emit("close");
      },
      handleClick: function (t) {
        this.$emit("choose", t);
      },
      formatAddressItemHighlight: function (t) {
        var e = this;
        Array.isArray(t) || (t = [t]);
        var r = this.keyword.length;
        return t.map(function (t) {
          var n = t.title,
            s = n.indexOf(e.keyword);
          return (
            (t.nameArr =
              s >= 0
                ? [
                    { text: n.substr(0, s) },
                    { text: n.substr(s, r), class: "blue" },
                    { text: n.substr(s + r, n.length - r - s) },
                  ]
                : [{ text: n }]),
            t
          );
        });
      },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, n, s, o, i) {
        return {
          a: t.o(function () {
            return i.handleClose && i.handleClose.apply(i, arguments);
          }),
          b: t.f(i.renderData, function (e, r, n) {
            return {
              a: t.f(e.nameArr, function (e, r, n) {
                return { a: t.t(e.text), b: t.n(e.class), c: r };
              }),
              b: t.t(e.address),
              c: r,
              d: t.o(function (t) {
                return i.handleClick(e);
              }, r),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-3024ce60"],
  ]);
wx.createComponent(r);
