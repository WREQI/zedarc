var e = require("@tencent/st-message-box/hooks/useBrokerLoad.js"),
  r = require("../../common/vendor.js"),
  n = {
    components: {
      BrokerMessage: function () {
        return "./brokerMessagePlugin.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL21lc3NhZ2Vib3gvYnJva2VyTWVzc2FnZVBsdWdpbi52dWU;
        });
      },
    },
    props: {
      brokerList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      curBrokerCode: { type: String, default: "" },
      contentHeight: { type: String, default: "565px" },
    },
    setup: function (n, t) {
      var o = t.emit,
        u = e.useCardLoad(!0),
        a = u.setCardQueue,
        c = u.notifyCurrentRender,
        s = r.ref(!1),
        i = r.ref(!1);
      return (
        r.provide("cardLoadManager", u),
        r.watch(
          function () {
            return n.brokerList;
          },
          function (e) {
            e.length > 0 &&
              !s.value &&
              ((s.value = !0),
              a(
                e.map(function (e) {
                  return e.code;
                })
              ),
              (i.value = !0));
          },
          { immediate: !0 }
        ),
        r.watch(
          function () {
            return n.curBrokerCode;
          },
          function (e, r) {
            e && r && e !== r && c(e);
          }
        ),
        {
          showBrokerList: i,
          handleStyleChange: function (e) {
            o("styleChange", e);
          },
          handlePullRefresh: function (e) {
            o("pullRefresh", e);
          },
        }
      );
    },
  };
Array || r.resolveComponent("broker-message")();
var t = r._export_sfc(n, [
  [
    "render",
    function (e, n, t, o, u, a) {
      return r.e(
        { a: o.showBrokerList },
        o.showBrokerList
          ? {
              b: r.f(t.brokerList, function (e, n, u) {
                return {
                  a: r.o(o.handleStyleChange, 1248, e.code),
                  b: r.o(o.handlePullRefresh, 1249, e.code),
                  c: "9dab287a-0-" + u,
                  d: r.p({
                    "cur-broker": e,
                    "content-height": t.contentHeight,
                  }),
                  e: e.code === t.curBrokerCode,
                  f: e.code,
                };
              }),
            }
          : {}
      );
    },
  ],
]);
wx.createComponent(t);
