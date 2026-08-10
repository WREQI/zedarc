var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../../common/vendor.js"),
  t = require("../../hooks/useScroll.js"),
  n = {
    components: {
      empty: function () {
        return "../empty/index.js";
      },
    },
    props: {
      brokerList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      topWraperHeight: { type: Number, default: 162 },
    },
    setup: function (n) {
      var o = t.useTradeFunc(),
        u = o.curBrokerCode,
        i = o.curBrokerCanUse,
        c = o.setCurBrokerCode,
        a = o.setBrokerInfo,
        s = r.inject("stockBridge"),
        d = r.inject("cardLoadManager").setCardQueue,
        f = r.ref(200),
        p = r.ref("100%");
      return (
        r.watch(
          function () {
            return n.brokerList;
          },
          function (r) {
            if (r.length > 0) {
              var t = s.getSession("LAST_MESSAGE_SELECT_CODE");
              c(t || r[0].code), a(r[0]);
              var n = r.map(function (e) {
                return e.code;
              });
              t &&
                (n = [t].concat(
                  e(
                    n.filter(function (e) {
                      return e !== t;
                    })
                  )
                )),
                d(n),
                setTimeout(function () {
                  r.forEach(function (e) {
                    e.unreadNum &&
                      s.report("yy.message_box.trade_red_tab_brow", {
                        dealer_code: e.code,
                        msg_num: e.unreadNum,
                      });
                  });
                }, 300);
            }
          },
          { immediate: !0 }
        ),
        r.watch(
          [
            function () {
              return n.topWraperHeight;
            },
            function () {
              return n.brokerList;
            },
          ],
          function () {
            r.nextTick$1(function () {
              !(function () {
                if (r.StockBridge.ENV !== r.EnvTypeEnum.MP)
                  p.value = window.innerHeight - n.topWraperHeight + "px";
                else {
                  var e = (
                    (r.wx$1.getWindowInfo && r.wx$1.getWindowInfo()) ||
                    r.wx$1.getSystemInfoSync()
                  ).screenHeight;
                  p.value = e - n.topWraperHeight + "px";
                }
              })();
            });
          },
          { immediate: !0 }
        ),
        { curBrokerCode: u, curBrokerCanUse: i, contentHeight: p, tabHeight: f }
      );
    },
  };
Array || r.resolveComponent("empty")();
var o = r._export_sfc(n, [
  [
    "render",
    function (e, t, n, o, u, i) {
      return {
        a: r.r("plugin", {
          curBrokerCode: o.curBrokerCode,
          tabHeight: o.tabHeight,
          contentHeight: o.contentHeight,
        }),
        b: !o.curBrokerCanUse.status,
        c: o.contentHeight,
        d: r.p({ reason: o.curBrokerCanUse.reason }),
      };
    },
  ],
  ["__scopeId", "data-v-5c5fdf5f"],
]);
wx.createComponent(o);
