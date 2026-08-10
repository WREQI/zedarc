var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var a = require("../../../common/vendor.js");
require("../../../service/broker.js"),
  require("../../../service/sdk/lib/api.js");
var s = require("../../../service/sdk/platform/mp-weixin.js"),
  r = require("../../../service/stat/mp-weixin.js"),
  l = require("../../../config/broker/11100/index.js");
exports.useDelistedInfo = function (n) {
  var d,
    o = n.asset,
    u = n.assetFetchData,
    c = a.ref(!1),
    p = a.ref(!1),
    f = a.ref({}),
    _ = a.ref({});
  function v(e) {
    (p.value = !0),
      (_.value = e),
      r.stat.click("trade.asset.silent_delisted_detail_popup_show");
  }
  function h() {
    (c.value = !1), r.stat.click("trade.asset.delisted_detail_popup_hide");
  }
  return {
    isShowDelistedDetailPopup: c,
    isShowSilentDelistedPopup: p,
    delistedInfo: f,
    silentDelistedInfo: _,
    onShowDelistedInfo: function (e) {
      if (null == e ? void 0 : e.title) {
        var t = i(
          i({}, e),
          {},
          {
            stateList: [
              { state: "delisted", text: "退市", date: e.delist_date },
              {
                state: "2" !== e.status ? "pending" : "ok",
                text: "转板",
                date: e.neeq_list_date || "",
              },
            ],
          }
        );
        (f.value = t),
          (c.value = !0),
          r.stat.click("trade.asset.delisted_detail_popup_show");
      }
    },
    onDisplayDelistedInfo: v,
    showDelistedItemInfo: function () {
      h(), v(f.value);
    },
    handleContactBroker: function () {
      var e = "".concat(l.brokerConfig.base.tel).replace(/-/g, "");
      s.sdk.makePhoneCall(e),
        (c.value = !1),
        r.stat.click("trade.asset.delisted_detail_popup_phone_call_click");
    },
    handleHideDelistedDetailPopup: h,
    handleHideSilentDelistedItem:
      ((d = t(
        e().mark(function t() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    o.hideDelistedInfo({
                      action: "0",
                      code: _.value.code,
                      market: _.value.market,
                    })
                  );
                case 2:
                  return (
                    o.data.holdDelisted.splice(_.value.index, 1),
                    (p.value = !1),
                    (e.next = 6),
                    u.fetchData({ firstReq: !0, reload: !1 })
                  );
                case 6:
                  r.stat.click(
                    "trade.asset.silent_delisted_detail_popup_confirm"
                  );
                case 7:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )),
      function () {
        return d.apply(this, arguments);
      }),
    handleHideSilentDelistedDetailPopup: function () {
      (p.value = !1),
        r.stat.click("trade.asset.silent_delisted_detail_popup_hide");
    },
  };
};
