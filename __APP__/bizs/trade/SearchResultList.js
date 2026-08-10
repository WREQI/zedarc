require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("../../stores/app/useMode.js"),
  r = {
    components: {},
    props: {
      formData: [Array, Object],
      highlightKeyWord: { type: Boolean, default: !1 },
      searchCode: { type: String, default: "" },
      isShowAddBtn: Boolean,
      showBorder: { type: Boolean, default: !1 },
      simpleMode: { type: Boolean, default: !1 },
    },
    emits: ["click"],
    setup: function (r) {
      var o = e.storeToRefs(t.useModeStore()).simpleMode;
      return {
        isSimpleMode: e.computed(function () {
          return r.simpleMode || o.value;
        }),
      };
    },
    computed: {
      renderData: function () {
        return this.highlightKeyWord
          ? this.formatStockItemHighlight(e.cloneDeep(this.formData))
          : Array.isArray(this.formData)
          ? this.formData
          : [this.formData];
      },
    },
    methods: {
      handleClick: function (e) {
        this.$emit("click", e);
      },
      formatStockItemHighlight: function (e) {
        var t = this;
        Array.isArray(e) || (e = [e]);
        var r = this.searchCode.length;
        return e.map(function (e) {
          var o = e.name,
            n = e.code,
            a = o.indexOf(t.searchCode),
            i = n.indexOf(t.searchCode);
          return (
            (e.nameArr =
              a >= 0
                ? [
                    { text: o.substr(0, a) },
                    { text: o.substr(a, r), class: "color-primary" },
                    { text: o.substr(r + a, o.length - r - a) },
                  ]
                : [{ text: o }]),
            (e.codeArr =
              i >= 0
                ? [
                    { text: n.substr(0, i) },
                    { text: n.substr(i, r), class: "color-primary" },
                    { text: n.substr(r + i, n.length - r - i) },
                  ]
                : [{ text: n }]),
            e
          );
        });
      },
      addStock: function (e) {
        this.$emit("onAddStock", e);
      },
    },
  };
Array || e.resolveComponent("MarketLabel")(), Math;
var o = e._export_sfc(r, [
  [
    "render",
    function (t, r, o, n, a, i) {
      return {
        a: e.f(i.renderData, function (t, r, n) {
          return e.e(
            o.highlightKeyWord
              ? {
                  a: e.f(t.nameArr, function (t, r, o) {
                    return { a: e.t(t.text), b: e.n(t.class), c: r };
                  }),
                }
              : { b: e.t(t.name) },
            {
              c: "d0123a66-0-" + n,
              d: e.p({ market: t.market, type: t.class }),
            },
            o.highlightKeyWord
              ? {
                  e: e.f(t.codeArr, function (t, r, o) {
                    return { a: e.t(t.text), b: e.n(t.class), c: r };
                  }),
                }
              : { f: e.t(t.code) },
            o.isShowAddBtn
              ? e.e(
                  { g: t.followed },
                  t.followed
                    ? {}
                    : {
                        h: e.o(function (e) {
                          return i.addStock(t);
                        }, r),
                      }
                )
              : {},
            {
              i: r,
              j: e.o(function (e) {
                return i.handleClick(t);
              }, r),
            }
          );
        }),
        b: o.highlightKeyWord,
        c: o.highlightKeyWord,
        d: o.isShowAddBtn,
        e: e.n(o.isShowAddBtn ? "flex-between" : ""),
        f: e.n(o.showBorder ? "border--bottom" : ""),
        g: e.n(n.isSimpleMode && !o.showBorder ? "" : "border--top"),
        h: e.n(n.isSimpleMode ? "smartbox__simple-mode" : ""),
      };
    },
  ],
  ["__scopeId", "data-v-d0123a66"],
]);
wx.createComponent(o);
