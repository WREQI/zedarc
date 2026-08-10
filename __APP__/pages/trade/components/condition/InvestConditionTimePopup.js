require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = require("../../../../config/enum.js"),
  t = require("../../../../utils/getPlatform.js");
require("../../../../service/broker.js");
var o = require("../../../../config/broker/11100/index.js"),
  r = {
    components: {
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !1 },
      selectedVal: { type: String, default: "" },
    },
    setup: function (r) {
      var a,
        i,
        l,
        u = e.getCurrentInstance().proxy,
        c = e.ref([0]),
        d = e.ref(
          (null ==
          (l =
            null == (i = null == (a = o.brokerConfig) ? void 0 : a.trade)
              ? void 0
              : i.investCond)
            ? void 0
            : l.investTradeTimeList) || n.INVEST_TRADE_TIME_LIST
        ),
        s = t.getPlatform().isMiniProgram,
        f = null;
      function v(e) {
        var n = !1;
        e &&
          d.value.forEach(function (t, o) {
            t === e && ((c.value = [o]), (n = !0));
          }),
          n || (c.value = [0]);
      }
      function m(e) {
        f && clearTimeout(f),
          s
            ? (f = setTimeout(function () {
                v(e);
              }, 100))
            : v(e);
      }
      return (
        e.watch(
          function () {
            return r.selectedVal;
          },
          function (e) {
            m(e);
          },
          { immediate: !0 }
        ),
        e.watch(
          function () {
            return r.value;
          },
          function (e) {
            e &&
              (m(r.selectedVal),
              setTimeout(function () {
                u.$forceUpdate();
              }, 300));
          }
        ),
        {
          indicatorStyle: "height: 44px;",
          selectedIndex: c,
          handleCancel: function () {
            u.$emit("close");
          },
          selectRange: d,
          handleConfirm: function () {
            u.$emit("change", d.value[c.value[0]]);
          },
          handleChange: function (e) {
            var n = e.detail.value,
              t = void 0 !== n[0] ? n[0] : c.value[0];
            c.value = [t];
          },
        }
      );
    },
  };
Array || e.resolveComponent("action-sheet")();
var a = e._export_sfc(r, [
  [
    "render",
    function (n, t, o, r, a, i) {
      return e.e(
        { a: o.value },
        o.value
          ? {
              b: e.f(r.selectRange, function (n, t, o) {
                return {
                  a: e.t(n),
                  b: t,
                  c: e.n(t !== r.selectedIndex[0] ? "unselected" : ""),
                };
              }),
              c: r.indicatorStyle,
              d: r.selectedIndex,
              e: e.o(function () {
                return r.handleChange && r.handleChange.apply(r, arguments);
              }),
              f: e.o(function () {
                return r.handleConfirm && r.handleConfirm.apply(r, arguments);
              }),
              g: e.o(r.handleCancel),
              h: e.o(r.handleCancel),
              i: e.p({
                value: !0,
                title: "委托时间",
                "show-title-border-bottom": !1,
                "confirm-button": !1,
                "picker-style": !0,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-0ec6a304"],
]);
wx.createComponent(a);
