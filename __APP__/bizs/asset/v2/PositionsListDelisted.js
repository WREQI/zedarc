var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var t = require("../../../stores/app/useMode.js"),
  r = require("../../../common/vendor.js"),
  n = require("../../../utils/market.js"),
  s = require("../../../model/index/useHideFund.js"),
  i = [{ text: "退市证券" }],
  a = {
    components: {
      ListHeader: function () {
        return "../ListHeader.js";
      },
    },
    props: {
      lists: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function () {
      var a = r.getCurrentInstance().proxy,
        o = t.useModeStore(),
        d = r.storeToRefs(o).simpleMode,
        u = s.useHideFund().hidefund;
      function c(e) {
        var t = "";
        switch (e) {
          case "1":
            t = "上交所";
            break;
          case "0":
            t = "深交所";
        }
        return t;
      }
      function l(e) {
        return n.defaultMarketUtils.isTransferableDebt(e) ||
          n.defaultMarketUtils.isSpecialGovernmentDebt(e)
          ? "张"
          : "股";
      }
      return (
        r.onMounted(function () {
          a.$stat.click("trade.asset.delisted_wrap_show");
        }),
        {
          hidefund: u,
          simpleMode: d,
          fields: i,
          getStockUnit: l,
          displayItem: function (t, r) {
            a.$emit(
              "displayDelistedInfo",
              e(
                e({}, t),
                {},
                {
                  title: ""
                    .concat(t.name, "（持有")
                    .concat(t.quantity)
                    .concat(l(t.stock_cls), "）"),
                  index: r,
                }
              )
            );
          },
          getMarketText: c,
          showDetail: function (t) {
            a.$emit(
              "showDelistedInfo",
              e(
                e({}, t),
                {},
                { title: "".concat(t.name, "退市概要"), feMarket: c(t.market) }
              )
            );
          },
        }
      );
    },
  };
Array || r.resolveComponent("ListHeader")();
var o = r._export_sfc(a, [
  [
    "render",
    function (e, t, n, s, i, a) {
      return {
        a: r.p({ fields: s.fields, "header-marker": !0, border: !1 }),
        b: r.f(n.lists, function (e, t, i) {
          return r.e(
            s.hidefund
              ? {}
              : r.e(
                  {
                    a: r.t(e.name),
                    b: r.t(e.quantity),
                    c: r.t(s.getStockUnit(e.stock_cls)),
                    d: r.o(function (r) {
                      return s.displayItem(e, t);
                    }, t),
                    e: "2" === e.status,
                  },
                  "2" === e.status
                    ? {
                        f: r.t(e.delist_date),
                        g: r.t(s.getMarketText(e.market)),
                      }
                    : {
                        h: r.t(e.delist_date),
                        i: r.t(s.getMarketText(e.market)),
                      },
                  {
                    j: r.o(function (t) {
                      return s.showDetail(e);
                    }, t),
                  }
                ),
            { k: t, l: t !== n.lists.length - 1 ? 1 : "" }
          );
        }),
        c: s.hidefund,
        d: s.simpleMode ? 1 : "",
        e: s.simpleMode ? 1 : "",
      };
    },
  ],
]);
wx.createComponent(o);
