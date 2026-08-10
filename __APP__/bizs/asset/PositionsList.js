require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("../../stores/app/useMode.js"),
  o = {
    components: {
      PositionsListStock: function () {
        return "./PositionsListStock.js";
      },
    },
    props: {
      controller: {
        type: Object,
        default: function () {
          return {
            allocate_debt: !0,
            stock: !0,
            debt: !0,
            balance: !0,
            outbalance: !0,
            delisted: !0,
          };
        },
      },
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isActive: { type: Boolean, default: !0 },
      isAssetIndex: { type: Boolean, default: !1 },
      useScene: { type: String, default: "" },
      currentActiveStock: {
        type: Object,
        default: function () {
          return {};
        },
      },
      embeddedMode: { type: Boolean, default: !1 },
    },
    setup: function (o) {
      var n = e.getCurrentInstance().proxy,
        a = t.useModeStore(),
        l = e.storeToRefs(a).simpleMode,
        s = e.computed(function () {
          return o.data.holdbalance.length > 0
            ? "holdbalance"
            : o.data.debt.length > 0
            ? "debt"
            : o.data.stock.length > 0
            ? "stock"
            : o.data.pzstock.length > 0
            ? "pzstock"
            : "";
        }),
        d = e.computed(function () {
          var e, t, n, a;
          return (null == (e = o.data.pzstock) ? void 0 : e.length) > 0
            ? "pzstock"
            : (null == (t = o.data.stock) ? void 0 : t.length) > 0
            ? "stock"
            : (null == (n = o.data.debt) ? void 0 : n.length) > 0
            ? "debt"
            : (null == (a = o.data.holdbalance) ? void 0 : a.length) > 0
            ? "holdbalance"
            : "";
        }),
        r = e.computed(function () {
          if (l.value) return !1;
          var e = o.data.stock.length,
            t = o.data.debt.length,
            n = o.data.holdbalance.length,
            a = o.data.holdoutbalance.length,
            s = (o.data.pzstock || []).length;
          return (
            Number(Boolean(s)) +
              Number(Boolean(e)) +
              Number(Boolean(t)) +
              Number(Boolean(n)) +
              Number(Boolean(a)) >
            1
          );
        }),
        i = e.computed(function () {
          var e = Object.keys(o.controller)
              .map(function (e) {
                if (o.controller[e]) return e;
              })
              .filter(function (e) {
                return e;
              }),
            t = 0;
          return (
            e.forEach(function (e) {
              var n,
                a,
                l = {
                  stock: "stock",
                  allocate_debt: "pzstock",
                  debt: "debt",
                  balance: "holdbalance",
                  outbalance: "holdoutbalance",
                };
              "delisted" !== e &&
                (t +=
                  (null ==
                  (a =
                    null == (n = o.data)
                      ? void 0
                      : n[null == l ? void 0 : l[e]])
                    ? void 0
                    : a.length) || 0);
            }),
            0 === t
          );
        });
      return {
        headerMarker: r,
        simpleMode: l,
        whoislast: s,
        whoisfirst: d,
        showDelistedInfo: function (e) {
          n.$emit("showDelistedInfo", e);
        },
        displayDelistedInfo: function (e) {
          n.$emit("displayDelistedInfo", e);
        },
        isEmpty: i,
      };
    },
  };
Array ||
  (e.resolveComponent("PositionsListStock") + e.resolveComponent("Empty"))(),
  Math;
var n = e._export_sfc(o, [
  [
    "render",
    function (t, o, n, a, l, s) {
      return e.e(
        { a: n.controller.stock },
        n.controller.stock
          ? {
              b: e.p({
                lists: n.data.stock,
                "header-marker": a.headerMarker,
                "is-active": n.isActive,
                last: "stock" === a.whoislast,
                first: "stock" === a.whoisfirst,
                "use-scene": n.useScene,
                "current-active-stock": n.currentActiveStock,
              }),
            }
          : {},
        { c: a.isEmpty },
        a.isEmpty
          ? {
              d: e.p({
                "bottom-border-radius": a.simpleMode,
                "custom-cls": "adapt-logo-empty ^^adapt-logo-empty",
                text: "未持有股票",
              }),
            }
          : {},
        {
          e: e.n(
            a.simpleMode
              ? "positions-list-container__simple-mode"
              : "positions-list-container__classic-mode"
          ),
          f: e.n(
            n.embeddedMode ? "positions-list-container__embedded-mode" : ""
          ),
          g: e.n(
            n.data.holdDelisted && n.data.holdDelisted.length > 0
              ? "positions-list-container__hold-delisted"
              : ""
          ),
        }
      );
    },
  ],
]);
wx.createComponent(n);
