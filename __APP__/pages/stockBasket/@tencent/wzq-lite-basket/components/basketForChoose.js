var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  s = function (e, o, r) {
    return o in e
      ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[o] = r);
  },
  l = require("../../../../../common/vendor.js"),
  c = {
    components: {
      basketOverview: function () {
        return "./basketOverview.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      basketData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isPageShow: { type: Boolean, default: !1 },
      positionid: { type: Number, default: 0 },
      from: { type: String, default: "" },
    },
    emits: ["goToStockDetail", "goToBasketDetail"],
    methods: {
      goToStockDetail: function () {
        var e, t;
        this.$emit(
          "goToStockDetail",
          null == (t = null == (e = this.basketData) ? void 0 : e.info)
            ? void 0
            : t.id
        );
      },
      headerReportLog: function (t) {
        var l, c, p, u;
        this.$emit(
          "headerReportLog",
          ((p = (function (t, o) {
            for (var r in o || (o = {})) a.call(o, r) && s(t, r, o[r]);
            if (i) {
              var l,
                c = e(i(o));
              try {
                for (c.s(); !(l = c.n()).done; ) {
                  r = l.value;
                  n.call(o, r) && s(t, r, o[r]);
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
            }
            return t;
          })({}, t)),
          (u = {
            gdId:
              null == (c = null == (l = this.basketData) ? void 0 : l.info)
                ? void 0
                : c.id,
          }),
          o(p, r(u)))
        );
      },
      goToBasketDetail: function () {
        var e,
          t,
          o =
            null == (t = null == (e = this.basketData) ? void 0 : e.info)
              ? void 0
              : t.id;
        this.$emit("goToBasketDetail", o);
      },
    },
  };
Array || l.resolveComponent("basket-overview")();
var p = l._export_sfc(c, [
  [
    "render",
    function (e, t, o, r, i, a) {
      return {
        a: l.o(a.goToStockDetail, 4020),
        b: l.o(a.goToBasketDetail, 4021),
        c: l.p({
          "report-prefix": "hq.portfolio",
          "report-extra": { is_from_category: 0 },
          "basket-data": o.basketData,
          "is-show-desc": !1,
          "is-show-footer": !0,
          "is-hstab-show": o.isPageShow,
          positionid: o.positionid,
          from: o.from,
        }),
      };
    },
  ],
]);
wx.createComponent(p);
