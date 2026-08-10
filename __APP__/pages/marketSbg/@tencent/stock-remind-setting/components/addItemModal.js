require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  u = function (e, n, a) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[n] = a);
  },
  i = function (t, n) {
    for (var a in n || (n = {})) l.call(n, a) && u(t, a, n[a]);
    if (o) {
      var i,
        c = e(o(n));
      try {
        for (c.s(); !(i = c.n()).done; ) {
          a = i.value;
          r.call(n, a) && u(t, a, n[a]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return t;
  },
  c = function (e, t) {
    return n(e, a(t));
  },
  d = require("../../../../../common/vendor.js"),
  p = {
    props: {
      smartData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      fundNavStatus: { type: Number, default: 0 },
      showFundNav: { type: Boolean, default: !1 },
      showCje: { type: Boolean, default: !1 },
      showFund: { type: Boolean, default: !1 },
      isETF: { type: Boolean, default: !1 },
      title: { type: String, default: "选择新增提醒类型" },
    },
    setup: function (e, t) {
      var n = t.emit,
        a = d.ref([
          { name: "股价涨到", type: 1, allowDuplicate: !0 },
          { name: "股价跌到", type: 2, allowDuplicate: !0 },
          { name: "日涨幅超", type: 3, allowDuplicate: !0 },
          { name: "日跌幅超", type: 4, allowDuplicate: !0 },
          {
            name: "溢折率涨到",
            type: 15,
            allowDuplicate: !0,
            isOverflowRatio: !0,
          },
          {
            name: "溢折率跌到",
            type: 16,
            allowDuplicate: !0,
            isOverflowRatio: !0,
          },
          { name: "成交额超", type: 5, allowDuplicate: !0, isCje: !0 },
          { name: "主力资金", type: 6, allowDuplicate: !0, isFund: !0 },
          {
            name: "净值更新",
            key: "fund_nav_update",
            allowDuplicate: !1,
            isFundNav: !0,
          },
        ]),
        o = d.computed(function () {
          return a.value
            .filter(function (t) {
              return t.isFundNav
                ? e.showFundNav
                : t.isOverflowRatio
                ? e.isETF
                : t.isCje
                ? e.showCje || e.showFund
                : !t.isFund || e.showFund;
            })
            .map(function (t) {
              return t.isFundNav && [0, 1].includes(e.fundNavStatus)
                ? c(i({}, t), { disabled: !0 })
                : t;
            });
        }),
        l = function () {
          n("closeModal");
        };
      return {
        remindOptions: a,
        filteredRemindOptions: o,
        handleSelect: function (e) {
          e.disabled || (n("toggleSelect", c(i({}, e), { selected: !0 })), l());
        },
        closeModal: l,
      };
    },
  },
  s = d._export_sfc(p, [
    [
      "render",
      function (e, t, n, a, o, l) {
        return {
          a: d.t(n.title),
          b: d.o(function () {
            return a.closeModal && a.closeModal.apply(a, arguments);
          }, 2276),
          c: d.f(a.filteredRemindOptions, function (e, t, n) {
            return d.e({ a: d.t(e.name), b: e.disabled }, (e.disabled, {}), {
              c: t,
              d: e.disabled ? 1 : "",
              e: d.o(
                function (t) {
                  return a.handleSelect(e);
                },
                2277,
                t
              ),
            });
          }),
          d: d.o(function () {}, 2278),
          e: d.o(function () {}, 2279),
          f: d.o(function () {
            return a.closeModal && a.closeModal.apply(a, arguments);
          }, 2280),
        };
      },
    ],
    ["__scopeId", "data-v-84641357"],
  ]);
wx.createComponent(s);
