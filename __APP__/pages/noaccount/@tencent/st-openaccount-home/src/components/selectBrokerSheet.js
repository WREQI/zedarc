require("../../../../../../@babel/runtime/helpers/Objectvalues");
var e = require("../pages/pro.js"),
  t = require("../../../../../../common/vendor.js"),
  n = {
    options: { styleIsolation: "shared" },
    components: {
      ActionSheet: function () {
        return "../../../../../asyncCom/@tencent/stock-ui/mp/action-sheet/index.js";
      },
    },
    props: {
      value: { type: Boolean, default: !0 },
      title: { type: String, default: "" },
      brokerList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      businessType: {
        type: String,
        validate: function (t) {
          return Object.values(e.BIZ_TYPE).includes(t);
        },
        default: e.BIZ_TYPE.APPLY,
      },
      rightShow: {
        required: !0,
        type: String,
        validate: function (t) {
          return Object.values(e.BROKER_SHEET_ICON).includes(t);
        },
        default: e.BROKER_SHEET_ICON.CHECK,
      },
      curBrokerCode: { type: [String, Number], default: "" },
    },
    setup: function (n, r) {
      var o = r.emit,
        i = t.ref(!1),
        u = t.inject("stockBridge", {}),
        a = ("mp" === u.ENV ? { IS_ZXG: !1 } : t.dist.detect().env).IS_ZXG,
        c = t.computed(function () {
          var e =
            "mp" === u.ENV
              ? { IS_WEIXIN: !1, IS_MINA: !1 }
              : t.dist.detect().env;
          e.IS_WEIXIN, e.IS_MINA;
          return "12800" == n.curBrokerCode;
        });
      return (
        t.watch(
          function () {
            return n.value;
          },
          function (e) {
            i.value = e;
          }
        ),
        t.watch(
          function () {
            return i.value;
          },
          function (t) {
            o("input", t),
              t ||
                n.businessType != e.BIZ_TYPE.APPLY ||
                u.report("trade.apply.homepage.pop_close"),
              t &&
                n.brokerList.find(function (e) {
                  return "10800" === e.code && e.showGuide;
                }) &&
                u.report("trade.guide_zhaoshang_btn_brow");
          }
        ),
        {
          BIZ_TYPE: e.BIZ_TYPE,
          BROKER_SHEET_ICON: e.BROKER_SHEET_ICON,
          onSheetBtnTap: function (e) {
            o("action", { type: n.businessType, broker: e });
          },
          sheetShow: i,
          jumpToDealerGuide: function () {
            o("jumpToDealerGuide");
          },
          isLite: !1,
          IS_ZXG: a,
          isWzqZJ: c,
        }
      );
    },
  };
Array || t.resolveComponent("action-sheet")();
var r = t._export_sfc(n, [
  [
    "render",
    function (e, n, r, o, i, u) {
      return {
        a: t.f(r.brokerList, function (e, n, i) {
          return t.e(
            {
              a: "https://st.gtimg.com/image/mp-broker/trade/broker-logo/".concat(
                e.code,
                ".svg"
              ),
              b: t.t(e.name),
              c: e.maintain,
            },
            (e.maintain, {}),
            { d: t.t(e.desc), e: e.intro && e.intro.length > 0 },
            e.intro && e.intro.length > 0
              ? {
                  f: t.f(e.intro, function (e, n, r) {
                    return { a: t.t(e), b: n };
                  }),
                }
              : {},
            { g: e.showGuide },
            e.showGuide
              ? {
                  h: t.o(
                    function () {
                      return (
                        o.jumpToDealerGuide &&
                        o.jumpToDealerGuide.apply(o, arguments)
                      );
                    },
                    2380,
                    e.code
                  ),
                }
              : r.rightShow === o.BROKER_SHEET_ICON.BUTTON
              ? {
                  i: t.t(
                    r.businessType === o.BIZ_TYPE.APPLY ? "去开户" : "登录"
                  ),
                  j: t.n("js-sheet-button-".concat(e.code)),
                  k: t.o(
                    function (t) {
                      return o.onSheetBtnTap(e.code);
                    },
                    2381,
                    e.code
                  ),
                }
              : {},
            { l: e.code }
          );
        }),
        b: r.rightShow === o.BROKER_SHEET_ICON.BUTTON,
        c: t.n(o.isLite ? "lite-mode" : ""),
        d: t.n(o.IS_ZXG ? "zxg-mode" : ""),
        e: t.n(o.isWzqZJ ? "wzqzj-mode" : ""),
        f: t.o(function (e) {
          return (o.sheetShow = e);
        }, 2382),
        g: t.p({
          value: o.sheetShow,
          title: r.title,
          "picker-style": !0,
          "confirm-txt": " ",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-06befa24"],
]);
wx.createComponent(r);
