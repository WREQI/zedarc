require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = require("../../../../config/enum.js"),
  t = require("../../../../utils/getPlatform.js"),
  a = {
    components: {
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      selectedVal: { type: String, default: "" },
    },
    setup: function (a) {
      var o = e.getCurrentInstance().proxy,
        r = e.ref([0, 0]),
        u = t.getPlatform().isMiniProgram,
        i = null,
        c = e.computed(function () {
          var e = n.INVEST_ORDER_PERIOD_LIST.map(function (e) {
              return e.text;
            }),
            t = [];
          switch (n.INVEST_ORDER_PERIOD_LIST[r.value[0]].text) {
            case n.INVEST_ORDER_PERIOD_TEXT[n.INVEST_ORDER_PERIOD.WEEK]:
            case n.INVEST_ORDER_PERIOD_TEXT[n.INVEST_ORDER_PERIOD.DOUBLE_WEEK]:
              t = n.INVEST_WEEK_LIST;
              break;
            case n.INVEST_ORDER_PERIOD_TEXT[n.INVEST_ORDER_PERIOD.MONTH]:
              t = n.INVEST_MONTH_DAY_LIST;
              break;
            default:
              t = [];
          }
          return { periodRange: e, dayRange: t };
        });
      function l(n) {
        var t = !1;
        if (n) {
          var a = n.split("-");
          a[0] &&
            a[1] &&
            e.isNumber(+a[0]) &&
            e.isNumber(+a[1]) &&
            ((t = !0), (r.value = [+a[0], +a[1]]));
        }
        t || (r.value = [0, 0]);
      }
      function d(e) {
        i && clearTimeout(i),
          u
            ? (i = setTimeout(function () {
                l(e);
              }, 100))
            : l(e);
      }
      return (
        e.watch(
          function () {
            return a.selectedVal;
          },
          function (e) {
            d(e);
          },
          { immediate: !0 }
        ),
        e.watch(
          function () {
            return a.value;
          },
          function (e) {
            e &&
              (d(a.selectedVal),
              setTimeout(function () {
                o.$forceUpdate();
              }, 300));
          }
        ),
        {
          indicatorStyle: "height: 44px;",
          selectedIndex: r,
          handleCancel: function () {
            o.$emit("close");
          },
          selectRange: c,
          handleConfirm: function () {
            o.$emit("change", r.value.join("-"));
          },
          handleChange: function (e) {
            var n = e.detail.value,
              t = void 0 !== n[0] ? n[0] : r.value[0],
              a = void 0 !== n[1] ? n[1] : r.value[1];
            void 0 !== n[0] &&
              t !== r.value[0] &&
              a >= c.value.dayRange.length &&
              (a = 0),
              (r.value = [t, a]);
          },
        }
      );
    },
  };
Array || e.resolveComponent("action-sheet")();
var o = e._export_sfc(a, [
  [
    "render",
    function (n, t, a, o, r, u) {
      return e.e(
        { a: a.value },
        a.value
          ? {
              b: e.f(o.selectRange.periodRange, function (n, t, a) {
                return {
                  a: e.t(n),
                  b: t,
                  c: e.n(t !== o.selectedIndex[0] ? "unselected" : ""),
                };
              }),
              c: e.f(o.selectRange.dayRange, function (n, t, a) {
                return {
                  a: e.t(n),
                  b: t,
                  c: e.n(t !== o.selectedIndex[1] ? "unselected" : ""),
                };
              }),
              d: o.indicatorStyle,
              e: o.selectedIndex,
              f: e.o(function () {
                return o.handleChange && o.handleChange.apply(o, arguments);
              }),
              g: e.o(function () {
                return o.handleConfirm && o.handleConfirm.apply(o, arguments);
              }),
              h: e.o(o.handleCancel),
              i: e.o(o.handleCancel),
              j: e.p({
                value: !0,
                title: "定投周期",
                "show-title-border-bottom": !1,
                "confirm-button": !1,
                "picker-style": !0,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-d48b0195"],
]);
wx.createComponent(o);
