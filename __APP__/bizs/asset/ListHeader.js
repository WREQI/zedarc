var e = require("../../@babel/runtime/helpers/defineProperty");
require("../../@babel/runtime/helpers/Objectvalues"), require("../../app.js");
var r = require("../../common/vendor.js"),
  t = require("../../config/key.js"),
  o = require("../../stores/app/useMode.js"),
  n = { RESET: 0, DES: 1, ASC: 2 },
  i = {
    options: { virtualHost: !0 },
    components: {
      Sorter: function () {
        return "../../common/components/Sorter.js";
      },
    },
    props: {
      storageSortKey: { type: String, default: t.ASSET_SORT_TYPE },
      fields: {
        type: Array,
        default: function () {
          return [];
        },
      },
      sortField: { type: String, default: "" },
      sortOrder: {
        type: Number,
        default: 0,
        validator: function (e) {
          return Object.values(n).includes(e);
        },
      },
      headerMarker: { type: Boolean, default: !1 },
      border: { type: Boolean, default: !0 },
    },
    setup: function (n, i) {
      var a = r.ref(e({}, n.sortField, n.sortOrder)),
        l = o.useModeStore(),
        s = r.storeToRefs(l).simpleMode;
      return (
        r.watch(
          function () {
            return n.sortOrder;
          },
          function (r) {
            a.value = e({}, n.sortField, r);
          }
        ),
        r.watch(
          function () {
            return n.sortField;
          },
          function (r) {
            a.value = e({}, r, n.sortOrder);
          }
        ),
        {
          sorter: a,
          simpleMode: s,
          onSort: function (o) {
            if (o.sort) {
              var l = (Number(a.value[o.key] || 0) + 1) % 3;
              (a.value = e({}, o.key, l)),
                r.index.setStorageSync(n.storageSortKey || t.ASSET_SORT_TYPE, {
                  key: o.key,
                  value: l,
                }),
                i.emit("sort", o.key, l);
            } else o.explain && o.explainClickAll && i.emit("explain", o);
          },
        }
      );
    },
  };
Array || r.resolveComponent("Sorter")();
var a = r._export_sfc(i, [
  [
    "render",
    function (e, t, o, n, i, a) {
      return {
        a: r.f(o.fields, function (t, i, a) {
          return r.e(
            { a: !t.expectedIncomeAndAnnualized },
            t.expectedIncomeAndAnnualized ? {} : { b: r.t(t.text) },
            { c: t.sort },
            t.sort
              ? { d: "172d023e-0-" + a, e: r.p({ active: n.sorter[t.key] }) }
              : {},
            { f: t.explain },
            t.explain
              ? {
                  g: r.o(function (r) {
                    return e.$emit("explain", t);
                  }, i),
                }
              : {},
            {
              h: i,
              i: r.n("^col-".concat(String.fromCharCode(97 + i))),
              j: r.n("col-".concat(String.fromCharCode(97 + i))),
              k: r.n(t.sort ? "col-sortable" : ""),
              l: r.n(t.explain ? "col-explain" : ""),
              m: r.n(
                t.highlight && n.sorter[t.key]
                  ? n.simpleMode
                    ? "header-color"
                    : "primary-color"
                  : ""
              ),
              n: r.n(
                o.headerMarker && 0 === i ? "header-marker ^header-marker" : ""
              ),
              o: r.n(0 === i ? "pl-30" : ""),
              p: r.n(
                1 !== o.fields.length && i === o.fields.length - 1
                  ? "pr-30"
                  : ""
              ),
              q: t.align || "left",
              r: r.o(function (e) {
                return n.onSort(t);
              }, i),
            }
          );
        }),
        b: r.n(o.border ? "border--bottom ^border--bottom" : ""),
      };
    },
  ],
]);
wx.createComponent(a);
