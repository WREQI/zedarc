var e = require("../../../common/vendor.js"),
  o = require("../hooks/useMultiBrokerCardInfo.js"),
  r = {
    components: {
      BrokerLogo: function () {
        return "../../apply/components/BrokerLogo.js";
      },
    },
    setup: function () {
      var r = e.getCurrentInstance().proxy,
        n = o.useMultiBrokerCard(),
        t = n.bindingList,
        u = n.isMaintain,
        c = e.useBrokerInfo().highestPriorityDealer,
        i = void 0 === c ? {} : c,
        s = e.computed(function () {
          return t.value.filter(function (o) {
            return !u(o, e.BULLETIN_TYPE.TRADE);
          });
        }),
        a = e.computed(function () {
          return i.value.code;
        });
      function d() {
        r.$emit("return");
      }
      return {
        supportTradeList: s,
        currentBrokerCode: a,
        toggleBroker: function (e) {
          e.code === a.value ? d() : r.$emit("toggleBroker", e.code),
            r.$emit(
              "statReort",
              "trade.trade.togglebroker_switch.".concat(e.code)
            );
        },
        onClose: function () {
          r.$emit("close");
        },
        onReturn: d,
      };
    },
  };
Array || e.resolveComponent("broker-logo")();
var n = e._export_sfc(r, [
  [
    "render",
    function (o, r, n, t, u, c) {
      return {
        a: e.o(function () {
          return t.onReturn && t.onReturn.apply(t, arguments);
        }, 2013),
        b: e.o(function () {
          return t.onClose && t.onClose.apply(t, arguments);
        }, 2014),
        c: e.f(t.supportTradeList, function (o, r, n) {
          return e.e(
            {
              a: "7c9da430-0-" + n,
              b: e.p({ "broker-code": o.code }),
              c: e.t(o.name),
              d: o.code === t.currentBrokerCode,
            },
            (o.code, t.currentBrokerCode, {}),
            {
              e: r,
              f: e.o(
                function (e) {
                  return t.toggleBroker(o);
                },
                2015,
                r
              ),
            }
          );
        }),
        d: e.o(function () {}, 2016),
        e: e.o(function () {
          return t.onClose && t.onClose.apply(t, arguments);
        }, 2017),
      };
    },
  ],
]);
wx.createComponent(n);
