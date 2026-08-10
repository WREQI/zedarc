var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = function (e, r, i) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[r] = i);
  },
  n = function (t, n) {
    for (var a in n || (n = {})) i.call(n, a) && s(t, a, n[a]);
    if (r) {
      var c,
        b = e(r(n));
      try {
        for (b.s(); !(c = b.n()).done; ) {
          a = c.value;
          o.call(n, a) && s(t, a, n[a]);
        }
      } catch (e) {
        b.e(e);
      } finally {
        b.f();
      }
    }
    return t;
  },
  a = require("../../../wzq-lite-basket/api/CheckIntersectionObserver.js"),
  c = require("../../../wzq-lite-basket/api/ReportLog.js"),
  b = require("../../../../../../common/vendor.js"),
  p = {
    components: {
      basketOverviewLite: function () {
        return "../../../wzq-lite-basket/components/basketOverviewLite.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      isHstabShow: { type: Boolean, default: !1 },
      reportPrefix: { type: String, default: "" },
      basketData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      categoryId: { type: String, default: "" },
      itemIndex: { type: Number, default: 0 },
    },
    watch: {
      isHstabShow: {
        handler: function (e) {
          e && !this.isHasObserved
            ? this.openObserver()
            : (this.closeObserver(), (this.isHasObserved = !1));
        },
        immediate: !0,
      },
    },
    mounted: function () {
      this.openObserver();
    },
    beforeDestroy: function () {
      this.closeObserver();
    },
    methods: {
      openObserver: function () {
        var e = this;
        c.REPORT_PREFIX_REG.test(this.reportPrefix) &&
          a.checkIntersectionObserver(
            this,
            ".column-list-item",
            function (t) {
              t && (e.isHasObserved = !0);
            },
            0
          );
      },
      closeObserver: function () {
        c.REPORT_PREFIX_REG.test(this.reportPrefix) &&
          a.checkIntersectionObserver(this, "");
      },
      goToBasketDetail: function () {},
      reportLog: function (e) {
        var t,
          r,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = {
            category_id: this.categoryId || this.basketType,
            watchlist_id:
              null == (r = null == (t = this.basketData) ? void 0 : t.info)
                ? void 0
                : r.id,
            positionid: this.itemIndex,
          };
        this.hqBridge.report(
          "".concat(this.reportPrefix, ".").concat(e),
          n(n({}, o), i)
        );
      },
    },
  };
Array || b.resolveComponent("basketOverviewLite")();
var l = b._export_sfc(p, [
  [
    "render",
    function (e, t, r, i, o, s) {
      return {
        a: b.o(s.goToBasketDetail, 3410),
        b: b.p({
          "is-hstab-show": r.isHstabShow,
          "report-prefix": r.reportPrefix,
          "basket-data": r.basketData,
          "is-show-footer": !0,
          positionid: r.itemIndex,
          "is-big-radius": !0,
          "is-bg-white": !0,
        }),
      };
    },
  ],
]);
wx.createComponent(l);
