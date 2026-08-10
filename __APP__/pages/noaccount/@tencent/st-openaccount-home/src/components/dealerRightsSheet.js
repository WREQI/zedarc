var e = require("../../../../../../common/vendor.js"),
  t = require("../pages/pro.js"),
  n = {
    options: { styleIsolation: "shared" },
    components: {
      ActionSheet: function () {
        return "../../../../../asyncCom/@tencent/stock-ui/mp/action-sheet/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !0 },
      curBrokerItem: {
        type: Object,
        default: function () {
          return {};
        },
      },
      rightsCounts: { type: Number, default: 2 },
      btnText: { type: String, default: "" },
      title: { type: String, default: "" },
    },
    setup: function (n, r) {
      var o = r.emit,
        s = e.ref(!1),
        u = e.inject("stockBridge", {}),
        i = e.computed(function () {
          var e, t;
          return null ==
            (t = null == (e = n.curBrokerItem) ? void 0 : e.rightsSheet)
            ? void 0
            : t.filter(function (e) {
                return e.sheetIcon && e.sheetTitle && e.sheetText;
              });
        });
      return (
        e.watch(
          function () {
            return n.value;
          },
          function (e) {
            (s.value = e),
              e && u.report("trade.apply.homepage.rightdetail_show");
          }
        ),
        e.watch(
          function () {
            return s.value;
          },
          function (e) {
            o("input", e);
          }
        ),
        {
          sheetshow: s,
          rightsUsable: i,
          textColorReplace: function (e) {
            var t = new RegExp(/\$\{(.*)\}/g);
            return t.test(e)
              ? e.replace(
                  t,
                  '<span style="color: #e63535;font-weight: bolder;">$1</span>'
                )
              : e;
          },
          toApply: function () {
            u.report("trade.apply.homepage.rightdetail.openacount"),
              o("action", {
                type: t.BIZ_TYPE.APPLY,
                broker: n.curBrokerItem.code,
                statType: "rights_pop",
              });
          },
        }
      );
    },
  };
Array || e.resolveComponent("action-sheet")();
var r = e._export_sfc(n, [
  [
    "render",
    function (t, n, r, o, s, u) {
      return e.e(
        {
          a: e.f(o.rightsUsable, function (t, n, r) {
            return e.e(
              { a: t.sheetIcon, b: e.t(t.sheetTitle), c: t.sheetLabel },
              t.sheetLabel
                ? {
                    d: e.f(t.sheetLabel.split("|"), function (t, n, r) {
                      return { a: e.t(t), b: n };
                    }),
                  }
                : {},
              { e: t.sheetText },
              t.sheetText
                ? {
                    f: e.f(t.sheetText.split("|"), function (e, t, n) {
                      return { a: o.textColorReplace(e), b: t };
                    }),
                  }
                : {},
              { g: n }
            );
          }),
          b: o.sheetshow,
        },
        o.sheetshow
          ? {
              c: e.t(r.btnText),
              d: e.o(function () {
                return o.toApply && o.toApply.apply(o, arguments);
              }, 2387),
            }
          : {},
        {
          e: e.o(function (e) {
            return (o.sheetshow = e);
          }, 2388),
          f: e.p({
            value: o.sheetshow,
            title: r.title,
            "picker-style": !0,
            "close-button": !0,
            "confirm-txt": " ",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-7074e901"],
]);
wx.createComponent(r);
