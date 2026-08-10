var e = require("../../../../../common/vendor.js"),
  t = {
    options: { styleIsolation: "shared" },
    components: {
      highlightText: function () {
        return "./highlight-text.js";
      },
    },
    inject: ["theme"],
    props: {
      item: {
        type: Object,
        default: function () {
          return {};
        },
      },
      index: { type: Number, default: 0 },
      listType: { type: String, default: "stock" },
      keyword: { type: String, default: "" },
      renderSerialNumber: { type: Number, default: 1 },
    },
    computed: {
      addImg: function () {
        var e = {
          lite: "https://st.gtimg.com/design/73f2d81d6b55150b5bbbd1e401a985fb.png",
          profession:
            "https://st.gtimg.com/design/7ab83c07f612be2b9843f187850face0.png",
        };
        return e[this.theme] || e.lite;
      },
      addedImg: function () {
        var e = {
          lite: "https://st.gtimg.com/design/15f284f9790b4faf32fbd2f922362a05.png",
          profession:
            "https://st.gtimg.com/design/980de6a53ba4675439f49900fae113cb.png",
        };
        return e[this.theme] || e.lite;
      },
      formerNameText: function () {
        return this.getFormerNameText();
      },
      shouldShowFormerName: function () {
        return this.showFormerName();
      },
      hasMarginLeft: function () {
        return (
          ("rank" === this.listType && this.formerPriceRatio.text) ||
          this.item.holdPercent
        );
      },
      formerPriceRatio: function () {
        var e = this.item.priceRatio;
        return isNaN(+e)
          ? {}
          : 0 == +e
          ? { text: "0.00%", className: "rank-price-ratio-equal" }
          : +e > 0
          ? { text: "+".concat(e, "%"), className: "rank-price-ratio-up" }
          : { text: "".concat(e, "%"), className: "rank-price-ratio-down" };
      },
    },
    methods: {
      jumpToDetail: function () {
        this.$emit("jumpToDetail", this.item, this.index);
      },
      showFormerName: function () {
        if (!this.item || !this.item.suggest) return !1;
        var e = this.item.reportInfo;
        return (
          this.formerNameText &&
          ("history" === this.listType ||
            "secu_former_name" === (null == e ? void 0 : e.match_field))
        );
      },
      getFormerNameText: function () {
        var e;
        if (!(null == (e = this.item) ? void 0 : e.suggest)) return "";
        var t = this.item.suggest.match(/曾用名[:：]\s*([^｜]+)/);
        return t ? t[1] : "";
      },
    },
  };
Array || e.resolveComponent("highlight-text")();
var i = e._export_sfc(t, [
  [
    "render",
    function (t, i, r, o, n, a) {
      return e.e(
        { a: "rank" === r.listType },
        "rank" === r.listType
          ? {
              b: e.t(r.index + 1),
              c: e.n("rank-num rank-num-".concat(r.index + 1)),
            }
          : {},
        {
          d: e.p({ keyword: r.keyword, text: r.item.name || "" }),
          e: r.item.holdPercent,
        },
        r.item.holdPercent ? { f: e.t(r.item.holdPercent) } : {},
        {
          g: e.n(r.item.iconClass),
          h: e.p({ keyword: r.keyword, text: r.item.showScode || "" }),
          i: "D" === r.item.status,
        },
        ("D" === r.item.status || r.item.status, {}),
        { j: "C" === r.item.status, k: "jj" === r.item.type },
        "jj" === r.item.type
          ? {}
          : {
              l: e.f(r.item.labelList, function (t, i, r) {
                return {
                  a: e.t(t.name),
                  b: t.id,
                  c: e.n(58 === t.id && "label-orange"),
                };
              }),
            },
        { m: a.shouldShowFormerName },
        a.shouldShowFormerName
          ? { n: e.p({ keyword: r.keyword, text: a.formerNameText }) }
          : {},
        { o: r.item.holdPercent },
        (r.item.holdPercent, {}),
        { p: "rank" === r.listType && a.formerPriceRatio.text },
        "rank" === r.listType && a.formerPriceRatio.text
          ? {
              q: e.t(a.formerPriceRatio.text),
              r: e.n("rank-price-ratio ".concat(a.formerPriceRatio.className)),
            }
          : {},
        { s: !r.item.noAdd && "history" !== r.listType },
        r.item.noAdd || "history" === r.listType
          ? {}
          : e.e(
              { t: r.item.isChoose },
              r.item.isChoose ? { v: a.addedImg } : {},
              { w: a.hasMarginLeft ? 1 : "" }
            ),
        {
          x: e.n(a.theme),
          y: e.n(r.index < r.renderSerialNumber - 1 && "item-border-bottom"),
          z: e.o(function () {
            return a.jumpToDetail && a.jumpToDetail.apply(a, arguments);
          }, 4106),
        }
      );
    },
  ],
  ["__scopeId", "data-v-941d98dd"],
]);
wx.createComponent(i);
