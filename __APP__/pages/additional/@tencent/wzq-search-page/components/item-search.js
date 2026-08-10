var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  i = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  o = function (e, i, r) {
    return i in e
      ? t(e, i, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[i] = r);
  },
  a = require("../../../../../common/vendor.js"),
  s = {
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
      tabKey: { type: String, default: "" },
      showBackendFundLabel: { type: Boolean, default: !0 },
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
        var e;
        return (
          ("rank" === this.listType && this.formerPriceRatio.text) ||
          (null == (e = this.item) ? void 0 : e.rightInfoVisible)
        );
      },
      formerPriceRatio: function () {
        var e = this.item.priceRatio;
        return isNaN(+e)
          ? {}
          : {
              text: +e > 0 ? "+".concat(e, "%") : "".concat(e, "%"),
              className: this.getPriceColorClass(e),
            };
      },
    },
    methods: {
      getPriceColorClass: function (e) {
        var t = Number(e);
        return Number.isNaN(t)
          ? ""
          : 0 === t
          ? "price-equal"
          : t > 0
          ? "price-up"
          : "price-down";
      },
      addUserStock: function (t, a) {
        this.$emit(
          "addUserStock",
          (function (t, a) {
            for (var s in a || (a = {})) r.call(a, s) && o(t, s, a[s]);
            if (i) {
              var m,
                l = e(i(a));
              try {
                for (l.s(); !(m = l.n()).done; ) {
                  s = m.value;
                  n.call(a, s) && o(t, s, a[s]);
                }
              } catch (e) {
                l.e(e);
              } finally {
                l.f();
              }
            }
            return t;
          })({ index: a }, t),
          this.listType
        );
      },
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
Array || a.resolveComponent("highlight-text")();
var m = a._export_sfc(s, [
  [
    "render",
    function (e, t, i, r, n, o) {
      return a.e(
        { a: "rank" === i.listType },
        "rank" === i.listType
          ? {
              b: a.t(i.index + 1),
              c: a.n("rank-num rank-num-".concat(i.index + 1)),
            }
          : {},
        {
          d: a.p({ keyword: i.keyword, text: i.item.name || "" }),
          e: i.item.rightInfoVisible,
        },
        i.item.rightInfoVisible
          ? {
              f: a.t(i.item.rightInfoValue),
              g: a.n(i.item.rightInfoValueClass),
            }
          : {},
        {
          h: a.n(i.item.iconClass),
          i: a.p({ keyword: i.keyword, text: i.item.showScode || "" }),
          j: "D" === i.item.status,
        },
        ("D" === i.item.status || i.item.status, {}),
        {
          k: "C" === i.item.status,
          l:
            "all" !== i.tabKey &&
            "fund" === i.listType &&
            "jj" === i.item.type &&
            !i.showBackendFundLabel,
        },
        ("all" === i.tabKey ||
          "fund" !== i.listType ||
          "jj" !== i.item.type ||
          i.showBackendFundLabel) &&
          i.showBackendFundLabel
          ? {
              n: a.f(i.item.labelList, function (e, t, i) {
                return {
                  a: a.t(e.name),
                  b:
                    null != e.id
                      ? "".concat(e.id, "_").concat(t)
                      : "label_".concat(t),
                  c: a.n(
                    e.name && e.name.indexOf("免申购费") > -1
                      ? "label-gray"
                      : 58 === e.id
                      ? "label-orange"
                      : ""
                  ),
                };
              }),
            }
          : {},
        { m: i.showBackendFundLabel, o: o.shouldShowFormerName },
        o.shouldShowFormerName
          ? { p: a.p({ keyword: i.keyword, text: o.formerNameText }) }
          : {},
        { q: i.item.rightInfoVisible && i.item.rightInfoName },
        i.item.rightInfoVisible && i.item.rightInfoName
          ? { r: a.t(i.item.rightInfoName) }
          : {},
        { s: "rank" === i.listType && o.formerPriceRatio.text },
        "rank" === i.listType && o.formerPriceRatio.text
          ? {
              t: a.t(o.formerPriceRatio.text),
              v: a.n("rank-price-ratio ".concat(o.formerPriceRatio.className)),
            }
          : {},
        { w: !i.item.noAdd && "userStock" !== i.listType },
        i.item.noAdd || "userStock" === i.listType
          ? {}
          : a.e(
              { x: !i.item.isChoose },
              i.item.isChoose
                ? { A: o.addedImg }
                : {
                    y: o.addImg,
                    z: a.o(function (e) {
                      return o.addUserStock(i.item, i.index);
                    }, 4730),
                  },
              { B: o.hasMarginLeft ? 1 : "" }
            ),
        {
          C: a.n(o.theme),
          D: a.n(i.index < i.renderSerialNumber - 1 && "item-border-bottom"),
          E: a.o(function () {
            return o.jumpToDetail && o.jumpToDetail.apply(o, arguments);
          }, 4731),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d228c318"],
]);
wx.createComponent(m);
