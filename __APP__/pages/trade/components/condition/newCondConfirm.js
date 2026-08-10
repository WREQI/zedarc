require("../../../../app.js");
var e = require("../../../../config/enum/condition.js"),
  n = require("../../../../common/vendor.js"),
  t = {
    components: {
      CondActionSheetBase: function () {
        return "../../../../components/ConfirmActionSheet/index.js";
      },
      GridItem: function () {
        return "./GridItem.js";
      },
      TPSLItem: function () {
        return "./TPSLItem.js";
      },
      LimitUpItem: function () {
        return "./LimitUpItem.js";
      },
      OpeningSellItem: function () {
        return "./OpeningSellItem.js";
      },
    },
    props: {
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
      weekHint: {
        type: Array,
        default: function () {
          return [];
        },
      },
      type: { type: String, default: e.CondTypesBackEnd.GRID },
    },
    setup: function (n, t) {
      return { emit: t.emit, CondTypesBackEnd: e.CondTypesBackEnd };
    },
  };
Array ||
  (
    n.resolveComponent("GridItem") +
    n.resolveComponent("TPSLItem") +
    n.resolveComponent("LimitUpItem") +
    n.resolveComponent("OpeningSellItem") +
    n.resolveComponent("CondActionSheetBase")
  )();
var o = n._export_sfc(t, [
  [
    "render",
    function (e, t, o, r, a, p) {
      return n.e(
        { a: o.type === r.CondTypesBackEnd.GRID },
        o.type === r.CondTypesBackEnd.GRID
          ? {
              b: n.p({
                "show-base-price-tag": !1,
                "show-arrow": !1,
                data: o.data,
              }),
            }
          : o.type === r.CondTypesBackEnd.TPSL
          ? {
              d: n.p({
                "show-base-price-tag": !1,
                "show-arrow": !1,
                data: o.data,
              }),
            }
          : o.type === r.CondTypesBackEnd.LIMIT_UP
          ? {
              f: n.p({
                "show-base-price-tag": !1,
                "show-arrow": !1,
                data: o.data,
              }),
            }
          : o.type === r.CondTypesBackEnd.OPENING_SELL
          ? {
              h: n.p({
                "show-base-price-tag": !1,
                "show-arrow": !1,
                data: o.data,
              }),
            }
          : {},
        {
          c: o.type === r.CondTypesBackEnd.TPSL,
          e: o.type === r.CondTypesBackEnd.LIMIT_UP,
          g: o.type === r.CondTypesBackEnd.OPENING_SELL,
          i: n.o(function (e) {
            return r.emit("cancel");
          }),
          j: n.o(function (e) {
            return r.emit("confirm");
          }),
          k: n.p({ title: "订单确认", tips: o.weekHint }),
        }
      );
    },
  ],
]);
wx.createComponent(o);
